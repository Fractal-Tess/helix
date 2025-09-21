---
title: "String Input and Output"
description: "Reading and writing strings in C"
order: 3
difficulty: "intermediate"
estimatedTime: "8 minutes"
language: "c"
group: "7_strings"
startingCode: |
  #include <stdio.h>

  int main() {
      char name[50];
      
      // Get input from user
      
      // Print the input
      
      return 0;
  }
expectedOutput: "Hello, [user input]!"
---

# String Input and Output

Reading and writing strings requires special functions to handle the null terminator properly.

## String Input

### scanf() for strings

```c
char name[50];
printf("Enter your name: ");
scanf("%s", name);  // Reads until whitespace
printf("Hello, %s!\n", name);
```

### fgets() for complete lines

```c
char sentence[100];
printf("Enter a sentence: ");
fgets(sentence, sizeof(sentence), stdin);
printf("You entered: %s", sentence);
```

## Your Task

1. Declare a character array for the name
2. Use `scanf()` to read the name from user
3. Print "Hello, [name]!" using the input

## String Output

### printf() with %s

```c
char str[] = "Hello, World!";
printf("%s\n", str);
printf("String: %s\n", str);
```

### puts() function

```c
char str[] = "Hello, World!";
puts(str);  // Automatically adds newline
```

## Input Functions Comparison

| Function      | Stops at   | Includes newline | Buffer safe     |
| ------------- | ---------- | ---------------- | --------------- |
| `scanf("%s")` | Whitespace | No               | No              |
| `fgets()`     | Newline    | Yes              | Yes             |
| `gets()`      | Newline    | No               | No (deprecated) |

## Safe String Input

```c
char name[50];
printf("Enter your name: ");
if (fgets(name, sizeof(name), stdin) != NULL) {
    // Remove newline if present
    name[strcspn(name, "\n")] = '\0';
    printf("Hello, %s!\n", name);
}
```

## Reading Multiple Words

```c
char first[20], last[20];
printf("Enter first and last name: ");
scanf("%s %s", first, last);
printf("Hello, %s %s!\n", first, last);
```

## Key Points

- Use `scanf("%s")` for single words
- Use `fgets()` for complete lines
- Always check buffer bounds
- `puts()` automatically adds newline

## Next Steps

In the next lesson, you'll learn about string manipulation!

