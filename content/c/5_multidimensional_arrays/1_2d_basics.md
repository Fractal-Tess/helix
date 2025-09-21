---
title: "2D Array Basics"
description: "Introduction to two-dimensional arrays"
order: 1
difficulty: "intermediate"
estimatedTime: "8 minutes"
language: "c"
group: "5_multidimensional_arrays"
startingCode: |
  #include <stdio.h>

  int main() {
      // Declare a 3x3 matrix
      
      // Initialize the matrix
      
      // Print the element at row 1, column 1
      
      return 0;
  }
expectedOutput: "Element at [1][1]: 5"
---

# 2D Array Basics

A 2D array is an array of arrays. Think of it as a table with rows and columns.

## Declaration

```c
int matrix[3][4];        // 3 rows, 4 columns
float grades[5][3];      // 5 students, 3 subjects
char board[8][8];        // 8x8 chess board
```

## Initialization

### Method 1: Initialize during declaration

```c
int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};
```

### Method 2: Single line initialization

```c
int matrix[3][3] = {1, 2, 3, 4, 5, 6, 7, 8, 9};
```

## Accessing Elements

Use two indices: `array[row][column]`

```c
int matrix[3][3] = {
    {1, 2, 3},
    {4, 5, 6},
    {7, 8, 9}
};

printf("%d\n", matrix[0][0]);  // First element: 1
printf("%d\n", matrix[1][1]);  // Middle element: 5
printf("%d\n", matrix[2][2]);  // Last element: 9
```

## Your Task

1. Declare a 3x3 matrix
2. Initialize it with values 1-9
3. Print the element at row 1, column 1 (should be 5)

## Memory Layout

2D arrays are stored row by row in memory:

```
matrix[0][0] matrix[0][1] matrix[0][2]
matrix[1][0] matrix[1][1] matrix[1][2]
matrix[2][0] matrix[2][1] matrix[2][2]
```

## Key Points

- Use `array[row][column]` to access elements
- First index is row, second is column
- All elements must be of the same type
- Memory is allocated contiguously

## Next Steps

In the next lesson, you'll learn about 2D array operations!

