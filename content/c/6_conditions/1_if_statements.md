---
title: "If Statements"
description: "Basic conditional execution with if statements"
order: 1
difficulty: "beginner"
estimatedTime: "5 minutes"
language: "c"
group: "6_conditions"
startingCode: |
  #include <stdio.h>

  int main() {
      int age = 18;
      
      // Check if age is 18 or older
      
      return 0;
  }
expectedOutput: "You are eligible to vote!"
---

# If Statements

The `if` statement allows your program to execute code only when a certain condition is true.

## Basic Syntax

```c
if (condition) {
    // Code to execute if condition is true
}
```

## Example

```c
int age = 18;

if (age >= 18) {
    printf("You are eligible to vote!\n");
}
```

## Comparison Operators

- `==` - Equal to
- `!=` - Not equal to
- `>` - Greater than
- `<` - Less than
- `>=` - Greater than or equal to
- `<=` - Less than or equal to

## Your Task

1. Check if the age is 18 or older
2. Print "You are eligible to vote!" if the condition is true
3. Use the `>=` operator for the comparison

## More Examples

### Number Comparison

```c
int number = 10;

if (number > 5) {
    printf("Number is greater than 5\n");
}
```

### Character Comparison

```c
char grade = 'A';

if (grade == 'A') {
    printf("Excellent work!\n");
}
```

### Multiple Conditions

```c
int score = 85;

if (score >= 90) {
    printf("Grade: A\n");
}
if (score >= 80 && score < 90) {
    printf("Grade: B\n");
}
```

## Key Points

- Conditions are evaluated as true (non-zero) or false (zero)
- Use curly braces `{}` for multiple statements
- Comparison operators return 1 for true, 0 for false
- Always use `==` for equality, not `=`

## Next Steps

In the next lesson, you'll learn about else and else if statements!
