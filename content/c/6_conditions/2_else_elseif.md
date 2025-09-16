---
title: "Else and Else If"
description: "Handling multiple conditions with else and else if"
order: 2
difficulty: "beginner"
estimatedTime: "7 minutes"
language: "c"
group: "6_conditions"
startingCode: |
  #include <stdio.h>

  int main() {
      int score = 85;
      
      // Check score and assign grade
      // 90+ = A, 80-89 = B, 70-79 = C, below 70 = F
      
      return 0;
  }
expectedOutput: "Grade: B"
---

# Else and Else If

The `else` and `else if` statements allow you to handle multiple conditions and provide alternative execution paths.

## Basic Syntax

```c
if (condition1) {
    // Code for condition1
} else if (condition2) {
    // Code for condition2
} else {
    // Code for all other cases
}
```

## Example

```c
int score = 85;

if (score >= 90) {
    printf("Grade: A\n");
} else if (score >= 80) {
    printf("Grade: B\n");
} else if (score >= 70) {
    printf("Grade: C\n");
} else {
    printf("Grade: F\n");
}
```

## Your Task

1. Check the score and assign appropriate grades
2. Use else if for multiple conditions
3. Use else for the failing grade (below 70)

## Key Points

- Only one block executes (the first true condition)
- `else if` allows multiple conditions
- `else` catches all remaining cases
- Conditions are checked in order

## More Examples

### Temperature Check

```c
int temp = 25;

if (temp > 30) {
    printf("Hot day!\n");
} else if (temp > 20) {
    printf("Nice day!\n");
} else if (temp > 10) {
    printf("Cool day!\n");
} else {
    printf("Cold day!\n");
}
```

### Number Classification

```c
int number = 0;

if (number > 0) {
    printf("Positive\n");
} else if (number < 0) {
    printf("Negative\n");
} else {
    printf("Zero\n");
}
```

## Nested Conditions

```c
int age = 20;
int hasLicense = 1;

if (age >= 18) {
    if (hasLicense) {
        printf("You can drive!\n");
    } else {
        printf("You need a license!\n");
    }
} else {
    printf("You're too young to drive!\n");
}
```

## Key Points

- Use `else if` for multiple conditions
- Use `else` for the default case
- Only one block executes
- Conditions are evaluated in order

## Next Steps

In the next lesson, you'll learn about logical operators!
