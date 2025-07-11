#!/usr/bin/env node
const fs = require("node:fs");
const path = require("node:path");

// --- Configuration ---
const configFilePath = "./build-strategic-orchestrator.cfg.js";
let config;
try {
  config = require(configFilePath);
} catch (error) {
  console.error(
    `Error loading configuration file '${configFilePath}': ${error.message}`
  );
  if (error.code === "MODULE_NOT_FOUND") {
    console.error(
      `Ensure '${path.resolve(
        __dirname,
        configFilePath
      )}' exists and is a valid JavaScript module.`
    );
  }
  process.exit(1);
}

// --- Helper Functions ---
function getBaseFilename(filePath) {
  const filenameWithExt = path.basename(filePath);
  const lastExt = path.extname(filenameWithExt);
  if (lastExt) {
    return filenameWithExt.slice(0, -lastExt.length);
  }
  return filenameWithExt;
}

function ensureDirectoryExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function shouldExcludeDirectory(dirName, excludePatterns) {
  if (!excludePatterns || !Array.isArray(excludePatterns)) {
    return false;
  }
  
  return excludePatterns.some(pattern => {
    // Handle exact matches
    if (pattern === dirName) {
      return true;
    }
    
    // Handle wildcard patterns (basic support)
    if (pattern.includes('*')) {
      const regex = new RegExp(pattern.replace(/\*/g, '.*'));
      return regex.test(dirName);
    }
    
    return false;
  });
}

function processDirectoryWithSharding(sourceSubdirPath, subdirName, buildDir, maxFileSize) {
  const files = fs.readdirSync(sourceSubdirPath);
  if (files.length === 0) {
    console.warn(`Warning: Source directory '${sourceSubdirPath}' is empty.`);
    return;
  }

  // Create index file for sharded components
  const indexFile = path.join(buildDir, `${subdirName}-index.txt`);
  const shardsDir = path.join(buildDir, `${subdirName}-shards`);
  ensureDirectoryExists(shardsDir);

  if (fs.existsSync(indexFile)) {
    fs.unlinkSync(indexFile);
  }

  const indexEntries = [];

  for (const filenameWithExt of files) {
    const filePath = path.join(sourceSubdirPath, filenameWithExt);
    if (fs.statSync(filePath).isFile()) {
      const baseName = getBaseFilename(filenameWithExt);

      // Skip files like 'filename.ide.ext'
      if (baseName.endsWith(".ide")) {
        console.log(`  Skipping IDE-specific file: '${filenameWithExt}' in '${subdirName}'`);
        continue;
      }

      const fileContent = fs.readFileSync(filePath, "utf8");
      const shardFileName = `${subdirName}-${baseName}.txt`;
      const shardFilePath = path.join(shardsDir, shardFileName);

      console.log(`  Creating shard: '${shardFileName}' from '${filenameWithExt}'`);

      // Write individual shard file
      const startMarker = `==================== START: ${baseName} ====================\n`;
      const endMarker = `\n==================== END: ${baseName} ====================\n`;
      
      let shardContent = startMarker + fileContent;
      if (!fileContent.endsWith("\n")) {
        shardContent += "\n";
      }
      shardContent += endMarker;

      fs.writeFileSync(shardFilePath, shardContent);

      // Add to index
      const fileSize = Buffer.byteLength(shardContent, 'utf8');
      indexEntries.push({
        name: baseName,
        file: `${subdirName}-shards/${shardFileName}`,
        size: fileSize,
        description: `Component: ${baseName}`
      });
    }
  }

  // Write index file
  let indexContent = `# ${subdirName.charAt(0).toUpperCase() + subdirName.slice(1)} Components Index\n\n`;
  indexContent += `This directory has been sharded into individual component files for better agent compatibility.\n\n`;
  indexContent += `## Available Components\n\n`;
  
  for (const entry of indexEntries) {
    indexContent += `- **${entry.name}** - ${entry.description} (${entry.size} bytes)\n`;
    indexContent += `  File: \`${entry.file}\`\n\n`;
  }

  indexContent += `## Usage Instructions\n\n`;
  indexContent += `Instead of loading the entire ${subdirName}.txt file, load only the specific components you need:\n\n`;
  indexContent += `1. Review this index to identify required components\n`;
  indexContent += `2. Load individual shard files as needed\n`;
  indexContent += `3. Reference components by their file paths listed above\n`;

  fs.writeFileSync(indexFile, indexContent);
  console.log(`  Created index file: '${subdirName}-index.txt' with ${indexEntries.length} components`);
}

function shardAgentPrompt(agentPromptPath, buildDir, maxSize) {
  const content = fs.readFileSync(agentPromptPath, "utf8");
  
  // Define shard boundaries based on logical sections
  const shardDefinitions = [
    {
      name: "core-identity",
      title: "Core Agent Identity & Role",
      startMarker: "# Strategic Orchestrator Instructions",
      endMarker: "## Operational Workflow",
      description: "Essential agent identity, role definition, and core principles"
    },
    {
      name: "discovery-workflow", 
      title: "Discovery & Resource Loading",
      startMarker: "### 1. Greeting & Strategic Discovery",
      endMarker: "### 2. Framework Sequence Determination",
      description: "Discovery phase workflow and smart resource loading protocol"
    },
    {
      name: "framework-management",
      title: "Framework & Context Management", 
      startMarker: "### 2. Framework Sequence Determination",
      endMarker: "### 3. Step Selection & Strategic Persona Activation",
      description: "Framework sequence logic and strategic context brief management"
    },
    {
      name: "persona-activation",
      title: "Persona Activation & Step Management",
      startMarker: "### 3. Step Selection & Strategic Persona Activation", 
      endMarker: "### 4. Dynamic Methodology Management",
      description: "Step selection, persona activation, and step execution management"
    },
    {
      name: "dynamic-management",
      title: "Dynamic Methodology & Commands",
      startMarker: "### 4. Dynamic Methodology Management",
      endMarker: null, // End of file
      description: "Dynamic methodology management, commands, and output formatting"
    }
  ];

  const promptShardsDir = path.join(buildDir, "prompt-shards");
  ensureDirectoryExists(promptShardsDir);

  // Create index file for prompt shards
  const promptIndexFile = path.join(buildDir, "agent-prompt-index.txt");
  let indexContent = `# Agent Prompt Components Index\n\n`;
  indexContent += `The agent prompt has been sharded for ChatGPT compatibility (8KB limit).\n\n`;
  indexContent += `## Loading Protocol\n\n`;
  indexContent += `1. **Start with**: Load \`core-identity\` first (always required)\n`;
  indexContent += `2. **Phase-based loading**: Load additional components as needed:\n\n`;

  const shardInfo = [];

  // Extract and create each shard
  for (const shard of shardDefinitions) {
    let shardContent = "";
    let startIndex = content.indexOf(shard.startMarker);
    
    if (startIndex === -1) {
      console.warn(`Warning: Start marker '${shard.startMarker}' not found for shard '${shard.name}'`);
      continue;
    }

    let endIndex;
    if (shard.endMarker) {
      endIndex = content.indexOf(shard.endMarker, startIndex);
      if (endIndex === -1) {
        console.warn(`Warning: End marker '${shard.endMarker}' not found for shard '${shard.name}'`);
        endIndex = content.length;
      }
    } else {
      endIndex = content.length;
    }

    shardContent = content.substring(startIndex, endIndex).trim();
    
    const shardFileName = `agent-prompt-${shard.name}.txt`;
    const shardFilePath = path.join(promptShardsDir, shardFileName);
    
    fs.writeFileSync(shardFilePath, shardContent);
    
    const shardSize = Buffer.byteLength(shardContent, 'utf8');
    console.log(`  Created prompt shard: '${shardFileName}' (${shardSize} bytes)`);
    
    shardInfo.push({
      name: shard.name,
      title: shard.title,
      file: `prompt-shards/${shardFileName}`,
      size: shardSize,
      description: shard.description
    });
  }

  // Complete the index content
  for (const shard of shardInfo) {
    indexContent += `- **${shard.title}** (${shard.size} bytes)\n`;
    indexContent += `  File: \`${shard.file}\`\n`;
    indexContent += `  Purpose: ${shard.description}\n\n`;
  }

  indexContent += `## Usage Examples\n\n`;
  indexContent += `**Minimal Start (Discovery Only):**\n`;
  indexContent += `- Load \`core-identity\` + \`discovery-workflow\`\n\n`;
  indexContent += `**Framework Selection:**\n`;
  indexContent += `- Load \`core-identity\` + \`framework-management\`\n\n`;
  indexContent += `**Step Execution:**\n`;
  indexContent += `- Load \`core-identity\` + \`persona-activation\`\n\n`;
  indexContent += `**Full System:**\n`;
  indexContent += `- Load all components (but may exceed ChatGPT limits)\n`;

  fs.writeFileSync(promptIndexFile, indexContent);
  console.log(`  Created prompt index: 'agent-prompt-index.txt' with ${shardInfo.length} components`);

  // Create a minimal starter prompt
  const starterPromptPath = path.join(buildDir, "agent-prompt-starter.txt");
  const starterContent = shardInfo[0] ? fs.readFileSync(path.join(promptShardsDir, `agent-prompt-${shardInfo[0].name}.txt`), "utf8") : "";
  const starterWithInstructions = `${starterContent}\n\n## Next Steps\n\nThis is the minimal core identity. Load additional prompt components from the agent-prompt-index.txt as needed for your current phase:\n\n- Discovery: Load \`discovery-workflow\`\n- Framework: Load \`framework-management\`\n- Execution: Load \`persona-activation\`\n- Commands: Load \`dynamic-management\``;
  
  fs.writeFileSync(starterPromptPath, starterWithInstructions);
  console.log(`  Created starter prompt: 'agent-prompt-starter.txt' (${Buffer.byteLength(starterWithInstructions, 'utf8')} bytes)`);
}

// --- Main Script Logic ---
async function main() {
  console.log(
    `Building Strategic Orchestrator from: ${path.resolve(__dirname, configFilePath)}`
  );

  if (
    !config ||
    !config.asset_root ||
    !config.build_dir ||
    !config.orchestrator_agent_prompt ||
    !config.agent_cfg
  ) {
    console.error(
      "Error: Missing required fields (asset_root, build_dir, orchestrator_agent_prompt, agent_cfg) in configuration file."
    );
    process.exit(1);
  }

  // 1. Determine and validate asset folder root and build directory
  const assetFolderRootInput = config.asset_root;
  let assetFolderRoot;
  try {
    assetFolderRoot = path.resolve(__dirname, assetFolderRootInput);
    if (
      !fs.existsSync(assetFolderRoot) ||
      !fs.statSync(assetFolderRoot).isDirectory()
    ) {
      console.error(
        `Error: Asset folder root '${assetFolderRootInput}' (resolved to '${assetFolderRoot}') not found or not a directory.`
      );
      process.exit(1);
    }
  } catch (error) {
    console.error(
      `Error: Could not resolve asset folder root '${assetFolderRootInput}'. ${error.message}`
    );
    process.exit(1);
  }
  console.log(`Using resolved asset folder root: ${assetFolderRoot}`);

  const buildDirInput = config.build_dir;
  let buildDir;
  try {
    buildDir = path.resolve(__dirname, buildDirInput);
  } catch (error) {
    console.error(
      `Error: Could not resolve build directory '${buildDirInput}'. ${error.message}`
    );
    process.exit(1);
  }
  ensureDirectoryExists(buildDir);
  console.log(`Build directory is: ${buildDir}`);

  const buildDirNameOnly = path.basename(buildDir);

  // 2. Generate agent-prompt.txt
  const orchestratorPromptPathInput = config.orchestrator_agent_prompt;
  let orchestratorPromptPath;
  try {
    orchestratorPromptPath = path.resolve(
      __dirname,
      orchestratorPromptPathInput
    );
    if (
      !fs.existsSync(orchestratorPromptPath) ||
      !fs.statSync(orchestratorPromptPath).isFile()
    ) {
      console.error(
        `Error: Orchestrator agent prompt file '${orchestratorPromptPathInput}' (resolved to '${orchestratorPromptPath}') not found or not a file.`
      );
      process.exit(1);
    }
  } catch (error) {
    console.error(
      `Error: Could not resolve orchestrator agent prompt file '${orchestratorPromptPathInput}'. ${error.message}`
    );
    process.exit(1);
  }

  const agentPromptOutputPath = path.join(buildDir, "agent-prompt.txt");
  try {
    const promptContent = fs.readFileSync(orchestratorPromptPath, "utf8");
    fs.writeFileSync(agentPromptOutputPath, promptContent);
    console.log(`Successfully generated '${agentPromptOutputPath}'`);
  } catch (error) {
    console.error(
      `Error generating '${agentPromptOutputPath}': ${error.message}`
    );
    process.exit(1);
  }

  // 3. Copy agent configuration
  const agentConfigPathInput = config.agent_cfg;
  let agentConfigPath;
  try {
    agentConfigPath = path.resolve(__dirname, agentConfigPathInput);
    if (
      !fs.existsSync(agentConfigPath) ||
      !fs.statSync(agentConfigPath).isFile()
    ) {
      console.error(
        `Error: Agent config file '${agentConfigPathInput}' (resolved to '${agentConfigPath}') not found or not a file.`
      );
      process.exit(1);
    }
  } catch (error) {
    console.error(
      `Error: Could not resolve agent config file '${agentConfigPathInput}'. ${error.message}`
    );
    process.exit(1);
  }

  const agentConfigOutputPath = path.join(buildDir, "agent-config.txt");
  try {
    const configContent = fs.readFileSync(agentConfigPath, "utf8");
    fs.writeFileSync(agentConfigOutputPath, configContent);
    console.log(`Successfully copied agent configuration to '${agentConfigOutputPath}'`);
  } catch (error) {
    console.error(
      `Error copying agent configuration to '${agentConfigOutputPath}': ${error.message}`
    );
    process.exit(1);
  }

  // 3.5. Handle agent prompt sharding if enabled
  const enablePromptSharding = config.sharding?.shard_agent_prompt;
  const promptMaxSize = config.sharding?.prompt_max_size || 8000; // 8KB default for ChatGPT

  if (enablePromptSharding) {
    console.log("Agent prompt sharding enabled - creating sharded prompt files");
    shardAgentPrompt(agentPromptOutputPath, buildDir, promptMaxSize);
  }

  // 4. Discover and process subdirectories
  console.log(`Discovering source directories in '${assetFolderRoot}' (excluding '${buildDirNameOnly}')...`);
  let sourceSubdirNames;
  try {
    const allDirs = fs
      .readdirSync(assetFolderRoot, { withFileTypes: true })
      .filter((dirent) => dirent.isDirectory() && dirent.name !== buildDirNameOnly)
      .map((dirent) => dirent.name);
    
    // Apply exclude patterns from config
    const excludePatterns = config.exclude_patterns || [];
    
    sourceSubdirNames = allDirs.filter(dirName => {
      const shouldExclude = shouldExcludeDirectory(dirName, excludePatterns);
      if (shouldExclude) {
        console.log(`  Excluding directory: '${dirName}' (matches exclude pattern)`);
      }
      return !shouldExclude;
    });
    
  } catch (error) {
    console.error(
      `Error reading asset folder root '${assetFolderRoot}': ${error.message}`
    );
    process.exit(1);
  }

  if (sourceSubdirNames.length === 0) {
    console.warn(
      `Warning: No source subdirectories found in '${assetFolderRoot}' (excluding '${buildDirNameOnly}' and excluded patterns). No asset bundles will be created.`
    );
  } else {
    console.log(
      `Found source directories to process: ${sourceSubdirNames.join(", ")}`
    );
    
    const excludePatterns = config.exclude_patterns || [];
    if (excludePatterns.length > 0) {
      console.log(`Excluding patterns: ${excludePatterns.join(", ")}`);
    }
  }

  // 5. Process each subdirectory
  for (const subdirName of sourceSubdirNames) {
    const sourceSubdirPath = path.join(assetFolderRoot, subdirName);
    
    // Check if sharding is enabled for this directory
    const enableSharding = config.sharding?.enabled && 
                          config.sharding?.directories?.includes(subdirName);
    const maxFileSize = config.sharding?.max_file_size || 100000; // 100KB default

    if (enableSharding) {
      console.log(`Processing '${subdirName}' directory with SHARDING enabled`);
      processDirectoryWithSharding(sourceSubdirPath, subdirName, buildDir, maxFileSize);
    } else {
      const outputFilename = `${subdirName}.txt`;
      const targetFile = path.join(buildDir, outputFilename);

      console.log(`Processing '${subdirName}' directory into '${targetFile}'`);

      if (fs.existsSync(targetFile)) {
        fs.unlinkSync(targetFile);
      }
      fs.writeFileSync(targetFile, "");

      const files = fs.readdirSync(sourceSubdirPath);
      if (files.length === 0) {
        console.warn(
          `Warning: Source directory '${sourceSubdirPath}' is empty. '${targetFile}' will remain empty.`
        );
        continue;
      }

      for (const filenameWithExt of files) {
        const filePath = path.join(sourceSubdirPath, filenameWithExt);
        if (fs.statSync(filePath).isFile()) {
          const baseName = getBaseFilename(filenameWithExt);

          // Skip files like 'filename.ide.ext'
          if (baseName.endsWith(".ide")) {
            console.log(
              `  Skipping IDE-specific file: '${filenameWithExt}' in '${subdirName}'`
            );
            continue;
          }

          console.log(
            `  Appending content from '${filenameWithExt}' (as '${baseName}') to '${targetFile}'`
          );

          const fileContent = fs.readFileSync(filePath, "utf8");

          const startMarker = `==================== START: ${baseName} ====================\n`;
          const endMarker = `\n==================== END: ${baseName} ====================\n\n`;

          fs.appendFileSync(targetFile, startMarker);
          fs.appendFileSync(targetFile, fileContent);
          if (!fileContent.endsWith("\n")) {
            fs.appendFileSync(targetFile, "\n");
          }
          fs.appendFileSync(targetFile, endMarker);
        }
      }
      console.log(`Finished processing '${subdirName}'.`);
    }
  }

  console.log(`\nStrategic Orchestrator build complete! Output files are in ${buildDir}`);
  console.log(`To run this script: node ${path.relative(path.resolve(__dirname, "."), __filename)}`);
}

main().catch((error) => {
  console.error("An unexpected error occurred:", error);
  process.exit(1);
});