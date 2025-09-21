---
title: "For Loops with Arrays"
description: "Using for loops to iterate through arrays"
order: 2
difficulty: "beginner"
estimatedTime: "7 minutes"
language: "c"
group: "8_for_loops"
startingCode: |
  #include <stdio.h>

  int main() {
      int numbers[5] = {10, 20, 30, 40, 50};
      
      // Print all elements using a for loop
      
      return 0;
  }
expectedOutput: "10 20 30 40 50"
---

# For Loops with Arrays

For loops are perfect for iterating through arrays. They allow you to access each element systematically.

## Basic Array Iteration

```c
int numbers[5] = {10, 20, 30, 40, 50};

for (int i = 0; i < 5; i++) {
    printf("%d ", numbers[i]);
}
```

## Your Task

1. Use a for loop to print all elements of the numbers array
2. Start with index 0 and go to index 4
3. Use `printf("%d ", numbers[i])` for each element

## Array Length Considerations

### Fixed Size

```c
int numbers[5] = {10, 20, 30, 40, 50};
for (int i = 0; i < 5; i++) {
    printf("%d ", numbers[i]);
}
```

### Using sizeof

```c
int numbers[] = {10, 20, 30, 40, 50};
int size = sizeof(numbers) / sizeof(numbers[0]);
for (int i = 0; i < size; i++) {
    printf("%d ", numbers[i]);
}
```

## Common Array Operations

### Sum of Array Elements

```c
int sum = 0;
for (int i = 0; i < 5; i++) {
    sum += numbers[i];
}
printf("Sum: %d\n", sum);
```

### Find Maximum Element

```c
int max = numbers[0];
for (int i = 1; i < 5; i++) {
    if (numbers[i] > max) {
        max = numbers[i];
    }
}
printf("Maximum: %d\n", max);
```

### Search for Value

```c
int target = 30;
int found = 0;
for (int i = 0; i < 5; i++) {
    if (numbers[i] == target) {
        printf("Found %d at index %d\n", target, i);
        found = 1;
        break;
    }
}
if (!found) {
    printf("%d not found\n", target);
}
```

## String Iteration

```c
char str[] = "Hello";
for (int i = 0; str[i] != '\0'; i++) {
    printf("%c ", str[i]);
}
```

## Key Points

- Use index 0 to start, go to size-1
- Always check array bounds
- Use `sizeof` to calculate array size
- For loops are ideal for array processing

## Next Steps

In the next lesson, you'll learn about nested for loops!

