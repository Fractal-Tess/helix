---
title: "Character Variables"
description: "Working with character data type in C"
order: 3
difficulty: "beginner"
estimatedTime: "5 minutes"
language: "c"
group: "3_variables_and_types"
startingCode: |
  #include <stdio.h>

  int main() {
      // Declare a character variable
      
      // Print the character
      
      return 0;
  }
expectedOutput: "The character is: A"
---

# Character Variables

The `char` type is used to store single characters. In C, characters are actually stored as integers using ASCII values.

## Declaration and Initialization

```c
char letter;           // Declaration
char grade = 'A';      // Declaration with initialization
```

## Character Literals

Characters are enclosed in single quotes:

- `'A'` - Uppercase A
- `'a'` - Lowercase a
- `'5'` - Digit 5
- `' '` - Space character
- `'\n'` - Newline character

## ASCII Values

Characters are stored as their ASCII values:

- `'A'` = 65
- `'a'` = 97
- `'0'` = 48
- `' '` = 32

## Example

```c
#include <stdio.h>

int main() {
    char letter = 'A';
    printf("The character is: %c\n", letter);
    printf("ASCII value: %d\n", letter);
    return 0;
}
```

## Your Task

1. Declare a character variable named `letter` and assign it the value `'A'`
2. Use `printf()` to display "The character is: A"
3. Try printing the ASCII value as well

## Format Specifiers

- `%c` - Character
- `%d` - ASCII value (integer)

## Character Operations

```c
char ch = 'A';
ch = ch + 1;        // ch is now 'B'
ch = ch - 32;       // Convert to uppercase
```

## Escape Sequences

- `\n` - Newline
- `\t` - Tab
- `\\` - Backslash
- `\'` - Single quote
- `\"` - Double quote

## Key Points

- Characters are stored as integers (ASCII values)
- Use single quotes for character literals
- `%c` format specifier displays the character
- `%d` format specifier displays the ASCII value

## Next Steps

In the next lesson, you'll learn about floating-point numbers!

