---
title: "Recursive Functions"
description: "Functions that call themselves"
order: 4
difficulty: "advanced"
estimatedTime: "8 minutes"
language: "c"
group: "10_functions"
startingCode: |
  #include <stdio.h>

  // Function declaration
  int factorial(int n);

  int main() {
      int n = 5;
      
      // Calculate and print factorial
      
      return 0;
  }

  // Function definition
  int factorial(int n) {
      // Base case: factorial of 0 or 1 is 1
      if (n <= 1) {
          return 1;
      }
      // Recursive case: n! = n * (n-1)!
      return n * factorial(n - 1);
  }
expectedOutput: "Factorial of 5 is 120"
---

# Recursive Functions

Recursive functions call themselves to solve problems. They break complex problems into smaller, similar subproblems.

## What is Recursion?

Recursion is when a function calls itself. It requires:

1. **Base case** - When to stop
2. **Recursive case** - How to break down the problem

## Factorial Example

```c
int factorial(int n) {
    if (n <= 1) {           // Base case
        return 1;
    }
    return n * factorial(n - 1);  // Recursive case
}
```

## Your Task

1. Complete the factorial function
2. Calculate factorial of 5
3. Print the result

## How Recursion Works

```
factorial(5)
= 5 * factorial(4)
= 5 * 4 * factorial(3)
= 5 * 4 * 3 * factorial(2)
= 5 * 4 * 3 * 2 * factorial(1)
= 5 * 4 * 3 * 2 * 1
= 120
```

## More Recursive Examples

### Fibonacci Sequence

```c
int fibonacci(int n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
```

### Sum of Digits

```c
int sumDigits(int n) {
    if (n == 0) {
        return 0;
    }
    return (n % 10) + sumDigits(n / 10);
}
```

### Power Function

```c
int power(int base, int exp) {
    if (exp == 0) {
        return 1;
    }
    return base * power(base, exp - 1);
}
```

### Binary Search

```c
int binarySearch(int arr[], int left, int right, int target) {
    if (left <= right) {
        int mid = left + (right - left) / 2;

        if (arr[mid] == target) {
            return mid;
        }

        if (arr[mid] > target) {
            return binarySearch(arr, left, mid - 1, target);
        }

        return binarySearch(arr, mid + 1, right, target);
    }

    return -1;  // Not found
}
```

## When to Use Recursion

### Good for:

- Tree and graph traversal
- Mathematical problems (factorial, fibonacci)
- Divide and conquer algorithms
- Problems with recursive structure

### Avoid when:

- Simple iteration would work
- Performance is critical
- Stack overflow is a concern
- The problem doesn't have recursive structure

## Key Points

- Always have a base case
- Make sure the recursive case approaches the base case
- Recursion can be less efficient than iteration
- Use recursion when it makes the code clearer

## Next Steps

You've completed the Functions section! Next, you'll learn about the static keyword!
