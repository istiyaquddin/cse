# THE COMPLETE C PROGRAMMING MIDTERM HANDBOOK
## CHAPTER 3: Control Statements

> **Author**: Senior Professor & Software Engineering Lead  
> **Target**: Midterm Mastery (Score 95%+ with Confidence)  
> **Pedagogy**: Decision Trees, State Machine Loops, ASCII Execution Graphs, Step-by-Step Traces, and Pattern Generation Algorithms.

---

# Table of Contents
1. **Branching: `if` and `if...else` Statements** (Two-way selection, execution flow, common traps)
2. **Nested `if` and the Dangling Else Problem** (Multi-tier decision trees, resolving ambiguity with `{}`)
3. **The `switch` Statement** (Multi-way branch, jump tables, fall-through mechanics, `break`, `default`)
4. **Complete Note: Loops in C (Sections 1 to 36 Master Guide)**
   - 4.1 Introduction to Loops
   - 4.2 Types of Loops in C
   - 4.3 The `for` Loop (Syntax, Execution Lifecycle, 3 Parts)
   - 4.4 When to Use `for` Loop (Count-Controlled Scenarios)
   - 4.5 The `while` Loop (Syntax, Pre-test Flowchart)
   - 4.6 When to Use `while` Loop (Unknown Repetitions, Sentinel Values)
   - 4.7 The `do...while` Loop (Syntax, Post-test Mechanics)
   - 4.8 `while` vs `do...while` (The Zero-Execution Paradox)
   - 4.9 `do...while` = At Least Once (Menu Systems)
   - 4.10 Main Differences Between All Loops (Master Table)
   - 4.11 The 3 Most Important Decision Rules
   - 4.12 Easy ASCII Decision Tree
   - 4.13 Same Problem Solved in All Three Loops
   - 4.14 Infinite Loops & Common Infinite Loop Mistakes
   - 4.15 `break` Statement (Terminating Loops)
   - 4.16 `continue` Statement (Skipping Iterations)
   - 4.17 `break` vs `continue` Comparison
   - 4.18 Nested Loops & Applications (Tables, Matrices, Patterns)
   - 4.19 Loop Combinations: Loop + `if`, Loop + Input, Counter, Accumulator
   - 4.20 Essential Loop Patterns (Counting, Reverse, Evens, Odds, Sum, Product)
   - 4.21 Core Problem-Solving Algorithms (Factorial, Maximum, Linear Search)
   - 4.22 Common Mistakes to Avoid (Semicolons, Updates, Conditions)
   - 4.23 `i++` vs `++i` in Loop Headers
   - 4.24 Quick Comparison Examples
   - 4.25 Exam-Friendly Definitions
   - 4.26 One-Page Revision Card
   - 4.27 7-Step Problem-Solving Checklist & The 15 Core Patterns
5. **Classic Midterm Mathematical Algorithms** (Prime, Palindrome, Reverse, Armstrong, Fibonacci)
6. **Pattern Printing Mastery** (Pyramids, Hollow Boxes, Number Matrices)

---

# 1. Branching: `if` and `if...else` Statements

## Definition
The **`if` statement** is a conditional selection control structure that directs the CPU to execute a specific block of code only if a given boolean expression evaluates to True (non-zero).
The **`if-else` statement** provides two mutually exclusive execution paths.

```
+-------------------------------------------------------------------------+
|                       IF-ELSE EXECUTION FLOWCHART                       |
|                                                                         |
|                              |                                          |
|                              v                                          |
|                             /\                                          |
|                       YES  /  \  NO                                     |
|                   +-------< C? >-------+                                |
|                   |        \  /        |                                |
|                   v         \/         v                                |
|           [ If-Block Code ]    [ Else-Block Code ]                      |
|                   |                    |                                |
|                   +----------+---------+                                |
|                              |                                          |
|                              v                                          |
|                     [ Next Statement ]                                  |
+-------------------------------------------------------------------------+
```

```c
#include <stdio.h>

int main(void) {
    int marks = 82;

    if (marks >= 50) {
        printf("Result: PASSED!\n");
    } else {
        printf("Result: FAILED!\n");
    }
    return 0;
}
```

---

# 2. Nested `if` and The Dangling Else Problem

## Definition
When an `if` or `if-else` statement appears inside the body of another `if` or `else`, it forms a **Nested `if`**.

### The Dangling Else Ambiguity:
Consider this code without braces:
```c
if (a > 0)
    if (b > 0)
        printf("Both positive");
else
    printf("What does this else belong to?");
```
- **The Golden Grammar Rule of C:** An `else` clause **always binds to the nearest unmatched `if`** that precedes it at the same nesting level!
- Therefore, the `else` above binds to `if (b > 0)`, NOT `if (a > 0)`!
- **Best Practice:** ALWAYS use curly braces `{}` to make nesting crystal clear!

```c
#include <stdio.h>

int main(void) {
    int a = 10, b = -5;

    if (a > 0) {
        if (b > 0) {
            printf("Both are positive.\n");
        } else {
            printf("a is positive, but b is non-positive.\n");
        }
    }
    return 0;
}
```

---

# 3. The `switch` Statement

## Definition
The **`switch` statement** is a multi-way branching statement that tests whether an integer expression matches one of several constant integer values (`case` labels).

```
+-------------------------------------------------------------------------+
|                       SWITCH STATEMENT ARCHITECTURE                     |
|                                                                         |
|  switch (expression) {                                                  |
|      case CONST_1:                                                      |
|          statement;                                                     |
|          break;  <-- Exits switch immediately!                          |
|      case CONST_2:                                                      |
|          statement;                                                     |
|          break;                                                         |
|      default:    <-- Runs if no cases match!                            |
|          statement;                                                     |
|          break;                                                         |
|  }                                                                      |
+-------------------------------------------------------------------------+
```

### Strict `switch` Rules in C:
1. The test expression **MUST evaluate to an integer or character type** (`int`, `char`, `short`, `enum`). Floats (`float`, `double`) are **STRICTLY FORBIDDEN**!
2. `case` labels **must be compile-time constants**. Variables (`case x:`) are illegal!
3. **The Fall-Through Trap:** If you omit the `break;` statement, execution will continue ("fall through") into the next case's statements regardless of whether the next case matches!

```c
#include <stdio.h>

int main(void) {
    char grade = 'B';

    switch (grade) {
        case 'A':
            printf("Excellent! 90%%+\n");
            break;
        case 'B':
            printf("Very Good! 80%%+\n");
            break;
        case 'C':
            printf("Good! 70%%+\n");
            break;
        default:
            printf("Needs Improvement.\n");
            break;
    }
    return 0;
}
```

---

# 4. Complete Note: Loops in C (Sections 1 to 36 Master Guide)

Loops are used when you need to **repeat a block of code multiple times**.

For example, instead of writing:

```c
printf("Hello\n");
printf("Hello\n");
printf("Hello\n");
printf("Hello\n");
printf("Hello\n");
```

you can use a loop:

```c
for(int i = 1; i <= 5; i++)
{
    printf("Hello\n");
}
```

So the main idea is:

> **Loop = Repeat a task without writing the same code again and again.**

---

## 4.1 Types of Loops in C

C has **3 main loops**:

| Loop | Main idea | Best used when |
|---|---|---|
| `for` | Repeat with a controlled counter | You know roughly how many times |
| `while` | Repeat while a condition is true | You don't know exactly how many times |
| `do...while` | Execute first, then check condition | Code must execute **at least once** |

There are also **nested loops**, which means putting one loop inside another.

---

## 4.2 `for` Loop

### Syntax

```c
for(initialization; condition; update)
{
    // code
}
```

Example:

```c
for(int i = 1; i <= 5; i++)
{
    printf("%d\n", i);
}
```

### How it works

```text
int i = 1       → Start (Runs once)
      ↓
i <= 5 ?        → Check condition
      ↓
   YES
      ↓
printf("%d", i) → Execute loop body
      ↓
i++             → Update variable
      ↓
Back to condition
```

Output:

```text
1
2
3
4
5
```

---

## 4.3 Three Parts of `for`

```c
for(int i = 1; i <= 5; i++)
```

### ① Initialization

```c
int i = 1;
```

Runs **only once** at the beginning. It decides where the loop starts.

### ② Condition

```c
i <= 5
```

Before every iteration C checks this condition.
If:
```text
TRUE  → execute loop
FALSE → stop loop
```

### ③ Update

```c
i++
```

Changes the loop variable after each iteration.

Other examples:
```c
i++;
i--;
i += 2;
i += 5;
i *= 2;
```

---

## 4.4 When Should You Use `for`?

Use `for` when the repetition is **count-controlled**.

### Example 1: Print 1–100
```c
for(int i = 1; i <= 100; i++)
{
    printf("%d ", i);
}
```

### Example 2: Print even numbers
```c
for(int i = 2; i <= 20; i += 2)
{
    printf("%d ", i);
}
```

### Example 3: Calculate sum
```c
int sum = 0;

for(int i = 1; i <= 10; i++)
{
    sum += i;
}

printf("%d", sum);
```

### Example 4: Array traversal
```c
int arr[5] = {10, 20, 30, 40, 50};

for(int i = 0; i < 5; i++)
{
    printf("%d ", arr[i]);
}
```

**This is one of the most important uses of `for` loops.**

---

## 4.5 `while` Loop

### Syntax

```c
while(condition)
{
    // code
}
```

Example:

```c
int i = 1;

while(i <= 5)
{
    printf("%d\n", i);
    i++;
}
```

Output:
```text
1
2
3
4
5
```

---

## 4.6 How `while` Works

```text
       ↓
Check condition
       ↓
   TRUE?
   /   \
 YES    NO
  ↓      ↓
Work    STOP
  ↓
Update
  ↓
Check again
```

Important:
> `while` checks the condition **before** executing the body. Therefore, it is called a **pre-test loop**.

---

## 4.7 When Should You Use `while`?

Use `while` when you **don't know exactly how many times** the loop will run.

### Example: Keep taking numbers until user enters 0

```c
int n;

scanf("%d", &n);

while(n != 0)
{
    printf("You entered %d\n", n);
    scanf("%d", &n);
}
```

Here we don't know whether the user will enter 5 numbers or 50 numbers. The number of iterations depends on the user. So `while` is a natural choice.

---

## 4.8 Another `while` Example: Password checking

```c
int password;

scanf("%d", &password);

while(password != 1234)
{
    printf("Wrong password. Try again: ");
    scanf("%d", &password);
}

printf("Access granted!");
```

We don't know how many attempts the user needs. Therefore:
```text
Unknown number of repetitions → while
```

---

## 4.9 `do...while` Loop

### Syntax

```c
do
{
    // code
}
while(condition);
```

Example:

```c
int i = 1;

do
{
    printf("%d\n", i);
    i++;
}
while(i <= 5);
```

Output:
```text
1
2
3
4
5
```

---

## 4.10 The Biggest Difference: `while` vs `do...while`

### `while`
```c
while(condition)
{
    printf("Hello");
}
```
Condition is checked **first**.

### `do...while`
```c
do
{
    printf("Hello");
}
while(condition);
```
Code executes **first**, condition is checked **afterward**.

---

### Concrete Contrast Example:

```c
int i = 10;

while(i < 5)
{
    printf("Hello");
}
```
Output:
```text
Nothing
```
Because `10 < 5` is `FALSE` $\implies$ body never executes.

---

But:

```c
int i = 10;

do
{
    printf("Hello");
}
while(i < 5);
```
Output:
```text
Hello
```
Why? Because `do...while` executes the body **before checking** the condition.

---

## 4.11 `do...while` = At Least Once

This is the easiest rule to remember:

> **If the code must execute at least once → `do...while`.**

A common example is an interactive menu:

```c
int choice;

do
{
    printf("\n1. Add");
    printf("\n2. Delete");
    printf("\n3. Exit");
    printf("\nEnter choice: ");

    scanf("%d", &choice);

} while(choice != 3);
```

The menu needs to appear at least once. Therefore:
```text
Menu → do...while
```

---

## 4.12 Main Difference Between All Loops

| Feature | `for` | `while` | `do...while` |
|---|---|---|---|
| **Condition checked** | Before | Before | **After** |
| **May execute 0 times?** | Yes | Yes | **No** |
| **Executes at least once?** | No | No | **Yes** |
| **Best for** | Known/reasonable count | Unknown count | Must run once |
| **Initialization** | Usually inside header | Usually before loop | Usually before loop |
| **Update** | Usually in header | Usually inside body | Usually inside body |
| **Type** | Pre-test | Pre-test | **Post-test** |

---

## 4.13 The Most Important Decision Rule

When you see a problem, ask:

### Question 1:
**Do I know how many times I need to repeat?**
- Example: *Print numbers from 1 to 100.* $\implies$ **Yes $\implies$ Use `for`**

### Question 2:
**Do I NOT know how many times it will repeat?**
- Example: *Keep taking input until user enters 0.* $\implies$ **No $\implies$ Use `while`**

### Question 3:
**Must the code execute at least once?**
- Example: *Show a menu and keep showing it until the user chooses Exit.* $\implies$ **Yes $\implies$ Use `do...while`**

---

## 4.14 Easy Decision Tree

```text
              Need repetition?
                    |
                   YES
                    |
        -------------------------
        |                       |
   Must execute             No special
    at least once?          requirement
        |                       |
       YES                      |
        ↓                       |
   do...while                   |
                                |
                    Know the number
                     of iterations?
                         |
                    --------------
                    |            |
                   YES           NO
                    ↓             ↓
                   for          while
```

### Memorize this:
> **Known count → `for`**  
> **Unknown count → `while`**  
> **At least once → `do...while`**

This rule will solve a huge number of beginner problems.

---

## 4.15 Same Problem Using Different Loops

Suppose we want to print: `1 2 3 4 5`

### Using `for`
```c
for(int i = 1; i <= 5; i++)
{
    printf("%d ", i);
}
```

### Using `while`
```c
int i = 1;

while(i <= 5)
{
    printf("%d ", i);
    i++;
}
```

### Using `do...while`
```c
int i = 1;

do
{
    printf("%d ", i);
    i++;
}
while(i <= 5);
```

All three work!
> **A problem may be solvable with multiple loops. The goal is to choose the loop that naturally matches the problem.**

---

## 4.16 Infinite Loops

A loop that never ends is called an **infinite loop**.

Example with `while`:
```c
while(1)
{
    printf("Hello");
}
```
Because `1` is always TRUE.

Example with `for`:
```c
for(;;)
{
    printf("Hello");
}
```
Both are infinite loops.

---

## 4.17 Common Infinite Loop Mistake

```c
int i = 1;

while(i <= 5)
{
    printf("%d ", i);
}
```
❌ **Problem:** `i` never changes! So `i = 1`, `1 <= 5` is always TRUE forever.

**Correct:**
```c
int i = 1;

while(i <= 5)
{
    printf("%d ", i);
    i++; // Crucial update!
}
```

---

## 4.18 `break`

`break` immediately **terminates the loop**.

Example:
```c
for(int i = 1; i <= 10; i++)
{
    if(i == 5)
    {
        break;
    }

    printf("%d ", i);
}
```
Output:
```text
1 2 3 4
```
When `i == 5`, the loop stops immediately.
> `break` = **Get completely out of the loop**

---

## 4.19 `continue`

`continue` skips the **current iteration** and moves to the next iteration.

Example:
```c
for(int i = 1; i <= 5; i++)
{
    if(i == 3)
    {
        continue;
    }

    printf("%d ", i);
}
```
Output:
```text
1 2 4 5
```
When `i == 3`, it skips printing 3 and jumps to `i = 4`.
> `continue` = **Skip this round**

---

## 4.20 `break` vs `continue`

| `break` | `continue` |
|---|---|
| Stops the entire loop | Skips current iteration |
| Comes completely outside loop | Goes to next iteration |
| Loop ends | Loop continues |
| **"STOP" 🛑** | **"SKIP" ⏭️** |

```text
break    → STOP 🛑
continue → SKIP ⏭️
```

---

## 4.21 Nested Loops

A loop inside another loop is called a **nested loop**.

Example:
```c
for(int i = 1; i <= 3; i++)
{
    for(int j = 1; j <= 3; j++)
    {
        printf("%d %d\n", i, j);
    }
}
```
Output:
```text
1 1
1 2
1 3
2 1
2 2
2 3
3 1
3 2
3 3
```

### Why Nested Loops Are Important:
Nested loops are heavily used for:
- Patterns (Pyramids, Stars)
- Matrices & 2D arrays
- Tables & Grids
- Multiplication tables
- Searching combinations

Example (Multiplication Table):
```c
for(int i = 1; i <= 5; i++)
{
    for(int j = 1; j <= 10; j++)
    {
        printf("%d ", i * j);
    }
    printf("\n");
}
```

---

## 4.22 Loop Combinations

### Loop With `if`:
```c
for(int i = 1; i <= 20; i++)
{
    if(i % 2 == 0)
    {
        printf("%d ", i);
    }
}
```

### Loop + Input:
```c
int n;
printf("Enter n: ");
scanf("%d", &n);

for(int i = 1; i <= n; i++)
{
    printf("%d ", i);
}
```

### Loop + Counter:
A **counter** keeps track of how many times something happens.
```c
int count = 0;

for(int i = 1; i <= 100; i++)
{
    if(i % 2 == 0)
    {
        count++;
    }
}

printf("Even numbers = %d", count);
```

### Loop + Accumulator:
An **accumulator** stores a continuously updated result (`sum`, `product`, `total`).
```c
int sum = 0;

for(int i = 1; i <= 10; i++)
{
    sum = sum + i;
}

printf("%d", sum);
```

---

## 4.23 Very Important Loop Patterns

You should learn these fundamental patterns:

### Pattern 1 — Counting
```c
for(int i = 1; i <= n; i++)
{
    printf("%d ", i);
}
```

### Pattern 2 — Reverse counting
```c
for(int i = n; i >= 1; i--)
{
    printf("%d ", i);
}
```

### Pattern 3 — Even numbers
```c
for(int i = 2; i <= n; i += 2)
{
    printf("%d ", i);
}
```

### Pattern 4 — Odd numbers
```c
for(int i = 1; i <= n; i += 2)
{
    printf("%d ", i);
}
```

### Pattern 5 — Sum
```c
int sum = 0;

for(int i = 1; i <= n; i++)
{
    sum += i;
}
```

### Pattern 6 — Product
```c
int product = 1;

for(int i = 1; i <= n; i++)
{
    product *= i;
}
```

---

## 4.24 Core Problem-Solving Algorithms

### 1. Factorial Using Loop
```c
int n;
int fact = 1;

scanf("%d", &n);

for(int i = 1; i <= n; i++)
{
    fact *= i;
}

printf("%d", fact);
```

### 2. Finding Maximum Using Loop
```c
int n;
scanf("%d", &n);

int max;
scanf("%d", &max);

for(int i = 2; i <= n; i++)
{
    int x;
    scanf("%d", &x);

    if(x > max)
    {
        max = x;
    }
}

printf("Maximum = %d", max);
```

### 3. Searching Using Loop (Linear Search)
```c
int arr[5] = {10, 20, 30, 40, 50};
int target = 30;
int found = 0;

for(int i = 0; i < 5; i++)
{
    if(arr[i] == target)
    {
        found = 1;
        break;
    }
}

if(found)
{
    printf("Found\n");
}
else
{
    printf("Not found\n");
}
```

---

## 4.25 Common Mistakes

### Mistake 1: Semicolon after loop header
❌
```c
for(int i = 1; i <= 5; i++);
{
    printf("%d", i);
}
```
The semicolon makes the loop body empty. It loops 5 times doing nothing, then prints `6` once!

### Mistake 2: Forgetting update
❌
```c
while(i <= 10)
{
    printf("%d", i);
}
```
Creates an infinite loop locking up CPU resources.

### Mistake 3: Wrong condition operator
```c
for(int i = 1; i < 5; i++)  // prints 1 2 3 4
for(int i = 1; i <= 5; i++) // prints 1 2 3 4 5
```
Pay careful attention to `<`, `<=`, `>`, `>=`.

---

## 4.26 `i++` vs `++i` in Loop Headers

Both usually increase `i` by 1:
```c
i++;
++i;
```
In the third part of a normal `for` loop, they produce the exact same outcome:
```c
for(int i = 0; i < 5; i++)
for(int i = 0; i < 5; ++i)
```
For beginner and standard loops, you can comfortably use `i++`.

---

## 4.27 Quick Comparison Examples

- **"Print 1 to 100"** $\to$ Known number of iterations $\to$ **`for`**
- **"Keep asking for a number until it is positive"** $\to$ Unknown attempts $\to$ **`while`**
- **"Display menu at least once"** $\to$ Must execute once $\to$ **`do...while`**
- **"Process every element of an array"** $\to$ Known array size / indexed traversal $\to$ **`for`**
- **"Read input until EOF"** $\to$ Unknown amount of input $\to$ **`while`**
- **"Repeat until user chooses Exit"** $\to$ Unknown repetitions + menu runs first $\to$ **`do...while`**

---

## 4.28 Exam-Friendly Definitions

### Loop
> A **loop** is a control structure in C that repeatedly executes a block of statements as long as a specified condition is satisfied.

### `for` loop
> The **`for` loop** is used when the number of iterations is known or controlled by a counter.

### `while` loop
> The **`while` loop** repeatedly executes a block of statements while a condition remains true. The condition is checked before each iteration.

### `do...while` loop
> The **`do...while` loop** executes its body at least once because its condition is checked after the body.

---

## 4.29 One-Page Revision Card

```text
                    C LOOPS
                       │
        ┌──────────────┼──────────────┐
        │              │              │
       for           while       do...while
        │              │              │
   Known count     Unknown count   Must run once
        │              │              │
   condition       condition       body first
   before body     before body     condition after
        │              │              │
    pre-test        pre-test        post-test
```

### Remember:
```text
FOR       → "How many times?"  → Known / counter
WHILE     → "Until when?"      → Unknown repetitions
DO-WHILE  → "Must run once?"   → Yes
break     → STOP THE LOOP 🛑
continue  → SKIP THIS ITERATION ⏭️
nested    → LOOP INSIDE LOOP
```

---

## 4.30 Problem-Solving Checklist & The 15 Core Patterns

Whenever you get a loop problem, **don't immediately start coding**. Ask these 7 questions:

1. **Step 1:** What needs to be repeated?
2. **Step 2:** What is the starting value? (e.g. `i = 1`)
3. **Step 3:** When should the loop stop? (e.g. `i <= n`)
4. **Step 4:** How does the value change? (e.g. `i++`)
5. **Step 5:** Which loop fits?
   - Known count $\to$ `for`
   - Unknown count $\to$ `while`
   - At least once $\to$ `do...while`
6. **Step 6:** Do I need `if` inside the loop? (Even/odd, max, min, search, count)
7. **Step 7:** Do I need `break` or `continue`? (Stop completely $\to$ `break`, skip one case $\to$ `continue`)

### ⭐ The 15 Core Problem Patterns to Master
1. Counting
2. Reverse counting
3. Sum
4. Product / factorial
5. Even / odd
6. Counting matching values
7. Finding maximum
8. Finding minimum
9. Searching
10. Input until a special value (sentinel)
11. Input validation
12. Patterns
13. Multiplication tables
14. Nested loops
15. Array traversal

Once these patterns become familiar, loops stop feeling like separate syntax rules and start becoming powerful **problem-solving tools**.

---

# 5. Classic Midterm Mathematical Algorithms

### 1. Prime Number Check
```c
#include <stdio.h>

int main(void) {
    int n = 29, is_prime = 1;

    if (n <= 1) is_prime = 0;
    for (int i = 2; i * i <= n; i++) {
        if (n % i == 0) {
            is_prime = 0;
            break;
        }
    }

    printf("%d is %s\n", n, is_prime ? "PRIME" : "COMPOSITE");
    return 0;
}
```

### 2. Palindrome Number Check
```c
#include <stdio.h>

int main(void) {
    int original = 12321;
    int temp = original;
    int reversed = 0;

    while (temp > 0) {
        int digit = temp % 10;
        reversed = (reversed * 10) + digit;
        temp /= 10;
    }

    if (original == reversed) {
        printf("%d is a PALINDROME!\n", original);
    } else {
        printf("%d is NOT a palindrome.\n", original);
    }
    return 0;
}
```

### 3. Fibonacci Series Generation
```c
#include <stdio.h>

int main(void) {
    int n = 7;
    int t1 = 0, t2 = 1;

    printf("Fibonacci (%d terms): ", n);
    for (int i = 1; i <= n; i++) {
        printf("%d ", t1);
        int next = t1 + t2;
        t1 = t2;
        t2 = next;
    }
    printf("\n");
    return 0;
}
```

---

# 6. Pattern Printing Mastery

### Star Pyramid Pattern:
```text
    *
   ***
  *****
 *******
```

```c
#include <stdio.h>

int main(void) {
    int rows = 4;
    for (int i = 1; i <= rows; i++) {
        // Leading Spaces
        for (int s = 1; s <= rows - i; s++) printf(" ");
        // Odd Stars (2*i - 1)
        for (int j = 1; j <= (2 * i - 1); j++) printf("*");
        printf("\n");
    }
    return 0;
}
```
