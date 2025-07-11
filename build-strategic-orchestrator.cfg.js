// build-strategic-orchestrator.cfg.js
// Configuration for the STRATEGIST-AGENT-V2 strategic orchestrator build script

// === REQUIRED: Basic Configuration ===

// === Core Web Configuration Files ===
// Uncomment and modify paths if building WEB version instead of IDE version
// export const orchestrator_agent_prompt = "./web-strategic-orchestrator-agent.md";
// export const agent_cfg = "./web-strategic-orchestrator-agent.cfg.md";

// === Build IDE Configuration ===
export const orchestrator_agent_prompt = "./ide-strategic-orchestrator.md";
export const agent_cfg = "./ide-strategic-orchestrator.cfg.md";

// === Build Configuration ===
export const asset_root = "./";
export const build_dir = "./build-strategic-orchestrator/";

// === Exclude Patterns for Directories and Files ===
export const exclude_patterns = [
  "*.ide.*",           // IDE-specific variants
  "README.md",         // Documentation files
  "*.cfg.*",           // Configuration files
  "build-*",           // Build system files
  ".gitignore",        // Git ignore file
  "project-documents", // Project documents directory
  "research",          // Research directory
  ".git",              // Git directory
  "node_modules",      // Node modules
  "temp",              // Temporary files
  "working-files"      // Working files directory
];

// === Sharding Configuration (Optional) ===
export const sharding = {
  enabled: true,               // Set to true to enable sharding
  max_file_size: 100000,       // Maximum file size in bytes (100KB default)
  directories: ["data", "tasks", "templates"],  // Directories to shard when enabled
  create_index: true,          // Create index files for sharded directories
  shard_agent_prompt: true,   // Set to true to shard the agent-prompt.txt file
  prompt_max_size: 8000        // Maximum prompt size for ChatGPT compatibility (8KB)
};

// === Enhanced Configuration (Optional) ===
export const build_config = {
  project_name: "STRATEGIST-AGENT-V2",
  version: "2.0.0",
  description: "Advanced AI strategic thinking orchestrator with intelligent module selection",
  
  // Expected directories to process (will be filtered by exclude_patterns)
  expected_directories: [
    "personas",      // Strategic agent personas
    "tasks",         // Executable workflows and frameworks  
    "templates",     // Document structure templates
    "checklists",    // Quality validation criteria
    "data"           // Knowledge base and module integration logic
  ],
  
  // Critical files that must exist for proper operation
  required_files: [
    "data/strategic-kb.md",
    "personas/strategic-orchestrator.md"
  ]
};