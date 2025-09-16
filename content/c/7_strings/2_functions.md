---
title: "String Functions"
description: "Using string.h library functions"
order: 2
difficulty: "intermediate"
estimatedTime: "10 minutes"
language: "c"
group: "7_strings"
startingCode: |
  #include <stdio.h>
  #include <string.h>

  int main() {
      char str1[] = "Hello";
      char str2[] = "World";
      char result[20];
      
      // Use string functions
      
      return 0;
  }
expectedOutput: "Length: 5\nConcatenated: HelloWorld"
---

# String Functions

The `string.h` library provides many useful functions for working with strings.

## Include the Header

```c
#include <string.h>
```

## Common String Functions

### strlen() - String Length

```c
char str[] = "Hello";
int length = strlen(str);  // Returns 5
printf("Length: %d\n", length);
```

### strcpy() - String Copy

```c
char source[] = "Hello";
char destination[20];
strcpy(destination, source);
printf("Copied: %s\n", destination);
```

### strcat() - String Concatenation

```c
char str1[20] = "Hello";
char str2[] = "World";
strcat(str1, str2);
printf("Concatenated: %s\n", str1);
```

### strcmp() - String Compare

```c
char str1[] = "Hello";
char str2[] = "World";
int result = strcmp(str1, str2);
if (result == 0) {
    printf("Strings are equal\n");
} else if (result < 0) {
    printf("str1 is less than str2\n");
} else {
    printf("str1 is greater than str2\n");
}
```

## Your Task

1. Find the length of str1 using `strlen()`
2. Concatenate str1 and str2 using `strcat()`
3. Print both results

## More String Functions

### strncpy() - Copy n characters

```c
char source[] = "Hello World";
char destination[10];
strncpy(destination, source, 5);
destination[5] = '\0';  // Null terminate
```

### strncat() - Concatenate n characters

```c
char str1[20] = "Hello";
char str2[] = "World";
strncat(str1, str2, 3);  // Concatenate first 3 chars
```

### strstr() - Find substring

```c
char str[] = "Hello World";
char *found = strstr(str, "World");
if (found != NULL) {
    printf("Found at position: %ld\n", found - str);
}
```

## Safety Considerations

- Always ensure destination has enough space
- Use `strncpy()` and `strncat()` for safer operations
- Always null-terminate strings manually when needed

## Key Points

- Include `<string.h>` for string functions
- `strlen()` returns the length (excluding null terminator)
- `strcpy()` copies strings
- `strcat()` concatenates strings
- `strcmp()` compares strings

## Next Steps

In the next lesson, you'll learn about string input and output!
