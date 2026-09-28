export const jsPart2 = [
  // 11. Switch Statements (6 questions)
  {
    id: "js-sw-01",
    topicId: "switch",
    topicName: "Switch Statements",
    question: "What happens if you omit the `break` keyword at the end of a `case` block in a `switch` statement?",
    code: `const role = "editor";
switch(role) {
  case "editor":
    console.log("Can edit content");
  case "viewer":
    console.log("Can view content");
    break;
}`,
    options: [
      "A SyntaxError is thrown immediately.",
      "Execution 'falls through' and continues running the next case block (`viewer`) regardless of whether the condition matches, until a `break` is encountered.",
      "The switch statement restarts from the first case.",
      "Only the default block executes."
    ],
    correctAnswer: 1,
    explanation: "Without a `break` statement, execution falls through to the subsequent case block, running its code even if its case expression does not match. In this example, BOTH 'Can edit content' and 'Can view content' will be logged.",
    tip: "Always include `break;` unless intentional fall-through grouping is desired."
  },
  {
    id: "js-sw-02",
    topicId: "switch",
    topicName: "Switch Statements",
    question: "What equality comparison does the `switch` statement use when matching cases?",
    code: `const val = "5";
switch(val) {
  case 5:
    console.log("Matched number 5");
    break;
  default:
    console.log("Default case");
}`,
    options: [
      "Loose equality (`==`) with type coercion.",
      "Strict equality (`===`) with no type conversion; hence `\"5\"` will NOT match number `5`.",
      "Object identity (`Object.is`) only.",
      "Regex pattern matching."
    ],
    correctAnswer: 1,
    explanation: "`switch` statements use strict equality (`===`). Since `\"5\" !== 5` (string vs number), the case does not match and execution goes to the `default` case.",
    tip: "`switch` requires exact value AND type matching."
  },
  {
    id: "js-sw-03",
    topicId: "switch",
    topicName: "Switch Statements",
    question: "What is the purpose of the `default` clause in a `switch` statement?",
    code: null,
    options: [
      "It must always be placed as the very first line of the switch block.",
      "It acts as a fallback that executes if none of the `case` values match the expression.",
      "It resets all variables declared inside the switch.",
      "It is required by JavaScript syntax or else code fails to parse."
    ],
    correctAnswer: 1,
    explanation: "The `default` clause is optional but acts as a catch-all fallback if no case matches, analogous to the final `else` block in an `if...else` chain.",
    tip: "Use `default` to handle unexpected or unhandled input values gracefully."
  },
  {
    id: "js-sw-04",
    topicId: "switch",
    topicName: "Switch Statements",
    question: "How can multiple cases share the exact same execution block in a `switch` statement?",
    code: null,
    options: [
      "Separate case values with commas: `case 'a', 'b':`",
      "Stack case clauses consecutively without breaks: `case 'a': case 'b': doSomething(); break;`",
      "Wrap cases in an array: `case ['a', 'b']:`",
      "JavaScript does not support multi-case grouping."
    ],
    correctAnswer: 1,
    explanation: "By stacking cases without code or `break` between them, execution falls through from any matching case to the shared code block.",
    tip: "Stacking cases is a clean way to handle multiple synonyms (e.g. `'yes'`, `'y'`, `'true'`)."
  },
  {
    id: "js-sw-05",
    topicId: "switch",
    topicName: "Switch Statements",
    question: "Why should you wrap case blocks in curly braces `{}` when declaring `let` or `const` variables inside them?",
    code: `switch(action) {
  case 'create': {
    const item = { id: 1 };
    break;
  }
  case 'update': {
    const item = { id: 2 };
    break;
  }
}`,
    options: [
      "Because the entire switch statement shares a single lexical scope; without `{}` blocks, declaring `const item` in multiple cases throws a SyntaxError: Identifier 'item' has already been declared.",
      "To speed up execution in Google V8 engine.",
      "Curly braces are mandatory for switch statements to compile.",
      "To convert the switch into an async function."
    ],
    correctAnswer: 0,
    explanation: "The whole `switch` block is a single scope. Without `{}` in each case, declaring the same `let` or `const` identifier in multiple cases causes a re-declaration SyntaxError. Enclosing cases in `{}` creates a separate block scope for each case.",
    tip: "Always wrap case logic in `{ ... }` if you declare `let` or `const` variables."
  },
  {
    id: "js-sw-06",
    topicId: "switch",
    topicName: "Switch Statements",
    question: "When is a `switch` statement preferred over multiple `if...else if` statements?",
    code: null,
    options: [
      "When evaluating complex boolean ranges (like `x > 10 && y < 20`).",
      "When comparing a single discrete variable or expression against multiple fixed values or enum constants.",
      "When working exclusively with asynchronous promises.",
      "When you need to mutate the DOM directly."
    ],
    correctAnswer: 1,
    explanation: "`switch` is ideal and readable when checking a single expression against a known list of discrete values (like user actions, status codes, commands, or modes).",
    tip: "Use `if/else` for ranges/complex conditions; use `switch` for discrete value matching."
  },

  // 12. Loops (7 questions)
  {
    id: "js-lp-01",
    topicId: "loops",
    topicName: "Loops (for, while, for..of, for..in)",
    question: "What is the primary difference between a `while` loop and a `do...while` loop?",
    code: `let x = 10;
do {
  console.log(x);
} while (x < 5);`,
    options: [
      "A `while` loop checks the condition before executing the body; a `do...while` loop executes the body at least ONCE before checking the condition.",
      "A `do...while` loop is asynchronous.",
      "A `while` loop cannot use the `break` keyword.",
      "There is no difference in execution behavior."
    ],
    correctAnswer: 0,
    explanation: "A `do...while` loop evaluates its condition at the bottom of the loop body, guaranteeing that the code block runs at least once even if the initial condition is false.",
    tip: "Use `do...while` when an action must happen at least once before validation (e.g. user prompts)."
  },
  {
    id: "js-lp-02",
    topicId: "loops",
    topicName: "Loops (for, while, for..of, for..in)",
    question: "What is the difference between `for...of` and `for...in` in JavaScript?",
    code: `const colors = ["red", "green", "blue"];`,
    options: [
      "`for...of` iterates over the VALUES of an iterable (arrays, strings, maps); `for...in` iterates over the enumerable PROPERTY KEYS (indexes/object keys).",
      "`for...in` is for arrays only; `for...of` is for objects only.",
      "`for...of` can only run 10 iterations maximum.",
      "`for...in` is deprecated in modern ES6+."
    ],
    correctAnswer: 0,
    explanation: "`for...of` yields the actual values (`'red'`, `'green'`, `'blue'`). `for...in` yields the property names/indexes (`'0'`, `'1'`, `'2'`). For objects, use `for...in` or `Object.entries()`; for arrays, use `for...of`.",
    tip: "Rule of thumb: `for...of` for array values; `for...in` for object keys."
  },
  {
    id: "js-lp-03",
    topicId: "loops",
    topicName: "Loops (for, while, for..of, for..in)",
    question: "How do `break` and `continue` differ within loop control?",
    code: `for (let i = 1; i <= 5; i++) {
  if (i === 3) continue;
  if (i === 5) break;
  console.log(i);
}`,
    options: [
      "`break` terminates the entire loop immediately; `continue` skips only the current iteration and proceeds to the next iteration.",
      "`continue` terminates the loop; `break` skips one step.",
      "Both keywords do the exact same thing.",
      "`continue` can only be used in `while` loops."
    ],
    correctAnswer: 0,
    explanation: "`continue` skips the remainder of iteration 3 (so 3 is not logged). `break` halts the loop at 5. The printed values are `1`, `2`, and `4`.",
    tip: "Break = exit loop completely; Continue = jump to next loop iteration."
  },
  {
    id: "js-lp-04",
    topicId: "loops",
    topicName: "Loops (for, while, for..of, for..in)",
    question: "What causes an 'Infinite Loop' in JavaScript, and what is its consequence?",
    code: `// Example:
let count = 0;
while (count < 5) {
  console.log(count);
  // Missing count++
}`,
    options: [
      "A loop condition that never becomes false, causing the JavaScript thread to hang, block the call stack, and freeze the browser tab/process.",
      "A loop that automatically switches to a background worker thread.",
      "A loop that executes once every 24 hours.",
      "A syntax error caught before execution."
    ],
    correctAnswer: 0,
    explanation: "If the termination condition of a loop is never met (e.g. counter not incremented), the loop continues indefinitely, consuming 100% CPU on the main thread and freezing the page.",
    tip: "Always ensure loop variables are updated towards the exit condition on every iteration."
  },
  {
    id: "js-lp-05",
    topicId: "loops",
    topicName: "Loops (for, while, for..of, for..in)",
    question: "What will be printed by this classic `for` loop with `var` vs `let` in asynchronous callbacks?",
    code: `for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100);
}`,
    options: [
      "`0`, `1`, `2`",
      "`3`, `3`, `3` because `var` is function-scoped and shares the single variable `i` across all iterations.",
      "`undefined`, `undefined`, `undefined`",
      "`0`, `0`, `0`"
    ],
    correctAnswer: 1,
    explanation: "Because `var` has function/global scope, all 3 callbacks close over the exact same variable `i`. By the time the `setTimeout` callbacks execute (after 100ms), the loop has finished and `i` is `3`. Using `let i = 0` solves this by creating a fresh binding per iteration.",
    tip: "Always use `let` in `for` loops so each iteration gets its own scoped variable."
  },
  {
    id: "js-lp-06",
    topicId: "loops",
    topicName: "Loops (for, while, for..of, for..in)",
    question: "What is the three-part structure of a standard JavaScript `for` loop?",
    code: `for (initialization; condition; afterthought) {
  // body
}`,
    options: [
      "Declaration, Execution, Termination",
      "Initialization (sets counter), Condition (evaluated before each turn), and Afterthought / Update (executed at end of each turn)",
      "Import, Component, Render",
      "Try, Catch, Finally"
    ],
    correctAnswer: 1,
    explanation: "A standard `for` loop contains: (1) Initialization (e.g., `let i = 0`), (2) Condition check (e.g., `i < arr.length`), and (3) Update expression (e.g., `i++`).",
    tip: "All three expressions are optional (`for(;;)`), but omitting them risks infinite loops."
  },
  {
    id: "js-lp-07",
    topicId: "loops",
    topicName: "Loops (for, while, for..of, for..in)",
    question: "What will `console.log(key)` output when looping over this object with `for...in`?",
    code: `const car = { make: "Toyota", year: 2024 };
for (const key in car) {
  console.log(key + ": " + car[key]);
}`,
    options: [
      "`make: Toyota` followed by `year: 2024`",
      "`0: make` followed by `1: year`",
      "`Toyota: make` followed by `2024: year`",
      "Throws a TypeError because objects are not iterable."
    ],
    correctAnswer: 0,
    explanation: "`for...in` iterates over the string property keys (`\"make\"`, `\"year\"`). `car[key]` uses bracket notation to access the property value (`\"Toyota\"`, `2024`).",
    tip: "Use `for...in` for objects, and access values using bracket notation `obj[key]`."
  },

  // 13. Functions & Declarations (7 questions)
  {
    id: "js-fn-01",
    topicId: "functions",
    topicName: "Functions & Declarations",
    question: "What is the primary difference between a Function Declaration and a Function Expression in terms of hoisting?",
    code: `// A: Function Declaration
sayHi();
function sayHi() { console.log("Hi"); }

// B: Function Expression
sayHello();
const sayHello = function() { console.log("Hello"); };`,
    options: [
      "Function Declarations are fully hoisted with their body, so they can be called before they are defined in code; Function Expressions assigned to `const`/`let` are not hoisted and throw a ReferenceError if called before declaration.",
      "Function Expressions are hoisted, but Function Declarations are not.",
      "Both can be called before their definitions without error.",
      "Function Expressions can only be used in Node.js."
    ],
    correctAnswer: 0,
    explanation: "Function declarations are hoisted in their entirety to the top of the scope. Function expressions are treated as variable assignments; accessing `const sayHello` before its declaration line triggers the Temporal Dead Zone.",
    tip: "Function declarations can be called anywhere in their enclosing scope."
  },
  {
    id: "js-fn-02",
    topicId: "functions",
    topicName: "Functions & Declarations",
    question: "What does it mean that functions are 'First-Class Citizens' (or First-Class Objects) in JavaScript?",
    code: null,
    options: [
      "Functions have top CPU execution priority in the browser engine.",
      "Functions can be stored in variables, passed as arguments to other functions, returned from functions, and assigned properties just like any other object.",
      "Functions cannot be passed into arrays.",
      "Functions can only be created by system administrators."
    ],
    correctAnswer: 1,
    explanation: "In JavaScript, functions are first-class citizens. They can be treated like any other value: assigned to variables, passed as arguments (callbacks), returned from functions (higher-order functions), and held in data structures.",
    tip: "First-class functions are what make functional programming and callbacks possible in JS."
  },
  {
    id: "js-fn-03",
    topicId: "functions",
    topicName: "Functions & Declarations",
    question: "What does a JavaScript function return by default if there is no explicit `return` statement?",
    code: `function doWork() {
  const result = 5 * 10;
}
console.log(doWork());`,
    options: [
      "`null`",
      "`undefined`",
      "`0`",
      "`50`"
    ],
    correctAnswer: 1,
    explanation: "If a function finishes execution without reaching a `return` statement with an expression, it implicitly returns `undefined`.",
    tip: "A function without `return` always yields `undefined`."
  },
  {
    id: "js-fn-04",
    topicId: "functions",
    topicName: "Functions & Declarations",
    question: "What happens when the `return` statement is executed inside a function?",
    code: `function checkStatus(isActive) {
  if (!isActive) {
    return "Inactive";
  }
  console.log("Processing active status...");
  return "Active";
}`,
    options: [
      "The function pauses and resumes later.",
      "The function terminates execution IMMEDIATELY and passes the specified value back to the caller; subsequent lines in the function are not executed.",
      "All remaining lines in the function continue running in background.",
      "The return statement is ignored if placed inside an `if` block."
    ],
    correctAnswer: 1,
    explanation: "The `return` statement immediately stops function execution and delivers the return value to the caller. Any code following `return` in that execution branch is unreachable.",
    tip: "Return stops execution dead in its tracks."
  },
  {
    id: "js-fn-05",
    topicId: "functions",
    topicName: "Functions & Declarations",
    question: "What is an Anonymous Function in JavaScript?",
    code: `const greet = function() {
  console.log("Hello!");
};`,
    options: [
      "A function that hides the user's IP address.",
      "A function created without an identifier name following the `function` keyword.",
      "A function that cannot accept parameters.",
      "A function that only runs in private browsing mode."
    ],
    correctAnswer: 1,
    explanation: "An anonymous function is a function without a specified name. They are commonly used as function expressions, callback arguments (e.g. in `setTimeout` or `arr.map()`), or IIFEs.",
    tip: "Anonymous functions are often passed directly into methods like `array.map(function(item) { ... })`."
  },
  {
    id: "js-fn-06",
    topicId: "functions",
    topicName: "Functions & Declarations",
    question: "What is an Immediately Invoked Function Expression (IIFE)?",
    code: `(function() {
  const secret = "42";
  console.log("IIFE executed!");
})();`,
    options: [
      "A function that runs automatically every 5 seconds.",
      "A JavaScript function that runs immediately as soon as it is defined, creating a private scope for its variables.",
      "A function that cannot return values.",
      "An asynchronous fetch handler."
    ],
    correctAnswer: 1,
    explanation: "An IIFE is a function expression enclosed in parentheses `(...)` followed by `()` that invokes it immediately. Before block scoping (`let`/`const`), IIFEs were the standard pattern for data encapsulation and preventing global namespace pollution.",
    tip: "IIFE syntax: `(function() { ... })();`."
  },
  {
    id: "js-fn-07",
    topicId: "functions",
    topicName: "Functions & Declarations",
    question: "What is a Higher-Order Function in JavaScript?",
    code: `function operate(a, b, operationFn) {
  return operationFn(a, b);
}`,
    options: [
      "A function that consumes more than 1MB of memory.",
      "A function that accepts one or more functions as arguments, or returns a function as its result.",
      "A function that must be defined inside a class.",
      "A built-in method on the Math object."
    ],
    correctAnswer: 1,
    explanation: "A higher-order function is any function that operates on other functions, either by taking them as arguments (e.g., `map`, `filter`, `addEventListener`) or by returning a new function.",
    tip: "Array methods like `map`, `filter`, and `reduce` are classic Higher-Order Functions."
  },

  // 14. Arrow Functions (7 questions)
  {
    id: "js-af-01",
    topicId: "arrow-functions",
    topicName: "Arrow Functions",
    question: "How does the `this` keyword behave inside an Arrow Function compared to a traditional function?",
    code: `const user = {
  name: "Sam",
  sayTraditional: function() { console.log(this.name); },
  sayArrow: () => { console.log(this.name); }
};`,
    options: [
      "Arrow functions bind `this` dynamically based on how they are called.",
      "Arrow functions do NOT have their own `this` binding; they lexically inherit `this` from the enclosing outer scope in which they were created.",
      "Arrow functions always bind `this` to `null`.",
      "Arrow functions cannot be used inside objects."
    ],
    correctAnswer: 1,
    explanation: "Arrow functions have lexical `this`. They do not have their own `this` context and instead retain the `this` value of their enclosing lexical context at the time of definition.",
    tip: "Do NOT use arrow functions as object methods if you need `this` to refer to the object."
  },
  {
    id: "js-af-02",
    topicId: "arrow-functions",
    topicName: "Arrow Functions",
    question: "What is an 'Implicit Return' in arrow function syntax?",
    code: `const square = x => x * x;`,
    options: [
      "A return statement that only triggers when an error happens.",
      "When curly braces `{}` are omitted in a single-expression arrow function body, the expression result is returned automatically without needing the `return` keyword.",
      "A function that returns `undefined` implicitly.",
      "A return type declared in TypeScript."
    ],
    correctAnswer: 1,
    explanation: "If an arrow function consists of a single expression without curly braces `{ }`, that expression is implicitly evaluated and returned (concise body). If `{ }` is used, an explicit `return` is required.",
    tip: "`const add = (a, b) => a + b;` returns the sum automatically."
  },
  {
    id: "js-af-03",
    topicId: "arrow-functions",
    topicName: "Arrow Functions",
    question: "How do you implicitly return an Object Literal from an arrow function without syntax error?",
    code: null,
    options: [
      "`const createUser = name => { name: name };`",
      "`const createUser = name => ({ name: name });`",
      "`const createUser = name => return { name: name };`",
      "`const createUser = name => [ name: name ];`"
    ],
    correctAnswer: 1,
    explanation: "Because JavaScript parses `{` as the start of a function block rather than an object literal, you must wrap the object in parentheses `({ key: val })` to force expression evaluation and implicit return.",
    tip: "Always wrap object returns in parentheses: `() => ({ key: value })`."
  },
  {
    id: "js-af-04",
    topicId: "arrow-functions",
    topicName: "Arrow Functions",
    question: "Can arrow functions be used as Constructor Functions with the `new` keyword?",
    code: `const Person = (name) => { this.name = name; };
const p = new Person("Alex");`,
    options: [
      "Yes, they work identical to regular function constructors.",
      "No, arrow functions do not have a `[[Construct]]` internal method or a `.prototype` property, and invoking them with `new` throws a `TypeError: Person is not a constructor`.",
      "Yes, but only in strict mode.",
      "Yes, but only if they return an object."
    ],
    correctAnswer: 1,
    explanation: "Arrow functions cannot be constructors. They lack `.prototype` and the internal `[[Construct]]` method, so `new ArrowFunc()` throws a `TypeError`.",
    tip: "Use ES6 `class` or regular `function` for constructors."
  },
  {
    id: "js-af-05",
    topicId: "arrow-functions",
    topicName: "Arrow Functions",
    question: "Do arrow functions have access to the special `arguments` object of their own?",
    code: `const showArgs = () => {
  console.log(arguments.length);
};`,
    options: [
      "Yes, all functions have their own `arguments` object.",
      "No, arrow functions do not bind their own `arguments` object; they inherit it from the nearest non-arrow enclosing function or throw a ReferenceError if in global scope.",
      "Yes, but only when called with more than 3 arguments.",
      "`arguments` is converted to an array automatically in arrow functions."
    ],
    correctAnswer: 1,
    explanation: "Arrow functions do not have their own `arguments` binding. To collect arguments in an arrow function, use modern Rest Parameters `(...args) => { ... }`.",
    tip: "Use `(...args) => { console.log(args); }` in arrow functions instead of `arguments`."
  },
  {
    id: "js-af-06",
    topicId: "arrow-functions",
    topicName: "Arrow Functions",
    question: "What is the cleanest single-parameter arrow function syntax?",
    code: null,
    options: [
      "`const double = (x) => { return x * 2; };`",
      "`const double = x => x * 2;`",
      "`const double = (x) => { x * 2 };`",
      "`const double = x : x * 2;`"
    ],
    correctAnswer: 1,
    explanation: "When an arrow function has exactly one parameter, the parentheses around the parameter can be omitted, and with a single expression, `{}` and `return` can also be omitted: `x => x * 2`.",
    tip: "0 parameters or 2+ parameters require parentheses: `() => ...` or `(a, b) => ...`."
  },
  {
    id: "js-af-07",
    topicId: "arrow-functions",
    topicName: "Arrow Functions",
    question: "In what scenario is an arrow function NOT recommended?",
    code: null,
    options: [
      "As a callback in `array.map()` or `array.filter()`.",
      "As an object method that needs to reference object properties via `this`, or as a DOM event listener that needs `this` to refer to the clicked element.",
      "Inside `setTimeout` callbacks.",
      "In promise `.then()` handlers."
    ],
    correctAnswer: 1,
    explanation: "Because arrow functions do not bind their own `this`, using them as object methods causes `this` to point to the outer/window object rather than the instance.",
    tip: "Use standard methods `method() { ... }` inside objects when accessing `this`."
  },

  // 15. Parameters and Return Values (7 questions)
  {
    id: "js-pr-01",
    topicId: "parameters-returns",
    topicName: "Parameters & Return Values",
    question: "How do Default Parameters work in JavaScript (ES6)?",
    code: `function greet(name = "Guest", role = "Viewer") {
  return "Welcome, " + name + " (" + role + ")";
}
console.log(greet(undefined, "Admin"));`,
    options: [
      "`Welcome, undefined (Admin)`",
      "`Welcome, Guest (Admin)`",
      "`Welcome, Guest (Viewer)`",
      "Throws a TypeError because the first argument is undefined."
    ],
    correctAnswer: 1,
    explanation: "Default parameters trigger when an argument is omitted OR explicitly passed as `undefined`. Passing `null` does NOT trigger the default (it stays `null`).",
    tip: "Passing `undefined` triggers the default parameter value; passing `null` does not."
  },
  {
    id: "js-pr-02",
    topicId: "parameters-returns",
    topicName: "Parameters & Return Values",
    question: "What are Rest Parameters (`...args`) and where must they appear in a function signature?",
    code: `function sum(first, ...rest) {
  return first + rest.reduce((acc, curr) => acc + curr, 0);
}`,
    options: [
      "Rest parameters collect remaining arguments into a real JavaScript Array and MUST be the very last parameter in the function signature.",
      "Rest parameters must be placed at the beginning of the parameter list.",
      "Rest parameters only accept numbers.",
      "A function can have multiple rest parameters: `(...a, ...b)`."
    ],
    correctAnswer: 0,
    explanation: "Rest parameters (`...args`) collect all trailing arguments into an actual Array instance. Syntax rules require the rest parameter to be the last parameter in the declaration.",
    tip: "`...rest` must be the final parameter: `(a, b, ...others)`."
  },
  {
    id: "js-pr-03",
    topicId: "parameters-returns",
    topicName: "Parameters & Return Values",
    question: "What is the key difference between the legacy `arguments` object and ES6 Rest Parameters (`...args`)?",
    code: null,
    options: [
      "`arguments` is an Array-like object (lacking array methods like `.map`, `.filter`, `.reduce`); Rest Parameters produce a real Array with all Array methods available.",
      "`arguments` only works in Node.js.",
      "Rest parameters cannot be used with numbers.",
      "`arguments` is faster and should always be used."
    ],
    correctAnswer: 0,
    explanation: "`arguments` is an array-like object with `.length` and indices, but lacks `.map()`, `.forEach()`, etc. Rest parameters (`...args`) create a true Array with full prototype methods.",
    tip: "Prefer modern rest parameters `(...args)` over legacy `arguments`."
  },
  {
    id: "js-pr-04",
    topicId: "parameters-returns",
    topicName: "Parameters & Return Values",
    question: "How are primitive types passed to functions in JavaScript versus objects/arrays?",
    code: `function modify(num, obj) {
  num = 100;
  obj.name = "Updated";
}
let a = 10;
let b = { name: "Original" };
modify(a, b);`,
    options: [
      "Both are passed by value with complete copies made.",
      "Primitives are passed by VALUE (a copy of the value is passed, so `a` remains `10`); Objects/Arrays are passed by REFERENCE (the memory reference is shared, so `b.name` becomes `'Updated'`).",
      "Primitives are mutated, objects are immutable.",
      "Both are completely immutable in function calls."
    ],
    correctAnswer: 1,
    explanation: "Primitives are copied by value (modifying `num` does not affect `a`). Objects are passed by reference sharing: mutating a property on `obj` modifies the original object in memory.",
    tip: "Mutating an object argument affects the original object outside the function!"
  },
  {
    id: "js-pr-05",
    topicId: "parameters-returns",
    topicName: "Parameters & Return Values",
    question: "How can a JavaScript function return multiple values cleanly?",
    code: null,
    options: [
      "Separate expressions with semicolons: `return a; b; c;`",
      "Package the values into an Object (`return { min, max, average };`) or an Array (`return [min, max, average];`) and destructure at the call site.",
      "Call the `return` statement multiple times in succession.",
      "JavaScript functions can only return a single primitive string."
    ],
    correctAnswer: 1,
    explanation: "Functions return a single entity. To return multiple values, bundle them into an object or array, which the caller can unpack via destructuring (`const { min, max } = getStats()`).",
    tip: "Object returns are especially clear because property names make caller destructuring self-documenting."
  },
  {
    id: "js-pr-06",
    topicId: "parameters-returns",
    topicName: "Parameters & Return Values",
    question: "What happens if a caller passes fewer arguments than the function has declared parameters (and no default values are set)?",
    code: `function multiply(a, b) {
  return a * b;
}
console.log(multiply(5));`,
    options: [
      "Throws a `WrongNumberOfArgumentsError`.",
      "The missing parameter `b` is assigned `undefined`, resulting in `5 * undefined = NaN`.",
      "The missing parameter defaults to `0`.",
      "The function returns `5`."
    ],
    correctAnswer: 1,
    explanation: "JavaScript does not enforce parameter counts. Missing arguments are assigned `undefined`. Multiplying a number by `undefined` evaluates to `NaN`.",
    tip: "Provide default parameter values (`b = 1`) to handle missing arguments safely."
  },
  {
    id: "js-pr-07",
    topicId: "parameters-returns",
    topicName: "Parameters & Return Values",
    question: "Can parameters be destructured directly inside the function parameter list?",
    code: `function displayUser({ name, age, country = "Unknown" }) {
  console.log(\`\${name} is \${age} from \${country}\`);
}`,
    options: [
      "Yes, parameter destructuring with default values is fully supported in modern JavaScript.",
      "No, destructuring can only happen inside the function body.",
      "Only in TypeScript.",
      "Only arrays can be destructured in parameters, not objects."
    ],
    correctAnswer: 0,
    explanation: "Destructuring directly in the parameter list is a clean, widely used idiom in modern JavaScript and React (for props). You can even supply defaults for specific destructured properties.",
    tip: "This pattern is ubiquitous in React components: `function Card({ title, subtitle }) { ... }`."
  },

  // 16. Closures & Encapsulation (8 questions)
  {
    id: "js-cl-01",
    topicId: "closures",
    topicName: "Closures & Encapsulation",
    question: "What is a Closure in JavaScript?",
    code: `function createCounter() {
  let count = 0;
  return function() {
    count++;
    return count;
  };
}
const counter = createCounter();
console.log(counter()); // 1
console.log(counter()); // 2`,
    options: [
      "A method that closes network sockets in Node.js.",
      "A function bundled together with references to its surrounding lexical environment, allowing the inner function to access variables of its outer function even after the outer function has finished executing.",
      "A loop that automatically exits after 100 iterations.",
      "A syntax error caused by unclosed parentheses."
    ],
    correctAnswer: 1,
    explanation: "A closure is formed when a function retains access to variables from its parent lexical scope even after that parent function has returned and exited the call stack.",
    tip: "Closures 'remember' the environment in which they were created."
  },
  {
    id: "js-cl-02",
    topicId: "closures",
    topicName: "Closures & Encapsulation",
    question: "How do closures enable Data Encapsulation / Private State in JavaScript?",
    code: `function createBankAccount(initialBalance) {
  let balance = initialBalance; // private variable
  return {
    deposit(amount) { balance += amount; },
    getBalance() { return balance; }
  };
}`,
    options: [
      "By converting variables to CSS classes.",
      "Variables declared inside the outer function cannot be accessed directly from the outside; only the returned inner methods (closures) can read or modify them.",
      "By encrypting the source code on the hard drive.",
      "By preventing the garbage collector from running."
    ],
    correctAnswer: 1,
    explanation: "External code has no direct reference to `balance`. The only way to interact with `balance` is through the exposed closure methods (`deposit`, `getBalance`), achieving true data encapsulation.",
    tip: "Closures allow you to create private state without special class keywords."
  },
  {
    id: "js-cl-03",
    topicId: "closures",
    topicName: "Closures & Encapsulation",
    question: "What is a Function Factory (Currying/Multiplier pattern) utilizing closures?",
    code: `function multiplyBy(factor) {
  return function(number) {
    return number * factor;
  };
}
const double = multiplyBy(2);
const triple = multiplyBy(3);
console.log(double(5)); // ?
console.log(triple(5)); // ?`,
    options: [
      "`10` and `15`",
      "`5` and `5`",
      "`undefined` and `undefined`",
      "`25` and `25`"
    ],
    correctAnswer: 0,
    explanation: "`multiplyBy(2)` returns an inner function that closes over `factor = 2`. Calling `double(5)` computes `5 * 2 = 10`. `triple(5)` computes `5 * 3 = 15`.",
    tip: "Function factories generate specialized functions configured with preset outer arguments."
  },
  {
    id: "js-cl-04",
    topicId: "closures",
    topicName: "Closures & Encapsulation",
    question: "What will happen if two independent counter instances are created using a closure factory?",
    code: `function makeCounter() {
  let count = 0;
  return () => ++count;
}
const c1 = makeCounter();
const c2 = makeCounter();
c1(); c1();
console.log(c1(), c2());`,
    options: [
      "`3` and `1` — each invocation of `makeCounter()` creates a new, independent lexical environment in memory.",
      "`3` and `3` — all counters share a single global count variable.",
      "`2` and `2`",
      "`undefined` and `undefined`"
    ],
    correctAnswer: 0,
    explanation: "Each call to `makeCounter()` allocates a distinct lexical scope and a separate `count` variable in heap memory. `c1` and `c2` do not interfere with each other.",
    tip: "Every factory call creates an isolated closure environment."
  },
  {
    id: "js-cl-05",
    topicId: "closures",
    topicName: "Closures & Encapsulation",
    question: "What is a potential downside or risk of misusing closures if references are retained indefinitely?",
    code: null,
    options: [
      "Memory leaks / increased memory consumption, because variables referenced by active closures cannot be garbage collected.",
      "CSS styles will fail to render.",
      "The DOM will delete all child nodes.",
      "JavaScript converts from dynamic to static typing."
    ],
    correctAnswer: 0,
    explanation: "As long as a closure reference exists, the JavaScript garbage collector cannot reclaim memory for variables in the closed-over scope. Unused event listeners or long-lived closures holding large objects can cause memory leaks.",
    tip: "Clean up unused event listeners and timer references to allow garbage collection."
  },
  {
    id: "js-cl-06",
    topicId: "closures",
    topicName: "Closures & Encapsulation",
    question: "What is Memoization and how do closures make it possible?",
    code: `function memoizedAdd() {
  const cache = {};
  return function(n) {
    if (n in cache) {
      return cache[n];
    }
    const result = n + 10;
    cache[n] = result;
    return result;
  };
}`,
    options: [
      "A technique of caching function results based on arguments using a closed-over `cache` object so expensive calculations aren't repeated.",
      "A method of converting code to WebAssembly.",
      "A way to prevent functions from returning values.",
      "A database indexing algorithm."
    ],
    correctAnswer: 0,
    explanation: "Memoization caches the output of function calls. The inner function maintains a closure over the `cache` object, allowing it to check and populate cached results across multiple invocations.",
    tip: "Memoization trades memory for speed by caching pure function outputs."
  },
  {
    id: "js-cl-07",
    topicId: "closures",
    topicName: "Closures & Encapsulation",
    question: "What will the following code output?",
    code: `function outer() {
  let x = 10;
  function inner() {
    x += 5;
    return x;
  }
  return inner;
}
const fn = outer();
console.log(fn());
console.log(fn());`,
    options: [
      "`15` then `15`",
      "`15` then `20`",
      "`10` then `10`",
      "`NaN` then `NaN`"
    ],
    correctAnswer: 1,
    explanation: "The closure maintains a mutable reference to `x`. The first call increments `x` from 10 to 15. The second call increments the same `x` from 15 to 20.",
    tip: "Closures maintain a live reference to the closed-over variable, not a static snapshot."
  },
  {
    id: "js-cl-08",
    topicId: "closures",
    topicName: "Closures & Encapsulation",
    question: "How do React Hooks like `useState` internally rely on closure mechanisms?",
    code: null,
    options: [
      "They preserve component state values between successive render cycles across functional component executions.",
      "They convert React into a class-based library.",
      "They disable JavaScript garbage collection completely.",
      "They render HTML directly on the server without client JS."
    ],
    correctAnswer: 0,
    explanation: "React functional components execute repeatedly on each render. Hooks leverage closures within React's internal dispatcher and fiber architecture to preserve state across render cycles.",
    tip: "Understanding closures is essential for mastering React Hooks and state."
  },

  // 17. Scope and Hoisting (7 questions)
  {
    id: "js-sh-01",
    topicId: "scope-hoisting",
    topicName: "Scope & Hoisting",
    question: "What are the three main types of scope in modern JavaScript?",
    code: null,
    options: [
      "Global Scope, Function (Local) Scope, and Block Scope",
      "Inline Scope, Internal Scope, External Scope",
      "Browser Scope, Server Scope, Database Scope",
      "Array Scope, Object Scope, String Scope"
    ],
    correctAnswer: 0,
    explanation: "JavaScript has: (1) Global Scope (accessible everywhere), (2) Function Scope (variables declared inside a function), and (3) Block Scope (variables declared with `let`/`const` inside `{}` blocks).",
    tip: "Block scope was introduced in ES6 with `let` and `const`."
  },
  {
    id: "js-sh-02",
    topicId: "scope-hoisting",
    topicName: "Scope & Hoisting",
    question: "What is Hoisting in JavaScript?",
    code: null,
    options: [
      "The process where variable and function declarations are conceptually moved to the top of their containing scope during the compilation/creation phase before code execution.",
      "The process of uploading files to a remote server.",
      "Moving DOM elements to the top of the HTML page.",
      "Converting synchronous code into promises."
    ],
    correctAnswer: 0,
    explanation: "During the creation phase, JavaScript engines register variable and function declarations in memory before executing statements line-by-line. This behavior is called hoisting.",
    tip: "Declarations are hoisted, but initializations/assignments remain in place."
  },
  {
    id: "js-sh-03",
    topicId: "scope-hoisting",
    topicName: "Scope & Hoisting",
    question: "What will `console.log(x)` output due to `var` hoisting?",
    code: `console.log(x);
var x = 50;
console.log(x);`,
    options: [
      "Throws a `ReferenceError` on line 1.",
      "`undefined` on line 1, then `50` on line 3.",
      "`50` on line 1, then `50` on line 3.",
      "`null` on line 1, then `50` on line 3."
    ],
    correctAnswer: 1,
    explanation: "Variables declared with `var` are hoisted and initialized to `undefined`. Thus accessing `x` before its assignment line evaluates to `undefined` rather than throwing an error.",
    tip: "`var` is hoisted with `undefined`; `let`/`const` are hoisted in the uninitialized TDZ."
  },
  {
    id: "js-sh-04",
    topicId: "scope-hoisting",
    topicName: "Scope & Hoisting",
    question: "What happens when you access a `let` or `const` variable before its declaration line?",
    code: `console.log(score);
let score = 95;`,
    options: [
      "Outputs `undefined`.",
      "Throws a `ReferenceError: Cannot access 'score' before initialization` due to the Temporal Dead Zone.",
      "Outputs `95`.",
      "Outputs `null`."
    ],
    correctAnswer: 1,
    explanation: "Variables declared with `let` and `const` enter the Temporal Dead Zone (TDZ) when their scope starts and cannot be read or written until the declaration statement is executed.",
    tip: "Never access `let` or `const` variables before declaring them."
  },
  {
    id: "js-sh-05",
    topicId: "scope-hoisting",
    topicName: "Scope & Hoisting",
    question: "What is Lexical Scoping (Static Scoping) in JavaScript?",
    code: `const name = "Global";
function outer() {
  const name = "Outer";
  function inner() {
    console.log(name);
  }
  return inner;
}
const test = outer();
test();`,
    options: [
      "Variable resolution depends on where functions are CALLED in runtime.",
      "Variable resolution is determined by the physical LOCATION of functions and blocks in the source code where they were DEFINED.",
      "Variables are only accessible inside HTML scripts.",
      "Scoping changes dynamically based on network speed."
    ],
    correctAnswer: 1,
    explanation: "In lexical scoping, scope resolution is fixed at author time based on how code is nested. `inner()` looks up its scope hierarchy where it was defined (`outer`, which has `name = 'Outer'`), logging `'Outer'`.",
    tip: "Lexical scope = where the function was written, not where it was invoked."
  },
  {
    id: "js-sh-06",
    topicId: "scope-hoisting",
    topicName: "Scope & Hoisting",
    question: "What is the Scope Chain?",
    code: null,
    options: [
      "The hierarchy of nested scopes searched from the innermost local scope outwards to the global scope to resolve variable references.",
      "A method of linking multiple `.js` files together.",
      "A CSS selector chain.",
      "A database relationship."
    ],
    correctAnswer: 0,
    explanation: "When a variable is used, JS looks first in the current local scope. If not found, it moves up to the outer parent scope, continuing outward along the scope chain until reaching the global scope (or throwing a ReferenceError).",
    tip: "Lookups only go outwards/upwards in the scope chain, never inwards."
  },
  {
    id: "js-sh-07",
    topicId: "scope-hoisting",
    topicName: "Scope & Hoisting",
    question: "What is the output of the following block scope test?",
    code: `{
  let a = 1;
  var b = 2;
}
console.log(typeof a, typeof b);`,
    options: [
      "`\"undefined\" \"number\"`",
      "`\"number\" \"number\"`",
      "`\"number\" \"undefined\"`",
      "Throws a SyntaxError"
    ],
    correctAnswer: 0,
    explanation: "`a` is block-scoped to `{}` and does not exist outside the block (so `typeof a === \"undefined\"`). `b` is declared with `var`, ignoring the block and leaking outside (so `typeof b === \"number\"`).",
    tip: "`let` is contained within `{}`; `var` escapes bare blocks."
  },

  // 18. Objects & Methods (7 questions)
  {
    id: "js-ob-01",
    topicId: "objects",
    topicName: "Objects & Methods",
    question: "When is Bracket Notation (`obj[key]`) REQUIRED instead of Dot Notation (`obj.key`)?",
    code: `const prop = "user-age";
const user = { "user-age": 25, role: "admin" };`,
    options: [
      "Only when accessing functions inside objects.",
      "When the property name contains hyphens, spaces, starts with a number, or when accessing a property dynamically via a variable.",
      "Bracket notation is obsolete and never required.",
      "Only when the object is frozen with `Object.freeze()`."
    ],
    correctAnswer: 1,
    explanation: "Dot notation requires valid identifier names (`user.role`). If the key has special characters (`\"user-age\"`), spaces (`\"first name\"`), or comes from a variable (`user[prop]`), bracket notation is mandatory.",
    tip: "Dynamic key: `obj[varName]`. Static valid key: `obj.propertyName`."
  },
  {
    id: "js-ob-02",
    topicId: "objects",
    topicName: "Objects & Methods",
    question: "What do `Object.keys()`, `Object.values()`, and `Object.entries()` return?",
    code: `const product = { id: 101, name: "Laptop", price: 999 };`,
    options: [
      "`Object.keys` returns an array of property names, `Object.values` returns an array of property values, and `Object.entries` returns an array of `[key, value]` pairs.",
      "They mutate the object into an array permanently.",
      "`Object.entries` returns a string of HTML elements.",
      "They return Promises that resolve to data."
    ],
    correctAnswer: 0,
    explanation: "These static Object methods return arrays for easy iteration: `Object.keys(product)` -> `['id', 'name', 'price']`, `Object.values(product)` -> `[101, 'Laptop', 999]`, `Object.entries(product)` -> `[['id', 101], ...]`.",
    tip: "Use `Object.entries(obj)` with `for...of` to iterate over both keys and values cleanly."
  },
  {
    id: "js-ob-03",
    topicId: "objects",
    topicName: "Objects & Methods",
    question: "How does the Object Spread Operator (`...`) work for shallow copying and merging objects?",
    code: `const base = { theme: "dark", showSidebar: true };
const userSettings = { ...base, showSidebar: false, fontSize: 16 };`,
    options: [
      "It creates a deep recursive clone of all nested objects.",
      "It shallow-copies properties from `base`, overriding `showSidebar` to `false` and adding `fontSize: 16`.",
      "It throws a TypeError because objects cannot be spread.",
      "It deletes `theme` from the resulting object."
    ],
    correctAnswer: 1,
    explanation: "The object spread operator (`{ ...a, ...b }`) copies all enumerable own properties into a new object. Latter properties override earlier matching keys. Note that this is a shallow copy (nested objects are copied by reference).",
    tip: "Spread creates a shallow copy: properties on the right override properties on the left."
  },
  {
    id: "js-ob-04",
    topicId: "objects",
    topicName: "Objects & Methods",
    question: "How do you rename a variable and provide a default value during Object Destructuring?",
    code: `const user = { username: "johndoe" };
const { username: accountName, role = "Guest" } = user;`,
    options: [
      "`accountName` is `'johndoe'` and `role` is `'Guest'`.",
      "`username` is `'accountName'` and `role` is `undefined`.",
      "Throws a SyntaxError.",
      "`accountName` is `\"Guest\"`."
    ],
    correctAnswer: 0,
    explanation: "In object destructuring: `propName: newVarName` renames the extracted variable, and `= defaultValue` provides a fallback if the property is undefined.",
    tip: "Syntax: `{ originalKey: aliasName = defaultVal } = obj`."
  },
  {
    id: "js-ob-05",
    topicId: "objects",
    topicName: "Objects & Methods",
    question: "What does the `delete` operator do in JavaScript?",
    code: `const user = { id: 1, tempToken: "xyz123" };
delete user.tempToken;
console.log(user.tempToken);`,
    options: [
      "Sets `user.tempToken = null`.",
      "Removes the `tempToken` property entirely from the object, so reading it returns `undefined` and `'tempToken' in user` is `false`.",
      "Deletes the entire `user` object from memory.",
      "Throws a ReferenceError."
    ],
    correctAnswer: 1,
    explanation: "`delete user.tempToken` removes the property and its value from the target object completely.",
    tip: "Use `delete obj.prop` to remove a property entirely from an object."
  },
  {
    id: "js-ob-06",
    topicId: "objects",
    topicName: "Objects & Methods",
    question: "What is Optional Chaining (`?.`) and what does it prevent?",
    code: `const user = { profile: null };
console.log(user.profile?.avatar?.url);`,
    options: [
      "It runs a while loop until the property appears.",
      "It safely accesses nested properties without throwing a `TypeError: Cannot read properties of null/undefined`, returning `undefined` instead if any link in the chain is nullish.",
      "It converts null values into empty strings automatically.",
      "It forces the browser to make a network request."
    ],
    correctAnswer: 1,
    explanation: "`?.` short-circuits and returns `undefined` if the reference before `?.` is `null` or `undefined`, preventing catastrophic runtime crashes when accessing deeply nested properties.",
    tip: "Use `user?.profile?.address` whenever nested data may be absent."
  },
  {
    id: "js-ob-07",
    topicId: "objects",
    topicName: "Objects & Methods",
    question: "What is the result of `Object.freeze(obj)` versus `Object.seal(obj)`?",
    code: null,
    options: [
      "`Object.freeze` prevents adding, deleting, OR modifying any property values; `Object.seal` prevents adding or deleting properties, but permits modifying existing property values.",
      "`Object.seal` is stronger than `Object.freeze`.",
      "Both methods do the exact same thing.",
      "`Object.freeze` only works on arrays."
    ],
    correctAnswer: 0,
    explanation: "`Object.freeze()` makes an object completely read-only (shallowly). `Object.seal()` prevents adding new properties and deleting existing ones, but allows existing writable property values to be updated.",
    tip: "Freeze = no adds, no deletes, no edits. Seal = no adds, no deletes, edits allowed."
  },

  // 19. Arrays & Array Methods (8 questions)
  {
    id: "js-ar-01",
    topicId: "arrays",
    topicName: "Arrays & Array Methods",
    question: "Which of the following array methods MUTATES (modifies) the original array in place?",
    code: null,
    options: [
      "`.map()`",
      "`.filter()`",
      "`.slice()`",
      "`.splice()`"
    ],
    correctAnswer: 3,
    explanation: "`.splice()`, `.push()`, `.pop()`, `.shift()`, `.unshift()`, `.sort()`, and `.reverse()` mutate the original array. Methods like `.slice()`, `.map()`, `.filter()`, and `.concat()` return a new array without modifying the original.",
    tip: "Remember: `slice` is non-mutating; `splice` is mutating."
  },
  {
    id: "js-ar-02",
    topicId: "arrays",
    topicName: "Arrays & Array Methods",
    question: "What is the output of `[1, 2, 3, 4].reduce((acc, curr) => acc + curr, 10)`?",
    code: null,
    options: [
      "`10`",
      "`20` (10 initial + 1 + 2 + 3 + 4)",
      "`24`",
      "`[11, 12, 13, 14]`"
    ],
    correctAnswer: 1,
    explanation: "`reduce` starts with the initial value `10`. Iteration 1: `10 + 1 = 11`. Iteration 2: `11 + 2 = 13`. Iteration 3: `13 + 3 = 16`. Iteration 4: `16 + 4 = 20`.",
    tip: "The second argument to `reduce(callback, initialValue)` sets the starting accumulator."
  },
  {
    id: "js-ar-03",
    topicId: "arrays",
    topicName: "Arrays & Array Methods",
    question: "How do `.map()` and `.forEach()` differ in their return values?",
    code: null,
    options: [
      "`.map()` creates and returns a NEW array containing the results of calling the function on every element; `.forEach()` always returns `undefined` and is used solely for side effects.",
      "`.forEach()` returns a new array; `.map()` returns `undefined`.",
      "Both return a new array.",
      "`.map()` mutates the original array in place."
    ],
    correctAnswer: 0,
    explanation: "`.map()` transforms elements and returns a new array of the same length. `.forEach()` executes a function for each element but always returns `undefined`.",
    tip: "Use `.map()` when transforming data into a new array; use `.forEach()` for side effects."
  },
  {
    id: "js-ar-04",
    topicId: "arrays",
    topicName: "Arrays & Array Methods",
    question: "What is the difference between `.find()` and `.filter()`?",
    code: `const nums = [5, 12, 8, 130, 44];`,
    options: [
      "`.find()` returns the FIRST element that satisfies the condition (or `undefined`); `.filter()` returns a NEW ARRAY containing ALL elements that satisfy the condition (or empty array `[]`).",
      "`.filter()` returns only the first item.",
      "`.find()` returns an array of booleans.",
      "Both always return arrays."
    ],
    correctAnswer: 0,
    explanation: "`.find(x => x > 10)` returns `12` (the single item). `.filter(x => x > 10)` returns `[12, 130, 44]` (an array of all matching items).",
    tip: "Use `find` for a single item; use `filter` for a subset list."
  },
  {
    id: "js-ar-05",
    topicId: "arrays",
    topicName: "Arrays & Array Methods",
    question: "What does `[10, 5, 40, 25].sort()` output in JavaScript if no comparator function is passed?",
    code: `const arr = [10, 5, 40, 25];
arr.sort();
console.log(arr);`,
    options: [
      "`[5, 10, 25, 40]`",
      "`[10, 25, 40, 5]` because elements are converted to strings and sorted according to UTF-16 code units (alphabetically) by default!",
      "`[40, 25, 10, 5]`",
      "Throws a TypeError."
    ],
    correctAnswer: 1,
    explanation: "By default, `.sort()` converts elements to strings and compares UTF-16 code units. Thus `\"10\"` comes before `\"25\"`, which comes before `\"40\"`, which comes before `\"5\"`! To sort numerically, pass `(a, b) => a - b`.",
    tip: "Always pass `(a, b) => a - b` when sorting numbers in JavaScript."
  },
  {
    id: "js-ar-06",
    topicId: "arrays",
    topicName: "Arrays & Array Methods",
    question: "What do `.some()` and `.every()` return?",
    code: `const scores = [80, 92, 45, 78];
const hasFailing = scores.some(s => s < 50);
const allPassed = scores.every(s => s >= 50);`,
    options: [
      "`hasFailing` is `true` (since 45 < 50) and `allPassed` is `false`.",
      "`hasFailing` is `[45]` and `allPassed` is `[]`.",
      "Both return numbers.",
      "Both return `true`."
    ],
    correctAnswer: 0,
    explanation: "`.some()` returns `true` if AT LEAST ONE element passes the test. `.every()` returns `true` ONLY IF ALL elements pass the test. Both return booleans.",
    tip: "Some = OR logic (at least one); Every = AND logic (all items)."
  },
  {
    id: "js-ar-07",
    topicId: "arrays",
    topicName: "Arrays & Array Methods",
    question: "How does `Array.prototype.includes()` differ from `Array.prototype.indexOf()` when checking for `NaN`?",
    code: `const list = [1, NaN, 3];
console.log(list.includes(NaN));
console.log(list.indexOf(NaN));`,
    options: [
      "`list.includes(NaN)` is `true`, whereas `list.indexOf(NaN)` is `-1` (because `NaN !== NaN` in strict equality).",
      "Both find `NaN` successfully at index 1.",
      "Both return `false` / `-1`.",
      "`includes` throws a TypeError on NaN."
    ],
    correctAnswer: 0,
    explanation: "`includes()` uses the SameValueZero algorithm, which correctly matches `NaN`. `indexOf()` uses strict equality `===`, where `NaN === NaN` is false, returning `-1`.",
    tip: "Use `.includes(val)` to check for membership, especially when checking for NaN."
  },
  {
    id: "js-ar-08",
    topicId: "arrays",
    topicName: "Arrays & Array Methods",
    question: "What is Array Destructuring and rest syntax in `const [first, second, ...rest] = [10, 20, 30, 40, 50]`?",
    code: null,
    options: [
      "`first = 10`, `second = 20`, and `rest = [30, 40, 50]`",
      "`first = [10]`, `second = [20]`, `rest = 30`",
      "Throws an error.",
      "`rest = 50`"
    ],
    correctAnswer: 0,
    explanation: "Array destructuring unpacks values by position. `first` receives 10, `second` receives 20, and `...rest` gathers all remaining items into a new array `[30, 40, 50]`.",
    tip: "Array destructuring unpacks by index order; object destructuring unpacks by key name."
  },

  // 20. DOM Manipulation (7 questions)
  {
    id: "js-dom-01",
    topicId: "dom-manipulation",
    topicName: "DOM Manipulation",
    question: "What is the Document Object Model (DOM)?",
    code: null,
    options: [
      "A database management system built into browsers.",
      "An object-oriented tree representation of an HTML document in browser memory that JavaScript can read and manipulate.",
      "A stylesheet compiler used for rendering CSS.",
      "A proprietary Google Chrome API."
    ],
    correctAnswer: 1,
    explanation: "The DOM represents the HTML document as a structured hierarchy of nodes/objects. JavaScript interacts with this tree via DOM APIs to update content, structure, and styling dynamically.",
    tip: "The DOM bridges JavaScript code and the visible web page."
  },
  {
    id: "js-dom-02",
    topicId: "dom-manipulation",
    topicName: "DOM Manipulation",
    question: "What is the key difference between `document.querySelector()` and `document.querySelectorAll()`?",
    code: `const firstBtn = document.querySelector(".btn");
const allBtns = document.querySelectorAll(".btn");`,
    options: [
      "`querySelector` returns the FIRST matching Element (or `null`); `querySelectorAll` returns a static `NodeList` containing ALL matching elements.",
      "`querySelectorAll` returns an Array, while `querySelector` returns an Object.",
      "`querySelector` only searches by ID.",
      "Both return identical results."
    ],
    correctAnswer: 0,
    explanation: "`querySelector` stops after finding the first matching element. `querySelectorAll` searches the entire subtree and returns a static `NodeList` of all matching elements.",
    tip: "Use `querySelector` for a single element; `querySelectorAll` for multiple elements."
  },
  {
    id: "js-dom-03",
    topicId: "dom-manipulation",
    topicName: "DOM Manipulation",
    question: "What is the difference between `textContent` and `innerHTML` when setting element content?",
    code: `const el = document.getElementById("box");
// Case A: el.textContent = "<strong>Hello</strong>";
// Case B: el.innerHTML = "<strong>Hello</strong>";`,
    options: [
      "`textContent` treats input as plain text and escapes HTML tags (preventing XSS vulnerabilities); `innerHTML` parses HTML tags and renders bold elements.",
      "`textContent` is deprecated in modern browsers.",
      "`innerHTML` is faster and completely safe from security vulnerabilities.",
      "Both render bold text on screen."
    ],
    correctAnswer: 0,
    explanation: "`textContent` sets the textual content safely without parsing HTML tags. `innerHTML` parses strings as HTML markup, which can introduce Cross-Site Scripting (XSS) if used with untrusted user input.",
    tip: "Use `textContent` when displaying plain text to prevent XSS attacks."
  },
  {
    id: "js-dom-04",
    topicId: "dom-manipulation",
    topicName: "DOM Manipulation",
    question: "Which `classList` method adds a CSS class if it is missing and removes it if it is present?",
    code: `element.classList.toggle("active");`,
    options: [
      "`element.classList.switch('active')`",
      "`element.classList.toggle('active')`",
      "`element.classList.flip('active')`",
      "`element.classList.change('active')`"
    ],
    correctAnswer: 1,
    explanation: "`classList.toggle('className')` adds the class if not currently present on the element and removes it if it already exists, returning a boolean indicating whether the class is now present.",
    tip: "`classList.toggle('active')` is clean for dropdowns, modals, and accordion menus."
  },
  {
    id: "js-dom-05",
    topicId: "dom-manipulation",
    topicName: "DOM Manipulation",
    question: "What is the standard, modern procedure to create a new `<div>`, set its text, and insert it into a container?",
    code: null,
    options: [
      "`const div = document.createElement('div'); div.textContent = 'New item'; container.appendChild(div);`",
      "`container.write('<div>New item</div>');`",
      "`const div = new DOMElement('div'); container.insert(div);`",
      "`document.addTag('div', 'New item');`"
    ],
    correctAnswer: 0,
    explanation: "The standard DOM API pattern uses `document.createElement('tagName')` to instantiate the element in memory, configures its properties (`textContent`, `className`), and appends it to a parent with `appendChild()` or `append()`.",
    tip: "`document.createElement` + `parent.append(element)` is the standard DOM creation flow."
  },
  {
    id: "js-dom-06",
    topicId: "dom-manipulation",
    topicName: "DOM Manipulation",
    question: "How do you remove an element directly from the DOM in modern browsers?",
    code: `const alertBox = document.querySelector(".alert");`,
    options: [
      "`alertBox.remove();`",
      "`alertBox.delete();`",
      "`document.erase(alertBox);`",
      "`alertBox.style.display = 'none'` (which only hides it, not removes from DOM)"
    ],
    correctAnswer: 0,
    explanation: "Modern DOM APIs support `element.remove()`, which detaches the element from its parent node in the DOM tree.",
    tip: "`element.remove()` directly deletes the node from the DOM."
  },
  {
    id: "js-dom-07",
    topicId: "dom-manipulation",
    topicName: "DOM Manipulation",
    question: "How do you traverse from a child element to its immediate parent node in the DOM?",
    code: `const item = document.querySelector(".list-item");
const parent = item.parentElement;`,
    options: [
      "`item.parentElement` or `item.parentNode`",
      "`item.getRoot()`",
      "`item.previousElement`",
      "`document.findParent(item)`"
    ],
    correctAnswer: 0,
    explanation: "`element.parentElement` returns the direct parent Element node (or `null` if the element has no parent or parent is not an Element).",
    tip: "Use `parentElement` to move up, `children` to move down, and `nextElementSibling` to move across."
  }
];
