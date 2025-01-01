# Arrow functions

**Arrow functions** (introduced in ES6) are a concise way to write functions in JavaScript. They provide a shorter syntax compared to traditional function expressions and also handle the this keyword differently.

```
// Traditional Function
function add(a, b) {
  return a + b;
}

// Arrow Function
const add = (a, b) => a + b;

```

### Key Features of Arrow Functions:

- **Concise Syntax**: This defines the condition under which the function stops calling itself.
  - If the function body has only one expression, you can omit the curly braces `{}` and the return keyword.
  - Example:
  ```
  const square = (x) => x * x; // Implicit return
  ```
- **`this` Binding**:
  - Arrow functions do not bind their own `this`; they inherit `this` from the surrounding lexical scope.
  - This makes arrow functions ideal for use in callbacks, especially in classes and objects.
- **No `arguments` Object:**:
  - Arrow functions do not have their own arguments object. You need to use rest parameters `(...args)` to access arguments in an arrow function.
- **Parentheses**:
  - Parentheses are optional for a single parameter but required for multiple parameters or no parameters.
  - Example:
  ```
  const greet = name => `Hello, ${name}`;  // Single parameter
  const greetEveryone = () => "Hello, everyone!";  // No parameters
  ```
