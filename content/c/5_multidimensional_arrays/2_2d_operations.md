---
title: "2D Array Operations"
description: "Common operations on 2D arrays"
order: 2
difficulty: "intermediate"
estimatedTime: "7 minutes"
language: "c"
group: "5_multidimensional_arrays"
startingCode: |
  #include <stdio.h>

  int main() {
      int matrix[3][3] = {
          {1, 2, 3},
          {4, 5, 6},
          {7, 8, 9}
      };
      
      // Print the entire matrix
      
      return 0;
  }
expectedOutput: "Matrix:\n1 2 3\n4 5 6\n7 8 9"
---

# 2D Array Operations

Let's explore common operations you can perform on 2D arrays.

## Printing a 2D Array

```c
void printMatrix(int matrix[][3], int rows) {
    for (int i = 0; i < rows; i++) {
        for (int j = 0; j < 3; j++) {
            printf("%d ", matrix[i][j]);
        }
        printf("\n");
    }
}
```

## Your Task

1. Print the entire 3x3 matrix
2. Use nested loops (one for rows, one for columns)
3. Add a newline after each row

## Common Operations

### Sum of All Elements

```c
int sum = 0;
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        sum += matrix[i][j];
    }
}
```

### Find Maximum Element

```c
int max = matrix[0][0];
for (int i = 0; i < 3; i++) {
    for (int j = 0; j < 3; j++) {
        if (matrix[i][j] > max) {
            max = matrix[i][j];
        }
    }
}
```

### Sum of Each Row

```c
for (int i = 0; i < 3; i++) {
    int rowSum = 0;
    for (int j = 0; j < 3; j++) {
        rowSum += matrix[i][j];
    }
    printf("Row %d sum: %d\n", i, rowSum);
}
```

## Matrix Transpose

```c
void transpose(int matrix[][3], int rows) {
    for (int i = 0; i < rows; i++) {
        for (int j = i + 1; j < 3; j++) {
            int temp = matrix[i][j];
            matrix[i][j] = matrix[j][i];
            matrix[j][i] = temp;
        }
    }
}
```

## Key Points

- Use nested loops for 2D array operations
- Outer loop for rows, inner loop for columns
- Be careful with array bounds
- Many operations require nested iteration

## Next Steps

In the next lesson, you'll learn about 3D arrays!
