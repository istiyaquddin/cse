# C PROGRAMMING MIDTERM: COMPLETE TOPIC-WISE PRACTICE PROBLEM ROADMAP
## Zero-to-Hero Problem Solving & Logic Building Guide

> **Coach's Note**: You are not memorizing syntax; you are training your brain to think algorithmically. For every coding problem below, solve it using the **7-Step Rule**:
> 1. Understand Problem $\to$ 2. Identify Inputs $\to$ 3. Identify Outputs $\to$ 4. Plain English Logic $\to$ 5. Pseudocode/Algorithm $\to$ 6. Write C Code $\to$ 7. Manual Dry Run Table on Paper.
>
> *Solutions are intentionally omitted so you can solve them yourself. If you get stuck on any specific problem, ask your coach: "Solve Problem X.Y" and we will dissect it step-by-step!*

---

# TABLE OF CONTENTS
- [PART 1: FUNDAMENTALS OF COMPUTER AND C](#part-1-fundamentals-of-computer-and-c)
  - [1. Basic Organization of Computer](#1-basic-organization-of-computer)
  - [2. Definition of Software](#2-definition-of-software)
  - [3. Classification of Software](#3-classification-of-software)
  - [4. Problem Solving Steps](#4-problem-solving-steps)
  - [5. Flowcharts](#5-flowcharts)
  - [6. Introduction to C — History & Characteristics](#6-introduction-to-c--history--characteristics)
  - [7. Identifiers](#7-identifiers)
  - [8. Keywords](#8-keywords)
  - [9. Data Types](#9-data-types)
  - [10. Constants](#10-constants)
  - [11. Variables](#11-variables)
  - [12. Statements](#12-statements)
  - [13. Symbolic Constants](#13-symbolic-constants)
- [PART 2: OPERATORS, INPUT AND OUTPUT](#part-2-operators-input-and-output)
  - [14. Arithmetic Operators](#14-arithmetic-operators)
  - [15. Unary Operators](#15-unary-operators)
  - [16. Relational Operators](#16-relational-operators)
  - [17. Logical Operators](#17-logical-operators)
  - [18. Assignment Operators](#18-assignment-operators)
  - [19. Conditional Operator (Ternary)](#19-conditional-operator-ternary)
  - [20. Operator Precedence & Associativity](#20-operator-precedence--associativity)
  - [21. Expressions](#21-expressions)
  - [22. Type Conversions](#22-type-conversions)
  - [23. Library Functions](#23-library-functions)
  - [24. scanf() & Formatted Input](#24-scanf--formatted-input)
  - [25. printf() & Formatted Output](#25-printf--formatted-output)
  - [26. getchar() & putchar()](#26-getchar--putchar)
  - [27. gets() & puts()](#27-gets--puts)
  - [28. Formatted I/O Modifiers](#28-formatted-io-modifiers)
- [PART 3: CONTROL STATEMENTS](#part-3-control-statements)
  - [29. if Statement](#29-if-statement)
  - [30. if-else Statement](#30-if-else-statement)
  - [31. Nested if & Dangling Else](#31-nested-if--dangling-else)
  - [32. switch Statement](#32-switch-statement)
  - [33. while Loop](#33-while-loop)
  - [34. do-while Loop](#34-do-while-loop)
  - [35. for Loop](#35-for-loop)
  - [36. Nested Loops & Pattern Printing](#36-nested-loops--pattern-printing)
- [PART 4: COMPREHENSIVE CODE TRACING & DRY RUN LAB](#part-4-comprehensive-code-tracing--dry-run-lab)
- [PART 5: DEBUGGING LAB (SPOT & FIX THE BUG)](#part-5-debugging-lab-spot--fix-the-bug)
- [PART 6: 6-PHASE STUDY ROADMAP](#part-6-6-phase-study-roadmap)
- [PART 7: 🔥 THE ULTIMATE MIDTERM MUST-SOLVE CHECKLIST](#part-7--the-ultimate-midterm-must-solve-checklist)

---
---

# PART 1: FUNDAMENTALS OF COMPUTER AND C

---

# 1. Basic Organization of Computer

## 1. What skill does this topic build?
Builds an architectural mental model of how your C program interacts with physical hardware (CPU, ALU, Control Unit, Registers, and Memory Hierarchy).

## 2. Prerequisites
None. Absolute zero starting point.

## 3. 🟢 LEVEL 1 — VERY BASIC (Foundational Understanding)
- **Problem 1.1:** Draw from memory the block diagram of a digital computer showing Input Unit, CPU (ALU, CU, Registers), Primary Memory, Secondary Storage, and Output Unit.
- **Problem 1.2:** State the primary function of the Arithmetic Logic Unit (ALU) and list 3 arithmetic and 3 logical operations it handles.
- **Problem 1.3:** Explain what the Control Unit (CU) does and why it is nicknamed the "police officer" of the CPU.
- **Problem 1.4:** Define Primary Memory (RAM) and Secondary Memory (SSD/HDD) and state which is volatile and which is non-volatile.
- **Problem 1.5:** Describe the simple 3-stage computational cycle: Input $\to$ Processing $\to$ Output using a real-world microwave oven example.

## 4. 🟢 LEVEL 2 — BASIC (Architectural Distinctions)
- **Problem 1.6:** Compare RAM and ROM across four parameters: Volatility, Writeability, Speed, and typical contents.
- **Problem 1.7:** Why does a computer need high-speed CPU Registers if it already has 16 GB of RAM?
- **Problem 1.8:** What is the Program Counter (PC) register and what happens to its value after an instruction is fetched?
- **Problem 1.9:** Differentiate between the Data Bus, Address Bus, and Control Bus in terms of directional flow (unidirectional vs bidirectional).
- **Problem 1.10:** If a CPU has a 32-bit address bus, calculate the maximum bytes of RAM it can physically address.

## 5. 🟡 LEVEL 3 — INTERMEDIATE (System Mechanics)
- **Problem 1.11:** Trace the 4 stages of the CPU Instruction Execution Cycle (Fetch $\to$ Decode $\to$ Execute $\to$ Store/Writeback) for the C instruction `sum = a + b;`.
- **Problem 1.12:** Explain the Memory Hierarchy pyramid from fastest/smallest to slowest/largest (Registers $\to$ Cache $\to$ RAM $\to$ SSD $\to$ Magnetic Tape).
- **Problem 1.13:** What is a Cache Hit and Cache Miss, and how does sequential array access in C benefit from CPU caching?
- **Problem 1.14:** What is the difference between Von Neumann Architecture (shared instruction/data memory) and Harvard Architecture (separate memories)?
- **Problem 1.15:** Explain what happens in physical hardware when you turn off a computer while an unsaved document is open in RAM.

## 6. 🔥 LEVEL 4 — EXAM LEVEL (Typical University Questions)
- **Problem 1.16:** "RAM is volatile, yet essential for program execution." Justify why the CPU cannot execute programs directly from secondary storage (SSD/Hard disk).
- **Problem 1.17:** Write a detailed comparative note on System Bus Architecture, explaining how word size (32-bit vs 64-bit) impacts ALU throughput.
- **Problem 1.18:** Draw the internal register organization of a CPU showing MAR, MBR, PC, IR, and Accumulator, tracing data movement during a memory read.

## 7. 🔴 LEVEL 5 — CHALLENGE (Deep Hardware Insight)
- **Problem 1.19:** A memory chip is organized as $64\text{K} \times 8\text{ bits}$. How many address lines and data lines are required to interface this chip?
- **Problem 1.20:** Explain the phenomenon of "Von Neumann Bottleneck" and how modern multi-level CPU caches (L1, L2, L3) mitigate it.

## 8. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 1.1 (Block Diagram of Computer)
- [ ] Problem 1.2 (ALU operations)
- [ ] Problem 1.4 (RAM vs ROM vs Storage)
- [ ] Problem 1.8 (Program Counter & Instruction Cycle)
- [ ] Problem 1.16 (Why CPU needs RAM)

## 9. 🎯 What will this topic prepare me for?
Prepares you to understand why variables need data types, why uninitialized variables contain garbage memory, and how pointers store physical RAM addresses.

---

# 2. Definition of Software

## 1. What skill does this topic build?
Teaches you the intangible logical nature of programs and why hardware cannot perform computations without stored instructions.

## 2. Prerequisites
Topic 1 (Basic Organization).

## 3. 🟢 LEVEL 1 — VERY BASIC
- **Problem 2.1:** Give the formal definition of Software and identify its two fundamental components (Instructions + Data).
- **Problem 2.2:** List 5 distinct examples of software you interact with daily.
- **Problem 2.3:** In the equation $\text{Computer System} = \text{Hardware} + \text{Software} + \text{User}$, explain why hardware alone is useless.
- **Problem 2.4:** What is Firmware? Give one common hardware component that contains firmware.
- **Problem 2.5:** Is a C source code file (`main.c`) considered software? What about the compiled binary (`main.exe`)?

## 4. 🟢 LEVEL 2 — BASIC
- **Problem 2.6:** Distinguish between Hardware and Software on 5 criteria: Tangibility, Manufacturing, Wear-and-tear, Repair method, and Duplication cost.
- **Problem 2.7:** Explain why software does not follow the traditional mechanical wear-out failure curve (The "Bathtub Curve").
- **Problem 2.8:** Can software exist without physical hardware? Explain why or why not.
- **Problem 2.9:** What is the difference between an algorithm written on paper and executable software?
- **Problem 2.10:** Differentiate between Source Code, Object Code, and Executable Code.

## 5. 🟡 LEVEL 3 — INTERMEDIATE
- **Problem 2.11:** Explain how the BIOS/UEFI firmware initializes hardware during boot before handing control to the Operating System software.
- **Problem 2.12:** Explain the concept of Software Portability: why can the same C source code run on an Intel x86 CPU and an Apple ARM CPU?

## 6. 🔥 LEVEL 4 — EXAM LEVEL
- **Problem 2.13:** "Hardware is the body; software is the mind." Elaborate this analogy in the context of computer engineering.
- **Problem 2.14:** Classify each into Hardware, Software, or Firmware: Keyboard, Windows 11, Motherboard BIOS, GCC Compiler, GPU Driver, Mouse Microcontroller program.

## 7. 🔴 LEVEL 5 — CHALLENGE
- **Problem 2.15:** Explain how software virtualization (VirtualBox/VMware) allows software to emulate physical computer hardware inside another operating system.

## 8. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 2.1 (Definition of software)
- [ ] Problem 2.6 (Hardware vs Software comparison table)
- [ ] Problem 2.10 (Source vs Object vs Executable)
- [ ] Problem 2.14 (Classification exercise)

## 9. 🎯 What will this topic prepare me for?
Prepares you to understand the role of compilers, operating systems, and language translators.

---

# 3. Classification of Software

## 1. What skill does this topic build?
Teaches you the architectural boundary between System Software (infrastructure) and Application Software (user tools).

## 2. Prerequisites
Topic 2 (Definition of Software).

## 3. 🟢 LEVEL 1 — VERY BASIC
- **Problem 3.1:** Define System Software in one clear sentence and give 3 examples.
- **Problem 3.2:** Define Application Software in one clear sentence and give 3 examples.
- **Problem 3.3:** What is Utility Software? Give 2 examples (e.g., Disk Defragmenter, Antivirus).
- **Problem 3.4:** State whether each is System or Application software: Linux, MS Word, GCC Compiler, WhatsApp, Realtek Sound Driver, VLC Player.
- **Problem 3.5:** What is the primary role of an Operating System?

## 4. 🟢 LEVEL 2 — BASIC
- **Problem 3.6:** Create a comprehensive comparison table between System Software and Application Software covering Purpose, Hardware Proximity, Execution Mode (Kernel vs User), and Independence.
- **Problem 3.7:** What is a Device Driver? Why do you need a specific driver for your Nvidia graphics card?
- **Problem 3.8:** Explain the difference between General-Purpose Application Software (e.g., Google Chrome) and Customized/Bespoke Application Software (e.g., an ATM banking system).
- **Problem 3.9:** What is the role of Language Translators in system software?
- **Problem 3.10:** Why does application software crash without taking down the entire computer operating system in modern OS?

## 5. 🟡 LEVEL 3 — INTERMEDIATE
- **Problem 3.11:** Differentiate between a Compiler, an Interpreter, and an Assembler with respect to translation timing and execution speed.
- **Problem 3.12:** What is the role of the Linker and Loader in the software execution lifecycle?
- **Problem 3.13:** Explain why C is predominantly used to author System Software (OS kernels, device drivers) rather than languages like Python or Java.

## 6. 🔥 LEVEL 4 — EXAM LEVEL
- **Problem 3.14:** Draw a layered diagram illustrating the relationship between End User, Application Software, System Software (OS), and Computer Hardware.
- **Problem 3.15:** "A compiler is system software, but a word processor is application software." Detail three technical reasons why a compiler is categorized under system software.

## 7. 🔴 LEVEL 5 — CHALLENGE
- **Problem 3.16:** Describe what happens at the hardware privilege level (Ring 0 Kernel Mode vs Ring 3 User Mode) when a C program invokes `printf()`.

## 8. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 3.1 & 3.2 (Definitions of System vs Application)
- [ ] Problem 3.6 (System vs Application comparison table)
- [ ] Problem 3.11 (Compiler vs Interpreter vs Assembler)
- [ ] Problem 3.14 (Layered software architecture diagram)

## 9. 🎯 What will this topic prepare me for?
Prepares you to understand the C compilation pipeline (`gcc`, linker, loader, headers).

---

# 4. Problem Solving Steps

## 1. What skill does this topic build?
Instills the professional 8-stage software engineering pipeline, preventing you from writing flawed code before planning.

## 2. Prerequisites
Basic arithmetic and logical reasoning.

## 3. 🟢 LEVEL 1 — VERY BASIC (Simple Sequential Logic)
- **Problem 4.1:** Write the step-by-step algorithm to calculate the sum of two numbers.
  - *Input:* Two integers $A$ and $B$.
  - *Output:* Sum.
  - *Concept:* Sequential input $\to$ addition $\to$ output.
- **Problem 4.2:** Write the step-by-step algorithm to calculate the area of a rectangle.
  - *Input:* Length $L$ and Width $W$.
  - *Output:* Area ($L \times W$).
- **Problem 4.3:** Write the algorithm to compute the average of 3 numbers.
  - *Input:* $n_1, n_2, n_3$.
  - *Output:* Average = $(n_1 + n_2 + n_3) / 3$.
- **Problem 4.4:** Write the algorithm to convert temperature from Celsius to Fahrenheit ($F = C \times 9/5 + 32$).
- **Problem 4.5:** Write the algorithm to calculate Simple Interest ($\text{SI} = P \times R \times T / 100$).

## 4. 🟢 LEVEL 2 — BASIC (Decision-Making Algorithms)
- **Problem 4.6:** Write the algorithm to determine whether a given number is Even or Odd using remainder division.
- **Problem 4.7:** Write the algorithm to determine whether an entered number is Positive, Negative, or Zero.
- **Problem 4.8:** Write the algorithm to find the largest of two numbers.
- **Problem 4.9:** Write the algorithm to check if a person is eligible to vote (Age $\ge 18$).
- **Problem 4.10:** Write the algorithm to swap two numbers using a temporary third variable.

## 5. 🟡 LEVEL 3 — INTERMEDIATE (Multi-Path Decisions & Loops)
- **Problem 4.11:** Write the algorithm to find the largest among three distinct numbers $A, B, C$.
- **Problem 4.12:** Write the algorithm to swap two numbers WITHOUT using any third variable.
- **Problem 4.13:** Write the algorithm to print numbers from 1 to $N$ using a counter loop.
- **Problem 4.14:** Write the algorithm to calculate the sum of first $N$ natural numbers ($1 + 2 + \dots + N$).
- **Problem 4.15:** Write the algorithm to calculate the Factorial of a number $N! = 1 \times 2 \times \dots \times N$.

## 6. 🔥 LEVEL 4 — EXAM LEVEL (Classic Midterm Algorithms)
- **Problem 4.16:** Write the algorithm to test whether a given positive integer $N$ is a **Prime Number**.
- **Problem 4.17:** Write the algorithm to reverse the digits of a given integer (e.g., $123 \to 321$).
- **Problem 4.18:** Write the algorithm to determine whether an integer is a **Palindrome** (reads same forwards and backwards).
- **Problem 4.19:** Write the algorithm to assign academic grades based on marks: $\ge 80 \implies A, \ge 60 \implies B, \ge 40 \implies C, < 40 \implies F$.

## 7. 🔴 LEVEL 5 — CHALLENGE (Number Properties)
- **Problem 4.20:** Write the algorithm to check if an entered 3-digit number is an **Armstrong Number** ($153 = 1^3 + 5^3 + 3^3$).
- **Problem 4.21:** Write the algorithm to generate the first $N$ terms of the **Fibonacci Series** ($0, 1, 1, 2, 3, 5, 8, \dots$).

## 8. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 4.1 (Add two numbers)
- [ ] Problem 4.6 (Even/Odd algorithm)
- [ ] Problem 4.8 & 4.11 (Largest of 2 and 3 numbers)
- [ ] Problem 4.12 (Swap without temp)
- [ ] Problem 4.15 (Factorial)
- [ ] Problem 4.16 (Prime number test)

## 9. 🎯 What will this topic prepare me for?
Prepares you for drawing Flowcharts and converting logic directly into C syntax.

---

# 5. Flowcharts

## 1. What skill does this topic build?
Trains visual algorithmic design using standardized ANSI geometric shapes.

## 2. Prerequisites
Topic 4 (Problem Solving Steps & Algorithms).

## 3. 🟢 LEVEL 1 — VERY BASIC (Sequential Flowcharts)
- **Problem 5.1:** Draw a flowchart to add two numbers entered by the user.
- **Problem 5.2:** Draw a flowchart to calculate the perimeter and area of a rectangle.
- **Problem 5.3:** Draw a flowchart to find the area and circumference of a circle ($A = \pi r^2, C = 2\pi r$).
- **Problem 5.4:** Draw a flowchart to calculate the average of three exam marks.
- **Problem 5.5:** Draw a flowchart to convert temperature from Fahrenheit to Celsius.

## 4. 🟢 LEVEL 2 — BASIC (Decision Diamonds)
- **Problem 5.6:** Draw a flowchart to check whether a number is Even or Odd.
- **Problem 5.7:** Draw a flowchart to determine if a number is Positive or Negative.
- **Problem 5.8:** Draw a flowchart to find the larger of two numbers.
- **Problem 5.9:** Draw a flowchart to check whether a student has Passed (marks $\ge 40$) or Failed.
- **Problem 5.10:** Draw a flowchart to check if a year is a Leap Year.

## 5. 🟡 LEVEL 3 — INTERMEDIATE (Multi-Way Decisions & Simple Loops)
- **Problem 5.11:** Draw a flowchart to find the largest of three numbers using nested decision diamonds.
- **Problem 5.12:** Draw a flowchart to assign letter grades based on percentage.
- **Problem 5.13:** Draw a flowchart to print numbers from 1 to 10 using a loop back-arrow.
- **Problem 5.14:** Draw a flowchart to compute the sum of numbers from 1 to $N$.
- **Problem 5.15:** Draw a flowchart to calculate the Factorial of a number $N$.

## 6. 🔥 LEVEL 4 — EXAM LEVEL
- **Problem 5.16:** Draw a complete flowchart to determine whether a given integer $N$ is Prime.
- **Problem 5.17:** Draw a flowchart to extract and sum the individual digits of a number (e.g., $452 \implies 4+5+2 = 11$).
- **Problem 5.18:** Draw a flowchart to reverse an integer.

## 7. 🔴 LEVEL 5 — CHALLENGE
- **Problem 5.19:** Draw a flowchart to find the Greatest Common Divisor (GCD) of two numbers using Euclid's subtraction method.
- **Problem 5.20:** Draw a flowchart to generate the Fibonacci sequence up to $N$ terms.

## 8. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 5.1 (Add two numbers)
- [ ] Problem 5.6 (Even/Odd diamond)
- [ ] Problem 5.8 & 5.11 (Largest of 2 and 3 numbers)
- [ ] Problem 5.13 (Loop 1 to 10)
- [ ] Problem 5.15 (Factorial loop)
- [ ] Problem 5.16 (Prime number check)

## 9. 🎯 What will this topic prepare me for?
Prepares you for mastering `if-else` branches and `while`/`for` loops in code.

---

# 6. Introduction to C — History & Characteristics

## 1. What skill does this topic build?
Teaches why C was created, its middle-level superpower, and the 4-stage compilation pipeline.

## 2. Prerequisites
Topic 1 & 3.

## 3. 🟢 LEVEL 1 — VERY BASIC (Foundational Facts)
- **Problem 6.1:** Who developed the C programming language, in which year, and at which laboratory?
- **Problem 6.2:** Which famous operating system was rewritten in C in 1973?
- **Problem 6.3:** Write from memory the minimal valid C program that compiles and exits cleanly.
- **Problem 6.4:** What does `#include <stdio.h>` do in a C program?
- **Problem 6.5:** Why is the `main()` function mandatory in every C executable?

## 4. 🟢 LEVEL 2 — BASIC (Syntax Structure)
- **Problem 6.6:** Explain the significance of `return 0;` at the end of `main()`. What does `0` signify to the OS?
- **Problem 6.7:** Why is C classified as a "Middle-Level Language"? Give two low-level and two high-level features.
- **Problem 6.8:** Explain what is meant by "Portability" in C. What part is portable (source code) and what part is machine-specific (executable)?
- **Problem 6.9:** What is the difference between single-line comments `//` and multi-line comments `/* ... */`? When were single-line comments officially standardized?
- **Problem 6.10:** Why is C case-sensitive? What happens if you type `Void Main()` instead of `int main(void)`?

## 5. 🟡 LEVEL 3 — INTERMEDIATE (The Compilation Pipeline)
- **Problem 6.11:** Trace the 4 stages of the C compilation pipeline: Preprocessor $\to$ Compiler $\to$ Assembler $\to$ Linker, listing input and output file extensions (`.c` $\to$ `.i` $\to$ `.s` $\to$ `.o` $\to$ `.exe`).
- **Problem 6.12:** What is the exact task of the Preprocessor? List 3 things it removes or expands.
- **Problem 6.13:** What is the task of the Linker? What error occurs if you call `printf` without linking the standard runtime?
- **Problem 6.14:** Contrast K&R C, ANSI C (C89), and C99 standards.

## 6. 🔥 LEVEL 4 — EXAM LEVEL
- **Problem 6.15:** "C is a structured, modular language." Explain this statement using functions and block scope `{}`.
- **Problem 6.16:** Write a complete C program that prints:
  ```text
  "Welcome to C Programming!"
  C is fast, portable, and powerful.
  Path: C:\Users\Student\main.c
  ```
  *(Tests escape sequences `\"`, `\n`, and `\\`).*

## 7. 🔴 LEVEL 5 — CHALLENGE
- **Problem 6.17:** Execute the GCC compiler manually from the terminal generating each intermediate file:
  - Preprocessed: `gcc -E main.c -o main.i`
  - Assembly: `gcc -S main.c -o main.s`
  - Object: `gcc -c main.c -o main.o`
  - Executable: `gcc main.o -o main.exe`
  Explain what changes occurred in file size between `main.c` and `main.i`.

## 8. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 6.1 (History of C)
- [ ] Problem 6.3 (Minimal valid C structure)
- [ ] Problem 6.7 (Why C is a middle-level language)
- [ ] Problem 6.11 (4 stages of compilation)
- [ ] Problem 6.16 (Basic formatted output program)

## 9. 🎯 What will this topic prepare me for?
Prepares you for writing syntactically correct C tokens, headers, and declarations.

---

# 7. Identifiers

## 1. What skill does this topic build?
Teaches you the strict rules of naming variables and functions to prevent syntax errors.

## 2. Prerequisites
Topic 6.

## 3. 🟢 LEVEL 1 — VERY BASIC (Rule Validation)
- State whether each identifier is **VALID** or **INVALID** and state the exact rule broken:
  - **Problem 7.1:** `total_marks`
  - **Problem 7.2:** `2nd_number`
  - **Problem 7.3:** `_count`
  - **Problem 7.4:** `my salary`
  - **Problem 7.5:** `student-age`

## 4. 🟢 LEVEL 2 — BASIC (More Validation Cases)
- State whether each identifier is **VALID** or **INVALID**:
  - **Problem 7.6:** `float`
  - **Problem 7.7:** `Float` (Remember case-sensitivity!)
  - **Problem 7.8:** `roll#no`
  - **Problem 7.9:** `$amount`
  - **Problem 7.10:** `MAX_CAPACITY_2026`

## 5. 🟡 LEVEL 3 — INTERMEDIATE (Renaming & Best Practices)
- **Problem 7.11:** Convert these 5 invalid variable names into professional, valid C identifiers:
  `1st_prize`, `employee-name`, `gross salary`, `tax%`, `default`.
- **Problem 7.12:** Explain why `marks`, `Marks`, and `MARKS` represent three completely distinct variables in C memory.
- **Problem 7.13:** What is the difference between `snake_case` and `camelCase` naming conventions? Which is standard in C?
- **Problem 7.14:** Why should variable names beginning with double underscores (e.g., `__init`) be avoided in user code?

## 6. 🔥 LEVEL 4 — EXAM LEVEL
- **Problem 7.15:** In ANSI C89, how many initial characters of an internal identifier are guaranteed to be significant? What is the risk if two 50-character identifiers differ only at the 35th character?
- **Problem 7.16:** Write a short C program that declares 4 valid identifiers using lowercase, uppercase, underscore, and trailing digits, assigning values and printing them.

## 7. 🔴 LEVEL 5 — CHALLENGE
- **Problem 7.17:** Can an identifier have the exact same name as a C standard library function like `printf`? What happens if you declare `int printf = 10;` inside `main()`? Test and explain the result.

## 8. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problems 7.1 to 7.10 (Identifier validation drills)
- [ ] Problem 7.11 (Fixing bad names)
- [ ] Problem 7.12 (Case sensitivity proof)

## 9. 🎯 What will this topic prepare me for?
Prepares you for declaring variables cleanly without triggering frustrating compiler syntax errors.

---

# 8. Keywords

## 1. What skill does this topic build?
Teaches you C's 32 reserved words so you never accidentally use them as variable names.

## 2. Prerequisites
Topic 7 (Identifiers).

## 3. 🟢 LEVEL 1 — VERY BASIC (Identification)
- **Problem 8.1:** Define a Keyword. Why can a keyword never be used as a variable name?
- **Problem 8.2:** How many keywords exist in the ANSI C (C89) standard? Are they uppercase or lowercase?
- From the list below, circle the **Keywords**:
  - **Problem 8.3:** `int`, `main`, `include`, `return`
  - **Problem 8.4:** `float`, `number`, `if`, `sum`
  - **Problem 8.5:** `while`, `printf`, `char`, `loop`

## 4. 🟢 LEVEL 2 — BASIC (Categorization)
- **Problem 8.6:** List the 8 C keywords used exclusively for Data Types.
- **Problem 8.7:** List the 8 C keywords used for Control Flow and Decision Making (`if`, `else`, etc.).
- **Problem 8.8:** List the 3 C keywords used for Loops.
- **Problem 8.9:** Why is `main` NOT a keyword? Why is `printf` NOT a keyword?
- **Problem 8.10:** What error does the compiler give if you write `int double = 25;`?

## 5. 🟡 LEVEL 3 — INTERMEDIATE
- **Problem 8.11:** Explain the purpose of the `sizeof` keyword. Why do beginners often mistake it for a function?
- **Problem 8.12:** Explain the role of the `typedef` keyword with a simple syntax example.
- **Problem 8.13:** List the 5 new keywords added in C99 (e.g., `inline`, `restrict`, `_Bool`).

## 6. 🔥 LEVEL 4 — EXAM LEVEL
- **Problem 8.14:** Group all 32 C89 keywords into their 5 functional categories: Data Types, Flow Control, Loops, Storage Classes, and Miscellaneous.
- **Problem 8.15:** Spot the invalid line and explain why:
  ```c
  int count = 10;
  int break = 5;
  int While = 20;
  ```

## 7. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 8.1 & 8.2 (Keyword definition & count: 32)
- [ ] Problem 8.3 to 8.5 (Keyword identification drill)
- [ ] Problem 8.9 (Why main and printf are not keywords)
- [ ] Problem 8.15 (Spotting keyword assignment bug)

## 8. 🎯 What will this topic prepare me for?
Prepares you for syntax literacy across all control structures and type declarations.

---

# 9. Data Types

## 1. What skill does this topic build?
Teaches memory sizing, integer ranges, floating-point precision, and format specifier binding.

## 2. Prerequisites
Topics 7 & 8.

## 3. 🟢 LEVEL 1 — VERY BASIC (Declaration & Formats)
- **Problem 9.1:** Write declarations for:
  - An integer `age = 20`
  - A single-precision float `height = 5.9`
  - A double-precision `pi = 3.14159265`
  - A character `grade = 'A'`
- **Problem 9.2:** State the standard format specifier used in `printf` for `int`, `float`, `double`, and `char`.
- **Problem 9.3:** Write a program to declare variables of type `int`, `float`, `double`, and `char`, and print each on a new line with its label.
- **Problem 9.4:** What is the memory size in bytes of `char` on all standard C platforms?
- **Problem 9.5:** Calculate the mathematical range of an 8-bit unsigned integer ($[0 \text{ to } 2^8 - 1]$).

## 4. 🟢 LEVEL 2 — BASIC (Calculations with Types)
- **Problem 9.6:** Write a program to calculate the average of 3 test scores ($75, 82, 91$) using a `float` variable to preserve decimal precision.
- **Problem 9.7:** Write a program to calculate the percentage of a student who scored 425 out of 500 marks.
- **Problem 9.8:** Write a program to print the ASCII numerical code of character `'Z'` and `'a'` using `%d`.
- **Problem 9.9:** Calculate the mathematical range of a 16-bit signed short integer using the Two's Complement formula ($[-2^{15} \text{ to } 2^{15}-1]$).
- **Problem 9.10:** Print the exact byte sizes of `short`, `int`, `long`, `float`, and `double` on your machine using `sizeof`.

## 5. 🟡 LEVEL 3 — INTERMEDIATE (Type Modifiers & Overflow)
- **Problem 9.11:** What is the difference between `signed int` and `unsigned int` in terms of memory size and range?
- **Problem 9.12:** Predict the output of this code and explain the "Odometer Effect" (Signed Overflow):
  ```c
  signed char c = 127;
  c = c + 1;
  printf("%d\n", c);
  ```
- **Problem 9.13:** Predict the output of this unsigned wrap-around:
  ```c
  unsigned char u = 255;
  u = u + 1;
  printf("%u\n", u);
  ```
- **Problem 9.14:** Explain the precision limitation of `float` (6-7 decimal digits) vs `double` (15-17 decimal digits) with an example storing `123456789.0`.
- **Problem 9.15:** What is the `void` data type? Give two common scenarios where `void` is used.

## 6. 🔥 LEVEL 4 — EXAM LEVEL
- **Problem 9.16:** Write a program to calculate an employee's Gross Salary:
  - Basic Salary = 45000.00 (`double`)
  - HRA = 20% of Basic
  - DA = 50% of Basic
  - Tax Deduction = 10% of Basic
  - Print all components with 2 decimal places.
- **Problem 9.17:** Explain what happens when a variable of type `float` is printed using `%d`, or an `int` is printed using `%f`. Why does it output garbage?

## 7. 🔴 LEVEL 5 — CHALLENGE
- **Problem 9.18:** Write a program to display the minimum and maximum limits of integer types by including `<limits.h>` (`INT_MIN`, `INT_MAX`, `SHRT_MAX`, `UCHAR_MAX`).
- **Problem 9.19:** Write a program to inspect whether `char` is signed or unsigned by default on your compiler.

## 8. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 9.1 & 9.3 (Declaring & printing 4 primary types)
- [ ] Problem 9.6 (Average using float)
- [ ] Problem 9.8 (Character to ASCII printing)
- [ ] Problem 9.10 (sizeof inspection program)
- [ ] Problem 9.12 (Signed char overflow to -128)
- [ ] Problem 9.16 (Salary calculation program)

## 9. 🎯 What will this topic prepare me for?
Prepares you for understanding arithmetic division, type casting, and format specifiers in `scanf`/`printf`.

---

# 10. Constants

## 1. What skill does this topic build?
Teaches you to recognize immutable literals across Decimal, Octal, Hex, Floating-point, Character, and String formats.

## 2. Prerequisites
Topic 9 (Data Types).

## 3. 🟢 LEVEL 1 — VERY BASIC (Literals Identification)
- **Problem 10.1:** Define a Constant. How does it differ from a Variable?
- Identify the type of each constant (Integer, Float, Char, String):
  - **Problem 10.2:** `42`
  - **Problem 10.3:** `3.14159f`
  - **Problem 10.4:** `'A'`
  - **Problem 10.5:** `"A"`

## 4. 🟢 LEVEL 2 — BASIC (Number Bases & Escapes)
- **Problem 10.6:** What base does an integer with a leading `0` represent? What is the decimal value of `017`?
- **Problem 10.7:** What base does an integer with prefix `0x` represent? What is the decimal value of `0x1A`?
- **Problem 10.8:** Explain what the following escape sequences do: `\n`, `\t`, `\\`, `\"`, `\0`.
- **Problem 10.9:** What is the memory difference between `'X'` and `"X"`? (Hint: byte size and null terminator).
- **Problem 10.10:** Write a program to print a file path `C:\Program Files\C_Course\` using escape sequences.

## 5. 🟡 LEVEL 3 — INTERMEDIATE (Octal Traps & Suffixes)
- **Problem 10.11:** Why does the line `int code = 089;` produce a compile-time error?
- **Problem 10.12:** What do the suffixes `U`, `L`, `UL`, and `f` mean when appended to literals like `100UL` or `3.5f`?
- **Problem 10.13:** What is Scientific Exponential notation? What is the decimal value of `1.5e3` and `4.2e-2`?
- **Problem 10.14:** What is the hidden character appended to every string literal in C memory? What is its ASCII value?

## 6. 🔥 LEVEL 4 — EXAM LEVEL
- **Problem 10.15:** Predict the output of this code snippet:
  ```c
  printf("%d %d %d\n", 45, 055, 0x2D);
  ```
- **Problem 10.16:** Write a program to calculate the area and circumference of a circle using `#define PI 3.14159265` for radius $r = 5.5$.

## 7. 🔴 LEVEL 5 — CHALLENGE
- **Problem 10.17:** Predict the output:
  ```c
  char s[] = "Hello\0World";
  printf("%s\n", s);
  printf("%zu\n", sizeof(s));
  ```
  Explain why `printf` prints only "Hello", but `sizeof` returns 12 bytes!

## 8. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 10.1 (Constant vs Variable)
- [ ] Problem 10.6 & 10.7 (Octal and Hex decoding)
- [ ] Problem 10.9 ('A' vs "A" difference)
- [ ] Problem 10.11 (The octal 089 error)
- [ ] Problem 10.16 (Circle calculation using constant)

## 9. 🎯 What will this topic prepare me for?
Prepares you for writing exact literal constants in expressions and format strings.

---

# 11. Variables

## 1. What skill does this topic build?
🔥 **Core Skill:** Mastering variable declaration, definition, initialization, state modification, and memory box tracing.

## 2. Prerequisites
Topics 9 & 10.

## 3. 🟢 LEVEL 1 — VERY BASIC (Memory Operations)
- **Problem 11.1:** Declare two integer variables `x` and `y`, initialize them with 15 and 25, compute their sum into `sum`, and print `sum`.
- **Problem 11.2:** What is the difference between Variable **Declaration** and Variable **Definition**?
- **Problem 11.3:** What is an **Uninitialized Variable**? What value does a local uninitialized variable hold in C?
- **Problem 11.4:** Write a program to declare an uninitialized `int count;` and print its value. Explain why the result is unexpected.
- **Problem 11.5:** Declare three variables `a, b, c` on a single line, initialize only `b = 5`, and explain the state of `a` and `c`.

## 4. 🟢 LEVEL 2 — BASIC (State Changes & Swapping)
- **Problem 11.6:** Write a program to **swap two variables** `a = 10` and `b = 20` using a temporary helper variable `temp`.
  - *Input:* $a = 10, b = 20$.
  - *Output:* $a = 20, b = 10$.
  - *Memory trace:* Draw the 3-step memory box states.
- **Problem 11.7:** Write a program to calculate the Area and Perimeter of a square of side $S = 8.5$.
- **Problem 11.8:** Write a program to calculate Simple Interest: $P = 12000, R = 6.5\%, T = 2\text{ years}$.
- **Problem 11.9:** Write a program to convert distance from kilometers to meters and centimeters ($1\text{ km} = 1000\text{ m} = 100000\text{ cm}$).
- **Problem 11.10:** Trace the value of variable `x` after each line:
  ```c
  int x = 5;
  x = x + 10;
  x = x * 2;
  x = x - 4;
  ```

## 5. 🟡 LEVEL 3 — INTERMEDIATE (Tricks & L-value / R-value)
- **Problem 11.11:** Write a program to **swap two variables WITHOUT using any third variable** using addition and subtraction.
  - *Hint:* $a = a + b; b = a - b; a = a - b;$.
- **Problem 11.12:** What is an **L-value** and an **R-value**? Why does `10 = x;` cause a compiler error: "lvalue required"?
- **Problem 11.13:** What is Chained Assignment? Trace the values of `a, b, c` after `a = b = c = 50;`.
- **Problem 11.14:** What is variable shadowing? Predict the output:
  ```c
  int x = 10;
  {
      int x = 20;
      printf("%d ", x);
  }
  printf("%d\n", x);
  ```
- **Problem 11.15:** Print the physical memory address of a variable `num` using the address-of operator `&num` and `%p`.

## 6. 🔥 LEVEL 4 — EXAM LEVEL
- **Problem 11.16:** Write a program to calculate the total marks, average, and percentage for a student across 5 subjects (Physics, Chemistry, Math, English, Biology) out of 100 each.
- **Problem 11.17:** Write a program to compute Profit or Loss: Given Cost Price $CP = 250.00$ and Selling Price $SP = 310.00$, compute profit amount and profit percentage.
- **Problem 11.18:** Explain what happens if two extremely large positive integers close to `INT_MAX` are swapped using the additive trick ($a = a + b$). Why does it cause undefined behavior?

## 7. 🔴 LEVEL 5 — CHALLENGE
- **Problem 11.19:** Swap two variables using the **Bitwise XOR (`^`) operator** without a temporary variable. Why is this safer than addition/subtraction?
- **Problem 11.20:** Demonstrate the difference between a `local variable`, a `global variable`, and a `static local variable` across multiple function calls.

## 8. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 11.1 (Basic declaration, sum, print)
- [ ] Problem 11.4 (Garbage value demonstration)
- [ ] Problem 11.6 (Swap using temp variable)
- [ ] Problem 11.10 (Manual state tracing)
- [ ] Problem 11.11 (Swap without temp variable)
- [ ] Problem 11.16 (Student 5-subject marks & average)

## 9. 🎯 What will this topic prepare me for?
Variables are the foundation of ALL programming. Prepares you directly for inputting data via `scanf` and calculating with operators.

---

# 12. Statements

## 1. What skill does this topic build?
Teaches instruction boundaries, the critical role of semicolons as terminators, and block scoping.

## 2. Prerequisites
Topic 11 (Variables).

## 3. 🟢 LEVEL 1 — VERY BASIC (Statement Categories)
- **Problem 12.1:** Identify the statement type for each line:
  - `int count = 0;`
  - `count = count + 1;`
  - `printf("%d\n", count);`
  - `;`
  - `{ int a = 1; int b = 2; }`
- **Problem 12.2:** What is the purpose of the Semicolon `;` in C? Is it a statement terminator or separator?
- **Problem 12.3:** What is a Null Statement (Empty Statement)? Write a valid line containing a null statement.
- **Problem 12.4:** What is a Compound Statement (Block)? What symbols delimit it? Does the closing brace `}` require a semicolon?
- **Problem 12.5:** Fix the missing semicolons in this broken snippet:
  ```c
  int a = 10
  int b = 20
  int c = a + b
  printf("%d", c)
  ```

## 4. 🟢 LEVEL 2 — BASIC (The Accidental Semicolon Bug)
- **Problem 12.6:** Explain the devastating bug caused by the semicolon in this snippet:
  ```c
  int score = 20;
  if (score >= 50);
  {
      printf("You passed!\n");
  }
  ```
  Why does "You passed!" print even though score is only 20?
- **Problem 12.7:** Explain what happens in this loop with a semicolon:
  ```c
  int i = 0;
  while (i < 5);
  {
      i++;
  }
  ```
- **Problem 12.8:** Can multiple statements be written on a single physical line in C? Give an example.
- **Problem 12.9:** Can a single C statement span across multiple physical lines? Give an example.

## 5. 🟡 LEVEL 3 — INTERMEDIATE
- **Problem 12.10:** Explain Block Scope: What is the lifetime of a variable declared inside an inner block `{ int temp = 5; }`? Can it be accessed outside the closing brace?
- **Problem 12.11:** What is an Expression Statement? Does the line `42;` or `10 + 20;` compile in C? What warning might GCC give?

## 6. 🔥 LEVEL 4 — EXAM LEVEL
- **Problem 12.12:** Identify all syntax and logical errors in this code:
  ```c
  #include <stdio.h>
  int main(void)
  {
      int x = 10; y = 20;
      int sum = x + y;
      printf("Sum is %d", sum)
      return 0
  }
  ```

## 7. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 12.2 (Semicolon role as terminator)
- [ ] Problem 12.6 (The accidental semicolon in if statement)
- [ ] Problem 12.7 (The accidental semicolon in while loop)
- [ ] Problem 12.10 (Block scope & lifetime)

## 8. 🎯 What will this topic prepare me for?
Prevents 80% of beginner syntax errors when writing conditional branching and loops.

---

# 13. Symbolic Constants

## 1. What skill does this topic build?
Teaches eliminating "magic numbers" using `#define` preprocessor macros and `const` read-only variables.

## 2. Prerequisites
Topics 10, 11, 12.

## 3. 🟢 LEVEL 1 — VERY BASIC (Syntax & Creation)
- **Problem 13.1:** Define a symbolic constant `PI` with value `3.14159265` using `#define`.
- **Problem 13.2:** Define a symbolic constant `MAX_STUDENTS` with value `60` using `const int`.
- **Problem 13.3:** Why is writing `#define PI = 3.14159;` a fatal syntax error?
- **Problem 13.4:** Write a program to calculate the area of a circle using `#define PI 3.14159`.
- **Problem 13.5:** Write a program to calculate a 15% discount on an item of price $800 using `const float DISCOUNT_RATE = 0.15f`.

## 4. 🟢 LEVEL 2 — BASIC (Practical Formulas)
- **Problem 13.6:** Calculate the final electricity bill where unit rate is fixed at `#define UNIT_RATE 7.50` and meter rent is `const double METER_RENT = 50.00`.
  - *Formula:* $\text{Bill} = (\text{Units} \times \text{UNIT\_RATE}) + \text{METER\_RENT}$.
- **Problem 13.7:** Convert currency from USD to EUR using `#define CONVERSION_RATE 0.92`.
- **Problem 13.8:** Calculate the total salary of an employee with fixed `#define BONUS 5000` added to basic salary.

## 5. 🟡 LEVEL 3 — INTERMEDIATE (`#define` vs `const`)
- **Problem 13.9:** Create a 4-point comparison table between `#define` and `const` covering:
  - Preprocessor vs Compiler
  - Memory allocation (RAM vs none)
  - Type checking
  - Ability to take address (`&`)
- **Problem 13.10:** Explain the Macro Parentheses Danger:
  ```c
  #define BAD_SQUARE(x) x * x
  int ans = BAD_SQUARE(2 + 3);
  ```
  What does `ans` evaluate to? How do you fix the macro?

## 6. 🔥 LEVEL 4 — EXAM LEVEL
- **Problem 13.11:** What happens if you try to reassign a `const` variable:
  ```c
  const int LIMIT = 100;
  LIMIT = 200;
  ```
  What exact error does the compiler generate?
- **Problem 13.12:** Write a program using `#define TAX_RATE 0.05` and `#define LUXURY_TAX 0.12` to compute sales tax on grocery items vs luxury items.

## 7. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 13.3 (The fatal semicolon in #define)
- [ ] Problem 13.4 (Circle area using #define)
- [ ] Problem 13.9 (#define vs const comparison table)
- [ ] Problem 13.10 (Macro parentheses trap: 2+3*2+3)
- [ ] Problem 13.11 (const immutability rule)

## 8. 🎯 What will this topic prepare me for?
Prepares you for writing maintainable code and array bounds sizing (`int arr[MAX];`).

---
---

# PART 2: OPERATORS, INPUT AND OUTPUT

---

# 14. Arithmetic Operators

## 1. What skill does this topic build?
🔥 **Core Skill:** Performing numeric computations, mastering integer division truncation, and extracting digits with modulus `%`.

## 2. Prerequisites
Topics 9 & 11 (Data Types & Variables).

## 3. 🟢 LEVEL 1 — VERY BASIC (Direct Calculations)
- **Problem 14.1:** Write a program to input two integers $a = 20$ and $b = 6$, and print their sum (`+`), difference (`-`), product (`*`), quotient (`/`), and remainder (`%`).
- **Problem 14.2:** Explain why `5 / 2` evaluates to `2` in C, while `5.0 / 2` evaluates to `2.5`.
- **Problem 14.3:** Write a program to calculate the remainder of $47$ divided by $5$.
- **Problem 14.4:** Write a program to calculate the square and cube of an integer $N = 4$.
- **Problem 14.5:** Write a program to calculate the average of 4 integers: $12, 17, 24, 33$ as an exact floating-point number.

## 4. 🟢 LEVEL 2 — BASIC (Applied Arithmetic)
- **Problem 14.6:** Convert total seconds `total_sec = 3665` into Hours, Minutes, and Seconds using `/` and `%`.
  - *Input:* 3665
  - *Expected Output:* 1 Hour, 1 Minute, 5 Seconds.
  - *Concept tested:* Time decomposition via modulo arithmetic.
- **Problem 14.7:** Convert total days `days = 400` into Years, Weeks, and remaining Days (assume 365 days/year).
- **Problem 14.8:** Extract the **Last Digit** of an integer $N = 789$.
  - *Concept:* $N \pmod{10}$.
- **Problem 14.9:** Remove the last digit from an integer $N = 789$ to get $78$.
  - *Concept:* $N / 10$.
- **Problem 14.10:** Compute the Area and Circumference of a circle given radius $r = 4.2$.

## 5. 🟡 LEVEL 3 — INTERMEDIATE (Digit Manipulation Algorithms)
- **Problem 14.11:** Write a program to find the **Sum of Digits** of a 3-digit number (e.g., $582 \implies 5 + 8 + 2 = 15$).
  - *Input:* 582
  - *Output:* 15
  - *Hint:* Isolate hundreds ($N/100$), tens ($(N/10)\%10$), units ($N\%10$).
- **Problem 14.12:** Write a program to **Reverse a 3-digit number** arithmetically (e.g., $479 \implies 974$).
  - *Formula:* $(d_3 \times 100) + (d_2 \times 10) + d_1$.
- **Problem 14.13:** What is the sign of the remainder in C? Predict the output:
  ```c
  printf("%d %d %d %d\n", 14 % 4, -14 % 4, 14 % -4, -14 % -4);
  ```
  *(Answer: 2, -2, 2, -2. Dividend determines sign!).*
- **Problem 14.14:** An ATM must dispense cash of $\$3,870$. Write a program to determine the minimum number of notes of $\$500, \$100, \$50, \$20, \$10$ required.

## 6. 🔥 LEVEL 4 — EXAM LEVEL (Output Prediction Drills)
- Predict the output for each line:
  - **Problem 14.15:** `printf("%d\n", 17 / 3 * 3 + 17 % 3);`
  - **Problem 14.16:** `printf("%f\n", 1 / 2 + 1 / 2);`
  - **Problem 14.17:** `printf("%.2f\n", (float)(5 / 2));` vs `printf("%.2f\n", (float)5 / 2);`
  - **Problem 14.18:** Write a program to compute the compound formula: $y = \frac{a^2 + b^2}{2ab}$ for $a=4, b=6$.

## 7. 🔴 LEVEL 5 — CHALLENGE
- **Problem 14.19:** Write a program to determine if an integer is Even or Odd using **ONLY arithmetic and modulus** without any `if` statements (e.g., array index lookup or math formula).
- **Problem 14.20:** Write a program to round a positive floating-point number to the nearest integer using only integer casting arithmetic: `int rounded = (int)(val + 0.5);`.

## 8. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 14.1 (Full arithmetic suite: +, -, *, /, %)
- [ ] Problem 14.2 (Integer truncation explanation)
- [ ] Problem 14.6 (Seconds to HH:MM:SS)
- [ ] Problem 14.8 & 14.9 (Last digit extraction & removal)
- [ ] Problem 14.11 (Sum of digits of 3-digit number)
- [ ] Problem 14.12 (Reverse 3-digit number)
- [ ] Problem 14.13 (Sign of modulus rules)

## 9. 🎯 What will this topic prepare me for?
Prepares you for loop-based digit extraction (Armstrong, Palindrome, Reverse numbers).

---

# 15. Unary Operators

## 1. What skill does this topic build?
🔥 **Top Exam Topic:** Mastering Prefix vs Postfix increment/decrement (`++x` vs `x++`) and code execution tracing.

## 2. Prerequisites
Topic 14 (Arithmetic Operators).

## 3. 🟢 LEVEL 1 — VERY BASIC (Prefix vs Postfix Basics)
- **Problem 15.1:** Explain the difference between `++x` (Prefix) and `x++` (Postfix).
  - *Rule:* Prefix = "Update first, then use". Postfix = "Use current value, then update".
- Predict the output:
  - **Problem 15.2:**
    ```c
    int a = 5;
    printf("%d\n", ++a);
    printf("%d\n", a);
    ```
  - **Problem 15.3:**
    ```c
    int a = 5;
    printf("%d\n", a++);
    printf("%d\n", a);
    ```
  - **Problem 15.4:**
    ```c
    int x = 10;
    int y = x--;
    printf("x = %d, y = %d\n", x, y);
    ```
  - **Problem 15.5:**
    ```c
    int x = 10;
    int y = --x;
    printf("x = %d, y = %d\n", x, y);
    ```

## 4. 🟢 LEVEL 2 — BASIC (Expressions with Increments)
- Predict the output and trace memory:
  - **Problem 15.6:**
    ```c
    int a = 4, b = 3;
    int c = a++ + ++b;
    printf("a=%d, b=%d, c=%d\n", a, b, c);
    ```
  - **Problem 15.7:**
    ```c
    int x = 7;
    int y = --x + x--;
    printf("x=%d, y=%d\n", x, y);
    ```
  - **Problem 15.8:**
    ```c
    int m = 10;
    int n = m++ * 2;
    printf("m=%d, n=%d\n", m, n);
    ```
  - **Problem 15.9:**
    ```c
    int m = 10;
    int n = ++m * 2;
    printf("m=%d, n=%d\n", m, n);
    ```
  - **Problem 15.10:**
    ```c
    int p = 5;
    p++;
    ++p;
    printf("p = %d\n", p);
    ```

## 5. 🟡 LEVEL 3 — INTERMEDIATE (Unary Precedence & `sizeof`)
- **Problem 15.11:** What is the output of `sizeof(int)` vs `sizeof(char)` vs `sizeof(double)`?
- **Problem 15.12:** Predict the output and explain why `x` does not change:
  ```c
  int x = 10;
  printf("%zu\n", sizeof(x++));
  printf("x = %d\n", x);
  ```
  *(sizeof operates at compile time; expressions inside are never executed!).*
- **Problem 15.13:** What does Unary Minus `-` do? Predict:
  ```c
  int a = -15;
  printf("%d\n", -a);
  ```
- **Problem 15.14:** What does the Address-of operator `&` return? Print the address of an integer variable.

## 6. 🔥 LEVEL 4 — EXAM LEVEL (Tricky Tracing Questions)
- Predict output step-by-step:
  - **Problem 15.15:**
    ```c
    int i = 1;
    i = i++ + ++i; // Note: Modifying variable multiple times between sequence points is UB in standard C, but tested on college exams!
    ```
  - **Problem 15.16:**
    ```c
    int a = 2, b = 3;
    int res = a++ * --b + ++a;
    printf("res = %d, a = %d, b = %d\n", res, a, b);
    ```
  - **Problem 15.17:**
    ```c
    int x = 0;
    printf("%d %d %d\n", x, x++, ++x);
    ```

## 7. 🔴 LEVEL 5 — CHALLENGE (Two's Complement Inversion)
- **Problem 15.18:** What does the Bitwise NOT operator `~` do? Predict:
  ```c
  int x = 5;
  printf("%d\n", ~x); // Formula: -(x + 1)
  ```
- **Problem 15.19:** Write a program proving that $-x == \sim x + 1$ (Two's complement negation).

## 8. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 15.1 (Prefix vs Postfix definition)
- [ ] Problems 15.2 & 15.3 (Basic prefix/postfix outputs)
- [ ] Problem 15.6 (Combined expression `a++ + ++b`)
- [ ] Problem 15.8 & 15.9 (Increment with multiplication)
- [ ] Problem 15.12 (The `sizeof(x++)` non-evaluation rule)
- [ ] Problem 15.16 (Comprehensive tracing problem)

## 9. 🎯 What will this topic prepare me for?
Prepares you for loop counters (`for(i=0; i<n; i++)`) and output prediction midterm questions.

---

# 16. Relational Operators

## 1. What skill does this topic build?
Teaches evaluating inequalities, equality comparisons, and understanding truth values (`1` for True, `0` for False).

## 2. Prerequisites
Topics 14 & 15.

## 3. 🟢 LEVEL 1 — VERY BASIC (True / False Evaluation)
- Predict the integer output (`1` or `0`):
  - **Problem 16.1:** `printf("%d\n", 10 > 5);`
  - **Problem 16.2:** `printf("%d\n", 10 < 5);`
  - **Problem 16.3:** `printf("%d\n", 10 == 10);`
  - **Problem 16.4:** `printf("%d\n", 10 != 10);`
  - **Problem 16.5:** `printf("%d\n", 5 >= 5);`

## 4. 🟢 LEVEL 2 — BASIC (Relational Expressions)
- **Problem 16.6:** What is the fundamental difference between `=` (Assignment) and `==` (Equality)?
- Predict the output:
  - **Problem 16.7:**
    ```c
    int a = 5, b = 10;
    printf("%d\n", a + 5 == b);
    ```
  - **Problem 16.8:**
    ```c
    int x = 0;
    printf("%d\n", x == 0);
    ```
  - **Problem 16.9:**
    ```c
    int a = 15;
    printf("%d\n", a > 10 && a < 20);
    ```
- **Problem 16.10:** Write a program to read two integers and print `1` if the first is strictly greater than the second, or `0` otherwise.

## 5. 🟡 LEVEL 3 — INTERMEDIATE (Chained Comparisons Pitfall)
- **Problem 16.11:** Explain why the math expression `5 < x < 10` is a **FATAL TRAP in C**!
  - *Trace:* In C, `5 < x < 10` evaluates left-to-right: `(5 < x)` evaluates to `1` or `0`. Then `(1 < 10)` or `(0 < 10)` is **ALWAYS TRUE (1)**, regardless of $x$!
  - *Fix:* How must you write this condition properly? (`x > 5 && x < 10`).
- **Problem 16.12:** Predict the output:
  ```c
  int x = 25;
  printf("%d\n", 5 < x < 10); // Prints 1!
  ```

## 6. 🔥 LEVEL 4 — EXAM LEVEL
- Predict the output:
  - **Problem 16.13:**
    ```c
    int a = 10, b = 20, c = 30;
    printf("%d\n", a < b < c);
    printf("%d\n", c > b > a);
    ```
    *(Explanation: `10 < 20` is 1; `1 < 30` is 1. But `30 > 20` is 1; `1 > 10` is 0!).*
  - **Problem 16.14:**
    ```c
    int x = 5;
    if (x = 0) printf("A\n"); else printf("B\n");
    ```
    *(Assignment `x = 0` evaluates to 0, which is False $\implies$ prints B!).*

## 7. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 16.1 to 16.5 (Relational truth values 1 and 0)
- [ ] Problem 16.6 (= vs == difference)
- [ ] Problem 16.11 (The `5 < x < 10` chained comparison trap)
- [ ] Problem 16.13 (Evaluation order of chained comparisons)
- [ ] Problem 16.14 (The `if (x = 0)` assignment bug)

## 8. 🎯 What will this topic prepare me for?
Forms the condition checks in `if`, `while`, and `for` statements.

---

# 17. Logical Operators

## 1. What skill does this topic build?
🔥 **High-Yield Topic:** Combining multiple conditions using AND (`&&`), OR (`||`), NOT (`!`), and mastering Short-Circuit evaluation.

## 2. Prerequisites
Topic 16 (Relational Operators).

## 3. 🟢 LEVEL 1 — VERY BASIC (Truth Tables)
- Write the truth tables for:
  - **Problem 17.1:** Logical AND (`&&`)
  - **Problem 17.2:** Logical OR (`||`)
  - **Problem 17.3:** Logical NOT (`!`)
- Predict the output:
  - **Problem 17.4:** `printf("%d\n", (5 > 3) && (10 > 7));`
  - **Problem 17.5:** `printf("%d\n", (5 > 3) || (10 < 7));`
  - **Problem 17.6:** `printf("%d\n", !(5 > 3));`

## 4. 🟢 LEVEL 2 — BASIC (Condition Formulation)
- Express each English statement as a valid C logical expression:
  - **Problem 17.7:** "Age is between 18 and 60 inclusive."
  - **Problem 17.8:** "Number is divisible by both 3 AND 5."
  - **Problem 17.9:** "Character is either `'Y'` OR `'y'`."
  - **Problem 17.10:** "Marks are greater than 50 AND attendance is at least 75%."

## 5. 🟡 LEVEL 3 — INTERMEDIATE (Short-Circuit Evaluation)
- **Problem 17.11:** What is Short-Circuit Evaluation?
  - *Rule 1:* In `A && B`, if $A$ is False (0), is $B$ evaluated? (NO!).
  - *Rule 2:* In `A || B`, if $A$ is True (1), is $B$ evaluated? (NO!).
- Predict the output and trace variable changes:
  - **Problem 17.12:**
    ```c
    int a = 0, b = 5;
    if (a && ++b) { printf("Yes\n"); }
    printf("b = %d\n", b); // b remains 5! ++b was skipped!
    ```
  - **Problem 17.13:**
    ```c
    int a = 1, b = 5;
    if (a || ++b) { printf("Yes\n"); }
    printf("b = %d\n", b); // b remains 5! ++b was skipped!
    ```
  - **Problem 17.14:**
    ```c
    int x = 0;
    if (x != 0 && (100 / x > 2)) {
        printf("Safe\n");
    } else {
        printf("Division by zero prevented by short-circuit!\n");
    }
    ```

## 6. 🔥 LEVEL 4 — EXAM LEVEL
- Predict output:
  - **Problem 17.15:**
    ```c
    int a = 1, b = 0, c = 2;
    int res = a++ && ++b || c++;
    printf("res=%d, a=%d, b=%d, c=%d\n", res, a, b, c);
    ```
  - **Problem 17.16:** Write the complete logical condition to test whether year `Y` is a **Leap Year**:
    *(Divisible by 400) OR ((Divisible by 4) AND (NOT divisible by 100))*.
    - *C code:* `(y % 400 == 0) || ((y % 4 == 0) && (y % 100 != 0))`.

## 7. 🔴 LEVEL 5 — CHALLENGE
- **Problem 17.17:** Write a single C logical expression to test whether character `ch` is an English alphabet letter (either uppercase `'A'`-`'Z'` or lowercase `'a'`-`'z'`).

## 8. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problems 17.4 to 17.6 (Basic logical evaluations)
- [ ] Problems 17.7 to 17.9 (Formulating logical conditions)
- [ ] Problems 17.12 & 17.13 (Short-circuit increment skips)
- [ ] Problem 17.14 (Short-circuit guarding division by zero)
- [ ] Problem 17.16 (Leap year compound condition)

## 9. 🎯 What will this topic prepare me for?
Prepares you for writing complex conditions in `if`, `while`, and data validation checks.

---

# 18. Assignment Operators

## 1. What skill does this topic build?
Teaches compound assignments (`+=`, `-=`, `*=`, `/=`, `%=`) and right-to-left associativity.

## 2. Prerequisites
Topic 14 (Arithmetic Operators).

## 3. 🟢 LEVEL 1 — VERY BASIC
- Predict the output:
  - **Problem 18.1:**
    ```c
    int x = 10;
    x += 5;
    printf("x = %d\n", x);
    ```
  - **Problem 18.2:**
    ```c
    int x = 20;
    x -= 7;
    printf("x = %d\n", x);
    ```
  - **Problem 18.3:**
    ```c
    int x = 6;
    x *= 4;
    printf("x = %d\n", x);
    ```
  - **Problem 18.4:**
    ```c
    int x = 30;
    x /= 5;
    printf("x = %d\n", x);
    ```
  - **Problem 18.5:**
    ```c
    int x = 17;
    x %= 5;
    printf("x = %d\n", x);
    ```

## 4. 🟢 LEVEL 2 — BASIC (Implicit Parentheses Rule)
- **Problem 18.6:** In `x *= a + b`, explain why this is equivalent to `x = x * (a + b)` and NOT `x = x * a + b`.
- Predict the output:
  - **Problem 18.7:**
    ```c
    int x = 2;
    x *= 3 + 4;
    printf("x = %d\n", x); // x = 2 * (7) = 14, NOT 2*3 + 4 = 10!
    ```
  - **Problem 18.8:**
    ```c
    int a = 5;
    a += a;
    printf("a = %d\n", a);
    ```
  - **Problem 18.9:**
    ```c
    int a = 10;
    a += a -= a *= a;
    printf("a = %d\n", a);
    ```

## 5. 🟡 LEVEL 3 — INTERMEDIATE
- **Problem 18.10:** Why does the assignment expression itself have a value? Predict:
  ```c
  int a;
  printf("%d\n", a = 42); // Prints 42!
  ```
- **Problem 18.11:** Trace:
  ```c
  int x, y, z;
  x = y = z = 100;
  x += (y -= (z *= 2));
  printf("x=%d, y=%d, z=%d\n", x, y, z);
  ```

## 6. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problems 18.1 to 18.5 (Compound operators)
- [ ] Problem 18.6 & 18.7 (The `x *= a + b` parentheses rule)
- [ ] Problem 18.10 (Assignment operator returns value)

## 7. 🎯 What will this topic prepare me for?
Used inside loops for accumulators: `sum += i;` and `fact *= i;`.

---

# 19. Conditional Operator (Ternary)

## 1. What skill does this topic build?
Teaches writing concise, inline decision expressions using `? :`.

## 2. Prerequisites
Topics 16 & 17.

## 3. 🟢 LEVEL 1 — VERY BASIC (Syntax & Simple Max/Min)
- **Problem 19.1:** State the syntax of the conditional operator and identify its three components.
- **Problem 19.2:** Write an expression using `? :` to find the maximum of two integers `a` and `b`.
- **Problem 19.3:** Write an expression using `? :` to find the minimum of two integers `a` and `b`.
- **Problem 19.4:** Write an expression using `? :` that evaluates to string `"EVEN"` or `"ODD"` based on `n % 2 == 0`.
- **Problem 19.5:** Write a program to determine if a student has Passed (score $\ge 50$) or Failed using `? :`.

## 4. 🟢 LEVEL 2 — BASIC (Inline Printing)
- Predict the output:
  - **Problem 19.6:**
    ```c
    int a = 15, b = 25;
    printf("Max: %d\n", (a > b) ? a : b);
    ```
  - **Problem 19.7:**
    ```c
    int n = -10;
    printf("%s\n", (n >= 0) ? "Positive" : "Negative");
    ```
  - **Problem 19.8:**
    ```c
    int x = 5;
    int y = (x == 5) ? 100 : 200;
    printf("y = %d\n", y);
    ```

## 5. 🟡 LEVEL 3 — INTERMEDIATE (Nested Conditional Operators)
- **Problem 19.9:** Write an expression to find the **Maximum of Three Numbers** $a, b, c$ using nested ternary operators:
  `int max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);`
- **Problem 19.10:** Write an expression to determine if a number is Positive, Negative, or Zero:
  `(n > 0) ? "Positive" : ((n < 0) ? "Negative" : "Zero")`
- **Problem 19.11:** Compute the absolute value $|x|$ using `? :`.

## 6. 🔥 LEVEL 4 — EXAM LEVEL
- Predict output:
  - **Problem 19.12:**
    ```c
    int a = 1, b = 2, c = 3;
    int res = (a > b) ? a : (b > c) ? b : c;
    printf("res = %d\n", res);
    ```

## 7. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 19.2 & 19.3 (Max/Min of 2 numbers)
- [ ] Problem 19.4 (Even/Odd ternary string)
- [ ] Problem 19.9 (Max of 3 numbers using nested ternary)
- [ ] Problem 19.10 (Positive/Negative/Zero nested ternary)

## 8. 🎯 What will this topic prepare me for?
Prepares you for clean inline assignments and transitions smoothly into `if-else`.

---

# 20. Operator Precedence & Associativity

## 1. What skill does this topic build?
🔥 **Top Midterm Trap:** Accurately calculating expressions containing multiple mixed operators.

## 2. Prerequisites
Topics 14 to 19.

## 3. 🟢 LEVEL 1 — VERY BASIC (Arithmetic Precedence)
- Evaluate and show the order of operations:
  - **Problem 20.1:** `5 + 3 * 2`
  - **Problem 20.2:** `10 - 4 / 2`
  - **Problem 20.3:** `10 / 2 * 3` (Check left-to-right associativity!)
  - **Problem 20.4:** `(5 + 3) * 2`
  - **Problem 20.5:** `100 % 30 * 2`

## 4. 🟢 LEVEL 2 — BASIC (Relational & Arithmetic Mixed)
- Evaluate:
  - **Problem 20.6:** `5 + 2 > 6` (Arithmetic `+` before Relational `>`)
  - **Problem 20.7:** `10 - 2 == 4 * 2`
  - **Problem 20.8:** `10 > 5 && 3 < 4` (Relational before Logical AND)
  - **Problem 20.9:** `5 + 3 * 2 > 10 && 4 < 2 * 3`

## 5. 🟡 LEVEL 3 — INTERMEDIATE (Complex Compound Expressions)
- Step-by-step evaluation table:
  - **Problem 20.10:**
    Evaluate: `2 + 3 * 4 - 6 / 2`
    | Step | Operation | Resulting Sub-expression |
    |:---|:---|:---|
    | 1 | `3 * 4 = 12` | `2 + 12 - 6 / 2` |
    | 2 | `6 / 2 = 3` | `2 + 12 - 3` |
    | 3 | `2 + 12 = 14` | `14 - 3` |
    | 4 | `14 - 3 = 11` | `11` |
  - **Problem 20.11:** Evaluate: `10 != 5 + 5 && 8 >= 4 + 4`
  - **Problem 20.12:** Evaluate: `!0 && !5`

## 6. 🔥 LEVEL 4 — EXAM LEVEL (30-Problem Prediction Drills)
Evaluate the final integer value:
- **Problem 20.13:** `int ans = 4 * 3 / 2;`
- **Problem 20.14:** `int ans = 4 / 2 * 3;`
- **Problem 20.15:** `int ans = 5 + 4 * 3 / 2 - 1;`
- **Problem 20.16:** `int ans = 10 == 10 && 5 > 2 || 0;`
- **Problem 20.17:** `int ans = !(5 > 2) || (3 != 1 && 4 >= 4);`
- **Problem 20.18:** `int ans = 10 > 5 ? 1 + 2 : 3 + 4;`
- **Problem 20.19:** `int a = 5, b = 2; int ans = a > b ? a++ : b++;`
- **Problem 20.20:** `int ans = 2 + 3 << 1;` (`+` has higher precedence than `<<`!)

## 7. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problems 20.1 to 20.3 (Basic multiplicative vs additive)
- [ ] Problem 20.8 (Relational vs Logical)
- [ ] Problem 20.10 (Step-by-step table evaluation)
- [ ] Problems 20.13 to 20.17 (Exam prediction drills)

## 8. 🎯 What will this topic prepare me for?
Guarantees full marks in the written output prediction section of your midterm.

---

# 21. Expressions

## 1. What skill does this topic build?
Teaches evaluating algebraic expressions in C, understanding side effects, and statement construction.

## 2. Prerequisites
Topic 20.

## 3. 🟢 LEVEL 1 — VERY BASIC
- Convert each algebraic formula into a valid C expression:
  - **Problem 21.1:** $ax^2 + bx + c$
  - **Problem 21.2:** $\frac{a + b}{c + d}$
  - **Problem 21.3:** $\frac{-b + \sqrt{b^2 - 4ac}}{2a}$
  - **Problem 21.4:** $s = ut + \frac{1}{2}at^2$
  - **Problem 21.5:** $A = P(1 + \frac{R}{100})^T$

## 4. 🟢 LEVEL 2 — BASIC
- **Problem 21.6:** In $s = ut + \frac{1}{2}at^2$, why is writing `0.5 * a * t * t` correct, while `(1 / 2) * a * t * t` results in zero?
- **Problem 21.7:** Write a C program to evaluate $s = ut + 0.5at^2$ for $u = 5.0, a = 9.8, t = 3.0$.

## 5. 🟡 LEVEL 3 — INTERMEDIATE
- **Problem 21.8:** What is a Side Effect in an expression? Give an example where an expression alters a variable's memory while returning a value.
- **Problem 21.9:** What is a Sequence Point? Why does `a = i++ + i++;` produce undefined behavior?

## 6. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problems 21.1 to 21.4 (Algebraic to C conversions)
- [ ] Problem 21.6 (The `1/2` zero truncation trap)
- [ ] Problem 21.7 (Physics motion formula program)

## 7. 🎯 What will this topic prepare me for?
Prepares you for coding real mathematical simulations and physics formulas.

---

# 22. Type Conversions

## 1. What skill does this topic build?
Teaches implicit type promotion rules, integer division fixes, and explicit type casting `(type)`.

## 2. Prerequisites
Topics 9 & 14.

## 3. 🟢 LEVEL 1 — VERY BASIC (Implicit vs Explicit)
- **Problem 22.1:** What is Implicit Type Conversion (Coercion)? Give an example.
- **Problem 22.2:** What is Explicit Type Conversion (Type Casting)? Give an example.
- Predict the output:
  - **Problem 22.3:** `printf("%f\n", 5 / 2);`
  - **Problem 22.4:** `printf("%f\n", (float)5 / 2);`
  - **Problem 22.5:** `printf("%d\n", (int)5.85);`

## 4. 🟢 LEVEL 2 — BASIC (Common Casting Scenarios)
- **Problem 22.6:** Write a program to compute the exact average of 7 and 2:
  ```c
  int a = 7, b = 2;
  float avg = (float)a / b;
  ```
- **Problem 22.7:** Convert a character `'c'` to uppercase by subtracting 32 using ASCII casting: `char upper = (char)('c' - 32);`.
- **Problem 22.8:** Predict the output:
  ```c
  float f = 9.99f;
  int i = (int)f;
  printf("i = %d\n", i); // Truncates towards zero: 9
  ```

## 5. 🟡 LEVEL 3 — INTERMEDIATE (Promotion Ladder)
- **Problem 22.9:** State the C automatic type promotion ladder from `char` up to `long double`.
- **Problem 22.10:** Predict the type and value:
  ```c
  char c = 'A'; // ASCII 65
  int i = 5;
  float f = 2.5f;
  // What is the type of: c + i * f ?
  ```
  *(Answer: float, value = 65 + 12.5 = 77.5).*

## 6. 🔥 LEVEL 4 — EXAM LEVEL
- **Problem 22.11:** What happens when an `unsigned int` and a `signed int` are compared? Predict:
  ```c
  int a = -1;
  unsigned int b = 1;
  if (a < b) printf("A\n"); else printf("B\n");
  ```
  *(Answer: Prints B! Because `a` is converted to unsigned, becoming 4,294,967,295!).*

## 7. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 22.1 & 22.2 (Definitions of implicit vs explicit casting)
- [ ] Problem 22.4 (Floating point division via cast)
- [ ] Problem 22.6 (Average calculation program)
- [ ] Problem 22.8 (Truncation of float to int)
- [ ] Problem 22.11 (The signed vs unsigned comparison trap)

## 8. 🎯 What will this topic prepare me for?
Prevents loss-of-precision bugs across calculations and pointer manipulation.

---

# 23. Library Functions

## 1. What skill does this topic build?
Teaches leveraging built-in math and character utilities from `<math.h>` and `<ctype.h>`.

## 2. Prerequisites
Topic 6.

## 3. 🟢 LEVEL 1 — VERY BASIC (Math Library `<math.h>`)
- Write expressions using `<math.h>` functions:
  - **Problem 23.1:** Square root of $64$ (`sqrt(64.0)`)
  - **Problem 23.2:** $2^5$ (`pow(2.0, 5.0)`)
  - **Problem 23.3:** Absolute value of $-7.8$ (`fabs(-7.8)`)
  - **Problem 23.4:** Ceiling of $4.2$ (`ceil(4.2)` $\implies 5.0$)
  - **Problem 23.5:** Floor of $4.8$ (`floor(4.8)` $\implies 4.0$)

## 4. 🟢 LEVEL 2 — BASIC (Character Library `<ctype.h>`)
- State what each returns (True/non-zero or False/0):
  - **Problem 23.6:** `isalpha('G')`
  - **Problem 23.7:** `isdigit('9')`
  - **Problem 23.8:** `isupper('a')`
  - **Problem 23.9:** `toupper('b')`
  - **Problem 23.10:** `tolower('M')`

## 5. 🟡 LEVEL 3 — INTERMEDIATE
- **Problem 23.11:** Write a program to calculate the hypotenuse of a right-angled triangle given base $b = 3.0$ and height $h = 4.0$ using `sqrt((b*b) + (h*h))`.
- **Problem 23.12:** Write a program to compute the roots of a quadratic equation $ax^2 + bx + c = 0$ using `sqrt()`.
- **Problem 23.13:** What is the difference between `abs()` from `<stdlib.h>` (for integers) and `fabs()` from `<math.h>` (for floating-point)?

## 6. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problems 23.1 to 23.5 (Core math functions: sqrt, pow, fabs, ceil, floor)
- [ ] Problems 23.6 to 23.10 (Core ctype functions: isalpha, isdigit, toupper)
- [ ] Problem 23.11 (Hypotenuse calculation)

## 7. 🎯 What will this topic prepare me for?
Prepares you for geometry, engineering calculations, and input validation.

---

# 24. scanf() & Formatted Input

## 1. What skill does this topic build?
🔥 **Mandatory Exam Skill:** Reading user data from keyboard buffer, passing addresses `&`, and format specifier matching.

## 2. Prerequisites
Topics 9, 11, 14.

## 3. 🟢 LEVEL 1 — VERY BASIC (Single Value Input)
- **Problem 24.1:** Write code to prompt and read a single integer into `int age;`.
- **Problem 24.2:** Write code to prompt and read a decimal number into `float salary;`.
- **Problem 24.3:** Write code to prompt and read a double precision value into `double distance;` using `%lf`.
- **Problem 24.4:** Write code to prompt and read a single character into `char grade;`.
- **Problem 24.5:** Why is the address-of operator `&` required in `scanf("%d", &n);`? What happens if you omit it?

## 4. 🟢 LEVEL 2 — BASIC (Multiple Inputs & Calculations)
- **Problem 24.6:** Write a program to read **two integers** on a single line and print their sum.
- **Problem 24.7:** Write a program to read the length and width of a rectangle from the user and display its area.
- **Problem 24.8:** Write a program to read marks for 3 exams and compute their average.
- **Problem 24.9:** Write a program to read Principal, Rate, and Time and compute Simple Interest.
- **Problem 24.10:** Spot the bug in this code:
  ```c
  double radius;
  scanf("%f", &radius); // BUG: %f is for float! Must use %lf for double!
  ```

## 5. 🟡 LEVEL 3 — INTERMEDIATE (The Newline Buffer Trap)
- **Problem 24.11:** Explain why reading a character after reading an integer fails:
  ```c
  int age;
  char grade;
  scanf("%d", &age);
  scanf("%c", &grade); // SKIPPED! Why?
  ```
  *(Answer: `scanf("%d")` leaves the Enter key `\n` in the input buffer. The `%c` immediately reads that leftover `\n`!).*
- **Problem 24.12:** How do you fix the newline trap in `scanf`? (Answer: add a leading space `scanf(" %c", &grade);` to discard whitespace!).
- **Problem 24.13:** What does the return value of `scanf` represent?
  ```c
  int k = scanf("%d %d", &a, &b); // What is k if user types two numbers? (2)
  ```

## 6. 🔥 LEVEL 4 — EXAM LEVEL
- **Problem 24.14:** Write a complete interactive student report program that prompts for:
  - Student Roll (`int`)
  - Grade letter (`char`)
  - GPA (`float`)
  and prints a neat formatted summary.

## 7. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 24.1 & 24.3 (scanf int and double %lf)
- [ ] Problem 24.5 (Why & is mandatory)
- [ ] Problem 24.6 (Reading multiple inputs)
- [ ] Problem 24.10 (The double %lf vs %f bug)
- [ ] Problem 24.11 & 24.12 (The newline character buffer trap and space fix)

## 8. 🎯 What will this topic prepare me for?
Allows your programs to be interactive instead of hardcoded.

---

# 25. printf() & Formatted Output

## 1. What skill does this topic build?
Mastering screen display, escape sequences, width alignment, and return values.

## 2. Prerequisites
Topic 24.

## 3. 🟢 LEVEL 1 — VERY BASIC (Format Matching)
- **Problem 25.1:** Write `printf` calls to print an integer `x = 42`, a float `f = 3.14f`, a double `d = 1.23456`, and a char `c = 'Z'`.
- **Problem 25.2:** How do you print a literal percent sign `%` in `printf`? (`%%`).
- **Problem 25.3:** How do you print double quotes `"` in `printf`? (`\"`).
- **Problem 25.4:** Write a program to print numbers $1, 2, 3$ separated by tabs (`\t`) on line 1, and $4, 5, 6$ on line 2.
- **Problem 25.5:** How do you limit a floating-point number to exactly 2 decimal places? (`%.2f`).

## 4. 🟢 LEVEL 2 — BASIC (Width & Alignment)
- Predict the output:
  - **Problem 25.6:** `printf("|%5d|\n", 42);` (Right-aligned in width 5)
  - **Problem 25.7:** `printf("|%-5d|\n", 42);` (Left-aligned in width 5)
  - **Problem 25.8:** `printf("|%05d|\n", 42);` (Zero-padded in width 5)
  - **Problem 25.9:** `printf("|%8.2f|\n", 25.5);`
- **Problem 25.10:** Print an invoice receipt row showing Item Name (left aligned, width 15), Quantity (right aligned, width 5), and Price (right aligned, width 10, 2 decimals).

## 5. 🟡 LEVEL 3 — INTERMEDIATE (Return Value of `printf`)
- **Problem 25.11:** What does `printf` return?
  - *Rule:* Returns the total number of characters printed!
  - Predict:
    ```c
    int count = printf("Hello\n");
    printf("Count = %d\n", count); // Count = 6 (5 letters + '\n')
    ```
- **Problem 25.12:** Predict:
  ```c
  printf("%d", printf("%d", 1234)); // Inner prints 1234 and returns 4; outer prints 4! Output: 12344
  ```

## 6. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 25.2 (Printing literal `%%`)
- [ ] Problem 25.5 (Precision formatting `%.2f`)
- [ ] Problems 25.6 to 25.8 (Width, alignment `-`, and zero padding `0`)
- [ ] Problem 25.11 & 25.12 (Return value of printf)

## 7. 🎯 What will this topic prepare me for?
Prepares you for professional report generation and output prediction questions.

---

# 26. getchar() & putchar()

## 1. What skill does this topic build?
High-speed single character I/O.

## 2. Prerequisites
Topics 24 & 25.

## 3. 🟢 LEVEL 1 — VERY BASIC
- **Problem 26.1:** What is `getchar()` and what header file is required?
- **Problem 26.2:** What is `putchar()`?
- **Problem 26.3:** Write a program to read a character using `getchar()` and print it using `putchar()`.
- **Problem 26.4:** What is the return type of `getchar()`? (Answer: `int`, so it can represent all unsigned char values PLUS the EOF sentinel `-1`!).
- **Problem 26.5:** Compare `getchar()` with `scanf("%c", &ch)`.

## 4. 🟢 LEVEL 2 — BASIC
- **Problem 26.6:** Write a program to read a character and print its next alphabetical successor using `putchar(ch + 1)`.
- **Problem 26.7:** Write a program to read an uppercase letter with `getchar()` and print its lowercase counterpart using `putchar(ch + 32)`.

## 5. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 26.3 (Read and write single character)
- [ ] Problem 26.4 (Why getchar returns int)
- [ ] Problem 26.7 (Case conversion with getchar/putchar)

## 6. 🎯 What will this topic prepare me for?
Prepares you for character processing loops and string scanning.

---

# 27. gets() & puts()

## 1. What skill does this topic build?
Line-based string I/O and understanding security vulnerabilities.

## 2. Prerequisites
Topic 26.

## 3. 🟢 LEVEL 1 — VERY BASIC
- **Problem 27.1:** What is the purpose of `gets()`?
- **Problem 27.2:** What is the purpose of `puts()`? Does it automatically append a newline?
- **Problem 27.3:** Write a program to read a student's full name (including spaces) using `gets()` and display it with `puts()`.
- **Problem 27.4:** Compare `puts(str)` with `printf("%s\n", str)`.

## 4. 🟢 LEVEL 2 — BASIC (Security Warning)
- **Problem 27.5:** Why was `gets()` officially removed from the C11 standard? What is a Buffer Overflow?
- **Problem 27.6:** What is the modern, safe alternative to `gets()`? (`fgets(str, sizeof(str), stdin)`).

## 5. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 27.2 (puts automatic newline)
- [ ] Problem 27.3 (Reading multi-word line)
- [ ] Problem 27.5 (Why gets is unsafe)

## 6. 🎯 What will this topic prepare me for?
Prepares you for exam questions regarding line-based string reading.

---

# 28. Formatted I/O Modifiers

## 1. What skill does this topic build?
Mastery of `%10.2f`, `%-15s`, `%06d` modifiers for formatted tables.

## 2. Practice Problems
- **Problem 28.1:** Format the number `25` as a 6-digit zero-padded number (`000025`).
- **Problem 28.2:** Format `123.4567` to exactly 1 decimal place (`123.5`).
- **Problem 28.3:** Create a 3-column table output for Student Name, Roll No, and Marks with neat alignment.

---
---

# PART 3: CONTROL STATEMENTS

---

# 29. if Statement

## 1. What skill does this topic build?
One-way conditional execution.

## 2. Prerequisites
Topics 16 & 17 (Relational & Logical Operators).

## 3. 🟢 LEVEL 1 — VERY BASIC (Single Conditions)
- **Problem 29.1:** Input an integer. If it is positive, print `"Number is positive"`.
- **Problem 29.2:** Input an integer. If it is greater than 100, print `"Century scored!"`.
- **Problem 29.3:** Input an age. If age $\ge 18$, print `"Eligible to vote"`.
- **Problem 29.4:** Input temperature in Celsius. If temperature $> 35.0$, print `"Hot weather alert!"`.
- **Problem 29.5:** Input exam marks. If marks $< 40$, print `"Retake required"`.

## 4. 🟢 LEVEL 2 — BASIC
- **Problem 29.6:** Input an integer. If it is divisible by 5, print `"Divisible by 5"`.
- **Problem 29.7:** Input an integer. If it is an even number, double its value and print it.
- **Problem 29.8:** Input a purchase amount. If amount $> 1000$, apply a $\$100$ discount and print final total.

## 5. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 29.1 (Positive check)
- [ ] Problem 29.3 (Voting eligibility)
- [ ] Problem 29.6 (Divisibility check)

---

# 30. if-else Statement

## 1. What skill does this topic build?
🔥 **Core Skill:** Two-way mutually exclusive decision branching.

## 2. Prerequisites
Topic 29.

## 3. 🟢 LEVEL 1 — VERY BASIC
- **Problem 30.1:** Input an integer. Check whether it is **Even or Odd**.
- **Problem 30.2:** Input an integer. Check whether it is **Positive or Negative**.
- **Problem 30.3:** Input a student's marks. If marks $\ge 50$, print `"PASSED"`; else print `"FAILED"`.
- **Problem 30.4:** Input two distinct integers. Find and print the **Larger Number**.
- **Problem 30.5:** Input two distinct integers. Find and print the **Smaller Number**.

## 4. 🟢 LEVEL 2 — BASIC (Real-World Decisions)
- **Problem 30.6:** Input an age. If $\ge 18$, print `"Adult"`; else print `"Minor"`.
- **Problem 30.7:** Input Cost Price and Selling Price. Determine whether the transaction resulted in **Profit or Loss** and print the amount.
- **Problem 30.8:** Input an integer. Determine whether it is **Divisible by 7 or Not**.
- **Problem 30.9:** Input a character. Determine whether it is a **Vowel or Consonant** (assume lowercase `'a','e','i','o','u'`).
- **Problem 30.10:** Input a year. Determine whether it is a **Leap Year or Common Year**.

## 5. 🟡 LEVEL 3 — INTERMEDIATE (`else if` Ladders)
- **Problem 30.11:** Input an integer. Check whether it is **Positive, Negative, or Zero** (3-way decision).
- **Problem 30.12:** Input marks (0-100). Print Grade:
  - $90-100 \implies A+$
  - $80-89 \implies A$
  - $70-79 \implies B$
  - $60-69 \implies C$
  - $50-59 \implies D$
  - Below $50 \implies F$
- **Problem 30.13:** Input an electric meter's unit consumption. Calculate the bill using tiered slab rates:
  - First 100 units @ $\$1.50$/unit
  - Next 200 units @ $\$2.50$/unit
  - Above 300 units @ $\$4.00$/unit
- **Problem 30.14:** Input 3 side lengths $a, b, c$. Check whether they form a valid triangle ($a+b>c$ and $b+c>a$ and $a+c>b$).
- **Problem 30.15:** Input 3 sides of a valid triangle. Classify it as **Equilateral**, **Isosceles**, or **Scalene**.

## 6. 🔥 LEVEL 4 — EXAM LEVEL
- **Problem 30.16:** Write a menu-driven program or simple arithmetic calculator: Read two numbers and a character operator (`+`, `-`, `*`, `/`). Perform the operation and handle division by zero.
- **Problem 30.17:** Input basic salary and calculate Net Salary based on bonus slabs:
  - Basic $> 50000 \implies$ Bonus 20%
  - Basic $30000-50000 \implies$ Bonus 15%
  - Basic $< 30000 \implies$ Bonus 10%

## 7. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 30.1 (Even or Odd)
- [ ] Problem 30.4 (Larger of two numbers)
- [ ] Problem 30.7 (Profit or Loss)
- [ ] Problem 30.10 (Leap Year)
- [ ] Problem 30.11 (Positive, Negative, or Zero)
- [ ] Problem 30.12 (Grade calculation ladder)
- [ ] Problem 30.13 (Electricity slab bill)

## 8. 🎯 What will this topic prepare me for?
Forms the core logic of all computer algorithms.

---

# 31. Nested if & Dangling Else

## 1. What skill does this topic build?
Multi-tier conditional filtering and resolving ambiguous branch pairings.

## 2. Prerequisites
Topic 30.

## 3. 🟢 LEVEL 1 — VERY BASIC
- **Problem 31.1:** Find the **Largest of Three Numbers** $A, B, C$ using nested `if-else` statements.
- **Problem 31.2:** Find the **Smallest of Three Numbers** using nested `if-else`.
- **Problem 31.3:** Input a number. If it is positive, check whether it is even or odd. If negative, print `"Negative number ignored"`.

## 4. 🟢 LEVEL 2 — BASIC
- **Problem 31.4:** Blood Donor Eligibility: A person can donate blood if:
  - Age $\ge 18$ AND $\le 65$
  - Weight $\ge 50\text{ kg}$
  Write nested checks giving specific reasons if rejected (e.g., "Age valid, but underweight").
- **Problem 31.5:** University Admission Screening:
  - Math score $\ge 70$
  - English score $\ge 60$
  - Combined total $\ge 150$

## 5. 🟡 LEVEL 3 — INTERMEDIATE (The Dangling Else Bug)
- **Problem 31.6:** Predict the output of this unbraced code and explain why braces are necessary:
  ```c
  int a = 10, b = -5;
  if (a > 0)
      if (b > 0)
          printf("Both positive\n");
  else
      printf("What does this else pair with?\n");
  ```
  *(The else pairs with `if (b > 0)`, so it prints "What does this else pair with?").*
- **Problem 31.7:** Find the **Largest of Four Numbers** $a, b, c, d$ using nested comparisons.

## 6. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 31.1 (Largest of 3 numbers using nested if)
- [ ] Problem 31.4 (Blood donor multi-tier eligibility)
- [ ] Problem 31.6 (Dangling else resolution)

---

# 32. switch Statement

## 1. What skill does this topic build?
Multi-way discrete jump branching, menu-driven programs, and fall-through control.

## 2. Prerequisites
Topics 9 & 16.

## 3. 🟢 LEVEL 1 — VERY BASIC
- **Problem 32.1:** Input a day number (1-7). Print the corresponding day of the week (1 $\to$ Monday, 7 $\to$ Sunday).
- **Problem 32.2:** Input a month number (1-12). Print the month name.
- **Problem 32.3:** What is the role of `break;` inside a `switch` statement? What happens if `break` is omitted?
- **Problem 32.4:** What types are legally allowed in a `switch` expression? Can `float` or `double` be used? (Answer: NO! Only integer types `int`, `char`, `enum`).
- **Problem 32.5:** What is the `default:` label in a `switch`? Does it have to be at the bottom?

## 4. 🟢 LEVEL 2 — BASIC (Fall-Through Behavior)
- **Problem 32.6:** Input a vowel character (`'a'`, `'e'`, `'i'`, `'o'`, `'u'`). Use deliberate **fall-through** to print `"VOWEL"`:
  ```c
  case 'a': case 'e': case 'i': case 'o': case 'u':
      printf("VOWEL\n"); break;
  ```
- **Problem 32.7:** Input a grade character (`'A'`, `'B'`, `'C'`, `'D'`, `'F'`). Print a motivational message for each.
- **Problem 32.8:** Input a month number (1-12). Print the number of days in that month (handle February as 28 days). Use fall-through for 31-day months (1, 3, 5, 7, 8, 10, 12).

## 5. 🟡 LEVEL 3 — INTERMEDIATE (Menu-Driven Programs)
- **Problem 32.9:** Build a **Simple Menu-Driven Calculator**:
  ```text
  1. Add
  2. Subtract
  3. Multiply
  4. Divide
  Enter choice (1-4):
  ```
  Perform the requested calculation on two entered numbers.
- **Problem 32.10:** Build an **ATM Menu System**:
  ```text
  1. Check Balance
  2. Deposit Cash
  3. Withdraw Cash
  4. Exit
  ```
- **Problem 32.11:** Build a **Geometric Area Calculator**:
  `1: Circle, 2: Rectangle, 3: Triangle`.

## 6. 🔥 LEVEL 4 — EXAM LEVEL
- **Problem 32.12:** Predict the output of this code with missing breaks:
  ```c
  int x = 2;
  switch (x) {
      case 1: printf("One ");
      case 2: printf("Two ");
      case 3: printf("Three ");
      default: printf("Done\n");
  }
  ```
  *(Output: `Two Three Done` due to fall-through!).*

## 7. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 32.1 (Day of week)
- [ ] Problem 32.3 & 32.12 (The missing break fall-through trap)
- [ ] Problem 32.4 (Data types allowed in switch rule)
- [ ] Problem 32.6 (Vowel check with deliberate fall-through)
- [ ] Problem 32.8 (Month days grouping)
- [ ] Problem 32.9 (Menu-driven calculator)

## 8. 🎯 What will this topic prepare me for?
Prepares you for command interpreters, state machines, and interactive console apps.

---

# 33. while Loop

## 1. What skill does this topic build?
🔥 **Major Topic:** Entry-controlled repetition, counter updates, and digit-processing algorithms.

## 2. Prerequisites
Topics 11, 14, 16.

## 3. 🟢 LEVEL 1 — VERY BASIC (Counting & Printing)
- **Problem 33.1:** Print numbers from 1 to 10.
- **Problem 33.2:** Print numbers from 10 down to 1 (Countdown).
- **Problem 33.3:** Print all Even numbers between 1 and 20.
- **Problem 33.4:** Print all Odd numbers between 1 and 20.
- **Problem 33.5:** Print multiples of 5 from 5 to 50.

## 4. 🟢 LEVEL 2 — BASIC (Accumulator Sums & Products)
- **Problem 33.6:** Calculate the **Sum of numbers from 1 to $N$** entered by the user.
  - *Trace table:* $i, \text{sum}$.
- **Problem 33.7:** Calculate the **Factorial of $N$** ($N! = 1 \times 2 \times \dots \times N$) using `while`.
- **Problem 33.8:** Print the **Multiplication Table** of a number $N$ up to 10 ($N \times 1 = \dots$).
- **Problem 33.9:** Calculate $X^Y$ ($X$ to the power $Y$) by multiplying $X$ repeatedly $Y$ times.

## 5. 🟡 LEVEL 3 — INTERMEDIATE (Digit Manipulation Engine)
- **Problem 33.10:** **Count the Digits** of an integer $N$ (e.g., $4582 \implies 4\text{ digits}$).
  - *Logic:* In each loop iteration, divide $N$ by 10 (`N /= 10;`) and increment count. Stop when $N == 0$.
- **Problem 33.11:** Find the **Sum of Digits** of an arbitrary positive integer (e.g., $734 \implies 7+3+4 = 14$).
  - *Logic:* Extract digit with `N % 10`, add to sum, strip with `N /= 10`.
- **Problem 33.12:** **Reverse an Integer** (e.g., $1234 \implies 4321$).
  - *Formula:* `rev = (rev * 10) + (N % 10); N /= 10;`.
- **Problem 33.13:** Check whether a number is a **Palindrome** (e.g., $1221 \implies \text{Palindrome}$).
  - *Logic:* Reverse the number; if `original == reversed`, it is a palindrome!

## 6. 🔥 LEVEL 4 — EXAM LEVEL (Classic Number Properties)
- **Problem 33.14:** Check whether an integer $N$ is a **Prime Number** using a `while` loop.
- **Problem 33.15:** Check whether an integer $N$ is an **Armstrong Number** (e.g., $153 = 1^3 + 5^3 + 3^3 = 153$).
- **Problem 33.16:** Find the **Greatest Common Divisor (GCD)** of two numbers using Euclid's subtraction method:
  `while (a != b) { if (a > b) a -= b; else b -= a; }`.
- **Problem 33.17:** Find the **Least Common Multiple (LCM)** of two numbers using formula $\text{LCM} = (a \times b) / \text{GCD}$.
- **Problem 33.18:** Check whether a number is a **Perfect Number** (Sum of its proper divisors equals the number, e.g., $6 = 1 + 2 + 3$).

## 7. 🔴 LEVEL 5 — CHALLENGE
- **Problem 33.19:** Check whether a number is a **Strong Number** (Sum of factorials of digits equals the number, e.g., $145 = 1! + 4! + 5! = 1 + 24 + 120 = 145$).
- **Problem 33.20:** Generate the first $N$ terms of the **Fibonacci Series** using `while`.

## 8. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 33.1 (Print 1 to 10)
- [ ] Problem 33.6 (Sum 1 to N)
- [ ] Problem 33.7 (Factorial)
- [ ] Problem 33.8 (Multiplication table)
- [ ] Problem 33.10 (Count digits)
- [ ] Problem 33.11 (Sum of digits)
- [ ] Problem 33.12 (Reverse number)
- [ ] Problem 33.13 (Palindrome check)
- [ ] Problem 33.14 (Prime number check)
- [ ] Problem 33.15 (Armstrong number check)
- [ ] Problem 33.16 (GCD of two numbers)

## 9. 🎯 What will this topic prepare me for?
Forms the core of all iterative data processing and algorithm analysis.

---

# 34. do-while Loop

## 1. What skill does this topic build?
Exit-controlled iteration, guaranteeing at least one execution (ideal for interactive user menus).

## 2. Prerequisites
Topic 33 (while loop).

## 3. 🟢 LEVEL 1 — VERY BASIC
- **Problem 34.1:** Print numbers from 1 to 5 using `do-while`.
- **Problem 34.2:** Explain why `do-while` executes **at least once** even if the condition is False initially:
  ```c
  int x = 10;
  do {
      printf("Executes once!\n");
  } while (x < 5);
  ```
- **Problem 34.3:** Note the mandatory semicolon: Why does `do { ... } while (cond);` require a semicolon, while `while(cond) { ... }` does not?

## 4. 🟢 LEVEL 2 — BASIC (Interactive Repetition)
- **Problem 34.4:** Write a program that repeatedly asks the user to enter a positive number. Keep prompting until the user enters a negative number.
- **Problem 34.5:** Build a calculator program that performs an operation and then asks: `"Do you want to continue? (y/n)"`. If `'y'`, loop again.
- **Problem 34.6:** Password Retry: Allow a user up to 3 attempts to enter a correct PIN `1234`. If correct, print `"Access Granted"`.

## 5. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 34.2 (Proof that do-while runs at least once)
- [ ] Problem 34.4 (Validation loop)
- [ ] Problem 34.5 (Repeat until user chooses exit)

---

# 35. for Loop

## 1. What skill does this topic build?
🔥 **Most Popular Loop:** Count-controlled iteration unifying initialization, condition, and update in a single compact line.

## 2. Prerequisites
Topics 33 & 34.

## 3. 🟢 LEVEL 1 — VERY BASIC (Header Lifecycle)
- **Problem 35.1:** State the 3 components inside a `for` loop header: `for (initialization; condition; update)`. Explain the exact execution sequence.
- **Problem 35.2:** Print numbers from 1 to 10 using `for`.
- **Problem 35.3:** Print numbers from 20 down to 0 stepping down by 2 (`i -= 2`).
- **Problem 35.4:** Print squares of numbers from 1 to 10 ($1, 4, 9, 16, \dots$).
- **Problem 35.5:** Compute the sum of integers from 1 to 100.

## 4. 🟢 LEVEL 2 — BASIC
- **Problem 35.6:** Calculate the Factorial of $N$ using a `for` loop.
- **Problem 35.7:** Compute the sum of all **Even numbers** between 1 and $N$.
- **Problem 35.8:** Compute the sum of all **Odd numbers** between 1 and $N$.
- **Problem 35.9:** Print all characters from `'A'` to `'Z'` using a `for` loop:
  `for (char ch = 'A'; ch <= 'Z'; ch++) printf("%c ", ch);`

## 5. 🟡 LEVEL 3 — INTERMEDIATE (Series Summation)
- Write programs to calculate the sum of these mathematical series up to $N$ terms:
  - **Problem 35.10:** $1 + \frac{1}{2} + \frac{1}{3} + \dots + \frac{1}{N}$ (Harmonic Series)
  - **Problem 35.11:** $1^2 + 2^2 + 3^2 + \dots + N^2$
  - **Problem 35.12:** $1 - 2 + 3 - 4 + 5 - \dots \pm N$ (Alternating Series)
  - **Problem 35.13:** $2 + 4 + 8 + 16 + \dots$ (Geometric Series $2^i$)

## 6. 🔥 LEVEL 4 — EXAM LEVEL
- **Problem 35.14:** Print all **Prime numbers between 1 and 100** using a loop.
- **Problem 35.15:** Print the first $N$ terms of the **Fibonacci series** ($0, 1, 1, 2, 3, 5, 8, \dots$).
- **Problem 35.16:** Predict output of multiple initializations and updates in `for`:
  ```c
  for (int i = 0, j = 10; i < j; i++, j--) {
      printf("%d %d\n", i, j);
  }
  ```
- **Problem 35.17:** What does an omitted condition `for (;;) { ... }` mean? (Answer: Infinite loop!).

## 7. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 35.1 (for loop execution lifecycle)
- [ ] Problem 35.2 & 35.3 (Count up and countdown)
- [ ] Problem 35.6 (Factorial using for)
- [ ] Problem 35.9 (Alphabet loop 'A' to 'Z')
- [ ] Problem 35.10 (Harmonic series sum)
- [ ] Problem 35.14 (Prime numbers in a range)
- [ ] Problem 35.15 (Fibonacci series)

## 8. 🎯 What will this topic prepare me for?
The standard loop for array traversal, sorting algorithms, and pattern generation.

---

# 36. Nested Loops & Pattern Printing

## 1. What skill does this topic build?
🔥🔥 **The Ultimate Midterm Exam Skill:** Dual-dimensional nested iterations where Outer Loop controls Rows and Inner Loop controls Columns.

## 2. Prerequisites
Topic 35 (for loop).

## 3. The Golden Rule of Pattern Printing:
```
+-------------------------------------------------------------------------+
|                  THE 2-LOOP MENTAL MODEL FOR PATTERNS                   |
|                                                                         |
|  for (int r = 1; r <= TOTAL_ROWS; r++) {       <-- Controls ROWS        |
|      for (int c = 1; c <= COLS_IN_ROW; c++) {  <-- Controls COLUMNS     |
|          printf("*");                                                   |
|      }                                                                  |
|      printf("\n");                             <-- Newline after row    |
|  }                                                                      |
+-------------------------------------------------------------------------+
```

---

## 4. 🟢 LEVEL 1 — VERY BASIC PATTERNS (Squares & Rectangles)
- **Problem 36.1: Solid Square of Stars (4x4)**
  ```text
  ****
  ****
  ****
  ****
  ```
  - *Rows:* 4, *Cols per row:* 4 (Fixed).
- **Problem 36.2: Solid Rectangle (3 rows, 6 cols)**
  ```text
  ******
  ******
  ******
  ```

---

## 5. 🟢 LEVEL 2 — BASIC TRIANGLES (Increasing & Decreasing)
- **Problem 36.3: Right Triangle of Stars (Increasing)**
  ```text
  *
  **
  ***
  ****
  *****
  ```
  - *Logic:* In row $r$, print $r$ stars: `for (int c = 1; c <= r; c++) printf("*");`.
- **Problem 36.4: Inverted Right Triangle (Decreasing)**
  ```text
  *****
  ****
  ***
  **
  *
  ```
  - *Logic:* In row $r$, print $N - r + 1$ stars.

---

## 6. 🟡 LEVEL 3 — NUMBER PATTERNS
- **Problem 36.5: Number Triangle (Consecutive Column Numbers)**
  ```text
  1
  12
  123
  1234
  12345
  ```
  - *Logic:* Print inner loop counter `c`: `printf("%d", c);`.
- **Problem 36.6: Repeated Row Number Triangle**
  ```text
  1
  22
  333
  4444
  55555
  ```
  - *Logic:* Print outer loop counter `r`: `printf("%d", r);`.
- **Problem 36.7: Floyd's Triangle (Continuous Counting)**
  ```text
  1
  2 3
  4 5 6
  7 8 9 10
  ```
  - *Logic:* Maintain a separate variable `count = 1` incremented after every print.

---

## 7. 🔥 LEVEL 4 — EXAM LEVEL (Right-Aligned Triangles & Pyramids)
*Mental model:* Row now contains **Spaces** followed by **Stars**!

- **Problem 36.8: Right-Aligned Star Triangle**
  ```text
      *
     **
    ***
   ****
  *****
  ```
  - *Row Breakdown:*
    - Row 1: 4 spaces, 1 star
    - Row 2: 3 spaces, 2 stars
    - Row $r$: $(N - r)$ spaces, followed by $r$ stars!
- **Problem 36.9: Symmetrical Star Pyramid**
  ```text
      *
     ***
    *****
   *******
  *********
  ```
  - *Row Breakdown:*
    - Spaces: $N - r$
    - Stars: $2r - 1$ (Odd numbers: 1, 3, 5, 7, 9).
- **Problem 36.10: Inverted Star Pyramid**
  ```text
  *********
   *******
    *****
     ***
      *
  ```
- **Problem 36.11: Star Diamond**
  Combine Pyramid (Problem 36.9) and Inverted Pyramid (Problem 36.10)!

---

## 8. 🔴 LEVEL 5 — CHALLENGE (Alphabets & Hollow Shapes)
- **Problem 36.12: Alphabet Triangle**
  ```text
  A
  AB
  ABC
  ABCD
  ABCDE
  ```
  - *Logic:* `printf("%c", 'A' + c - 1);`.
- **Problem 36.13: Hollow Square (Stars only on border)**
  ```text
  *****
  *   *
  *   *
  *   *
  *****
  ```
  - *Logic:* Print star if $r==1 || r==N || c==1 || c==N$; else print space!
- **Problem 36.14: 0-1 Alternate Triangle**
  ```text
  1
  01
  101
  0101
  10101
  ```
  - *Logic:* If $(r + c) \pmod 2 == 0$ print `1`, else print `0`.

---

## 9. ⭐ MUST-SOLVE PROBLEMS
- [ ] Problem 36.3 (Increasing star triangle)
- [ ] Problem 36.4 (Decreasing star triangle)
- [ ] Problem 36.5 & 36.6 (Number triangles: column vs row)
- [ ] Problem 36.7 (Floyd's triangle)
- [ ] Problem 36.8 (Right-aligned triangle with spaces)
- [ ] Problem 36.9 (Symmetrical pyramid: spaces + $2r-1$ stars)
- [ ] Problem 36.11 (Star diamond)
- [ ] Problem 36.12 (Alphabet triangle)

## 10. 🎯 What will this topic prepare me for?
Guarantees mastery of 2D loop coordinates, nested matrices, and graphical CLI printing.

---
---

# PART 4: COMPREHENSIVE CODE TRACING & DRY RUN LAB

Practice manually filling in these trace tables using pen and paper before verifying with GCC:

### Trace Lab 1: Digit Summation Loop
Code:
```c
int n = 345, sum = 0;
while (n > 0) {
    int d = n % 10;
    sum += d;
    n /= 10;
}
```
| Iteration | Initial `n` | `d = n % 10` | `sum += d` | Updated `n = n / 10` | Loop condition (`n > 0`) |
|:---|:---|:---|:---|:---|:---|
| 1 | 345 | 5 | 5 | 34 | True |
| 2 | 34 | 4 | 9 | 3 | True |
| 3 | 3 | 3 | 12 | 0 | False (Exit) |
- **Final Output:** `sum = 12`.

---

### Trace Lab 2: Factorial Accumulator
Code:
```c
int n = 4, fact = 1;
for (int i = 1; i <= n; i++) {
    fact *= i;
}
```
| Step | `i` | `i <= 4` | `fact = fact * i` | Next `i++` |
|:---|:---|:---|:---|:---|
| 1 | 1 | True | $1 \times 1 = 1$ | 2 |
| 2 | 2 | True | $1 \times 2 = 2$ | 3 |
| 3 | 3 | True | $2 \times 3 = 6$ | 4 |
| 4 | 4 | True | $6 \times 4 = 24$ | 5 |
| 5 | 5 | False | Loop terminates | - |
- **Final Output:** `fact = 24`.

---
---

# PART 5: DEBUGGING LAB (SPOT & FIX THE BUG)

Find the error, explain why it fails, and write the corrected version:

### Bug 1: Semicolon after while
```c
int i = 1;
while (i <= 5);
{
    printf("%d\n", i);
    i++;
}
```
- **Diagnosis:** Semicolon after `while(i <= 5);` creates an empty loop body. Since `i` is never incremented, it creates an **INFINITE LOOP** locking the CPU!
- **Fix:** Remove the semicolon after `while (i <= 5)`.

### Bug 2: Equality vs Assignment
```c
int choice = 2;
if (choice = 1) {
    printf("Option 1\n");
} else {
    printf("Option 2\n");
}
```
- **Diagnosis:** `choice = 1` assigns 1 to choice. In C, 1 is True, so it always prints "Option 1"!
- **Fix:** Use equality operator `choice == 1`.

### Bug 3: scanf Missing Address-of Operator
```c
int num;
scanf("%d", num);
```
- **Diagnosis:** Passing `num` instead of `&num`. `scanf` treats the garbage value inside `num` as a memory address and tries to write to it, causing a **Segmentation Fault / Crash**!
- **Fix:** `scanf("%d", &num);`.

### Bug 4: Float Modulus
```c
float a = 7.5, b = 2.0;
float r = a % b;
```
- **Diagnosis:** `%` operator operates strictly on integers.
- **Fix:** Use `fmod(a, b)` from `<math.h>`.

---
---

# PART 6: 6-PHASE STUDY ROADMAP

Follow this exact phase progression to build your logic from zero:

```
+-------------------------------------------------------------------------+
|                  6-PHASE CHRONOLOGICAL STUDY ROADMAP                    |
|                                                                         |
|  PHASE 1: FOUNDATIONS (Day 1 - 2)                                       |
|  - Topics: Hardware, Software, Identifiers, Data Types, Variables       |
|  - Goal: Master variable declarations, byte sizes, and memory boxes.    |
|  - Target: Solve 20 basic problems (Problems 9.1 to 11.16).             |
|                                                                         |
|  PHASE 2: OPERATORS & I/O (Day 3 - 4)                                   |
|  - Topics: Arithmetic, Unary (++a vs a++), Relational, Logical, scanf   |
|  - Goal: Master precedence, short-circuit, and keyboard input.          |
|  - Target: Solve 30 problems + 20 output prediction drills.             |
|                                                                         |
|  PHASE 3: DECISION MAKING (Day 5 - 6)                                   |
|  - Topics: if, if-else, else-if ladder, nested if, switch               |
|  - Goal: Write multi-path logic (Even/Odd, Leap Year, Grade, Slab Bill).|
|  - Target: Solve 25 branching problems + 10 switch menus.               |
|                                                                         |
|  PHASE 4: BASIC & ADVANCED LOOPS (Day 7 - 9)                            |
|  - Topics: while, do-while, for loops                                   |
|  - Goal: Master digit extraction, primes, palindromes, and factorials.  |
|  - Target: Solve 30 loop algorithms.                                    |
|                                                                         |
|  PHASE 5: NESTED LOOPS & PATTERNS (Day 10 - 11)                         |
|  - Topics: Nested loops, 2D coordinates, spaces + stars                 |
|  - Goal: Master right triangles, pyramids, diamonds, and numbers.       |
|  - Target: Solve 15 pattern printing problems.                          |
|                                                                         |
|  PHASE 6: EXAM SIMULATION (Day 12 - 14)                                 |
|  - Full dry-run tracing tables, debugging lab, and 30 timed MCQs.       |
+-------------------------------------------------------------------------+
```

---
---

# PART 7: 🔥 THE ULTIMATE MIDTERM MUST-SOLVE CHECKLIST

Before walking into your C Programming Midterm Exam, make sure you can solve these **35 Core Problems on pen and paper from memory**:

### Category 1: Fundamentals & Variables
- [ ] 1. Swap two numbers using a temporary third variable.
- [ ] 2. Swap two numbers WITHOUT using any third variable.
- [ ] 3. Average of 3 numbers using `float` casting.
- [ ] 4. Fahrenheit to Celsius conversion ($C = (F - 32) \times 5.0 / 9.0$).
- [ ] 5. Calculate Simple Interest ($\text{SI} = P \times R \times T / 100.0$).

### Category 2: Operators & Expressions
- [ ] 6. Time decomposition: Convert seconds into Hours, Minutes, Seconds.
- [ ] 7. Prefix vs Postfix increment output tracing (`++a` vs `a++`).
- [ ] 8. Short-circuit evaluation tracing with `&&` and `||`.
- [ ] 9. Operator precedence evaluation table (`5 + 3 * 2 > 10 && ...`).
- [ ] 10. `sizeof(x++)` side-effect non-evaluation proof.

### Category 3: Input / Output
- [ ] 11. Read and print variables of 4 types (`int`, `float`, `double`, `char`).
- [ ] 12. Fix the newline buffer trap when reading `char` after `int`.
- [ ] 13. Print formatted table using `%-10s`, `%5d`, and `%.2f`.

### Category 4: Decision Making (`if`, `if-else`, `switch`)
- [ ] 14. Check whether a number is Even or Odd.
- [ ] 15. Check whether a number is Positive, Negative, or Zero.
- [ ] 16. Find the Largest of Two numbers.
- [ ] 17. Find the Largest of Three numbers using nested `if-else`.
- [ ] 18. Check whether a year is a Leap Year.
- [ ] 19. Student grading ladder ($A, B, C, D, F$).
- [ ] 20. Electricity slab bill calculation.
- [ ] 21. Menu-driven arithmetic calculator using `switch`.
- [ ] 22. Month number to days using `switch` fall-through.

### Category 5: Loops & Algorithms (`while`, `for`)
- [ ] 23. Sum of numbers from 1 to $N$.
- [ ] 24. Factorial of $N$ ($N!$).
- [ ] 25. Multiplication table of $N$.
- [ ] 26. Count the digits of an integer.
- [ ] 27. Sum of digits of an integer (e.g., $582 \implies 15$).
- [ ] 28. Reverse an integer arithmetically ($1234 \implies 4321$).
- [ ] 29. Check whether a number is a Palindrome ($1221$).
- [ ] 30. Check whether a number is a Prime Number.
- [ ] 31. Check whether a number is an Armstrong Number ($153 = 1^3 + 5^3 + 3^3$).
- [ ] 32. Generate the first $N$ terms of the Fibonacci Series ($0, 1, 1, 2, 3, 5, \dots$).
- [ ] 33. Find the GCD of two numbers.

### Category 6: Nested Loops & Patterns
- [ ] 34. Star right-angled triangle (increasing).
- [ ] 35. Symmetrical star pyramid (spaces + $2r-1$ stars).

---
> **Your Practice Target:** Solve these 35 core problems first. Once confident, tackle the remaining Level 3 and Level 4 problems. You are now 100% prepared to score **95%+ in your Midterm Exam!**
