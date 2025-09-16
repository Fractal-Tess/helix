---
title: "Common While Loop Patterns"
description: "Practical patterns and use cases for while loops"
order: 3
difficulty: "intermediate"
estimatedTime: "7 minutes"
language: "c"
group: "9_while_loops"
startingCode: |
  #include <stdio.h>

  int main() {
      int number = 12345;
      
      // Count digits in the number
      
      return 0;
  }
expectedOutput: "Number of digits: 5"
---

# Common While Loop Patterns

While loops are perfect for many common programming patterns. Let's explore the most useful ones.

## Digit Counting

```c
int number = 12345;
int count = 0;
int temp = number;

while (temp != 0) {
    temp /= 10;  // Remove last digit
    count++;
}
printf("Number of digits: %d\n", count);
```

## Your Task

1. Count the digits in the number 12345
2. Use a while loop to repeatedly divide by 10
3. Increment a counter for each digit removed

## Common Patterns

### Sum of Digits

```c
int number = 12345;
int sum = 0;
int temp = number;

while (temp != 0) {
    sum += temp % 10;  // Add last digit
    temp /= 10;        // Remove last digit
}
printf("Sum of digits: %d\n", sum);
```

### Reverse a Number

```c
int number = 12345;
int reversed = 0;
int temp = number;

while (temp != 0) {
    reversed = reversed * 10 + temp % 10;
    temp /= 10;
}
printf("Reversed: %d\n", reversed);
```

### Find GCD (Greatest Common Divisor)

```c
int a = 48, b = 18;
int temp;

while (b != 0) {
    temp = b;
    b = a % b;
    a = temp;
}
printf("GCD: %d\n", a);
```

### Fibonacci Sequence

```c
int n = 10;
int a = 0, b = 1, next;
int i = 0;

printf("Fibonacci: ");
while (i < n) {
    printf("%d ", a);
    next = a + b;
    a = b;
    b = next;
    i++;
}
```

### Prime Number Check

```c
int number = 17;
int isPrime = 1;
int i = 2;

while (i * i <= number) {
    if (number % i == 0) {
        isPrime = 0;
        break;
    }
    i++;
}

if (isPrime) {
    printf("%d is prime\n", number);
} else {
    printf("%d is not prime\n", number);
}
```

## File Reading Pattern

```c
FILE *file = fopen("data.txt", "r");
char line[100];

while (fgets(line, sizeof(line), file) != NULL) {
    printf("%s", line);
}
fclose(file);
```

## Key Points

- While loops are great for unknown iteration counts
- Always ensure the condition will eventually become false
- Use meaningful variable names for clarity
- Test your loops with different input values

## Next Steps

In the next lesson, you'll learn about loop control in while loops!
