# Destructuring Assignment

Destructuring is a convenient way to unpack values from arrays or properties from objects into distinct variables. It makes the code cleaner and reduces the need for repetitive code when accessing values.

JavaScript allows **array destructuring** and **object destructuring**.

## Array Destructuring

Array destructuring allows you to extract values from an array and assign them to variables in a concise manner.

```
const [var1, var2] = array;
```

**Skipping Elements:** You can skip elements in the array by leaving them empty in the destructuring pattern.

```
const [, , third] = fruits;
```

**Default Values:** If the array has fewer elements than the variables, you can assign default values.

```
const [first, second = 'default'] = fruits;
```

## Object Destructuring

Object destructuring allows you to extract properties from an object and assign them to variables with matching names.

```
const { key1, key2 } = object;
```

**Renaming Variables:** You can rename the variables during destructuring.

```
const { name: fullName, age: years } = person;
```

**Default Values:** You can also assign default values if a property is missing.

```
const { name, age = 30 } = person;
```

## Nested Destructuring

You can destructure nested objects or arrays by matching the structure.

**Array Destructuring with Nested Arrays:**

```
const colors = ['red', ['blue', 'cyan'], 'green'];
const [primary, [secondary1, secondary2], third] = colors;
```

**Object Destructuring with Nested Objects:**

```
const person = {
  name: 'Alice',
  address: {
    street: '123 Main St',
    city: 'Wonderland'
  }
};
const { name, address: { street, city } } = person;
```
