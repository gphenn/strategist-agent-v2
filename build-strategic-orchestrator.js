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

  console.log(`\nStrategic Orchestrator build complete! Output files are in ${buildDir}`);
  console.log(`To run this script: node ${path.relative(path.resolve(__dirname, "."), __filename)}`);
}

main().catch((error) => {
  console.error("An unexpected error occurred:", error);
  process.exit(1);
});