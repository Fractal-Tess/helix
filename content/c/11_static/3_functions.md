---
title: "Static Functions"
description: "Using static with functions"
order: 3
difficulty: "advanced"
estimatedTime: "6 minutes"
language: "c"
group: "11_static"
startingCode: |
  #include <stdio.h>

  // Static function (private to this file)
  static void privateFunction() {
      printf("This is a private function\n");
  }

  // Public function
  void publicFunction() {
      printf("This is a public function\n");
      privateFunction();  // Can call static function
  }

  int main() {
      // Call the public function
      
      return 0;
  }
expectedOutput: "This is a public function\nThis is a private function"
---

# Static Functions

Static functions are only accessible within the file where they are declared. They provide function-level encapsulation and help create private APIs.

## Static Function Declaration

```c
static void privateFunction() {
    printf("This is a private function\n");
}
```

## Your Task

1. Call the `publicFunction()` from `main()`
2. Notice how `publicFunction()` can call the static `privateFunction()`
3. Understand the difference between public and private functions

## Function Scope and Linkage

### Static Functions

- **File scope** - Only accessible within the same file
- **Internal linkage** - Cannot be linked from other files
- **Private API** - Hidden implementation details

### Regular Functions

- **Global scope** - Accessible from other files
- **External linkage** - Can be linked from other files
- **Public API** - Part of the interface

## Example: Module with Private Functions

```c
// math_module.c
static int validateInput(int a, int b) {
    return (a >= 0 && b >= 0);
}

static int safeAdd(int a, int b) {
    if (validateInput(a, b)) {
        return a + b;
    }
    return -1;  // Error code
}

int add(int a, int b) {
    return safeAdd(a, b);
}
```

## Example: Utility Functions

```c
// file_utils.c
static int isValidFile(const char* filename) {
    // Check if file exists and is readable
    FILE* file = fopen(filename, "r");
    if (file) {
        fclose(file);
        return 1;
    }
    return 0;
}

static void logError(const char* message) {
    printf("Error: %s\n", message);
}

int processFile(const char* filename) {
    if (!isValidFile(filename)) {
        logError("Invalid file");
        return 0;
    }
    // Process file...
    return 1;
}
```

## Benefits of Static Functions

1. **Encapsulation** - Hide implementation details
2. **Namespace Control** - Avoid function name conflicts
3. **Code Organization** - Group related functions
4. **API Design** - Create clean public interfaces

## When to Use Static Functions

- **Helper Functions** - Internal utility functions
- **Implementation Details** - Functions not part of public API
- **Code Organization** - Group related functionality
- **Library Design** - Create clean interfaces

## Header Files and Static Functions

Static functions should **not** be declared in header files since they're not meant to be used outside the file.

```c
// math_module.h (public interface)
int add(int a, int b);
int subtract(int a, int b);

// math_module.c (implementation)
static int validateInput(int a, int b) { ... }
static int safeAdd(int a, int b) { ... }
int add(int a, int b) { ... }
int subtract(int a, int b) { ... }
```

## Key Points

- Static functions are file-scoped only
- Cannot be called from other files
- Provide encapsulation and clean APIs
- Useful for helper functions and implementation details

## Next Steps

You've completed the Static section! You now have comprehensive C programming knowledge!

