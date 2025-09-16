---
title: "String Manipulation"
description: "Advanced string operations and manipulation"
order: 4
difficulty: "intermediate"
estimatedTime: "7 minutes"
language: "c"
group: "7_strings"
startingCode: |
  #include <stdio.h>
  #include <string.h>
  #include <ctype.h>

  int main() {
      char text[] = "hello world";
      
      // Convert to uppercase
      
      // Print the result
      
      return 0;
  }
expectedOutput: "HELLO WORLD"
---

# String Manipulation

Advanced string operations allow you to transform and analyze text data effectively.

## Character Functions

Include `<ctype.h>` for character manipulation:

```c
#include <ctype.h>
```

### Converting Case

```c
char text[] = "hello world";
int i = 0;
while (text[i]) {
    text[i] = toupper(text[i]);
    i++;
}
```

## Your Task

1. Convert the string "hello world" to uppercase
2. Use a loop to process each character
3. Use `toupper()` function from `ctype.h`

## Common Character Functions

- `toupper()` - Convert to uppercase
- `tolower()` - Convert to lowercase
- `isalpha()` - Check if alphabetic
- `isdigit()` - Check if digit
- `isspace()` - Check if whitespace

## String Reversal

```c
void reverseString(char str[]) {
    int length = strlen(str);
    for (int i = 0; i < length / 2; i++) {
        char temp = str[i];
        str[i] = str[length - 1 - i];
        str[length - 1 - i] = temp;
    }
}
```

## Word Count

```c
int countWords(char str[]) {
    int count = 0;
    int inWord = 0;

    for (int i = 0; str[i]; i++) {
        if (isspace(str[i])) {
            inWord = 0;
        } else if (!inWord) {
            inWord = 1;
            count++;
        }
    }
    return count;
}
```

## Remove Spaces

```c
void removeSpaces(char str[]) {
    int j = 0;
    for (int i = 0; str[i]; i++) {
        if (!isspace(str[i])) {
            str[j++] = str[i];
        }
    }
    str[j] = '\0';
}
```

## String Validation

```c
int isValidEmail(char email[]) {
    int hasAt = 0;
    int hasDot = 0;

    for (int i = 0; email[i]; i++) {
        if (email[i] == '@') hasAt = 1;
        if (email[i] == '.' && hasAt) hasDot = 1;
    }

    return hasAt && hasDot;
}
```

## Key Points

- Use `ctype.h` functions for character operations
- Always null-terminate strings after manipulation
- Consider edge cases (empty strings, single characters)
- Test your string functions thoroughly

## Next Steps

You've completed the Strings section! Next, you'll learn about for loops!
