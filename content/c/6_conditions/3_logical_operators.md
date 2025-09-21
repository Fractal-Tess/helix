---
title: "Logical Operators"
description: "Using AND, OR, and NOT operators in conditions"
order: 3
difficulty: "beginner"
estimatedTime: "7 minutes"
language: "c"
group: "6_conditions"
startingCode: |
  #include <stdio.h>

  int main() {
      int age = 20;
      int hasLicense = 1;
      
      // Check if person can drive (age >= 18 AND has license)
      
      return 0;
  }
expectedOutput: "You can drive!"
---

# Logical Operators

Logical operators allow you to combine multiple conditions in a single if statement.

## Logical Operators

- `&&` - AND (both conditions must be true)
- `||` - OR (at least one condition must be true)
- `!` - NOT (reverses the condition)

## AND Operator (&&)

```c
int age = 20;
int hasLicense = 1;

if (age >= 18 && hasLicense) {
    printf("You can drive!\n");
}
```

## Your Task

1. Check if the person can drive
2. Use the AND operator (`&&`) to combine conditions
3. Both age >= 18 AND hasLicense must be true

## OR Operator (||)

```c
char grade = 'B';

if (grade == 'A' || grade == 'B') {
    printf("Good grade!\n");
}
```

## NOT Operator (!)

```c
int isWeekend = 0;

if (!isWeekend) {
    printf("It's a weekday!\n");
}
```

## Truth Tables

### AND (&&)

| A   | B   | A && B |
| --- | --- | ------ |
| 0   | 0   | 0      |
| 0   | 1   | 0      |
| 1   | 0   | 0      |
| 1   | 1   | 1      |

### OR (||)

| A   | B   | A \|\| B |
| --- | --- | -------- |
| 0   | 0   | 0        |
| 0   | 1   | 1        |
| 1   | 0   | 1        |
| 1   | 1   | 1        |

## Complex Conditions

```c
int age = 25;
int hasLicense = 1;
int hasInsurance = 0;

if (age >= 18 && hasLicense && hasInsurance) {
    printf("You can drive legally!\n");
} else if (age >= 18 && hasLicense) {
    printf("You can drive, but need insurance!\n");
} else {
    printf("You cannot drive!\n");
}
```

## Operator Precedence

1. `!` (NOT) - highest
2. `&&` (AND)
3. `||` (OR) - lowest

Use parentheses to clarify:

```c
if ((age >= 18 && hasLicense) || isEmergency) {
    // Clear precedence
}
```

## Key Points

- `&&` requires both conditions to be true
- `||` requires at least one condition to be true
- `!` reverses the condition
- Use parentheses for complex expressions

## Next Steps

In the next lesson, you'll learn about switch statements!

