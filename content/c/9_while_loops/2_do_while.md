---
title: "Do-While Loops"
description: "Using do-while loops for guaranteed execution"
order: 2
difficulty: "beginner"
estimatedTime: "5 minutes"
language: "c"
group: "9_while_loops"
startingCode: |
  #include <stdio.h>

  int main() {
      int choice;
      
      // Create a menu that repeats until user chooses 0
      
      return 0;
  }
expectedOutput: "Menu:\n1. Option 1\n2. Option 2\n0. Exit\nChoice: [user input]"
---

# Do-While Loops

Do-while loops are similar to while loops, but they guarantee at least one execution of the loop body.

## Basic Syntax

```c
do {
    // Code to execute at least once
    // Update condition variable
} while (condition);
```

## Example

```c
int choice;
do {
    printf("Menu:\n");
    printf("1. Option 1\n");
    printf("2. Option 2\n");
    printf("0. Exit\n");
    printf("Choice: ");
    scanf("%d", &choice);
} while (choice != 0);
```

## Your Task

1. Create a simple menu using do-while
2. Show options 1, 2, and 0 (Exit)
3. Continue until user chooses 0
4. Use `scanf()` to get user input

## Key Differences

| Loop Type  | Condition Check  | Guaranteed Execution |
| ---------- | ---------------- | -------------------- |
| `while`    | Before loop body | No                   |
| `do-while` | After loop body  | Yes                  |

## Common Use Cases

### Menu Systems

```c
int choice;
do {
    printf("1. Add\n2. Delete\n3. View\n0. Exit\n");
    scanf("%d", &choice);
    // Process choice
} while (choice != 0);
```

### Input Validation

```c
int number;
do {
    printf("Enter a positive number: ");
    scanf("%d", &number);
    if (number <= 0) {
        printf("Invalid input!\n");
    }
} while (number <= 0);
```

### Game Loops

```c
char playAgain;
do {
    // Play game
    printf("Play again? (y/n): ");
    scanf(" %c", &playAgain);
} while (playAgain == 'y' || playAgain == 'Y');
```

## When to Use Do-While

- **Menu systems** - Always show menu first
- **Input validation** - Always ask for input first
- **User interaction** - Always prompt user first
- **Any case where you need guaranteed execution**

## Key Points

- Condition is checked after the loop body
- Loop body executes at least once
- Use for menu systems and input validation
- Don't forget the semicolon after `while`

## Next Steps

In the next lesson, you'll learn about common while loop patterns!
