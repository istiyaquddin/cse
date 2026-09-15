# -*- coding: utf-8 -*-
"""
generate_study_blocks.py
Contains the 34 authentic, exam-focused study block records for all syllabus topics:
- objective
- whatIsIt
- keyConcept (3 lines)
- ruleFormula
- exampleCode
- exampleOutput
- commonMistake (trap, why, fix)
- memoryTrick
- practiceQuestion (q, hint)
"""

def get_study_blocks():
    return {
        "ch1_1": {
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
                "fix": "Remember: Storage (SSD) ➔ Loaded to RAM ➔ Loaded into CPU Registers ➔ Executed by ALU."
            },
            "memoryTrick": "F-D-E: Fetch instruction from RAM ➔ Decode with Control Unit ➔ Execute in ALU.",
            "practiceQuestion": {
                "q": "Why does a CPU need internal registers if a computer already has 16 GB of fast RAM?",
                "hint": "Focus on bus latency and CPU clock frequency: RAM access takes ~50 nanoseconds, while registers take under 1 nanosecond (zero-wait-state)."
            }
        },
        "ch1_2": {
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
        "ch1_3": {
            "objective": "Classify software into System Software vs Application Software and identify C's architectural domain.",
            "whatIsIt": "System Software controls and manages hardware resources; Application Software solves specific user productivity, calculation, or entertainment problems.",
            "keyConcept": [
                "System Software (OS kernels, compilers, device drivers) operates at low levels with high hardware privileges.",
                "Application Software (web browsers, media players, word processors) runs on top of the OS via system call APIs.",
                "The C language was engineered specifically as a systems language to build the UNIX Operating System and GCC compilers."
            ],
            "ruleFormula": "Hierarchy:\nUser ➔ Application Software ➔ System Software (OS & Drivers) ➔ Physical Hardware",
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
        "ch1_4": {
            "objective": "Master the 6-stage engineering lifecycle to solve programming problems systematically before coding.",
            "whatIsIt": "The problem-solving methodology is an ordered engineering process to analyze, design, diagram, code, and verify software solutions.",
            "keyConcept": [
                "Rushing directly to write C code without problem analysis is the primary cause of logic bugs and failed exams.",
                "The 6 steps are: Definition ➔ Analysis (Inputs/Outputs) ➔ Algorithm (Plain English) ➔ Flowchart ➔ Coding in C ➔ Testing/Dry Run.",
                "An algorithm must be finite, unambiguous, deterministic, and language-independent."
            ],
            "ruleFormula": "The 6-Step Pipeline:\n1. Define ➔ 2. Analyze (I/O) ➔ 3. Algorithm ➔ 4. Flowchart ➔ 5. C Code ➔ 6. Dry Run & Debug",
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
                "hint": "Step 1: Start ➔ Step 2: Read A, B, C ➔ Step 3: Compute Sum = A + B + C ➔ Step 4: Compute Avg = Sum / 3.0 ➔ Step 5: Display Avg ➔ Step 6: Stop."
            }
        },
        "ch1_5": {
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
        "ch1_6": {
            "objective": "Understand the origin, evolution, and core architectural characteristics of C as a structured middle-level language.",
            "whatIsIt": "C is a general-purpose, procedural, structured programming language developed in 1972 by Dennis Ritchie at Bell Laboratories.",
            "keyConcept": [
                "C is termed a 'Middle-Level Language' because it combines high-level structured syntax with low-level direct memory/hardware control.",
                "C programs are compiled into native machine code (no heavy virtual machine runtime), offering unmatched execution speed.",
                "C is case-sensitive, modular (functions), portable across hardware architectures, and foundational to OS design."
            ],
            "ruleFormula": "C Language Heritage:\nALGOL 60 (1960) ➔ CPL (1963) ➔ BCPL (1967) ➔ B Language (1970) ➔ C Language (1972, Dennis Ritchie)",
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
        "ch1_7": {
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
            "memoryTrick": "Rule of 3: Letters, Digits, Underscores — but Digits NEVER first!",
            "practiceQuestion": {
                "q": "Which of the following are invalid C identifiers: `_count`, `2nd_place`, `total$`, `default`, `my_name`?",
                "hint": "`2nd_place` (starts with digit), `total$` (contains `$`), and `default` (reserved C keyword) are all INVALID."
            }
        },
        "ch1_8": {
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
        "ch1_9": {
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
        "ch1_10": {
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
        "ch1_11": {
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
        "ch1_12": {
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
        "ch1_13": {
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
        "ch2_1": {
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
        "ch2_2": {
            "objective": "Distinguish between prefix (`++x`) and postfix (`x++`) increment/decrement operators and evaluate unary expressions.",
            "whatIsIt": "Unary operators operate on a single operand to modify, negate, inspect size, or extract address.",
            "keyConcept": [
                "Prefix `++x`: Increment first, then use the new updated value in the expression.",
                "Postfix `x++`: Use the current value in the expression first, then increment the variable afterward.",
                "`sizeof` is a compile-time unary operator that returns size in bytes; `&` extracts memory address."
            ],
            "ruleFormula": "Prefix:  y = ++x; ➔ Step 1: x = x + 1; Step 2: y = x;\nPostfix: y = x++; ➔ Step 1: y = x;     Step 2: x = x + 1;",
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
        "ch2_3": {
            "objective": "Evaluate relational comparisons and understand how truth values (1 and 0) are represented in C.",
            "whatIsIt": "Relational operators compare two values and evaluate to boolean integers: 1 for TRUE and 0 for FALSE.",
            "keyConcept": [
                "Relational operators: `==` (equal), `!=` (not equal), `<`, `>`, `<=`, `>=`.",
                "In C, there is no native primitive boolean in C89: ZERO (`0`) is FALSE, and ANY NON-ZERO value is TRUE.",
                "Relational operators have lower precedence than arithmetic operators (`a + b > c` computes `a + b` first)."
            ],
            "ruleFormula": "Truth Values in C:\nCondition True  ➔ Evaluates to 1\nCondition False ➔ Evaluates to 0\nCondition Test  ➔ Any non-zero integer is treated as True; exactly 0 is False",
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
        "ch2_4": {
            "objective": "Master logical operators (&&, ||, !) and the critical exam mechanism of short-circuit evaluation.",
            "whatIsIt": "Logical operators combine relational expressions to perform boolean logic and decision making.",
            "keyConcept": [
                "`&&` (Logical AND): True only if BOTH operands are non-zero.",
                "`||` (Logical OR): True if AT LEAST ONE operand is non-zero.",
                "Short-circuit rule: in `A && B`, if A is false (0), B is NEVER evaluated. In `A || B`, if A is true (1), B is NEVER evaluated."
            ],
            "ruleFormula": "Short-Circuit Mechanics:\n0 && (anything) ➔ Skips right-hand expression entirely!\n1 || (anything) ➔ Skips right-hand expression entirely!",
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
        "ch2_5": {
            "objective": "Master simple assignment, compound assignment operators, and right-to-left associativity.",
            "whatIsIt": "Assignment operators store the value of an expression into a writable memory location (l-value).",
            "keyConcept": [
                "Simple assignment `=`: evaluates right-hand expression and copies value into left-hand variable.",
                "Compound operators (`+=`, `-=`, `*=`, `/=`, `%=`): shorthand for `x = x OP (expr)`.",
                "Assignment has Right-to-Left associativity: `a = b = c = 10;` assigns 10 to c, then b, then a."
            ],
            "ruleFormula": "Compound Assignment Rule:\nvar OP= expr;  is strictly equivalent to:  var = var OP (expr);\nExample: x *= y + 2; ➔ x = x * (y + 2); (Parenthesized!)",
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
        "ch2_6": {
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
        "ch2_7": {
            "objective": "Memorize the 15-level operator precedence hierarchy and associativity rules to evaluate complex C expressions.",
            "whatIsIt": "Precedence determines which operator executes first in an expression; Associativity determines direction (left-to-right or right-to-left) when precedence is equal.",
            "keyConcept": [
                "Parentheses `()` always have highest precedence (Level 1).",
                "Arithmetic (`*`, `/`, `%` then `+`, `-`) beats Relational (`<`, `>`), which beats Equality (`==`, `!=`), which beats Logical (`&&`, `||`).",
                "Assignment (`=`, `+=`) and Ternary (`?:`) have near-lowest precedence and associate RIGHT-TO-LEFT."
            ],
            "ruleFormula": "Precedence Summary Hierarchy:\n1. () [] -> .  ➔  2. Unary (++ -- ! sizeof) [R->L]  ➔  3. * / %  ➔  4. + -  ➔\n5. < <= > >=  ➔  6. == !=  ➔  7. &&  ➔  8. ||  ➔  9. ?: [R->L]  ➔  10. = OP= [R->L]",
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
        "ch2_8": {
            "objective": "Classify and evaluate arithmetic, relational, and mixed-mode expressions according to C evaluation standards.",
            "whatIsIt": "An expression is any legal combination of operands, operators, and function calls that evaluates to a single scalar value.",
            "keyConcept": [
                "Arithmetic expressions return numeric values (`a + b * 2`).",
                "Relational/Logical expressions return truth values (integer 1 or 0).",
                "In C, expressions can produce 'side-effects' when operators like `++`, `--`, or `=` modify variable states during evaluation."
            ],
            "ruleFormula": "Operand Hierarchy in Expressions:\nchar/short ➔ int ➔ unsigned int ➔ long ➔ float ➔ double ➔ long double",
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
        "ch2_9": {
            "objective": "Understand implicit type promotion (widening) and explicit type casting (narrowing) rules.",
            "whatIsIt": "Type conversion converts a variable or value from one data type into another either automatically (implicit) or manually (explicit casting).",
            "keyConcept": [
                "Implicit conversion: lower types automatically promote to higher types without data loss (e.g. `int + float ➔ float`).",
                "Explicit cast syntax: `(target_type)expression` forcefully converts types (e.g. `(float)5 / 2 ➔ 2.5`).",
                "Narrowing conversions (e.g. `(int)5.85`) truncate the decimal portion entirely, returning `5`."
            ],
            "ruleFormula": "Explicit Casting Syntax:  (type_name) expression\nConversion Traps:\n5 / 2        = 2     (int / int)\n5.0 / 2      = 2.5   (double / int ➔ double)\n(float)5 / 2 = 2.5   (float / int ➔ float)\n(int)5.8     = 5     (truncated)",
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
        "ch2_10": {
            "objective": "Identify essential C standard library header files and functions (`<math.h>`, `<ctype.h>`, `<stdlib.h>`).",
            "whatIsIt": "Library functions are built-in, pre-compiled functions provided by the C standard library to perform mathematical, character, and utility operations.",
            "keyConcept": [
                "`<math.h>`: `sqrt(x)`, `pow(base, exp)`, `abs(x)`, `ceil(x)`, `floor(x)`. Math functions typically take and return `double`.",
                "`<ctype.h>`: character classification and conversion: `isalpha(c)`, `isdigit(c)`, `toupper(c)`, `tolower(c)`.",
                "`<stdlib.h>`: memory allocation, process control (`exit(0)`), and pseudo-random numbers (`rand()`)."
            ],
            "ruleFormula": "Common Library Headers:\n#include <math.h>   ➔ sqrt(), pow(), fabs(), ceil(), floor()\n#include <ctype.h>  ➔ isdigit(), isalpha(), toupper(), tolower()\n#include <stdlib.h> ➔ abs(), rand(), exit()",
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
        "ch2_11": {
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
        "ch2_12": {
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
        "ch2_13": {
            "objective": "Master formatted output formatting flags (width, precision, alignment) with `printf()`, `putchar()`, and `puts()`.",
            "whatIsIt": "`printf()` writes formatted text to stdout; `putchar()` outputs a single char; `puts()` outputs a string followed automatically by a newline `\\n`.",
            "keyConcept": [
                "`%[flags][width][.precision]specifier`: e.g. `%8.2f` reserves 8 column spaces with 2 decimal digits.",
                "Minus sign flag `%-10s`: left-aligns text within the reserved width.",
                "`puts(str)` automatically appends a trailing newline `\\n`; `putchar(c)` writes exactly one char without newline."
            ],
            "ruleFormula": "Formatting Specifiers Cheat Sheet:\n%d (int) | %f (float) | %lf (double) | %c (char) | %s (string) | %p (pointer)\n%05d ➔ Zero-padded 5 digits (00042) | %-10s ➔ Left-aligned 10 spaces",
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
        "ch3_1": {
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
        "ch3_2": {
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
        "ch3_3": {
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
        "ch3_4": {
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
        "ch3_5": {
            "objective": "Master the post-test `do...while` loop for exit-controlled iteration, menus, and input validators.",
            "whatIsIt": "A `do...while` loop is an exit-controlled loop that executes its body FIRST before testing the condition.",
            "keyConcept": [
                "GUARANTEED to execute at least ONCE, even if the condition is false initially.",
                "Best used for interactive user input validation (prompting until a valid range is entered) and console menus.",
                "CRITICAL SYNTAX REQUIREMENT: must terminate with a trailing semicolon `;` after `while(condition);`."
            ],
            "ruleFormula": "Syntax:\ndo {\n    // Statements execute at least ONCE\n} while (condition);  // <--- Mandatory trailing semicolon!",
            "exampleCode": "#include <stdio.h>\n\nint main(void) {\n    int count = 10;\n    do {\n        printf(\"Runs at least once! Count = %d\\n\", count);\n        count++;\n    } while (count < 5); // 11 < 5 is False ➔ Exits\n    return 0;\n}",
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
        "ch3_6": {
            "objective": "Master the counter-controlled `for` loop, its 3-expression header lifecycle, and nested loop iteration.",
            "whatIsIt": "A `for` loop is a compact, entry-controlled loop that combines initialization, condition testing, and updating into a single header.",
            "keyConcept": [
                "Lifecycle: 1. Initialize (once) ➔ 2. Check condition ➔ 3. Execute body ➔ 4. Update ➔ 5. Repeat from Step 2.",
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
            "memoryTrick": "Init (Once) ➔ Check ➔ Do Body ➔ Update ➔ Check again.",
            "practiceQuestion": {
                "q": "In `for (int i = 0; i < 10; i++)`, does `i++` execute before or after the loop body?",
                "hint": "After! The update expression executes at the END of each iteration, immediately before testing the condition again."
            }
        },
        "ch3_7": {
            "objective": "Apply the 3-second loop selection rule to pick between `for`, `while`, and `do...while` in exam coding questions.",
            "whatIsIt": "A systematic decision strategy to select the cleanest, most idiomatic loop structure for any given problem.",
            "keyConcept": [
                "Rule 1: Iterations known in advance (counting, fixed range 1..N) ➔ Use `for`.",
                "Rule 2: Iterations depend on runtime state, may execute zero times ➔ Use `while`.",
                "Rule 3: Must execute at least once before testing condition (menu, input validator) ➔ Use `do...while`."
            ],
            "ruleFormula": "The 3-Second Loop Decision Tree:\nDo I need repetition? ➔ YES\nMust it execute at least once? ➔ YES ➔ do...while\n                            ➔ NO  ➔ Iteration count known? ➔ YES ➔ for\n                                                           ➔ NO  ➔ while",
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
        "ch3_8": {
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
    }
