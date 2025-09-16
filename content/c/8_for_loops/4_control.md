---
title: "Loop Control Statements"
description: "Using break and continue in for loops"
order: 4
difficulty: "intermediate"
estimatedTime: "7 minutes"
language: "c"
group: "8_for_loops"
startingCode: |
  #include <stdio.h>

  int main() {
      // Print numbers 1-10, but skip 5
      
      return 0;
  }
expectedOutput: "1 2 3 4 6 7 8 9 10"
---

# Loop Control Statements

`break` and `continue` statements provide additional control over loop execution.

## Continue Statement

`continue` skips the rest of the current iteration and moves to the next one:

```c
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        continue;  // Skip this iteration
    }
    printf("%d ", i);
}
```

## Your Task

1. Print numbers 1 to 10
2. Use `continue` to skip number 5
3. Print all other numbers normally

## Break Statement

`break` exits the loop completely:

```c
for (int i = 1; i <= 10; i++) {
    if (i == 5) {
        break;  // Exit the loop
    }
    printf("%d ", i);
}
// This would print: 1 2 3 4
```

## Common Use Cases

### Search and Exit

```c
int numbers[] = {10, 20, 30, 40, 50};
int target = 30;

for (int i = 0; i < 5; i++) {
    if (numbers[i] == target) {
        printf("Found at index %d\n", i);
        break;  // Exit after finding
    }
}
```

### Skip Even Numbers

```c
for (int i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        continue;  // Skip even numbers
    }
    printf("%d ", i);
}
// Prints: 1 3 5 7 9
```

### Input Validation

```c
int number;
for (int i = 0; i < 3; i++) {
    printf("Enter a positive number: ");
    scanf("%d", &number);
    if (number > 0) {
        printf("Valid input!\n");
        break;  // Exit on valid input
    }
    printf("Invalid input, try again.\n");
}
```

## Nested Loop Control

```c
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (i == 1 && j == 1) {
            break;  // Only breaks inner loop
        }
        printf("(%d,%d) ", i, j);
    }
    printf("\n");
}
```

## Key Points

- `continue` skips to next iteration
- `break` exits the entire loop
- `break` only exits the innermost loop
- Use these statements sparingly for clarity

## Next Steps

You've completed the For Loops section! Next, you'll learn about while loops!
