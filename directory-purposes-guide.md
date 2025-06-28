# Strategic Orchestrator Directory Purposes

## Clear Separation of Concerns

### **Tasks Directory (`tasks/`)**

**Purpose:** Executable instruction sets and workflows for agents to follow

**Contains:**

- **`7-step-strategic-methodology.md`** - Complete workflow guide for strategic work
- **`context-assessment-framework.md`** - Conceptual framework for understanding context dimensions  
- **`adaptive-inquiry-logic.md`** - Natural conversation workflow for discovery process

**Usage:** These files provide "how to do" instructions that agents execute to complete work.

---

### **Checklists Directory (`checklists/`)**

**Purpose:** Validation and quality assurance tools for completed work

**Contains:**

- **`strategic-discovery-checklist.md`** - Readiness validation for transitioning from discovery to strategic work

**Usage:** These files provide "how to validate" criteria that agents use to assess completion and quality.

---

### **Templates Directory (`templates/`)**

**Purpose:** Document structure templates for consistent outputs

**Contains:**

- **`strategic-brief-tmpl.md`** - Complete strategic brief template
- **`strategic-context-brief.md`** - Discovery handoff document template

**Usage:** These files provide document structures that agents populate with specific content.

---

### **Personas Directory (`personas/`)**

**Purpose:** Agent personality definitions and core behavioral instructions

**Contains:** Individual persona files that define agent roles, principles, and startup instructions.

**Usage:** These files transform the orchestrator into specialized strategic agents.

---

### **Data Directory (`data/`)**

**Purpose:** Knowledge base and reference materials for strategic work

**Contains:**

- **`strategic-kb.md`** - Main knowledge base
- **`strategic-frameworks.md`** - Strategic frameworks library
- **`strategic-patterns.md`** - Examples and case studies

**Usage:** These files provide strategic knowledge that informs agent decision-making.

---

## Key Principle: No Duplication

Each file has **one clear purpose** and lives in **one directory only**:

✅ **Process instructions** → `tasks/`  
✅ **Validation criteria** → `checklists/`  
✅ **Document templates** → `templates/`  
✅ **Agent definitions** → `personas/`  
✅ **Strategic knowledge** → `data/`  

This organization ensures:

- **Clear responsibility boundaries** between different types of content
- **Easy maintenance** with no duplicate content to keep in sync
- **Logical file location** based on purpose and usage
