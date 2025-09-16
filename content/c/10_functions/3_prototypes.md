---
title: "Function Prototypes"
description: "Understanding function declarations and prototypes"
order: 3
difficulty: "intermediate"
estimatedTime: "7 minutes"
language: "c"
group: "10_functions"
startingCode: |
  #include <stdio.h>

  // Add function prototypes here

  int main() {
      int a = 10, b = 20;
      
      // Call functions
      
      return 0;
  }

  // Function definitions
  int add(int x, int y) {
      return x + y;
  }

  void printMessage(char msg[]) {
      printf("Message: %s\n", msg);
  }
expectedOutput: "Sum: 30\nMessage: Hello"
---

# Function Prototypes

Function prototypes tell the compiler about functions before they are defined. This allows you to call functions before defining them.

## What are Prototypes?

A prototype is a declaration that tells the compiler:

- Function name
- Return type
- Parameter types
- Parameter names (optional)

## Example

```c
// Prototypes
int add(int x, int y);
void printMessage(char msg[]);

int main() {
    int result = add(5, 3);
    printMessage("Hello");
    return 0;
}

// Definitions
int add(int x, int y) {
    return x + y;
}

void printMessage(char msg[]) {
    printf("Message: %s\n", msg);
}
```

## Your Task

1. Add prototypes for `add()` and `printMessage()` functions
2. Call `add()` with arguments 10 and 20
3. Call `printMessage()` with "Hello"
4. Print the sum result

## Why Use Prototypes?

1. **Order Independence** - Call functions before defining them
2. **Type Checking** - Compiler checks parameter types
3. **Multiple Files** - Share function declarations across files
4. **Header Files** - Put prototypes in .h files

## Prototype Examples

```c
// Basic function
int multiply(int a, int b);

// Function with array parameter
void printArray(int arr[], int size);

// Function with no parameters
void greet(void);

// Function returning pointer
char* getString(void);

// Function with multiple parameters
float calculate(float a, float b, char operation);
```

## Header Files

### math_utils.h

```c
#ifndef MATH_UTILS_H
#define MATH_UTILS_H

int add(int a, int b);
int subtract(int a, int b);
int multiply(int a, int b);
float divide(float a, float b);

#endif
```

### main.c

```c
#include <stdio.h>
#include "math_utils.h"

int main() {
    printf("5 + 3 = %d\n", add(5, 3));
    return 0;
}
```

## Key Points

- Prototypes must match function definitions
- Parameter names in prototypes are optional
- Use prototypes for better code organization
- Header files contain prototypes for multiple files

## Next Steps

In the next lesson, you'll learn about recursive functions!
