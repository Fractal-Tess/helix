---
title: "3D Arrays"
description: "Working with three-dimensional arrays"
order: 3
difficulty: "intermediate"
estimatedTime: "5 minutes"
language: "c"
group: "5_multidimensional_arrays"
startingCode: |
  #include <stdio.h>

  int main() {
      // Declare a 2x2x2 3D array
      
      // Initialize the array
      
      // Print element at [0][1][1]
      
      return 0;
  }
expectedOutput: "Element at [0][1][1]: 6"
---

# 3D Arrays

3D arrays extend the concept to three dimensions. Think of them as a cube or multiple 2D arrays stacked together.

## Declaration

```c
int cube[2][3][4];      // 2 layers, 3 rows, 4 columns
float data[5][5][5];    // 5x5x5 cube
char text[10][20][30];  // 10 pages, 20 lines, 30 characters
```

## Initialization

```c
int cube[2][2][2] = {
    {  // First layer
        {1, 2},
        {3, 4}
    },
    {  // Second layer
        {5, 6},
        {7, 8}
    }
};
```

## Accessing Elements

Use three indices: `array[layer][row][column]`

```c
printf("%d\n", cube[0][0][0]);  // First element: 1
printf("%d\n", cube[1][1][1]);  // Last element: 8
```

## Your Task

1. Declare a 2x2x2 3D array
2. Initialize it with values 1-8
3. Print the element at layer 0, row 1, column 1 (should be 6)

## Memory Layout

3D arrays are stored layer by layer, row by row:

```
Layer 0: [1][2]  Layer 1: [5][6]
         [3][4]           [7][8]
```

## Common Operations

### Print 3D Array

```c
for (int i = 0; i < 2; i++) {        // layers
    printf("Layer %d:\n", i);
    for (int j = 0; j < 2; j++) {    // rows
        for (int k = 0; k < 2; k++) { // columns
            printf("%d ", cube[i][j][k]);
        }
        printf("\n");
    }
    printf("\n");
}
```

### Sum All Elements

```c
int sum = 0;
for (int i = 0; i < 2; i++) {
    for (int j = 0; j < 2; j++) {
        for (int k = 0; k < 2; k++) {
            sum += cube[i][j][k];
        }
    }
}
```

## Key Points

- 3D arrays use three indices
- Think of them as layers of 2D arrays
- Use triple nested loops for operations
- Memory is allocated contiguously

## Next Steps

You've completed multidimensional arrays! Next, you'll learn about conditional statements!
