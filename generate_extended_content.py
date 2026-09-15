# -*- coding: utf-8 -*-
"""
generate_extended_content.py
Extracts and builds extended data layers from the handbook master notes and roadmap:
1. Topic Practice Problems (Levels 1 to 5) for all 34 syllabus topics
2. Topic Comparison Tables
3. Complete Output Prediction Lab (12 trace questions)
4. Find the Bug — Debugging Lab (10 bug hunts)
5. Flowchart Problem Bank (15 core algorithms + 6 ANSI symbols)
6. 26 Core Algorithmic Patterns
7. Short & Long Theory Question Bank
8. Multi-Tiered Quick Revision System (1-Day, 3-Hour, 1-Hour, 15-Minute)
9. Top 20 Midterm Exam Traps
10. 30 Comprehensive Scored Diagnostic MCQs
11. 35+ Must-Solve Practice Bank Tracks A through J
"""

import re
import os

def get_topic_practice_problems():
    """
    Parses handbook/TOPIC_WISE_PRACTICE_PROBLEM_ROADMAP.md and maps
    Level 1 to Level 5 practice problems to each of the 34 syllabus topic IDs.
    """
    roadmap_path = os.path.join(os.path.dirname(__file__), 'handbook', 'TOPIC_WISE_PRACTICE_PROBLEM_ROADMAP.md')
    if not os.path.exists(roadmap_path):
        return {}

    with open(roadmap_path, 'r', encoding='utf-8') as f:
        content = f.read()

    # Split into topic sections by "# <number>. "
    topic_blocks = re.split(r'\n# (\d+)\.\s+([^\n]+)', content)
    
    # Mapping from roadmap topic numbers (1 to 36) to syllabus IDs (ch1_1 to ch3_8)
    topic_num_to_id = {
        1: "ch1_1",   # Basic Organization of Computer
        2: "ch1_2",   # Definition of Software
        3: "ch1_3",   # Classification of Software
        4: "ch1_4",   # Problem Solving Steps
        5: "ch1_5",   # Flowcharts
        6: "ch1_6",   # Introduction to C — History & Characteristics
        7: "ch1_7",   # Identifiers
        8: "ch1_8",   # Keywords
        9: "ch1_9",   # Data Types
        10: "ch1_10", # Constants
        11: "ch1_11", # Variables
        12: "ch1_12", # Statements
        13: "ch1_13", # Symbolic Constants
        14: "ch2_1",  # Arithmetic Operators
        15: "ch2_2",  # Unary Operators
        16: "ch2_3",  # Relational Operators
        17: "ch2_4",  # Logical Operators
        18: "ch2_5",  # Assignment Operators
        19: "ch2_6",  # Conditional Operator
        20: "ch2_7",  # Operator Precedence & Associativity
        21: "ch2_8",  # Expressions
        22: "ch2_9",  # Type Conversions
        23: "ch2_10", # Library Functions
        24: "ch2_11", # scanf() & Formatted Input
        25: "ch2_13", # printf() & Formatted Output
        26: "ch2_12", # getchar() & putchar()
        27: "ch2_12", # gets() & puts() (also mapped to ch2_12)
        28: "ch2_13", # Formatted I/O Modifiers
        29: "ch3_1",  # if Statement
        30: "ch3_1",  # if-else Statement
        31: "ch3_2",  # Nested if & Dangling Else
        32: "ch3_3",  # switch Statement
        33: "ch3_4",  # while Loop
        34: "ch3_5",  # do-while Loop
        35: "ch3_6",  # for Loop
        36: "ch3_8"   # Nested Loops & Pattern Printing -> maps to ch3_8
    }

    diff_class_map = {
        "LEVEL 1": "diff-very-basic",
        "LEVEL 2": "diff-basic",
        "LEVEL 3": "diff-intermediate",
        "LEVEL 4": "diff-exam",
        "LEVEL 5": "diff-challenge"
    }

    diff_label_map = {
        "LEVEL 1": "🟢 Level 1: Very Basic",
        "LEVEL 2": "🟢 Level 2: Basic",
        "LEVEL 3": "🟡 Level 3: Intermediate",
        "LEVEL 4": "🔥 Level 4: Exam Level",
        "LEVEL 5": "🔴 Level 5: Challenge"
    }

    result = {}

    for i in range(1, len(topic_blocks), 3):
        t_num = int(topic_blocks[i])
        t_title = topic_blocks[i+1].strip()
        t_body = topic_blocks[i+2]
        
        target_id = topic_num_to_id.get(t_num)
        if not target_id:
            continue

        if target_id not in result:
            result[target_id] = []

        # Split into level blocks
        levels = re.split(r'## \d+\.\s+([^\n]+)', t_body)
        for j in range(1, len(levels), 2):
            lvl_header = levels[j].strip()
            lvl_body = levels[j+1]
            
            # Find level key
            lvl_key = "LEVEL 1"
            for k in diff_class_map:
                if k in lvl_header:
                    lvl_key = k
                    break

            # Flexible problem matcher supporting both **Problem X.Y:** and **Problem X.Y: Title**
            prob_matches = re.finditer(r'-\s+\*\*Problem\s+([\d\.]+)(?::\s*|\s*:?\s*)([^\*]*)\*\*\s*([^\n]+(?:\n(?!\s*-\s+\*\*)[^\n]+)*)?', lvl_body)
            for m in prob_matches:
                pid = m.group(1)
                title = m.group(2).strip()
                rest = (m.group(3) or '').strip()
                clean_text = ' '.join(f"{title} {rest}".split()) if title else ' '.join(rest.split())
                if clean_text:
                    result[target_id].append({
                        "problemId": pid,
                        "level": diff_label_map.get(lvl_key, lvl_header),
                        "levelClass": diff_class_map.get(lvl_key, "diff-basic"),
                        "statement": clean_text
                    })

    # Ensure Topic 33 (ch3_7: Loop Decision Matrix) has comprehensive decision problems
    result["ch3_7"] = [
        {
            "problemId": "33.1",
            "level": "🟢 Level 1: Very Basic",
            "levelClass": "diff-very-basic",
            "statement": "State the 3-Second Loop Decision Rule: which loop should you select for (a) looping through array indices 0 to N-1, (b) reading characters until EOF or newline, (c) displaying an ATM options menu?"
        },
        {
            "problemId": "33.2",
            "level": "🟢 Level 2: Basic",
            "levelClass": "diff-basic",
            "statement": "Convert a given for loop: 'for (int i = 1; i <= 10; i += 2) printf(\"%d \", i);' into an exactly equivalent while loop and do-while loop."
        },
        {
            "problemId": "33.3",
            "level": "🟡 Level 3: Intermediate",
            "levelClass": "diff-intermediate",
            "statement": "Analyze what happens when the initial condition is FALSE (e.g., i = 10; i < 5). Contrast how while behaves vs do-while with concrete code output."
        },
        {
            "problemId": "33.4",
            "level": "🔥 Level 4: Exam Level",
            "levelClass": "diff-exam",
            "statement": "Explain why while is preferred over for when validating user input: write an input sentinel loop reading positive integers until -1 is entered."
        },
        {
            "problemId": "33.5",
            "level": "🔴 Level 5: Challenge",
            "levelClass": "diff-challenge",
            "statement": "Identify the subtle bug in converting 'do { ... if (x == 3) continue; ... } while (cond);' into a while loop. Explain how continue impacts the loop update step."
        }
    ]

    return result

def get_comparison_tables():
    """
    Returns rich comparison tables for key syllabus topics.
    """
    return {
        "ch1_2": """
<div class="doc-table-wrapper">
<table class="doc-table">
<thead><tr><th>Parameter</th><th>Hardware</th><th>Software</th></tr></thead>
<tbody>
<tr><td><strong>Nature</strong></td><td>Physical electronic circuits and components</td><td>Logical sets of programs, opcodes, and data</td></tr>
<tr><td><strong>Manufacturing</strong></td><td>Fabricated in semiconductor silicon foundries</td><td>Engineered and written by programmers</td></tr>
<tr><td><strong>Wear and Tear</strong></td><td>Subject to physical, thermal, and mechanical fatigue</td><td>Does not wear out physically; degrades through logic rot/bugs</td></tr>
<tr><td><strong>Modification</strong></td><td>Difficult or impossible after fabrication</td><td>Easily updated, patched, and recompiled</td></tr>
<tr><td><strong>Execution</strong></td><td>The physical medium that switches electrical states</td><td>The instructions guiding which states to switch</td></tr>
</tbody>
</table>
</div>
""",
        "ch1_3": """
<div class="doc-table-wrapper">
<table class="doc-table">
<thead><tr><th>Feature</th><th>System Software</th><th>Application Software</th></tr></thead>
<tbody>
<tr><td><strong>Primary Function</strong></td><td>Manages hardware, memory, and execution runtime</td><td>Solves specific user, productivity, or business tasks</td></tr>
<tr><td><strong>Hardware Access</strong></td><td>Direct access to CPU registers, interrupts, and I/O ports</td><td>Restricted access via operating system system calls</td></tr>
<tr><td><strong>Examples</strong></td><td>Operating Systems (Linux, Windows), Compilers (GCC), Drivers</td><td>Web browsers, VS Code, Spreadsheets, Games</td></tr>
<tr><td><strong>Language Used</strong></td><td>Low/Middle-level languages (C, C++, Assembly)</td><td>High-level languages (C, Python, Java, JavaScript)</td></tr>
<tr><td><strong>Execution Mode</strong></td><td>Kernel mode / Privileged supervisor mode</td><td>User space / Unprivileged mode</td></tr>
</tbody>
</table>
</div>
""",
        "ch2_2": """
<div class="doc-table-wrapper">
<table class="doc-table">
<thead><tr><th>Feature</th><th>Prefix (`++x` / `--x`)</th><th>Postfix (`x++` / `x--`)</th></tr></thead>
<tbody>
<tr><td><strong>Operation Order</strong></td><td>1. Increment/decrement value in RAM<br>2. Return new value to expression</td><td>1. Return current value to expression<br>2. Increment/decrement value in RAM afterward</td></tr>
<tr><td><strong>Value Returned</strong></td><td>The <em>updated</em> value (e.g., 6)</td><td>The <em>original</em> value (e.g., 5)</td></tr>
<tr><td><strong>Precedence</strong></td><td>Rank 2 (Unary, Right-to-Left associativity)</td><td>Rank 1 (Primary, Left-to-Right associativity)</td></tr>
<tr><td><strong>Code Example</strong></td><td><code>int x=5; int y=++x; // x=6, y=6</code></td><td><code>int x=5; int y=x++; // x=6, y=5</code></td></tr>
</tbody>
</table>
</div>
""",
        "ch3_3": """
<div class="doc-table-wrapper">
<table class="doc-table">
<thead><tr><th>Feature</th><th>`if-else` Ladder</th><th>`switch` Statement</th></tr></thead>
<tbody>
<tr><td><strong>Expression Types</strong></td><td>Any boolean expression (float, integer, relational, logical)</td><td>Strictly integral types (<code>int</code>, <code>char</code>, <code>enum</code>)</td></tr>
<tr><td><strong>Condition Testing</strong></td><td>Can evaluate ranges (e.g., <code>score &gt;= 80</code>) and compound logic</td><td>Only tests for exact equality with constants (<code>case 1:</code>)</td></tr>
<tr><td><strong>Execution Speed</strong></td><td>Linear scan: $O(N)$ comparisons top to bottom</td><td>Jump table / Branch table: often $O(1)$ fast jump in GCC</td></tr>
<tr><td><strong>Fall-Through</strong></td><td>Impossible — mutually exclusive branches</td><td>Default behavior unless stopped with <code>break;</code></td></tr>
<tr><td><strong>Float Support</strong></td><td>Supported (<code>if (temp &gt; 37.5)</code>)</td><td><strong>ILLEGAL!</strong> Compile error if float is passed</td></tr>
</tbody>
</table>
</div>
""",
        "ch3_7": """
<div class="doc-table-wrapper">
<table class="doc-table">
<thead><tr><th>Comparison Feature</th><th>`for` Loop</th><th>`while` Loop</th><th>`do...while` Loop</th></tr></thead>
<tbody>
<tr><td><strong>Control Type</strong></td><td>Entry-Controlled (Pre-test)</td><td>Entry-Controlled (Pre-test)</td><td>Exit-Controlled (Post-test)</td></tr>
<tr><td><strong>Condition Check</strong></td><td>At the beginning of each iteration</td><td>At the beginning of each iteration</td><td>At the bottom of each iteration</td></tr>
<tr><td><strong>Minimum Executions</strong></td><td><strong>0 times</strong> (if condition initially false)</td><td><strong>0 times</strong> (if condition initially false)</td><td><strong>Guaranteed 1 time</strong></td></tr>
<tr><td><strong>Syntax Layout</strong></td><td><code>for(init; cond; update)</code></td><td><code>while(cond) { ... }</code></td><td><code>do { ... } while(cond);</code></td></tr>
<tr><td><strong>Trailing Semicolon</strong></td><td>No semicolon after header</td><td>No semicolon after header</td><td><strong>MANDATORY:</strong> <code>while(cond);</code></td></tr>
<tr><td><strong>Best Used For</strong></td><td>Known count of repetitions (1..N, Arrays)</td><td>Indefinite iterations (reading until 0, digit extraction)</td><td>Interactive menus, input range validation</td></tr>
</tbody>
</table>
</div>
"""
    }

def get_output_prediction_lab():
    """
    Returns 12 comprehensive output prediction trace questions with step-by-step trace rationale.
    """
    return [
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
    ]

def get_debugging_lab():
    """
    Returns 10 classic university exam debugging exercises with broken code, root cause, and verified fixes.
    """
    return [
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
    ]

def get_flowchart_bank():
    """
    Returns 15 classic midterm algorithms with ANSI flowchart specs, step-by-step logic, and compilable C code.
    """
    symbols = [
        { "shape": "Oval / Rounded Rectangle", "name": "Terminal", "purpose": "Start and Stop of program flow", "cEquivalent": "main() { ... return 0; }" },
        { "shape": "Parallelogram", "name": "Input / Output", "purpose": "Read user input or display output results", "cEquivalent": "scanf(), printf(), getchar(), puts()" },
        { "shape": "Rectangle", "name": "Process", "purpose": "Arithmetic calculations, assignments, data transfer", "cEquivalent": "sum = a + b; i++; avg = total / 3.0;" },
        { "shape": "Diamond (Rhombus)", "name": "Decision", "purpose": "Conditional test with TRUE/YES and FALSE/NO branches", "cEquivalent": "if (n % 2 == 0), while (i <= 10)" },
        { "shape": "Flowline Arrow", "name": "Flow Direction", "purpose": "Indicates sequential direction of control execution", "cEquivalent": "Next sequential instruction" },
        { "shape": "Circle", "name": "Connector", "purpose": "Joins flowlines without confusing intersections", "cEquivalent": "Label / Loopback point" }
    ]

    algorithms = [
        {
            "id": 1,
            "title": "Sum of Two Numbers",
            "category": "Sequential Arithmetic",
            "flow": "START ➔ Read A, B ➔ Sum = A + B ➔ Print Sum ➔ STOP",
            "algorithmSteps": ["Step 1: Start", "Step 2: Read values of A and B", "Step 3: Calculate Sum = A + B", "Step 4: Display Sum", "Step 5: Stop"],
            "cCode": "#include <stdio.h>\nint main(void) {\n    int a, b, sum;\n    if (scanf(\"%d %d\", &a, &b) == 2) {\n        sum = a + b;\n        printf(\"Sum = %d\\n\", sum);\n    }\n    return 0;\n}"
        },
        {
            "id": 2,
            "title": "Average of Three Numbers",
            "category": "Sequential Arithmetic",
            "flow": "START ➔ Read A, B, C ➔ Avg = (A + B + C) / 3.0 ➔ Print Avg ➔ STOP",
            "algorithmSteps": ["Step 1: Start", "Step 2: Read numbers A, B, C", "Step 3: Calculate Avg = (A + B + C) / 3.0", "Step 4: Print Avg with 2 decimals", "Step 5: Stop"],
            "cCode": "#include <stdio.h>\nint main(void) {\n    float a, b, c, avg;\n    scanf(\"%f %f %f\", &a, &b, &c);\n    avg = (a + b + c) / 3.0f;\n    printf(\"Average = %.2f\\n\", avg);\n    return 0;\n}"
        },
        {
            "id": 3,
            "title": "Even or Odd Integer Check",
            "category": "Conditional Branching",
            "flow": "START ➔ Read N ➔ [N % 2 == 0?] ➔ YES: Print 'EVEN' | NO: Print 'ODD' ➔ STOP",
            "algorithmSteps": ["Step 1: Start", "Step 2: Read integer N", "Step 3: If N % 2 == 0, print 'EVEN', else print 'ODD'", "Step 4: Stop"],
            "cCode": "#include <stdio.h>\nint main(void) {\n    int n;\n    scanf(\"%d\", &n);\n    if (n % 2 == 0) printf(\"%d is EVEN\\n\", n);\n    else printf(\"%d is ODD\\n\", n);\n    return 0;\n}"
        },
        {
            "id": 4,
            "title": "Positive, Negative, or Zero Check",
            "category": "Multi-Way Branching",
            "flow": "START ➔ Read N ➔ [N > 0?] ➔ YES: 'Positive' | NO: [N < 0?] ➔ YES: 'Negative' | NO: 'Zero' ➔ STOP",
            "algorithmSteps": ["Step 1: Start", "Step 2: Read N", "Step 3: If N > 0 print 'Positive'; else if N < 0 print 'Negative'; else print 'Zero'", "Step 4: Stop"],
            "cCode": "#include <stdio.h>\nint main(void) {\n    int n;\n    scanf(\"%d\", &n);\n    if (n > 0) printf(\"Positive\\n\");\n    else if (n < 0) printf(\"Negative\\n\");\n    else printf(\"Zero\\n\");\n    return 0;\n}"
        },
        {
            "id": 5,
            "title": "Largest of Two Numbers",
            "category": "Conditional Branching",
            "flow": "START ➔ Read A, B ➔ [A > B?] ➔ YES: Max = A | NO: Max = B ➔ Print Max ➔ STOP",
            "algorithmSteps": ["Step 1: Start", "Step 2: Read A, B", "Step 3: If A > B then Max = A else Max = B", "Step 4: Print Max", "Step 5: Stop"],
            "cCode": "#include <stdio.h>\nint main(void) {\n    int a, b;\n    scanf(\"%d %d\", &a, &b);\n    printf(\"Max = %d\\n\", (a > b) ? a : b);\n    return 0;\n}"
        },
        {
            "id": 6,
            "title": "Largest of Three Numbers",
            "category": "Multi-Way Branching",
            "flow": "START ➔ Read A, B, C ➔ [A >= B && A >= C?] ➔ YES: Max=A | NO: [B >= C?] ➔ YES: Max=B | NO: Max=C ➔ Print Max ➔ STOP",
            "algorithmSteps": ["Step 1: Start", "Step 2: Read A, B, C", "Step 3: If A >= B and A >= C, Max = A", "Step 4: Else if B >= C, Max = B; else Max = C", "Step 5: Print Max", "Step 6: Stop"],
            "cCode": "#include <stdio.h>\nint main(void) {\n    int a, b, c, max;\n    scanf(\"%d %d %d\", &a, &b, &c);\n    if (a >= b && a >= c) max = a;\n    else if (b >= c) max = b;\n    else max = c;\n    printf(\"Largest = %d\\n\", max);\n    return 0;\n}"
        },
        {
            "id": 7,
            "title": "University Student Grade Classification",
            "category": "Decision Ladder",
            "flow": "START ➔ Read Marks ➔ [Marks >= 80?] ➔ A+ | [>= 70?] ➔ A | [>= 60?] ➔ B | [>= 50?] ➔ C | else ➔ Fail ➔ Print Grade ➔ STOP",
            "algorithmSteps": ["Step 1: Start", "Step 2: Read student marks (0-100)", "Step 3: Evaluate ladder >= 80 (A+), >= 70 (A), >= 60 (B), >= 50 (C), else (F)", "Step 4: Display Grade", "Step 5: Stop"],
            "cCode": "#include <stdio.h>\nint main(void) {\n    float m;\n    scanf(\"%f\", &m);\n    if (m >= 80) printf(\"Grade: A+\\n\");\n    else if (m >= 70) printf(\"Grade: A\\n\");\n    else if (m >= 60) printf(\"Grade: B\\n\");\n    else if (m >= 50) printf(\"Grade: C\\n\");\n    else printf(\"Grade: F (Fail)\\n\");\n    return 0;\n}"
        },
        {
            "id": 8,
            "title": "Leap Year Verification",
            "category": "Logical Operators",
            "flow": "START ➔ Read Year ➔ [(Y % 400 == 0) || (Y % 4 == 0 && Y % 100 != 0)?] ➔ YES: 'Leap Year' | NO: 'Not Leap Year' ➔ STOP",
            "algorithmSteps": ["Step 1: Start", "Step 2: Read integer year Y", "Step 3: Check condition: (Y%400==0) OR (Y%4==0 AND Y%100!=0)", "Step 4: If True print 'Leap Year', else 'Not Leap Year'", "Step 5: Stop"],
            "cCode": "#include <stdio.h>\nint main(void) {\n    int y;\n    scanf(\"%d\", &y);\n    if ((y % 400 == 0) || (y % 4 == 0 && y % 100 != 0)) printf(\"%d is LEAP YEAR\\n\", y);\n    else printf(\"%d is NOT a leap year\\n\", y);\n    return 0;\n}"
        },
        {
            "id": 9,
            "title": "Four-Function Calculator (switch)",
            "category": "Switch Selection",
            "flow": "START ➔ Read A, B, Op ➔ switch(Op) ➔ '+': A+B | '-': A-B | '*': A*B | '/': [B!=0? A/B : Error] ➔ Print ➔ STOP",
            "algorithmSteps": ["Step 1: Start", "Step 2: Read numbers A, B and operator character Op", "Step 3: Match operator using switch", "Step 4: Print evaluated arithmetic result", "Step 5: Stop"],
            "cCode": "#include <stdio.h>\nint main(void) {\n    double a, b;\n    char op;\n    scanf(\"%lf %c %lf\", &a, &op, &b);\n    switch(op) {\n        case '+': printf(\"%.2f\\n\", a + b); break;\n        case '-': printf(\"%.2f\\n\", a - b); break;\n        case '*': printf(\"%.2f\\n\", a * b); break;\n        case '/': if (b != 0) printf(\"%.2f\\n\", a / b); else printf(\"Divide by zero!\\n\"); break;\n        default: printf(\"Invalid operator\\n\");\n    }\n    return 0;\n}"
        },
        {
            "id": 10,
            "title": "Sum of Natural Numbers from 1 to N",
            "category": "Loop Iteration",
            "flow": "START ➔ Read N ➔ Init i = 1, sum = 0 ➔ [i <= N?] ➔ YES: sum += i, i++ loop ➔ NO: Print sum ➔ STOP",
            "algorithmSteps": ["Step 1: Start", "Step 2: Read N", "Step 3: Set sum = 0, i = 1", "Step 4: While i <= N, add i to sum and increment i", "Step 5: Print sum", "Step 6: Stop"],
            "cCode": "#include <stdio.h>\nint main(void) {\n    int n, sum = 0;\n    scanf(\"%d\", &n);\n    for (int i = 1; i <= n; i++) sum += i;\n    printf(\"Sum = %d\\n\", sum);\n    return 0;\n}"
        },
        {
            "id": 11,
            "title": "Factorial of an Integer N",
            "category": "Loop Accumulator",
            "flow": "START ➔ Read N ➔ Init fact = 1, i = 1 ➔ [i <= N?] ➔ YES: fact *= i, i++ loop ➔ NO: Print fact ➔ STOP",
            "algorithmSteps": ["Step 1: Start", "Step 2: Read integer N", "Step 3: Set fact = 1, i = 1", "Step 4: While i <= N, multiply fact by i, increment i", "Step 5: Print fact", "Step 6: Stop"],
            "cCode": "#include <stdio.h>\nint main(void) {\n    int n;\n    long long fact = 1;\n    scanf(\"%d\", &n);\n    for (int i = 1; i <= n; i++) fact *= i;\n    printf(\"%d! = %lld\\n\", n, fact);\n    return 0;\n}"
        },
        {
            "id": 12,
            "title": "Reverse an Integer",
            "category": "Digit Extraction",
            "flow": "START ➔ Read N ➔ Init rev = 0 ➔ [N > 0?] ➔ YES: d = N % 10, rev = rev*10 + d, N /= 10 loop ➔ NO: Print rev ➔ STOP",
            "algorithmSteps": ["Step 1: Start", "Step 2: Read N", "Step 3: Set rev = 0", "Step 4: While N > 0: extract digit d = N % 10; append rev = rev*10 + d; drop digit N = N / 10", "Step 5: Print rev", "Step 6: Stop"],
            "cCode": "#include <stdio.h>\nint main(void) {\n    int n, rev = 0;\n    scanf(\"%d\", &n);\n    while (n > 0) {\n        rev = (rev * 10) + (n % 10);\n        n /= 10;\n    }\n    printf(\"Reversed = %d\\n\", rev);\n    return 0;\n}"
        },
        {
            "id": 13,
            "title": "Palindrome Number Verification",
            "category": "Digit Extraction & Comparison",
            "flow": "START ➔ Read N ➔ Copy temp = N, rev = 0 ➔ Reverse loop ➔ [temp == rev?] ➔ YES: 'Palindrome' | NO: 'Not Palindrome' ➔ STOP",
            "algorithmSteps": ["Step 1: Start", "Step 2: Read N", "Step 3: Copy temp = N, rev = 0", "Step 4: Reverse N using digit extraction loop", "Step 5: If temp == rev print 'Palindrome', else 'Not Palindrome'", "Step 6: Stop"],
            "cCode": "#include <stdio.h>\nint main(void) {\n    int n, temp, rev = 0;\n    scanf(\"%d\", &n);\n    temp = n;\n    while (n > 0) {\n        rev = (rev * 10) + (n % 10);\n        n /= 10;\n    }\n    if (temp == rev) printf(\"%d is a PALINDROME\\n\", temp);\n    else printf(\"%d is NOT a palindrome\\n\", temp);\n    return 0;\n}"
        },
        {
            "id": 14,
            "title": "Prime Number Check (Optimized O(√N))",
            "category": "Loop Search & Sieve",
            "flow": "START ➔ Read N ➔ Init isPrime = (N > 1), i = 2 ➔ [i*i <= N?] ➔ YES: [N % i == 0?] ➔ YES: isPrime=0, break | NO: i++ loop ➔ Print ➔ STOP",
            "algorithmSteps": ["Step 1: Start", "Step 2: Read N", "Step 3: If N <= 1, set isPrime = 0, else isPrime = 1", "Step 4: For i = 2 to √N: if N % i == 0, set isPrime = 0 and break", "Step 5: If isPrime == 1 print 'PRIME' else 'COMPOSITE'", "Step 6: Stop"],
            "cCode": "#include <stdio.h>\nint main(void) {\n    int n, isPrime = 1;\n    scanf(\"%d\", &n);\n    if (n <= 1) isPrime = 0;\n    for (int i = 2; i * i <= n; i++) {\n        if (n % i == 0) { isPrime = 0; break; }\n    }\n    printf(\"%d is %s\\n\", n, isPrime ? \"PRIME\" : \"COMPOSITE\");\n    return 0;\n}"
        },
        {
            "id": 15,
            "title": "Armstrong Number Verification",
            "category": "Digit Extraction & Accumulation",
            "flow": "START ➔ Read N ➔ Copy temp = N, sum = 0 ➔ [N > 0?] ➔ YES: d = N % 10, sum += d*d*d, N /= 10 loop ➔ [sum == temp?] ➔ YES: 'Armstrong' ➔ STOP",
            "algorithmSteps": ["Step 1: Start", "Step 2: Read N", "Step 3: Copy temp = N, sum = 0", "Step 4: While N > 0: d = N % 10; sum += d*d*d; N /= 10", "Step 5: If sum == temp print 'ARMSTRONG', else 'NOT ARMSTRONG'", "Step 6: Stop"],
            "cCode": "#include <stdio.h>\nint main(void) {\n    int n, temp, sum = 0;\n    scanf(\"%d\", &n);\n    temp = n;\n    while (n > 0) {\n        int d = n % 10;\n        sum += (d * d * d);\n        n /= 10;\n    }\n    if (sum == temp) printf(\"%d is an ARMSTRONG NUMBER\\n\", temp);\n    else printf(\"%d is NOT an Armstrong number\\n\", temp);\n    return 0;\n}"
        }
    ]

    return {
        "symbols": symbols,
        "algorithms": algorithms
    }

def get_algorithm_patterns():
    """
    Returns the 26 essential algorithmic problem solving patterns from master notes Part 7.
    """
    return [
        { "id": 1, "category": "Input/Output", "name": "Input ➔ Process ➔ Output", "template": "Read input ➔ apply mathematical formula ➔ print formatted output.", "snippet": "scanf(\"%f\", &r);\nfloat area = 3.14159f * r * r;\nprintf(\"Area = %.2f\\n\", area);" },
        { "id": 2, "category": "Memory & Variables", "name": "Swap Two Variables (Using temp)", "template": "Classic 3-step cup swap using temporary memory.", "snippet": "int temp = a;\na = b;\nb = temp;" },
        { "id": 3, "category": "Memory & Variables", "name": "Swap Two Variables (Without temp)", "template": "Arithmetic subtraction/addition swap or bitwise XOR swap.", "snippet": "a = a + b;\nb = a - b;\na = a - b;" },
        { "id": 4, "category": "Accumulator", "name": "Running Stream Average", "template": "Accumulate total sum and increment item counter, then cast to double.", "snippet": "sum += value;\ncount++;\ndouble avg = (double)sum / count;" },
        { "id": 5, "category": "Formula Translation", "name": "Unit & Temperature Conversion", "template": "Linear transformation with floating-point constant ratio.", "snippet": "float celsius = (fahrenheit - 32.0f) * 5.0f / 9.0f;" },
        { "id": 6, "category": "Branching", "name": "Binary Two-Way Decision", "template": "Mutually exclusive if-else branch.", "snippet": "if (score >= 50) printf(\"PASS\\n\");\nelse printf(\"FAIL\\n\");" },
        { "id": 7, "category": "Branching", "name": "Multi-Way Range Ladder", "template": "Series of ordered mutually exclusive range checks.", "snippet": "if (m >= 80) grade = 'A';\nelse if (m >= 60) grade = 'B';\nelse grade = 'F';" },
        { "id": 8, "category": "Optimization", "name": "Maximum of Three Numbers", "template": "Assume first is max, sequentially challenge with remaining operands.", "snippet": "int max = a;\nif (b > max) max = b;\nif (c > max) max = c;" },
        { "id": 9, "category": "Optimization", "name": "Minimum of Three Numbers", "template": "Assume first is min, sequentially challenge with remaining operands.", "snippet": "int min = a;\nif (b < min) min = b;\nif (c < min) min = c;" },
        { "id": 10, "category": "Counters", "name": "Conditional Event Counter", "template": "Initialize count = 0, increment when match condition satisfies.", "snippet": "int count = 0;\nfor(int i=0; i<n; i++) if (arr[i] % 2 == 0) count++;" },
        { "id": 11, "category": "Accumulator", "name": "Sum Accumulator", "template": "Initialize sum = 0, add terms inside loop.", "snippet": "int sum = 0;\nfor (int i = 1; i <= n; i++) sum += i;" },
        { "id": 12, "category": "Accumulator", "name": "Product / Factorial Accumulator", "template": "Initialize product = 1 (never 0!), multiply terms inside loop.", "snippet": "long long fact = 1;\nfor (int i = 1; i <= n; i++) fact *= i;" },
        { "id": 13, "category": "Filtering", "name": "Even / Odd Modulo Filter", "template": "Test divisibility by 2 using '%' operator.", "snippet": "if (n % 2 == 0) /* even */\nelse /* odd */" },
        { "id": 14, "category": "Digit Manipulation", "name": "Digit Extraction Loop", "template": "Repeatedly extract last digit with % 10, then remove it with / 10.", "snippet": "while (n > 0) {\n    int d = n % 10;\n    // use d\n    n /= 10;\n}" },
        { "id": 15, "category": "Digit Manipulation", "name": "Number Reversal", "template": "Extract digit, shift existing reversed value by * 10, add digit.", "snippet": "int rev = 0;\nwhile (n > 0) {\n    rev = (rev * 10) + (n % 10);\n    n /= 10;\n}" },
        { "id": 16, "category": "Digit Manipulation", "name": "Palindrome Verification", "template": "Compare original integer against its reversed representation.", "snippet": "if (original == reversed) printf(\"PALINDROME\\n\");" },
        { "id": 17, "category": "Number Theory", "name": "Prime Number Divisor Sieve", "template": "Check divisibility up to integer square root √N.", "snippet": "int isPrime = (n > 1);\nfor (int i = 2; i * i <= n; i++) {\n    if (n % i == 0) { isPrime = 0; break; }\n}" },
        { "id": 18, "category": "Number Theory", "name": "Armstrong Number Verification", "template": "Sum of cubes of individual digits equals original number.", "snippet": "int sum = 0;\nwhile(n > 0) { int d = n % 10; sum += d*d*d; n /= 10; }\nif (sum == original) printf(\"ARMSTRONG\\n\");" },
        { "id": 19, "category": "Series", "name": "Fibonacci Series Generator", "template": "Track two preceding terms, compute next = t1 + t2, shift values.", "snippet": "int t1 = 0, t2 = 1;\nfor (int i = 1; i <= n; i++) {\n    printf(\"%d \", t1);\n    int next = t1 + t2;\n    t1 = t2; t2 = next;\n}" },
        { "id": 20, "category": "Nested Loops", "name": "2D Multiplication Grid", "template": "Outer loop controls rows, inner loop controls columns.", "snippet": "for (int r = 1; r <= rows; r++) {\n    for (int c = 1; c <= cols; c++) printf(\"%4d\", r * c);\n    printf(\"\\n\");\n}" },
        { "id": 21, "category": "Searching", "name": "Linear Search with Flag", "template": "Iterate list, trip flag to 1 upon match, break early.", "snippet": "int found = 0;\nfor (int i = 0; i < n; i++) if (arr[i] == target) { found = 1; break; }" },
        { "id": 22, "category": "Input Validation", "name": "Interactive Validation Loop", "template": "do-while prompt executed until input satisfies valid boundaries.", "snippet": "int score;\ndo {\n    printf(\"Enter score (0-100): \");\n    scanf(\"%d\", &score);\n} while (score < 0 || score > 100);" },
        { "id": 23, "category": "Control Flow", "name": "Sentinel-Controlled Reading Loop", "template": "Loop continuously until user provides special termination value.", "snippet": "int val;\nwhile (scanf(\"%d\", &val) == 1 && val != -1) {\n    sum += val;\n}" },
        { "id": 24, "category": "Interactive", "name": "Interactive Menu System", "template": "Display menu in do-while, dispatch command via switch(choice).", "snippet": "do {\n    printf(\"1. Deposit\\n2. Withdraw\\n0. Exit\\n\");\n    scanf(\"%d\", &ch);\n    switch(ch) { ... }\n} while (ch != 0);" },
        { "id": 25, "category": "Nested Loops", "name": "Matrix Coordinate Traversal", "template": "Row-major traversal accessing elements at [row][col].", "snippet": "for (int i = 0; i < R; i++)\n    for (int j = 0; j < C; j++)\n        process(matrix[i][j]);" },
        { "id": 26, "category": "Pattern Printing", "name": "Centered Star Pyramid Pattern", "template": "Outer loop for rows, inner loop 1 for spaces (rows-i), inner loop 2 for odd stars (2*i-1).", "snippet": "for (int i = 1; i <= H; i++) {\n    for (int s = 1; s <= H - i; s++) printf(\" \");\n    for (int j = 1; j <= 2*i - 1; j++) printf(\"*\");\n    printf(\"\\n\");\n}" }
    ]

def get_theory_questions():
    """
    Returns authentic short (2-mark) and long (5-10 mark) university exam questions with model answers.
    """
    short_questions = [
        {
            "id": "sq1",
            "category": "Fundamentals",
            "question": "What is a variable in C?",
            "answer": "A variable is a named location in computer memory (RAM) with an associated data type that stores a value that can be modified during program execution.",
            "keywords": ["named memory location", "data type", "modifiable in execution", "RAM stack"]
        },
        {
            "id": "sq2",
            "category": "Fundamentals",
            "question": "What are the rules for naming valid identifiers in C?",
            "answer": "1. Must begin with a letter (A-Z, a-z) or underscore (_).\n2. Subsequent characters can be letters, digits (0-9), or underscores.\n3. Cannot be a C reserved keyword.\n4. No special characters or whitespace allowed.\n5. Case-sensitive ('Total' != 'total').",
            "keywords": ["letter or underscore first", "no reserved keyword", "no whitespace", "case-sensitive"]
        },
        {
            "id": "sq3",
            "category": "Fundamentals",
            "question": "Differentiate between #define symbolic constant and const keyword.",
            "answer": "'#define' is a preprocessor macro directive that performs blind textual replacement before compilation (allocates no memory, has no data type). 'const' is a C type qualifier that creates a read-only variable residing in memory with strict type checking by the compiler.",
            "keywords": ["#define preprocessor text replacement", "no memory", "const typed memory variable", "read-only"]
        },
        {
            "id": "sq4",
            "category": "Operators",
            "question": "Explain short-circuit evaluation in logical operators with an example.",
            "answer": "Short-circuit evaluation is a compiler optimization where evaluation of a logical expression stops as soon as the outcome is guaranteed. In (A && B), if A is False (0), B is never evaluated. In (A || B), if A is True (1), B is never evaluated.",
            "keywords": ["evaluation stops early", "&& stops on False", "|| stops on True", "unexecuted operands"]
        },
        {
            "id": "sq5",
            "category": "Operators",
            "question": "What is the difference between '=' and '==' in C?",
            "answer": "'=' is the assignment operator that stores the right-hand evaluated value into the left-hand variable memory location. '==' is the relational equality operator that compares two expressions and returns integer 1 (True) or 0 (False).",
            "keywords": ["assignment copies value", "equality returns 1 or 0", "L-value = R-value"]
        },
        {
            "id": "sq6",
            "category": "Operators",
            "question": "What is integer division truncation?",
            "answer": "In C, when both operands of division '/' are integers, the fractional portion is strictly discarded (truncated towards zero). For example, 5 / 2 yields 2, NOT 2.5.",
            "keywords": ["integer operands", "truncates towards zero", "fraction discarded"]
        },
        {
            "id": "sq7",
            "category": "Input/Output",
            "question": "Why is the address-of operator '&' required in scanf()?",
            "answer": "scanf() must modify variables in the caller's stack frame. Because C passes function arguments strictly by value, passing 'x' gives scanf only a copy. Passing '&x' provides the actual RAM memory address so scanf can write the input bytes directly into that variable.",
            "keywords": ["pass by value in C", "memory address", "RAM stack location", "direct memory write"]
        },
        {
            "id": "sq8",
            "category": "Control Statements",
            "question": "Explain the Dangling Else problem and how it is resolved.",
            "answer": "The Dangling Else ambiguity arises in nested if statements without braces, where it is ambiguous which 'if' an 'else' belongs to. In C grammar, an 'else' strictly attaches to the closest preceding unmatched 'if'. It is resolved unambiguously by using explicit curly braces {}.",
            "keywords": ["closest unmatched if", "grammar rule", "curly braces {} resolve"]
        },
        {
            "id": "sq9",
            "category": "Control Statements",
            "question": "Differentiate between while and do-while loops.",
            "answer": "'while' is an entry-controlled (pre-test) loop that tests its condition before executing the body; it may execute zero times. 'do-while' is an exit-controlled (post-test) loop that tests its condition after executing the body; it is guaranteed to execute at least once.",
            "keywords": ["entry-controlled vs exit-controlled", "pre-test vs post-test", "0 times vs at least 1 time"]
        },
        {
            "id": "sq10",
            "category": "Control Statements",
            "question": "Differentiate between break and continue statements.",
            "answer": "'break' immediately terminates the innermost enclosing loop or switch statement, transferring execution to the next statement outside. 'continue' skips the remaining statements in the current iteration and immediately jumps to the loop update/condition test for the next cycle.",
            "keywords": ["break terminates loop", "continue skips current iteration", "transfers to update"]
        }
    ]

    long_questions = [
        {
            "id": "lq1",
            "category": "Computer Architecture",
            "question": "Explain the Von Neumann Architecture of a modern computer with an ASCII block diagram. Describe the functionality of each subsystem.",
            "marks": "8 to 10 Marks",
            "blueprint": [
                "1. Introduction: Proposed by John von Neumann in 1945; stored-program concept with shared memory for code instructions and runtime data.",
                "2. ASCII Block Diagram: Illustrate CPU (ALU, Control Unit, Registers), System Bus (Address, Data, Control), Primary Memory (RAM), Secondary Storage, and Input/Output Units.",
                "3. Detailed Subsystems:\n   - ALU: Performs arithmetic (+, -, *, /) and logic (==, !=, <, >).\n   - Control Unit: The conductor; fetches, decodes opcodes, issues micro-timed clock signals.\n   - CPU Registers: Zero-wait-state memory on silicon (PC, IR, ACC, MAR, MBR).\n   - RAM: Volatile primary memory holding running OS kernel and C stack/heap.\n   - System Bus: Address Bus (unidirectional), Data Bus (bidirectional), Control Bus.",
                "4. Instruction Execution Cycle: Fetch ➔ Decode ➔ Execute ➔ Store.",
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
                "2. Stage 1: Preprocessing (cpp)\n   - Input: source.c ➔ Output: source.i (Expanded C source)\n   - Actions: Expands #include headers, replaces #define macros, strips all comments, handles #ifdef.",
                "3. Stage 2: Compilation (cc1)\n   - Input: source.i ➔ Output: source.s (Assembly code)\n   - Actions: Lexical, syntactic, and semantic parsing; type checking; generates CPU-specific Assembly mnemonics.",
                "4. Stage 3: Assembly (as)\n   - Input: source.s ➔ Output: source.o / source.obj (Object code)\n   - Actions: Translates assembly mnemonics into raw binary machine opcodes (0s and 1s); leaves external references unresolved.",
                "5. Stage 4: Linking (ld)\n   - Input: source.o + libc.a / C runtime libraries ➔ Output: program.exe\n   - Actions: Resolves external function symbols (e.g. printf, scanf); links startup code; builds single executable binary."
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

    return {
        "shortQuestions": short_questions,
        "longQuestions": long_questions
    }

def get_quick_revision():
    """
    Returns the multi-tiered quick revision system (1-Day, 3-Hour, 1-Hour, 15-Min).
    """
    return {
        "oneDayChecklist": [
            "Review all 32 ANSI C keywords and confirm reserved identifier rules.",
            "Re-read the Operator Precedence Hierarchy (Ranks 1–15); remember unary, ternary, and assignment associate Right-to-Left.",
            "Practice 4 classic algorithms on paper: Prime check (O(√N)), Palindrome check, Factorial, and Star Pyramid.",
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
            "Mentally recite the 3-Second Loop Decision Rule: known count ➔ for; indefinite ➔ while; at least once ➔ do-while.",
            "Remember: in scanf, pass '&' for int/float/double/char, but do NOT pass '&' for string char arrays.",
            "Remember: string literal \"A\" is 2 bytes ('A' + '\\0'); character constant 'A' is 1 byte."
        ],
        "fifteenMinCard": {
            "title": "15-Minute Emergency Midterm Formula Card",
            "items": [
                "Precedence Hierarchy: () ➔ ++x/--x/sizeof/& ➔ * / % ➔ + - ➔ < <= > >= ➔ == != ➔ && ➔ || ➔ ?: ➔ =",
                "Associativity Alert: Unary (++x), Ternary (?:), and Assignment (=, +=) evaluate RIGHT-TO-LEFT!",
                "C Truth Rule: 0 = FALSE | ANY Non-Zero (1, -5, 100) = TRUE",
                "Integer Division: int / int = int (Strict truncation towards zero — never rounds!)",
                "Modulus Rule: Integers only! Sign strictly follows dividend (numerator in C99).",
                "scanf Address Rule: Always pass & for primitive scalar variables (&num)!",
                "double scanf Rule: scanf requires %lf for double; using %f corrupts memory!",
                "Character Input Trap: Use scanf(\" %c\", &ch); with leading space to discard buffer '\\n'!",
                "do-while Rule: Must terminate with semicolon: do { ... } while (cond);",
                "Loop Decision: Known count ➔ for | Unknown until condition ➔ while | Must run once ➔ do-while",
                "break vs continue: break 🛑 TERMINATES loop; continue ⏭️ SKIPS this round to update!",
                "switch Rule: Case values must be compile-time integer constants; floats are ILLEGAL!"
            ]
        }
    }

def get_expanded_mcqs():
    """
    Returns 30 comprehensive, authentic university-grade diagnostic MCQs.
    """
    return [
        {
            "id": 1, "chapterId": 1,
            "q": "Which computer architecture is characterized by storing both program instructions and data in the same shared physical memory?",
            "options": ["Harvard Architecture", "Von Neumann Architecture", "Turing Architecture", "RISC Architecture"],
            "correct": 1,
            "explanation": "John von Neumann proposed the shared memory architecture in 1945, which forms the foundation of modern general-purpose computing."
        },
        {
            "id": 2, "chapterId": 1,
            "q": "Which of the following is an INVALID C identifier?",
            "options": ["_score_2026", "total_sum", "2nd_rank", "MaxVal"],
            "correct": 2,
            "explanation": "C identifiers cannot begin with a numeric digit. '2nd_rank' begins with '2', making it syntactically invalid."
        },
        {
            "id": 3, "chapterId": 1,
            "q": "How many standard reserved keywords are defined in the ANSI C (C89/C90) standard?",
            "options": ["28", "32", "48", "64"],
            "correct": 1,
            "explanation": "ANSI C defines exactly 32 reserved keywords (auto, break, case, char, const, continue, default, do, double, else, enum, extern, float, for, goto, if, int, long, register, return, short, signed, sizeof, static, struct, switch, typedef, union, unsigned, void, volatile, while)."
        },
        {
            "id": 4, "chapterId": 1,
            "q": "What will sizeof(char) ALWAYS evaluate to on any conforming C compiler?",
            "options": ["1 byte", "2 bytes", "4 bytes", "Implementation-dependent"],
            "correct": 0,
            "explanation": "By definition in the C language standard, sizeof(char) is guaranteed to evaluate to exactly 1 byte."
        },
        {
            "id": 5, "chapterId": 1,
            "q": "How many bytes does the string literal \"Hello\" occupy in computer memory?",
            "options": ["5 bytes", "6 bytes", "4 bytes", "8 bytes"],
            "correct": 1,
            "explanation": "A string literal in C includes all visible characters plus one terminating null byte '\\0'. 'H-e-l-l-o' (5) + '\\0' (1) = 6 bytes."
        },
        {
            "id": 6, "chapterId": 1,
            "q": "Which stage of the C compilation pipeline replaces #define macros and strips comments?",
            "options": ["Compiler", "Assembler", "Preprocessor", "Linker"],
            "correct": 2,
            "explanation": "The Preprocessor handles all directives beginning with '#' (#include, #define) and removes comments before the compiler generates assembly code."
        },
        {
            "id": 7, "chapterId": 1,
            "q": "What does an uninitialized local automatic variable inside a function contain?",
            "options": ["0", "NULL", "Random garbage memory values", "Compiler error"],
            "correct": 2,
            "explanation": "Automatic variables allocated on the stack are not zeroed out by default; they retain whatever random electrical bit values previously occupied that RAM location."
        },
        {
            "id": 8, "chapterId": 1,
            "q": "Which ANSI flowchart symbol represents a conditional decision (e.g. if or while)?",
            "options": ["Rectangle", "Oval", "Parallelogram", "Rhombus / Diamond"],
            "correct": 3,
            "explanation": "A diamond (rhombus) represents a decision with two labeled exit paths (TRUE and FALSE)."
        },
        {
            "id": 9, "chapterId": 2,
            "q": "What is the evaluated result of integer division: 14 / 4 in C?",
            "options": ["3.5", "3", "4", "2"],
            "correct": 1,
            "explanation": "When both operands are integers, C performs integer division and strictly truncates towards zero: 14 / 4 = 3."
        },
        {
            "id": 10, "chapterId": 2,
            "q": "Under C99 standard, what is the value of the modulus expression: -17 % 5?",
            "options": ["-2", "2", "3", "-3"],
            "correct": 0,
            "explanation": "In C99, the sign of (a % b) strictly follows the sign of the dividend (left operand a): -17 % 5 = -2."
        },
        {
            "id": 11, "chapterId": 2,
            "q": "What is the value of 'b' after executing: int a = 5; int b = a++;?",
            "options": ["5", "6", "4", "Undefined"],
            "correct": 0,
            "explanation": "In postfix increment (a++), the current value of a (5) is returned first to the assignment expression before a is incremented to 6."
        },
        {
            "id": 12, "chapterId": 2,
            "q": "Which of the following operators evaluates with RIGHT-TO-LEFT associativity?",
            "options": ["Addition (+)", "Multiplication (*)", "Assignment (=)", "Logical AND (&&)"],
            "correct": 2,
            "explanation": "Assignment operators (=, +=, etc.), unary operators, and the conditional ternary operator (?:) associate Right-to-Left."
        },
        {
            "id": 13, "chapterId": 2,
            "q": "If int a = 0, b = 5;, what is the value of 'b' after evaluating: if (a && ++b)?",
            "options": ["5", "6", "0", "1"],
            "correct": 0,
            "explanation": "Because of short-circuit evaluation in '&&', since the left operand 'a' is 0 (False), the right operand '++b' is skipped entirely."
        },
        {
            "id": 14, "chapterId": 2,
            "q": "What does sizeof(x++) do to the variable x?",
            "options": ["Increments x by 1", "Increments x by 2", "Does not increment x at all", "Causes compile error"],
            "correct": 2,
            "explanation": "sizeof is a compile-time operator. Expressions inside sizeof are never executed at runtime; therefore, no side effects occur."
        },
        {
            "id": 15, "chapterId": 2,
            "q": "What is the required format specifier to read a 'double' variable using scanf()?",
            "options": ["%f", "%lf", "%d", "%s"],
            "correct": 1,
            "explanation": "scanf strictly requires '%lf' (long float) for double variables to write 8 bytes. Using '%f' writes only 4 bytes, corrupting memory."
        },
        {
            "id": 16, "chapterId": 2,
            "q": "What happens if you omit the '&' operator when reading an integer: scanf(\"%d\", num);?",
            "options": ["Compiles and runs normally", "Segmentation Fault / Runtime Crash", "Stores 0 in num", "Converts num to float"],
            "correct": 1,
            "explanation": "scanf expects a memory address. Passing the uninitialized garbage value of num causes scanf to write to an invalid memory location, triggering a crash."
        },
        {
            "id": 17, "chapterId": 2,
            "q": "How can you prevent scanf(\"%c\", &ch); from accidentally reading a leftover newline '\\n'?",
            "options": ["Use scanf(\"%1c\", &ch);", "Use scanf(\" %c\", &ch); with a leading space", "Use fflush(stdin);", "Declare ch as int"],
            "correct": 1,
            "explanation": "A leading whitespace character in the scanf format string (e.g. \" %c\") directs scanf to skip any preceding whitespace, newlines, and tabs."
        },
        {
            "id": 18, "chapterId": 2,
            "q": "What is the value of 'x' after: int a = 5, b = 2; float x = a / b;?",
            "options": ["2.5", "2.0", "2", "3.0"],
            "correct": 1,
            "explanation": "a / b is an integer division that evaluates to integer 2. Then 2 is converted to float and stored as 2.0."
        },
        {
            "id": 19, "chapterId": 2,
            "q": "What is the result of expression: int x = 5; x *= 3 + 2;?",
            "options": ["17", "25", "15", "10"],
            "correct": 1,
            "explanation": "In compound assignment op=, the entire right-hand expression is evaluated first: x = x * (3 + 2) = 5 * 5 = 25."
        },
        {
            "id": 20, "chapterId": 2,
            "q": "What is the return value of printf(\"C\\n\");?",
            "options": ["0", "1", "2", "void"],
            "correct": 2,
            "explanation": "printf returns the count of characters printed. 'C' (1) + '\\n' (1) = 2 characters."
        },
        {
            "id": 21, "chapterId": 3,
            "q": "In the absence of curly braces {}, to which 'if' does an 'else' keyword attach?",
            "options": ["The first if in the function", "The nearest preceding unmatched if", "The if with matching visual indentation", "Triggers syntax error"],
            "correct": 1,
            "explanation": "The Dangling Else rule states that an else always binds to the closest preceding unmatched if at the same scoping level."
        },
        {
            "id": 22, "chapterId": 3,
            "q": "Which data type is STRICTLY FORBIDDEN as the expression inside a switch() statement?",
            "options": ["int", "char", "float", "short"],
            "correct": 2,
            "explanation": "The switch expression and case values must strictly be integral types (int, char, enum). Floating-point values (float, double) cause a compile error."
        },
        {
            "id": 23, "chapterId": 3,
            "q": "What happens if all break statements are omitted from a switch block where case 1 matches?",
            "options": ["Only case 1 executes", "Program crashes", "Execution falls through and runs all subsequent cases sequentially", "Syntax error"],
            "correct": 2,
            "explanation": "Without break statements, execution falls through from the matched case into all subsequent cases until the end of the switch block."
        },
        {
            "id": 24, "chapterId": 3,
            "q": "What is the guaranteed minimum number of times the body of a do-while loop executes?",
            "options": ["0 times", "1 time", "2 times", "Infinite times"],
            "correct": 1,
            "explanation": "Because do-while is an exit-controlled (post-test) loop that checks its condition at the bottom, its body is guaranteed to execute at least once."
        },
        {
            "id": 25, "chapterId": 3,
            "q": "What does a single semicolon right after a while loop header (while (i <= 5);) do?",
            "options": ["Terminates the program", "Creates an empty loop body, often resulting in an infinite loop", "Executes body once", "Syntax error"],
            "correct": 1,
            "explanation": "The semicolon serves as an empty null statement body. The loop iterates doing nothing; if i is not incremented inside, it creates an infinite loop."
        },
        {
            "id": 26, "chapterId": 3,
            "q": "What does the 'continue' statement do when encountered inside a loop body?",
            "options": ["Exits the program", "Terminates the loop immediately", "Skips the remaining statements in current iteration and jumps to next iteration", "Restarts loop from beginning"],
            "correct": 2,
            "explanation": "'continue' skips the rest of the current iteration body and jumps directly to the loop update/condition test."
        },
        {
            "id": 27, "chapterId": 3,
            "q": "When is a 'for' loop preferred over a 'while' loop according to programming best practices?",
            "options": ["When condition depends on user input", "When number of iterations is known in advance", "When code must run at least once", "When using floating point numbers"],
            "correct": 1,
            "explanation": "'for' loops are designed for definite (count-controlled) repetition where the initial value, terminating condition, and step update are known."
        },
        {
            "id": 28, "chapterId": 3,
            "q": "How many times will the loop: for (int i = 0; i < 5; i += 2) execute?",
            "options": ["2 times", "3 times", "4 times", "5 times"],
            "correct": 1,
            "explanation": "i starts at 0 (pass 1), increments to 2 (pass 2), increments to 4 (pass 3). At 6, condition 6 < 5 is False. Total = 3 executions."
        },
        {
            "id": 29, "chapterId": 3,
            "q": "What will happen with the condition: if (18 <= age <= 60) for a person aged 85?",
            "options": ["Condition evaluates to False", "Condition evaluates to True", "Causes compile error", "Undefined behavior"],
            "correct": 1,
            "explanation": "Relational operators associate left-to-right: (18 <= 85) evaluates to 1. Then (1 <= 60) evaluates to 1 (True)! Chained comparisons must use &&: (age >= 18 && age <= 60)."
        },
        {
            "id": 30, "chapterId": 3,
            "q": "What is the terminating requirement for a do-while statement that distinguishes it from while and for?",
            "options": ["Must contain return 0;", "Must end with a semicolon after the while condition: while(cond);", "Cannot use break", "Requires an else block"],
            "correct": 1,
            "explanation": "Unlike while and for loops, the do-while loop strictly requires a terminating semicolon after its while condition: do { ... } while (condition);"
        }
    ]

def get_exam_traps():
    """
    Returns the Top 20 Midterm Exam Traps from master notes Part 12.
    """
    return [
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
    ]

def get_must_solve_tracks():
    """
    Returns the structured 10 practice tracks (A through J) from master notes Part 8.
    """
    return [
        {
            "track": "A",
            "title": "Fundamentals & Memory Models",
            "problems": [
                { "id": "A1", "problem": "Write a program to print the memory byte size of char, int, float, and double using the sizeof operator.", "level": "Basic" },
                { "id": "A2", "problem": "Demonstrate variable declaration vs initialization and print uninitialized local garbage values to observe stack memory.", "level": "Basic" },
                { "id": "A3", "problem": "Define a symbolic constant for TAX_RATE (0.15) using #define and compute total bill for an input price.", "level": "Basic" }
            ]
        },
        {
            "track": "B",
            "title": "Operators & Expressions",
            "problems": [
                { "id": "B1", "problem": "Swap two variables using a third temp variable. Then swap WITHOUT using any third variable.", "level": "Basic" },
                { "id": "B2", "problem": "Compute both roots of a quadratic equation ax² + bx + c = 0 using sqrt() from <math.h>. Handle discriminant < 0.", "level": "Intermediate" },
                { "id": "B3", "problem": "Find the maximum of two numbers in a single expression using the conditional (ternary) operator.", "level": "Basic" }
            ]
        },
        {
            "track": "C",
            "title": "Input / Output Mechanics",
            "problems": [
                { "id": "C1", "problem": "Read student name, ID, and GPA using scanf and display in neat tabular columns using %10s, %-15d, %5.2f specifiers.", "level": "Intermediate" },
                { "id": "C2", "problem": "Read a character using getchar(), convert lowercase to uppercase using toupper(), and print with putchar().", "level": "Basic" }
            ]
        },
        {
            "track": "D",
            "title": "Branching & Conditions",
            "problems": [
                { "id": "D1", "problem": "Determine whether an input year is a Leap Year using logical operators && and ||. Handle century years.", "level": "Intermediate" },
                { "id": "D2", "problem": "Electricity Bill Calculator with tiered rates: First 100 units @ $1.50, Next 200 units @ $2.50, Above 300 units @ $3.50.", "level": "Exam" },
                { "id": "D3", "problem": "Find the largest number among three integers using nested if...else (without ternary or max()).", "level": "Basic" }
            ]
        },
        {
            "track": "E",
            "title": "Switch Statements",
            "problems": [
                { "id": "E1", "problem": "Create a 4-function console calculator (+, -, *, /) using switch(op). Handle division by zero.", "level": "Intermediate" },
                { "id": "E2", "problem": "Convert grade character ('A', 'B', 'C', 'D', 'F') to remarks using switch with deliberate fall-through for uppercase and lowercase.", "level": "Exam" }
            ]
        },
        {
            "track": "F",
            "title": "While Loops",
            "problems": [
                { "id": "F1", "problem": "Calculate the sum and count of digits of an input integer N using a while loop.", "level": "Intermediate" },
                { "id": "F2", "problem": "Reverse an integer using a while loop and then check whether it is a Palindrome.", "level": "Exam" },
                { "id": "F3", "problem": "Verify whether an integer is an Armstrong number (e.g., 153 = 1³ + 5³ + 3³).", "level": "Exam" }
            ]
        },
        {
            "track": "G",
            "title": "Do-While Loops",
            "problems": [
                { "id": "G1", "problem": "Write an input range validator using do-while that keeps prompting until the user enters a number between 1 and 100.", "level": "Intermediate" },
                { "id": "G2", "problem": "Interactive banking menu using do-while: [1] Show Balance, [2] Deposit, [3] Withdraw, [0] Exit.", "level": "Exam" }
            ]
        },
        {
            "track": "H",
            "title": "For Loops & Nested Loops",
            "problems": [
                { "id": "H1", "problem": "Check whether an input integer N is Prime using the optimized O(√N) loop (for i=2; i*i<=n; i++).", "level": "Exam" },
                { "id": "H2", "problem": "Print the first N terms of the Fibonacci sequence using a for loop.", "level": "Intermediate" },
                { "id": "H3", "problem": "Print a centered star pyramid of height H using nested loops.", "level": "Exam" },
                { "id": "H4", "problem": "Print a formatted 5×5 multiplication table with aligned columns using nested for loops and printf width formatting.", "level": "Intermediate" }
            ]
        },
        {
            "track": "I",
            "title": "Output Prediction Drills",
            "problems": [
                { "id": "I1", "problem": "Trace: int x = 5; printf(\"%d %d %d\", x, x++, ++x); — predict the exact output.", "level": "Tricky" },
                { "id": "I2", "problem": "Trace short-circuit: int a = 0, b = 2; if (a && ++b) printf(\"Y\"); else printf(\"N\"); What prints? What is b?", "level": "Tricky" }
            ]
        },
        {
            "track": "J",
            "title": "Debugging Drills",
            "problems": [
                { "id": "J1", "problem": "Debug a while loop that runs infinitely: find and fix the missing loop variable update.", "level": "Basic" },
                { "id": "J2", "problem": "Fix: missing semicolon in do-while, missing break in switch, and = instead of == in if condition.", "level": "Intermediate" }
            ]
        }
    ]

