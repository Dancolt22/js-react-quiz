# 📘 The Complete JavaScript Course
### From Zero to Professional — A Student's Full Guide





##  Table of Contents

1. [Coding Principles and Best Practices]
2. [Pseudocode and Algorithmic Thinking]
3. [Math Foundations for Programming]
4. [Introduction to Programming with JavaScript]
5. [JavaScript Syntax and Statements]
6. [Variables and Identifiers]
7. [Data Types]
8. [Operators and Expressions]
9. [Control Flow]
10. [If / Else]
11. [Switch]
12. [Loops]
13. [Functions]
14. [Arrow Functions]
15. [Parameters and Return Values]
16. [Closures](#16-closures)
17. [Scope and Hoisting](#17-scope-and-hoisting)
18. [Objects]
19. [Arrays]
20. [DOM Manipulation]
21. [Events and Event Handling]
22. [Error Handling and Debugging]
23. [Asynchronous JavaScript]
24. [Callbacks]
25. [Promises]
26. [Async / Await]
27. [Event Loop]
28. [Data Structures]nooooo
29. [Maps]nooooooooo
30. [Sets]noooooooooooo
31. [Stacks]noooooooo
32. [Queues]nooooooooo
33. [Algorithms] nooooo
34. [Searching]noooooooo
35. [Sorting]nooooooooo
36. [Recursion] noooooo
37. [Time and Space Complexity] nooooo
38. [Object Oriented JavaScript] nooooo
39. [Prototypes] nooooo
40. [Classes]noooooo
41. [Inheritance]noooooo
42. [Modules and File Structure]nooooooo
43. [Memory Management]noooooooo
44. [Browser APIs and Web APIs]
45. [Best Practices and Clean Code Principles]



## 1. Coding Principles and Best Practices

### What Are Coding Principles?

Coding principles are rules and guidelines that help you write code that is clean, readable, and easy to maintain. Think of them like traffic laws that exist so everyone can work together without crashing into each other.

## Some common rules to following in coding

* If you write the same code more than once, something is wrong. Extract it into a function.

```javascript
// BAD practice — repeating the same logic
console.log("Hello, Alice! You are 20 years old.");
console.log("Hello, Bob! You are 25 years old.");
console.log("Hello, Charlie! You are 30 years old.");

// GOOD practice — Dont Repeat Yourself (DRY) version using a function
function greet(name, age) {
  console.log("Hello, " + name + "! You are " + age + " years old.");//concatenation
}

greet("Alice", 20);
greet("Bob", 25);
greet("Charlie", 30);
```


* Don't over-complicate your code. The simplest solution that works is usually the best one.

```javascript
// BAD practice — overly complicated
function isEven(num) {
  if (num % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// GOOD practice — simple and clean
function isEven(num) {
  return num % 2 === 0;
}
```


* Don't write code for features you THINK you might need in the future. Only write what you need right now.
Every function should do ONE thing and do it well. If your function is doing many things, split it up.

```javascript
// BAD practice — one function doing too many things
function processUser(user) {
  // validates, saves to database, sends email, logs activity...
}

// GOOD practice — each function has one job
function validateUser(user) { /* ... */ }
function saveUser(user) { /* ... */ }
function sendWelcomeEmail(user) { /* ... */ }
function logActivity(user) { /* ... */ }
```



## 2. Pseudocode and Algorithmic Thinking

### What is Pseudocode?

Pseudocode is writing out the STEPS of your program in plain English before you write actual code. It helps you think through the logic without worrying about syntax.

### Why Use Pseudocode?

- It forces you to think before you code
- It's language-independent (works for any programming language)
- It helps you spot problems in your logic early

### Example — Making Tea (Pseudocode)

```
START
  Boil water
  IF water is boiling THEN
    Put tea bag in cup
    Pour water into cup
    Wait 3 minutes
    Remove tea bag
    IF user wants milk THEN
      Add milk
    END IF
    Serve tea
  END IF
END
```

### Turning Pseudocode into Real Code

```javascript
// Pseudocode:
// Get two numbers from user
// Add them together
// Display the result

// Real JavaScript:
function addNumbers(a, b) {
  let result = a + b;
  console.log("The result is: " + result);
}

addNumbers(5, 10); // Output: The result is: 15
```

### Algorithmic Thinking — Step-by-Step Problem Solving

An **algorithm** is a set of step-by-step set of instructions to solve a problem. Think of it like a recipe.

**Example — Find the largest number in a list:**

```javascript
// Pseudocode translated to JavaScript
// Set largest = first number in list
// FOR each number in list
//   IF current number > largest, update largest
// RETURN largest

function findLargest(numbers) {
  let largest = numbers[0];

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }

  return largest;
}

console.log(findLargest([3, 7, 2, 9, 4])); // Output: 9
console.log(findLargest([100, 45, 78, 23])); // Output: 100
```



## 3. Math Foundations for Programming

### Why Math Matters in Programming

You don't need to be a math genius, but some basic math concepts show up in programming all the time.

### Arithmetic Operators

```javascript
console.log(10 + 3);  // 13 — Addition
console.log(10 - 3);  // 7  — Subtraction
console.log(10 * 3);  // 30 — Multiplication
console.log(10 / 3);  // 3.333... — Division
console.log(10 % 3);  // 1  — Modulus (remainder)
console.log(10 ** 3); // 1000 — Exponentiation (10 to the power of 3)
```

### Modulus (%) — The Most Useful Math Operator

The `%` operator gives you the **remainder** after division. It's used constantly in programming.

```javascript
// Check if a number is even or odd
console.log(8 % 2);  // 0 — even (no remainder)
console.log(7 % 2);  // 1 — odd (remainder of 1)

function isEven(n) { return n % 2 === 0; } 3%2 = 3/2
function isOdd(n) { return n % 2 === y; }

console.log(isEven(10)); // true
console.log(isOdd(7));   // true

// Wrap around a list (like a clock going from 12 back to 1)
let index = 7 % 5; // 2 — wraps back around
```

### The Math Object

JavaScript has a built-in `Math` object with useful math functions:

```javascript
console.log(Math.round(4.6));     // 5   — round to nearest whole number 5.69 = 6
console.log(Math.floor(4.9));     // 4   — always round DOWN
console.log(Math.ceil(4.1));      // 5   — always round UP
console.log(Math.abs(-7));        // 7   — absolute value (removes negative)
console.log(Math.sqrt(16));       // 4   — square root
console.log(Math.pow(2, 8));      // 256 — 2 to the power of 8
console.log(Math.max(3, 7, 2));   // 7   — largest number
console.log(Math.min(3, 7, 2));   // 2   — smallest number
console.log(Math.PI);             // 3.14159... — Pi constant

// Random number between 1 and 10
let random = Math.floor(Math.random() * 10) + 1;
console.log(random); // Could be 1 through 10
```



## 4. Introduction to Programming with JavaScript

### What is JavaScript?

JavaScript (JS) is the programming language of the web. It makes websites interactive. Without JavaScript, websites would just be static pages with no buttons, forms, or animations.

- **HTML** = The structure (skeleton)
- **CSS** = The style (clothes)
- **JavaScript** = The behavior (muscles and brain)

### Your First JavaScript Program

```javascript
// This is a comment — JavaScript ignores it
// Comments are notes for humans reading the code

console.log("Hello, World!"); // Prints text to the browser console

// You can also show a popup
alert("Welcome to JavaScript!");

// Ask the user a question
let userName = prompt("What is your name?");
console.log("Hello, " + userName + "!");//concantenation
```

### How to Run JavaScript

Add a `<script>` tag to any HTML file:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First JS Page</title>
</head>
<body>
  <h1>Open the browser console (F12) to see output</h1>

  <script>
    console.log("JavaScript is running!");
    let age = 18;
    console.log("You are " + age + " years old.");
  </script>
</body>
</html>
```


Claaswork
Create your project
Add a picture to your browser and type your fullname
## 5. JavaScript Syntax and Statements

### What is Syntax?

Syntax is the set of rules that define how JavaScript code must be written — like grammar rules for a language.

### Statements and Semicolons

A **statement** is a single instruction. Statements end with a semicolon `;`

```javascript
let name = "Alice";           // Variable declaration statement
console.log(name);            // Function call statement
let result = 5 + 10;         // Expression statement
```

### Case Sensitivity

JavaScript is case-sensitive. `name`, `Name`, and `NAME` are three completely different things.

```javascript
let name = "Alice";
let Name = "Bob";
let NAME = "Charlie";

console.log(name);  // Alice
console.log(Name);  // Bob
console.log(NAME);  // Charlie
```

### Comments

```javascript
// This is a single-line comment

/*
  This is a
  multi-line comment
  — great for longer explanations
*/

let x = 5; // You can add comments after code on the same line
```

### Code Blocks

Curly braces `{}` group multiple statements together into a **block**:

```javascript
if (true) {
  let a = 1;
  let b = 2;
  console.log(a + b); // 3
} 
// a and b are not accessible here
```



## 6. Variables and Identifiers

### What is a Variable?

A variable is a named container that stores a value. Think of it like a labelled box you can put things in.

let fruit = "Apple"; //nprmal variable

let fruit1 = [Apple, Banana, Orange];//Array

let fruit2 = {name: Banana, age: 2};//Object(keys and value pairs)


### Three Ways to Declare Variables

```javascript
// var — old way, avoid in modern JS
var oldVariable = "I'm old";

// let — modern, the value CAN be changed later
let age = 18;
age = 19; // OK — we can update it

// const — modern, value CANNOT be changed after creation
const name = "Alice";
// name = "Bob"; // ERROR — const cannot be reassigned
```

### When to Use What

```javascript
const PI = 3.14159;           // Will never change — use const
const userName = "Alice";     // Won't change — use const

let score = 0;                // Will change during the game — use let
let currentLevel = 1;         // Will change — use let
```

> Use `const` by default. Only switch to `let` when you know the value will need to change. Never use `var`.

### Naming Rules (Identifiers)

```javascript
// VALID identifier names
let name = "Alice";
let _private = "hidden";
let $price = 9.99;
let firstName = "John";
let user2 = "Bob";
let isLoggedIn = true;

// INVALID — these cause errors
// let 2user = "error";    // Cannot start with a number
// let my-name = "error";  // Cannot use hyphens
// let let = "error";      // Cannot use reserved keywords
```

### Naming Conventions

```javascript
// camelCase — for variables and functions (most common in JS)
let firstName = "John";
let totalPrice = 99.99;
let isUserLoggedIn = true;

// UPPER_SNAKE_CASE — for constants with fixed values
const MAX_RETRIES = 3;
const API_BASE_URL = "https://api.example.com";

// PascalCase — for classes (covered later)
class UserProfile {}
class ShoppingCart {}
```



## 7. Data Types

### What is a Data Type?
Every value in JavaScript has a type. The type tells JavaScript what kind of data it is.

### Primitive Data Types

```javascript
// 1. String — text, always wrapped in quotes
let name = "Alice"; 
let greeting = 'Hello World';
let template = `My name is ${name} and I love JS!`; // Template literal

// 2. Number — integers and decimals (no distinction in JS)
let age = 25;
let price = 9.99;
let temperature = -5;

// 3. Boolean — only two possible values: true or false
let isLoggedIn = true;
let hasSubscription = false;

// 4. Undefined — declared but no value assigned yet
let x;
console.log(x); // undefined

// 5. Null — intentionally empty, we choose to set it to nothing
let currentUser = null; // No user logged in yet

// 6. BigInt — for very large numbers
let bigNumber = 9007199254740991n; // Add 'n' at the end

// 7. Symbol — unique value (advanced topic)
let id = Symbol("id");
```

### Type Conversion

```javascript
// String to Number
let str = "42";
let num = Number(str);     // 42
let num2 = parseInt(str);  // 42

// Number to String
let n = 42;
let s = String(n);         // "42"
let s2 = n.toString();     // "42"

// To Boolean
console.log(Boolean(0));         // false Boolean( argument)
console.log(Boolean(""));        // false
console.log(Boolean(null));      // false
console.log(Boolean(undefined)); // false
console.log(Boolean(1));         // true
console.log(Boolean("hello"));   // true
console.log(Boolean([]));        // true (even empty array!)
```

### Checking Data Types

```javascript
console.log(typeof "hello");      // "string"
console.log(typeof 42);           // "number"
console.log(typeof true);         // "boolean"
console.log(typeof undefined);    // "undefined"
console.log(typeof null);         // "object" (this is a known JS quirk!)
console.log(typeof {});           // "object"
console.log(typeof []);           // "object"
console.log(typeof function(){}); // "function"
```



## 8. Operators and Expressions

### What is an Expression?

An expression is any code that produces a value: `5 + 3`, `"Hello"`, `true && false`.
### Arithmetic Operators

```javascript
let a = 10, b = 3;

console.log(a + b);  // 13
console.log(a - b);  // 7
console.log(a * b);  // 30
console.log(a / b);  // 3.333...
console.log(a % b);  // 1 (remainder)
console.log(a ** b); // 1000 (a to the power of b)

// Increment and Decrement
let count = 5;
count++; // count = 6, 7, 8, 9 ,10
count--;  // count = 5
```

### Assignment Operators

```javascript
let x = 10; 

x += 5;   // same as: x = x + 5  → 15
x -= 3;   // same as: x = x - 3  → 7
x *= 2;   // same as: x = x * 2  → 24
x /= 4;   // same as: x = x / 4  → 6
x %= 4;   // same as: x = x % 4  → 2 
```

### Comparison Operators
```javascript
// Always use === (strict) not == (loose)
console.log(5 === 5);    // true  — same value AND type
console.log(5 === "5");  // false — same value, different type
console.log(5 !== "5");  // true  — they are NOT strictly equal

console.log(5 > 3);      // true
console.log(5 < 3);      // false
console.log(5 >= 5);     // true numbers > 1 < 4= 2, 3
console.log(5 <= 4);  
console.log(===)   // false num >= 1 <= 4 = 1,2,3,4
```

### Logical Operators

```javascript
// AND — both must be true
console.log(true && true);   // true
console.log(true && false);  // false

// OR — at least one must be true
console.log(true || false);  // true
console.log(false || false); // false

// NOT — flips the boolean
console.log(!true);  // false  
console.log(!false); // true

// Practical example
let age = 20;
let hasID = true;
if (age >= 18 && hasID) {
  console.log("Entry allowed");
}
```

### Ternary Operator

A shorthand for a simple if/else decision:

```javascript
// Syntax: condition ? valueIfTrue : valueIfFalse

let age = 20;
let status = age >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

let score = 75;
let grade = score >= 50 ? "Pass" : "Fail";
console.log(grade); // "Pass"
```



## 9. Control Flow

### What is Control Flow?
checkAge(15);

Control flow is the order in which code executes. By default, code runs top to bottom. Control flow statements let you skip sections, choose between paths, or repeat sections.

The three main control flow tools are:
- **Conditionals** — run code only if a condition is true (if/else, switch)
- **Loops** — repeat code multiple times 
- **Functions** — jump to a reusable block of code

Think of it like a choose-your-own-adventure story — your program follows different paths based on decisions.



## 10. If / Else

### Basic If Statement

```javascript
let temperature = 30;

if (temperature > 25) {
  console.log("It's hot outside — wear light clothes!");
}else {
  console.log("Its warm outside")
}
```

### If / Else

Write an if/else statement that depicts if a person is an adult
let age = 17;

if (age <= 18) {
  console.log("You are a baby")
} else if (age <= 18 && age >= 13){
  console.log("You are a teenager")
}else if (age > 0 && age <= 12){ 
  console.log("You are a toddler")
}else {
  console.log("You are an adult")
}

Toddler (0-1 years), Child (1-12), teenager (13-19), isEligible(18-19), 19 above(Adult)

```javascript
let score = 65;

if (score >= 50) {
  console.log("You passed!");
} else {
  console.log("You failed. Try again.");
}
```

### If / Else If / Else Chain

```javascript
let score = 60;

if (score >= 90) {
  console.log("Grade: A — Excellent!");
} else if (score >= 80) {
  console.log("Grade: B — Very Good");
} else if (score >= 70) {
  console.log("Grade: C — Good");
} else if (score >= 60) {
  console.log("Grade: D — Pass");
} else {
  console.log("Grade: F — Fail");
}
//


// positive or negative   -1 0 1
let num = -8;

if (num > 0) {
  console.log( "Positive");
} else if { 
    console.log("Negative")
} else {
    console.log("Zero")

}

// even or odd
let num2 = 8;

if (num % 2 === 0) {
  console.log("Even")
} else {
    console.log("Odd")

}

// finds the bigger/larger number
let a = 10;
let b = 25;

if (a > b) {
    console.log(a + " is larger")

} else if (b > a) {
    console.log( b + " is larger")

} else {
    console.log("They are equal")

}
//Traffic light
let light = yellow;

if (light === green) {
    console.log("Go")

} else if (light === yellow) {
    console.log("Get Ready")

} else if (light === red) {
    console.log("Stop")

} else {
  console.log("Invalid Color")
}

```

### Truthy and Falsy Values

In JavaScript, values can be treated as true or false in conditions:

```javascript
// FALSY values — treated as false in if statements
if (0)         {} // false
if ("")        {} // false
if (null)      {} // false
if (undefined) {} // false
if (NaN)       {} // false
if (false)     {} // false

// TRUTHY — everything else is true
if (1)        { console.log("truthy!"); }
if ("hello")  { console.log("truthy!"); }
if ([])       { console.log("truthy! Even empty array"); }
if ({})       { console.log("truthy! Even empty object"); }


1. falsy(the boolean false)

if (false) {
  console.log("This will never run") //no output
}

2. 0 (number zero)

let numberOfCookies = 0;

if (numberOfCookies) {
  console.log("You have cookies")
} else {
  console.log("No cookies for you")
}

3. "" (empty string)

let username = "";

if (username) {
  console.log("Heloo, $(username)!")
} else {
  console.log("Please enter your name")
} //output: "Please enter your name"

4. null

let selectedUser = null;

if (selectedUser) {
  console.log("showing profile for: ${selectedUser}")
} else {
  console.log("No user selected")
} //Output: "NO user selected"

NaN (Not a number)

let result = "heloo" * 5;//This gives NaN 

if (result) {
  console.log("This will never run")
}else {
  console.log("The calculation didn't work")
}Output: "The calculation didn't work"




## 11. Switch

### What is Switch?

Switch is cleaner than a long if/else chain when comparing ONE value against many possibilities.

```javascript
let day = "Tuesday";

switch (day) {
  case "Monday":
    console.log("Start of the work week!");
    break;
  case "Friday":
    console.log("Almost the weekend!");
    break;
  case "Saturday":
  case "Sunday":
    console.log("It's the weekend — enjoy!");
    break;
  default:
    console.log("It's a regular weekday.");
}
```

> Always add `break` at the end of each case. Without it, code "falls through" into the next case.

### Switch in a Function

```javascript
function getSeasonMessage(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "It's Winter — stay warm!";
    case 3:
    case 4:
    case 5:
      return "It's Spring — flowers are blooming!";
    case 6:
    case 7:
    case 8:
      return "It's Summer — enjoy the sun!";
    case 9:
    case 10:
    case 11:
      return "It's Autumn — leaves are falling!";
    default:
      return "Invalid month";
  }
}

case 0-3 Toddler
case 4-7 child
8-12 kid
13-17 teenager
18-19 teen/adult
20 complete Adult

console.log(getSeasonMessage(7));  // "It's Summer — enjoy the sun!"
console.log(getSeasonMessage(12)); // "It's Winter — stay warm!"

```



## 12. Loops

console.log("Hello 1");
console.log("Hello 2");
console.log("Hello 3");
console.log("Hello 4");
console.log("Hello 5");
console.log("Hello 6");

### For Loop

The classic loop — use when you know how many times to repeat.

```javascript
// for (start; condition; increment) i,j,k
for (let i = 0; i < 5; i++) {
  console.log("Count: " + i);
}
// Output: Count: 0, Count: 1, Count: 2, Count: 3, Count: 4


```

### While Loop

Repeats while a condition is true. Use when you don't know how many times to repeat.

```javascript
let count = 0;

while (count < 5) {
  console.log("Count is: " + count);
  count++; // Important! Without this it loops forever
}

// User input example
let password = "";
while (password !== "secret123") {
  password = prompt("Enter the password:");
}
console.log("Access granted!");


```

### Do while loop - Executes the block of code first before checking the condition

let i = 10;
do{
  console.log(i);
} while (i < 5);  //Output is 10

Do while runs the code at least once no matter what


### For...Of Loop — Best for Arrays

```javascript
let colors = ["red", "green", "blue"];

for (let vName of colors) {
  console.log(vName);
}


// red
// green
// blue
```

### For...In Loop — Best for Objects

```javascript
let person = { name: "Alice", age: 25, city: "Lagos" };
let boys = { name: "Jude", age: 20, city: "Ibadan"}


for (let key in person) {
  console.log(key + " " + person[key]);
}
for (let keys in boys) {
  console.log(keys + " " + boys[keys]);
}
// name: Alice
// age: 25
// city: Lagos
```

### Break and Continue

```javascript
// break — exit the loop early
for (let i = 0; i < 10; i++) {
  if (i === 5) break;
  console.log(i);
}
// Output: 0, 1, 2, 3, 4, 5

// continue — skip this iteration, go to next
for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) continue; // Skip even numbers
  console.log(i);
}
// Output: 1, 3, 5, 7, 9
```



## 13. Functions

### What is a Function?

A function is a reusable block of code that performs a task. You define it once and call it as many times as you want.

```javascript
// Define the function
function greet() {
  console.log("Hello, World!");
}

// Call (execute) the function
greet(); // Hello, World!
greet(); // Hello, World!
```

### Functions with Parameters and Return
{} - Implies the function body

```javascript
function add(a, b, c, d) {
  return a + b;
}
add(2, 3); //5



function multiply(j, k) {
  return j * k;
}
let k=2;
console.log( multiply(7, k));
7 * 2 = 14

// console.log( 2 * add(100, 200)); // 600
```

### Default Parameters

```javascript
function greet(name = "Guest", greeting = "Hello") {
  console.log(greeting + ", " + name + "!");
}

greet("Alice");           // Hello, Alice!
greet("Bob", "Welcome");  // Welcome, Bob!
greet();                  // Hello, Guest! (uses both defaults)
```
## Function Types


### Function Declaration
See Top

### Function Expression
Functions can be stored in variables:

```javascript
const multiply = function(a, b) {
  return a * b;
};

console.log(multiply(4, 5)); // `20`
```



## 14. Arrow Functions

### What is an Arrow Function?

Arrow functions are a shorter, modern way (ES6) to write functions.

```javascript
// Regular function
function add(a, b) {
  return a + b;
}

// Arrow function — same thing, shorter
const add = (a, b) => {
  return a + b;
};

// Even shorter — single expression, implicit return
const add = (a, b) => a + b;



console.log(add(5, 3)); // 8
```
Arrow Function Syntax Breakdown
(parameters) => {code};

parts
() = Parrameters
=> = arrow
{} = function body


nb; No braces {} = automatic return
Braces {} = must write a return statement.


### Arrow Function Variations

```javascript
// No parameters — use empty parentheses
const sayHello = () => console.log("Hello!");

// One parameter — parentheses optional
const double = n => n * 2;
const square = n => n * n;

// Multiple parameters — parentheses required
const greet = (name, age) => `Hi ${name}, you are ${age} years old.`;

// Multi-line body — need curly braces and explicit return
const calculateTotal = (price, taxRate) => {
  const tax = price * taxRate;
  const total = price + tax;
  return total;
};

console.log(double(5));            // 10
console.log(square(4));            // 16
console.log(greet("Alice", 20));   // Hi Alice, you are 20 years old.
console.log(calculateTotal(100, 0.075)); // 107.5

Implicit return
If there is one line, return is automatic.
const square = n => n*n;

compared to multi-line
const square = n => {
  return n*n;
}

Wrong
const user = () => { name: "Benjamin"};

corrected version
const user = () => ({ name: "Benjamin"});
```





## 15. Parameters and Return Values

### Parameters vs Arguments

- **Parameter** = variable name in the function definition
- **Argument** = actual value passed when calling the function

Mental note
Argument => Function => Return Value



```javascript
// 'name' and 'age' are PARAMETERS
function introduce(name, age) {
  return `I'm ${name} and I'm ${age} years old.`;
}

// "Alice" and 25 are ARGUMENTS
console.log(introduce("Alice", 25));
// I'm Alice and I'm 25 years old.

### Default Parameters
Used when no value is passed

function greetUser(greeting = "Hello", name = "Guest", password = "1234"){
    console.log(`${greeting}, ${name}! Your password is ${password}. `);
}

let userName = prompt("Enter your username:");
let userPassword = prompt("Enter your Password:");

greetUser(undefined, userName, userPassword);

```

### Rest Parameters — Accept Any Number of Arguments
(1+2+3+4+5+6+7+8+9)
```javascript
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

console.log(sum(1, 2, 3));       // 6
console.log(sum(1, 2, 3, 4, 5)); // 15
console.log(sum(10, 20));        // 30


function addNumbers(...numbers){
    let sum = 0;

    for (let number of numbers){
        sum += number;
    }
    console.log("Total = ", sum);
}
addNumbers(1,2,3,4,5,6);


function displayNames(...names){
    console.log("Names Entered:");

    for (let i = 0; i < names.length; i++){
        console.log(`${i + 1}, ${names[i]}`);
    }
}
displayNames("Moses");
console.log("-------------------");

displayNames("Andrew");
console.log("--------------------");

displayNames("Moses", "Andrew", "James", "Isreal", "Joseph");
```

### Functions Can Return Any Type

```javascript
// Return a number
function square(n, a) { return n ** a; }

// Return a string
function fullName(first, last) { return `${first} ${last}`; }

// Return a boolean
function isAdult(age) { return age >= 18; }

// Return an object
function createUser(name, age) {
  return { name, age, id: Math.random() };
}



// Return an array
function getRange(start, end) {
  let result = [];
  for (let i = start; i <= end; i++) result.push(i);
  return result;
}

console.log(square(5));               // 25
console.log(fullName("John", "Doe")); // "John Doe"
console.log(isAdult(20));             // true
console.log(getRange(1, 5));          // [1, 2, 3, 4, 5]
```



## 16. Closures

### What is a Closure?

A closure is when a function "remembers" and can access variables from the outer function where it was created, even after that outer function has finished.

Mental note
A closure = function + its remembered variables

```javascript
function outer() {
  let name = "Ben";

  function inner() {
    console.log(name);
  }
  inner();
}

outer();

inner() uses "name" from outer() 
```

### Practical Closure — Private Bank Account

```javascript
function(){
  let class = "white";
};
let class = "orange";

function createBankAccount(initialBalance) {
  let balance = initialBalance; // Private — inaccessible from outside
  let class;
  if (class === red){

  }
  return {
    deposit(amount) {
      balance += amount;
      console.log(`Deposited $${amount}. Balance: $${balance}`);
    },
    withdraw(amount) {
      if (amount > balance) {
        console.log("Insufficient funds!");
        return;
      }
      balance -= amount;
      console.log(`Withdrew $${amount}. Balance: $${balance}`);
    },
    getBalance() {
      return balance;
    }
  };
}

const account = createBankAccount(100);
account.deposit(50);              // Deposited $50. Balance: $150
account.withdraw(30);             // Withdrew $30. Balance: $120
console.log(account.getBalance()); // 120
// console.log(balance);           // ERROR — balance is private!
```



## 17. Scope and Hoisting

Scope talks about the where i.e where can I access a variable
Hoisting talks about the when i.e when is a variable available for use

### Types of Scope
1. Global Scope; Any Variable declared outside of any function
```javascript
// Global scope — accessible everywhere in the file
let globalVar = "I'm global";
function myFunction() {
  // Function scope — only inside this function
  let localVar = "I'm local";
  console.log(globalVar); // Works — can see global
  console.log(localVar);  // Works — same scope
}





2. Function scope; THis is when a variable is declared inside of a function
function myFunction() {
  // Function scope — only inside this function
  let localVar = "I'm local";
  console.log(globalVar); // Works — can see global
  console.log(localVar);  // Works — same scope
}

myFunction();
// console.log(localVar); // ERROR — not accessible outside function
3. Block scope; This are variables declared inside curly brackets{} 

// Block scope — let and const only exist inside their {}
{
  let blockLet = "block scoped";
  const blockConst = "also block scoped";
}
// console.log(blockLet);   // ERROR
// console.log(blockConst); // ERROR
```

### Hoisting

Hoisiting in javascript is simply moving declarations to the top before execution

JavaScript moves declarations to the top of their scope before running code:

```javascript
Types of Hoisting

1. Function Hoisting
// Function declarations are fully hoisted — can use before declaring
sayHello(); // Works! Prints "Hello"

function sayHello() {
  console.log("Hello");
}
```

```javascript
2. Var Hoisting
// var is hoisted but starts as undefined
console.log(x); // undefined (no error, but not the value!)
var x = 5;
console.log(x); // 5

3. let and Const Hoisting
// let and const are NOT accessible before declaration
console.log(y); // ERROR: Cannot access 'y' before initialization
let y = 10;
console.log(y)
```

> Always declare variables at the top of their scope. Use `let`/`const` — they protect you from hoisting bugs.



## 18. Objects

### What is an Object?

An object groups related data and behavior together using **key-value pairs**.

```javascript
const person = {
  name: "Alice",
  age: 25,
  city: "Lagos",
  isStudent: true,
};
const person2 ={
  
}

// Access properties — dot notation
console.log(person.name); // "Alice"
console.log(person.age);  // 25

// Access properties — bracket notation (useful with variables)
let prop = "city";
console.log(person[prop]); // "Lagos"

// Modify a property
person.age = 26;

// Add a new property
person.email = "alice@example.com";

// Delete a property
delete person.isStudent;

```

### Methods — Functions inside Objects

```javascript
const car = {
  brand: "Toyota",  
  model: "Camry",
  speed: 0,

  accelerate(amount) {
    this.speed += amount; // 'this' refers to the object
    console.log(`Speed: ${this.speed} km/h`);
  },

  brake(amount) {
    this.speed = Math.max(0, this.speed - amount);
    console.log(`Speed: ${this.speed} km/h`);
  },

  describe() {
    return `${this.brand} ${this.model}`;
  }
};

car.accelerate(60);  // Speed: 60 km/h
car.brake(20);       // Speed: 40 km/h
console.log(car.describe()); // Toyota Camry
```

### Destructuring Objects

```javascript
const person = { name: "Alice", age: 25, city: "Lagos" };

// Old way
let name = person.name; let name = Alice
let age = person.age;

// Modern destructuring
const { name, age, city } = person;
console.log(name); // "Alice"
console.log(age);  // 25

// Rename while destructuring
const { name: fullName, city: hometown } = person;
console.log(fullName); // "Alice"


// Default values

const details = {name: "Michael", gender: "Male", email: "MichaelYahoo@gmail.com" }
const { email = "not provided" } = person;
console.log(email); // "not provided"
```

### Spread Operator with Objects

```javascript
const defaults = { theme: "light", language: "en", fontSize: 14 }
const userSettings = { theme: "dark", fontSize: 18 };

// Merge — userSettings overrides defaults
const settings = { ...defaults, ...userSettings };
console.log(settings);

const { theme = "Subscribe to premium for theme"} = settings;
// { theme: "dark", language: "en", fontSize: 18 }
```



## 19. Arrays

### Arrow Functions with Array Methods

```javascript
const numbers = [1, 2, 3, 4, 5];
      Index   =  0  1  2  3  4

const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

const sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum); // 15
```
### What is an Array?

An array is an ordered list of values. Each value is accessed by its **index** (position), starting at 0.

```javascript
const fruits = ["apple", "banana", "cherry"];
//length = 3
//Index = 0, 1, 2

console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "cherry"
console.log(fruits[fruits.length - 1]); // "cherry" (last item)

// Modifying
fruits[0] = "mango";
fruits[2] = "kiwi";
console.log(fruits); // ["mango", "banana", "kiwi"]
```

### Common Array Methods

```javascript
const arr = [1, 2, 3, 4, 5];
 // Index =  0  1  2  3  4

// Adding and removing
arr.push(6);        // Add to end → [1,2,3,4,5,6]
arr.pop();          // Remove from end → [1,2,3,4,5]
arr.unshift(0);     // Add to start → [0,1,2,3,4,5]
arr.shift();        // Remove from start → [1,2,3,4,5]
                                            
// Finding
arr.indexOf(3);     // 2 — position of value 3
arr.includes(3);    // true — does value 3 exist?
arr.find(n => n > 3);       // 4 — first element where condition is true
arr.findIndex(n => n > 3);  // 3 — index of first match

// Sorting
arr.sort((a, b) => a - b); // Sort numbers ascending
arr.sort((a, b) => b - a); // Sort numbers descending [5,4,3,2,1]

// Copying and combining
const copy = [...arr];                 // Spread to copy
const merged = [...arr, ...[6, 7]];   // Merge arrays
const slice = arr.slice(1, 3);        // [2, 3] — copy portion
```

### Powerful Higher-Order Array Methods

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// map — transform EVERY element, returns new array
const doubled = numbers.map(n => n * 2);
// [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]

// filter — keep elements that PASS the test
const evens = numbers.filter(n => n % 2 === 0);
// [2, 4, 6, 8, 10]

// reduce — combine all elements into ONE value
const sum = numbers.reduce((total, n) => total + n, 0);
// 55

// every — true only if ALL elements pass
const allPositive = numbers.every(n => n > 0); // true

// some — true if ANY element passes
const hasNegative = numbers.some(n => n < 0); // false

// Chaining methods together
const result = numbers
  .filter(n => n % 2 === 0)  // [2, 4, 6, 8, 10]
  .map(n => n * 3)            // [6, 12, 18, 24, 30]
  .reduce((sum, n) => sum + n, 0); // 90

console.log(result); // 90


// Loop through an array
let fruits = ["apple", "banana", "cherry"]; // let fruit = orange;
for (let i = 0; i < fruits.length; i++) {
  console.log(i + ": " + fruits[i]);
}
// 0: apple
// 1: banana
// 2: cherry
```



# Chapter 20 — DOM Manipulation

## What is the DOM?

When a browser loads your HTML file, it does not just display it on screen. It reads every single tag and converts it into a living object, then organises all those objects into a family tree structure. That tree is called the **Document Object Model**, or DOM for short.

JavaScript can reach into that tree and read, change, add, or remove anything without reloading the page. That is what makes websites interactive.

Given this HTML:

```html
<body>
  <h1 id="title">Hello</h1>
  <ul class="list">
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
  </ul>
</body>
```

The browser builds this tree:

```
document
  └── body
        ├── h1#title   → "Hello"
        └── ul.list
              ├── li   → "Home"
              ├── li   → "About"
              └── li   → "Contact"
```

Every item in that tree is called a **node**. Elements like `h1` and `li` are element nodes. The text inside them is a text node. JavaScript gives us tools to work with all of them.



## Selecting Elements

Before you can change anything, you have to find it first. JavaScript gives you several ways to select elements from the DOM.

```javascript
// getElementById — finds ONE element by its id attribute
// Returns null if nothing is found
const title = document.getElementById("title");

// querySelector — finds the FIRST element that matches a CSS selector
// You can use any selector you already know from CSS
const btn = document.querySelector(".btn");
const firstParagraph = document.querySelector("p");
const navLink = document.querySelector("nav a:hover");

// querySelectorAll — finds ALL elements that match a CSS selector
// Returns a NodeList (similar to an array)
const allButtons = document.querySelectorAll("button");
const allCards = document.querySelectorAll(".card");


// html
// class="card"

// css
// .card{
//   bac
// }

// Looping through all matched elements
allCards.forEach(card => {
  card.style.border = "1px solid blue";
});
```

> Think of `getElementById` like calling someone by their unique student ID. `querySelector` grabs the first person who matches your description. `querySelectorAll` grabs everyone who matches.

### NodeList vs HTMLCollection

`querySelectorAll` returns a **NodeList**. There is an older set of methods like `getElementsByClassName` and `getElementsByTagName` that return an **HTMLCollection** instead. The difference matters.

```javascript
// querySelectorAll returns a STATIC NodeList
// Static means it takes a snapshot and does not update if the DOM changes later
const staticList = document.querySelectorAll(".item");

// getElementsByClassName returns a LIVE HTMLCollection
// Live means it automatically reflects any changes made to the DOM after you got it
const liveList = document.getElementsByClassName("item");
```

The bigger issue with HTMLCollection is that it does **not** support `forEach` directly. NodeList does. This catches a lot of beginners off guard.

```javascript
const nodeList = document.querySelectorAll("li");
nodeList.forEach(item => console.log(item.textContent)); // works perfectly

const htmlCollection = document.getElementsByTagName("li");
// htmlCollection.forEach(...) throws a TypeError

// Fix it by converting to a real array first
Array.from(htmlCollection).forEach(item => console.log(item.textContent)); // works
```

> In practice, stick to `querySelectorAll` and you will not run into this problem.



## Reading and Changing Content

Once you have selected an element, you can read or change what is inside it. There are three ways to do this and they behave differently.

```javascript
const box = document.querySelector(".box");

// textContent — reads or sets plain text only
// Any HTML tags you write here show up as literal text on the page
// This is the SAFE default. Always use this when dealing with user input.
box.textContent = "Hello World";
box.textContent = "<strong>Hello</strong>"; // shows exactly: <strong>Hello</strong>

// innerHTML — reads or sets HTML including tags
// The browser actually parses and renders whatever tags you put in here
// Never put user-typed content directly into innerHTML — it is a security risk
box.innerHTML = "<strong>Hello</strong>"; // renders the word Hello in bold

// innerText — similar to textContent but CSS-aware
// If an element is hidden with display:none, innerText ignores its text
// textContent still returns it
// innerText also runs slower because it triggers a layout calculation
box.innerText = "Hello World";
```

Mental note:
- Use `textContent` by default
- Use `innerHTML` only when you are writing your own HTML and it is not coming from a user
- Avoid `innerText` unless you specifically need the CSS-aware behaviour



## Changing Attributes

Attributes are the extra details you add to HTML tags — like `src` on an image, `href` on a link, or `disabled` on a button.

### Direct Property Access

For common attributes, you can read and set them directly like object properties.

```javascript
const img = document.querySelector("img");
img.src = "new-photo.jpg";
img.alt = "A profile photo";

const link = document.querySelector("a");
link.href = "https://example.com";
link.target = "_blank"; // opens in a new tab
```

### setAttribute, getAttribute, removeAttribute

For anything beyond the common attributes — especially custom attributes or accessibility attributes — use these three methods.

```javascript
const btn = document.querySelector("button");

// setAttribute(name, value) — sets any attribute
btn.setAttribute("disabled", "true");
btn.setAttribute("aria-label", "Close the menu");
btn.setAttribute("data-id", "42");

// getAttribute(name) — reads the current value of any attribute
const label = btn.getAttribute("aria-label"); // "Close the menu"

// removeAttribute(name) — deletes the attribute entirely
btn.removeAttribute("disabled"); // button is active again
```

### Data Attributes

Data attributes are a clean way to store custom information directly on an HTML element. They always start with `data-` and you access them in JavaScript through the `dataset` property.

```html
<div class="product" data-id="42" data-price="1500" data-category="shoes">
  Air Jordan
</div>
```

```javascript
const product = document.querySelector(".product");

// dataset gives you an object containing all your data attributes
// The browser automatically removes the "data-" prefix for you
console.log(product.dataset.id);       // "42"
console.log(product.dataset.price);    // "1500"
console.log(product.dataset.category); // "shoes"

// You can also set them
product.dataset.id = "99";
product.dataset.inStock = "true"; // creates a new data-in-stock attribute
```

> Data attributes are used constantly in real projects. For example, storing a product ID on a card so when the user clicks it, your JavaScript knows exactly which product to work with.



## Changing Styles and Classes

### Inline Styles

You can directly set CSS properties through the `style` object on any element. Note that CSS uses kebab-case (`background-color`) but JavaScript uses camelCase (`backgroundColor`).

```javascript
const box = document.getElementById("box");

box.style.backgroundColor = "blue";
box.style.padding = "20px";
box.style.fontSize = "1.2rem";
box.style.display = "none"; // hides the element
```

Inline styles are fine for quick one-off changes but they get messy fast. For most situations, manipulating CSS classes is the better approach.

### classList

`classList` gives you methods to add, remove, toggle and check classes on any element without touching the rest of its class list.

```javascript
const box = document.getElementById("box");

box.classList.add("active");            // adds the class
box.classList.remove("hidden");         // removes the class
box.classList.toggle("dark-mode");      // adds it if absent, removes it if present
box.classList.contains("active");       // returns true or false

// replace swaps one class for another in one clean operation
// Much better than doing remove() then add() separately
box.classList.replace("light-theme", "dark-theme");
```

> The real advantage of using classes over inline styles is that your visual rules stay in CSS where they belong. JavaScript just decides which class applies.



## Creating and Inserting Elements

JavaScript can build brand new HTML elements from scratch and place them anywhere on the page.

### The Three-Step Pattern

**Create → Modify → Attach**

```javascript
// Step 1: Create the element
const card = document.createElement("div");

// Step 2: Modify it before attaching
card.classList.add("card");
card.textContent = "I was created with JavaScript!";

// Step 3: Attach it to the page
document.body.appendChild(card);   // adds to the end of body
document.body.prepend(card);       // adds to the beginning of body

// Or attach inside a specific container
const container = document.getElementById("container");
container.appendChild(card);
```

> Always set up your element fully before attaching it. Attaching first and then modifying causes the browser to re-render multiple times, which is wasteful.

### insertAdjacentHTML

`insertAdjacentHTML` lets you inject HTML at a specific position relative to an element. It is faster than `innerHTML` for adding content and gives you precise control over placement.

```javascript
const list = document.querySelector("ul");

// The four available positions:
list.insertAdjacentHTML("beforebegin", "<p>This appears before the ul</p>");
list.insertAdjacentHTML("afterbegin",  "<li>This becomes the first item</li>");
list.insertAdjacentHTML("beforeend",   "<li>This becomes the last item</li>");
list.insertAdjacentHTML("afterend",    "<p>This appears after the ul</p>");
```

Mental note:
```
beforebegin  ← outside, before the element
  <ul>
    afterbegin   ← inside, before the first child
    ...existing content...
    beforeend    ← inside, after the last child
  </ul>
afterend     ← outside, after the element
```

### cloneNode

`cloneNode` duplicates an existing element. This is useful when you have a template element in your HTML and want to stamp out multiple copies of it.

```javascript
const original = document.querySelector(".card");

// cloneNode(false) — copies the element but NOT its children
const shallowCopy = original.cloneNode(false);

// cloneNode(true) — copies the element AND everything inside it
const deepCopy = original.cloneNode(true);

document.body.appendChild(deepCopy);
```

### Removing Elements

```javascript
const card = document.querySelector(".card");

// remove() deletes the element from the page entirely
card.remove();
```



## Traversing the DOM

Traversal means navigating the family tree of elements — moving from a parent to its children, from a child up to its parent, or sideways to a sibling. You need this whenever you click one element but need to find a related element nearby.

Given this HTML:

```html
<ul id="menu">
  <li class="item">Home</li>
  <li class="item">About</li>
  <li class="item">Contact</li>
</ul>
```

```javascript
const menu = document.getElementById("menu");

// Moving DOWN to children
console.log(menu.children);           // all three li elements
console.log(menu.firstElementChild);  // first li — "Home"
console.log(menu.lastElementChild);   // last li — "Contact"
console.log(menu.children[1]);        // second li — "About"

// Moving UP to the parent
const firstItem = menu.firstElementChild;
console.log(firstItem.parentElement); // the ul element

// Moving SIDEWAYS to siblings
console.log(firstItem.nextElementSibling);     // "About" li
console.log(firstItem.previousElementSibling); // null — nothing before the first item
```

### closest()

`closest()` walks **up** the DOM tree from the current element and returns the first ancestor that matches the CSS selector you give it. It checks the element itself first, then works outward.

```javascript
// Imagine a delete button that sits deep inside a card
// When clicked, you need to find the card that wraps it and remove it

const deleteBtn = document.querySelector(".delete-btn");

deleteBtn.addEventListener("click", function() {
  // closest() climbs up the tree until it finds an element with class "card"
  const card = deleteBtn.closest(".card");
  card.remove();
});
```

> `closest()` is the cleaner alternative to chaining multiple `.parentElement` calls when you do not know exactly how many levels up your target element is.



## Putting It All Together — Practical Example

Here is a small task manager that combines everything from this chapter. Read through the comments carefully.

```html
<!DOCTYPE html>
<html>
<head>
  <title>Task Manager</title>
</head>
<body>

  <h2 id="heading">My Tasks</h2>

  <input type="text" id="taskInput" placeholder="Enter a task..." />
  <button id="addBtn">Add Task</button>

  <ul id="taskList"></ul>

  <script>

    const addBtn = document.getElementById("addBtn");
    const taskInput = document.getElementById("taskInput");
    const taskList = document.getElementById("taskList");

    // This function creates a full task item and appends it to the list
    function addTask() {
      const text = taskInput.value.trim();

      // Do nothing if the input is empty
      if (!text) return;

      // Create → Modify → Attach
      const li = document.createElement("li");
      li.textContent = text;

      // Store the task text in a data attribute for later use
      li.dataset.task = text;

      // Create the delete button inside the same li
      const deleteBtn = document.createElement("button");
      deleteBtn.textContent = "Remove";
      deleteBtn.classList.add("delete-btn");

      // When the delete button is clicked, use closest() to find and remove the li
      deleteBtn.addEventListener("click", function() {
        deleteBtn.closest("li").remove();
      });

      li.appendChild(deleteBtn);
      taskList.appendChild(li);

      // Clear the input after adding
      taskInput.value = "";
    }

    // Listen for a button click
    addBtn.addEventListener("click", addTask);

    // Also add a task when the user presses Enter
    taskInput.addEventListener("keydown", function(e) {
      if (e.key === "Enter") addTask();
    });

  </script>

</body>
</html>
```



## Quick Reference

| Task | Method |
|---|---|
| Find one element by id | `getElementById("id")` |
| Find first match | `querySelector("selector")` |
| Find all matches | `querySelectorAll("selector")` |
| Read or set plain text | `textContent` |
| Read or set HTML | `innerHTML` |
| Set any attribute | `setAttribute("name", "value")` |
| Read any attribute | `getAttribute("name")` |
| Remove an attribute | `removeAttribute("name")` |
| Read or write data attributes | `element.dataset.name` |
| Add a class | `classList.add("class")` |
| Remove a class | `classList.remove("class")` |
| Toggle a class | `classList.toggle("class")` |
| Swap one class for another | `classList.replace("old", "new")` |
| Check if class exists | `classList.contains("class")` |
| Create new element | `document.createElement("tag")` |
| Add to end of parent | `parent.appendChild(element)` |
| Add to start of parent | `parent.prepend(element)` |
| Insert HTML at position | `insertAdjacentHTML("position", html)` |
| Duplicate an element | `element.cloneNode(true)` |
| Remove an element | `element.remove()` |
| Get all children | `element.children` |
| Get first child | `element.firstElementChild` |
| Get last child | `element.lastElementChild` |
| Get parent | `element.parentElement` |
| Get next sibling | `element.nextElementSibling` |
| Get previous sibling | `element.previousElementSibling` |
| Find nearest matching ancestor | `element.closest("selector")` |
```



# 21. Events and Event Handling

### What is an Event?
 
An event is something that happens in the browser — user clicks, types, scrolls, or moves their mouse. JavaScript can listen for and respond to these events.

### Adding Event Listeners

```javascript
const button = document.getElementById("myBtn");

// Best way — addEventListener
button.addEventListener("click", function() {
  console.log("Button was clicked!");
);

// With arrow function
button.addEventListener("click", () => {
  console.log("Clicked!");
});

// Named function — easy to remove later
function handleClick() {
  console.log("Clicked!");
}
button.addEventListener("click", handleClick);
button.removeEventListener("click", handleClick); // Remove when done
```

### The Event Object

When an event fires, JavaScript passes an event object with useful information:

```javascript
button.addEventListener("click", (event) => {
  console.log(event.type);      // "click"
  console.log(event.target);    // The actual element clicked
  console.log(event.target.id); // That element's id

  // Prevent default behavior (stop form submit, link navigate, etc)
  event.preventDefault();

  // Stop event from bubbling up to parent elements
  event.stopPropagation();
});
```

### Common Events Reference

```javascript
// Mouse
element.addEventListener("click", handler);
element.addEventListener("dblclick", handler);
element.addEventListener("mouseover", handler); // Mouse enters element
element.addEventListener("mouseout", handler);  // Mouse leaves element

// Keyboard
document.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
  if (e.key === "Enter") console.log("Enter pressed!");
  if (e.key === "Escape") console.log("Escape pressed!");
});

// Form
const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", (e) => {
  e.preventDefault(); // Stop page from reloading
  console.log("Form submitted!");
});

input.addEventListener("input", (e) => {
  console.log("User typed:", e.target.value);
});

// Window
window.addEventListener("load", () => console.log("Page fully loaded"));
window.addEventListener("scroll", () => console.log("User scrolled"));
window.addEventListener("resize", () => console.log("Window resized"));
```



## 22. Error Handling and Debugging

### Types of Errors

```javascript
// SyntaxError — code is written incorrectly (JS won't even run)
// let x = ;  ← missing value

// ReferenceError — using a variable that doesn't exist
// console.log(y); ← y is not defined

// TypeError — wrong type being used
// null.toString(); ← can't call method on null

// RangeError — value out of allowed range
// new Array(-1); ← can't create array with negative length
let fruits = [1,2,3,4,5,6];

```

### Try / Catch / Finally

```javascript
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero!");
  }
  return a / b;
}

try {
  console.log(divide(10, 2));  // 5 — works fine
  console.log(divide(10, 0));  // throws error
} catch (error) {
  console.log("Error caught:", error.message); // "Cannot divide by zero!"
} finally {
  console.log("This always runs, error or not.");
}
```

### Debugging with Console

```javascript
console.log("Basic output");
console.error("This shows as an error (red)");
console.warn("This shows as a warning (yellow)");

// Display data as a table
const users = [{ name: "Alice", age: 25 }, { name: "Bob", age: 30 }];
console.table(users);

// Measure how long code takes
console.time("my timer");
for (let i = 0; i < 1000000; i++) {} // Simulate work
console.timeEnd("my timer"); // Prints time elapsed

// Pause execution in DevTools
function buggyFunction(x) {
  debugger; // Browser pauses here so you can inspect variables
  return x * 2;
}


Debugging process 

Read error message
Check line number
Look at your variables
use console.log
Fix one thing at a time
```


## 23. Asynchronous JavaScript

### Synchronous vs Asynchronous

By default, JavaScript is **synchronous** — it runs one thing at a time, in order.

```javascript
// Synchronous — waits for each line
console.log("First");
console.log("Second");
console.log("Third");
// Output: First, Second, Third (always in order)

// Asynchronous — doesn't wait
console.log("First");
setTimeout(() => {
  console.log("Second"); // Delayed by 2 seconds
}, 2000);
console.log("Third");
// Output: First, Third, Second
// "Third" runs BEFORE "Second" because setTimeout is async!
```

### Why Async Matters

Many real-world operations take time and shouldn't block your app from running:
- Fetching data from an API (could take seconds)
- Reading/writing files
- Database queries
- User interactions

JavaScript handles these asynchronously so the app stays responsive while waiting.



## 24. Callbacks

### What is a Callback?

A callback is a function passed as an argument to another function, to be called when an async operation is done.

```javascript
function fetchData(url, onSuccess, onError) {
  setTimeout(() => {
    if (url) {
      onSuccess("Data from: " + url);
    } else {
      onError("No URL provided!");
    }
  }, 1000);
}

fetchData(
  "https://api.example.com/users",
  function(data) { console.log("Success:", data); },
  function(error) { console.log("Error:", error); }
);
```

### Callback Hell — The Problem

Deeply nesting callbacks becomes hard to read and maintain:

```javascript
// This is called "callback hell" — hard to read!
getUser(userId, function(user) {
  getPosts(user.id, function(posts) {
    getComments(posts[0].id, function(comments) {
      getLikes(comments[0].id, function(likes) {
        console.log(likes); // 4 levels deep already!
      });
    });
  });
});
```

This pyramid of doom called nested callbacks is why **Promises** and **Async/Await** were invented.



## 25. Promises

### What is a Promise?

A Promise represents a value that will be available in the future. It can be:
- **Pending** — still waiting for the result
- **Fulfilled** — completed successfully, has a value
- **Rejected** — failed, has an error

```javascript
// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true;

  setTimeout(() => {
    if (success) {
      resolve("Data loaded!"); // Fulfilled
    } else {
      reject(new Error("Something went wrong!")); // Rejected
    }
  }, 1000);
});

// Consuming a Promise
myPromise
  .then(data => {
    console.log("Success:", data); // "Success: Data loaded!"
  })
  .catch(error => {
    console.log("Error:", error.message);
  })
  .finally(() => {
    console.log("Always runs — success or failure");
  });
```

### Chaining Promises

Each `.then()` returns a new Promise, so you can chain them:

```javascript
fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then(users => users.filter(user => user.id < 4))
  .then(filtered => {
    console.log("Filtered users:", filtered);
    return filtered;
  })
  .catch(error => {
    console.error("Failed:", error);
  });
```

### Running Multiple Promises

```javascript
const p1 = fetch("/api/users");
const p2 = fetch("/api/products");
const p3 = fetch("/api/orders");

// Wait for ALL — fails if any one fails
Promise.all([p1, p2, p3])
  .then(([users, products, orders]) => {
    console.log("All loaded!");
  });

// Wait for FIRST one to succeed
Promise.race([p1, p2, p3])
  .then(winner => console.log("First done:", winner));
```



## 26. Async / Await

### What is Async/Await?

Async/Await is the modern, cleanest way to write async code. It lets you write asynchronous code that LOOKS synchronous i.e much easier to read.

```javascript
// The 'async' keyword makes a function return a Promise
async function loadUser(userId) {
  // 'await' pauses here until the Promise resolves
  const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
  const user = await response.json();
  console.log(user.name);
  return user;
}

loadUser(1); // Calls the async function
```

### Error Handling with Async/Await

```javascript
async function getWeatherData(city) {
  try {
    const response = await fetch(`https://api.weather.com/${city}`);

    if (!response.ok) {
      throw new Error(`City not found: ${city}`);
    }

    const data = await response.json();
    return data;

  } catch (error) {
    console.error("Weather fetch failed:", error.message);
    return null;
  }
}

// Calling the async function
async function main() {
  const weather = await getWeatherData("Lagos");
  console.log(weather);
}

main();
```

### Async/Await vs Promise Chains

```javascript
// Same goal — fetch a user and their posts

// Promise chain way
function getUserAndPosts(userId) {
  return fetch(`/users/${userId}`)
    .then(res => res.json())
    .then(user => fetch(`/posts?userId=${user.id}`))
    .then(res => res.json())
    .then(posts => console.log(posts));
}

// Async/Await way — much cleaner!
async function getUserAndPosts(userId) {
  const userRes = await fetch(`/users/${userId}`);
  const user = await userRes.json();

  const postsRes = await fetch(`/posts?userId=${user.id}`);
  const posts = await postsRes.json();

  console.log(posts);
}
```



## 27. Event Loop

### How JavaScript Handles Async Code

JavaScript is **single-threaded** — it can only do one thing at a time. The **Event Loop** is the mechanism that lets it handle async tasks without freezing.

**The components:**
- **Call Stack** — runs your code, one function at a time
- **Web APIs** — browser handles async tasks (setTimeout, fetch) here
- **Callback Queue** — finished async callbacks wait here
- **Microtask Queue** — Promises resolve here (higher priority than callback queue)
- **Event Loop** — watches the call stack; when empty, moves next task in

```javascript
console.log("1 — Start");

setTimeout(() => {
  console.log("2 — setTimeout (macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("3 — Promise (microtask)");
});

console.log("4 — End");

// Output order:
// 1 — Start       (synchronous)
// 4 — End         (synchronous)
// 3 — Promise     (microtask — runs before macrotasks!)
// 2 — setTimeout  (macrotask — runs last)
```

> Key insight: Promises (microtasks) always run before setTimeout/setInterval (macrotasks), even if both are set to 0ms.



## 28. Data Structures

### What are Data Structures?

A data structure is a way of organizing data so it can be accessed and used efficiently. Choosing the right one for the right job is an important skill.

| Structure | Best For | Key Feature |
|-----------|----------|-------------|
| Array | Ordered lists | Index-based access |
| Object | Key-value pairs | String keys |
| Map | Key-value pairs | Any type as key |
| Set | Unique collections | No duplicates |
| Stack | Undo/history | Last in, first out |
| Queue | Task scheduling | First in, first out |



## 29. Maps

### What is a Map?

A Map is like an Object but keys can be ANY type (not just strings), and it maintains insertion order.

```javascript
const userMap = new Map();

// Set key-value pairs
userMap.set("name", "Alice");
userMap.set("age", 25);
userMap.set(1, "number key works!");
userMap.set(true, "boolean key works!");

// Get values
console.log(userMap.get("name")); // "Alice"
console.log(userMap.get(1));      // "number key works!"

// Check existence
console.log(userMap.has("name")); // true
console.log(userMap.has("email")); // false

// Size
console.log(userMap.size); // 4

// Delete
userMap.delete("age");

// Iterate
for (const [key, value] of userMap) {
  console.log(`${key} → ${value}`);
}
```

### When to Use Map vs Object

```javascript
// Use Object when: keys are strings, simple data, JSON format
const config = { host: "localhost", port: 3000 };

// Use Map when: keys aren't strings, need size property, frequent add/delete
const elementClickCounts = new Map();
const button = document.getElementById("btn");
elementClickCounts.set(button, 0); // DOM element as key — impossible with Object!
```



## 30. Sets

### What is a Set?

A Set stores **unique values only** while duplicates are automatically ignored.

```javascript
const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // Duplicate — silently ignored
mySet.add(1); // Duplicate — silently ignored

console.log(mySet.size); // 3 (not 5!)
console.log(mySet);      // Set { 1, 2, 3 }

// Check and delete
console.log(mySet.has(2)); // true
mySet.delete(2);
console.log(mySet.has(2)); // false

// Iterate
for (const value of mySet) {
  console.log(value);
}
```

### Most Common Use — Remove Duplicates

```javascript
const numbers = [1, 2, 3, 2, 4, 1, 5, 3, 6];

// Remove all duplicates in ONE line!
const unique = [...new Set(numbers)];
console.log(unique); // [1, 2, 3, 4, 5, 6]

// Real use case — unique tags
const tags = ["javascript", "css", "html", "javascript", "css"];
const uniqueTags = [...new Set(tags)];
console.log(uniqueTags); // ["javascript", "css", "html"]
```



## 31. Stacks

### What is a Stack?

A Stack follows **LIFO — Last In, First Out**. Like a stack of plates — you add to the top and take from the top.

Core operations:
- **push** — add item to top
- **pop** — remove item from top
- **peek** — look at top without removing

```javascript
class Stack {
  constructor() {
    this.items = [];
  }

  push(element) {
    this.items.push(element);
    console.log(`Pushed: ${element}`);
  }

  pop() {
    if (this.isEmpty()) return "Stack is empty";
    const removed = this.items.pop();
    console.log(`Popped: ${removed}`);
    return removed;
  }

  peek() {
    if (this.isEmpty()) return "Stack is empty";
    return this.items[this.items.length - 1];
  }

  isEmpty() { return this.items.length === 0; }
  size() { return this.items.length; }
}

const stack = new Stack();
stack.push(10);    // Pushed: 10
stack.push(20);    // Pushed: 20
stack.push(30);    // Pushed: 30

console.log(stack.peek()); // 30 (top item, not removed)
stack.pop();       // Popped: 30
stack.pop();       // Popped: 20
console.log(stack.size()); // 1
```

Real-world uses: browser back button, undo/redo, function call tracking.



## 32. Queues

### What is a Queue?

A Queue follows **FIFO — First In, First Out**. Like a checkout line — first person in is first to be served.

Core operations:
- **enqueue** — add item to back
- **dequeue** — remove item from front
- **peek** — look at front without removing

```javascript
class Queue {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    this.items.push(element); // Add to back
    console.log(`Joined queue: ${element}`);
  }

  dequeue() {
    if (this.isEmpty()) return "Queue is empty";
    const served = this.items.shift(); // Remove from front
    console.log(`Served: ${served}`);
    return served;
  }

  peek() {
    if (this.isEmpty()) return "Queue is empty";
    return this.items[0]; // Front of queue
  }

  isEmpty() { return this.items.length === 0; }
  size() { return this.items.length; }
}

const queue = new Queue();
queue.enqueue("Alice");    // Joined queue: Alice
queue.enqueue("Bob");      // Joined queue: Bob
queue.enqueue("Charlie");  // Joined queue: Charlie

console.log(queue.peek()); // "Alice" — first in line
queue.dequeue(); // Served: Alice
queue.dequeue(); // Served: Bob
console.log(queue.size()); // 1
```

Real-world uses: print queues, task schedulers, event handling systems.



## 33. Algorithms

### What is an Algorithm?

An algorithm is a step-by-step set of instructions to solve a problem. Good algorithms are correct, efficient, and readable.

Key things to evaluate:
- **Correctness** — does it always give the right answer?
- **Efficiency** — how fast? How much memory?
- **Clarity** — can others understand it?

The topics that follow are the most essential algorithm types every JavaScript developer should know.

---

## 34. Searching

### Linear Search — Check Each One

Checks every element until the target is found. Works on unsorted arrays.

```javascript
function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) {
      return i; // Return the index where target was found
    }
  }
  return -1; // Not found
}

const fruits = ["apple", "banana", "cherry", "mango", "grape"];
console.log(linearSearch(fruits, "cherry")); // 2
console.log(linearSearch(fruits, "kiwi"));   // -1
// Performance: O(n) — must check up to every element
```

### Binary Search — Divide and Conquer

Only works on **sorted** arrays. Cuts the search space in half each step — extremely fast.

```javascript
function binarySearch(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return mid; // Found!
    } else if (array[mid] < target) {
      left = mid + 1; // Target must be in right half
    } else {
      right = mid - 1; // Target must be in left half
    }
  }

  return -1; // Not found
}

const sorted = [2, 5, 8, 12, 16, 23, 38, 45, 62, 78, 99];
console.log(binarySearch(sorted, 23)); // 5
console.log(binarySearch(sorted, 50)); // -1
// Performance: O(log n) — 1 million items needs only ~20 checks!
```



## 35. Sorting

### Bubble Sort — Simple but Slow

Repeatedly compares and swaps adjacent elements until sorted.

```javascript
function bubbleSort(array) {
  const arr = [...array]; // Don't modify original
  const n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // Swap
      }
    }
  }

  return arr;
}

const nums = [64, 34, 25, 12, 22, 11, 90];
console.log(bubbleSort(nums));
// [11, 12, 22, 25, 34, 64, 90]
// Performance: O(n²) — slow for large arrays
```

### Merge Sort — Fast and Reliable

Divides array in half, sorts each half recursively, then merges them.

```javascript
function mergeSort(array) {
  if (array.length <= 1) return array;

  const mid = Math.floor(array.length / 2);
  const left = mergeSort(array.slice(0, mid));
  const right = mergeSort(array.slice(mid));

  return merge(left, right);
}

function merge(left, right) {
  const result = [];
  let i = 0, j = 0;

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }

  return [...result, ...left.slice(i), ...right.slice(j)];
}

console.log(mergeSort([38, 27, 43, 3, 9, 82, 10]));
// [3, 9, 10, 27, 38, 43, 82]
// Performance: O(n log n) — much better for large arrays!
```



## 36. Recursion

### What is Recursion?

Recursion is when a function calls itself. Every recursive function MUST have:
1. A **base case** — a condition to STOP (prevents infinite loop)
2. A **recursive case** — the function calling itself with a smaller input

```javascript
// Classic example — Factorial
// 5! = 5 × 4 × 3 × 2 × 1 = 120

function factorial(n) {
  if (n === 0 || n === 1) return 1; // Base case — STOP
  return n * factorial(n - 1);      // Recursive case
}

console.log(factorial(5)); // 120
console.log(factorial(3)); // 6
console.log(factorial(0)); // 1
```

### Fibonacci with Recursion

```javascript
// Fibonacci: 0, 1, 1, 2, 3, 5, 8, 13, 21...
// Each number = sum of two before it

function fibonacci(n) {
  if (n <= 0) return 0;  // Base case
  if (n === 1) return 1; // Base case
  return fibonacci(n - 1) + fibonacci(n - 2); // Recursive case
}

console.log(fibonacci(0));  // 0
console.log(fibonacci(6));  // 8
console.log(fibonacci(10)); // 55

// Print first 10 fibonacci numbers
for (let i = 0; i <= 10; i++) {
  process.stdout.write(fibonacci(i) + " ");
}
// 0 1 1 2 3 5 8 13 21 34 55
```

### When to Use Recursion

Recursion works best for problems that naturally break into smaller identical problems:
- Tree and graph traversal
- File system navigation
- Mathematical sequences
- Divide and conquer algorithms



## 37. Time and Space Complexity

### What is Big O Notation?

Big O describes how the performance of your code SCALES as the input grows. It's the language developers use to talk about efficiency.

### Common Complexities

```javascript
// O(1) — Constant: always same speed, no matter the input size
function getFirstItem(array) {
  return array[0]; // One operation always
}

// O(log n) — Logarithmic: doubling input adds only 1 step (Binary Search)
function binarySearch(arr, target) { /* ... */ }

// O(n) — Linear: doubling input doubles the time (Linear Search)
function findItem(array, target) {
  for (let item of array) { // Checks every element once
    if (item === target) return item;
  }
}

// O(n log n) — Good sorting (Merge Sort, Quick Sort)
function mergeSort(array) { /* ... */ }

// O(n²) — Quadratic: doubling input quadruples the time
function bubbleSort(array) {
  for (let i = 0; i < array.length; i++) {         // n times
    for (let j = 0; j < array.length - i; j++) {   // n times each
      // n × n = n² total operations
    }
  }
}
```

### Space Complexity

How much memory does your algorithm use?

```javascript
// O(1) space — always uses same amount of memory
function sumArray(array) {
  let total = 0; // Only one extra variable
  for (let n of array) total += n;
  return total;
}

// O(n) space — creates a new array the same size as input
function doubleAll(array) {
  return array.map(n => n * 2); // New array same length as input
}
```

### Performance Quick Guide

| Big O | Name | Real World Example |
|-------|------|--------------------|
| O(1) | Constant | Looking up a dictionary word you know the page of |
| O(log n) | Logarithmic | Binary search in a phone book |
| O(n) | Linear | Reading every page of a book |
| O(n log n) | Linearithmic | Merge sort |
| O(n²) | Quadratic | Checking every pair of names in a list |
| O(2^n) | Exponential | Brute-force password cracking |



## 38. Object Oriented JavaScript

### What is OOP?

Object-Oriented Programming organizes code around **objects** that combine data (properties) and behavior (methods). It makes code more organized, reusable, and easier to maintain.

The four pillars of OOP:
1. **Encapsulation** — bundle related data and methods together
2. **Inheritance** — a class can get properties/methods from a parent class
3. **Polymorphism** — different classes can share the same interface
4. **Abstraction** — hide complex details, show only what's needed

---

## 39. Prototypes

### What is a Prototype?

Every JavaScript object has a hidden link to another object called its **prototype**. When you access a property that doesn't exist on an object, JS automatically looks up the prototype chain.

```javascript
// All arrays share methods from Array.prototype
const arr = [1, 2, 3];
arr.push(4); // 'push' comes from Array.prototype — not the array itself!

// You can inspect the prototype
console.log(Object.getPrototypeOf(arr) === Array.prototype); // true

// Custom prototype with constructor functions (old way)
function Animal(name, type) {
  this.name = name;
  this.type = type;
}

// Add method to ALL Animal instances via prototype
Animal.prototype.speak = function() {
  console.log(`${this.name} the ${this.type} makes a sound.`);
};

Animal.prototype.describe = function() {
  return `${this.name} is a ${this.type}`;
};

const dog = new Animal("Rex", "dog");
const cat = new Animal("Whiskers", "cat");

dog.speak();  // "Rex the dog makes a sound."
cat.speak();  // "Whiskers the cat makes a sound."
console.log(dog.describe()); // "Rex is a dog"
// Both share the SAME speak and describe functions in memory
```



## 40. Classes

### What is a Class?

A class is a **blueprint** for creating objects. It defines what properties and methods each object of that type will have.

```javascript
class Person {
  // Constructor — runs when you create a new Person
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  // Regular method
  greet() {
    return `Hi! I'm ${this.name} and I'm ${this.age} years old.`;
  }

  // Getter — access like a property, not a method call
  get info() {
    return `${this.name} (${this.age})`;
  }

  // Setter — set a value with custom logic
  set birthYear(year) {
    this.age = new Date().getFullYear() - year;
  }

  // Static method — called on the class itself, not instances
  static createGuest() {
    return new Person("Guest", 0);
  }
}

const alice = new Person("Alice", 25);
const bob = new Person("Bob", 30);

console.log(alice.greet()); // Hi! I'm Alice and I'm 25 years old.
console.log(alice.info);    // "Alice (25)" — getter
alice.birthYear = 2000;     // setter — updates age

const guest = Person.createGuest(); // static method
console.log(guest.name); // "Guest"
```

### Private Fields — Keep Data Safe

```javascript
class BankAccount {
  #balance; // '#' makes it private — can only be accessed inside the class

  constructor(initial) {
    this.#balance = initial;
  }

  deposit(amount) {
    if (amount <= 0) throw new Error("Amount must be positive");
    this.#balance += amount;
    return this;
  }

  withdraw(amount) {
    if (amount > this.#balance) throw new Error("Insufficient funds");
    this.#balance -= amount;
    return this;
  }

  get balance() {
    return this.#balance;
  }
}

const account = new BankAccount(500);
account.deposit(200).withdraw(100); // Method chaining
console.log(account.balance); // 600
// console.log(account.#balance); // ERROR — private!
```



## 41. Inheritance

### What is Inheritance?

Inheritance lets one class (child) inherit all properties and methods from another class (parent). The child can also add its own features or override inherited ones.

```javascript
// Parent class
class Animal {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
    this.energy = 100;
  }

  speak() {
    console.log(`${this.name} says ${this.sound}!`);
  }

  eat(food) {
    this.energy += 10;
    console.log(`${this.name} eats ${food}. Energy: ${this.energy}`);
  }

  describe() {
    return `${this.name} (energy: ${this.energy})`;
  }
}

// Child class — inherits from Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name, "Woof"); // Call parent constructor
    this.breed = breed;
  }

  // New method only for Dog
  fetch(item) {
    this.energy -= 10;
    console.log(`${this.name} fetches the ${item}! Energy: ${this.energy}`);
  }

  // Override parent method
  speak() {
    console.log(`${this.name} barks loudly: WOOF WOOF!`);
  }
}

class Cat extends Animal {
  constructor(name) {
    super(name, "Meow");
  }

  purr() {
    console.log(`${this.name} purrs contentedly...`);
  }
}

const dog = new Dog("Rex", "Labrador");
dog.speak();         // "Rex barks loudly: WOOF WOOF!" — overridden
dog.eat("kibble");   // inherited from Animal
dog.fetch("ball");   // Dog-specific

const cat = new Cat("Whiskers");
cat.speak();  // "Whiskers says Meow!" — inherited original
cat.purr();   // Cat-specific

// instanceof checks
console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true — dog IS an Animal
console.log(cat instanceof Dog);    // false — cat is NOT a Dog
```



## 42. Modules and File Structure

### What are Modules?

Modules let you split code into separate files. Each file can **export** things and **import** things from other files. This keeps projects organized and code reusable.

### Exporting

```javascript
// utils/math.js

// Named exports — can export many things
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }
export function multiply(a, b) { return a * b; }
export const PI = 3.14159265;

// Default export — one main export per file
export default function calculate(a, operator, b) {
  switch (operator) {
    case "+": return a + b;
    case "-": return a - b;
    case "*": return a * b;
    case "/": return b !== 0 ? a / b : "Cannot divide by zero";
    default: throw new Error("Unknown operator");
  }
}
```

### Importing

```javascript
// main.js

// Import named exports
import { add, subtract, PI } from "./utils/math.js";

// Import and rename
import { multiply as times } from "./utils/math.js";

// Import default export (name it whatever you want)
import calculate from "./utils/math.js";

// Import everything into one object
import * as MathUtils from "./utils/math.js";

console.log(add(5, 3));           // 8
console.log(subtract(10, 4));     // 6
console.log(PI);                  // 3.14159265
console.log(times(3, 4));         // 12
console.log(calculate(10, "+", 5)); // 15
console.log(MathUtils.add(2, 2)); // 4
```

### Recommended Project Structure

```
my-project/
├── index.html
├── package.json
├── src/
│   ├── main.js              ← Entry point
│   ├── utils/
│   │   ├── math.js
│   │   ├── validation.js
│   │   └── formatting.js
│   ├── components/
│   │   ├── navbar.js
│   │   ├── card.js
│   │   └── modal.js
│   └── services/
│       ├── api.js
│       └── auth.js
└── styles/
    └── main.css
```



## 43. Memory Management

### How JavaScript Manages Memory

JavaScript automatically handles memory through **Garbage Collection** — you don't manually free memory like in C/C++.

Three stages:
1. **Allocation** — memory reserved when you create variables/objects
2. **Use** — reading and writing to that memory
3. **Release** — when data is no longer referenced, JS frees the memory

```javascript
// Memory allocated — person object in memory
let person = { name: "Alice", scores: new Array(1000) };

// Reference removed — GC can now free this memory
person = null;

// Block scope — memory freed when block ends
{
  let tempData = new Array(10000);
  // tempData is available here
} // tempData is freed here
```

### Common Memory Leaks

A **memory leak** happens when memory is no longer needed but never released:

```javascript
// 1. Forgotten event listeners
const button = document.getElementById("btn");

function handleClick() { console.log("Clicked"); }

button.addEventListener("click", handleClick);

// If button is removed but listener not cleaned up — LEAK!
// Always clean up:
button.removeEventListener("click", handleClick);

// 2. Timers not cleared
const intervalId = setInterval(() => {
  console.log("Running...");
}, 1000);

// Clean up when no longer needed
clearInterval(intervalId);

// 3. Global variables — live as long as the page does
window.hugeDataset = new Array(1000000); // Avoid this!

// Better — keep in limited scope
function processData() {
  const data = new Array(1000000);
  // process data...
  // data freed when function ends
}
```



## 44. Browser APIs and Web APIs

### What are Browser APIs?

Browsers provide built-in interfaces that let JavaScript interact with the browser and the wider web.

### Fetch API — Get Data from Servers

```javascript
// GET request — fetch data
async function getUsers() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error(`HTTP Error: ${response.status}`);
    }

    const users = await response.json();
    return users;
  } catch (error) {
    console.error("Fetch failed:", error.message);
  }
}

// POST request — send data to server
async function createPost(postData) {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": "Bearer my-token"
    },
    body: JSON.stringify(postData)
  });

  return await response.json();
}

getUsers().then(users => console.log(users));
createPost({ title: "Hello", body: "World", userId: 1 })
  .then(newPost => console.log(newPost));
```

### localStorage — Store Data in Browser

```javascript
// Store data — stays even after closing browser
localStorage.setItem("username", "Alice");
localStorage.setItem("theme", "dark");

// Retrieve data
const username = localStorage.getItem("username"); // "Alice"
const theme = localStorage.getItem("theme");       // "dark"

// Store objects — must convert to/from JSON string
const settings = { volume: 80, language: "en", notifications: true };
localStorage.setItem("settings", JSON.stringify(settings));

const saved = JSON.parse(localStorage.getItem("settings"));
console.log(saved.volume); // 80

// Remove specific item
localStorage.removeItem("username");

// Clear everything
localStorage.clear();
```

### Other Useful Browser APIs

```javascript
// Geolocation
navigator.geolocation.getCurrentPosition((pos) => {
  console.log("Latitude:", pos.coords.latitude);
  console.log("Longitude:", pos.coords.longitude);
});

// Clipboard
navigator.clipboard.writeText("Text copied to clipboard!");

// Notifications
Notification.requestPermission().then(permission => {
  if (permission === "granted") {
    new Notification("Hello!", { body: "You have a message." });
  }
});

// IntersectionObserver — detect when element scrolls into view
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible"); // Animate when visible
    }
  });
});

document.querySelectorAll(".card").forEach(card => {
  observer.observe(card);
});
```



## 45. Best Practices and Clean Code Principles

### Write Code for Humans First

Code is read far more than it's written. Always write for the next person reading it (which might be you in 6 months!).

```javascript
// BAD — clever but unreadable
const r = d.filter(u => u.a > 18).map(u => u.n).join(", ");

// GOOD — clear and self-documenting
const adultUsers = users.filter(user => user.age > 18);
const adultNames = adultUsers.map(user => user.name);
const nameList = adultNames.join(", ");
```

### Use Meaningful, Descriptive Names

```javascript
// BAD — vague, meaningless names
let d = 30;
let arr = [];
function fn(x, y) { return x + y; }

// GOOD — descriptive names
let subscriptionDurationDays = 30;
let activeUserProfiles = [];
function calculateOrderTotal(subtotal, taxRate) {
  return subtotal + (subtotal * taxRate);
}
```

### Keep Functions Small and Focused

```javascript
// BAD — one monster function doing everything
async function handleCheckout(cart, user) {
  // Validate cart
  if (cart.items.length === 0) throw new Error("Empty cart");

  // Calculate total
  let total = cart.items.reduce((sum, item) => sum + item.price, 0);

  // Apply discount
  if (user.isPremium) total *= 0.9;

  // Process payment
  const payment = await processPayment(user.card, total);

  // Send confirmation email
  await sendEmail(user.email, "Order Confirmed", `Your total: $${total}`);

  // Update inventory
  cart.items.forEach(item => updateStock(item.id, -item.quantity));
}

// GOOD — each function has one clear job
function validateCart(cart) {
  if (cart.items.length === 0) throw new Error("Cart is empty");
}

function calculateTotal(items) {
  return items.reduce((sum, item) => sum + item.price, 0);
}

function applyDiscount(total, user) {
  return user.isPremium ? total * 0.9 : total;
}

async function handleCheckout(cart, user) {
  validateCart(cart);
  const subtotal = calculateTotal(cart.items);
  const total = applyDiscount(subtotal, user);
  await processPayment(user.card, total);
  await sendConfirmationEmail(user, total);
  updateInventory(cart.items);
}
```

### Avoid Magic Numbers — Use Named Constants

```javascript
// BAD — what does 86400 mean?
const seconds = days * 86400;
if (score > 1000) unlockAchievement();

// GOOD — named constants explain the meaning
const SECONDS_PER_DAY = 60 * 60 * 24;  // 86400
const ACHIEVEMENT_THRESHOLD = 1000;

const seconds = days * SECONDS_PER_DAY;
if (score > ACHIEVEMENT_THRESHOLD) unlockAchievement();
```

### Handle Errors Properly

```javascript
// BAD — errors silently swallowed
async function fetchData(url) {
  try {
    const res = await fetch(url);
    return res.json();
  } catch (e) {}  // Empty catch — error disappears!
}

// GOOD — errors handled and communicated properly
async function fetchData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    return await response.json();

  } catch (error) {
    console.error(`Failed to fetch ${url}:`, error.message);
    throw error; // Let the caller decide how to handle it
  }
}
```

### Use Modern JavaScript Features

```javascript
// Old, verbose way
var greeting;
if (user && user.name) {
  greeting = "Hello, " + user.name;
} else {
  greeting = "Hello, Guest";
}

// Modern, clean way
const greeting = `Hello, ${user?.name ?? "Guest"}`;

// Old object merge
var merged = Object.assign({}, defaults, overrides);

// Modern spread merge
const merged = { ...defaults, ...overrides };

// Old array loop
for (var i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// Modern loop
for (const item of items) {
  console.log(item);
}
```

### Final Checklist — Before You Submit Your Code

- Use `const` by default, `let` when needed, never `var`
- Use `===` (strict equality) always, not `==`
- Handle all Promise rejections with `.catch()` or try/catch
- Remove `console.log` debug statements before deploying
- Name every variable and function descriptively
- Keep functions short — if it's longer than 20-30 lines, consider splitting it
- Validate input that comes from users or external sources
- Comment the WHY (not the WHAT — the code shows that)
- Avoid deeply nested code — more than 3-4 levels means refactor
- Use version control (Git) — commit often with clear messages



##  What to Learn Next

Now that you've completed this JavaScript course:

1. **Build real projects** — todo app, quiz game, weather app, expense tracker
2. **Practice algorithms** — solve problems on [leetcode.com](https://leetcode.com) or [codewars.com](https://codewars.com)
3. **Learn React** — the most popular JavaScript UI framework
4. **Learn Node.js** — run JavaScript on the server
5. **Learn TypeScript** — JavaScript with types (used in professional teams)
6. **Learn Git and GitHub** — version control is non-negotiable
7. **Read the MDN Docs** — [developer.mozilla.org](https://developer.mozilla.org) is your best reference forever



##  JavaScript Quick Reference Card

| Concept | Example |
|---------|---------|
| Variable | `const x = 5;` / `let y = 10;` |
| Function | `function add(a, b) { return a + b; }` |
| Arrow Function | `const add = (a, b) => a + b;` |
| Template Literal | `` `Hello, ${name}!` `` |
| Ternary | `age >= 18 ? "Adult" : "Minor"` |
| Nullish Coalescing | `value ?? "default"` |
| Optional Chaining | `user?.profile?.name` |
| Destructure Array | `const [first, second] = arr;` |
| Destructure Object | `const { name, age } = person;` |
| Spread | `const copy = [...arr];` |
| Rest Params | `function sum(...nums) {}` |
| Array Map | `arr.map(x => x * 2)` |
| Array Filter | `arr.filter(x => x > 0)` |
| Array Reduce | `arr.reduce((sum, x) => sum + x, 0)` |
| Async/Await | `const data = await fetch(url);` |
| Try/Catch | `try { ... } catch (err) { ... }` |
| Class | `class Dog extends Animal { ... }` |
| Import | `import { fn } from "./module.js"` |
| Export | `export function fn() {}` |
| localStorage | `localStorage.setItem("key", value)` |
| Event Listener | `element.addEventListener("click", fn)` |
| DOM Select | `document.querySelector(".class")` |
| Create Element | `document.createElement("div")` |



*Remember — reading about programming is just the beginning. The real learning happens when you open a code editor and start building things. Write code every day, break things, fix them, and build projects you're proud of. You've got this! *
