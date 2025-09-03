---
title: "Variables in Python"
description: "Learn how to create and use variables in Python"
order: 1
difficulty: "beginner"
estimatedTime: "8 minutes"
language: "python"
group: "1_basics"
startingCode: |
  # Create a variable for your name
  
  # Create a variable for your age
  
  # Print a greeting message
  
expectedOutput: "Hello, my name is Alice and I am 25 years old."
---

# Variables in Python

Variables in Python are used to store data values. Unlike many other programming languages, Python has no command for declaring a variable - you create one simply by assigning a value to it.

## Creating Variables

```python
name = "Alice"
age = 25
height = 5.6
is_student = True
```

## Variable Naming Rules

- Variable names must start with a letter or underscore
- Cannot start with a number
- Can only contain alphanumeric characters and underscores
- Case-sensitive (`age` and `Age` are different variables)

## Data Types

Python automatically determines the data type:

- **String**: Text data (`"Hello"`)
- **Integer**: Whole numbers (`42`)
- **Float**: Decimal numbers (`3.14`)
- **Boolean**: True/False values

## Your Task

1. Create a variable called `name` and assign it your name as a string
2. Create a variable called `age` and assign it a number
3. Use the `print()` function to display: "Hello, my name is [name] and I am [age] years old."

## Example Output

```
Hello, my name is Alice and I am 25 years old.
```

## Hints

- Use quotes for string values: `"Alice"`
- You can combine strings and variables using f-strings: `f"Hello, {name}"`
- Or use the `.format()` method or string concatenation