# Immediately Invoked Function Expressions (IIFE)

An **Immediately Invoked Function Expression (IIFE)** is a function expression that is executed immediately after it is defined. It is a common JavaScript design pattern used to create isolated scopes for variables. This pattern helps avoid polluting the global scope by encapsulating variables within the function.

### How it works

1. The function is defined within parentheses `()` which makes it an expression, rather than a declaration.
2. The second set of parentheses `()` invokes the function immediately after it is defined.

IIFE is typically used in scenarios where you want to create a new scope for variables, such as when you need to avoid variable name conflicts in the global scope or when you want to execute code right away without needing to call the function later.
