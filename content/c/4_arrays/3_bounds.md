---
title: "Array Bounds and Safety"
description: "Understanding array limits and avoiding buffer overflows"
order: 3
difficulty: "intermediate"
estimatedTime: "7 minutes"
language: "c"
group: "4_arrays"
startingCode: |
  #include <stdio.h>

  int main() {
      int numbers[5] = {10, 20, 30, 40, 50};
      
      // Print elements safely
      
      return 0;
  }
expectedOutput: "Elements: 10 20 30 40 50"
---

# Array Bounds and Safety

Array bounds checking is crucial for preventing buffer overflows and undefined behavior. C doesn't automatically check array bounds, so it's the programmer's responsibility.

## Array Bounds

For an array of size `n`:

- Valid indices: `0` to `n-1`
- Invalid indices: negative numbers or `>= n`

```c
int numbers[5];  // Valid indices: 0, 1, 2, 3, 4
```

## Safe Array Access

```c
int numbers[5] = {10, 20, 30, 40, 50};
int size = 5;

// Safe way to print all elements
for (int i = 0; i < size; i++) {
    printf("%d ", numbers[i]);
}
```

## Your Task

1. Print all elements of the array safely
2. Use a variable to store the array size
3. Ensure you don't access beyond the array bounds

## Common Bounds Errors

### Buffer Overflow

```c
int numbers[5] = {1, 2, 3, 4, 5};
numbers[5] = 100;  // ERROR: Out of bounds!
```

### Negative Index

```c
int numbers[5] = {1, 2, 3, 4, 5};
int value = numbers[-1];  // ERROR: Invalid index!
```

## Defensive Programming

### Always Check Bounds

```c
void printElement(int arr[], int size, int index) {
    if (index >= 0 && index < size) {
        printf("Element: %d\n", arr[index]);
    } else {
        printf("Index out of bounds!\n");
    }
}
```

### Use Constants for Array Size

```c
#define ARRAY_SIZE 5
int numbers[ARRAY_SIZE];

for (int i = 0; i < ARRAY_SIZE; i++) {
    // Safe access
}
```

## Memory Layout

Arrays are stored in contiguous memory:

```
numbers[0] -> [10] [20] [30] [40] [50] <- numbers[4]
Address:     100  104  108  112  116
```

## Key Points

- C doesn't check array bounds automatically
- Always validate indices before access
- Use constants for array sizes
- Buffer overflows can cause crashes or security issues

## Next Steps

In the next lesson, you'll learn about passing arrays to functions!
