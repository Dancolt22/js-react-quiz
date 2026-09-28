export const JS_TOPICS = [
  {
    id: 'coding-principles',
    name: 'Coding Principles & Best Practices',
    sectionNum: 1,
    description: 'DRY, KISS, YAGNI, Single Responsibility, readability, and pure functions.',
    badge: 'Foundations',
    difficulty: 'Beginner',
    estimatedQuestions: 7
  },
  {
    id: 'pseudocode-logic',
    name: 'Pseudocode & Algorithmic Thinking',
    sectionNum: 2,
    description: 'Decomposing problems, flowcharts, step-by-step algorithms.',
    badge: 'Foundations',
    difficulty: 'Beginner',
    estimatedQuestions: 6
  },
  {
    id: 'math-foundations',
    name: 'Math Foundations for Programming',
    sectionNum: 3,
    description: 'Arithmetic, modulo %, operator precedence (PEMDAS), and Math object methods.',
    badge: 'Math',
    difficulty: 'Beginner',
    estimatedQuestions: 6
  },
  {
    id: 'intro-javascript',
    name: 'Introduction to JavaScript',
    sectionNum: 4,
    description: 'ECMAScript, runtime environments (Browser vs Node), client vs server, console.',
    badge: 'Core',
    difficulty: 'Beginner',
    estimatedQuestions: 6
  },
  {
    id: 'syntax-statements',
    name: 'Syntax, Statements & Comments',
    sectionNum: 5,
    description: 'Semicolons, automatic semicolon insertion, case sensitivity, reserved keywords.',
    badge: 'Syntax',
    difficulty: 'Beginner',
    estimatedQuestions: 6
  },
  {
    id: 'variables-identifiers',
    name: 'Variables & Identifiers',
    sectionNum: 6,
    description: 'var vs let vs const, scopes, mutation vs reassignment, Temporal Dead Zone.',
    badge: 'Variables',
    difficulty: 'Beginner',
    estimatedQuestions: 7
  },
  {
    id: 'data-types',
    name: 'Data Types & Type Checking',
    sectionNum: 7,
    description: '7 Primitives, reference types, typeof quirks, truthy & falsy values.',
    badge: 'Types',
    difficulty: 'Intermediate',
    estimatedQuestions: 7
  },
  {
    id: 'operators-expressions',
    name: 'Operators & Expressions',
    sectionNum: 8,
    description: 'Equality == vs ===, logical &&/||/!, Nullish coalescing ??, ternary operator.',
    badge: 'Operators',
    difficulty: 'Intermediate',
    estimatedQuestions: 7
  },
  {
    id: 'control-flow',
    name: 'Control Flow',
    sectionNum: 9,
    description: 'Execution flow, conditional branches, sequential evaluation.',
    badge: 'Logic',
    difficulty: 'Beginner',
    estimatedQuestions: 6
  },
  {
    id: 'if-else',
    name: 'If / Else & Guard Clauses',
    sectionNum: 10,
    description: 'if, else if, else, nested logic, guard clauses, short-circuit evaluation.',
    badge: 'Logic',
    difficulty: 'Beginner',
    estimatedQuestions: 7
  },
  {
    id: 'switch',
    name: 'Switch Statements',
    sectionNum: 11,
    description: 'switch syntax, case, break, fall-through behavior, default fallback.',
    badge: 'Logic',
    difficulty: 'Beginner',
    estimatedQuestions: 6
  },
  {
    id: 'loops',
    name: 'Loops (for, while, for..of, for..in)',
    sectionNum: 12,
    description: 'for, while, do..while, for..of, for..in, break, continue, avoiding infinite loops.',
    badge: 'Iteration',
    difficulty: 'Intermediate',
    estimatedQuestions: 7
  },
  {
    id: 'functions',
    name: 'Functions & Declarations',
    sectionNum: 13,
    description: 'Declarations vs expressions, first-class functions, invocation, return statements.',
    badge: 'Functions',
    difficulty: 'Beginner',
    estimatedQuestions: 7
  },
  {
    id: 'arrow-functions',
    name: 'Arrow Functions',
    sectionNum: 14,
    description: 'Arrow syntax, implicit returns, lexical this binding, limitations.',
    badge: 'Functions',
    difficulty: 'Intermediate',
    estimatedQuestions: 7
  },
  {
    id: 'parameters-returns',
    name: 'Parameters & Return Values',
    sectionNum: 15,
    description: 'Default parameters, rest parameters ...args, arguments object, pass-by-value/ref.',
    badge: 'Functions',
    difficulty: 'Intermediate',
    estimatedQuestions: 7
  },
  {
    id: 'closures',
    name: 'Closures & Encapsulation',
    sectionNum: 16,
    description: 'Lexical environment preservation, data privacy, function factories.',
    badge: 'Advanced',
    difficulty: 'Advanced',
    estimatedQuestions: 8
  },
  {
    id: 'scope-hoisting',
    name: 'Scope & Hoisting',
    sectionNum: 17,
    description: 'Global, function, block scope, hoisting of var/functions/let/const, TDZ.',
    badge: 'Advanced',
    difficulty: 'Advanced',
    estimatedQuestions: 7
  },
  {
    id: 'objects',
    name: 'Objects & Methods',
    sectionNum: 18,
    description: 'Object literals, dot vs bracket notation, Object.keys/values/entries, destructuring.',
    badge: 'Objects',
    difficulty: 'Intermediate',
    estimatedQuestions: 7
  },
  {
    id: 'arrays',
    name: 'Arrays & Array Methods',
    sectionNum: 19,
    description: 'Indexing, mutating (push/pop/splice) vs non-mutating (map/filter/reduce/slice).',
    badge: 'Arrays',
    difficulty: 'Intermediate',
    estimatedQuestions: 8
  },
  {
    id: 'dom-manipulation',
    name: 'DOM Manipulation',
    sectionNum: 20,
    description: 'Selecting elements, textContent vs innerHTML, attributes, classList, createElement.',
    badge: 'DOM',
    difficulty: 'Intermediate',
    estimatedQuestions: 7
  },
  {
    id: 'events-handling',
    name: 'Events & Event Handling',
    sectionNum: 21,
    description: 'addEventListener, event object, preventDefault, stopPropagation, bubbling, delegation.',
    badge: 'DOM',
    difficulty: 'Intermediate',
    estimatedQuestions: 7
  },
  {
    id: 'error-handling',
    name: 'Error Handling & Debugging',
    sectionNum: 22,
    description: 'try..catch..finally, throw new Error(), TypeError vs ReferenceError, console, debugger.',
    badge: 'Debugging',
    difficulty: 'Intermediate',
    estimatedQuestions: 6
  },
  {
    id: 'async-javascript',
    name: 'Asynchronous JavaScript & Timers',
    sectionNum: 23,
    description: 'Single-threaded non-blocking I/O, setTimeout, setInterval, clearTimeout.',
    badge: 'Async',
    difficulty: 'Intermediate',
    estimatedQuestions: 6
  },
  {
    id: 'callbacks',
    name: 'Callbacks & Higher-Order Functions',
    sectionNum: 24,
    description: 'Callback execution, higher-order functions, callback hell, error-first pattern.',
    badge: 'Async',
    difficulty: 'Intermediate',
    estimatedQuestions: 6
  },
  {
    id: 'promises',
    name: 'Promises & Combinators',
    sectionNum: 25,
    description: 'Promise lifecycle (pending/fulfilled/rejected), .then/.catch/.finally, Promise.all/race.',
    badge: 'Async',
    difficulty: 'Advanced',
    estimatedQuestions: 7
  },
  {
    id: 'async-await',
    name: 'Async / Await',
    sectionNum: 26,
    description: 'async keyword, await operator, error handling, sequential vs concurrent async.',
    badge: 'Async',
    difficulty: 'Advanced',
    estimatedQuestions: 7
  },
  {
    id: 'event-loop',
    name: 'The Event Loop & Concurrency',
    sectionNum: 27,
    description: 'Call stack, Web APIs, Macrotask queue vs Microtask queue, execution ordering.',
    badge: 'Architecture',
    difficulty: 'Advanced',
    estimatedQuestions: 7
  },
  {
    id: 'maps',
    name: 'Maps & Keyed Collections',
    sectionNum: 29,
    description: 'new Map(), set/get/has/delete/size, Maps vs Objects, key types preservation.',
    badge: 'Data Structures',
    difficulty: 'Intermediate',
    estimatedQuestions: 6
  },
  {
    id: 'inheritance',
    name: 'Inheritance & Prototype Chain',
    sectionNum: 41,
    description: 'Prototypal inheritance, prototype chain, ES6 extends, super() calls.',
    badge: 'OOP',
    difficulty: 'Advanced',
    estimatedQuestions: 6
  },
  {
    id: 'browser-apis',
    name: 'Browser APIs & Web APIs',
    sectionNum: 44,
    description: 'localStorage vs sessionStorage, fetch() API, JSON.parse/stringify, location, history.',
    badge: 'Web APIs',
    difficulty: 'Intermediate',
    estimatedQuestions: 7
  },
  {
    id: 'best-practices',
    name: 'Clean Code & Best Practices',
    sectionNum: 45,
    description: 'Naming conventions, avoiding magic values, immutability, early return patterns.',
    badge: 'Best Practices',
    difficulty: 'Intermediate',
    estimatedQuestions: 6
  }
];

export const REACT_TOPICS = [
  {
    id: 'react-intro',
    name: 'Module 1: Introduction to React',
    sectionNum: 1,
    description: 'Declarative vs Imperative, Library vs Framework, Virtual DOM, SPA concept.',
    badge: 'Core',
    difficulty: 'Beginner',
    estimatedQuestions: 12
  },
  {
    id: 'react-setup',
    name: 'Module 2: Setting Up a React 19 Project',
    sectionNum: 2,
    description: 'Node.js, npm, Vite vs CRA, project files (index.html, main.jsx, App.jsx, package.json).',
    badge: 'Tooling',
    difficulty: 'Beginner',
    estimatedQuestions: 11
  },
  {
    id: 'react-jsx',
    name: 'Module 3: JSX',
    sectionNum: 3,
    description: 'JSX rules, transpilation, Fragments <>, expressions { }, className, style objects.',
    badge: 'JSX',
    difficulty: 'Beginner',
    estimatedQuestions: 13
  },
  {
    id: 'react-components-props',
    name: 'Module 4: Components and Props',
    sectionNum: 4,
    description: 'Functional components, props passing, destructuring, default props, children prop.',
    badge: 'Components',
    difficulty: 'Beginner',
    estimatedQuestions: 13
  },
  {
    id: 'react-state-usestate',
    name: 'Module 5: State and useState Hook',
    sectionNum: 5,
    description: 'State vs Props, useState hook, updater functions, batching, state immutability.',
    badge: 'State',
    difficulty: 'Intermediate',
    estimatedQuestions: 14
  },
  {
    id: 'react-events',
    name: 'Module 6: Handling Events',
    sectionNum: 6,
    description: 'Synthetic events, onClick/onChange, passing parameters, preventDefault.',
    badge: 'Events',
    difficulty: 'Intermediate',
    estimatedQuestions: 12
  },
  {
    id: 'react-conditional-rendering',
    name: 'Module 7: Conditional Rendering',
    sectionNum: 7,
    description: 'Ternary operator, logical && operator (and 0 gotcha), if/else outside JSX.',
    badge: 'Logic',
    difficulty: 'Beginner',
    estimatedQuestions: 12
  },
  {
    id: 'react-lists-keys',
    name: 'Module 8: Rendering Lists and Keys',
    sectionNum: 8,
    description: 'Array.prototype.map in JSX, key prop purpose, why index keys can cause bugs.',
    badge: 'Lists',
    difficulty: 'Intermediate',
    estimatedQuestions: 13
  },
  {
    id: 'react-forms',
    name: 'Module 9: Forms & Controlled Inputs',
    sectionNum: 9,
    description: 'Controlled vs uncontrolled, text inputs, checkboxes, multi-input handlers, form submit.',
    badge: 'Forms',
    difficulty: 'Intermediate',
    estimatedQuestions: 13
  },
  {
    id: 'react-useeffect',
    name: 'Module 10: The useEffect Hook',
    sectionNum: 10,
    description: 'Side effects, dependency array variations (empty, with deps, none), cleanup function.',
    badge: 'Hooks',
    difficulty: 'Intermediate',
    estimatedQuestions: 14
  },
  {
    id: 'react-useref-usecontext',
    name: 'Module 11: useRef and useContext',
    sectionNum: 11,
    description: 'DOM access with useRef, mutable values without re-render, createContext, useContext.',
    badge: 'Hooks',
    difficulty: 'Advanced',
    estimatedQuestions: 13
  },
  {
    id: 'react-performance',
    name: 'Module 12: Performance Basics',
    sectionNum: 12,
    description: 'Re-render triggers, React.memo, useMemo for calculations, useCallback for handlers.',
    badge: 'Performance',
    difficulty: 'Advanced',
    estimatedQuestions: 12
  },
  {
    id: 'react-19-features',
    name: 'Module 13: What\'s New in React 19',
    sectionNum: 13,
    description: 'Actions, useActionState, useFormStatus, useOptimistic, the use() hook, direct ref prop.',
    badge: 'React 19',
    difficulty: 'Advanced',
    estimatedQuestions: 15
  },
  {
    id: 'react-router',
    name: 'Module 14: Basic Routing with React Router',
    sectionNum: 14,
    description: 'BrowserRouter, Routes, Route, Link, NavLink, useNavigate, useParams, 404 route.',
    badge: 'Routing',
    difficulty: 'Intermediate',
    estimatedQuestions: 13
  },
  {
    id: 'react-best-practices',
    name: 'Module 15: Project Structure & Best Practices',
    sectionNum: 15,
    description: 'Folder organization, custom hooks creation rules, separation of concerns, DRY components.',
    badge: 'Architecture',
    difficulty: 'Intermediate',
    estimatedQuestions: 10
  },
  {
    id: 'react-glossary',
    name: 'Module 16: Glossary of Key Terms',
    sectionNum: 16,
    description: 'Hydration, Reconciliation, Fiber, HOC, Lifting state up, SyntheticEvent, StrictMode.',
    badge: 'Glossary',
    difficulty: 'Intermediate',
    estimatedQuestions: 10
  }
];

export const COURSES = {
  javascript: {
    id: 'javascript',
    title: 'JavaScript Core & Web APIs',
    subtitle: 'From Zero to Professional — Comprehensive JavaScript Certification & Exam',
    icon: 'FileCode2',
    color: '#dc2626',
    totalBankQuestions: 200,
    examQuestions: 40,
    defaultTimeMinutes: 40,
    topics: JS_TOPICS,
    description: 'Master variables, data types, closures, event loop, promises, async/await, DOM manipulation, browser APIs, and clean code best practices.'
  },
  react: {
    id: 'react',
    title: 'React 19 & Modern UI Development',
    subtitle: 'Full Modern React Course — Components, Hooks, React 19 Actions & Routing',
    icon: 'Atom',
    color: '#dc2626',
    totalBankQuestions: 200,
    examQuestions: 40,
    defaultTimeMinutes: 40,
    topics: REACT_TOPICS,
    description: 'Master JSX, useState, useEffect, useRef, useContext, React 19 useActionState / useOptimistic, performance optimization, and React Router.'
  },
  both: {
    id: 'both',
    title: 'Dual Master Marathon (JS + React 19)',
    subtitle: 'Complete Full-Stack Frontend Evaluation — 80 Questions Across All Topics',
    icon: 'Layers',
    color: '#b91c1c',
    totalBankQuestions: 400,
    examQuestions: 80,
    defaultTimeMinutes: 80,
    topics: [...JS_TOPICS, ...REACT_TOPICS],
    description: 'The ultimate combined exam covering all JavaScript core concepts and all React 19 modules. Rigorous 80-question drill.'
  }
};
