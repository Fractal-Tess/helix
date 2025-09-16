---
title: "While Loop Control"
description: "Using break and continue in while loops"
order: 4
difficulty: "intermediate"
estimatedTime: "5 minutes"
language: "c"
group: "9_while_loops"
startingCode: |
  #include <stdio.h>

  int main() {
      int number = 1;
      
      // Print numbers 1-10, but skip 5
      
      return 0;
  }
expectedOutput: "1 2 3 4 6 7 8 9 10"
---

# While Loop Control

`break` and `continue` statements work the same way in while loops as they do in for loops.

## Continue Statement

`continue` skips the rest of the current iteration:

```c
int number = 1;
while (number <= 10) {
    if (number == 5) {
        number++;  // Important: update before continue
        continue;  // Skip this iteration
    }
    printf("%d ", number);
    number++;
}
```

## Your Task

1. Print numbers 1 to 10 using a while loop
2. Use `continue` to skip number 5
3. Don't forget to increment `number` before `continue`

## Break Statement

`break` exits the loop completely:

```c
int number = 1;
while (number <= 10) {
    if (number == 5) {
        break;  // Exit the loop
    }
    printf("%d ", number);
    number++;
}
// This would print: 1 2 3 4
```

## Common Use Cases

### Search and Exit

```c
int numbers[] = {10, 20, 30, 40, 50};
int target = 30;
int i = 0;

while (i < 5) {
    if (numbers[i] == target) {
        printf("Found at index %d\n", i);
        break;  // Exit after finding
    }
    i++;
}
```

### Input Validation with Retry Limit

```c
int attempts = 0;
int number;

while (attempts < 3) {
    printf("Enter a positive number: ");
    scanf("%d", &number);

    if (number > 0) {
        printf("Valid input!\n");
        break;  // Exit on valid input
    }

    attempts++;
    if (attempts < 3) {
        printf("Invalid input, try again.\n");
    }
}

if (attempts == 3) {
    printf("Too many failed attempts!\n");
}
```

### Skip Even Numbers

```c
int number = 1;
while (number <= 10) {
    if (number % 2 == 0) {
        number++;
        continue;  // Skip even numbers
    }
    printf("%d ", number);
    number++;
}
// Prints: 1 3 5 7 9
```

## Nested While Loops

```c
int i = 0;
while (i < 3) {
    int j = 0;
    while (j < 3) {
        if (i == 1 && j == 1) {
            break;  // Only breaks inner loop
        }
        printf("(%d,%d) ", i, j);
        j++;
    }
    printf("\n");
    i++;
}
```

## Key Points

- `continue` skips to next iteration
- `break` exits the entire loop
- Always update loop variables before `continue`
- Use these statements sparingly for clarity

## Next Steps

You've completed the While Loops section! Next, you'll learn about functions!
