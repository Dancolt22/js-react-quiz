import fs from 'fs';
import path from 'path';

// Let's create JS questions generator
const jsQuestions = [
  // 1. Coding Principles & Best Practices (7 questions)
  {
    id: "js-cp-01",
    topicId: "coding-principles",
    topicName: "Coding Principles & Best Practices",
    question: "What does the DRY software engineering principle stand for, and what is its primary objective?",
    code: null,
    options: [
      "Don't Repeat Yourself — avoid duplicate logic by extracting shared code into reusable functions.",
      "Do Review Yourself — continuously test and debug code manually.",
      "Data Redundancy Yield — store identical data across multiple variables for backup.",
      "Dynamic Return Yield — always return values dynamically from every function."
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
      "Keep It Structured & Synchronous — avoid asynchronous code whenever possible.",
      "Keep It Simple, Stupid — the simplest solution that works is usually the best and easiest to maintain.",
      "Key Instruction System Standard — enforce strictly 80-character line lengths.",
      "Knowledge In Source Systems — embed full documentation in every comment block."
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
  }
];

console.log("Base JS questions count:", jsQuestions.length);
