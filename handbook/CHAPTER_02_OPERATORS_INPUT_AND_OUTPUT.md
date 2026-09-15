# THE COMPLETE C PROGRAMMING MIDTERM HANDBOOK
## CHAPTER 2: Operators, Input and Output

> **Author**: Senior Professor & Software Engineering Lead
> **Target**: Midterm Mastery (95%+ Confidence)
> **Pedagogy**: Zero Assumptions, Visual ASCII Memory Models, Step-by-Step Operator Evaluations, I/O Buffer Traces, Common Traps & Fixes.

---

# Table of Contents
1. **Arithmetic Operators** (`+`, `-`, `*`, `/`, `%`, integer truncation vs real division)
2. **Unary Operators** (Unary `+`, `-`, Prefix vs Postfix `++`/`--`, `sizeof`, address-of `&`)
3. **Relational Operators** (`<`, `<=`, `>`, `>=`, `==`, `!=`, truth values in C)
4. **Logical Operators** (`&&`, `||`, `!`, short-circuit evaluation mechanics)
5. **Assignment Operators** (`=`, compound assignments `+=`, `-=`, `*=`, `/=`, `%=`)
6. **Conditional Operator** (The Ternary Operator `? :`, syntax, nested conditionals)
7. **Operator Precedence & Associativity** (The complete C hierarchy table)
8. **Expressions** (Operands, operator trees, evaluation order, side effects)
9. **Type Conversions** (Implicit automatic promotion vs Explicit type casting)
10. **Library Functions** (`<math.h>`, `<ctype.h>`, `<stdlib.h>`)
11. **Managing Data Input** (`scanf()`, `getchar()`, `gets()`, buffer overflow warnings)
12. **Managing Data Output** (`printf()`, `putchar()`, `puts()`)
13. **Formatted Input and Output** (Width specifiers, precision modifiers, flags `%-10.2f`, `%08d`)

---

# 1. Arithmetic Operators

## Definition
**Arithmetic Operators** are binary operators that perform foundational mathematical calculations on numeric operands (integers and floating-point numbers).

| Operator | Name | Syntax | Example ($a=14, b=4$) | Mathematical Result |
|:---|:---|:---|:---|:---|
| `+` | Addition | `a + b` | `14 + 4` | `18` |
| `-` | Subtraction | `a - b` | `14 - 4` | `10` |
| `*` | Multiplication | `a * b` | `14 * 4` | `56` |
| `/` | Division | `a / b` | `14 / 4` | `3` (Integer truncation!) |
| `%` | Modulus (Remainder) | `a % b` | `14 % 4` | `2` (Remainder after division) |

```
+-------------------------------------------------------------------------+
|                  INTEGER DIVISION VS FLOATING-POINT DIVISION            |
|                                                                         |
|  Expression: 7 / 2                                                      |
|  Operand 1: int (7)                                                     |
|  Operand 2: int (2)                                                     |
|  Rule: In C, integer / integer ALWAYS yields an integer.                |
|  Result: 3  <-- The fractional part (0.5) is TRUNCATED (discarded)!     |
|                                                                         |
|  Expression: 7.0 / 2                                                    |
|  Operand 1: double (7.0)                                                |
|  Operand 2: int (2 promoted to double 2.0)                              |
|  Result: 3.5  <-- Full real precision preserved!                        |
+-------------------------------------------------------------------------+
```

### The Modulus Operator (`%`) Rules:
1. Both operands **MUST be integers**. Writing `7.5 % 2` causes a compiler error!
2. The sign of the result is **always the sign of the first operand (dividend)**:
   - `14 % 4` evaluates to `+2`.
   - `-14 % 4` evaluates to `-2`.
   - `14 % -4` evaluates to `+2`.
   - `-14 % -4` evaluates to `-2`.

---

# 2. Unary Operators

## Definition
A **Unary Operator** operates on a **single operand** to produce a new value.

### 1. Unary Plus (`+`) and Unary Minus (`-`)
- `-x` negates the sign of `x`.

### 2. Increment (`++`) and Decrement (`--`)
Increases or decreases an integer variable by 1. Comes in two distinct flavors:

```
+-------------------------------------------------------------------------+
|                     PREFIX VS POSTFIX INCREMENT                         |
|                                                                         |
|  PREFIX (++x): "UPDATE FIRST, USE LATER"                                |
|  - Step 1: Increments x by 1 immediately.                               |
|  - Step 2: Returns the newly incremented value to the expression.       |
|                                                                         |
|  POSTFIX (x++): "USE FIRST, UPDATE LATER"                               |
|  - Step 1: Returns the original, current value to the expression.       |
|  - Step 2: Increments x by 1 in memory afterwards.                      |
+-------------------------------------------------------------------------+
```

```c
#include <stdio.h>

int main(void) {
    int a = 5, b = 5;
    int x = ++a; // a becomes 6; x becomes 6 (Prefix)
    int y = b++; // y becomes 5; b becomes 6 afterwards! (Postfix)

    printf("Prefix : a = %d, x = %d\n", a, x); // 6, 6
    printf("Postfix: b = %d, y = %d\n", b, y); // 6, 5
    return 0;
}
```

### 3. The `sizeof` Operator
- Evaluates the storage size (in bytes) of a type or expression at compile-time.
- `sizeof(int)` $\implies$ 4 bytes.
- Expressions inside `sizeof` are **never executed**: `sizeof(i++)` does not increment `i`!

### 4. Address-of Operator (`&`)
- Returns the physical memory address of a variable in RAM (e.g., `&age`). Used extensively in `scanf("%d", &age)`.

---

# 3. Relational Operators

## Definition
**Relational Operators** compare two values to determine their relative order or equality.

| Operator | Meaning | Example ($a=10, b=20$) | Result in C |
|:---|:---|:---|:---|
| `<` | Less than | `a < b` | `1` (True) |
| `<=` | Less than or equal to | `a <= b` | `1` (True) |
| `>` | Greater than | `a > b` | `0` (False) |
| `>=` | Greater than or equal to | `a >= b` | `0` (False) |
| `==` | Equal to | `a == b` | `0` (False) |
| `!=` | Not equal to | `a != b` | `1` (True) |

### Fundamental C Truth Rule:
- In C, there was historically no native boolean type.
- **`0` represents FALSE.**
- **ANY non-zero number (positive or negative, e.g., `1`, `-5`, `100`) represents TRUE.**
- Relational operators always evaluate to integer `1` (True) or `0` (False).

*FATAL EXAM TRAP:* Confusing `=` (assignment) with `==` (comparison).
```c
if (score = 100) // This ASSIGNS 100 to score! Evaluates to 100 (non-zero = TRUE)!
```

---

# 4. Logical Operators

## Definition
**Logical Operators** combine or invert boolean conditions.

| Operator | Name | Description | Syntax |
|:---|:---|:---|:---|
| `&&` | Logical AND | Returns `1` if **BOTH** operands are True (non-zero); returns `0` otherwise. | `cond1 && cond2` |
| `\|\|` | Logical OR | Returns `1` if **AT LEAST ONE** operand is True; returns `0` if both are False. | `cond1 \|\| cond2` |
| `!` | Logical NOT | Inverts truth value: turns True into `0`, and `0` into `1`. | `!cond` |

### Short-Circuit Evaluation: The Secret Performance Optimization
In C, logical expressions are evaluated strictly from **left to right**, and evaluation stops the microsecond the outcome is guaranteed:

```
+-------------------------------------------------------------------------+
|                      SHORT-CIRCUIT EVALUATION                           |
|                                                                         |
|  1. In (A && B):                                                        |
|     If A is FALSE (0), the entire expression MUST be false.             |
|     C SKIPS B entirely! B is NEVER evaluated!                          |
|                                                                         |
|  2. In (A || B):                                                        |
|     If A is TRUE (1), the entire expression MUST be true.              |
|     C SKIPS B entirely! B is NEVER evaluated!                          |
+-------------------------------------------------------------------------+
```

```c
#include <stdio.h>

int main(void) {
    int x = 0;
    int y = 10;

    // Short-circuit in action:
    if (x != 0 && (y / x > 2)) {
        printf("Safe!\n");
    } else {
        printf("Division by zero was prevented by short-circuit!\n");
    }
    return 0;
}
```

---

# 5. Assignment Operators

## Definition
The primary assignment operator `=` stores the evaluated value of the right-hand operand (R-value) into the memory location designated by the left-hand operand (L-value).

### Compound (Shorthand) Assignment Operators:
Combines an arithmetic operation with assignment:
$$\text{variable} \quad \text{op}= \quad \text{expression} \iff \text{variable} = \text{variable} \quad \text{op} \quad (\text{expression})$$

| Shorthand | Equivalent Longhand | Example ($x=10$) | Final $x$ |
|:---|:---|:---|:---|
| `x += 5` | `x = x + 5` | `x += 5` | `15` |
| `x -= 3` | `x = x - 3` | `x -= 3` | `7` |
| `x *= 4` | `x = x * 4` | `x *= 4` | `40` |
| `x /= 2` | `x = x / 2` | `x /= 2` | `5` |
| `x %= 3` | `x = x % 3` | `x %= 3` | `1` |

*Exam Nuance:* In `x *= a + b`, addition occurs first: `x = x * (a + b)`.

---

# 6. Conditional (Ternary) Operator (`? :`)

## Definition
The **Conditional Operator** is C's only **ternary operator** (takes 3 operands). It acts as a compact inline expression equivalent to a simple `if-else` statement.

### Syntax:
$$\text{Condition} \quad ? \quad \text{Expression\_If\_True} \quad : \quad \text{Expression\_If\_False}$$

```c
#include <stdio.h>

int main(void) {
    int a = 25, b = 40;
    int max = (a > b) ? a : b; // Returns 40
    printf("Maximum: %d\n", max);
    return 0;
}
```

---

# 7. Operator Precedence & Associativity Table

When an expression contains multiple operators, **Precedence** dictates which operator binds first. When two operators have the same precedence, **Associativity** determines the evaluation direction (Left-to-Right or Right-to-Left).

| Rank | Operators | Description | Associativity |
|:---|:---|:---|:---|
| **1 (Highest)**| `()` `[]` `->` `.` | Function call, Array index, Member access | Left to Right |
| **2** | `+` `-` (unary), `++` `--`, `!`, `~`, `*` (dereference), `&` (address), `sizeof` | Unary operators, cast | **Right to Left** |
| **3** | `*` `/` `%` | Multiplicative | Left to Right |
| **4** | `+` `-` (binary) | Additive | Left to Right |
| **5** | `<<` `>>` | Bitwise Shift | Left to Right |
| **6** | `<` `<=` `>` `>=` | Relational inequality | Left to Right |
| **7** | `==` `!=` | Relational equality | Left to Right |
| **8** | `&` | Bitwise AND | Left to Right |
| **9** | `^` | Bitwise XOR | Left to Right |
| **10** | `\|` | Bitwise OR | Left to Right |
| **11** | `&&` | Logical AND | Left to Right |
| **12** | `\|\|` | Logical OR | Left to Right |
| **13** | `? :` | Conditional (Ternary) | **Right to Left** |
| **14** | `=` `+=` `-=` `*=` `/=` `%=` | Assignment operators | **Right to Left** |
| **15 (Lowest)**| `,` | Comma operator | Left to Right |

---

# 8. Expressions & Type Conversions

## Implicit Conversion (Type Coercion / Automatic Promotion)
When operands of mixed data types appear in an arithmetic expression, C automatically promotes the smaller type to the larger type to avoid loss of precision:

$$\text{char} \to \text{int} \to \text{unsigned int} \to \text{long} \to \text{unsigned long} \to \text{float} \to \text{double} \to \text{long double}$$

## Explicit Conversion (Type Casting)
The programmer manually forces a conversion using the cast operator: `(type) expression`.
```c
int sum = 17, count = 5;
double avg = (double)sum / count; // Forces 17.0 / 5 = 3.4
```

---

# 9. Library Functions

C provides standardized mathematical and character manipulation functions in `<math.h>` and `<ctype.h>`:

### Mathematical Library (`<math.h>`):
- `sqrt(x)`: Square root of $x$.
- `pow(x, y)`: Calculates $x^y$.
- `fabs(x)`: Absolute value of floating-point $x$.
- `ceil(x)`: Rounds up to nearest integer.
- `floor(x)`: Rounds down to nearest integer.
- `fmod(x, y)`: Remainder of floating-point division $x/y$.

### Character Testing & Transformation (`<ctype.h>`):
- `isalpha(c)`: Checks if character is an alphabet letter.
- `isdigit(c)`: Checks if character is a digit `'0'` to `'9'`.
- `isupper(c)` / `islower(c)`: Checks uppercase/lowercase.
- `toupper(c)` / `tolower(c)`: Converts case.

---

# 10. Managing Data Input (`scanf`, `getchar`, `gets`)

```
+-------------------------------------------------------------------------+
|                     HOW C INPUT BUFFERING WORKS                         |
|                                                                         |
|  [Keyboard Input: "45\n"] ---> [Hardware Input Buffer: '4','5','\n']    |
|                                         |                               |
|       scanf("%d", &num); <--------------+ Reads '4','5' -> num = 45     |
|                                         | Leaves '\n' in buffer!        |
|                                         v                               |
|       getchar(); <----------------------+ Swallows residual '\n'!       |
+-------------------------------------------------------------------------+
```

### 1. `scanf("%format", &variable)`
- Reads formatted input from standard keyboard stream.
- **MUST pass memory address (`&`)** for primitive variables so `scanf` knows where to write the data!
- Format specifiers: `%d` (int), `%f` (float), `%lf` (double), `%c` (char), `%s` (word).

### 2. `getchar()`
- Reads a single raw character from standard input, including spaces and newline characters (`\n`).

### 3. `gets()` and Security Vulnerability
- **WARNING:** `gets()` reads an entire line of text until `\n`, but does **NOT** check array boundary sizes!
- A user typing more characters than the buffer can hold causes a **Buffer Overflow**, overwriting return addresses on the stack.
- `gets()` was officially deprecated in C99 and removed in C11. Standard replacement: `fgets(buffer, sizeof(buffer), stdin)`.

---

# 11. Managing Data Output (`printf`, `putchar`, `puts`)

### 1. `printf("format string", arg1, arg2)`
- Writes formatted characters to standard output.
- Returns the **number of characters successfully printed**!
```c
int count = printf("Hello\n"); // count = 6 (5 letters + '\n')
```

### 2. `putchar(ch)`
- Fast, low-overhead function that writes a single character to the screen:
```c
putchar('A');
```

### 3. `puts(str)`
- Writes a string followed by an **automatic newline (`\n`)**:
```c
puts("Success!"); // Prints "Success!\n"
```

---

# 12. Formatted Input and Output

### Format Flags in `printf`:
`%[flags][width][.precision]specifier`

- `width`: Minimum number of character spaces allocated (right-aligned by default).
- `-`: Left-align within allocated field width.
- `0`: Zero-pad empty leading spaces instead of space characters.
- `.precision`: Number of digits after decimal point for floats, or max characters for strings.

```c
#include <stdio.h>

int main(void) {
    int id = 7;
    double cost = 24.5;

    printf("|%5d|\n", id);     // |    7| (Right aligned, width 5)
    printf("|%-5d|\n", id);    // |7    | (Left aligned, width 5)
    printf("|%05d|\n", id);    // |00007| (Zero padded, width 5)
    printf("|%8.2f|\n", cost); // |   24.50| (Width 8, 2 decimals)
    return 0;
}
```
