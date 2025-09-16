---
title: "While Loop Basics"
description: "Introduction to while loop syntax and structure"
order: 1
difficulty: "beginner"
estimatedTime: "5 minutes"
language: "c"
group: "9_while_loops"
startingCode: |
  #include <stdio.h>

  int main() {
      int count = 1;
      
      // Print numbers 1 to 5 using while loop
      
      return 0;
  }
expectedOutput: "1 2 3 4 5"
---

# While Loop Basics

While loops repeat code as long as a condition is true. They're useful when you don't know exactly how many iterations you need.

## Basic Syntax

```c
while (condition) {
    // Code to repeat
    // Update condition variable
}
```

## Example

```c
int count = 1;
while (count <= 5) {
    printf("%d ", count);
    count++;  // Important: update the condition
}
```

## Your Task

1. Use a while loop to print numbers 1 to 5
2. Start with `count = 1`
3. Continue while `count <= 5`
4. Don't forget to increment `count`

## Key Components

1. **Condition**: `count <= 5` - checked before each iteration
2. **Body**: Code to execute if condition is true
3. **Update**: `count++` - modify the condition variable

## Common Patterns

### Count Up

```c
int i = 0;
while (i < 10) {
    printf("%d ", i);
    i++;
}
```

### Count Down

```c
int i = 10;
while (i > 0) {
    printf("%d ", i);
    i--;
}
```

### User Input Validation

```c
int number;
printf("Enter a positive number: ");
scanf("%d", &number);
while (number <= 0) {
    printf("Invalid! Enter a positive number: ");
    scanf("%d", &number);
}
```

## Avoiding Infinite Loops

Always ensure the condition will eventually become false:

```c
int i = 0;
while (i < 10) {
    printf("%d ", i);
    i++;  // This prevents infinite loop
}
```

## Key Points

- Condition is checked before each iteration
- Must update the condition variable inside the loop
- Use when you don't know exact number of iterations
- Be careful to avoid infinite loops

## Next Steps

In the next lesson, you'll learn about do-while loops!
