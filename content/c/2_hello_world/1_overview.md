---
title: "C Program Structure Overview"
description: "Understanding the basic structure of a C program"
order: 1
difficulty: "beginner"
estimatedTime: "5 minutes"
language: "c"
group: "2_hello_world"
startingCode: |
  #include <stdio.h>

  int main() {
      // Your code goes here
      return 0;
  }
expectedOutput: "This is a basic C program structure"
---

# C Program Structure Overview

Every C program follows a specific structure. Understanding this structure is crucial for writing proper C code.

## Basic Structure

A C program consists of several key components:

1. **Preprocessor Directives** - Instructions for the compiler
2. **Main Function** - The entry point of your program
3. **Statements** - Instructions that perform actions
4. **Comments** - Notes for humans (ignored by compiler)

## Key Components Explained

### Preprocessor Directives

```c
#include <stdio.h>
```

- `#include` tells the compiler to include header files
- `<stdio.h>` provides input/output functions like `printf()`
- Must be at the top of your program

### Main Function

```c
int main() {
    // Program code here
    return 0;
}
```

- `int main()` is the entry point of every C program
- `int` means the function returns an integer
- `return 0;` indicates successful program execution

### Comments

```c
// This is a single-line comment
/* This is a multi-line comment */
```

## Your Task

1. Study the basic structure shown above
2. Notice how each component has a specific purpose
3. Understand that every C program must have a `main()` function

## Key Points

- Every C program starts with `#include` directives
- The `main()` function is where program execution begins
- Comments help explain your code to other programmers
- Proper structure makes your code readable and maintainable

## Next Steps

In the next lesson, you'll write your first actual "Hello, World!" program using this structure!
