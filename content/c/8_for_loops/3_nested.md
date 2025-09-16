---
title: "Nested For Loops"
description: "Using multiple for loops for complex patterns"
order: 3
difficulty: "intermediate"
estimatedTime: "8 minutes"
language: "c"
group: "8_for_loops"
startingCode: |
  #include <stdio.h>

  int main() {
      // Print a 3x3 pattern using nested loops
      
      return 0;
  }
expectedOutput: "1 2 3\n4 5 6\n7 8 9"
---

# Nested For Loops

Nested for loops are loops inside other loops. They're essential for working with 2D arrays and creating patterns.

## Basic Nested Loop

```c
for (int i = 0; i < 3; i++) {        // Outer loop (rows)
    for (int j = 0; j < 3; j++) {    // Inner loop (columns)
        printf("%d ", i * 3 + j + 1);
    }
    printf("\n");  // New line after each row
}
```

## Your Task

1. Create a 3x3 grid using nested for loops
2. Print numbers 1-9 in a 3x3 pattern
3. Use the outer loop for rows, inner loop for columns

## Pattern Examples

### Square Pattern

```c
for (int i = 0; i < 5; i++) {
    for (int j = 0; j < 5; j++) {
        printf("* ");
    }
    printf("\n");
}
```

### Right Triangle

```c
for (int i = 0; i < 5; i++) {
    for (int j = 0; j <= i; j++) {
        printf("* ");
    }
    printf("\n");
}
```

### Number Triangle

```c
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= i; j++) {
        printf("%d ", j);
    }
    printf("\n");
}
```

## 2D Array Processing

```c
int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        printf("%d ", matrix[i][j]);
    }
    printf("\n");
}
```

## Multiplication Table

```c
for (int i = 1; i <= 5; i++) {
    for (int j = 1; j <= 5; j++) {
        printf("%2d ", i * j);
    }
    printf("\n");
}
```

## Loop Variable Scope

```c
for (int i = 0; i < 3; i++) {
    for (int i = 0; i < 3; i++) {  // Different 'i' variable
        printf("%d ", i);
    }
    printf("\n");
}
```

## Key Points

- Outer loop controls rows, inner loop controls columns
- Each loop has its own variable
- Inner loop completes fully for each outer loop iteration
- Use different variable names to avoid confusion

## Next Steps

In the next lesson, you'll learn about loop control statements!
