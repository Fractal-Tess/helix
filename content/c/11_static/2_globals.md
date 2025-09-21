---
title: "Static Global Variables"
description: "Using static with global variables"
order: 2
difficulty: "advanced"
estimatedTime: "6 minutes"
language: "c"
group: "11_static"
startingCode: |
  #include <stdio.h>

  // Static global variable
  static int fileCounter = 0;

  void incrementCounter() {
      // Increment the static global variable
      
  }

  int main() {
      // Call incrementCounter multiple times
      
      return 0;
  }
expectedOutput: "Counter: 1\nCounter: 2\nCounter: 3"
---

# Static Global Variables

Static global variables are only accessible within the file where they are declared. They provide file-level encapsulation.

## Static Global Variable

```c
static int fileCounter = 0;  // Only accessible in this file
```

## Your Task

1. Use the static global variable `fileCounter`
2. Increment it in the `incrementCounter()` function
3. Print the counter value
4. Call the function 3 times

## File Scope

Static global variables have **file scope**:

- Only accessible within the same source file
- Cannot be accessed from other files
- Provides encapsulation and data hiding

## Example: File-Level State

```c
// In file1.c
static int fileState = 0;

void setState(int newState) {
    fileState = newState;
}

int getState() {
    return fileState;
}
```

## Comparison with Regular Globals

| Type          | Scope | Linkage  | Access from other files |
| ------------- | ----- | -------- | ----------------------- |
| Global        | File  | External | Yes (with extern)       |
| Static Global | File  | Internal | No                      |

## Example: Module with Private Data

```c
// math_module.c
static int operationCount = 0;

int add(int a, int b) {
    operationCount++;
    return a + b;
}

int subtract(int a, int b) {
    operationCount++;
    return a - b;
}

int getOperationCount() {
    return operationCount;
}
```

## Benefits of Static Globals

1. **Encapsulation** - Hide implementation details
2. **Namespace Control** - Avoid naming conflicts
3. **Data Hiding** - Prevent external access
4. **Module Design** - Create self-contained modules

## When to Use Static Globals

- **Module State** - Track state within a module
- **Configuration** - Store module-specific settings
- **Caching** - Store frequently used data
- **Counters** - Track usage statistics

## Key Points

- Static globals are file-scoped only
- Cannot be accessed from other files
- Provide encapsulation and data hiding
- Useful for module-level state management

## Next Steps

In the next lesson, you'll learn about static functions!

