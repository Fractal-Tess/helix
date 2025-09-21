---
title: "Integer Variables"
description: "Working with integer data types in C"
order: 2
difficulty: "beginner"
estimatedTime: "5 minutes"
language: "c"
group: "3_variables_and_types"
startingCode: |
  #include <stdio.h>

  int main() {
      // Declare an integer variable
      
      // Print the value
      
      return 0;
  }
expectedOutput: "The number is: 42"
---

# Integer Variables

Integers are whole numbers without decimal points. They can be positive, negative, or zero.

## Declaration and Initialization

You can declare an integer variable using the `int` keyword:

```c
int age;           // Declaration
int score = 100;   // Declaration with initialization
```

## Integer Types

C provides several integer types with different sizes:

- `int` - Standard integer (usually 32 bits)
- `short` - Short integer (usually 16 bits)
- `long` - Long integer (usually 64 bits)
- `char` - Character (usually 8 bits, can store small integers)

## Example

```c
#include <stdio.h>

int main() {
    int number = 42;
    printf("The number is: %d\n", number);
    return 0;
}
```

## Your Task

1. Declare an integer variable named `number` and assign it the value `42`
2. Use `printf()` to display the message "The number is: 42"
3. Remember to include the necessary header file

## Hints

- Use `#include <stdio.h>` for input/output functions
- Use `%d` as the format specifier for integers in `printf()`
- Don't forget the newline character `\n`

## Format Specifiers

- `%d` - Decimal integer
- `%i` - Integer (same as %d)
- `%o` - Octal integer
- `%x` - Hexadecimal integer (lowercase)
- `%X` - Hexadecimal integer (uppercase)

## Key Points

- `int` is the most commonly used integer type
- Always initialize variables before using them
- Use appropriate format specifiers in `printf()`
- Integer arithmetic is exact (no rounding errors)

## Next Steps

In the next lesson, you'll learn about character variables!

