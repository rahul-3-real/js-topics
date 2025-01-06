# Default Parameters

Default parameters, introduced in ES6, allow you to set default values for function parameters. If no value is provided for a parameter when the function is called (or if `undefined` is explicitly passed), the default value is used.

### **Key Features**

- **Assign Defaults:** If no argument is provided, the default value is used.
- **Using Expressions:** Default values can be expressions or functions.
- **undefined vs. Other Falsy Values:** The default parameter is only applied when `undefined` is passed, not for other falsy values like `null`, `false`, `0`, or an empty string.
