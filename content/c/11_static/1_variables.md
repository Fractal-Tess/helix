---
title: "Static Variables"
description: "Using static variables in functions"
order: 1
difficulty: "advanced"
estimatedTime: "8 minutes"
language: "c"
group: "11_static"
startingCode: |
  #include <stdio.h>

  void counter() {
      // Create a static variable to count calls
      
      // Increment and print the count
      
  }

  int main() {
      // Call counter multiple times
      
      return 0;
  }
expectedOutput: "Call count: 1\nCall count: 2\nCall count: 3"
---

# Static Variables

Static variables inside functions retain their values between function calls. They are initialized only once and persist for the program's lifetime.

## Static Local Variables

```c
void counter() {
    static int count = 0;  // Initialized only once
    count++;
    printf("Call count: %d\n", count);
}
```

## Your Task

1. Create a static variable `count` in the `counter()` function
2. Initialize it to 0
3. Increment and print the count each time the function is called
4. Call the function 3 times from `main()`

## Key Properties

### Initialization

- Static variables are initialized only once
- Initialization happens before the first function call
- Default value is 0 if not explicitly initialized

### Lifetime

- Static variables persist for the entire program execution
- They are not destroyed when the function returns
- Memory is allocated in the data segment

### Scope

- Static variables are only accessible within the function
- They cannot be accessed from outside the function

## Example: Function Call Counter

```c
void functionCallCounter() {
    static int callCount = 0;
    callCount++;
    printf("This function has been called %d times\n", callCount);
}
```

## Example: Random Number Generator

```c
int randomNumber() {
    static unsigned int seed = 1;
    seed = seed * 1103515245 + 12345;
    return (seed / 65536) % 32768;
}
```

## Example: Fibonacci with Memoization

```c
int fibonacci(int n) {
    static int memo[100] = {0};  // Static array for memoization

    if (n <= 1) {
        return n;
    }

    if (memo[n] != 0) {
        return memo[n];  // Return cached result
    }

    memo[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return memo[n];
}
```

## Comparison with Regular Variables

| Type    | Initialization      | Lifetime           | Scope    |
| ------- | ------------------- | ------------------ | -------- |
| Regular | Every function call | Function execution | Function |
| Static  | Once only           | Program execution  | Function |

## Key Points

- Static variables retain values between function calls
- Initialized only once before first call
- Scope is limited to the function
- Useful for counters, caches, and state tracking

## Next Steps

In the next lesson, you'll learn about static global variables!

