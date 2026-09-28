// Evaluated JavaScript Question Bank (200 Comprehensive Questions)
// Strictly based on eligible sections from the course material.
export const JAVASCRIPT_QUESTIONS = [
  {
    "id": "js-cp-01",
    "topicId": "coding-principles",
    "topicName": "Coding Principles & Best Practices",
    "question": "What does the DRY software engineering principle stand for, and what is its primary objective?",
    "code": null,
    "options": [
      "Don't Repeat Yourself — avoid duplicate logic by extracting shared code into reusable functions.",
      "Do Review Yourself — continuously test and debug code manually.",
      "Data Redundancy Yield — store identical data across multiple variables for backup.",
      "Dynamic Return Yield — always return values dynamically from every function."
    ],
    "correctAnswer": 0,
    "explanation": "DRY stands for 'Don't Repeat Yourself'. It emphasizes that if you write the exact same logic more than once, you should extract it into a reusable function or module to keep code maintainable and reduce bug surface.",
    "tip": "If you find yourself copying and pasting lines of code, it is time to write a helper function."
  },
  {
    "id": "js-cp-02",
    "topicId": "coding-principles",
    "topicName": "Coding Principles & Best Practices",
    "question": "According to the Single Responsibility Principle, how should functions be designed?",
    "code": "// Example function signature\nfunction handleUserData(user) {\n  // validates, saves to DB, emails user, logs metrics\n}",
    "options": [
      "Every function should do as many related tasks as possible to reduce the total number of functions.",
      "Every function should do exactly ONE thing and do it well; if a function has multiple jobs, split it up.",
      "Functions should only be written if they contain fewer than 3 lines of code.",
      "Functions must always mutate their incoming arguments directly."
    ],
    "correctAnswer": 1,
    "explanation": "The Single Responsibility Principle (SRP) dictates that a function or module should have one, and only one, reason to change. Each function should perform a single well-defined task (e.g., validateUser, saveUser, sendEmail).",
    "tip": "A function name containing 'And' (like saveAndEmailUser) often hints at multiple responsibilities."
  },
  {
    "id": "js-cp-03",
    "topicId": "coding-principles",
    "topicName": "Coding Principles & Best Practices",
    "question": "What does the KISS principle advocate in software development?",
    "code": null,
    "options": [
      "Keep It Structured & Synchronous — avoid asynchronous code whenever possible.",
      "Keep It Simple, Stupid — the simplest solution that works is usually the best and easiest to maintain.",
      "Key Instruction System Standard — enforce strictly 80-character line lengths.",
      "Knowledge In Source Systems — embed full documentation in every comment block."
    ],
    "correctAnswer": 1,
    "explanation": "KISS stands for 'Keep It Simple, Stupid'. It reminds developers that overly clever, intricate code is harder to read, test, and debug. Simple, clear code is always superior to needlessly complex code.",
    "tip": "Simplicity is a feature: clean, direct code is easier to maintain than clever one-liners."
  },
  {
    "id": "js-cp-04",
    "topicId": "coding-principles",
    "topicName": "Coding Principles & Best Practices",
    "question": "What does the YAGNI principle caution developers against?",
    "code": null,
    "options": [
      "Writing automated tests before implementing business logic.",
      "Writing code for hypothetical features you THINK you might need in the future instead of building what is currently needed.",
      "Using third-party libraries from npm packages.",
      "Declaring constants with const instead of let."
    ],
    "correctAnswer": 1,
    "explanation": "YAGNI stands for 'You Aren't Gonna Need It'. It warns against over-engineering or adding extra flexibility and hypothetical features that aren't currently required, which wastes time and complicates codebases.",
    "tip": "Only write what you need right now to satisfy actual current requirements."
  },
  {
    "id": "js-cp-05",
    "topicId": "coding-principles",
    "topicName": "Coding Principles & Best Practices",
    "question": "What characterizes a 'Pure Function' in JavaScript?",
    "code": "function add(a, b) {\n  return a + b;\n}",
    "options": [
      "It must be an arrow function that returns an object literal.",
      "Given the same inputs, it always returns the exact same output and produces no side effects (like mutating outer variables or calling APIs).",
      "It only accepts string arguments and never throws errors.",
      "It executes asynchronously using the async keyword."
    ],
    "correctAnswer": 1,
    "explanation": "A pure function is deterministic: given the same arguments, it will always return the exact same output without causing observable side effects (such as modifying global state, modifying parameter objects, or altering the DOM).",
    "tip": "Pure functions are easy to unit-test and predictable to reason about."
  },
  {
    "id": "js-cp-06",
    "topicId": "coding-principles",
    "topicName": "Coding Principles & Best Practices",
    "question": "What is the recommended best practice regarding code comments in JavaScript?",
    "code": "// BAD:\nlet i = 0; // set i to 0\n\n// GOOD:\n// Offset by 1 because the third-party API uses 1-based pagination",
    "options": [
      "Comment every single line explaining what the JavaScript syntax is doing.",
      "Comments should primarily explain the 'WHY' (intent, edge cases, business decisions) rather than the obvious 'WHAT' that readable code already shows.",
      "Never write comments under any circumstances because code is self-documenting.",
      "Write comments only in HTML files, never inside .js files."
    ],
    "correctAnswer": 1,
    "explanation": "Good comments explain the rationale ('WHY' a specific decision or workaround was made) rather than restating the obvious syntax ('WHAT' the code does). Self-descriptive naming should make the syntax clear.",
    "tip": "Don't explain that a counter is incrementing; explain why the counter needs to start at a specific number."
  },
  {
    "id": "js-cp-07",
    "topicId": "coding-principles",
    "topicName": "Coding Principles & Best Practices",
    "question": "Which of the following identifier names best follows JavaScript clean naming conventions for a boolean flag checking if a user is authenticated?",
    "code": null,
    "options": [
      "let flag1 = true;",
      "let isAuthenticated = true;",
      "let checkUserAuthenticationStatusData = true;",
      "let AUTH_BOOL = true;"
    ],
    "correctAnswer": 1,
    "explanation": "Boolean variables should be named using prefixes like 'is', 'has', 'can', or 'should' in camelCase (e.g., isAuthenticated, hasPermission, isLoading), making conditional checks read naturally like English (`if (isAuthenticated)`).",
    "tip": "Prefixing booleans with is/has makes `if (isActive)` read like standard English."
  },
  {
    "id": "js-pl-01",
    "topicId": "pseudocode-logic",
    "topicName": "Pseudocode & Algorithmic Thinking",
    "question": "What is the primary purpose of writing pseudocode before writing actual JavaScript code?",
    "code": null,
    "options": [
      "To compile code into machine-executable binary faster.",
      "To map out the logic and step-by-step problem-solving strategy in plain human-readable terms without worrying about language syntax.",
      "To automatically validate security vulnerabilities in the DOM.",
      "To replace standard JavaScript comments in production files."
    ],
    "correctAnswer": 1,
    "explanation": "Pseudocode is an informal, high-level description of an algorithm. It allows developers to concentrate on problem logic, step sequence, and edge cases before getting bogged down in syntax errors.",
    "tip": "Pseudocode is for human clarity, not machine compilation."
  },
  {
    "id": "js-pl-02",
    "topicId": "pseudocode-logic",
    "topicName": "Pseudocode & Algorithmic Thinking",
    "question": "What is an 'Algorithm' in computer science and software development?",
    "code": null,
    "options": [
      "A specific framework developed by Mozilla for DOM manipulation.",
      "An unambiguous, step-by-step procedure or set of rules designed to solve a specific problem or perform a computation.",
      "A JavaScript method that only executes on arrays.",
      "A hardware component that stores variable references."
    ],
    "correctAnswer": 1,
    "explanation": "An algorithm is a finite sequence of precise, well-defined computer-implementable instructions to solve a problem or perform a computation.",
    "tip": "Every recipe, sorting technique, or calculation logic is an algorithm."
  },
  {
    "id": "js-pl-03",
    "topicId": "pseudocode-logic",
    "topicName": "Pseudocode & Algorithmic Thinking",
    "question": "When applying problem decomposition to calculate the total price of a shopping cart including tax and discount, what is the best first step?",
    "code": null,
    "options": [
      "Write a 50-line single function that executes all mathematical operations in one expression.",
      "Break the problem down into smaller sub-tasks: sum item prices, apply coupon discount, compute tax on discounted subtotal, and return final sum.",
      "Convert all numbers to strings immediately.",
      "Wrap the entire script in a try...catch block before writing any logic."
    ],
    "correctAnswer": 1,
    "explanation": "Decomposition is the process of breaking a complex problem into smaller, manageable, and independently testable sub-problems.",
    "tip": "Divide and conquer: solve small sub-problems, then compose them."
  },
  {
    "id": "js-pl-04",
    "topicId": "pseudocode-logic",
    "topicName": "Pseudocode & Algorithmic Thinking",
    "question": "In a flowchart representing algorithmic logic, what standard shape is traditionally used for a Decision (conditional branch)?",
    "code": null,
    "options": [
      "Oval / Rounded Rectangle (Start/End)",
      "Diamond (Decision / Branching condition)",
      "Rectangle (Process / Execution step)",
      "Parallelogram (Input / Output)"
    ],
    "correctAnswer": 1,
    "explanation": "In standard flowchart notation: Diamonds represent Decisions (if/else checks), Rectangles represent Processes (actions/calculations), Parallelograms represent Input/Output, and Ovals represent Start/Stop.",
    "tip": "A diamond shape always has at least two exit paths (True/False or Yes/No)."
  },
  {
    "id": "js-pl-05",
    "topicId": "pseudocode-logic",
    "topicName": "Pseudocode & Algorithmic Thinking",
    "question": "Consider this pseudocode algorithm. What will be the final value of counter?\n\nSET counter = 0\nFOR each number IN [3, 8, 2, 9, 4]:\n  IF number > 5 THEN\n    SET counter = counter + 1\nEND FOR",
    "code": null,
    "options": [
      "5",
      "2",
      "3",
      "8"
    ],
    "correctAnswer": 1,
    "explanation": "The algorithm iterates through [3, 8, 2, 9, 4] and increments counter only when number > 5. The numbers greater than 5 are 8 and 9 (2 numbers). Thus counter = 2.",
    "tip": "Trace the condition for each element: 3(No), 8(Yes), 2(No), 9(Yes), 4(No)."
  },
  {
    "id": "js-pl-06",
    "topicId": "pseudocode-logic",
    "topicName": "Pseudocode & Algorithmic Thinking",
    "question": "Why is considering 'Edge Cases' crucial when designing algorithms?",
    "code": null,
    "options": [
      "Edge cases make code execute in CSS instead of JavaScript.",
      "Edge cases test boundary conditions (e.g., empty arrays, null inputs, negative numbers, 0, very large values) that often break naive solutions.",
      "Edge cases are only needed when using TypeScript.",
      "Edge cases prevent the browser from loading fonts."
    ],
    "correctAnswer": 1,
    "explanation": "Edge cases represent unusual or boundary inputs (like an empty array, 0, negative values, null/undefined inputs) that algorithms must handle gracefully to avoid crashes or unexpected errors in production.",
    "tip": "Always ask: 'What happens if the input is empty, null, or zero?'"
  },
  {
    "id": "js-mf-01",
    "topicId": "math-foundations",
    "topicName": "Math Foundations for Programming",
    "question": "What is the result of the modulo operation `17 % 5` in JavaScript, and what is its primary use case?",
    "code": "const result = 17 % 5;\nconsole.log(result);",
    "options": [
      "`3.4` (the division quotient)",
      "`2` (the remainder left over after dividing 17 by 5)",
      "`3` (the rounded integer division)",
      "`85` (multiplication result)"
    ],
    "correctAnswer": 1,
    "explanation": "The `%` operator returns the integer remainder of division. 17 divided by 5 is 3 with a remainder of 2. Modulo is commonly used for checking even/odd numbers (`n % 2 === 0`) and cycling array indices.",
    "tip": "`n % 2 === 0` means even, `n % 2 !== 0` means odd."
  },
  {
    "id": "js-mf-02",
    "topicId": "math-foundations",
    "topicName": "Math Foundations for Programming",
    "question": "What is the value of `result` following standard operator precedence (PEMDAS)?",
    "code": "const result = 10 + 5 * 2 ** 3;",
    "options": [
      "120",
      "50",
      "90",
      "1000"
    ],
    "correctAnswer": 1,
    "explanation": "Exponentiation `**` has highest precedence: `2 ** 3 = 8`. Next is multiplication: `5 * 8 = 40`. Finally addition: `10 + 40 = 50`.",
    "tip": "Precedence order: Parentheses -> Exponents `**` -> Multiplication/Division -> Addition/Subtraction."
  },
  {
    "id": "js-mf-03",
    "topicId": "math-foundations",
    "topicName": "Math Foundations for Programming",
    "question": "How do `Math.floor()`, `Math.ceil()`, and `Math.round()` differ when given `4.6` and `4.2`?",
    "code": null,
    "options": [
      "All three methods return `5` for any positive float.",
      "`Math.floor(4.6)` = 4, `Math.ceil(4.2)` = 5, `Math.round(4.6)` = 5, and `Math.round(4.2)` = 4.",
      "`Math.floor` rounds to nearest integer, while `Math.round` always rounds down.",
      "`Math.ceil` always truncates decimals towards zero."
    ],
    "correctAnswer": 1,
    "explanation": "`Math.floor()` always rounds down to the nearest integer (4.6 -> 4). `Math.ceil()` always rounds up (4.2 -> 5). `Math.round()` rounds to the nearest integer (4.6 -> 5, 4.2 -> 4).",
    "tip": "Floor = ground (down), Ceil = ceiling (up), Round = standard nearest integer."
  },
  {
    "id": "js-mf-04",
    "topicId": "math-foundations",
    "topicName": "Math Foundations for Programming",
    "question": "Which expression generates a random integer between 1 and 10 (inclusive)?",
    "code": null,
    "options": [
      "Math.random() * 10;",
      "Math.floor(Math.random() * 10) + 1;",
      "Math.round(Math.random() * 9);",
      "Math.ceil(Math.random() * 11);"
    ],
    "correctAnswer": 1,
    "explanation": "`Math.random()` returns a float in the range `[0, 1)`. Multiplying by 10 gives `[0, 9.999...)`. `Math.floor()` turns that into an integer from 0 to 9. Adding 1 shifts the range to `1` through `10` inclusive.",
    "tip": "Formula for [min, max]: `Math.floor(Math.random() * (max - min + 1)) + min`."
  },
  {
    "id": "js-mf-05",
    "topicId": "math-foundations",
    "topicName": "Math Foundations for Programming",
    "question": "What does `Math.trunc(-4.9)` return compared to `Math.floor(-4.9)` in JavaScript?",
    "code": null,
    "options": [
      "`Math.trunc(-4.9)` returns `-4`, while `Math.floor(-4.9)` returns `-5`.",
      "Both return `-5`.",
      "Both return `-4`.",
      "`Math.trunc` throws a RangeError for negative numbers."
    ],
    "correctAnswer": 0,
    "explanation": "`Math.trunc()` removes fractional digits, truncating towards zero (`-4.9` becomes `-4`). `Math.floor()` always rounds down towards negative infinity (`-4.9` becomes `-5`).",
    "tip": "Trunc cuts the fraction off; Floor moves further down the number line."
  },
  {
    "id": "js-mf-06",
    "topicId": "math-foundations",
    "topicName": "Math Foundations for Programming",
    "question": "What is the return value of `Math.max(14, 28, 9, 82, 3)`?",
    "code": null,
    "options": [
      "14",
      "82",
      "3",
      "NaN"
    ],
    "correctAnswer": 1,
    "explanation": "`Math.max()` takes multiple numeric arguments and returns the largest number among them, which is 82.",
    "tip": "To find the max in an array `arr`, use `Math.max(...arr)`."
  },
  {
    "id": "js-mf-07",
    "topicId": "math-foundations",
    "topicName": "Math Foundations for Programming",
    "question": "What is the result of `Math.abs(-25)` and `Math.sqrt(64)`?",
    "code": null,
    "options": [
      "`-25` and `8`",
      "`25` and `8`",
      "`25` and `16`",
      "`0` and `8`"
    ],
    "correctAnswer": 1,
    "explanation": "`Math.abs()` returns the non-negative absolute magnitude of a number (`Math.abs(-25) === 25`). `Math.sqrt(64)` returns the positive square root of 64, which is 8.",
    "tip": "Absolute value converts negative numbers to their positive counterpart."
  },
  {
    "id": "js-intro-01",
    "topicId": "intro-javascript",
    "topicName": "Introduction to JavaScript",
    "question": "What is ECMAScript in relation to JavaScript?",
    "code": null,
    "options": [
      "A database software developed by Oracle.",
      "The official international standard specification that defines the JavaScript language.",
      "A CSS preprocessor used for styling web apps.",
      "A Chrome browser plugin for debugging."
    ],
    "correctAnswer": 1,
    "explanation": "ECMAScript (standardized under ECMA-262) is the official specification of the language. JavaScript is an implementation of the ECMAScript standard.",
    "tip": "ES6 (ECMAScript 2015) was a major milestone that introduced let, const, arrow functions, and classes."
  },
  {
    "id": "js-intro-02",
    "topicId": "intro-javascript",
    "topicName": "Introduction to JavaScript",
    "question": "Who created JavaScript, and in what year was it originally introduced in Netscape Navigator?",
    "code": null,
    "options": [
      "Tim Berners-Lee in 1989",
      "Brendan Eich in 1995",
      "James Gosling in 1991",
      "Guido van Rossum in 1990"
    ],
    "correctAnswer": 1,
    "explanation": "Brendan Eich created JavaScript in 1995 while working at Netscape Communications. It was initially named Mocha, then LiveScript, before being branded as JavaScript.",
    "tip": "Brendan Eich wrote the initial prototype in just 10 days."
  },
  {
    "id": "js-intro-03",
    "topicId": "intro-javascript",
    "topicName": "Introduction to JavaScript",
    "question": "What is Node.js and how does it relate to browser-based JavaScript?",
    "code": null,
    "options": [
      "Node.js is a replacement for HTML inside the browser.",
      "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JS outside the browser using Google Chrome's V8 engine.",
      "Node.js is a proprietary compiler that converts JavaScript into Python code.",
      "Node.js only runs on mobile devices running iOS."
    ],
    "correctAnswer": 1,
    "explanation": "Node.js allows JavaScript to run server-side (outside the web browser) on servers and local machines, using the high-performance V8 engine with access to the file system and network APIs.",
    "tip": "Browser JS has `window` and DOM; Node.js has `global`, `process`, and `fs`."
  },
  {
    "id": "js-intro-04",
    "topicId": "intro-javascript",
    "topicName": "Introduction to JavaScript",
    "question": "Which of the following objects is accessible in browser JavaScript environments but NOT in standard Node.js environments?",
    "code": null,
    "options": [
      "Math",
      "document (the DOM tree)",
      "JSON",
      "console"
    ],
    "correctAnswer": 1,
    "explanation": "`document` (and `window`) is part of the Web Browser Web APIs. In standard server-side Node.js environments, there is no HTML document or DOM tree, so `document` is undefined.",
    "tip": "Node.js has no browser UI, hence no `document` or `window`."
  },
  {
    "id": "js-intro-05",
    "topicId": "intro-javascript",
    "topicName": "Introduction to JavaScript",
    "question": "What does the `console.warn()` method do when executed in a browser developer environment?",
    "code": "console.warn(\"API key is expiring soon!\");",
    "options": [
      "Halts the execution of the JavaScript thread immediately.",
      "Outputs a yellow/amber warning message with a warning icon and stack trace in the browser developer tools console.",
      "Displays an alert dialog box that blocks the user's screen.",
      "Deletes the variable from memory."
    ],
    "correctAnswer": 1,
    "explanation": "`console.warn()` formats and outputs a warning message in the console, typically highlighted in yellow/orange with an exclamation icon, without interrupting code execution.",
    "tip": "Use `console.error` for errors, `console.warn` for deprecations/alerts, and `console.log` for general output."
  },
  {
    "id": "js-intro-06",
    "topicId": "intro-javascript",
    "topicName": "Introduction to JavaScript",
    "question": "Why is JavaScript referred to as a 'Single-Threaded' programming language?",
    "code": null,
    "options": [
      "It can only run on single-core CPU processors.",
      "It has only one main Call Stack and executes one command/instruction at a time sequentially.",
      "It can only have one function per script file.",
      "It only allows one network request per web page."
    ],
    "correctAnswer": 1,
    "explanation": "JavaScript has a single call stack in its execution thread, meaning it can only process one statement at a given moment in time. Concurrency is achieved through the event loop and Web APIs.",
    "tip": "Single-threaded = one task executed at a time on the main thread."
  },
  {
    "id": "js-ss-01",
    "topicId": "syntax-statements",
    "topicName": "Syntax, Statements & Comments",
    "question": "What is Automatic Semicolon Insertion (ASI) in JavaScript?",
    "code": null,
    "options": [
      "A VS Code extension that formats files on save.",
      "A mechanism where the JavaScript engine automatically inserts semicolons at the end of statements where appropriate if they are omitted.",
      "A strict rule that throws a SyntaxError if any semicolon is missing.",
      "A compiler that translates commas into semicolons."
    ],
    "correctAnswer": 1,
    "explanation": "JavaScript includes ASI, where the parser automatically inserts implicit semicolons during parsing when certain line breaks and statement boundaries occur.",
    "tip": "Be careful: unexpected ASI can happen with `return` on its own line followed by a newline."
  },
  {
    "id": "js-ss-02",
    "topicId": "syntax-statements",
    "topicName": "Syntax, Statements & Comments",
    "question": "What will the following function return due to Automatic Semicolon Insertion?",
    "code": "function getUser() {\n  return\n  {\n    name: \"Alex\"\n  };\n}",
    "options": [
      "`{ name: \"Alex\" }`",
      "`undefined`",
      "`null`",
      "Throws a `SyntaxError`"
    ],
    "correctAnswer": 1,
    "explanation": "Because `return` is followed immediately by a newline before the opening `{`, ASI inserts a semicolon right after `return;`. The function exits immediately returning `undefined`, and the object literal is unreachable.",
    "tip": "Always place the opening brace on the same line as the return statement: `return {`."
  },
  {
    "id": "js-ss-03",
    "topicId": "syntax-statements",
    "topicName": "Syntax, Statements & Comments",
    "question": "Which of the following is true regarding JavaScript's case sensitivity?",
    "code": "let userName = \"Alice\";\nlet Username = \"Bob\";\nlet USERNAME = \"Charlie\";",
    "options": [
      "JavaScript is completely case-insensitive; all three variables point to the same memory location.",
      "JavaScript is strictly case-sensitive; `userName`, `Username`, and `USERNAME` are three distinct variables.",
      "Only function names are case-sensitive; variable names are case-insensitive.",
      "Case sensitivity only applies when running inside Node.js."
    ],
    "correctAnswer": 1,
    "explanation": "JavaScript is strictly case-sensitive. Identifiers with different casing are completely separate entities in memory.",
    "tip": "Always follow standard camelCase for variable and function names."
  },
  {
    "id": "js-ss-04",
    "topicId": "syntax-statements",
    "topicName": "Syntax, Statements & Comments",
    "question": "Which of the following is a reserved keyword in JavaScript that CANNOT be used as a variable name?",
    "code": null,
    "options": [
      "userScore",
      "default",
      "totalItems",
      "calculateTotal"
    ],
    "correctAnswer": 1,
    "explanation": "`default` is a reserved keyword in JavaScript (used in switch statements and ES module default exports) and cannot be used as an identifier name.",
    "tip": "Other reserved keywords include: class, const, let, return, if, function, switch, typeof."
  },
  {
    "id": "js-ss-05",
    "topicId": "syntax-statements",
    "topicName": "Syntax, Statements & Comments",
    "question": "What is the difference between an Expression and a Statement in JavaScript?",
    "code": null,
    "options": [
      "An expression produces a value, whereas a statement performs an action or execution step.",
      "Statements produce values, while expressions only declare functions.",
      "Expressions can only be written inside HTML files.",
      "There is no difference in JavaScript."
    ],
    "correctAnswer": 0,
    "explanation": "An Expression evaluates to a value (e.g., `5 + 3`, `user.name`, `x > 10`). A Statement performs an action (e.g., `if (...) { }`, `for (...) { }`, `let x = 5;`).",
    "tip": "If you can put it on the right-hand side of an assignment `=` or pass it to `console.log()`, it's an expression."
  },
  {
    "id": "js-ss-06",
    "topicId": "syntax-statements",
    "topicName": "Syntax, Statements & Comments",
    "question": "What is the correct syntax for a multi-line comment in JavaScript?",
    "code": null,
    "options": [
      "// This is a multi-line comment //",
      "/* This is a multi-line comment */",
      "<!-- This is a multi-line comment -->",
      "# This is a multi-line comment"
    ],
    "correctAnswer": 1,
    "explanation": "Single-line comments start with `//`. Multi-line (block) comments start with `/*` and end with `*/`.",
    "tip": "`<!-- -->` is for HTML; `/* */` is for JS and CSS."
  },
  {
    "id": "js-vi-01",
    "topicId": "variables-identifiers",
    "topicName": "Variables & Identifiers",
    "question": "What happens when you try to reassign a variable declared with `const`?",
    "code": "const maxLimit = 100;\nmaxLimit = 200;",
    "options": [
      "The value updates to 200 silently.",
      "A `TypeError: Assignment to constant variable` is thrown at runtime.",
      "`maxLimit` becomes `NaN`.",
      "The variable is converted to `let` automatically."
    ],
    "correctAnswer": 1,
    "explanation": "Variables declared with `const` create an immutable binding. Attempting to reassign them throws a `TypeError`.",
    "tip": "Use `const` by default for variables that will not be reassigned."
  },
  {
    "id": "js-vi-02",
    "topicId": "variables-identifiers",
    "topicName": "Variables & Identifiers",
    "question": "What is the result of mutating an array or object declared with `const`?",
    "code": "const fruits = [\"apple\", \"banana\"];\nfruits.push(\"cherry\");\nconsole.log(fruits.length);",
    "options": [
      "Throws a `TypeError` because `const` prevents any modification.",
      "`3` — `const` prevents variable reassignment, but the object/array contents remain mutable.",
      "`2` — the mutation is ignored silently.",
      "`undefined`"
    ],
    "correctAnswer": 1,
    "explanation": "`const` prevents reassignment of the variable identifier itself (i.e., you cannot do `fruits = [...]`), but it does not make the underlying object or array immutable (frozen).",
    "tip": "Const means constant reference/binding, not immutable data structure."
  },
  {
    "id": "js-vi-03",
    "topicId": "variables-identifiers",
    "topicName": "Variables & Identifiers",
    "question": "What is the Temporal Dead Zone (TDZ) for `let` and `const` variables?",
    "code": "console.log(age);\nlet age = 25;",
    "options": [
      "A zone where variables are permanently set to `null`.",
      "The time between entering the scope and the actual declaration line where accessing the `let` or `const` variable throws a `ReferenceError`.",
      "A memory leak that occurs when variables are declared globally.",
      "An asynchronous queue for timers."
    ],
    "correctAnswer": 1,
    "explanation": "Although `let` and `const` variables are hoisted to the top of their block, they are not initialized. The period from the start of the block until the declaration is evaluated is the Temporal Dead Zone. Accessing them inside TDZ throws a `ReferenceError`.",
    "tip": "Unlike `var` which returns `undefined`, accessing `let`/`const` before declaration crashes with ReferenceError."
  },
  {
    "id": "js-vi-04",
    "topicId": "variables-identifiers",
    "topicName": "Variables & Identifiers",
    "question": "How does the scope of `var` differ from `let` and `const`?",
    "code": "if (true) {\n  var a = 1;\n  let b = 2;\n  const c = 3;\n}\nconsole.log(a); // ?",
    "options": [
      "`var` is block-scoped, while `let` and `const` are function-scoped.",
      "`var` is function-scoped (or globally scoped if declared outside a function), so it leaks outside `if` blocks. `let` and `const` are strictly block-scoped.",
      "All three have identical block scoping rules.",
      "`var` cannot be used inside functions."
    ],
    "correctAnswer": 1,
    "explanation": "`var` ignores `{}` code blocks (like `if`, `for`, `while`) and only respects function boundaries. `let` and `const` are scoped to the nearest enclosing `{}` block.",
    "tip": "`var` leaks out of `if` and `for` blocks; `let` and `const` stay safely inside."
  },
  {
    "id": "js-vi-05",
    "topicId": "variables-identifiers",
    "topicName": "Variables & Identifiers",
    "question": "Which of the following is an INVALID variable name in JavaScript?",
    "code": null,
    "options": [
      "`_privateKey`",
      "`$element`",
      "`2ndPlayer`",
      "`camelCaseName`"
    ],
    "correctAnswer": 2,
    "explanation": "JavaScript identifiers cannot start with a numeric digit. They can start with a letter, an underscore (`_`), or a dollar sign (`$`), followed by letters, digits, underscores, or dollar signs.",
    "tip": "Rule: Identifiers must start with a letter, `$`, or `_` (never a number)."
  },
  {
    "id": "js-vi-06",
    "topicId": "variables-identifiers",
    "topicName": "Variables & Identifiers",
    "question": "What is variable shadowing in JavaScript?",
    "code": "let score = 100;\nfunction display() {\n  let score = 50;\n  console.log(score);\n}",
    "options": [
      "A bug where a variable is erased by garbage collection.",
      "When a variable declared in an inner scope has the same name as a variable in an outer scope, masking the outer variable within the inner scope.",
      "When two variables point to the exact same object reference.",
      "When a variable is declared without the `let`, `const`, or `var` keywords."
    ],
    "correctAnswer": 1,
    "explanation": "Variable shadowing occurs when an inner scope declares a variable with the same identifier as an outer scope variable. Within that inner scope, the inner declaration takes precedence.",
    "tip": "In the example, calling `display()` prints `50`, while `score` in the outer scope remains `100`."
  },
  {
    "id": "js-vi-07",
    "topicId": "variables-identifiers",
    "topicName": "Variables & Identifiers",
    "question": "What happens if you assign a value to an undeclared variable without `let`, `const`, or `var` in non-strict mode?",
    "code": "function setGlobal() {\n  userRole = \"admin\";\n}",
    "options": [
      "It creates an unintended global variable on the `window` or global object, which is bad practice.",
      "It throws an immediate `SyntaxError` at compile time.",
      "The variable is local to the function.",
      "The variable is automatically converted into a Symbol."
    ],
    "correctAnswer": 0,
    "explanation": "In non-strict mode, assigning to an undeclared variable creates an implicit global property. In strict mode (`'use strict';`), it throws a `ReferenceError`.",
    "tip": "Always use `'use strict';` or modern modules where undeclared assignments throw ReferenceError."
  },
  {
    "id": "js-dt-01",
    "topicId": "data-types",
    "topicName": "Data Types & Type Checking",
    "question": "What are the 7 primitive data types in modern JavaScript?",
    "code": null,
    "options": [
      "string, number, boolean, null, undefined, symbol, bigint",
      "string, number, boolean, array, object, function, map",
      "integer, float, char, string, boolean, list, dict",
      "string, number, boolean, object, set, date, regex"
    ],
    "correctAnswer": 0,
    "explanation": "JavaScript has 7 primitive types: string, number, boolean, null, undefined, symbol (ES6), and bigint (ES2020). Everything else (including Arrays, Functions, and Dates) is an Object.",
    "tip": "Primitives are immutable values passed by value; Objects are passed by reference."
  },
  {
    "id": "js-dt-02",
    "topicId": "data-types",
    "topicName": "Data Types & Type Checking",
    "question": "What does `typeof null` return in JavaScript, and why?",
    "code": "console.log(typeof null);",
    "options": [
      "`\"null\"`",
      "`\"object\"` — this is a historic legacy bug in the original JavaScript implementation.",
      "`\"undefined\"`",
      "`\"boolean\"`"
    ],
    "correctAnswer": 1,
    "explanation": "`typeof null` returns `\"object\"`. In the first implementation of JavaScript, values were stored with type tags, and the tag for objects was 0, which matched the NULL pointer representation. It was retained for backwards compatibility.",
    "tip": "To accurately check for null: `val === null`."
  },
  {
    "id": "js-dt-03",
    "topicId": "data-types",
    "topicName": "Data Types & Type Checking",
    "question": "What does `typeof NaN` return?",
    "code": "console.log(typeof NaN);",
    "options": [
      "`\"nan\"`",
      "`\"number\"`",
      "`\"undefined\"`",
      "`\"boolean\"`"
    ],
    "correctAnswer": 1,
    "explanation": "NaN stands for 'Not a Number', but its data type in the IEEE-754 floating point specification is numeric. Therefore, `typeof NaN === \"number\"`.",
    "tip": "To check if a value is NaN, use `Number.isNaN(val)` (because `NaN === NaN` is false!)."
  },
  {
    "id": "js-dt-04",
    "topicId": "data-types",
    "topicName": "Data Types & Type Checking",
    "question": "Which of the following values is TRUTHY in JavaScript boolean coercion?",
    "code": null,
    "options": [
      "`0`",
      "`\"\"` (empty string)",
      "`[]` (empty array)",
      "`null`"
    ],
    "correctAnswer": 2,
    "explanation": "In JavaScript, the falsy values are: `false`, `0`, `-0`, `0n`, `\"\"`, `null`, `undefined`, and `NaN`. All objects and arrays (even empty ones `[]` and `{}`) are TRUTHY!",
    "tip": "Empty array `[]` and empty object `{}` are truthy! `Boolean([]) === true`."
  },
  {
    "id": "js-dt-05",
    "topicId": "data-types",
    "topicName": "Data Types & Type Checking",
    "question": "What is the difference between `null` and `undefined` in JavaScript?",
    "code": null,
    "options": [
      "`undefined` means a variable has been declared but not assigned a value; `null` is an intentional assignment representing 'no value' or 'empty'.",
      "`null` is assigned automatically by JavaScript; `undefined` can only be set manually.",
      "`typeof undefined === \"object\"` and `typeof null === \"undefined\"`.",
      "There is no difference; they are strictly identical with `===`."
    ],
    "correctAnswer": 0,
    "explanation": "`undefined` indicates the absence of a value by default (uninitialized variable, missing parameter, non-existent object property). `null` is an intentional assignment indicating emptiness.",
    "tip": "`null == undefined` is true, but `null === undefined` is false."
  },
  {
    "id": "js-dt-06",
    "topicId": "data-types",
    "topicName": "Data Types & Type Checking",
    "question": "What is the primary purpose of the `Symbol` primitive data type introduced in ES6?",
    "code": "const id = Symbol(\"userId\");",
    "options": [
      "To store high-precision financial numbers.",
      "To create unique, immutable identifiers that never collide with other property keys.",
      "To convert strings into uppercase characters.",
      "To store HTML element references."
    ],
    "correctAnswer": 1,
    "explanation": "Every `Symbol()` call creates a completely unique, immutable primitive value. They are primarily used as unique object property keys that won't clash with other properties.",
    "tip": "`Symbol('key') === Symbol('key')` is always false."
  },
  {
    "id": "js-dt-07",
    "topicId": "data-types",
    "topicName": "Data Types & Type Checking",
    "question": "What is the purpose of `BigInt` in JavaScript?",
    "code": "const hugeNumber = 9007199254740991n + 5n;",
    "options": [
      "To represent integers larger than the `Number.MAX_SAFE_INTEGER` limit (2^53 - 1) with arbitrary precision.",
      "To automatically format numbers with currency symbols.",
      "To speed up CSS animations.",
      "To convert floating point numbers to integers."
    ],
    "correctAnswer": 0,
    "explanation": "`BigInt` allows safe mathematical operations on integers beyond `Number.MAX_SAFE_INTEGER` (`9,007,199,254,740,991`). BigInt literals are written with an `n` suffix.",
    "tip": "You cannot mix BigInt and regular Number in arithmetic without explicit conversion."
  },
  {
    "id": "js-oe-01",
    "topicId": "operators-expressions",
    "topicName": "Operators & Expressions",
    "question": "What is the key difference between `==` (loose equality) and `===` (strict equality)?",
    "code": "console.log(5 == \"5\");\nconsole.log(5 === \"5\");",
    "options": [
      "`==` performs type coercion before comparison; `===` checks both value and type without coercion.",
      "`===` only works for objects, while `==` works for primitives.",
      "`==` is faster than `===` because it skips type checks.",
      "`===` coerces strings to numbers automatically."
    ],
    "correctAnswer": 0,
    "explanation": "`==` converts the operands to a common type (coercion) before comparing (so `5 == \"5\"` is true). `===` checks both value and type without converting (so `5 === \"5\"` is false).",
    "tip": "Always use `===` and `!==` to prevent unpredictable type coercion bugs."
  },
  {
    "id": "js-oe-02",
    "topicId": "operators-expressions",
    "topicName": "Operators & Expressions",
    "question": "How does the Nullish Coalescing Operator (`??`) differ from the Logical OR Operator (`||`)?",
    "code": "const count = 0;\nconst a = count || 10;\nconst b = count ?? 10;",
    "options": [
      "`||` returns the fallback for ANY falsy value (`0`, `\"\"`, `false`), whereas `??` ONLY falls back for `null` or `undefined`.",
      "`??` only works on strings.",
      "`||` is newer and replaces `??`.",
      "Both produce identical results in all cases."
    ],
    "correctAnswer": 0,
    "explanation": "`||` considers `0`, `\"\"`, and `false` as falsy, so `0 || 10` evaluates to `10`. `??` only treats `null` and `undefined` as nullish, so `0 ?? 10` correctly evaluates to `0`.",
    "tip": "Use `??` when `0` or empty string `\"\"` are valid values you want to preserve."
  },
  {
    "id": "js-oe-03",
    "topicId": "operators-expressions",
    "topicName": "Operators & Expressions",
    "question": "What does the following logical expression evaluate to and return?",
    "code": "const result = \"Apple\" && \"Banana\" && 0 && \"Cherry\";\nconsole.log(result);",
    "options": [
      "`\"Apple\"`",
      "`\"Cherry\"`",
      "`0`",
      "`false`"
    ],
    "correctAnswer": 2,
    "explanation": "The logical `&&` operator evaluates from left to right and short-circuits on the FIRST falsy value, returning that actual value. Here, `0` is falsy, so it returns `0`.",
    "tip": "Logical AND (`&&`) returns the first falsy operand, or the last operand if all are truthy."
  },
  {
    "id": "js-oe-04",
    "topicId": "operators-expressions",
    "topicName": "Operators & Expressions",
    "question": "What is the difference between prefix increment (`++x`) and postfix increment (`x++`)?",
    "code": "let x = 5;\nlet y = x++;\nlet z = ++x;",
    "options": [
      "Postfix `x++` returns the original value before incrementing; Prefix `++x` increments first and returns the new incremented value.",
      "Prefix `++x` increments by 2, while postfix `x++` increments by 1.",
      "Postfix `x++` works on numbers, while prefix `++x` works on strings.",
      "There is no difference in their return values."
    ],
    "correctAnswer": 0,
    "explanation": "`x++` evaluates to current `x` (5), then `x` becomes 6 (`y = 5`). Next, `++x` increments `x` to 7 first, then evaluates to 7 (`z = 7`).",
    "tip": "Postfix: return then increment. Prefix: increment then return."
  },
  {
    "id": "js-oe-05",
    "topicId": "operators-expressions",
    "topicName": "Operators & Expressions",
    "question": "What is the output of the following Ternary Operator expression?",
    "code": "const age = 16;\nconst message = age >= 18 ? \"Adult\" : age >= 13 ? \"Teen\" : \"Child\";\nconsole.log(message);",
    "options": [
      "`\"Adult\"`",
      "`\"Teen\"`",
      "`\"Child\"`",
      "`true`"
    ],
    "correctAnswer": 1,
    "explanation": "`age >= 18` is false (16 >= 18 is false), so it evaluates the second branch: `age >= 13 ? \"Teen\" : \"Child\"`. Since `16 >= 13` is true, it returns `\"Teen\"`.",
    "tip": "Ternary syntax: `condition ? valueIfTrue : valueIfFalse`."
  },
  {
    "id": "js-oe-06",
    "topicId": "operators-expressions",
    "topicName": "Operators & Expressions",
    "question": "What will `console.log(1 + 2 + \"3\")` and `console.log(\"1\" + 2 + 3)` output?",
    "code": null,
    "options": [
      "`\"33\"` and `\"123\"`",
      "`\"6\"` and `\"6\"`",
      "`\"33\"` and `\"15\"`",
      "`6` and `\"123\"`"
    ],
    "correctAnswer": 0,
    "explanation": "Evaluation is left-to-right. In `1 + 2 + \"3\"`: `1 + 2 = 3`, then `3 + \"3\" = \"33\"` (coercion to string). In `\"1\" + 2 + 3`: `\"1\" + 2 = \"12\"`, then `\"12\" + 3 = \"123\"`.",
    "tip": "Once a string is encountered with `+`, subsequent additions become string concatenation."
  },
  {
    "id": "js-oe-07",
    "topicId": "operators-expressions",
    "topicName": "Operators & Expressions",
    "question": "What does the `!` (Logical NOT) operator do when applied twice (`!!val`) to a variable?",
    "code": "const val = \"Hello\";\nconsole.log(!!val);",
    "options": [
      "Converts the variable into an array.",
      "Explicitly coerces any value into its strict boolean equivalent (`true` if truthy, `false` if falsy).",
      "Inverts the characters in the string.",
      "Throws a SyntaxError."
    ],
    "correctAnswer": 1,
    "explanation": "`!val` inverts the truthiness and returns a boolean. The second `!` inverts it back, effectively casting any value to a pure boolean representation (`Boolean(val)`).",
    "tip": "`!!\"hello\" === true`, `!!0 === false`."
  },
  {
    "id": "js-cf-01",
    "topicId": "control-flow",
    "topicName": "Control Flow",
    "question": "What does 'Control Flow' mean in JavaScript execution?",
    "code": null,
    "options": [
      "The order and direction in which individual statements, instructions, or function calls are executed or evaluated.",
      "The amount of RAM memory allocated to browser tabs.",
      "The CSS layout rules governing flexbox and grid.",
      "The network bandwidth used by fetch requests."
    ],
    "correctAnswer": 0,
    "explanation": "Control flow is the order in which statements are executed. By default, code executes sequentially from top to bottom, but control flow statements (conditionals, loops, function calls) alter this linear path.",
    "tip": "Conditionals branch control flow; loops repeat control flow."
  },
  {
    "id": "js-cf-02",
    "topicId": "control-flow",
    "topicName": "Control Flow",
    "question": "What is sequential execution in JavaScript?",
    "code": "let x = 10;\nx = x + 5;\nconsole.log(x);",
    "options": [
      "Executing statements concurrently in random order.",
      "Executing statements one after another in order from the top of the file to the bottom.",
      "Executing code only when a user clicks the screen.",
      "Compiling code to WebAssembly."
    ],
    "correctAnswer": 1,
    "explanation": "Sequential execution is the baseline control flow where each statement runs in exact top-to-bottom order unless diverted by conditionals, loops, or function jumps.",
    "tip": "Every line finishes before the next sequential line begins on the call stack."
  },
  {
    "id": "js-cf-03",
    "topicId": "control-flow",
    "topicName": "Control Flow",
    "question": "Which of the following structures is used to divert control flow based on whether a boolean condition is met?",
    "code": null,
    "options": [
      "`let` and `const`",
      "`if...else`, `switch`, and ternary operators",
      "`Math.abs()`",
      "`console.log()`"
    ],
    "correctAnswer": 1,
    "explanation": "Conditional branching constructs (`if...else`, `switch`, ternary expressions) inspect conditions and choose which branch of code to execute.",
    "tip": "Branching creates decision forks in your code."
  },
  {
    "id": "js-cf-04",
    "topicId": "control-flow",
    "topicName": "Control Flow",
    "question": "How does a function call affect the control flow and Call Stack?",
    "code": null,
    "options": [
      "The current execution pauses, the called function is pushed onto the Call Stack and executed, and upon return, control resumes where it left off.",
      "The program terminates immediately.",
      "The function runs on a separate thread in the background.",
      "The function is ignored until the browser closes."
    ],
    "correctAnswer": 0,
    "explanation": "When a function is called, execution jumps to the function body, pushing a new frame to the Call Stack. When it finishes (or reaches `return`), the frame is popped and control resumes at the calling point.",
    "tip": "The Call Stack tracks the current execution location across nested function calls."
  },
  {
    "id": "js-cf-05",
    "topicId": "control-flow",
    "topicName": "Control Flow",
    "question": "What happens when an unhandled exception is thrown during synchronous control flow?",
    "code": "function stepA() { throw new Error(\"Boom\"); }\nfunction stepB() { console.log(\"Done\"); }\nstepA();\nstepB();",
    "options": [
      "`stepB` continues to execute normally.",
      "Synchronous execution immediately halts, the remaining statements in the call stack are skipped, and the error propagates up.",
      "The computer restarts.",
      "The error is silently ignored."
    ],
    "correctAnswer": 1,
    "explanation": "An unhandled exception immediately interrupts the normal control flow, unwinds the Call Stack, and stops execution of subsequent code unless caught by a `try...catch` block.",
    "tip": "Use `try...catch` when you expect a risky operation might fail."
  },
  {
    "id": "js-cf-06",
    "topicId": "control-flow",
    "topicName": "Control Flow",
    "question": "What is an asynchronous control flow in JavaScript?",
    "code": "console.log(\"A\");\nsetTimeout(() => console.log(\"B\"), 0);\nconsole.log(\"C\");",
    "options": [
      "Code that prints: `A`, `B`, `C` synchronously.",
      "Operations (like timers, network calls) that are initiated now but complete later, allowing the main thread to continue executing subsequent statements (`A`, `C`, then `B`).",
      "Code that only works on backend database servers.",
      "Code that crashes the browser."
    ],
    "correctAnswer": 1,
    "explanation": "In asynchronous execution, long-running or delayed tasks are delegated to Web APIs, allowing synchronous code (`A`, `C`) to finish first before the callback (`B`) is picked up from the task queue.",
    "tip": "Output order is `A` -> `C` -> `B` because `setTimeout` callback is placed on the task queue."
  },
  {
    "id": "js-ie-01",
    "topicId": "if-else",
    "topicName": "If / Else & Guard Clauses",
    "question": "What is a 'Guard Clause' in function design, and why is it recommended?",
    "code": "// Example:\nfunction processPayment(user, amount) {\n  if (!user) return false;\n  if (amount <= 0) return false;\n  if (!user.hasCard) return false;\n  \n  // Happy path code here...\n}",
    "options": [
      "A special CSS property that locks user inputs.",
      "An early return statement at the beginning of a function that checks for invalid conditions/edge cases, flattening nested if-else pyramids and improving readability.",
      "A loop that prevents functions from being called more than 5 times.",
      "A TypeScript interface for error handling."
    ],
    "correctAnswer": 1,
    "explanation": "Guard clauses handle validation and error conditions early by returning immediately. This avoids deep nesting (pyramids of if/else) and keeps the 'happy path' unindented and readable.",
    "tip": "Fail fast and return early to keep your core logic clean."
  },
  {
    "id": "js-ie-02",
    "topicId": "if-else",
    "topicName": "If / Else & Guard Clauses",
    "question": "What will the following code output?",
    "code": "let score = 75;\nif (score >= 90) {\n  console.log(\"A\");\n} else if (score >= 70) {\n  console.log(\"B\");\n} else if (score >= 60) {\n  console.log(\"C\");\n} else {\n  console.log(\"F\");\n}",
    "options": [
      "`\"A\"`",
      "`\"B\"`",
      "`\"B\"` and `\"C\"`",
      "`\"C\"`"
    ],
    "correctAnswer": 1,
    "explanation": "In an `if...else if...else` chain, once a condition evaluates to true (`score >= 70` is true for 75), its block executes and the entire rest of the chain is skipped. Only `\"B\"` is logged.",
    "tip": "Only one block in an `if...else if...else` chain will ever execute."
  },
  {
    "id": "js-ie-03",
    "topicId": "if-else",
    "topicName": "If / Else & Guard Clauses",
    "question": "What is the result of this conditional statement containing an assignment instead of comparison?",
    "code": "let isValid = false;\nif (isValid = true) {\n  console.log(\"YES\");\n} else {\n  console.log(\"NO\");\n}",
    "options": [
      "`\"NO\"` because isValid was initialized to false.",
      "`\"YES\"` because `isValid = true` is an assignment expression that assigns `true` and evaluates to `true`.",
      "Throws a SyntaxError.",
      "Outputs `undefined`."
    ],
    "correctAnswer": 1,
    "explanation": "Single `=` is assignment, not comparison (`===`). `isValid = true` assigns `true` to `isValid` and evaluates to the assigned value `true`, triggering the `if` block. This is a common bug!",
    "tip": "Always use `===` for comparisons to avoid accidental variable assignment."
  },
  {
    "id": "js-ie-04",
    "topicId": "if-else",
    "topicName": "If / Else & Guard Clauses",
    "question": "How does short-circuit evaluation work with `&&` in conditional execution?",
    "code": "const isLoggedIn = true;\nconst hasAdminRole = false;\nisLoggedIn && hasAdminRole && grantSuperAccess();",
    "options": [
      "`grantSuperAccess()` is executed because `isLoggedIn` is true.",
      "`grantSuperAccess()` is NOT executed because `hasAdminRole` is false, causing the evaluation to short-circuit immediately.",
      "Both functions are executed in parallel.",
      "A TypeError is thrown."
    ],
    "correctAnswer": 1,
    "explanation": "With `&&`, evaluation stops as soon as any operand is falsy. Because `hasAdminRole` is `false`, the remaining expression (`grantSuperAccess()`) is never called.",
    "tip": "Short-circuiting means JS won't evaluate the rest of the expression once the outcome is decided."
  },
  {
    "id": "js-ie-05",
    "topicId": "if-else",
    "topicName": "If / Else & Guard Clauses",
    "question": "What is the output of this nested conditional statement?",
    "code": "const age = 20;\nconst hasLicense = false;\n\nif (age >= 18) {\n  if (hasLicense) {\n    console.log(\"Can drive\");\n  } else {\n    console.log(\"Needs license\");\n  }\n} else {\n  console.log(\"Too young\");\n}",
    "options": [
      "`\"Can drive\"`",
      "`\"Needs license\"`",
      "`\"Too young\"`",
      "`undefined`"
    ],
    "correctAnswer": 1,
    "explanation": "Since `age >= 18` is true (20 >= 18), control enters the outer if block. Inside, `hasLicense` is false, so the inner `else` block runs, printing `\"Needs license\"`.",
    "tip": "Nested if statements evaluate their inner conditions only if the outer condition passes."
  },
  {
    "id": "js-ie-06",
    "topicId": "if-else",
    "topicName": "If / Else & Guard Clauses",
    "question": "Why should deep nesting of `if / else` blocks be avoided in clean code?",
    "code": null,
    "options": [
      "JavaScript engines can only compile up to 2 nested `if` statements.",
      "Deep nesting (the 'Pyramid of Doom' / high cyclomatic complexity) makes code difficult to read, reason about, test, and maintain.",
      "Nested `if` statements disable CSS transitions in the browser.",
      "Variables declared inside nested `if` statements cannot be garbage collected."
    ],
    "correctAnswer": 1,
    "explanation": "Deep nesting creates high cognitive load and complex branching logic. Refactoring with guard clauses, lookup tables, or helper functions makes code far cleaner.",
    "tip": "Aim for a maximum nesting level of 1-2 layers; use guard clauses to flatten."
  },
  {
    "id": "js-ie-07",
    "topicId": "if-else",
    "topicName": "If / Else & Guard Clauses",
    "question": "What will be printed when checking an empty string in an `if` condition?",
    "code": "const username = \"\";\nif (username) {\n  console.log(\"User exists: \" + username);\n} else {\n  console.log(\"Anonymous user\");\n}",
    "options": [
      "`\"User exists: \"`",
      "`\"Anonymous user\"`",
      "Throws a ReferenceError",
      "`null`"
    ],
    "correctAnswer": 1,
    "explanation": "An empty string `\"\"` is one of JavaScript's falsy values. The `if` condition evaluates to false, jumping directly to the `else` block.",
    "tip": "Empty string `\"\"` is falsy; non-empty strings (including `\" \"` with a space) are truthy."
  },
  {
    "id": "js-sw-01",
    "topicId": "switch",
    "topicName": "Switch Statements",
    "question": "What happens if you omit the `break` keyword at the end of a `case` block in a `switch` statement?",
    "code": "const role = \"editor\";\nswitch(role) {\n  case \"editor\":\n    console.log(\"Can edit content\");\n  case \"viewer\":\n    console.log(\"Can view content\");\n    break;\n}",
    "options": [
      "A SyntaxError is thrown immediately.",
      "Execution 'falls through' and continues running the next case block (`viewer`) regardless of whether the condition matches, until a `break` is encountered.",
      "The switch statement restarts from the first case.",
      "Only the default block executes."
    ],
    "correctAnswer": 1,
    "explanation": "Without a `break` statement, execution falls through to the subsequent case block, running its code even if its case expression does not match. In this example, BOTH 'Can edit content' and 'Can view content' will be logged.",
    "tip": "Always include `break;` unless intentional fall-through grouping is desired."
  },
  {
    "id": "js-sw-02",
    "topicId": "switch",
    "topicName": "Switch Statements",
    "question": "What equality comparison does the `switch` statement use when matching cases?",
    "code": "const val = \"5\";\nswitch(val) {\n  case 5:\n    console.log(\"Matched number 5\");\n    break;\n  default:\n    console.log(\"Default case\");\n}",
    "options": [
      "Loose equality (`==`) with type coercion.",
      "Strict equality (`===`) with no type conversion; hence `\"5\"` will NOT match number `5`.",
      "Object identity (`Object.is`) only.",
      "Regex pattern matching."
    ],
    "correctAnswer": 1,
    "explanation": "`switch` statements use strict equality (`===`). Since `\"5\" !== 5` (string vs number), the case does not match and execution goes to the `default` case.",
    "tip": "`switch` requires exact value AND type matching."
  },
  {
    "id": "js-sw-03",
    "topicId": "switch",
    "topicName": "Switch Statements",
    "question": "What is the purpose of the `default` clause in a `switch` statement?",
    "code": null,
    "options": [
      "It must always be placed as the very first line of the switch block.",
      "It acts as a fallback that executes if none of the `case` values match the expression.",
      "It resets all variables declared inside the switch.",
      "It is required by JavaScript syntax or else code fails to parse."
    ],
    "correctAnswer": 1,
    "explanation": "The `default` clause is optional but acts as a catch-all fallback if no case matches, analogous to the final `else` block in an `if...else` chain.",
    "tip": "Use `default` to handle unexpected or unhandled input values gracefully."
  },
  {
    "id": "js-sw-04",
    "topicId": "switch",
    "topicName": "Switch Statements",
    "question": "How can multiple cases share the exact same execution block in a `switch` statement?",
    "code": null,
    "options": [
      "Separate case values with commas: `case 'a', 'b':`",
      "Stack case clauses consecutively without breaks: `case 'a': case 'b': doSomething(); break;`",
      "Wrap cases in an array: `case ['a', 'b']:`",
      "JavaScript does not support multi-case grouping."
    ],
    "correctAnswer": 1,
    "explanation": "By stacking cases without code or `break` between them, execution falls through from any matching case to the shared code block.",
    "tip": "Stacking cases is a clean way to handle multiple synonyms (e.g. `'yes'`, `'y'`, `'true'`)."
  },
  {
    "id": "js-sw-05",
    "topicId": "switch",
    "topicName": "Switch Statements",
    "question": "Why should you wrap case blocks in curly braces `{}` when declaring `let` or `const` variables inside them?",
    "code": "switch(action) {\n  case 'create': {\n    const item = { id: 1 };\n    break;\n  }\n  case 'update': {\n    const item = { id: 2 };\n    break;\n  }\n}",
    "options": [
      "Because the entire switch statement shares a single lexical scope; without `{}` blocks, declaring `const item` in multiple cases throws a SyntaxError: Identifier 'item' has already been declared.",
      "To speed up execution in Google V8 engine.",
      "Curly braces are mandatory for switch statements to compile.",
      "To convert the switch into an async function."
    ],
    "correctAnswer": 0,
    "explanation": "The whole `switch` block is a single scope. Without `{}` in each case, declaring the same `let` or `const` identifier in multiple cases causes a re-declaration SyntaxError. Enclosing cases in `{}` creates a separate block scope for each case.",
    "tip": "Always wrap case logic in `{ ... }` if you declare `let` or `const` variables."
  },
  {
    "id": "js-sw-06",
    "topicId": "switch",
    "topicName": "Switch Statements",
    "question": "When is a `switch` statement preferred over multiple `if...else if` statements?",
    "code": null,
    "options": [
      "When evaluating complex boolean ranges (like `x > 10 && y < 20`).",
      "When comparing a single discrete variable or expression against multiple fixed values or enum constants.",
      "When working exclusively with asynchronous promises.",
      "When you need to mutate the DOM directly."
    ],
    "correctAnswer": 1,
    "explanation": "`switch` is ideal and readable when checking a single expression against a known list of discrete values (like user actions, status codes, commands, or modes).",
    "tip": "Use `if/else` for ranges/complex conditions; use `switch` for discrete value matching."
  },
  {
    "id": "js-lp-01",
    "topicId": "loops",
    "topicName": "Loops (for, while, for..of, for..in)",
    "question": "What is the primary difference between a `while` loop and a `do...while` loop?",
    "code": "let x = 10;\ndo {\n  console.log(x);\n} while (x < 5);",
    "options": [
      "A `while` loop checks the condition before executing the body; a `do...while` loop executes the body at least ONCE before checking the condition.",
      "A `do...while` loop is asynchronous.",
      "A `while` loop cannot use the `break` keyword.",
      "There is no difference in execution behavior."
    ],
    "correctAnswer": 0,
    "explanation": "A `do...while` loop evaluates its condition at the bottom of the loop body, guaranteeing that the code block runs at least once even if the initial condition is false.",
    "tip": "Use `do...while` when an action must happen at least once before validation (e.g. user prompts)."
  },
  {
    "id": "js-lp-02",
    "topicId": "loops",
    "topicName": "Loops (for, while, for..of, for..in)",
    "question": "What is the difference between `for...of` and `for...in` in JavaScript?",
    "code": "const colors = [\"red\", \"green\", \"blue\"];",
    "options": [
      "`for...of` iterates over the VALUES of an iterable (arrays, strings, maps); `for...in` iterates over the enumerable PROPERTY KEYS (indexes/object keys).",
      "`for...in` is for arrays only; `for...of` is for objects only.",
      "`for...of` can only run 10 iterations maximum.",
      "`for...in` is deprecated in modern ES6+."
    ],
    "correctAnswer": 0,
    "explanation": "`for...of` yields the actual values (`'red'`, `'green'`, `'blue'`). `for...in` yields the property names/indexes (`'0'`, `'1'`, `'2'`). For objects, use `for...in` or `Object.entries()`; for arrays, use `for...of`.",
    "tip": "Rule of thumb: `for...of` for array values; `for...in` for object keys."
  },
  {
    "id": "js-lp-03",
    "topicId": "loops",
    "topicName": "Loops (for, while, for..of, for..in)",
    "question": "How do `break` and `continue` differ within loop control?",
    "code": "for (let i = 1; i <= 5; i++) {\n  if (i === 3) continue;\n  if (i === 5) break;\n  console.log(i);\n}",
    "options": [
      "`break` terminates the entire loop immediately; `continue` skips only the current iteration and proceeds to the next iteration.",
      "`continue` terminates the loop; `break` skips one step.",
      "Both keywords do the exact same thing.",
      "`continue` can only be used in `while` loops."
    ],
    "correctAnswer": 0,
    "explanation": "`continue` skips the remainder of iteration 3 (so 3 is not logged). `break` halts the loop at 5. The printed values are `1`, `2`, and `4`.",
    "tip": "Break = exit loop completely; Continue = jump to next loop iteration."
  },
  {
    "id": "js-lp-04",
    "topicId": "loops",
    "topicName": "Loops (for, while, for..of, for..in)",
    "question": "What causes an 'Infinite Loop' in JavaScript, and what is its consequence?",
    "code": "// Example:\nlet count = 0;\nwhile (count < 5) {\n  console.log(count);\n  // Missing count++\n}",
    "options": [
      "A loop condition that never becomes false, causing the JavaScript thread to hang, block the call stack, and freeze the browser tab/process.",
      "A loop that automatically switches to a background worker thread.",
      "A loop that executes once every 24 hours.",
      "A syntax error caught before execution."
    ],
    "correctAnswer": 0,
    "explanation": "If the termination condition of a loop is never met (e.g. counter not incremented), the loop continues indefinitely, consuming 100% CPU on the main thread and freezing the page.",
    "tip": "Always ensure loop variables are updated towards the exit condition on every iteration."
  },
  {
    "id": "js-lp-05",
    "topicId": "loops",
    "topicName": "Loops (for, while, for..of, for..in)",
    "question": "What will be printed by this classic `for` loop with `var` vs `let` in asynchronous callbacks?",
    "code": "for (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100);\n}",
    "options": [
      "`0`, `1`, `2`",
      "`3`, `3`, `3` because `var` is function-scoped and shares the single variable `i` across all iterations.",
      "`undefined`, `undefined`, `undefined`",
      "`0`, `0`, `0`"
    ],
    "correctAnswer": 1,
    "explanation": "Because `var` has function/global scope, all 3 callbacks close over the exact same variable `i`. By the time the `setTimeout` callbacks execute (after 100ms), the loop has finished and `i` is `3`. Using `let i = 0` solves this by creating a fresh binding per iteration.",
    "tip": "Always use `let` in `for` loops so each iteration gets its own scoped variable."
  },
  {
    "id": "js-lp-06",
    "topicId": "loops",
    "topicName": "Loops (for, while, for..of, for..in)",
    "question": "What is the three-part structure of a standard JavaScript `for` loop?",
    "code": "for (initialization; condition; afterthought) {\n  // body\n}",
    "options": [
      "Declaration, Execution, Termination",
      "Initialization (sets counter), Condition (evaluated before each turn), and Afterthought / Update (executed at end of each turn)",
      "Import, Component, Render",
      "Try, Catch, Finally"
    ],
    "correctAnswer": 1,
    "explanation": "A standard `for` loop contains: (1) Initialization (e.g., `let i = 0`), (2) Condition check (e.g., `i < arr.length`), and (3) Update expression (e.g., `i++`).",
    "tip": "All three expressions are optional (`for(;;)`), but omitting them risks infinite loops."
  },
  {
    "id": "js-lp-07",
    "topicId": "loops",
    "topicName": "Loops (for, while, for..of, for..in)",
    "question": "What will `console.log(key)` output when looping over this object with `for...in`?",
    "code": "const car = { make: \"Toyota\", year: 2024 };\nfor (const key in car) {\n  console.log(key + \": \" + car[key]);\n}",
    "options": [
      "`make: Toyota` followed by `year: 2024`",
      "`0: make` followed by `1: year`",
      "`Toyota: make` followed by `2024: year`",
      "Throws a TypeError because objects are not iterable."
    ],
    "correctAnswer": 0,
    "explanation": "`for...in` iterates over the string property keys (`\"make\"`, `\"year\"`). `car[key]` uses bracket notation to access the property value (`\"Toyota\"`, `2024`).",
    "tip": "Use `for...in` for objects, and access values using bracket notation `obj[key]`."
  },
  {
    "id": "js-fn-01",
    "topicId": "functions",
    "topicName": "Functions & Declarations",
    "question": "What is the primary difference between a Function Declaration and a Function Expression in terms of hoisting?",
    "code": "// A: Function Declaration\nsayHi();\nfunction sayHi() { console.log(\"Hi\"); }\n\n// B: Function Expression\nsayHello();\nconst sayHello = function() { console.log(\"Hello\"); };",
    "options": [
      "Function Declarations are fully hoisted with their body, so they can be called before they are defined in code; Function Expressions assigned to `const`/`let` are not hoisted and throw a ReferenceError if called before declaration.",
      "Function Expressions are hoisted, but Function Declarations are not.",
      "Both can be called before their definitions without error.",
      "Function Expressions can only be used in Node.js."
    ],
    "correctAnswer": 0,
    "explanation": "Function declarations are hoisted in their entirety to the top of the scope. Function expressions are treated as variable assignments; accessing `const sayHello` before its declaration line triggers the Temporal Dead Zone.",
    "tip": "Function declarations can be called anywhere in their enclosing scope."
  },
  {
    "id": "js-fn-02",
    "topicId": "functions",
    "topicName": "Functions & Declarations",
    "question": "What does it mean that functions are 'First-Class Citizens' (or First-Class Objects) in JavaScript?",
    "code": null,
    "options": [
      "Functions have top CPU execution priority in the browser engine.",
      "Functions can be stored in variables, passed as arguments to other functions, returned from functions, and assigned properties just like any other object.",
      "Functions cannot be passed into arrays.",
      "Functions can only be created by system administrators."
    ],
    "correctAnswer": 1,
    "explanation": "In JavaScript, functions are first-class citizens. They can be treated like any other value: assigned to variables, passed as arguments (callbacks), returned from functions (higher-order functions), and held in data structures.",
    "tip": "First-class functions are what make functional programming and callbacks possible in JS."
  },
  {
    "id": "js-fn-03",
    "topicId": "functions",
    "topicName": "Functions & Declarations",
    "question": "What does a JavaScript function return by default if there is no explicit `return` statement?",
    "code": "function doWork() {\n  const result = 5 * 10;\n}\nconsole.log(doWork());",
    "options": [
      "`null`",
      "`undefined`",
      "`0`",
      "`50`"
    ],
    "correctAnswer": 1,
    "explanation": "If a function finishes execution without reaching a `return` statement with an expression, it implicitly returns `undefined`.",
    "tip": "A function without `return` always yields `undefined`."
  },
  {
    "id": "js-fn-04",
    "topicId": "functions",
    "topicName": "Functions & Declarations",
    "question": "What happens when the `return` statement is executed inside a function?",
    "code": "function checkStatus(isActive) {\n  if (!isActive) {\n    return \"Inactive\";\n  }\n  console.log(\"Processing active status...\");\n  return \"Active\";\n}",
    "options": [
      "The function pauses and resumes later.",
      "The function terminates execution IMMEDIATELY and passes the specified value back to the caller; subsequent lines in the function are not executed.",
      "All remaining lines in the function continue running in background.",
      "The return statement is ignored if placed inside an `if` block."
    ],
    "correctAnswer": 1,
    "explanation": "The `return` statement immediately stops function execution and delivers the return value to the caller. Any code following `return` in that execution branch is unreachable.",
    "tip": "Return stops execution dead in its tracks."
  },
  {
    "id": "js-fn-05",
    "topicId": "functions",
    "topicName": "Functions & Declarations",
    "question": "What is an Anonymous Function in JavaScript?",
    "code": "const greet = function() {\n  console.log(\"Hello!\");\n};",
    "options": [
      "A function that hides the user's IP address.",
      "A function created without an identifier name following the `function` keyword.",
      "A function that cannot accept parameters.",
      "A function that only runs in private browsing mode."
    ],
    "correctAnswer": 1,
    "explanation": "An anonymous function is a function without a specified name. They are commonly used as function expressions, callback arguments (e.g. in `setTimeout` or `arr.map()`), or IIFEs.",
    "tip": "Anonymous functions are often passed directly into methods like `array.map(function(item) { ... })`."
  },
  {
    "id": "js-fn-06",
    "topicId": "functions",
    "topicName": "Functions & Declarations",
    "question": "What is an Immediately Invoked Function Expression (IIFE)?",
    "code": "(function() {\n  const secret = \"42\";\n  console.log(\"IIFE executed!\");\n})();",
    "options": [
      "A function that runs automatically every 5 seconds.",
      "A JavaScript function that runs immediately as soon as it is defined, creating a private scope for its variables.",
      "A function that cannot return values.",
      "An asynchronous fetch handler."
    ],
    "correctAnswer": 1,
    "explanation": "An IIFE is a function expression enclosed in parentheses `(...)` followed by `()` that invokes it immediately. Before block scoping (`let`/`const`), IIFEs were the standard pattern for data encapsulation and preventing global namespace pollution.",
    "tip": "IIFE syntax: `(function() { ... })();`."
  },
  {
    "id": "js-fn-07",
    "topicId": "functions",
    "topicName": "Functions & Declarations",
    "question": "What is a Higher-Order Function in JavaScript?",
    "code": "function operate(a, b, operationFn) {\n  return operationFn(a, b);\n}",
    "options": [
      "A function that consumes more than 1MB of memory.",
      "A function that accepts one or more functions as arguments, or returns a function as its result.",
      "A function that must be defined inside a class.",
      "A built-in method on the Math object."
    ],
    "correctAnswer": 1,
    "explanation": "A higher-order function is any function that operates on other functions, either by taking them as arguments (e.g., `map`, `filter`, `addEventListener`) or by returning a new function.",
    "tip": "Array methods like `map`, `filter`, and `reduce` are classic Higher-Order Functions."
  },
  {
    "id": "js-af-01",
    "topicId": "arrow-functions",
    "topicName": "Arrow Functions",
    "question": "How does the `this` keyword behave inside an Arrow Function compared to a traditional function?",
    "code": "const user = {\n  name: \"Sam\",\n  sayTraditional: function() { console.log(this.name); },\n  sayArrow: () => { console.log(this.name); }\n};",
    "options": [
      "Arrow functions bind `this` dynamically based on how they are called.",
      "Arrow functions do NOT have their own `this` binding; they lexically inherit `this` from the enclosing outer scope in which they were created.",
      "Arrow functions always bind `this` to `null`.",
      "Arrow functions cannot be used inside objects."
    ],
    "correctAnswer": 1,
    "explanation": "Arrow functions have lexical `this`. They do not have their own `this` context and instead retain the `this` value of their enclosing lexical context at the time of definition.",
    "tip": "Do NOT use arrow functions as object methods if you need `this` to refer to the object."
  },
  {
    "id": "js-af-02",
    "topicId": "arrow-functions",
    "topicName": "Arrow Functions",
    "question": "What is an 'Implicit Return' in arrow function syntax?",
    "code": "const square = x => x * x;",
    "options": [
      "A return statement that only triggers when an error happens.",
      "When curly braces `{}` are omitted in a single-expression arrow function body, the expression result is returned automatically without needing the `return` keyword.",
      "A function that returns `undefined` implicitly.",
      "A return type declared in TypeScript."
    ],
    "correctAnswer": 1,
    "explanation": "If an arrow function consists of a single expression without curly braces `{ }`, that expression is implicitly evaluated and returned (concise body). If `{ }` is used, an explicit `return` is required.",
    "tip": "`const add = (a, b) => a + b;` returns the sum automatically."
  },
  {
    "id": "js-af-03",
    "topicId": "arrow-functions",
    "topicName": "Arrow Functions",
    "question": "How do you implicitly return an Object Literal from an arrow function without syntax error?",
    "code": null,
    "options": [
      "`const createUser = name => { name: name };`",
      "`const createUser = name => ({ name: name });`",
      "`const createUser = name => return { name: name };`",
      "`const createUser = name => [ name: name ];`"
    ],
    "correctAnswer": 1,
    "explanation": "Because JavaScript parses `{` as the start of a function block rather than an object literal, you must wrap the object in parentheses `({ key: val })` to force expression evaluation and implicit return.",
    "tip": "Always wrap object returns in parentheses: `() => ({ key: value })`."
  },
  {
    "id": "js-af-04",
    "topicId": "arrow-functions",
    "topicName": "Arrow Functions",
    "question": "Can arrow functions be used as Constructor Functions with the `new` keyword?",
    "code": "const Person = (name) => { this.name = name; };\nconst p = new Person(\"Alex\");",
    "options": [
      "Yes, they work identical to regular function constructors.",
      "No, arrow functions do not have a `[[Construct]]` internal method or a `.prototype` property, and invoking them with `new` throws a `TypeError: Person is not a constructor`.",
      "Yes, but only in strict mode.",
      "Yes, but only if they return an object."
    ],
    "correctAnswer": 1,
    "explanation": "Arrow functions cannot be constructors. They lack `.prototype` and the internal `[[Construct]]` method, so `new ArrowFunc()` throws a `TypeError`.",
    "tip": "Use ES6 `class` or regular `function` for constructors."
  },
  {
    "id": "js-af-05",
    "topicId": "arrow-functions",
    "topicName": "Arrow Functions",
    "question": "Do arrow functions have access to the special `arguments` object of their own?",
    "code": "const showArgs = () => {\n  console.log(arguments.length);\n};",
    "options": [
      "Yes, all functions have their own `arguments` object.",
      "No, arrow functions do not bind their own `arguments` object; they inherit it from the nearest non-arrow enclosing function or throw a ReferenceError if in global scope.",
      "Yes, but only when called with more than 3 arguments.",
      "`arguments` is converted to an array automatically in arrow functions."
    ],
    "correctAnswer": 1,
    "explanation": "Arrow functions do not have their own `arguments` binding. To collect arguments in an arrow function, use modern Rest Parameters `(...args) => { ... }`.",
    "tip": "Use `(...args) => { console.log(args); }` in arrow functions instead of `arguments`."
  },
  {
    "id": "js-af-06",
    "topicId": "arrow-functions",
    "topicName": "Arrow Functions",
    "question": "What is the cleanest single-parameter arrow function syntax?",
    "code": null,
    "options": [
      "`const double = (x) => { return x * 2; };`",
      "`const double = x => x * 2;`",
      "`const double = (x) => { x * 2 };`",
      "`const double = x : x * 2;`"
    ],
    "correctAnswer": 1,
    "explanation": "When an arrow function has exactly one parameter, the parentheses around the parameter can be omitted, and with a single expression, `{}` and `return` can also be omitted: `x => x * 2`.",
    "tip": "0 parameters or 2+ parameters require parentheses: `() => ...` or `(a, b) => ...`."
  },
  {
    "id": "js-af-07",
    "topicId": "arrow-functions",
    "topicName": "Arrow Functions",
    "question": "In what scenario is an arrow function NOT recommended?",
    "code": null,
    "options": [
      "As a callback in `array.map()` or `array.filter()`.",
      "As an object method that needs to reference object properties via `this`, or as a DOM event listener that needs `this` to refer to the clicked element.",
      "Inside `setTimeout` callbacks.",
      "In promise `.then()` handlers."
    ],
    "correctAnswer": 1,
    "explanation": "Because arrow functions do not bind their own `this`, using them as object methods causes `this` to point to the outer/window object rather than the instance.",
    "tip": "Use standard methods `method() { ... }` inside objects when accessing `this`."
  },
  {
    "id": "js-pr-01",
    "topicId": "parameters-returns",
    "topicName": "Parameters & Return Values",
    "question": "How do Default Parameters work in JavaScript (ES6)?",
    "code": "function greet(name = \"Guest\", role = \"Viewer\") {\n  return \"Welcome, \" + name + \" (\" + role + \")\";\n}\nconsole.log(greet(undefined, \"Admin\"));",
    "options": [
      "`Welcome, undefined (Admin)`",
      "`Welcome, Guest (Admin)`",
      "`Welcome, Guest (Viewer)`",
      "Throws a TypeError because the first argument is undefined."
    ],
    "correctAnswer": 1,
    "explanation": "Default parameters trigger when an argument is omitted OR explicitly passed as `undefined`. Passing `null` does NOT trigger the default (it stays `null`).",
    "tip": "Passing `undefined` triggers the default parameter value; passing `null` does not."
  },
  {
    "id": "js-pr-02",
    "topicId": "parameters-returns",
    "topicName": "Parameters & Return Values",
    "question": "What are Rest Parameters (`...args`) and where must they appear in a function signature?",
    "code": "function sum(first, ...rest) {\n  return first + rest.reduce((acc, curr) => acc + curr, 0);\n}",
    "options": [
      "Rest parameters collect remaining arguments into a real JavaScript Array and MUST be the very last parameter in the function signature.",
      "Rest parameters must be placed at the beginning of the parameter list.",
      "Rest parameters only accept numbers.",
      "A function can have multiple rest parameters: `(...a, ...b)`."
    ],
    "correctAnswer": 0,
    "explanation": "Rest parameters (`...args`) collect all trailing arguments into an actual Array instance. Syntax rules require the rest parameter to be the last parameter in the declaration.",
    "tip": "`...rest` must be the final parameter: `(a, b, ...others)`."
  },
  {
    "id": "js-pr-03",
    "topicId": "parameters-returns",
    "topicName": "Parameters & Return Values",
    "question": "What is the key difference between the legacy `arguments` object and ES6 Rest Parameters (`...args`)?",
    "code": null,
    "options": [
      "`arguments` is an Array-like object (lacking array methods like `.map`, `.filter`, `.reduce`); Rest Parameters produce a real Array with all Array methods available.",
      "`arguments` only works in Node.js.",
      "Rest parameters cannot be used with numbers.",
      "`arguments` is faster and should always be used."
    ],
    "correctAnswer": 0,
    "explanation": "`arguments` is an array-like object with `.length` and indices, but lacks `.map()`, `.forEach()`, etc. Rest parameters (`...args`) create a true Array with full prototype methods.",
    "tip": "Prefer modern rest parameters `(...args)` over legacy `arguments`."
  },
  {
    "id": "js-pr-04",
    "topicId": "parameters-returns",
    "topicName": "Parameters & Return Values",
    "question": "How are primitive types passed to functions in JavaScript versus objects/arrays?",
    "code": "function modify(num, obj) {\n  num = 100;\n  obj.name = \"Updated\";\n}\nlet a = 10;\nlet b = { name: \"Original\" };\nmodify(a, b);",
    "options": [
      "Both are passed by value with complete copies made.",
      "Primitives are passed by VALUE (a copy of the value is passed, so `a` remains `10`); Objects/Arrays are passed by REFERENCE (the memory reference is shared, so `b.name` becomes `'Updated'`).",
      "Primitives are mutated, objects are immutable.",
      "Both are completely immutable in function calls."
    ],
    "correctAnswer": 1,
    "explanation": "Primitives are copied by value (modifying `num` does not affect `a`). Objects are passed by reference sharing: mutating a property on `obj` modifies the original object in memory.",
    "tip": "Mutating an object argument affects the original object outside the function!"
  },
  {
    "id": "js-pr-05",
    "topicId": "parameters-returns",
    "topicName": "Parameters & Return Values",
    "question": "How can a JavaScript function return multiple values cleanly?",
    "code": null,
    "options": [
      "Separate expressions with semicolons: `return a; b; c;`",
      "Package the values into an Object (`return { min, max, average };`) or an Array (`return [min, max, average];`) and destructure at the call site.",
      "Call the `return` statement multiple times in succession.",
      "JavaScript functions can only return a single primitive string."
    ],
    "correctAnswer": 1,
    "explanation": "Functions return a single entity. To return multiple values, bundle them into an object or array, which the caller can unpack via destructuring (`const { min, max } = getStats()`).",
    "tip": "Object returns are especially clear because property names make caller destructuring self-documenting."
  },
  {
    "id": "js-pr-06",
    "topicId": "parameters-returns",
    "topicName": "Parameters & Return Values",
    "question": "What happens if a caller passes fewer arguments than the function has declared parameters (and no default values are set)?",
    "code": "function multiply(a, b) {\n  return a * b;\n}\nconsole.log(multiply(5));",
    "options": [
      "Throws a `WrongNumberOfArgumentsError`.",
      "The missing parameter `b` is assigned `undefined`, resulting in `5 * undefined = NaN`.",
      "The missing parameter defaults to `0`.",
      "The function returns `5`."
    ],
    "correctAnswer": 1,
    "explanation": "JavaScript does not enforce parameter counts. Missing arguments are assigned `undefined`. Multiplying a number by `undefined` evaluates to `NaN`.",
    "tip": "Provide default parameter values (`b = 1`) to handle missing arguments safely."
  },
  {
    "id": "js-pr-07",
    "topicId": "parameters-returns",
    "topicName": "Parameters & Return Values",
    "question": "Can parameters be destructured directly inside the function parameter list?",
    "code": "function displayUser({ name, age, country = \"Unknown\" }) {\n  console.log(`${name} is ${age} from ${country}`);\n}",
    "options": [
      "Yes, parameter destructuring with default values is fully supported in modern JavaScript.",
      "No, destructuring can only happen inside the function body.",
      "Only in TypeScript.",
      "Only arrays can be destructured in parameters, not objects."
    ],
    "correctAnswer": 0,
    "explanation": "Destructuring directly in the parameter list is a clean, widely used idiom in modern JavaScript and React (for props). You can even supply defaults for specific destructured properties.",
    "tip": "This pattern is ubiquitous in React components: `function Card({ title, subtitle }) { ... }`."
  },
  {
    "id": "js-cl-01",
    "topicId": "closures",
    "topicName": "Closures & Encapsulation",
    "question": "What is a Closure in JavaScript?",
    "code": "function createCounter() {\n  let count = 0;\n  return function() {\n    count++;\n    return count;\n  };\n}\nconst counter = createCounter();\nconsole.log(counter()); // 1\nconsole.log(counter()); // 2",
    "options": [
      "A method that closes network sockets in Node.js.",
      "A function bundled together with references to its surrounding lexical environment, allowing the inner function to access variables of its outer function even after the outer function has finished executing.",
      "A loop that automatically exits after 100 iterations.",
      "A syntax error caused by unclosed parentheses."
    ],
    "correctAnswer": 1,
    "explanation": "A closure is formed when a function retains access to variables from its parent lexical scope even after that parent function has returned and exited the call stack.",
    "tip": "Closures 'remember' the environment in which they were created."
  },
  {
    "id": "js-cl-02",
    "topicId": "closures",
    "topicName": "Closures & Encapsulation",
    "question": "How do closures enable Data Encapsulation / Private State in JavaScript?",
    "code": "function createBankAccount(initialBalance) {\n  let balance = initialBalance; // private variable\n  return {\n    deposit(amount) { balance += amount; },\n    getBalance() { return balance; }\n  };\n}",
    "options": [
      "By converting variables to CSS classes.",
      "Variables declared inside the outer function cannot be accessed directly from the outside; only the returned inner methods (closures) can read or modify them.",
      "By encrypting the source code on the hard drive.",
      "By preventing the garbage collector from running."
    ],
    "correctAnswer": 1,
    "explanation": "External code has no direct reference to `balance`. The only way to interact with `balance` is through the exposed closure methods (`deposit`, `getBalance`), achieving true data encapsulation.",
    "tip": "Closures allow you to create private state without special class keywords."
  },
  {
    "id": "js-cl-03",
    "topicId": "closures",
    "topicName": "Closures & Encapsulation",
    "question": "What is a Function Factory (Currying/Multiplier pattern) utilizing closures?",
    "code": "function multiplyBy(factor) {\n  return function(number) {\n    return number * factor;\n  };\n}\nconst double = multiplyBy(2);\nconst triple = multiplyBy(3);\nconsole.log(double(5)); // ?\nconsole.log(triple(5)); // ?",
    "options": [
      "`10` and `15`",
      "`5` and `5`",
      "`undefined` and `undefined`",
      "`25` and `25`"
    ],
    "correctAnswer": 0,
    "explanation": "`multiplyBy(2)` returns an inner function that closes over `factor = 2`. Calling `double(5)` computes `5 * 2 = 10`. `triple(5)` computes `5 * 3 = 15`.",
    "tip": "Function factories generate specialized functions configured with preset outer arguments."
  },
  {
    "id": "js-cl-04",
    "topicId": "closures",
    "topicName": "Closures & Encapsulation",
    "question": "What will happen if two independent counter instances are created using a closure factory?",
    "code": "function makeCounter() {\n  let count = 0;\n  return () => ++count;\n}\nconst c1 = makeCounter();\nconst c2 = makeCounter();\nc1(); c1();\nconsole.log(c1(), c2());",
    "options": [
      "`3` and `1` — each invocation of `makeCounter()` creates a new, independent lexical environment in memory.",
      "`3` and `3` — all counters share a single global count variable.",
      "`2` and `2`",
      "`undefined` and `undefined`"
    ],
    "correctAnswer": 0,
    "explanation": "Each call to `makeCounter()` allocates a distinct lexical scope and a separate `count` variable in heap memory. `c1` and `c2` do not interfere with each other.",
    "tip": "Every factory call creates an isolated closure environment."
  },
  {
    "id": "js-cl-05",
    "topicId": "closures",
    "topicName": "Closures & Encapsulation",
    "question": "What is a potential downside or risk of misusing closures if references are retained indefinitely?",
    "code": null,
    "options": [
      "Memory leaks / increased memory consumption, because variables referenced by active closures cannot be garbage collected.",
      "CSS styles will fail to render.",
      "The DOM will delete all child nodes.",
      "JavaScript converts from dynamic to static typing."
    ],
    "correctAnswer": 0,
    "explanation": "As long as a closure reference exists, the JavaScript garbage collector cannot reclaim memory for variables in the closed-over scope. Unused event listeners or long-lived closures holding large objects can cause memory leaks.",
    "tip": "Clean up unused event listeners and timer references to allow garbage collection."
  },
  {
    "id": "js-cl-06",
    "topicId": "closures",
    "topicName": "Closures & Encapsulation",
    "question": "What is Memoization and how do closures make it possible?",
    "code": "function memoizedAdd() {\n  const cache = {};\n  return function(n) {\n    if (n in cache) {\n      return cache[n];\n    }\n    const result = n + 10;\n    cache[n] = result;\n    return result;\n  };\n}",
    "options": [
      "A technique of caching function results based on arguments using a closed-over `cache` object so expensive calculations aren't repeated.",
      "A method of converting code to WebAssembly.",
      "A way to prevent functions from returning values.",
      "A database indexing algorithm."
    ],
    "correctAnswer": 0,
    "explanation": "Memoization caches the output of function calls. The inner function maintains a closure over the `cache` object, allowing it to check and populate cached results across multiple invocations.",
    "tip": "Memoization trades memory for speed by caching pure function outputs."
  },
  {
    "id": "js-cl-07",
    "topicId": "closures",
    "topicName": "Closures & Encapsulation",
    "question": "What will the following code output?",
    "code": "function outer() {\n  let x = 10;\n  function inner() {\n    x += 5;\n    return x;\n  }\n  return inner;\n}\nconst fn = outer();\nconsole.log(fn());\nconsole.log(fn());",
    "options": [
      "`15` then `15`",
      "`15` then `20`",
      "`10` then `10`",
      "`NaN` then `NaN`"
    ],
    "correctAnswer": 1,
    "explanation": "The closure maintains a mutable reference to `x`. The first call increments `x` from 10 to 15. The second call increments the same `x` from 15 to 20.",
    "tip": "Closures maintain a live reference to the closed-over variable, not a static snapshot."
  },
  {
    "id": "js-cl-08",
    "topicId": "closures",
    "topicName": "Closures & Encapsulation",
    "question": "How do React Hooks like `useState` internally rely on closure mechanisms?",
    "code": null,
    "options": [
      "They preserve component state values between successive render cycles across functional component executions.",
      "They convert React into a class-based library.",
      "They disable JavaScript garbage collection completely.",
      "They render HTML directly on the server without client JS."
    ],
    "correctAnswer": 0,
    "explanation": "React functional components execute repeatedly on each render. Hooks leverage closures within React's internal dispatcher and fiber architecture to preserve state across render cycles.",
    "tip": "Understanding closures is essential for mastering React Hooks and state."
  },
  {
    "id": "js-sh-01",
    "topicId": "scope-hoisting",
    "topicName": "Scope & Hoisting",
    "question": "What are the three main types of scope in modern JavaScript?",
    "code": null,
    "options": [
      "Global Scope, Function (Local) Scope, and Block Scope",
      "Inline Scope, Internal Scope, External Scope",
      "Browser Scope, Server Scope, Database Scope",
      "Array Scope, Object Scope, String Scope"
    ],
    "correctAnswer": 0,
    "explanation": "JavaScript has: (1) Global Scope (accessible everywhere), (2) Function Scope (variables declared inside a function), and (3) Block Scope (variables declared with `let`/`const` inside `{}` blocks).",
    "tip": "Block scope was introduced in ES6 with `let` and `const`."
  },
  {
    "id": "js-sh-02",
    "topicId": "scope-hoisting",
    "topicName": "Scope & Hoisting",
    "question": "What is Hoisting in JavaScript?",
    "code": null,
    "options": [
      "The process where variable and function declarations are conceptually moved to the top of their containing scope during the compilation/creation phase before code execution.",
      "The process of uploading files to a remote server.",
      "Moving DOM elements to the top of the HTML page.",
      "Converting synchronous code into promises."
    ],
    "correctAnswer": 0,
    "explanation": "During the creation phase, JavaScript engines register variable and function declarations in memory before executing statements line-by-line. This behavior is called hoisting.",
    "tip": "Declarations are hoisted, but initializations/assignments remain in place."
  },
  {
    "id": "js-sh-03",
    "topicId": "scope-hoisting",
    "topicName": "Scope & Hoisting",
    "question": "What will `console.log(x)` output due to `var` hoisting?",
    "code": "console.log(x);\nvar x = 50;\nconsole.log(x);",
    "options": [
      "Throws a `ReferenceError` on line 1.",
      "`undefined` on line 1, then `50` on line 3.",
      "`50` on line 1, then `50` on line 3.",
      "`null` on line 1, then `50` on line 3."
    ],
    "correctAnswer": 1,
    "explanation": "Variables declared with `var` are hoisted and initialized to `undefined`. Thus accessing `x` before its assignment line evaluates to `undefined` rather than throwing an error.",
    "tip": "`var` is hoisted with `undefined`; `let`/`const` are hoisted in the uninitialized TDZ."
  },
  {
    "id": "js-sh-04",
    "topicId": "scope-hoisting",
    "topicName": "Scope & Hoisting",
    "question": "What happens when you access a `let` or `const` variable before its declaration line?",
    "code": "console.log(score);\nlet score = 95;",
    "options": [
      "Outputs `undefined`.",
      "Throws a `ReferenceError: Cannot access 'score' before initialization` due to the Temporal Dead Zone.",
      "Outputs `95`.",
      "Outputs `null`."
    ],
    "correctAnswer": 1,
    "explanation": "Variables declared with `let` and `const` enter the Temporal Dead Zone (TDZ) when their scope starts and cannot be read or written until the declaration statement is executed.",
    "tip": "Never access `let` or `const` variables before declaring them."
  },
  {
    "id": "js-sh-05",
    "topicId": "scope-hoisting",
    "topicName": "Scope & Hoisting",
    "question": "What is Lexical Scoping (Static Scoping) in JavaScript?",
    "code": "const name = \"Global\";\nfunction outer() {\n  const name = \"Outer\";\n  function inner() {\n    console.log(name);\n  }\n  return inner;\n}\nconst test = outer();\ntest();",
    "options": [
      "Variable resolution depends on where functions are CALLED in runtime.",
      "Variable resolution is determined by the physical LOCATION of functions and blocks in the source code where they were DEFINED.",
      "Variables are only accessible inside HTML scripts.",
      "Scoping changes dynamically based on network speed."
    ],
    "correctAnswer": 1,
    "explanation": "In lexical scoping, scope resolution is fixed at author time based on how code is nested. `inner()` looks up its scope hierarchy where it was defined (`outer`, which has `name = 'Outer'`), logging `'Outer'`.",
    "tip": "Lexical scope = where the function was written, not where it was invoked."
  },
  {
    "id": "js-sh-06",
    "topicId": "scope-hoisting",
    "topicName": "Scope & Hoisting",
    "question": "What is the Scope Chain?",
    "code": null,
    "options": [
      "The hierarchy of nested scopes searched from the innermost local scope outwards to the global scope to resolve variable references.",
      "A method of linking multiple `.js` files together.",
      "A CSS selector chain.",
      "A database relationship."
    ],
    "correctAnswer": 0,
    "explanation": "When a variable is used, JS looks first in the current local scope. If not found, it moves up to the outer parent scope, continuing outward along the scope chain until reaching the global scope (or throwing a ReferenceError).",
    "tip": "Lookups only go outwards/upwards in the scope chain, never inwards."
  },
  {
    "id": "js-sh-07",
    "topicId": "scope-hoisting",
    "topicName": "Scope & Hoisting",
    "question": "What is the output of the following block scope test?",
    "code": "{\n  let a = 1;\n  var b = 2;\n}\nconsole.log(typeof a, typeof b);",
    "options": [
      "`\"undefined\" \"number\"`",
      "`\"number\" \"number\"`",
      "`\"number\" \"undefined\"`",
      "Throws a SyntaxError"
    ],
    "correctAnswer": 0,
    "explanation": "`a` is block-scoped to `{}` and does not exist outside the block (so `typeof a === \"undefined\"`). `b` is declared with `var`, ignoring the block and leaking outside (so `typeof b === \"number\"`).",
    "tip": "`let` is contained within `{}`; `var` escapes bare blocks."
  },
  {
    "id": "js-ob-01",
    "topicId": "objects",
    "topicName": "Objects & Methods",
    "question": "When is Bracket Notation (`obj[key]`) REQUIRED instead of Dot Notation (`obj.key`)?",
    "code": "const prop = \"user-age\";\nconst user = { \"user-age\": 25, role: \"admin\" };",
    "options": [
      "Only when accessing functions inside objects.",
      "When the property name contains hyphens, spaces, starts with a number, or when accessing a property dynamically via a variable.",
      "Bracket notation is obsolete and never required.",
      "Only when the object is frozen with `Object.freeze()`."
    ],
    "correctAnswer": 1,
    "explanation": "Dot notation requires valid identifier names (`user.role`). If the key has special characters (`\"user-age\"`), spaces (`\"first name\"`), or comes from a variable (`user[prop]`), bracket notation is mandatory.",
    "tip": "Dynamic key: `obj[varName]`. Static valid key: `obj.propertyName`."
  },
  {
    "id": "js-ob-02",
    "topicId": "objects",
    "topicName": "Objects & Methods",
    "question": "What do `Object.keys()`, `Object.values()`, and `Object.entries()` return?",
    "code": "const product = { id: 101, name: \"Laptop\", price: 999 };",
    "options": [
      "`Object.keys` returns an array of property names, `Object.values` returns an array of property values, and `Object.entries` returns an array of `[key, value]` pairs.",
      "They mutate the object into an array permanently.",
      "`Object.entries` returns a string of HTML elements.",
      "They return Promises that resolve to data."
    ],
    "correctAnswer": 0,
    "explanation": "These static Object methods return arrays for easy iteration: `Object.keys(product)` -> `['id', 'name', 'price']`, `Object.values(product)` -> `[101, 'Laptop', 999]`, `Object.entries(product)` -> `[['id', 101], ...]`.",
    "tip": "Use `Object.entries(obj)` with `for...of` to iterate over both keys and values cleanly."
  },
  {
    "id": "js-ob-03",
    "topicId": "objects",
    "topicName": "Objects & Methods",
    "question": "How does the Object Spread Operator (`...`) work for shallow copying and merging objects?",
    "code": "const base = { theme: \"dark\", showSidebar: true };\nconst userSettings = { ...base, showSidebar: false, fontSize: 16 };",
    "options": [
      "It creates a deep recursive clone of all nested objects.",
      "It shallow-copies properties from `base`, overriding `showSidebar` to `false` and adding `fontSize: 16`.",
      "It throws a TypeError because objects cannot be spread.",
      "It deletes `theme` from the resulting object."
    ],
    "correctAnswer": 1,
    "explanation": "The object spread operator (`{ ...a, ...b }`) copies all enumerable own properties into a new object. Latter properties override earlier matching keys. Note that this is a shallow copy (nested objects are copied by reference).",
    "tip": "Spread creates a shallow copy: properties on the right override properties on the left."
  },
  {
    "id": "js-ob-04",
    "topicId": "objects",
    "topicName": "Objects & Methods",
    "question": "How do you rename a variable and provide a default value during Object Destructuring?",
    "code": "const user = { username: \"johndoe\" };\nconst { username: accountName, role = \"Guest\" } = user;",
    "options": [
      "`accountName` is `'johndoe'` and `role` is `'Guest'`.",
      "`username` is `'accountName'` and `role` is `undefined`.",
      "Throws a SyntaxError.",
      "`accountName` is `\"Guest\"`."
    ],
    "correctAnswer": 0,
    "explanation": "In object destructuring: `propName: newVarName` renames the extracted variable, and `= defaultValue` provides a fallback if the property is undefined.",
    "tip": "Syntax: `{ originalKey: aliasName = defaultVal } = obj`."
  },
  {
    "id": "js-ob-05",
    "topicId": "objects",
    "topicName": "Objects & Methods",
    "question": "What does the `delete` operator do in JavaScript?",
    "code": "const user = { id: 1, tempToken: \"xyz123\" };\ndelete user.tempToken;\nconsole.log(user.tempToken);",
    "options": [
      "Sets `user.tempToken = null`.",
      "Removes the `tempToken` property entirely from the object, so reading it returns `undefined` and `'tempToken' in user` is `false`.",
      "Deletes the entire `user` object from memory.",
      "Throws a ReferenceError."
    ],
    "correctAnswer": 1,
    "explanation": "`delete user.tempToken` removes the property and its value from the target object completely.",
    "tip": "Use `delete obj.prop` to remove a property entirely from an object."
  },
  {
    "id": "js-ob-06",
    "topicId": "objects",
    "topicName": "Objects & Methods",
    "question": "What is Optional Chaining (`?.`) and what does it prevent?",
    "code": "const user = { profile: null };\nconsole.log(user.profile?.avatar?.url);",
    "options": [
      "It runs a while loop until the property appears.",
      "It safely accesses nested properties without throwing a `TypeError: Cannot read properties of null/undefined`, returning `undefined` instead if any link in the chain is nullish.",
      "It converts null values into empty strings automatically.",
      "It forces the browser to make a network request."
    ],
    "correctAnswer": 1,
    "explanation": "`?.` short-circuits and returns `undefined` if the reference before `?.` is `null` or `undefined`, preventing catastrophic runtime crashes when accessing deeply nested properties.",
    "tip": "Use `user?.profile?.address` whenever nested data may be absent."
  },
  {
    "id": "js-ob-07",
    "topicId": "objects",
    "topicName": "Objects & Methods",
    "question": "What is the result of `Object.freeze(obj)` versus `Object.seal(obj)`?",
    "code": null,
    "options": [
      "`Object.freeze` prevents adding, deleting, OR modifying any property values; `Object.seal` prevents adding or deleting properties, but permits modifying existing property values.",
      "`Object.seal` is stronger than `Object.freeze`.",
      "Both methods do the exact same thing.",
      "`Object.freeze` only works on arrays."
    ],
    "correctAnswer": 0,
    "explanation": "`Object.freeze()` makes an object completely read-only (shallowly). `Object.seal()` prevents adding new properties and deleting existing ones, but allows existing writable property values to be updated.",
    "tip": "Freeze = no adds, no deletes, no edits. Seal = no adds, no deletes, edits allowed."
  },
  {
    "id": "js-ar-01",
    "topicId": "arrays",
    "topicName": "Arrays & Array Methods",
    "question": "Which of the following array methods MUTATES (modifies) the original array in place?",
    "code": null,
    "options": [
      "`.map()`",
      "`.filter()`",
      "`.slice()`",
      "`.splice()`"
    ],
    "correctAnswer": 3,
    "explanation": "`.splice()`, `.push()`, `.pop()`, `.shift()`, `.unshift()`, `.sort()`, and `.reverse()` mutate the original array. Methods like `.slice()`, `.map()`, `.filter()`, and `.concat()` return a new array without modifying the original.",
    "tip": "Remember: `slice` is non-mutating; `splice` is mutating."
  },
  {
    "id": "js-ar-02",
    "topicId": "arrays",
    "topicName": "Arrays & Array Methods",
    "question": "What is the output of `[1, 2, 3, 4].reduce((acc, curr) => acc + curr, 10)`?",
    "code": null,
    "options": [
      "`10`",
      "`20` (10 initial + 1 + 2 + 3 + 4)",
      "`24`",
      "`[11, 12, 13, 14]`"
    ],
    "correctAnswer": 1,
    "explanation": "`reduce` starts with the initial value `10`. Iteration 1: `10 + 1 = 11`. Iteration 2: `11 + 2 = 13`. Iteration 3: `13 + 3 = 16`. Iteration 4: `16 + 4 = 20`.",
    "tip": "The second argument to `reduce(callback, initialValue)` sets the starting accumulator."
  },
  {
    "id": "js-ar-03",
    "topicId": "arrays",
    "topicName": "Arrays & Array Methods",
    "question": "How do `.map()` and `.forEach()` differ in their return values?",
    "code": null,
    "options": [
      "`.map()` creates and returns a NEW array containing the results of calling the function on every element; `.forEach()` always returns `undefined` and is used solely for side effects.",
      "`.forEach()` returns a new array; `.map()` returns `undefined`.",
      "Both return a new array.",
      "`.map()` mutates the original array in place."
    ],
    "correctAnswer": 0,
    "explanation": "`.map()` transforms elements and returns a new array of the same length. `.forEach()` executes a function for each element but always returns `undefined`.",
    "tip": "Use `.map()` when transforming data into a new array; use `.forEach()` for side effects."
  },
  {
    "id": "js-ar-04",
    "topicId": "arrays",
    "topicName": "Arrays & Array Methods",
    "question": "What is the difference between `.find()` and `.filter()`?",
    "code": "const nums = [5, 12, 8, 130, 44];",
    "options": [
      "`.find()` returns the FIRST element that satisfies the condition (or `undefined`); `.filter()` returns a NEW ARRAY containing ALL elements that satisfy the condition (or empty array `[]`).",
      "`.filter()` returns only the first item.",
      "`.find()` returns an array of booleans.",
      "Both always return arrays."
    ],
    "correctAnswer": 0,
    "explanation": "`.find(x => x > 10)` returns `12` (the single item). `.filter(x => x > 10)` returns `[12, 130, 44]` (an array of all matching items).",
    "tip": "Use `find` for a single item; use `filter` for a subset list."
  },
  {
    "id": "js-ar-05",
    "topicId": "arrays",
    "topicName": "Arrays & Array Methods",
    "question": "What does `[10, 5, 40, 25].sort()` output in JavaScript if no comparator function is passed?",
    "code": "const arr = [10, 5, 40, 25];\narr.sort();\nconsole.log(arr);",
    "options": [
      "`[5, 10, 25, 40]`",
      "`[10, 25, 40, 5]` because elements are converted to strings and sorted according to UTF-16 code units (alphabetically) by default!",
      "`[40, 25, 10, 5]`",
      "Throws a TypeError."
    ],
    "correctAnswer": 1,
    "explanation": "By default, `.sort()` converts elements to strings and compares UTF-16 code units. Thus `\"10\"` comes before `\"25\"`, which comes before `\"40\"`, which comes before `\"5\"`! To sort numerically, pass `(a, b) => a - b`.",
    "tip": "Always pass `(a, b) => a - b` when sorting numbers in JavaScript."
  },
  {
    "id": "js-ar-06",
    "topicId": "arrays",
    "topicName": "Arrays & Array Methods",
    "question": "What do `.some()` and `.every()` return?",
    "code": "const scores = [80, 92, 45, 78];\nconst hasFailing = scores.some(s => s < 50);\nconst allPassed = scores.every(s => s >= 50);",
    "options": [
      "`hasFailing` is `true` (since 45 < 50) and `allPassed` is `false`.",
      "`hasFailing` is `[45]` and `allPassed` is `[]`.",
      "Both return numbers.",
      "Both return `true`."
    ],
    "correctAnswer": 0,
    "explanation": "`.some()` returns `true` if AT LEAST ONE element passes the test. `.every()` returns `true` ONLY IF ALL elements pass the test. Both return booleans.",
    "tip": "Some = OR logic (at least one); Every = AND logic (all items)."
  },
  {
    "id": "js-ar-07",
    "topicId": "arrays",
    "topicName": "Arrays & Array Methods",
    "question": "How does `Array.prototype.includes()` differ from `Array.prototype.indexOf()` when checking for `NaN`?",
    "code": "const list = [1, NaN, 3];\nconsole.log(list.includes(NaN));\nconsole.log(list.indexOf(NaN));",
    "options": [
      "`list.includes(NaN)` is `true`, whereas `list.indexOf(NaN)` is `-1` (because `NaN !== NaN` in strict equality).",
      "Both find `NaN` successfully at index 1.",
      "Both return `false` / `-1`.",
      "`includes` throws a TypeError on NaN."
    ],
    "correctAnswer": 0,
    "explanation": "`includes()` uses the SameValueZero algorithm, which correctly matches `NaN`. `indexOf()` uses strict equality `===`, where `NaN === NaN` is false, returning `-1`.",
    "tip": "Use `.includes(val)` to check for membership, especially when checking for NaN."
  },
  {
    "id": "js-ar-08",
    "topicId": "arrays",
    "topicName": "Arrays & Array Methods",
    "question": "What is Array Destructuring and rest syntax in `const [first, second, ...rest] = [10, 20, 30, 40, 50]`?",
    "code": null,
    "options": [
      "`first = 10`, `second = 20`, and `rest = [30, 40, 50]`",
      "`first = [10]`, `second = [20]`, `rest = 30`",
      "Throws an error.",
      "`rest = 50`"
    ],
    "correctAnswer": 0,
    "explanation": "Array destructuring unpacks values by position. `first` receives 10, `second` receives 20, and `...rest` gathers all remaining items into a new array `[30, 40, 50]`.",
    "tip": "Array destructuring unpacks by index order; object destructuring unpacks by key name."
  },
  {
    "id": "js-dom-01",
    "topicId": "dom-manipulation",
    "topicName": "DOM Manipulation",
    "question": "What is the Document Object Model (DOM)?",
    "code": null,
    "options": [
      "A database management system built into browsers.",
      "An object-oriented tree representation of an HTML document in browser memory that JavaScript can read and manipulate.",
      "A stylesheet compiler used for rendering CSS.",
      "A proprietary Google Chrome API."
    ],
    "correctAnswer": 1,
    "explanation": "The DOM represents the HTML document as a structured hierarchy of nodes/objects. JavaScript interacts with this tree via DOM APIs to update content, structure, and styling dynamically.",
    "tip": "The DOM bridges JavaScript code and the visible web page."
  },
  {
    "id": "js-dom-02",
    "topicId": "dom-manipulation",
    "topicName": "DOM Manipulation",
    "question": "What is the key difference between `document.querySelector()` and `document.querySelectorAll()`?",
    "code": "const firstBtn = document.querySelector(\".btn\");\nconst allBtns = document.querySelectorAll(\".btn\");",
    "options": [
      "`querySelector` returns the FIRST matching Element (or `null`); `querySelectorAll` returns a static `NodeList` containing ALL matching elements.",
      "`querySelectorAll` returns an Array, while `querySelector` returns an Object.",
      "`querySelector` only searches by ID.",
      "Both return identical results."
    ],
    "correctAnswer": 0,
    "explanation": "`querySelector` stops after finding the first matching element. `querySelectorAll` searches the entire subtree and returns a static `NodeList` of all matching elements.",
    "tip": "Use `querySelector` for a single element; `querySelectorAll` for multiple elements."
  },
  {
    "id": "js-dom-03",
    "topicId": "dom-manipulation",
    "topicName": "DOM Manipulation",
    "question": "What is the difference between `textContent` and `innerHTML` when setting element content?",
    "code": "const el = document.getElementById(\"box\");\n// Case A: el.textContent = \"<strong>Hello</strong>\";\n// Case B: el.innerHTML = \"<strong>Hello</strong>\";",
    "options": [
      "`textContent` treats input as plain text and escapes HTML tags (preventing XSS vulnerabilities); `innerHTML` parses HTML tags and renders bold elements.",
      "`textContent` is deprecated in modern browsers.",
      "`innerHTML` is faster and completely safe from security vulnerabilities.",
      "Both render bold text on screen."
    ],
    "correctAnswer": 0,
    "explanation": "`textContent` sets the textual content safely without parsing HTML tags. `innerHTML` parses strings as HTML markup, which can introduce Cross-Site Scripting (XSS) if used with untrusted user input.",
    "tip": "Use `textContent` when displaying plain text to prevent XSS attacks."
  },
  {
    "id": "js-dom-04",
    "topicId": "dom-manipulation",
    "topicName": "DOM Manipulation",
    "question": "Which `classList` method adds a CSS class if it is missing and removes it if it is present?",
    "code": "element.classList.toggle(\"active\");",
    "options": [
      "`element.classList.switch('active')`",
      "`element.classList.toggle('active')`",
      "`element.classList.flip('active')`",
      "`element.classList.change('active')`"
    ],
    "correctAnswer": 1,
    "explanation": "`classList.toggle('className')` adds the class if not currently present on the element and removes it if it already exists, returning a boolean indicating whether the class is now present.",
    "tip": "`classList.toggle('active')` is clean for dropdowns, modals, and accordion menus."
  },
  {
    "id": "js-dom-05",
    "topicId": "dom-manipulation",
    "topicName": "DOM Manipulation",
    "question": "What is the standard, modern procedure to create a new `<div>`, set its text, and insert it into a container?",
    "code": null,
    "options": [
      "`const div = document.createElement('div'); div.textContent = 'New item'; container.appendChild(div);`",
      "`container.write('<div>New item</div>');`",
      "`const div = new DOMElement('div'); container.insert(div);`",
      "`document.addTag('div', 'New item');`"
    ],
    "correctAnswer": 0,
    "explanation": "The standard DOM API pattern uses `document.createElement('tagName')` to instantiate the element in memory, configures its properties (`textContent`, `className`), and appends it to a parent with `appendChild()` or `append()`.",
    "tip": "`document.createElement` + `parent.append(element)` is the standard DOM creation flow."
  },
  {
    "id": "js-dom-06",
    "topicId": "dom-manipulation",
    "topicName": "DOM Manipulation",
    "question": "How do you remove an element directly from the DOM in modern browsers?",
    "code": "const alertBox = document.querySelector(\".alert\");",
    "options": [
      "`alertBox.remove();`",
      "`alertBox.delete();`",
      "`document.erase(alertBox);`",
      "`alertBox.style.display = 'none'` (which only hides it, not removes from DOM)"
    ],
    "correctAnswer": 0,
    "explanation": "Modern DOM APIs support `element.remove()`, which detaches the element from its parent node in the DOM tree.",
    "tip": "`element.remove()` directly deletes the node from the DOM."
  },
  {
    "id": "js-dom-07",
    "topicId": "dom-manipulation",
    "topicName": "DOM Manipulation",
    "question": "How do you traverse from a child element to its immediate parent node in the DOM?",
    "code": "const item = document.querySelector(\".list-item\");\nconst parent = item.parentElement;",
    "options": [
      "`item.parentElement` or `item.parentNode`",
      "`item.getRoot()`",
      "`item.previousElement`",
      "`document.findParent(item)`"
    ],
    "correctAnswer": 0,
    "explanation": "`element.parentElement` returns the direct parent Element node (or `null` if the element has no parent or parent is not an Element).",
    "tip": "Use `parentElement` to move up, `children` to move down, and `nextElementSibling` to move across."
  },
  {
    "id": "js-ev-01",
    "topicId": "events-handling",
    "topicName": "Events & Event Handling",
    "question": "What is the difference between `event.target` and `event.currentTarget` in event handlers?",
    "code": "document.getElementById(\"parent\").addEventListener(\"click\", function(e) {\n  console.log(e.target);\n  console.log(e.currentTarget);\n});",
    "options": [
      "`event.target` is the specific element that originally triggered/dispatched the event (e.g., clicked child button); `event.currentTarget` is the element to which the event listener is currently attached (`#parent`).",
      "`event.target` is always the `window` object.",
      "Both properties always refer to the identical DOM node.",
      "`event.currentTarget` is the previous element clicked before this one."
    ],
    "correctAnswer": 0,
    "explanation": "`e.target` is the deep origin element where the event originated. `e.currentTarget` is the element holding the active event handler (the element on which `addEventListener` was called).",
    "tip": "Crucial for event delegation: `e.currentTarget` is the parent listener; `e.target` is the actual clicked child."
  },
  {
    "id": "js-ev-02",
    "topicId": "events-handling",
    "topicName": "Events & Event Handling",
    "question": "What is Event Delegation in JavaScript DOM architecture?",
    "code": null,
    "options": [
      "Attaching hundreds of separate event listeners to every individual list item.",
      "Attaching a single event listener to a common ancestor element and using `e.target` to handle events triggered by current and dynamically added child elements.",
      "Delegating JavaScript execution to a Web Worker.",
      "Using CSS hover states instead of JavaScript."
    ],
    "correctAnswer": 1,
    "explanation": "Event delegation leverages event bubbling. Instead of binding listeners to many child elements, you attach one listener to their common parent. This saves memory and automatically handles dynamically inserted children.",
    "tip": "Event delegation avoids adding listeners to every single list item in large lists."
  },
  {
    "id": "js-ev-03",
    "topicId": "events-handling",
    "topicName": "Events & Event Handling",
    "question": "What does `event.preventDefault()` do when called inside a form's submit event handler?",
    "code": "form.addEventListener(\"submit\", (e) => {\n  e.preventDefault();\n  // submit via fetch()\n});",
    "options": [
      "Deletes all form inputs from the screen.",
      "Cancels the default browser action (such as preventing full-page reload on form submission or preventing URL navigation on an `<a>` link).",
      "Stops the event from bubbling up the DOM hierarchy.",
      "Throws an uncatchable exception."
    ],
    "correctAnswer": 1,
    "explanation": "`e.preventDefault()` prevents the browser's native default behavior for that event (e.g. submitting a form with a full HTTP GET/POST reload, or following a hyperlink).",
    "tip": "`preventDefault()` stops the default browser action; `stopPropagation()` stops bubbling."
  },
  {
    "id": "js-ev-04",
    "topicId": "events-handling",
    "topicName": "Events & Event Handling",
    "question": "What is Event Bubbling versus Event Capturing (Trickling)?",
    "code": null,
    "options": [
      "Bubbling travels from the target element UPWARDS to the root document; Capturing travels from the window/document DOWNWARDS to the target element.",
      "Bubbling is for mouse events; Capturing is for keyboard events.",
      "Bubbling only occurs in Google Chrome.",
      "Capturing happens after bubbling completes."
    ],
    "correctAnswer": 0,
    "explanation": "The DOM event flow has 3 phases: 1) Capturing phase (downward from Window to target), 2) Target phase, and 3) Bubbling phase (upward from target back to Window). By default, listeners listen in the bubbling phase.",
    "tip": "Capturing = down; Bubbling = up like bubbles in water."
  },
  {
    "id": "js-ev-05",
    "topicId": "events-handling",
    "topicName": "Events & Event Handling",
    "question": "What does `event.stopPropagation()` do?",
    "code": "btn.addEventListener(\"click\", (e) => {\n  e.stopPropagation();\n});",
    "options": [
      "Prevents the event from continuing to propagate (bubble or capture) further through the DOM tree to ancestor elements.",
      "Prevents the button from being clicked ever again.",
      "Stops all CSS animations on the page.",
      "Refreshes the page."
    ],
    "correctAnswer": 0,
    "explanation": "`e.stopPropagation()` halts the propagation of the event up or down the DOM hierarchy, ensuring parent elements do not receive the event.",
    "tip": "Use `e.stopPropagation()` when a child click shouldn't trigger parent click handlers."
  },
  {
    "id": "js-ev-06",
    "topicId": "events-handling",
    "topicName": "Events & Event Handling",
    "question": "Which event fires as soon as the HTML document is fully parsed and DOM tree built, without waiting for images and stylesheets to load?",
    "code": null,
    "options": [
      "`window.onload`",
      "`DOMContentLoaded`",
      "`beforeunload`",
      "`ready`"
    ],
    "correctAnswer": 1,
    "explanation": "`DOMContentLoaded` fires when the initial HTML document has been completely parsed and DOM tree constructed. `window.load` waits for all external resources (images, stylesheets, fonts) to finish loading.",
    "tip": "`DOMContentLoaded` is faster than `window.onload` because it doesn't wait for images."
  },
  {
    "id": "js-ev-07",
    "topicId": "events-handling",
    "topicName": "Events & Event Handling",
    "question": "How do you properly remove an event listener using `removeEventListener`?",
    "code": "function handleClick() { console.log(\"Clicked\"); }\nbtn.addEventListener(\"click\", handleClick);\n// Removal:",
    "options": [
      "`btn.removeEventListener('click', handleClick);` (passing the exact same function reference and event name).",
      "`btn.removeEventListener('click', () => handleClick());`",
      "`btn.removeEventListener('click');` without function parameter.",
      "`btn.clearEvents();`"
    ],
    "correctAnswer": 0,
    "explanation": "`removeEventListener` requires the exact same function reference that was passed to `addEventListener`. Passing an anonymous function `() => ...` creates a new function reference and will fail to remove the listener.",
    "tip": "Never use anonymous arrow functions if you need to remove the event listener later."
  },
  {
    "id": "js-eh-01",
    "topicId": "error-handling",
    "topicName": "Error Handling & Debugging",
    "question": "What is the execution behavior of the `finally` block in a `try...catch...finally` construct?",
    "code": "try {\n  doRiskyAction();\n} catch (err) {\n  console.error(err);\n} finally {\n  cleanupResources();\n}",
    "options": [
      "It only executes if an error occurred in the `try` block.",
      "It only executes if NO error occurred in the `try` block.",
      "It ALWAYS executes regardless of whether an error was thrown or caught, even if the `try` or `catch` block contains a `return` statement.",
      "It runs in a separate thread asynchronously."
    ],
    "correctAnswer": 2,
    "explanation": "The `finally` block is guaranteed to execute unconditionally after `try` and `catch` finish, making it ideal for cleanup actions (closing connections, resetting loading states).",
    "tip": "`finally` always runs — error or no error, return or no return."
  },
  {
    "id": "js-eh-02",
    "topicId": "error-handling",
    "topicName": "Error Handling & Debugging",
    "question": "What is the difference between a `ReferenceError` and a `TypeError`?",
    "code": "// Case A: console.log(nonExistentVar);\n// Case B: const num = 123; num.toUpperCase();",
    "options": [
      "`ReferenceError` occurs when attempting to access a variable that has not been declared; `TypeError` occurs when an operation is performed on a value of an inappropriate type (e.g. calling a non-function or accessing property of null/undefined).",
      "`TypeError` is only found in TypeScript.",
      "`ReferenceError` is a syntax error detected before compile time.",
      "They are identical errors."
    ],
    "correctAnswer": 0,
    "explanation": "Case A throws `ReferenceError: nonExistentVar is not defined`. Case B throws `TypeError: num.toUpperCase is not a function` because strings have `.toUpperCase()`, but numbers do not.",
    "tip": "ReferenceError = variable not found; TypeError = wrong type or invalid operation on value."
  },
  {
    "id": "js-eh-03",
    "topicId": "error-handling",
    "topicName": "Error Handling & Debugging",
    "question": "How do you create and throw a custom error with an informative message in JavaScript?",
    "code": null,
    "options": [
      "`throw \"Error\";`",
      "`throw new Error(\"User ID must be a positive number\");`",
      "`error.create(\"User ID must be a positive number\");`",
      "`return new Error(\"Message\");`"
    ],
    "correctAnswer": 1,
    "explanation": "`throw new Error('message')` instantiates a standard Error object (which automatically captures a stack trace with file and line numbers) and throws it to interrupt execution.",
    "tip": "Throwing `new Error(...)` preserves the full call stack trace for debugging."
  },
  {
    "id": "js-eh-04",
    "topicId": "error-handling",
    "topicName": "Error Handling & Debugging",
    "question": "What does the `debugger;` statement do when browser DevTools are open?",
    "code": "function calculateTotal(items) {\n  debugger;\n  return items.reduce((a, b) => a + b, 0);\n}",
    "options": [
      "Deletes all errors from the console.",
      "Pauses JavaScript execution at that line like a conditional breakpoint, allowing inspection of variables, call stack, and step-by-step execution.",
      "Prints the total memory usage of the function.",
      "Automatically fixes linting errors."
    ],
    "correctAnswer": 1,
    "explanation": "If DevTools are open, the `debugger` keyword acts as a programmed breakpoint, immediately halting execution so the developer can step through code and inspect scope variables.",
    "tip": "`debugger;` is like an inline breakpoint in your code."
  },
  {
    "id": "js-eh-05",
    "topicId": "error-handling",
    "topicName": "Error Handling & Debugging",
    "question": "What useful format does `console.table()` display for arrays of objects?",
    "code": "const users = [\n  { id: 1, name: \"Alice\", role: \"Admin\" },\n  { id: 2, name: \"Bob\", role: \"User\" }\n];\nconsole.table(users);",
    "options": [
      "Converts data to an HTML `<table>` injected into the page.",
      "Renders the data as a clean, interactive tabular grid in the developer console with column headers for each object property.",
      "Throws an error if the array has more than 5 items.",
      "Exports the data to a CSV file on the desktop."
    ],
    "correctAnswer": 1,
    "explanation": "`console.table()` formats array and object data into a clear tabular format in the console, making collections of objects easy to inspect at a glance.",
    "tip": "Use `console.table()` for quick, structured inspection of array/object datasets."
  },
  {
    "id": "js-eh-06",
    "topicId": "error-handling",
    "topicName": "Error Handling & Debugging",
    "question": "How do `console.time('timerName')` and `console.timeEnd('timerName')` assist in performance debugging?",
    "code": "console.time(\"dataProcess\");\n// run heavy loop\nconsole.timeEnd(\"dataProcess\");",
    "options": [
      "They measure and log the exact elapsed time in milliseconds taken between the two calls.",
      "They schedule a timer to execute after 1000ms.",
      "They slow down CPU execution for testing.",
      "They format current time as ISO strings."
    ],
    "correctAnswer": 0,
    "explanation": "`console.time()` starts an internal timer with a label, and `console.timeEnd()` stops the timer and prints the exact elapsed milliseconds to the console.",
    "tip": "Use `console.time('label')` and `console.timeEnd('label')` to benchmark function execution."
  },
  {
    "id": "js-aj-01",
    "topicId": "async-javascript",
    "topicName": "Asynchronous JavaScript & Timers",
    "question": "Why is asynchronous programming critical in client-side JavaScript?",
    "code": null,
    "options": [
      "Because synchronous operations that take time (like network requests or file reads) would block the single main thread, freezing the user interface and preventing user interaction.",
      "Because JavaScript cannot run functions without asynchronous promises.",
      "Because browsers do not allow synchronous variable declarations.",
      "To compile code to multi-threaded C++."
    ],
    "correctAnswer": 0,
    "explanation": "Because JavaScript is single-threaded, running long tasks synchronously blocks the main UI thread. Asynchronous APIs delegate waiting to the browser environment, keeping the UI responsive.",
    "tip": "Async prevents long operations from freezing the UI."
  },
  {
    "id": "js-aj-02",
    "topicId": "async-javascript",
    "topicName": "Asynchronous JavaScript & Timers",
    "question": "What does `setTimeout(callback, delay)` return in the browser environment?",
    "code": "const timerId = setTimeout(() => {\n  console.log(\"Fired\");\n}, 1000);",
    "options": [
      "A Promise that resolves after 1 second.",
      "A positive integer representing the unique Timer ID, which can be passed to `clearTimeout(timerId)` to cancel the scheduled execution.",
      "The return value of the callback function.",
      "`undefined`"
    ],
    "correctAnswer": 1,
    "explanation": "`setTimeout` returns a numeric identifier (Timer ID). Passing this ID to `clearTimeout(timerId)` cancels the timer before it executes.",
    "tip": "Store the timer ID so you can call `clearTimeout(timerId)` on component unmount."
  },
  {
    "id": "js-aj-03",
    "topicId": "async-javascript",
    "topicName": "Asynchronous JavaScript & Timers",
    "question": "What is the difference between `setTimeout` and `setInterval`?",
    "code": null,
    "options": [
      "`setTimeout` executes the callback ONCE after the specified delay; `setInterval` repeatedly executes the callback at every specified interval until cancelled with `clearInterval`.",
      "`setInterval` only runs in Node.js.",
      "`setTimeout` executes continuously.",
      "There is no functional difference."
    ],
    "correctAnswer": 0,
    "explanation": "`setTimeout` is a one-shot timer. `setInterval` fires periodically and repeatedly until stopped with `clearInterval(intervalId)`.",
    "tip": "Always clear intervals with `clearInterval` to avoid memory leaks and infinite background timers."
  },
  {
    "id": "js-aj-04",
    "topicId": "async-javascript",
    "topicName": "Asynchronous JavaScript & Timers",
    "question": "Why does `setTimeout(fn, 0)` NOT execute immediately on the next CPU cycle?",
    "code": "console.log(\"1\");\nsetTimeout(() => console.log(\"2\"), 0);\nconsole.log(\"3\");",
    "options": [
      "The callback is placed in the Task/Macrotask Queue and can only run after the current synchronous call stack completely empties and microtasks drain.",
      "0 is converted to 1000ms by the browser.",
      "`setTimeout` is synchronous.",
      "The browser skips timers with 0ms delay."
    ],
    "correctAnswer": 0,
    "explanation": "Even with 0ms delay, the callback is queued in the Macrotask Queue. The JavaScript runtime must finish all synchronous statements (`1`, `3`) before the event loop pulls from the task queue to run `2`.",
    "tip": "Output order is `1`, `3`, `2`."
  },
  {
    "id": "js-aj-05",
    "topicId": "async-javascript",
    "topicName": "Asynchronous JavaScript & Timers",
    "question": "What happens if a `setInterval` callback takes longer to execute than the interval delay itself?",
    "code": null,
    "options": [
      "Calls can stack up with virtually zero delay between executions, potentially causing UI stutter or memory issues.",
      "The browser automatically doubles the interval time.",
      "The timer throws an UnhandledIntervalError.",
      "The browser terminates JavaScript execution."
    ],
    "correctAnswer": 0,
    "explanation": "If interval execution time exceeds the delay, intervals queue up. A common best practice for async work is recursive `setTimeout`, which schedules the next call only AFTER the current operation finishes.",
    "tip": "For async tasks, use recursive `setTimeout` instead of `setInterval`."
  },
  {
    "id": "js-aj-06",
    "topicId": "async-javascript",
    "topicName": "Asynchronous JavaScript & Timers",
    "question": "How do Web APIs (like timers, DOM events, and fetch) interact with the single JavaScript thread?",
    "code": null,
    "options": [
      "They run in the browser's background C++ / platform threads and post completed callbacks to JavaScript's task queue for the event loop to dispatch.",
      "They share the single JavaScript call stack directly.",
      "They block the call stack until the network packet arrives.",
      "They rewrite JavaScript bytecode at runtime."
    ],
    "correctAnswer": 0,
    "explanation": "Web APIs are provided by the browser host environment (outside the JS runtime). The browser handles network I/O and timers on separate background threads, pushing callbacks to JS queues when ready.",
    "tip": "Web APIs handle the heavy background waiting so the JS thread stays responsive."
  },
  {
    "id": "js-cb-01",
    "topicId": "callbacks",
    "topicName": "Callbacks & Higher-Order Functions",
    "question": "What is a Callback Function in JavaScript?",
    "code": "function loadData(callback) {\n  // fetch data...\n  callback(data);\n}",
    "options": [
      "A function passed as an argument into another function with the intention of being invoked inside the outer function at a later point in time.",
      "A function that calls the browser back button.",
      "A function that only returns numbers.",
      "A CSS transition trigger."
    ],
    "correctAnswer": 0,
    "explanation": "A callback is a function passed as a parameter to another function, which executes ('calls back') that function when an action or calculation completes.",
    "tip": "Callbacks can be synchronous (like `array.map`) or asynchronous (like `setTimeout`)."
  },
  {
    "id": "js-cb-02",
    "topicId": "callbacks",
    "topicName": "Callbacks & Higher-Order Functions",
    "question": "What is 'Callback Hell' (also known as the Pyramid of Doom)?",
    "code": "getUser(userId, (user) => {\n  getOrders(user.id, (orders) => {\n    getOrderDetails(orders[0].id, (details) => {\n      getPayment(details.paymentId, (payment) => {\n        // deeply nested code\n      });\n    });\n  });\n});",
    "options": [
      "A condition where too many nested asynchronous callbacks create deeply indented, hard-to-read, and error-prone code structures.",
      "A fatal runtime crash in Chrome V8.",
      "An infinite loop caused by `while(true)`.",
      "A missing return statement."
    ],
    "correctAnswer": 0,
    "explanation": "Callback hell occurs when multiple asynchronous operations depend on each other sequentially, resulting in deeply nested callback triangles that make error handling and readability difficult.",
    "tip": "Promises and `async/await` were introduced specifically to solve Callback Hell."
  },
  {
    "id": "js-cb-03",
    "topicId": "callbacks",
    "topicName": "Callbacks & Higher-Order Functions",
    "question": "What is the standard 'Error-First Callback' convention commonly used in Node.js?",
    "code": "fs.readFile(\"data.json\", \"utf8\", (err, data) => {\n  if (err) {\n    console.error(\"Failed to read file:\", err);\n    return;\n  }\n  console.log(\"Content:\", data);\n});",
    "options": [
      "The first argument of the callback is reserved for an Error object (if an error occurred) or `null`/`undefined` (if successful); subsequent arguments contain the success data.",
      "The callback must throw an error before processing data.",
      "The error must be the last argument passed to the function.",
      "Errors cannot be passed in callbacks."
    ],
    "correctAnswer": 0,
    "explanation": "The Node.js error-first convention requires `(err, result) => { ... }`. If `err` is truthy, an error occurred; otherwise, `err` is null/undefined and `result` contains the payload.",
    "tip": "Always check `if (err)` first before using data in Node callbacks."
  },
  {
    "id": "js-cb-04",
    "topicId": "callbacks",
    "topicName": "Callbacks & Higher-Order Functions",
    "question": "What is 'Inversion of Control' as a drawback of traditional callbacks?",
    "code": null,
    "options": [
      "You hand control of your callback function over to a third-party library or function, trusting it to call your callback the right number of times with the right parameters and not fail silently.",
      "When the keyboard inputs are reversed.",
      "When functions return variables instead of constants.",
      "When CSS styles override JavaScript values."
    ],
    "correctAnswer": 0,
    "explanation": "With callbacks, you surrender control of when, how often, and with what context your function is executed to another piece of code. Promises solve this by being trustable, uninvertible objects representing future values.",
    "tip": "Promises provide guaranteed resolution semantics, fixing inversion of control."
  },
  {
    "id": "js-cb-05",
    "topicId": "callbacks",
    "topicName": "Callbacks & Higher-Order Functions",
    "question": "Which of the following array methods is a Synchronous Higher-Order Function that accepts a callback?",
    "code": null,
    "options": [
      "`array.map()`",
      "`setTimeout()`",
      "`fetch()`",
      "`Promise.resolve()`"
    ],
    "correctAnswer": 0,
    "explanation": "`array.map()` is a synchronous higher-order function: it calls the provided callback immediately for each element in the array and blocks until all transformations are complete.",
    "tip": "Not all callbacks are asynchronous; `map`, `filter`, and `forEach` are synchronous callbacks."
  },
  {
    "id": "js-cb-06",
    "topicId": "callbacks",
    "topicName": "Callbacks & Higher-Order Functions",
    "question": "What is the output of this higher-order multiplier function?",
    "code": "function withMultiplier(factor) {\n  return function(arr) {\n    return arr.map(n => n * factor);\n  };\n}\nconst tripleAll = withMultiplier(3);\nconsole.log(tripleAll([1, 2, 3]));",
    "options": [
      "`[3, 6, 9]`",
      "`[1, 2, 3, 3]`",
      "`9`",
      "`undefined`"
    ],
    "correctAnswer": 0,
    "explanation": "`withMultiplier(3)` returns a function that maps any incoming array by multiplying each element by 3: `[1*3, 2*3, 3*3] = [3, 6, 9]`.",
    "tip": "Composing higher-order functions makes reusable data transformation pipelines."
  },
  {
    "id": "js-pr-01b",
    "topicId": "promises",
    "topicName": "Promises & Combinators",
    "question": "What are the three possible states of a JavaScript Promise?",
    "code": null,
    "options": [
      "`Pending`, `Fulfilled`, `Rejected`",
      "`Starting`, `Running`, `Finished`",
      "`Open`, `Processing`, `Closed`",
      "`Resolved`, `Active`, `Terminated`"
    ],
    "correctAnswer": 0,
    "explanation": "A Promise starts in the `Pending` state. It can transition to either `Fulfilled` (operation succeeded with a value) or `Rejected` (operation failed with a reason/error). Once settled, its state cannot change.",
    "tip": "A Promise is settled when it is either Fulfilled or Rejected."
  },
  {
    "id": "js-pr-02b",
    "topicId": "promises",
    "topicName": "Promises & Combinators",
    "question": "How do you create a new custom Promise in JavaScript?",
    "code": null,
    "options": [
      "`const p = new Promise((resolve, reject) => { ... });`",
      "`const p = Promise.create(() => { ... });`",
      "`const p = new AsyncFunction();`",
      "`const p = Promise.init(resolve, reject);`"
    ],
    "correctAnswer": 0,
    "explanation": "The `Promise` constructor takes an executor function with two arguments: `resolve` (call on success with data) and `reject` (call on failure with error).",
    "tip": "Syntax: `new Promise((resolve, reject) => { ... })`."
  },
  {
    "id": "js-pr-03b",
    "topicId": "promises",
    "topicName": "Promises & Combinators",
    "question": "How does Promise Chaining work with `.then()`?",
    "code": "fetchUser()\n  .then(user => fetchOrders(user.id))\n  .then(orders => calculateTotal(orders))\n  .then(total => console.log(\"Total:\", total))\n  .catch(err => console.error(\"Error:\", err));",
    "options": [
      "Each `.then()` handler returns a new value or Promise, which is passed as the input argument to the next `.then()` in the chain; any rejection anywhere triggers the `.catch()`.",
      "All `.then()` handlers execute simultaneously at the exact same instant.",
      "`.catch()` only catches errors in the very first `.then()`.",
      "Promise chaining causes browser memory crashes."
    ],
    "correctAnswer": 0,
    "explanation": "Every `.then()` returns a new Promise. Returning a value or another Promise inside `.then()` resolves the next `.then()` with that value. A single `.catch()` at the end handles rejections anywhere along the chain.",
    "tip": "Promise chaining flattens nested callbacks into clean, linear pipelines."
  },
  {
    "id": "js-pr-04b",
    "topicId": "promises",
    "topicName": "Promises & Combinators",
    "question": "How does `Promise.all()` behave when one of the input promises rejects?",
    "code": "const p1 = Promise.resolve(\"Data 1\");\nconst p2 = Promise.reject(new Error(\"Network failed\"));\nconst p3 = Promise.resolve(\"Data 3\");\nPromise.all([p1, p2, p3]);",
    "options": [
      "`Promise.all` fails fast: it immediately rejects with the error from `p2`, ignoring other successful promises.",
      "`Promise.all` waits for all promises and returns `['Data 1', null, 'Data 3']`.",
      "`Promise.all` automatically retries the failed promise 3 times.",
      "`Promise.all` resolves successfully with only `p1` and `p3`."
    ],
    "correctAnswer": 0,
    "explanation": "`Promise.all()` requires ALL promises to fulfill. If any single promise rejects, the entire `Promise.all()` rejects immediately with that error (all-or-nothing / fail-fast).",
    "tip": "Use `Promise.all` when you need all requests to succeed together."
  },
  {
    "id": "js-pr-05b",
    "topicId": "promises",
    "topicName": "Promises & Combinators",
    "question": "How does `Promise.allSettled()` differ from `Promise.all()`?",
    "code": "Promise.allSettled([p1, p2, p3]).then(results => console.log(results));",
    "options": [
      "`Promise.allSettled` waits for ALL promises to finish regardless of success or failure, returning an array of objects describing each result (`{ status: 'fulfilled', value }` or `{ status: 'rejected', reason }`).",
      "`Promise.allSettled` rejects if any promise fails.",
      "`Promise.allSettled` is synchronous.",
      "`Promise.allSettled` only runs on the server."
    ],
    "correctAnswer": 0,
    "explanation": "`Promise.allSettled()` never fails fast. It always resolves with an array showing the final outcome of every input promise, making it perfect when operations are independent.",
    "tip": "Use `Promise.allSettled()` when you want results from all tasks even if some fail."
  },
  {
    "id": "js-pr-06b",
    "topicId": "promises",
    "topicName": "Promises & Combinators",
    "question": "What is the difference between `Promise.race()` and `Promise.any()`?",
    "code": null,
    "options": [
      "`Promise.race` settles (resolves OR rejects) as soon as the FIRST promise settles; `Promise.any` waits for the FIRST FULFILLED promise (ignoring rejections until all fail).",
      "Both methods do the exact same thing.",
      "`Promise.any` rejects immediately on first error.",
      "`Promise.race` is deprecated."
    ],
    "correctAnswer": 0,
    "explanation": "`Promise.race()` completes as soon as any promise finishes (win by speed, success or failure). `Promise.any()` completes on the first SUCCESSFUL fulfillment, only rejecting (with an `AggregateError`) if ALL input promises reject.",
    "tip": "Race = fastest to finish (win or lose); Any = fastest to succeed (first winner)."
  },
  {
    "id": "js-pr-07b",
    "topicId": "promises",
    "topicName": "Promises & Combinators",
    "question": "What is the purpose of the `.finally()` handler on a Promise?",
    "code": "showLoadingSpinner();\nfetchData()\n  .then(processData)\n  .catch(handleError)\n  .finally(() => hideLoadingSpinner());",
    "options": [
      "It executes clean-up code when the promise settles (either fulfilled or rejected), without receiving arguments or modifying the resolved value.",
      "It restarts the promise if it rejected.",
      "It cancels the fetch request.",
      "It converts the promise into a string."
    ],
    "correctAnswer": 0,
    "explanation": "`.finally()` runs guaranteed cleanup logic once the promise is settled, regardless of outcome, ensuring operations like hiding loading spinners or releasing locks always run.",
    "tip": "Use `.finally()` to reset loading indicators and clean up state."
  },
  {
    "id": "js-aa-01",
    "topicId": "async-await",
    "topicName": "Async / Await",
    "question": "What does putting the `async` keyword in front of a function declaration guarantee?",
    "code": "async function getData() {\n  return \"Hello\";\n}",
    "options": [
      "The function will execute on a background CPU thread.",
      "The function ALWAYS returns a Promise; if a non-promise value is returned, it is automatically wrapped in `Promise.resolve()`.",
      "The function cannot contain loops.",
      "The function will automatically retry on errors."
    ],
    "correctAnswer": 1,
    "explanation": "An `async` function always returns a Promise. Returning `'Hello'` is equivalent to returning `Promise.resolve('Hello')`.",
    "tip": "Async functions always wrap their return value in a Promise."
  },
  {
    "id": "js-aa-02",
    "topicId": "async-await",
    "topicName": "Async / Await",
    "question": "What does the `await` operator do inside an `async` function?",
    "code": "async function loadProfile() {\n  const res = await fetch(\"/api/user\");\n  const data = await res.json();\n  return data;\n}",
    "options": [
      "It pauses the execution of the `async` function until the awaited Promise settles, unwrapping its fulfilled value or throwing its rejection reason.",
      "It blocks the entire browser window and freezes animations.",
      "It converts JSON strings into XML.",
      "It terminates the function immediately."
    ],
    "correctAnswer": 0,
    "explanation": "`await` pauses only the async function execution non-blockingly until the Promise settles. Other JavaScript tasks and UI rendering continue smoothly on the event loop.",
    "tip": "`await` lets you write asynchronous code that looks and reads like synchronous code."
  },
  {
    "id": "js-aa-03",
    "topicId": "async-await",
    "topicName": "Async / Await",
    "question": "How are errors in `await` expressions handled cleanly?",
    "code": "async function fetchOrders() {\n  try {\n    const orders = await api.getOrders();\n    return orders;\n  } catch (error) {\n    console.error(\"Failed to load orders:\", error);\n  }\n}",
    "options": [
      "Using standard synchronous `try...catch` blocks around the `await` statements.",
      "Async functions cannot handle errors.",
      "By passing an error callback as the second argument to `await`.",
      "Errors are automatically ignored by `await`."
    ],
    "correctAnswer": 0,
    "explanation": "When an awaited Promise rejects, `await` throws that rejection reason as an exception, allowing standard `try...catch...finally` blocks to catch asynchronous errors cleanly.",
    "tip": "Wrap your `await` calls inside `try...catch` for robust error handling."
  },
  {
    "id": "js-aa-04",
    "topicId": "async-await",
    "topicName": "Async / Await",
    "question": "What is the performance drawback of sequentially awaiting independent requests?",
    "code": "// Sequential:\nconst users = await fetchUsers();\nconst products = await fetchProducts();",
    "options": [
      "Requests run in series (waterfall), so total time is `time(users) + time(products)`; if independent, they should run concurrently using `Promise.all([fetchUsers(), fetchProducts()])`.",
      "Sequential await throws a SyntaxError.",
      "There is no performance difference.",
      "The second request cancels the first request."
    ],
    "correctAnswer": 0,
    "explanation": "If requests don't depend on each other, awaiting them sequentially creates an unnecessary waterfall delay. Triggering them concurrently with `Promise.all` finishes in `Math.max(timeA, timeB)`.",
    "tip": "Use `Promise.all([fetchA(), fetchB()])` for independent parallel async operations."
  },
  {
    "id": "js-aa-05",
    "topicId": "async-await",
    "topicName": "Async / Await",
    "question": "What is Top-Level `await` in modern JavaScript ES2022 / ES Modules?",
    "code": "// In an ES Module file:\nconst response = await fetch(\"https://api.example.com/config\");\nexport const config = await response.json();",
    "options": [
      "Using `await` outside an `async` function at the top level of an ES Module to pause module evaluation until the resource is loaded.",
      "A syntax error in all JavaScript environments.",
      "A method of running await in CSS files.",
      "An asynchronous HTML tag."
    ],
    "correctAnswer": 0,
    "explanation": "Top-level `await` allows ES Modules to act as async modules, awaiting asynchronous initialization tasks before exporting variables to importing modules.",
    "tip": "Top-level `await` works directly inside ES Modules (`<script type='module'>` or Vite projects)."
  },
  {
    "id": "js-aa-06",
    "topicId": "async-await",
    "topicName": "Async / Await",
    "question": "What happens if you use `await` inside a standard synchronous `array.forEach()` callback?",
    "code": "items.forEach(async (item) => {\n  await saveToDb(item);\n});\nconsole.log(\"Finished all saves!\");",
    "options": [
      "`forEach` does NOT wait for async callbacks; the callbacks run fire-and-forget in parallel and `'Finished all saves!'` logs before any saves complete.",
      "`forEach` automatically waits for all promises in sequence.",
      "Throws a CompileError.",
      "`forEach` converts to `Promise.all` automatically."
    ],
    "correctAnswer": 0,
    "explanation": "`Array.prototype.forEach` is not promise-aware and does not await async callbacks. To execute async operations sequentially in a loop, use `for (const item of items) { await save(item); }`.",
    "tip": "Never use `async` with `forEach` if you expect it to wait! Use `for...of` or `Promise.all(arr.map(...))`."
  },
  {
    "id": "js-aa-07",
    "topicId": "async-await",
    "topicName": "Async / Await",
    "question": "What will this async function return?",
    "code": "async function test() {\n  return 42;\n}\nconsole.log(test());",
    "options": [
      "`42`",
      "`Promise { <fulfilled>: 42 }` (a resolved Promise object containing 42)",
      "`undefined`",
      "`NaN`"
    ],
    "correctAnswer": 1,
    "explanation": "Directly logging the return value of an async function without `await` or `.then()` reveals the underlying Promise object.",
    "tip": "To get the value `42`, use `await test()` or `test().then(val => ...)`."
  },
  {
    "id": "js-el-01",
    "topicId": "event-loop",
    "topicName": "The Event Loop & Concurrency",
    "question": "What is the Call Stack in the JavaScript runtime engine?",
    "code": null,
    "options": [
      "A Last-In, First-Out (LIFO) data structure that keeps track of the currently executing function frames and execution context.",
      "A First-In, First-Out (FIFO) queue for network packets.",
      "A database table storing localStorage keys.",
      "A cache for image files."
    ],
    "correctAnswer": 0,
    "explanation": "The Call Stack tracks execution context. When a function is invoked, its frame is pushed to top of stack; when it returns, it is popped off (LIFO: Last-In, First-Out).",
    "tip": "A 'Stack Overflow' occurs when infinite recursion fills the call stack."
  },
  {
    "id": "js-el-02",
    "topicId": "event-loop",
    "topicName": "The Event Loop & Concurrency",
    "question": "What is the Microtask Queue versus the Task / Macrotask Queue?",
    "code": null,
    "options": [
      "Microtasks (Promises `.then`, `queueMicrotask`, `MutationObserver`) have HIGHER priority and drain completely before the Event Loop picks up the next Macrotask (`setTimeout`, `setInterval`, I/O, UI events).",
      "Macrotasks have higher priority than microtasks.",
      "Both queues are processed at the exact same time.",
      "Microtasks only run when the user moves the mouse."
    ],
    "correctAnswer": 0,
    "explanation": "Microtasks have strict priority over Macrotasks. After every synchronous task on the Call Stack finishes, the engine processes ALL pending Microtasks until the microtask queue is empty before executing ONE Macrotask.",
    "tip": "Priority: Synchronous Code -> All Microtasks -> One Macrotask -> Re-render."
  },
  {
    "id": "js-el-03",
    "topicId": "event-loop",
    "topicName": "The Event Loop & Concurrency",
    "question": "What is the exact console output order of the following classic event loop code?",
    "code": "console.log(\"1\");\nsetTimeout(() => console.log(\"2\"), 0);\nPromise.resolve().then(() => console.log(\"3\"));\nconsole.log(\"4\");",
    "options": [
      "`1`, `4`, `3`, `2`",
      "`1`, `2`, `3`, `4`",
      "`1`, `3`, `4`, `2`",
      "`1`, `4`, `2`, `3`"
    ],
    "correctAnswer": 0,
    "explanation": "1) `1` and `4` are synchronous on Call Stack. 2) Promise `.then` callback `3` is in the Microtask Queue and runs immediately after synchronous code. 3) `setTimeout` callback `2` is in the Macrotask Queue and runs last.",
    "tip": "Remember: Sync (`1`, `4`) -> Microtask Promise (`3`) -> Macrotask Timer (`2`)."
  },
  {
    "id": "js-el-04",
    "topicId": "event-loop",
    "topicName": "The Event Loop & Concurrency",
    "question": "What is the primary role of the Event Loop?",
    "code": null,
    "options": [
      "To continuously monitor the Call Stack and task queues: when the Call Stack is empty, it pushes pending tasks from the queues onto the Call Stack for execution.",
      "To render 3D graphics using WebGL.",
      "To encrypt passwords in localStorage.",
      "To download npm packages automatically."
    ],
    "correctAnswer": 0,
    "explanation": "The Event Loop is a coordination mechanism that checks if the Call Stack is clear, then dequeues callbacks from microtask and macrotask queues to execute on the main thread.",
    "tip": "The Event Loop bridges the asynchronous task queues with the single synchronous Call Stack."
  },
  {
    "id": "js-el-05",
    "topicId": "event-loop",
    "topicName": "The Event Loop & Concurrency",
    "question": "What happens if a Microtask continuously schedules another Microtask recursively (`queueMicrotask` loop)?",
    "code": null,
    "options": [
      "It starves the Event Loop, preventing Macrotasks (timers, clicks) and DOM rendering from ever executing, locking the browser UI.",
      "The browser automatically delegates it to a web worker.",
      "The CPU core is turned off.",
      "It resolves instantly without issues."
    ],
    "correctAnswer": 0,
    "explanation": "Because the engine must completely empty the Microtask Queue before yielding to macrotasks or UI rendering, an infinite microtask chain completely freezes the UI and event loop.",
    "tip": "Microtask loops starve the event loop faster than timers."
  },
  {
    "id": "js-el-06",
    "topicId": "event-loop",
    "topicName": "The Event Loop & Concurrency",
    "question": "What is `queueMicrotask()` in modern JavaScript?",
    "code": "queueMicrotask(() => {\n  console.log(\"Microtask executed\");\n});",
    "options": [
      "A native API to explicitly schedule a function to run in the Microtask Queue after the current synchronous script without creating a dummy Promise.",
      "A method to slow down network requests.",
      "A legacy Node.js-only function.",
      "A CSS keyframe animator."
    ],
    "correctAnswer": 0,
    "explanation": "`queueMicrotask(callback)` allows scheduling a microtask directly and reliably without needing `Promise.resolve().then(...)` boilerplate.",
    "tip": "`queueMicrotask()` is the cleanest standard way to schedule a microtask."
  },
  {
    "id": "js-el-07",
    "topicId": "event-loop",
    "topicName": "The Event Loop & Concurrency",
    "question": "In what order are DOM UI render updates executed relative to the Event Loop cycle?",
    "code": null,
    "options": [
      "The browser can perform rendering updates after the Call Stack and all pending Microtasks are completely clear, before the next Macrotask is processed.",
      "Rendering happens in the middle of executing a synchronous function.",
      "Rendering only happens when the page closes.",
      "Rendering happens inside the Microtask queue."
    ],
    "correctAnswer": 0,
    "explanation": "Rendering opportunities occur between macrotasks, once the call stack is empty and all microtasks have drained. Heavy synchronous loops prevent rendering, causing UI lag.",
    "tip": "Keep the call stack and microtasks lean so the browser can maintain smooth 60fps rendering."
  },
  {
    "id": "js-mp-01",
    "topicId": "maps",
    "topicName": "Maps & Keyed Collections",
    "question": "What is the primary advantage of a `Map` over a standard plain JavaScript Object (`{}`)?",
    "code": "const map = new Map();\nconst objKey = { id: 1 };\nmap.set(objKey, \"UserData\");",
    "options": [
      "In a `Map`, keys can be of ANY type (including objects, functions, numbers, and booleans), and iteration order of keys is strictly guaranteed by insertion order.",
      "Maps are automatically saved to local storage.",
      "Maps cannot store string values.",
      "Plain Objects are deprecated in ES6."
    ],
    "correctAnswer": 0,
    "explanation": "Plain object keys must be Strings or Symbols. A `Map` allows any arbitrary type (including object references, functions, primitives) as keys, maintains insertion order, and has a direct `.size` property.",
    "tip": "Use `Map` when you need non-string keys, frequent additions/removals, or a reliable `.size`."
  },
  {
    "id": "js-mp-02",
    "topicId": "maps",
    "topicName": "Maps & Keyed Collections",
    "question": "How do you check the number of entries in a `Map` instance?",
    "code": "const cache = new Map();\ncache.set(\"a\", 1);\ncache.set(\"b\", 2);",
    "options": [
      "`cache.length`",
      "`cache.size`",
      "`cache.count()`",
      "`Object.keys(cache).length`"
    ],
    "correctAnswer": 1,
    "explanation": "The `Map.prototype.size` accessor property returns the number of key-value elements in the Map object.",
    "tip": "Arrays have `.length`; Maps and Sets have `.size`."
  },
  {
    "id": "js-mp-03",
    "topicId": "maps",
    "topicName": "Maps & Keyed Collections",
    "question": "Which Map methods are used to set, retrieve, and verify existence of a key?",
    "code": null,
    "options": [
      "`.set(key, val)`, `.get(key)`, and `.has(key)`",
      "`.add(key, val)`, `.read(key)`, and `.exists(key)`",
      "`.push(key, val)`, `.pop(key)`, and `.includes(key)`",
      "`.put(key, val)`, `.fetch(key)`, and `.contains(key)`"
    ],
    "correctAnswer": 0,
    "explanation": "`map.set(k, v)` inserts/updates an entry; `map.get(k)` retrieves the value (or `undefined`); `map.has(k)` returns a boolean indicating whether the key exists.",
    "tip": "Map operations: `set`, `get`, `has`, `delete`, `clear`."
  },
  {
    "id": "js-mp-04",
    "topicId": "maps",
    "topicName": "Maps & Keyed Collections",
    "question": "What happens when using two distinct object literals as keys in a Map?",
    "code": "const map = new Map();\nmap.set({}, \"Alpha\");\nmap.set({}, \"Beta\");\nconsole.log(map.size);",
    "options": [
      "`1` because both keys are converted to `'[object Object]'`.",
      "`2` because each object literal `{}` creates a unique memory reference, and Maps use reference equality for object keys.",
      "Throws a TypeError.",
      "`0`"
    ],
    "correctAnswer": 1,
    "explanation": "Unlike plain objects (which coerce keys to `\"[object Object]\"`), Maps distinguish object keys by memory reference. The two `{}` literals have different references, creating 2 distinct entries.",
    "tip": "Maps compare object keys by reference equality (`===`)."
  },
  {
    "id": "js-mp-05",
    "topicId": "maps",
    "topicName": "Maps & Keyed Collections",
    "question": "How do you iterate over both keys and values of a Map using `for...of`?",
    "code": "const map = new Map([[\"name\", \"Alex\"], [\"role\", \"Admin\"]]);",
    "options": [
      "`for (const [key, value] of map) { console.log(key, value); }`",
      "`for (const key in map) { console.log(key); }`",
      "`map.map(([k, v]) => ...)`",
      "`for (const item of map.list())`"
    ],
    "correctAnswer": 0,
    "explanation": "A Map is directly iterable. Its default iterator returns `[key, value]` entries, allowing clean array destructuring `for (const [key, value] of map)`.",
    "tip": "`for (const [k, v] of map)` iterates entries in exact insertion order."
  },
  {
    "id": "js-mp-06",
    "topicId": "maps",
    "topicName": "Maps & Keyed Collections",
    "question": "What does `map.delete(key)` return?",
    "code": "const map = new Map([[\"status\", 200]]);\nconst res1 = map.delete(\"status\");\nconst res2 = map.delete(\"nonExistent\");",
    "options": [
      "`res1` is `true` (element found and removed); `res2` is `false` (element was not present).",
      "The removed value `200`.",
      "The mutated map instance.",
      "`undefined` in all cases."
    ],
    "correctAnswer": 0,
    "explanation": "`map.delete(key)` returns `true` if an element in the Map object existed and has been removed, or `false` if the element did not exist.",
    "tip": "`delete()` returns a boolean indicating success."
  },
  {
    "id": "js-in-01",
    "topicId": "inheritance",
    "topicName": "Inheritance & Prototype Chain",
    "question": "How does Prototypal Inheritance work in JavaScript?",
    "code": null,
    "options": [
      "Objects inherit properties and methods directly from other objects through an internal link known as the Prototype Chain (`[[Prototype]]` / `__proto__`).",
      "JavaScript copies all methods physically into every newly created object.",
      "Inheritance is only possible by importing C++ libraries.",
      "Inheritance does not exist in JavaScript."
    ],
    "correctAnswer": 0,
    "explanation": "Every JavaScript object has an internal link to a prototype object. If a property is not found on the object itself, the engine traverses up the prototype chain until it finds the property or reaches `null`.",
    "tip": "The prototype chain enables memory-efficient method sharing across instances."
  },
  {
    "id": "js-in-02",
    "topicId": "inheritance",
    "topicName": "Inheritance & Prototype Chain",
    "question": "In ES6 Class syntax, how does a subclass inherit from a parent class?",
    "code": "class Animal {\n  constructor(name) { this.name = name; }\n}\nclass Dog extends Animal {\n  constructor(name, breed) {\n    super(name);\n    this.breed = breed;\n  }\n}",
    "options": [
      "Using the `extends` keyword, and calling `super()` inside the derived constructor before accessing `this`.",
      "Using the `implements` keyword.",
      "Subclasses cannot have constructors.",
      "By copying all code into Dog manually."
    ],
    "correctAnswer": 0,
    "explanation": "`class Child extends Parent` establishes class inheritance. In a derived constructor, you MUST call `super(...)` to invoke the parent constructor before accessing `this`.",
    "tip": "Calling `super()` initializes the parent class state and binds `this`."
  },
  {
    "id": "js-in-03",
    "topicId": "inheritance",
    "topicName": "Inheritance & Prototype Chain",
    "question": "What happens if you access `this` before calling `super()` in a derived class constructor?",
    "code": "class Sub extends Base {\n  constructor() {\n    this.value = 10;\n    super();\n  }\n}",
    "options": [
      "Throws a `ReferenceError: Must call super constructor in derived class before accessing 'this'`.",
      "Silently sets `this.value = 10`.",
      "Creates a global variable.",
      "Compiles with a warning."
    ],
    "correctAnswer": 0,
    "explanation": "Derived classes do not have their own `this` binding until `super()` is called. Accessing `this` before `super()` results in a `ReferenceError`.",
    "tip": "Rule: `super()` must always be the first statement in derived class constructors."
  },
  {
    "id": "js-in-04",
    "topicId": "inheritance",
    "topicName": "Inheritance & Prototype Chain",
    "question": "What is Method Overriding in JavaScript inheritance?",
    "code": "class Parent {\n  speak() { return \"Hello\"; }\n}\nclass Child extends Parent {\n  speak() { return super.speak() + \", World!\"; }\n}",
    "options": [
      "When a derived class defines a method with the same name as a parent class method, providing its own specialized implementation (and optionally calling `super.method()`).",
      "When two methods have different parameter counts in the same class.",
      "Deleting methods from the prototype.",
      "A compiler error in ES6."
    ],
    "correctAnswer": 0,
    "explanation": "Overriding allows a subclass to provide a specific implementation of a method already defined in its superclass. Calling `super.speak()` executes the parent version.",
    "tip": "Use `super.methodName()` to reuse parent method logic inside an overridden method."
  },
  {
    "id": "js-in-05",
    "topicId": "inheritance",
    "topicName": "Inheritance & Prototype Chain",
    "question": "What does `Object.create(proto)` do?",
    "code": "const parent = { greet: () => \"Hi!\" };\nconst child = Object.create(parent);",
    "options": [
      "Creates a new empty object with its `[[Prototype]]` explicitly set to the specified `parent` object.",
      "Creates a deep clone of the `parent` object.",
      "Freezes the `parent` object.",
      "Deletes properties from `parent`."
    ],
    "correctAnswer": 0,
    "explanation": "`Object.create(proto)` creates a new object whose prototype is `proto`, establishing a clean prototype inheritance relationship without invoking a constructor.",
    "tip": "`Object.create(proto)` is the direct way to set an object's prototype."
  },
  {
    "id": "js-in-06",
    "topicId": "inheritance",
    "topicName": "Inheritance & Prototype Chain",
    "question": "What is at the very top (end) of almost all JavaScript prototype chains?",
    "code": null,
    "options": [
      "`Object.prototype`, whose own prototype is `null`.",
      "`Function.prototype`",
      "`window.document`",
      "`Array.prototype`"
    ],
    "correctAnswer": 0,
    "explanation": "Almost all objects in JavaScript descend from `Object.prototype`. The prototype of `Object.prototype` is `null`, terminating the prototype lookup chain.",
    "tip": "The prototype chain terminates when `[[Prototype]]` is `null`."
  },
  {
    "id": "js-ba-01",
    "topicId": "browser-apis",
    "topicName": "Browser APIs & Web APIs",
    "question": "What is the primary difference between `localStorage` and `sessionStorage`?",
    "code": null,
    "options": [
      "`localStorage` data persists indefinitely across browser sessions and computer restarts until explicitly cleared; `sessionStorage` data is cleared as soon as the specific browser tab or window is closed.",
      "`localStorage` can only store numbers.",
      "`sessionStorage` data is shared across all open tabs and windows.",
      "`localStorage` is automatically sent with every HTTP request header."
    ],
    "correctAnswer": 0,
    "explanation": "Both store key-value string pairs per origin (typically ~5-10MB). `localStorage` persists until cleared by code or user. `sessionStorage` is scoped to the current tab session and wiped upon tab close.",
    "tip": "Use `localStorage` for user preferences/theme; use `sessionStorage` for single-session draft data."
  },
  {
    "id": "js-ba-02",
    "topicId": "browser-apis",
    "topicName": "Browser APIs & Web APIs",
    "question": "Why must objects and arrays be serialized with `JSON.stringify()` before saving to `localStorage`?",
    "code": "const settings = { theme: \"dark\", volume: 80 };\nlocalStorage.setItem(\"userSettings\", JSON.stringify(settings));\nconst loaded = JSON.parse(localStorage.getItem(\"userSettings\"));",
    "options": [
      "Because Web Storage (`localStorage`/`sessionStorage`) only stores string values; passing a raw object directly coerces it to the useless string `'[object Object]'`.",
      "To encrypt data against hackers.",
      "Because numbers are not supported in browsers.",
      "To compress file size by 90%."
    ],
    "correctAnswer": 0,
    "explanation": "`localStorage.setItem(key, value)` converts non-strings via `.toString()`. Without `JSON.stringify()`, objects become `\"[object Object]\"` and data is lost.",
    "tip": "Always pair `JSON.stringify()` on save with `JSON.parse()` on load for storage."
  },
  {
    "id": "js-ba-03",
    "topicId": "browser-apis",
    "topicName": "Browser APIs & Web APIs",
    "question": "How does the native `fetch()` API indicate HTTP errors (like 404 Not Found or 500 Server Error)?",
    "code": "const response = await fetch(\"/api/data\");\nif (!response.ok) {\n  throw new Error(\"HTTP error \" + response.status);\n}",
    "options": [
      "`fetch()` does NOT reject on HTTP 404/500 status codes; it resolves normally with `response.ok === false`. It ONLY rejects on actual network failure (offline, DNS lookup failed, CORS blocked).",
      "`fetch()` automatically rejects on any status code other than 200.",
      "`fetch()` throws a SyntaxError on 404.",
      "`fetch()` reloads the browser page on 500."
    ],
    "correctAnswer": 0,
    "explanation": "A common pitfall: `fetch()` resolves its promise even for HTTP 404 or 500 errors. You must manually check `if (!response.ok)` (status in 200-299 range) to handle HTTP error codes.",
    "tip": "Always check `if (!response.ok)` when using `fetch()`."
  },
  {
    "id": "js-ba-04",
    "topicId": "browser-apis",
    "topicName": "Browser APIs & Web APIs",
    "question": "What is the difference between `JSON.stringify()` and `JSON.parse()`?",
    "code": null,
    "options": [
      "`JSON.stringify()` converts a JavaScript object/value into a JSON string; `JSON.parse()` converts a JSON string back into a JavaScript object/value.",
      "`JSON.parse()` creates HTML elements.",
      "They are interchangeable functions.",
      "`JSON.stringify()` only works in Node.js."
    ],
    "correctAnswer": 0,
    "explanation": "`JSON.stringify(data)` serializes JavaScript data structures into JSON formatted text. `JSON.parse(text)` deserializes a valid JSON string into native JS objects/arrays.",
    "tip": "Stringify = Object to String. Parse = String to Object."
  },
  {
    "id": "js-ba-05",
    "topicId": "browser-apis",
    "topicName": "Browser APIs & Web APIs",
    "question": "How do you navigate the user to a new URL programmatically in browser JavaScript?",
    "code": null,
    "options": [
      "`window.location.href = 'https://example.com';`",
      "`document.redirect('https://example.com');`",
      "`browser.goTo('https://example.com');`",
      "`window.navigate.url('https://example.com');`"
    ],
    "correctAnswer": 0,
    "explanation": "Assigning a URL string to `window.location.href` (or calling `window.location.assign(url)`) triggers browser navigation to the target address.",
    "tip": "`window.location.href = url` navigates to a new page in the browser."
  },
  {
    "id": "js-ba-06",
    "topicId": "browser-apis",
    "topicName": "Browser APIs & Web APIs",
    "question": "How do you copy text to the system clipboard asynchronously in modern web applications?",
    "code": "await navigator.clipboard.writeText(\"Copied code snippet!\");",
    "options": [
      "`navigator.clipboard.writeText(text)` (returns a Promise)",
      "`document.copy(text)`",
      "`window.clipboard.set(text)`",
      "`localStorage.setItem('clipboard', text)`"
    ],
    "correctAnswer": 0,
    "explanation": "The modern Async Clipboard API provides `navigator.clipboard.writeText(string)`, returning a Promise that resolves when the text is successfully copied.",
    "tip": "`await navigator.clipboard.writeText(text)` is the modern standard for copy-to-clipboard buttons."
  },
  {
    "id": "js-ba-07",
    "topicId": "browser-apis",
    "topicName": "Browser APIs & Web APIs",
    "question": "What is the purpose of `localStorage.removeItem(key)` vs `localStorage.clear()`?",
    "code": null,
    "options": [
      "`removeItem(key)` deletes only the specified key-value pair; `clear()` deletes ALL key-value pairs stored for that origin.",
      "`removeItem` deletes the entire browser history.",
      "`clear` only removes null values.",
      "Both delete all keys on the computer."
    ],
    "correctAnswer": 0,
    "explanation": "`localStorage.removeItem('token')` deletes the single `'token'` item. `localStorage.clear()` wipes all data stored in localStorage for the current domain.",
    "tip": "Use `removeItem(key)` for targeted removal and `clear()` for full logout resets."
  },
  {
    "id": "js-bp-01",
    "topicId": "best-practices",
    "topicName": "Clean Code & Best Practices",
    "question": "What casing convention is standard in JavaScript for constants with immutable global configuration values?",
    "code": "const MAX_RETRY_COUNT = 3;\nconst API_BASE_URL = \"https://api.example.com\";",
    "options": [
      "UPPER_SNAKE_CASE (all caps with underscores)",
      "kebab-case",
      "camelCase",
      "PascalCase"
    ],
    "correctAnswer": 0,
    "explanation": "Global compile-time configuration constants that never change are conventionally written in `UPPER_SNAKE_CASE` (e.g. `MAX_ITEMS`, `PORT_NUMBER`). Standard variables use `camelCase`.",
    "tip": "Use UPPER_SNAKE_CASE for hardcoded configuration constants."
  },
  {
    "id": "js-bp-02",
    "topicId": "best-practices",
    "topicName": "Clean Code & Best Practices",
    "question": "What is a 'Magic Number' or 'Magic String' in programming, and why is it considered an anti-pattern?",
    "code": "// BAD:\nif (user.role === 4) { ... }\n\n// GOOD:\nconst ROLE_ADMIN = 4;\nif (user.role === ROLE_ADMIN) { ... }",
    "options": [
      "Hardcoded literal values with unexplained meaning scattered through code; extracting them into named constants clarifies intent and prevents typos.",
      "A number that triggers JavaScript animations.",
      "A random number generated by `Math.random()`.",
      "An encryption algorithm key."
    ],
    "correctAnswer": 0,
    "explanation": "Magic numbers/strings are unexplained literal values in code. Replacing them with named constants makes code self-documenting and easy to update in one central place.",
    "tip": "Always replace cryptic literal values with meaningful constant names."
  },
  {
    "id": "js-bp-03",
    "topicId": "best-practices",
    "topicName": "Clean Code & Best Practices",
    "question": "Why is immutability (avoiding mutating inputs/state directly) strongly encouraged in modern JavaScript and React?",
    "code": "// BAD (mutating input):\nfunction addItem(arr, item) {\n  arr.push(item);\n  return arr;\n}\n\n// GOOD (immutable copy):\nfunction addItem(arr, item) {\n  return [...arr, item];\n}",
    "options": [
      "Pure immutable functions avoid hidden side effects, make state predictable, simplify debugging, and enable React change detection to work efficiently.",
      "Immutability speeds up CPU execution by 10x.",
      "Mutating arrays causes a SyntaxError in ES6.",
      "Immutability removes the need for functions."
    ],
    "correctAnswer": 0,
    "explanation": "Immutability ensures functions don't unexpectedly modify data shared elsewhere. In React, reference changes (`oldState !== newState`) trigger accurate re-renders.",
    "tip": "Use spread `[...arr, item]` or `{ ...obj, prop: val }` instead of mutating existing state."
  },
  {
    "id": "js-bp-04",
    "topicId": "best-practices",
    "topicName": "Clean Code & Best Practices",
    "question": "Which of the following functions best demonstrates the principle of 'Short Functions with Single Responsibility'?",
    "code": null,
    "options": [
      "A 200-line function that validates inputs, fetches records from database, calculates taxes, converts currency, formats PDF, and sends emails.",
      "Small, focused functions (10-20 lines) that each perform a single dedicated task and compose together cleanly.",
      "A function with 15 nested `if` statements.",
      "A function that modifies global variables directly."
    ],
    "correctAnswer": 1,
    "explanation": "Functions should do one task well. Small, focused functions are easier to understand, test, debug, and reuse.",
    "tip": "Keep functions short and focused on doing a single thing well."
  },
  {
    "id": "js-bp-05",
    "topicId": "best-practices",
    "topicName": "Clean Code & Best Practices",
    "question": "What is the purpose of Linters (like ESLint) and Formatters (like Prettier) in JavaScript teams?",
    "code": null,
    "options": [
      "Linters analyze code statically to catch potential bugs and enforce best practice rules; formatters automatically enforce consistent code style and formatting across the team.",
      "They run code directly in the browser.",
      "They compile JavaScript into Java bytecode.",
      "They replace unit testing completely."
    ],
    "correctAnswer": 0,
    "explanation": "ESLint detects bugs, syntax errors, and anti-patterns. Prettier ensures uniform spacing, indentation, and quotes across all project files.",
    "tip": "Linters catch bugs; formatters enforce formatting."
  },
  {
    "id": "js-bp-06",
    "topicId": "best-practices",
    "topicName": "Clean Code & Best Practices",
    "question": "What is the Early Return Pattern in clean coding?",
    "code": "function getDiscount(user) {\n  if (!user) return 0;\n  if (user.isVip) return 0.20;\n  if (user.isMember) return 0.10;\n  return 0.05;\n}",
    "options": [
      "Returning immediately as soon as a condition or edge case is determined, avoiding unnecessary `else` statements and reducing nesting depth.",
      "Returning from a function before it is called.",
      "Always returning `null`.",
      "A timer that fires early."
    ],
    "correctAnswer": 0,
    "explanation": "Early returns eliminate unnecessary `else` and nested branches. Once a return statement runs, execution stops immediately, keeping code flat and clear.",
    "tip": "If you have a return inside `if (...)`, you don't need `else` after it!"
  }
];
