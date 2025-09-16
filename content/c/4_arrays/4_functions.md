---
title: "Arrays and Functions"
description: "Passing arrays to functions and working with them"
order: 4
difficulty: "intermediate"
estimatedTime: "7 minutes"
language: "c"
group: "4_arrays"
startingCode: |
  #include <stdio.h>

  // Function to print array
  void printArray(int arr[], int size) {
      // Print all elements
  }

  int main() {
      int numbers[5] = {10, 20, 30, 40, 50};
      
      // Call the function
      
      return 0;
  }
expectedOutput: "Array: 10 20 30 40 50"
---

# Arrays and Functions

Arrays are passed to functions by reference, meaning the function can modify the original array. You need to pass the array and its size.

## Function Declaration

```c
void printArray(int arr[], int size);
void modifyArray(int arr[], int size);
int findMax(int arr[], int size);
```

## Passing Arrays to Functions

```c
int numbers[5] = {10, 20, 30, 40, 50};
printArray(numbers, 5);  // Pass array and size
```

## Your Task

1. Complete the `printArray` function to print all elements
2. Call the function from `main` with the numbers array
3. Use a loop to iterate through the array

## Function Implementation

```c
void printArray(int arr[], int size) {
    printf("Array: ");
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}
```

## Array Parameters

- `int arr[]` - Array parameter (same as `int* arr`)
- `int size` - Size of the array
- Arrays are always passed by reference

## Common Array Functions

### Find Maximum

```c
int findMax(int arr[], int size) {
    int max = arr[0];
    for (int i = 1; i < size; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
```

### Sum Array

```c
int sumArray(int arr[], int size) {
    int sum = 0;
    for (int i = 0; i < size; i++) {
        sum += arr[i];
    }
    return sum;
}
```

### Modify Array

```c
void doubleArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        arr[i] *= 2;  // Modifies original array
    }
}
```

## Key Points

- Arrays are passed by reference to functions
- Always pass the array size as a separate parameter
- Functions can modify the original array
- Use meaningful function names and parameters

## Next Steps

You've completed the Arrays section! Next, you'll learn about multidimensional arrays!
