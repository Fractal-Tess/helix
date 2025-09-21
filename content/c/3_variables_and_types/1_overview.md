---
title: "Data Types Overview"
description: "Introduction to C data types and their characteristics"
order: 1
difficulty: "beginner"
estimatedTime: "5 minutes"
language: "c"
group: "3_variables_and_types"
startingCode: |
  #include <stdio.h>

  int main() {
      // Declare variables of different types
      
      return 0;
  }
expectedOutput: "Understanding C data types"
---

# Data Types Overview

C is a statically-typed language, meaning every variable must be declared with a specific data type before it can be used.

## What are Data Types?

Data types define:

- **What kind of data** a variable can store
- **How much memory** the variable uses
- **What operations** can be performed on the data

## Basic C Data Types

### Integer Types

- `char` - Single character (1 byte)
- `int` - Integer (usually 4 bytes)
- `short` - Short integer (usually 2 bytes)
- `long` - Long integer (usually 8 bytes)

### Floating-Point Types

- `float` - Single precision (4 bytes)
- `double` - Double precision (8 bytes)

### Other Types

- `_Bool` - Boolean (true/false) - C99 standard
- `void` - No type (used for functions)

## Type Modifiers

- `signed` - Can hold positive and negative values (default)
- `unsigned` - Can only hold positive values
- `const` - Value cannot be changed after initialization

## Memory Sizes

| Type   | Typical Size | Range                           |
| ------ | ------------ | ------------------------------- |
| char   | 1 byte       | -128 to 127                     |
| int    | 4 bytes      | -2,147,483,648 to 2,147,483,647 |
| float  | 4 bytes      | ±3.4e-38 to ±3.4e+38            |
| double | 8 bytes      | ±1.7e-308 to ±1.7e+308          |

## Your Task

1. Study the different data types and their characteristics
2. Understand the concept of memory allocation
3. Learn about type modifiers and their effects

## Key Points

- Every variable must have a declared type
- Different types use different amounts of memory
- Type modifiers can change the behavior of data types
- Understanding types is crucial for efficient programming

## Next Steps

In the next lesson, you'll learn about the `int` type in detail!

