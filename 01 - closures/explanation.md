# Closures in JavaScript

A closure is a function that "**remembers**" variables from its outer lexical scope, even after the outer function has completed execution.

### Detailed Explanation

A **closure** is a function that remembers the variables from its outer lexical scope, even after the outer function has finished executing. Closures are created whenever a function is defined inside another function and accesses variables from its outer scope.

#### **Key Characteristics**

1. **Lexical Scoping**: Functions in JavaScript have access to variables defined in their outer (enclosing) scopes.
2. **Access to Outer Variables**: A closure "remembers" the variables from its surrounding environment at the time it was created, even if it's called outside that environment.
3. **Encapsulation**: Closures allow functions to encapsulate data. Inner functions can access and modify variables from the outer function, which may not be directly accessible from other parts of the code.

#### **Why Closures Are Useful**

Closures are foundational in JavaScript and are used in:

1. **Private Variables**: Closures allow for the creation of private variables that can't be accessed directly from outside the function.
2. **Function Factories**: Closures can be used to create functions dynamically with different configurations.
3. **Callbacks and Event Handlers**: In asynchronous programming (like callbacks), closures allow functions to maintain state between invocations.
