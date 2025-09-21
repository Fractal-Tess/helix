---
title: "Boolean Variables"
description: "Working with boolean data type in C"
order: 5
difficulty: "beginner"
estimatedTime: "5 minutes"
language: "c"
group: "3_variables_and_types"
startingCode: |
  #include <stdio.h>
  #include <stdbool.h>

  int main() {
      // Declare a boolean variable
      
      // Print the value
      
      return 0;
  }
expectedOutput: "The value is: true"
---

# Boolean Variables

Boolean variables can only hold two values: `true` or `false`. In C, the boolean type was introduced in C99.

## Including the Header

```c
#include <stdbool.h>  // Required for bool type
```

## Declaration and Initialization

```c
bool isStudent;              // Declaration
bool isPassed = true;        // Declaration with initialization
bool isFailed = false;
```

## Boolean Values

- `true` - Represents true/yes/1
- `false` - Represents false/no/0

## Example

```c
#include <stdio.h>
#include <stdbool.h>

int main() {
    bool isStudent = true;
    printf("The value is: %s\n", isStudent ? "true" : "false");
    return 0;
}
```

## Your Task

1. Include the `<stdbool.h>` header
2. Declare a boolean variable named `isStudent` and assign it `true`
3. Use `printf()` to display "The value is: true"

## Alternative (Pre-C99)

Before C99, programmers used integers:

```c
int isStudent = 1;  // 1 for true
int isFailed = 0;   // 0 for false
```

## Boolean Operations

```c
bool a = true;
bool b = false;

bool result1 = a && b;  // AND: false
bool result2 = a || b;  // OR: true
bool result3 = !a;      // NOT: false
```

## Format Specifiers

- `%d` - Print as 1 or 0
- `%s` - Print as "true" or "false" (with ternary operator)

## Key Points

- Include `<stdbool.h>` for boolean support
- Use `true` and `false` as values
- Boolean operations: `&&`, `||`, `!`
- Can be used in conditional statements

## Next Steps

In the next lesson, you'll learn about type modifiers!

