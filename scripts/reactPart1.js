export const reactPart1 = [
  // Module 1: Introduction to React (12 questions)
  {
    id: "r19-m1-01",
    topicId: "react-intro",
    topicName: "Module 1: Introduction to React",
    question: "What is React, and what is its primary role in modern web development?",
    code: null,
    options: [
      "A JavaScript library for building user interfaces through reusable, declarative components.",
      "A relational database management engine for storing SQL tables.",
      "A CSS styling framework that replaces HTML.",
      "A server operating system developed by Facebook."
    ],
    correctAnswer: 0,
    explanation: "React is an open-source JavaScript library developed by Meta for building dynamic user interfaces, particularly for Single Page Applications (SPAs), using reusable components.",
    tip: "React focuses primarily on the 'View' layer of application architecture."
  },
  {
    id: "r19-m1-02",
    topicId: "react-intro",
    topicName: "Module 1: Introduction to React",
    question: "What does it mean that React is 'Declarative' rather than 'Imperative'?",
    code: null,
    options: [
      "You describe WHAT the UI should look like for a given state, and React handles the DOM updates automatically; in imperative code, you manually script every step to update elements.",
      "Declarative code requires manually selecting DOM elements with `document.getElementById`.",
      "Imperative code is faster and easier to test than declarative code.",
      "Declarative means writing all JavaScript inside CSS files."
    ],
    correctAnswer: 0,
    explanation: "In Declarative programming (React), you specify the desired end-state UI (`<p>{message}</p>`), and React efficiently applies changes. In Imperative programming (Vanilla JS), you write step-by-step instructions (`document.getElementById('msg').textContent = message`).",
    tip: "Declarative = 'What you want'; Imperative = 'Step-by-step how to do it'."
  },
  {
    id: "r19-m1-03",
    topicId: "react-intro",
    topicName: "Module 1: Introduction to React",
    question: "Why does React describe itself as a 'Library' rather than a 'Framework'?",
    code: null,
    options: [
      "React focuses solely on UI component rendering and leaves routing, state management, and build tools up to developer choice; a framework enforces rigid architecture and built-in tooling.",
      "React cannot run on mobile devices.",
      "Frameworks can only be written in Python.",
      "React requires zero JavaScript to run."
    ],
    correctAnswer: 0,
    explanation: "A library provides specific tools and lets your code call it when needed (you control the architecture). A framework (like Angular or Next.js) controls the application flow and calls your code (Inversion of Control).",
    tip: "Library: You are in the driver's seat. Framework: The framework drives and tells you where to sit."
  },
  {
    id: "r19-m1-04",
    topicId: "react-intro",
    topicName: "Module 1: Introduction to React",
    question: "What is the Virtual DOM in React?",
    code: null,
    options: [
      "A lightweight virtual JavaScript object representation of the real DOM kept in memory.",
      "A physical hardware device that speeds up monitors.",
      "A duplicate HTML document stored in `localStorage`.",
      "A Google Chrome developer extension."
    ],
    correctAnswer: 0,
    explanation: "The Virtual DOM is an in-memory representation of the real DOM tree. When state changes, React updates the Virtual DOM, calculates the minimal diff (reconciliation), and updates only the necessary nodes in the real DOM.",
    tip: "The Virtual DOM makes DOM updates fast by batching and computing minimal real DOM mutations."
  },
  {
    id: "r19-m1-05",
    topicId: "react-intro",
    topicName: "Module 1: Introduction to React",
    question: "What is a Single Page Application (SPA)?",
    code: null,
    options: [
      "A web application that loads a single HTML page and dynamically rewrites page content with JavaScript as the user interacts, without reloading the entire page from the server.",
      "A website that contains only one paragraph of text.",
      "A webpage that disables navigation links.",
      "An application that only works on desktop monitors."
    ],
    correctAnswer: 0,
    explanation: "An SPA loads a single shell HTML page once. Navigation and UI updates occur seamlessly via client-side JavaScript without full page reloads, providing a smooth app-like feel.",
    tip: "SPAs deliver fast user experiences by eliminating full-page browser refreshes."
  },
  {
    id: "r19-m1-06",
    topicId: "react-intro",
    topicName: "Module 1: Introduction to React",
    question: "What is a React Component?",
    code: `function WelcomeMessage({ name }) {
  return <h1>Welcome, {name}!</h1>;
}`,
    options: [
      "A reusable, independent, self-contained piece of UI written as a JavaScript function that returns JSX.",
      "A CSS class that changes background color.",
      "A database query in Node.js.",
      "A browser cookie."
    ],
    correctAnswer: 0,
    explanation: "Components are the core building blocks of React apps. They encapsulate UI structure, styling, and behavior into modular, reusable functions that return JSX.",
    tip: "Think of components like custom HTML tags with their own logic and styling."
  },
  {
    id: "r19-m1-07",
    topicId: "react-intro",
    topicName: "Module 1: Introduction to React",
    question: "What is 'Rendering' in React terms?",
    code: null,
    options: [
      "The process where React calls your component function to retrieve the JSX description of what the UI should look like.",
      "Saving images to the server disk.",
      "Converting CSS into JavaScript strings.",
      "Deleting unmounted elements from GitHub."
    ],
    correctAnswer: 0,
    explanation: "Rendering is React invoking component functions to figure out the UI tree (JSX). React then commits any differences to the real DOM (Commit phase).",
    tip: "Render = calculate what UI should look like; Commit = apply changes to actual DOM."
  },
  {
    id: "r19-m1-08",
    topicId: "react-intro",
    topicName: "Module 1: Introduction to React",
    question: "Which of the following demonstrates an IMPERATIVE approach to updating text?",
    code: null,
    options: [
      "`document.getElementById('status').textContent = 'Loaded';`",
      "`<p>{status}</p>` with `setStatus('Loaded')`",
      "`<h1>{isLoaded ? 'Loaded' : 'Loading...'}</h1>`",
      "`<StatusBadge status={status} />`"
    ],
    correctAnswer: 0,
    explanation: "`document.getElementById('status').textContent = 'Loaded'` is imperative: it directly tells the browser DOM exact step-by-step instructions to find an ID and mutate its text property.",
    tip: "Direct DOM mutation methods (`getElementById`, `innerHTML`) are imperative."
  },
  {
    id: "r19-m1-09",
    topicId: "react-intro",
    topicName: "Module 1: Introduction to React",
    question: "What is React Native in comparison to React DOM?",
    code: null,
    options: [
      "React DOM renders components to web browser DOM elements (like `<div>`, `<p>`); React Native compiles React components to native mobile UI views for iOS and Android (like `<View>`, `<Text>`).",
      "React Native is a PHP framework.",
      "React Native only works on desktop PCs.",
      "React DOM is obsolete and replaced by React Native."
    ],
    correctAnswer: 0,
    explanation: "React core logic (state, components, hooks) is platform-agnostic. React DOM translates it into HTML DOM elements, while React Native maps it to native iOS/Android mobile components.",
    tip: "Learn React once, write for web (React DOM) and mobile (React Native)."
  },
  {
    id: "r19-m1-10",
    topicId: "react-intro",
    topicName: "Module 1: Introduction to React",
    question: "Why does React require component function names to start with a Capital (PascalCase) letter?",
    code: `// Correct:
function UserProfile() { return <div>User</div>; }

// Incorrect:
function userProfile() { return <div>User</div>; }`,
    options: [
      "JSX interprets lowercase tags (like `<div>`, `<span>`, `<p>`) as standard HTML elements, whereas capitalized tags (`<UserProfile />`) are treated as custom React components.",
      "Because JavaScript variables cannot start with lowercase letters.",
      "It is a strict requirement of Node.js.",
      "Capitalized names run faster in the browser."
    ],
    correctAnswer: 0,
    explanation: "JSX uses the first letter case to distinguish built-in HTML/SVG tags (`<div>`, `<button>`) from custom React components (`<Button />`, `<Card />`). Lowercase tags are passed as strings to `createElement`.",
    tip: "Always name React components in PascalCase: `UserProfile`, `ExamCard`."
  },
  {
    id: "r19-m1-11",
    topicId: "react-intro",
    topicName: "Module 1: Introduction to React",
    question: "What is the primary advantage of component reusability in React?",
    code: null,
    options: [
      "Write a component once (e.g. `<Button>`, `<Card>`) and reuse it across multiple pages with different props, maintaining consistent UI and saving development time.",
      "It eliminates the need for CSS completely.",
      "It makes all web requests synchronous.",
      "It guarantees 100% SEO ranking."
    ],
    correctAnswer: 0,
    explanation: "Reusability follows DRY principles. Encapsulating UI into composable components means updates in one component reflect everywhere it is used.",
    tip: "Build small, single-purpose components and compose them into rich pages."
  },
  {
    id: "r19-m1-12",
    topicId: "react-intro",
    topicName: "Module 1: Introduction to React",
    question: "What happens when component state changes in React?",
    code: null,
    options: [
      "React schedules a re-render of that component and its child subtree, updating the Virtual DOM and applying necessary updates to the real DOM.",
      "The entire browser window reloads from scratch.",
      "All other browser tabs close.",
      "The state change is ignored until the user clicks refresh."
    ],
    correctAnswer: 0,
    explanation: "Updating state triggers a re-render cycle. React re-invokes the component function, computes the new JSX representation, diffs it against previous output, and updates only the changed DOM nodes.",
    tip: "State change -> Re-render -> Virtual DOM Diff -> Minimal Real DOM Update."
  },

  // Module 2: Setting Up a React 19 Project (11 questions)
  {
    id: "r19-m2-01",
    topicId: "react-setup",
    topicName: "Module 2: Setting Up a React 19 Project",
    question: "What is the role of Node.js and npm when setting up a modern React project?",
    code: null,
    options: [
      "Node.js runs the JavaScript build tools (like Vite, bundlers, and dev servers) locally; npm (Node Package Manager) installs and manages project dependencies.",
      "Node.js is used to design CSS styles.",
      "npm is a web browser for testing.",
      "Node.js is required only on production servers, never during local development."
    ],
    correctAnswer: 0,
    explanation: "Node.js provides the local runtime environment to run build tools and development servers. `npm` installs packages like `react`, `react-dom`, and build tools.",
    tip: "Node runs your build tools; npm installs your project packages."
  },
  {
    id: "r19-m2-02",
    topicId: "react-setup",
    topicName: "Module 2: Setting Up a React 19 Project",
    question: "Why is Vite preferred over Create React App (CRA) for modern React development?",
    code: null,
    options: [
      "Vite leverages native ES Modules (ESM) in modern browsers and esbuild for near-instant dev server startup and lightning-fast Hot Module Replacement (HMR); CRA is slow and deprecated.",
      "Vite does not require JavaScript.",
      "Create React App only works with React 15.",
      "Vite automatically writes backend SQL code."
    ],
    correctAnswer: 0,
    explanation: "Vite provides extremely fast startup times and HMR because it serves source code via native ESM during development. CRA is officially deprecated by the React team.",
    tip: "Vite is the modern industry standard for client-side React development."
  },
  {
    id: "r19-m2-03",
    topicId: "react-setup",
    topicName: "Module 2: Setting Up a React 19 Project",
    question: "In a standard Vite React project, what is the entry HTML file and where is it located?",
    code: null,
    options: [
      "`index.html` located in the root directory of the project, containing `<div id=\"root\"></div>` and a `<script type=\"module\" src=\"/src/main.jsx\"></script>` tag.",
      "`public/index.html`",
      "`src/index.html`",
      "`dist/index.html`"
    ],
    correctAnswer: 0,
    explanation: "Unlike CRA (which buried `index.html` inside `public/`), Vite treats `index.html` at the project root as the primary entry point.",
    tip: "In Vite, `index.html` lives right in the project root."
  },
  {
    id: "r19-m2-04",
    topicId: "react-setup",
    topicName: "Module 2: Setting Up a React 19 Project",
    question: "What is the purpose of `src/main.jsx` in a React 19 application?",
    code: `import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);`,
    options: [
      "It is the JavaScript entry file that finds the root DOM element (`#root`), creates a React root with `createRoot`, and mounts the top-level `<App />` component into the page.",
      "It compiles CSS files into HTML.",
      "It handles database migrations.",
      "It generates random passwords."
    ],
    correctAnswer: 0,
    explanation: "`src/main.jsx` is the bridge where `react-dom/client` mounts your root React component tree into the real HTML DOM container.",
    tip: "`createRoot(container).render(<App />)` is the standard React 18 & 19 mounting API."
  },
  {
    id: "r19-m2-05",
    topicId: "react-setup",
    topicName: "Module 2: Setting Up a React 19 Project",
    question: "What is `package.json` in a React project?",
    code: null,
    options: [
      "The manifest file that lists project metadata, installed dependencies (`dependencies` / `devDependencies`), and executable npm scripts (`dev`, `build`, `preview`).",
      "A file that stores user credit card numbers.",
      "The compiled production binary.",
      "A CSS theme file."
    ],
    correctAnswer: 0,
    explanation: "`package.json` records the exact libraries your app depends on and defines terminal commands (scripts) like `npm run dev` and `npm run build`.",
    tip: "Keep `package.json` in version control so team members can run `npm install`."
  },
  {
    id: "r19-m2-06",
    topicId: "react-setup",
    topicName: "Module 2: Setting Up a React 19 Project",
    question: "What is the difference between `dependencies` and `devDependencies` in `package.json`?",
    code: null,
    options: [
      "`dependencies` are packages required for the app to run in production (e.g. `react`, `react-dom`); `devDependencies` are tools only needed during local development/building (e.g. `vite`, linter plugins).",
      "`devDependencies` are deployed to production servers, `dependencies` are not.",
      "There is no difference; npm treats them identically.",
      "`devDependencies` only work on mobile devices."
    ],
    correctAnswer: 0,
    explanation: "Runtime packages (like `react`) belong in `dependencies`. Build tools, bundlers, and test runners belong in `devDependencies` because they aren't bundled into runtime code.",
    tip: "Install runtime dependencies with `npm i <pkg>` and dev tools with `npm i -D <pkg>`."
  },
  {
    id: "r19-m2-07",
    topicId: "react-setup",
    topicName: "Module 2: Setting Up a React 19 Project",
    question: "Why is `node_modules/` included in `.gitignore` and never committed to Git?",
    code: null,
    options: [
      "It contains thousands of downloaded files that can be easily recreated by running `npm install`, and committing it would drastically bloat the repository size.",
      "Because Git cannot track `.js` files.",
      "Because npm deletes the repository if `node_modules` is tracked.",
      "Because `node_modules` contains secret passwords."
    ],
    correctAnswer: 0,
    explanation: "`node_modules` contains gigabytes of platform-dependent third-party files. Since `package.json` and `package-lock.json` record the exact dependency versions, anyone can recreate `node_modules` by running `npm install`.",
    tip: "Never commit `node_modules` - always commit `package.json` and `package-lock.json`."
  },
  {
    id: "r19-m2-08",
    topicId: "react-setup",
    topicName: "Module 2: Setting Up a React 19 Project",
    question: "What command starts the Vite local development server?",
    code: null,
    options: [
      "`npm run dev`",
      "`npm run start-production`",
      "`node index.html`",
      "`vite deploy`"
    ],
    correctAnswer: 0,
    explanation: "In a Vite project, `npm run dev` launches the local dev server with HMR (Hot Module Replacement), usually on `http://localhost:5173`.",
    tip: "Run `npm run dev` to develop locally with instantaneous hot reload."
  },
  {
    id: "r19-m2-09",
    topicId: "react-setup",
    topicName: "Module 2: Setting Up a React 19 Project",
    question: "What does `npm run build` do in a Vite React project?",
    code: null,
    options: [
      "Bundles, minifies, and optimizes all JSX, CSS, and JS into static production-ready files inside the `dist/` directory.",
      "Runs unit tests only.",
      "Deletes all components.",
      "Starts a local server on port 3000."
    ],
    correctAnswer: 0,
    explanation: "`npm run build` triggers `vite build`, which compiles and minifies your source code, tree-shakes unused imports, and generates production assets in the `dist` folder.",
    tip: "The output in `dist/` is what you deploy to Netlify, Vercel, or AWS S3."
  },
  {
    id: "r19-m2-10",
    topicId: "react-setup",
    topicName: "Module 2: Setting Up a React 19 Project",
    question: "What is Hot Module Replacement (HMR)?",
    code: null,
    options: [
      "A feature of modern dev servers that updates modified modules in the running browser instantly without requiring a full page refresh, preserving component state.",
      "A cooling fan setting for CPU hardware.",
      "A method of deleting obsolete CSS rules.",
      "A security protocol for HTTPS."
    ],
    correctAnswer: 0,
    explanation: "HMR exchanges, adds, or removes modules while an application is running without a full reload, dramatically speeding up developer feedback and preserving UI state.",
    tip: "HMR updates your edits in milliseconds without losing your form inputs or modal state."
  },
  {
    id: "r19-m2-11",
    topicId: "react-setup",
    topicName: "Module 2: Setting Up a React 19 Project",
    question: "What file extension is used in Vite for files containing JSX syntax?",
    code: null,
    options: [
      "`.jsx` (or `.tsx` for TypeScript)",
      "`.html`",
      "`.json`",
      "`.css`"
    ],
    correctAnswer: 0,
    explanation: "Vite strictly requires files with JSX syntax to use the `.jsx` or `.tsx` extension to enable fast esbuild transpilation.",
    tip: "If a file contains JSX tags like `<div>` or `<App />`, name it `.jsx`."
  },

  // Module 3: JSX (13 questions)
  {
    id: "r19-m3-01",
    topicId: "react-jsx",
    topicName: "Module 3: JSX",
    question: "What is JSX in React?",
    code: `const element = <h1 className="title">Hello, World!</h1>;`,
    options: [
      "A syntax extension for JavaScript that looks like HTML and gets transpiled into standard `React.createElement()` or JSX runtime function calls.",
      "A brand new programming language that replaces JavaScript.",
      "A direct string of raw HTML evaluated by `eval()`.",
      "A CSS stylesheet syntax."
    ],
    correctAnswer: 0,
    explanation: "JSX stands for JavaScript XML. It allows you to write HTML-like markup inside JavaScript files. Compilers (Babel/SWC/esbuild) transform JSX into JavaScript function calls.",
    tip: "JSX combines the structure of HTML with the full power of JavaScript."
  },
  {
    id: "r19-m3-02",
    topicId: "react-jsx",
    topicName: "Module 3: JSX",
    question: "Why does JSX require a component to return a SINGLE root element (or Fragment)?",
    code: `// Error:
return (
  <h1>Header</h1>
  <p>Paragraph</p>
);`,
    options: [
      "Because JSX compiles to a JavaScript function call (`jsx(...)`), and a JavaScript function can only return ONE value/object.",
      "Because HTML only allows one tag per page.",
      "Because browsers cannot display more than one element.",
      "Because CSS requires single-parent selectors."
    ],
    correctAnswer: 0,
    explanation: "Under the hood, JSX compiles into JavaScript function calls. Just as `return a, b;` is invalid JS syntax, you cannot return two adjacent expressions without wrapping them in a single parent container.",
    tip: "Wrap multiple siblings in a parent `<div>` or React Fragment `<> ... </>`."
  },
  {
    id: "r19-m3-03",
    topicId: "react-jsx",
    topicName: "Module 3: JSX",
    question: "What is a React Fragment (`<React.Fragment>` or shorthand `<> ... </>`) and what problem does it solve?",
    code: `return (
  <>
    <h1>Title</h1>
    <p>Subtitle</p>
  </>
);`,
    options: [
      "It groups multiple JSX sibling elements without adding an extra unnecessary wrapper `<div>` node to the actual DOM tree.",
      "It splits components into multiple browser windows.",
      "It encrypts JSX elements.",
      "It converts text into images."
    ],
    correctAnswer: 0,
    explanation: "Fragments let you return multiple elements without polluting the DOM with extra wrapper `<div>`s that might break CSS Grid, Flexbox, or table layouts.",
    tip: "Use `<> ... </>` when you need a single root wrapper without extra DOM markup."
  },
  {
    id: "r19-m3-04",
    topicId: "react-jsx",
    topicName: "Module 3: JSX",
    question: "How do you embed dynamic JavaScript expressions inside JSX markup?",
    code: `const username = "Sarah";
const element = <h1>Hello, {username}!</h1>;`,
    options: [
      "By wrapping the JavaScript expression in curly braces `{ }`.",
      "By using double quotes `\"username\"`.",
      "By using percentage signs `%username%`.",
      "By using PHP tags `<?php echo $username; ?>`."
    ],
    correctAnswer: 0,
    explanation: "Curly braces `{}` in JSX open a window into JavaScript evaluation. Any valid JS expression (variables, function calls, arithmetic, ternaries) can be placed inside.",
    tip: "Anything you can evaluate to a value in JS can go inside `{ }` in JSX."
  },
  {
    id: "r19-m3-05",
    topicId: "react-jsx",
    topicName: "Module 3: JSX",
    question: "Why do HTML attributes `class` and `for` become `className` and `htmlFor` in JSX?",
    code: `<label htmlFor="email" className="form-label">Email</label>`,
    options: [
      "`class` and `for` are reserved keywords in JavaScript, so JSX uses `className` and `htmlFor` matching the DOM property names.",
      "Because HTML5 deprecated `class`.",
      "To make typing easier on mobile phones.",
      "Because `className` is required by CSS."
    ],
    correctAnswer: 0,
    explanation: "Since JSX is JavaScript, reserved keywords like `class` (for ES6 classes) and `for` (for loops) could cause ambiguity. JSX uses standard DOM property names: `className` and `htmlFor`.",
    tip: "In JSX: `class` -> `className`, `for` -> `htmlFor`."
  },
  {
    id: "r19-m3-06",
    topicId: "react-jsx",
    topicName: "Module 3: JSX",
    question: "How must inline styles be written in JSX?",
    code: `const heading = <h1 style={{ color: "red", fontSize: "20px", marginTop: "10px" }}>Alert</h1>;`,
    options: [
      "As a JavaScript object with camelCase property names, wrapped inside curly braces: `style={{ propName: 'value' }}`.",
      "As a plain CSS string: `style=\"color: red; font-size: 20px;\"`.",
      "In an external `.txt` file.",
      "Inline styles are forbidden in JSX."
    ],
    correctAnswer: 0,
    explanation: "Inline styles in JSX take a JavaScript object (hence double curly braces: outer for JSX expression, inner for object literal) and use camelCase CSS properties (`fontSize` instead of `font-size`).",
    tip: "`style={{ backgroundColor: 'white', padding: '12px' }}`."
  },
  {
    id: "r19-m3-07",
    topicId: "react-jsx",
    topicName: "Module 3: JSX",
    question: "How must self-closing HTML tags (like `<img>`, `<input>`, `<br>`, `<hr>`) be written in JSX?",
    code: `<img src="/logo.png" alt="Logo" />`,
    options: [
      "They MUST explicitly be closed with a trailing slash `/>` (e.g. `<img />`, `<input />`, `<br />`).",
      "They cannot have attributes.",
      "They must always have a closing tag `<img></img>`.",
      "Self-closing tags are not allowed in JSX."
    ],
    correctAnswer: 0,
    explanation: "JSX follows strict XML rules: all tags must be closed. Void tags like `<img>` and `<input>` must end with `/>` or a syntax error will occur.",
    tip: "Always close void tags: `<input type=\"text\" />`, `<br />`."
  },
  {
    id: "r19-m3-08",
    topicId: "react-jsx",
    topicName: "Module 3: JSX",
    question: "How do you write comments inside JSX markup?",
    code: `return (
  <div>
    {/* This is a comment inside JSX */}
    <h1>Title</h1>
  </div>
);`,
    options: [
      "`{/* Comment text */}` - JavaScript block comment wrapped in JSX curly braces.",
      "`<!-- Comment text -->`",
      "`// Comment text` directly in JSX",
      "`# Comment text`"
    ],
    correctAnswer: 0,
    explanation: "Inside JSX children, comments must be standard JS block comments enclosed within expression braces: `{/* comment */}`. Plain `//` would be rendered as visible text on the page.",
    tip: "Use `{/* ... */}` to write comments inside JSX elements."
  },
  {
    id: "r19-m3-09",
    topicId: "react-jsx",
    topicName: "Module 3: JSX",
    question: "What happens when boolean values (`true`, `false`), `null`, or `undefined` are embedded in JSX?",
    code: `return (
  <div>
    {true}
    {false}
    {null}
    {undefined}
    <span>Visible</span>
  </div>
);`,
    options: [
      "They do NOT render anything to the screen (they render as empty/nothing).",
      "They print the words 'true', 'false', 'null' on the web page.",
      "They throw a TypeError.",
      "They render as checkboxes."
    ],
    correctAnswer: 0,
    explanation: "Booleans, `null`, and `undefined` are ignored by React and render nothing. This makes conditional rendering like `{isOpen && <Modal />}` work cleanly.",
    tip: "Booleans, null, and undefined render nothing in JSX."
  },
  {
    id: "r19-m3-10",
    topicId: "react-jsx",
    topicName: "Module 3: JSX",
    question: "Can you write an `if / else` statement directly inside JSX curly braces `{ }`?",
    code: `// Why does this fail?
<div>
  { if (isLoggedIn) { <h1>Welcome</h1> } }
</div>`,
    options: [
      "No, because `if/else` is a Statement, not an Expression; JSX `{}` only accepts expressions (like ternary `isLoggedIn ? <Welcome/> : <Login/>`).",
      "Yes, it is valid in React 19.",
      "Only if wrapped in parentheses.",
      "Only in TypeScript."
    ],
    correctAnswer: 0,
    explanation: "`if` statements do not evaluate to a value and cannot be placed inside `{}`. Use ternary expressions `condition ? <A /> : <B />` or logical AND `condition && <A />` instead.",
    tip: "Statements (`if`, `for`) cannot go in JSX `{ }`. Use expressions (ternary, `map`)."
  },
  {
    id: "r19-m3-11",
    topicId: "react-jsx",
    topicName: "Module 3: JSX",
    question: "How does JSX prevent Cross-Site Scripting (XSS) attacks by default?",
    code: `const userComment = "<script>stealData()</script>";
return <div>{userComment}</div>;`,
    options: [
      "React automatically escapes all strings rendered inside JSX expressions before displaying them in the DOM, converting them to safe text instead of executable HTML.",
      "React deletes user comments from the database.",
      "React blocks all internet traffic.",
      "React requires an antivirus plugin."
    ],
    correctAnswer: 0,
    explanation: "React escapes all values before rendering them. Everything is converted to a string, preventing malicious script injection.",
    tip: "JSX is safe by default against XSS injection attacks."
  },
  {
    id: "r19-m3-12",
    topicId: "react-jsx",
    topicName: "Module 3: JSX",
    question: "What is the result of rendering an array of JSX elements in React?",
    code: `const items = [
  <li key="1">One</li>,
  <li key="2">Two</li>
];
return <ul>{items}</ul>;`,
    options: [
      "React renders each JSX element in the array sequentially inside the parent `<ul>`.",
      "React throws an error because arrays cannot be rendered.",
      "React renders only the first element.",
      "React converts the array into a JSON string."
    ],
    correctAnswer: 0,
    explanation: "React natively knows how to render arrays of JSX elements, rendering each item in order (provided each item has a unique `key` prop).",
    tip: "Arrays of JSX elements are rendered sequentially."
  },
  {
    id: "r19-m3-13",
    topicId: "react-jsx",
    topicName: "Module 3: JSX",
    question: "What attribute casing is used for almost all HTML/SVG properties in JSX?",
    code: `<button tabIndex="0" aria-label="Close modal" onClick={handleClick}>Close</button>`,
    options: [
      "camelCase (e.g. `tabIndex`, `onClick`, `strokeWidth`), except for `aria-*` and `data-*` attributes which remain hyphenated (kebab-case).",
      "ALL_CAPS",
      "snake_case",
      "lowercase only"
    ],
    correctAnswer: 0,
    explanation: "JSX attributes use camelCase (matching JS DOM properties), with the deliberate exception of standard accessibility `aria-*` and `data-*` attributes which remain lowercase kebab-case.",
    tip: "CamelCase for standard props (`onClick`, `tabIndex`); kebab-case for `aria-*` and `data-*`."
  },

  // Module 4: Components and Props (13 questions)
  {
    id: "r19-m4-01",
    topicId: "react-components-props",
    topicName: "Module 4: Components and Props",
    question: "What are 'Props' in React?",
    code: `<UserCard name="Alex" role="Admin" age={28} />`,
    options: [
      "Short for 'Properties' - read-only inputs passed from a parent component to a child component to customize its rendering and behavior.",
      "Mutable internal state variables created by `useState`.",
      "CSS animations created in stylesheets.",
      "Database credentials stored in `.env`."
    ],
    correctAnswer: 0,
    explanation: "Props allow parent components to pass data and callbacks down to child components. Props flow unidirectionally (top-down) and are strictly read-only for the child.",
    tip: "Props are like arguments passed into a function."
  },
  {
    id: "r19-m4-02",
    topicId: "react-components-props",
    topicName: "Module 4: Components and Props",
    question: "Are Props mutable by the receiving child component?",
    code: `function Card(props) {
  props.title = "New Title"; // What happens?
  return <h1>{props.title}</h1>;
}`,
    options: [
      "No! React adheres to a strict rule: All React components must act like Pure Functions with respect to their props (Props are strictly READ-ONLY / immutable).",
      "Yes, children can freely mutate any props.",
      "Props can only be mutated if declared with `let`.",
      "Props can be mutated on mobile devices only."
    ],
    correctAnswer: 0,
    explanation: "Props are read-only. A component must never modify its own props. If a value needs to change over time in response to user interaction, use State instead.",
    tip: "Never mutate `props`! Use State if data needs to change."
  },
  {
    id: "r19-m4-03",
    topicId: "react-components-props",
    topicName: "Module 4: Components and Props",
    question: "What is the recommended modern syntax for extracting props in a functional component?",
    code: `// Method A: function Card(props) { return <h1>{props.title}</h1>; }
// Method B: function Card({ title, badge = "New" }) { return <h1>{title}</h1>; }`,
    options: [
      "Destructuring props directly inside the component function parameter list (Method B).",
      "Using `this.props` everywhere.",
      "Converting props to JSON strings first.",
      "Props cannot be destructured in JavaScript."
    ],
    correctAnswer: 0,
    explanation: "Destructuring props in the function signature (`function Card({ title, badge = 'New' })`) makes code clean, concise, and immediately shows which props the component expects.",
    tip: "Destructure props directly in function parameters for clean, readable code."
  },
  {
    id: "r19-m4-04",
    topicId: "react-components-props",
    topicName: "Module 4: Components and Props",
    question: "What is the special `children` prop in React?",
    code: `<Card>
  <h2>Modal Header</h2>
  <p>Modal body content</p>
</Card>`,
    options: [
      "A prop automatically populated with whatever JSX elements/content are passed between the opening and closing tags of a component.",
      "An array of child component state values.",
      "A list of database sub-records.",
      "A prop that only accepts numbers."
    ],
    correctAnswer: 0,
    explanation: "`props.children` allows component composition (containment). Anything placed between `<Card>` and `</Card>` is passed to `Card` as `props.children`.",
    tip: "`children` prop is the key to building layout wrappers and container components."
  },
  {
    id: "r19-m4-05",
    topicId: "react-components-props",
    topicName: "Module 4: Components and Props",
    question: "How can default values be provided for props in modern React?",
    code: `function Button({ variant = "primary", size = "medium", children }) {
  return <button className={\`btn btn-\${variant} btn-\${size}\`}>{children}</button>;
}`,
    options: [
      "Using standard JavaScript ES6 parameter default values in the destructured parameter list.",
      "Using the deprecated `defaultProps` property.",
      "Default values cannot be assigned in React.",
      "By adding CSS fallback rules."
    ],
    correctAnswer: 0,
    explanation: "Modern React encourages ES6 default parameter values (`{ variant = 'primary' }`), which are cleaner and fully supported in modern React functional components.",
    tip: "Use ES6 default parameters for clean prop fallbacks."
  },
  {
    id: "r19-m4-06",
    topicId: "react-components-props",
    topicName: "Module 4: Components and Props",
    question: "How do you pass a callback function as a prop to allow a child component to communicate with its parent?",
    code: `function Parent() {
  const handleDelete = (id) => console.log("Deleted item", id);
  return <ChildItem id={42} onDelete={handleDelete} />;
}
function ChildItem({ id, onDelete }) {
  return <button onClick={() => onDelete(id)}>Delete</button>;
}`,
    options: [
      "Pass the parent handler function as a prop (`onDelete={handleDelete}`); the child invokes `onDelete(id)` when the event occurs.",
      "Child components automatically have access to all parent functions without props.",
      "Child components must reload the page.",
      "Parent functions must be stored in the global `window` object."
    ],
    correctAnswer: 0,
    explanation: "This is the classic 'Lifting State Up' communication pattern: data flows DOWN via props; notifications flow UP via callbacks passed as props.",
    tip: "Props down, callbacks up: the golden rule of React component communication."
  },
  {
    id: "r19-m4-07",
    topicId: "react-components-props",
    topicName: "Module 4: Components and Props",
    question: "What is 'Prop Drilling' in React architecture?",
    code: null,
    options: [
      "The process of passing props down through multiple layers of intermediate components that do not need the data themselves, just to reach a deeply nested child.",
      "Creating holes in the DOM tree.",
      "A fast build tool.",
      "Compiling props to WebAssembly."
    ],
    correctAnswer: 0,
    explanation: "Prop drilling happens when deeply nested components need data from a high-level ancestor, forcing intermediate components to pass props along. It is solved using Context (`useContext`) or state management.",
    tip: "Solve painful prop drilling using React Context or component composition."
  },
  {
    id: "r19-m4-08",
    topicId: "react-components-props",
    topicName: "Module 4: Components and Props",
    question: "How do you pass all properties of an object as individual props using the JSX spread attribute?",
    code: `const user = { name: "Alice", age: 25, role: "Admin" };
return <UserProfile {...user} />;`,
    options: [
      "Using `<UserProfile {...user} />`, which spreads each key-value pair as `name=\"Alice\" age={25} role=\"Admin\"`.",
      "Using `<UserProfile user=all />`",
      "Using `<UserProfile *user />`",
      "JSX does not support spreading objects."
    ],
    correctAnswer: 0,
    explanation: "The JSX spread attribute `<Component {...propsObject} />` forwards every property in the object as an individual prop to the component.",
    tip: "Use spread props `<Component {...props} />` when forwarding props to wrapper components."
  },
  {
    id: "r19-m4-09",
    topicId: "react-components-props",
    topicName: "Module 4: Components and Props",
    question: "What types of values can be passed as Props in React?",
    code: null,
    options: [
      "Any valid JavaScript value: strings, numbers, booleans, arrays, objects, functions (callbacks), and even other React elements/components.",
      "Only strings and numbers.",
      "Only HTML elements.",
      "Only JSON strings."
    ],
    correctAnswer: 0,
    explanation: "Props can be of any JavaScript type, including complex objects, functions, and JSX nodes.",
    tip: "Props can carry any JavaScript data type or UI element."
  },
  {
    id: "r19-m4-10",
    topicId: "react-components-props",
    topicName: "Module 4: Components and Props",
    question: "What happens if you pass a boolean prop without specifying a value, like `<Modal isOpen />`?",
    code: `<Modal isOpen />`,
    options: [
      "It defaults to `true` (equivalent to `isOpen={true}`).",
      "It defaults to `false`.",
      "It defaults to `undefined`.",
      "Throws a SyntaxError."
    ],
    correctAnswer: 0,
    explanation: "In JSX, passing a prop name without an explicit value (`<Modal isOpen />`) is shorthand for passing `true` (`<Modal isOpen={true} />`), mimicking HTML boolean attributes like `<input disabled />`.",
    tip: "`<Button disabled />` is identical to `<Button disabled={true} />`."
  },
  {
    id: "r19-m4-11",
    topicId: "react-components-props",
    topicName: "Module 4: Components and Props",
    question: "Why should components be kept Pure and free of side effects during render?",
    code: null,
    options: [
      "Pure components produce predictable UI, prevent infinite render loops, enable safe concurrency, and allow React to optimize rendering performance.",
      "Pure components run in C++.",
      "Because impure components cannot use CSS.",
      "React throws a compile error for impure functions."
    ],
    correctAnswer: 0,
    explanation: "During rendering, React components should be pure calculations: given the same props/state, return the same JSX without mutating external variables or triggering side effects.",
    tip: "Keep rendering pure; put side effects in event handlers or `useEffect`."
  },
  {
    id: "r19-m4-12",
    topicId: "react-components-props",
    topicName: "Module 4: Components and Props",
    question: "What is Component Composition over Inheritance in React?",
    code: null,
    options: [
      "The architectural principle of building complex UIs by combining smaller, flexible components via props and `children` rather than creating complex class inheritance hierarchies.",
      "Inheriting classes using `extends` across 10 levels.",
      "Writing all code in a single file.",
      "Using CSS stylesheets exclusively."
    ],
    correctAnswer: 0,
    explanation: "React strongly advocates Composition over Inheritance. Components can contain other components through props and `children`, making UI code far more flexible and maintainable.",
    tip: "In React, composition (`<Dialog><LoginForm /></Dialog>`) is always superior to class inheritance."
  },
  {
    id: "r19-m4-13",
    topicId: "react-components-props",
    topicName: "Module 4: Components and Props",
    question: "What is the difference between Container (Smart) and Presentational (Dumb) components?",
    code: null,
    options: [
      "Presentational components focus on how things LOOK (receiving props and rendering UI); Container components focus on how things WORK (managing state, fetching data, handling business logic).",
      "Presentational components only run on mobile.",
      "Container components cannot contain JSX.",
      "There is no difference."
    ],
    correctAnswer: 0,
    explanation: "Separating UI rendering (presentational) from business logic/state management (containers) makes components highly modular, reusable, and easy to test.",
    tip: "Keep UI components dumb and reusable; manage state in dedicated container components."
  },

  // Module 5: State and the useState Hook (14 questions)
  {
    id: "r19-m5-01",
    topicId: "react-state-usestate",
    topicName: "Module 5: State and useState Hook",
    question: "What is State in React, and how does it fundamentally differ from Props?",
    code: null,
    options: [
      "State is internal, mutable component data that changes over time in response to user interaction and triggers a re-render; Props are external, immutable inputs passed down by parent components.",
      "State is passed from parents; Props are internal.",
      "State never causes re-renders.",
      "State is stored in cookies."
    ],
    correctAnswer: 0,
    explanation: "Props configure a component from the outside (like function arguments). State is a component's private, internal memory that changes in response to user actions and causes React to update the screen.",
    tip: "Props: external and read-only; State: internal and mutable via setter."
  },
  {
    id: "r19-m5-02",
    topicId: "react-state-usestate",
    topicName: "Module 5: State and useState Hook",
    question: "What does the `useState` hook return when called?",
    code: `const [count, setCount] = useState(0);`,
    options: [
      "An array with exactly two elements: [1] the current state value, and [2] an updater/setter function to update the state value and trigger a re-render.",
      "A single number representing the count.",
      "An object containing `{ state, setState }`.",
      "A Promise that resolves to data."
    ],
    correctAnswer: 0,
    explanation: "`useState(initialValue)` returns a 2-element tuple: `[currentState, stateSetterFunction]`. Array destructuring `const [val, setVal] = useState(...)` is standard.",
    tip: "Convention: `const [something, setSomething] = useState(initialValue)`."
  },
  {
    id: "r19-m5-03",
    topicId: "react-state-usestate",
    topicName: "Module 5: State and useState Hook",
    question: "What happens if you mutate state directly without calling the setter function?",
    code: `const [user, setUser] = useState({ name: "Alex" });
// INCORRECT:
user.name = "Sam";`,
    options: [
      "React will NOT know that state changed, no re-render will be triggered, and UI will not update.",
      "Throws an immediate compiler error.",
      "The browser crashes.",
      "The entire database is cleared."
    ],
    correctAnswer: 0,
    explanation: "React relies on calling the setter function (`setUser(...)`) to schedule a re-render and detect changes via reference comparison. Direct mutation bypasses React's change detection.",
    tip: "NEVER mutate state directly. Always use the setter function: `setUser({ ...user, name: 'Sam' })`."
  },
  {
    id: "r19-m5-04",
    topicId: "react-state-usestate",
    topicName: "Module 5: State and useState Hook",
    question: "Why does `console.log(count)` immediately after `setCount(count + 1)` show the OLD state value?",
    code: `const [count, setCount] = useState(0);
function handleClick() {
  setCount(count + 1);
  console.log(count); // Still prints 0!
}`,
    options: [
      "State updates are asynchronous/batched; calling `setCount` requests a re-render for the NEXT render cycle, while `count` in the current function execution remains the constant value from the current render snapshot.",
      "`setCount` failed to execute.",
      "The browser delayed JavaScript execution by 5 seconds.",
      "`count` was converted to undefined."
    ],
    correctAnswer: 0,
    explanation: "State in React acts like a snapshot for each render. Setting state does not change the variable in the currently executing closure; it schedules a future render with the new state value.",
    tip: "Setting state schedules a render with the new value; it doesn't change the current local variable."
  },
  {
    id: "r19-m5-05",
    topicId: "react-state-usestate",
    topicName: "Module 5: State and useState Hook",
    question: "When should you pass an Updater Function (`prev => prev + 1`) to the state setter?",
    code: `// Case A: setCount(count + 1);
// Case B: setCount(prevCount => prevCount + 1);`,
    options: [
      "When the new state depends on the previous state value, especially when multiple state updates occur in the same event cycle or async callbacks.",
      "Only when count is greater than 100.",
      "Only when using TypeScript.",
      "Updater functions are deprecated."
    ],
    correctAnswer: 0,
    explanation: "If you call `setCount(count + 1)` three times in a row, all three read the same snapshot `count = 0`, resulting in `1`. Passing `prev => prev + 1` ensures each update receives the pending updated value, resulting in `3`.",
    tip: "Use `setCount(prev => prev + 1)` whenever new state depends on old state."
  },
  {
    id: "r19-m5-06",
    topicId: "react-state-usestate",
    topicName: "Module 5: State and useState Hook",
    question: "How do you properly update a property inside an Object state in React?",
    code: `const [profile, setProfile] = useState({ name: "Jane", age: 24, theme: "dark" });`,
    options: [
      "`setProfile(prev => ({ ...prev, age: 25 }));` (spread existing properties and overwrite the changed property)",
      "`profile.age = 25; setProfile(profile);`",
      "`setProfile({ age: 25 });` (which erases name and theme!)",
      "`setProfile.update('age', 25);`"
    ],
    correctAnswer: 0,
    explanation: "Object state in React must be updated immutably. Spreading `...prev` copies all other fields so they aren't lost, while `age: 25` updates the target property in the new object reference.",
    tip: "Always spread previous object state: `setProfile(prev => ({ ...prev, updatedField: newVal }))`."
  },
  {
    id: "r19-m5-07",
    topicId: "react-state-usestate",
    topicName: "Module 5: State and useState Hook",
    question: "How do you properly add a new item to an Array state in React?",
    code: `const [todos, setTodos] = useState(["Learn JS", "Learn React"]);`,
    options: [
      "`setTodos(prev => [...prev, \"Build Quiz Portal\"]);`",
      "`todos.push(\"Build Quiz Portal\"); setTodos(todos);`",
      "`setTodos(\"Build Quiz Portal\");`",
      "`setTodos(todos + [\"Build Quiz Portal\"]);`"
    ],
    correctAnswer: 0,
    explanation: "Never use mutating methods like `.push()`, `.splice()`, or `.pop()` on state. Use non-mutating array spread `[...prev, newItem]` to create a new array reference.",
    tip: "Add to array state: `setList(prev => [...prev, newItem])`."
  },
  {
    id: "r19-m5-08",
    topicId: "react-state-usestate",
    topicName: "Module 5: State and useState Hook",
    question: "How do you delete an item from an Array state by ID or index in React?",
    code: `const [items, setItems] = useState([
  { id: 1, text: "Item 1" },
  { id: 2, text: "Item 2" }
]);`,
    options: [
      "`setItems(prev => prev.filter(item => item.id !== 1));`",
      "`delete items[0]; setTodos(items);`",
      "`setItems(prev => prev.splice(0, 1));`",
      "`items.pop();`"
    ],
    correctAnswer: 0,
    explanation: "`.filter()` returns a brand new array containing only the elements that match the filter condition, cleanly excluding the deleted item without mutating the original state.",
    tip: "Delete from array state: `setList(prev => prev.filter(item => item.id !== targetId))`."
  },
  {
    id: "r19-m5-09",
    topicId: "react-state-usestate",
    topicName: "Module 5: State and useState Hook",
    question: "What is Lazy Initial State in `useState` and when should you use it?",
    code: `const [data, setData] = useState(() => {
  const saved = localStorage.getItem("quiz_progress");
  return saved ? JSON.parse(saved) : initialData;
});`,
    options: [
      "Passing a function to `useState(() => expensiveCalculation())` so the expensive calculation only runs ONCE on initial mount, rather than on every single re-render.",
      "State that only initializes after 10 seconds.",
      "State that is fetched from Google.",
      "Lazy state is an anti-pattern."
    ],
    correctAnswer: 0,
    explanation: "If initial state requires expensive computation (parsing localStorage, complex math), pass a function `useState(() => ...)`. React executes the initializer only during initial mount.",
    tip: "Use `useState(() => getInitialValue())` for expensive initial calculations."
  },
  {
    id: "r19-m5-10",
    topicId: "react-state-usestate",
    topicName: "Module 5: State and useState Hook",
    question: "What are the two fundamental Rules of Hooks in React?",
    code: null,
    options: [
      "1. Only call Hooks at the TOP LEVEL (never inside loops, conditions, or nested functions). 2. Only call Hooks from React Functional Components or Custom Hooks.",
      "1. Hooks must be declared with `var`. 2. Hooks can only be used in class components.",
      "1. Hooks must run on the server. 2. Hooks can only return strings.",
      "There are no rules for Hooks."
    ],
    correctAnswer: 0,
    explanation: "React relies on the exact same call order of Hooks on every render to correctly pair state values with internal memory cells. Calling hooks inside `if` statements disrupts this order.",
    tip: "Never call hooks inside `if`, `for`, or regular functions; call them at the top level of your component."
  },
  {
    id: "r19-m5-11",
    topicId: "react-state-usestate",
    topicName: "Module 5: State and useState Hook",
    question: "What is State Batching in React 18 and 19 (Automatic Batching)?",
    code: `function handleClick() {
  setCount(c => c + 1);
  setFlag(f => !f);
  setName("Alex");
  // How many re-renders happen?
}`,
    options: [
      "React groups multiple state updates together into a SINGLE re-render cycle for optimal UI performance, regardless of whether they occur inside event handlers, promises, or `setTimeout`.",
      "React triggers 3 separate re-renders back-to-back.",
      "React cancels the first 2 state updates.",
      "React reloads the browser."
    ],
    correctAnswer: 0,
    explanation: "Automatic Batching groups multiple state setter calls into one combined re-render, preventing jarring intermediate UI renders and improving rendering performance.",
    tip: "Multiple state updates in one event = ONE single re-render."
  },
  {
    id: "r19-m5-12",
    topicId: "react-state-usestate",
    topicName: "Module 5: State and useState Hook",
    question: "What is 'Derived State' and why should you calculate it on the fly instead of storing it in `useState`?",
    code: `const [items, setItems] = useState([10, 20, 30]);
// Derived:
const total = items.reduce((a, b) => a + b, 0);`,
    options: [
      "Values that can be computed directly from existing state/props should be calculated during render rather than kept in redundant state to prevent state synchronization bugs.",
      "Derived state is state stored in cookies.",
      "Derived state must always be stored in a separate `useState(total)`.",
      "Derived state can only be calculated on the backend."
    ],
    correctAnswer: 0,
    explanation: "Don't store in state what you can compute during render. Storing `total` in state leads to bugs where `items` updates but `total` gets out of sync.",
    tip: "If a value can be computed from existing props or state, don't put it in state!"
  },
  {
    id: "r19-m5-13",
    topicId: "react-state-usestate",
    topicName: "Module 5: State and useState Hook",
    question: "How do you update a specific item inside an array of objects state?",
    code: `const [users, setUsers] = useState([
  { id: 1, name: "Alice", active: false },
  { id: 2, name: "Bob", active: false }
]);`,
    options: [
      "`setUsers(prev => prev.map(u => u.id === 1 ? { ...u, active: true } : u));`",
      "`users[0].active = true; setUsers(users);`",
      "`setUsers(prev => prev.filter(u => u.id === 1).active = true);`",
      "`setUsers([active: true]);`"
    ],
    correctAnswer: 0,
    explanation: "`.map()` iterates over each object. If `id === 1`, it creates a new object `{ ...u, active: true }`; otherwise, it returns the existing object unchanged, maintaining immutability.",
    tip: "Update item in list: `setList(prev => prev.map(item => item.id === id ? { ...item, ...updates } : item))`."
  },
  {
    id: "r19-m5-14",
    topicId: "react-state-usestate",
    topicName: "Module 5: State and useState Hook",
    question: "What happens if you call a state setter with the EXACT same primitive value or identical object reference as current state (`Object.is(prev, next)` is true)?",
    code: `const [count, setCount] = useState(5);
// user clicks:
setCount(5);`,
    options: [
      "React bails out / skips the re-render entirely, saving unnecessary computation.",
      "React re-renders the whole app from scratch.",
      "Throws an InfiniteLoopError.",
      "The value resets to 0."
    ],
    correctAnswer: 0,
    explanation: "React performs an `Object.is` comparison. If the new value is identical to the current value, React bails out without re-rendering the component children.",
    tip: "React skips re-rendering if state setter is called with the exact same value."
  }
];
