---
title: "Function Parameters"
description: "Passing data to functions using parameters"
order: 2
difficulty: "intermediate"
estimatedTime: "8 minutes"
language: "c"
group: "10_functions"
startingCode: |
  #include <stdio.h>

  // Function declaration
  int multiply(int a, int b);

  int main() {
      int x = 5, y = 3;
      
      // Call multiply function and print result
      
      return 0;
  }

  // Function definition
  int multiply(int a, int b) {
      // Return the product of a and b
  }
expectedOutput: "5 * 3 = 15"
---

# Function Parameters

Parameters allow you to pass data to functions. They make functions flexible and reusable.

## Function with Parameters

```c
int multiply(int a, int b) {
    return a * b;
}
```

## Calling with Arguments

```c
int result = multiply(5, 3);
printf("5 * 3 = %d\n", result);
```

## Your Task

1. Complete the `multiply()` function to return `a * b`
2. Call the function with arguments 5 and 3
3. Print the result in the format "5 \* 3 = 15"

## Parameter Types

### Value Parameters (Pass by Value)

```c
void increment(int x) {
    x++;  // Only affects local copy
    printf("Inside function: %d\n", x);
}

int main() {
    int num = 5;
    increment(num);
    printf("In main: %d\n", num);  // Still 5
    return 0;
}
```

### Reference Parameters (Pass by Reference)

```c
void increment(int *x) {
    (*x)++;  // Affects original variable
    printf("Inside function: %d\n", *x);
}

int main() {
    int num = 5;
    increment(&num);
    printf("In main: %d\n", num);  // Now 6
    return 0;
}
```

## Multiple Parameters

```c
float calculateArea(float length, float width) {
    return length * width;
}

int main() {
    float area = calculateArea(5.5, 3.2);
    printf("Area: %.2f\n", area);
    return 0;
}
```

## Array Parameters

```c
void printArray(int arr[], int size) {
    for (int i = 0; i < size; i++) {
        printf("%d ", arr[i]);
    }
    printf("\n");
}

int main() {
    int numbers[] = {1, 2, 3, 4, 5};
    printArray(numbers, 5);
    return 0;
}
```

## Key Points

- Parameters are local variables in the function
- Pass by value creates a copy
- Pass by reference uses pointers
- Arrays are always passed by reference

## Next Steps

In the next lesson, you'll learn about function prototypes!

