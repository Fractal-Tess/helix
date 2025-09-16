---
title: "Type Modifiers"
description: "Understanding signed, unsigned, and const modifiers"
order: 6
difficulty: "intermediate"
estimatedTime: "8 minutes"
language: "c"
group: "3_variables_and_types"
startingCode: |
  #include <stdio.h>

  int main() {
      // Declare variables with different modifiers
      
      // Print the values
      
      return 0;
  }
expectedOutput: "Signed: -100, Unsigned: 200, Const: 42"
---

# Type Modifiers

Type modifiers change the behavior of data types. The main modifiers in C are `signed`, `unsigned`, and `const`.

## Signed and Unsigned

### Signed (Default)

- Can hold positive and negative values
- Uses one bit for the sign
- Range: -2^(n-1) to 2^(n-1)-1

### Unsigned

- Can only hold positive values
- All bits used for magnitude
- Range: 0 to 2^n-1

## Examples

```c
signed int a = -100;      // Explicitly signed
int b = -100;             // Signed by default
unsigned int c = 200;     // Only positive values
```

## Const Modifier

The `const` keyword makes a variable read-only:

```c
const int MAX_SIZE = 100;  // Cannot be changed
const float PI = 3.14159f;
```

## Your Task

1. Declare a signed integer with value -100
2. Declare an unsigned integer with value 200
3. Declare a const integer with value 42
4. Print all three values

## Common Use Cases

### Unsigned for Counters

```c
unsigned int count = 0;  // Count can't be negative
```

### Const for Constants

```c
const int ARRAY_SIZE = 1000;
const char* MESSAGE = "Hello";
```

## Size and Range Examples

| Type | Size    | Signed Range                    | Unsigned Range     |
| ---- | ------- | ------------------------------- | ------------------ |
| char | 1 byte  | -128 to 127                     | 0 to 255           |
| int  | 4 bytes | -2,147,483,648 to 2,147,483,647 | 0 to 4,294,967,295 |

## Format Specifiers

- `%d` - Signed integer
- `%u` - Unsigned integer
- `%c` - Character (signed or unsigned)

## Key Points

- `signed` is the default for most types
- `unsigned` doubles the positive range
- `const` prevents modification after initialization
- Choose the right type for your data

## Next Steps

You've completed the Variables and Types section! Next, you'll learn about arrays!
