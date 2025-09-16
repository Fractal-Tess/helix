---
title: "Array Basics"
description: "Introduction to arrays in C programming"
order: 1
difficulty: "beginner"
estimatedTime: "8 minutes"
language: "c"
group: "4_arrays"
startingCode: |
  #include <stdio.h>

  int main() {
      // Declare an array of 5 integers
      
      // Initialize the array with values
      
      // Print the first element
      
      return 0;
  }
expectedOutput: "First element: 10"
---

# Array Basics

An array is a collection of elements of the same data type stored in contiguous memory locations.

## Array Declaration

```c
int numbers[5];        // Array of 5 integers
float grades[10];      // Array of 10 floats
char letters[26];      // Array of 26 characters
```

## Array Initialization

### Method 1: Initialize during declaration

```c
int numbers[5] = {10, 20, 30, 40, 50};
```

### Method 2: Initialize with fewer elements

```c
int numbers[5] = {10, 20};  // Rest are 0
```

### Method 3: Let compiler determine size

```c
int numbers[] = {10, 20, 30, 40, 50};  // Size is 5
```

## Accessing Array Elements

Arrays use zero-based indexing:

```c
int numbers[5] = {10, 20, 30, 40, 50};
printf("%d\n", numbers[0]);  // First element: 10
printf("%d\n", numbers[4]);  // Last element: 50
```

## Your Task

1. Declare an array of 5 integers
2. Initialize it with values: 10, 20, 30, 40, 50
3. Print the first element (index 0)

## Array Properties

- **Size**: Fixed at compile time
- **Indexing**: Starts from 0
- **Memory**: Elements stored contiguously
- **Type**: All elements must be the same type

## Common Operations

```c
// Assign value
numbers[2] = 100;

// Read value
int value = numbers[1];

// Loop through array
for (int i = 0; i < 5; i++) {
    printf("%d ", numbers[i]);
}
```

## Key Points

- Arrays store multiple values of the same type
- Use square brackets `[]` for declaration and access
- Index starts at 0, not 1
- Size must be known at compile time

## Next Steps

In the next lesson, you'll learn about array operations!
