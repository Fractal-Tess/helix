---
title: "Array Operations"
description: "Common operations on arrays in C"
order: 2
difficulty: "beginner"
estimatedTime: "8 minutes"
language: "c"
group: "4_arrays"
startingCode: |
  #include <stdio.h>

  int main() {
      int numbers[5] = {10, 20, 30, 40, 50};
      
      // Print all elements
      
      // Find the sum
      
      return 0;
  }
expectedOutput: "Elements: 10 20 30 40 50\nSum: 150"
---

# Array Operations

Arrays support various operations for data manipulation. Let's explore the most common ones.

## Printing Array Elements

```c
int numbers[5] = {10, 20, 30, 40, 50};

for (int i = 0; i < 5; i++) {
    printf("%d ", numbers[i]);
}
printf("\n");
```

## Finding Sum

```c
int sum = 0;
for (int i = 0; i < 5; i++) {
    sum += numbers[i];
}
printf("Sum: %d\n", sum);
```

## Finding Maximum

```c
int max = numbers[0];
for (int i = 1; i < 5; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
printf("Maximum: %d\n", max);
```

## Your Task

1. Print all elements of the array
2. Calculate and print the sum of all elements
3. Use a loop to iterate through the array

## Common Array Operations

### Searching

```c
int search(int arr[], int size, int target) {
    for (int i = 0; i < size; i++) {
        if (arr[i] == target) {
            return i;  // Found at index i
        }
    }
    return -1;  // Not found
}
```

### Copying

```c
int source[5] = {1, 2, 3, 4, 5};
int dest[5];

for (int i = 0; i < 5; i++) {
    dest[i] = source[i];
}
```

### Reversing

```c
int temp;
for (int i = 0; i < 5/2; i++) {
    temp = numbers[i];
    numbers[i] = numbers[4-i];
    numbers[4-i] = temp;
}
```

## Key Points

- Use loops to process array elements
- Always check array bounds
- Arrays are passed by reference to functions
- Common operations: search, sort, copy, reverse

## Next Steps

In the next lesson, you'll learn about array bounds and safety!
