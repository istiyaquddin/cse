/**
 * C PROGRAMMING MIDTERM HANDBOOK - COMPLETE DATA REPOSITORY
 * University-Grade Documentation, 34 Syllabus Topics, 50 Practice Bank, 30 MCQs
 * Output Prediction Lab, Debugging Lab, Flowchart Bank, Algorithm Patterns, Theory Q&A, and Quick Revision
 */

const HandbookData = {
  "chapters": [
    {
      "id": 1,
      "name": "1. Fundamentals of Computer and C",
      "short": "Fundamentals"
    },
    {
      "id": 2,
      "name": "2. Operators, Input and Output",
      "short": "Operators & I/O"
    },
    {
      "id": 3,
      "name": "3. Control Statements",
      "short": "Control Statements"
    }
  ],
  "syllabus": [
    {
      "id": "ch1_1",
      "chapterId": 1,
      "number": 1,
      "title": "Basic organization of computer",
      "badge": "Hardware & Architecture",
      "readingTime": "10 min read",
      "overview": "<p>A <strong>computer</strong> is an electronic, programmable data-processing machine that accepts raw data as <strong>Input</strong>, processes it under stored program instructions in the <strong>Central Processing Unit (CPU)</strong>, stores intermediate and final results in <strong>Memory</strong>, and generates meaningful information as <strong>Output</strong>.</p><p>In modern computer science, this foundational model is known as the <strong>Von Neumann Architecture</strong> (proposed by John von Neumann in 1945). It is characterized by a shared physical memory space that stores both program instructions (code) and operational data.</p><p>When you write and run a C program, you are directly manipulating physical hardware: transistors switch states, bits move across copper bus lines, CPU registers hold temporary operands, and volatile RAM holds your variables.</p>",
      "deepDive": "<p>The computer consists of five essential functional subsystems connected by the <strong>System Bus</strong>:</p><ul><li><strong>1. Input Unit:</strong> Converts human-understandable information into binary electrical signals (<code>0</code>s and <code>1</code>s) using transducers. (Keyboard, Mouse, Scanner).</li><li><strong>2. Arithmetic Logic Unit (ALU):</strong> The computational engine of the CPU. It executes mathematical operations (<code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>) and relational/logical comparisons (<code>==</code>, <code>!=</code>, <code>&lt;</code>, <code>&gt;</code>, <code>&amp;&amp;</code>, <code>||</code>).</li><li><strong>3. Control Unit (CU):</strong> The supervisor or conductor of the computer. It fetches instructions sequentially from memory, decodes what operation must occur, and issues micro-timed electrical signals to the ALU, RAM, and I/O devices.</li><li><strong>4. CPU Registers:</strong> High-speed internal memory cells located directly on the CPU silicon chip operating at CPU clock frequency (sub-nanosecond access). Examples: <em>Program Counter (PC)</em> holding the address of the next instruction, <em>Instruction Register (IR)</em> holding the current instruction, and the <em>Accumulator (ACC)</em>.</li><li><strong>5. Memory Unit (Primary vs Secondary):</strong><ul><li><strong>Primary Memory (RAM):</strong> High-speed volatile semiconductor memory directly accessible by the CPU via address and data buses. Loses all data on power interruption.</li><li><strong>Secondary Storage (SSD/HDD):</strong> High-capacity non-volatile magnetic or flash storage. CPU cannot execute code directly from storage; the OS must first load it into RAM.</li></ul></li></ul>",
      "techTable": "<table class='doc-table'><thead><tr><th>Parameter</th><th>Primary Memory (RAM)</th><th>Secondary Storage (SSD/HDD)</th></tr></thead><tbody><tr><td><strong>Speed</strong></td><td>Extremely fast (10-50 nanoseconds)</td><td>Slow to moderate (microseconds to milliseconds)</td></tr><tr><td><strong>Volatility</strong></td><td>Volatile (Erased upon power off)</td><td>Non-volatile (Persists permanently)</td></tr><tr><td><strong>Direct CPU Access</strong></td><td>Yes, directly via system bus</td><td>No, must be loaded into RAM by OS first</td></tr><tr><td><strong>Capacity & Cost</strong></td><td>Moderate (8 GB - 64 GB), High cost/GB</td><td>Massive (512 GB - 4 TB), Low cost/GB</td></tr><tr><td><strong>Typical Content</strong></td><td>Running OS kernel, active C program stack/heap</td><td>Saved source files (.c), compiled binaries (.exe)</td></tr></tbody></table>",
      "diagram": "+-------------------------------------------------------------------------+\n|                         VON NEUMANN ARCHITECTURE                        |\n|                                                                         |\n|  +--------------------+        CONTROL BUS         +-----------------+  |\n|  |                    |===========================>|                 |  |\n|  |                    |        ADDRESS BUS         |                 |  |\n|  |                    |===========================>|                 |  |\n|  |                    |         DATA BUS           |                 |  |\n|  |                    |<==========================>|                 |  |\n|  |     INPUT UNIT     |                            |   OUTPUT UNIT   |  |\n|  |  (Keyboard, Mouse) |    CENTRAL PROCESSING UNIT | (Monitor, Print)|  |\n|  |         |          |             (CPU)          |        ^        |  |\n|  |         +--------->|  +-----------------------+ |--------+        |  |\n|  |                    |  | Control Unit (CU)     | |                 |  |\n|  |                    |  +-----------------------+ |                 |  |\n|  |                    |  | Arithmetic Logic Unit | |                 |  |\n|  |                    |  | (ALU)                 | |                 |  |\n|  |                    |  +-----------------------+ |                 |  |\n|  |                    |  | Registers (PC, IR, ACC| |                 |  |\n|  |                    |  +-----------------------+ |                 |  |\n|  +--------------------+              ^             +-----------------+  |\n|                                      |                                  |\n|                                      v                                  |\n|                        +---------------------------+                    |\n|                        |   PRIMARY MEMORY (RAM)    |                    |\n|                        |  [Instructions & Data]    |                    |\n|                        +---------------------------+                    |\n|                                      ^                                  |\n|                                      | (Load / Store)                   |\n|                                      v                                  |\n|                        +---------------------------+                    |\n|                        |     SECONDARY STORAGE     |                    |\n|                        |     (SSD / HDD / NVMe)    |                    |\n|                        +---------------------------+                    |\n+-------------------------------------------------------------------------+",
      "code": "#include <stdio.h>\n\nint main(void) {\n    int a = 15;\n    int b = 25;\n    int sum = a + b;\n    printf(\"Sum = %d\\n\", sum);\n    printf(\"RAM Memory Address of 'sum': %p\\n\", (void*)&sum);\n    return 0;\n}",
      "output": "Sum = 40\nRAM Memory Address of 'sum': 0x7ffd9a5b3fec",
      "codeExplanation": "Demonstrates the complete Von Neumann execution cycle: Variables 'a' and 'b' reside in RAM. The Control Unit directs the CPU to fetch them into registers, the ALU computes the sum (40), stores the result back in RAM, and sends it to the Output device (stdout console).",
      "examTraps": "In midterm exams, students often confuse CPU Registers with RAM. Remember: Registers are INSIDE the CPU chip and operate at clock speed; RAM is external memory connected via the system bus. Also remember that the CPU cannot directly run code from an SSD/HDD without loading it into RAM first!",
      "practiceProblems": [
        {
          "problemId": "1.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Draw from memory the block diagram of a digital computer showing Input Unit, CPU (ALU, CU, Registers), Primary Memory, Secondary Storage, and Output Unit."
        },
        {
          "problemId": "1.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "State the primary function of the Arithmetic Logic Unit (ALU) and list 3 arithmetic and 3 logical operations it handles."
        },
        {
          "problemId": "1.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Explain what the Control Unit (CU) does and why it is nicknamed the \"police officer\" of the CPU."
        },
        {
          "problemId": "1.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Define Primary Memory (RAM) and Secondary Memory (SSD/HDD) and state which is volatile and which is non-volatile."
        },
        {
          "problemId": "1.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Describe the simple 3-stage computational cycle: Input $\\to$ Processing $\\to$ Output using a real-world microwave oven example."
        },
        {
          "problemId": "1.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Compare RAM and ROM across four parameters: Volatility, Writeability, Speed, and typical contents."
        },
        {
          "problemId": "1.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Why does a computer need high-speed CPU Registers if it already has 16 GB of RAM?"
        },
        {
          "problemId": "1.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "What is the Program Counter (PC) register and what happens to its value after an instruction is fetched?"
        },
        {
          "problemId": "1.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Differentiate between the Data Bus, Address Bus, and Control Bus in terms of directional flow (unidirectional vs bidirectional)."
        },
        {
          "problemId": "1.10",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "If a CPU has a 32-bit address bus, calculate the maximum bytes of RAM it can physically address."
        },
        {
          "problemId": "1.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Trace the 4 stages of the CPU Instruction Execution Cycle (Fetch $\\to$ Decode $\\to$ Execute $\\to$ Store/Writeback) for the C instruction `sum = a + b;`."
        },
        {
          "problemId": "1.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Explain the Memory Hierarchy pyramid from fastest/smallest to slowest/largest (Registers $\\to$ Cache $\\to$ RAM $\\to$ SSD $\\to$ Magnetic Tape)."
        },
        {
          "problemId": "1.13",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What is a Cache Hit and Cache Miss, and how does sequential array access in C benefit from CPU caching?"
        },
        {
          "problemId": "1.14",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What is the difference between Von Neumann Architecture (shared instruction/data memory) and Harvard Architecture (separate memories)?"
        },
        {
          "problemId": "1.15",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Explain what happens in physical hardware when you turn off a computer while an unsaved document is open in RAM."
        },
        {
          "problemId": "1.16",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "\"RAM is volatile, yet essential for program execution.\" Justify why the CPU cannot execute programs directly from secondary storage (SSD/Hard disk)."
        },
        {
          "problemId": "1.17",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Write a detailed comparative note on System Bus Architecture, explaining how word size (32-bit vs 64-bit) impacts ALU throughput."
        },
        {
          "problemId": "1.18",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Draw the internal register organization of a CPU showing MAR, MBR, PC, IR, and Accumulator, tracing data movement during a memory read."
        },
        {
          "problemId": "1.19",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "A memory chip is organized as $64\\text{K} \\times 8\\text{ bits}$. How many address lines and data lines are required to interface this chip?"
        },
        {
          "problemId": "1.20",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Explain the phenomenon of \"Von Neumann Bottleneck\" and how modern multi-level CPU caches (L1, L2, L3) mitigate it."
        }
      ],
      "objective": "Understand the Von Neumann computer model and how CPU registers, ALU, CU, and RAM physically execute C programs.",
      "whatIsIt": "A computer is an electronic, programmable data-processing machine that reads inputs, processes them via CPU instructions, holds data in memory, and outputs results.",
      "keyConcept": [
        "The CPU contains the ALU (calculations), Control Unit (instruction conductor), and Registers (sub-nanosecond internal storage).",
        "Primary Memory (RAM) is volatile and directly bus-connected to the CPU; Secondary Storage (SSD/HDD) is non-volatile and must be loaded into RAM before execution.",
        "In C, declaring variables directly allocates physical bytes on the RAM stack memory space."
      ],
      "ruleFormula": "Von Neumann Architecture: Stored-Program Principle\nSingle shared physical memory space holds both program instructions (code) and runtime data.",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    int a = 15, b = 25;\n    int sum = a + b;\n    printf(\"Sum = %d\\n\", sum);\n    printf(\"Address in RAM: %p\\n\", (void*)&sum);\n    return 0;\n}",
      "exampleOutput": "Sum = 40\nAddress in RAM: 0x7ffd9a5b3fec",
      "commonMistake": {
        "trap": "Confusing CPU Registers with RAM, or assuming the CPU can directly run code from an SSD/HDD.",
        "why": "Registers live directly on the CPU silicon chip and operate at clock speed; RAM is connected via external system buses. Storage code must always be copied to RAM first.",
        "fix": "Remember: Storage (SSD) \u2794 Loaded to RAM \u2794 Loaded into CPU Registers \u2794 Executed by ALU."
      },
      "memoryTrick": "F-D-E: Fetch instruction from RAM \u2794 Decode with Control Unit \u2794 Execute in ALU.",
      "practiceQuestion": {
        "q": "Why does a CPU need internal registers if a computer already has 16 GB of fast RAM?",
        "hint": "Focus on bus latency and CPU clock frequency: RAM access takes ~50 nanoseconds, while registers take under 1 nanosecond (zero-wait-state)."
      }
    },
    {
      "id": "ch1_2",
      "chapterId": 1,
      "number": 2,
      "title": "Definition of software",
      "badge": "Software Foundations",
      "readingTime": "8 min read",
      "overview": "<p><strong>Software</strong> is a comprehensive collection of computer programs, procedures, rules, and associated documentation that instructs computer hardware what operations to perform, how to perform them, and in what exact sequence.</p><p>While computer <strong>Hardware</strong> consists of tangible physical electronic circuits, silicon microprocessors, and mechanical drives, <strong>Software</strong> represents the intangible logical intelligence. Hardware without software is inert silicon and plastic; software without hardware is abstract mathematics with no execution medium.</p>",
      "deepDive": "<p>A software program fundamentally consists of two components:</p><ol><li><strong>Instructions (Code):</strong> Ordered imperative commands (opcodes) that tell the CPU which mathematical and control flow operations to carry out.</li><li><strong>Data:</strong> The operands, constants, text characters, and numbers that the instructions read, manipulate, transform, and write.</li></ol><p>Software does not wear out mechanically like physical machines. Instead, software undergoes logical degradation known as <em>software rot</em> (bugs, security vulnerabilities, or obsolescence against changing hardware interfaces).</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Characteristic</th><th>Hardware</th><th>Software</th></tr></thead><tbody><tr><td><strong>Nature</strong></td><td>Physical, tangible (can be touched)</td><td>Logical, intangible (encoded in bits)</td></tr><tr><td><strong>Creation Process</strong></td><td>Manufactured in silicon foundries/factories</td><td>Engineered and programmed by human developers</td></tr><tr><td><strong>Wear and Tear</strong></td><td>Wears out mechanically and thermally over time</td><td>Does not wear out; deteriorates due to unmaintained bugs</td></tr><tr><td><strong>Fault Repair</strong></td><td>Requires physical component replacement</td><td>Requires debugging, patching, and recompilation</td></tr><tr><td><strong>Replication Cost</strong></td><td>Expensive (materials, assembly, shipping)</td><td>Near zero cost (instant digital copy)</td></tr></tbody></table>\n\n<div class=\"doc-table-wrapper\">\n<table class=\"doc-table\">\n<thead><tr><th>Parameter</th><th>Hardware</th><th>Software</th></tr></thead>\n<tbody>\n<tr><td><strong>Nature</strong></td><td>Physical electronic circuits and components</td><td>Logical sets of programs, opcodes, and data</td></tr>\n<tr><td><strong>Manufacturing</strong></td><td>Fabricated in semiconductor silicon foundries</td><td>Engineered and written by programmers</td></tr>\n<tr><td><strong>Wear and Tear</strong></td><td>Subject to physical, thermal, and mechanical fatigue</td><td>Does not wear out physically; degrades through logic rot/bugs</td></tr>\n<tr><td><strong>Modification</strong></td><td>Difficult or impossible after fabrication</td><td>Easily updated, patched, and recompiled</td></tr>\n<tr><td><strong>Execution</strong></td><td>The physical medium that switches electrical states</td><td>The instructions guiding which states to switch</td></tr>\n</tbody>\n</table>\n</div>\n",
      "diagram": "+-------------------------------------------------------------------------+\n|                  THE COMPLETE COMPUTATIONAL ECOSYSTEM                   |\n|                                                                         |\n|    +---------------------------------------------------------------+    |\n|    |                             USER                              |    |\n|    +-------------------------------+-------------------------------+    |\n|                                    | (Interacts via UI)                 |\n|                                    v                                    |\n|    +---------------------------------------------------------------+    |\n|    |                      APPLICATION SOFTWARE                     |    |\n|    |           (Chrome, VS Code, Video Games, C Programs)          |    |\n|    +-------------------------------+-------------------------------+    |\n|                                    | (System Calls)                     |\n|                                    v                                    |\n|    +---------------------------------------------------------------+    |\n|    |                        SYSTEM SOFTWARE                        |    |\n|    |         (Operating System Kernel, Device Drivers, GCC)        |    |\n|    +-------------------------------+-------------------------------+    |\n|                                    | (Machine Instructions)             |\n|                                    v                                    |\n|    +---------------------------------------------------------------+    |\n|    |                       PHYSICAL HARDWARE                       |    |\n|    |            (CPU Transistors, RAM, SSD, GPU, Network)          |    |\n|    +-------------------------------+-------------------------------+    |\n+-------------------------------------------------------------------------+",
      "code": "#include <stdio.h>\n\nint main(void) {\n    const char *message = \"Software brings hardware to life!\";\n    printf(\"%s\\n\", message);\n    return 0;\n}",
      "output": "Software brings hardware to life!",
      "codeExplanation": "The C compiler transforms your source code software into an executable binary file (.exe). When launched, the operating system copies this software into RAM and the CPU executes its instructions line-by-line.",
      "examTraps": "A common exam mistake is classifying Firmware as Hardware. Firmware is actually software that is permanently programmed into non-volatile read-only memory (ROM/Flash) on a hardware device (like your motherboard BIOS or microwave microcontroller).",
      "practiceProblems": [
        {
          "problemId": "2.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Give the formal definition of Software and identify its two fundamental components (Instructions + Data)."
        },
        {
          "problemId": "2.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "List 5 distinct examples of software you interact with daily."
        },
        {
          "problemId": "2.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "In the equation $\\text{Computer System} = \\text{Hardware} + \\text{Software} + \\text{User}$, explain why hardware alone is useless."
        },
        {
          "problemId": "2.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "What is Firmware? Give one common hardware component that contains firmware."
        },
        {
          "problemId": "2.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Is a C source code file (`main.c`) considered software? What about the compiled binary (`main.exe`)?"
        },
        {
          "problemId": "2.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Distinguish between Hardware and Software on 5 criteria: Tangibility, Manufacturing, Wear-and-tear, Repair method, and Duplication cost."
        },
        {
          "problemId": "2.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Explain why software does not follow the traditional mechanical wear-out failure curve (The \"Bathtub Curve\")."
        },
        {
          "problemId": "2.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Can software exist without physical hardware? Explain why or why not."
        },
        {
          "problemId": "2.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "What is the difference between an algorithm written on paper and executable software?"
        },
        {
          "problemId": "2.10",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Differentiate between Source Code, Object Code, and Executable Code."
        },
        {
          "problemId": "2.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Explain how the BIOS/UEFI firmware initializes hardware during boot before handing control to the Operating System software."
        },
        {
          "problemId": "2.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Explain the concept of Software Portability: why can the same C source code run on an Intel x86 CPU and an Apple ARM CPU?"
        },
        {
          "problemId": "2.13",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "\"Hardware is the body; software is the mind.\" Elaborate this analogy in the context of computer engineering."
        },
        {
          "problemId": "2.14",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Classify each into Hardware, Software, or Firmware: Keyboard, Windows 11, Motherboard BIOS, GCC Compiler, GPU Driver, Mouse Microcontroller program."
        },
        {
          "problemId": "2.15",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Explain how software virtualization (VirtualBox/VMware) allows software to emulate physical computer hardware inside another operating system."
        }
      ],
      "objective": "Distinguish between tangible computer hardware and intangible software programs and data.",
      "whatIsIt": "Software is a collection of computer programs, procedures, rules, and data that directs computer hardware exactly what actions to execute.",
      "keyConcept": [
        "Hardware is the tangible physical execution medium (silicon, copper, power supplies).",
        "Software is the logical intelligence consisting of instructions (opcodes) and data operands.",
        "Software does not wear out physically like machines; it deteriorates through logical bugs, security flaws, and interface obsolescence."
      ],
      "ruleFormula": "Program = Data Structures + Algorithms\nSoftware = Programs + Configuration + Documentation + Operating Procedures",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    const char *status = \"Software instructs hardware!\";\n    printf(\"%s\\n\", status);\n    return 0;\n}",
      "exampleOutput": "Software instructs hardware!",
      "commonMistake": {
        "trap": "Classifying Firmware (like BIOS/UEFI) as Hardware because it comes pre-installed in the motherboard.",
        "why": "Firmware is software permanently stored inside non-volatile Read-Only Memory (ROM) chips.",
        "fix": "If it is encoded in binary bits (0s and 1s) to guide instructions, it is software."
      },
      "memoryTrick": "Hardware is what you can kick; Software is what you can only curse at.",
      "practiceQuestion": {
        "q": "State two fundamental differences between software and hardware regarding reproduction and wear-and-tear.",
        "hint": "Hardware requires physical materials and wears out thermally/mechanically; software copies digitally at zero marginal cost and suffers logical bugs rather than friction."
      }
    },
    {
      "id": "ch1_3",
      "chapterId": 1,
      "number": 3,
      "title": "Classification of software",
      "badge": "Systems & Applications",
      "readingTime": "9 min read",
      "overview": "<p>Computer software is broadly divided into two primary classifications: <strong>System Software</strong> and <strong>Application Software</strong>, with specialized subcategories including <strong>Utility Programs</strong> and <strong>Device Drivers</strong>.</p><p>Understanding this distinction is vital for C programmers because C was specifically designed as a systems programming language to construct operating systems, compilers, and hardware drivers.</p>",
      "deepDive": "<h3>1. System Software</h3><p>System Software manages, monitors, and controls the internal operations of computer hardware and provides a stable execution environment for application software. It is hardware-dependent and operates with high privileges.</p><ul><li><strong>Operating Systems (OS):</strong> Windows, Linux, macOS, UNIX. Coordinates CPU scheduling, RAM allocation, file systems, and hardware security.</li><li><strong>Language Translators:</strong> Compilers (GCC, Clang), Interpreters (Python), Assemblers.</li><li><strong>Device Drivers:</strong> Bridges communication between OS and physical hardware peripherals (GPU, printer).</li><li><strong>Utilities:</strong> Disk defragmenters, disk cleanup, antivirus.</li></ul><h3>2. Application Software</h3><p>Application Software is written to perform specific productivity, business, scientific, or entertainment tasks directly for the end user.</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Parameter</th><th>System Software</th><th>Application Software</th></tr></thead><tbody><tr><td><strong>Purpose</strong></td><td>Controls hardware & provides execution platform</td><td>Solves specific user tasks and business problems</td></tr><tr><td><strong>Proximity to Hardware</strong></td><td>Very close; interacts directly with CPU/RAM registers</td><td>Far; insulated from hardware by OS system calls</td></tr><tr><td><strong>Programming Language</strong></td><td>Built with low-level/middle-level languages (C, C++, Assembly)</td><td>Built with high-level languages (Java, Python, C#, JS)</td></tr><tr><td><strong>User Interaction</strong></td><td>Background operation; rarely interacts directly with user</td><td>Foreground operation; direct graphical or console UI</td></tr><tr><td><strong>Dependency</strong></td><td>Can run independently of application software</td><td>Cannot run without underlying system software (OS)</td></tr></tbody></table>\n\n<div class=\"doc-table-wrapper\">\n<table class=\"doc-table\">\n<thead><tr><th>Feature</th><th>System Software</th><th>Application Software</th></tr></thead>\n<tbody>\n<tr><td><strong>Primary Function</strong></td><td>Manages hardware, memory, and execution runtime</td><td>Solves specific user, productivity, or business tasks</td></tr>\n<tr><td><strong>Hardware Access</strong></td><td>Direct access to CPU registers, interrupts, and I/O ports</td><td>Restricted access via operating system system calls</td></tr>\n<tr><td><strong>Examples</strong></td><td>Operating Systems (Linux, Windows), Compilers (GCC), Drivers</td><td>Web browsers, VS Code, Spreadsheets, Games</td></tr>\n<tr><td><strong>Language Used</strong></td><td>Low/Middle-level languages (C, C++, Assembly)</td><td>High-level languages (C, Python, Java, JavaScript)</td></tr>\n<tr><td><strong>Execution Mode</strong></td><td>Kernel mode / Privileged supervisor mode</td><td>User space / Unprivileged mode</td></tr>\n</tbody>\n</table>\n</div>\n",
      "diagram": "                      CLASSIFICATION OF SOFTWARE\n                                  |\n        +-------------------------+-------------------------+\n        |                                                   |\n  SYSTEM SOFTWARE                                   APPLICATION SOFTWARE\n        |                                                   |\n  +-----+-----+-----+                                 +-----+-----+\n  |     |     |     |                                 |           |\n  OS   COMP  UTIL  DRIVERS                         GENERAL    CUSTOMIZED\n(Linux)(GCC) (Defrag)(GPU)                        (Browser)   (Banking)",
      "code": "#include <stdio.h>\n\nint main(void) {\n    printf(\"Application -> System Software -> Hardware display!\\n\");\n    return 0;\n}",
      "output": "Application -> System Software -> Hardware display!",
      "codeExplanation": "Every time your C program prints text or reads a keyboard key, it requests assistance from System Software through standard library system call interfaces.",
      "examTraps": "A classic midterm exam trap: 'Is the GCC compiler System Software or Application Software?' GCC is SYSTEM SOFTWARE because it is a developer tool that translates code into machine language for the CPU, even though it runs as an executable program.",
      "practiceProblems": [
        {
          "problemId": "3.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Define System Software in one clear sentence and give 3 examples."
        },
        {
          "problemId": "3.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Define Application Software in one clear sentence and give 3 examples."
        },
        {
          "problemId": "3.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "What is Utility Software? Give 2 examples (e.g., Disk Defragmenter, Antivirus)."
        },
        {
          "problemId": "3.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "State whether each is System or Application software: Linux, MS Word, GCC Compiler, WhatsApp, Realtek Sound Driver, VLC Player."
        },
        {
          "problemId": "3.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "What is the primary role of an Operating System?"
        },
        {
          "problemId": "3.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Create a comprehensive comparison table between System Software and Application Software covering Purpose, Hardware Proximity, Execution Mode (Kernel vs User), and Independence."
        },
        {
          "problemId": "3.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "What is a Device Driver? Why do you need a specific driver for your Nvidia graphics card?"
        },
        {
          "problemId": "3.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Explain the difference between General-Purpose Application Software (e.g., Google Chrome) and Customized/Bespoke Application Software (e.g., an ATM banking system)."
        },
        {
          "problemId": "3.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "What is the role of Language Translators in system software?"
        },
        {
          "problemId": "3.10",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Why does application software crash without taking down the entire computer operating system in modern OS?"
        },
        {
          "problemId": "3.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Differentiate between a Compiler, an Interpreter, and an Assembler with respect to translation timing and execution speed."
        },
        {
          "problemId": "3.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What is the role of the Linker and Loader in the software execution lifecycle?"
        },
        {
          "problemId": "3.13",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Explain why C is predominantly used to author System Software (OS kernels, device drivers) rather than languages like Python or Java."
        },
        {
          "problemId": "3.14",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Draw a layered diagram illustrating the relationship between End User, Application Software, System Software (OS), and Computer Hardware."
        },
        {
          "problemId": "3.15",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "\"A compiler is system software, but a word processor is application software.\" Detail three technical reasons why a compiler is categorized under system software."
        },
        {
          "problemId": "3.16",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Describe what happens at the hardware privilege level (Ring 0 Kernel Mode vs Ring 3 User Mode) when a C program invokes `printf()`."
        }
      ],
      "objective": "Classify software into System Software vs Application Software and identify C's architectural domain.",
      "whatIsIt": "System Software controls and manages hardware resources; Application Software solves specific user productivity, calculation, or entertainment problems.",
      "keyConcept": [
        "System Software (OS kernels, compilers, device drivers) operates at low levels with high hardware privileges.",
        "Application Software (web browsers, media players, word processors) runs on top of the OS via system call APIs.",
        "The C language was engineered specifically as a systems language to build the UNIX Operating System and GCC compilers."
      ],
      "ruleFormula": "Hierarchy:\nUser \u2794 Application Software \u2794 System Software (OS & Drivers) \u2794 Physical Hardware",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    printf(\"C connects application logic to operating system services!\\n\");\n    return 0;\n}",
      "exampleOutput": "C connects application logic to operating system services!",
      "commonMistake": {
        "trap": "Calling GCC (the C compiler) an Application Program because the programmer downloads and runs it.",
        "why": "GCC is System Software: it is a developer tool and language translator translating source code into machine opcodes for hardware.",
        "fix": "System Software includes Operating Systems, Compilers/Assemblers, Device Drivers, and System Utilities."
      },
      "memoryTrick": "S-O-C-D: System Software = OS + Compilers + Drivers + Utilities.",
      "practiceQuestion": {
        "q": "Under which software classification does a device driver fall, and why can it not be written in pure high-level Python?",
        "hint": "Device drivers are System Software that must directly access physical hardware I/O ports and interrupt vectors with deterministic microsecond latency, requiring C or Assembly."
      }
    },
    {
      "id": "ch1_4",
      "chapterId": 1,
      "number": 4,
      "title": "Problem solving steps",
      "badge": "Engineering Methodology",
      "readingTime": "11 min read",
      "overview": "<p>Programming is not merely typing syntax; programming is <strong>systematic problem solving</strong>. To convert an ambiguous real-world human problem into a correct, efficient C program, software engineers follow the <strong>Software Development Life Cycle (SDLC)</strong> problem-solving steps.</p><p>Rushing directly to the keyboard to write C code before designing algorithms is the number one cause of bugs, infinite loops, and failed programming exams.</p>",
      "deepDive": "<p>The 6 mandatory problem-solving steps are executed in strict chronological order:</p><ol><li><strong>1. Problem Definition / Specification:</strong> Clearly understand what is given, what is missing, and what constraints exist.</li><li><strong>2. Problem Analysis:</strong> Determine equations, inputs required, outputs expected, and memory data types needed.</li><li><strong>3. Algorithm Design:</strong> Write a finite sequence of step-by-step unambiguous English instructions.</li><li><strong>4. Flowcharting:</strong> Draw a visual ANSI flowchart representing the algorithm with geometric decision diamonds and process rectangles.</li><li><strong>5. Coding & Implementation:</strong> Translate algorithm into syntactically valid C language statements.</li><li><strong>6. Testing & Debugging:</strong> Compile with GCC, trace on paper, and eliminate syntax errors, runtime crashes, and logical bugs.</li></ol>",
      "techTable": "<table class='doc-table'><thead><tr><th>Step</th><th>Name</th><th>Deliverable / Action</th><th>Midterm Focus</th></tr></thead><tbody><tr><td>1</td><td>Problem Definition</td><td>Requirements statement</td><td>Identify constraints</td></tr><tr><td>2</td><td>Analysis</td><td>Formulas, Input/Output variables</td><td>Select correct data types</td></tr><tr><td>3</td><td>Algorithm Design</td><td>Pseudocode / Step 1..N steps</td><td>Must be finite and unambiguous</td></tr><tr><td>4</td><td>Flowcharting</td><td>ANSI standard diagram</td><td>Diamond = Decision; Rect = Process</td></tr><tr><td>5</td><td>Coding</td><td>Valid .c source code</td><td>Strict C syntax & format specifiers</td></tr><tr><td>6</td><td>Testing/Debugging</td><td>Test table & dry run verification</td><td>Trace on paper with sample numbers</td></tr></tbody></table>",
      "diagram": "+-------------------------------------------------------------------------+\n|                  THE 6 PROBLEM-SOLVING ENGINEERING STEPS                 |\n|                                                                         |\n|  [Step 1: Problem Definition]                                           |\n|               |                                                         |\n|               v                                                         |\n|  [Step 2: Problem Analysis] --------> (Identify Inputs, Outputs, Types) |\n|               |                                                         |\n|               v                                                         |\n|  [Step 3: Algorithm Design] --------> (Step-by-step Plain English Logic)|\n|               |                                                         |\n|               v                                                         |\n|  [Step 4: Flowchart Drawing] -------> (ANSI Geometric Symbol Diagram)   |\n|               |                                                         |\n|               v                                                         |\n|  [Step 5: Coding in C] -------------> (Compile with GCC: Source Code)   |\n|               |                                                         |\n|               v                                                         |\n|  [Step 6: Testing & Debugging] -----> (Dry Run Table on Paper)          |\n+-------------------------------------------------------------------------+",
      "code": "#include <stdio.h>\n\nint main(void) {\n    float principal = 10000.0f;\n    float rate = 7.5f;\n    float time = 3.0f;\n    float simple_interest = (principal * rate * time) / 100.0f;\n    float total_amount = principal + simple_interest;\n    \n    printf(\"Principal       : $%.2f\\n\", principal);\n    printf(\"Simple Interest : $%.2f\\n\", simple_interest);\n    printf(\"Total Balance   : $%.2f\\n\", total_amount);\n    return 0;\n}",
      "output": "Principal       : $10000.00\nSimple Interest : $2250.00\nTotal Balance   : $12250.00",
      "codeExplanation": "By completing Step 2 (Analysis) before coding, we recognized that dividing by 100 must be floating point division (100.0f) rather than integer division, preventing truncation to 0.",
      "examTraps": "In exams, when asked to write an Algorithm, students frequently write C code! Remember: An algorithm is PLAIN ENGLISH pseudocode (e.g. 'Step 1: Read a and b', 'Step 2: Calculate sum = a + b', 'Step 3: Display sum'). Do NOT write #include or semicolons in an algorithm question.",
      "practiceProblems": [
        {
          "problemId": "4.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write the step-by-step algorithm to calculate the sum of two numbers. - *Input:* Two integers $A$ and $B$. - *Output:* Sum. - *Concept:* Sequential input $\\to$ addition $\\to$ output."
        },
        {
          "problemId": "4.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write the step-by-step algorithm to calculate the area of a rectangle. - *Input:* Length $L$ and Width $W$. - *Output:* Area ($L \\times W$)."
        },
        {
          "problemId": "4.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write the algorithm to compute the average of 3 numbers. - *Input:* $n_1, n_2, n_3$. - *Output:* Average = $(n_1 + n_2 + n_3) / 3$."
        },
        {
          "problemId": "4.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write the algorithm to convert temperature from Celsius to Fahrenheit ($F = C \\times 9/5 + 32$)."
        },
        {
          "problemId": "4.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write the algorithm to calculate Simple Interest ($\\text{SI} = P \\times R \\times T / 100$)."
        },
        {
          "problemId": "4.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write the algorithm to determine whether a given number is Even or Odd using remainder division."
        },
        {
          "problemId": "4.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write the algorithm to determine whether an entered number is Positive, Negative, or Zero."
        },
        {
          "problemId": "4.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write the algorithm to find the largest of two numbers."
        },
        {
          "problemId": "4.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write the algorithm to check if a person is eligible to vote (Age $\\ge 18$)."
        },
        {
          "problemId": "4.10",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write the algorithm to swap two numbers using a temporary third variable."
        },
        {
          "problemId": "4.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Write the algorithm to find the largest among three distinct numbers $A, B, C$."
        },
        {
          "problemId": "4.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Write the algorithm to swap two numbers WITHOUT using any third variable."
        },
        {
          "problemId": "4.13",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Write the algorithm to print numbers from 1 to $N$ using a counter loop."
        },
        {
          "problemId": "4.14",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Write the algorithm to calculate the sum of first $N$ natural numbers ($1 + 2 + \\dots + N$)."
        },
        {
          "problemId": "4.15",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Write the algorithm to calculate the Factorial of a number $N! = 1 \\times 2 \\times \\dots \\times N$."
        },
        {
          "problemId": "4.16",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Write the algorithm to test whether a given positive integer $N$ is a **Prime Number**."
        },
        {
          "problemId": "4.17",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Write the algorithm to reverse the digits of a given integer (e.g., $123 \\to 321$)."
        },
        {
          "problemId": "4.18",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Write the algorithm to determine whether an integer is a **Palindrome** (reads same forwards and backwards)."
        },
        {
          "problemId": "4.19",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Write the algorithm to assign academic grades based on marks: $\\ge 80 \\implies A, \\ge 60 \\implies B, \\ge 40 \\implies C, < 40 \\implies F$."
        },
        {
          "problemId": "4.20",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Write the algorithm to check if an entered 3-digit number is an **Armstrong Number** ($153 = 1^3 + 5^3 + 3^3$)."
        },
        {
          "problemId": "4.21",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Write the algorithm to generate the first $N$ terms of the **Fibonacci Series** ($0, 1, 1, 2, 3, 5, 8, \\dots$)."
        }
      ],
      "objective": "Master the 6-stage engineering lifecycle to solve programming problems systematically before coding.",
      "whatIsIt": "The problem-solving methodology is an ordered engineering process to analyze, design, diagram, code, and verify software solutions.",
      "keyConcept": [
        "Rushing directly to write C code without problem analysis is the primary cause of logic bugs and failed exams.",
        "The 6 steps are: Definition \u2794 Analysis (Inputs/Outputs) \u2794 Algorithm (Plain English) \u2794 Flowchart \u2794 Coding in C \u2794 Testing/Dry Run.",
        "An algorithm must be finite, unambiguous, deterministic, and language-independent."
      ],
      "ruleFormula": "The 6-Step Pipeline:\n1. Define \u2794 2. Analyze (I/O) \u2794 3. Algorithm \u2794 4. Flowchart \u2794 5. C Code \u2794 6. Dry Run & Debug",
      "exampleCode": "#include <stdio.h>\n\n// Step 5: C Implementation after analyzing Simple Interest = (P * R * T) / 100\nint main(void) {\n    float p = 5000.0f, r = 8.5f, t = 2.0f;\n    float interest = (p * r * t) / 100.0f; // Floating-point division\n    printf(\"Simple Interest = $%.2f\\n\", interest);\n    return 0;\n}",
      "exampleOutput": "Simple Interest = $850.00",
      "commonMistake": {
        "trap": "Writing C syntax (like `#include`, `scanf`, or `;`) when asked to write an Algorithm in an exam.",
        "why": "An algorithm is human-readable logic in plain English pseudocode, not code in a specific programming language.",
        "fix": "Always write: 'Step 1: Start', 'Step 2: Read P, R, T', 'Step 3: Calculate SI = (P*R*T)/100', 'Step 4: Display SI', 'Step 5: Stop'."
      },
      "memoryTrick": "D-A-A-F-C-T: Define, Analyze, Algorithm, Flowchart, Code, Test.",
      "practiceQuestion": {
        "q": "Write a 5-step plain English algorithm to calculate the average of three numbers.",
        "hint": "Step 1: Start \u2794 Step 2: Read A, B, C \u2794 Step 3: Compute Sum = A + B + C \u2794 Step 4: Compute Avg = Sum / 3.0 \u2794 Step 5: Display Avg \u2794 Step 6: Stop."
      }
    },
    {
      "id": "ch1_5",
      "chapterId": 1,
      "number": 5,
      "title": "Flow charts",
      "badge": "Visual Logic Design",
      "readingTime": "11 min read",
      "overview": "<p>A <strong>flowchart</strong> is a standardized graphical diagram that illustrates the sequential steps, decisions, and loop iterations of an algorithm using standard geometric ANSI symbols connected by directional flow arrows.</p><p>Flowcharts allow programmers to visualize logical branches (<code>if-else</code>) and cycles (<code>while</code>, <code>for</code>) before typing code, making it easy to identify infinite loops and dead logic paths.</p>",
      "deepDive": "<p>The 5 fundamental ANSI standard flowchart symbols used in university exams:</p><ul><li><strong>1. Terminal (Oval / Rounded Rectangle):</strong> Represents START and STOP (or END) of the program.</li><li><strong>2. Input / Output (Parallelogram):</strong> Represents reading data (scanf) or displaying data (printf).</li><li><strong>3. Process (Rectangle):</strong> Represents arithmetic computations and variable assignments.</li><li><strong>4. Decision (Rhombus / Diamond):</strong> Represents a logical conditional test (e.g. a > b?). Has one entry and two labeled exits: <strong>TRUE (YES)</strong> and <strong>FALSE (NO)</strong>.</li><li><strong>5. Flowline (Arrows):</strong> Indicates the direction of execution control flow.</li></ul>",
      "techTable": "<table class='doc-table'><thead><tr><th>ANSI Symbol Shape</th><th>Name</th><th>Purpose in C Programming</th><th>C Syntax Equivalent</th></tr></thead><tbody><tr><td>Oval / Pill</td><td>Terminal</td><td>Start / End of program execution</td><td><code>main() { ... return 0; }</code></td></tr><tr><td>Parallelogram</td><td>Input / Output</td><td>Read keyboard input or print to screen</td><td><code>scanf()</code>, <code>printf()</code></td></tr><tr><td>Rectangle</td><td>Processing</td><td>Arithmetic calculations & assignments</td><td><code>x = a + b;</code>, <code>i++;</code></td></tr><tr><td>Diamond</td><td>Decision</td><td>Conditional branching (True / False)</td><td><code>if (x &gt; 0)</code>, <code>while (i &lt;= 10)</code></td></tr><tr><td>Arrow</td><td>Flowline</td><td>Direction of control flow</td><td>Next instruction execution</td></tr></tbody></table>",
      "diagram": "+-------------------------------------------------------------------------+\n|                  SAMPLE FLOWCHART: EVEN / ODD DECISION                  |\n|                                                                         |\n|                              /-----------\\                              |\n|                             (    START    )  <-- Terminal               |\n|                              \\-----+-----/                              |\n|                                    |                                    |\n|                                    v                                    |\n|                                /-------/                                |\n|                               / READ N/      <-- Input/Output           |\n|                              /-------/                                  |\n|                                  |                                      |\n|                                  v                                      |\n|                                 / \\                                     |\n|                               /     \\   YES                             |\n|                             < N%2==0 >-------> /--------------/         |\n|                               \\     /         / PRINT \"EVEN\" /          |\n|                                 \\ /          /--------------/           |\n|                                  |                   |                  |\n|                               NO |                   |                  |\n|                                  v                   |                  |\n|                          /-------------/             |                  |\n|                         / PRINT \"ODD\" /              |                  |\n|                        /-------------/               |                  |\n|                               |                      |                  |\n|                               +----------+-----------+                  |\n|                                          |                              |\n|                                          v                              |\n|                                    /-----------\\                        |\n|                                   (    STOP     )                       |\n|                                    \\-----------/                        |\n+-------------------------------------------------------------------------+",
      "code": "#include <stdio.h>\n\nint main(void) {\n    int n = 28;\n    if (n % 2 == 0) {\n        printf(\"%d is EVEN\\n\", n);\n    } else {\n        printf(\"%d is ODD\\n\", n);\n    }\n    return 0;\n}",
      "output": "28 is EVEN",
      "codeExplanation": "Every element in the C program has a 1-to-1 mapping to the flowchart: scanf is the input parallelogram, if (n % 2 == 0) is the diamond, each printf is an output parallelogram, and return 0 is the terminal stop.",
      "examTraps": "In exam flowcharts, the most frequent error is omitting the 'True' and 'False' labels on the diamond decision exits! A diamond without labels is meaningless because the grader cannot tell which path runs when the condition is satisfied.",
      "practiceProblems": [
        {
          "level": "Level 1: Foundational Flowcharting",
          "levelClass": "diff-very-basic",
          "statement": "Draw an ANSI-compliant flowchart to read two integers A and B, determine the larger number, and display it. If both numbers are equal, display 'Both are Equal'.",
          "input": "A = 45, B = 20",
          "output": "Largest = 45",
          "concept": "Decision diamond branching with 3-way conditional outcome",
          "hint": "Start with Terminal oval. Draw Parallelogram (Read A, B). First Decision Diamond: (A == B)? If True -> Print 'Both are Equal' -> Stop. If False -> Second Decision Diamond: (A > B)? If True -> Print A; If False -> Print B. Reconnect flowlines to Stop."
        },
        {
          "level": "Level 2: Loop Iteration Flowchart",
          "levelClass": "diff-basic",
          "statement": "Construct a flowchart to calculate the sum of the first N natural numbers (1 + 2 + ... + N) using an initialization rectangle, a counter variable i, an accumulator sum, and a loopback flowline.",
          "input": "N = 5",
          "output": "Sum = 15",
          "concept": "Loopback cycle and iteration condition diamond",
          "hint": "Terminal Start -> Read N -> Process (sum = 0, i = 1) -> Decision Diamond (i <= N). If YES: Process (sum = sum + i, i = i + 1) and draw a flowline pointing BACK to the top of the Decision Diamond. If NO: Parallelogram (Print sum) -> Terminal Stop."
        },
        {
          "level": "Level 3: Midterm Trace Drill",
          "levelClass": "diff-exam",
          "statement": "Trace the execution path of the Even/Odd decision flowchart for negative integers: N = -6 and N = 0. Write the corresponding C condition and verify whether N % 2 == 0 handles negative numbers accurately under C99.",
          "input": "N = -6",
          "output": "-6 is EVEN",
          "concept": "Flowchart boundary execution and C99 modulo behavior on negatives",
          "hint": "Under C99, -6 % 2 produces exactly 0. The condition (-6 % 2 == 0) evaluates to True (1). For N = 0, 0 % 2 is 0 (True). Both take the YES branch to print 'EVEN'."
        },
        {
          "problemId": "5.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Draw a flowchart to add two numbers entered by the user."
        },
        {
          "problemId": "5.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Draw a flowchart to calculate the perimeter and area of a rectangle."
        },
        {
          "problemId": "5.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Draw a flowchart to find the area and circumference of a circle ($A = \\pi r^2, C = 2\\pi r$)."
        },
        {
          "problemId": "5.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Draw a flowchart to calculate the average of three exam marks."
        },
        {
          "problemId": "5.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Draw a flowchart to convert temperature from Fahrenheit to Celsius."
        },
        {
          "problemId": "5.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Draw a flowchart to check whether a number is Even or Odd."
        },
        {
          "problemId": "5.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Draw a flowchart to determine if a number is Positive or Negative."
        },
        {
          "problemId": "5.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Draw a flowchart to find the larger of two numbers."
        },
        {
          "problemId": "5.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Draw a flowchart to check whether a student has Passed (marks $\\ge 40$) or Failed."
        },
        {
          "problemId": "5.10",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Draw a flowchart to check if a year is a Leap Year."
        },
        {
          "problemId": "5.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Draw a flowchart to find the largest of three numbers using nested decision diamonds."
        },
        {
          "problemId": "5.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Draw a flowchart to assign letter grades based on percentage."
        },
        {
          "problemId": "5.13",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Draw a flowchart to print numbers from 1 to 10 using a loop back-arrow."
        },
        {
          "problemId": "5.14",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Draw a flowchart to compute the sum of numbers from 1 to $N$."
        },
        {
          "problemId": "5.15",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Draw a flowchart to calculate the Factorial of a number $N$."
        },
        {
          "problemId": "5.16",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Draw a complete flowchart to determine whether a given integer $N$ is Prime."
        },
        {
          "problemId": "5.17",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Draw a flowchart to extract and sum the individual digits of a number (e.g., $452 \\implies 4+5+2 = 11$)."
        },
        {
          "problemId": "5.18",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Draw a flowchart to reverse an integer."
        },
        {
          "problemId": "5.19",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Draw a flowchart to find the Greatest Common Divisor (GCD) of two numbers using Euclid's subtraction method."
        },
        {
          "problemId": "5.20",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Draw a flowchart to generate the Fibonacci sequence up to $N$ terms."
        }
      ],
      "objective": "Draw and interpret flowcharts using the 5 standard ANSI geometric shapes for conditional and loop algorithms.",
      "whatIsIt": "A flowchart is a standardized visual diagram illustrating the sequential control flow, decisions, and repetitions of an algorithm.",
      "keyConcept": [
        "Oval / Rounded Pill = Terminal (START / STOP).",
        "Parallelogram = Input / Output (`scanf`, `printf`).",
        "Rectangle = Process (arithmetic calculations, assignments); Diamond = Decision with 2 exits (TRUE / FALSE)."
      ],
      "ruleFormula": "ANSI Flowchart Symbol Mapping:\nOval: Start/Stop | Parallelogram: Input/Output | Rectangle: Process | Diamond: Decision (True/False)",
      "exampleCode": "#include <stdio.h>\n\n// Matches Flowchart: Check Even/Odd\nint main(void) {\n    int n = 17;\n    if (n % 2 == 0) {\n        printf(\"%d is EVEN\\n\", n);\n    } else {\n        printf(\"%d is ODD\\n\", n);\n    }\n    return 0;\n}",
      "exampleOutput": "17 is ODD",
      "commonMistake": {
        "trap": "Drawing a decision diamond with only one exit arrow or without labeling 'YES/TRUE' and 'NO/FALSE'.",
        "why": "A decision diamond tests a condition; the program cannot know where to proceed if branch outcomes are unlabeled.",
        "fix": "Always draw two distinct outgoing arrows from every diamond: one labeled 'Yes' (True) and one 'No' (False)."
      },
      "memoryTrick": "O-P-R-D: Oval (Start/End), Parallelogram (I/O), Rectangle (Math), Diamond (Decision).",
      "practiceQuestion": {
        "q": "Which flowchart symbol is used for `x = a + b` versus `if (x > 10)`?",
        "hint": "`x = a + b` is an assignment process (Rectangle); `if (x > 10)` is a conditional test (Diamond)."
      }
    },
    {
      "id": "ch1_6",
      "chapterId": 1,
      "number": 6,
      "title": "Introduction of C - history and characteristics",
      "badge": "Language Foundations",
      "readingTime": "12 min read",
      "overview": "<p>The <strong>C programming language</strong> was developed between 1969 and 1972 by computer scientist <strong>Dennis Ritchie</strong> at Bell Telephone Laboratories (New Jersey) on a DEC PDP-11 computer to implement the <strong>UNIX Operating System</strong>.</p><p>Today, C remains the foundation of systems software: Linux kernel, Windows NT, Git, PostgreSQL, and Python runtimes are implemented in C.</p>",
      "deepDive": "<h3>Why C is a Middle-Level Language</h3><ul><li><strong>High-Level:</strong> Structured control flow (if-else, while, for), typed variables, modular functions.</li><li><strong>Low-Level:</strong> Direct raw pointer memory access, bitwise manipulation, zero runtime overhead.</li></ul><h3>The 4-Stage Compilation Pipeline</h3><p>Preprocessing (<code>.c</code> to <code>.i</code>) -> Compilation (<code>.i</code> to <code>.s</code> assembly) -> Assembly (<code>.s</code> to <code>.o</code> object) -> Linking (<code>.o + libc</code> to <code>.exe</code> executable).</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Stage</th><th>Tool</th><th>Input</th><th>Output</th><th>Action</th></tr></thead><tbody><tr><td>1. Preprocessor</td><td><code>cpp</code></td><td><code>main.c</code></td><td><code>main.i</code></td><td>Expands #include, #define, removes comments</td></tr><tr><td>2. Compiler</td><td><code>cc1</code></td><td><code>main.i</code></td><td><code>main.s</code></td><td>Translates C to CPU Assembly language</td></tr><tr><td>3. Assembler</td><td><code>as</code></td><td><code>main.s</code></td><td><code>main.o</code></td><td>Converts assembly to machine binary</td></tr><tr><td>4. Linker</td><td><code>ld</code></td><td><code>main.o + libc</code></td><td><code>main.exe</code></td><td>Resolves symbols & produces standalone executable</td></tr></tbody></table>",
      "diagram": "[ main.c ] ---> (Preprocessor: cpp) ---> [ main.i ]\n                    |\n                    v\n             (Compiler: cc1)       ---> [ main.s (Assembly) ]\n                    |\n                    v\n             (Assembler: as)       ---> [ main.o (Object) ]\n                    |\n                    v\n             (Linker: ld) + libc   ---> [ main.exe (Executable) ]",
      "code": "#include <stdio.h>\n\nint main(void) {\n    int var = 42;\n    int *ptr = &var;\n    printf(\"Value: %d, Address: %p\\n\", var, (void*)ptr);\n    return 0;\n}",
      "output": "Value: 42, Address: 0x7ffd9a5b3fec",
      "codeExplanation": "Shows middle-level balance: readable high-level variable alongside low-level memory pointer inspection.",
      "examTraps": "Writing 'void main()' is non-standard and rejected by modern compilers. Always write 'int main(void)' and 'return 0;'.",
      "practiceProblems": [
        {
          "problemId": "6.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Who developed the C programming language, in which year, and at which laboratory?"
        },
        {
          "problemId": "6.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Which famous operating system was rewritten in C in 1973?"
        },
        {
          "problemId": "6.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write from memory the minimal valid C program that compiles and exits cleanly."
        },
        {
          "problemId": "6.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "What does `#include <stdio.h>` do in a C program?"
        },
        {
          "problemId": "6.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Why is the `main()` function mandatory in every C executable?"
        },
        {
          "problemId": "6.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Explain the significance of `return 0;` at the end of `main()`. What does `0` signify to the OS?"
        },
        {
          "problemId": "6.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Why is C classified as a \"Middle-Level Language\"? Give two low-level and two high-level features."
        },
        {
          "problemId": "6.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Explain what is meant by \"Portability\" in C. What part is portable (source code) and what part is machine-specific (executable)?"
        },
        {
          "problemId": "6.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "What is the difference between single-line comments `//` and multi-line comments `/* ... */`? When were single-line comments officially standardized?"
        },
        {
          "problemId": "6.10",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Why is C case-sensitive? What happens if you type `Void Main()` instead of `int main(void)`?"
        },
        {
          "problemId": "6.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Trace the 4 stages of the C compilation pipeline: Preprocessor $\\to$ Compiler $\\to$ Assembler $\\to$ Linker, listing input and output file extensions (`.c` $\\to$ `.i` $\\to$ `.s` $\\to$ `.o` $\\to$ `.exe`)."
        },
        {
          "problemId": "6.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What is the exact task of the Preprocessor? List 3 things it removes or expands."
        },
        {
          "problemId": "6.13",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What is the task of the Linker? What error occurs if you call `printf` without linking the standard runtime?"
        },
        {
          "problemId": "6.14",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Contrast K&R C, ANSI C (C89), and C99 standards."
        },
        {
          "problemId": "6.15",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "\"C is a structured, modular language.\" Explain this statement using functions and block scope `{}`."
        },
        {
          "problemId": "6.16",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Write a complete C program that prints: ```text \"Welcome to C Programming!\" C is fast, portable, and powerful. Path: C:\\Users\\Student\\main.c ``` *(Tests escape sequences `\\\"`, `\\n`, and `\\\\`).*"
        },
        {
          "problemId": "6.17",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Execute the GCC compiler manually from the terminal generating each intermediate file: - Preprocessed: `gcc -E main.c -o main.i` - Assembly: `gcc -S main.c -o main.s` - Object: `gcc -c main.c -o main.o` - Executable: `gcc main.o -o main.exe` Explain what changes occurred in file size between `main.c` and `main.i`."
        }
      ],
      "objective": "Understand the origin, evolution, and core architectural characteristics of C as a structured middle-level language.",
      "whatIsIt": "C is a general-purpose, procedural, structured programming language developed in 1972 by Dennis Ritchie at Bell Laboratories.",
      "keyConcept": [
        "C is termed a 'Middle-Level Language' because it combines high-level structured syntax with low-level direct memory/hardware control.",
        "C programs are compiled into native machine code (no heavy virtual machine runtime), offering unmatched execution speed.",
        "C is case-sensitive, modular (functions), portable across hardware architectures, and foundational to OS design."
      ],
      "ruleFormula": "C Language Heritage:\nALGOL 60 (1960) \u2794 CPL (1963) \u2794 BCPL (1967) \u2794 B Language (1970) \u2794 C Language (1972, Dennis Ritchie)",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    printf(\"C was created in 1972 at Bell Labs by Dennis Ritchie.\\n\");\n    return 0;\n}",
      "exampleOutput": "C was created in 1972 at Bell Labs by Dennis Ritchie.",
      "commonMistake": {
        "trap": "Claiming C is an 'Object-Oriented Language' or a 'Low-Level Language'.",
        "why": "C lacks classes, inheritance, and polymorphism (it is Procedural/Structured). It is classified as Middle-Level or High-Level, not Low-Level (which is Assembly/Binary).",
        "fix": "C is a Procedural, Structured, Middle-Level compiled programming language."
      },
      "memoryTrick": "1972 - Bell Labs - Dennis Ritchie - Structured & Fast.",
      "practiceQuestion": {
        "q": "Why is C often referred to as a 'Middle-Level' programming language?",
        "hint": "Because it blends high-level abstractions (data types, loops, functions) with low-level capabilities (pointers, bit manipulation, direct memory addressing)."
      }
    },
    {
      "id": "ch1_7",
      "chapterId": 1,
      "number": 7,
      "title": "Identifiers",
      "badge": "Naming Rules",
      "readingTime": "9 min read",
      "overview": "<p>An <strong>identifier</strong> is a user-defined name given to program entities such as variables, functions, and arrays.</p>",
      "deepDive": "<p><strong>Rules for Valid Identifiers:</strong> 1. Allowed: A-Z, a-z, 0-9, _. 2. First character MUST be a letter or underscore. 3. No special characters or spaces. 4. Cannot be a C keyword. 5. Case-sensitive (total vs Total are distinct).</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Identifier</th><th>Validity</th><th>Reason</th></tr></thead><tbody><tr><td><code>total_marks</code></td><td>VALID</td><td>Letters and underscore</td></tr><tr><td><code>2nd_rank</code></td><td>INVALID</td><td>Cannot begin with a digit</td></tr><tr><td><code>my salary</code></td><td>INVALID</td><td>Spaces forbidden</td></tr><tr><td><code>float</code></td><td>INVALID</td><td>Reserved keyword</td></tr><tr><td><code>Float</code></td><td>VALID</td><td>Capitalized, not a keyword</td></tr></tbody></table>",
      "diagram": "VALID:   student_name,  _temp,   count2,  MAX_LIMIT\nINVALID: 2nd_rank,      my-var,  int,     student name",
      "code": "#include <stdio.h>\nint main(void) {\n    int student_score = 95;\n    int _rank = 1;\n    printf(\"Score: %d, Rank: %d\\n\", student_score, _rank);\n    return 0;\n}",
      "output": "Score: 95, Rank: 1",
      "codeExplanation": "Symbol table maps student_score and _rank to physical RAM stack offsets.",
      "examTraps": "'float' is invalid (keyword); 'Float' is valid (case-sensitive).",
      "practiceProblems": [
        {
          "problemId": "7.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`total_marks`"
        },
        {
          "problemId": "7.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`2nd_number`"
        },
        {
          "problemId": "7.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`_count`"
        },
        {
          "problemId": "7.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`my salary`"
        },
        {
          "problemId": "7.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`student-age`"
        },
        {
          "problemId": "7.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "`float`"
        },
        {
          "problemId": "7.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "`Float` (Remember case-sensitivity!)"
        },
        {
          "problemId": "7.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "`roll#no`"
        },
        {
          "problemId": "7.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "`$amount`"
        },
        {
          "problemId": "7.10",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "`MAX_CAPACITY_2026`"
        },
        {
          "problemId": "7.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Convert these 5 invalid variable names into professional, valid C identifiers: `1st_prize`, `employee-name`, `gross salary`, `tax%`, `default`."
        },
        {
          "problemId": "7.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Explain why `marks`, `Marks`, and `MARKS` represent three completely distinct variables in C memory."
        },
        {
          "problemId": "7.13",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What is the difference between `snake_case` and `camelCase` naming conventions? Which is standard in C?"
        },
        {
          "problemId": "7.14",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Why should variable names beginning with double underscores (e.g., `__init`) be avoided in user code?"
        },
        {
          "problemId": "7.15",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "In ANSI C89, how many initial characters of an internal identifier are guaranteed to be significant? What is the risk if two 50-character identifiers differ only at the 35th character?"
        },
        {
          "problemId": "7.16",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Write a short C program that declares 4 valid identifiers using lowercase, uppercase, underscore, and trailing digits, assigning values and printing them."
        },
        {
          "problemId": "7.17",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Can an identifier have the exact same name as a C standard library function like `printf`? What happens if you declare `int printf = 10;` inside `main()`? Test and explain the result."
        }
      ],
      "objective": "Master identifier naming rules in C and spot valid vs invalid names in exam multiple-choice questions.",
      "whatIsIt": "An identifier is a user-defined name given to program elements such as variables, functions, and arrays.",
      "keyConcept": [
        "Can contain letters (`a-z`, `A-Z`), digits (`0-9`), and underscores (`_`).",
        "MUST begin with a letter or an underscore (`_`); it CANNOT begin with a digit.",
        "Cannot contain whitespace or special symbols (`$`, `@`, `#`, `-`); cannot be a C keyword; is strictly case-sensitive."
      ],
      "ruleFormula": "Valid Identifier Regex:\n^[a-zA-Z_][a-zA-Z0-9_]*$ (Max length usually 31-63 chars; no keywords)",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    int _totalScore = 95; // Valid: starts with underscore\n    int student1 = 101;   // Valid: digit not at start\n    // int 1student = 102; // SYNTAX ERROR: starts with digit\n    printf(\"Score: %d, ID: %d\\n\", _totalScore, student1);\n    return 0;\n}",
      "exampleOutput": "Score: 95, ID: 101",
      "commonMistake": {
        "trap": "Using hyphens instead of underscores (e.g. `total-marks`), or including a dollar sign (`$salary`).",
        "why": "`-` is interpreted as the subtraction arithmetic operator by the compiler, not part of a name.",
        "fix": "Use snake_case (`total_marks`) or camelCase (`totalMarks`). Only underscore `_` is permitted."
      },
      "memoryTrick": "Rule of 3: Letters, Digits, Underscores \u2014 but Digits NEVER first!",
      "practiceQuestion": {
        "q": "Which of the following are invalid C identifiers: `_count`, `2nd_place`, `total$`, `default`, `my_name`?",
        "hint": "`2nd_place` (starts with digit), `total$` (contains `$`), and `default` (reserved C keyword) are all INVALID."
      }
    },
    {
      "id": "ch1_8",
      "chapterId": 1,
      "number": 8,
      "title": "Keywords",
      "badge": "Reserved Words",
      "readingTime": "9 min read",
      "overview": "<p><strong>Keywords</strong> are 32 reserved words in C89 whose meanings are permanently defined by the compiler grammar. All are lowercase.</p>",
      "deepDive": "<p>Categorized into: Data Types (char, int, float, double, short, long, signed, unsigned), Conditionals (if, else, switch, case, default, goto), Loops (while, do, for, break, continue), Structs (struct, union, enum, typedef), Storage (auto, register, static, extern, const, volatile, void, sizeof, return).</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Category</th><th>Keywords</th></tr></thead><tbody><tr><td>Data Types</td><td><code>char, int, float, double, short, long, signed, unsigned</code></td></tr><tr><td>Control Flow</td><td><code>if, else, switch, case, default, break, continue, return, goto</code></td></tr><tr><td>Loops</td><td><code>while, do, for</code></td></tr></tbody></table>",
      "diagram": "THE 32 C89 KEYWORDS:\nauto     break    case     char     const    continue default  do\ndouble   else     enum     extern   float    for      goto     if\nint      long     register return   short    signed   sizeof   static\nstruct   switch   typedef  union    unsigned void     volatile while",
      "code": "#include <stdio.h>\nint main(void) {\n    const int MAX = 100;\n    printf(\"Max: %d\\n\", MAX);\n    return 0;\n}",
      "output": "Max: 100",
      "codeExplanation": "Keywords like const, int, return define the grammatical structure of C programs.",
      "examTraps": "'main' and 'printf' are NOT keywords! They are function identifiers.",
      "practiceProblems": [
        {
          "problemId": "8.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Define a Keyword. Why can a keyword never be used as a variable name?"
        },
        {
          "problemId": "8.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "How many keywords exist in the ANSI C (C89) standard? Are they uppercase or lowercase? - From the list below, circle the **Keywords**:"
        },
        {
          "problemId": "8.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`int`, `main`, `include`, `return`"
        },
        {
          "problemId": "8.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`float`, `number`, `if`, `sum`"
        },
        {
          "problemId": "8.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`while`, `printf`, `char`, `loop`"
        },
        {
          "problemId": "8.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "List the 8 C keywords used exclusively for Data Types."
        },
        {
          "problemId": "8.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "List the 8 C keywords used for Control Flow and Decision Making (`if`, `else`, etc.)."
        },
        {
          "problemId": "8.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "List the 3 C keywords used for Loops."
        },
        {
          "problemId": "8.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Why is `main` NOT a keyword? Why is `printf` NOT a keyword?"
        },
        {
          "problemId": "8.10",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "What error does the compiler give if you write `int double = 25;`?"
        },
        {
          "problemId": "8.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Explain the purpose of the `sizeof` keyword. Why do beginners often mistake it for a function?"
        },
        {
          "problemId": "8.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Explain the role of the `typedef` keyword with a simple syntax example."
        },
        {
          "problemId": "8.13",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "List the 5 new keywords added in C99 (e.g., `inline`, `restrict`, `_Bool`)."
        },
        {
          "problemId": "8.14",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Group all 32 C89 keywords into their 5 functional categories: Data Types, Flow Control, Loops, Storage Classes, and Miscellaneous."
        },
        {
          "problemId": "8.15",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Spot the invalid line and explain why: ```c int count = 10; int break = 5; int While = 20; ```"
        }
      ],
      "objective": "Identify the 32 reserved keywords of ANSI C99 and explain why they cannot be redefined as identifiers.",
      "whatIsIt": "Keywords are reserved words whose syntax, meaning, and purpose are pre-defined by the C compiler.",
      "keyConcept": [
        "ANSI C89/90 defines exactly 32 reserved keywords.",
        "All 32 standard C keywords are strictly written in lowercase (`for`, `if`, `while`, `int`, etc.).",
        "Keywords cannot be used as variable, function, or constant names; doing so causes a compile-time error."
      ],
      "ruleFormula": "The 32 Standard ANSI C Keywords:\nauto, break, case, char, const, continue, default, do, double, else, enum, extern,\nfloat, for, goto, if, int, long, register, return, short, signed, sizeof, static,\nstruct, switch, typedef, union, unsigned, void, volatile, while",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    // int while = 5; // COMPILE ERROR: 'while' is a keyword!\n    int While = 5;    // Valid because C is case-sensitive, but poor practice!\n    printf(\"Value = %d\\n\", While);\n    return 0;\n}",
      "exampleOutput": "Value = 5",
      "commonMistake": {
        "trap": "Believing `main`, `printf`, and `include` are C keywords.",
        "why": "`main` is a user-defined function identifier; `printf` is a library function; `include` is a preprocessor directive. None are among the 32 keywords!",
        "fix": "Memorize the core 32 keyword list; library functions are identifiers, not keywords."
      },
      "memoryTrick": "All keywords are LOWERCASE. If it has uppercase, it's not a standard C keyword.",
      "practiceQuestion": {
        "q": "Is `sizeof` a function or a keyword in C?",
        "hint": "`sizeof` is a compile-time unary operator and an official C KEYWORD, even though it uses parentheses."
      }
    },
    {
      "id": "ch1_9",
      "chapterId": 1,
      "number": 9,
      "title": "Data types",
      "badge": "Memory & Precision",
      "readingTime": "14 min read",
      "overview": "<p>A <strong>data type</strong> specifies the bytes allocated in RAM, range of values, and allowed operations. Primary types: char (1B), int (4B), float (4B), double (8B), void.</p>",
      "deepDive": "<p>char stores ASCII (signed: -128 to 127; unsigned: 0 to 255). int is 4 bytes (-2.14B to +2.14B). float gives 6-7 decimal places, double gives 15-17.</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Type</th><th>Bytes</th><th>Specifier</th><th>Range</th></tr></thead><tbody><tr><td><code>char</code></td><td>1</td><td><code>%c</code></td><td>-128 to +127</td></tr><tr><td><code>int</code></td><td>4</td><td><code>%d</code></td><td>-2,147,483,648 to +2,147,483,647</td></tr><tr><td><code>float</code></td><td>4</td><td><code>%f</code></td><td>6-7 decimal digits</td></tr><tr><td><code>double</code></td><td>8</td><td><code>%lf</code></td><td>15-17 decimal digits</td></tr></tbody></table>",
      "diagram": "RAM ALLOCATION:\nchar:   [ 1 Byte  ] (ASCII)\nint:    [ 4 Bytes ] (Two's complement)\ndouble: [ 8 Bytes ] (IEEE 754 precision)",
      "code": "#include <stdio.h>\nint main(void) {\n    printf(\"char: %zu byte, int: %zu bytes, double: %zu bytes\\n\", sizeof(char), sizeof(int), sizeof(double));\n    return 0;\n}",
      "output": "char: 1 byte, int: 4 bytes, double: 8 bytes",
      "codeExplanation": "sizeof() evaluates byte size at compile time.",
      "examTraps": "Integer division trap: 5 / 2 gives 2 (truncated)! To get 2.5, at least one operand must be float: 5.0 / 2.",
      "practiceProblems": [
        {
          "level": "Level 1: Precision Calculation",
          "levelClass": "diff-very-basic",
          "statement": "Write a program that takes three integer exam scores (e.g. 85, 90, 88) and computes their precise average as a floating-point number formatted to 2 decimal places. Prevent integer division truncation.",
          "input": "85 90 88",
          "output": "Average = 87.67",
          "concept": "Integer division truncation vs floating-point literal division",
          "hint": "The sum of 85 + 90 + 88 = 263. If you divide by integer 3, C truncates the result to 87.00. You must divide by float literal 3.0f or write ((float)sum / 3)."
        },
        {
          "level": "Level 2: Character Arithmetic",
          "levelClass": "diff-basic",
          "statement": "Read a lowercase character (e.g. 'g') from the keyboard. Convert it to uppercase using ASCII arithmetic without calling any library function, and print both the character and its decimal ASCII code.",
          "input": "g",
          "output": "Uppercase: G | ASCII Code: 71",
          "concept": "Character data type and ASCII integer code arithmetic",
          "hint": "In ASCII, 'a' is 97 and 'A' is 65. The fixed distance between lowercase and uppercase is 32 ('a' - 'A' = 32). Simply subtract 32: char upper = ch - 32;."
        },
        {
          "level": "Level 3: Midterm Memory Footprint",
          "levelClass": "diff-exam",
          "statement": "Write a program using sizeof() to display the exact RAM memory footprint in bytes for: char, short, int, long, float, double, and the character literal 'A'. Explain why sizeof('A') is 4 in C, but 1 in C++.",
          "input": "None (System Inspection)",
          "output": "char: 1, int: 4, double: 8, 'A': 4",
          "concept": "Data type memory footprint and character constant type promotion",
          "hint": "In standard C, character constants like 'A' are treated as int type (integer character constants), so sizeof('A') == sizeof(int) == 4 bytes. In C++, 'A' has type char (1 byte)."
        },
        {
          "problemId": "9.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write declarations for: - An integer `age = 20` - A single-precision float `height = 5.9` - A double-precision `pi = 3.14159265` - A character `grade = 'A'`"
        },
        {
          "problemId": "9.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "State the standard format specifier used in `printf` for `int`, `float`, `double`, and `char`."
        },
        {
          "problemId": "9.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write a program to declare variables of type `int`, `float`, `double`, and `char`, and print each on a new line with its label."
        },
        {
          "problemId": "9.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "What is the memory size in bytes of `char` on all standard C platforms?"
        },
        {
          "problemId": "9.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Calculate the mathematical range of an 8-bit unsigned integer ($[0 \\text{ to } 2^8 - 1]$)."
        },
        {
          "problemId": "9.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write a program to calculate the average of 3 test scores ($75, 82, 91$) using a `float` variable to preserve decimal precision."
        },
        {
          "problemId": "9.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write a program to calculate the percentage of a student who scored 425 out of 500 marks."
        },
        {
          "problemId": "9.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write a program to print the ASCII numerical code of character `'Z'` and `'a'` using `%d`."
        },
        {
          "problemId": "9.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Calculate the mathematical range of a 16-bit signed short integer using the Two's Complement formula ($[-2^{15} \\text{ to } 2^{15}-1]$)."
        },
        {
          "problemId": "9.10",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Print the exact byte sizes of `short`, `int`, `long`, `float`, and `double` on your machine using `sizeof`."
        },
        {
          "problemId": "9.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What is the difference between `signed int` and `unsigned int` in terms of memory size and range?"
        },
        {
          "problemId": "9.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Predict the output of this code and explain the \"Odometer Effect\" (Signed Overflow): ```c signed char c = 127; c = c + 1; printf(\"%d\\n\", c); ```"
        },
        {
          "problemId": "9.13",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Predict the output of this unsigned wrap-around: ```c unsigned char u = 255; u = u + 1; printf(\"%u\\n\", u); ```"
        },
        {
          "problemId": "9.14",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Explain the precision limitation of `float` (6-7 decimal digits) vs `double` (15-17 decimal digits) with an example storing `123456789.0`."
        },
        {
          "problemId": "9.15",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What is the `void` data type? Give two common scenarios where `void` is used."
        },
        {
          "problemId": "9.16",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Write a program to calculate an employee's Gross Salary: - Basic Salary = 45000.00 (`double`) - HRA = 20% of Basic - DA = 50% of Basic - Tax Deduction = 10% of Basic - Print all components with 2 decimal places."
        },
        {
          "problemId": "9.17",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Explain what happens when a variable of type `float` is printed using `%d`, or an `int` is printed using `%f`. Why does it output garbage?"
        },
        {
          "problemId": "9.18",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Write a program to display the minimum and maximum limits of integer types by including `<limits.h>` (`INT_MIN`, `INT_MAX`, `SHRT_MAX`, `UCHAR_MAX`)."
        },
        {
          "problemId": "9.19",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Write a program to inspect whether `char` is signed or unsigned by default on your compiler."
        }
      ],
      "objective": "Master the 4 primitive C data types, memory byte allocations, signed ranges, and format specifiers.",
      "whatIsIt": "Data types specify the type, memory size (bytes), and range of values that a variable can store, as well as the valid operations on it.",
      "keyConcept": [
        "`char` (1 byte, -128 to 127), `int` (4 bytes typical, -2.14B to +2.14B), `float` (4 bytes, 6 decimal precision), `double` (8 bytes, 15 decimal precision).",
        "Type modifiers: `signed`, `unsigned`, `short`, `long` adjust byte size and range.",
        "Choosing the wrong data type leads to integer overflow truncation or floating-point precision loss."
      ],
      "ruleFormula": "Integer Range Formula (for $N$ bits signed):\nRange = -2^(N-1) to 2^(N-1) - 1\nFor 8-bit char: -2^7 to 2^7 - 1 = -128 to +127",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    printf(\"char:   %zu byte  (%%c)\\n\", sizeof(char));\n    printf(\"int:    %zu bytes (%%d)\\n\", sizeof(int));\n    printf(\"float:  %zu bytes (%%f)\\n\", sizeof(float));\n    printf(\"double: %zu bytes (%%lf)\\n\", sizeof(double));\n    return 0;\n}",
      "exampleOutput": "char:   1 byte  (%c)\nint:    4 bytes (%d)\nfloat:  4 bytes (%f)\ndouble: 8 bytes (%lf)",
      "commonMistake": {
        "trap": "Storing a value larger than 127 inside a `signed char` (e.g. `char c = 130;`).",
        "why": "Overflow occurs: 130 wraps around into negative range (-126) due to two's complement sign bit interpretation.",
        "fix": "Use `unsigned char` (0 to 255) if values are strictly positive."
      },
      "memoryTrick": "C-I-F-D: Char (1), Int (4), Float (4), Double (8 bytes).",
      "practiceQuestion": {
        "q": "What happens if you assign `2147483648` to a standard 32-bit signed `int`?",
        "hint": "The max positive signed 32-bit integer is $2^{31} - 1 = 2147483647$. Storing +1 exceeds the limit and overflows to $-2147483648$."
      }
    },
    {
      "id": "ch1_10",
      "chapterId": 1,
      "number": 10,
      "title": "Constants",
      "badge": "Literals & Immutability",
      "readingTime": "10 min read",
      "overview": "<p>A <strong>constant</strong> is a fixed value that cannot be modified during program execution. Types: Decimal (45), Octal (055), Hex (0x2D), Character ('A'), String (\"Text\\0\").</p>",
      "deepDive": "<p>Octal starts with 0 (055 = 45). Hex starts with 0x (0x2D = 45). Character literals use single quotes (1 byte); string literals use double quotes (ends with '\\0').</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Constant</th><th>Syntax</th><th>RAM Storage</th></tr></thead><tbody><tr><td>Decimal</td><td><code>45</code></td><td>4 bytes</td></tr><tr><td>Octal</td><td><code>055</code></td><td>4 bytes ($5\\times 8 + 5 = 45$)</td></tr><tr><td>Hexadecimal</td><td><code>0x2D</code></td><td>4 bytes ($2\\times 16 + 13 = 45$)</td></tr><tr><td>Character</td><td><code>'A'</code></td><td>1 byte (ASCII 65)</td></tr><tr><td>String</td><td><code>\"A\"</code></td><td>2 bytes ('A' + '\\0')</td></tr></tbody></table>",
      "diagram": "LITERAL COMPARISON:\n'A'  ====> [ 65 ] (1 Byte)\n\"A\"  ====> [ 'A' | '\\0' ] (2 Bytes)",
      "code": "#include <stdio.h>\nint main(void) {\n    int dec = 45, oct = 055, hex = 0x2D;\n    printf(\"Dec: %d, Oct: %d, Hex: %d\\n\", dec, oct, hex);\n    return 0;\n}",
      "output": "Dec: 45, Oct: 45, Hex: 45",
      "codeExplanation": "All three variables hold identical binary values.",
      "examTraps": "'A' is 1 byte; \"A\" is 2 bytes due to the null terminator '\\0'.",
      "practiceProblems": [
        {
          "problemId": "10.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Define a Constant. How does it differ from a Variable? - Identify the type of each constant (Integer, Float, Char, String):"
        },
        {
          "problemId": "10.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`42`"
        },
        {
          "problemId": "10.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`3.14159f`"
        },
        {
          "problemId": "10.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`'A'`"
        },
        {
          "problemId": "10.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`\"A\"`"
        },
        {
          "problemId": "10.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "What base does an integer with a leading `0` represent? What is the decimal value of `017`?"
        },
        {
          "problemId": "10.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "What base does an integer with prefix `0x` represent? What is the decimal value of `0x1A`?"
        },
        {
          "problemId": "10.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Explain what the following escape sequences do: `\\n`, `\\t`, `\\\\`, `\\\"`, `\\0`."
        },
        {
          "problemId": "10.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "What is the memory difference between `'X'` and `\"X\"`? (Hint: byte size and null terminator)."
        },
        {
          "problemId": "10.10",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write a program to print a file path `C:\\Program Files\\C_Course\\` using escape sequences."
        },
        {
          "problemId": "10.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Why does the line `int code = 089;` produce a compile-time error?"
        },
        {
          "problemId": "10.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What do the suffixes `U`, `L`, `UL`, and `f` mean when appended to literals like `100UL` or `3.5f`?"
        },
        {
          "problemId": "10.13",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What is Scientific Exponential notation? What is the decimal value of `1.5e3` and `4.2e-2`?"
        },
        {
          "problemId": "10.14",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What is the hidden character appended to every string literal in C memory? What is its ASCII value?"
        },
        {
          "problemId": "10.15",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Predict the output of this code snippet: ```c printf(\"%d %d %d\\n\", 45, 055, 0x2D); ```"
        },
        {
          "problemId": "10.16",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Write a program to calculate the area and circumference of a circle using `#define PI 3.14159265` for radius $r = 5.5$."
        },
        {
          "problemId": "10.17",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Predict the output: ```c char s[] = \"Hello\\0World\"; printf(\"%s\\n\", s); printf(\"%zu\\n\", sizeof(s)); ``` Explain why `printf` prints only \"Hello\", but `sizeof` returns 12 bytes!"
        }
      ],
      "objective": "Distinguish between integer, floating-point, character, and string literal constants in C memory.",
      "whatIsIt": "Constants are fixed values that do not change during the execution of a program.",
      "keyConcept": [
        "Integer constants: decimal (`25`), octal (leading 0, `031`), hexadecimal (leading 0x, `0x19`).",
        "Real/Float constants: fractional (`3.1415f`) or scientific exponent notation (`1.5e3`).",
        "Character constants use single quotes (`'A'`, 1 byte); String literals use double quotes (`\"A\"`, includes trailing `\\0` null terminator, 2 bytes)."
      ],
      "ruleFormula": "Prefix / Quote Rules:\nOctal: 077 | Hex: 0xFF | Float: 3.14f | Char: 'A' (1 byte) | String: \"A\" ('A' + '\\0' = 2 bytes)",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    int dec = 25, oct = 031, hex = 0x19;\n    printf(\"Dec: %d, Oct: %d, Hex: %d\\n\", dec, oct, hex); // All print 25!\n    printf(\"Size of 'A': %zu, Size of \\\"A\\\": %zu\\n\", sizeof('A'), sizeof(\"A\"));\n    return 0;\n}",
      "exampleOutput": "Dec: 25, Oct: 25, Hex: 25\nSize of 'A': 4, Size of \"A\": 2",
      "commonMistake": {
        "trap": "Writing leading zeros on decimal numbers (e.g. `int code = 052;`).",
        "why": "A leading zero tells the C compiler the number is OCTAL (base 8). `052` in octal is $5 \\times 8 + 2 = 42$ in decimal!",
        "fix": "Never place leading zeros before standard base-10 decimal numbers."
      },
      "memoryTrick": "Single quote = single char (1 letter). Double quotes = double stuff (string + null byte).",
      "practiceQuestion": {
        "q": "What is the byte size difference between `'Z'` and `\"Z\"` in C?",
        "hint": "In C, `'Z'` is an integer character literal (often 4 bytes or 1 byte char), while `\"Z\"` is an array of 2 chars: `'Z'` and the null terminator `\\0`."
      }
    },
    {
      "id": "ch1_11",
      "chapterId": 1,
      "number": 11,
      "title": "Variables",
      "badge": "Memory Allocation",
      "readingTime": "12 min read",
      "overview": "<p>A <strong>variable</strong> is a named location in RAM memory whose contents can change during execution.</p>",
      "deepDive": "<p>Attributes: Identifier, Data Type, RAM Address (&x), Value. Uninitialized local variables hold garbage values!</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Action</th><th>Code</th><th>RAM State</th></tr></thead><tbody><tr><td>Declaration</td><td><code>int x;</code></td><td>Allocates 4 bytes (contains garbage)</td></tr><tr><td>Initialization</td><td><code>int x = 10;</code></td><td>Allocates 4 bytes & writes 10</td></tr><tr><td>Assignment</td><td><code>x = 25;</code></td><td>Overwrites with 25</td></tr></tbody></table>",
      "diagram": "VARIABLE IN RAM:\nIdentifier: x\nAddress:    0x7ffd50\nType:       int (4 Bytes)\nValue:      25",
      "code": "#include <stdio.h>\nint main(void) {\n    int a = 10, b = 20, temp;\n    temp = a; a = b; b = temp;\n    printf(\"Swapped: a=%d, b=%d\\n\", a, b);\n    return 0;\n}",
      "output": "Swapped: a=20, b=10",
      "codeExplanation": "Swapping with temporary variable preserves original value during transfer.",
      "examTraps": "Swap without temp variable: a = a + b; b = a - b; a = a - b;!",
      "practiceProblems": [
        {
          "level": "Level 1: Value Swapping with Temp",
          "levelClass": "diff-very-basic",
          "statement": "Write a program to input two integer variables x and y, print their values, swap their contents using a third temporary variable, and print the swapped results.",
          "input": "x = 10, y = 25",
          "output": "Before: x=10, y=25 | After: x=25, y=10",
          "concept": "Variable state mutation and memory transfer using a temporary buffer",
          "hint": "int temp = x; x = y; y = temp; Make sure you do not overwrite x before preserving its value in temp."
        },
        {
          "level": "Level 2: Swapping Without Temp",
          "levelClass": "diff-basic",
          "statement": "Swap two integer variables a and b WITHOUT using any third temporary variable. Use only arithmetic addition and subtraction operations.",
          "input": "a = 15, b = 40",
          "output": "Before: a=15, b=40 | After: a=40, b=15",
          "concept": "Mathematical variable state manipulation without auxiliary memory",
          "hint": "Step 1: a = a + b; (a holds sum 55). Step 2: b = a - b; (b holds 55 - 40 = 15). Step 3: a = a - b; (a holds 55 - 15 = 40)."
        },
        {
          "level": "Level 3: Temperature Conversion",
          "levelClass": "diff-exam",
          "statement": "Convert temperature from Fahrenheit to Celsius using formula C = (F - 32) * (5.0 / 9.0). Write a program taking Fahrenheit as double and printing Celsius to 2 decimal places. What happens if you write 5/9?",
          "input": "Fahrenheit = 98.6",
          "output": "Celsius = 37.00\u00b0C",
          "concept": "Floating-point precision formulas and constant types in variables",
          "hint": "Writing 5 / 9 results in integer division yielding 0, which makes C evaluate to 0.0! Always write 5.0 / 9.0."
        },
        {
          "problemId": "11.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Declare two integer variables `x` and `y`, initialize them with 15 and 25, compute their sum into `sum`, and print `sum`."
        },
        {
          "problemId": "11.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "What is the difference between Variable **Declaration** and Variable **Definition**?"
        },
        {
          "problemId": "11.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "What is an **Uninitialized Variable**? What value does a local uninitialized variable hold in C?"
        },
        {
          "problemId": "11.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write a program to declare an uninitialized `int count;` and print its value. Explain why the result is unexpected."
        },
        {
          "problemId": "11.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Declare three variables `a, b, c` on a single line, initialize only `b = 5`, and explain the state of `a` and `c`."
        },
        {
          "problemId": "11.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write a program to **swap two variables** `a = 10` and `b = 20` using a temporary helper variable `temp`. - *Input:* $a = 10, b = 20$. - *Output:* $a = 20, b = 10$. - *Memory trace:* Draw the 3-step memory box states."
        },
        {
          "problemId": "11.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write a program to calculate the Area and Perimeter of a square of side $S = 8.5$."
        },
        {
          "problemId": "11.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write a program to calculate Simple Interest: $P = 12000, R = 6.5\\%, T = 2\\text{ years}$."
        },
        {
          "problemId": "11.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write a program to convert distance from kilometers to meters and centimeters ($1\\text{ km} = 1000\\text{ m} = 100000\\text{ cm}$)."
        },
        {
          "problemId": "11.10",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Trace the value of variable `x` after each line: ```c int x = 5; x = x + 10; x = x * 2; x = x - 4; ```"
        },
        {
          "problemId": "11.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Write a program to **swap two variables WITHOUT using any third variable** using addition and subtraction. - *Hint:* $a = a + b; b = a - b; a = a - b;$."
        },
        {
          "problemId": "11.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What is an **L-value** and an **R-value**? Why does `10 = x;` cause a compiler error: \"lvalue required\"?"
        },
        {
          "problemId": "11.13",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What is Chained Assignment? Trace the values of `a, b, c` after `a = b = c = 50;`."
        },
        {
          "problemId": "11.14",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What is variable shadowing? Predict the output: ```c int x = 10; { int x = 20; printf(\"%d \", x); } printf(\"%d\\n\", x); ```"
        },
        {
          "problemId": "11.15",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Print the physical memory address of a variable `num` using the address-of operator `&num` and `%p`."
        },
        {
          "problemId": "11.16",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Write a program to calculate the total marks, average, and percentage for a student across 5 subjects (Physics, Chemistry, Math, English, Biology) out of 100 each."
        },
        {
          "problemId": "11.17",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Write a program to compute Profit or Loss: Given Cost Price $CP = 250.00$ and Selling Price $SP = 310.00$, compute profit amount and profit percentage."
        },
        {
          "problemId": "11.18",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Explain what happens if two extremely large positive integers close to `INT_MAX` are swapped using the additive trick ($a = a + b$). Why does it cause undefined behavior?"
        },
        {
          "problemId": "11.19",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Swap two variables using the **Bitwise XOR (`^`) operator** without a temporary variable. Why is this safer than addition/subtraction?"
        },
        {
          "problemId": "11.20",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Demonstrate the difference between a `local variable`, a `global variable`, and a `static local variable` across multiple function calls."
        }
      ],
      "objective": "Understand variable declaration, initialization, memory allocation, and the danger of uninitialized garbage values.",
      "whatIsIt": "A variable is a named memory location on the RAM stack used to store data that can be read and modified during program execution.",
      "keyConcept": [
        "Declaration informs the compiler of the variable's name and data type (`int count;`).",
        "Initialization assigns a concrete starting value at declaration time (`int count = 0;`).",
        "Local variables that are declared but not initialized contain random leftover memory noise called 'garbage values'."
      ],
      "ruleFormula": "Syntax:\n<data_type> <variable_name> = <initial_value>;\nMemory Address: &variable_name (accessed using %p)",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    int initialized = 100;\n    int garbage; // Uninitialized local variable\n    printf(\"Initialized: %d\\n\", initialized);\n    printf(\"Garbage Value (danger): %d\\n\", garbage); // Random junk!\n    return 0;\n}",
      "exampleOutput": "Initialized: 100\nGarbage Value (danger): 32767",
      "commonMistake": {
        "trap": "Using an uninitialized variable in calculations (e.g. `int sum; sum = sum + i;`).",
        "why": "`sum` starts with garbage (e.g. 483921), so the final sum will be completely incorrect.",
        "fix": "Always initialize counters and accumulators to 0 before loops (`int sum = 0;`)."
      },
      "memoryTrick": "Declaration = Reserving the parking spot. Initialization = Parking the car inside.",
      "practiceQuestion": {
        "q": "What is the difference between `int x; x = 5;` and `int x = 5;`?",
        "hint": "The first is declaration followed by assignment; the second is simultaneous declaration and initialization."
      }
    },
    {
      "id": "ch1_12",
      "chapterId": 1,
      "number": 12,
      "title": "Statements",
      "badge": "Syntax Grammar",
      "readingTime": "8 min read",
      "overview": "<p>A <strong>statement</strong> is a complete command in C terminated by a semicolon (<code>;</code>).</p>",
      "deepDive": "<p>Types: Declaration, Expression (x = a + b;), Compound ({ ... }), Selection (if, switch), Iteration (while, for), Jump (break, return), Null (;).</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Type</th><th>Example</th></tr></thead><tbody><tr><td>Expression</td><td><code>x = 10 + 5;</code></td></tr><tr><td>Compound</td><td><code>{ int a = 5; b = a; }</code></td></tr><tr><td>Null</td><td><code>;</code></td></tr></tbody></table>",
      "diagram": "STATEMENT ANATOMY:\nx = a + b ;  <-- Semicolon is the statement terminator",
      "code": "#include <stdio.h>\nint main(void) {\n    int x = 10;\n    { int temp = x * 2; printf(\"Block: %d\\n\", temp); }\n    return 0;\n}",
      "output": "Block: 20",
      "codeExplanation": "Braces create compound statement with isolated local scope.",
      "examTraps": "Semicolon after while: `while(i <= 5);` creates an infinite loop!",
      "practiceProblems": [
        {
          "problemId": "12.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Identify the statement type for each line: - `int count = 0;` - `count = count + 1;` - `printf(\"%d\\n\", count);` - `;` - `{ int a = 1; int b = 2; }`"
        },
        {
          "problemId": "12.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "What is the purpose of the Semicolon `;` in C? Is it a statement terminator or separator?"
        },
        {
          "problemId": "12.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "What is a Null Statement (Empty Statement)? Write a valid line containing a null statement."
        },
        {
          "problemId": "12.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "What is a Compound Statement (Block)? What symbols delimit it? Does the closing brace `}` require a semicolon?"
        },
        {
          "problemId": "12.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Fix the missing semicolons in this broken snippet: ```c int a = 10 int b = 20 int c = a + b printf(\"%d\", c) ```"
        },
        {
          "problemId": "12.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Explain the devastating bug caused by the semicolon in this snippet: ```c int score = 20; if (score >= 50); { printf(\"You passed!\\n\"); } ``` Why does \"You passed!\" print even though score is only 20?"
        },
        {
          "problemId": "12.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Explain what happens in this loop with a semicolon: ```c int i = 0; while (i < 5); { i++; } ```"
        },
        {
          "problemId": "12.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Can multiple statements be written on a single physical line in C? Give an example."
        },
        {
          "problemId": "12.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Can a single C statement span across multiple physical lines? Give an example."
        },
        {
          "problemId": "12.10",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Explain Block Scope: What is the lifetime of a variable declared inside an inner block `{ int temp = 5; }`? Can it be accessed outside the closing brace?"
        },
        {
          "problemId": "12.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What is an Expression Statement? Does the line `42;` or `10 + 20;` compile in C? What warning might GCC give?"
        },
        {
          "problemId": "12.12",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Identify all syntax and logical errors in this code: ```c #include <stdio.h> int main(void) { int x = 10; y = 20; int sum = x + y; printf(\"Sum is %d\", sum) return 0 } ```"
        }
      ],
      "objective": "Classify C statements into expression, compound, selection, iteration, and jump statements.",
      "whatIsIt": "A statement is an executable unit of code terminated by a semicolon `;` that instructs the computer to perform a specific action.",
      "keyConcept": [
        "Expression Statements: evaluated for side effects (e.g. `x = 10;`, `printf(\"Hi\");`). Terminated by `;`.",
        "Compound Statement (Block): zero or more statements enclosed in curly braces `{ ... }`; treated syntactically as a single statement.",
        "Control Statements: selection (`if`, `switch`), iteration (`for`, `while`, `do-while`), and jump (`break`, `continue`, `return`)."
      ],
      "ruleFormula": "Types of C Statements:\n1. Expression (x = a + b;) | 2. Compound ({ s1; s2; }) | 3. Selection (if/switch)\n4. Iteration (while/for) | 5. Jump (break/continue/return) | 6. Null Statement (;)",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    int x = 10; // Expression statement\n    { // Compound statement begins\n        int y = 20;\n        x += y;\n    } // Compound statement ends (no semicolon needed here)\n    printf(\"x = %d\\n\", x);\n    return 0; // Jump statement\n}",
      "exampleOutput": "x = 30",
      "commonMistake": {
        "trap": "Placing an accidental semicolon immediately after an `if` condition (e.g. `if (x > 5); { ... }`).",
        "why": "The semicolon terminates the `if` statement immediately as a Null Statement, causing the `{ ... }` block to execute unconditionally!",
        "fix": "Never place a semicolon directly after the parenthesis of `if(...)`, `while(...)`, or `for(...)` headers."
      },
      "memoryTrick": "Semicolon `;` is the full stop of C. Put it after actions, NEVER after loop/condition headers.",
      "practiceQuestion": {
        "q": "What does a standalone semicolon `;` represent in C programming?",
        "hint": "It is a 'Null Statement' (No-Operation) that performs no action, often used in empty-body delay loops."
      }
    },
    {
      "id": "ch1_13",
      "chapterId": 1,
      "number": 13,
      "title": "Symbolic constants",
      "badge": "Preprocessor Macros",
      "readingTime": "9 min read",
      "overview": "<p>A <strong>symbolic constant</strong> is created using <code>#define NAME value</code> for compile-time literal text replacement.</p>",
      "deepDive": "<p>Allocates 0 bytes in RAM. Rules: All uppercase by convention, NO semicolon at end, NO equals sign.</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Feature</th><th>#define</th><th>const int</th></tr></thead><tbody><tr><td>Stage</td><td>Preprocessor text replacement</td><td>Compiler type checked</td></tr><tr><td>RAM Memory</td><td>0 bytes</td><td>Normal RAM variable</td></tr></tbody></table>",
      "diagram": "Source:      #define PI 3.14159\nPreprocess:  area = 3.14159 * r * r;",
      "code": "#include <stdio.h>\n#define PI 3.14159\nint main(void) {\n    float r = 5.0f;\n    printf(\"Area: %.2f\\n\", PI * r * r);\n    return 0;\n}",
      "output": "Area: 78.54",
      "codeExplanation": "PI is replaced with 3.14159 before compilation.",
      "examTraps": "Never put a semicolon after #define: `#define PI 3.14;` breaks calculations.",
      "practiceProblems": [
        {
          "problemId": "13.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Define a symbolic constant `PI` with value `3.14159265` using `#define`."
        },
        {
          "problemId": "13.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Define a symbolic constant `MAX_STUDENTS` with value `60` using `const int`."
        },
        {
          "problemId": "13.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Why is writing `#define PI = 3.14159;` a fatal syntax error?"
        },
        {
          "problemId": "13.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write a program to calculate the area of a circle using `#define PI 3.14159`."
        },
        {
          "problemId": "13.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write a program to calculate a 15% discount on an item of price $800 using `const float DISCOUNT_RATE = 0.15f`."
        },
        {
          "problemId": "13.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Calculate the final electricity bill where unit rate is fixed at `#define UNIT_RATE 7.50` and meter rent is `const double METER_RENT = 50.00`. - *Formula:* $\\text{Bill} = (\\text{Units} \\times \\text{UNIT\\_RATE}) + \\text{METER\\_RENT}$."
        },
        {
          "problemId": "13.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Convert currency from USD to EUR using `#define CONVERSION_RATE 0.92`."
        },
        {
          "problemId": "13.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Calculate the total salary of an employee with fixed `#define BONUS 5000` added to basic salary."
        },
        {
          "problemId": "13.9",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Create a 4-point comparison table between `#define` and `const` covering: - Preprocessor vs Compiler - Memory allocation (RAM vs none) - Type checking - Ability to take address (`&`)"
        },
        {
          "problemId": "13.10",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Explain the Macro Parentheses Danger: ```c #define BAD_SQUARE(x) x * x int ans = BAD_SQUARE(2 + 3); ``` What does `ans` evaluate to? How do you fix the macro?"
        },
        {
          "problemId": "13.11",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "What happens if you try to reassign a `const` variable: ```c const int LIMIT = 100; LIMIT = 200; ``` What exact error does the compiler generate?"
        },
        {
          "problemId": "13.12",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Write a program using `#define TAX_RATE 0.05` and `#define LUXURY_TAX 0.12` to compute sales tax on grocery items vs luxury items."
        }
      ],
      "objective": "Compare `#define` preprocessor symbolic constants with `const` typed constants in memory.",
      "whatIsIt": "A symbolic constant is a name that substitutes for a fixed sequence of characters or value before compilation.",
      "keyConcept": [
        "`#define PI 3.14159` is handled by the preprocessor: it performs literal text substitution before compilation and allocates no RAM.",
        "`const double PI = 3.14159;` is handled by the compiler: it enforces strict type checking and allocates typed memory.",
        "Conventional naming rule: symbolic constants are written in ALL_UPPERCASE."
      ],
      "ruleFormula": "#define Syntax: #define NAME value  (NO semicolon! NO equals sign!)\nconst Syntax:   const data_type NAME = value; (Requires semicolon!)",
      "exampleCode": "#include <stdio.h>\n#define MAX_BUFFER 1024\nconst float TAX_RATE = 0.15f;\n\nint main(void) {\n    printf(\"Buffer: %d bytes\\n\", MAX_BUFFER);\n    printf(\"Tax Rate: %.2f\\n\", TAX_RATE);\n    // TAX_RATE = 0.20f; // COMPILE ERROR: assignment of read-only variable\n    return 0;\n}",
      "exampleOutput": "Buffer: 1024 bytes\nTax Rate: 0.15",
      "commonMistake": {
        "trap": "Adding an equals sign or trailing semicolon to `#define` (e.g. `#define PI = 3.14;`).",
        "why": "The preprocessor literally replaces `PI` with `= 3.14;`, producing broken code like `area = (= 3.14;) * r * r;`.",
        "fix": "Write `#define PI 3.14159` without `=` and without `;`."
      },
      "memoryTrick": "#define = Pure Text Copy-Paste (No `=` and No `;`). `const` = Variable with a lock.",
      "practiceQuestion": {
        "q": "Why is `const float PI = 3.14f;` safer in modern C than `#define PI 3.14f`?",
        "hint": "`const` provides compiler type checking, scope boundaries, and symbol table debugger support, whereas `#define` is blind text replacement."
      }
    },
    {
      "id": "ch2_1",
      "chapterId": 2,
      "number": 14,
      "title": "Arithmetic operators",
      "badge": "Math Computations",
      "readingTime": "11 min read",
      "overview": "<p>Arithmetic operators: <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>, <code>%</code>.</p>",
      "deepDive": "<p>Integer division truncates decimals (7 / 2 = 3). Modulus % requires integer operands; sign matches numerator in C99 (-17 % 5 = -2).</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Expression</th><th>Result</th></tr></thead><tbody><tr><td><code>17 / 5</code></td><td><code>3</code></td></tr><tr><td><code>17.0 / 5</code></td><td><code>3.4</code></td></tr><tr><td><code>-17 % 5</code></td><td><code>-2</code></td></tr></tbody></table>",
      "diagram": "DIGIT EXTRACTION:\ndigit = n % 10;   (Extracts last digit)\nn     = n / 10;   (Removes last digit)",
      "code": "#include <stdio.h>\nint main(void) {\n    int s = 7322;\n    printf(\"%d hr, %d min, %d sec\\n\", s/3600, (s%3600)/60, s%60);\n    return 0;\n}",
      "output": "2 hr, 2 min, 2 sec",
      "codeExplanation": "Decomposes seconds using / and %.",
      "examTraps": "Float modulus (`5.5 % 2`) is illegal in C.",
      "practiceProblems": [
        {
          "level": "Level 1: Time Decomposition",
          "levelClass": "diff-very-basic",
          "statement": "Write a program that takes an integer total duration in seconds (e.g. 7322) and decomposes it into Hours, Minutes, and Remaining Seconds using / and % operators.",
          "input": "7322",
          "output": "2 Hours, 2 Minutes, 2 Seconds",
          "concept": "Integer quotient (/) and modulus remainder (%) decomposition",
          "hint": "hours = total_sec / 3600; rem = total_sec % 3600; minutes = rem / 60; seconds = rem % 60;"
        },
        {
          "level": "Level 2: 3-Digit Sum Extraction",
          "levelClass": "diff-basic",
          "statement": "Input a 3-digit positive integer (e.g. 384). Extract each digit using % 10 and / 10, print individual digits, and calculate their sum (3 + 8 + 4 = 15).",
          "input": "384",
          "output": "Hundreds: 3, Tens: 8, Units: 4 | Sum of Digits: 15",
          "concept": "Digit extraction using repeated modulo and integer division",
          "hint": "units = n % 10; n = n / 10; tens = n % 10; hundreds = n / 10; sum = units + tens + hundreds;"
        },
        {
          "level": "Level 3: C99 Modulus Sign Rule",
          "levelClass": "diff-exam",
          "statement": "What are the exact results of -17 % 5 and 17 % -5 under C99? Write a test code snippet and explain the C99 sign rule for the modulus operator.",
          "input": "None (Output Tracing)",
          "output": "-17 % 5 = -2 | 17 % -5 = 2",
          "concept": "C99 dividend sign rule for modulus operator",
          "hint": "In C99, the result of a % b always takes the sign of the dividend (left operand a). The sign of the divisor b has zero effect on the result."
        },
        {
          "problemId": "14.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write a program to input two integers $a = 20$ and $b = 6$, and print their sum (`+`), difference (`-`), product (`*`), quotient (`/`), and remainder (`%`)."
        },
        {
          "problemId": "14.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Explain why `5 / 2` evaluates to `2` in C, while `5.0 / 2` evaluates to `2.5`."
        },
        {
          "problemId": "14.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write a program to calculate the remainder of $47$ divided by $5$."
        },
        {
          "problemId": "14.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write a program to calculate the square and cube of an integer $N = 4$."
        },
        {
          "problemId": "14.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write a program to calculate the average of 4 integers: $12, 17, 24, 33$ as an exact floating-point number."
        },
        {
          "problemId": "14.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Convert total seconds `total_sec = 3665` into Hours, Minutes, and Seconds using `/` and `%`. - *Input:* 3665 - *Expected Output:* 1 Hour, 1 Minute, 5 Seconds. - *Concept tested:* Time decomposition via modulo arithmetic."
        },
        {
          "problemId": "14.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Convert total days `days = 400` into Years, Weeks, and remaining Days (assume 365 days/year)."
        },
        {
          "problemId": "14.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Extract the **Last Digit** of an integer $N = 789$. - *Concept:* $N \\pmod{10}$."
        },
        {
          "problemId": "14.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Remove the last digit from an integer $N = 789$ to get $78$. - *Concept:* $N / 10$."
        },
        {
          "problemId": "14.10",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Compute the Area and Circumference of a circle given radius $r = 4.2$."
        },
        {
          "problemId": "14.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Write a program to find the **Sum of Digits** of a 3-digit number (e.g., $582 \\implies 5 + 8 + 2 = 15$). - *Input:* 582 - *Output:* 15 - *Hint:* Isolate hundreds ($N/100$), tens ($(N/10)\\%10$), units ($N\\%10$)."
        },
        {
          "problemId": "14.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Write a program to **Reverse a 3-digit number** arithmetically (e.g., $479 \\implies 974$). - *Formula:* $(d_3 \\times 100) + (d_2 \\times 10) + d_1$."
        },
        {
          "problemId": "14.13",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What is the sign of the remainder in C? Predict the output: ```c printf(\"%d %d %d %d\\n\", 14 % 4, -14 % 4, 14 % -4, -14 % -4); ``` *(Answer: 2, -2, 2, -2. Dividend determines sign!).*"
        },
        {
          "problemId": "14.14",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "An ATM must dispense cash of $\\$3,870$. Write a program to determine the minimum number of notes of $\\$500, \\$100, \\$50, \\$20, \\$10$ required."
        },
        {
          "problemId": "14.15",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "`printf(\"%d\\n\", 17 / 3 * 3 + 17 % 3);`"
        },
        {
          "problemId": "14.16",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "`printf(\"%f\\n\", 1 / 2 + 1 / 2);`"
        },
        {
          "problemId": "14.17",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "`printf(\"%.2f\\n\", (float)(5 / 2));` vs `printf(\"%.2f\\n\", (float)5 / 2);`"
        },
        {
          "problemId": "14.18",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Write a program to compute the compound formula: $y = \\frac{a^2 + b^2}{2ab}$ for $a=4, b=6$."
        },
        {
          "problemId": "14.19",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Write a program to determine if an integer is Even or Odd using **ONLY arithmetic and modulus** without any `if` statements (e.g., array index lookup or math formula)."
        },
        {
          "problemId": "14.20",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Write a program to round a positive floating-point number to the nearest integer using only integer casting arithmetic: `int rounded = (int)(val + 0.5);`."
        }
      ],
      "objective": "Master C arithmetic operators, integer division truncation rules, and the modulo operator constraints.",
      "whatIsIt": "Arithmetic operators perform fundamental mathematical calculations (+, -, *, /, %) on numeric operands.",
      "keyConcept": [
        "Integer division truncates: `5 / 2` evaluates to `2` (the decimal `.5` is discarded, not rounded).",
        "If either operand is floating-point (`5.0 / 2`), the result is promoted to floating-point (`2.5`).",
        "The modulo operator `%` returns remainder and ONLY works with integers (e.g. `7.5 % 2` causes a compile error)."
      ],
      "ruleFormula": "Integer Division: int / int = int (truncated toward zero)\nModulo Sign Rule (C99): a % b sign always matches the dividend 'a'.\nExample: -7 % 3 = -1, but 7 % -3 = 1",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    printf(\"5 / 2     = %d\\n\", 5 / 2);     // 2 (Truncated!)\n    printf(\"5.0 / 2   = %.1f\\n\", 5.0 / 2); // 2.5\n    printf(\"7 %% 3     = %d\\n\", 7 % 3);     // 1\n    printf(\"-7 %% 3    = %d\\n\", -7 % 3);    // -1\n    return 0;\n}",
      "exampleOutput": "5 / 2     = 2\n5.0 / 2   = 2.5\n7 % 3     = 1\n-7 % 3    = -1",
      "commonMistake": {
        "trap": "Writing `float avg = sum / count;` where both `sum` and `count` are integers.",
        "why": "Integer division happens first! If `sum = 7` and `count = 2`, `7 / 2` yields `2`, which is then converted to `2.000000`.",
        "fix": "Cast at least one operand: `float avg = (float)sum / count;` or `(sum * 1.0f) / count;`."
      },
      "memoryTrick": "Slash `/` with two ints drops the fraction. Percent `%` demands strictly integers!",
      "practiceQuestion": {
        "q": "What is the output of `printf(\"%d\", -11 % 4);` and `printf(\"%d\", 11 % -4);`?",
        "hint": "In C99, the result of `%` shares the sign of the LEFT operand (dividend). So `-11 % 4` is `-3`, while `11 % -4` is `+3`."
      }
    },
    {
      "id": "ch2_2",
      "chapterId": 2,
      "number": 15,
      "title": "Unary operators",
      "badge": "Increment & Decrement",
      "readingTime": "12 min read",
      "overview": "<p>Unary operators operate on one operand: <code>++a</code> (prefix), <code>a++</code> (postfix), <code>--a</code>, <code>a--</code>, <code>sizeof</code>.</p>",
      "deepDive": "<p>Prefix increments first, then returns new value. Postfix returns current value, then increments. sizeof does not evaluate expressions at runtime.</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Form</th><th>Mechanism</th></tr></thead><tbody><tr><td><code>++a</code></td><td>Increments first $\\implies$ returns new value</td></tr><tr><td><code>a++</code></td><td>Returns current value $\\implies$ increments after</td></tr></tbody></table>\n\n<div class=\"doc-table-wrapper\">\n<table class=\"doc-table\">\n<thead><tr><th>Feature</th><th>Prefix (`++x` / `--x`)</th><th>Postfix (`x++` / `x--`)</th></tr></thead>\n<tbody>\n<tr><td><strong>Operation Order</strong></td><td>1. Increment/decrement value in RAM<br>2. Return new value to expression</td><td>1. Return current value to expression<br>2. Increment/decrement value in RAM afterward</td></tr>\n<tr><td><strong>Value Returned</strong></td><td>The <em>updated</em> value (e.g., 6)</td><td>The <em>original</em> value (e.g., 5)</td></tr>\n<tr><td><strong>Precedence</strong></td><td>Rank 2 (Unary, Right-to-Left associativity)</td><td>Rank 1 (Primary, Left-to-Right associativity)</td></tr>\n<tr><td><strong>Code Example</strong></td><td><code>int x=5; int y=++x; // x=6, y=6</code></td><td><code>int x=5; int y=x++; // x=6, y=5</code></td></tr>\n</tbody>\n</table>\n</div>\n",
      "diagram": "PREFIX:  y = ++x; (x becomes 6, y receives 6)\nPOSTFIX: y = x++; (y receives 5, x becomes 6)",
      "code": "#include <stdio.h>\nint main(void) {\n    int a = 5, b = 5;\n    printf(\"++a: %d, b++: %d\\n\", ++a, b++);\n    printf(\"final a: %d, final b: %d\\n\", a, b);\n    return 0;\n}",
      "output": "++a: 6, b++: 5\nfinal a: 6, final b: 6",
      "codeExplanation": "Prefix changes value immediately; postfix defers until after expression.",
      "examTraps": "`sizeof(x++)` does NOT increment x!",
      "practiceProblems": [
        {
          "level": "Level 1: Prefix vs Postfix Tracing",
          "levelClass": "diff-very-basic",
          "statement": "Trace the step-by-step variable values on paper: int a = 5; int b = ++a; int c = a++; What are the final values of a, b, and c?",
          "input": "a = 5",
          "output": "a = 7, b = 6, c = 6",
          "concept": "Prefix increment (modify first) vs Postfix increment (use first, modify after)",
          "hint": "++a increments a to 6, then assigns 6 to b. Next, a++ assigns current value 6 to c, then increments a to 7."
        },
        {
          "level": "Level 2: Expression Evaluation Table",
          "levelClass": "diff-basic",
          "statement": "Trace on paper: int x = 4, y = 3; int res = ++x * 2 + y-- - x; What are the values of res, x, and y after execution?",
          "input": "x = 4, y = 3",
          "output": "res = 8, x = 5, y = 2",
          "concept": "Unary operator precedence and evaluation in arithmetic expressions",
          "hint": "1. ++x runs (x becomes 5, yields 5). 2. 5 * 2 = 10. 3. y-- yields 3 (y becomes 2). 4. Subtraction of x (5). Total: 10 + 3 - 5 = 8."
        },
        {
          "level": "Level 3: sizeof Side-Effect Trap",
          "levelClass": "diff-exam",
          "statement": "Predict the output of: int n = 10; printf(\"%zu\\n\", sizeof(n++)); printf(\"n = %d\\n\", n); Why does n remain 10 after sizeof?",
          "input": "None (Midterm Code Snippet)",
          "output": "4 (or byte size of int)\nn = 10",
          "concept": "Compile-time evaluation of sizeof without runtime side-effects",
          "hint": "sizeof is an operator evaluated at compile-time by the compiler analyzing the operand's type. The expression n++ is never executed at runtime!"
        },
        {
          "problemId": "15.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Explain the difference between `++x` (Prefix) and `x++` (Postfix). - *Rule:* Prefix = \"Update first, then use\". Postfix = \"Use current value, then update\". - Predict the output:"
        },
        {
          "problemId": "15.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "```c int a = 5; printf(\"%d\\n\", ++a); printf(\"%d\\n\", a); ```"
        },
        {
          "problemId": "15.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "```c int a = 5; printf(\"%d\\n\", a++); printf(\"%d\\n\", a); ```"
        },
        {
          "problemId": "15.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "```c int x = 10; int y = x--; printf(\"x = %d, y = %d\\n\", x, y); ```"
        },
        {
          "problemId": "15.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "```c int x = 10; int y = --x; printf(\"x = %d, y = %d\\n\", x, y); ```"
        },
        {
          "problemId": "15.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "```c int a = 4, b = 3; int c = a++ + ++b; printf(\"a=%d, b=%d, c=%d\\n\", a, b, c); ```"
        },
        {
          "problemId": "15.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "```c int x = 7; int y = --x + x--; printf(\"x=%d, y=%d\\n\", x, y); ```"
        },
        {
          "problemId": "15.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "```c int m = 10; int n = m++ * 2; printf(\"m=%d, n=%d\\n\", m, n); ```"
        },
        {
          "problemId": "15.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "```c int m = 10; int n = ++m * 2; printf(\"m=%d, n=%d\\n\", m, n); ```"
        },
        {
          "problemId": "15.10",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "```c int p = 5; p++; ++p; printf(\"p = %d\\n\", p); ```"
        },
        {
          "problemId": "15.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What is the output of `sizeof(int)` vs `sizeof(char)` vs `sizeof(double)`?"
        },
        {
          "problemId": "15.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Predict the output and explain why `x` does not change: ```c int x = 10; printf(\"%zu\\n\", sizeof(x++)); printf(\"x = %d\\n\", x); ``` *(sizeof operates at compile time; expressions inside are never executed!).*"
        },
        {
          "problemId": "15.13",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What does Unary Minus `-` do? Predict: ```c int a = -15; printf(\"%d\\n\", -a); ```"
        },
        {
          "problemId": "15.14",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What does the Address-of operator `&` return? Print the address of an integer variable."
        },
        {
          "problemId": "15.15",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "```c int i = 1; i = i++ + ++i; // Note: Modifying variable multiple times between sequence points is UB in standard C, but tested on college exams! ```"
        },
        {
          "problemId": "15.16",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "```c int a = 2, b = 3; int res = a++ * --b + ++a; printf(\"res = %d, a = %d, b = %d\\n\", res, a, b); ```"
        },
        {
          "problemId": "15.17",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "```c int x = 0; printf(\"%d %d %d\\n\", x, x++, ++x); ```"
        },
        {
          "problemId": "15.18",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "What does the Bitwise NOT operator `~` do? Predict: ```c int x = 5; printf(\"%d\\n\", ~x); // Formula: -(x + 1) ```"
        },
        {
          "problemId": "15.19",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Write a program proving that $-x == \\sim x + 1$ (Two's complement negation)."
        }
      ],
      "objective": "Distinguish between prefix (`++x`) and postfix (`x++`) increment/decrement operators and evaluate unary expressions.",
      "whatIsIt": "Unary operators operate on a single operand to modify, negate, inspect size, or extract address.",
      "keyConcept": [
        "Prefix `++x`: Increment first, then use the new updated value in the expression.",
        "Postfix `x++`: Use the current value in the expression first, then increment the variable afterward.",
        "`sizeof` is a compile-time unary operator that returns size in bytes; `&` extracts memory address."
      ],
      "ruleFormula": "Prefix:  y = ++x; \u2794 Step 1: x = x + 1; Step 2: y = x;\nPostfix: y = x++; \u2794 Step 1: y = x;     Step 2: x = x + 1;",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    int a = 5, b = 5;\n    int pre = ++a; // a becomes 6, pre is 6\n    int post = b++; // post is 5, b becomes 6\n    printf(\"a=%d, pre=%d\\n\", a, pre);\n    printf(\"b=%d, post=%d\\n\", b, post);\n    return 0;\n}",
      "exampleOutput": "a=6, pre=6\nb=6, post=5",
      "commonMistake": {
        "trap": "Modifying a variable more than once in a single expression (e.g. `printf(\"%d %d\", x, x++);`).",
        "why": "This causes UNDEFINED BEHAVIOR in C (lack of sequence point). Different compilers yield different outputs.",
        "fix": "Never read and modify the same variable multiple times within a single expression."
      },
      "memoryTrick": "Prefix = Pre-pay (Update first). Postfix = Post-pay (Use first, pay later).",
      "practiceQuestion": {
        "q": "If `int x = 10; int y = x++ + ++x;`, why should you never write this code?",
        "hint": "It modifies `x` twice between sequence points, producing compiler-dependent Undefined Behavior."
      }
    },
    {
      "id": "ch2_3",
      "chapterId": 2,
      "number": 16,
      "title": "Relational operators",
      "badge": "Comparisons & Truth",
      "readingTime": "9 min read",
      "overview": "<p>Relational operators compare values: <code>&gt;</code>, <code>&lt;</code>, <code>&gt;=</code>, <code>&lt;=</code>, <code>==</code>, <code>!=</code>. Returns 1 for True, 0 for False.</p>",
      "deepDive": "<p>Chained comparison trap: `5 < x < 10` does NOT check range! Evaluates (5 < x) to 0 or 1, then compares with 10 (always True).</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Expression</th><th>Result</th></tr></thead><tbody><tr><td><code>10 &gt; 5</code></td><td><code>1</code> (True)</td></tr><tr><td><code>4 == 9</code></td><td><code>0</code> (False)</td></tr><tr><td><code>5 &gt; 3 &gt; 1</code></td><td><code>0</code> (1 &gt; 1 is 0)</td></tr></tbody></table>",
      "diagram": "TRAP: 3 < x < 10\nStep 1: (3 < x) -> 0 or 1\nStep 2: (0 or 1) < 10 -> ALWAYS 1!",
      "code": "#include <stdio.h>\nint main(void) {\n    int x = 25;\n    printf(\"Proper check: %d\\n\", (x > 5 && x < 10));\n    return 0;\n}",
      "output": "Proper check: 0",
      "codeExplanation": "Shows correct logical range checking with &&.",
      "examTraps": "Equality `==` vs assignment `=`. `if (x = 5)` is always True!",
      "practiceProblems": [
        {
          "level": "Level 1: The Chained Comparison Pitfall",
          "levelClass": "diff-very-basic",
          "statement": "Explain why writing if (18 <= age <= 60) is a major logic bug in C. Trace the evaluation for age = 75, and provide the correct C syntax.",
          "input": "age = 75",
          "output": "Buggy evaluates to 1 (True); Correct evaluates to 0 (False)",
          "concept": "Left-to-right associativity of relational operators vs logical AND",
          "hint": "C evaluates (18 <= 75) which produces 1. Then it evaluates (1 <= 60) which is 1 (True)! The correct syntax is: if (age >= 18 && age <= 60)."
        },
        {
          "level": "Level 2: Relational Truth Arithmetic",
          "levelClass": "diff-basic",
          "statement": "Evaluate the exact numeric value: int res = (12 > 7) + (5 == 9) * 10 + (8 <= 8); Show each intermediate reduction step.",
          "input": "None",
          "output": "res = 2",
          "concept": "Relational operators yielding integer truth values 1 and 0",
          "hint": "(12 > 7) yields 1. (5 == 9) yields 0. 0 * 10 = 0. (8 <= 8) yields 1. Total: 1 + 0 + 1 = 2."
        },
        {
          "level": "Level 3: Assignment vs Equality Trap",
          "levelClass": "diff-exam",
          "statement": "What is the console output of: int x = 0; if (x = 5) printf(\"Alpha\\n\"); else printf(\"Beta\\n\"); Explain why Alpha is printed.",
          "input": "Code dry run",
          "output": "Alpha",
          "concept": "Assignment operator (=) returning value inside condition instead of equality (==)",
          "hint": "x = 5 writes 5 into x and produces the value 5. In C, any non-zero value is treated as True, so the if block executes unconditionally!"
        },
        {
          "problemId": "16.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`printf(\"%d\\n\", 10 > 5);`"
        },
        {
          "problemId": "16.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`printf(\"%d\\n\", 10 < 5);`"
        },
        {
          "problemId": "16.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`printf(\"%d\\n\", 10 == 10);`"
        },
        {
          "problemId": "16.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`printf(\"%d\\n\", 10 != 10);`"
        },
        {
          "problemId": "16.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`printf(\"%d\\n\", 5 >= 5);`"
        },
        {
          "problemId": "16.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "What is the fundamental difference between `=` (Assignment) and `==` (Equality)? - Predict the output:"
        },
        {
          "problemId": "16.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "```c int a = 5, b = 10; printf(\"%d\\n\", a + 5 == b); ```"
        },
        {
          "problemId": "16.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "```c int x = 0; printf(\"%d\\n\", x == 0); ```"
        },
        {
          "problemId": "16.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "```c int a = 15; printf(\"%d\\n\", a > 10 && a < 20); ```"
        },
        {
          "problemId": "16.10",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write a program to read two integers and print `1` if the first is strictly greater than the second, or `0` otherwise."
        },
        {
          "problemId": "16.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Explain why the math expression `5 < x < 10` is a **FATAL TRAP in C**! - *Trace:* In C, `5 < x < 10` evaluates left-to-right: `(5 < x)` evaluates to `1` or `0`. Then `(1 < 10)` or `(0 < 10)` is **ALWAYS TRUE (1)**, regardless of $x$! - *Fix:* How must you write this condition properly? (`x > 5 && x < 10`)."
        },
        {
          "problemId": "16.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Predict the output: ```c int x = 25; printf(\"%d\\n\", 5 < x < 10); // Prints 1! ```"
        },
        {
          "problemId": "16.13",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "```c int a = 10, b = 20, c = 30; printf(\"%d\\n\", a < b < c); printf(\"%d\\n\", c > b > a); ``` *(Explanation: `10 < 20` is 1; `1 < 30` is 1. But `30 > 20` is 1; `1 > 10` is 0!).*"
        },
        {
          "problemId": "16.14",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "```c int x = 5; if (x = 0) printf(\"A\\n\"); else printf(\"B\\n\"); ``` *(Assignment `x = 0` evaluates to 0, which is False $\\implies$ prints B!).*"
        }
      ],
      "objective": "Evaluate relational comparisons and understand how truth values (1 and 0) are represented in C.",
      "whatIsIt": "Relational operators compare two values and evaluate to boolean integers: 1 for TRUE and 0 for FALSE.",
      "keyConcept": [
        "Relational operators: `==` (equal), `!=` (not equal), `<`, `>`, `<=`, `>=`.",
        "In C, there is no native primitive boolean in C89: ZERO (`0`) is FALSE, and ANY NON-ZERO value is TRUE.",
        "Relational operators have lower precedence than arithmetic operators (`a + b > c` computes `a + b` first)."
      ],
      "ruleFormula": "Truth Values in C:\nCondition True  \u2794 Evaluates to 1\nCondition False \u2794 Evaluates to 0\nCondition Test  \u2794 Any non-zero integer is treated as True; exactly 0 is False",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    printf(\"5 == 5: %d\\n\", 5 == 5); // 1 (True)\n    printf(\"5 > 10: %d\\n\", 5 > 10); // 0 (False)\n    printf(\"5 != 3: %d\\n\", 5 != 3); // 1 (True)\n    return 0;\n}",
      "exampleOutput": "5 == 5: 1\n5 > 10: 0\n5 != 3: 1",
      "commonMistake": {
        "trap": "Chaining relational operators mathematically: `if (18 <= age <= 60)`.",
        "why": "C evaluates left-to-right! `18 <= age` becomes `1` or `0`. Then `1 <= 60` is ALWAYS TRUE for any age, even age 100!",
        "fix": "Use logical AND `&&`: `if (age >= 18 && age <= 60)`."
      },
      "memoryTrick": "Double equals `==` tests equality; single equals `=` destroys your data by assignment.",
      "practiceQuestion": {
        "q": "What does `printf(\"%d\", 3 < 2 < 1);` print in C?",
        "hint": "Left-to-right associativity: `3 < 2` evaluates to `0` (false). Then `0 < 1` evaluates to `1` (true). Prints 1!"
      }
    },
    {
      "id": "ch2_4",
      "chapterId": 2,
      "number": 17,
      "title": "Logical operators",
      "badge": "Short-Circuit Logic",
      "readingTime": "11 min read",
      "overview": "<p>Logical operators: AND (<code>&amp;&amp;</code>), OR (<code>||</code>), NOT (<code>!</code>). Uses short-circuit evaluation.</p>",
      "deepDive": "<p>In `A && B`, if A is 0, B is NEVER executed. In `A || B`, if A is 1, B is NEVER executed.</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>A</th><th>B</th><th>A &amp;&amp; B</th><th>A || B</th></tr></thead><tbody><tr><td>0</td><td>1</td><td>0</td><td>1</td></tr><tr><td>1</td><td>0</td><td>0</td><td>1</td></tr></tbody></table>",
      "diagram": "SHORT-CIRCUIT:\n0 && (++x)  ====> x is NOT incremented!\n1 || (++y)  ====> y is NOT incremented!",
      "code": "#include <stdio.h>\nint main(void) {\n    int a = 0, b = 5;\n    int res = a && ++b;\n    printf(\"res=%d, b=%d\\n\", res, b);\n    return 0;\n}",
      "output": "res=0, b=5",
      "codeExplanation": "Because a is 0, ++b is completely skipped.",
      "examTraps": "Short-circuit side effect questions are university exam favorites.",
      "practiceProblems": [
        {
          "level": "Level 1: Short-Circuit AND Evaluation",
          "levelClass": "diff-very-basic",
          "statement": "Predict the values of a, b, and r after: int a = 0, b = 10; int r = a && (++b > 5); Explain why variable b did not increment.",
          "input": "a = 0, b = 10",
          "output": "r = 0, a = 0, b = 10",
          "concept": "Short-circuit evaluation of logical AND (&&)",
          "hint": "Because the left operand a is 0 (False), the result of && is guaranteed to be 0. C completely skips evaluating (++b > 5), leaving b unchanged."
        },
        {
          "level": "Level 2: Leap Year Compound Expression",
          "levelClass": "diff-basic",
          "statement": "Construct a single C logical expression using ||, &&, and % to check whether an integer year is a Leap Year (divisible by 400, OR divisible by 4 and NOT divisible by 100).",
          "input": "year = 2024 (Leap), year = 1900 (Not Leap)",
          "output": "2024: 1 (True) | 1900: 0 (False)",
          "concept": "Compound boolean conditions with mixed logical operators",
          "hint": "(year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))"
        },
        {
          "level": "Level 3: Triangle Validity Verification",
          "levelClass": "diff-exam",
          "statement": "Write a program that inputs three side lengths a, b, and c, and checks if they can form a valid triangle using logical operators. (Sum of any two sides must be strictly greater than the third side).",
          "input": "a = 3, b = 4, c = 5 (Valid) | a = 1, b = 2, c = 5 (Invalid)",
          "output": "Valid Triangle",
          "concept": "Triangle Inequality Theorem with compound logical AND",
          "hint": "if (a + b > c && a + c > b && b + c > a) printf(\"Valid\\n\"); else printf(\"Invalid\\n\");"
        },
        {
          "problemId": "17.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Logical AND (`&&`)"
        },
        {
          "problemId": "17.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Logical OR (`||`)"
        },
        {
          "problemId": "17.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Logical NOT (`!`) - Predict the output:"
        },
        {
          "problemId": "17.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`printf(\"%d\\n\", (5 > 3) && (10 > 7));`"
        },
        {
          "problemId": "17.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`printf(\"%d\\n\", (5 > 3) || (10 < 7));`"
        },
        {
          "problemId": "17.6",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`printf(\"%d\\n\", !(5 > 3));`"
        },
        {
          "problemId": "17.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "\"Age is between 18 and 60 inclusive.\""
        },
        {
          "problemId": "17.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "\"Number is divisible by both 3 AND 5.\""
        },
        {
          "problemId": "17.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "\"Character is either `'Y'` OR `'y'`.\""
        },
        {
          "problemId": "17.10",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "\"Marks are greater than 50 AND attendance is at least 75%.\""
        },
        {
          "problemId": "17.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What is Short-Circuit Evaluation? - *Rule 1:* In `A && B`, if $A$ is False (0), is $B$ evaluated? (NO!). - *Rule 2:* In `A || B`, if $A$ is True (1), is $B$ evaluated? (NO!). - Predict the output and trace variable changes:"
        },
        {
          "problemId": "17.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "```c int a = 0, b = 5; if (a && ++b) { printf(\"Yes\\n\"); } printf(\"b = %d\\n\", b); // b remains 5! ++b was skipped! ```"
        },
        {
          "problemId": "17.13",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "```c int a = 1, b = 5; if (a || ++b) { printf(\"Yes\\n\"); } printf(\"b = %d\\n\", b); // b remains 5! ++b was skipped! ```"
        },
        {
          "problemId": "17.14",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "```c int x = 0; if (x != 0 && (100 / x > 2)) { printf(\"Safe\\n\"); } else { printf(\"Division by zero prevented by short-circuit!\\n\"); } ```"
        },
        {
          "problemId": "17.15",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "```c int a = 1, b = 0, c = 2; int res = a++ && ++b || c++; printf(\"res=%d, a=%d, b=%d, c=%d\\n\", res, a, b, c); ```"
        },
        {
          "problemId": "17.16",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Write the complete logical condition to test whether year `Y` is a **Leap Year**: *(Divisible by 400) OR ((Divisible by 4) AND (NOT divisible by 100))*. - *C code:* `(y % 400 == 0) || ((y % 4 == 0) && (y % 100 != 0))`."
        },
        {
          "problemId": "17.17",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Write a single C logical expression to test whether character `ch` is an English alphabet letter (either uppercase `'A'`-`'Z'` or lowercase `'a'`-`'z'`)."
        }
      ],
      "objective": "Master logical operators (&&, ||, !) and the critical exam mechanism of short-circuit evaluation.",
      "whatIsIt": "Logical operators combine relational expressions to perform boolean logic and decision making.",
      "keyConcept": [
        "`&&` (Logical AND): True only if BOTH operands are non-zero.",
        "`||` (Logical OR): True if AT LEAST ONE operand is non-zero.",
        "Short-circuit rule: in `A && B`, if A is false (0), B is NEVER evaluated. In `A || B`, if A is true (1), B is NEVER evaluated."
      ],
      "ruleFormula": "Short-Circuit Mechanics:\n0 && (anything) \u2794 Skips right-hand expression entirely!\n1 || (anything) \u2794 Skips right-hand expression entirely!",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    int a = 0, b = 10;\n    // Since 'a' is 0 (False), ++b is NEVER EXECUTED!\n    if (a && ++b) {\n        printf(\"Inside if\\n\");\n    }\n    printf(\"b is still: %d\\n\", b); // b remains 10!\n    return 0;\n}",
      "exampleOutput": "b is still: 10",
      "commonMistake": {
        "trap": "Placing modifying expressions (like `++i` or `scanf`) on the right side of `&&` or `||`.",
        "why": "If the left side short-circuits, the right-side increment or input will silently not run, creating phantom bugs.",
        "fix": "Execute mutations before the condition: `++b; if (a && b) { ... }`."
      },
      "memoryTrick": "AND halts at first ZERO. OR halts at first ONE.",
      "practiceQuestion": {
        "q": "What is printed by: `int x=1, y=0; if (x || ++y) printf(\"%d %d\", x, y);`?",
        "hint": "Because `x` is 1 (True), the `||` short-circuits. `++y` is never evaluated, so `y` remains `0`. Prints `1 0`."
      }
    },
    {
      "id": "ch2_5",
      "chapterId": 2,
      "number": 18,
      "title": "Assignment operators",
      "badge": "Compound Operations",
      "readingTime": "9 min read",
      "overview": "<p>Assignment operators store values in memory: Simple (<code>=</code>) and Compound (<code>+=</code>, <code>-=</code>, <code>*=</code>, <code>/=</code>, <code>%=</code>).</p>",
      "deepDive": "<p>Associativity is RIGHT-TO-LEFT: `a = b = c = 10;` assigns 10 to c, then b, then a. Compound: `x += 5` expands to `x = x + 5`.</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Operator</th><th>Equivalent</th></tr></thead><tbody><tr><td><code>a += b</code></td><td><code>a = a + b</code></td></tr><tr><td><code>a *= b + 1</code></td><td><code>a = a * (b + 1)</code> (Parens around RHS!)</td></tr></tbody></table>",
      "diagram": "RIGHT-TO-LEFT ASSOCIATIVITY:\na = b = c = 5;\n1. c = 5\n2. b = 5\n3. a = 5",
      "code": "#include <stdio.h>\nint main(void) {\n    int x = 10;\n    x += 5; x *= 2;\n    printf(\"x = %d\\n\", x);\n    return 0;\n}",
      "output": "x = 30",
      "codeExplanation": "x becomes 15, then 30.",
      "examTraps": "In `x *= y + 2;`, it evaluates as `x = x * (y + 2);`, NOT `x * y + 2`!",
      "practiceProblems": [
        {
          "level": "Level 1: Compound Assignment Precedence Trap",
          "levelClass": "diff-very-basic",
          "statement": "Given int x = 5, y = 3; what is the value of x after executing x *= y + 2;? Explain why the result is 25 and NOT 17.",
          "input": "x = 5, y = 3",
          "output": "x = 25",
          "concept": "Compound assignment right-hand-side expression grouping",
          "hint": "Compound assignment x *= expr is equivalent to x = x * (expr). The right-hand side (y + 2 = 5) is evaluated completely first, then multiplied: 5 * 5 = 25."
        },
        {
          "level": "Level 2: Chained Assignment Associativity",
          "levelClass": "diff-basic",
          "statement": "Trace the step-by-step execution: int a, b, c; a = b = c = 12 + 8; What are the final values of all three variables and what is the associativity direction?",
          "input": "None",
          "output": "a = 20, b = 20, c = 20",
          "concept": "Right-to-left associativity of assignment operator (=)",
          "hint": "12 + 8 = 20. Then c = 20, then b = 20, then a = 20. Evaluated Right to Left."
        },
        {
          "problemId": "18.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "```c int x = 10; x += 5; printf(\"x = %d\\n\", x); ```"
        },
        {
          "problemId": "18.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "```c int x = 20; x -= 7; printf(\"x = %d\\n\", x); ```"
        },
        {
          "problemId": "18.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "```c int x = 6; x *= 4; printf(\"x = %d\\n\", x); ```"
        },
        {
          "problemId": "18.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "```c int x = 30; x /= 5; printf(\"x = %d\\n\", x); ```"
        },
        {
          "problemId": "18.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "```c int x = 17; x %= 5; printf(\"x = %d\\n\", x); ```"
        },
        {
          "problemId": "18.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "In `x *= a + b`, explain why this is equivalent to `x = x * (a + b)` and NOT `x = x * a + b`. - Predict the output:"
        },
        {
          "problemId": "18.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "```c int x = 2; x *= 3 + 4; printf(\"x = %d\\n\", x); // x = 2 * (7) = 14, NOT 2*3 + 4 = 10! ```"
        },
        {
          "problemId": "18.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "```c int a = 5; a += a; printf(\"a = %d\\n\", a); ```"
        },
        {
          "problemId": "18.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "```c int a = 10; a += a -= a *= a; printf(\"a = %d\\n\", a); ```"
        },
        {
          "problemId": "18.10",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Why does the assignment expression itself have a value? Predict: ```c int a; printf(\"%d\\n\", a = 42); // Prints 42! ```"
        },
        {
          "problemId": "18.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Trace: ```c int x, y, z; x = y = z = 100; x += (y -= (z *= 2)); printf(\"x=%d, y=%d, z=%d\\n\", x, y, z); ```"
        }
      ],
      "objective": "Master simple assignment, compound assignment operators, and right-to-left associativity.",
      "whatIsIt": "Assignment operators store the value of an expression into a writable memory location (l-value).",
      "keyConcept": [
        "Simple assignment `=`: evaluates right-hand expression and copies value into left-hand variable.",
        "Compound operators (`+=`, `-=`, `*=`, `/=`, `%=`): shorthand for `x = x OP (expr)`.",
        "Assignment has Right-to-Left associativity: `a = b = c = 10;` assigns 10 to c, then b, then a."
      ],
      "ruleFormula": "Compound Assignment Rule:\nvar OP= expr;  is strictly equivalent to:  var = var OP (expr);\nExample: x *= y + 2; \u2794 x = x * (y + 2); (Parenthesized!)",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    int x = 10, y = 3;\n    x *= y + 2; // Computes x = x * (y + 2) = 10 * 5 = 50\n    printf(\"x = %d\\n\", x);\n    return 0;\n}",
      "exampleOutput": "x = 50",
      "commonMistake": {
        "trap": "Assuming `x *= y + 2` expands to `x = x * y + 2`.",
        "why": "Compound assignment evaluates the ENTIRE right-hand side first as if enclosed in parentheses.",
        "fix": "Always remember: `x *= expr` is `x = x * (expr)`."
      },
      "memoryTrick": "Left side MUST be a variable (l-value). `5 = x;` is illegal!",
      "practiceQuestion": {
        "q": "If `int a = 5; a += a *= 2;`, what is the final value of `a`?",
        "hint": "Right-to-left: `a *= 2` makes `a = 10`. Then `a += 10` adds 10 to the new value of `a` (10), resulting in `20`."
      }
    },
    {
      "id": "ch2_6",
      "chapterId": 2,
      "number": 19,
      "title": "Conditional operator",
      "badge": "Ternary Inline Logic",
      "readingTime": "9 min read",
      "overview": "<p>The <strong>conditional operator</strong> (<code>? :</code>) is C's only ternary operator: <code>condition ? expr1 : expr2;</code>.</p>",
      "deepDive": "<p>If condition is True, expr1 evaluates; else expr2 evaluates. Can be nested: `max = (a > b) ? a : b;`.</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Task</th><th>Ternary Syntax</th></tr></thead><tbody><tr><td>Max of 2</td><td><code>max = (a &gt; b) ? a : b;</code></td></tr><tr><td>Even/Odd</td><td><code>(n % 2 == 0) ? \"Even\" : \"Odd\"</code></td></tr></tbody></table>",
      "diagram": "TERNARY EXECUTION:\n(condition) ? [ True Path ] : [ False Path ]",
      "code": "#include <stdio.h>\nint main(void) {\n    int a = 15, b = 25;\n    int max = (a > b) ? a : b;\n    printf(\"Max: %d\\n\", max);\n    return 0;\n}",
      "output": "Max: 25",
      "codeExplanation": "Evaluates condition inline and assigns larger operand.",
      "examTraps": "Ternary operator has very low precedence; always wrap in parentheses when used in arithmetic.",
      "practiceProblems": [
        {
          "level": "Level 1: Maximum of Two Numbers",
          "levelClass": "diff-very-basic",
          "statement": "Write a program that takes two integer inputs a and b and uses the ternary operator (?:) to assign the larger value to a variable max in a single concise line.",
          "input": "a = 45, b = 82",
          "output": "Maximum = 82",
          "concept": "Basic ternary conditional syntax (condition ? expr1 : expr2)",
          "hint": "int max = (a > b) ? a : b;"
        },
        {
          "level": "Level 2: Maximum of Three Numbers",
          "levelClass": "diff-basic",
          "statement": "Find the largest of three numbers a, b, and c using a single nested ternary expression without using any if statements or logical && operators.",
          "input": "a = 12, b = 45, c = 28",
          "output": "Largest = 45",
          "concept": "Nested ternary conditional expressions",
          "hint": "int largest = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);"
        },
        {
          "level": "Level 3: Inline Absolute Value & Status",
          "levelClass": "diff-exam",
          "statement": "Write an inline ternary expression to calculate the absolute value of integer n (-15 becomes 15), and print whether n is 'Positive', 'Negative', or 'Zero' using chained ternary strings.",
          "input": "n = -15",
          "output": "Absolute: 15 | Status: Negative",
          "concept": "Inline mathematical absolute value and chained ternary string classification",
          "hint": "int abs_val = (n < 0) ? -n : n; const char *status = (n > 0) ? \"Positive\" : (n < 0 ? \"Negative\" : \"Zero\");"
        },
        {
          "problemId": "19.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "State the syntax of the conditional operator and identify its three components."
        },
        {
          "problemId": "19.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write an expression using `? :` to find the maximum of two integers `a` and `b`."
        },
        {
          "problemId": "19.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write an expression using `? :` to find the minimum of two integers `a` and `b`."
        },
        {
          "problemId": "19.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write an expression using `? :` that evaluates to string `\"EVEN\"` or `\"ODD\"` based on `n % 2 == 0`."
        },
        {
          "problemId": "19.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write a program to determine if a student has Passed (score $\\ge 50$) or Failed using `? :`."
        },
        {
          "problemId": "19.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "```c int a = 15, b = 25; printf(\"Max: %d\\n\", (a > b) ? a : b); ```"
        },
        {
          "problemId": "19.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "```c int n = -10; printf(\"%s\\n\", (n >= 0) ? \"Positive\" : \"Negative\"); ```"
        },
        {
          "problemId": "19.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "```c int x = 5; int y = (x == 5) ? 100 : 200; printf(\"y = %d\\n\", y); ```"
        },
        {
          "problemId": "19.9",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Write an expression to find the **Maximum of Three Numbers** $a, b, c$ using nested ternary operators: `int max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);`"
        },
        {
          "problemId": "19.10",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Write an expression to determine if a number is Positive, Negative, or Zero: `(n > 0) ? \"Positive\" : ((n < 0) ? \"Negative\" : \"Zero\")`"
        },
        {
          "problemId": "19.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Compute the absolute value $|x|$ using `? :`."
        },
        {
          "problemId": "19.12",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "```c int a = 1, b = 2, c = 3; int res = (a > b) ? a : (b > c) ? b : c; printf(\"res = %d\\n\", res); ```"
        }
      ],
      "objective": "Use the conditional ternary operator `?:` as a compact inline expression alternative to simple `if-else`.",
      "whatIsIt": "The conditional operator is C's only ternary operator (taking 3 operands) that returns a value based on a condition.",
      "keyConcept": [
        "Syntax: `condition ? expression_true : expression_false;`.",
        "Unlike `if-else` (which is a statement), the ternary operator is an EXPRESSION that evaluates to a return value.",
        "Can be used directly inside `printf`, assignments, or return statements."
      ],
      "ruleFormula": "Ternary Syntax:\nresult = (condition) ? (val_if_true) : (val_if_false);",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    int a = 15, b = 25;\n    int max = (a > b) ? a : b;\n    printf(\"Max = %d\\n\", max);\n    printf(\"Parity: %s\\n\", (max % 2 == 0) ? \"EVEN\" : \"ODD\");\n    return 0;\n}",
      "exampleOutput": "Max = 25\nParity: ODD",
      "commonMistake": {
        "trap": "Returning mismatched incompatible data types from the true and false branches without type compatibility.",
        "why": "The compiler determines the overall expression type at compile time by balancing both branches.",
        "fix": "Ensure both expression branches return compatible types (e.g. numeric types or string literals)."
      },
      "memoryTrick": "Question ? Yes : No.",
      "practiceQuestion": {
        "q": "Rewrite `if (n >= 0) sign = 1; else sign = -1;` in a single line using the ternary operator.",
        "hint": "`sign = (n >= 0) ? 1 : -1;`"
      }
    },
    {
      "id": "ch2_7",
      "chapterId": 2,
      "number": 20,
      "title": "Operator precedence",
      "badge": "Evaluation Hierarchy",
      "readingTime": "12 min read",
      "overview": "<p><strong>Operator precedence</strong> determines the grouping and evaluation order of operators in complex expressions.</p>",
      "deepDive": "<p>Hierarchy: 1. () [] 2. ++ -- ! (Unary R-to-L) 3. * / % 4. + - 5. &lt; &lt;= &gt; &gt;= 6. == != 7. &amp;&amp; 8. || 9. ? : 10. = += (R-to-L) 11. , (comma).</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Rank</th><th>Operators</th><th>Associativity</th></tr></thead><tbody><tr><td>1</td><td><code>() [] -&gt; .</code></td><td>Left to Right</td></tr><tr><td>2</td><td><code>++ -- ! ~ sizeof (type)</code></td><td>Right to Left</td></tr><tr><td>3</td><td><code>* / %</code></td><td>Left to Right</td></tr><tr><td>4</td><td><code>+ -</code></td><td>Left to Right</td></tr><tr><td>5</td><td><code>&lt; &lt;= &gt; &gt;=</code></td><td>Left to Right</td></tr><tr><td>6</td><td><code>== !=</code></td><td>Left to Right</td></tr><tr><td>7</td><td><code>&amp;&amp;</code></td><td>Left to Right</td></tr><tr><td>8</td><td><code>||</code></td><td>Left to Right</td></tr><tr><td>9</td><td><code>= += -= *= /=</code></td><td>Right to Left</td></tr></tbody></table>",
      "diagram": "EVALUATION STEP-BY-STEP:\n5 + 3 * 2\n1. Multiplication (3 * 2 = 6)\n2. Addition (5 + 6 = 11)",
      "code": "#include <stdio.h>\nint main(void) {\n    int res = 10 - 4 / 2 + 3 * 2;\n    printf(\"Result: %d\\n\", res);\n    return 0;\n}",
      "output": "Result: 14",
      "codeExplanation": "4/2=2, 3*2=6 -> 10 - 2 + 6 = 14.",
      "examTraps": "Division and multiplication have EQUAL precedence; associativity is Left to Right: 10 / 2 * 3 = 15, not 1!",
      "practiceProblems": [
        {
          "level": "Level 1: Manual Step-by-Step Expression Reduction",
          "levelClass": "diff-very-basic",
          "statement": "Evaluate the following expression manually step-by-step showing each operator reduction on paper: int ans = 100 / 5 * 2 + 18 % 4 - 3; What is the final value of ans?",
          "input": "None",
          "output": "ans = 39",
          "concept": "Precedence and Left-to-Right associativity of /, *, % versus +, -",
          "hint": "1. 100 / 5 = 20. 2. 20 * 2 = 40. 3. 18 % 4 = 2. 4. 40 + 2 = 42. 5. 42 - 3 = 39."
        },
        {
          "level": "Level 2: Mixed Operator Precedence Reduction",
          "levelClass": "diff-basic",
          "statement": "Determine the boolean value of: int res = 5 + 3 * 2 > 10 && 4 - 2 * 3 < 0; Write out the full reduction table for arithmetic, relational, and logical operators.",
          "input": "None",
          "output": "res = 1 (True)",
          "concept": "Precedence hierarchy across Arithmetic > Relational > Logical operators",
          "hint": "Arithmetic first: 3*2=6 -> 5+6=11; 2*3=6 -> 4-6=-2. Relational next: 11 > 10 is 1 (True); -2 < 0 is 1 (True). Logical last: 1 && 1 is 1."
        },
        {
          "problemId": "20.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`5 + 3 * 2`"
        },
        {
          "problemId": "20.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`10 - 4 / 2`"
        },
        {
          "problemId": "20.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`10 / 2 * 3` (Check left-to-right associativity!)"
        },
        {
          "problemId": "20.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`(5 + 3) * 2`"
        },
        {
          "problemId": "20.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`100 % 30 * 2`"
        },
        {
          "problemId": "20.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "`5 + 2 > 6` (Arithmetic `+` before Relational `>`)"
        },
        {
          "problemId": "20.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "`10 - 2 == 4 * 2`"
        },
        {
          "problemId": "20.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "`10 > 5 && 3 < 4` (Relational before Logical AND)"
        },
        {
          "problemId": "20.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "`5 + 3 * 2 > 10 && 4 < 2 * 3`"
        },
        {
          "problemId": "20.10",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Evaluate: `2 + 3 * 4 - 6 / 2` | Step | Operation | Resulting Sub-expression | |:---|:---|:---| | 1 | `3 * 4 = 12` | `2 + 12 - 6 / 2` | | 2 | `6 / 2 = 3` | `2 + 12 - 3` | | 3 | `2 + 12 = 14` | `14 - 3` | | 4 | `14 - 3 = 11` | `11` |"
        },
        {
          "problemId": "20.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Evaluate: `10 != 5 + 5 && 8 >= 4 + 4`"
        },
        {
          "problemId": "20.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Evaluate: `!0 && !5`"
        },
        {
          "problemId": "20.13",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "`int ans = 4 * 3 / 2;`"
        },
        {
          "problemId": "20.14",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "`int ans = 4 / 2 * 3;`"
        },
        {
          "problemId": "20.15",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "`int ans = 5 + 4 * 3 / 2 - 1;`"
        },
        {
          "problemId": "20.16",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "`int ans = 10 == 10 && 5 > 2 || 0;`"
        },
        {
          "problemId": "20.17",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "`int ans = !(5 > 2) || (3 != 1 && 4 >= 4);`"
        },
        {
          "problemId": "20.18",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "`int ans = 10 > 5 ? 1 + 2 : 3 + 4;`"
        },
        {
          "problemId": "20.19",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "`int a = 5, b = 2; int ans = a > b ? a++ : b++;`"
        },
        {
          "problemId": "20.20",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "`int ans = 2 + 3 << 1;` (`+` has higher precedence than `<<`!)"
        }
      ],
      "objective": "Memorize the 15-level operator precedence hierarchy and associativity rules to evaluate complex C expressions.",
      "whatIsIt": "Precedence determines which operator executes first in an expression; Associativity determines direction (left-to-right or right-to-left) when precedence is equal.",
      "keyConcept": [
        "Parentheses `()` always have highest precedence (Level 1).",
        "Arithmetic (`*`, `/`, `%` then `+`, `-`) beats Relational (`<`, `>`), which beats Equality (`==`, `!=`), which beats Logical (`&&`, `||`).",
        "Assignment (`=`, `+=`) and Ternary (`?:`) have near-lowest precedence and associate RIGHT-TO-LEFT."
      ],
      "ruleFormula": "Precedence Summary Hierarchy:\n1. () [] -> .  \u2794  2. Unary (++ -- ! sizeof) [R->L]  \u2794  3. * / %  \u2794  4. + -  \u2794\n5. < <= > >=  \u2794  6. == !=  \u2794  7. &&  \u2794  8. ||  \u2794  9. ?: [R->L]  \u2794  10. = OP= [R->L]",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    int res = 5 + 3 * 2 > 10 && 4 == 4;\n    // 1. 3 * 2 = 6\n    // 2. 5 + 6 = 11\n    // 3. 11 > 10 = 1\n    // 4. 4 == 4 = 1\n    // 5. 1 && 1 = 1\n    printf(\"Result = %d\\n\", res);\n    return 0;\n}",
      "exampleOutput": "Result = 1",
      "commonMistake": {
        "trap": "Assuming `+` and `*` have left-to-right precedence in `a + b * c`.",
        "why": "Precedence applies BEFORE associativity. `*` has higher rank than `+`, so `b * c` is computed first.",
        "fix": "When in doubt, always use explicit parentheses `(a + b) * c` to guarantee intended order."
      },
      "memoryTrick": "P-U-M-A-R-E-L-A: Parentheses, Unary, Multiplicative, Additive, Relational, Equality, Logical, Assignment.",
      "practiceQuestion": {
        "q": "Evaluate: `int x = 2 + 3 * 4 / 2 - 1;` step by step.",
        "hint": "1. `3 * 4 = 12`; 2. `12 / 2 = 6`; 3. `2 + 6 = 8`; 4. `8 - 1 = 7`. Result is 7."
      }
    },
    {
      "id": "ch2_8",
      "chapterId": 2,
      "number": 21,
      "title": "Expressions",
      "badge": "Syntax & Semantics",
      "readingTime": "9 min read",
      "overview": "<p>An <strong>expression</strong> is a combination of operands and operators that reduces to a single resulting value.</p>",
      "deepDive": "<p>Categories: Arithmetic, Relational, Logical, Assignment, Comma. Comma operator (,) evaluates left-to-right and returns rightmost value.</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Expression</th><th>Evaluates To</th></tr></thead><tbody><tr><td><code>x = (5, 10, 15)</code></td><td><code>15</code> (Comma operator returns rightmost)</td></tr></tbody></table>",
      "diagram": "COMMA OPERATOR:\nx = (a = 2, b = 3, a + b);  ====> x receives 5",
      "code": "#include <stdio.h>\nint main(void) {\n    int x = (1, 2, 3);\n    printf(\"x = %d\\n\", x);\n    return 0;\n}",
      "output": "x = 3",
      "codeExplanation": "Comma operator evaluates each term and yields rightmost value.",
      "examTraps": "Comma operator has the absolute lowest precedence in C.",
      "practiceProblems": [
        {
          "level": "Level 1: Comma Operator in Assignments",
          "levelClass": "diff-very-basic",
          "statement": "Predict the output of the program: int a, b; int x = (a = 3, b = 5, a * b + 2); printf(\"x = %d, a = %d, b = %d\\n\", x, a, b);",
          "input": "Code dry run",
          "output": "x = 17, a = 3, b = 5",
          "concept": "Comma operator sequence evaluation returning the rightmost sub-expression",
          "hint": "The comma operator evaluates each expression left-to-right. The value produced for x is the final expression: a * b + 2 = 3 * 5 + 2 = 17."
        },
        {
          "level": "Level 2: Mixed-Mode Arithmetic Hierarchy",
          "levelClass": "diff-basic",
          "statement": "Evaluate the exact value and type of: float res = 5 / 2 * 2.0f + 7 / 2; Why is the result 7.00 and NOT 8.50?",
          "input": "None",
          "output": "res = 7.00",
          "concept": "Mixed-mode integer division truncation before float promotion",
          "hint": "5 / 2 truncates to integer 2. Then 2 * 2.0f evaluates to float 4.0f. Then 7 / 2 truncates to integer 3. Total: 4.0f + 3 = 7.0f."
        },
        {
          "problemId": "21.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "$ax^2 + bx + c$"
        },
        {
          "problemId": "21.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "$\\frac{a + b}{c + d}$"
        },
        {
          "problemId": "21.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "$\\frac{-b + \\sqrt{b^2 - 4ac}}{2a}$"
        },
        {
          "problemId": "21.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "$s = ut + \\frac{1}{2}at^2$"
        },
        {
          "problemId": "21.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "$A = P(1 + \\frac{R}{100})^T$"
        },
        {
          "problemId": "21.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "In $s = ut + \\frac{1}{2}at^2$, why is writing `0.5 * a * t * t` correct, while `(1 / 2) * a * t * t` results in zero?"
        },
        {
          "problemId": "21.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write a C program to evaluate $s = ut + 0.5at^2$ for $u = 5.0, a = 9.8, t = 3.0$."
        },
        {
          "problemId": "21.8",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What is a Side Effect in an expression? Give an example where an expression alters a variable's memory while returning a value."
        },
        {
          "problemId": "21.9",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What is a Sequence Point? Why does `a = i++ + i++;` produce undefined behavior?"
        }
      ],
      "objective": "Classify and evaluate arithmetic, relational, and mixed-mode expressions according to C evaluation standards.",
      "whatIsIt": "An expression is any legal combination of operands, operators, and function calls that evaluates to a single scalar value.",
      "keyConcept": [
        "Arithmetic expressions return numeric values (`a + b * 2`).",
        "Relational/Logical expressions return truth values (integer 1 or 0).",
        "In C, expressions can produce 'side-effects' when operators like `++`, `--`, or `=` modify variable states during evaluation."
      ],
      "ruleFormula": "Operand Hierarchy in Expressions:\nchar/short \u2794 int \u2794 unsigned int \u2794 long \u2794 float \u2794 double \u2794 long double",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    int a = 10, b = 20;\n    int val = (a = b + 5) * 2; // a becomes 25, val becomes 50\n    printf(\"a = %d, val = %d\\n\", a, val);\n    return 0;\n}",
      "exampleOutput": "a = 25, val = 50",
      "commonMistake": {
        "trap": "Assuming subexpressions are evaluated in left-to-right order of function calls (e.g. `f() + g()`).",
        "why": "C does NOT specify whether `f()` or `g()` is called first. Only operator precedence is fixed, not argument evaluation order.",
        "fix": "Avoid writing code where one subexpression mutates a state needed by another in the same expression."
      },
      "memoryTrick": "Every expression produces a single final value.",
      "practiceQuestion": {
        "q": "What is the value and type of `10 > 5 + 2`?",
        "hint": "`5 + 2` is `7`. `10 > 7` is true, so the value is integer `1`."
      }
    },
    {
      "id": "ch2_9",
      "chapterId": 2,
      "number": 22,
      "title": "Type conversions",
      "badge": "Casting & Promotion",
      "readingTime": "11 min read",
      "overview": "<p><strong>Type conversion</strong> alters a variable's data type: Implicit (Coercion by compiler) and Explicit (Type casting by programmer).</p>",
      "deepDive": "<p>Implicit Promotion Hierarchy: char/short -> int -> unsigned int -> long -> float -> double -> long double. Explicit casting: `(float)a / b;`.</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Type</th><th>Code</th><th>Result</th></tr></thead><tbody><tr><td>Implicit</td><td><code>float f = 5;</code></td><td>5.0f (Promoted automatically)</td></tr><tr><td>Explicit</td><td><code>(float)5 / 2</code></td><td>2.5f (Forced floating division)</td></tr><tr><td>Truncation</td><td><code>int x = 3.99;</code></td><td>3 (Decimal discarded completely)</td></tr></tbody></table>",
      "diagram": "PROMOTION HIERARCHY:\nchar/short ===> int ===> float ===> double",
      "code": "#include <stdio.h>\nint main(void) {\n    int a = 5, b = 2;\n    float bad = a / b;\n    float good = (float)a / b;\n    printf(\"bad: %.2f, good: %.2f\\n\", bad, good);\n    return 0;\n}",
      "output": "bad: 2.00, good: 2.50",
      "codeExplanation": "Explicit casting (float)a prevents integer division truncation.",
      "examTraps": "Assigning float to int does NOT round; it strictly truncates: `int x = 9.99` becomes 9!",
      "practiceProblems": [
        {
          "level": "Level 1: Explicit Type Casting for Accuracy",
          "levelClass": "diff-very-basic",
          "statement": "A student scores 42 marks out of 50 in an exam. Write a program to calculate the exact percentage using explicit casting (float) to prevent truncation to zero.",
          "input": "obtained = 42, total = 50",
          "output": "Percentage = 84.00%",
          "concept": "Explicit type casting (float) in arithmetic division",
          "hint": "float percentage = ((float)obtained / total) * 100.0f; Without (float), 42 / 50 evaluates to integer 0."
        },
        {
          "level": "Level 2: Narrowing Conversion & Overflow",
          "levelClass": "diff-basic",
          "statement": "What happens when integer 300 is cast into a signed 8-bit char (char c = (char)300;)? Write code to print the decimal value of c and explain bit truncation.",
          "input": "int x = 300",
          "output": "c = 44",
          "concept": "Narrowing type conversion, bit truncation, and two's complement wrap-around",
          "hint": "300 in binary is 00000001 00101100. Casting to 8-bit char discards the high byte, leaving 00101100 which equals 32 + 8 + 4 = 44 in decimal."
        },
        {
          "problemId": "22.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "What is Implicit Type Conversion (Coercion)? Give an example."
        },
        {
          "problemId": "22.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "What is Explicit Type Conversion (Type Casting)? Give an example. - Predict the output:"
        },
        {
          "problemId": "22.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`printf(\"%f\\n\", 5 / 2);`"
        },
        {
          "problemId": "22.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`printf(\"%f\\n\", (float)5 / 2);`"
        },
        {
          "problemId": "22.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "`printf(\"%d\\n\", (int)5.85);`"
        },
        {
          "problemId": "22.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write a program to compute the exact average of 7 and 2: ```c int a = 7, b = 2; float avg = (float)a / b; ```"
        },
        {
          "problemId": "22.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Convert a character `'c'` to uppercase by subtracting 32 using ASCII casting: `char upper = (char)('c' - 32);`."
        },
        {
          "problemId": "22.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Predict the output: ```c float f = 9.99f; int i = (int)f; printf(\"i = %d\\n\", i); // Truncates towards zero: 9 ```"
        },
        {
          "problemId": "22.9",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "State the C automatic type promotion ladder from `char` up to `long double`."
        },
        {
          "problemId": "22.10",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Predict the type and value: ```c char c = 'A'; // ASCII 65 int i = 5; float f = 2.5f; // What is the type of: c + i * f ? ``` *(Answer: float, value = 65 + 12.5 = 77.5).*"
        },
        {
          "problemId": "22.11",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "What happens when an `unsigned int` and a `signed int` are compared? Predict: ```c int a = -1; unsigned int b = 1; if (a < b) printf(\"A\\n\"); else printf(\"B\\n\"); ``` *(Answer: Prints B! Because `a` is converted to unsigned, becoming 4,294,967,295!).*"
        }
      ],
      "objective": "Understand implicit type promotion (widening) and explicit type casting (narrowing) rules.",
      "whatIsIt": "Type conversion converts a variable or value from one data type into another either automatically (implicit) or manually (explicit casting).",
      "keyConcept": [
        "Implicit conversion: lower types automatically promote to higher types without data loss (e.g. `int + float \u2794 float`).",
        "Explicit cast syntax: `(target_type)expression` forcefully converts types (e.g. `(float)5 / 2 \u2794 2.5`).",
        "Narrowing conversions (e.g. `(int)5.85`) truncate the decimal portion entirely, returning `5`."
      ],
      "ruleFormula": "Explicit Casting Syntax:  (type_name) expression\nConversion Traps:\n5 / 2        = 2     (int / int)\n5.0 / 2      = 2.5   (double / int \u2794 double)\n(float)5 / 2 = 2.5   (float / int \u2794 float)\n(int)5.8     = 5     (truncated)",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    int total = 17, count = 5;\n    float avg_broken = total / count;         // 3.000000 (Bug!)\n    float avg_correct = (float)total / count; // 3.400000 (Correct!)\n    printf(\"Broken: %.2f, Correct: %.2f\\n\", avg_broken, avg_correct);\n    return 0;\n}",
      "exampleOutput": "Broken: 3.00, Correct: 3.40",
      "commonMistake": {
        "trap": "Writing `(float)(total / count)` to cast.",
        "why": "The integer division `total / count` executes FIRST inside the parentheses (yielding 3), and is only then cast to 3.0f!",
        "fix": "Cast the variable BEFORE the division: `(float)total / count`."
      },
      "memoryTrick": "Promote upward automatically (int to float); cast downward carefully (float to int loses decimals).",
      "practiceQuestion": {
        "q": "Explain why `(float)5 / 2` gives `2.5` but `(float)(5 / 2)` gives `2.0`.",
        "hint": "Parentheses force `5 / 2` to execute first as integer division (2), which is then cast to `2.0f`. In `(float)5 / 2`, `5` is cast to `5.0f` first, prompting floating-point division."
      }
    },
    {
      "id": "ch2_10",
      "chapterId": 2,
      "number": 23,
      "title": "Library functions",
      "badge": "Standard API",
      "readingTime": "10 min read",
      "overview": "<p><strong>Library functions</strong> are pre-compiled functions provided by the C Standard Runtime Library (libc) declared in standard header files (<code>&lt;stdio.h&gt;</code>, <code>&lt;math.h&gt;</code>, <code>&lt;ctype.h&gt;</code>, <code>&lt;stdlib.h&gt;</code>).</p>",
      "deepDive": "<p>Common headers: &lt;stdio.h&gt; (printf, scanf), &lt;math.h&gt; (sqrt, pow, fmod, abs), &lt;ctype.h&gt; (toupper, tolower, isdigit), &lt;stdlib.h&gt; (exit, rand, abs).</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Header</th><th>Functions</th><th>Usage</th></tr></thead><tbody><tr><td><code>&lt;math.h&gt;</code></td><td><code>sqrt(x), pow(x,y), fmod(x,y)</code></td><td>Math calculations (links with -lm)</td></tr><tr><td><code>&lt;ctype.h&gt;</code></td><td><code>isalpha(c), isdigit(c)</code></td><td>Character testing</td></tr></tbody></table>",
      "diagram": "C STANDARD LIBRARY ARCHITECTURE:\nYour Code ---> #include <math.h> ---> Linker (-lm) ---> libc.a binary",
      "code": "#include <stdio.h>\n#include <math.h>\nint main(void) {\n    printf(\"sqrt(25.0) = %.1f, pow(2,3) = %.1f\\n\", sqrt(25.0), pow(2.0, 3.0));\n    return 0;\n}",
      "output": "sqrt(25.0) = 5.0, pow(2,3) = 8.0",
      "codeExplanation": "Demonstrates math library functions.",
      "examTraps": "On Linux/GCC, compiling programs with `<math.h>` requires the `-lm` flag (e.g. `gcc main.c -lm`) to link the math library!",
      "practiceProblems": [
        {
          "problemId": "23.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Square root of $64$ (`sqrt(64.0)`)"
        },
        {
          "problemId": "23.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "$2^5$ (`pow(2.0, 5.0)`)"
        },
        {
          "problemId": "23.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Absolute value of $-7.8$ (`fabs(-7.8)`)"
        },
        {
          "problemId": "23.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Ceiling of $4.2$ (`ceil(4.2)` $\\implies 5.0$)"
        },
        {
          "problemId": "23.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Floor of $4.8$ (`floor(4.8)` $\\implies 4.0$)"
        },
        {
          "problemId": "23.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "`isalpha('G')`"
        },
        {
          "problemId": "23.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "`isdigit('9')`"
        },
        {
          "problemId": "23.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "`isupper('a')`"
        },
        {
          "problemId": "23.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "`toupper('b')`"
        },
        {
          "problemId": "23.10",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "`tolower('M')`"
        },
        {
          "problemId": "23.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Write a program to calculate the hypotenuse of a right-angled triangle given base $b = 3.0$ and height $h = 4.0$ using `sqrt((b*b) + (h*h))`."
        },
        {
          "problemId": "23.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Write a program to compute the roots of a quadratic equation $ax^2 + bx + c = 0$ using `sqrt()`."
        },
        {
          "problemId": "23.13",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What is the difference between `abs()` from `<stdlib.h>` (for integers) and `fabs()` from `<math.h>` (for floating-point)?"
        }
      ],
      "objective": "Identify essential C standard library header files and functions (`<math.h>`, `<ctype.h>`, `<stdlib.h>`).",
      "whatIsIt": "Library functions are built-in, pre-compiled functions provided by the C standard library to perform mathematical, character, and utility operations.",
      "keyConcept": [
        "`<math.h>`: `sqrt(x)`, `pow(base, exp)`, `abs(x)`, `ceil(x)`, `floor(x)`. Math functions typically take and return `double`.",
        "`<ctype.h>`: character classification and conversion: `isalpha(c)`, `isdigit(c)`, `toupper(c)`, `tolower(c)`.",
        "`<stdlib.h>`: memory allocation, process control (`exit(0)`), and pseudo-random numbers (`rand()`)."
      ],
      "ruleFormula": "Common Library Headers:\n#include <math.h>   \u2794 sqrt(), pow(), fabs(), ceil(), floor()\n#include <ctype.h>  \u2794 isdigit(), isalpha(), toupper(), tolower()\n#include <stdlib.h> \u2794 abs(), rand(), exit()",
      "exampleCode": "#include <stdio.h>\n#include <math.h>\n#include <ctype.h>\n\nint main(void) {\n    double root = sqrt(49.0);\n    double power = pow(2.0, 5.0);\n    char ch = 'a';\n    printf(\"sqrt(49) = %.1f, pow(2, 5) = %.1f\\n\", root, power);\n    printf(\"'%c' in uppercase is '%c'\\n\", ch, toupper(ch));\n    return 0;\n}",
      "exampleOutput": "sqrt(49) = 7.0, pow(2, 5) = 32.0\n'a' in uppercase is 'A'",
      "commonMistake": {
        "trap": "Calling `pow(2, 3)` and printing with `%d` directly.",
        "why": "`pow()` returns a 64-bit `double`. Passing a double to `%d` (which expects a 32-bit int) reads corrupt memory bits.",
        "fix": "Print doubles with `%lf` or `%f`, or explicitly cast to int: `(int)pow(2, 3)`."
      },
      "memoryTrick": "Include the header file (`#include <math.h>`) or your compiler will issue implicit declaration warnings.",
      "practiceQuestion": {
        "q": "Write code to compute the hypotenuse $c = \\sqrt{a^2 + b^2}$ using `<math.h>`.",
        "hint": "`double c = sqrt(pow(a, 2) + pow(b, 2));` or `sqrt(a*a + b*b);` (which is faster)."
      }
    },
    {
      "id": "ch2_11",
      "chapterId": 2,
      "number": 24,
      "title": "scanf()",
      "badge": "Formatted Input",
      "readingTime": "12 min read",
      "overview": "<p><code>scanf()</code> reads formatted input from standard input (keyboard) and stores values into variables via memory addresses.</p>",
      "deepDive": "<p>Requires the address-of operator <code>&amp;</code> for non-pointer variables: <code>scanf(\"%d\", &amp;n);</code>. Returns the number of successfully scanned items.</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Type</th><th>Format Specifier</th><th>scanf Example</th></tr></thead><tbody><tr><td>int</td><td><code>%d</code></td><td><code>scanf(\"%d\", &amp;age);</code></td></tr><tr><td>float</td><td><code>%f</code></td><td><code>scanf(\"%f\", &amp;rate);</code></td></tr><tr><td>double</td><td><code>%lf</code></td><td><code>scanf(\"%lf\", &amp;pi);</code> (Note %lf is required!)</td></tr><tr><td>char</td><td><code>%c</code></td><td><code>scanf(\" %c\", &amp;ch);</code> (Space skips newline!)</td></tr></tbody></table>",
      "diagram": "KEYBOARD INPUT BUFFER TO RAM:\nKeyboard buffer: ['2', '5', '\\n']\nscanf(\"%d\", &age) ====> reads 25 into address &age, leaves '\\n' in buffer!",
      "code": "#include <stdio.h>\nint main(void) {\n    int age;\n    printf(\"Enter age: \");\n    if (scanf(\"%d\", &age) == 1) {\n        printf(\"Age entered: %d\\n\", age);\n    }\n    return 0;\n}",
      "output": "Enter age: 20\nAge entered: 20",
      "codeExplanation": "Validates return value of scanf to confirm successful read.",
      "examTraps": "Forgetting '&' causes Segmentation Fault crashes! For double, scanf REQUIRES '%lf' (unlike printf which accepts %f).",
      "practiceProblems": [
        {
          "level": "Level 1: Heterogeneous Multi-Input Reading",
          "levelClass": "diff-very-basic",
          "statement": "Write a program to read three different variables in a single scanf() statement: Student Roll (int), CGPA (double), and Section (char). Echo them in a formatted output line.",
          "input": "101 3.85 A",
          "output": "Roll: 101 | CGPA: 3.85 | Section: A",
          "concept": "Multi-variable input parsing with proper format specifiers (%d, %lf, %c)",
          "hint": "scanf(\"%d %lf %c\", &roll, &cgpa, &section); Remember that double in scanf strictly requires %lf!"
        },
        {
          "level": "Level 2: Return Value Input Validation",
          "levelClass": "diff-basic",
          "statement": "Write a program that prompts the user for two integers. Use the return value of scanf() to verify whether the user entered valid numbers or invalid text characters.",
          "input": "15 25 (Valid) | 15 abc (Invalid)",
          "output": "Valid: 2 items read | Error: Invalid integer format entered!",
          "concept": "Validating user input using the integer return count of scanf()",
          "hint": "if (scanf(\"%d %d\", &a, &b) == 2) printf(\"Success\\n\"); else printf(\"Input error\\n\");"
        },
        {
          "problemId": "24.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write code to prompt and read a single integer into `int age;`."
        },
        {
          "problemId": "24.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write code to prompt and read a decimal number into `float salary;`."
        },
        {
          "problemId": "24.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write code to prompt and read a double precision value into `double distance;` using `%lf`."
        },
        {
          "problemId": "24.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write code to prompt and read a single character into `char grade;`."
        },
        {
          "problemId": "24.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Why is the address-of operator `&` required in `scanf(\"%d\", &n);`? What happens if you omit it?"
        },
        {
          "problemId": "24.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write a program to read **two integers** on a single line and print their sum."
        },
        {
          "problemId": "24.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write a program to read the length and width of a rectangle from the user and display its area."
        },
        {
          "problemId": "24.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write a program to read marks for 3 exams and compute their average."
        },
        {
          "problemId": "24.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write a program to read Principal, Rate, and Time and compute Simple Interest."
        },
        {
          "problemId": "24.10",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Spot the bug in this code: ```c double radius; scanf(\"%f\", &radius); // BUG: %f is for float! Must use %lf for double! ```"
        },
        {
          "problemId": "24.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Explain why reading a character after reading an integer fails: ```c int age; char grade; scanf(\"%d\", &age); scanf(\"%c\", &grade); // SKIPPED! Why? ``` *(Answer: `scanf(\"%d\")` leaves the Enter key `\\n` in the input buffer. The `%c` immediately reads that leftover `\\n`!).*"
        },
        {
          "problemId": "24.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "How do you fix the newline trap in `scanf`? (Answer: add a leading space `scanf(\" %c\", &grade);` to discard whitespace!)."
        },
        {
          "problemId": "24.13",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What does the return value of `scanf` represent? ```c int k = scanf(\"%d %d\", &a, &b); // What is k if user types two numbers? (2) ```"
        },
        {
          "problemId": "24.14",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Write a complete interactive student report program that prompts for: - Student Roll (`int`) - Grade letter (`char`) - GPA (`float`) and prints a neat formatted summary."
        }
      ],
      "objective": "Master formatted input with `scanf()`, address-of operator `&` requirements, and whitespace skipping rules.",
      "whatIsIt": "The `scanf()` library function reads formatted input from the standard input stream (`stdin`, keyboard) and converts it to typed binary memory.",
      "keyConcept": [
        "`scanf(\"%d\", &var)` requires the address-of operator `&` to know which RAM memory address to populate.",
        "`scanf()` skips leading whitespace (spaces, tabs, newlines) automatically for numbers (`%d`, `%f`), but NOT for characters (`%c`).",
        "`scanf()` returns the number of successfully matched and assigned input items."
      ],
      "ruleFormula": "Syntax: scanf(\"format_string\", &arg1, &arg2, ...);\nReturn Value: Integer count of successfully read items (or EOF upon input failure)",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    int age = 0;\n    printf(\"Enter age: \");\n    // In real execution, user types 20:\n    // scanf(\"%d\", &age);\n    age = 20; \n    printf(\"Age stored at address %p is %d\\n\", (void*)&age, age);\n    return 0;\n}",
      "exampleOutput": "Age stored at address 0x7ffd9a5b3fec is 20",
      "commonMistake": {
        "trap": "Forgetting the ampersand `&` in `scanf(\"%d\", age);`.",
        "why": "The compiler passes the current variable value (e.g. 0) as a memory pointer, causing a fatal Segmentation Fault crash.",
        "fix": "Always pass `&variable` to `scanf()`, except when reading strings into char arrays."
      },
      "memoryTrick": "`scanf` needs an address (`&`) so it knows which house to deliver the letter to.",
      "practiceQuestion": {
        "q": "Why does `scanf(\"%s\", name)` NOT need an `&` symbol when reading a string?",
        "hint": "In C, the name of an array (e.g. `char name[50]`) automatically decays into the memory address of its first element (`&name[0]`)."
      }
    },
    {
      "id": "ch2_12",
      "chapterId": 2,
      "number": 25,
      "title": "getchar() and gets()",
      "badge": "Character & Line Input",
      "readingTime": "10 min read",
      "overview": "<p><code>getchar()</code> reads one single character from stdin. <code>gets()</code> reads a full line until newline.</p>",
      "deepDive": "<p>getchar returns int to accommodate EOF (-1). The Newline Buffer Trap: When you enter a number and press Enter, '\\n' sits in the buffer. The next getchar/scanf(\"%c\") reads that leftover '\\n' instantly! Fix: `scanf(\" %c\", &amp;ch);`.</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Function</th><th>Input Type</th><th>Buffer Behavior</th></tr></thead><tbody><tr><td><code>getchar()</code></td><td>Single character</td><td>Reads next byte in buffer (including '\\n')</td></tr><tr><td><code>gets()</code></td><td>Full line string</td><td><strong>Unsafe!</strong> Deprecated in C99, removed in C11 (use fgets)</td></tr></tbody></table>",
      "diagram": "THE NEWLINE BUFFER TRAP:\n[ '2' | '0' | '\\n' ]\nscanf(\"%d\") consumes '20' ---> Buffer now has: [ '\\n' ]\ngetchar() immediately reads '\\n'! (Appears to skip input!)",
      "code": "#include <stdio.h>\nint main(void) {\n    int age;\n    char grade;\n    printf(\"Enter age: \");\n    scanf(\"%d\", &age);\n    printf(\"Enter grade: \");\n    scanf(\" %c\", &grade); // Space skips leftover newline!\n    printf(\"Age: %d, Grade: %c\\n\", age, grade);\n    return 0;\n}",
      "output": "Enter age: 20\nEnter grade: A\nAge: 20, Grade: A",
      "codeExplanation": "Space before %c instructs scanf to ignore whitespace and newlines.",
      "examTraps": "gets() has no buffer bounds checking, causing dangerous buffer overflows. Modern C uses fgets(), but university exams still test gets() theory.",
      "practiceProblems": [
        {
          "level": "Level 1: Fixing the Newline Buffer Trap",
          "levelClass": "diff-very-basic",
          "statement": "Demonstrate the 'Leftover Newline Buffer Trap'. Write a program that reads an integer with scanf(\"%d\", &age), then reads a character with getchar(). Show how to fix the skipped input using scanf(\" %c\", &ch) or a dummy getchar().",
          "input": "21 then Enter, then M",
          "output": "Age: 21, Gender: M",
          "concept": "Input buffer leftover newline trap and buffer clearing methods",
          "hint": "Pressing Enter leaves '\\n' in stdin. Adding a leading space in scanf(\" %c\", &ch) tells C to skip all leading whitespace and newlines."
        },
        {
          "level": "Level 2: Character Streaming Loop",
          "levelClass": "diff-basic",
          "statement": "Write a program using getchar() in a while loop that reads characters typed by the user one by one until a newline ('\\n') is encountered, and counts the total number of vowels entered.",
          "input": "university",
          "output": "Vowel count = 5",
          "concept": "Character streaming and condition testing with getchar()",
          "hint": "char ch; int count = 0; while ((ch = getchar()) != '\\n') { if (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u') count++; }"
        },
        {
          "problemId": "26.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "What is `getchar()` and what header file is required?"
        },
        {
          "problemId": "26.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "What is `putchar()`?"
        },
        {
          "problemId": "26.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write a program to read a character using `getchar()` and print it using `putchar()`."
        },
        {
          "problemId": "26.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "What is the return type of `getchar()`? (Answer: `int`, so it can represent all unsigned char values PLUS the EOF sentinel `-1`!)."
        },
        {
          "problemId": "26.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Compare `getchar()` with `scanf(\"%c\", &ch)`."
        },
        {
          "problemId": "26.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write a program to read a character and print its next alphabetical successor using `putchar(ch + 1)`."
        },
        {
          "problemId": "26.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write a program to read an uppercase letter with `getchar()` and print its lowercase counterpart using `putchar(ch + 32)`."
        },
        {
          "problemId": "27.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "What is the purpose of `gets()`?"
        },
        {
          "problemId": "27.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "What is the purpose of `puts()`? Does it automatically append a newline?"
        },
        {
          "problemId": "27.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write a program to read a student's full name (including spaces) using `gets()` and display it with `puts()`."
        },
        {
          "problemId": "27.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Compare `puts(str)` with `printf(\"%s\\n\", str)`."
        },
        {
          "problemId": "27.5",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Why was `gets()` officially removed from the C11 standard? What is a Buffer Overflow?"
        },
        {
          "problemId": "27.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "What is the modern, safe alternative to `gets()`? (`fgets(str, sizeof(str), stdin)`)."
        }
      ],
      "objective": "Compare character and string input functions (`getchar()`, `gets()`, and `fgets()`) and handle the leftover newline trap.",
      "whatIsIt": "`getchar()` reads a single character from stdin; `gets()` was an unsafe legacy line-reading function replaced by secure `fgets()`.",
      "keyConcept": [
        "`getchar()` reads exactly one byte from the input buffer, including leftover `\\n` and whitespace.",
        "`gets()` is DEPRECATED and dangerous because it lacks buffer size bounds, leading to buffer overflow security vulnerabilities.",
        "The 'Leftover Newline Trap': reading an integer with `scanf(\"%d\")` leaves a `\\n` enter key in the buffer that immediately consumes subsequent `getchar()` or `scanf(\"%c\")` calls."
      ],
      "ruleFormula": "Character Input: int ch = getchar();\nClearing Newline Buffer: while ((c = getchar()) != '\\n' && c != EOF);",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    char ch = 'Y';\n    printf(\"Character read: %c (ASCII: %d)\\n\", ch, ch);\n    return 0;\n}",
      "exampleOutput": "Character read: Y (ASCII: 89)",
      "commonMistake": {
        "trap": "Calling `scanf(\"%d\", &num);` followed immediately by `scanf(\"%c\", &ch);`.",
        "why": "The user presses [Enter] after typing the number. The newline `\\n` remains in the buffer and is immediately consumed by `%c` as an empty line!",
        "fix": "Use a leading space in the format string: `scanf(\" %c\", &ch);` to instruct `scanf` to skip preceding whitespace."
      },
      "memoryTrick": "Space before `%c`: `\" %c\"` eats the leftover `\\n` cookie!",
      "practiceQuestion": {
        "q": "Why is `gets()` banned in modern C99/C11 standards, and what should be used instead?",
        "hint": "`gets()` does not know array size and allows attackers to overwrite stack memory (buffer overflow). Use `fgets(buffer, sizeof(buffer), stdin)` instead."
      }
    },
    {
      "id": "ch2_13",
      "chapterId": 2,
      "number": 26,
      "title": "printf(), putchar(), puts(), and formatted input/output",
      "badge": "Formatted Output",
      "readingTime": "12 min read",
      "overview": "<p>Output functions: <code>printf()</code> (formatted streams), <code>putchar()</code> (single character), and <code>puts()</code> (string with automatic newline).</p>",
      "deepDive": "<p>Format Modifiers: <code>%5d</code> (right-aligned in 5 spaces), <code>%-5d</code> (left-aligned), <code>%05d</code> (zero-padded), <code>%.2f</code> (rounds to 2 decimal places).</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Specifier</th><th>Input 45</th><th>Output</th><th>Description</th></tr></thead><tbody><tr><td><code>%5d</code></td><td>45</td><td><code>|   45|</code></td><td>Width 5, right-aligned</td></tr><tr><td><code>%-5d</code></td><td>45</td><td><code>|45   |</code></td><td>Width 5, left-aligned</td></tr><tr><td><code>%05d</code></td><td>45</td><td><code>|00045|</code></td><td>Width 5, zero-padded</td></tr><tr><td><code>%.2f</code></td><td>3.14159</td><td><code>|3.14|</code></td><td>Rounds to 2 decimal places</td></tr></tbody></table>",
      "diagram": "FORMAT WIDTH & ALIGNMENT:\n%5d   ====> [   45 ]  (3 spaces + 45)\n%-5d  ====> [ 45   ]  (45 + 3 spaces)\n%05d  ====> [ 00045 ]  (3 zeros + 45)",
      "code": "#include <stdio.h>\nint main(void) {\n    int n = 45;\n    float f = 3.14159f;\n    printf(\"|%5d|\\n\", n);\n    printf(\"|%-5d|\\n\", n);\n    printf(\"|%05d|\\n\", n);\n    printf(\"|%8.2f|\\n\", f);\n    puts(\"puts() prints a string and automatically adds a newline!\");\n    return 0;\n}",
      "output": "|   45|\n|45   |\n|00045|\n|    3.14|\nputs() prints a string and automatically adds a newline!",
      "codeExplanation": "Demonstrates formatted alignment and precision flags.",
      "examTraps": "puts() automatically prints a newline '\\n' at the end; printf() does not unless you specify \\n.",
      "practiceProblems": [
        {
          "level": "Level 1: Tabular Invoice Printing",
          "levelClass": "diff-very-basic",
          "statement": "Write a program to print a formatted grocery receipt. Item Name must be left-aligned in 15 spaces (%-15s), Quantity right-aligned in 5 spaces (%5d), and Price right-aligned in 8 spaces with 2 decimals (%8.2f).",
          "input": "Apples 5 2.50 | Milk 2 3.75",
          "output": "Clean aligned columnar invoice table",
          "concept": "Field width, alignment flags, and precision formatting in printf",
          "hint": "printf(\"%-15s %5d %8.2f\\n\", item, qty, price);"
        },
        {
          "level": "Level 2: Multi-Base and Zero-Padding",
          "levelClass": "diff-basic",
          "statement": "Read an integer from the user and print it in: (1) Decimal (%d), (2) Octal (%o), (3) Hexadecimal (%X), and (4) Zero-padded to exactly 6 digits (%06d).",
          "input": "45",
          "output": "Dec: 45 | Oct: 55 | Hex: 2D | Padded: 000045",
          "concept": "Number base specifiers (%d, %o, %X) and zero-fill width modifiers (%06d)",
          "hint": "printf(\"Dec: %d | Oct: %o | Hex: %X | Padded: %06d\\n\", n, n, n, n);"
        },
        {
          "problemId": "25.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write `printf` calls to print an integer `x = 42`, a float `f = 3.14f`, a double `d = 1.23456`, and a char `c = 'Z'`."
        },
        {
          "problemId": "25.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "How do you print a literal percent sign `%` in `printf`? (`%%`)."
        },
        {
          "problemId": "25.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "How do you print double quotes `\"` in `printf`? (`\\\"`)."
        },
        {
          "problemId": "25.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Write a program to print numbers $1, 2, 3$ separated by tabs (`\\t`) on line 1, and $4, 5, 6$ on line 2."
        },
        {
          "problemId": "25.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "How do you limit a floating-point number to exactly 2 decimal places? (`%.2f`)."
        },
        {
          "problemId": "25.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "`printf(\"|%5d|\\n\", 42);` (Right-aligned in width 5)"
        },
        {
          "problemId": "25.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "`printf(\"|%-5d|\\n\", 42);` (Left-aligned in width 5)"
        },
        {
          "problemId": "25.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "`printf(\"|%05d|\\n\", 42);` (Zero-padded in width 5)"
        },
        {
          "problemId": "25.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "`printf(\"|%8.2f|\\n\", 25.5);`"
        },
        {
          "problemId": "25.10",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Print an invoice receipt row showing Item Name (left aligned, width 15), Quantity (right aligned, width 5), and Price (right aligned, width 10, 2 decimals)."
        },
        {
          "problemId": "25.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "What does `printf` return? - *Rule:* Returns the total number of characters printed! - Predict: ```c int count = printf(\"Hello\\n\"); printf(\"Count = %d\\n\", count); // Count = 6 (5 letters + '\\n') ```"
        },
        {
          "problemId": "25.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Predict: ```c printf(\"%d\", printf(\"%d\", 1234)); // Inner prints 1234 and returns 4; outer prints 4! Output: 12344 ```"
        },
        {
          "problemId": "28.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Format the number `25` as a 6-digit zero-padded number (`000025`)."
        },
        {
          "problemId": "28.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Format `123.4567` to exactly 1 decimal place (`123.5`)."
        },
        {
          "problemId": "28.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Create a 3-column table output for Student Name, Roll No, and Marks with neat alignment."
        }
      ],
      "objective": "Master formatted output formatting flags (width, precision, alignment) with `printf()`, `putchar()`, and `puts()`.",
      "whatIsIt": "`printf()` writes formatted text to stdout; `putchar()` outputs a single char; `puts()` outputs a string followed automatically by a newline `\\n`.",
      "keyConcept": [
        "`%[flags][width][.precision]specifier`: e.g. `%8.2f` reserves 8 column spaces with 2 decimal digits.",
        "Minus sign flag `%-10s`: left-aligns text within the reserved width.",
        "`puts(str)` automatically appends a trailing newline `\\n`; `putchar(c)` writes exactly one char without newline."
      ],
      "ruleFormula": "Formatting Specifiers Cheat Sheet:\n%d (int) | %f (float) | %lf (double) | %c (char) | %s (string) | %p (pointer)\n%05d \u2794 Zero-padded 5 digits (00042) | %-10s \u2794 Left-aligned 10 spaces",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    printf(\"Standard Pi : %f\\n\", 3.14159265);\n    printf(\"2 Decimals  : %.2f\\n\", 3.14159265);\n    printf(\"Table Column: |%-10s|%8.2f|\\n\", \"Apple\", 2.5);\n    printf(\"Table Column: |%-10s|%8.2f|\\n\", \"Orange\", 12.75);\n    return 0;\n}",
      "exampleOutput": "Standard Pi : 3.141593\n2 Decimals  : 3.14\nTable Column: |Apple     |    2.50|\nTable Column: |Orange    |   12.75|",
      "commonMistake": {
        "trap": "Using `%lf` inside `printf()` vs inside `scanf()`.",
        "why": "In `printf()`, `%f` and `%lf` behave identically because floats are automatically promoted to doubles. In `scanf()`, you MUST use `%lf` for `double*` and `%f` for `float*`!",
        "fix": "Always use `%f` for float, `%lf` for double."
      },
      "memoryTrick": "`puts` puts a string and PUSHES a newline. `printf` only prints what you explicitly tell it.",
      "practiceQuestion": {
        "q": "What will `printf(\"%06.2f\", 3.5);` print to the console?",
        "hint": "Total width 6, 2 decimal places: `003.50` (length is 6 characters including decimal point, padded with leading zeros)."
      }
    },
    {
      "id": "ch3_1",
      "chapterId": 3,
      "number": 27,
      "title": "if and if-else statements",
      "badge": "Decision Branching",
      "readingTime": "12 min read",
      "overview": "<p>Conditional branching: <code>if</code> executes code if condition is non-zero (True). <code>if-else</code> provides two mutually exclusive execution paths.</p>",
      "deepDive": "<p>Syntax: `if (condition) { ... } else { ... }`. In C, non-zero is True, 0 is False. Else-if ladders handle multi-category scoring (Grades, Taxes).</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Construct</th><th>Syntax</th><th>Behavior</th></tr></thead><tbody><tr><td>Simple if</td><td><code>if (cond) { ... }</code></td><td>Runs only if True</td></tr><tr><td>if-else</td><td><code>if (cond) { ... } else { ... }</code></td><td>Dual exclusive paths</td></tr><tr><td>Ladder</td><td><code>if ... else if ... else</code></td><td>First matching condition runs</td></tr></tbody></table>",
      "diagram": "DECISION FLOW:\n       /\\\n YES  /  \\  NO\n< Condition >-----> [ Else Block ]\n \\        /\n  \\      /\n[ If Block ]",
      "code": "#include <stdio.h>\nint main(void) {\n    int marks = 85;\n    if (marks >= 80) printf(\"Grade: A+\\n\");\n    else if (marks >= 70) printf(\"Grade: A\\n\");\n    else printf(\"Grade: Pass\\n\");\n    return 0;\n}",
      "output": "Grade: A+",
      "codeExplanation": "Evaluates conditions sequentially from top to bottom.",
      "examTraps": "Putting a semicolon after if: `if (score >= 50); printf(\"Pass\");` runs the printf unconditionally!",
      "practiceProblems": [
        {
          "level": "Level 1: Parity and Sign Classifier",
          "levelClass": "diff-very-basic",
          "statement": "Write a program that takes an integer and classifies it into: 'Positive Even', 'Positive Odd', 'Negative Even', 'Negative Odd', or 'Zero'.",
          "input": "-14",
          "output": "-14 is Negative Even",
          "concept": "Multi-way if-else decision branching and parity checking",
          "hint": "Check if (n == 0) first. Then if (n > 0) check (n % 2 == 0). Handle negative similarly."
        },
        {
          "level": "Level 2: Character Type Classifier",
          "levelClass": "diff-basic",
          "statement": "Read a single character from keyboard. Determine whether it is an Uppercase Alphabet, Lowercase Alphabet, Numeric Digit (0-9), or Special Symbol using an if-else-if ladder.",
          "input": "'B' or '7' or '#'",
          "output": "'B': Uppercase Alphabet | '7': Numeric Digit | '#': Special Symbol",
          "concept": "Character range testing with else-if ladders and ASCII boundary checks",
          "hint": "if (ch >= 'A' && ch <= 'Z') ... else if (ch >= 'a' && ch <= 'z') ... else if (ch >= '0' && ch <= '9') ... else ..."
        },
        {
          "level": "Level 3: Vowel or Consonant Detector",
          "levelClass": "diff-exam",
          "statement": "Read a single letter. Check whether it is a Vowel or Consonant. Your program must correctly handle both uppercase and lowercase letters (e.g. 'E' and 'e').",
          "input": "o",
          "output": "o is a Vowel",
          "concept": "Case-insensitive character checking with compound logical OR in if-else",
          "hint": "if (ch=='a'||ch=='e'||ch=='i'||ch=='o'||ch=='u'||ch=='A'||ch=='E'||ch=='I'||ch=='O'||ch=='U')"
        },
        {
          "problemId": "29.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Input an integer. If it is positive, print `\"Number is positive\"`."
        },
        {
          "problemId": "29.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Input an integer. If it is greater than 100, print `\"Century scored!\"`."
        },
        {
          "problemId": "29.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Input an age. If age $\\ge 18$, print `\"Eligible to vote\"`."
        },
        {
          "problemId": "29.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Input temperature in Celsius. If temperature $> 35.0$, print `\"Hot weather alert!\"`."
        },
        {
          "problemId": "29.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Input exam marks. If marks $< 40$, print `\"Retake required\"`."
        },
        {
          "problemId": "29.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Input an integer. If it is divisible by 5, print `\"Divisible by 5\"`."
        },
        {
          "problemId": "29.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Input an integer. If it is an even number, double its value and print it."
        },
        {
          "problemId": "29.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Input a purchase amount. If amount $> 1000$, apply a $\\$100$ discount and print final total."
        },
        {
          "problemId": "30.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Input an integer. Check whether it is **Even or Odd**."
        },
        {
          "problemId": "30.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Input an integer. Check whether it is **Positive or Negative**."
        },
        {
          "problemId": "30.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Input a student's marks. If marks $\\ge 50$, print `\"PASSED\"`; else print `\"FAILED\"`."
        },
        {
          "problemId": "30.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Input two distinct integers. Find and print the **Larger Number**."
        },
        {
          "problemId": "30.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Input two distinct integers. Find and print the **Smaller Number**."
        },
        {
          "problemId": "30.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Input an age. If $\\ge 18$, print `\"Adult\"`; else print `\"Minor\"`."
        },
        {
          "problemId": "30.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Input Cost Price and Selling Price. Determine whether the transaction resulted in **Profit or Loss** and print the amount."
        },
        {
          "problemId": "30.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Input an integer. Determine whether it is **Divisible by 7 or Not**."
        },
        {
          "problemId": "30.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Input a character. Determine whether it is a **Vowel or Consonant** (assume lowercase `'a','e','i','o','u'`)."
        },
        {
          "problemId": "30.10",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Input a year. Determine whether it is a **Leap Year or Common Year**."
        },
        {
          "problemId": "30.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Input an integer. Check whether it is **Positive, Negative, or Zero** (3-way decision)."
        },
        {
          "problemId": "30.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Input marks (0-100). Print Grade: - $90-100 \\implies A+$ - $80-89 \\implies A$ - $70-79 \\implies B$ - $60-69 \\implies C$ - $50-59 \\implies D$ - Below $50 \\implies F$"
        },
        {
          "problemId": "30.13",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Input an electric meter's unit consumption. Calculate the bill using tiered slab rates: - First 100 units @ $\\$1.50$/unit - Next 200 units @ $\\$2.50$/unit - Above 300 units @ $\\$4.00$/unit"
        },
        {
          "problemId": "30.14",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Input 3 side lengths $a, b, c$. Check whether they form a valid triangle ($a+b>c$ and $b+c>a$ and $a+c>b$)."
        },
        {
          "problemId": "30.15",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Input 3 sides of a valid triangle. Classify it as **Equilateral**, **Isosceles**, or **Scalene**."
        },
        {
          "problemId": "30.16",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Write a menu-driven program or simple arithmetic calculator: Read two numbers and a character operator (`+`, `-`, `*`, `/`). Perform the operation and handle division by zero."
        },
        {
          "problemId": "30.17",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Input basic salary and calculate Net Salary based on bonus slabs: - Basic $> 50000 \\implies$ Bonus 20% - Basic $30000-50000 \\implies$ Bonus 15% - Basic $< 30000 \\implies$ Bonus 10%"
        }
      ],
      "objective": "Master conditional branching with `if` and two-way `if...else` structures.",
      "whatIsIt": "Branching statements evaluate a boolean condition to choose between two mutually exclusive execution paths.",
      "keyConcept": [
        "`if (condition)` executes its statement block if and only if condition evaluates to non-zero (TRUE).",
        "`if...else` provides a guaranteed fallback path if condition evaluates to zero (FALSE).",
        "Single statements do not strictly require curly braces `{ ... }`, but omitting them is a primary source of logic bugs."
      ],
      "ruleFormula": "Syntax:\nif (condition) {\n    // Code runs if condition is TRUE (non-zero)\n} else {\n    // Code runs if condition is FALSE (0)\n}",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    int score = 82;\n    if (score >= 50) {\n        printf(\"Status: PASSED\\n\");\n    } else {\n        printf(\"Status: FAILED\\n\");\n    }\n    return 0;\n}",
      "exampleOutput": "Status: PASSED",
      "commonMistake": {
        "trap": "Accidental equality confusion: `if (x = 0)` instead of `if (x == 0)`.",
        "why": "`x = 0` assigns 0 to x. The value of the expression is 0 (FALSE), so the `if` branch NEVER executes, regardless of what x was before!",
        "fix": "Use Yoda conditions (`if (0 == x)`) or enable GCC compiler warnings `-Wall`."
      },
      "memoryTrick": "Single equals `=` commits a crime (mutates variable); double equals `==` is an innocent question.",
      "practiceQuestion": {
        "q": "What is the output of `int x = 5; if (x = 0) printf(\"A\"); else printf(\"B\");`?",
        "hint": "`x = 0` assigns 0 to x. The expression evaluates to 0 (False), so the `else` branch executes. Prints `B`."
      }
    },
    {
      "id": "ch3_2",
      "chapterId": 3,
      "number": 28,
      "title": "Nested if and dangling else",
      "badge": "Hierarchical Logic",
      "readingTime": "11 min read",
      "overview": "<p>An <code>if</code> statement inside another <code>if</code> or <code>else</code>. The <strong>Dangling Else</strong> problem is an exam staple.</p>",
      "deepDive": "<p>The Dangling Else Rule: An <code>else</code> clause always pairs with the <strong>nearest preceding unmatched <code>if</code></strong> at the same nesting level, regardless of indentation!</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Case</th><th>Syntax</th><th>Which if owns the else?</th></tr></thead><tbody><tr><td>Without braces</td><td><code>if (a) if (b) s1; else s2;</code></td><td>Belongs to <code>if (b)</code>!</td></tr><tr><td>With braces</td><td><code>if (a) { if (b) s1; } else s2;</code></td><td>Belongs to <code>if (a)</code>!</td></tr></tbody></table>",
      "diagram": "DANGLING ELSE TRAP:\nif (x > 10)\n    if (y > 5) printf(\"A\");\nelse printf(\"B\");  <-- Belongs to (y > 5), NOT (x > 10)!",
      "code": "#include <stdio.h>\nint main(void) {\n    int a = 12, b = 25, c = 18;\n    int largest;\n    if (a >= b) {\n        if (a >= c) largest = a;\n        else largest = c;\n    } else {\n        if (b >= c) largest = b;\n        else largest = c;\n    }\n    printf(\"Largest: %d\\n\", largest);\n    return 0;\n}",
      "output": "Largest: 25",
      "codeExplanation": "Finds largest of three numbers using pure nested if-else without logical operators.",
      "examTraps": "Never trust visual indentation in C! Braces {} dictate ownership, not whitespace.",
      "practiceProblems": [
        {
          "level": "Level 1: Largest of Three (No Logical Operators)",
          "levelClass": "diff-very-basic",
          "statement": "Find the largest of three distinct integers a, b, and c using pure nested if-else statements WITHOUT using any logical operators (&& or ||).",
          "input": "a = 25, b = 78, c = 52",
          "output": "Largest = 78",
          "concept": "Binary tree decision logic using nested if-else",
          "hint": "if (a >= b) { if (a >= c) max = a; else max = c; } else { if (b >= c) max = b; else max = c; }"
        },
        {
          "level": "Level 2: Tiered Electricity Slab Billing",
          "levelClass": "diff-basic",
          "statement": "Calculate an electricity bill based on unit slabs: First 100 units at $1.50/unit; next 100 units (101-200) at $2.50/unit; units above 200 at $3.50/unit. If the bill exceeds $500, add a 15% surcharge.",
          "input": "units = 250",
          "output": "Base: $575.00 | Surcharge: $86.25 | Total: $661.25",
          "concept": "Tiered slab calculation and cumulative conditional surcharges",
          "hint": "For 250 units: 100*1.50 + 100*2.50 + 50*3.50 = 575. Surcharge = 575 * 0.15 = 86.25."
        },
        {
          "level": "Level 3: Dangling Else Trap Resolution",
          "levelClass": "diff-exam",
          "statement": "What does this code print? int x = 5, y = 20; if (x > 10) if (y > 15) printf(\"Alpha\"); else printf(\"Beta\"); Explain how using braces changes the logic.",
          "input": "x = 5, y = 20",
          "output": "Nothing is printed!",
          "concept": "The Dangling Else Ambiguity rule in C grammar",
          "hint": "The else attaches to the nearest preceding unmatched if, which is if (y > 15). Since x > 10 is False, the entire inner if-else is skipped!"
        },
        {
          "problemId": "31.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Find the **Largest of Three Numbers** $A, B, C$ using nested `if-else` statements."
        },
        {
          "problemId": "31.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Find the **Smallest of Three Numbers** using nested `if-else`."
        },
        {
          "problemId": "31.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Input a number. If it is positive, check whether it is even or odd. If negative, print `\"Negative number ignored\"`."
        },
        {
          "problemId": "31.4",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Blood Donor Eligibility: A person can donate blood if: - Age $\\ge 18$ AND $\\le 65$ - Weight $\\ge 50\\text{ kg}$ Write nested checks giving specific reasons if rejected (e.g., \"Age valid, but underweight\")."
        },
        {
          "problemId": "31.5",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "University Admission Screening: - Math score $\\ge 70$ - English score $\\ge 60$ - Combined total $\\ge 150$"
        },
        {
          "problemId": "31.6",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Predict the output of this unbraced code and explain why braces are necessary: ```c int a = 10, b = -5; if (a > 0) if (b > 0) printf(\"Both positive\\n\"); else printf(\"What does this else pair with?\\n\"); ``` *(The else pairs with `if (b > 0)`, so it prints \"What does this else pair with?\").*"
        },
        {
          "problemId": "31.7",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Find the **Largest of Four Numbers** $a, b, c, d$ using nested comparisons."
        }
      ],
      "objective": "Resolve multi-level decision logic with nested `if` statements and solve the classic Dangling Else ambiguity.",
      "whatIsIt": "A nested `if` is an `if` statement located inside the body of another `if` or `else` block.",
      "keyConcept": [
        "Used when a second condition depends on the success of a prior condition.",
        "The Dangling Else Rule: an `else` clause ALWAYS pairs with the closest preceding unmatched `if` at the same nesting level, regardless of indentation!",
        "Always use explicit curly braces `{ ... }` to enforce intended association."
      ],
      "ruleFormula": "The Dangling Else Resolution:\n// Indentation is an illusion! The 'else' pairs with 'if (b)', NOT 'if (a)':\nif (a) if (b) s1; else s2;\n// To pair 'else' with 'if (a)', use braces:\nif (a) { if (b) s1; } else s2;",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    int a = 1, b = 0;\n    // Proper scoping using curly braces:\n    if (a == 1) {\n        if (b == 1) {\n            printf(\"Both 1\\n\");\n        }\n    } else {\n        printf(\"a is not 1\\n\");\n    }\n    return 0;\n}",
      "exampleOutput": "",
      "commonMistake": {
        "trap": "Relying on indentation to group `else` with outer `if`.",
        "why": "C is free-form and ignores whitespace indentation. The compiler binds the `else` to the inner `if`.",
        "fix": "Always surround inner `if` statements in explicit braces `{ ... }`."
      },
      "memoryTrick": "The nearest available `if` steals the lonely `else` unless braces lock it away!",
      "practiceQuestion": {
        "q": "In `if (x > 0) if (y > 0) printf(\"1\"); else printf(\"2\");`, which condition triggers printing `\"2\"`?",
        "hint": "The `else` binds to `if (y > 0)`. So `\"2\"` prints when `x > 0` AND `y <= 0`."
      }
    },
    {
      "id": "ch3_3",
      "chapterId": 3,
      "number": 29,
      "title": "Switch statement",
      "badge": "Multi-Way Branching",
      "readingTime": "11 min read",
      "overview": "<p><code>switch</code> provides multi-way jump branching based on discrete integer or character constants.</p>",
      "deepDive": "<p>Rules: 1. Expression must be integer or char (float is ILLEGAL). 2. Case labels must be compile-time constants (variables are ILLEGAL). 3. <code>break</code> prevents fall-through into following cases.</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Construct</th><th>switch Rule</th><th>Midterm Validity</th></tr></thead><tbody><tr><td><code>case 3.5:</code></td><td>Float case label</td><td><strong>ILLEGAL</strong> (Syntax error)</td></tr><tr><td><code>case 'A':</code></td><td>Char constant (ASCII 65)</td><td><strong>LEGAL</strong></td></tr><tr><td><code>case x:</code></td><td>Variable identifier</td><td><strong>ILLEGAL</strong> (Must be constant)</td></tr></tbody></table>\n\n<div class=\"doc-table-wrapper\">\n<table class=\"doc-table\">\n<thead><tr><th>Feature</th><th>`if-else` Ladder</th><th>`switch` Statement</th></tr></thead>\n<tbody>\n<tr><td><strong>Expression Types</strong></td><td>Any boolean expression (float, integer, relational, logical)</td><td>Strictly integral types (<code>int</code>, <code>char</code>, <code>enum</code>)</td></tr>\n<tr><td><strong>Condition Testing</strong></td><td>Can evaluate ranges (e.g., <code>score &gt;= 80</code>) and compound logic</td><td>Only tests for exact equality with constants (<code>case 1:</code>)</td></tr>\n<tr><td><strong>Execution Speed</strong></td><td>Linear scan: $O(N)$ comparisons top to bottom</td><td>Jump table / Branch table: often $O(1)$ fast jump in GCC</td></tr>\n<tr><td><strong>Fall-Through</strong></td><td>Impossible \u2014 mutually exclusive branches</td><td>Default behavior unless stopped with <code>break;</code></td></tr>\n<tr><td><strong>Float Support</strong></td><td>Supported (<code>if (temp &gt; 37.5)</code>)</td><td><strong>ILLEGAL!</strong> Compile error if float is passed</td></tr>\n</tbody>\n</table>\n</div>\n",
      "diagram": "SWITCH JUMP TABLE:\nswitch (choice) {\n  case 1: action1; break;\n  case 2: action2; break;\n  default: default_action;\n}",
      "code": "#include <stdio.h>\nint main(void) {\n    char op = '*';\n    int a = 6, b = 7;\n    switch (op) {\n        case '+': printf(\"%d\\n\", a + b); break;\n        case '*': printf(\"%d\\n\", a * b); break;\n        default:  printf(\"Invalid\\n\"); break;\n    }\n    return 0;\n}",
      "output": "42",
      "codeExplanation": "Switches on char operator and runs matching case.",
      "examTraps": "Omitting 'break' causes deliberate or accidental Fall-Through into subsequent cases!",
      "practiceProblems": [
        {
          "level": "Level 1: Menu-Driven Arithmetic Calculator",
          "levelClass": "diff-very-basic",
          "statement": "Build a menu-driven arithmetic calculator using switch. The user enters an operator character (+, -, *, /) and two numbers. Guard against division by zero in case '/'.",
          "input": "* 6 7",
          "output": "6 * 7 = 42",
          "concept": "switch statement on char data type and division by zero protection",
          "hint": "switch(op) { case '+': ... break; case '/': if (b == 0) ... else ... break; default: ... }"
        },
        {
          "level": "Level 2: Month Days with Case Fall-Through",
          "levelClass": "diff-basic",
          "statement": "Input a month number (1 to 12) and print the days in that month using switch intentional case fall-through (group 31-day months together, 30-day months together, and Feb as 28/29).",
          "input": "Month = 4 (April)",
          "output": "30 Days",
          "concept": "Intentional switch case fall-through without break statements",
          "hint": "case 1: case 3: case 5: case 7: case 8: case 10: case 12: printf(\"31 Days\\n\"); break; case 4: case 6: case 9: case 11: printf(\"30 Days\\n\"); break; case 2: printf(\"28 or 29 Days\\n\"); break;"
        },
        {
          "level": "Level 3: Vowel Checker via Switch Fall-Through",
          "levelClass": "diff-exam",
          "statement": "Write a program using switch to check whether an entered alphabet character is a Vowel or Consonant, leveraging case fall-through for all 10 vowel variations (a, e, i, o, u, A, E, I, O, U).",
          "input": "E",
          "output": "E is a VOWEL",
          "concept": "Character case labels and multi-label fall-through in switch",
          "hint": "case 'a': case 'e': case 'i': case 'o': case 'u': case 'A': case 'E': case 'I': case 'O': case 'U': printf(\"Vowel\\n\"); break; default: printf(\"Consonant\\n\");"
        },
        {
          "problemId": "32.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Input a day number (1-7). Print the corresponding day of the week (1 $\\to$ Monday, 7 $\\to$ Sunday)."
        },
        {
          "problemId": "32.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Input a month number (1-12). Print the month name."
        },
        {
          "problemId": "32.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "What is the role of `break;` inside a `switch` statement? What happens if `break` is omitted?"
        },
        {
          "problemId": "32.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "What types are legally allowed in a `switch` expression? Can `float` or `double` be used? (Answer: NO! Only integer types `int`, `char`, `enum`)."
        },
        {
          "problemId": "32.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "What is the `default:` label in a `switch`? Does it have to be at the bottom?"
        },
        {
          "problemId": "32.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Input a vowel character (`'a'`, `'e'`, `'i'`, `'o'`, `'u'`). Use deliberate **fall-through** to print `\"VOWEL\"`: ```c case 'a': case 'e': case 'i': case 'o': case 'u': printf(\"VOWEL\\n\"); break; ```"
        },
        {
          "problemId": "32.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Input a grade character (`'A'`, `'B'`, `'C'`, `'D'`, `'F'`). Print a motivational message for each."
        },
        {
          "problemId": "32.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Input a month number (1-12). Print the number of days in that month (handle February as 28 days). Use fall-through for 31-day months (1, 3, 5, 7, 8, 10, 12)."
        },
        {
          "problemId": "32.9",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Build a **Simple Menu-Driven Calculator**: ```text 1. Add 2. Subtract 3. Multiply 4. Divide Enter choice (1-4): ``` Perform the requested calculation on two entered numbers."
        },
        {
          "problemId": "32.10",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Build an **ATM Menu System**: ```text 1. Check Balance 2. Deposit Cash 3. Withdraw Cash 4. Exit ```"
        },
        {
          "problemId": "32.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Build a **Geometric Area Calculator**: `1: Circle, 2: Rectangle, 3: Triangle`."
        },
        {
          "problemId": "32.12",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Predict the output of this code with missing breaks: ```c int x = 2; switch (x) { case 1: printf(\"One \"); case 2: printf(\"Two \"); case 3: printf(\"Three \"); default: printf(\"Done\\n\"); } ``` *(Output: `Two Three Done` due to fall-through!).*"
        }
      ],
      "objective": "Implement multi-way selection with `switch`, understand integer/char case expressions, and control `break` fall-through.",
      "whatIsIt": "The `switch` statement selects one of many code branches based on the exact discrete value of an integer or character expression.",
      "keyConcept": [
        "Switch expression MUST evaluate to an integer or character (`int`, `char`, `enum`). Floating-point numbers (`float`, `double`) are ILLEGAL.",
        "Case labels must be compile-time CONSTANTS (e.g. `case 1:`, `case 'A':`). Variables (`case x:`) are ILLEGAL.",
        "Missing `break` causes 'fall-through': execution continues into subsequent case blocks regardless of their labels."
      ],
      "ruleFormula": "Syntax:\nswitch (integral_expr) {\n    case CONST_1: statement; break;\n    case CONST_2: statement; break;\n    default: fallback_statement; break;\n}",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    char grade = 'B';\n    switch (grade) {\n        case 'A': printf(\"Excellent\\n\"); break;\n        case 'B':\n        case 'C': printf(\"Well done\\n\"); break; // Intentional fall-through\n        case 'F': printf(\"Better try again\\n\"); break;\n        default:  printf(\"Invalid grade\\n\"); break;\n    }\n    return 0;\n}",
      "exampleOutput": "Well done",
      "commonMistake": {
        "trap": "Accidentally omitting `break;` at the end of a `case` block.",
        "why": "The program falls through and executes the next case's statements, causing unwanted side effects.",
        "fix": "Always place `break;` at the end of every case unless intentional fall-through is explicitly designed."
      },
      "memoryTrick": "Switch is a jump table: without `break;` it keeps falling down the stairs!",
      "practiceQuestion": {
        "q": "Can you write `case 1 ... 5:` or `case x > 0:` in standard ANSI C switch statements?",
        "hint": "No. Case labels must be single, discrete, compile-time integer constants. Relational conditions belong in `if...else` ladders."
      }
    },
    {
      "id": "ch3_4",
      "chapterId": 3,
      "number": 30,
      "title": "Looping - while (Pre-Test & Indefinite Iteration)",
      "badge": "Entry-Controlled Loops",
      "readingTime": "14 min read",
      "overview": "<p>Loops are used when you need to <strong>repeat a block of code multiple times</strong> without writing identical statements redundantly.</p><blockquote><strong>Core Concept:</strong> Loop = Repeat a task without writing the same code again and again.</blockquote><p>The <code>while</code> loop is an <strong>entry-controlled (pre-test) loop</strong>. It tests its conditional expression <em>before</em> executing the loop body. If the condition evaluates to False on the very first check, the body executes <strong>zero times</strong>.</p>",
      "deepDive": "<h3>1. Syntax and Pre-Test Mechanics</h3><pre><code>while(condition)\n{\n    // code block to repeat\n}</code></pre><p>Execution follows an entry-checking sequence:</p><ol><li>Evaluate <code>condition</code>.</li><li>If <strong>TRUE (non-zero)</strong>: execute the loop body statements sequentially.</li><li>Update the loop control variable.</li><li>Jump back to step 1 and re-check.</li><li>If <strong>FALSE (0)</strong>: terminate loop immediately and continue to next statement.</li></ol><h3>2. When Should You Use while?</h3><p>Use <code>while</code> when you <strong>don't know in advance how many times the loop will run</strong> (unknown repetitions dependent on user inputs or runtime calculations).</p><ul><li><strong>Scenario A: Sentinel-Controlled Input (Read until 0):</strong><pre><code>int n;\nscanf(\"%d\", &n);\nwhile(n != 0) {\n    printf(\"You entered %d\\n\", n);\n    scanf(\"%d\", &n);\n}</code></pre>We cannot predict whether the user will type 3 numbers or 30 numbers before entering 0. The iteration count is indeterminate.</li><li><strong>Scenario B: Password Verification:</strong><pre><code>int password;\nscanf(\"%d\", &password);\nwhile(password != 1234) {\n    printf(\"Wrong password. Try again: \");\n    scanf(\"%d\", &password);\n}\nprintf(\"Access granted!\\n\");</code></pre>We don't know how many attempts the user requires.</li></ul><h3>3. Loop + Counter Pattern</h3><p>A <strong>counter</strong> keeps track of how many times an event happens (e.g. counting even numbers):<pre><code>int count = 0;\nfor(int i = 1; i <= 100; i++) {\n    if(i % 2 == 0) count++;\n}\nprintf(\"Even numbers = %d\\n\", count);</code></pre></p><h3>4. Loop + Accumulator Pattern</h3><p>An <strong>accumulator</strong> maintains a continuously updated total (<code>sum += i</code> or <code>product *= i</code>):<pre><code>int sum = 0;\nwhile(n > 0) {\n    sum += (n % 10);\n    n /= 10;\n}</code></pre></p><h3>5. Infinite Loop Trap & Missing Update</h3><p>A loop that never terminates is an <strong>infinite loop</strong> (e.g. <code>while(1)</code>). A critical beginner trap is omitting the update step:<pre><code>int i = 1;\nwhile(i <= 5) {\n    printf(\"%d \", i);\n    // Missing i++; causes infinite loop!\n}</code></pre></p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Loop Element</th><th>C Syntax & Role</th><th>Exam Rule / Trap</th></tr></thead><tbody><tr><td><strong>Initialization</strong></td><td><code>int i = 1;</code> (Sets initial state)</td><td>Must be declared and initialized before entering loop</td></tr><tr><td><strong>Condition</strong></td><td><code>while (i &lt;= 5)</code> (Pre-test decision)</td><td>Evaluated BEFORE body; 0 executions possible</td></tr><tr><td><strong>Update</strong></td><td><code>i++;</code> or <code>n /= 10;</code> (Advances state)</td><td>Omitting update creates CPU-freezing infinite loop</td></tr><tr><td><strong>Accidental Semicolon</strong></td><td><code>while (i &lt;= 5);</code> (Null loop body)</td><td>Semicolon treated as empty body; hangs program</td></tr><tr><td><strong>Canonical Infinite</strong></td><td><code>while (1) { ... }</code></td><td>Requires explicit internal <code>break;</code> to exit</td></tr></tbody></table>",
      "diagram": "+-------------------------------------------------------------------------+\n|                       WHILE EXECUTION FLOWCHART                         |\n|                                                                         |\n|                                   |                                     |\n|                                   v                                     |\n|                         [ Check Condition ]                             |\n|                              /         \\                               |\n|                     (TRUE)  /           \\  (FALSE)                     |\n|                            v             v                              |\n|                    [ Loop Body Work ]   [ STOP / EXIT LOOP ]            |\n|                            |                                            |\n|                            v                                            |\n|                    [ Update Variable ]                                  |\n|                            |                                            |\n|                            +---> (Jump back to Condition Check)         |\n+-------------------------------------------------------------------------+",
      "code": "#include <stdio.h>\n\nint main(void) {\n    int n = 9482;\n    int count = 0;\n    int sum = 0;\n    \n    printf(\"Processing integer: %d\\n\", n);\n    while (n > 0) {\n        int digit = n % 10;\n        sum += digit;     // Accumulator\n        count++;          // Counter\n        n /= 10;          // Update step\n    }\n    \n    printf(\"Total Digits = %d\\n\", count);\n    printf(\"Sum of Digits = %d\\n\", sum);\n    return 0;\n}",
      "output": "Processing integer: 9482\nTotal Digits = 4\nSum of Digits = 23",
      "codeExplanation": "Demonstrates entry-controlled iteration: while (n > 0) extracts rightmost digits with % 10, updates counter and accumulator, and reduces n by / 10 until n reaches 0.",
      "examTraps": "1. Forgetting the update statement (`n /= 10;` or `i++;`) causes an infinite loop locking up the CPU. 2. Semicolon after header: `while(i <= 5);` creates an empty body loop that loops endlessly on line 1.",
      "practiceProblems": [
        {
          "level": "Level 1: Digit Count and Sum",
          "levelClass": "diff-very-basic",
          "statement": "Write a program using a while loop to calculate both the total number of digits and the sum of digits of a given positive integer N.",
          "input": "N = 9482",
          "output": "Count of Digits: 4 | Sum of Digits: 23",
          "concept": "Digit reduction using while (n > 0) with % 10 and / 10",
          "hint": "while (n > 0) { digit = n % 10; sum += digit; count++; n /= 10; }"
        },
        {
          "level": "Level 2: Reverse Integer & Palindrome",
          "levelClass": "diff-basic",
          "statement": "Reverse an integer arithmetically using a while loop (e.g. 1221 becomes 1221, 1234 becomes 4321), and determine whether the number is a Palindrome.",
          "input": "1221",
          "output": "Reversed: 1221 | It is a PALINDROME",
          "concept": "Arithmetic reversal: rev = rev * 10 + (n % 10)",
          "hint": "int temp = n, rev = 0; while (n > 0) { rev = rev * 10 + (n % 10); n /= 10; } if (temp == rev) printf(\"Palindrome\\n\");"
        },
        {
          "level": "Level 3: Armstrong Number Check",
          "levelClass": "diff-exam",
          "statement": "An Armstrong number (for a 3-digit integer) is one where the sum of cubes of its digits equals the number itself (153 = 1^3 + 5^3 + 3^3). Write a program using a while loop to verify if an input number is Armstrong.",
          "input": "153",
          "output": "153 is an ARMSTRONG number",
          "concept": "Digit-by-digit cube accumulation and equality verification",
          "hint": "int temp = n, sum = 0; while (n > 0) { int d = n % 10; sum += d * d * d; n /= 10; } Check if (sum == temp)."
        },
        {
          "problemId": "33.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Print numbers from 1 to 10."
        },
        {
          "problemId": "33.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Print numbers from 10 down to 1 (Countdown)."
        },
        {
          "problemId": "33.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Print all Even numbers between 1 and 20."
        },
        {
          "problemId": "33.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Print all Odd numbers between 1 and 20."
        },
        {
          "problemId": "33.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Print multiples of 5 from 5 to 50."
        },
        {
          "problemId": "33.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Calculate the **Sum of numbers from 1 to $N$** entered by the user. - *Trace table:* $i, \\text{sum}$."
        },
        {
          "problemId": "33.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Calculate the **Factorial of $N$** ($N! = 1 \\times 2 \\times \\dots \\times N$) using `while`."
        },
        {
          "problemId": "33.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Print the **Multiplication Table** of a number $N$ up to 10 ($N \\times 1 = \\dots$)."
        },
        {
          "problemId": "33.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Calculate $X^Y$ ($X$ to the power $Y$) by multiplying $X$ repeatedly $Y$ times."
        },
        {
          "problemId": "33.10",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "**Count the Digits** of an integer $N$ (e.g., $4582 \\implies 4\\text{ digits}$). - *Logic:* In each loop iteration, divide $N$ by 10 (`N /= 10;`) and increment count. Stop when $N == 0$."
        },
        {
          "problemId": "33.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Find the **Sum of Digits** of an arbitrary positive integer (e.g., $734 \\implies 7+3+4 = 14$). - *Logic:* Extract digit with `N % 10`, add to sum, strip with `N /= 10`."
        },
        {
          "problemId": "33.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "**Reverse an Integer** (e.g., $1234 \\implies 4321$). - *Formula:* `rev = (rev * 10) + (N % 10); N /= 10;`."
        },
        {
          "problemId": "33.13",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Check whether a number is a **Palindrome** (e.g., $1221 \\implies \\text{Palindrome}$). - *Logic:* Reverse the number; if `original == reversed`, it is a palindrome!"
        },
        {
          "problemId": "33.14",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Check whether an integer $N$ is a **Prime Number** using a `while` loop."
        },
        {
          "problemId": "33.15",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Check whether an integer $N$ is an **Armstrong Number** (e.g., $153 = 1^3 + 5^3 + 3^3 = 153$)."
        },
        {
          "problemId": "33.16",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Find the **Greatest Common Divisor (GCD)** of two numbers using Euclid's subtraction method: `while (a != b) { if (a > b) a -= b; else b -= a; }`."
        },
        {
          "problemId": "33.17",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Find the **Least Common Multiple (LCM)** of two numbers using formula $\\text{LCM} = (a \\times b) / \\text{GCD}$."
        },
        {
          "problemId": "33.18",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Check whether a number is a **Perfect Number** (Sum of its proper divisors equals the number, e.g., $6 = 1 + 2 + 3$)."
        },
        {
          "problemId": "33.19",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Check whether a number is a **Strong Number** (Sum of factorials of digits equals the number, e.g., $145 = 1! + 4! + 5! = 1 + 24 + 120 = 145$)."
        },
        {
          "problemId": "33.20",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Generate the first $N$ terms of the **Fibonacci Series** using `while`."
        }
      ],
      "objective": "Master the pre-test `while` loop for indefinite iteration and sentinel-controlled input processing.",
      "whatIsIt": "A `while` loop is an entry-controlled loop that tests its condition BEFORE executing the loop body.",
      "keyConcept": [
        "If condition is FALSE initially, the loop body executes ZERO times.",
        "Used primarily when the total number of iterations is NOT known in advance (e.g. reading until EOF, sentinel input, digit extraction).",
        "Must include an update statement inside the body to prevent infinite loops."
      ],
      "ruleFormula": "Syntax:\nwhile (condition) {\n    // Body executes while condition is TRUE (non-zero)\n    // Update loop variable!\n}",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    int n = 1234, sum = 0;\n    while (n > 0) {\n        sum += n % 10; // Extract last digit\n        n /= 10;       // Remove last digit\n    }\n    printf(\"Digit Sum = %d\\n\", sum);\n    return 0;\n}",
      "exampleOutput": "Digit Sum = 10",
      "commonMistake": {
        "trap": "Forgetting the update step (`n /= 10;` or `i++;`) inside the `while` body.",
        "why": "The condition remains perpetually true, freezing the computer in an infinite loop.",
        "fix": "Always trace the variable change: ensure every loop has a clear, advancing path to termination."
      },
      "memoryTrick": "While = Pre-test: Checks ticket at the entrance. No ticket? Zero rides!",
      "practiceQuestion": {
        "q": "How many times does `int i = 10; while (i < 5) { i++; }` execute?",
        "hint": "Zero times. `10 < 5` is false immediately on entry."
      }
    },
    {
      "id": "ch3_5",
      "chapterId": 3,
      "number": 31,
      "title": "do...while Statement (Exit-Controlled Loop)",
      "badge": "Exit-Controlled Iteration",
      "readingTime": "13 min read",
      "overview": "<p>The <code>do...while</code> loop is an <strong>exit-controlled (post-test)</strong> looping statement in C. Unlike <code>while</code> and <code>for</code> loops which test their condition at the top before entering the loop body, <code>do...while</code> evaluates its condition at the bottom <em>after</em> executing the loop body.</p><blockquote><strong>The Golden Rule:</strong> If the code must execute <strong>at least once</strong> &rarr; <code>do...while</code>.</blockquote>",
      "deepDive": "<h3>1. Syntax and Execution Order</h3><pre><code>do\n{\n    // code body executes first\n}\nwhile(condition); // checked afterward - NOTICE SEMICOLON!</code></pre><h3>2. The Biggest Difference: while vs do...while</h3><p>Consider what happens when the initial condition is already false (<code>int i = 10; condition: i < 5</code>):</p><ul><li><strong>With while:</strong><pre><code>int i = 10;\nwhile(i < 5) {\n    printf(\"Hello\\n\");\n}</code></pre><strong>Output: Nothing!</strong> Because <code>10 < 5</code> is FALSE immediately, body executes 0 times.</li><li><strong>With do...while:</strong><pre><code>int i = 10;\ndo {\n    printf(\"Hello\\n\");\n} while(i < 5);</code></pre><strong>Output: Hello</strong>! Because <code>do...while</code> executes the body <em>before checking</em> the condition.</li></ul><h3>3. When to Use: Interactive Menus & Input Validation</h3><p>An interactive menu must appear to the user at least once before they choose an option:</p><pre><code>int choice;\ndo {\n    printf(\"\\n1. Add Record\\n2. Delete Record\\n3. Exit\\nEnter choice: \");\n    scanf(\"%d\", &choice);\n} while(choice != 3);</code></pre><h3>4. The Mandatory Trailing Semicolon</h3><p>Unlike <code>while</code> and <code>for</code> blocks where a trailing semicolon creates a null loop bug, <code>do...while</code> <strong>strictly requires a terminating semicolon</strong>: <code>do { ... } while (condition);</code>. Omitting it triggers a fatal compilation error.</p><h3>5. Zero-Boundary Advantage for Digit Counting</h3><p>For input <code>N = 0</code>, <code>while(n > 0)</code> executes 0 times and falsely reports 0 digits. In contrast, <code>do { count++; n /= 10; } while(n > 0);</code> executes once and correctly reports 1 digit.</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Feature</th><th>while Loop</th><th>do...while Loop</th></tr></thead><tbody><tr><td><strong>Control Type</strong></td><td>Entry-Controlled (Pre-Test)</td><td>Exit-Controlled (Post-Test)</td></tr><tr><td><strong>Condition Evaluation</strong></td><td>Before executing loop body</td><td>After executing loop body</td></tr><tr><td><strong>Minimum Executions</strong></td><td><strong>0</strong> (May execute zero times)</td><td><strong>1</strong> (Guaranteed at least once)</td></tr><tr><td><strong>False on Start (i=10; i&lt;5)</strong></td><td>Prints nothing (0 runs)</td><td>Prints body once (1 run)</td></tr><tr><td><strong>Trailing Semicolon</strong></td><td>Illegal / Bug (causes null loop)</td><td><strong>YES Mandatory</strong> (<code>while (c);</code>)</td></tr><tr><td><strong>Ideal Use Cases</strong></td><td>Unknown bounds, data streams</td><td>Interactive menus, input validation</td></tr></tbody></table>",
      "diagram": "+-------------------------------------------------------------------------+\n|                   DO...WHILE EXECUTION FLOWCHART                        |\n|                                                                         |\n|                              [ Entry ]                                  |\n|                                  |                                      |\n|                                  v                                      |\n|                       +---------------------+                           |\n|                       |  Execute Loop Body  | <-------------------+     |\n|                       |  (Runs at least 1x) |                     |     |\n|                       +----------+----------+                     |     |\n|                                  |                                |     |\n|                                  v                                |     |\n|                                 / \\                               |     |\n|                               /     \\   TRUE (Non-zero)           |     |\n|                             <  Cond?  >---------------------------+     |\n|                               \\     /                                   |\n|                                 \\ /                                     |\n|                                  | FALSE (Zero)                         |\n|                                  v                                      |\n|                              [ Exit ]                                   |\n+-------------------------------------------------------------------------+",
      "code": "#include <stdio.h>\n\nint main(void) {\n    int test_val = 10;\n    \n    printf(\"Testing do-while with initially false condition (10 < 5):\\n\");\n    do {\n        printf(\"[do-while body executed!] test_val = %d\\n\", test_val);\n        test_val++;\n    } while (test_val < 5);\n    \n    printf(\"Loop exited cleanly. Final test_val = %d\\n\", test_val);\n    return 0;\n}",
      "output": "Testing do-while with initially false condition (10 < 5):\n[do-while body executed!] test_val = 10\nLoop exited cleanly. Final test_val = 11",
      "codeExplanation": "Proves that even when the condition (10 < 5) is strictly false, the do-while body executes once unconditionally before the test is evaluated at the bottom.",
      "examTraps": "1. Omitting the trailing semicolon `;` after `while(condition);` causes a compile error. 2. Variable Scoping Trap: Any variable tested in `while(cond);` must be declared outside the `do { ... }` block.",
      "practiceProblems": [
        {
          "level": "Level 1: Input Range Validator",
          "levelClass": "diff-very-basic",
          "statement": "Write a program using a do-while loop to validate user input. The program repeatedly prompts the user to enter a positive integer between 1 and 10. Once a valid number is entered, print 'Accepted: ' and terminate.",
          "input": "User enters -3, then 15, then 7",
          "output": "Accepted: 7",
          "concept": "Post-test input validation without code duplication",
          "hint": "do { scanf(\"%d\", &n); } while (n < 1 || n > 10); Print confirmation after loop."
        },
        {
          "level": "Level 2: Interactive Menu-Driven System",
          "levelClass": "diff-basic",
          "statement": "Implement an interactive console menu with options: [1] Check Balance, [2] Deposit, [3] Withdraw, [0] Exit. Use a do-while loop to repeat the menu until the user selects 0. Handle options with a switch statement inside the loop.",
          "input": "1, then 2, then 0",
          "output": "Displays balance, performs deposit, then exits with 'Thank you for banking!'",
          "concept": "do-while menu loop pattern with nested switch statement",
          "hint": "do { printf(\"--- MENU ---\\n1. Balance\\n2. Deposit\\n3. Withdraw\\n0. Exit\\n\"); scanf(\"%d\", &choice); switch(choice) { ... } } while (choice != 0);"
        },
        {
          "level": "Level 3: Reverse Number Single-Digit Boundary Drill",
          "levelClass": "diff-exam",
          "statement": "Reverse an integer using a do-while loop instead of a while loop. Explain what happens when the input is 0 for both loops. Verify why do-while correctly prints '0' for N=0 while a standard while loop prints nothing without special checks.",
          "input": "N = 0 and N = 405",
          "output": "For N=0: Reversed = 0 | For N=405: Reversed = 504",
          "concept": "Zero-boundary execution guarantee in do-while vs while",
          "hint": "do { rev = rev * 10 + (n % 10); n /= 10; } while (n > 0); Because do-while runs once, n=0 extracts digit 0 immediately."
        },
        {
          "problemId": "34.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Print numbers from 1 to 5 using `do-while`."
        },
        {
          "problemId": "34.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Explain why `do-while` executes **at least once** even if the condition is False initially: ```c int x = 10; do { printf(\"Executes once!\\n\"); } while (x < 5); ```"
        },
        {
          "problemId": "34.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Note the mandatory semicolon: Why does `do { ... } while (cond);` require a semicolon, while `while(cond) { ... }` does not?"
        },
        {
          "problemId": "34.4",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Write a program that repeatedly asks the user to enter a positive number. Keep prompting until the user enters a negative number."
        },
        {
          "problemId": "34.5",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Build a calculator program that performs an operation and then asks: `\"Do you want to continue? (y/n)\"`. If `'y'`, loop again."
        },
        {
          "problemId": "34.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Password Retry: Allow a user up to 3 attempts to enter a correct PIN `1234`. If correct, print `\"Access Granted\"`."
        }
      ],
      "objective": "Master the post-test `do...while` loop for exit-controlled iteration, menus, and input validators.",
      "whatIsIt": "A `do...while` loop is an exit-controlled loop that executes its body FIRST before testing the condition.",
      "keyConcept": [
        "GUARANTEED to execute at least ONCE, even if the condition is false initially.",
        "Best used for interactive user input validation (prompting until a valid range is entered) and console menus.",
        "CRITICAL SYNTAX REQUIREMENT: must terminate with a trailing semicolon `;` after `while(condition);`."
      ],
      "ruleFormula": "Syntax:\ndo {\n    // Statements execute at least ONCE\n} while (condition);  // <--- Mandatory trailing semicolon!",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    int count = 10;\n    do {\n        printf(\"Runs at least once! Count = %d\\n\", count);\n        count++;\n    } while (count < 5); // 11 < 5 is False \u2794 Exits\n    return 0;\n}",
      "exampleOutput": "Runs at least once! Count = 10",
      "commonMistake": {
        "trap": "Forgetting the mandatory trailing semicolon `;` after `while(condition)` in a `do-while` loop.",
        "why": "It is a severe compile-time syntax error. The compiler expects a statement terminator.",
        "fix": "Remember the syntax: `do { ... } while (...);`"
      },
      "memoryTrick": "Do-While = Post-pay: Enjoy the meal first, pay the bill on the way out!",
      "practiceQuestion": {
        "q": "Why is `do...while` mathematically superior to `while` when counting digits of an integer including $N = 0$?",
        "hint": "If $N = 0$, `while (n > 0)` runs 0 times (reporting 0 digits). `do...while` runs once, correctly reporting 1 digit."
      }
    },
    {
      "id": "ch3_6",
      "chapterId": 3,
      "number": 32,
      "title": "for Statement (Definite Iteration & Counter Control)",
      "badge": "Counter-Controlled Iteration",
      "readingTime": "15 min read",
      "overview": "<p>The <code>for</code> loop is used when repetition is <strong>count-controlled</strong> (you know roughly or exactly how many times the loop should repeat).</p><p>It encapsulates <strong>initialization</strong>, <strong>condition</strong>, and <strong>update</strong> into a single unified header line: <code>for(initialization; condition; update)</code>.</p>",
      "deepDive": "<h3>1. Three Parts of the for Loop</h3><pre><code>for(initialization; condition; update)\n{\n    // loop body\n}</code></pre><ul><li><strong>\u2460 Initialization (<code>int i = 1;</code>):</strong> Runs <strong>only once</strong> at the beginning. It sets the starting value.</li><li><strong>\u2461 Condition (<code>i <= 5;</code>):</strong> Checked <strong>before every iteration</strong>. If TRUE &rarr; execute loop body; if FALSE &rarr; terminate loop.</li><li><strong>\u2462 Update (<code>i++;</code>):</strong> Changes the loop variable <strong>after each iteration</strong> (e.g. <code>i++</code>, <code>i--</code>, <code>i += 2</code>, <code>i *= 2</code>).</li></ul><h3>2. i++ vs ++i in for Headers</h3><p>In the update section of a normal for loop (<code>for(int i = 0; i < 5; i++)</code> vs <code>for(int i = 0; i < 5; ++i)</code>), both produce the exact same outcome. For standard programming, <code>i++</code> is the universal convention.</p><h3>3. Count-Controlled Applications</h3><ul><li><strong>Print 1 to 100:</strong> <code>for(int i = 1; i <= 100; i++) printf('%d ', i);</code></li><li><strong>Print Even Numbers:</strong> <code>for(int i = 2; i <= 20; i += 2) printf('%d ', i);</code></li><li><strong>Calculate Sum:</strong> <code>for(int i = 1; i <= 10; i++) sum += i;</code></li><li><strong>Array Traversal:</strong> <code>for(int i = 0; i < 5; i++) printf('%d ', arr[i]);</code> (The #1 use of for loops).</li></ul><h3>4. break vs continue</h3><ul><li><strong><code>break</code> &rarr; STOP THE LOOP \ud83d\uded1:</strong> Immediately terminates the loop and jumps completely outside.</li><li><strong><code>continue</code> &rarr; SKIP THIS ROUND \u23ed\ufe0f:</strong> Skips the rest of the current iteration and jumps directly to the update step for the next round.</li></ul><h3>5. Nested Loops</h3><p>A loop inside another loop is called a <strong>nested loop</strong>. For each step of the outer loop, the inner loop completes all its iterations. Essential for grids, patterns, 2D arrays, and multiplication tables.</p>",
      "techTable": "<table class='doc-table'><thead><tr><th>Feature</th><th>break Statement \ud83d\uded1</th><th>continue Statement \u23ed\ufe0f</th></tr></thead><tbody><tr><td><strong>Action</strong></td><td>Stops the entire loop immediately</td><td>Skips remainder of current iteration</td></tr><tr><td><strong>Destination</strong></td><td>Jumps completely outside loop</td><td>Jumps to update step (next iteration)</td></tr><tr><td><strong>Loop Status</strong></td><td>Loop terminates permanently</td><td>Loop continues running</td></tr><tr><td><strong>Mnemonic</strong></td><td><strong>\"STOP\" \ud83d\uded1</strong></td><td><strong>\"SKIP\" \u23ed\ufe0f</strong></td></tr><tr><td><strong>Example Outcome (i==3)</strong></td><td>In 1..5: prints <code>1 2</code> then terminates</td><td>In 1..5: prints <code>1 2 4 5</code> (skips 3)</td></tr></tbody></table>",
      "diagram": "+-------------------------------------------------------------------------+\n|                       FOR LOOP EXECUTION LIFECYCLE                      |\n|                                                                         |\n|  int i = 1       --> Start (Runs ONCE at beginning)                     |\n|        |                                                                |\n|        v                                                                |\n|  i <= 5 ?        --> Check condition (Pre-test)                         |\n|        |                                                                |\n|      YES (True)                                                         |\n|        v                                                                |\n|  printf(\"%d\", i) -> Execute loop body                                   |\n|        |                                                                |\n|        v                                                                |\n|  i++             --> Update loop counter                                |\n|        |                                                                |\n|        +-----------> Jump back to Condition Check                       |\n+-------------------------------------------------------------------------+",
      "code": "#include <stdio.h>\n\nint main(void) {\n    printf(\"Testing continue (Skip 3): \\n\");\n    for (int i = 1; i <= 5; i++) {\n        if (i == 3) continue; // Skip 3\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\\n\");\n    \n    printf(\"Testing break (Stop at 4): \\n\");\n    for (int i = 1; i <= 10; i++) {\n        if (i == 4) break; // Stop completely\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\\n\");\n    \n    printf(\"Multiplication Table Grid (1 to 3):\\n\");\n    for (int r = 1; r <= 3; r++) {\n        for (int c = 1; c <= 3; c++) {\n            printf(\"%3d \", r * c);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      "output": "Testing continue (Skip 3): \n1 2 4 5 \n\nTesting break (Stop at 4): \n1 2 3 \n\nMultiplication Table Grid (1 to 3):\n  1   2   3 \n  2   4   6 \n  3   6   9 ",
      "codeExplanation": "Demonstrates: (1) continue skips iteration 3 without breaking the loop, (2) break terminates loop execution entirely when i==4, and (3) nested loops generate a 2D coordinate multiplication grid.",
      "examTraps": "1. Accidental semicolon: `for(int i=1; i<=5; i++); printf(\"%d\", i);` loops 5 times over an empty statement, then prints 6 once! 2. Off-by-one errors: `i < 5` loops 4 times (1..4) whereas `i <= 5` loops 5 times (1..5).",
      "practiceProblems": [
        {
          "level": "Level 1: Multiplication Table Grid",
          "levelClass": "diff-very-basic",
          "statement": "Write a program using nested for loops to print a formatted multiplication table for numbers 1 to 5, formatted in neat columns using %4d.",
          "input": "Table range: 1 to 5",
          "output": "5x5 tabular multiplication grid",
          "concept": "Nested coordinate grid iteration with outer rows and inner columns",
          "hint": "for (int r = 1; r <= 5; r++) { for (int c = 1; c <= 5; c++) printf(\"%4d\", r * c); printf(\"\\n\"); }"
        },
        {
          "level": "Level 2: Dual-Index Palindrome String Check",
          "levelClass": "diff-basic",
          "statement": "Use a single for loop with the comma operator controlling two pointers (start = 0, end = len - 1) to verify whether a character array is a Palindrome without allocating temporary arrays.",
          "input": "\"radar\"",
          "output": "\"radar\" is a PALINDROME",
          "concept": "Two-pointer dual-index traversal using comma operator in for header",
          "hint": "for (int i = 0, j = len - 1; i < j; i++, j--) { if (str[i] != str[j]) { isPal = 0; break; } }"
        },
        {
          "level": "Level 3: Optimized Prime Number Divisor Sieve",
          "levelClass": "diff-exam",
          "statement": "Write an optimized prime checking program using a for loop with condition i * i <= N. Explain why checking up to sqrt(N) reduces loop iterations from O(N) to O(sqrt(N)), saving CPU clock cycles.",
          "input": "N = 997",
          "output": "997 is PRIME (Checked 31 iterations instead of 997)",
          "concept": "Mathematical loop optimization and asymptotic bound reduction in for header",
          "hint": "for (int i = 2; i * i <= n; i++) { if (n % i == 0) { isPrime = 0; break; } } If loop finishes without break, n is prime."
        },
        {
          "problemId": "35.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "State the 3 components inside a `for` loop header: `for (initialization; condition; update)`. Explain the exact execution sequence."
        },
        {
          "problemId": "35.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Print numbers from 1 to 10 using `for`."
        },
        {
          "problemId": "35.3",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Print numbers from 20 down to 0 stepping down by 2 (`i -= 2`)."
        },
        {
          "problemId": "35.4",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Print squares of numbers from 1 to 10 ($1, 4, 9, 16, \\dots$)."
        },
        {
          "problemId": "35.5",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Compute the sum of integers from 1 to 100."
        },
        {
          "problemId": "35.6",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Calculate the Factorial of $N$ using a `for` loop."
        },
        {
          "problemId": "35.7",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Compute the sum of all **Even numbers** between 1 and $N$."
        },
        {
          "problemId": "35.8",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Compute the sum of all **Odd numbers** between 1 and $N$."
        },
        {
          "problemId": "35.9",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Print all characters from `'A'` to `'Z'` using a `for` loop: `for (char ch = 'A'; ch <= 'Z'; ch++) printf(\"%c \", ch);`"
        },
        {
          "problemId": "35.10",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "$1 + \\frac{1}{2} + \\frac{1}{3} + \\dots + \\frac{1}{N}$ (Harmonic Series)"
        },
        {
          "problemId": "35.11",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "$1^2 + 2^2 + 3^2 + \\dots + N^2$"
        },
        {
          "problemId": "35.12",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "$1 - 2 + 3 - 4 + 5 - \\dots \\pm N$ (Alternating Series)"
        },
        {
          "problemId": "35.13",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "$2 + 4 + 8 + 16 + \\dots$ (Geometric Series $2^i$)"
        },
        {
          "problemId": "35.14",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Print all **Prime numbers between 1 and 100** using a loop."
        },
        {
          "problemId": "35.15",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Print the first $N$ terms of the **Fibonacci series** ($0, 1, 1, 2, 3, 5, 8, \\dots$)."
        },
        {
          "problemId": "35.16",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Predict output of multiple initializations and updates in `for`: ```c for (int i = 0, j = 10; i < j; i++, j--) { printf(\"%d %d\\n\", i, j); } ```"
        },
        {
          "problemId": "35.17",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "What does an omitted condition `for (;;) { ... }` mean? (Answer: Infinite loop!)."
        }
      ],
      "objective": "Master the counter-controlled `for` loop, its 3-expression header lifecycle, and nested loop iteration.",
      "whatIsIt": "A `for` loop is a compact, entry-controlled loop that combines initialization, condition testing, and updating into a single header.",
      "keyConcept": [
        "Lifecycle: 1. Initialize (once) \u2794 2. Check condition \u2794 3. Execute body \u2794 4. Update \u2794 5. Repeat from Step 2.",
        "Best used for definite iteration when the number of cycles is known in advance (e.g. 1 to N, arrays).",
        "Any or all of the 3 header expressions can be omitted (`for (;;)` creates a canonical infinite loop)."
      ],
      "ruleFormula": "Syntax:\nfor (initialization; condition; update) {\n    // Loop body\n}",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    int sum = 0;\n    for (int i = 1; i <= 5; i++) {\n        sum += i;\n    }\n    printf(\"Sum 1 to 5 = %d\\n\", sum);\n    return 0;\n}",
      "exampleOutput": "Sum 1 to 5 = 15",
      "commonMistake": {
        "trap": "Placing an accidental semicolon after the `for(...)` header (e.g. `for(i=0; i<5; i++);`).",
        "why": "The semicolon acts as an empty body. The loop increments `i` to 5 in silence, and the following block runs only ONCE!",
        "fix": "Never place a semicolon directly after the closing parenthesis of a `for` header."
      },
      "memoryTrick": "Init (Once) \u2794 Check \u2794 Do Body \u2794 Update \u2794 Check again.",
      "practiceQuestion": {
        "q": "In `for (int i = 0; i < 10; i++)`, does `i++` execute before or after the loop body?",
        "hint": "After! The update expression executes at the END of each iteration, immediately before testing the condition again."
      }
    },
    {
      "id": "ch3_7",
      "chapterId": 3,
      "number": 33,
      "title": "Loop Decision Matrix: When to Use which Loop?",
      "badge": "Architectural Design",
      "readingTime": "14 min read",
      "overview": "<p>C provides three looping statements: <code>for</code>, <code>while</code>, and <code>do...while</code>. Any problem solvable with one loop can theoretically be rewritten with either of the other two.</p><blockquote><strong>Core Engineering Principle:</strong> A problem may be solvable with multiple loops. The goal is to choose the loop that <em>naturally and cleanly matches the problem</em>.</blockquote>",
      "deepDive": "<h3>1. The 3 Most Important Decision Rules</h3><p>When you encounter any repetition problem, ask these three questions:</p><ol><li><strong>Question 1: Do I know how many times I need to repeat?</strong><br><em>Example: Print numbers from 1 to 100, calculate sum of 10 items, traverse array.</em><br>&rarr; <strong>YES &rarr; Use <code>for</code></strong></li><li><strong>Question 2: Do I NOT know how many times it will repeat?</strong><br><em>Example: Keep taking input until user enters 0, read stream until EOF, guess number game.</em><br>&rarr; <strong>YES &rarr; Use <code>while</code></strong></li><li><strong>Question 3: Must the code execute AT LEAST ONCE?</strong><br><em>Example: Display menu and keep showing it until user selects Exit, validate positive input.</em><br>&rarr; <strong>YES &rarr; Use <code>do...while</code></strong></li></ol><h3>2. Memorize This Quick Rule</h3><ul><li><strong>Known count &rarr; <code>for</code></strong></li><li><strong>Unknown count &rarr; <code>while</code></strong></li><li><strong>At least once &rarr; <code>do...while</code></strong></li></ul><h3>3. Real-World Decision Examples</h3><ul><li><strong>\"Print 1 to 100\":</strong> Known number of iterations &rarr; <strong><code>for</code></strong></li><li><strong>\"Keep asking until positive\":</strong> Unknown attempts &rarr; <strong><code>while</code></strong></li><li><strong>\"Display menu at least once\":</strong> Must execute once &rarr; <strong><code>do...while</code></strong></li><li><strong>\"Process array elements\":</strong> Known size &rarr; <strong><code>for</code></strong></li><li><strong>\"Read until EOF\":</strong> Unknown amount &rarr; <strong><code>while</code></strong></li><li><strong>\"Repeat until Exit\":</strong> Menu runs first &rarr; <strong><code>do...while</code></strong></li></ul><h3>4. Exam-Friendly Definitions</h3><ul><li><strong>Loop:</strong> A control structure in C that repeatedly executes a block of statements as long as a specified condition is satisfied.</li><li><strong>for loop:</strong> Used when the number of iterations is known or controlled by a counter.</li><li><strong>while loop:</strong> Repeatedly executes statements while a condition is true; condition is checked before each iteration.</li><li><strong>do...while loop:</strong> Executes its body at least once because condition is checked after the body.</li></ul>",
      "techTable": "<table class='doc-table'><thead><tr><th>Feature</th><th>for Loop</th><th>while Loop</th><th>do...while Loop</th></tr></thead><tbody><tr><td><strong>Condition Checked</strong></td><td>Before body (Pre-test)</td><td>Before body (Pre-test)</td><td><strong>After body (Post-test)</strong></td></tr><tr><td><strong>May Execute 0 Times?</strong></td><td>Yes</td><td>Yes</td><td><strong>No (Never 0)</strong></td></tr><tr><td><strong>Executes At Least Once?</strong></td><td>No</td><td>No</td><td><strong>Yes (Guaranteed)</strong></td></tr><tr><td><strong>Best Used For</strong></td><td>Known / count-controlled</td><td>Unknown / condition-controlled</td><td>Must run at least once (Menus)</td></tr><tr><td><strong>Initialization Location</strong></td><td>Inside header</td><td>Before loop</td><td>Before loop</td></tr><tr><td><strong>Update Location</strong></td><td>Inside header</td><td>Inside body</td><td>Inside body</td></tr><tr><td><strong>Loop Type</strong></td><td>Pre-test</td><td>Pre-test</td><td><strong>Post-test</strong></td></tr></tbody></table>\n\n<div class=\"doc-table-wrapper\">\n<table class=\"doc-table\">\n<thead><tr><th>Comparison Feature</th><th>`for` Loop</th><th>`while` Loop</th><th>`do...while` Loop</th></tr></thead>\n<tbody>\n<tr><td><strong>Control Type</strong></td><td>Entry-Controlled (Pre-test)</td><td>Entry-Controlled (Pre-test)</td><td>Exit-Controlled (Post-test)</td></tr>\n<tr><td><strong>Condition Check</strong></td><td>At the beginning of each iteration</td><td>At the beginning of each iteration</td><td>At the bottom of each iteration</td></tr>\n<tr><td><strong>Minimum Executions</strong></td><td><strong>0 times</strong> (if condition initially false)</td><td><strong>0 times</strong> (if condition initially false)</td><td><strong>Guaranteed 1 time</strong></td></tr>\n<tr><td><strong>Syntax Layout</strong></td><td><code>for(init; cond; update)</code></td><td><code>while(cond) { ... }</code></td><td><code>do { ... } while(cond);</code></td></tr>\n<tr><td><strong>Trailing Semicolon</strong></td><td>No semicolon after header</td><td>No semicolon after header</td><td><strong>MANDATORY:</strong> <code>while(cond);</code></td></tr>\n<tr><td><strong>Best Used For</strong></td><td>Known count of repetitions (1..N, Arrays)</td><td>Indefinite iterations (reading until 0, digit extraction)</td><td>Interactive menus, input range validation</td></tr>\n</tbody>\n</table>\n</div>\n",
      "diagram": "+-------------------------------------------------------------------------+\n|                        EASY LOOP DECISION TREE                          |\n|                                                                         |\n|                            Need Repetition?                             |\n|                                   |                                     |\n|                                  YES                                    |\n|                                   |                                     |\n|                 -------------------------------------                   |\n|                 |                                   |                   |\n|            Must execute                         No special              |\n|           at least once?                        requirement             |\n|                 |                                   |                   |\n|                YES                                  |                   |\n|                 |                                   v                   |\n|                 v                       Know the number of times?       |\n|            do...while                               |                   |\n|                                            ------------------           |\n|                                            |                |           |\n|                                           YES               NO          |\n|                                            |                |           |\n|                                            v                v           |\n|                                           for             while         |\n+-------------------------------------------------------------------------+",
      "code": "#include <stdio.h>\n\nint main(void) {\n    printf(\"1. Known Count (for): \\n\");\n    for (int i = 1; i <= 5; i++) printf(\"%d \", i);\n    printf(\"\\n\\n\");\n    \n    int target = 48;\n    printf(\"2. Event-Driven Reduction (while): \\n\");\n    while (target > 5) {\n        printf(\"%d \", target);\n        target /= 2;\n    }\n    printf(\"\\n\\n\");\n    \n    int choice = 0;\n    printf(\"3. Must Run Once Confirmation (do-while): \\n\");\n    do {\n        printf(\"[Menu printed at least once for choice = %d]\\n\", choice);\n    } while (choice != 0);\n    return 0;\n}",
      "output": "1. Known Count (for): \n1 2 3 4 5 \n\n2. Event-Driven Reduction (while): \n48 24 12 6 \n\n3. Must Run Once Confirmation (do-while): \n[Menu printed at least once for choice = 0] ",
      "codeExplanation": "Demonstrates the canonical application of each loop: for for known counts, while for value-dependent reduction, and do-while for guaranteed first-pass execution.",
      "examTraps": "A classic exam question asks to rewrite a while loop containing 'continue' into a for loop. Note: in while, continue skips the update at the bottom of the body (freezing loop); in for, continue safely triggers the header update!",
      "practiceProblems": [
        {
          "level": "Level 1: While-to-For Refactoring Drill",
          "levelClass": "diff-very-basic",
          "statement": "Refactor this code into an idiomatic 3-line for loop: int i = 10, sum = 0; while (i >= 2) { sum += i; i -= 2; }",
          "input": "Initial code with while",
          "output": "Sum = 30",
          "concept": "Syntactic transformation between while and for loops",
          "hint": "for (int i = 10; i >= 2; i -= 2) sum += i;"
        },
        {
          "level": "Level 2: Spot and Fix the Anti-Pattern",
          "levelClass": "diff-basic",
          "statement": "Identify the code smell in this program: int x; while (1) { printf(\"Enter: \"); scanf(\"%d\", &x); if (x > 0) break; } Rewrite it as a clean do-while loop.",
          "input": "Unclean infinite loop with break",
          "output": "Clean do-while equivalent",
          "concept": "Eliminating hidden break termination in favor of explicit exit condition",
          "hint": "int x; do { printf(\"Enter: \"); scanf(\"%d\", &x); } while (x <= 0);"
        },
        {
          "level": "Level 3: Architectural Loop Selection Defense",
          "levelClass": "diff-exam",
          "statement": "For each of the following tasks, name the single best loop construct and write a 1-sentence technical justification: (a) Stepping through an array of 50 students, (b) Calculating GCD using Euclidean remainder division, (c) Prompting user for password until correct.",
          "input": "3 Architectural Scenarios",
          "output": "(a) for (fixed bound), (b) while (event-driven, 0-or-more), (c) do-while (prompt must appear at least once)",
          "concept": "Architectural loop selection criteria in computer systems engineering",
          "hint": "Apply the 3-Second Decision Rule: Known iterations vs Post-test validation vs Pre-test transformation."
        },
        {
          "problemId": "33.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "State the 3-Second Loop Decision Rule: which loop should you select for (a) looping through array indices 0 to N-1, (b) reading characters until EOF or newline, (c) displaying an ATM options menu?"
        },
        {
          "problemId": "33.2",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Convert a given for loop: 'for (int i = 1; i <= 10; i += 2) printf(\"%d \", i);' into an exactly equivalent while loop and do-while loop."
        },
        {
          "problemId": "33.3",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Analyze what happens when the initial condition is FALSE (e.g., i = 10; i < 5). Contrast how while behaves vs do-while with concrete code output."
        },
        {
          "problemId": "33.4",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Explain why while is preferred over for when validating user input: write an input sentinel loop reading positive integers until -1 is entered."
        },
        {
          "problemId": "33.5",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Identify the subtle bug in converting 'do { ... if (x == 3) continue; ... } while (cond);' into a while loop. Explain how continue impacts the loop update step."
        }
      ],
      "objective": "Apply the 3-second loop selection rule to pick between `for`, `while`, and `do...while` in exam coding questions.",
      "whatIsIt": "A systematic decision strategy to select the cleanest, most idiomatic loop structure for any given problem.",
      "keyConcept": [
        "Rule 1: Iterations known in advance (counting, fixed range 1..N) \u2794 Use `for`.",
        "Rule 2: Iterations depend on runtime state, may execute zero times \u2794 Use `while`.",
        "Rule 3: Must execute at least once before testing condition (menu, input validator) \u2794 Use `do...while`."
      ],
      "ruleFormula": "The 3-Second Loop Decision Tree:\nDo I need repetition? \u2794 YES\nMust it execute at least once? \u2794 YES \u2794 do...while\n                            \u2794 NO  \u2794 Iteration count known? \u2794 YES \u2794 for\n                                                           \u2794 NO  \u2794 while",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    // Counting 1..3 with the ideal loop:\n    for (int i = 1; i <= 3; i++) {\n        printf(\"for: %d\\n\", i);\n    }\n    return 0;\n}",
      "exampleOutput": "for: 1\nfor: 2\nfor: 3",
      "commonMistake": {
        "trap": "Using `while(1)` with an internal `if (...) break;` when a clean `do...while` expresses the exact same logic.",
        "why": "Uncontrolled infinite loops with multiple breaks make code harder to read, debug, and trace during exams.",
        "fix": "If an operation must run first and exit upon condition, express it directly as `do { ... } while (...);`."
      },
      "memoryTrick": "Known count? `for`. Unknown? `while`. At least once? `do...while`.",
      "practiceQuestion": {
        "q": "Which loop should you choose to compute the reverse of an integer, and why?",
        "hint": "Use `while (n != 0)` because the number of digits varies and is unknown until digits are repeatedly extracted."
      }
    },
    {
      "id": "ch3_8",
      "chapterId": 3,
      "number": 34,
      "title": "Comparative Mathematical Problem Solving Across Different Loops",
      "badge": "Algorithm Lab",
      "readingTime": "16 min read",
      "overview": "<p>In C programming, the <strong>underlying mathematical logic</strong> of a problem remains identical, but the <strong>variable lifecycles, termination boundaries, and edge-case behaviors</strong> vary depending on which loop construct is selected.</p><blockquote><strong>Core Pedagogical Goal:</strong> Don't memorize only the syntax. Learn to recognize the <strong>15 problem patterns</strong> and apply the <strong>7-step checklist</strong>.</blockquote>",
      "deepDive": "<h3>1. Same Problem Using Different Loops</h3><p>Suppose we want to print <code>1 2 3 4 5</code>:</p><ul><li><strong>Using for:</strong> <code>for(int i = 1; i <= 5; i++) printf('%d ', i);</code></li><li><strong>Using while:</strong> <code>int i = 1; while(i <= 5) { printf('%d ', i); i++; }</code></li><li><strong>Using do...while:</strong> <code>int i = 1; do { printf('%d ', i); i++; } while(i <= 5);</code></li></ul><p>All three work. The goal is to choose the loop that naturally matches the problem.</p><h3>2. The 7-Step Problem-Solving Checklist</h3><p>Whenever you receive a loop problem, <strong>don't immediately start typing code</strong>. Walk through these 7 steps:</p><ol><li><strong>Step 1: What needs to be repeated?</strong> (Body statement)</li><li><strong>Step 2: What is the starting value?</strong> (e.g. <code>i = 1</code>)</li><li><strong>Step 3: When should the loop stop?</strong> (e.g. <code>i <= n</code>)</li><li><strong>Step 4: How does the value change?</strong> (e.g. <code>i++</code>, <code>i += 2</code>, <code>n /= 10</code>)</li><li><strong>Step 5: Which loop fits best?</strong> (Known count &rarr; <code>for</code>, Unknown &rarr; <code>while</code>, At least once &rarr; <code>do...while</code>)</li><li><strong>Step 6: Do I need an if inside?</strong> (Even/odd, max, min, searching, counting)</li><li><strong>Step 7: Do I need break or continue?</strong> (Stop completely &rarr; <code>break</code>, skip one case &rarr; <code>continue</code>)</li></ol><h3>3. The 15 Core Problem Patterns to Master</h3><p>Once you master these 15 patterns, loops become universal tools:</p><ol><li>Counting (1 to N)</li><li>Reverse counting (N down to 1)</li><li>Even numbers (i += 2)</li><li>Odd numbers (i += 2)</li><li>Sum accumulator (sum += i)</li><li>Product / Factorial (product *= i)</li><li>Counting matching values (if(cond) count++)</li><li>Finding maximum (if(x > max) max = x)</li><li>Finding minimum (if(x < min) min = x)</li><li>Linear search (if(arr[i] == target) { found = 1; break; })</li><li>Input until sentinel (while(n != 0))</li><li>Input validation (do { scanf(...); } while(invalid))</li><li>Pattern printing (nested row & column loops)</li><li>Multiplication tables (row * col grids)</li><li>Array traversal (for(i = 0; i < N; i++))</li></ol>",
      "techTable": "<table class='doc-table'><thead><tr><th>Pattern Name</th><th>Target Logic</th><th>Optimal Loop</th><th>Key Operator / Variable</th></tr></thead><tbody><tr><td><strong>Counting</strong></td><td>1 to N sequential</td><td><code>for</code></td><td><code>i++</code></td></tr><tr><td><strong>Reverse Counting</strong></td><td>N down to 1</td><td><code>for</code></td><td><code>i--</code></td></tr><tr><td><strong>Sum Accumulator</strong></td><td>Total of range</td><td><code>for</code> / <code>while</code></td><td><code>sum += i;</code> (init <code>sum=0</code>)</td></tr><tr><td><strong>Factorial</strong></td><td>Product N!</td><td><code>for</code> / <code>while</code></td><td><code>fact *= i;</code> (init <code>fact=1</code>)</td></tr><tr><td><strong>Finding Maximum</strong></td><td>Track highest value</td><td><code>for</code> / <code>while</code></td><td><code>if (x > max) max = x;</code></td></tr><tr><td><strong>Linear Search</strong></td><td>Find target item</td><td><code>for</code></td><td><code>if (arr[i]==k) { found=1; break; }</code></td></tr><tr><td><strong>Sentinel Input</strong></td><td>Read until 0</td><td><code>while</code></td><td><code>while (n != 0)</code></td></tr><tr><td><strong>Menu / Validation</strong></td><td>Run at least once</td><td><code>do...while</code></td><td><code>do { ... } while (choice != 0);</code></td></tr></tbody></table>",
      "diagram": "+-------------------------------------------------------------------------+\n|                          ONE-PAGE REVISION CARD                         |\n|                                                                         |\n|                                 C LOOPS                                 |\n|                                    |                                    |\n|             +----------------------+----------------------+             |\n|             |                      |                      |             |\n|            for                   while                do...while        |\n|             |                      |                      |             |\n|        Known count           Unknown count          Must run once       |\n|             |                      |                      |             |\n|        Condition              Condition               Body runs         |\n|       before body            before body             FIRST check        |\n|             |                      |                    after           |\n|          Pre-test               Pre-test              Post-test         |\n|                                                                         |\n|    break:    STOP THE LOOP \ud83d\uded1                                            |\n|    continue: SKIP THIS ITERATION \u23ed\ufe0f                                      |\n+-------------------------------------------------------------------------+",
      "code": "#include <stdio.h>\n\nint main(void) {\n    int s_for = 0, s_while = 0, s_do = 0;\n    \n    for (int i = 1; i <= 5; i++) s_for += i;\n    \n    int w_i = 1;\n    while (w_i <= 5) { s_while += w_i; w_i++; }\n    \n    int d_i = 1;\n    do { s_do += d_i; d_i++; } while (d_i <= 5);\n    \n    printf(\"Sum 1..5 using for     : %d\\n\", s_for);\n    printf(\"Sum 1..5 using while   : %d\\n\", s_while);\n    printf(\"Sum 1..5 using do-while: %d\\n\\n\", s_do);\n    \n    int n = 5, fact = 1;\n    for (int i = 1; i <= n; i++) fact *= i;\n    printf(\"%d! Factorial = %d\\n\\n\", n, fact);\n    \n    int arr[5] = {10, 20, 30, 40, 50};\n    int target = 30, found = 0;\n    for (int i = 0; i < 5; i++) {\n        if (arr[i] == target) {\n            found = 1;\n            break;\n        }\n    }\n    printf(\"Searching %d in array: %s\\n\", target, found ? \"Found!\" : \"Not Found\");\n    return 0;\n}",
      "output": "Sum 1..5 using for     : 15\nSum 1..5 using while   : 15\nSum 1..5 using do-while: 15\n\n5! Factorial = 120\n\nSearching 30 in array: Found!",
      "codeExplanation": "Proves mathematical equivalence across all three loops, shows the accumulator pattern for factorials, and demonstrates linear search with break.",
      "examTraps": "1. Uninitialized accumulators: `int sum;` contains garbage memory values. Always write `int sum = 0;` and `int product = 1;`. 2. Finding Maximum trap: Initializing `max = 0` fails if all input numbers are negative! Always initialize `max` with the first element of input.",
      "practiceProblems": [
        {
          "level": "Level 1: Tri-Loop Factorial Benchmark",
          "levelClass": "diff-very-basic",
          "statement": "Write a program containing three separate functions: fact_for(n), fact_while(n), and fact_dowhile(n). Compute 5! in each and verify that all three return 120. Ensure all three correctly return 1 for N = 0.",
          "input": "N = 5 and N = 0",
          "output": "For 5: 120, 120, 120 | For 0: 1, 1, 1",
          "concept": "Cross-loop factorial algorithm implementation and 0! boundary protection",
          "hint": "In fact_dowhile, if (n <= 1) return 1; do { f *= n; n--; } while (n > 1);"
        },
        {
          "level": "Level 2: Geometric Series Sum across Loops",
          "levelClass": "diff-basic",
          "statement": "Calculate the sum of geometric series S = 1 + x + x^2 + ... + x^n using both a for loop and a while loop. Compare readability and state management between the two.",
          "input": "x = 2, n = 4",
          "output": "Sum = 31 (1 + 2 + 4 + 8 + 16)",
          "concept": "Iterative term accumulation (term *= x) comparison across loop styles",
          "hint": "long long term = 1, sum = 1; for (int i = 1; i <= n; i++) { term *= x; sum += term; }"
        },
        {
          "level": "Level 3: Zero-Edge Digit Counter Stress Test",
          "levelClass": "diff-exam",
          "statement": "Write a digit counting function. Show why while (n > 0) returns 0 digits for input N = 0 (a bug!), whereas do { count++; n /= 10; } while (n > 0) naturally returns 1 digit for N = 0. Explain why do-while is mathematically superior for digit counting.",
          "input": "N = 0",
          "output": "while loop: 0 digits (incorrect) | do-while loop: 1 digit (correct)",
          "concept": "Exploiting exit-controlled execution to handle zero-boundary cases without extra if branches",
          "hint": "Trace on paper: N=0 in while condition (0 > 0) is false immediately. In do-while, count increments to 1, 0 / 10 = 0, then condition (0 > 0) stops loop."
        },
        {
          "problemId": "36.1",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Solid Square of Stars (4x4) ```text **** **** **** **** ``` - *Rows:* 4, *Cols per row:* 4 (Fixed)."
        },
        {
          "problemId": "36.2",
          "level": "\ud83d\udfe2 Level 1: Very Basic",
          "levelClass": "diff-very-basic",
          "statement": "Solid Rectangle (3 rows, 6 cols) ```text ****** ****** ****** ```"
        },
        {
          "problemId": "36.3",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Right Triangle of Stars (Increasing) ```text * ** *** **** ***** ``` - *Logic:* In row $r$, print $r$ stars: `for (int c = 1; c <= r; c++) printf(\"*\");`."
        },
        {
          "problemId": "36.4",
          "level": "\ud83d\udfe2 Level 2: Basic",
          "levelClass": "diff-basic",
          "statement": "Inverted Right Triangle (Decreasing) ```text ***** **** *** ** * ``` - *Logic:* In row $r$, print $N - r + 1$ stars."
        },
        {
          "problemId": "36.5",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Number Triangle (Consecutive Column Numbers) ```text 1 12 123 1234 12345 ``` - *Logic:* Print inner loop counter `c`: `printf(\"%d\", c);`."
        },
        {
          "problemId": "36.6",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Repeated Row Number Triangle ```text 1 22 333 4444 55555 ``` - *Logic:* Print outer loop counter `r`: `printf(\"%d\", r);`."
        },
        {
          "problemId": "36.7",
          "level": "\ud83d\udfe1 Level 3: Intermediate",
          "levelClass": "diff-intermediate",
          "statement": "Floyd's Triangle (Continuous Counting) ```text 1 2 3 4 5 6 7 8 9 10 ``` - *Logic:* Maintain a separate variable `count = 1` incremented after every print."
        },
        {
          "problemId": "36.8",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Right-Aligned Star Triangle ```text * ** *** **** ***** ``` - *Row Breakdown:* - Row 1: 4 spaces, 1 star - Row 2: 3 spaces, 2 stars - Row $r$: $(N - r)$ spaces, followed by $r$ stars!"
        },
        {
          "problemId": "36.9",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Symmetrical Star Pyramid ```text * *** ***** ******* ********* ``` - *Row Breakdown:* - Spaces: $N - r$ - Stars: $2r - 1$ (Odd numbers: 1, 3, 5, 7, 9)."
        },
        {
          "problemId": "36.10",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Inverted Star Pyramid ```text ********* ******* ***** *** * ```"
        },
        {
          "problemId": "36.11",
          "level": "\ud83d\udd25 Level 4: Exam Level",
          "levelClass": "diff-exam",
          "statement": "Star Diamond Combine Pyramid (Problem 36.9) and Inverted Pyramid (Problem 36.10)!"
        },
        {
          "problemId": "36.12",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Alphabet Triangle ```text A AB ABC ABCD ABCDE ``` - *Logic:* `printf(\"%c\", 'A' + c - 1);`."
        },
        {
          "problemId": "36.13",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "Hollow Square (Stars only on border) ```text ***** * * * * * * ***** ``` - *Logic:* Print star if $r==1 || r==N || c==1 || c==N$; else print space!"
        },
        {
          "problemId": "36.14",
          "level": "\ud83d\udd34 Level 5: Challenge",
          "levelClass": "diff-challenge",
          "statement": "0-1 Alternate Triangle ```text 1 01 101 0101 10101 ``` - *Logic:* If $(r + c) \\pmod 2 == 0$ print `1`, else print `0`."
        }
      ],
      "objective": "Compare how identical mathematical algorithms behave across `for`, `while`, and `do...while` and identify boundary traps.",
      "whatIsIt": "A comparative benchmark proving that while mathematical logic is universal, loop selection impacts variable lifecycles and boundary edge cases.",
      "keyConcept": [
        "Sum of $1..N$: `for` and `while` handle $N = 0$ cleanly (yielding 0). Unshielded `do...while` runs once and returns 1 (off-by-one error!).",
        "Digit Counting: `do...while` correctly handles $N = 0$ (yielding 1 digit); unshielded `while (n > 0)` yields 0 digits.",
        "Factorial: Handling $0! = 1$ safely requires pre-checking conditions."
      ],
      "ruleFormula": "The N = 0 Boundary Rule:\nSum 1..N with do-while needs input guard (if N <= 0 return 0);\nDigit counting with while needs input guard (if N == 0 return 1).",
      "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    int n = 5, sum_for = 0, sum_while = 0;\n    for (int i = 1; i <= n; i++) sum_for += i;\n    int j = 1;\n    while (j <= n) { sum_while += j; j++; }\n    printf(\"Sum via for: %d, Sum via while: %d\\n\", sum_for, sum_while);\n    return 0;\n}",
      "exampleOutput": "Sum via for: 15, Sum via while: 15",
      "commonMistake": {
        "trap": "Forgetting to initialize accumulators (`sum = 0;`, `prod = 1;`) before loop entry.",
        "why": "The calculation accumulates onto random stack garbage values, ruining the result.",
        "fix": "Always initialize sum to 0 and product to 1 before loop entry."
      },
      "memoryTrick": "Sums start at ZERO. Products start at ONE. Test $N = 0$ every time!",
      "practiceQuestion": {
        "q": "Why must the product accumulator for factorial start at `1` instead of `0`?",
        "hint": "Multiplying any number by 0 yields 0. `fact = 1` ensures $1 \\times 2 \\times 3...$ computes correctly."
      }
    }
  ],
  "problems": [
    {
      "id": "p1_1",
      "num": 1,
      "title": "Swap two variables using a temporary variable",
      "difficulty": 1,
      "estTime": "5 min",
      "focus": "Variables & Memory transfer",
      "chapterId": 1,
      "chapterName": "Chapter 1: Fundamentals of Computer & C",
      "topicId": "ch1_11",
      "topicTitle": "11. Variables, Constants, Expressions & Memory",
      "curriculumPath": "Ch 1 \u2794 Variables & Memory",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 1: Fundamentals > Topic 11: Variables & Memory > Problem #01",
      "concept": "Three-way memory buffer transfer using a temporary variable",
      "sampleInput": "a = 10, b = 25",
      "sampleOutput": "Before: a = 10, b = 25\nAfter : a = 25, b = 10",
      "algorithmSteps": [
        "Step 1: Declare three integer variables: a, b, and temp.",
        "Step 2: Read or initialize values for a and b.",
        "Step 3: Copy value of a into temp (temp = a).",
        "Step 4: Overwrite a with b (a = b).",
        "Step 5: Copy preserved value from temp into b (b = temp).",
        "Step 6: Print swapped values of a and b."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int a = 10, b = 25, temp;\n    printf(\"Before: a = %d, b = %d\\n\", a, b);\n    temp = a;\n    a = b;\n    b = temp;\n    printf(\"After : a = %d, b = %d\\n\", a, b);\n    return 0;\n}",
      "difficultyClass": "diff-very-basic",
      "difficultyLabel": "Very Basic"
    },
    {
      "id": "p1_2",
      "num": 2,
      "title": "Swap two variables WITHOUT a third temporary variable",
      "difficulty": 2,
      "estTime": "8 min",
      "focus": "Arithmetic swapping logic",
      "chapterId": 1,
      "chapterName": "Chapter 1: Fundamentals of Computer & C",
      "topicId": "ch1_11",
      "topicTitle": "11. Variables, Constants, Expressions & Memory",
      "curriculumPath": "Ch 1 \u2794 Variables & Memory",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 1: Fundamentals > Topic 11: Variables & Memory > Problem #02",
      "concept": "Mathematical delta accumulation and cancellation (+, -)",
      "sampleInput": "x = 40, y = 15",
      "sampleOutput": "Before: x = 40, y = 15\nAfter : x = 15, y = 40",
      "algorithmSteps": [
        "Step 1: Read two integers x and y.",
        "Step 2: Add y to x and store sum in x (x = x + y).",
        "Step 3: Subtract y from current x to recover original x into y (y = x - y).",
        "Step 4: Subtract new y from x to recover original y into x (x = x - y).",
        "Step 5: Print new x and y."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int x = 40, y = 15;\n    printf(\"Before: x = %d, y = %d\\n\", x, y);\n    x = x + y;\n    y = x - y;\n    x = x - y;\n    printf(\"After : x = %d, y = %d\\n\", x, y);\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_3",
      "num": 3,
      "title": "Calculate area and perimeter of rectangle",
      "difficulty": 1,
      "estTime": "5 min",
      "focus": "Basic arithmetic formulas",
      "chapterId": 2,
      "chapterName": "Chapter 2: Operators, Input & Output",
      "topicId": "ch2_1",
      "topicTitle": "1. Arithmetic Operators",
      "curriculumPath": "Ch 2 \u2794 Arithmetic Operators",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 2: Operators > Topic 1: Arithmetic Operators > Problem #03",
      "concept": "Standard geometry formulas using multiplication and addition",
      "sampleInput": "length = 12.5, width = 6.0",
      "sampleOutput": "Area = 75.00 sq units\nPerimeter = 37.00 units",
      "algorithmSteps": [
        "Step 1: Read length and width as float values.",
        "Step 2: Compute area = length * width.",
        "Step 3: Compute perimeter = 2.0 * (length + width).",
        "Step 4: Print area and perimeter with 2 decimal precision."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    float length = 12.5f, width = 6.0f;\n    float area = length * width;\n    float perimeter = 2.0f * (length + width);\n    printf(\"Area = %.2f sq units\\n\", area);\n    printf(\"Perimeter = %.2f units\\n\", perimeter);\n    return 0;\n}",
      "difficultyClass": "diff-very-basic",
      "difficultyLabel": "Very Basic"
    },
    {
      "id": "p1_4",
      "num": 4,
      "title": "Convert temperature from Celsius to Fahrenheit",
      "difficulty": 1,
      "estTime": "6 min",
      "focus": "Float formula conversion",
      "chapterId": 1,
      "chapterName": "Chapter 1: Fundamentals of Computer & C",
      "topicId": "ch1_11",
      "topicTitle": "11. Variables, Constants, Expressions & Memory",
      "curriculumPath": "Ch 1 \u2794 Variables & Memory",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 1: Fundamentals > Topic 11: Variables & Memory > Problem #04",
      "concept": "Floating point constants to prevent integer truncation (9.0/5.0)",
      "sampleInput": "Celsius = 37.0",
      "sampleOutput": "37.00 C = 98.60 F",
      "algorithmSteps": [
        "Step 1: Read Celsius temperature c.",
        "Step 2: Apply formula: f = (c * 9.0 / 5.0) + 32.0.",
        "Step 3: Print result in Fahrenheit."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    float celsius = 37.0f;\n    float fahrenheit = (celsius * 9.0f / 5.0f) + 32.0f;\n    printf(\"%.2f C = %.2f F\\n\", celsius, fahrenheit);\n    return 0;\n}",
      "difficultyClass": "diff-very-basic",
      "difficultyLabel": "Very Basic"
    },
    {
      "id": "p1_5",
      "num": 5,
      "title": "Convert seconds into hours, minutes, and seconds",
      "difficulty": 2,
      "estTime": "10 min",
      "focus": "Integer division & modulus",
      "chapterId": 2,
      "chapterName": "Chapter 2: Operators, Input & Output",
      "topicId": "ch2_1",
      "topicTitle": "1. Arithmetic Operators",
      "curriculumPath": "Ch 2 \u2794 Arithmetic Operators",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 2: Operators > Topic 1: Arithmetic Operators > Problem #05",
      "concept": "Time hierarchy breakdown using / 3600, / 60 and % 60",
      "sampleInput": "total_seconds = 7384",
      "sampleOutput": "7384 sec = 2 hr : 3 min : 4 sec",
      "algorithmSteps": [
        "Step 1: Read totalSeconds as integer.",
        "Step 2: Compute hours = totalSeconds / 3600.",
        "Step 3: Compute remainingSeconds = totalSeconds % 3600.",
        "Step 4: Compute minutes = remainingSeconds / 60.",
        "Step 5: Compute seconds = remainingSeconds % 60.",
        "Step 6: Print formatted H:M:S."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int total = 7384;\n    int hours = total / 3600;\n    int rem = total % 3600;\n    int mins = rem / 60;\n    int secs = rem % 60;\n    printf(\"%d sec = %d hr : %d min : %d sec\\n\", total, hours, mins, secs);\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_6",
      "num": 6,
      "title": "Calculate simple and compound interest",
      "difficulty": 2,
      "estTime": "10 min",
      "focus": "Math formulas & power",
      "chapterId": 2,
      "chapterName": "Chapter 2: Operators, Input & Output",
      "topicId": "ch2_10",
      "topicTitle": "10. Mathematical Functions",
      "curriculumPath": "Ch 2 \u2794 Math Library Functions",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 2: Operators > Topic 10: Math Functions > Problem #06",
      "concept": "Simple arithmetic vs pow() exponentiation with math.h",
      "sampleInput": "P = 10000, R = 5%, T = 3 years",
      "sampleOutput": "Simple Interest = $1500.00\nCompound Interest = $1576.25",
      "algorithmSteps": [
        "Step 1: Include <math.h>.",
        "Step 2: Compute SI = (P * R * T) / 100.0.",
        "Step 3: Compute CI = P * pow((1.0 + R / 100.0), T) - P.",
        "Step 4: Print SI and CI."
      ],
      "solutionCode": "#include <stdio.h>\n#include <math.h>\n\nint main(void) {\n    double p = 10000.0, r = 5.0, t = 3.0;\n    double si = (p * r * t) / 100.0;\n    double ci = p * pow(1.0 + r / 100.0, t) - p;\n    printf(\"Simple Interest   = $%.2f\\n\", si);\n    printf(\"Compound Interest = $%.2f\\n\", ci);\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_7",
      "num": 7,
      "title": "Extract and print last digit of an integer",
      "difficulty": 1,
      "estTime": "4 min",
      "focus": "Modulus % 10 operator",
      "chapterId": 2,
      "chapterName": "Chapter 2: Operators, Input & Output",
      "topicId": "ch2_1",
      "topicTitle": "1. Arithmetic Operators",
      "curriculumPath": "Ch 2 \u2794 Arithmetic Operators",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 2: Operators > Topic 1: Arithmetic Operators > Problem #07",
      "concept": "Modulo 10 digit extraction fundamentals",
      "sampleInput": "num = 9483",
      "sampleOutput": "Last digit = 3",
      "algorithmSteps": [
        "Step 1: Read an integer n.",
        "Step 2: Extract last digit using lastDigit = n % 10.",
        "Step 3: Print lastDigit."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int num = 9483;\n    int lastDigit = num % 10;\n    printf(\"Number: %d -> Last Digit: %d\\n\", num, lastDigit);\n    return 0;\n}",
      "difficultyClass": "diff-very-basic",
      "difficultyLabel": "Very Basic"
    },
    {
      "id": "p1_8",
      "num": 8,
      "title": "Calculate sum of individual digits of a 3-digit number",
      "difficulty": 2,
      "estTime": "8 min",
      "focus": "Repeated % 10 and / 10",
      "chapterId": 2,
      "chapterName": "Chapter 2: Operators, Input & Output",
      "topicId": "ch2_1",
      "topicTitle": "1. Arithmetic Operators",
      "curriculumPath": "Ch 2 \u2794 Arithmetic Operators",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 2: Operators > Topic 1: Arithmetic Operators > Problem #08",
      "concept": "Sequential digit peeling without loops",
      "sampleInput": "n = 582",
      "sampleOutput": "Sum of digits (5 + 8 + 2) = 15",
      "algorithmSteps": [
        "Step 1: Read 3-digit integer n (e.g. 582).",
        "Step 2: d3 = n % 10 (2), n = n / 10 (58).",
        "Step 3: d2 = n % 10 (8), n = n / 10 (5).",
        "Step 4: d1 = n % 10 (5).",
        "Step 5: sum = d1 + d2 + d3.",
        "Step 6: Print sum."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int n = 582, original = n;\n    int d3 = n % 10; n /= 10;\n    int d2 = n % 10; n /= 10;\n    int d1 = n % 10;\n    int sum = d1 + d2 + d3;\n    printf(\"Digits of %d: %d + %d + %d = %d\\n\", original, d1, d2, d3, sum);\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_9",
      "num": 9,
      "title": "Evaluate prefix and postfix increment expressions",
      "difficulty": 2,
      "estTime": "10 min",
      "focus": "Unary ++ and -- output tracing",
      "chapterId": 2,
      "chapterName": "Chapter 2: Operators, Input & Output",
      "topicId": "ch2_2",
      "topicTitle": "2. Unary Operators",
      "curriculumPath": "Ch 2 \u2794 Unary Operators",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 2: Operators > Topic 2: Unary Operators > Problem #09",
      "concept": "Prefix (increment first) vs Postfix (use first, increment after)",
      "sampleInput": "a = 5, b = 5",
      "sampleOutput": "a++ = 5 (a is now 6)\n++b = 6 (b is now 6)",
      "algorithmSteps": [
        "Step 1: Declare a = 5, b = 5.",
        "Step 2: Print a++ (evaluates to 5, then increments a to 6).",
        "Step 3: Print ++b (increments b to 6, evaluates to 6).",
        "Step 4: Observe state differences in memory."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int a = 5, b = 5;\n    printf(\"Initial: a = %d, b = %d\\n\", a, b);\n    printf(\"Postfix a++: %d\\n\", a++);\n    printf(\"After Postfix a: %d\\n\", a);\n    printf(\"Prefix ++b: %d\\n\", ++b);\n    printf(\"After Prefix b: %d\\n\", b);\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_10",
      "num": 10,
      "title": "Demonstrate short-circuit evaluation in logical expressions",
      "difficulty": 3,
      "estTime": "12 min",
      "focus": "&& and || side effects",
      "chapterId": 2,
      "chapterName": "Chapter 2: Operators, Input & Output",
      "topicId": "ch2_4",
      "topicTitle": "4. Logical Operators",
      "curriculumPath": "Ch 2 \u2794 Logical Operators",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 2: Operators > Topic 4: Logical Operators > Problem #10",
      "concept": "Short circuit: In (0 && ++x), ++x is skipped; in (1 || ++y), ++y is skipped",
      "sampleInput": "a = 0, b = 10",
      "sampleOutput": "Condition: 0\na = 0, b = 10 (b unchanged due to short-circuit)",
      "algorithmSteps": [
        "Step 1: Initialize a = 0, b = 10.",
        "Step 2: Evaluate if (a && ++b). Since a == 0 (False), ++b NEVER executes.",
        "Step 3: Print b to prove it remains 10."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int a = 0, b = 10;\n    if (a && ++b) {\n        printf(\"Branch Taken\\n\");\n    }\n    printf(\"Short-circuit test: b is still %d (not 11!)\\n\", b);\n    return 0;\n}",
      "difficultyClass": "diff-exam",
      "difficultyLabel": "Exam Level"
    },
    {
      "id": "p1_11",
      "num": 11,
      "title": "Check whether a number is Even or Odd",
      "difficulty": 1,
      "estTime": "5 min",
      "focus": "if-else condition",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_1",
      "topicTitle": "1. if Statement and if-else Statement",
      "curriculumPath": "Ch 3 \u2794 if and if-else",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 1: if and if-else > Problem #11",
      "concept": "Binary branch testing via remainder equality (n % 2 == 0)",
      "sampleInput": "n = 28",
      "sampleOutput": "28 is EVEN",
      "algorithmSteps": [
        "Step 1: Read an integer n.",
        "Step 2: Test condition: if (n % 2 == 0).",
        "Step 3: If true, print 'EVEN'.",
        "Step 4: Else, print 'ODD'."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int n = 28;\n    if (n % 2 == 0) {\n        printf(\"%d is EVEN\\n\", n);\n    } else {\n        printf(\"%d is ODD\\n\", n);\n    }\n    return 0;\n}",
      "difficultyClass": "diff-very-basic",
      "difficultyLabel": "Very Basic"
    },
    {
      "id": "p1_12",
      "num": 12,
      "title": "Check whether a number is Positive, Negative, or Zero",
      "difficulty": 1,
      "estTime": "5 min",
      "focus": "if-else ladder",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_1",
      "topicTitle": "1. if Statement and if-else Statement",
      "curriculumPath": "Ch 3 \u2794 if and if-else",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 1: if and if-else > Problem #12",
      "concept": "Three-way classification using else-if ladder",
      "sampleInput": "n = -14",
      "sampleOutput": "-14 is NEGATIVE",
      "algorithmSteps": [
        "Step 1: Read integer n.",
        "Step 2: If (n > 0), print 'POSITIVE'.",
        "Step 3: Else if (n < 0), print 'NEGATIVE'.",
        "Step 4: Else, print 'ZERO'."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int n = -14;\n    if (n > 0) {\n        printf(\"%d is POSITIVE\\n\", n);\n    } else if (n < 0) {\n        printf(\"%d is NEGATIVE\\n\", n);\n    } else {\n        printf(\"The number is ZERO\\n\");\n    }\n    return 0;\n}",
      "difficultyClass": "diff-very-basic",
      "difficultyLabel": "Very Basic"
    },
    {
      "id": "p1_13",
      "num": 13,
      "title": "Find largest of two numbers",
      "difficulty": 1,
      "estTime": "5 min",
      "focus": "Relational comparison",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_1",
      "topicTitle": "1. if Statement and if-else Statement",
      "curriculumPath": "Ch 3 \u2794 if and if-else",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 1: if and if-else > Problem #13",
      "concept": "Relational inequality check (a > b)",
      "sampleInput": "a = 45, b = 78",
      "sampleOutput": "Largest is 78",
      "algorithmSteps": [
        "Step 1: Read two integers a and b.",
        "Step 2: If (a > b), print a.",
        "Step 3: Else, print b."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int a = 45, b = 78;\n    if (a > b) {\n        printf(\"Largest is %d\\n\", a);\n    } else {\n        printf(\"Largest is %d\\n\", b);\n    }\n    return 0;\n}",
      "difficultyClass": "diff-very-basic",
      "difficultyLabel": "Very Basic"
    },
    {
      "id": "p1_14",
      "num": 14,
      "title": "Find largest of three numbers using nested if-else",
      "difficulty": 2,
      "estTime": "8 min",
      "focus": "Nested if branching",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_2",
      "topicTitle": "2. Nested if and Dangling-else Problem",
      "curriculumPath": "Ch 3 \u2794 Nested if & Dangling else",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 2: Nested if > Problem #14",
      "concept": "Hierarchical comparison logic without logical operators",
      "sampleInput": "a = 25, b = 80, c = 45",
      "sampleOutput": "Largest is 80",
      "algorithmSteps": [
        "Step 1: Read a, b, c.",
        "Step 2: If (a >= b): if (a >= c) largest is a; else largest is c.",
        "Step 3: Else: if (b >= c) largest is b; else largest is c.",
        "Step 4: Print largest."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int a = 25, b = 80, c = 45;\n    int largest;\n    if (a >= b) {\n        if (a >= c) largest = a;\n        else largest = c;\n    } else {\n        if (b >= c) largest = b;\n        else largest = c;\n    }\n    printf(\"Largest of (%d, %d, %d) is %d\\n\", a, b, c, largest);\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_15",
      "num": 15,
      "title": "Check whether a year is a Leap Year",
      "difficulty": 2,
      "estTime": "10 min",
      "focus": "Compound logical conditions",
      "chapterId": 2,
      "chapterName": "Chapter 2: Operators, Input & Output",
      "topicId": "ch2_4",
      "topicTitle": "4. Logical Operators",
      "curriculumPath": "Ch 2 \u2794 Logical Operators",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 2: Operators > Topic 4: Logical Operators > Problem #15",
      "concept": "Gregorian rule: (year % 400 == 0) || ((year % 4 == 0) && (year % 100 != 0))",
      "sampleInput": "year = 2000, 1900, 2024",
      "sampleOutput": "2000 is LEAP YEAR\n1900 is NOT LEAP YEAR\n2024 is LEAP YEAR",
      "algorithmSteps": [
        "Step 1: Read year.",
        "Step 2: Test condition: (year % 400 == 0) || (year % 4 == 0 && year % 100 != 0).",
        "Step 3: If true, print 'LEAP YEAR'.",
        "Step 4: Else, print 'NOT LEAP YEAR'."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int year = 2024;\n    if ((year % 400 == 0) || (year % 4 == 0 && year % 100 != 0)) {\n        printf(\"%d is a LEAP YEAR\\n\", year);\n    } else {\n        printf(\"%d is NOT a leap year\\n\", year);\n    }\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_16",
      "num": 16,
      "title": "Determine voting eligibility based on age",
      "difficulty": 1,
      "estTime": "4 min",
      "focus": "Simple if-else",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_1",
      "topicTitle": "1. if Statement and if-else Statement",
      "curriculumPath": "Ch 3 \u2794 if and if-else",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 1: if and if-else > Problem #16",
      "concept": "Threshold comparison (age >= 18)",
      "sampleInput": "age = 17",
      "sampleOutput": "Not eligible. Wait 1 year(s).",
      "algorithmSteps": [
        "Step 1: Read age.",
        "Step 2: If (age >= 18), print 'Eligible to vote'.",
        "Step 3: Else, print remaining years until eligibility."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int age = 17;\n    if (age >= 18) {\n        printf(\"Eligible to vote!\\n\");\n    } else {\n        printf(\"Not eligible. Wait %d year(s).\\n\", 18 - age);\n    }\n    return 0;\n}",
      "difficultyClass": "diff-very-basic",
      "difficultyLabel": "Very Basic"
    },
    {
      "id": "p1_17",
      "num": 17,
      "title": "Calculate electricity bill based on unit consumption slabs",
      "difficulty": 3,
      "estTime": "15 min",
      "focus": "Tiered else-if ladder",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_2",
      "topicTitle": "2. Nested if and Dangling-else Problem",
      "curriculumPath": "Ch 3 \u2794 Nested if & Dangling else",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 2: Nested if > Problem #17",
      "concept": "Cumulative slab pricing (first 100 @ 1.5, next 100 @ 2.5, above @ 4.0)",
      "sampleInput": "units = 250",
      "sampleOutput": "Total Bill = $600.00",
      "algorithmSteps": [
        "Step 1: Read consumed units.",
        "Step 2: If units <= 100: bill = units * 1.5.",
        "Step 3: Else if units <= 200: bill = 100*1.5 + (units-100)*2.5.",
        "Step 4: Else: bill = 100*1.5 + 100*2.5 + (units-200)*4.0.",
        "Step 5: Print total bill."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int units = 250;\n    double bill = 0.0;\n    if (units <= 100) {\n        bill = units * 1.50;\n    } else if (units <= 200) {\n        bill = (100 * 1.50) + ((units - 100) * 2.50);\n    } else {\n        bill = (100 * 1.50) + (100 * 2.50) + ((units - 200) * 4.00);\n    }\n    printf(\"Units: %d -> Electricity Bill: $%.2f\\n\", units, bill);\n    return 0;\n}",
      "difficultyClass": "diff-exam",
      "difficultyLabel": "Exam Level"
    },
    {
      "id": "p1_18",
      "num": 18,
      "title": "Find roots of quadratic equation using math library",
      "difficulty": 3,
      "estTime": "15 min",
      "focus": "sqrt() & discriminant",
      "chapterId": 2,
      "chapterName": "Chapter 2: Operators, Input & Output",
      "topicId": "ch2_10",
      "topicTitle": "10. Mathematical Functions",
      "curriculumPath": "Ch 2 \u2794 Math Library Functions",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 2: Operators > Topic 10: Math Functions > Problem #18",
      "concept": "Discriminant (d = b*b - 4*a*c) branching: d>0, d==0, d<0",
      "sampleInput": "a = 1, b = -5, c = 6",
      "sampleOutput": "Real roots: root1 = 3.00, root2 = 2.00",
      "algorithmSteps": [
        "Step 1: Read coefficients a, b, c.",
        "Step 2: Compute discriminant d = b*b - 4*a*c.",
        "Step 3: If d > 0, compute two real roots using sqrt(d).",
        "Step 4: If d == 0, one real root = -b / (2*a).",
        "Step 5: If d < 0, roots are complex conjugates."
      ],
      "solutionCode": "#include <stdio.h>\n#include <math.h>\n\nint main(void) {\n    double a = 1.0, b = -5.0, c = 6.0;\n    double d = b * b - 4.0 * a * c;\n    if (d > 0) {\n        double r1 = (-b + sqrt(d)) / (2.0 * a);\n        double r2 = (-b - sqrt(d)) / (2.0 * a);\n        printf(\"Real roots: %.2f and %.2f\\n\", r1, r2);\n    } else if (d == 0) {\n        printf(\"Single root: %.2f\\n\", -b / (2.0 * a));\n    } else {\n        printf(\"Complex roots\\n\");\n    }\n    return 0;\n}",
      "difficultyClass": "diff-exam",
      "difficultyLabel": "Exam Level"
    },
    {
      "id": "p1_19",
      "num": 19,
      "title": "Check whether an alphabet character is vowel or consonant",
      "difficulty": 2,
      "estTime": "6 min",
      "focus": "Logical OR conditions",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_1",
      "topicTitle": "1. if Statement and if-else Statement",
      "curriculumPath": "Ch 3 \u2794 if and if-else",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 1: if and if-else > Problem #19",
      "concept": "Compound character testing with case normalization",
      "sampleInput": "ch = 'e'",
      "sampleOutput": "'e' is a VOWEL",
      "algorithmSteps": [
        "Step 1: Read character ch.",
        "Step 2: Check if ch is 'a','e','i','o','u' (or uppercase equivalents).",
        "Step 3: If true, print 'VOWEL'; else print 'CONSONANT'."
      ],
      "solutionCode": "#include <stdio.h>\n#include <ctype.h>\n\nint main(void) {\n    char ch = 'e';\n    char lower = tolower(ch);\n    if (lower == 'a' || lower == 'e' || lower == 'i' || lower == 'o' || lower == 'u') {\n        printf(\"'%c' is a VOWEL\\n\", ch);\n    } else {\n        printf(\"'%c' is a CONSONANT\\n\", ch);\n    }\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_20",
      "num": 20,
      "title": "Implement four-function calculator using switch statement",
      "difficulty": 2,
      "estTime": "10 min",
      "focus": "switch case with char",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_3",
      "topicTitle": "3. Switch Statement",
      "curriculumPath": "Ch 3 \u2794 switch Statement",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 3: switch Statement > Problem #20",
      "concept": "Discrete operator dispatch using switch (+, -, *, /)",
      "sampleInput": "num1 = 20, num2 = 4, op = '/'",
      "sampleOutput": "20.00 / 4.00 = 5.00",
      "algorithmSteps": [
        "Step 1: Read two numbers num1, num2 and operator char op.",
        "Step 2: switch (op) -> cases for '+', '-', '*', '/'.",
        "Step 3: Guard division by zero in '/' case.",
        "Step 4: default case for invalid operator."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    double a = 20.0, b = 4.0;\n    char op = '/';\n    switch (op) {\n        case '+': printf(\"Result = %.2f\\n\", a + b); break;\n        case '-': printf(\"Result = %.2f\\n\", a - b); break;\n        case '*': printf(\"Result = %.2f\\n\", a * b); break;\n        case '/': \n            if (b != 0) printf(\"Result = %.2f\\n\", a / b);\n            else printf(\"Error: Division by zero!\\n\");\n            break;\n        default: printf(\"Invalid operator\\n\"); break;\n    }\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_21",
      "num": 21,
      "title": "Convert number 1-7 to Day of Week using switch",
      "difficulty": 1,
      "estTime": "5 min",
      "focus": "Basic switch case",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_3",
      "topicTitle": "3. Switch Statement",
      "curriculumPath": "Ch 3 \u2794 switch Statement",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 3: switch Statement > Problem #21",
      "concept": "Discrete integer constant mapping with break statements",
      "sampleInput": "day = 5",
      "sampleOutput": "Day 5 is Thursday",
      "algorithmSteps": [
        "Step 1: Read day integer (1-7).",
        "Step 2: switch (day) with cases 1 to 7 mapping to Sunday..Saturday.",
        "Step 3: Print name and break."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int day = 5;\n    switch (day) {\n        case 1: printf(\"Sunday\\n\"); break;\n        case 2: printf(\"Monday\\n\"); break;\n        case 3: printf(\"Tuesday\\n\"); break;\n        case 4: printf(\"Wednesday\\n\"); break;\n        case 5: printf(\"Thursday\\n\"); break;\n        case 6: printf(\"Friday\\n\"); break;\n        case 7: printf(\"Saturday\\n\"); break;\n        default: printf(\"Invalid day (1-7 only)\\n\"); break;\n    }\n    return 0;\n}",
      "difficultyClass": "diff-very-basic",
      "difficultyLabel": "Very Basic"
    },
    {
      "id": "p1_22",
      "num": 22,
      "title": "Find number of days in month using switch fall-through",
      "difficulty": 2,
      "estTime": "8 min",
      "focus": "Intentional switch fall-through",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_3",
      "topicTitle": "3. Switch Statement",
      "curriculumPath": "Ch 3 \u2794 switch Statement",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 3: switch Statement > Problem #22",
      "concept": "Grouping multiple cases without break to share common code",
      "sampleInput": "month = 4 (April)",
      "sampleOutput": "30 days",
      "algorithmSteps": [
        "Step 1: Read month number (1-12).",
        "Step 2: Group 31-day months (1,3,5,7,8,10,12) together.",
        "Step 3: Group 30-day months (4,6,9,11) together.",
        "Step 4: Case 2: 28 or 29 days."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int month = 4;\n    switch (month) {\n        case 1: case 3: case 5: case 7: case 8: case 10: case 12:\n            printf(\"31 days\\n\"); break;\n        case 4: case 6: case 9: case 11:\n            printf(\"30 days\\n\"); break;\n        case 2:\n            printf(\"28 or 29 days (February)\\n\"); break;\n        default:\n            printf(\"Invalid month!\\n\"); break;\n    }\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_23",
      "num": 23,
      "title": "Print numbers from 1 to N using while loop",
      "difficulty": 1,
      "estTime": "4 min",
      "focus": "Basic while counter",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_4",
      "topicTitle": "4. while Loop",
      "curriculumPath": "Ch 3 \u2794 while Loop",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 4: while Loop > Problem #23",
      "concept": "Entry-controlled loop initialization, condition, and increment",
      "sampleInput": "N = 5",
      "sampleOutput": "1 2 3 4 5",
      "algorithmSteps": [
        "Step 1: Initialize counter i = 1.",
        "Step 2: While (i <= N), print i and increment i++.",
        "Step 3: Exit loop when i exceeds N."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int n = 5, i = 1;\n    while (i <= n) {\n        printf(\"%d \", i);\n        i++;\n    }\n    printf(\"\\n\");\n    return 0;\n}",
      "difficultyClass": "diff-very-basic",
      "difficultyLabel": "Very Basic"
    },
    {
      "id": "p1_24",
      "num": 24,
      "title": "Calculate sum of first N natural numbers using while loop",
      "difficulty": 1,
      "estTime": "5 min",
      "focus": "Loop accumulator",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_4",
      "topicTitle": "4. while Loop",
      "curriculumPath": "Ch 3 \u2794 while Loop",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 4: while Loop > Problem #24",
      "concept": "Accumulator variable initialization (sum = 0) and additive update",
      "sampleInput": "N = 10",
      "sampleOutput": "Sum = 55",
      "algorithmSteps": [
        "Step 1: Initialize sum = 0, i = 1.",
        "Step 2: While (i <= N): sum += i; i++.",
        "Step 3: Print sum after loop completes."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int n = 10, i = 1, sum = 0;\n    while (i <= n) {\n        sum += i;\n        i++;\n    }\n    printf(\"Sum of first %d numbers = %d\\n\", n, sum);\n    return 0;\n}",
      "difficultyClass": "diff-very-basic",
      "difficultyLabel": "Very Basic"
    },
    {
      "id": "p1_25",
      "num": 25,
      "title": "Calculate factorial of N using while loop",
      "difficulty": 2,
      "estTime": "7 min",
      "focus": "Multiplicative accumulator",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_4",
      "topicTitle": "4. while Loop",
      "curriculumPath": "Ch 3 \u2794 while Loop",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 4: while Loop > Problem #25",
      "concept": "Multiplicative accumulator initialization (fact = 1, not 0!)",
      "sampleInput": "N = 5",
      "sampleOutput": "5! = 120",
      "algorithmSteps": [
        "Step 1: Initialize unsigned long long fact = 1, i = 1.",
        "Step 2: While (i <= N): fact *= i; i++.",
        "Step 3: Print fact."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int n = 5, i = 1;\n    long long fact = 1;\n    while (i <= n) {\n        fact *= i;\n        i++;\n    }\n    printf(\"%d! = %lld\\n\", n, fact);\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_26",
      "num": 26,
      "title": "Generate multiplication table of N using for loop",
      "difficulty": 1,
      "estTime": "5 min",
      "focus": "Standard for loop",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_5",
      "topicTitle": "5. do-while Loop and for Loop",
      "curriculumPath": "Ch 3 \u2794 do-while & for Loops",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 5: for Loop > Problem #26",
      "concept": "Compact header iteration (for (init; cond; incr))",
      "sampleInput": "N = 7",
      "sampleOutput": "7 x 1 = 7 ... 7 x 10 = 70",
      "algorithmSteps": [
        "Step 1: Read N.",
        "Step 2: for (i = 1; i <= 10; i++): print N * i.",
        "Step 3: Finish."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int n = 7;\n    for (int i = 1; i <= 10; i++) {\n        printf(\"%d x %2d = %2d\\n\", n, i, n * i);\n    }\n    return 0;\n}",
      "difficultyClass": "diff-very-basic",
      "difficultyLabel": "Very Basic"
    },
    {
      "id": "p1_27",
      "num": 27,
      "title": "Reverse an integer using while loop",
      "difficulty": 2,
      "estTime": "10 min",
      "focus": "Arithmetic reversal % 10",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_4",
      "topicTitle": "4. while Loop",
      "curriculumPath": "Ch 3 \u2794 while Loop",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 4: while Loop > Problem #27",
      "concept": "rev = rev * 10 + (n % 10); n /= 10 algorithm",
      "sampleInput": "n = 12345",
      "sampleOutput": "Reversed = 54321",
      "algorithmSteps": [
        "Step 1: Initialize rev = 0.",
        "Step 2: While (n != 0): rev = rev * 10 + (n % 10); n /= 10.",
        "Step 3: Print rev."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int n = 12345, original = n, rev = 0;\n    while (n != 0) {\n        rev = rev * 10 + (n % 10);\n        n /= 10;\n    }\n    printf(\"Original: %d -> Reversed: %d\\n\", original, rev);\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_28",
      "num": 28,
      "title": "Check whether a number is a Palindrome",
      "difficulty": 2,
      "estTime": "10 min",
      "focus": "Reverse and compare",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_4",
      "topicTitle": "4. while Loop",
      "curriculumPath": "Ch 3 \u2794 while Loop",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 4: while Loop > Problem #28",
      "concept": "Preserve original number in backup variable before destructive loop",
      "sampleInput": "n = 1221",
      "sampleOutput": "1221 is a PALINDROME",
      "algorithmSteps": [
        "Step 1: Save temp = n.",
        "Step 2: Reverse n into rev using while loop.",
        "Step 3: If (temp == rev), print 'PALINDROME'; else 'NOT PALINDROME'."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int n = 1221, temp = n, rev = 0;\n    while (n > 0) {\n        rev = rev * 10 + (n % 10);\n        n /= 10;\n    }\n    if (temp == rev) {\n        printf(\"%d is a PALINDROME!\\n\", temp);\n    } else {\n        printf(\"%d is NOT a palindrome\\n\", temp);\n    }\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_29",
      "num": 29,
      "title": "Check whether a number is an Armstrong Number",
      "difficulty": 3,
      "estTime": "12 min",
      "focus": "Digit cubes sum",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_4",
      "topicTitle": "4. while Loop",
      "curriculumPath": "Ch 3 \u2794 while Loop",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 4: while Loop > Problem #29",
      "concept": "Sum of cubes of individual digits == original number (153 = 1^3 + 5^3 + 3^3)",
      "sampleInput": "n = 153",
      "sampleOutput": "153 is an ARMSTRONG NUMBER",
      "algorithmSteps": [
        "Step 1: Store temp = n, sum = 0.",
        "Step 2: While (n > 0): rem = n % 10; sum += rem*rem*rem; n /= 10.",
        "Step 3: If (sum == temp), Armstrong confirmed."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int n = 153, temp = n, sum = 0;\n    while (n > 0) {\n        int d = n % 10;\n        sum += d * d * d;\n        n /= 10;\n    }\n    if (sum == temp) {\n        printf(\"%d is an ARMSTRONG NUMBER! (1\u00b3+5\u00b3+3\u00b3=%d)\\n\", temp, sum);\n    } else {\n        printf(\"%d is not an Armstrong number\\n\", temp);\n    }\n    return 0;\n}",
      "difficultyClass": "diff-exam",
      "difficultyLabel": "Exam Level"
    },
    {
      "id": "p1_30",
      "num": 30,
      "title": "Check whether a number is a Prime Number",
      "difficulty": 2,
      "estTime": "10 min",
      "focus": "Trial division & break",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_5",
      "topicTitle": "5. do-while Loop and for Loop",
      "curriculumPath": "Ch 3 \u2794 do-while & for Loops",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 5: for Loop > Problem #30",
      "concept": "Trial division up to sqrt(n) or n/2 with flag variable and break",
      "sampleInput": "n = 29",
      "sampleOutput": "29 is a PRIME NUMBER",
      "algorithmSteps": [
        "Step 1: If n <= 1, not prime.",
        "Step 2: Set isPrime = 1.",
        "Step 3: for (i = 2; i * i <= n; i++): if (n % i == 0) { isPrime = 0; break; }",
        "Step 4: If isPrime == 1, print 'PRIME'."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int n = 29, isPrime = 1;\n    if (n <= 1) isPrime = 0;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) {\n            isPrime = 0;\n            break;\n        }\n    }\n    if (isPrime) printf(\"%d is PRIME\\n\", n);\n    else printf(\"%d is NOT prime\\n\", n);\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_31",
      "num": 31,
      "title": "Find all prime numbers between 1 and 100",
      "difficulty": 3,
      "estTime": "15 min",
      "focus": "Nested loops prime sieve",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_5",
      "topicTitle": "5. do-while Loop and for Loop",
      "curriculumPath": "Ch 3 \u2794 do-while & for Loops",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 5: for Loop > Problem #31",
      "concept": "Outer loop generates candidates; inner loop tests prime divisibility",
      "sampleInput": "Range: 1 to 50",
      "sampleOutput": "2 3 5 7 11 13 17 19 23 29 31 37 41 43 47",
      "algorithmSteps": [
        "Step 1: Outer loop for num = 2 to 100.",
        "Step 2: Reset isPrime = 1 for each num.",
        "Step 3: Inner loop tests i = 2 to num/2.",
        "Step 4: If prime, print num."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    printf(\"Primes between 1 and 50:\\n\");\n    for (int num = 2; num <= 50; num++) {\n        int isPrime = 1;\n        for (int i = 2; i * i <= num; i++) {\n            if (num % i == 0) {\n                isPrime = 0;\n                break;\n            }\n        }\n        if (isPrime) printf(\"%d \", num);\n    }\n    printf(\"\\n\");\n    return 0;\n}",
      "difficultyClass": "diff-exam",
      "difficultyLabel": "Exam Level"
    },
    {
      "id": "p1_32",
      "num": 32,
      "title": "Generate first N terms of Fibonacci Series",
      "difficulty": 2,
      "estTime": "10 min",
      "focus": "Iterative state variables",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_5",
      "topicTitle": "5. do-while Loop and for Loop",
      "curriculumPath": "Ch 3 \u2794 do-while & for Loops",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 5: for Loop > Problem #32",
      "concept": "Dynamic recurrence sliding window (next = t1 + t2; t1 = t2; t2 = next)",
      "sampleInput": "N = 8",
      "sampleOutput": "0, 1, 1, 2, 3, 5, 8, 13",
      "algorithmSteps": [
        "Step 1: Initialize t1 = 0, t2 = 1.",
        "Step 2: Print t1 and t2.",
        "Step 3: for (i = 3; i <= N; i++): next = t1 + t2; print next; t1 = t2; t2 = next."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int n = 8, t1 = 0, t2 = 1, next;\n    printf(\"Fibonacci (%d terms): %d, %d\", n, t1, t2);\n    for (int i = 3; i <= n; i++) {\n        next = t1 + t2;\n        printf(\", %d\", next);\n        t1 = t2;\n        t2 = next;\n    }\n    printf(\"\\n\");\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_33",
      "num": 33,
      "title": "Find GCD (HCF) of two numbers using Euclidean algorithm",
      "difficulty": 2,
      "estTime": "10 min",
      "focus": "Euclidean modulo loop",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_4",
      "topicTitle": "4. while Loop",
      "curriculumPath": "Ch 3 \u2794 while Loop",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 4: while Loop > Problem #33",
      "concept": "Euclidean division remainder cycle (while b != 0: rem = a % b; a = b; b = rem)",
      "sampleInput": "a = 48, b = 18",
      "sampleOutput": "GCD = 6",
      "algorithmSteps": [
        "Step 1: Read two positive integers a and b.",
        "Step 2: While (b != 0): rem = a % b; a = b; b = rem.",
        "Step 3: When b == 0, GCD is a."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int a = 48, b = 18, origA = a, origB = b;\n    while (b != 0) {\n        int rem = a % b;\n        a = b;\n        b = rem;\n    }\n    printf(\"GCD of %d and %d is %d\\n\", origA, origB, a);\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_34",
      "num": 34,
      "title": "Find LCM of two numbers using GCD formula",
      "difficulty": 2,
      "estTime": "8 min",
      "focus": "Formula (a * b) / GCD",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_4",
      "topicTitle": "4. while Loop",
      "curriculumPath": "Ch 3 \u2794 while Loop",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 4: while Loop > Problem #34",
      "concept": "Relationship identity: LCM(a, b) = (a * b) / GCD(a, b)",
      "sampleInput": "a = 12, b = 18",
      "sampleOutput": "LCM = 36",
      "algorithmSteps": [
        "Step 1: Compute GCD of a and b using Euclidean loop.",
        "Step 2: Compute LCM = (a * b) / GCD.",
        "Step 3: Print LCM."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int a = 12, b = 18;\n    int x = a, y = b;\n    while (y != 0) {\n        int rem = x % y;\n        x = y;\n        y = rem;\n    }\n    int gcd = x;\n    int lcm = (a * b) / gcd;\n    printf(\"LCM of %d and %d is %d\\n\", a, b, lcm);\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_35",
      "num": 35,
      "title": "Print right-angled star triangle pattern",
      "difficulty": 1,
      "estTime": "6 min",
      "focus": "Nested for loops",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_5",
      "topicTitle": "5. do-while Loop and for Loop",
      "curriculumPath": "Ch 3 \u2794 do-while & for Loops",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 5: for Loop > Problem #35",
      "concept": "Outer loop controls rows; inner loop runs 1 to current row count",
      "sampleInput": "rows = 4",
      "sampleOutput": "*\n**\n***\n****",
      "algorithmSteps": [
        "Step 1: Outer loop i = 1 to rows.",
        "Step 2: Inner loop j = 1 to i: print '*'.",
        "Step 3: Print newline '\\n' after inner loop."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int rows = 4;\n    for (int i = 1; i <= rows; i++) {\n        for (int j = 1; j <= i; j++) {\n            printf(\"*\");\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      "difficultyClass": "diff-very-basic",
      "difficultyLabel": "Very Basic"
    },
    {
      "id": "p1_36",
      "num": 36,
      "title": "Print inverted right-angled star triangle pattern",
      "difficulty": 2,
      "estTime": "7 min",
      "focus": "Decreasing inner loop",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_5",
      "topicTitle": "5. do-while Loop and for Loop",
      "curriculumPath": "Ch 3 \u2794 do-while & for Loops",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 5: for Loop > Problem #36",
      "concept": "Decreasing loop bound or inner loop running from rows down to i",
      "sampleInput": "rows = 4",
      "sampleOutput": "****\n***\n**\n*",
      "algorithmSteps": [
        "Step 1: Outer loop i = rows down to 1.",
        "Step 2: Inner loop j = 1 to i: print '*'.",
        "Step 3: Print newline."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int rows = 4;\n    for (int i = rows; i >= 1; i--) {\n        for (int j = 1; j <= i; j++) {\n            printf(\"*\");\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_37",
      "num": 37,
      "title": "Print symmetrical pyramid star pattern",
      "difficulty": 3,
      "estTime": "12 min",
      "focus": "Space offset + stars",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_5",
      "topicTitle": "5. do-while Loop and for Loop",
      "curriculumPath": "Ch 3 \u2794 do-while & for Loops",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 5: for Loop > Problem #37",
      "concept": "Dual inner loops: leading spaces (rows-i) followed by odd stars (2*i - 1)",
      "sampleInput": "rows = 4",
      "sampleOutput": "   *\n  ***\n *****\n*******",
      "algorithmSteps": [
        "Step 1: Outer loop i = 1 to rows.",
        "Step 2: First inner loop prints (rows - i) spaces.",
        "Step 3: Second inner loop prints (2*i - 1) stars.",
        "Step 4: Print newline."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int rows = 4;\n    for (int i = 1; i <= rows; i++) {\n        for (int s = 1; s <= rows - i; s++) printf(\" \");\n        for (int k = 1; k <= 2 * i - 1; k++) printf(\"*\");\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      "difficultyClass": "diff-exam",
      "difficultyLabel": "Exam Level"
    },
    {
      "id": "p1_38",
      "num": 38,
      "title": "Print Floyd's triangle of consecutive numbers",
      "difficulty": 2,
      "estTime": "10 min",
      "focus": "Global counter in nested loop",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_5",
      "topicTitle": "5. do-while Loop and for Loop",
      "curriculumPath": "Ch 3 \u2794 do-while & for Loops",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 5: for Loop > Problem #38",
      "concept": "Persistent counter variable incremented across inner iterations",
      "sampleInput": "rows = 4",
      "sampleOutput": "1\n2 3\n4 5 6\n7 8 9 10",
      "algorithmSteps": [
        "Step 1: Initialize val = 1.",
        "Step 2: Outer loop i = 1 to rows.",
        "Step 3: Inner loop j = 1 to i: print val++, formatted.",
        "Step 4: Print newline."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int rows = 4, val = 1;\n    for (int i = 1; i <= rows; i++) {\n        for (int j = 1; j <= i; j++) {\n            printf(\"%2d \", val++);\n        }\n        printf(\"\\n\");\n    }\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_39",
      "num": 39,
      "title": "Calculate sum of arithmetic series 1 + 2 + 3 + ... + N",
      "difficulty": 1,
      "estTime": "5 min",
      "focus": "Loop accumulator",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_4",
      "topicTitle": "4. while Loop",
      "curriculumPath": "Ch 3 \u2794 while Loop",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 4: while Loop > Problem #39",
      "concept": "Comparing iterative loop accumulation with closed formula N*(N+1)/2",
      "sampleInput": "N = 100",
      "sampleOutput": "Loop Sum = 5050 | Formula = 5050",
      "algorithmSteps": [
        "Step 1: Read N.",
        "Step 2: Accumulate sum using loop.",
        "Step 3: Calculate formula check = N*(N+1)/2.",
        "Step 4: Verify equality."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int n = 100, sum = 0;\n    for (int i = 1; i <= n; i++) sum += i;\n    int formula = (n * (n + 1)) / 2;\n    printf(\"Sum: %d | Formula: %d\\n\", sum, formula);\n    return 0;\n}",
      "difficultyClass": "diff-very-basic",
      "difficultyLabel": "Very Basic"
    },
    {
      "id": "p1_40",
      "num": 40,
      "title": "Calculate sum of geometric series 1 + x + x^2 + ... + x^n",
      "difficulty": 3,
      "estTime": "12 min",
      "focus": "pow() and loop sum",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_5",
      "topicTitle": "5. do-while Loop and for Loop",
      "curriculumPath": "Ch 3 \u2794 do-while & for Loops",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 5: for Loop > Problem #40",
      "concept": "Iterative term multiplication (term *= x) avoiding expensive repeated pow()",
      "sampleInput": "x = 2, n = 4",
      "sampleOutput": "1 + 2 + 4 + 8 + 16 = 31",
      "algorithmSteps": [
        "Step 1: Initialize sum = 1, currentTerm = 1.",
        "Step 2: for (i = 1; i <= n; i++): currentTerm *= x; sum += currentTerm.",
        "Step 3: Print sum."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int x = 2, n = 4;\n    long long sum = 1, term = 1;\n    for (int i = 1; i <= n; i++) {\n        term *= x;\n        sum += term;\n    }\n    printf(\"Sum of geometric series (x=%d, n=%d) = %lld\\n\", x, n, sum);\n    return 0;\n}",
      "difficultyClass": "diff-exam",
      "difficultyLabel": "Exam Level"
    },
    {
      "id": "p1_41",
      "num": 41,
      "title": "Count uppercase, lowercase, digits, and special characters",
      "difficulty": 2,
      "estTime": "10 min",
      "focus": "getchar() & ctype",
      "chapterId": 2,
      "chapterName": "Chapter 2: Operators, Input & Output",
      "topicId": "ch2_12",
      "topicTitle": "12. Character Input and Output (getchar, putchar, gets, puts)",
      "curriculumPath": "Ch 2 \u2794 Character I/O",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 2: Operators > Topic 12: Character I/O > Problem #41",
      "concept": "Character range testing (ASCII codes or ctype macros: isupper, islower, isdigit)",
      "sampleInput": "\"Exam2026!\"",
      "sampleOutput": "Upper: 1, Lower: 3, Digits: 4, Special: 1",
      "algorithmSteps": [
        "Step 1: Read characters until EOF or newline using getchar().",
        "Step 2: Update counters for uppercase, lowercase, digits, and others.",
        "Step 3: Print stats table."
      ],
      "solutionCode": "#include <stdio.h>\n#include <ctype.h>\n\nint main(void) {\n    char str[] = \"Exam2026!\";\n    int upper = 0, lower = 0, digits = 0, special = 0;\n    for (int i = 0; str[i] != '\\0'; i++) {\n        if (isupper(str[i])) upper++;\n        else if (islower(str[i])) lower++;\n        else if (isdigit(str[i])) digits++;\n        else special++;\n    }\n    printf(\"String: %s\\nUpper: %d, Lower: %d, Digits: %d, Special: %d\\n\", str, upper, lower, digits, special);\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_42",
      "num": 42,
      "title": "Demonstrate safe character input fixing newline buffer trap",
      "difficulty": 2,
      "estTime": "8 min",
      "focus": "scanf(' %c') fix",
      "chapterId": 2,
      "chapterName": "Chapter 2: Operators, Input & Output",
      "topicId": "ch2_12",
      "topicTitle": "12. Character Input and Output (getchar, putchar, gets, puts)",
      "curriculumPath": "Ch 2 \u2794 Character I/O",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 2: Operators > Topic 12: Character I/O > Problem #42",
      "concept": "The space before %c in scanf(' %c', &ch) discards orphaned whitespace and newlines",
      "sampleInput": "42 then Enter then 'Y'",
      "sampleOutput": "Integer: 42, Char: 'Y' (successfully captured)",
      "algorithmSteps": [
        "Step 1: Read integer with scanf(\"%d\", &n).",
        "Step 2: Read character with scanf(\" %c\", &ch) using leading space.",
        "Step 3: Verify ch receives the intended letter rather than '\\n'."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int num = 42;\n    char choice = 'Y';\n    printf(\"Simulated buffer fix:\\n\");\n    printf(\"scanf(\\\"%%d\\\", &num);\\n\");\n    printf(\"scanf(\\\" %%c\\\", &choice); // Leading space eats trailing '\\\\n'\\n\");\n    printf(\"Success: num=%d, choice='%c'\\n\", num, choice);\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_43",
      "num": 43,
      "title": "Read formatted string with spaces safely using fgets()",
      "difficulty": 2,
      "estTime": "8 min",
      "focus": "fgets vs gets safe buffer",
      "chapterId": 2,
      "chapterName": "Chapter 2: Operators, Input & Output",
      "topicId": "ch2_12",
      "topicTitle": "12. Character Input and Output (getchar, putchar, gets, puts)",
      "curriculumPath": "Ch 2 \u2794 Character I/O",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 2: Operators > Topic 12: Character I/O > Problem #43",
      "concept": "Avoiding gets() buffer overflow by using fgets(buffer, sizeof(buffer), stdin)",
      "sampleInput": "\"Computer Science Midterm\"",
      "sampleOutput": "Read: Computer Science Midterm",
      "algorithmSteps": [
        "Step 1: Declare buffer char str[100].",
        "Step 2: Read line with fgets(str, sizeof(str), stdin).",
        "Step 3: Strip trailing '\\n' if present.",
        "Step 4: Display with puts(str)."
      ],
      "solutionCode": "#include <stdio.h>\n#include <string.h>\n\nint main(void) {\n    char buffer[50] = \"Computer Science Midterm\\n\";\n    // Remove trailing newline if present\n    buffer[strcspn(buffer, \"\\n\")] = '\\0';\n    printf(\"Safely read buffer: '%s' (Length: %zu)\\n\", buffer, strlen(buffer));\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_44",
      "num": 44,
      "title": "Print formatted invoice table with width alignment flags",
      "difficulty": 2,
      "estTime": "10 min",
      "focus": "%-15s, %5d, %8.2f",
      "chapterId": 2,
      "chapterName": "Chapter 2: Operators, Input & Output",
      "topicId": "ch2_13",
      "topicTitle": "13. Formatted Input and Output",
      "curriculumPath": "Ch 2 \u2794 Formatted I/O",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 2: Operators > Topic 13: Formatted I/O > Problem #44",
      "concept": "Left alignment (%-Ns), minimum field widths, and precision specifiers",
      "sampleInput": "Items: Pen (qty 5, $1.50), Notebook (qty 2, $4.25)",
      "sampleOutput": "Tabular columnar output with border headers",
      "algorithmSteps": [
        "Step 1: Print table header with printf(\"%-15s %5s %8s\\n\").",
        "Step 2: Print divider line.",
        "Step 3: Print data rows with matching width format specifiers."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    printf(\"%-15s %5s %8s\\n\", \"Item\", \"Qty\", \"Price\");\n    printf(\"-------------------------------\\n\");\n    printf(\"%-15s %5d %8.2f\\n\", \"Gel Pen\", 5, 1.50);\n    printf(\"%-15s %5d %8.2f\\n\", \"Spiral Book\", 2, 4.25);\n    printf(\"%-15s %5d %8.2f\\n\", \"USB Drive\", 1, 12.99);\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_45",
      "num": 45,
      "title": "Evaluate complex operator precedence expression on paper",
      "difficulty": 2,
      "estTime": "10 min",
      "focus": "Precedence & associativity",
      "chapterId": 2,
      "chapterName": "Chapter 2: Operators, Input & Output",
      "topicId": "ch2_7",
      "topicTitle": "7. Operator Precedence and Associativity",
      "curriculumPath": "Ch 2 \u2794 Operator Precedence",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 2: Operators > Topic 7: Operator Precedence > Problem #45",
      "concept": "Step-by-step reduction using standard C operator priority table",
      "sampleInput": "x = 5 + 3 * 2 > 10 && 4 != 2",
      "sampleOutput": "Result = 1 (True)",
      "algorithmSteps": [
        "Step 1: High precedence: 3 * 2 = 6.",
        "Step 2: Addition: 5 + 6 = 11.",
        "Step 3: Relational: 11 > 10 = 1.",
        "Step 4: Equality: 4 != 2 = 1.",
        "Step 5: Logical AND: 1 && 1 = 1."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int result = 5 + 3 * 2 > 10 && 4 != 2;\n    printf(\"Expression: 5 + 3 * 2 > 10 && 4 != 2\\n\");\n    printf(\"Evaluation result: %d (1 = True)\\n\", result);\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_46",
      "num": 46,
      "title": "Demonstrate explicit type casting preventing integer division",
      "difficulty": 1,
      "estTime": "5 min",
      "focus": "(float) type cast",
      "chapterId": 2,
      "chapterName": "Chapter 2: Operators, Input & Output",
      "topicId": "ch2_9",
      "topicTitle": "9. Type Conversions in Expressions",
      "curriculumPath": "Ch 2 \u2794 Type Conversions",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 2: Operators > Topic 9: Type Conversions > Problem #46",
      "concept": "Unary cast operator (float)sum / count forces floating point promotion",
      "sampleInput": "sum = 17, count = 5",
      "sampleOutput": "Without cast: 3.00\nWith cast   : 3.40",
      "algorithmSteps": [
        "Step 1: Declare int sum = 17, count = 5.",
        "Step 2: Observe sum / count results in integer 3.",
        "Step 3: Cast (float)sum / count to obtain 3.4."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int sum = 17, count = 5;\n    float wrong = sum / count;\n    float correct = (float)sum / count;\n    printf(\"Without cast : %.2f (truncated!)\\n\", wrong);\n    printf(\"With (float) : %.2f (exact!)\\n\", correct);\n    return 0;\n}",
      "difficultyClass": "diff-very-basic",
      "difficultyLabel": "Very Basic"
    },
    {
      "id": "p1_47",
      "num": 47,
      "title": "Find largest of three numbers using nested conditional ?: operator",
      "difficulty": 2,
      "estTime": "8 min",
      "focus": "Nested ternary logic",
      "chapterId": 2,
      "chapterName": "Chapter 2: Operators, Input & Output",
      "topicId": "ch2_6",
      "topicTitle": "6. Conditional Operator",
      "curriculumPath": "Ch 2 \u2794 Conditional Operator",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 2: Operators > Topic 6: Conditional Operator > Problem #47",
      "concept": "Inline decision: max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c)",
      "sampleInput": "a = 34, b = 89, c = 52",
      "sampleOutput": "Max = 89",
      "algorithmSteps": [
        "Step 1: Read a, b, c.",
        "Step 2: Evaluate ternary expression.",
        "Step 3: Print result."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int a = 34, b = 89, c = 52;\n    int max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);\n    printf(\"Largest of (%d, %d, %d) using ?: is %d\\n\", a, b, c, max);\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_48",
      "num": 48,
      "title": "Interactive menu repeat using exit-controlled do-while loop",
      "difficulty": 2,
      "estTime": "8 min",
      "focus": "do-while menu driver",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_5",
      "topicTitle": "5. do-while Loop and for Loop",
      "curriculumPath": "Ch 3 \u2794 do-while & for Loops",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 5: do-while Loop > Problem #48",
      "concept": "Guaranteed minimum single execution for user interaction menus",
      "sampleInput": "Option 1 chosen, then Option 3 (Exit)",
      "sampleOutput": "Menu printed, option executed, loop terminates on exit choice",
      "algorithmSteps": [
        "Step 1: Inside do block: print menu options and read choice.",
        "Step 2: Execute choice using switch statement.",
        "Step 3: while (choice != 3) condition keeps menu looping."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int choice = 3; // Simulated exit\n    do {\n        printf(\"--- MENU ---\\n1. Greet\\n2. Current Year\\n3. Exit\\n\");\n        printf(\"Executing option %d: Goodbye!\\n\", choice);\n    } while (choice != 3);\n    return 0;\n}",
      "difficultyClass": "diff-basic",
      "difficultyLabel": "Basic"
    },
    {
      "id": "p1_49",
      "num": 49,
      "title": "Check whether a character is alphabet using conditional operator",
      "difficulty": 1,
      "estTime": "5 min",
      "focus": "Ternary isalpha check",
      "chapterId": 2,
      "chapterName": "Chapter 2: Operators, Input & Output",
      "topicId": "ch2_6",
      "topicTitle": "6. Conditional Operator",
      "curriculumPath": "Ch 2 \u2794 Conditional Operator",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 2: Operators > Topic 6: Conditional Operator > Problem #49",
      "concept": "Ternary operator for quick boolean message selection",
      "sampleInput": "ch = 'K'",
      "sampleOutput": "'K' is an ALPHABET",
      "algorithmSteps": [
        "Step 1: Read char ch.",
        "Step 2: isAlpha = ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) ? 1 : 0.",
        "Step 3: Print result message."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    char ch = 'K';\n    int isAlpha = ((ch >= 'a' && ch <= 'z') || (ch >= 'A' && ch <= 'Z')) ? 1 : 0;\n    printf(\"'%c' %s\\n\", ch, isAlpha ? \"is an ALPHABET\" : \"is NOT an alphabet\");\n    return 0;\n}",
      "difficultyClass": "diff-very-basic",
      "difficultyLabel": "Very Basic"
    },
    {
      "id": "p1_50",
      "num": 50,
      "title": "Complete midterm exam mock: Student grading & rank program",
      "difficulty": 3,
      "estTime": "20 min",
      "focus": "Comprehensive logic pipeline",
      "chapterId": 3,
      "chapterName": "Chapter 3: Control Statements",
      "topicId": "ch3_2",
      "topicTitle": "2. Nested if and Dangling-else Problem",
      "curriculumPath": "Ch 3 \u2794 Nested if & Dangling else",
      "pathBreadcrumb": "Midterm Syllabus > Chapter 3: Control Statements > Topic 2: Nested if > Problem #50",
      "concept": "End-to-end integration: input validation, weighted average, grading ladder & honors",
      "sampleInput": "Scores: 85, 92, 78",
      "sampleOutput": "Average = 85.00 | Grade: A | Honors: Dean's List",
      "algorithmSteps": [
        "Step 1: Validate three subject scores (0 <= mark <= 100).",
        "Step 2: Calculate total and float average = total / 3.0.",
        "Step 3: Assign grade: >=90 (A+), >=80 (A), >=70 (B), >=60 (C), <60 (F).",
        "Step 4: Check Dean's list criteria (Average >= 85 and no subject < 75).",
        "Step 5: Print student grade sheet."
      ],
      "solutionCode": "#include <stdio.h>\n\nint main(void) {\n    int m1 = 85, m2 = 92, m3 = 78;\n    int total = m1 + m2 + m3;\n    float avg = total / 3.0f;\n    char grade[3];\n    \n    if (avg >= 90) sprintf(grade, \"A+\");\n    else if (avg >= 80) sprintf(grade, \"A\");\n    else if (avg >= 70) sprintf(grade, \"B\");\n    else if (avg >= 60) sprintf(grade, \"C\");\n    else sprintf(grade, \"F\");\n    \n    printf(\"==============================\\n\");\n    printf(\"   MIDTERM GRADE REPORT\\n\");\n    printf(\"==============================\\n\");\n    printf(\"Marks    : %d, %d, %d\\n\", m1, m2, m3);\n    printf(\"Average  : %.2f%%\\n\", avg);\n    printf(\"Grade    : %s\\n\", grade);\n    if (avg >= 85 && m1 >= 75 && m2 >= 75 && m3 >= 75) {\n        printf(\"Honors   : DEAN'S LIST CANDIDATE!\\n\");\n    }\n    printf(\"==============================\\n\");\n    return 0;\n}",
      "difficultyClass": "diff-exam",
      "difficultyLabel": "Exam Level"
    }
  ],
  "mcqs": [
    {
      "id": 1,
      "chapterId": 1,
      "q": "Which computer architecture is characterized by storing both program instructions and data in the same shared physical memory?",
      "options": [
        "Harvard Architecture",
        "Von Neumann Architecture",
        "Turing Architecture",
        "RISC Architecture"
      ],
      "correct": 1,
      "explanation": "John von Neumann proposed the shared memory architecture in 1945, which forms the foundation of modern general-purpose computing."
    },
    {
      "id": 2,
      "chapterId": 1,
      "q": "Which of the following is an INVALID C identifier?",
      "options": [
        "_score_2026",
        "total_sum",
        "2nd_rank",
        "MaxVal"
      ],
      "correct": 2,
      "explanation": "C identifiers cannot begin with a numeric digit. '2nd_rank' begins with '2', making it syntactically invalid."
    },
    {
      "id": 3,
      "chapterId": 1,
      "q": "How many standard reserved keywords are defined in the ANSI C (C89/C90) standard?",
      "options": [
        "28",
        "32",
        "48",
        "64"
      ],
      "correct": 1,
      "explanation": "ANSI C defines exactly 32 reserved keywords (auto, break, case, char, const, continue, default, do, double, else, enum, extern, float, for, goto, if, int, long, register, return, short, signed, sizeof, static, struct, switch, typedef, union, unsigned, void, volatile, while)."
    },
    {
      "id": 4,
      "chapterId": 1,
      "q": "What will sizeof(char) ALWAYS evaluate to on any conforming C compiler?",
      "options": [
        "1 byte",
        "2 bytes",
        "4 bytes",
        "Implementation-dependent"
      ],
      "correct": 0,
      "explanation": "By definition in the C language standard, sizeof(char) is guaranteed to evaluate to exactly 1 byte."
    },
    {
      "id": 5,
      "chapterId": 1,
      "q": "How many bytes does the string literal \"Hello\" occupy in computer memory?",
      "options": [
        "5 bytes",
        "6 bytes",
        "4 bytes",
        "8 bytes"
      ],
      "correct": 1,
      "explanation": "A string literal in C includes all visible characters plus one terminating null byte '\\0'. 'H-e-l-l-o' (5) + '\\0' (1) = 6 bytes."
    },
    {
      "id": 6,
      "chapterId": 1,
      "q": "Which stage of the C compilation pipeline replaces #define macros and strips comments?",
      "options": [
        "Compiler",
        "Assembler",
        "Preprocessor",
        "Linker"
      ],
      "correct": 2,
      "explanation": "The Preprocessor handles all directives beginning with '#' (#include, #define) and removes comments before the compiler generates assembly code."
    },
    {
      "id": 7,
      "chapterId": 1,
      "q": "What does an uninitialized local automatic variable inside a function contain?",
      "options": [
        "0",
        "NULL",
        "Random garbage memory values",
        "Compiler error"
      ],
      "correct": 2,
      "explanation": "Automatic variables allocated on the stack are not zeroed out by default; they retain whatever random electrical bit values previously occupied that RAM location."
    },
    {
      "id": 8,
      "chapterId": 1,
      "q": "Which ANSI flowchart symbol represents a conditional decision (e.g. if or while)?",
      "options": [
        "Rectangle",
        "Oval",
        "Parallelogram",
        "Rhombus / Diamond"
      ],
      "correct": 3,
      "explanation": "A diamond (rhombus) represents a decision with two labeled exit paths (TRUE and FALSE)."
    },
    {
      "id": 9,
      "chapterId": 2,
      "q": "What is the evaluated result of integer division: 14 / 4 in C?",
      "options": [
        "3.5",
        "3",
        "4",
        "2"
      ],
      "correct": 1,
      "explanation": "When both operands are integers, C performs integer division and strictly truncates towards zero: 14 / 4 = 3."
    },
    {
      "id": 10,
      "chapterId": 2,
      "q": "Under C99 standard, what is the value of the modulus expression: -17 % 5?",
      "options": [
        "-2",
        "2",
        "3",
        "-3"
      ],
      "correct": 0,
      "explanation": "In C99, the sign of (a % b) strictly follows the sign of the dividend (left operand a): -17 % 5 = -2."
    },
    {
      "id": 11,
      "chapterId": 2,
      "q": "What is the value of 'b' after executing: int a = 5; int b = a++;?",
      "options": [
        "5",
        "6",
        "4",
        "Undefined"
      ],
      "correct": 0,
      "explanation": "In postfix increment (a++), the current value of a (5) is returned first to the assignment expression before a is incremented to 6."
    },
    {
      "id": 12,
      "chapterId": 2,
      "q": "Which of the following operators evaluates with RIGHT-TO-LEFT associativity?",
      "options": [
        "Addition (+)",
        "Multiplication (*)",
        "Assignment (=)",
        "Logical AND (&&)"
      ],
      "correct": 2,
      "explanation": "Assignment operators (=, +=, etc.), unary operators, and the conditional ternary operator (?:) associate Right-to-Left."
    },
    {
      "id": 13,
      "chapterId": 2,
      "q": "If int a = 0, b = 5;, what is the value of 'b' after evaluating: if (a && ++b)?",
      "options": [
        "5",
        "6",
        "0",
        "1"
      ],
      "correct": 0,
      "explanation": "Because of short-circuit evaluation in '&&', since the left operand 'a' is 0 (False), the right operand '++b' is skipped entirely."
    },
    {
      "id": 14,
      "chapterId": 2,
      "q": "What does sizeof(x++) do to the variable x?",
      "options": [
        "Increments x by 1",
        "Increments x by 2",
        "Does not increment x at all",
        "Causes compile error"
      ],
      "correct": 2,
      "explanation": "sizeof is a compile-time operator. Expressions inside sizeof are never executed at runtime; therefore, no side effects occur."
    },
    {
      "id": 15,
      "chapterId": 2,
      "q": "What is the required format specifier to read a 'double' variable using scanf()?",
      "options": [
        "%f",
        "%lf",
        "%d",
        "%s"
      ],
      "correct": 1,
      "explanation": "scanf strictly requires '%lf' (long float) for double variables to write 8 bytes. Using '%f' writes only 4 bytes, corrupting memory."
    },
    {
      "id": 16,
      "chapterId": 2,
      "q": "What happens if you omit the '&' operator when reading an integer: scanf(\"%d\", num);?",
      "options": [
        "Compiles and runs normally",
        "Segmentation Fault / Runtime Crash",
        "Stores 0 in num",
        "Converts num to float"
      ],
      "correct": 1,
      "explanation": "scanf expects a memory address. Passing the uninitialized garbage value of num causes scanf to write to an invalid memory location, triggering a crash."
    },
    {
      "id": 17,
      "chapterId": 2,
      "q": "How can you prevent scanf(\"%c\", &ch); from accidentally reading a leftover newline '\\n'?",
      "options": [
        "Use scanf(\"%1c\", &ch);",
        "Use scanf(\" %c\", &ch); with a leading space",
        "Use fflush(stdin);",
        "Declare ch as int"
      ],
      "correct": 1,
      "explanation": "A leading whitespace character in the scanf format string (e.g. \" %c\") directs scanf to skip any preceding whitespace, newlines, and tabs."
    },
    {
      "id": 18,
      "chapterId": 2,
      "q": "What is the value of 'x' after: int a = 5, b = 2; float x = a / b;?",
      "options": [
        "2.5",
        "2.0",
        "2",
        "3.0"
      ],
      "correct": 1,
      "explanation": "a / b is an integer division that evaluates to integer 2. Then 2 is converted to float and stored as 2.0."
    },
    {
      "id": 19,
      "chapterId": 2,
      "q": "What is the result of expression: int x = 5; x *= 3 + 2;?",
      "options": [
        "17",
        "25",
        "15",
        "10"
      ],
      "correct": 1,
      "explanation": "In compound assignment op=, the entire right-hand expression is evaluated first: x = x * (3 + 2) = 5 * 5 = 25."
    },
    {
      "id": 20,
      "chapterId": 2,
      "q": "What is the return value of printf(\"C\\n\");?",
      "options": [
        "0",
        "1",
        "2",
        "void"
      ],
      "correct": 2,
      "explanation": "printf returns the count of characters printed. 'C' (1) + '\\n' (1) = 2 characters."
    },
    {
      "id": 21,
      "chapterId": 3,
      "q": "In the absence of curly braces {}, to which 'if' does an 'else' keyword attach?",
      "options": [
        "The first if in the function",
        "The nearest preceding unmatched if",
        "The if with matching visual indentation",
        "Triggers syntax error"
      ],
      "correct": 1,
      "explanation": "The Dangling Else rule states that an else always binds to the closest preceding unmatched if at the same scoping level."
    },
    {
      "id": 22,
      "chapterId": 3,
      "q": "Which data type is STRICTLY FORBIDDEN as the expression inside a switch() statement?",
      "options": [
        "int",
        "char",
        "float",
        "short"
      ],
      "correct": 2,
      "explanation": "The switch expression and case values must strictly be integral types (int, char, enum). Floating-point values (float, double) cause a compile error."
    },
    {
      "id": 23,
      "chapterId": 3,
      "q": "What happens if all break statements are omitted from a switch block where case 1 matches?",
      "options": [
        "Only case 1 executes",
        "Program crashes",
        "Execution falls through and runs all subsequent cases sequentially",
        "Syntax error"
      ],
      "correct": 2,
      "explanation": "Without break statements, execution falls through from the matched case into all subsequent cases until the end of the switch block."
    },
    {
      "id": 24,
      "chapterId": 3,
      "q": "What is the guaranteed minimum number of times the body of a do-while loop executes?",
      "options": [
        "0 times",
        "1 time",
        "2 times",
        "Infinite times"
      ],
      "correct": 1,
      "explanation": "Because do-while is an exit-controlled (post-test) loop that checks its condition at the bottom, its body is guaranteed to execute at least once."
    },
    {
      "id": 25,
      "chapterId": 3,
      "q": "What does a single semicolon right after a while loop header (while (i <= 5);) do?",
      "options": [
        "Terminates the program",
        "Creates an empty loop body, often resulting in an infinite loop",
        "Executes body once",
        "Syntax error"
      ],
      "correct": 1,
      "explanation": "The semicolon serves as an empty null statement body. The loop iterates doing nothing; if i is not incremented inside, it creates an infinite loop."
    },
    {
      "id": 26,
      "chapterId": 3,
      "q": "What does the 'continue' statement do when encountered inside a loop body?",
      "options": [
        "Exits the program",
        "Terminates the loop immediately",
        "Skips the remaining statements in current iteration and jumps to next iteration",
        "Restarts loop from beginning"
      ],
      "correct": 2,
      "explanation": "'continue' skips the rest of the current iteration body and jumps directly to the loop update/condition test."
    },
    {
      "id": 27,
      "chapterId": 3,
      "q": "When is a 'for' loop preferred over a 'while' loop according to programming best practices?",
      "options": [
        "When condition depends on user input",
        "When number of iterations is known in advance",
        "When code must run at least once",
        "When using floating point numbers"
      ],
      "correct": 1,
      "explanation": "'for' loops are designed for definite (count-controlled) repetition where the initial value, terminating condition, and step update are known."
    },
    {
      "id": 28,
      "chapterId": 3,
      "q": "How many times will the loop: for (int i = 0; i < 5; i += 2) execute?",
      "options": [
        "2 times",
        "3 times",
        "4 times",
        "5 times"
      ],
      "correct": 1,
      "explanation": "i starts at 0 (pass 1), increments to 2 (pass 2), increments to 4 (pass 3). At 6, condition 6 < 5 is False. Total = 3 executions."
    },
    {
      "id": 29,
      "chapterId": 3,
      "q": "What will happen with the condition: if (18 <= age <= 60) for a person aged 85?",
      "options": [
        "Condition evaluates to False",
        "Condition evaluates to True",
        "Causes compile error",
        "Undefined behavior"
      ],
      "correct": 1,
      "explanation": "Relational operators associate left-to-right: (18 <= 85) evaluates to 1. Then (1 <= 60) evaluates to 1 (True)! Chained comparisons must use &&: (age >= 18 && age <= 60)."
    },
    {
      "id": 30,
      "chapterId": 3,
      "q": "What is the terminating requirement for a do-while statement that distinguishes it from while and for?",
      "options": [
        "Must contain return 0;",
        "Must end with a semicolon after the while condition: while(cond);",
        "Cannot use break",
        "Requires an else block"
      ],
      "correct": 1,
      "explanation": "Unlike while and for loops, the do-while loop strictly requires a terminating semicolon after its while condition: do { ... } while (condition);"
    }
  ],
  "outputPredictionLab": [
    {
      "id": "op1",
      "title": "Integer Division Truncation",
      "difficulty": "Basic",
      "level": 1,
      "code": "#include <stdio.h>\nint main(void) {\n    int a = 5, b = 2;\n    float c = a / b;\n    printf(\"%.2f\\n\", c);\n    return 0;\n}",
      "question": "What is printed to the console?",
      "answer": "2.00",
      "explanation": "In C, when both operands of '/' are integers (a and b), integer division is performed strictly truncating towards zero: 5 / 2 = 2. Only after division completes is 2 implicitly promoted to float (2.0f) and stored in c.",
      "trap": "Writing float c = a / b does NOT make the division floating-point! At least one operand must be cast: (float)a / b or 5.0f / 2."
    },
    {
      "id": "op2",
      "title": "Prefix vs Postfix Precedence in Expressions",
      "difficulty": "Intermediate",
      "level": 2,
      "code": "#include <stdio.h>\nint main(void) {\n    int a = 5, b = 5;\n    int x = ++a; \n    int y = b++; \n    printf(\"a=%d, x=%d, b=%d, y=%d\\n\", a, x, b, y);\n    return 0;\n}",
      "question": "What will be printed?",
      "answer": "a=6, x=6, b=6, y=5",
      "explanation": "In prefix ++a, a increments to 6 first and returns 6 to x. In postfix b++, b returns current value 5 to y, and increments to 6 afterwards.",
      "trap": "Confusing returned value with variable's subsequent in-memory value. Both a and b end up as 6 in RAM, but y received 5 while x received 6."
    },
    {
      "id": "op3",
      "title": "Logical Short-Circuit Evaluation",
      "difficulty": "Intermediate",
      "level": 2,
      "code": "#include <stdio.h>\nint main(void) {\n    int a = 0, b = 5;\n    if (a++ && ++b) {\n        printf(\"Branch 1: a=%d, b=%d\\n\", a, b);\n    } else {\n        printf(\"Branch 2: a=%d, b=%d\\n\", a, b);\n    }\n    return 0;\n}",
      "question": "What is the exact console output?",
      "answer": "Branch 2: a=1, b=5",
      "explanation": "In logical AND (&&), if the left operand evaluates to 0 (False), the entire condition is guaranteed False. a++ returns original value 0 (False). Short-circuit triggers immediately! The right operand (++b) is NEVER evaluated, so b remains 5. a increments to 1 after test.",
      "trap": "Assuming ++b always runs. Short-circuit skips ++b completely when left operand of && is False."
    },
    {
      "id": "op4",
      "title": "Assignment Operator in Conditional Header",
      "difficulty": "Exam",
      "level": 3,
      "code": "#include <stdio.h>\nint main(void) {\n    int x = 0;\n    if (x = 5) {\n        printf(\"True: x = %d\\n\", x);\n    } else {\n        printf(\"False: x = %d\\n\", x);\n    }\n    return 0;\n}",
      "question": "What will print?",
      "answer": "True: x = 5",
      "explanation": "A single '=' is assignment, not equality '=='. The expression (x = 5) stores 5 in x, and evaluates to 5. In C, ANY non-zero number is treated as TRUE. Thus, the if branch always runs!",
      "trap": "Accidental assignment in if conditions is the single most common bug in beginner C code. Use 'if (5 == x)' to catch typos at compile time."
    },
    {
      "id": "op5",
      "title": "Dangling Else Ambiguity Resolution",
      "difficulty": "Exam",
      "level": 3,
      "code": "#include <stdio.h>\nint main(void) {\n    int a = 1, b = 0;\n    if (a > 0)\n        if (b > 0)\n            printf(\"Apple\\n\");\n    else\n        printf(\"Banana\\n\");\n    return 0;\n}",
      "question": "What fruit is printed?",
      "answer": "Banana",
      "explanation": "Despite the deceiving indentation, C grammar dictates that an 'else' binds to the nearest preceding unmatched 'if' at the same nesting level, which is 'if (b > 0)'. Since a > 0 is True, control enters the inner if, where b > 0 is False, executing the else branch!",
      "trap": "Indentation in C has zero semantic meaning! The compiler ignores spacing. Always use explicit curly braces {}."
    },
    {
      "id": "op6",
      "title": "Switch Case Fall-Through Mechanism",
      "difficulty": "Exam",
      "level": 3,
      "code": "#include <stdio.h>\nint main(void) {\n    int code = 2;\n    switch (code) {\n        case 1: printf(\"One \");\n        case 2: printf(\"Two \");\n        case 3: printf(\"Three \");\n        default: printf(\"Default\");\n    }\n    printf(\"\\n\");\n    return 0;\n}",
      "question": "What is the exact output?",
      "answer": "Two Three Default",
      "explanation": "code == 2 matches case 2. Because case 2 lacks a 'break;' statement, execution falls through into case 3 and default sequentially until the end of the switch block.",
      "trap": "Missing break is valid C syntax, but creates unintentional fall-through bugs."
    },
    {
      "id": "op7",
      "title": "Loop Trailing Semicolon Null Statement",
      "difficulty": "Tricky",
      "level": 4,
      "code": "#include <stdio.h>\nint main(void) {\n    int i;\n    for (i = 1; i <= 5; i++);\n    {\n        printf(\"%d \", i);\n    }\n    printf(\"\\n\");\n    return 0;\n}",
      "question": "What is printed?",
      "answer": "6",
      "explanation": "The semicolon immediately after the for header creates a NULL statement loop body. The loop iterates 5 times doing nothing until i increments to 6 and loop condition (6 <= 5) becomes False. Control then moves to the standalone block {}, printing 6 once.",
      "trap": "Students expect '1 2 3 4 5', but the semicolon disconnects the curly block from the loop!"
    },
    {
      "id": "op8",
      "title": "do-while Post-Test Boundary Condition",
      "difficulty": "Basic",
      "level": 1,
      "code": "#include <stdio.h>\nint main(void) {\n    int i = 10;\n    do {\n        printf(\"%d \", i);\n        i++;\n    } while (i < 5);\n    printf(\"Final: %d\\n\", i);\n    return 0;\n}",
      "question": "What is the console output?",
      "answer": "10 Final: 11",
      "explanation": "do-while evaluates its condition at the exit point. The loop body executes once unconditionally, printing 10 and incrementing i to 11. Then (11 < 5) evaluates to False, terminating the loop.",
      "trap": "Assuming do-while behaves like while (which would print nothing). do-while ALWAYS executes at least once."
    },
    {
      "id": "op9",
      "title": "printf Return Value (Printed Character Count)",
      "difficulty": "Intermediate",
      "level": 2,
      "code": "#include <stdio.h>\nint main(void) {\n    int x = printf(\"Hello\");\n    printf(\"%d\\n\", x);\n    return 0;\n}",
      "question": "What is printed to the console?",
      "answer": "Hello5",
      "explanation": "printf() returns the integer count of characters successfully written to stdout. 'Hello' consists of 5 characters, so printf returns 5, which is assigned to x. The second printf outputs 5 immediately following Hello without a newline.",
      "trap": "Thinking printf returns 0, 1, or void. It returns the number of output characters!"
    },
    {
      "id": "op10",
      "title": "Multi-Variable Comma Operator in for Loop",
      "difficulty": "Tricky",
      "level": 4,
      "code": "#include <stdio.h>\nint main(void) {\n    for (int i = 0, j = 3; i < j; i++, j--) {\n        printf(\"%d-%d \", i, j);\n    }\n    printf(\"\\n\");\n    return 0;\n}",
      "question": "What is the output?",
      "answer": "0-3 1-2",
      "explanation": "Iteration 1: i=0, j=3 (0 < 3 True) -> prints '0-3'. Update: i=1, j=2.\nIteration 2: i=1, j=2 (1 < 2 True) -> prints '1-2'. Update: i=2, j=1.\nIteration 3: i=2, j=1 (2 < 1 False) -> loop terminates.",
      "trap": "Comma operators permit multiple initializations and updates in a single for loop header."
    },
    {
      "id": "op11",
      "title": "Negative Modulus Sign Rule in C99",
      "difficulty": "Exam",
      "level": 3,
      "code": "#include <stdio.h>\nint main(void) {\n    int a = -17 % 5;\n    int b = 17 % -5;\n    printf(\"a=%d, b=%d\\n\", a, b);\n    return 0;\n}",
      "question": "What will be printed?",
      "answer": "a=-2, b=2",
      "explanation": "In ANSI C99/C11 standards, the sign of (a % b) strictly matches the sign of the dividend (left operand a). The divisor's sign is ignored. -17 % 5 = -2; 17 % -5 = +2.",
      "trap": "Assuming modulus result is always positive like in pure mathematics. In C, it follows the numerator."
    },
    {
      "id": "op12",
      "title": "sizeof Compile-Time No-Evaluation Rule",
      "difficulty": "Tricky",
      "level": 4,
      "code": "#include <stdio.h>\nint main(void) {\n    int x = 10;\n    printf(\"%zu \", sizeof(x++));\n    printf(\"%d\\n\", x);\n    return 0;\n}",
      "question": "What are the two numbers printed?",
      "answer": "4 10",
      "explanation": "sizeof is a compile-time operator that inspects the type of its operand. The expression inside sizeof() is NEVER executed at runtime! Therefore, x++ is not executed and x remains 10 in RAM. sizeof(int) produces 4 bytes.",
      "trap": "Expecting x to increment to 11. Expressions inside sizeof are purely compile-time type inspections."
    }
  ],
  "debuggingLab": [
    {
      "id": "bug1",
      "title": "Assignment in Conditional Test",
      "category": "Control Flow",
      "brokenCode": "int score = 85;\nif (score = 100) {\n    printf(\"Perfect score!\\n\");\n} else {\n    printf(\"Keep studying!\\n\");\n}",
      "whatIsWrong": "Using single '=' (assignment) instead of '==' (equality comparison).",
      "whyItIsWrong": "score = 100 overwrites score with 100 and evaluates to 100. In C, non-zero is always True, so 'Perfect score!' prints even when score was 0.",
      "correctCode": "int score = 85;\nif (score == 100) {\n    printf(\"Perfect score!\\n\");\n} else {\n    printf(\"Keep studying!\\n\");\n}",
      "lessonLearned": "Use '==' for comparison. Practice 'Yoda conditions' like 'if (100 == score)' to trigger compiler errors on typos.",
      "trap": "The code compiles without syntax errors on default GCC flags, making it a silent logic bug."
    },
    {
      "id": "bug2",
      "title": "Missing Address-of Operator in scanf()",
      "category": "Input/Output",
      "brokenCode": "int age;\nprintf(\"Enter age: \");\nscanf(\"%d\", age); // BUG!\nprintf(\"Age is %d\\n\", age);",
      "whatIsWrong": "Passing 'age' by value instead of memory address '&age'.",
      "whyItIsWrong": "scanf() requires the RAM memory address where input bytes must be written. Passing 'age' passes uninitialized garbage as an address, causing the CPU to write to protected RAM, triggering a Segmentation Fault crash.",
      "correctCode": "int age;\nprintf(\"Enter age: \");\nscanf(\"%d\", &age);\nprintf(\"Age is %d\\n\", age);",
      "lessonLearned": "Always prepend '&' for scalar types (int, float, double, char) in scanf. Do NOT use '&' for string char arrays.",
      "trap": "Segmentation Fault crashes immediately terminate program execution with zero console output."
    },
    {
      "id": "bug3",
      "title": "Accidental Semicolon after #define Preprocessor Macro",
      "category": "Preprocessor",
      "brokenCode": "#define PI 3.14159;\n\nint main(void) {\n    double r = 5.0;\n    double area = PI * r * r;\n    printf(\"Area = %.2f\\n\", area);\n    return 0;\n}",
      "whatIsWrong": "Adding a terminating semicolon ';' to a #define macro directive.",
      "whyItIsWrong": "Preprocessor performs verbatim textual replacement. 'PI * r * r' expands to '3.14159; * r * r', which is invalid C syntax and triggers a compile error.",
      "correctCode": "#define PI 3.14159\n\nint main(void) {\n    double r = 5.0;\n    double area = PI * r * r;\n    printf(\"Area = %.2f\\n\", area);\n    return 0;\n}",
      "lessonLearned": "Preprocessor directives (#include, #define) are NOT C statements; never end them with semicolons.",
      "trap": "The error message points to the line where PI is used, not the #define line, confusing beginners."
    },
    {
      "id": "bug4",
      "title": "Missing break in switch Statement (Fall-Through)",
      "category": "Control Flow",
      "brokenCode": "int day = 1;\nswitch (day) {\n    case 1: printf(\"Monday\\n\");\n    case 2: printf(\"Tuesday\\n\");\n    default: printf(\"Invalid day\\n\");\n}",
      "whatIsWrong": "Missing 'break;' statement at the end of each case block.",
      "whyItIsWrong": "When day is 1, case 1 matches. Without break, execution continues into case 2 and default, printing all three messages.",
      "correctCode": "int day = 1;\nswitch (day) {\n    case 1: printf(\"Monday\\n\"); break;\n    case 2: printf(\"Tuesday\\n\"); break;\n    default: printf(\"Invalid day\\n\"); break;\n}",
      "lessonLearned": "Always end every switch case with 'break;' unless intentional fall-through is required.",
      "trap": "In exams, graders specifically check if you remembered 'break' in every case."
    },
    {
      "id": "bug5",
      "title": "Missing Loop Control Update (Infinite Loop)",
      "category": "Loops",
      "brokenCode": "int i = 1;\nwhile (i <= 10) {\n    printf(\"%d \", i);\n    // Missing update!\n}",
      "whatIsWrong": "Loop control variable 'i' is never incremented.",
      "whyItIsWrong": "i remains 1 indefinitely. The condition (1 <= 10) is perpetually True, locking the CPU core in an infinite printing loop.",
      "correctCode": "int i = 1;\nwhile (i <= 10) {\n    printf(\"%d \", i);\n    i++; // Updates loop variable\n}",
      "lessonLearned": "Every while and do-while loop must have a reachable statement modifying the loop condition variable.",
      "trap": "Pressing Ctrl+C is required to terminate an infinite loop in terminal."
    },
    {
      "id": "bug6",
      "title": "Modulus Operator with Floating-Point Types",
      "category": "Operators",
      "brokenCode": "float a = 7.5f;\nfloat b = 2.0f;\nfloat rem = a % b; // COMPILE ERROR!",
      "whatIsWrong": "Using the '%' modulus operator on floating-point operands.",
      "whyItIsWrong": "The '%' operator in C is strictly defined for integer data types only. Float modulus causes a compile error.",
      "correctCode": "#include <stdio.h>\n#include <math.h>\n\nint main(void) {\n    double a = 7.5, b = 2.0;\n    double rem = fmod(a, b); // Standard library float modulus\n    printf(\"Remainder = %.2f\\n\", rem);\n    return 0;\n}",
      "lessonLearned": "For floating-point remainder, include <math.h> and call fmod(x, y).",
      "trap": "Languages like Python allow float % float. C strictly forbids it."
    },
    {
      "id": "bug7",
      "title": "Variable Declared Inside do Block Used in while Condition",
      "category": "Scoping",
      "brokenCode": "do {\n    int count = 1;\n    printf(\"%d \", count);\n    count++;\n} while (count <= 5); // COMPILE ERROR!",
      "whatIsWrong": "'count' is declared inside the curly block of the do-while loop.",
      "whyItIsWrong": "The scope of 'count' terminates at the closing brace '}'. The while condition is outside this block scope, causing an 'undeclared identifier' error.",
      "correctCode": "int count = 1; // Declared outside loop scope\ndo {\n    printf(\"%d \", count);\n    count++;\n} while (count <= 5);",
      "lessonLearned": "Any variable tested in the condition of a do-while loop must be declared before the 'do' keyword.",
      "trap": "Curly braces {} define lexical scope boundaries in ANSI C."
    },
    {
      "id": "bug8",
      "title": "Format Specifier Mismatch in scanf for double",
      "category": "Input/Output",
      "brokenCode": "double radius;\nprintf(\"Enter radius: \");\nscanf(\"%f\", &radius); // BUG! Writes 4 bytes into 8-byte double\nprintf(\"Area = %.2f\\n\", 3.14159 * radius * radius);",
      "whatIsWrong": "Using '%f' in scanf() to read into a 'double' variable.",
      "whyItIsWrong": "In scanf, '%f' expects float* (4 bytes) while '%lf' expects double* (8 bytes). Writing 4 bytes into an 8-byte container leaves the other 4 bytes corrupted garbage, producing wildly incorrect results.",
      "correctCode": "double radius;\nprintf(\"Enter radius: \");\nscanf(\"%lf\", &radius); // Mandatory %lf for double in scanf\nprintf(\"Area = %.2f\\n\", 3.14159 * radius * radius);",
      "lessonLearned": "In scanf: float -> %f; double -> %lf. In printf: both %f and %lf are accepted.",
      "trap": "printf accepts %f for double due to variadic argument promotion, but scanf STRICTLY requires %lf."
    },
    {
      "id": "bug9",
      "title": "Leftover Newline '\\n' Buffer Trap in Character Input",
      "category": "Input/Output",
      "brokenCode": "int age;\nchar grade;\nprintf(\"Enter age: \");\nscanf(\"%d\", &age);\nprintf(\"Enter grade: \");\nscanf(\"%c\", &grade); // Immediately consumes '\\n' from Enter key!",
      "whatIsWrong": "scanf(\"%c\") reads the newline '\\n' character left in stdin buffer from typing age and pressing Enter.",
      "whyItIsWrong": "When typing '20' and pressing Enter, '20\\n' goes to stdin buffer. %d reads '20' and leaves '\\n'. The subsequent %c immediately consumes '\\n' without waiting for user input.",
      "correctCode": "int age;\nchar grade;\nprintf(\"Enter age: \");\nscanf(\"%d\", &age);\nprintf(\"Enter grade: \");\nscanf(\" %c\", &grade); // Leading space discards whitespace/newlines!",
      "lessonLearned": "Add a leading whitespace before '%c' in scanf: ' %c' tells scanf to skip any preceding whitespace/newlines.",
      "trap": "This bug appears every single semester in university lab exams."
    },
    {
      "id": "bug10",
      "title": "Dangling Semicolon in if Statement Header",
      "category": "Control Flow",
      "brokenCode": "int marks = 45;\nif (marks >= 50); { // Semicolon creates null statement!\n    printf(\"Congratulations! You PASSED!\\n\");\n}",
      "whatIsWrong": "Accidental semicolon immediately following the if() condition.",
      "whyItIsWrong": "The semicolon terminates the if statement with an empty statement. The subsequent curly block {} becomes a standalone compound statement that executes unconditionally, telling a student with 45 marks that they passed!",
      "correctCode": "int marks = 45;\nif (marks >= 50) {\n    printf(\"Congratulations! You PASSED!\\n\");\n}",
      "lessonLearned": "Never put a semicolon after if(), while(), or for() headers unless intentionally writing a null body loop.",
      "trap": "Code compiles cleanly with no syntax error; causes severe logic failure."
    }
  ],
  "flowchartBank": {
    "symbols": [
      {
        "shape": "Oval / Rounded Rectangle",
        "name": "Terminal",
        "purpose": "Start and Stop of program flow",
        "cEquivalent": "main() { ... return 0; }"
      },
      {
        "shape": "Parallelogram",
        "name": "Input / Output",
        "purpose": "Read user input or display output results",
        "cEquivalent": "scanf(), printf(), getchar(), puts()"
      },
      {
        "shape": "Rectangle",
        "name": "Process",
        "purpose": "Arithmetic calculations, assignments, data transfer",
        "cEquivalent": "sum = a + b; i++; avg = total / 3.0;"
      },
      {
        "shape": "Diamond (Rhombus)",
        "name": "Decision",
        "purpose": "Conditional test with TRUE/YES and FALSE/NO branches",
        "cEquivalent": "if (n % 2 == 0), while (i <= 10)"
      },
      {
        "shape": "Flowline Arrow",
        "name": "Flow Direction",
        "purpose": "Indicates sequential direction of control execution",
        "cEquivalent": "Next sequential instruction"
      },
      {
        "shape": "Circle",
        "name": "Connector",
        "purpose": "Joins flowlines without confusing intersections",
        "cEquivalent": "Label / Loopback point"
      }
    ],
    "algorithms": [
      {
        "id": 1,
        "title": "Sum of Two Numbers",
        "category": "Sequential Arithmetic",
        "flow": "START \u2794 Read A, B \u2794 Sum = A + B \u2794 Print Sum \u2794 STOP",
        "algorithmSteps": [
          "Step 1: Start",
          "Step 2: Read values of A and B",
          "Step 3: Calculate Sum = A + B",
          "Step 4: Display Sum",
          "Step 5: Stop"
        ],
        "cCode": "#include <stdio.h>\nint main(void) {\n    int a, b, sum;\n    if (scanf(\"%d %d\", &a, &b) == 2) {\n        sum = a + b;\n        printf(\"Sum = %d\\n\", sum);\n    }\n    return 0;\n}"
      },
      {
        "id": 2,
        "title": "Average of Three Numbers",
        "category": "Sequential Arithmetic",
        "flow": "START \u2794 Read A, B, C \u2794 Avg = (A + B + C) / 3.0 \u2794 Print Avg \u2794 STOP",
        "algorithmSteps": [
          "Step 1: Start",
          "Step 2: Read numbers A, B, C",
          "Step 3: Calculate Avg = (A + B + C) / 3.0",
          "Step 4: Print Avg with 2 decimals",
          "Step 5: Stop"
        ],
        "cCode": "#include <stdio.h>\nint main(void) {\n    float a, b, c, avg;\n    scanf(\"%f %f %f\", &a, &b, &c);\n    avg = (a + b + c) / 3.0f;\n    printf(\"Average = %.2f\\n\", avg);\n    return 0;\n}"
      },
      {
        "id": 3,
        "title": "Even or Odd Integer Check",
        "category": "Conditional Branching",
        "flow": "START \u2794 Read N \u2794 [N % 2 == 0?] \u2794 YES: Print 'EVEN' | NO: Print 'ODD' \u2794 STOP",
        "algorithmSteps": [
          "Step 1: Start",
          "Step 2: Read integer N",
          "Step 3: If N % 2 == 0, print 'EVEN', else print 'ODD'",
          "Step 4: Stop"
        ],
        "cCode": "#include <stdio.h>\nint main(void) {\n    int n;\n    scanf(\"%d\", &n);\n    if (n % 2 == 0) printf(\"%d is EVEN\\n\", n);\n    else printf(\"%d is ODD\\n\", n);\n    return 0;\n}"
      },
      {
        "id": 4,
        "title": "Positive, Negative, or Zero Check",
        "category": "Multi-Way Branching",
        "flow": "START \u2794 Read N \u2794 [N > 0?] \u2794 YES: 'Positive' | NO: [N < 0?] \u2794 YES: 'Negative' | NO: 'Zero' \u2794 STOP",
        "algorithmSteps": [
          "Step 1: Start",
          "Step 2: Read N",
          "Step 3: If N > 0 print 'Positive'; else if N < 0 print 'Negative'; else print 'Zero'",
          "Step 4: Stop"
        ],
        "cCode": "#include <stdio.h>\nint main(void) {\n    int n;\n    scanf(\"%d\", &n);\n    if (n > 0) printf(\"Positive\\n\");\n    else if (n < 0) printf(\"Negative\\n\");\n    else printf(\"Zero\\n\");\n    return 0;\n}"
      },
      {
        "id": 5,
        "title": "Largest of Two Numbers",
        "category": "Conditional Branching",
        "flow": "START \u2794 Read A, B \u2794 [A > B?] \u2794 YES: Max = A | NO: Max = B \u2794 Print Max \u2794 STOP",
        "algorithmSteps": [
          "Step 1: Start",
          "Step 2: Read A, B",
          "Step 3: If A > B then Max = A else Max = B",
          "Step 4: Print Max",
          "Step 5: Stop"
        ],
        "cCode": "#include <stdio.h>\nint main(void) {\n    int a, b;\n    scanf(\"%d %d\", &a, &b);\n    printf(\"Max = %d\\n\", (a > b) ? a : b);\n    return 0;\n}"
      },
      {
        "id": 6,
        "title": "Largest of Three Numbers",
        "category": "Multi-Way Branching",
        "flow": "START \u2794 Read A, B, C \u2794 [A >= B && A >= C?] \u2794 YES: Max=A | NO: [B >= C?] \u2794 YES: Max=B | NO: Max=C \u2794 Print Max \u2794 STOP",
        "algorithmSteps": [
          "Step 1: Start",
          "Step 2: Read A, B, C",
          "Step 3: If A >= B and A >= C, Max = A",
          "Step 4: Else if B >= C, Max = B; else Max = C",
          "Step 5: Print Max",
          "Step 6: Stop"
        ],
        "cCode": "#include <stdio.h>\nint main(void) {\n    int a, b, c, max;\n    scanf(\"%d %d %d\", &a, &b, &c);\n    if (a >= b && a >= c) max = a;\n    else if (b >= c) max = b;\n    else max = c;\n    printf(\"Largest = %d\\n\", max);\n    return 0;\n}"
      },
      {
        "id": 7,
        "title": "University Student Grade Classification",
        "category": "Decision Ladder",
        "flow": "START \u2794 Read Marks \u2794 [Marks >= 80?] \u2794 A+ | [>= 70?] \u2794 A | [>= 60?] \u2794 B | [>= 50?] \u2794 C | else \u2794 Fail \u2794 Print Grade \u2794 STOP",
        "algorithmSteps": [
          "Step 1: Start",
          "Step 2: Read student marks (0-100)",
          "Step 3: Evaluate ladder >= 80 (A+), >= 70 (A), >= 60 (B), >= 50 (C), else (F)",
          "Step 4: Display Grade",
          "Step 5: Stop"
        ],
        "cCode": "#include <stdio.h>\nint main(void) {\n    float m;\n    scanf(\"%f\", &m);\n    if (m >= 80) printf(\"Grade: A+\\n\");\n    else if (m >= 70) printf(\"Grade: A\\n\");\n    else if (m >= 60) printf(\"Grade: B\\n\");\n    else if (m >= 50) printf(\"Grade: C\\n\");\n    else printf(\"Grade: F (Fail)\\n\");\n    return 0;\n}"
      },
      {
        "id": 8,
        "title": "Leap Year Verification",
        "category": "Logical Operators",
        "flow": "START \u2794 Read Year \u2794 [(Y % 400 == 0) || (Y % 4 == 0 && Y % 100 != 0)?] \u2794 YES: 'Leap Year' | NO: 'Not Leap Year' \u2794 STOP",
        "algorithmSteps": [
          "Step 1: Start",
          "Step 2: Read integer year Y",
          "Step 3: Check condition: (Y%400==0) OR (Y%4==0 AND Y%100!=0)",
          "Step 4: If True print 'Leap Year', else 'Not Leap Year'",
          "Step 5: Stop"
        ],
        "cCode": "#include <stdio.h>\nint main(void) {\n    int y;\n    scanf(\"%d\", &y);\n    if ((y % 400 == 0) || (y % 4 == 0 && y % 100 != 0)) printf(\"%d is LEAP YEAR\\n\", y);\n    else printf(\"%d is NOT a leap year\\n\", y);\n    return 0;\n}"
      },
      {
        "id": 9,
        "title": "Four-Function Calculator (switch)",
        "category": "Switch Selection",
        "flow": "START \u2794 Read A, B, Op \u2794 switch(Op) \u2794 '+': A+B | '-': A-B | '*': A*B | '/': [B!=0? A/B : Error] \u2794 Print \u2794 STOP",
        "algorithmSteps": [
          "Step 1: Start",
          "Step 2: Read numbers A, B and operator character Op",
          "Step 3: Match operator using switch",
          "Step 4: Print evaluated arithmetic result",
          "Step 5: Stop"
        ],
        "cCode": "#include <stdio.h>\nint main(void) {\n    double a, b;\n    char op;\n    scanf(\"%lf %c %lf\", &a, &op, &b);\n    switch(op) {\n        case '+': printf(\"%.2f\\n\", a + b); break;\n        case '-': printf(\"%.2f\\n\", a - b); break;\n        case '*': printf(\"%.2f\\n\", a * b); break;\n        case '/': if (b != 0) printf(\"%.2f\\n\", a / b); else printf(\"Divide by zero!\\n\"); break;\n        default: printf(\"Invalid operator\\n\");\n    }\n    return 0;\n}"
      },
      {
        "id": 10,
        "title": "Sum of Natural Numbers from 1 to N",
        "category": "Loop Iteration",
        "flow": "START \u2794 Read N \u2794 Init i = 1, sum = 0 \u2794 [i <= N?] \u2794 YES: sum += i, i++ loop \u2794 NO: Print sum \u2794 STOP",
        "algorithmSteps": [
          "Step 1: Start",
          "Step 2: Read N",
          "Step 3: Set sum = 0, i = 1",
          "Step 4: While i <= N, add i to sum and increment i",
          "Step 5: Print sum",
          "Step 6: Stop"
        ],
        "cCode": "#include <stdio.h>\nint main(void) {\n    int n, sum = 0;\n    scanf(\"%d\", &n);\n    for (int i = 1; i <= n; i++) sum += i;\n    printf(\"Sum = %d\\n\", sum);\n    return 0;\n}"
      },
      {
        "id": 11,
        "title": "Factorial of an Integer N",
        "category": "Loop Accumulator",
        "flow": "START \u2794 Read N \u2794 Init fact = 1, i = 1 \u2794 [i <= N?] \u2794 YES: fact *= i, i++ loop \u2794 NO: Print fact \u2794 STOP",
        "algorithmSteps": [
          "Step 1: Start",
          "Step 2: Read integer N",
          "Step 3: Set fact = 1, i = 1",
          "Step 4: While i <= N, multiply fact by i, increment i",
          "Step 5: Print fact",
          "Step 6: Stop"
        ],
        "cCode": "#include <stdio.h>\nint main(void) {\n    int n;\n    long long fact = 1;\n    scanf(\"%d\", &n);\n    for (int i = 1; i <= n; i++) fact *= i;\n    printf(\"%d! = %lld\\n\", n, fact);\n    return 0;\n}"
      },
      {
        "id": 12,
        "title": "Reverse an Integer",
        "category": "Digit Extraction",
        "flow": "START \u2794 Read N \u2794 Init rev = 0 \u2794 [N > 0?] \u2794 YES: d = N % 10, rev = rev*10 + d, N /= 10 loop \u2794 NO: Print rev \u2794 STOP",
        "algorithmSteps": [
          "Step 1: Start",
          "Step 2: Read N",
          "Step 3: Set rev = 0",
          "Step 4: While N > 0: extract digit d = N % 10; append rev = rev*10 + d; drop digit N = N / 10",
          "Step 5: Print rev",
          "Step 6: Stop"
        ],
        "cCode": "#include <stdio.h>\nint main(void) {\n    int n, rev = 0;\n    scanf(\"%d\", &n);\n    while (n > 0) {\n        rev = (rev * 10) + (n % 10);\n        n /= 10;\n    }\n    printf(\"Reversed = %d\\n\", rev);\n    return 0;\n}"
      },
      {
        "id": 13,
        "title": "Palindrome Number Verification",
        "category": "Digit Extraction & Comparison",
        "flow": "START \u2794 Read N \u2794 Copy temp = N, rev = 0 \u2794 Reverse loop \u2794 [temp == rev?] \u2794 YES: 'Palindrome' | NO: 'Not Palindrome' \u2794 STOP",
        "algorithmSteps": [
          "Step 1: Start",
          "Step 2: Read N",
          "Step 3: Copy temp = N, rev = 0",
          "Step 4: Reverse N using digit extraction loop",
          "Step 5: If temp == rev print 'Palindrome', else 'Not Palindrome'",
          "Step 6: Stop"
        ],
        "cCode": "#include <stdio.h>\nint main(void) {\n    int n, temp, rev = 0;\n    scanf(\"%d\", &n);\n    temp = n;\n    while (n > 0) {\n        rev = (rev * 10) + (n % 10);\n        n /= 10;\n    }\n    if (temp == rev) printf(\"%d is a PALINDROME\\n\", temp);\n    else printf(\"%d is NOT a palindrome\\n\", temp);\n    return 0;\n}"
      },
      {
        "id": 14,
        "title": "Prime Number Check (Optimized O(\u221aN))",
        "category": "Loop Search & Sieve",
        "flow": "START \u2794 Read N \u2794 Init isPrime = (N > 1), i = 2 \u2794 [i*i <= N?] \u2794 YES: [N % i == 0?] \u2794 YES: isPrime=0, break | NO: i++ loop \u2794 Print \u2794 STOP",
        "algorithmSteps": [
          "Step 1: Start",
          "Step 2: Read N",
          "Step 3: If N <= 1, set isPrime = 0, else isPrime = 1",
          "Step 4: For i = 2 to \u221aN: if N % i == 0, set isPrime = 0 and break",
          "Step 5: If isPrime == 1 print 'PRIME' else 'COMPOSITE'",
          "Step 6: Stop"
        ],
        "cCode": "#include <stdio.h>\nint main(void) {\n    int n, isPrime = 1;\n    scanf(\"%d\", &n);\n    if (n <= 1) isPrime = 0;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) { isPrime = 0; break; }\n    }\n    printf(\"%d is %s\\n\", n, isPrime ? \"PRIME\" : \"COMPOSITE\");\n    return 0;\n}"
      },
      {
        "id": 15,
        "title": "Armstrong Number Verification",
        "category": "Digit Extraction & Accumulation",
        "flow": "START \u2794 Read N \u2794 Copy temp = N, sum = 0 \u2794 [N > 0?] \u2794 YES: d = N % 10, sum += d*d*d, N /= 10 loop \u2794 [sum == temp?] \u2794 YES: 'Armstrong' \u2794 STOP",
        "algorithmSteps": [
          "Step 1: Start",
          "Step 2: Read N",
          "Step 3: Copy temp = N, sum = 0",
          "Step 4: While N > 0: d = N % 10; sum += d*d*d; N /= 10",
          "Step 5: If sum == temp print 'ARMSTRONG', else 'NOT ARMSTRONG'",
          "Step 6: Stop"
        ],
        "cCode": "#include <stdio.h>\nint main(void) {\n    int n, temp, sum = 0;\n    scanf(\"%d\", &n);\n    temp = n;\n    while (n > 0) {\n        int d = n % 10;\n        sum += (d * d * d);\n        n /= 10;\n    }\n    if (sum == temp) printf(\"%d is an ARMSTRONG NUMBER\\n\", temp);\n    else printf(\"%d is NOT an Armstrong number\\n\", temp);\n    return 0;\n}"
      }
    ]
  },
  "algorithmPatterns": [
    {
      "id": 1,
      "category": "Input/Output",
      "name": "Input \u2794 Process \u2794 Output",
      "template": "Read input \u2794 apply mathematical formula \u2794 print formatted output.",
      "snippet": "scanf(\"%f\", &r);\nfloat area = 3.14159f * r * r;\nprintf(\"Area = %.2f\\n\", area);"
    },
    {
      "id": 2,
      "category": "Memory & Variables",
      "name": "Swap Two Variables (Using temp)",
      "template": "Classic 3-step cup swap using temporary memory.",
      "snippet": "int temp = a;\na = b;\nb = temp;"
    },
    {
      "id": 3,
      "category": "Memory & Variables",
      "name": "Swap Two Variables (Without temp)",
      "template": "Arithmetic subtraction/addition swap or bitwise XOR swap.",
      "snippet": "a = a + b;\nb = a - b;\na = a - b;"
    },
    {
      "id": 4,
      "category": "Accumulator",
      "name": "Running Stream Average",
      "template": "Accumulate total sum and increment item counter, then cast to double.",
      "snippet": "sum += value;\ncount++;\ndouble avg = (double)sum / count;"
    },
    {
      "id": 5,
      "category": "Formula Translation",
      "name": "Unit & Temperature Conversion",
      "template": "Linear transformation with floating-point constant ratio.",
      "snippet": "float celsius = (fahrenheit - 32.0f) * 5.0f / 9.0f;"
    },
    {
      "id": 6,
      "category": "Branching",
      "name": "Binary Two-Way Decision",
      "template": "Mutually exclusive if-else branch.",
      "snippet": "if (score >= 50) printf(\"PASS\\n\");\nelse printf(\"FAIL\\n\");"
    },
    {
      "id": 7,
      "category": "Branching",
      "name": "Multi-Way Range Ladder",
      "template": "Series of ordered mutually exclusive range checks.",
      "snippet": "if (m >= 80) grade = 'A';\nelse if (m >= 60) grade = 'B';\nelse grade = 'F';"
    },
    {
      "id": 8,
      "category": "Optimization",
      "name": "Maximum of Three Numbers",
      "template": "Assume first is max, sequentially challenge with remaining operands.",
      "snippet": "int max = a;\nif (b > max) max = b;\nif (c > max) max = c;"
    },
    {
      "id": 9,
      "category": "Optimization",
      "name": "Minimum of Three Numbers",
      "template": "Assume first is min, sequentially challenge with remaining operands.",
      "snippet": "int min = a;\nif (b < min) min = b;\nif (c < min) min = c;"
    },
    {
      "id": 10,
      "category": "Counters",
      "name": "Conditional Event Counter",
      "template": "Initialize count = 0, increment when match condition satisfies.",
      "snippet": "int count = 0;\nfor(int i=0; i<n; i++) if (arr[i] % 2 == 0) count++;"
    },
    {
      "id": 11,
      "category": "Accumulator",
      "name": "Sum Accumulator",
      "template": "Initialize sum = 0, add terms inside loop.",
      "snippet": "int sum = 0;\nfor (int i = 1; i <= n; i++) sum += i;"
    },
    {
      "id": 12,
      "category": "Accumulator",
      "name": "Product / Factorial Accumulator",
      "template": "Initialize product = 1 (never 0!), multiply terms inside loop.",
      "snippet": "long long fact = 1;\nfor (int i = 1; i <= n; i++) fact *= i;"
    },
    {
      "id": 13,
      "category": "Filtering",
      "name": "Even / Odd Modulo Filter",
      "template": "Test divisibility by 2 using '%' operator.",
      "snippet": "if (n % 2 == 0) /* even */\nelse /* odd */"
    },
    {
      "id": 14,
      "category": "Digit Manipulation",
      "name": "Digit Extraction Loop",
      "template": "Repeatedly extract last digit with % 10, then remove it with / 10.",
      "snippet": "while (n > 0) {\n    int d = n % 10;\n    // use d\n    n /= 10;\n}"
    },
    {
      "id": 15,
      "category": "Digit Manipulation",
      "name": "Number Reversal",
      "template": "Extract digit, shift existing reversed value by * 10, add digit.",
      "snippet": "int rev = 0;\nwhile (n > 0) {\n    rev = (rev * 10) + (n % 10);\n    n /= 10;\n}"
    },
    {
      "id": 16,
      "category": "Digit Manipulation",
      "name": "Palindrome Verification",
      "template": "Compare original integer against its reversed representation.",
      "snippet": "if (original == reversed) printf(\"PALINDROME\\n\");"
    },
    {
      "id": 17,
      "category": "Number Theory",
      "name": "Prime Number Divisor Sieve",
      "template": "Check divisibility up to integer square root \u221aN.",
      "snippet": "int isPrime = (n > 1);\nfor (int i = 2; i * i <= n; i++) {\n    if (n % i == 0) { isPrime = 0; break; }\n}"
    },
    {
      "id": 18,
      "category": "Number Theory",
      "name": "Armstrong Number Verification",
      "template": "Sum of cubes of individual digits equals original number.",
      "snippet": "int sum = 0;\nwhile(n > 0) { int d = n % 10; sum += d*d*d; n /= 10; }\nif (sum == original) printf(\"ARMSTRONG\\n\");"
    },
    {
      "id": 19,
      "category": "Series",
      "name": "Fibonacci Series Generator",
      "template": "Track two preceding terms, compute next = t1 + t2, shift values.",
      "snippet": "int t1 = 0, t2 = 1;\nfor (int i = 1; i <= n; i++) {\n    printf(\"%d \", t1);\n    int next = t1 + t2;\n    t1 = t2; t2 = next;\n}"
    },
    {
      "id": 20,
      "category": "Nested Loops",
      "name": "2D Multiplication Grid",
      "template": "Outer loop controls rows, inner loop controls columns.",
      "snippet": "for (int r = 1; r <= rows; r++) {\n    for (int c = 1; c <= cols; c++) printf(\"%4d\", r * c);\n    printf(\"\\n\");\n}"
    },
    {
      "id": 21,
      "category": "Searching",
      "name": "Linear Search with Flag",
      "template": "Iterate list, trip flag to 1 upon match, break early.",
      "snippet": "int found = 0;\nfor (int i = 0; i < n; i++) if (arr[i] == target) { found = 1; break; }"
    },
    {
      "id": 22,
      "category": "Input Validation",
      "name": "Interactive Validation Loop",
      "template": "do-while prompt executed until input satisfies valid boundaries.",
      "snippet": "int score;\ndo {\n    printf(\"Enter score (0-100): \");\n    scanf(\"%d\", &score);\n} while (score < 0 || score > 100);"
    },
    {
      "id": 23,
      "category": "Control Flow",
      "name": "Sentinel-Controlled Reading Loop",
      "template": "Loop continuously until user provides special termination value.",
      "snippet": "int val;\nwhile (scanf(\"%d\", &val) == 1 && val != -1) {\n    sum += val;\n}"
    },
    {
      "id": 24,
      "category": "Interactive",
      "name": "Interactive Menu System",
      "template": "Display menu in do-while, dispatch command via switch(choice).",
      "snippet": "do {\n    printf(\"1. Deposit\\n2. Withdraw\\n0. Exit\\n\");\n    scanf(\"%d\", &ch);\n    switch(ch) { ... }\n} while (ch != 0);"
    },
    {
      "id": 25,
      "category": "Nested Loops",
      "name": "Matrix Coordinate Traversal",
      "template": "Row-major traversal accessing elements at [row][col].",
      "snippet": "for (int i = 0; i < R; i++)\n    for (int j = 0; j < C; j++)\n        process(matrix[i][j]);"
    },
    {
      "id": 26,
      "category": "Pattern Printing",
      "name": "Centered Star Pyramid Pattern",
      "template": "Outer loop for rows, inner loop 1 for spaces (rows-i), inner loop 2 for odd stars (2*i-1).",
      "snippet": "for (int i = 1; i <= H; i++) {\n    for (int s = 1; s <= H - i; s++) printf(\" \");\n    for (int j = 1; j <= 2*i - 1; j++) printf(\"*\");\n    printf(\"\\n\");\n}"
    }
  ],
  "theoryQuestions": {
    "shortQuestions": [
      {
        "id": "sq1",
        "category": "Fundamentals",
        "question": "What is a variable in C?",
        "answer": "A variable is a named location in computer memory (RAM) with an associated data type that stores a value that can be modified during program execution.",
        "keywords": [
          "named memory location",
          "data type",
          "modifiable in execution",
          "RAM stack"
        ]
      },
      {
        "id": "sq2",
        "category": "Fundamentals",
        "question": "What are the rules for naming valid identifiers in C?",
        "answer": "1. Must begin with a letter (A-Z, a-z) or underscore (_).\n2. Subsequent characters can be letters, digits (0-9), or underscores.\n3. Cannot be a C reserved keyword.\n4. No special characters or whitespace allowed.\n5. Case-sensitive ('Total' != 'total').",
        "keywords": [
          "letter or underscore first",
          "no reserved keyword",
          "no whitespace",
          "case-sensitive"
        ]
      },
      {
        "id": "sq3",
        "category": "Fundamentals",
        "question": "Differentiate between #define symbolic constant and const keyword.",
        "answer": "'#define' is a preprocessor macro directive that performs blind textual replacement before compilation (allocates no memory, has no data type). 'const' is a C type qualifier that creates a read-only variable residing in memory with strict type checking by the compiler.",
        "keywords": [
          "#define preprocessor text replacement",
          "no memory",
          "const typed memory variable",
          "read-only"
        ]
      },
      {
        "id": "sq4",
        "category": "Operators",
        "question": "Explain short-circuit evaluation in logical operators with an example.",
        "answer": "Short-circuit evaluation is a compiler optimization where evaluation of a logical expression stops as soon as the outcome is guaranteed. In (A && B), if A is False (0), B is never evaluated. In (A || B), if A is True (1), B is never evaluated.",
        "keywords": [
          "evaluation stops early",
          "&& stops on False",
          "|| stops on True",
          "unexecuted operands"
        ]
      },
      {
        "id": "sq5",
        "category": "Operators",
        "question": "What is the difference between '=' and '==' in C?",
        "answer": "'=' is the assignment operator that stores the right-hand evaluated value into the left-hand variable memory location. '==' is the relational equality operator that compares two expressions and returns integer 1 (True) or 0 (False).",
        "keywords": [
          "assignment copies value",
          "equality returns 1 or 0",
          "L-value = R-value"
        ]
      },
      {
        "id": "sq6",
        "category": "Operators",
        "question": "What is integer division truncation?",
        "answer": "In C, when both operands of division '/' are integers, the fractional portion is strictly discarded (truncated towards zero). For example, 5 / 2 yields 2, NOT 2.5.",
        "keywords": [
          "integer operands",
          "truncates towards zero",
          "fraction discarded"
        ]
      },
      {
        "id": "sq7",
        "category": "Input/Output",
        "question": "Why is the address-of operator '&' required in scanf()?",
        "answer": "scanf() must modify variables in the caller's stack frame. Because C passes function arguments strictly by value, passing 'x' gives scanf only a copy. Passing '&x' provides the actual RAM memory address so scanf can write the input bytes directly into that variable.",
        "keywords": [
          "pass by value in C",
          "memory address",
          "RAM stack location",
          "direct memory write"
        ]
      },
      {
        "id": "sq8",
        "category": "Control Statements",
        "question": "Explain the Dangling Else problem and how it is resolved.",
        "answer": "The Dangling Else ambiguity arises in nested if statements without braces, where it is ambiguous which 'if' an 'else' belongs to. In C grammar, an 'else' strictly attaches to the closest preceding unmatched 'if'. It is resolved unambiguously by using explicit curly braces {}.",
        "keywords": [
          "closest unmatched if",
          "grammar rule",
          "curly braces {} resolve"
        ]
      },
      {
        "id": "sq9",
        "category": "Control Statements",
        "question": "Differentiate between while and do-while loops.",
        "answer": "'while' is an entry-controlled (pre-test) loop that tests its condition before executing the body; it may execute zero times. 'do-while' is an exit-controlled (post-test) loop that tests its condition after executing the body; it is guaranteed to execute at least once.",
        "keywords": [
          "entry-controlled vs exit-controlled",
          "pre-test vs post-test",
          "0 times vs at least 1 time"
        ]
      },
      {
        "id": "sq10",
        "category": "Control Statements",
        "question": "Differentiate between break and continue statements.",
        "answer": "'break' immediately terminates the innermost enclosing loop or switch statement, transferring execution to the next statement outside. 'continue' skips the remaining statements in the current iteration and immediately jumps to the loop update/condition test for the next cycle.",
        "keywords": [
          "break terminates loop",
          "continue skips current iteration",
          "transfers to update"
        ]
      }
    ],
    "longQuestions": [
      {
        "id": "lq1",
        "category": "Computer Architecture",
        "question": "Explain the Von Neumann Architecture of a modern computer with an ASCII block diagram. Describe the functionality of each subsystem.",
        "marks": "8 to 10 Marks",
        "blueprint": [
          "1. Introduction: Proposed by John von Neumann in 1945; stored-program concept with shared memory for code instructions and runtime data.",
          "2. ASCII Block Diagram: Illustrate CPU (ALU, Control Unit, Registers), System Bus (Address, Data, Control), Primary Memory (RAM), Secondary Storage, and Input/Output Units.",
          "3. Detailed Subsystems:\n   - ALU: Performs arithmetic (+, -, *, /) and logic (==, !=, <, >).\n   - Control Unit: The conductor; fetches, decodes opcodes, issues micro-timed clock signals.\n   - CPU Registers: Zero-wait-state memory on silicon (PC, IR, ACC, MAR, MBR).\n   - RAM: Volatile primary memory holding running OS kernel and C stack/heap.\n   - System Bus: Address Bus (unidirectional), Data Bus (bidirectional), Control Bus.",
          "4. Instruction Execution Cycle: Fetch \u2794 Decode \u2794 Execute \u2794 Store.",
          "5. C Language Mapping: How declaring variables allocates RAM, and main() executes instructions sequentially."
        ]
      },
      {
        "id": "lq2",
        "category": "Compilation",
        "question": "Describe the 4 stages of the C Compilation Pipeline (Preprocessing, Compilation, Assembly, Linking) detailing input and output file extensions.",
        "marks": "7 to 10 Marks",
        "blueprint": [
          "1. Pipeline Overview: Translating human-readable .c source code into machine-executable .exe binary.",
          "2. Stage 1: Preprocessing (cpp)\n   - Input: source.c \u2794 Output: source.i (Expanded C source)\n   - Actions: Expands #include headers, replaces #define macros, strips all comments, handles #ifdef.",
          "3. Stage 2: Compilation (cc1)\n   - Input: source.i \u2794 Output: source.s (Assembly code)\n   - Actions: Lexical, syntactic, and semantic parsing; type checking; generates CPU-specific Assembly mnemonics.",
          "4. Stage 3: Assembly (as)\n   - Input: source.s \u2794 Output: source.o / source.obj (Object code)\n   - Actions: Translates assembly mnemonics into raw binary machine opcodes (0s and 1s); leaves external references unresolved.",
          "5. Stage 4: Linking (ld)\n   - Input: source.o + libc.a / C runtime libraries \u2794 Output: program.exe\n   - Actions: Resolves external function symbols (e.g. printf, scanf); links startup code; builds single executable binary."
        ]
      },
      {
        "id": "lq3",
        "category": "Control Statements",
        "question": "Provide a comprehensive comparative analysis of for, while, and do-while loops in C. When should each be selected?",
        "marks": "7 to 10 Marks",
        "blueprint": [
          "1. Master Comparison Table: Compare Control point (Pre vs Post), Syntax, Trailing semicolon requirements, and Minimum execution count (0 vs 1).",
          "2. Flowchart Architectural Comparison: Draw decision diamond placements (top for for/while, bottom for do-while).",
          "3. The 3-Second Selection Decision Rule:\n   - for loop: Count-controlled, definite iteration known in advance (1 to N, array indexes).\n   - while loop: Condition-controlled, indefinite iteration (reading until sentinel, digit extraction).\n   - do-while loop: Exit-controlled, must execute at least once (interactive menus, input range validation).",
          "4. Boundary Analysis: Demonstrate behavior when initial condition is False (e.g. N = 0)."
        ]
      },
      {
        "id": "lq4",
        "category": "Operators",
        "question": "Explain Operator Precedence and Associativity in C. Detail the top 10 operator levels with examples of evaluation.",
        "marks": "7 to 10 Marks",
        "blueprint": [
          "1. Definitions: Precedence determines which operator binds first in compound expressions. Associativity determines evaluation order (Left-to-Right vs Right-to-Left) when operators share the same precedence.",
          "2. The Master Precedence Table (Ranks 1 to 10):\n   - Rank 1: Primary () [] -> .\n   - Rank 2: Unary ++ -- ! ~ sizeof & * (Right-to-Left!)\n   - Rank 3: Multiplicative * / %\n   - Rank 4: Additive + -\n   - Rank 5: Relational < <= > >=\n   - Rank 6: Equality == !=\n   - Rank 7: Logical AND &&\n   - Rank 8: Logical OR ||\n   - Rank 9: Conditional ?: (Right-to-Left!)\n   - Rank 10: Assignment = += -= (Right-to-Left!)",
          "3. Worked Evaluation Walkthrough: Step-by-step evaluation of an expression like 'x = a + b * c > d && !e'."
        ]
      }
    ]
  },
  "quickRevision": {
    "oneDayChecklist": [
      "Review all 32 ANSI C keywords and confirm reserved identifier rules.",
      "Re-read the Operator Precedence Hierarchy (Ranks 1\u201315); remember unary, ternary, and assignment associate Right-to-Left.",
      "Practice 4 classic algorithms on paper: Prime check (O(\u221aN)), Palindrome check, Factorial, and Star Pyramid.",
      "Re-check semicolon rules: mandatory after do { ... } while(cond);, FORBIDDEN after if(), while(), and #define.",
      "Review format specifiers: %d (int), %f (float), %lf (double in scanf!), %c (char), %s (string), %p (pointer address).",
      "Review memory models: Stack (local variables, garbage when uninitialized) vs RAM vs CPU Registers.",
      "Trace at least 3 output prediction questions manually using a pen-and-paper dry run table."
    ],
    "threeHourChecklist": [
      "Trace prefix (++x) vs postfix (x++) in expressions: prefix updates first; postfix returns old value first.",
      "Review integer division truncation: 5 / 2 = 2, NOT 2.5. Explicit cast: (float)5 / 2 = 2.5.",
      "Review short-circuit evaluation: in &&, left=0 skips right; in ||, left=1 skips right.",
      "Review Dangling Else rule: else binds to nearest preceding unmatched if, regardless of visual indentation.",
      "Review switch constraints: expression and case labels must be integer constants; floats are illegal; missing break causes fall-through.",
      "Review break (stops loop) vs continue (skips current iteration, jumps to update).",
      "Review scanf character trap: add leading space ' %c' to skip leftover newline '\\n' from previous input."
    ],
    "oneHourChecklist": [
      "Scan the Top 20 Common Midterm Traps.",
      "Re-verify the 6 standard flowchart symbols: Oval (Terminal), Parallelogram (I/O), Rectangle (Process), Diamond (Decision), Flowline (Arrow), Circle (Connector).",
      "Mentally recite the 3-Second Loop Decision Rule: known count \u2794 for; indefinite \u2794 while; at least once \u2794 do-while.",
      "Remember: in scanf, pass '&' for int/float/double/char, but do NOT pass '&' for string char arrays.",
      "Remember: string literal \"A\" is 2 bytes ('A' + '\\0'); character constant 'A' is 1 byte."
    ],
    "fifteenMinCard": {
      "title": "15-Minute Emergency Midterm Formula Card",
      "items": [
        "Precedence Hierarchy: () \u2794 ++x/--x/sizeof/& \u2794 * / % \u2794 + - \u2794 < <= > >= \u2794 == != \u2794 && \u2794 || \u2794 ?: \u2794 =",
        "Associativity Alert: Unary (++x), Ternary (?:), and Assignment (=, +=) evaluate RIGHT-TO-LEFT!",
        "C Truth Rule: 0 = FALSE | ANY Non-Zero (1, -5, 100) = TRUE",
        "Integer Division: int / int = int (Strict truncation towards zero \u2014 never rounds!)",
        "Modulus Rule: Integers only! Sign strictly follows dividend (numerator in C99).",
        "scanf Address Rule: Always pass & for primitive scalar variables (&num)!",
        "double scanf Rule: scanf requires %lf for double; using %f corrupts memory!",
        "Character Input Trap: Use scanf(\" %c\", &ch); with leading space to discard buffer '\\n'!",
        "do-while Rule: Must terminate with semicolon: do { ... } while (cond);",
        "Loop Decision: Known count \u2794 for | Unknown until condition \u2794 while | Must run once \u2794 do-while",
        "break vs continue: break \ud83d\uded1 TERMINATES loop; continue \u23ed\ufe0f SKIPS this round to update!",
        "switch Rule: Case values must be compile-time integer constants; floats are ILLEGAL!"
      ]
    }
  },
  "examTraps": [
    {
      "id": 1,
      "title": "Accidental Semicolon After Control Headers",
      "category": "Control Flow",
      "code": "if (x > 0); // null body!\nwhile (i <= 5); // infinite loop!",
      "explanation": "A semicolon right after if, while, or for creates a null (empty) statement as the body. The intended block { } executes unconditionally.",
      "fix": "Never place ; directly after if(), while(), or for() headers."
    },
    {
      "id": 2,
      "title": "Integer Division Truncation (Fraction Discarded)",
      "category": "Operators",
      "code": "float c = 5 / 2; // c = 2.00, NOT 2.50!",
      "explanation": "In C, dividing two integer constants evaluates to an integer first (5 / 2 = 2). The .5 fraction is permanently lost before assignment.",
      "fix": "Promote at least one operand: 5.0f / 2 or (float)5 / 2."
    },
    {
      "id": 3,
      "title": "Modulus Operator with Floating-Point Types",
      "category": "Operators",
      "code": "float rem = 7.5 % 2.0; // COMPILE ERROR!",
      "explanation": "The % operator is strictly defined for integer operands only in C.",
      "fix": "Use fmod(7.5, 2.0) from <math.h> for floating-point remainder."
    },
    {
      "id": 4,
      "title": "Leading Zero Treated as Octal Constant",
      "category": "Constants",
      "code": "int pin = 052; // Evaluates to decimal 42, NOT 52!",
      "explanation": "Any integer literal beginning with '0' is parsed in Base-8 (Octal). 052 = 5*8 + 2 = 42.",
      "fix": "Never prefix decimal numbers with leading zeros: int pin = 52;"
    },
    {
      "id": 5,
      "title": "Reading Uninitialized Local Variables (Garbage Values)",
      "category": "Variables",
      "code": "int sum;\nfor (int i = 1; i <= 5; i++) sum += i; // Starts with random junk!",
      "explanation": "Automatic stack variables are not cleared to 0 by the OS. They hold leftover electric charges from earlier functions.",
      "fix": "Always initialize accumulators before use: int sum = 0;"
    },
    {
      "id": 6,
      "title": "Character Literal 'A' vs String Literal \"A\"",
      "category": "Constants",
      "code": "char ch = \"A\"; // COMPILE WARNING/ERROR!\nchar str[] = 'A'; // COMPILE ERROR!",
      "explanation": "'A' is a 1-byte character constant. \"A\" is a 2-byte null-terminated string array {'A', '\\0'}.",
      "fix": "Use single quotes for single characters: char ch = 'A'; double quotes for strings: char str[] = \"A\";"
    },
    {
      "id": 7,
      "title": "The Dangling Else Ambiguity Trap",
      "category": "Control Flow",
      "code": "if (x > 10)\n    if (y > 5) printf(\"A\");\nelse printf(\"B\"); // Binds to (y > 5), NOT (x > 10)!",
      "explanation": "C grammar strictly binds an 'else' to the closest preceding unmatched 'if' at the same nesting depth, ignoring visual indentation.",
      "fix": "Always wrap nested conditionals in explicit curly braces {}."
    },
    {
      "id": 8,
      "title": "Forgetting break in switch Statements (Fall-Through)",
      "category": "Control Flow",
      "code": "switch (day) {\n    case 1: printf(\"Mon\"); // Missing break!\n    case 2: printf(\"Tue\"); break;\n}",
      "explanation": "Without break, control continues into subsequent cases sequentially until the closing brace.",
      "fix": "Terminate every case block with a break; statement unless fall-through is intentional."
    },
    {
      "id": 9,
      "title": "Floating-Point Numbers or Variables in switch",
      "category": "Control Flow",
      "code": "float temp = 36.5;\nswitch (temp) { ... } // COMPILE ERROR!",
      "explanation": "The switch expression and case values must strictly be integral types (int, char, enum). Floats and runtime variables are illegal.",
      "fix": "Use if-else ladders for floating-point conditions or range checks."
    },
    {
      "id": 10,
      "title": "Leftover Newline '\\n' Buffer Trap after scanf",
      "category": "Input/Output",
      "code": "int age; char grade;\nscanf(\"%d\", &age);\nscanf(\"%c\", &grade); // Consumes '\\n' left by age and skips input!",
      "explanation": "Typing Enter leaves '\\n' in stdin buffer. The subsequent %c reads that newline instead of waiting for a new character.",
      "fix": "Add a leading space in format string: scanf(\" %c\", &grade); to skip whitespace and newlines."
    },
    {
      "id": 11,
      "title": "Missing Address-of Operator '&' in scanf()",
      "category": "Input/Output",
      "code": "int num;\nscanf(\"%d\", num); // CRASH: Segmentation Fault!",
      "explanation": "scanf requires the memory address to store input. Passing num passes uninitialized garbage as an address, causing a memory crash.",
      "fix": "Always pass the address of primitive variables: scanf(\"%d\", &num);"
    },
    {
      "id": 12,
      "title": "Format Specifier Mismatch: %f vs %lf in scanf()",
      "category": "Input/Output",
      "code": "double pi;\nscanf(\"%f\", &pi); // Writes 4 bytes into 8-byte double! Memory corrupted!",
      "explanation": "scanf strictly requires %lf for double (8 bytes) and %f for float (4 bytes). printf accepts both %f and %lf for double.",
      "fix": "Always use %lf for double in scanf."
    },
    {
      "id": 13,
      "title": "Chained Relational Comparisons Trap (18 <= age <= 60)",
      "category": "Operators",
      "code": "if (18 <= age <= 60) // ALWAYS TRUE for age = 80!",
      "explanation": "(18 <= age) evaluates to 0 or 1. Then (0 or 1 <= 60) is evaluated, which is always 1 (True)!",
      "fix": "Use logical AND: if (age >= 18 && age <= 60)"
    },
    {
      "id": 14,
      "title": "Assignment '=' Instead of Equality '==' in Conditions",
      "category": "Operators",
      "code": "if (x = 5) { ... } // Assigns 5 to x, evaluates to True unconditionally!",
      "explanation": "A single '=' is assignment. It stores 5 in x and produces 5 (non-zero), which C treats as True.",
      "fix": "Use == for equality comparison: if (x == 5)."
    },
    {
      "id": 15,
      "title": "Short-Circuit Side Effects in && and ||",
      "category": "Operators",
      "code": "int a = 0, b = 5;\nif (a && ++b) { ... } // b is NOT incremented because a is 0!",
      "explanation": "In logical AND (&&), if the left operand is False, the right operand is completely skipped.",
      "fix": "Perform increments or state modifications on separate statements before the condition."
    },
    {
      "id": 16,
      "title": "Assuming sizeof() Evaluates Runtime Expressions",
      "category": "Operators",
      "code": "int x = 10;\nprintf(\"%zu\\n\", sizeof(x++)); // Prints 4; x is STILL 10!",
      "explanation": "sizeof is a compile-time operator. Expressions inside sizeof are never executed at runtime.",
      "fix": "Do not put expressions with side effects inside sizeof()."
    },
    {
      "id": 17,
      "title": "C99 Modulus Sign Follows Dividend (Numerator)",
      "category": "Operators",
      "code": "int r = -17 % 5; // Yields -2, NOT +3 or +2!",
      "explanation": "In standard C99/C11, the sign of a % b always shares the sign of the left operand a.",
      "fix": "Use abs() or positive modulo formula if a positive remainder is needed."
    },
    {
      "id": 18,
      "title": "Compound Assignment Precedence with Arithmetic",
      "category": "Operators",
      "code": "int x = 5, y = 3;\nx *= y + 2; // Evaluates to x = x * (y + 2) = 25, NOT x * y + 2 = 17!",
      "explanation": "In compound assignment op=, the entire right-hand expression is wrapped in implicit parentheses before operation.",
      "fix": "Be mindful that x *= y + 2 is strictly equivalent to x = x * (y + 2)."
    },
    {
      "id": 19,
      "title": "Preprocessor Macro Expansion Without Parentheses",
      "category": "Preprocessor",
      "code": "#define SQUARE(x) x * x\nint ans = SQUARE(2 + 3); // Expands to 2 + 3 * 2 + 3 = 11, NOT 25!",
      "explanation": "Macros perform raw textual replacement without understanding algebraic operator precedence.",
      "fix": "Wrap macro parameters and the entire body in parentheses: #define SQUARE(x) ((x) * (x))"
    },
    {
      "id": 20,
      "title": "Modifying a Variable Twice in a Single Expression",
      "category": "Undefined Behavior",
      "code": "int x = 5;\nprintf(\"%d %d\\n\", x++, ++x); // UNDEFINED BEHAVIOR!",
      "explanation": "Between sequence points, modifying a scalar variable more than once produces Undefined Behavior (UB) with conflicting compiler outputs.",
      "fix": "Separate increments into separate statements with explicit sequence points."
    }
  ],
  "mustSolveTracks": [
    {
      "track": "A",
      "title": "Fundamentals & Memory Models",
      "problems": [
        {
          "id": "A1",
          "problem": "Write a program to print the memory byte size of char, int, float, and double using the sizeof operator.",
          "level": "Basic"
        },
        {
          "id": "A2",
          "problem": "Demonstrate variable declaration vs initialization and print uninitialized local garbage values to observe stack memory.",
          "level": "Basic"
        },
        {
          "id": "A3",
          "problem": "Define a symbolic constant for TAX_RATE (0.15) using #define and compute total bill for an input price.",
          "level": "Basic"
        }
      ]
    },
    {
      "track": "B",
      "title": "Operators & Expressions",
      "problems": [
        {
          "id": "B1",
          "problem": "Swap two variables using a third temp variable. Then swap WITHOUT using any third variable.",
          "level": "Basic"
        },
        {
          "id": "B2",
          "problem": "Compute both roots of a quadratic equation ax\u00b2 + bx + c = 0 using sqrt() from <math.h>. Handle discriminant < 0.",
          "level": "Intermediate"
        },
        {
          "id": "B3",
          "problem": "Find the maximum of two numbers in a single expression using the conditional (ternary) operator.",
          "level": "Basic"
        }
      ]
    },
    {
      "track": "C",
      "title": "Input / Output Mechanics",
      "problems": [
        {
          "id": "C1",
          "problem": "Read student name, ID, and GPA using scanf and display in neat tabular columns using %10s, %-15d, %5.2f specifiers.",
          "level": "Intermediate"
        },
        {
          "id": "C2",
          "problem": "Read a character using getchar(), convert lowercase to uppercase using toupper(), and print with putchar().",
          "level": "Basic"
        }
      ]
    },
    {
      "track": "D",
      "title": "Branching & Conditions",
      "problems": [
        {
          "id": "D1",
          "problem": "Determine whether an input year is a Leap Year using logical operators && and ||. Handle century years.",
          "level": "Intermediate"
        },
        {
          "id": "D2",
          "problem": "Electricity Bill Calculator with tiered rates: First 100 units @ $1.50, Next 200 units @ $2.50, Above 300 units @ $3.50.",
          "level": "Exam"
        },
        {
          "id": "D3",
          "problem": "Find the largest number among three integers using nested if...else (without ternary or max()).",
          "level": "Basic"
        }
      ]
    },
    {
      "track": "E",
      "title": "Switch Statements",
      "problems": [
        {
          "id": "E1",
          "problem": "Create a 4-function console calculator (+, -, *, /) using switch(op). Handle division by zero.",
          "level": "Intermediate"
        },
        {
          "id": "E2",
          "problem": "Convert grade character ('A', 'B', 'C', 'D', 'F') to remarks using switch with deliberate fall-through for uppercase and lowercase.",
          "level": "Exam"
        }
      ]
    },
    {
      "track": "F",
      "title": "While Loops",
      "problems": [
        {
          "id": "F1",
          "problem": "Calculate the sum and count of digits of an input integer N using a while loop.",
          "level": "Intermediate"
        },
        {
          "id": "F2",
          "problem": "Reverse an integer using a while loop and then check whether it is a Palindrome.",
          "level": "Exam"
        },
        {
          "id": "F3",
          "problem": "Verify whether an integer is an Armstrong number (e.g., 153 = 1\u00b3 + 5\u00b3 + 3\u00b3).",
          "level": "Exam"
        }
      ]
    },
    {
      "track": "G",
      "title": "Do-While Loops",
      "problems": [
        {
          "id": "G1",
          "problem": "Write an input range validator using do-while that keeps prompting until the user enters a number between 1 and 100.",
          "level": "Intermediate"
        },
        {
          "id": "G2",
          "problem": "Interactive banking menu using do-while: [1] Show Balance, [2] Deposit, [3] Withdraw, [0] Exit.",
          "level": "Exam"
        }
      ]
    },
    {
      "track": "H",
      "title": "For Loops & Nested Loops",
      "problems": [
        {
          "id": "H1",
          "problem": "Check whether an input integer N is Prime using the optimized O(\u221aN) loop (for i=2; i*i<=n; i++).",
          "level": "Exam"
        },
        {
          "id": "H2",
          "problem": "Print the first N terms of the Fibonacci sequence using a for loop.",
          "level": "Intermediate"
        },
        {
          "id": "H3",
          "problem": "Print a centered star pyramid of height H using nested loops.",
          "level": "Exam"
        },
        {
          "id": "H4",
          "problem": "Print a formatted 5\u00d75 multiplication table with aligned columns using nested for loops and printf width formatting.",
          "level": "Intermediate"
        }
      ]
    },
    {
      "track": "I",
      "title": "Output Prediction Drills",
      "problems": [
        {
          "id": "I1",
          "problem": "Trace: int x = 5; printf(\"%d %d %d\", x, x++, ++x); \u2014 predict the exact output.",
          "level": "Tricky"
        },
        {
          "id": "I2",
          "problem": "Trace short-circuit: int a = 0, b = 2; if (a && ++b) printf(\"Y\"); else printf(\"N\"); What prints? What is b?",
          "level": "Tricky"
        }
      ]
    },
    {
      "track": "J",
      "title": "Debugging Drills",
      "problems": [
        {
          "id": "J1",
          "problem": "Debug a while loop that runs infinitely: find and fix the missing loop variable update.",
          "level": "Basic"
        },
        {
          "id": "J2",
          "problem": "Fix: missing semicolon in do-while, missing break in switch, and = instead of == in if condition.",
          "level": "Intermediate"
        }
      ]
    }
  ]
};

if (typeof window !== 'undefined') {
  window.HandbookData = HandbookData;
}
