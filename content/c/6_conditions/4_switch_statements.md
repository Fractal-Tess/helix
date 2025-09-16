---
title: "Switch Statements"
description: "Using switch statements for multiple choice conditions"
order: 4
difficulty: "beginner"
estimatedTime: "8 minutes"
language: "c"
group: "6_conditions"
startingCode: |
  #include <stdio.h>

  int main() {
      char grade = 'B';
      
      // Use switch to print grade description
      
      return 0;
  }
expectedOutput: "Good work!"
---

# Switch Statements

Switch statements provide an efficient way to handle multiple choice conditions based on a single variable.

## Basic Syntax

```c
switch (variable) {
    case value1:
        // Code for value1
        break;
    case value2:
        // Code for value2
        break;
    default:
        // Code for all other cases
        break;
}
```

## Example

```c
char grade = 'B';

switch (grade) {
    case 'A':
        printf("Excellent!\n");
        break;
    case 'B':
        printf("Good work!\n");
        break;
    case 'C':
        printf("Satisfactory!\n");
        break;
    case 'D':
        printf("Needs improvement!\n");
        break;
    case 'F':
        printf("Failed!\n");
        break;
    default:
        printf("Invalid grade!\n");
        break;
}
```

## Your Task

1. Use a switch statement to handle the grade
2. Print "Good work!" for grade 'B'
3. Include cases for 'A', 'B', 'C', 'D', 'F'
4. Add a default case for invalid grades

## Key Components

- `switch (variable)` - The variable to check
- `case value:` - Specific values to match
- `break;` - Exit the switch statement
- `default:` - Handle unmatched cases

## Break Statement

The `break` statement is crucial:

```c
switch (grade) {
    case 'A':
        printf("Excellent!\n");
        // Missing break - falls through to next case!
    case 'B':
        printf("Good work!\n");
        break;
}
```

## Multiple Cases

```c
switch (grade) {
    case 'A':
    case 'B':
        printf("Pass!\n");
        break;
    case 'C':
    case 'D':
        printf("Conditional pass!\n");
        break;
    case 'F':
        printf("Fail!\n");
        break;
}
```

## Switch vs If-Else

### Switch (better for multiple values)

```c
switch (day) {
    case 1: printf("Monday\n"); break;
    case 2: printf("Tuesday\n"); break;
    // ...
}
```

### If-Else (better for ranges)

```c
if (score >= 90) {
    printf("A\n");
} else if (score >= 80) {
    printf("B\n");
}
```

## Key Points

- Use switch for multiple discrete values
- Always include `break` statements
- Use `default` for unmatched cases
- Switch only works with integers and characters

## Next Steps

You've completed the Conditions section! Next, you'll learn about strings!
