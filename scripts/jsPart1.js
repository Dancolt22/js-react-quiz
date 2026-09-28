export const jsPart1 = [
  // 1. Coding Principles & Best Practices (7 questions)
  {
    id: "js-cp-01",
    topicId: "coding-principles",
    topicName: "Coding Principles & Best Practices",
    question: "What does the DRY software engineering principle stand for, and what is its primary objective?",
    code: null,
    options: [
      "Don't Repeat Yourself - avoid duplicate logic by extracting shared code into reusable functions.",
      "Do Review Yourself - continuously test and debug code manually.",
      "Data Redundancy Yield - store identical data across multiple variables for backup.",
      "Dynamic Return Yield - always return values dynamically from every function."
    ],
    correctAnswer: 0,
    explanation: "DRY stands for 'Don't Repeat Yourself'. It emphasizes that if you write the exact same logic more than once, you should extract it into a reusable function or module to keep code maintainable and reduce bug surface.",
    tip: "If you find yourself copying and pasting lines of code, it is time to write a helper function."
  },
  {
    id: "js-cp-02",
    topicId: "coding-principles",
    topicName: "Coding Principles & Best Practices",
    question: "According to the Single Responsibility Principle, how should functions be designed?",
    code: `// Example function signature
function handleUserData(user) {
  // validates, saves to DB, emails user, logs metrics
}`,
    options: [
      "Every function should do as many related tasks as possible to reduce the total number of functions.",
      "Every function should do exactly ONE thing and do it well; if a function has multiple jobs, split it up.",
      "Functions should only be written if they contain fewer than 3 lines of code.",
      "Functions must always mutate their incoming arguments directly."
    ],
    correctAnswer: 1,
    explanation: "The Single Responsibility Principle (SRP) dictates that a function or module should have one, and only one, reason to change. Each function should perform a single well-defined task (e.g., validateUser, saveUser, sendEmail).",
    tip: "A function name containing 'And' (like saveAndEmailUser) often hints at multiple responsibilities."
  },
  {
    id: "js-cp-03",
    topicId: "coding-principles",
    topicName: "Coding Principles & Best Practices",
    question: "What does the KISS principle advocate in software development?",
    code: null,
    options: [
      "Keep It Structured & Synchronous - avoid asynchronous code whenever possible.",
      "Keep It Simple, Stupid - the simplest solution that works is usually the best and easiest to maintain.",
      "Key Instruction System Standard - enforce strictly 80-character line lengths.",
      "Knowledge In Source Systems - embed full documentation in every comment block."
    ],
    correctAnswer: 1,
    explanation: "KISS stands for 'Keep It Simple, Stupid'. It reminds developers that overly clever, intricate code is harder to read, test, and debug. Simple, clear code is always superior to needlessly complex code.",
    tip: "Simplicity is a feature: clean, direct code is easier to maintain than clever one-liners."
  },
  {
    id: "js-cp-04",
    topicId: "coding-principles",
    topicName: "Coding Principles & Best Practices",
    question: "What does the YAGNI principle caution developers against?",
    code: null,
    options: [
      "Writing automated tests before implementing business logic.",
      "Writing code for hypothetical features you THINK you might need in the future instead of building what is currently needed.",
      "Using third-party libraries from npm packages.",
      "Declaring constants with const instead of let."
    ],
    correctAnswer: 1,
    explanation: "YAGNI stands for 'You Aren't Gonna Need It'. It warns against over-engineering or adding extra flexibility and hypothetical features that aren't currently required, which wastes time and complicates codebases.",
    tip: "Only write what you need right now to satisfy actual current requirements."
  },
  {
    id: "js-cp-05",
    topicId: "coding-principles",
    topicName: "Coding Principles & Best Practices",
    question: "What characterizes a 'Pure Function' in JavaScript?",
    code: `function add(a, b) {
  return a + b;
}`,
    options: [
      "It must be an arrow function that returns an object literal.",
      "Given the same inputs, it always returns the exact same output and produces no side effects (like mutating outer variables or calling APIs).",
      "It only accepts string arguments and never throws errors.",
      "It executes asynchronously using the async keyword."
    ],
    correctAnswer: 1,
    explanation: "A pure function is deterministic: given the same arguments, it will always return the exact same output without causing observable side effects (such as modifying global state, modifying parameter objects, or altering the DOM).",
    tip: "Pure functions are easy to unit-test and predictable to reason about."
  },
  {
    id: "js-cp-06",
    topicId: "coding-principles",
    topicName: "Coding Principles & Best Practices",
    question: "What is the recommended best practice regarding code comments in JavaScript?",
    code: `// BAD:
let i = 0; // set i to 0

// GOOD:
// Offset by 1 because the third-party API uses 1-based pagination`,
    options: [
      "Comment every single line explaining what the JavaScript syntax is doing.",
      "Comments should primarily explain the 'WHY' (intent, edge cases, business decisions) rather than the obvious 'WHAT' that readable code already shows.",
      "Never write comments under any circumstances because code is self-documenting.",
      "Write comments only in HTML files, never inside .js files."
    ],
    correctAnswer: 1,
    explanation: "Good comments explain the rationale ('WHY' a specific decision or workaround was made) rather than restating the obvious syntax ('WHAT' the code does). Self-descriptive naming should make the syntax clear.",
    tip: "Don't explain that a counter is incrementing; explain why the counter needs to start at a specific number."
  },
  {
    id: "js-cp-07",
    topicId: "coding-principles",
    topicName: "Coding Principles & Best Practices",
    question: "Which of the following identifier names best follows JavaScript clean naming conventions for a boolean flag checking if a user is authenticated?",
    code: null,
    options: [
      "let flag1 = true;",
      "let isAuthenticated = true;",
      "let checkUserAuthenticationStatusData = true;",
      "let AUTH_BOOL = true;"
    ],
    correctAnswer: 1,
    explanation: "Boolean variables should be named using prefixes like 'is', 'has', 'can', or 'should' in camelCase (e.g., isAuthenticated, hasPermission, isLoading), making conditional checks read naturally like English (`if (isAuthenticated)`).",
    tip: "Prefixing booleans with is/has makes `if (isActive)` read like standard English."
  },

  // 2. Pseudocode & Algorithmic Thinking (6 questions)
  {
    id: "js-pl-01",
    topicId: "pseudocode-logic",
    topicName: "Pseudocode & Algorithmic Thinking",
    question: "What is the primary purpose of writing pseudocode before writing actual JavaScript code?",
    code: null,
    options: [
      "To compile code into machine-executable binary faster.",
      "To map out the logic and step-by-step problem-solving strategy in plain human-readable terms without worrying about language syntax.",
      "To automatically validate security vulnerabilities in the DOM.",
      "To replace standard JavaScript comments in production files."
    ],
    correctAnswer: 1,
    explanation: "Pseudocode is an informal, high-level description of an algorithm. It allows developers to concentrate on problem logic, step sequence, and edge cases before getting bogged down in syntax errors.",
    tip: "Pseudocode is for human clarity, not machine compilation."
  },
  {
    id: "js-pl-02",
    topicId: "pseudocode-logic",
    topicName: "Pseudocode & Algorithmic Thinking",
    question: "What is an 'Algorithm' in computer science and software development?",
    code: null,
    options: [
      "A specific framework developed by Mozilla for DOM manipulation.",
      "An unambiguous, step-by-step procedure or set of rules designed to solve a specific problem or perform a computation.",
      "A JavaScript method that only executes on arrays.",
      "A hardware component that stores variable references."
    ],
    correctAnswer: 1,
    explanation: "An algorithm is a finite sequence of precise, well-defined computer-implementable instructions to solve a problem or perform a computation.",
    tip: "Every recipe, sorting technique, or calculation logic is an algorithm."
  },
  {
    id: "js-pl-03",
    topicId: "pseudocode-logic",
    topicName: "Pseudocode & Algorithmic Thinking",
    question: "When applying problem decomposition to calculate the total price of a shopping cart including tax and discount, what is the best first step?",
    code: null,
    options: [
      "Write a 50-line single function that executes all mathematical operations in one expression.",
      "Break the problem down into smaller sub-tasks: sum item prices, apply coupon discount, compute tax on discounted subtotal, and return final sum.",
      "Convert all numbers to strings immediately.",
      "Wrap the entire script in a try...catch block before writing any logic."
    ],
    correctAnswer: 1,
    explanation: "Decomposition is the process of breaking a complex problem into smaller, manageable, and independently testable sub-problems.",
    tip: "Divide and conquer: solve small sub-problems, then compose them."
  },
  {
    id: "js-pl-04",
    topicId: "pseudocode-logic",
    topicName: "Pseudocode & Algorithmic Thinking",
    question: "In a flowchart representing algorithmic logic, what standard shape is traditionally used for a Decision (conditional branch)?",
    code: null,
    options: [
      "Oval / Rounded Rectangle (Start/End)",
      "Diamond (Decision / Branching condition)",
      "Rectangle (Process / Execution step)",
      "Parallelogram (Input / Output)"
    ],
    correctAnswer: 1,
    explanation: "In standard flowchart notation: Diamonds represent Decisions (if/else checks), Rectangles represent Processes (actions/calculations), Parallelograms represent Input/Output, and Ovals represent Start/Stop.",
    tip: "A diamond shape always has at least two exit paths (True/False or Yes/No)."
  },
  {
    id: "js-pl-05",
    topicId: "pseudocode-logic",
    topicName: "Pseudocode & Algorithmic Thinking",
    question: "Consider this pseudocode algorithm. What will be the final value of counter?\n\nSET counter = 0\nFOR each number IN [3, 8, 2, 9, 4]:\n  IF number > 5 THEN\n    SET counter = counter + 1\nEND FOR",
    code: null,
    options: [
      "5",
      "2",
      "3",
      "8"
    ],
    correctAnswer: 1,
    explanation: "The algorithm iterates through [3, 8, 2, 9, 4] and increments counter only when number > 5. The numbers greater than 5 are 8 and 9 (2 numbers). Thus counter = 2.",
    tip: "Trace the condition for each element: 3(No), 8(Yes), 2(No), 9(Yes), 4(No)."
  },
  {
    id: "js-pl-06",
    topicId: "pseudocode-logic",
    topicName: "Pseudocode & Algorithmic Thinking",
    question: "Why is considering 'Edge Cases' crucial when designing algorithms?",
    code: null,
    options: [
      "Edge cases make code execute in CSS instead of JavaScript.",
      "Edge cases test boundary conditions (e.g., empty arrays, null inputs, negative numbers, 0, very large values) that often break naive solutions.",
      "Edge cases are only needed when using TypeScript.",
      "Edge cases prevent the browser from loading fonts."
    ],
    correctAnswer: 1,
    explanation: "Edge cases represent unusual or boundary inputs (like an empty array, 0, negative values, null/undefined inputs) that algorithms must handle gracefully to avoid crashes or unexpected errors in production.",
    tip: "Always ask: 'What happens if the input is empty, null, or zero?'"
  },

  // 3. Math Foundations for Programming (7 questions)
  {
    id: "js-mf-01",
    topicId: "math-foundations",
    topicName: "Math Foundations for Programming",
    question: "What is the result of the modulo operation `17 % 5` in JavaScript, and what is its primary use case?",
    code: `const result = 17 % 5;
console.log(result);`,
    options: [
      "`3.4` (the division quotient)",
      "`2` (the remainder left over after dividing 17 by 5)",
      "`3` (the rounded integer division)",
      "`85` (multiplication result)"
    ],
    correctAnswer: 1,
    explanation: "The `%` operator returns the integer remainder of division. 17 divided by 5 is 3 with a remainder of 2. Modulo is commonly used for checking even/odd numbers (`n % 2 === 0`) and cycling array indices.",
    tip: "`n % 2 === 0` means even, `n % 2 !== 0` means odd."
  },
  {
    id: "js-mf-02",
    topicId: "math-foundations",
    topicName: "Math Foundations for Programming",
    question: "What is the value of `result` following standard operator precedence (PEMDAS)?",
    code: `const result = 10 + 5 * 2 ** 3;`,
    options: [
      "120",
      "50",
      "90",
      "1000"
    ],
    correctAnswer: 1,
    explanation: "Exponentiation `**` has highest precedence: `2 ** 3 = 8`. Next is multiplication: `5 * 8 = 40`. Finally addition: `10 + 40 = 50`.",
    tip: "Precedence order: Parentheses -> Exponents `**` -> Multiplication/Division -> Addition/Subtraction."
  },
  {
    id: "js-mf-03",
    topicId: "math-foundations",
    topicName: "Math Foundations for Programming",
    question: "How do `Math.floor()`, `Math.ceil()`, and `Math.round()` differ when given `4.6` and `4.2`?",
    code: null,
    options: [
      "All three methods return `5` for any positive float.",
      "`Math.floor(4.6)` = 4, `Math.ceil(4.2)` = 5, `Math.round(4.6)` = 5, and `Math.round(4.2)` = 4.",
      "`Math.floor` rounds to nearest integer, while `Math.round` always rounds down.",
      "`Math.ceil` always truncates decimals towards zero."
    ],
    correctAnswer: 1,
    explanation: "`Math.floor()` always rounds down to the nearest integer (4.6 -> 4). `Math.ceil()` always rounds up (4.2 -> 5). `Math.round()` rounds to the nearest integer (4.6 -> 5, 4.2 -> 4).",
    tip: "Floor = ground (down), Ceil = ceiling (up), Round = standard nearest integer."
  },
  {
    id: "js-mf-04",
    topicId: "math-foundations",
    topicName: "Math Foundations for Programming",
    question: "Which expression generates a random integer between 1 and 10 (inclusive)?",
    code: null,
    options: [
      "Math.random() * 10;",
      "Math.floor(Math.random() * 10) + 1;",
      "Math.round(Math.random() * 9);",
      "Math.ceil(Math.random() * 11);"
    ],
    correctAnswer: 1,
    explanation: "`Math.random()` returns a float in the range `[0, 1)`. Multiplying by 10 gives `[0, 9.999...)`. `Math.floor()` turns that into an integer from 0 to 9. Adding 1 shifts the range to `1` through `10` inclusive.",
    tip: "Formula for [min, max]: `Math.floor(Math.random() * (max - min + 1)) + min`."
  },
  {
    id: "js-mf-05",
    topicId: "math-foundations",
    topicName: "Math Foundations for Programming",
    question: "What does `Math.trunc(-4.9)` return compared to `Math.floor(-4.9)` in JavaScript?",
    code: null,
    options: [
      "`Math.trunc(-4.9)` returns `-4`, while `Math.floor(-4.9)` returns `-5`.",
      "Both return `-5`.",
      "Both return `-4`.",
      "`Math.trunc` throws a RangeError for negative numbers."
    ],
    correctAnswer: 0,
    explanation: "`Math.trunc()` removes fractional digits, truncating towards zero (`-4.9` becomes `-4`). `Math.floor()` always rounds down towards negative infinity (`-4.9` becomes `-5`).",
    tip: "Trunc cuts the fraction off; Floor moves further down the number line."
  },
  {
    id: "js-mf-06",
    topicId: "math-foundations",
    topicName: "Math Foundations for Programming",
    question: "What is the return value of `Math.max(14, 28, 9, 82, 3)`?",
    code: null,
    options: [
      "14",
      "82",
      "3",
      "NaN"
    ],
    correctAnswer: 1,
    explanation: "`Math.max()` takes multiple numeric arguments and returns the largest number among them, which is 82.",
    tip: "To find the max in an array `arr`, use `Math.max(...arr)`."
  },
  {
    id: "js-mf-07",
    topicId: "math-foundations",
    topicName: "Math Foundations for Programming",
    question: "What is the result of `Math.abs(-25)` and `Math.sqrt(64)`?",
    code: null,
    options: [
      "`-25` and `8`",
      "`25` and `8`",
      "`25` and `16`",
      "`0` and `8`"
    ],
    correctAnswer: 1,
    explanation: "`Math.abs()` returns the non-negative absolute magnitude of a number (`Math.abs(-25) === 25`). `Math.sqrt(64)` returns the positive square root of 64, which is 8.",
    tip: "Absolute value converts negative numbers to their positive counterpart."
  },

  // 4. Introduction to Programming with JavaScript (6 questions)
  {
    id: "js-intro-01",
    topicId: "intro-javascript",
    topicName: "Introduction to JavaScript",
    question: "What is ECMAScript in relation to JavaScript?",
    code: null,
    options: [
      "A database software developed by Oracle.",
      "The official international standard specification that defines the JavaScript language.",
      "A CSS preprocessor used for styling web apps.",
      "A Chrome browser plugin for debugging."
    ],
    correctAnswer: 1,
    explanation: "ECMAScript (standardized under ECMA-262) is the official specification of the language. JavaScript is an implementation of the ECMAScript standard.",
    tip: "ES6 (ECMAScript 2015) was a major milestone that introduced let, const, arrow functions, and classes."
  },
  {
    id: "js-intro-02",
    topicId: "intro-javascript",
    topicName: "Introduction to JavaScript",
    question: "Who created JavaScript, and in what year was it originally introduced in Netscape Navigator?",
    code: null,
    options: [
      "Tim Berners-Lee in 1989",
      "Brendan Eich in 1995",
      "James Gosling in 1991",
      "Guido van Rossum in 1990"
    ],
    correctAnswer: 1,
    explanation: "Brendan Eich created JavaScript in 1995 while working at Netscape Communications. It was initially named Mocha, then LiveScript, before being branded as JavaScript.",
    tip: "Brendan Eich wrote the initial prototype in just 10 days."
  },
  {
    id: "js-intro-03",
    topicId: "intro-javascript",
    topicName: "Introduction to JavaScript",
    question: "What is Node.js and how does it relate to browser-based JavaScript?",
    code: null,
    options: [
      "Node.js is a replacement for HTML inside the browser.",
      "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JS outside the browser using Google Chrome's V8 engine.",
      "Node.js is a proprietary compiler that converts JavaScript into Python code.",
      "Node.js only runs on mobile devices running iOS."
    ],
    correctAnswer: 1,
    explanation: "Node.js allows JavaScript to run server-side (outside the web browser) on servers and local machines, using the high-performance V8 engine with access to the file system and network APIs.",
    tip: "Browser JS has `window` and DOM; Node.js has `global`, `process`, and `fs`."
  },
  {
    id: "js-intro-04",
    topicId: "intro-javascript",
    topicName: "Introduction to JavaScript",
    question: "Which of the following objects is accessible in browser JavaScript environments but NOT in standard Node.js environments?",
    code: null,
    options: [
      "Math",
      "document (the DOM tree)",
      "JSON",
      "console"
    ],
    correctAnswer: 1,
    explanation: "`document` (and `window`) is part of the Web Browser Web APIs. In standard server-side Node.js environments, there is no HTML document or DOM tree, so `document` is undefined.",
    tip: "Node.js has no browser UI, hence no `document` or `window`."
  },
  {
    id: "js-intro-05",
    topicId: "intro-javascript",
    topicName: "Introduction to JavaScript",
    question: "What does the `console.warn()` method do when executed in a browser developer environment?",
    code: `console.warn("API key is expiring soon!");`,
    options: [
      "Halts the execution of the JavaScript thread immediately.",
      "Outputs a yellow/amber warning message with a warning icon and stack trace in the browser developer tools console.",
      "Displays an alert dialog box that blocks the user's screen.",
      "Deletes the variable from memory."
    ],
    correctAnswer: 1,
    explanation: "`console.warn()` formats and outputs a warning message in the console, typically highlighted in yellow/orange with an exclamation icon, without interrupting code execution.",
    tip: "Use `console.error` for errors, `console.warn` for deprecations/alerts, and `console.log` for general output."
  },
  {
    id: "js-intro-06",
    topicId: "intro-javascript",
    topicName: "Introduction to JavaScript",
    question: "Why is JavaScript referred to as a 'Single-Threaded' programming language?",
    code: null,
    options: [
      "It can only run on single-core CPU processors.",
      "It has only one main Call Stack and executes one command/instruction at a time sequentially.",
      "It can only have one function per script file.",
      "It only allows one network request per web page."
    ],
    correctAnswer: 1,
    explanation: "JavaScript has a single call stack in its execution thread, meaning it can only process one statement at a given moment in time. Concurrency is achieved through the event loop and Web APIs.",
    tip: "Single-threaded = one task executed at a time on the main thread."
  },

  // 5. JavaScript Syntax and Statements (6 questions)
  {
    id: "js-ss-01",
    topicId: "syntax-statements",
    topicName: "Syntax, Statements & Comments",
    question: "What is Automatic Semicolon Insertion (ASI) in JavaScript?",
    code: null,
    options: [
      "A VS Code extension that formats files on save.",
      "A mechanism where the JavaScript engine automatically inserts semicolons at the end of statements where appropriate if they are omitted.",
      "A strict rule that throws a SyntaxError if any semicolon is missing.",
      "A compiler that translates commas into semicolons."
    ],
    correctAnswer: 1,
    explanation: "JavaScript includes ASI, where the parser automatically inserts implicit semicolons during parsing when certain line breaks and statement boundaries occur.",
    tip: "Be careful: unexpected ASI can happen with `return` on its own line followed by a newline."
  },
  {
    id: "js-ss-02",
    topicId: "syntax-statements",
    topicName: "Syntax, Statements & Comments",
    question: "What will the following function return due to Automatic Semicolon Insertion?",
    code: `function getUser() {
  return
  {
    name: "Alex"
  };
}`,
    options: [
      "`{ name: \"Alex\" }`",
      "`undefined`",
      "`null`",
      "Throws a `SyntaxError`"
    ],
    correctAnswer: 1,
    explanation: "Because `return` is followed immediately by a newline before the opening `{`, ASI inserts a semicolon right after `return;`. The function exits immediately returning `undefined`, and the object literal is unreachable.",
    tip: "Always place the opening brace on the same line as the return statement: `return {`."
  },
  {
    id: "js-ss-03",
    topicId: "syntax-statements",
    topicName: "Syntax, Statements & Comments",
    question: "Which of the following is true regarding JavaScript's case sensitivity?",
    code: `let userName = "Alice";
let Username = "Bob";
let USERNAME = "Charlie";`,
    options: [
      "JavaScript is completely case-insensitive; all three variables point to the same memory location.",
      "JavaScript is strictly case-sensitive; `userName`, `Username`, and `USERNAME` are three distinct variables.",
      "Only function names are case-sensitive; variable names are case-insensitive.",
      "Case sensitivity only applies when running inside Node.js."
    ],
    correctAnswer: 1,
    explanation: "JavaScript is strictly case-sensitive. Identifiers with different casing are completely separate entities in memory.",
    tip: "Always follow standard camelCase for variable and function names."
  },
  {
    id: "js-ss-04",
    topicId: "syntax-statements",
    topicName: "Syntax, Statements & Comments",
    question: "Which of the following is a reserved keyword in JavaScript that CANNOT be used as a variable name?",
    code: null,
    options: [
      "userScore",
      "default",
      "totalItems",
      "calculateTotal"
    ],
    correctAnswer: 1,
    explanation: "`default` is a reserved keyword in JavaScript (used in switch statements and ES module default exports) and cannot be used as an identifier name.",
    tip: "Other reserved keywords include: class, const, let, return, if, function, switch, typeof."
  },
  {
    id: "js-ss-05",
    topicId: "syntax-statements",
    topicName: "Syntax, Statements & Comments",
    question: "What is the difference between an Expression and a Statement in JavaScript?",
    code: null,
    options: [
      "An expression produces a value, whereas a statement performs an action or execution step.",
      "Statements produce values, while expressions only declare functions.",
      "Expressions can only be written inside HTML files.",
      "There is no difference in JavaScript."
    ],
    correctAnswer: 0,
    explanation: "An Expression evaluates to a value (e.g., `5 + 3`, `user.name`, `x > 10`). A Statement performs an action (e.g., `if (...) { }`, `for (...) { }`, `let x = 5;`).",
    tip: "If you can put it on the right-hand side of an assignment `=` or pass it to `console.log()`, it's an expression."
  },
  {
    id: "js-ss-06",
    topicId: "syntax-statements",
    topicName: "Syntax, Statements & Comments",
    question: "What is the correct syntax for a multi-line comment in JavaScript?",
    code: null,
    options: [
      "// This is a multi-line comment //",
      "/* This is a multi-line comment */",
      "<!-- This is a multi-line comment -->",
      "# This is a multi-line comment"
    ],
    correctAnswer: 1,
    explanation: "Single-line comments start with `//`. Multi-line (block) comments start with `/*` and end with `*/`.",
    tip: "`<!-- -->` is for HTML; `/* */` is for JS and CSS."
  },

  // 6. Variables and Identifiers (7 questions)
  {
    id: "js-vi-01",
    topicId: "variables-identifiers",
    topicName: "Variables & Identifiers",
    question: "What happens when you try to reassign a variable declared with `const`?",
    code: `const maxLimit = 100;
maxLimit = 200;`,
    options: [
      "The value updates to 200 silently.",
      "A `TypeError: Assignment to constant variable` is thrown at runtime.",
      "`maxLimit` becomes `NaN`.",
      "The variable is converted to `let` automatically."
    ],
    correctAnswer: 1,
    explanation: "Variables declared with `const` create an immutable binding. Attempting to reassign them throws a `TypeError`.",
    tip: "Use `const` by default for variables that will not be reassigned."
  },
  {
    id: "js-vi-02",
    topicId: "variables-identifiers",
    topicName: "Variables & Identifiers",
    question: "What is the result of mutating an array or object declared with `const`?",
    code: `const fruits = ["apple", "banana"];
fruits.push("cherry");
console.log(fruits.length);`,
    options: [
      "Throws a `TypeError` because `const` prevents any modification.",
      "`3` - `const` prevents variable reassignment, but the object/array contents remain mutable.",
      "`2` - the mutation is ignored silently.",
      "`undefined`"
    ],
    correctAnswer: 1,
    explanation: "`const` prevents reassignment of the variable identifier itself (i.e., you cannot do `fruits = [...]`), but it does not make the underlying object or array immutable (frozen).",
    tip: "Const means constant reference/binding, not immutable data structure."
  },
  {
    id: "js-vi-03",
    topicId: "variables-identifiers",
    topicName: "Variables & Identifiers",
    question: "What is the Temporal Dead Zone (TDZ) for `let` and `const` variables?",
    code: `console.log(age);
let age = 25;`,
    options: [
      "A zone where variables are permanently set to `null`.",
      "The time between entering the scope and the actual declaration line where accessing the `let` or `const` variable throws a `ReferenceError`.",
      "A memory leak that occurs when variables are declared globally.",
      "An asynchronous queue for timers."
    ],
    correctAnswer: 1,
    explanation: "Although `let` and `const` variables are hoisted to the top of their block, they are not initialized. The period from the start of the block until the declaration is evaluated is the Temporal Dead Zone. Accessing them inside TDZ throws a `ReferenceError`.",
    tip: "Unlike `var` which returns `undefined`, accessing `let`/`const` before declaration crashes with ReferenceError."
  },
  {
    id: "js-vi-04",
    topicId: "variables-identifiers",
    topicName: "Variables & Identifiers",
    question: "How does the scope of `var` differ from `let` and `const`?",
    code: `if (true) {
  var a = 1;
  let b = 2;
  const c = 3;
}
console.log(a); // ?`,
    options: [
      "`var` is block-scoped, while `let` and `const` are function-scoped.",
      "`var` is function-scoped (or globally scoped if declared outside a function), so it leaks outside `if` blocks. `let` and `const` are strictly block-scoped.",
      "All three have identical block scoping rules.",
      "`var` cannot be used inside functions."
    ],
    correctAnswer: 1,
    explanation: "`var` ignores `{}` code blocks (like `if`, `for`, `while`) and only respects function boundaries. `let` and `const` are scoped to the nearest enclosing `{}` block.",
    tip: "`var` leaks out of `if` and `for` blocks; `let` and `const` stay safely inside."
  },
  {
    id: "js-vi-05",
    topicId: "variables-identifiers",
    topicName: "Variables & Identifiers",
    question: "Which of the following is an INVALID variable name in JavaScript?",
    code: null,
    options: [
      "`_privateKey`",
      "`$element`",
      "`2ndPlayer`",
      "`camelCaseName`"
    ],
    correctAnswer: 2,
    explanation: "JavaScript identifiers cannot start with a numeric digit. They can start with a letter, an underscore (`_`), or a dollar sign (`$`), followed by letters, digits, underscores, or dollar signs.",
    tip: "Rule: Identifiers must start with a letter, `$`, or `_` (never a number)."
  },
  {
    id: "js-vi-06",
    topicId: "variables-identifiers",
    topicName: "Variables & Identifiers",
    question: "What is variable shadowing in JavaScript?",
    code: `let score = 100;
function display() {
  let score = 50;
  console.log(score);
}`,
    options: [
      "A bug where a variable is erased by garbage collection.",
      "When a variable declared in an inner scope has the same name as a variable in an outer scope, masking the outer variable within the inner scope.",
      "When two variables point to the exact same object reference.",
      "When a variable is declared without the `let`, `const`, or `var` keywords."
    ],
    correctAnswer: 1,
    explanation: "Variable shadowing occurs when an inner scope declares a variable with the same identifier as an outer scope variable. Within that inner scope, the inner declaration takes precedence.",
    tip: "In the example, calling `display()` prints `50`, while `score` in the outer scope remains `100`."
  },
  {
    id: "js-vi-07",
    topicId: "variables-identifiers",
    topicName: "Variables & Identifiers",
    question: "What happens if you assign a value to an undeclared variable without `let`, `const`, or `var` in non-strict mode?",
    code: `function setGlobal() {
  userRole = "admin";
}`,
    options: [
      "It creates an unintended global variable on the `window` or global object, which is bad practice.",
      "It throws an immediate `SyntaxError` at compile time.",
      "The variable is local to the function.",
      "The variable is automatically converted into a Symbol."
    ],
    correctAnswer: 0,
    explanation: "In non-strict mode, assigning to an undeclared variable creates an implicit global property. In strict mode (`'use strict';`), it throws a `ReferenceError`.",
    tip: "Always use `'use strict';` or modern modules where undeclared assignments throw ReferenceError."
  },

  // 7. Data Types (7 questions)
  {
    id: "js-dt-01",
    topicId: "data-types",
    topicName: "Data Types & Type Checking",
    question: "What are the 7 primitive data types in modern JavaScript?",
    code: null,
    options: [
      "string, number, boolean, null, undefined, symbol, bigint",
      "string, number, boolean, array, object, function, map",
      "integer, float, char, string, boolean, list, dict",
      "string, number, boolean, object, set, date, regex"
    ],
    correctAnswer: 0,
    explanation: "JavaScript has 7 primitive types: string, number, boolean, null, undefined, symbol (ES6), and bigint (ES2020). Everything else (including Arrays, Functions, and Dates) is an Object.",
    tip: "Primitives are immutable values passed by value; Objects are passed by reference."
  },
  {
    id: "js-dt-02",
    topicId: "data-types",
    topicName: "Data Types & Type Checking",
    question: "What does `typeof null` return in JavaScript, and why?",
    code: `console.log(typeof null);`,
    options: [
      "`\"null\"`",
      "`\"object\"` - this is a historic legacy bug in the original JavaScript implementation.",
      "`\"undefined\"`",
      "`\"boolean\"`"
    ],
    correctAnswer: 1,
    explanation: "`typeof null` returns `\"object\"`. In the first implementation of JavaScript, values were stored with type tags, and the tag for objects was 0, which matched the NULL pointer representation. It was retained for backwards compatibility.",
    tip: "To accurately check for null: `val === null`."
  },
  {
    id: "js-dt-03",
    topicId: "data-types",
    topicName: "Data Types & Type Checking",
    question: "What does `typeof NaN` return?",
    code: `console.log(typeof NaN);`,
    options: [
      "`\"nan\"`",
      "`\"number\"`",
      "`\"undefined\"`",
      "`\"boolean\"`"
    ],
    correctAnswer: 1,
    explanation: "NaN stands for 'Not a Number', but its data type in the IEEE-754 floating point specification is numeric. Therefore, `typeof NaN === \"number\"`.",
    tip: "To check if a value is NaN, use `Number.isNaN(val)` (because `NaN === NaN` is false!)."
  },
  {
    id: "js-dt-04",
    topicId: "data-types",
    topicName: "Data Types & Type Checking",
    question: "Which of the following values is TRUTHY in JavaScript boolean coercion?",
    code: null,
    options: [
      "`0`",
      "`\"\"` (empty string)",
      "`[]` (empty array)",
      "`null`"
    ],
    correctAnswer: 2,
    explanation: "In JavaScript, the falsy values are: `false`, `0`, `-0`, `0n`, `\"\"`, `null`, `undefined`, and `NaN`. All objects and arrays (even empty ones `[]` and `{}`) are TRUTHY!",
    tip: "Empty array `[]` and empty object `{}` are truthy! `Boolean([]) === true`."
  },
  {
    id: "js-dt-05",
    topicId: "data-types",
    topicName: "Data Types & Type Checking",
    question: "What is the difference between `null` and `undefined` in JavaScript?",
    code: null,
    options: [
      "`undefined` means a variable has been declared but not assigned a value; `null` is an intentional assignment representing 'no value' or 'empty'.",
      "`null` is assigned automatically by JavaScript; `undefined` can only be set manually.",
      "`typeof undefined === \"object\"` and `typeof null === \"undefined\"`.",
      "There is no difference; they are strictly identical with `===`."
    ],
    correctAnswer: 0,
    explanation: "`undefined` indicates the absence of a value by default (uninitialized variable, missing parameter, non-existent object property). `null` is an intentional assignment indicating emptiness.",
    tip: "`null == undefined` is true, but `null === undefined` is false."
  },
  {
    id: "js-dt-06",
    topicId: "data-types",
    topicName: "Data Types & Type Checking",
    question: "What is the primary purpose of the `Symbol` primitive data type introduced in ES6?",
    code: `const id = Symbol("userId");`,
    options: [
      "To store high-precision financial numbers.",
      "To create unique, immutable identifiers that never collide with other property keys.",
      "To convert strings into uppercase characters.",
      "To store HTML element references."
    ],
    correctAnswer: 1,
    explanation: "Every `Symbol()` call creates a completely unique, immutable primitive value. They are primarily used as unique object property keys that won't clash with other properties.",
    tip: "`Symbol('key') === Symbol('key')` is always false."
  },
  {
    id: "js-dt-07",
    topicId: "data-types",
    topicName: "Data Types & Type Checking",
    question: "What is the purpose of `BigInt` in JavaScript?",
    code: `const hugeNumber = 9007199254740991n + 5n;`,
    options: [
      "To represent integers larger than the `Number.MAX_SAFE_INTEGER` limit (2^53 - 1) with arbitrary precision.",
      "To automatically format numbers with currency symbols.",
      "To speed up CSS animations.",
      "To convert floating point numbers to integers."
    ],
    correctAnswer: 0,
    explanation: "`BigInt` allows safe mathematical operations on integers beyond `Number.MAX_SAFE_INTEGER` (`9,007,199,254,740,991`). BigInt literals are written with an `n` suffix.",
    tip: "You cannot mix BigInt and regular Number in arithmetic without explicit conversion."
  },

  // 8. Operators and Expressions (7 questions)
  {
    id: "js-oe-01",
    topicId: "operators-expressions",
    topicName: "Operators & Expressions",
    question: "What is the key difference between `==` (loose equality) and `===` (strict equality)?",
    code: `console.log(5 == "5");
console.log(5 === "5");`,
    options: [
      "`==` performs type coercion before comparison; `===` checks both value and type without coercion.",
      "`===` only works for objects, while `==` works for primitives.",
      "`==` is faster than `===` because it skips type checks.",
      "`===` coerces strings to numbers automatically."
    ],
    correctAnswer: 0,
    explanation: "`==` converts the operands to a common type (coercion) before comparing (so `5 == \"5\"` is true). `===` checks both value and type without converting (so `5 === \"5\"` is false).",
    tip: "Always use `===` and `!==` to prevent unpredictable type coercion bugs."
  },
  {
    id: "js-oe-02",
    topicId: "operators-expressions",
    topicName: "Operators & Expressions",
    question: "How does the Nullish Coalescing Operator (`??`) differ from the Logical OR Operator (`||`)?",
    code: `const count = 0;
const a = count || 10;
const b = count ?? 10;`,
    options: [
      "`||` returns the fallback for ANY falsy value (`0`, `\"\"`, `false`), whereas `??` ONLY falls back for `null` or `undefined`.",
      "`??` only works on strings.",
      "`||` is newer and replaces `??`.",
      "Both produce identical results in all cases."
    ],
    correctAnswer: 0,
    explanation: "`||` considers `0`, `\"\"`, and `false` as falsy, so `0 || 10` evaluates to `10`. `??` only treats `null` and `undefined` as nullish, so `0 ?? 10` correctly evaluates to `0`.",
    tip: "Use `??` when `0` or empty string `\"\"` are valid values you want to preserve."
  },
  {
    id: "js-oe-03",
    topicId: "operators-expressions",
    topicName: "Operators & Expressions",
    question: "What does the following logical expression evaluate to and return?",
    code: `const result = "Apple" && "Banana" && 0 && "Cherry";
console.log(result);`,
    options: [
      "`\"Apple\"`",
      "`\"Cherry\"`",
      "`0`",
      "`false`"
    ],
    correctAnswer: 2,
    explanation: "The logical `&&` operator evaluates from left to right and short-circuits on the FIRST falsy value, returning that actual value. Here, `0` is falsy, so it returns `0`.",
    tip: "Logical AND (`&&`) returns the first falsy operand, or the last operand if all are truthy."
  },
  {
    id: "js-oe-04",
    topicId: "operators-expressions",
    topicName: "Operators & Expressions",
    question: "What is the difference between prefix increment (`++x`) and postfix increment (`x++`)?",
    code: `let x = 5;
let y = x++;
let z = ++x;`,
    options: [
      "Postfix `x++` returns the original value before incrementing; Prefix `++x` increments first and returns the new incremented value.",
      "Prefix `++x` increments by 2, while postfix `x++` increments by 1.",
      "Postfix `x++` works on numbers, while prefix `++x` works on strings.",
      "There is no difference in their return values."
    ],
    correctAnswer: 0,
    explanation: "`x++` evaluates to current `x` (5), then `x` becomes 6 (`y = 5`). Next, `++x` increments `x` to 7 first, then evaluates to 7 (`z = 7`).",
    tip: "Postfix: return then increment. Prefix: increment then return."
  },
  {
    id: "js-oe-05",
    topicId: "operators-expressions",
    topicName: "Operators & Expressions",
    question: "What is the output of the following Ternary Operator expression?",
    code: `const age = 16;
const message = age >= 18 ? "Adult" : age >= 13 ? "Teen" : "Child";
console.log(message);`,
    options: [
      "`\"Adult\"`",
      "`\"Teen\"`",
      "`\"Child\"`",
      "`true`"
    ],
    correctAnswer: 1,
    explanation: "`age >= 18` is false (16 >= 18 is false), so it evaluates the second branch: `age >= 13 ? \"Teen\" : \"Child\"`. Since `16 >= 13` is true, it returns `\"Teen\"`.",
    tip: "Ternary syntax: `condition ? valueIfTrue : valueIfFalse`."
  },
  {
    id: "js-oe-06",
    topicId: "operators-expressions",
    topicName: "Operators & Expressions",
    question: "What will `console.log(1 + 2 + \"3\")` and `console.log(\"1\" + 2 + 3)` output?",
    code: null,
    options: [
      "`\"33\"` and `\"123\"`",
      "`\"6\"` and `\"6\"`",
      "`\"33\"` and `\"15\"`",
      "`6` and `\"123\"`"
    ],
    correctAnswer: 0,
    explanation: "Evaluation is left-to-right. In `1 + 2 + \"3\"`: `1 + 2 = 3`, then `3 + \"3\" = \"33\"` (coercion to string). In `\"1\" + 2 + 3`: `\"1\" + 2 = \"12\"`, then `\"12\" + 3 = \"123\"`.",
    tip: "Once a string is encountered with `+`, subsequent additions become string concatenation."
  },
  {
    id: "js-oe-07",
    topicId: "operators-expressions",
    topicName: "Operators & Expressions",
    question: "What does the `!` (Logical NOT) operator do when applied twice (`!!val`) to a variable?",
    code: `const val = "Hello";
console.log(!!val);`,
    options: [
      "Converts the variable into an array.",
      "Explicitly coerces any value into its strict boolean equivalent (`true` if truthy, `false` if falsy).",
      "Inverts the characters in the string.",
      "Throws a SyntaxError."
    ],
    correctAnswer: 1,
    explanation: "`!val` inverts the truthiness and returns a boolean. The second `!` inverts it back, effectively casting any value to a pure boolean representation (`Boolean(val)`).",
    tip: "`!!\"hello\" === true`, `!!0 === false`."
  },

  // 9. Control Flow (6 questions)
  {
    id: "js-cf-01",
    topicId: "control-flow",
    topicName: "Control Flow",
    question: "What does 'Control Flow' mean in JavaScript execution?",
    code: null,
    options: [
      "The order and direction in which individual statements, instructions, or function calls are executed or evaluated.",
      "The amount of RAM memory allocated to browser tabs.",
      "The CSS layout rules governing flexbox and grid.",
      "The network bandwidth used by fetch requests."
    ],
    correctAnswer: 0,
    explanation: "Control flow is the order in which statements are executed. By default, code executes sequentially from top to bottom, but control flow statements (conditionals, loops, function calls) alter this linear path.",
    tip: "Conditionals branch control flow; loops repeat control flow."
  },
  {
    id: "js-cf-02",
    topicId: "control-flow",
    topicName: "Control Flow",
    question: "What is sequential execution in JavaScript?",
    code: `let x = 10;
x = x + 5;
console.log(x);`,
    options: [
      "Executing statements concurrently in random order.",
      "Executing statements one after another in order from the top of the file to the bottom.",
      "Executing code only when a user clicks the screen.",
      "Compiling code to WebAssembly."
    ],
    correctAnswer: 1,
    explanation: "Sequential execution is the baseline control flow where each statement runs in exact top-to-bottom order unless diverted by conditionals, loops, or function jumps.",
    tip: "Every line finishes before the next sequential line begins on the call stack."
  },
  {
    id: "js-cf-03",
    topicId: "control-flow",
    topicName: "Control Flow",
    question: "Which of the following structures is used to divert control flow based on whether a boolean condition is met?",
    code: null,
    options: [
      "`let` and `const`",
      "`if...else`, `switch`, and ternary operators",
      "`Math.abs()`",
      "`console.log()`"
    ],
    correctAnswer: 1,
    explanation: "Conditional branching constructs (`if...else`, `switch`, ternary expressions) inspect conditions and choose which branch of code to execute.",
    tip: "Branching creates decision forks in your code."
  },
  {
    id: "js-cf-04",
    topicId: "control-flow",
    topicName: "Control Flow",
    question: "How does a function call affect the control flow and Call Stack?",
    code: null,
    options: [
      "The current execution pauses, the called function is pushed onto the Call Stack and executed, and upon return, control resumes where it left off.",
      "The program terminates immediately.",
      "The function runs on a separate thread in the background.",
      "The function is ignored until the browser closes."
    ],
    correctAnswer: 0,
    explanation: "When a function is called, execution jumps to the function body, pushing a new frame to the Call Stack. When it finishes (or reaches `return`), the frame is popped and control resumes at the calling point.",
    tip: "The Call Stack tracks the current execution location across nested function calls."
  },
  {
    id: "js-cf-05",
    topicId: "control-flow",
    topicName: "Control Flow",
    question: "What happens when an unhandled exception is thrown during synchronous control flow?",
    code: `function stepA() { throw new Error("Boom"); }
function stepB() { console.log("Done"); }
stepA();
stepB();`,
    options: [
      "`stepB` continues to execute normally.",
      "Synchronous execution immediately halts, the remaining statements in the call stack are skipped, and the error propagates up.",
      "The computer restarts.",
      "The error is silently ignored."
    ],
    correctAnswer: 1,
    explanation: "An unhandled exception immediately interrupts the normal control flow, unwinds the Call Stack, and stops execution of subsequent code unless caught by a `try...catch` block.",
    tip: "Use `try...catch` when you expect a risky operation might fail."
  },
  {
    id: "js-cf-06",
    topicId: "control-flow",
    topicName: "Control Flow",
    question: "What is an asynchronous control flow in JavaScript?",
    code: `console.log("A");
setTimeout(() => console.log("B"), 0);
console.log("C");`,
    options: [
      "Code that prints: `A`, `B`, `C` synchronously.",
      "Operations (like timers, network calls) that are initiated now but complete later, allowing the main thread to continue executing subsequent statements (`A`, `C`, then `B`).",
      "Code that only works on backend database servers.",
      "Code that crashes the browser."
    ],
    correctAnswer: 1,
    explanation: "In asynchronous execution, long-running or delayed tasks are delegated to Web APIs, allowing synchronous code (`A`, `C`) to finish first before the callback (`B`) is picked up from the task queue.",
    tip: "Output order is `A` -> `C` -> `B` because `setTimeout` callback is placed on the task queue."
  },

  // 10. If / Else & Guard Clauses (7 questions)
  {
    id: "js-ie-01",
    topicId: "if-else",
    topicName: "If / Else & Guard Clauses",
    question: "What is a 'Guard Clause' in function design, and why is it recommended?",
    code: `// Example:
function processPayment(user, amount) {
  if (!user) return false;
  if (amount <= 0) return false;
  if (!user.hasCard) return false;
  
  // Happy path code here...
}`,
    options: [
      "A special CSS property that locks user inputs.",
      "An early return statement at the beginning of a function that checks for invalid conditions/edge cases, flattening nested if-else pyramids and improving readability.",
      "A loop that prevents functions from being called more than 5 times.",
      "A TypeScript interface for error handling."
    ],
    correctAnswer: 1,
    explanation: "Guard clauses handle validation and error conditions early by returning immediately. This avoids deep nesting (pyramids of if/else) and keeps the 'happy path' unindented and readable.",
    tip: "Fail fast and return early to keep your core logic clean."
  },
  {
    id: "js-ie-02",
    topicId: "if-else",
    topicName: "If / Else & Guard Clauses",
    question: "What will the following code output?",
    code: `let score = 75;
if (score >= 90) {
  console.log("A");
} else if (score >= 70) {
  console.log("B");
} else if (score >= 60) {
  console.log("C");
} else {
  console.log("F");
}`,
    options: [
      "`\"A\"`",
      "`\"B\"`",
      "`\"B\"` and `\"C\"`",
      "`\"C\"`"
    ],
    correctAnswer: 1,
    explanation: "In an `if...else if...else` chain, once a condition evaluates to true (`score >= 70` is true for 75), its block executes and the entire rest of the chain is skipped. Only `\"B\"` is logged.",
    tip: "Only one block in an `if...else if...else` chain will ever execute."
  },
  {
    id: "js-ie-03",
    topicId: "if-else",
    topicName: "If / Else & Guard Clauses",
    question: "What is the result of this conditional statement containing an assignment instead of comparison?",
    code: `let isValid = false;
if (isValid = true) {
  console.log("YES");
} else {
  console.log("NO");
}`,
    options: [
      "`\"NO\"` because isValid was initialized to false.",
      "`\"YES\"` because `isValid = true` is an assignment expression that assigns `true` and evaluates to `true`.",
      "Throws a SyntaxError.",
      "Outputs `undefined`."
    ],
    correctAnswer: 1,
    explanation: "Single `=` is assignment, not comparison (`===`). `isValid = true` assigns `true` to `isValid` and evaluates to the assigned value `true`, triggering the `if` block. This is a common bug!",
    tip: "Always use `===` for comparisons to avoid accidental variable assignment."
  },
  {
    id: "js-ie-04",
    topicId: "if-else",
    topicName: "If / Else & Guard Clauses",
    question: "How does short-circuit evaluation work with `&&` in conditional execution?",
    code: `const isLoggedIn = true;
const hasAdminRole = false;
isLoggedIn && hasAdminRole && grantSuperAccess();`,
    options: [
      "`grantSuperAccess()` is executed because `isLoggedIn` is true.",
      "`grantSuperAccess()` is NOT executed because `hasAdminRole` is false, causing the evaluation to short-circuit immediately.",
      "Both functions are executed in parallel.",
      "A TypeError is thrown."
    ],
    correctAnswer: 1,
    explanation: "With `&&`, evaluation stops as soon as any operand is falsy. Because `hasAdminRole` is `false`, the remaining expression (`grantSuperAccess()`) is never called.",
    tip: "Short-circuiting means JS won't evaluate the rest of the expression once the outcome is decided."
  },
  {
    id: "js-ie-05",
    topicId: "if-else",
    topicName: "If / Else & Guard Clauses",
    question: "What is the output of this nested conditional statement?",
    code: `const age = 20;
const hasLicense = false;

if (age >= 18) {
  if (hasLicense) {
    console.log("Can drive");
  } else {
    console.log("Needs license");
  }
} else {
  console.log("Too young");
}`,
    options: [
      "`\"Can drive\"`",
      "`\"Needs license\"`",
      "`\"Too young\"`",
      "`undefined`"
    ],
    correctAnswer: 1,
    explanation: "Since `age >= 18` is true (20 >= 18), control enters the outer if block. Inside, `hasLicense` is false, so the inner `else` block runs, printing `\"Needs license\"`.",
    tip: "Nested if statements evaluate their inner conditions only if the outer condition passes."
  },
  {
    id: "js-ie-06",
    topicId: "if-else",
    topicName: "If / Else & Guard Clauses",
    question: "Why should deep nesting of `if / else` blocks be avoided in clean code?",
    code: null,
    options: [
      "JavaScript engines can only compile up to 2 nested `if` statements.",
      "Deep nesting (the 'Pyramid of Doom' / high cyclomatic complexity) makes code difficult to read, reason about, test, and maintain.",
      "Nested `if` statements disable CSS transitions in the browser.",
      "Variables declared inside nested `if` statements cannot be garbage collected."
    ],
    correctAnswer: 1,
    explanation: "Deep nesting creates high cognitive load and complex branching logic. Refactoring with guard clauses, lookup tables, or helper functions makes code far cleaner.",
    tip: "Aim for a maximum nesting level of 1-2 layers; use guard clauses to flatten."
  },
  {
    id: "js-ie-07",
    topicId: "if-else",
    topicName: "If / Else & Guard Clauses",
    question: "What will be printed when checking an empty string in an `if` condition?",
    code: `const username = "";
if (username) {
  console.log("User exists: " + username);
} else {
  console.log("Anonymous user");
}`,
    options: [
      "`\"User exists: \"`",
      "`\"Anonymous user\"`",
      "Throws a ReferenceError",
      "`null`"
    ],
    correctAnswer: 1,
    explanation: "An empty string `\"\"` is one of JavaScript's falsy values. The `if` condition evaluates to false, jumping directly to the `else` block.",
    tip: "Empty string `\"\"` is falsy; non-empty strings (including `\" \"` with a space) are truthy."
  }
];
