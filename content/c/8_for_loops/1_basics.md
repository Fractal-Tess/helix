---
title: "For Loop Basics"
description: "Introduction to for loop syntax and structure"
order: 1
difficulty: "beginner"
estimatedTime: "5 minutes"
language: "c"
group: "8_for_loops"
startingCode: |
  #include <stdio.h>

  int main() {
      // Print numbers 1 to 5 using a for loop
      
      return 0;
  }
expectedOutput: "1 2 3 4 5"
---

# For Loop Basics

The for loop is used to repeat a block of code a specific number of times. It's perfect for when you know exactly how many iterations you need.

## Basic Syntax

```c
for (initialization; condition; increment) {
    // Code to repeat
}
```

## Example

```c
for (int i = 1; i <= 5; i++) {
    printf("%d ", i);
}
```

## Loop Components

1. **Initialization**: `int i = 1` - Set starting value
2. **Condition**: `i <= 5` - Continue while true
3. **Increment**: `i++` - Update after each iteration

## Your Task

1. Use a for loop to print numbers 1 to 5
2. Use `printf("%d ", i)` to print each number
3. Make sure to include a space after each number

## Step-by-Step Execution

```c
for (int i = 1; i <= 5; i++) {
    printf("%d ", i);
}
```

1. `i = 1` (initialization)
2. Check `i <= 5` (1 <= 5 is true)
3. Execute `printf("%d ", i)` (prints 1)
4. Execute `i++` (i becomes 2)
5. Check `i <= 5` (2 <= 5 is true)
6. Continue until condition is false

## Common Patterns

### Count from 0 to n-1

```c
for (int i = 0; i < n; i++) {
    // Code
}
```

### Count backwards

```c
for (int i = 10; i >= 1; i--) {
    printf("%d ", i);
}
```

### Count by 2

```c
for (int i = 0; i <= 10; i += 2) {
    printf("%d ", i);
}
```

## Key Points

- Initialization runs once at the start
- Condition is checked before each iteration
- Increment runs after each iteration
- Loop continues while condition is true

## Next Steps

In the next lesson, you'll learn about using for loops with arrays!
