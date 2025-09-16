---
title: "Floating-Point Variables"
description: "Working with float and double data types"
order: 4
difficulty: "beginner"
estimatedTime: "5 minutes"
language: "c"
group: "3_variables_and_types"
startingCode: |
  #include <stdio.h>

  int main() {
      // Declare a float variable
      
      // Print the value
      
      return 0;
  }
expectedOutput: "The value is: 3.14159"
---

# Floating-Point Variables

Floating-point numbers can represent decimal values. C provides two main floating-point types: `float` and `double`.

## Types

- `float` - Single precision (4 bytes, ~7 decimal digits)
- `double` - Double precision (8 bytes, ~15 decimal digits)

## Declaration and Initialization

```c
float price;                    // Declaration
float pi = 3.14159f;           // Declaration with initialization
double precision = 3.141592653589793;
```

## Literals

- `3.14` - Default is double
- `3.14f` - Explicitly float
- `3.14F` - Explicitly float (uppercase)

## Example

```c
#include <stdio.h>

int main() {
    float pi = 3.14159f;
    printf("The value is: %.5f\n", pi);
    return 0;
}
```

## Your Task

1. Declare a float variable named `pi` and assign it the value `3.14159f`
2. Use `printf()` to display "The value is: 3.14159"
3. Use the correct format specifier for floating-point numbers

## Format Specifiers

- `%f` - Default floating-point
- `%.2f` - Two decimal places
- `%e` - Scientific notation
- `%g` - Automatic format (shorter of %f or %e)

## Precision and Accuracy

```c
float f = 0.1f;
double d = 0.1;

printf("%.10f\n", f);  // May show rounding errors
printf("%.10f\n", d);  // More precise
```

## Common Pitfalls

- Floating-point arithmetic can have rounding errors
- Never use `==` to compare floating-point numbers
- Use `fabs(a - b) < epsilon` for comparisons

## Key Points

- Use `float` for single precision, `double` for double precision
- Add `f` suffix for float literals
- Use appropriate format specifiers in `printf()`
- Be aware of precision limitations

## Next Steps

In the next lesson, you'll learn about boolean variables!
