---
title: "Your First C Program"
description: "Write and run your first 'Hello, World!' program"
order: 2
difficulty: "beginner"
estimatedTime: "5 minutes"
language: "c"
group: "2_hello_world"
startingCode: |
  #include <stdio.h>

  int main() {
      // Print "Hello, World!" to the screen
      
      return 0;
  }
expectedOutput: "Hello, World!"
---

# Your First C Program

Now let's write the classic "Hello, World!" program. This is the traditional first program that every programmer writes when learning a new language.

## The Program

```c
#include <stdio.h>

int main() {
    printf("Hello, World!\n");
    return 0;
}
```

## Breaking It Down

### `printf()` Function

- `printf()` is used to display text on the screen
- It's defined in the `stdio.h` header file
- The text to display goes inside quotes: `"Hello, World!"`
- `\n` creates a new line after the text

### Complete Structure

1. `#include <stdio.h>` - Include the standard input/output library
2. `int main()` - Define the main function
3. `printf("Hello, World!\n");` - Print the message
4. `return 0;` - End the program successfully

## Your Task

1. Complete the program by adding the `printf()` statement
2. Make sure to include the newline character `\n`
3. Run the program to see "Hello, World!" displayed

## Compiling and Running

To compile and run your C program:

```bash
gcc hello.c -o hello
./hello
```

## Expected Output

When you run the program, you should see:

```
Hello, World!
```

## Key Points

- `printf()` is the standard function for output in C
- Always include `\n` for proper line breaks
- The semicolon `;` ends each statement
- Every C program needs a `main()` function

## Congratulations!

You've written your first C program! This simple program demonstrates the basic structure and output capabilities of C programming.
