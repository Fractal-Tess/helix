---
title: "String Basics"
description: "Introduction to strings in C programming"
order: 1
difficulty: "intermediate"
estimatedTime: "8 minutes"
language: "c"
group: "7_strings"
startingCode: |
  #include <stdio.h>

  int main() {
      // Declare a string
      
      // Initialize the string
      
      // Print the string
      
      return 0;
  }
expectedOutput: "Hello, World!"
---

# String Basics

In C, strings are arrays of characters terminated by a null character (`\0`). This null character marks the end of the string.

## String Declaration

```c
char str[20];           // Array of 20 characters
char name[] = "John";   // Array with automatic size
char *message = "Hello"; // String literal
```

## String Initialization

### Method 1: During declaration

```c
char str[] = "Hello, World!";
```

### Method 2: Character by character

```c
char str[20];
str[0] = 'H';
str[1] = 'e';
str[2] = 'l';
str[3] = 'l';
str[4] = 'o';
str[5] = '\0';  // Null terminator
```

## Your Task

1. Declare a string array
2. Initialize it with "Hello, World!"
3. Print the string using `printf()`

## String Literals

```c
char *str = "Hello";  // String literal (read-only)
char arr[] = "Hello"; // Array (modifiable)
```

## Printing Strings

```c
char str[] = "Hello, World!";
printf("%s\n", str);        // Print string
printf("String: %s\n", str); // Print with format
```

## String Length

The length is the number of characters before `\0`:

```c
char str[] = "Hello";  // Length is 5, not 6
// H e l l o \0
// 0 1 2 3 4  5
```

## Key Points

- Strings are null-terminated character arrays
- Use `%s` format specifier for strings
- String literals are read-only
- Always leave space for the null terminator

## Next Steps

In the next lesson, you'll learn about string functions!
