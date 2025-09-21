---
title: "Function Basics"
description: "Introduction to functions in C programming"
order: 1
difficulty: "intermediate"
estimatedTime: "8 minutes"
language: "c"
group: "10_functions"
startingCode: |
  #include <stdio.h>

  // Function declaration
  void greet();

  int main() {
      // Call the function
      
      return 0;
  }

  // Function definition
  void greet() {
      // Print a greeting message
  }
expectedOutput: "Hello, World!"
---

# Function Basics

Functions are blocks of code that perform specific tasks. They help organize your program and make it more modular.

## Function Declaration

```c
void greet();  // Declaration (prototype)
```

## Function Definition

```c
void greet() {
    printf("Hello, World!\n");
}
```

## Function Call

```c
greet();  // Call the function
```

## Your Task

1. Complete the `greet()` function to print "Hello, World!"
2. Call the function from `main()`
3. Notice the function declaration at the top

## Function Components

### Return Type

- `void` - No return value
- `int` - Returns an integer
- `float` - Returns a float
- `char` - Returns a character

### Function Name

- Choose descriptive names
- Use camelCase or snake_case
- Examples: `calculateSum`, `printArray`, `isValid`

### Function Body

- Contains the actual code
- Enclosed in curly braces `{}`

## Example with Return Value

```c
int add(int a, int b) {
    return a + b;
}

int main() {
    int result = add(5, 3);
    printf("Sum: %d\n", result);
    return 0;
}
```

## Benefits of Functions

1. **Reusability** - Use the same code multiple times
2. **Modularity** - Break complex problems into smaller parts
3. **Readability** - Code is easier to understand
4. **Maintainability** - Easier to fix and update

## Key Points

- Functions must be declared before use
- Use descriptive names for functions
- Functions can return values or be void
- Functions promote code organization

## Next Steps

In the next lesson, you'll learn about function parameters!

