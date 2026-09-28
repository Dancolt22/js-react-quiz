// Evaluated React 19 Question Bank (200 Comprehensive Questions)
// Strictly based on all 16 modules from the course material.
export const REACT_QUESTIONS = [
  {
    "id": "r19-m1-01",
    "topicId": "react-intro",
    "topicName": "Module 1: Introduction to React",
    "question": "What is React, and what is its primary role in modern web development?",
    "code": null,
    "options": [
      "A JavaScript library for building user interfaces through reusable, declarative components.",
      "A relational database management engine for storing SQL tables.",
      "A CSS styling framework that replaces HTML.",
      "A server operating system developed by Facebook."
    ],
    "correctAnswer": 0,
    "explanation": "React is an open-source JavaScript library developed by Meta for building dynamic user interfaces, particularly for Single Page Applications (SPAs), using reusable components.",
    "tip": "React focuses primarily on the 'View' layer of application architecture."
  },
  {
    "id": "r19-m1-02",
    "topicId": "react-intro",
    "topicName": "Module 1: Introduction to React",
    "question": "What does it mean that React is 'Declarative' rather than 'Imperative'?",
    "code": null,
    "options": [
      "You describe WHAT the UI should look like for a given state, and React handles the DOM updates automatically; in imperative code, you manually script every step to update elements.",
      "Declarative code requires manually selecting DOM elements with `document.getElementById`.",
      "Imperative code is faster and easier to test than declarative code.",
      "Declarative means writing all JavaScript inside CSS files."
    ],
    "correctAnswer": 0,
    "explanation": "In Declarative programming (React), you specify the desired end-state UI (`<p>{message}</p>`), and React efficiently applies changes. In Imperative programming (Vanilla JS), you write step-by-step instructions (`document.getElementById('msg').textContent = message`).",
    "tip": "Declarative = 'What you want'; Imperative = 'Step-by-step how to do it'."
  },
  {
    "id": "r19-m1-03",
    "topicId": "react-intro",
    "topicName": "Module 1: Introduction to React",
    "question": "Why does React describe itself as a 'Library' rather than a 'Framework'?",
    "code": null,
    "options": [
      "React focuses solely on UI component rendering and leaves routing, state management, and build tools up to developer choice; a framework enforces rigid architecture and built-in tooling.",
      "React cannot run on mobile devices.",
      "Frameworks can only be written in Python.",
      "React requires zero JavaScript to run."
    ],
    "correctAnswer": 0,
    "explanation": "A library provides specific tools and lets your code call it when needed (you control the architecture). A framework (like Angular or Next.js) controls the application flow and calls your code (Inversion of Control).",
    "tip": "Library: You are in the driver's seat. Framework: The framework drives and tells you where to sit."
  },
  {
    "id": "r19-m1-04",
    "topicId": "react-intro",
    "topicName": "Module 1: Introduction to React",
    "question": "What is the Virtual DOM in React?",
    "code": null,
    "options": [
      "A lightweight virtual JavaScript object representation of the real DOM kept in memory.",
      "A physical hardware device that speeds up monitors.",
      "A duplicate HTML document stored in `localStorage`.",
      "A Google Chrome developer extension."
    ],
    "correctAnswer": 0,
    "explanation": "The Virtual DOM is an in-memory representation of the real DOM tree. When state changes, React updates the Virtual DOM, calculates the minimal diff (reconciliation), and updates only the necessary nodes in the real DOM.",
    "tip": "The Virtual DOM makes DOM updates fast by batching and computing minimal real DOM mutations."
  },
  {
    "id": "r19-m1-05",
    "topicId": "react-intro",
    "topicName": "Module 1: Introduction to React",
    "question": "What is a Single Page Application (SPA)?",
    "code": null,
    "options": [
      "A web application that loads a single HTML page and dynamically rewrites page content with JavaScript as the user interacts, without reloading the entire page from the server.",
      "A website that contains only one paragraph of text.",
      "A webpage that disables navigation links.",
      "An application that only works on desktop monitors."
    ],
    "correctAnswer": 0,
    "explanation": "An SPA loads a single shell HTML page once. Navigation and UI updates occur seamlessly via client-side JavaScript without full page reloads, providing a smooth app-like feel.",
    "tip": "SPAs deliver fast user experiences by eliminating full-page browser refreshes."
  },
  {
    "id": "r19-m1-06",
    "topicId": "react-intro",
    "topicName": "Module 1: Introduction to React",
    "question": "What is a React Component?",
    "code": "function WelcomeMessage({ name }) {\n  return <h1>Welcome, {name}!</h1>;\n}",
    "options": [
      "A reusable, independent, self-contained piece of UI written as a JavaScript function that returns JSX.",
      "A CSS class that changes background color.",
      "A database query in Node.js.",
      "A browser cookie."
    ],
    "correctAnswer": 0,
    "explanation": "Components are the core building blocks of React apps. They encapsulate UI structure, styling, and behavior into modular, reusable functions that return JSX.",
    "tip": "Think of components like custom HTML tags with their own logic and styling."
  },
  {
    "id": "r19-m1-07",
    "topicId": "react-intro",
    "topicName": "Module 1: Introduction to React",
    "question": "What is 'Rendering' in React terms?",
    "code": null,
    "options": [
      "The process where React calls your component function to retrieve the JSX description of what the UI should look like.",
      "Saving images to the server disk.",
      "Converting CSS into JavaScript strings.",
      "Deleting unmounted elements from GitHub."
    ],
    "correctAnswer": 0,
    "explanation": "Rendering is React invoking component functions to figure out the UI tree (JSX). React then commits any differences to the real DOM (Commit phase).",
    "tip": "Render = calculate what UI should look like; Commit = apply changes to actual DOM."
  },
  {
    "id": "r19-m1-08",
    "topicId": "react-intro",
    "topicName": "Module 1: Introduction to React",
    "question": "Which of the following demonstrates an IMPERATIVE approach to updating text?",
    "code": null,
    "options": [
      "`document.getElementById('status').textContent = 'Loaded';`",
      "`<p>{status}</p>` with `setStatus('Loaded')`",
      "`<h1>{isLoaded ? 'Loaded' : 'Loading...'}</h1>`",
      "`<StatusBadge status={status} />`"
    ],
    "correctAnswer": 0,
    "explanation": "`document.getElementById('status').textContent = 'Loaded'` is imperative: it directly tells the browser DOM exact step-by-step instructions to find an ID and mutate its text property.",
    "tip": "Direct DOM mutation methods (`getElementById`, `innerHTML`) are imperative."
  },
  {
    "id": "r19-m1-09",
    "topicId": "react-intro",
    "topicName": "Module 1: Introduction to React",
    "question": "What is React Native in comparison to React DOM?",
    "code": null,
    "options": [
      "React DOM renders components to web browser DOM elements (like `<div>`, `<p>`); React Native compiles React components to native mobile UI views for iOS and Android (like `<View>`, `<Text>`).",
      "React Native is a PHP framework.",
      "React Native only works on desktop PCs.",
      "React DOM is obsolete and replaced by React Native."
    ],
    "correctAnswer": 0,
    "explanation": "React core logic (state, components, hooks) is platform-agnostic. React DOM translates it into HTML DOM elements, while React Native maps it to native iOS/Android mobile components.",
    "tip": "Learn React once, write for web (React DOM) and mobile (React Native)."
  },
  {
    "id": "r19-m1-10",
    "topicId": "react-intro",
    "topicName": "Module 1: Introduction to React",
    "question": "Why does React require component function names to start with a Capital (PascalCase) letter?",
    "code": "// Correct:\nfunction UserProfile() { return <div>User</div>; }\n\n// Incorrect:\nfunction userProfile() { return <div>User</div>; }",
    "options": [
      "JSX interprets lowercase tags (like `<div>`, `<span>`, `<p>`) as standard HTML elements, whereas capitalized tags (`<UserProfile />`) are treated as custom React components.",
      "Because JavaScript variables cannot start with lowercase letters.",
      "It is a strict requirement of Node.js.",
      "Capitalized names run faster in the browser."
    ],
    "correctAnswer": 0,
    "explanation": "JSX uses the first letter case to distinguish built-in HTML/SVG tags (`<div>`, `<button>`) from custom React components (`<Button />`, `<Card />`). Lowercase tags are passed as strings to `createElement`.",
    "tip": "Always name React components in PascalCase: `UserProfile`, `ExamCard`."
  },
  {
    "id": "r19-m1-11",
    "topicId": "react-intro",
    "topicName": "Module 1: Introduction to React",
    "question": "What is the primary advantage of component reusability in React?",
    "code": null,
    "options": [
      "Write a component once (e.g. `<Button>`, `<Card>`) and reuse it across multiple pages with different props, maintaining consistent UI and saving development time.",
      "It eliminates the need for CSS completely.",
      "It makes all web requests synchronous.",
      "It guarantees 100% SEO ranking."
    ],
    "correctAnswer": 0,
    "explanation": "Reusability follows DRY principles. Encapsulating UI into composable components means updates in one component reflect everywhere it is used.",
    "tip": "Build small, single-purpose components and compose them into rich pages."
  },
  {
    "id": "r19-m1-12",
    "topicId": "react-intro",
    "topicName": "Module 1: Introduction to React",
    "question": "What happens when component state changes in React?",
    "code": null,
    "options": [
      "React schedules a re-render of that component and its child subtree, updating the Virtual DOM and applying necessary updates to the real DOM.",
      "The entire browser window reloads from scratch.",
      "All other browser tabs close.",
      "The state change is ignored until the user clicks refresh."
    ],
    "correctAnswer": 0,
    "explanation": "Updating state triggers a re-render cycle. React re-invokes the component function, computes the new JSX representation, diffs it against previous output, and updates only the changed DOM nodes.",
    "tip": "State change -> Re-render -> Virtual DOM Diff -> Minimal Real DOM Update."
  },
  {
    "id": "r19-m2-01",
    "topicId": "react-setup",
    "topicName": "Module 2: Setting Up a React 19 Project",
    "question": "What is the role of Node.js and npm when setting up a modern React project?",
    "code": null,
    "options": [
      "Node.js runs the JavaScript build tools (like Vite, bundlers, and dev servers) locally; npm (Node Package Manager) installs and manages project dependencies.",
      "Node.js is used to design CSS styles.",
      "npm is a web browser for testing.",
      "Node.js is required only on production servers, never during local development."
    ],
    "correctAnswer": 0,
    "explanation": "Node.js provides the local runtime environment to run build tools and development servers. `npm` installs packages like `react`, `react-dom`, and build tools.",
    "tip": "Node runs your build tools; npm installs your project packages."
  },
  {
    "id": "r19-m2-02",
    "topicId": "react-setup",
    "topicName": "Module 2: Setting Up a React 19 Project",
    "question": "Why is Vite preferred over Create React App (CRA) for modern React development?",
    "code": null,
    "options": [
      "Vite leverages native ES Modules (ESM) in modern browsers and esbuild for near-instant dev server startup and lightning-fast Hot Module Replacement (HMR); CRA is slow and deprecated.",
      "Vite does not require JavaScript.",
      "Create React App only works with React 15.",
      "Vite automatically writes backend SQL code."
    ],
    "correctAnswer": 0,
    "explanation": "Vite provides extremely fast startup times and HMR because it serves source code via native ESM during development. CRA is officially deprecated by the React team.",
    "tip": "Vite is the modern industry standard for client-side React development."
  },
  {
    "id": "r19-m2-03",
    "topicId": "react-setup",
    "topicName": "Module 2: Setting Up a React 19 Project",
    "question": "In a standard Vite React project, what is the entry HTML file and where is it located?",
    "code": null,
    "options": [
      "`index.html` located in the root directory of the project, containing `<div id=\"root\"></div>` and a `<script type=\"module\" src=\"/src/main.jsx\"></script>` tag.",
      "`public/index.html`",
      "`src/index.html`",
      "`dist/index.html`"
    ],
    "correctAnswer": 0,
    "explanation": "Unlike CRA (which buried `index.html` inside `public/`), Vite treats `index.html` at the project root as the primary entry point.",
    "tip": "In Vite, `index.html` lives right in the project root."
  },
  {
    "id": "r19-m2-04",
    "topicId": "react-setup",
    "topicName": "Module 2: Setting Up a React 19 Project",
    "question": "What is the purpose of `src/main.jsx` in a React 19 application?",
    "code": "import { StrictMode } from 'react';\nimport { createRoot } from 'react-dom/client';\nimport App from './App.jsx';\n\ncreateRoot(document.getElementById('root')).render(\n  <StrictMode>\n    <App />\n  </StrictMode>\n);",
    "options": [
      "It is the JavaScript entry file that finds the root DOM element (`#root`), creates a React root with `createRoot`, and mounts the top-level `<App />` component into the page.",
      "It compiles CSS files into HTML.",
      "It handles database migrations.",
      "It generates random passwords."
    ],
    "correctAnswer": 0,
    "explanation": "`src/main.jsx` is the bridge where `react-dom/client` mounts your root React component tree into the real HTML DOM container.",
    "tip": "`createRoot(container).render(<App />)` is the standard React 18 & 19 mounting API."
  },
  {
    "id": "r19-m2-05",
    "topicId": "react-setup",
    "topicName": "Module 2: Setting Up a React 19 Project",
    "question": "What is `package.json` in a React project?",
    "code": null,
    "options": [
      "The manifest file that lists project metadata, installed dependencies (`dependencies` / `devDependencies`), and executable npm scripts (`dev`, `build`, `preview`).",
      "A file that stores user credit card numbers.",
      "The compiled production binary.",
      "A CSS theme file."
    ],
    "correctAnswer": 0,
    "explanation": "`package.json` records the exact libraries your app depends on and defines terminal commands (scripts) like `npm run dev` and `npm run build`.",
    "tip": "Keep `package.json` in version control so team members can run `npm install`."
  },
  {
    "id": "r19-m2-06",
    "topicId": "react-setup",
    "topicName": "Module 2: Setting Up a React 19 Project",
    "question": "What is the difference between `dependencies` and `devDependencies` in `package.json`?",
    "code": null,
    "options": [
      "`dependencies` are packages required for the app to run in production (e.g. `react`, `react-dom`); `devDependencies` are tools only needed during local development/building (e.g. `vite`, linter plugins).",
      "`devDependencies` are deployed to production servers, `dependencies` are not.",
      "There is no difference; npm treats them identically.",
      "`devDependencies` only work on mobile devices."
    ],
    "correctAnswer": 0,
    "explanation": "Runtime packages (like `react`) belong in `dependencies`. Build tools, bundlers, and test runners belong in `devDependencies` because they aren't bundled into runtime code.",
    "tip": "Install runtime dependencies with `npm i <pkg>` and dev tools with `npm i -D <pkg>`."
  },
  {
    "id": "r19-m2-07",
    "topicId": "react-setup",
    "topicName": "Module 2: Setting Up a React 19 Project",
    "question": "Why is `node_modules/` included in `.gitignore` and never committed to Git?",
    "code": null,
    "options": [
      "It contains thousands of downloaded files that can be easily recreated by running `npm install`, and committing it would drastically bloat the repository size.",
      "Because Git cannot track `.js` files.",
      "Because npm deletes the repository if `node_modules` is tracked.",
      "Because `node_modules` contains secret passwords."
    ],
    "correctAnswer": 0,
    "explanation": "`node_modules` contains gigabytes of platform-dependent third-party files. Since `package.json` and `package-lock.json` record the exact dependency versions, anyone can recreate `node_modules` by running `npm install`.",
    "tip": "Never commit `node_modules` — always commit `package.json` and `package-lock.json`."
  },
  {
    "id": "r19-m2-08",
    "topicId": "react-setup",
    "topicName": "Module 2: Setting Up a React 19 Project",
    "question": "What command starts the Vite local development server?",
    "code": null,
    "options": [
      "`npm run dev`",
      "`npm run start-production`",
      "`node index.html`",
      "`vite deploy`"
    ],
    "correctAnswer": 0,
    "explanation": "In a Vite project, `npm run dev` launches the local dev server with HMR (Hot Module Replacement), usually on `http://localhost:5173`.",
    "tip": "Run `npm run dev` to develop locally with instantaneous hot reload."
  },
  {
    "id": "r19-m2-09",
    "topicId": "react-setup",
    "topicName": "Module 2: Setting Up a React 19 Project",
    "question": "What does `npm run build` do in a Vite React project?",
    "code": null,
    "options": [
      "Bundles, minifies, and optimizes all JSX, CSS, and JS into static production-ready files inside the `dist/` directory.",
      "Runs unit tests only.",
      "Deletes all components.",
      "Starts a local server on port 3000."
    ],
    "correctAnswer": 0,
    "explanation": "`npm run build` triggers `vite build`, which compiles and minifies your source code, tree-shakes unused imports, and generates production assets in the `dist` folder.",
    "tip": "The output in `dist/` is what you deploy to Netlify, Vercel, or AWS S3."
  },
  {
    "id": "r19-m2-10",
    "topicId": "react-setup",
    "topicName": "Module 2: Setting Up a React 19 Project",
    "question": "What is Hot Module Replacement (HMR)?",
    "code": null,
    "options": [
      "A feature of modern dev servers that updates modified modules in the running browser instantly without requiring a full page refresh, preserving component state.",
      "A cooling fan setting for CPU hardware.",
      "A method of deleting obsolete CSS rules.",
      "A security protocol for HTTPS."
    ],
    "correctAnswer": 0,
    "explanation": "HMR exchanges, adds, or removes modules while an application is running without a full reload, dramatically speeding up developer feedback and preserving UI state.",
    "tip": "HMR updates your edits in milliseconds without losing your form inputs or modal state."
  },
  {
    "id": "r19-m2-11",
    "topicId": "react-setup",
    "topicName": "Module 2: Setting Up a React 19 Project",
    "question": "What file extension is used in Vite for files containing JSX syntax?",
    "code": null,
    "options": [
      "`.jsx` (or `.tsx` for TypeScript)",
      "`.html`",
      "`.json`",
      "`.css`"
    ],
    "correctAnswer": 0,
    "explanation": "Vite strictly requires files with JSX syntax to use the `.jsx` or `.tsx` extension to enable fast esbuild transpilation.",
    "tip": "If a file contains JSX tags like `<div>` or `<App />`, name it `.jsx`."
  },
  {
    "id": "r19-m3-01",
    "topicId": "react-jsx",
    "topicName": "Module 3: JSX",
    "question": "What is JSX in React?",
    "code": "const element = <h1 className=\"title\">Hello, World!</h1>;",
    "options": [
      "A syntax extension for JavaScript that looks like HTML and gets transpiled into standard `React.createElement()` or JSX runtime function calls.",
      "A brand new programming language that replaces JavaScript.",
      "A direct string of raw HTML evaluated by `eval()`.",
      "A CSS stylesheet syntax."
    ],
    "correctAnswer": 0,
    "explanation": "JSX stands for JavaScript XML. It allows you to write HTML-like markup inside JavaScript files. Compilers (Babel/SWC/esbuild) transform JSX into JavaScript function calls.",
    "tip": "JSX combines the structure of HTML with the full power of JavaScript."
  },
  {
    "id": "r19-m3-02",
    "topicId": "react-jsx",
    "topicName": "Module 3: JSX",
    "question": "Why does JSX require a component to return a SINGLE root element (or Fragment)?",
    "code": "// Error:\nreturn (\n  <h1>Header</h1>\n  <p>Paragraph</p>\n);",
    "options": [
      "Because JSX compiles to a JavaScript function call (`jsx(...)`), and a JavaScript function can only return ONE value/object.",
      "Because HTML only allows one tag per page.",
      "Because browsers cannot display more than one element.",
      "Because CSS requires single-parent selectors."
    ],
    "correctAnswer": 0,
    "explanation": "Under the hood, JSX compiles into JavaScript function calls. Just as `return a, b;` is invalid JS syntax, you cannot return two adjacent expressions without wrapping them in a single parent container.",
    "tip": "Wrap multiple siblings in a parent `<div>` or React Fragment `<> ... </>`."
  },
  {
    "id": "r19-m3-03",
    "topicId": "react-jsx",
    "topicName": "Module 3: JSX",
    "question": "What is a React Fragment (`<React.Fragment>` or shorthand `<> ... </>`) and what problem does it solve?",
    "code": "return (\n  <>\n    <h1>Title</h1>\n    <p>Subtitle</p>\n  </>\n);",
    "options": [
      "It groups multiple JSX sibling elements without adding an extra unnecessary wrapper `<div>` node to the actual DOM tree.",
      "It splits components into multiple browser windows.",
      "It encrypts JSX elements.",
      "It converts text into images."
    ],
    "correctAnswer": 0,
    "explanation": "Fragments let you return multiple elements without polluting the DOM with extra wrapper `<div>`s that might break CSS Grid, Flexbox, or table layouts.",
    "tip": "Use `<> ... </>` when you need a single root wrapper without extra DOM markup."
  },
  {
    "id": "r19-m3-04",
    "topicId": "react-jsx",
    "topicName": "Module 3: JSX",
    "question": "How do you embed dynamic JavaScript expressions inside JSX markup?",
    "code": "const username = \"Sarah\";\nconst element = <h1>Hello, {username}!</h1>;",
    "options": [
      "By wrapping the JavaScript expression in curly braces `{ }`.",
      "By using double quotes `\"username\"`.",
      "By using percentage signs `%username%`.",
      "By using PHP tags `<?php echo $username; ?>`."
    ],
    "correctAnswer": 0,
    "explanation": "Curly braces `{}` in JSX open a window into JavaScript evaluation. Any valid JS expression (variables, function calls, arithmetic, ternaries) can be placed inside.",
    "tip": "Anything you can evaluate to a value in JS can go inside `{ }` in JSX."
  },
  {
    "id": "r19-m3-05",
    "topicId": "react-jsx",
    "topicName": "Module 3: JSX",
    "question": "Why do HTML attributes `class` and `for` become `className` and `htmlFor` in JSX?",
    "code": "<label htmlFor=\"email\" className=\"form-label\">Email</label>",
    "options": [
      "`class` and `for` are reserved keywords in JavaScript, so JSX uses `className` and `htmlFor` matching the DOM property names.",
      "Because HTML5 deprecated `class`.",
      "To make typing easier on mobile phones.",
      "Because `className` is required by CSS."
    ],
    "correctAnswer": 0,
    "explanation": "Since JSX is JavaScript, reserved keywords like `class` (for ES6 classes) and `for` (for loops) could cause ambiguity. JSX uses standard DOM property names: `className` and `htmlFor`.",
    "tip": "In JSX: `class` -> `className`, `for` -> `htmlFor`."
  },
  {
    "id": "r19-m3-06",
    "topicId": "react-jsx",
    "topicName": "Module 3: JSX",
    "question": "How must inline styles be written in JSX?",
    "code": "const heading = <h1 style={{ color: \"red\", fontSize: \"20px\", marginTop: \"10px\" }}>Alert</h1>;",
    "options": [
      "As a JavaScript object with camelCase property names, wrapped inside curly braces: `style={{ propName: 'value' }}`.",
      "As a plain CSS string: `style=\"color: red; font-size: 20px;\"`.",
      "In an external `.txt` file.",
      "Inline styles are forbidden in JSX."
    ],
    "correctAnswer": 0,
    "explanation": "Inline styles in JSX take a JavaScript object (hence double curly braces: outer for JSX expression, inner for object literal) and use camelCase CSS properties (`fontSize` instead of `font-size`).",
    "tip": "`style={{ backgroundColor: 'white', padding: '12px' }}`."
  },
  {
    "id": "r19-m3-07",
    "topicId": "react-jsx",
    "topicName": "Module 3: JSX",
    "question": "How must self-closing HTML tags (like `<img>`, `<input>`, `<br>`, `<hr>`) be written in JSX?",
    "code": "<img src=\"/logo.png\" alt=\"Logo\" />",
    "options": [
      "They MUST explicitly be closed with a trailing slash `/>` (e.g. `<img />`, `<input />`, `<br />`).",
      "They cannot have attributes.",
      "They must always have a closing tag `<img></img>`.",
      "Self-closing tags are not allowed in JSX."
    ],
    "correctAnswer": 0,
    "explanation": "JSX follows strict XML rules: all tags must be closed. Void tags like `<img>` and `<input>` must end with `/>` or a syntax error will occur.",
    "tip": "Always close void tags: `<input type=\"text\" />`, `<br />`."
  },
  {
    "id": "r19-m3-08",
    "topicId": "react-jsx",
    "topicName": "Module 3: JSX",
    "question": "How do you write comments inside JSX markup?",
    "code": "return (\n  <div>\n    {/* This is a comment inside JSX */}\n    <h1>Title</h1>\n  </div>\n);",
    "options": [
      "`{/* Comment text */}` — JavaScript block comment wrapped in JSX curly braces.",
      "`<!-- Comment text -->`",
      "`// Comment text` directly in JSX",
      "`# Comment text`"
    ],
    "correctAnswer": 0,
    "explanation": "Inside JSX children, comments must be standard JS block comments enclosed within expression braces: `{/* comment */}`. Plain `//` would be rendered as visible text on the page.",
    "tip": "Use `{/* ... */}` to write comments inside JSX elements."
  },
  {
    "id": "r19-m3-09",
    "topicId": "react-jsx",
    "topicName": "Module 3: JSX",
    "question": "What happens when boolean values (`true`, `false`), `null`, or `undefined` are embedded in JSX?",
    "code": "return (\n  <div>\n    {true}\n    {false}\n    {null}\n    {undefined}\n    <span>Visible</span>\n  </div>\n);",
    "options": [
      "They do NOT render anything to the screen (they render as empty/nothing).",
      "They print the words 'true', 'false', 'null' on the web page.",
      "They throw a TypeError.",
      "They render as checkboxes."
    ],
    "correctAnswer": 0,
    "explanation": "Booleans, `null`, and `undefined` are ignored by React and render nothing. This makes conditional rendering like `{isOpen && <Modal />}` work cleanly.",
    "tip": "Booleans, null, and undefined render nothing in JSX."
  },
  {
    "id": "r19-m3-10",
    "topicId": "react-jsx",
    "topicName": "Module 3: JSX",
    "question": "Can you write an `if / else` statement directly inside JSX curly braces `{ }`?",
    "code": "// Why does this fail?\n<div>\n  { if (isLoggedIn) { <h1>Welcome</h1> } }\n</div>",
    "options": [
      "No, because `if/else` is a Statement, not an Expression; JSX `{}` only accepts expressions (like ternary `isLoggedIn ? <Welcome/> : <Login/>`).",
      "Yes, it is valid in React 19.",
      "Only if wrapped in parentheses.",
      "Only in TypeScript."
    ],
    "correctAnswer": 0,
    "explanation": "`if` statements do not evaluate to a value and cannot be placed inside `{}`. Use ternary expressions `condition ? <A /> : <B />` or logical AND `condition && <A />` instead.",
    "tip": "Statements (`if`, `for`) cannot go in JSX `{ }`. Use expressions (ternary, `map`)."
  },
  {
    "id": "r19-m3-11",
    "topicId": "react-jsx",
    "topicName": "Module 3: JSX",
    "question": "How does JSX prevent Cross-Site Scripting (XSS) attacks by default?",
    "code": "const userComment = \"<script>stealData()</script>\";\nreturn <div>{userComment}</div>;",
    "options": [
      "React automatically escapes all strings rendered inside JSX expressions before displaying them in the DOM, converting them to safe text instead of executable HTML.",
      "React deletes user comments from the database.",
      "React blocks all internet traffic.",
      "React requires an antivirus plugin."
    ],
    "correctAnswer": 0,
    "explanation": "React escapes all values before rendering them. Everything is converted to a string, preventing malicious script injection.",
    "tip": "JSX is safe by default against XSS injection attacks."
  },
  {
    "id": "r19-m3-12",
    "topicId": "react-jsx",
    "topicName": "Module 3: JSX",
    "question": "What is the result of rendering an array of JSX elements in React?",
    "code": "const items = [\n  <li key=\"1\">One</li>,\n  <li key=\"2\">Two</li>\n];\nreturn <ul>{items}</ul>;",
    "options": [
      "React renders each JSX element in the array sequentially inside the parent `<ul>`.",
      "React throws an error because arrays cannot be rendered.",
      "React renders only the first element.",
      "React converts the array into a JSON string."
    ],
    "correctAnswer": 0,
    "explanation": "React natively knows how to render arrays of JSX elements, rendering each item in order (provided each item has a unique `key` prop).",
    "tip": "Arrays of JSX elements are rendered sequentially."
  },
  {
    "id": "r19-m3-13",
    "topicId": "react-jsx",
    "topicName": "Module 3: JSX",
    "question": "What attribute casing is used for almost all HTML/SVG properties in JSX?",
    "code": "<button tabIndex=\"0\" aria-label=\"Close modal\" onClick={handleClick}>Close</button>",
    "options": [
      "camelCase (e.g. `tabIndex`, `onClick`, `strokeWidth`), except for `aria-*` and `data-*` attributes which remain hyphenated (kebab-case).",
      "ALL_CAPS",
      "snake_case",
      "lowercase only"
    ],
    "correctAnswer": 0,
    "explanation": "JSX attributes use camelCase (matching JS DOM properties), with the deliberate exception of standard accessibility `aria-*` and `data-*` attributes which remain lowercase kebab-case.",
    "tip": "CamelCase for standard props (`onClick`, `tabIndex`); kebab-case for `aria-*` and `data-*`."
  },
  {
    "id": "r19-m4-01",
    "topicId": "react-components-props",
    "topicName": "Module 4: Components and Props",
    "question": "What are 'Props' in React?",
    "code": "<UserCard name=\"Alex\" role=\"Admin\" age={28} />",
    "options": [
      "Short for 'Properties' — read-only inputs passed from a parent component to a child component to customize its rendering and behavior.",
      "Mutable internal state variables created by `useState`.",
      "CSS animations created in stylesheets.",
      "Database credentials stored in `.env`."
    ],
    "correctAnswer": 0,
    "explanation": "Props allow parent components to pass data and callbacks down to child components. Props flow unidirectionally (top-down) and are strictly read-only for the child.",
    "tip": "Props are like arguments passed into a function."
  },
  {
    "id": "r19-m4-02",
    "topicId": "react-components-props",
    "topicName": "Module 4: Components and Props",
    "question": "Are Props mutable by the receiving child component?",
    "code": "function Card(props) {\n  props.title = \"New Title\"; // What happens?\n  return <h1>{props.title}</h1>;\n}",
    "options": [
      "No! React adheres to a strict rule: All React components must act like Pure Functions with respect to their props (Props are strictly READ-ONLY / immutable).",
      "Yes, children can freely mutate any props.",
      "Props can only be mutated if declared with `let`.",
      "Props can be mutated on mobile devices only."
    ],
    "correctAnswer": 0,
    "explanation": "Props are read-only. A component must never modify its own props. If a value needs to change over time in response to user interaction, use State instead.",
    "tip": "Never mutate `props`! Use State if data needs to change."
  },
  {
    "id": "r19-m4-03",
    "topicId": "react-components-props",
    "topicName": "Module 4: Components and Props",
    "question": "What is the recommended modern syntax for extracting props in a functional component?",
    "code": "// Method A: function Card(props) { return <h1>{props.title}</h1>; }\n// Method B: function Card({ title, badge = \"New\" }) { return <h1>{title}</h1>; }",
    "options": [
      "Destructuring props directly inside the component function parameter list (Method B).",
      "Using `this.props` everywhere.",
      "Converting props to JSON strings first.",
      "Props cannot be destructured in JavaScript."
    ],
    "correctAnswer": 0,
    "explanation": "Destructuring props in the function signature (`function Card({ title, badge = 'New' })`) makes code clean, concise, and immediately shows which props the component expects.",
    "tip": "Destructure props directly in function parameters for clean, readable code."
  },
  {
    "id": "r19-m4-04",
    "topicId": "react-components-props",
    "topicName": "Module 4: Components and Props",
    "question": "What is the special `children` prop in React?",
    "code": "<Card>\n  <h2>Modal Header</h2>\n  <p>Modal body content</p>\n</Card>",
    "options": [
      "A prop automatically populated with whatever JSX elements/content are passed between the opening and closing tags of a component.",
      "An array of child component state values.",
      "A list of database sub-records.",
      "A prop that only accepts numbers."
    ],
    "correctAnswer": 0,
    "explanation": "`props.children` allows component composition (containment). Anything placed between `<Card>` and `</Card>` is passed to `Card` as `props.children`.",
    "tip": "`children` prop is the key to building layout wrappers and container components."
  },
  {
    "id": "r19-m4-05",
    "topicId": "react-components-props",
    "topicName": "Module 4: Components and Props",
    "question": "How can default values be provided for props in modern React?",
    "code": "function Button({ variant = \"primary\", size = \"medium\", children }) {\n  return <button className={`btn btn-${variant} btn-${size}`}>{children}</button>;\n}",
    "options": [
      "Using standard JavaScript ES6 parameter default values in the destructured parameter list.",
      "Using the deprecated `defaultProps` property.",
      "Default values cannot be assigned in React.",
      "By adding CSS fallback rules."
    ],
    "correctAnswer": 0,
    "explanation": "Modern React encourages ES6 default parameter values (`{ variant = 'primary' }`), which are cleaner and fully supported in modern React functional components.",
    "tip": "Use ES6 default parameters for clean prop fallbacks."
  },
  {
    "id": "r19-m4-06",
    "topicId": "react-components-props",
    "topicName": "Module 4: Components and Props",
    "question": "How do you pass a callback function as a prop to allow a child component to communicate with its parent?",
    "code": "function Parent() {\n  const handleDelete = (id) => console.log(\"Deleted item\", id);\n  return <ChildItem id={42} onDelete={handleDelete} />;\n}\nfunction ChildItem({ id, onDelete }) {\n  return <button onClick={() => onDelete(id)}>Delete</button>;\n}",
    "options": [
      "Pass the parent handler function as a prop (`onDelete={handleDelete}`); the child invokes `onDelete(id)` when the event occurs.",
      "Child components automatically have access to all parent functions without props.",
      "Child components must reload the page.",
      "Parent functions must be stored in the global `window` object."
    ],
    "correctAnswer": 0,
    "explanation": "This is the classic 'Lifting State Up' communication pattern: data flows DOWN via props; notifications flow UP via callbacks passed as props.",
    "tip": "Props down, callbacks up: the golden rule of React component communication."
  },
  {
    "id": "r19-m4-07",
    "topicId": "react-components-props",
    "topicName": "Module 4: Components and Props",
    "question": "What is 'Prop Drilling' in React architecture?",
    "code": null,
    "options": [
      "The process of passing props down through multiple layers of intermediate components that do not need the data themselves, just to reach a deeply nested child.",
      "Creating holes in the DOM tree.",
      "A fast build tool.",
      "Compiling props to WebAssembly."
    ],
    "correctAnswer": 0,
    "explanation": "Prop drilling happens when deeply nested components need data from a high-level ancestor, forcing intermediate components to pass props along. It is solved using Context (`useContext`) or state management.",
    "tip": "Solve painful prop drilling using React Context or component composition."
  },
  {
    "id": "r19-m4-08",
    "topicId": "react-components-props",
    "topicName": "Module 4: Components and Props",
    "question": "How do you pass all properties of an object as individual props using the JSX spread attribute?",
    "code": "const user = { name: \"Alice\", age: 25, role: \"Admin\" };\nreturn <UserProfile {...user} />;",
    "options": [
      "Using `<UserProfile {...user} />`, which spreads each key-value pair as `name=\"Alice\" age={25} role=\"Admin\"`.",
      "Using `<UserProfile user=all />`",
      "Using `<UserProfile *user />`",
      "JSX does not support spreading objects."
    ],
    "correctAnswer": 0,
    "explanation": "The JSX spread attribute `<Component {...propsObject} />` forwards every property in the object as an individual prop to the component.",
    "tip": "Use spread props `<Component {...props} />` when forwarding props to wrapper components."
  },
  {
    "id": "r19-m4-09",
    "topicId": "react-components-props",
    "topicName": "Module 4: Components and Props",
    "question": "What types of values can be passed as Props in React?",
    "code": null,
    "options": [
      "Any valid JavaScript value: strings, numbers, booleans, arrays, objects, functions (callbacks), and even other React elements/components.",
      "Only strings and numbers.",
      "Only HTML elements.",
      "Only JSON strings."
    ],
    "correctAnswer": 0,
    "explanation": "Props can be of any JavaScript type, including complex objects, functions, and JSX nodes.",
    "tip": "Props can carry any JavaScript data type or UI element."
  },
  {
    "id": "r19-m4-10",
    "topicId": "react-components-props",
    "topicName": "Module 4: Components and Props",
    "question": "What happens if you pass a boolean prop without specifying a value, like `<Modal isOpen />`?",
    "code": "<Modal isOpen />",
    "options": [
      "It defaults to `true` (equivalent to `isOpen={true}`).",
      "It defaults to `false`.",
      "It defaults to `undefined`.",
      "Throws a SyntaxError."
    ],
    "correctAnswer": 0,
    "explanation": "In JSX, passing a prop name without an explicit value (`<Modal isOpen />`) is shorthand for passing `true` (`<Modal isOpen={true} />`), mimicking HTML boolean attributes like `<input disabled />`.",
    "tip": "`<Button disabled />` is identical to `<Button disabled={true} />`."
  },
  {
    "id": "r19-m4-11",
    "topicId": "react-components-props",
    "topicName": "Module 4: Components and Props",
    "question": "Why should components be kept Pure and free of side effects during render?",
    "code": null,
    "options": [
      "Pure components produce predictable UI, prevent infinite render loops, enable safe concurrency, and allow React to optimize rendering performance.",
      "Pure components run in C++.",
      "Because impure components cannot use CSS.",
      "React throws a compile error for impure functions."
    ],
    "correctAnswer": 0,
    "explanation": "During rendering, React components should be pure calculations: given the same props/state, return the same JSX without mutating external variables or triggering side effects.",
    "tip": "Keep rendering pure; put side effects in event handlers or `useEffect`."
  },
  {
    "id": "r19-m4-12",
    "topicId": "react-components-props",
    "topicName": "Module 4: Components and Props",
    "question": "What is Component Composition over Inheritance in React?",
    "code": null,
    "options": [
      "The architectural principle of building complex UIs by combining smaller, flexible components via props and `children` rather than creating complex class inheritance hierarchies.",
      "Inheriting classes using `extends` across 10 levels.",
      "Writing all code in a single file.",
      "Using CSS stylesheets exclusively."
    ],
    "correctAnswer": 0,
    "explanation": "React strongly advocates Composition over Inheritance. Components can contain other components through props and `children`, making UI code far more flexible and maintainable.",
    "tip": "In React, composition (`<Dialog><LoginForm /></Dialog>`) is always superior to class inheritance."
  },
  {
    "id": "r19-m4-13",
    "topicId": "react-components-props",
    "topicName": "Module 4: Components and Props",
    "question": "What is the difference between Container (Smart) and Presentational (Dumb) components?",
    "code": null,
    "options": [
      "Presentational components focus on how things LOOK (receiving props and rendering UI); Container components focus on how things WORK (managing state, fetching data, handling business logic).",
      "Presentational components only run on mobile.",
      "Container components cannot contain JSX.",
      "There is no difference."
    ],
    "correctAnswer": 0,
    "explanation": "Separating UI rendering (presentational) from business logic/state management (containers) makes components highly modular, reusable, and easy to test.",
    "tip": "Keep UI components dumb and reusable; manage state in dedicated container components."
  },
  {
    "id": "r19-m5-01",
    "topicId": "react-state-usestate",
    "topicName": "Module 5: State and useState Hook",
    "question": "What is State in React, and how does it fundamentally differ from Props?",
    "code": null,
    "options": [
      "State is internal, mutable component data that changes over time in response to user interaction and triggers a re-render; Props are external, immutable inputs passed down by parent components.",
      "State is passed from parents; Props are internal.",
      "State never causes re-renders.",
      "State is stored in cookies."
    ],
    "correctAnswer": 0,
    "explanation": "Props configure a component from the outside (like function arguments). State is a component's private, internal memory that changes in response to user actions and causes React to update the screen.",
    "tip": "Props: external and read-only; State: internal and mutable via setter."
  },
  {
    "id": "r19-m5-02",
    "topicId": "react-state-usestate",
    "topicName": "Module 5: State and useState Hook",
    "question": "What does the `useState` hook return when called?",
    "code": "const [count, setCount] = useState(0);",
    "options": [
      "An array with exactly two elements: [1] the current state value, and [2] an updater/setter function to update the state value and trigger a re-render.",
      "A single number representing the count.",
      "An object containing `{ state, setState }`.",
      "A Promise that resolves to data."
    ],
    "correctAnswer": 0,
    "explanation": "`useState(initialValue)` returns a 2-element tuple: `[currentState, stateSetterFunction]`. Array destructuring `const [val, setVal] = useState(...)` is standard.",
    "tip": "Convention: `const [something, setSomething] = useState(initialValue)`."
  },
  {
    "id": "r19-m5-03",
    "topicId": "react-state-usestate",
    "topicName": "Module 5: State and useState Hook",
    "question": "What happens if you mutate state directly without calling the setter function?",
    "code": "const [user, setUser] = useState({ name: \"Alex\" });\n// INCORRECT:\nuser.name = \"Sam\";",
    "options": [
      "React will NOT know that state changed, no re-render will be triggered, and UI will not update.",
      "Throws an immediate compiler error.",
      "The browser crashes.",
      "The entire database is cleared."
    ],
    "correctAnswer": 0,
    "explanation": "React relies on calling the setter function (`setUser(...)`) to schedule a re-render and detect changes via reference comparison. Direct mutation bypasses React's change detection.",
    "tip": "NEVER mutate state directly. Always use the setter function: `setUser({ ...user, name: 'Sam' })`."
  },
  {
    "id": "r19-m5-04",
    "topicId": "react-state-usestate",
    "topicName": "Module 5: State and useState Hook",
    "question": "Why does `console.log(count)` immediately after `setCount(count + 1)` show the OLD state value?",
    "code": "const [count, setCount] = useState(0);\nfunction handleClick() {\n  setCount(count + 1);\n  console.log(count); // Still prints 0!\n}",
    "options": [
      "State updates are asynchronous/batched; calling `setCount` requests a re-render for the NEXT render cycle, while `count` in the current function execution remains the constant value from the current render snapshot.",
      "`setCount` failed to execute.",
      "The browser delayed JavaScript execution by 5 seconds.",
      "`count` was converted to undefined."
    ],
    "correctAnswer": 0,
    "explanation": "State in React acts like a snapshot for each render. Setting state does not change the variable in the currently executing closure; it schedules a future render with the new state value.",
    "tip": "Setting state schedules a render with the new value; it doesn't change the current local variable."
  },
  {
    "id": "r19-m5-05",
    "topicId": "react-state-usestate",
    "topicName": "Module 5: State and useState Hook",
    "question": "When should you pass an Updater Function (`prev => prev + 1`) to the state setter?",
    "code": "// Case A: setCount(count + 1);\n// Case B: setCount(prevCount => prevCount + 1);",
    "options": [
      "When the new state depends on the previous state value, especially when multiple state updates occur in the same event cycle or async callbacks.",
      "Only when count is greater than 100.",
      "Only when using TypeScript.",
      "Updater functions are deprecated."
    ],
    "correctAnswer": 0,
    "explanation": "If you call `setCount(count + 1)` three times in a row, all three read the same snapshot `count = 0`, resulting in `1`. Passing `prev => prev + 1` ensures each update receives the pending updated value, resulting in `3`.",
    "tip": "Use `setCount(prev => prev + 1)` whenever new state depends on old state."
  },
  {
    "id": "r19-m5-06",
    "topicId": "react-state-usestate",
    "topicName": "Module 5: State and useState Hook",
    "question": "How do you properly update a property inside an Object state in React?",
    "code": "const [profile, setProfile] = useState({ name: \"Jane\", age: 24, theme: \"dark\" });",
    "options": [
      "`setProfile(prev => ({ ...prev, age: 25 }));` (spread existing properties and overwrite the changed property)",
      "`profile.age = 25; setProfile(profile);`",
      "`setProfile({ age: 25 });` (which erases name and theme!)",
      "`setProfile.update('age', 25);`"
    ],
    "correctAnswer": 0,
    "explanation": "Object state in React must be updated immutably. Spreading `...prev` copies all other fields so they aren't lost, while `age: 25` updates the target property in the new object reference.",
    "tip": "Always spread previous object state: `setProfile(prev => ({ ...prev, updatedField: newVal }))`."
  },
  {
    "id": "r19-m5-07",
    "topicId": "react-state-usestate",
    "topicName": "Module 5: State and useState Hook",
    "question": "How do you properly add a new item to an Array state in React?",
    "code": "const [todos, setTodos] = useState([\"Learn JS\", \"Learn React\"]);",
    "options": [
      "`setTodos(prev => [...prev, \"Build Quiz Portal\"]);`",
      "`todos.push(\"Build Quiz Portal\"); setTodos(todos);`",
      "`setTodos(\"Build Quiz Portal\");`",
      "`setTodos(todos + [\"Build Quiz Portal\"]);`"
    ],
    "correctAnswer": 0,
    "explanation": "Never use mutating methods like `.push()`, `.splice()`, or `.pop()` on state. Use non-mutating array spread `[...prev, newItem]` to create a new array reference.",
    "tip": "Add to array state: `setList(prev => [...prev, newItem])`."
  },
  {
    "id": "r19-m5-08",
    "topicId": "react-state-usestate",
    "topicName": "Module 5: State and useState Hook",
    "question": "How do you delete an item from an Array state by ID or index in React?",
    "code": "const [items, setItems] = useState([\n  { id: 1, text: \"Item 1\" },\n  { id: 2, text: \"Item 2\" }\n]);",
    "options": [
      "`setItems(prev => prev.filter(item => item.id !== 1));`",
      "`delete items[0]; setTodos(items);`",
      "`setItems(prev => prev.splice(0, 1));`",
      "`items.pop();`"
    ],
    "correctAnswer": 0,
    "explanation": "`.filter()` returns a brand new array containing only the elements that match the filter condition, cleanly excluding the deleted item without mutating the original state.",
    "tip": "Delete from array state: `setList(prev => prev.filter(item => item.id !== targetId))`."
  },
  {
    "id": "r19-m5-09",
    "topicId": "react-state-usestate",
    "topicName": "Module 5: State and useState Hook",
    "question": "What is Lazy Initial State in `useState` and when should you use it?",
    "code": "const [data, setData] = useState(() => {\n  const saved = localStorage.getItem(\"quiz_progress\");\n  return saved ? JSON.parse(saved) : initialData;\n});",
    "options": [
      "Passing a function to `useState(() => expensiveCalculation())` so the expensive calculation only runs ONCE on initial mount, rather than on every single re-render.",
      "State that only initializes after 10 seconds.",
      "State that is fetched from Google.",
      "Lazy state is an anti-pattern."
    ],
    "correctAnswer": 0,
    "explanation": "If initial state requires expensive computation (parsing localStorage, complex math), pass a function `useState(() => ...)`. React executes the initializer only during initial mount.",
    "tip": "Use `useState(() => getInitialValue())` for expensive initial calculations."
  },
  {
    "id": "r19-m5-10",
    "topicId": "react-state-usestate",
    "topicName": "Module 5: State and useState Hook",
    "question": "What are the two fundamental Rules of Hooks in React?",
    "code": null,
    "options": [
      "1. Only call Hooks at the TOP LEVEL (never inside loops, conditions, or nested functions). 2. Only call Hooks from React Functional Components or Custom Hooks.",
      "1. Hooks must be declared with `var`. 2. Hooks can only be used in class components.",
      "1. Hooks must run on the server. 2. Hooks can only return strings.",
      "There are no rules for Hooks."
    ],
    "correctAnswer": 0,
    "explanation": "React relies on the exact same call order of Hooks on every render to correctly pair state values with internal memory cells. Calling hooks inside `if` statements disrupts this order.",
    "tip": "Never call hooks inside `if`, `for`, or regular functions; call them at the top level of your component."
  },
  {
    "id": "r19-m5-11",
    "topicId": "react-state-usestate",
    "topicName": "Module 5: State and useState Hook",
    "question": "What is State Batching in React 18 and 19 (Automatic Batching)?",
    "code": "function handleClick() {\n  setCount(c => c + 1);\n  setFlag(f => !f);\n  setName(\"Alex\");\n  // How many re-renders happen?\n}",
    "options": [
      "React groups multiple state updates together into a SINGLE re-render cycle for optimal UI performance, regardless of whether they occur inside event handlers, promises, or `setTimeout`.",
      "React triggers 3 separate re-renders back-to-back.",
      "React cancels the first 2 state updates.",
      "React reloads the browser."
    ],
    "correctAnswer": 0,
    "explanation": "Automatic Batching groups multiple state setter calls into one combined re-render, preventing jarring intermediate UI renders and improving rendering performance.",
    "tip": "Multiple state updates in one event = ONE single re-render."
  },
  {
    "id": "r19-m5-12",
    "topicId": "react-state-usestate",
    "topicName": "Module 5: State and useState Hook",
    "question": "What is 'Derived State' and why should you calculate it on the fly instead of storing it in `useState`?",
    "code": "const [items, setItems] = useState([10, 20, 30]);\n// Derived:\nconst total = items.reduce((a, b) => a + b, 0);",
    "options": [
      "Values that can be computed directly from existing state/props should be calculated during render rather than kept in redundant state to prevent state synchronization bugs.",
      "Derived state is state stored in cookies.",
      "Derived state must always be stored in a separate `useState(total)`.",
      "Derived state can only be calculated on the backend."
    ],
    "correctAnswer": 0,
    "explanation": "Don't store in state what you can compute during render. Storing `total` in state leads to bugs where `items` updates but `total` gets out of sync.",
    "tip": "If a value can be computed from existing props or state, don't put it in state!"
  },
  {
    "id": "r19-m5-13",
    "topicId": "react-state-usestate",
    "topicName": "Module 5: State and useState Hook",
    "question": "How do you update a specific item inside an array of objects state?",
    "code": "const [users, setUsers] = useState([\n  { id: 1, name: \"Alice\", active: false },\n  { id: 2, name: \"Bob\", active: false }\n]);",
    "options": [
      "`setUsers(prev => prev.map(u => u.id === 1 ? { ...u, active: true } : u));`",
      "`users[0].active = true; setUsers(users);`",
      "`setUsers(prev => prev.filter(u => u.id === 1).active = true);`",
      "`setUsers([active: true]);`"
    ],
    "correctAnswer": 0,
    "explanation": "`.map()` iterates over each object. If `id === 1`, it creates a new object `{ ...u, active: true }`; otherwise, it returns the existing object unchanged, maintaining immutability.",
    "tip": "Update item in list: `setList(prev => prev.map(item => item.id === id ? { ...item, ...updates } : item))`."
  },
  {
    "id": "r19-m5-14",
    "topicId": "react-state-usestate",
    "topicName": "Module 5: State and useState Hook",
    "question": "What happens if you call a state setter with the EXACT same primitive value or identical object reference as current state (`Object.is(prev, next)` is true)?",
    "code": "const [count, setCount] = useState(5);\n// user clicks:\nsetCount(5);",
    "options": [
      "React bails out / skips the re-render entirely, saving unnecessary computation.",
      "React re-renders the whole app from scratch.",
      "Throws an InfiniteLoopError.",
      "The value resets to 0."
    ],
    "correctAnswer": 0,
    "explanation": "React performs an `Object.is` comparison. If the new value is identical to the current value, React bails out without re-rendering the component children.",
    "tip": "React skips re-rendering if state setter is called with the exact same value."
  },
  {
    "id": "r19-m6-01",
    "topicId": "react-events",
    "topicName": "Module 6: Handling Events",
    "question": "What are React SyntheticEvents?",
    "code": "<button onClick={(e) => console.log(e)}>Click Me</button>",
    "options": [
      "A cross-browser wrapper around the browser's native event that normalizes event behaviors across all browsers according to the W3C spec.",
      "Fake events created for automated testing only.",
      "Events generated only by CSS animations.",
      "Asynchronous promises that never resolve."
    ],
    "correctAnswer": 0,
    "explanation": "React wraps native browser events in a `SyntheticEvent` object to ensure consistent properties and behaviors across different browsers and operating systems.",
    "tip": "SyntheticEvents have the same interface as native events (`stopPropagation`, `preventDefault`)."
  },
  {
    "id": "r19-m6-02",
    "topicId": "react-events",
    "topicName": "Module 6: Handling Events",
    "question": "What is the critical syntax difference between passing an event handler vs invoking it immediately in JSX?",
    "code": "// Case A: <button onClick={handleClick}>Click</button>\n// Case B: <button onClick={handleClick()}>Click</button>",
    "options": [
      "Case A passes the function REFERENCE (executes only on click); Case B INVOKES the function immediately during component render, causing unintended immediate execution and potential infinite loops.",
      "Case B is the standard recommended React way.",
      "Both cases behave identically.",
      "Case A throws a syntax error."
    ],
    "correctAnswer": 0,
    "explanation": "In JSX, you must pass the function reference (`onClick={handleClick}` or `onClick={() => handleClick(id)}`). Adding parentheses `onClick={handleClick()}` calls the function right during render.",
    "tip": "Pass the function, don't call it: `onClick={handleClick}`, NOT `onClick={handleClick()}`."
  },
  {
    "id": "r19-m6-03",
    "topicId": "react-events",
    "topicName": "Module 6: Handling Events",
    "question": "How do you pass a custom parameter (e.g. item ID) to an event handler in React?",
    "code": null,
    "options": [
      "`<button onClick={() => handleDelete(item.id)}>Delete</button>`",
      "`<button onClick={handleDelete(item.id)}>Delete</button>`",
      "`<button onClick=\"handleDelete(item.id)\">Delete</button>`",
      "`<button onClick={item.id.handleDelete}>Delete</button>`"
    ],
    "correctAnswer": 0,
    "explanation": "Wrap the function call in an arrow function callback `<button onClick={() => handleDelete(item.id)}>` so it only executes when the button is clicked, passing `item.id` as an argument.",
    "tip": "Use an inline arrow function to pass parameters: `onClick={() => doAction(param)}`."
  },
  {
    "id": "r19-m6-04",
    "topicId": "react-events",
    "topicName": "Module 6: Handling Events",
    "question": "Why is `e.preventDefault()` used inside form submit handlers in React?",
    "code": "function handleSubmit(e) {\n  e.preventDefault();\n  // submit data via state/fetch\n}",
    "options": [
      "To prevent the browser's default form submission behavior (which reloads the entire web page with an HTTP GET/POST request), keeping the user in the SPA.",
      "To clear all text fields automatically.",
      "To close the browser tab.",
      "To disable keyboard inputs."
    ],
    "correctAnswer": 0,
    "explanation": "In Single Page Applications, forms are handled via JavaScript state and APIs. `e.preventDefault()` prevents the native browser page reload.",
    "tip": "Always call `e.preventDefault()` in React `onSubmit` handlers."
  },
  {
    "id": "r19-m6-05",
    "topicId": "react-events",
    "topicName": "Module 6: Handling Events",
    "question": "What casing convention is used for event listeners in JSX compared to HTML?",
    "code": null,
    "options": [
      "JSX uses camelCase (`onClick`, `onChange`, `onSubmit`, `onKeyDown`); HTML uses all lowercase (`onclick`, `onchange`, `onsubmit`).",
      "JSX uses kebab-case (`on-click`).",
      "JSX uses PascalCase (`OnClick`).",
      "JSX uses UPPERCASE (`ONCLICK`)."
    ],
    "correctAnswer": 0,
    "explanation": "React event attributes strictly use camelCase: `onClick`, `onMouseEnter`, `onDoubleClick`, `onFocus`, etc.",
    "tip": "Always write React events in camelCase: `onClick`, `onChange`."
  },
  {
    "id": "r19-m6-06",
    "topicId": "react-events",
    "topicName": "Module 6: Handling Events",
    "question": "How do you access the value typed into an `<input>` element within an `onChange` handler?",
    "code": "const handleChange = (e) => {\n  const value = e.target.value;\n};",
    "options": [
      "`e.target.value`",
      "`e.value.target`",
      "`document.inputValue`",
      "`e.input.text`"
    ],
    "correctAnswer": 0,
    "explanation": "`e.target` refers to the input DOM element dispatching the change event, and `e.target.value` contains its current string value.",
    "tip": "`e.target.value` is the standard way to read input fields."
  },
  {
    "id": "r19-m6-07",
    "topicId": "react-events",
    "topicName": "Module 6: Handling Events",
    "question": "How does event bubbling work with React SyntheticEvents?",
    "code": null,
    "options": [
      "React SyntheticEvents bubble up the React component tree according to standard DOM bubbling, and `e.stopPropagation()` stops the bubbling.",
      "React events never bubble.",
      "React events bubble directly to the database.",
      "React events can only bubble if registered on the `body` tag."
    ],
    "correctAnswer": 0,
    "explanation": "React events follow standard bubbling. A click on a child component bubbles up through parent JSX elements unless `e.stopPropagation()` is invoked.",
    "tip": "Call `e.stopPropagation()` to stop child clicks from triggering parent container handlers."
  },
  {
    "id": "r19-m6-08",
    "topicId": "react-events",
    "topicName": "Module 6: Handling Events",
    "question": "How do you capture keyboard events like the Enter key in React?",
    "code": "function handleKeyDown(e) {\n  if (e.key === \"Enter\") {\n    submitAnswer();\n  }\n}",
    "options": [
      "Check `e.key === 'Enter'` (or `e.code === 'Enter'`) inside an `onKeyDown` or `onKeyUp` handler.",
      "`onEnterPress` prop on the input.",
      "`document.onEnterKey()`",
      "Keyboard events cannot be listened to in React."
    ],
    "correctAnswer": 0,
    "explanation": "Attach `onKeyDown={handleKeyDown}` and inspect `e.key` for modern standard key names (`'Enter'`, `'Escape'`, `'ArrowUp'`, `'Backspace'`).",
    "tip": "Use `e.key === 'Enter'` or `e.key === 'Escape'` for clean keyboard navigation."
  },
  {
    "id": "r19-m6-09",
    "topicId": "react-events",
    "topicName": "Module 6: Handling Events",
    "question": "What is Event Delegation in React's internal architecture?",
    "code": null,
    "options": [
      "React attaches single root event listeners to the root DOM container (`#root`) rather than attaching individual event listeners to every individual DOM node, optimizing memory usage.",
      "Delegating event handling to a third-party server.",
      "Running events in Web Workers.",
      "Deleting event listeners when the mouse leaves the screen."
    ],
    "correctAnswer": 0,
    "explanation": "React manages event listeners efficiently by attaching root handlers to the root container and dispatching SyntheticEvents to the appropriate components.",
    "tip": "React handles root event delegation automatically under the hood."
  },
  {
    "id": "r19-m6-10",
    "topicId": "react-events",
    "topicName": "Module 6: Handling Events",
    "question": "What is the difference between `onMouseEnter` / `onMouseLeave` and `onMouseOver` / `onMouseOut` in React?",
    "code": null,
    "options": [
      "`onMouseEnter` / `onMouseLeave` do NOT bubble when moving between child elements of the container; `onMouseOver` / `onMouseOut` bubble up from child elements.",
      "`onMouseEnter` only works on touchscreens.",
      "There is no difference.",
      "`onMouseOver` is deprecated in React 19."
    ],
    "correctAnswer": 0,
    "explanation": "`onMouseEnter` and `onMouseLeave` fire only when entering or exiting the boundary of the element itself without firing repeatedly on inner children, making them ideal for hover menus.",
    "tip": "Use `onMouseEnter`/`onMouseLeave` for dropdowns and tooltips to avoid flickering."
  },
  {
    "id": "r19-m6-11",
    "topicId": "react-events",
    "topicName": "Module 6: Handling Events",
    "question": "How do you handle checkbox state changes in React?",
    "code": "<input type=\"checkbox\" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />",
    "options": [
      "Use `e.target.checked` (a boolean) rather than `e.target.value`.",
      "Use `e.target.selected`",
      "Use `e.target.value === 'true'`",
      "Checkboxes do not use `onChange`."
    ],
    "correctAnswer": 0,
    "explanation": "For checkboxes, the boolean state is accessed via `e.target.checked` and controlled via the `checked={boolean}` prop.",
    "tip": "Text inputs use `e.target.value`; checkboxes use `e.target.checked`."
  },
  {
    "id": "r19-m6-12",
    "topicId": "react-events",
    "topicName": "Module 6: Handling Events",
    "question": "Can an event handler function in React be an `async` function?",
    "code": "const handleSave = async (e) => {\n  e.preventDefault();\n  setIsSaving(true);\n  await api.saveData(formData);\n  setIsSaving(false);\n};",
    "options": [
      "Yes, event handler functions can be asynchronous (`async (e) => { ... }`) and use `await` expressions.",
      "No, React will throw a compile error if an event handler is marked `async`.",
      "Async event handlers only work in React Server Components.",
      "Only if `e.preventDefault()` is omitted."
    ],
    "correctAnswer": 0,
    "explanation": "Event handlers are standard JavaScript functions and can freely be marked `async` to perform asynchronous requests, update loading state, and handle errors.",
    "tip": "Async event handlers are standard for API calls and form submissions."
  },
  {
    "id": "r19-m7-01",
    "topicId": "react-conditional-rendering",
    "topicName": "Module 7: Conditional Rendering",
    "question": "What is Conditional Rendering in React?",
    "code": null,
    "options": [
      "Displaying different UI elements or components based on specific conditions, state values, or props.",
      "Rendering components only on specific days of the week.",
      "Rendering CSS styles using conditional media queries only.",
      "A feature that renders components randomly."
    ],
    "correctAnswer": 0,
    "explanation": "Conditional rendering allows components to decide which UI to show depending on state (e.g., showing a loading spinner, login form, or user profile).",
    "tip": "Conditional rendering works using standard JavaScript operators (ternary, `&&`, `if`)."
  },
  {
    "id": "r19-m7-02",
    "topicId": "react-conditional-rendering",
    "topicName": "Module 7: Conditional Rendering",
    "question": "What is the primary way to render between TWO alternate UI views inline in JSX?",
    "code": "return (\n  <div>\n    {isLoggedIn ? <UserDashboard /> : <LoginForm />}\n  </div>\n);",
    "options": [
      "The JavaScript Ternary Operator (`condition ? <ComponentA /> : <ComponentB />`).",
      "The `if...else` statement inside `{}`.",
      "The `switch` statement inside `{}`.",
      "The `<choice>` HTML tag."
    ],
    "correctAnswer": 0,
    "explanation": "The ternary operator is an expression, so it can be used directly inside JSX `{}` to choose between two alternate UI components based on a boolean condition.",
    "tip": "Ternary is the standard inline choice for either/or rendering."
  },
  {
    "id": "r19-m7-03",
    "topicId": "react-conditional-rendering",
    "topicName": "Module 7: Conditional Rendering",
    "question": "What is the famous 'Number 0' Gotcha when using the Logical AND (`&&`) operator in JSX?",
    "code": "const items = [];\nreturn (\n  <div>\n    {items.length && <ItemList items={items} />}\n  </div>\n);",
    "options": [
      "Because `items.length` is `0` (a falsy number), JavaScript's `&&` returns `0`, causing React to render a visible `0` on the web page rather than rendering nothing!",
      "The app crashes with a TypeError.",
      "React converts 0 into true.",
      "The entire page is hidden."
    ],
    "correctAnswer": 0,
    "explanation": "Logical `&&` returns the first falsy operand. Since `0` is a number (and numbers are rendered in JSX), React renders the visible digit `0`. Fix: `{items.length > 0 && <ItemList />}` or `{Boolean(items.length) && <ItemList />}`.",
    "tip": "Always ensure the left side of `&&` is a strict boolean: `{items.length > 0 && <List />}`."
  },
  {
    "id": "r19-m7-04",
    "topicId": "react-conditional-rendering",
    "topicName": "Module 7: Conditional Rendering",
    "question": "How do you conditionally prevent a component from rendering anything at all?",
    "code": "function Banner({ isVisible }) {\n  if (!isVisible) {\n    return null;\n  }\n  return <div className=\"banner\">Special Promo!</div>;\n}",
    "options": [
      "Return `null` from the component function.",
      "Return `false` from the component function.",
      "Return `undefined`.",
      "Return an empty string `\"\"`."
    ],
    "correctAnswer": 0,
    "explanation": "Returning `null` from a component tells React to render nothing to the DOM for this component without throwing an error.",
    "tip": "Return `null` for early exits when a component shouldn't render."
  },
  {
    "id": "r19-m7-05",
    "topicId": "react-conditional-rendering",
    "topicName": "Module 7: Conditional Rendering",
    "question": "What is an Early Return in component conditional rendering?",
    "code": "function Profile({ user, isLoading, error }) {\n  if (isLoading) return <LoadingSpinner />;\n  if (error) return <ErrorMessage error={error} />;\n  if (!user) return <NotFound />;\n  \n  return <UserProfile user={user} />;\n}",
    "options": [
      "Evaluating loading, error, and edge-case states at the top of the component and returning specialized UI immediately, keeping the main JSX tree unpolluted.",
      "A hook that executes before React mounts.",
      "Returning values to the server.",
      "A timer method."
    ],
    "correctAnswer": 0,
    "explanation": "Early returns handle guards (loading, errors, empty data) cleanly before the main UI markup is reached, avoiding deeply nested ternary chains.",
    "tip": "Use early returns for loading spinners and error screens."
  },
  {
    "id": "r19-m7-06",
    "topicId": "react-conditional-rendering",
    "topicName": "Module 7: Conditional Rendering",
    "question": "How can you conditionally apply CSS classes to an element in JSX?",
    "code": "const isActive = true;\nconst hasError = false;",
    "options": [
      "`<div className={`nav-item ${isActive ? 'active' : ''} ${hasError ? 'error' : ''}`}></div>` or template literals.",
      "`<div class=if(isActive, 'active')></div>`",
      "`<div className={if (isActive) 'active'}></div>`",
      "CSS classes cannot be conditional."
    ],
    "correctAnswer": 0,
    "explanation": "Template literals with ternary expressions `className={`btn ${isPrimary ? 'btn-primary' : 'btn-secondary'}`}` or helper libraries like `clsx` are standard for conditional styling.",
    "tip": "Template literals `` `btn ${isActive ? 'active' : ''}` `` make dynamic classes clean."
  },
  {
    "id": "r19-m7-07",
    "topicId": "react-conditional-rendering",
    "topicName": "Module 7: Conditional Rendering",
    "question": "What will the following JSX render if `unreadMessages` is `3`?",
    "code": "<div>\n  {unreadMessages > 0 && <Badge count={unreadMessages} />}\n</div>",
    "options": [
      "The `<Badge count={3} />` component.",
      "Nothing.",
      "The number `3` as plain text.",
      "`true`"
    ],
    "correctAnswer": 0,
    "explanation": "Because `3 > 0` evaluates to `true` (a boolean), the right-hand operand `<Badge count={3} />` is evaluated and rendered.",
    "tip": "Logical AND `&&` renders the right-hand side when the left-hand condition is `true`."
  },
  {
    "id": "r19-m7-08",
    "topicId": "react-conditional-rendering",
    "topicName": "Module 7: Conditional Rendering",
    "question": "How do you handle multi-state conditional rendering (e.g. status is 'idle' | 'loading' | 'success' | 'error') cleanly?",
    "code": null,
    "options": [
      "Using a helper function or `switch` statement outside the return JSX, or a lookup dictionary/object: `{ idle: <Idle/>, loading: <Spinner/>, success: <Data/>, error: <Error/> }[status]`.",
      "Nesting 10 ternary operators inside one line.",
      "Creating 4 separate web pages.",
      "Using CSS `display: none` on all 4 components."
    ],
    "correctAnswer": 0,
    "explanation": "For 3 or more states, a lookup object or helper function with `switch(status)` is vastly cleaner and more maintainable than nested ternary operators.",
    "tip": "Object lookup tables `{ [status]: <Component /> }` are great for multi-state rendering."
  },
  {
    "id": "r19-m7-09",
    "topicId": "react-conditional-rendering",
    "topicName": "Module 7: Conditional Rendering",
    "question": "What is the difference between conditionally rendering an element vs hiding it with CSS `display: none`?",
    "code": null,
    "options": [
      "Conditional rendering completely unmounts the element and removes it from the DOM (cleaning up its state and effects); CSS `display: none` keeps the element mounted in the DOM and memory, only hiding it visually.",
      "CSS `display: none` deletes component state.",
      "Conditional rendering keeps all event listeners running.",
      "There is no difference."
    ],
    "correctAnswer": 0,
    "explanation": "Conditional rendering `{isOpen && <Modal />}` mounts and unmounts the component tree. CSS `display: none` keeps the component mounted in memory with all its state, event listeners, and DOM nodes intact.",
    "tip": "Unmount with conditional rendering when you want fresh state on reopen."
  },
  {
    "id": "r19-m7-10",
    "topicId": "react-conditional-rendering",
    "topicName": "Module 7: Conditional Rendering",
    "question": "What does `user?.name ?? 'Anonymous'` demonstrate in JSX expressions?",
    "code": "<h1>Hello, {user?.name ?? \"Anonymous\"}</h1>",
    "options": [
      "Combining Optional Chaining `?.` to safely read `name` without crashing if `user` is null/undefined, and Nullish Coalescing `??` to provide a fallback string if `name` is nullish.",
      "A syntax error in React.",
      "A regular expression match.",
      "A database query."
    ],
    "correctAnswer": 0,
    "explanation": "This is a clean modern JavaScript pattern: `?.` prevents errors when data is loading, and `??` provides a graceful fallback.",
    "tip": "Combine `?.` and `??` for bulletproof fallbacks in JSX."
  },
  {
    "id": "r19-m7-11",
    "topicId": "react-conditional-rendering",
    "topicName": "Module 7: Conditional Rendering",
    "question": "What will happen if you render `{undefined && <Component />}` in JSX?",
    "code": "<div>{undefined && <Component />}</div>",
    "options": [
      "Nothing is rendered (renders empty), because `undefined` is ignored by JSX.",
      "Throws a ReferenceError.",
      "Renders the text 'undefined'.",
      "Renders `<Component />`."
    ],
    "correctAnswer": 0,
    "explanation": "When the left operand is `undefined`, the `&&` expression evaluates to `undefined`. In JSX, `undefined` renders nothing.",
    "tip": "Unlike `0`, `undefined` and `false` render nothing in JSX."
  },
  {
    "id": "r19-m7-12",
    "topicId": "react-conditional-rendering",
    "topicName": "Module 7: Conditional Rendering",
    "question": "Why should you avoid deeply nested ternary operators in JSX?",
    "code": "// Anti-pattern:\n{a ? (b ? <B /> : c ? <C /> : <D />) : <A />}",
    "options": [
      "They severely hurt readability, making code difficult to understand and debug; extracting sub-components or using early returns is far clearer.",
      "React will refuse to compile nested ternaries.",
      "They cause browser memory leaks.",
      "They disable React reconciliation."
    ],
    "correctAnswer": 0,
    "explanation": "Deeply nested ternaries create high cognitive load. Refactoring into dedicated sub-components, helper functions, or early returns makes the UI code readable.",
    "tip": "If a ternary is nested inside another ternary, extract it into a small component."
  },
  {
    "id": "r19-m8-01",
    "topicId": "react-lists-keys",
    "topicName": "Module 8: Rendering Lists and Keys",
    "question": "What JavaScript array method is the standard way to transform an array of data into an array of JSX elements?",
    "code": "const topics = [\"HTML\", \"CSS\", \"JavaScript\", \"React\"];",
    "options": [
      "`Array.prototype.map()`",
      "`Array.prototype.forEach()`",
      "`Array.prototype.push()`",
      "`for...in` loop"
    ],
    "correctAnswer": 0,
    "explanation": "`.map()` is an expression that transforms each data item into a corresponding JSX element and returns a new array of JSX nodes that React renders directly.",
    "tip": "`{items.map(item => <Item key={item.id} data={item} />)}` is the standard list rendering pattern."
  },
  {
    "id": "r19-m8-02",
    "topicId": "react-lists-keys",
    "topicName": "Module 8: Rendering Lists and Keys",
    "question": "What is the primary purpose of the `key` prop when rendering lists in React?",
    "code": "<ul>\n  {users.map(user => (\n    <li key={user.id}>{user.name}</li>\n  ))}\n</ul>",
    "options": [
      "To give each list item a stable identity so React's reconciliation engine can efficiently determine which items were added, removed, reordered, or updated without re-rendering the entire list.",
      "To style the list items in CSS.",
      "To sort the list alphabetically.",
      "To encrypt list items in memory."
    ],
    "correctAnswer": 0,
    "explanation": "Keys act as identifiers for React's Virtual DOM diffing. When a list changes, React uses keys to match existing DOM nodes with new elements, reusing existing DOM nodes and updating only changed ones.",
    "tip": "Keys give elements a stable identity across renders."
  },
  {
    "id": "r19-m8-03",
    "topicId": "react-lists-keys",
    "topicName": "Module 8: Rendering Lists and Keys",
    "question": "Why is using array index as a `key` (`key={index}`) considered dangerous / an anti-pattern for dynamic lists?",
    "code": "// Risky:\n{todos.map((todo, index) => (\n  <TodoItem key={index} todo={todo} />\n))}",
    "options": [
      "If items are inserted, deleted, or reordered, the indices change, causing React to misidentify component state, leading to subtle bugs with input fields, checkboxes, animations, and degraded performance.",
      "React will throw an uncatchable compile error.",
      "The array index is always converted to NaN.",
      "It disables JavaScript garbage collection."
    ],
    "correctAnswer": 0,
    "explanation": "When you insert or delete an item at the beginning of a list, every item's index shifts. If keys are indices, React incorrectly matches items to old state, causing input text or checkbox states to remain stuck on the wrong items.",
    "tip": "Use unique, stable IDs (`key={item.id}`) whenever items can be sorted, inserted, or removed."
  },
  {
    "id": "r19-m8-04",
    "topicId": "react-lists-keys",
    "topicName": "Module 8: Rendering Lists and Keys",
    "question": "Where must the `key` prop be placed when rendering a custom component in a list?",
    "code": "// Correct placement:\n{questions.map(q => (\n  <QuestionCard key={q.id} question={q} />\n))}",
    "options": [
      "Directly on the outermost JSX element/component returned inside the `.map()` callback.",
      "Inside the root element inside `QuestionCard` component definition.",
      "On the parent `<div>` wrapping the `.map()` expression.",
      "Keys must only be placed on `<p>` tags."
    ],
    "correctAnswer": 0,
    "explanation": "The `key` prop belongs on the element created inside the array context (the top-level item returned inside `.map()`), so React can track it within the siblings array.",
    "tip": "The key always goes on the outermost element returned inside `.map()`."
  },
  {
    "id": "r19-m8-05",
    "topicId": "react-lists-keys",
    "topicName": "Module 8: Rendering Lists and Keys",
    "question": "Can a child component access its own `key` prop via `props.key`?",
    "code": "function Item(props) {\n  console.log(props.key); // ?\n}",
    "options": [
      "No, `key` is reserved internally by React and is NOT passed to the component as a regular prop (`props.key` is `undefined`).",
      "Yes, `props.key` contains the key string.",
      "Only in React 19 Server Components.",
      "Yes, but only if key is a number."
    ],
    "correctAnswer": 0,
    "explanation": "`key` (and legacy `ref`) is reserved for React internals and not passed down in `props`. If a child component needs the ID value, pass it as a separate prop (e.g., `<Item id={item.id} key={item.id} />`).",
    "tip": "If you need the ID inside the child, pass it as a distinct prop: `id={item.id}`."
  },
  {
    "id": "r19-m8-06",
    "topicId": "react-lists-keys",
    "topicName": "Module 8: Rendering Lists and Keys",
    "question": "How do you render a keyed React Fragment inside `.map()` when returning multiple sibling elements per item?",
    "code": null,
    "options": [
      "`<React.Fragment key={item.id}><dt>{item.term}</dt><dd>{item.desc}</dd></React.Fragment>`",
      "`<key={item.id}><dt></dt><dd></dd></>`",
      "`<div no-dom key={item.id}>...</div>`",
      "Fragments cannot accept keys."
    ],
    "correctAnswer": 0,
    "explanation": "The shorthand fragment `<> ... </>` cannot accept attributes. To pass a `key` to a fragment, you must use the explicit `<React.Fragment key={item.id}>` syntax.",
    "tip": "Use `<React.Fragment key={id}>` when mapping multiple sibling elements without a wrapper div."
  },
  {
    "id": "r19-m8-07",
    "topicId": "react-lists-keys",
    "topicName": "Module 8: Rendering Lists and Keys",
    "question": "What happens if keys in a list are NOT unique among siblings?",
    "code": "<li key=\"dup\">A</li>\n<li key=\"dup\">B</li>",
    "options": [
      "React logs a console warning (`Encountered two children with the same key`), and DOM reconciliation may produce incorrect UI updates or duplicate component behavior.",
      "The browser will immediately crash.",
      "React deletes the second element.",
      "React changes keys to random numbers."
    ],
    "correctAnswer": 0,
    "explanation": "Duplicate keys break React's reconciliation algorithm, causing components to receive wrong props or update unpredictably.",
    "tip": "Keys only need to be unique among sibling elements in that specific array, not globally across the app."
  },
  {
    "id": "r19-m8-08",
    "topicId": "react-lists-keys",
    "topicName": "Module 8: Rendering Lists and Keys",
    "question": "Why should `Math.random()` NEVER be used as a `key` (`key={Math.random()}`)?",
    "code": "{items.map(item => <Item key={Math.random()} item={item} />)}",
    "options": [
      "Because on EVERY re-render, a new random key is generated, forcing React to completely destroy and recreate all DOM nodes from scratch on every render, ruining performance and resetting input states.",
      "Because `Math.random()` returns strings.",
      "Because `Math.random()` only runs on the server.",
      "Because numbers cannot be keys."
    ],
    "correctAnswer": 0,
    "explanation": "Keys MUST be STABLE between renders. Generating keys randomly on the fly destroys DOM state and eliminates all reconciliation performance benefits.",
    "tip": "Keys must be STABLE, PREDICTABLE, and UNIQUE."
  },
  {
    "id": "r19-m8-09",
    "topicId": "react-lists-keys",
    "topicName": "Module 8: Rendering Lists and Keys",
    "question": "How can you render an empty state message when an array list has zero items?",
    "code": "const questions = [];",
    "options": [
      "`{questions.length === 0 ? <EmptyState /> : questions.map(q => <Card key={q.id} />)}`",
      "`{questions.empty && <EmptyState />}`",
      "`questions.map(q => <EmptyState />)`",
      "Empty states must be created with CSS."
    ],
    "correctAnswer": 0,
    "explanation": "Check `array.length === 0` using a ternary or early return to render an informative empty state component when there is no data to display.",
    "tip": "Always provide clean empty states for zero-length lists."
  },
  {
    "id": "r19-m8-10",
    "topicId": "react-lists-keys",
    "topicName": "Module 8: Rendering Lists and Keys",
    "question": "How do you filter and then map a list cleanly in JSX?",
    "code": "const products = [\n  { id: 1, name: \"Shirt\", inStock: true },\n  { id: 2, name: \"Shoes\", inStock: false }\n];",
    "options": [
      "`{products.filter(p => p.inStock).map(p => <ProductCard key={p.id} product={p} />)}`",
      "`{products.map(p => p.inStock && <ProductCard key={p.id} />)}` (which leaves false values in array)",
      "`{products.forEach(p => ...)}`",
      "`{filterMap(products)}`"
    ],
    "correctAnswer": 0,
    "explanation": "Chaining `.filter(...).map(...)` first narrows the dataset to matching items and then converts them to JSX, producing a clean array of elements.",
    "tip": "Chain `.filter().map()` to render a filtered subset of data."
  },
  {
    "id": "r19-m8-11",
    "topicId": "react-lists-keys",
    "topicName": "Module 8: Rendering Lists and Keys",
    "question": "What is the recommended fallback if your dataset items have no unique ID property?",
    "code": null,
    "options": [
      "Generate stable IDs upon data creation/fetch (e.g. `crypto.randomUUID()`), or use a unique natural key (like a unique email/slug/ISBN).",
      "Use `key={Math.random()}` on every render.",
      "Leave `key` off completely.",
      "Convert the array to a string."
    ],
    "correctAnswer": 0,
    "explanation": "If backend data lacks IDs, assign stable UUIDs when data is first loaded/created, or combine unique fields (`${item.category}-${item.slug}`).",
    "tip": "Add IDs to data when fetched rather than generating random keys in JSX."
  },
  {
    "id": "r19-m8-12",
    "topicId": "react-lists-keys",
    "topicName": "Module 8: Rendering Lists and Keys",
    "question": "When IS it acceptable to use array index as a key?",
    "code": null,
    "options": [
      "When the list is static (never filtered, sorted, reordered, or added/deleted from) AND items have no IDs.",
      "Whenever you want to save time.",
      "In all form input lists.",
      "Never under any circumstances in JavaScript."
    ],
    "correctAnswer": 0,
    "explanation": "Index keys are only safe if: 1) The list and items are completely static; 2) The list will never be reordered, filtered, or mutated; 3) Items have no local state (like input fields).",
    "tip": "Index keys are only safe for static, unchanging read-only lists."
  },
  {
    "id": "r19-m8-13",
    "topicId": "react-lists-keys",
    "topicName": "Module 8: Rendering Lists and Keys",
    "question": "How can changing a component's `key` force React to reset its state completely?",
    "code": "<QuestionForm key={currentQuestionId} />",
    "options": [
      "When the `key` changes, React treats the component as a completely new identity, unmounting the old instance (resetting all its internal state) and mounting a brand new fresh instance.",
      "It throws an error.",
      "It preserves the old state indefinitely.",
      "It disables the question form."
    ],
    "correctAnswer": 0,
    "explanation": "Changing a component's `key` is a powerful React pattern: it signals to React that the component identity has changed, forcing a clean unmount and remount with pristine initial state.",
    "tip": "Pass `key={itemId}` to force a form or component to reset its internal state when the item changes."
  },
  {
    "id": "r19-m9-01",
    "topicId": "react-forms",
    "topicName": "Module 9: Forms & Controlled Inputs",
    "question": "What is a 'Controlled Component' in React forms?",
    "code": "<input type=\"text\" value={name} onChange={(e) => setName(e.target.value)} />",
    "options": [
      "A form input whose current value is driven by React State, making React state the 'single source of truth' for the input.",
      "A form that requires password authentication to view.",
      "An input that is disabled by CSS.",
      "An input stored on a remote database."
    ],
    "correctAnswer": 0,
    "explanation": "In a controlled component, form input data is handled by a React component via `value={state}` and `onChange={setter}`. The UI input always reflects React state.",
    "tip": "Controlled component = React state controls the input value."
  },
  {
    "id": "r19-m9-02",
    "topicId": "react-forms",
    "topicName": "Module 9: Forms & Controlled Inputs",
    "question": "What is an 'Uncontrolled Component' in React?",
    "code": "const inputRef = useRef(null);\n// <input type=\"text\" ref={inputRef} />",
    "options": [
      "A form input that maintains its own internal DOM state; React reads its value on-demand using a `useRef()` reference or standard form submission.",
      "An input with broken validation.",
      "An input without an HTML tag.",
      "A form that submits automatically every 10 seconds."
    ],
    "correctAnswer": 0,
    "explanation": "Uncontrolled components let the DOM handle form data internally. React queries values when needed (e.g., on submit) using `ref.current.value`.",
    "tip": "Controlled = `useState`; Uncontrolled = `useRef` or `FormData`."
  },
  {
    "id": "r19-m9-03",
    "topicId": "react-forms",
    "topicName": "Module 9: Forms & Controlled Inputs",
    "question": "What causes the React warning: 'A component is changing an uncontrolled input to be controlled'?",
    "code": "// Warning trigger:\nconst [name, setName] = useState(undefined);\nreturn <input value={name} onChange={...} />;",
    "options": [
      "Initializing input state to `undefined` (or omitting initial state), causing the input to mount as uncontrolled, and later passing a defined string which turns it into a controlled input.",
      "Using double quotes instead of single quotes.",
      "Typing numbers into a text input.",
      "Using CSS classes."
    ],
    "correctAnswer": 0,
    "explanation": "If `value` is initially `undefined`, React treats the input as uncontrolled. When state updates to a string, React warns about switching. Always initialize text state with an empty string: `useState('')`.",
    "tip": "Always initialize string input state with `useState('')`, NEVER `useState(undefined)`."
  },
  {
    "id": "r19-m9-04",
    "topicId": "react-forms",
    "topicName": "Module 9: Forms & Controlled Inputs",
    "question": "How do you manage multiple inputs with a single state object and a single `onChange` handler?",
    "code": "const [formData, setFormData] = useState({ username: \"\", email: \"\" });\n\nconst handleChange = (e) => {\n  const { name, value } = e.target;\n  setFormData(prev => ({\n    ...prev,\n    [name]: value\n  }));\n};",
    "options": [
      "Give each `<input>` a `name` matching the state key, and use computed property names `[name]: value` inside the setter.",
      "Create 50 separate functions.",
      "Use `eval()` on input values.",
      "React requires a separate `useState` for every single input."
    ],
    "correctAnswer": 0,
    "explanation": "Using `[e.target.name]: e.target.value` allows one clean handler to update any field in a multi-input form object dynamically.",
    "tip": "Single handler for all inputs: `setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))`."
  },
  {
    "id": "r19-m9-05",
    "topicId": "react-forms",
    "topicName": "Module 9: Forms & Controlled Inputs",
    "question": "How do you control a `<select>` dropdown in React?",
    "code": "<select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>\n  <option value=\"javascript\">JavaScript</option>\n  <option value=\"react\">React</option>\n</select>",
    "options": [
      "Place the `value` prop directly on the `<select>` tag matching the selected option value.",
      "Add `selected` attribute to individual `<option>` tags manually.",
      "Use `checked` on the `<select>` tag.",
      "Dropdowns cannot be controlled in React."
    ],
    "correctAnswer": 0,
    "explanation": "In React, instead of setting `selected` on `<option>`, you set `value={selectedOption}` on the root `<select>` tag.",
    "tip": "Set `value` directly on the `<select>` element in React."
  },
  {
    "id": "r19-m9-06",
    "topicId": "react-forms",
    "topicName": "Module 9: Forms & Controlled Inputs",
    "question": "How is `<textarea>` controlled in React compared to traditional HTML?",
    "code": "<textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />",
    "options": [
      "React uses the `value` prop on `<textarea>` (just like a text input); traditional HTML uses children `<textarea>text</textarea>`.",
      "React requires textareas to be wrapped in `<pre>` tags.",
      "Textareas cannot accept `onChange`.",
      "There is no difference."
    ],
    "correctAnswer": 0,
    "explanation": "In HTML, textareas use inner text `<textarea>content</textarea>`. In React, `<textarea value={text} onChange={...} />` uses the standard `value` prop.",
    "tip": "In React, `<textarea>` uses the `value` prop just like `<input>`."
  },
  {
    "id": "r19-m9-07",
    "topicId": "react-forms",
    "topicName": "Module 9: Forms & Controlled Inputs",
    "question": "How do you handle a Radio Button group in React?",
    "code": "<input\n  type=\"radio\"\n  name=\"mode\"\n  value=\"practice\"\n  checked={mode === \"practice\"}\n  onChange={(e) => setMode(e.target.value)}\n/>",
    "options": [
      "Set `name` to group them, and bind `checked={state === optionValue}` with `onChange` setting the new value.",
      "Use `selected={true}`",
      "Radio buttons must use `useRef`.",
      "Radio buttons cannot be controlled."
    ],
    "correctAnswer": 0,
    "explanation": "Radio buttons are grouped by `name`. Each option evaluates `checked={mode === value}` to determine its active state.",
    "tip": "Radio button pattern: `checked={selectedOption === value}`."
  },
  {
    "id": "r19-m9-08",
    "topicId": "react-forms",
    "topicName": "Module 9: Forms & Controlled Inputs",
    "question": "What is instant client-side validation in controlled forms?",
    "code": "const isNameValid = name.trim().length >= 3;\nconst showError = name.length > 0 && !isNameValid;",
    "options": [
      "Validating input values on every keystroke (`onChange`) and displaying immediate feedback/error messages or disabling the submit button.",
      "Sending form data to an email server on every keystroke.",
      "Using HTML5 `required` attribute only.",
      "Validating forms using CSS selectors."
    ],
    "correctAnswer": 0,
    "explanation": "Controlled components enable real-time validation: on every keystroke, state updates and validation logic can conditionally show helper text or enable/disable buttons.",
    "tip": "Controlled inputs enable real-time inline validation and dynamic submit button disabling."
  },
  {
    "id": "r19-m9-09",
    "topicId": "react-forms",
    "topicName": "Module 9: Forms & Controlled Inputs",
    "question": "How do you extract data from a form using the native `FormData` API in React?",
    "code": "function handleSubmit(e) {\n  e.preventDefault();\n  const formData = new FormData(e.currentTarget);\n  const candidateName = formData.get(\"candidateName\");\n}",
    "options": [
      "Pass `e.currentTarget` to `new FormData(formElement)` and retrieve inputs by their `name` attributes via `formData.get('name')` or `Object.fromEntries(formData)`.",
      "Use `document.form.all`",
      "FormData only works in PHP.",
      "FormData requires a paid plugin."
    ],
    "correctAnswer": 0,
    "explanation": "`new FormData(form)` is a modern, native browser API that extracts all named input fields from a form without needing individual `useState` hooks.",
    "tip": "`Object.fromEntries(new FormData(e.currentTarget))` converts all form inputs into a JS object instantly."
  },
  {
    "id": "r19-m9-10",
    "topicId": "react-forms",
    "topicName": "Module 9: Forms & Controlled Inputs",
    "question": "Why is `<input type=\"file\" />` always an UNCONTROLLED component in React?",
    "code": null,
    "options": [
      "Because its value is read-only for browser security reasons (JavaScript cannot programmatically set a file path into a file input).",
      "Because React does not support file uploads.",
      "Because files must be converted to numbers.",
      "Because files are not supported in HTML5."
    ],
    "correctAnswer": 0,
    "explanation": "Browser security prevents JavaScript from programmatically setting file input values. Therefore, `<input type='file' />` is always uncontrolled in React and read via `ref` or `e.target.files`.",
    "tip": "File inputs are always uncontrolled: access files via `e.target.files[0]`."
  },
  {
    "id": "r19-m9-11",
    "topicId": "react-forms",
    "topicName": "Module 9: Forms & Controlled Inputs",
    "question": "How do you reset a controlled form back to its initial empty state after submission?",
    "code": null,
    "options": [
      "Call the state setter with the initial empty state values (e.g. `setFormData(initialState)`).",
      "Reload the browser with `location.reload()`.",
      "Delete the `<form>` DOM node.",
      "Controlled forms cannot be reset."
    ],
    "correctAnswer": 0,
    "explanation": "Since UI inputs are driven by React state, resetting the state variables (`setName(''); setEmail('');`) immediately clears the visible input fields.",
    "tip": "Resetting state resets controlled form inputs automatically."
  },
  {
    "id": "r19-m9-12",
    "topicId": "react-forms",
    "topicName": "Module 9: Forms & Controlled Inputs",
    "question": "What is the benefit of disabling a submit button while form submission is in progress (`isSubmitting`)?",
    "code": "<button type=\"submit\" disabled={isSubmitting}>\n  {isSubmitting ? \"Submitting Exam...\" : \"Start Quiz\"}\n</button>",
    "options": [
      "It prevents duplicate accidental form submissions (double-clicks) and gives clear visual loading feedback to the user.",
      "It speeds up internet connection speed.",
      "It cancels all network timeouts.",
      "It deletes the candidate name."
    ],
    "correctAnswer": 0,
    "explanation": "Disabling buttons during pending asynchronous operations prevents duplicate API requests and race conditions while providing good UX.",
    "tip": "Always disable submit buttons during active network requests."
  },
  {
    "id": "r19-m9-13",
    "topicId": "react-forms",
    "topicName": "Module 9: Forms & Controlled Inputs",
    "question": "How does React 19 modernize form submissions with Form Actions?",
    "code": "<form action={handleSubmitAction}>\n  <input name=\"query\" />\n  <button type=\"submit\">Search</button>\n</form>",
    "options": [
      "React 19 extends the HTML `action` prop on `<form>` to accept async functions (Actions), automatically managing form submission lifecycles, pending states, and form resets.",
      "React 19 deletes form tags.",
      "React 19 requires forms to be written in JSON.",
      "React 19 only supports GET requests."
    ],
    "correctAnswer": 0,
    "explanation": "React 19 introduces native support for async functions in the `action` and `formAction` props, streamlining form handling without requiring manual `e.preventDefault()`.",
    "tip": "React 19 Actions let you pass async functions directly to `<form action={asyncFn}>`."
  },
  {
    "id": "r19-m10-01",
    "topicId": "react-useeffect",
    "topicName": "Module 10: The useEffect Hook",
    "question": "What is a 'Side Effect' in React components, and why is `useEffect` used for them?",
    "code": null,
    "options": [
      "Operations that interact with systems outside of React's pure render calculation (e.g. data fetching, setting timers, manual DOM manipulation, subscriptions, localStorage sync).",
      "A bug that causes CSS styles to disappear.",
      "Mutating props inside a component.",
      "A database query on the server only."
    ],
    "correctAnswer": 0,
    "explanation": "Rendering must stay a pure calculation. Side effects (API calls, timers, event listeners) belong inside `useEffect`, which runs after React has updated the DOM.",
    "tip": "Put side effects in `useEffect` or event handlers, never directly in the render body."
  },
  {
    "id": "r19-m10-02",
    "topicId": "react-useeffect",
    "topicName": "Module 10: The useEffect Hook",
    "question": "When does a `useEffect` with an EMPTY dependency array (`[]`) execute?",
    "code": "useEffect(() => {\n  console.log(\"Effect executed!\");\n}, []);",
    "options": [
      "Only ONCE after the initial component MOUNT (when it first appears on screen).",
      "After every single render and re-render.",
      "Only when the component is unmounted.",
      "Every 5 seconds."
    ],
    "correctAnswer": 0,
    "explanation": "An empty dependency array `[]` tells React that the effect doesn't depend on any values from props or state, so it only runs once after the initial render (mount).",
    "tip": "`useEffect(fn, [])` = Run once on mount."
  },
  {
    "id": "r19-m10-03",
    "topicId": "react-useeffect",
    "topicName": "Module 10: The useEffect Hook",
    "question": "When does a `useEffect` with SPECIFIC dependencies (`[propA, stateB]`) execute?",
    "code": "useEffect(() => {\n  fetchQuestionDetails(questionId);\n}, [questionId]);",
    "options": [
      "On initial mount, AND after any re-render where at least one of the specified dependency values has changed since the previous render.",
      "Only when the browser tab is resized.",
      "Only if `questionId` becomes null.",
      "Continuously in an infinite loop."
    ],
    "correctAnswer": 0,
    "explanation": "React performs an `Object.is` comparison on each dependency. If any dependency value has changed since the last render, the effect is re-run.",
    "tip": "`useEffect(fn, [dep])` = Run on mount and whenever `dep` changes."
  },
  {
    "id": "r19-m10-04",
    "topicId": "react-useeffect",
    "topicName": "Module 10: The useEffect Hook",
    "question": "When does a `useEffect` with NO dependency array (`useEffect(fn)`) execute?",
    "code": "useEffect(() => {\n  console.log(\"Render occurred\");\n});",
    "options": [
      "After EVERY single render (initial mount AND every subsequent re-render).",
      "Never.",
      "Only on unmount.",
      "Only when an error is thrown."
    ],
    "correctAnswer": 0,
    "explanation": "Without a dependency array, `useEffect` runs unconditionally after every render. This is rarely what you want and can cause severe performance issues if state is updated inside.",
    "tip": "Be careful: omitting the dependency array runs the effect after EVERY render."
  },
  {
    "id": "r19-m10-05",
    "topicId": "react-useeffect",
    "topicName": "Module 10: The useEffect Hook",
    "question": "What is the Cleanup Function in `useEffect`, and when does React call it?",
    "code": "useEffect(() => {\n  const timer = setInterval(() => setTime(t => t - 1), 1000);\n  return () => {\n    clearInterval(timer);\n  };\n}, []);",
    "options": [
      "A function returned from the effect that runs before the effect re-runs (if dependencies changed) AND when the component UNMOUNTS, preventing memory leaks.",
      "A function that cleans the browser cache.",
      "A function that reloads the page.",
      "A function that deletes state."
    ],
    "correctAnswer": 0,
    "explanation": "Returning a function from `useEffect` registers a cleanup handler. React calls it before re-running the effect and when the component unmounts to clear timers, abort requests, and remove listeners.",
    "tip": "Always return a cleanup function to clean up timers, subscriptions, and event listeners."
  },
  {
    "id": "r19-m10-06",
    "topicId": "react-useeffect",
    "topicName": "Module 10: The useEffect Hook",
    "question": "Why should you NOT directly mark the `useEffect` callback as `async` (`useEffect(async () => { ... })`)?",
    "code": "// INCORRECT:\nuseEffect(async () => {\n  const data = await fetchQuiz();\n}, []);",
    "options": [
      "Because an `async` function implicitly returns a Promise, but React expects `useEffect` to return either nothing (`undefined`) or a synchronous cleanup function.",
      "Because async functions are not supported in React.",
      "Because Promises cannot be used in components.",
      "Because it deletes all state."
    ],
    "correctAnswer": 0,
    "explanation": "React requires `useEffect` to return a cleanup function (or undefined). Async functions return a Promise, causing React to warn. Instead, declare an async function INSIDE the effect: `useEffect(() => { async function run() { ... } run(); }, [])`.",
    "tip": "Declare async functions INSIDE the effect: `useEffect(() => { const load = async () => { ... }; load(); }, [])`."
  },
  {
    "id": "r19-m10-07",
    "topicId": "react-useeffect",
    "topicName": "Module 10: The useEffect Hook",
    "question": "What causes an Infinite Render Loop with `useEffect`?",
    "code": "useEffect(() => {\n  setCount(count + 1); // State update inside effect without deps or with count in deps\n});",
    "options": [
      "Updating a state variable inside an effect that either has no dependency array or includes that state variable in its dependencies, triggering: Render -> Effect -> State Update -> Re-render -> Effect -> Infinite Loop.",
      "Using `const` instead of `let`.",
      "Running the app in dark mode.",
      "Having more than 3 components."
    ],
    "correctAnswer": 0,
    "explanation": "Updating state triggers a re-render. If the effect runs after every render, it triggers another state update, causing an infinite loop until the browser crashes or React throws 'Maximum update depth exceeded'.",
    "tip": "Never update state inside `useEffect` without careful dependency control."
  },
  {
    "id": "r19-m10-08",
    "topicId": "react-useeffect",
    "topicName": "Module 10: The useEffect Hook",
    "question": "Why does `useEffect` run TWICE on initial mount in React 18 & 19 development mode under `<StrictMode>`?",
    "code": null,
    "options": [
      "React intentionally mounts, unmounts, and re-mounts components in development to help developers catch missing cleanup functions and unsafe side effects.",
      "It is a known bug in Vite.",
      "Because your computer has multiple CPU cores.",
      "It indicates an error in your code."
    ],
    "correctAnswer": 0,
    "explanation": "Strict Mode simulates immediate unmounting and remounting in development to verify that cleanup functions work correctly (e.g. canceling subscriptions, clearing timers). In production, it runs only once.",
    "tip": "Strict Mode double-invoke in development verifies your cleanup logic is resilient."
  },
  {
    "id": "r19-m10-09",
    "topicId": "react-useeffect",
    "topicName": "Module 10: The useEffect Hook",
    "question": "How do you synchronize component state with `localStorage` using `useEffect`?",
    "code": "const [scoreHistory, setScoreHistory] = useState(() => {\n  const saved = localStorage.getItem(\"scores\");\n  return saved ? JSON.parse(saved) : [];\n});\n\nuseEffect(() => {\n  localStorage.setItem(\"scores\", JSON.stringify(scoreHistory));\n}, [scoreHistory]);",
    "options": [
      "Read from `localStorage` once during lazy initial state, and write to `localStorage` inside `useEffect` whenever `scoreHistory` updates.",
      "Call `localStorage.setItem` directly inside the JSX return.",
      "Store the entire React component in `localStorage`.",
      "`localStorage` cannot be used with React."
    ],
    "correctAnswer": 0,
    "explanation": "This is the classic persistence pattern: read on mount (or in `useState` initializer), and sync changes in `useEffect` when state changes.",
    "tip": "Sync to `localStorage` inside `useEffect` keyed on the state dependency."
  },
  {
    "id": "r19-m10-10",
    "topicId": "react-useeffect",
    "topicName": "Module 10: The useEffect Hook",
    "question": "How do you attach and clean up a global window event listener (like keyboard navigation) in `useEffect`?",
    "code": "useEffect(() => {\n  const handleKeyDown = (e) => {\n    if (e.key === \"ArrowRight\") nextQuestion();\n  };\n  window.addEventListener(\"keydown\", handleKeyDown);\n  return () => {\n    window.removeEventListener(\"keydown\", handleKeyDown);\n  };\n}, [nextQuestion]);",
    "options": [
      "Add the listener in the effect body with `window.addEventListener`, and remove it in the returned cleanup function with `window.removeEventListener`.",
      "Listeners on `window` are automatically deleted by the browser.",
      "Global listeners cannot be used in React.",
      "Add the listener directly inside the component body."
    ],
    "correctAnswer": 0,
    "explanation": "Attaching listeners to `window` or `document` requires explicit removal in the effect cleanup function to prevent memory leaks and duplicate handlers.",
    "tip": "Always pair `window.addEventListener` with `window.removeEventListener` in the cleanup function."
  },
  {
    "id": "r19-m10-11",
    "topicId": "react-useeffect",
    "topicName": "Module 10: The useEffect Hook",
    "question": "How do you handle race conditions in `useEffect` data fetching when parameters change quickly?",
    "code": "useEffect(() => {\n  let isSubscribed = true;\n  fetchData(id).then(data => {\n    if (isSubscribed) setData(data);\n  });\n  return () => {\n    isSubscribed = false;\n  };\n}, [id]);",
    "options": [
      "Use an `isSubscribed` boolean flag (or `AbortController`) inside the effect and flip it to `false` in the cleanup function so stale responses from previous requests are discarded.",
      "Wait 10 seconds between requests.",
      "Disable the network card.",
      "Make requests synchronous."
    ],
    "correctAnswer": 0,
    "explanation": "If `id` changes before an earlier request resolves, the older response might arrive later and overwrite newer data. An active flag or `AbortController` ignores outdated responses.",
    "tip": "Use a cleanup boolean or `AbortController` to ignore stale fetch responses."
  },
  {
    "id": "r19-m10-12",
    "topicId": "react-useeffect",
    "topicName": "Module 10: The useEffect Hook",
    "question": "Why should you NOT use `useEffect` for data transformations that can be computed during render?",
    "code": "// BAD:\nconst [items, setItems] = useState([]);\nconst [count, setCount] = useState(0);\nuseEffect(() => { setCount(items.length); }, [items]);\n\n// GOOD:\nconst count = items.length;",
    "options": [
      "Using `useEffect` for derived data causes an unnecessary second re-render, introduces state synchronization bugs, and adds needless boilerplate.",
      "Because `useEffect` only runs on mobile devices.",
      "Because `items.length` is not accessible in React.",
      "React will crash."
    ],
    "correctAnswer": 0,
    "explanation": "Calculate derived data directly during render. Using `useEffect` to set state introduces unnecessary render passes and risks state inconsistency.",
    "tip": "You don't need `useEffect` to transform data: compute it directly during render."
  },
  {
    "id": "r19-m10-13",
    "topicId": "react-useeffect",
    "topicName": "Module 10: The useEffect Hook",
    "question": "What is the exhaustive-deps ESLint rule in React?",
    "code": null,
    "options": [
      "A lint rule that ensures all reactive values (props, state, and functions derived from them) used inside `useEffect` are included in the dependency array.",
      "A rule that forbids using `useEffect`.",
      "A rule that requires at least 10 dependencies.",
      "A rule for CSS dependencies."
    ],
    "correctAnswer": 0,
    "explanation": "The `exhaustive-deps` rule ensures your effects don't capture stale closures by verifying that every variable from component scope referenced in the effect is listed in `[]`.",
    "tip": "Always obey the `exhaustive-deps` linter rule to prevent stale closure bugs."
  },
  {
    "id": "r19-m10-14",
    "topicId": "react-useeffect",
    "topicName": "Module 10: The useEffect Hook",
    "question": "How does `useEffect` differ from `useLayoutEffect`?",
    "code": null,
    "options": [
      "`useEffect` runs ASYNCHRONOUSLY after the browser has painted the screen (non-blocking UI); `useLayoutEffect` runs SYNCHRONOUSLY before the browser paints, used for measuring DOM dimensions.",
      "`useLayoutEffect` is for CSS grid only.",
      "`useEffect` is deprecated.",
      "They are identical."
    ],
    "correctAnswer": 0,
    "explanation": "`useEffect` is deferred until after paint so it doesn't block the UI. `useLayoutEffect` fires synchronously after DOM mutation but before paint, ideal for measuring DOM layout to avoid visual flicker.",
    "tip": "Default to `useEffect`. Use `useLayoutEffect` only if you need to measure DOM before paint."
  },
  {
    "id": "r19-m11-01",
    "topicId": "react-useref-usecontext",
    "topicName": "Module 11: useRef and useContext",
    "question": "What are the TWO primary use cases for the `useRef` hook in React?",
    "code": null,
    "options": [
      "1. Accessing and interacting directly with DOM elements (e.g., `.focus()`, `.scrollIntoView()`). 2. Storing mutable values that persist across renders WITHOUT triggering a re-render when changed.",
      "1. Styling CSS elements. 2. Fetching API data.",
      "1. Creating global Redux stores. 2. Compiling WebAssembly.",
      "`useRef` can only be used for timer IDs."
    ],
    "correctAnswer": 0,
    "explanation": "`useRef(initialValue)` returns a mutable object `{ current: initialValue }`. Mutating `ref.current` does NOT trigger a component re-render. It is also used to attach direct references to DOM nodes.",
    "tip": "Use `useRef` for DOM access and for holding values that shouldn't cause a re-render when changed."
  },
  {
    "id": "r19-m11-02",
    "topicId": "react-useref-usecontext",
    "topicName": "Module 11: useRef and useContext",
    "question": "How do you programmatically focus an input field on button click using `useRef`?",
    "code": "function SearchBar() {\n  const inputRef = useRef(null);\n  \n  const handleFocus = () => {\n    inputRef.current.focus();\n  };\n  \n  return (\n    <>\n      <input ref={inputRef} type=\"text\" />\n      <button onClick={handleFocus}>Focus Input</button>\n    </>\n  );\n}",
    "options": [
      "Pass `ref={inputRef}` to the `<input>` element and call `inputRef.current.focus()` inside the handler.",
      "Call `document.getElementById('input').focus()`",
      "Pass `focus={true}` prop to the input.",
      "Inputs cannot be focused in React."
    ],
    "correctAnswer": 0,
    "explanation": "Attaching `ref={inputRef}` gives `inputRef.current` direct access to the underlying input DOM element when mounted, allowing native DOM methods like `.focus()`, `.select()`, or `.scrollIntoView()`.",
    "tip": "`ref={myRef}` attaches the DOM element to `myRef.current`."
  },
  {
    "id": "r19-m11-03",
    "topicId": "react-useref-usecontext",
    "topicName": "Module 11: useRef and useContext",
    "question": "How does mutating `ref.current` differ from calling a `useState` setter?",
    "code": "const countRef = useRef(0);\ncountRef.current += 1; // Does this re-render?",
    "options": [
      "Mutating `ref.current` is synchronous and does NOT trigger a component re-render; calling a `useState` setter schedules a re-render of the component.",
      "Mutating `ref.current` triggers two re-renders.",
      "Both trigger identical re-renders.",
      "`ref.current` is read-only and cannot be mutated."
    ],
    "correctAnswer": 0,
    "explanation": "`useRef` holds a plain JavaScript object whose `current` property can be modified silently without notifying React to re-render. State changes tell React to re-render the UI.",
    "tip": "If a value needs to be displayed on screen, use State; if it's internal bookkeeping, use Ref."
  },
  {
    "id": "r19-m11-04",
    "topicId": "react-useref-usecontext",
    "topicName": "Module 11: useRef and useContext",
    "question": "What problem does React Context (`createContext` + `useContext`) solve?",
    "code": null,
    "options": [
      "It allows sharing data (like theme, authenticated user, quiz settings) globally across the entire component tree without having to manually pass props through intermediate levels (eliminating Prop Drilling).",
      "It replaces JavaScript with TypeScript.",
      "It connects React to backend SQL databases directly.",
      "It prevents components from unmounting."
    ],
    "correctAnswer": 0,
    "explanation": "Context provides a way to pass data through the component tree without having to pass props down manually at every level.",
    "tip": "Context is ideal for global or semi-global data: themes, auth user, language, active exam state."
  },
  {
    "id": "r19-m11-05",
    "topicId": "react-useref-usecontext",
    "topicName": "Module 11: useRef and useContext",
    "question": "What are the three core steps to implement and consume React Context?",
    "code": "// 1. Create: const ThemeContext = createContext(\"light\");\n// 2. Provide: <ThemeContext.Provider value=\"dark\"><App /></ThemeContext.Provider>\n// 3. Consume: const theme = useContext(ThemeContext);",
    "options": [
      "1. `createContext(defaultValue)` to create the context; 2. `<Context.Provider value={...}>` to wrap the subtree; 3. `useContext(Context)` in any descendant to read the value.",
      "1. Install Redux. 2. Write reducers. 3. Connect to DOM.",
      "1. Set `window.context`. 2. Read `window.context`.",
      "Context requires class components only."
    ],
    "correctAnswer": 0,
    "explanation": "React Context uses a 3-part pattern: creation (`createContext`), provision (`Context.Provider`), and consumption (`useContext`).",
    "tip": "Create Context -> Provide value at top -> Consume with `useContext` anywhere below."
  },
  {
    "id": "r19-m11-06",
    "topicId": "react-useref-usecontext",
    "topicName": "Module 11: useRef and useContext",
    "question": "What happens to components consuming `useContext(MyContext)` when the Provider's `value` prop changes?",
    "code": null,
    "options": [
      "All consuming descendant components automatically re-render with the latest context value.",
      "The entire browser window reloads.",
      "Only the root component re-renders.",
      "Consuming components must manually call `this.update()`."
    ],
    "correctAnswer": 0,
    "explanation": "Whenever the `value` passed to a Context Provider changes, every component that calls `useContext(MyContext)` will re-render to reflect the new data.",
    "tip": "Context consumers re-render automatically when the Provider value changes."
  },
  {
    "id": "r19-m11-07",
    "topicId": "react-useref-usecontext",
    "topicName": "Module 11: useRef and useContext",
    "question": "How has passing `ref` to custom components changed in React 19 compared to older React versions?",
    "code": "// React 19:\nfunction CustomInput({ placeholder, ref }) {\n  return <input ref={ref} placeholder={placeholder} />;\n}",
    "options": [
      "In React 19, `ref` is now a standard prop on function components, eliminating the need for the verbose `forwardRef()` wrapper!",
      "React 19 deprecated refs completely.",
      "Refs can only be used on `<div>` tags in React 19.",
      "Refs must now be created with `new Ref()`."
    ],
    "correctAnswer": 0,
    "explanation": "A major ergonomic upgrade in React 19: function components now accept `ref` directly as a regular prop in their parameter list (`function Input({ ref, ...props })`), making `React.forwardRef` obsolete.",
    "tip": "In React 19, you can access `ref` directly as a prop without `forwardRef`!"
  },
  {
    "id": "r19-m11-08",
    "topicId": "react-useref-usecontext",
    "topicName": "Module 11: useRef and useContext",
    "question": "What is the defaultValue passed to `createContext(defaultValue)` used for?",
    "code": "const UserContext = createContext({ name: \"Guest\", role: \"Viewer\" });",
    "options": [
      "It is only used as a fallback if a component calls `useContext(UserContext)` WITHOUT having any matching `<UserContext.Provider>` ancestor above it in the tree.",
      "It sets the default database table name.",
      "It is rendered on the 404 page.",
      "It sets CSS colors."
    ],
    "correctAnswer": 0,
    "explanation": "The default value in `createContext(defaultValue)` is only read when a consumer has no matching Provider above it in the component tree. It is helpful for testing components in isolation.",
    "tip": "The default value in `createContext()` is a fallback for unprovided trees."
  },
  {
    "id": "r19-m11-09",
    "topicId": "react-useref-usecontext",
    "topicName": "Module 11: useRef and useContext",
    "question": "How do you store a previous prop or state value across renders using `useRef`?",
    "code": "function Counter({ count }) {\n  const prevCountRef = useRef();\n  \n  useEffect(() => {\n    prevCountRef.current = count;\n  });\n  \n  const prevCount = prevCountRef.current;\n  return <div>Now: {count}, before: {prevCount}</div>;\n}",
    "options": [
      "Read `prevCountRef.current` during render, and update `prevCountRef.current = count` inside `useEffect` (which runs after render).",
      "Set `count` in cookies.",
      "Pass `prevCount` as a prop to itself.",
      "Previous values cannot be stored in React."
    ],
    "correctAnswer": 0,
    "explanation": "Because `useEffect` executes after the render is committed, reading `ref.current` during render yields the previous render's value, and the effect then updates it for next time.",
    "tip": "Use `useRef` + `useEffect` to track previous prop or state values."
  },
  {
    "id": "r19-m11-10",
    "topicId": "react-useref-usecontext",
    "topicName": "Module 11: useRef and useContext",
    "question": "How should a custom Context Provider hook be structured for clean encapsulation?",
    "code": "export function useQuiz() {\n  const context = useContext(QuizContext);\n  if (!context) {\n    throw new Error(\"useQuiz must be used within a QuizProvider\");\n  }\n  return context;\n}",
    "options": [
      "Create a custom hook (e.g. `useQuiz()`) that wraps `useContext` and throws a descriptive error if used outside its Provider.",
      "Store context directly in `localStorage`.",
      "Wrap every single component in its own separate Provider.",
      "Custom hooks cannot use `useContext`."
    ],
    "correctAnswer": 0,
    "explanation": "Creating a dedicated custom hook (`useQuiz`) encapsulates context access and provides immediate developer feedback if someone forgets the Provider wrapper.",
    "tip": "Always create a custom hook (`useAuth()`, `useTheme()`) to wrap your `useContext` calls."
  },
  {
    "id": "r19-m11-11",
    "topicId": "react-useref-usecontext",
    "topicName": "Module 11: useRef and useContext",
    "question": "When is React Context NOT the best choice for state management?",
    "code": null,
    "options": [
      "For extremely high-frequency state updates (e.g., mouse position 60fps animations or rapid typing in complex forms), because changing Provider value re-renders all consumers.",
      "For user authentication info.",
      "For UI theme switching.",
      "For language localization."
    ],
    "correctAnswer": 0,
    "explanation": "Context is best for low-to-medium frequency updates (auth, theme, app settings). High-frequency updates (e.g. mouse tracking, animations) can cause excessive consumer re-renders.",
    "tip": "Use Context for global low-frequency data; use local state or specialized stores for high-frequency data."
  },
  {
    "id": "r19-m11-12",
    "topicId": "react-useref-usecontext",
    "topicName": "Module 11: useRef and useContext",
    "question": "Can multiple Context Providers be nested together?",
    "code": "<AuthProvider>\n  <ThemeProvider>\n    <QuizProvider>\n      <App />\n    </QuizProvider>\n  </ThemeProvider>\n</AuthProvider>",
    "options": [
      "Yes, providers can be freely nested, allowing components to consume values from multiple independent contexts cleanly.",
      "No, React only allows one Provider per application.",
      "Only two providers can be nested.",
      "Nesting providers throws a SyntaxError."
    ],
    "correctAnswer": 0,
    "explanation": "React apps commonly compose multiple focused providers (e.g. `AuthProvider`, `ThemeProvider`, `QuizProvider`) to separate concerns cleanly.",
    "tip": "Compose multiple modular providers at the root of your application."
  },
  {
    "id": "r19-m11-13",
    "topicId": "react-useref-usecontext",
    "topicName": "Module 11: useRef and useContext",
    "question": "In React 19, how can `<Context>` be used directly as a provider without `.Provider`?",
    "code": "<ThemeContext value=\"dark\">\n  <App />\n</ThemeContext>",
    "options": [
      "React 19 allows rendering `<ThemeContext value={...}>` directly as a Provider, making `<ThemeContext.Provider>` optional syntactic sugar.",
      "React 19 deprecated Context.",
      "It requires a Babel plugin.",
      "It only works with numbers."
    ],
    "correctAnswer": 0,
    "explanation": "In React 19, you can now render `<MyContext value={value}>` directly instead of `<MyContext.Provider value={value}>`.",
    "tip": "In React 19, `<MyContext value={...}>` works directly as a provider!"
  },
  {
    "id": "r19-m12-01",
    "topicId": "react-performance",
    "topicName": "Module 12: Performance Basics",
    "question": "What triggers a React component to re-render?",
    "code": null,
    "options": [
      "1. Its internal state changes. 2. Its props change. 3. Its parent component re-renders. 4. A context it consumes changes.",
      "Only when the browser window is resized.",
      "Only when the user clicks a button.",
      "React components re-render every 100 milliseconds automatically."
    ],
    "correctAnswer": 0,
    "explanation": "A component re-renders when: its own state updates, its parent re-renders (unless memoized), a consumed context value changes, or its props change.",
    "tip": "Parent re-rendering triggers all children to re-render by default."
  },
  {
    "id": "r19-m12-02",
    "topicId": "react-performance",
    "topicName": "Module 12: Performance Basics",
    "question": "What is `React.memo()` and how does it optimize component rendering?",
    "code": "const QuestionCard = React.memo(function QuestionCard({ question }) {\n  return <div>{question.text}</div>;\n});",
    "options": [
      "A higher-order component that memoizes a component, skipping re-rendering if its props have not shallowly changed when its parent re-renders.",
      "A hook that stores data in local storage.",
      "A tool to convert components to images.",
      "A compiler that removes CSS."
    ],
    "correctAnswer": 0,
    "explanation": "`React.memo` wraps a component. If the parent re-renders but the props passed to the memoized component are shallowly equal to previous props, React skips re-rendering the child.",
    "tip": "Use `React.memo()` for pure presentational components that re-render frequently with identical props."
  },
  {
    "id": "r19-m12-03",
    "topicId": "react-performance",
    "topicName": "Module 12: Performance Basics",
    "question": "What is the purpose of the `useMemo` hook?",
    "code": "const sortedQuestions = useMemo(() => {\n  return questions.slice().sort((a, b) => a.difficulty - b.difficulty);\n}, [questions]);",
    "options": [
      "To memoize (cache) the RESULT of an expensive calculation so it only recalculates when its dependencies change, rather than on every render.",
      "To create a new state variable.",
      "To fetch data from a server.",
      "To memoize function definitions only."
    ],
    "correctAnswer": 0,
    "explanation": "`useMemo(() => computeValue(a, b), [a, b])` caches the calculated value. It only recomputes when `a` or `b` change, avoiding heavy recalculation during unrelated re-renders.",
    "tip": "Use `useMemo` to cache heavy computation results (like filtering, sorting large datasets)."
  },
  {
    "id": "r19-m12-04",
    "topicId": "react-performance",
    "topicName": "Module 12: Performance Basics",
    "question": "What is the purpose of the `useCallback` hook?",
    "code": "const handleSelect = useCallback((optionIndex) => {\n  setSelectedOption(optionIndex);\n}, []);",
    "options": [
      "To memoize a FUNCTION DEFINITION/REFERENCE between renders, preventing new function instances from being recreated unless dependencies change.",
      "To run a callback after 5 seconds.",
      "To call an API on click.",
      "To convert functions into strings."
    ],
    "correctAnswer": 0,
    "explanation": "In JavaScript, `() => {} !== () => {}` (functions create new references on every render). Passing an inline function to a `React.memo` child breaks memoization. `useCallback` returns a stable function reference.",
    "tip": "Use `useCallback` to pass stable function references to memoized child components."
  },
  {
    "id": "r19-m12-05",
    "topicId": "react-performance",
    "topicName": "Module 12: Performance Basics",
    "question": "What is the relationship between `useMemo` and `useCallback`?",
    "code": null,
    "options": [
      "`useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`; `useCallback` caches a function instance, while `useMemo` caches a return value.",
      "They are two names for the same hook.",
      "`useMemo` is for class components; `useCallback` is for functional components.",
      "`useCallback` can only be used with numbers."
    ],
    "correctAnswer": 0,
    "explanation": "`useCallback(fn, deps)` is syntactic sugar for `useMemo(() => fn, deps)`. `useCallback` caches the function reference itself.",
    "tip": "`useMemo` caches values; `useCallback` caches function references."
  },
  {
    "id": "r19-m12-06",
    "topicId": "react-performance",
    "topicName": "Module 12: Performance Basics",
    "question": "What is Premature Optimization with `useMemo` and `useCallback` and why should it be avoided?",
    "code": null,
    "options": [
      "Overusing `useMemo` and `useCallback` everywhere for trivial computations (like `a + b`), which adds memory overhead and dependency array comparison costs without measurable performance gain.",
      "Writing components without CSS.",
      "Using React 19 instead of React 18.",
      "Running npm install too early."
    ],
    "correctAnswer": 0,
    "explanation": "Hooks have an overhead (memory allocation for closures, dependency array checks). Wrapping trivial one-line expressions in `useMemo` slows down your app rather than speeding it up.",
    "tip": "Profile first! Only apply `useMemo` / `useCallback` when addressing measurable performance bottlenecks."
  },
  {
    "id": "r19-m12-07",
    "topicId": "react-performance",
    "topicName": "Module 12: Performance Basics",
    "question": "What is Code Splitting and Lazy Loading with `React.lazy()` and `<Suspense>`?",
    "code": "const ResultsChart = React.lazy(() => import(\"./ResultsChart\"));\n\n<Suspense fallback={<LoadingSpinner />}>\n  <ResultsChart />\n</Suspense>",
    "options": [
      "Dynamically loading component code chunks only when they are needed/rendered on screen, reducing the initial JavaScript bundle size and speeding up page load time.",
      "Splitting CSS files across 50 folders.",
      "Splitting state into multiple strings.",
      "Disabling images."
    ],
    "correctAnswer": 0,
    "explanation": "`React.lazy` splits heavy components (like charts, rich text editors, admin pages) into separate network bundles loaded on demand, keeping initial bundle download light.",
    "tip": "Use `React.lazy` + `Suspense` for heavy routes or heavy modal components."
  },
  {
    "id": "r19-m12-08",
    "topicId": "react-performance",
    "topicName": "Module 12: Performance Basics",
    "question": "What is the React 19 React Compiler (formerly React Forget)?",
    "code": null,
    "options": [
      "An optimizing build-time compiler that automatically analyzes and memoizes components and values at compile time, eliminating the need to manually write `useMemo`, `useCallback`, and `React.memo`!",
      "A tool that deletes unused JavaScript files.",
      "A server-only framework.",
      "A replacement for HTML."
    ],
    "correctAnswer": 0,
    "explanation": "The React Compiler automatically inserts fine-grained memoization during the build step, achieving optimal performance automatically without manual `useMemo`/`useCallback` boilerplate.",
    "tip": "The React Compiler automatically memoizes components and values at build time."
  },
  {
    "id": "r19-m12-09",
    "topicId": "react-performance",
    "topicName": "Module 12: Performance Basics",
    "question": "How does 'Lifting Content Up' (Component Composition) optimize rendering without `React.memo`?",
    "code": "function ExpensiveTreeContainer({ children }) {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>\n      {children}\n    </div>\n  );\n}",
    "options": [
      "Passing the expensive component tree as `children` means it was created in the parent scope; when `ExpensiveTreeContainer` re-renders, `children` retains its identical JSX element reference, so React skips re-rendering it!",
      "It converts components to CSS.",
      "It deletes child components.",
      "It forces synchronous execution."
    ],
    "correctAnswer": 0,
    "explanation": "Because `children` is created in the outer parent, updating `count` re-renders only `ExpensiveTreeContainer`, skipping re-render of `children` without needing `React.memo`.",
    "tip": "Composing via `children` prop is a zero-cost performance optimization pattern."
  },
  {
    "id": "r19-m12-10",
    "topicId": "react-performance",
    "topicName": "Module 12: Performance Basics",
    "question": "What is React Profiler in React Developer Tools?",
    "code": null,
    "options": [
      "A DevTools profiling tab that records render timings, flamegraphs, and explains exactly 'Why did this component render?' (props changed, state changed, parent rendered).",
      "A tool to inspect SQL queries.",
      "A tool to compress PNG images.",
      "A security scanner."
    ],
    "correctAnswer": 0,
    "explanation": "The React Profiler lets you record user interactions and visualizes component render durations, wasted renders, and exact commit times.",
    "tip": "Use the React DevTools Profiler to find actual render bottlenecks before optimizing."
  },
  {
    "id": "r19-m12-11",
    "topicId": "react-performance",
    "topicName": "Module 12: Performance Basics",
    "question": "Why should creating objects or functions inside component render loops be avoided if passed to memoized children?",
    "code": "// Passing new inline objects/functions:\n<MemoizedCard options={{ theme: 'dark' }} onClick={() => doSomething()} />",
    "options": [
      "Because inline objects `{}` and arrow functions `() => {}` create brand new memory references on every render, causing shallow equality checks in `React.memo` to fail and re-render every time.",
      "Because JavaScript will crash.",
      "Because objects cannot be passed to props.",
      "Because inline functions are illegal in JSX."
    ],
    "correctAnswer": 0,
    "explanation": "`{ theme: 'dark' } !== { theme: 'dark' }` in JavaScript reference comparison. Passing inline object literals or inline arrow functions creates new references, breaking memoization.",
    "tip": "Move static objects outside the component or wrap dynamic objects in `useMemo`."
  },
  {
    "id": "r19-m12-12",
    "topicId": "react-performance",
    "topicName": "Module 12: Performance Basics",
    "question": "What is Virtualization (Windowing) for rendering large lists (e.g. 10,000 questions/items)?",
    "code": null,
    "options": [
      "A technique (used by libraries like `@tanstack/react-virtual`) that renders ONLY the visible subset of items currently inside the viewport window, recycling DOM nodes as the user scrolls.",
      "Rendering components in virtual reality headsets.",
      "Creating 10,000 real DOM nodes at once.",
      "Saving DOM nodes in local storage."
    ],
    "correctAnswer": 0,
    "explanation": "Rendering 10,000 real DOM elements creates severe DOM lag. List virtualization renders only the ~20 visible items on screen, dynamically swapping items during scroll.",
    "tip": "Use virtualization for lists with thousands of items to keep DOM node count tiny."
  },
  {
    "id": "r19-m13-01",
    "topicId": "react-19-features",
    "topicName": "Module 13: What's New in React 19",
    "question": "What are 'Actions' in React 19?",
    "code": null,
    "options": [
      "Async functions used with transitions that automatically handle pending states, optimistic updates, error handling, and sequential form submissions.",
      "Redux action creators from 2015.",
      "CSS animation keyframes.",
      "Terminal commands in Node.js."
    ],
    "correctAnswer": 0,
    "explanation": "In React 19, functions that use async transitions are called Actions. Actions automatically manage loading/pending status, errors, and form lifecycle transitions.",
    "tip": "React 19 Actions turn async form handling into a first-class native feature."
  },
  {
    "id": "r19-m13-02",
    "topicId": "react-19-features",
    "topicName": "Module 13: What's New in React 19",
    "question": "What does the new `useActionState` hook in React 19 do?",
    "code": "const [state, formAction, isPending] = useActionState(async (prevState, formData) => {\n  const result = await submitQuiz(formData);\n  return result;\n}, initialScore);",
    "options": [
      "It manages state updated by an async Action, returning `[currentState, actionTrigger, isPending]`, automatically tracking pending loading state during async execution.",
      "It replaces `useEffect` completely.",
      "It downloads React packages.",
      "It only works on mobile devices."
    ],
    "correctAnswer": 0,
    "explanation": "`useActionState(actionFn, initialState)` is a flagship React 19 hook. It provides current state, a dispatchable action wrapper, and an automatic `isPending` boolean flag.",
    "tip": "`useActionState` gives you `[state, formAction, isPending]` with zero boilerplate."
  },
  {
    "id": "r19-m13-03",
    "topicId": "react-19-features",
    "topicName": "Module 13: What's New in React 19",
    "question": "What does the `useFormStatus` hook in React 19 provide to child components inside a `<form>`?",
    "code": "function SubmitButton() {\n  const { pending, data, method, action } = useFormStatus();\n  return <button disabled={pending}>{pending ? \"Submitting...\" : \"Submit\"}</button>;\n}",
    "options": [
      "Status information (such as `pending` boolean, `data` FormData) about the parent `<form>` without needing prop drilling from the parent form.",
      "The user's credit card verification status.",
      "The server's CPU temperature.",
      "The HTML5 form validation regex."
    ],
    "correctAnswer": 0,
    "explanation": "`useFormStatus` acts like context for forms: any child button or input inside a `<form>` can read `{ pending }` directly to disable itself or show loading spinners during submission.",
    "tip": "Use `useFormStatus` inside child buttons to know if the parent form is submitting."
  },
  {
    "id": "r19-m13-04",
    "topicId": "react-19-features",
    "topicName": "Module 13: What's New in React 19",
    "question": "What is the purpose of the `useOptimistic` hook in React 19?",
    "code": "const [optimisticAnswers, setOptimisticAnswer] = useOptimistic(\n  answers,\n  (current, newAnswer) => ({ ...current, [newAnswer.id]: newAnswer.val })\n);",
    "options": [
      "To immediately show a predicted/optimistic UI state to the user while an async network action is pending, automatically reverting if the action fails.",
      "To make all async requests 100% faster.",
      "To test optimistic code in unit tests.",
      "To predict future user clicks."
    ],
    "correctAnswer": 0,
    "explanation": "`useOptimistic` lets you render optimistic feedback immediately (e.g., mark a quiz answer selected or message sent), switching back automatically when the server responds or errors.",
    "tip": "Use `useOptimistic` for instant UI feedback on likes, selections, and messages."
  },
  {
    "id": "r19-m13-05",
    "topicId": "react-19-features",
    "topicName": "Module 13: What's New in React 19",
    "question": "What is the new `use()` API in React 19?",
    "code": "function UserProfile({ userPromise }) {\n  const user = use(userPromise); // Reads promise directly during render!\n  return <h1>{user.name}</h1>;\n}",
    "options": [
      "A versatile React 19 API that can read the value of resources like Promises and Context directly during render (and can even be called conditionally inside `if` statements!).",
      "A hook that replaces `useState`.",
      "A CLI command in Vite.",
      "A method to import CSS."
    ],
    "correctAnswer": 0,
    "explanation": "`use()` reads values from Promises (integrating with `<Suspense>`) and Context. Unlike standard hooks, `use()` can be called conditionally inside loops and `if` blocks!",
    "tip": "`use(promise)` unwraps promises during render and can be called inside `if` statements."
  },
  {
    "id": "r19-m13-06",
    "topicId": "react-19-features",
    "topicName": "Module 13: What's New in React 19",
    "question": "How does React 19 handle document metadata (like `<title>`, `<meta>`, `<link rel=\"stylesheet\">`) inside components?",
    "code": "function QuizPage() {\n  return (\n    <div>\n      <title>React 19 Certification Exam | EvalForge</title>\n      <meta name=\"description\" content=\"Official exam portal\" />\n      <h1>Exam in progress</h1>\n    </div>\n  );\n}",
    "options": [
      "React 19 natively supports rendering `<title>`, `<meta>`, and `<link>` tags directly inside any component, automatically hoisting them to the document `<head>` without external libraries like `react-helmet`.",
      "React 19 throws an error if `<title>` is in a component.",
      "Metadata can only be written in HTML files.",
      "Document metadata requires a Node.js backend."
    ],
    "correctAnswer": 0,
    "explanation": "React 19 natively hoists document metadata tags (`<title>`, `<meta>`, `<link>`) placed anywhere in your component tree directly into the HTML `<head>`.",
    "tip": "In React 19, just render `<title>` and `<meta>` tags directly in your components!"
  },
  {
    "id": "r19-m13-07",
    "topicId": "react-19-features",
    "topicName": "Module 13: What's New in React 19",
    "question": "What happened to `React.forwardRef` in React 19?",
    "code": "// Old: const Input = forwardRef((props, ref) => <input ref={ref} {...props} />);\n// React 19: function Input({ ref, ...props }) { return <input ref={ref} {...props} />; }",
    "options": [
      "`forwardRef` is now deprecated and no longer necessary; `ref` is passed directly as a standard prop to function components.",
      "`forwardRef` is mandatory for all components.",
      "`ref` is removed from React 19.",
      "Refs can only be used on class components."
    ],
    "correctAnswer": 0,
    "explanation": "In React 19, function components accept `ref` directly as a regular prop in their parameter list, making `forwardRef` obsolete.",
    "tip": "You don't need `forwardRef` in React 19: simply accept `ref` in props!"
  },
  {
    "id": "r19-m13-08",
    "topicId": "react-19-features",
    "topicName": "Module 13: What's New in React 19",
    "question": "How does React 19 improve Stylesheet support with precedence?",
    "code": "<link rel=\"stylesheet\" href=\"/theme.css\" precedence=\"high\" />",
    "options": [
      "React 19 manages stylesheet loading order in `<head>` using the `precedence` attribute and suspends components until their required stylesheets have loaded to prevent Flash of Unstyled Content (FOUC).",
      "React 19 removes CSS support.",
      "Stylesheets must be written inside JS files.",
      "Precedence is a CSS property."
    ],
    "correctAnswer": 0,
    "explanation": "React 19 includes native asset loading for stylesheets, hoisting them and ensuring components don't reveal unstyled content before their CSS is ready.",
    "tip": "React 19 manages stylesheet loading order and prevents flash of unstyled content."
  },
  {
    "id": "r19-m13-09",
    "topicId": "react-19-features",
    "topicName": "Module 13: What's New in React 19",
    "question": "What is the difference between React Server Components (RSC) and Client Components (`'use client'`)?",
    "code": "// Top of file for client components:\n'use client';",
    "options": [
      "Server Components execute exclusively on the server (never bundled to the client, direct database access, 0kb client JS); Client Components execute on both server (SSR) and client, supporting interactivity, hooks (`useState`), and event listeners.",
      "Server components cannot return JSX.",
      "Client components cannot use CSS.",
      "There is no difference."
    ],
    "correctAnswer": 0,
    "explanation": "Server Components run on the server and send pre-rendered UI to the browser with zero client-side JavaScript. Adding `'use client'` marks components that need client-side interactivity, state, and event listeners.",
    "tip": "Use Client Components (`'use client'`) for interactive UI (state, effects, clicks)."
  },
  {
    "id": "r19-m13-10",
    "topicId": "react-19-features",
    "topicName": "Module 13: What's New in React 19",
    "question": "How does React 19 improve error reporting for hydration mismatch errors?",
    "code": null,
    "options": [
      "React 19 logs a single consolidated diff showing the exact server HTML vs client HTML mismatch with line context, rather than spamming multiple noisy errors.",
      "React 19 ignores all hydration errors.",
      "React 19 reloads the operating system.",
      "Hydration errors are converted into warnings."
    ],
    "correctAnswer": 0,
    "explanation": "Hydration error messages in React 19 provide a clean visual diff showing the server and client HTML side by side, making it trivial to find mismatched tags.",
    "tip": "React 19 gives clean, pinpoint diffs for hydration mismatches."
  },
  {
    "id": "r19-m13-11",
    "topicId": "react-19-features",
    "topicName": "Module 13: What's New in React 19",
    "question": "What is the cleanup function support in React 19 Ref callbacks?",
    "code": "<div ref={(node) => {\n  // setup\n  return () => {\n    // cleanup on unmount\n  };\n}} />",
    "options": [
      "Ref callback functions in React 19 can now return a cleanup function that React calls when the DOM element is detached/unmounted.",
      "Ref callbacks cannot run in React 19.",
      "Ref callbacks must be async.",
      "Cleanup functions only run in Node.js."
    ],
    "correctAnswer": 0,
    "explanation": "In React 19, ref callbacks can return a cleanup function (analogous to `useEffect`), making it clean to attach and detach 3rd-party DOM listeners.",
    "tip": "Ref callbacks can return a cleanup function in React 19."
  },
  {
    "id": "r19-m13-12",
    "topicId": "react-19-features",
    "topicName": "Module 13: What's New in React 19",
    "question": "What is the purpose of `<Context>` rendering directly in React 19?",
    "code": "<ThemeContext value={theme}>\n  <App />\n</ThemeContext>",
    "options": [
      "Allows developers to write `<ThemeContext value={...}>` instead of `<ThemeContext.Provider value={...}>`, simplifying JSX syntax.",
      "Deletes the context from memory.",
      "Requires TypeScript.",
      "Renders context as an HTML tag."
    ],
    "correctAnswer": 0,
    "explanation": "In React 19, context objects themselves act directly as Providers, reducing boilerplate.",
    "tip": "Use `<ThemeContext value={...}>` directly in React 19."
  },
  {
    "id": "r19-m13-13",
    "topicId": "react-19-features",
    "topicName": "Module 13: What's New in React 19",
    "question": "How does the `preload` and `preinit` resource loading APIs in React 19 improve font and script loading?",
    "code": "import { preload, preinit } from 'react-dom';\npreload('/fonts/inter.woff2', { as: 'font' });\npreinit('/analytics.js', { as: 'script' });",
    "options": [
      "They allow components to inform the browser to discover, preload, and execute critical assets (fonts, scripts, images) as early as possible.",
      "They replace HTML `<head>` tags entirely.",
      "They compress images on the client.",
      "They download files to local disk."
    ],
    "correctAnswer": 0,
    "explanation": "React 19 includes native resource hinting APIs (`preload`, `preinit`, `preconnect`) in `react-dom` to optimize browser network scheduling for critical assets.",
    "tip": "Use React 19 resource hints to preload fonts and scripts before render."
  },
  {
    "id": "r19-m13-14",
    "topicId": "react-19-features",
    "topicName": "Module 13: What's New in React 19",
    "question": "What happens when an async function passed to `startTransition` rejects or throws in React 19?",
    "code": "startTransition(async () => {\n  await submitData();\n});",
    "options": [
      "React 19 supports async functions in `startTransition`; any caught errors are caught and surfaced via Error Boundaries or Action state.",
      "The browser crashes with a fatal error.",
      "Async functions are forbidden in transitions.",
      "The error is silently ignored."
    ],
    "correctAnswer": 0,
    "explanation": "React 19 adds first-class async transition support. Transitions now seamlessly handle Promises and async functions.",
    "tip": "Transitions in React 19 fully support async/await workflows."
  },
  {
    "id": "r19-m13-15",
    "topicId": "react-19-features",
    "topicName": "Module 13: What's New in React 19",
    "question": "Which deprecated legacy features are officially removed in React 19?",
    "code": null,
    "options": [
      "`propTypes` on function components, `defaultProps` on function components, legacy Context (`childContextTypes`), string refs (`ref=\"myInput\"`), and `findDOMNode`.",
      "`useState` and `useEffect`.",
      "`<div>` and `<span>` tags.",
      "React Router."
    ],
    "correctAnswer": 0,
    "explanation": "React 19 cleans up legacy APIs from older React eras (like `defaultProps`, string refs, and `findDOMNode`), standardizing on modern functional idioms and TypeScript/ES6 defaults.",
    "tip": "React 19 removes legacy string refs and defaultProps in favor of modern ES6 standards."
  },
  {
    "id": "r19-m14-01",
    "topicId": "react-router",
    "topicName": "Module 14: Basic Routing with React Router",
    "question": "What is Client-Side Routing in React applications?",
    "code": null,
    "options": [
      "Updating the browser URL and rendering different page components dynamically with JavaScript without making a full-page HTTP request to the server.",
      "Routing network cables to router hardware.",
      "Saving route names in database tables.",
      "Using CSS `@media` rules for pages."
    ],
    "correctAnswer": 0,
    "explanation": "Client-side routing intercepts URL changes in the browser using the HTML5 History API, rendering the appropriate React component without refreshing the page.",
    "tip": "Client-side routing delivers fast, instant page navigation in SPAs."
  },
  {
    "id": "r19-m14-02",
    "topicId": "react-router",
    "topicName": "Module 14: Basic Routing with React Router",
    "question": "What is the primary role of `<BrowserRouter>` in React Router?",
    "code": "import { BrowserRouter } from 'react-router-dom';\n<BrowserRouter>\n  <App />\n</BrowserRouter>",
    "options": [
      "The top-level provider component that connects your React component tree to the browser's HTML5 History API (`pushState`, `popstate`).",
      "A web browser developed by Facebook.",
      "A tool to compile JavaScript.",
      "A local database."
    ],
    "correctAnswer": 0,
    "explanation": "`<BrowserRouter>` stores the current location in the browser's address bar using clean URLs and synchronizes it with React Router's state.",
    "tip": "Wrap your entire application in `<BrowserRouter>` to enable routing."
  },
  {
    "id": "r19-m14-03",
    "topicId": "react-router",
    "topicName": "Module 14: Basic Routing with React Router",
    "question": "How do `<Routes>` and `<Route>` configure route matching in React Router v6+?",
    "code": "<Routes>\n  <Route path=\"/\" element={<LandingPage />} />\n  <Route path=\"/select-modules\" element={<ModuleSelect />} />\n  <Route path=\"/quiz\" element={<QuizPortal />} />\n</Routes>",
    "options": [
      "`<Routes>` inspects all child `<Route>` definitions, selects the best matching `path` based on the current URL, and renders its corresponding `element`.",
      "`<Routes>` renders all child components at the same time.",
      "`<Route>` creates a new HTML file on disk.",
      "Routes must be configured in JSON files."
    ],
    "correctAnswer": 0,
    "explanation": "`<Routes>` matches the current URL pathname against child `<Route path=\"...\" element={<Component />} />` elements and renders the winning element.",
    "tip": "Use `<Routes><Route path=\"...\" element={<Page />} /></Routes>` for clean routing."
  },
  {
    "id": "r19-m14-04",
    "topicId": "react-router",
    "topicName": "Module 14: Basic Routing with React Router",
    "question": "Why should you use the `<Link>` component instead of standard `<a href=\"...\">` tags in React Router?",
    "code": "// Correct:\n<Link to=\"/quiz\">Start Quiz</Link>\n\n// Avoid:\n<a href=\"/quiz\">Start Quiz</a>",
    "options": [
      "`<Link>` updates the URL client-side and renders the new view WITHOUT a full page refresh; standard `<a>` tags cause the browser to reload the entire web page, losing React state.",
      "`<Link>` is faster in CSS.",
      "`<a>` tags are forbidden in HTML5.",
      "`<Link>` automatically downloads images."
    ],
    "correctAnswer": 0,
    "explanation": "`<Link to=\"...\">` intercepts the click event, calls `e.preventDefault()`, and pushes the new route to browser history without a full page reload, keeping the SPA fast and state intact.",
    "tip": "Always use `<Link to=\"...\">` for internal app navigation to prevent page reloads."
  },
  {
    "id": "r19-m14-05",
    "topicId": "react-router",
    "topicName": "Module 14: Basic Routing with React Router",
    "question": "What is the difference between `<NavLink>` and `<Link>` in React Router?",
    "code": "<NavLink\n  to=\"/quiz\"\n  className={({ isActive }) => (isActive ? \"nav-link active\" : \"nav-link\")}\n>\n  Quiz\n</NavLink>",
    "options": [
      "`<NavLink>` knows whether its target URL is currently active and allows conditional styling or class assignment via the `isActive` boolean parameter.",
      "`<NavLink>` only works on mobile devices.",
      "`<Link>` is deprecated.",
      "`<NavLink>` opens links in a new tab."
    ],
    "correctAnswer": 0,
    "explanation": "`<NavLink>` is a specialized version of `<Link>` designed for navigation bars and menus, providing an `isActive` flag in `className` or `style` functions to highlight active tabs.",
    "tip": "Use `<NavLink>` for navigation menus where the current active tab should be highlighted."
  },
  {
    "id": "r19-m14-06",
    "topicId": "react-router",
    "topicName": "Module 14: Basic Routing with React Router",
    "question": "How do you navigate programmatically in React Router using the `useNavigate` hook?",
    "code": "import { useNavigate } from 'react-router-dom';\n\nfunction FinishButton() {\n  const navigate = useNavigate();\n  const handleFinish = () => {\n    // submit quiz...\n    navigate(\"/results\");\n  };\n  return <button onClick={handleFinish}>Submit Quiz</button>;\n}",
    "options": [
      "Call `const navigate = useNavigate()` and execute `navigate('/results')` inside any event handler or function.",
      "Call `window.location.goTo('/results')`",
      "`useNavigate` can only be used inside `<head>`.",
      "Programmatic navigation is not supported."
    ],
    "correctAnswer": 0,
    "explanation": "The `useNavigate()` hook returns a function that lets you change routes programmatically in response to events (e.g. after form submission or exam completion).",
    "tip": "`const navigate = useNavigate(); navigate('/path')` is the standard programmatic navigation."
  },
  {
    "id": "r19-m14-07",
    "topicId": "react-router",
    "topicName": "Module 14: Basic Routing with React Router",
    "question": "How do you define and access Dynamic URL Route Parameters (e.g. `/quiz/:courseId/:questionId`)?",
    "code": "// Route: <Route path=\"/quiz/:topicId\" element={<QuizView />} />\n\n// Component:\nimport { useParams } from 'react-router-dom';\nfunction QuizView() {\n  const { topicId } = useParams();\n  return <h1>Topic: {topicId}</h1>;\n}",
    "options": [
      "Define dynamic segments with a colon `:paramName` in the route path, and extract them using the `useParams()` hook in the component.",
      "Read `window.url.params`",
      "Dynamic routes require regex in React.",
      "Parameters are passed as props to `<App />`."
    ],
    "correctAnswer": 0,
    "explanation": "Dynamic URL segments start with `:`. `useParams()` returns an object with key-value pairs of the URL parameters matched by the current `<Route>`.",
    "tip": "Route: `/users/:id` -> Component: `const { id } = useParams()`."
  },
  {
    "id": "r19-m14-08",
    "topicId": "react-router",
    "topicName": "Module 14: Basic Routing with React Router",
    "question": "How do you create a Catch-All 404 (Not Found) route in React Router?",
    "code": "<Routes>\n  <Route path=\"/\" element={<Home />} />\n  <Route path=\"*\" element={<NotFoundPage />} />\n</Routes>",
    "options": [
      "Set `path=\"*\"` on a `<Route>` placed at the end of `<Routes>`, which matches any URL not matched by preceding routes.",
      "Set `path=\"404\"`",
      "Set `path=\"default\"`",
      "Catch-all routes must be created on the server."
    ],
    "correctAnswer": 0,
    "explanation": "`path=\"*\"` acts as a wildcard catch-all route that renders when no other route definition matches the current URL.",
    "tip": "`<Route path=\"*\" element={<NotFound />} />` handles 404 pages gracefully."
  },
  {
    "id": "r19-m14-09",
    "topicId": "react-router",
    "topicName": "Module 14: Basic Routing with React Router",
    "question": "How do you read and update URL Query Parameters (e.g. `?mode=practice&filter=wrong`) in React Router?",
    "code": "import { useSearchParams } from 'react-router-dom';\n\nfunction Quiz() {\n  const [searchParams, setSearchParams] = useSearchParams();\n  const mode = searchParams.get(\"mode\"); // \"practice\"\n}",
    "options": [
      "Using the `useSearchParams()` hook, which returns the current search params object (with `.get('key')`) and a function to update query strings in the URL.",
      "Reading `document.search`",
      "Query params cannot be read in React.",
      "Using `useQuery()`"
    ],
    "correctAnswer": 0,
    "explanation": "`useSearchParams()` functions similarly to `useState`, but stores state directly in the URL search query string (`?key=value`), making pages shareable and bookmarkable.",
    "tip": "Use `useSearchParams` to sync filter and pagination state with the URL query string."
  },
  {
    "id": "r19-m14-10",
    "topicId": "react-router",
    "topicName": "Module 14: Basic Routing with React Router",
    "question": "How do you pass transient state data during navigation using `navigate` or `<Link>`?",
    "code": "// Navigating:\nnavigate(\"/results\", { state: { score: 38, total: 40 } });\n\n// Reading:\nimport { useLocation } from 'react-router-dom';\nconst location = useLocation();\nconst score = location.state?.score;",
    "options": [
      "Pass a `state` object in the options parameter of `navigate(url, { state })` and read it in the target component using `useLocation().state`.",
      "Write data to `window.data`",
      "Transient state can only be passed via query strings.",
      "Pass data via `props.history`"
    ],
    "correctAnswer": 0,
    "explanation": "React Router supports passing private state across navigation without displaying it in the URL string via `location.state`.",
    "tip": "Pass private result data cleanly via `navigate('/results', { state: quizData })`."
  },
  {
    "id": "r19-m14-11",
    "topicId": "react-router",
    "topicName": "Module 14: Basic Routing with React Router",
    "question": "What is an `<Outlet>` in Nested Routing with React Router?",
    "code": "function DashboardLayout() {\n  return (\n    <div className=\"layout\">\n      <Sidebar />\n      <main>\n        <Outlet /> {/* Child routes render here! */}\n      </main>\n    </div>\n  );\n}",
    "options": [
      "A placeholder component placed in a parent layout route that renders the matching child route element.",
      "An electrical socket simulator.",
      "An API endpoint connector.",
      "An image gallery tag."
    ],
    "correctAnswer": 0,
    "explanation": "In nested route layouts, `<Outlet />` indicates where child route elements should be rendered within the shared parent layout template.",
    "tip": "Use `<Outlet />` inside layout components to render nested child pages."
  },
  {
    "id": "r19-m14-12",
    "topicId": "react-router",
    "topicName": "Module 14: Basic Routing with React Router",
    "question": "How do you navigate back to the previous page in history using `useNavigate`?",
    "code": "const navigate = useNavigate();",
    "options": [
      "`navigate(-1);` (passing delta `-1` to navigate back one step in browser history)",
      "`navigate('back');`",
      "`window.goBack();`",
      "`navigate.previous();`"
    ],
    "correctAnswer": 0,
    "explanation": "`navigate(-1)` is equivalent to clicking the browser's Back button, navigating one step backwards in the history stack.",
    "tip": "`navigate(-1)` goes back; `navigate(1)` goes forward."
  },
  {
    "id": "r19-m14-13",
    "topicId": "react-router",
    "topicName": "Module 14: Basic Routing with React Router",
    "question": "What is the difference between `navigate('/login')` and `navigate('/login', { replace: true })`?",
    "code": null,
    "options": [
      "`{ replace: true }` replaces the CURRENT entry in the browser history stack rather than pushing a new one, preventing the user from hitting Back and returning to the previous page (ideal after login/logout/exam submit).",
      "`replace: true` deletes browser cookies.",
      "`replace: true` reloads all CSS.",
      "There is no difference."
    ],
    "correctAnswer": 0,
    "explanation": "`replace: true` modifies the current history entry. If a user finishes an exam and is redirected to `/results`, replacing the history entry prevents hitting the Back button from returning to the completed exam.",
    "tip": "Use `{ replace: true }` on redirects and final form submissions."
  },
  {
    "id": "r19-m15-01",
    "topicId": "react-best-practices",
    "topicName": "Module 15: Project Structure & Best Practices",
    "question": "What is the standard recommended directory structure for a scalable React application?",
    "code": null,
    "options": [
      "Organized into dedicated folders under `src/`: `components/` (reusable UI), `pages/` or `views/` (route screens), `hooks/` (custom hooks), `context/` (state providers), `utils/` (helpers/logic), `data/` (static datasets), and `assets/` (images/icons).",
      "Putting all 100 components in the root directory.",
      "Writing everything inside `index.html`.",
      "Separating files by file extension only (`all-js/`, `all-jsx/`)."
    ],
    "correctAnswer": 0,
    "explanation": "A feature or layer-based architecture under `src/` keeps code discoverable, maintainable, and modular as the application expands.",
    "tip": "A clean folder structure (`components/`, `hooks/`, `utils/`, `data/`) keeps projects scalable."
  },
  {
    "id": "r19-m15-02",
    "topicId": "react-best-practices",
    "topicName": "Module 15: Project Structure & Best Practices",
    "question": "What is the strict naming convention for Custom Hooks in React?",
    "code": "// Correct:\nfunction useQuizTimer(initialSeconds) { ... }",
    "options": [
      "Custom hook function names MUST start with the prefix `use` (e.g. `useTimer`, `useLocalStorage`, `useQuestions`) so React and ESLint can enforce the Rules of Hooks.",
      "Custom hooks must end with `Hook`.",
      "Custom hooks must be in ALL_CAPS.",
      "Custom hooks must start with `get`."
    ],
    "correctAnswer": 0,
    "explanation": "The `use` prefix is required by React so linters can automatically verify that the Rules of Hooks (top-level calls only) are followed.",
    "tip": "Always prefix custom hooks with `use`: `useTimer`, `useKeyboardNav`."
  },
  {
    "id": "r19-m15-03",
    "topicId": "react-best-practices",
    "topicName": "Module 15: Project Structure & Best Practices",
    "question": "Why should business logic and heavy computations be extracted into helper utilities or Custom Hooks?",
    "code": null,
    "options": [
      "It keeps UI components clean and focused purely on presentation, makes business logic independently unit-testable without mounting DOM, and enables easy logic reuse across multiple components.",
      "Because React cannot run math operations inside components.",
      "To convert code to WebAssembly.",
      "To satisfy CSS requirements."
    ],
    "correctAnswer": 0,
    "explanation": "Separation of concerns is a core design principle: extract non-UI calculations, algorithms, and stateful workflows into utilities (`utils/quizEngine.js`) and custom hooks.",
    "tip": "Separate pure business logic (`utils/`) from UI rendering (`components/`)."
  },
  {
    "id": "r19-m15-04",
    "topicId": "react-best-practices",
    "topicName": "Module 15: Project Structure & Best Practices",
    "question": "What is the DRY (Don't Repeat Yourself) principle in component architecture?",
    "code": null,
    "options": [
      "Identifying repeated UI structures (like Question Cards, Option Buttons, Progress Bars) and extracting them into generic, parameterized components instead of copying and pasting JSX.",
      "Deleting CSS files.",
      "Writing all components in a single function.",
      "Never using functions more than once."
    ],
    "correctAnswer": 0,
    "explanation": "Extracting common UI into reusable components (`<QuestionCard>`, `<TimerBadge>`, `<OptionButton>`) ensures styling and behavior updates are made in one place.",
    "tip": "Extract repeated UI patterns into reusable components."
  },
  {
    "id": "r19-m15-05",
    "topicId": "react-best-practices",
    "topicName": "Module 15: Project Structure & Best Practices",
    "question": "What is the Single Responsibility Principle as applied to React components?",
    "code": null,
    "options": [
      "Each component should do ONE thing well (e.g. `<Timer>` displays countdown; `<QuestionPalette>` handles question jumping; `<ScoreCard>` displays summary metrics).",
      "Every component must have only 1 line of code.",
      "An app can only have 1 component.",
      "Components cannot accept props."
    ],
    "correctAnswer": 0,
    "explanation": "Components with a single responsibility are easier to read, maintain, test, and refactor than massive monolithic components.",
    "tip": "If a component is doing 5 different things, break it down into smaller sub-components."
  },
  {
    "id": "r19-m15-06",
    "topicId": "react-best-practices",
    "topicName": "Module 15: Project Structure & Best Practices",
    "question": "How should environment variables (like API keys or base URLs) be named and accessed in Vite projects?",
    "code": "const apiUrl = import.meta.env.VITE_API_BASE_URL;",
    "options": [
      "Prefixed with `VITE_` in `.env` files (e.g. `VITE_API_URL`) and accessed in code via `import.meta.env.VITE_API_URL`.",
      "Prefixed with `REACT_APP_` and read from `process.env` (CRA syntax).",
      "Stored in `window.API_KEY`.",
      "Hardcoded in `index.html`."
    ],
    "correctAnswer": 0,
    "explanation": "Vite exposes variables from `.env` on `import.meta.env`. Only variables prefixed with `VITE_` are exposed to client-side code to prevent leaking private secrets.",
    "tip": "In Vite: prefix with `VITE_` and access with `import.meta.env.VITE_VAR`."
  },
  {
    "id": "r19-m15-07",
    "topicId": "react-best-practices",
    "topicName": "Module 15: Project Structure & Best Practices",
    "question": "What is an Error Boundary in React applications?",
    "code": "class ErrorBoundary extends React.Component {\n  state = { hasError: false };\n  static getDerivedStateFromError(error) { return { hasError: true }; }\n  componentDidCatch(error, info) { logErrorToService(error, info); }\n  render() {\n    return this.state.hasError ? <ErrorFallback /> : this.props.children;\n  }\n}",
    "options": [
      "A component that catches JavaScript errors anywhere in its child component tree during rendering, logs the error, and displays a graceful fallback UI instead of crashing the entire app.",
      "A firewall in the router.",
      "A CSS property that prevents layout shifts.",
      "A compiler that removes bugs."
    ],
    "correctAnswer": 0,
    "explanation": "Error boundaries catch render errors in children and display a fallback screen, preventing an uncaught crash in one component from taking down the entire web page.",
    "tip": "Wrap critical application regions in Error Boundaries for bulletproof resilience."
  },
  {
    "id": "r19-m15-08",
    "topicId": "react-best-practices",
    "topicName": "Module 15: Project Structure & Best Practices",
    "question": "Why is semantic HTML (like `<header>`, `<main>`, `<nav>`, `<button>`, `<fieldset>`) important in React components?",
    "code": null,
    "options": [
      "It provides accessibility (a11y) for screen readers, improves SEO ranking, provides built-in keyboard navigation support, and ensures clean DOM structure.",
      "Semantic HTML is required for CSS to work.",
      "It makes React compile 50% faster.",
      "Semantic HTML is only used in WordPress."
    ],
    "correctAnswer": 0,
    "explanation": "Using semantic tags (`<button>` instead of `<div onClick=...>`, `<main>`, `<nav>`) ensures built-in keyboard focus, screen reader accessibility, and proper document structure.",
    "tip": "Use real `<button>` elements for click actions to ensure accessibility and keyboard navigation."
  },
  {
    "id": "r19-m15-09",
    "topicId": "react-best-practices",
    "topicName": "Module 15: Project Structure & Best Practices",
    "question": "What is the recommended file naming convention for React components and utilities?",
    "code": null,
    "options": [
      "PascalCase for components (`QuestionCard.jsx`, `NavBar.jsx`); camelCase for utilities, hooks, and data files (`quizEngine.js`, `useTimer.js`, `topicsData.js`).",
      "ALL_CAPS for every file.",
      "kebab-case for components only.",
      "File names do not matter."
    ],
    "correctAnswer": 0,
    "explanation": "Matching component file names (`QuestionCard.jsx`) with their PascalCase export identifier makes imports intuitive and standard across the React ecosystem.",
    "tip": "Components: `PascalCase.jsx`. Hooks & Utils: `camelCase.js`."
  },
  {
    "id": "r19-m15-10",
    "topicId": "react-best-practices",
    "topicName": "Module 15: Project Structure & Best Practices",
    "question": "Why should you avoid storing massive duplicated state across sibling components?",
    "code": null,
    "options": [
      "Duplicated state leads to synchronization bugs where one component updates but the sibling displays stale data; lift state up to their common parent or use Context.",
      "Because state is limited to 1KB total.",
      "Because React throws an error on duplicate state names.",
      "Duplicated state causes network errors."
    ],
    "correctAnswer": 0,
    "explanation": "Maintaining a Single Source of Truth prevents state drift and ensures all UI components render consistent, synchronized information.",
    "tip": "Maintain a Single Source of Truth: lift shared state to the common parent."
  },
  {
    "id": "r19-m16-01",
    "topicId": "react-glossary",
    "topicName": "Module 16: Glossary of Key Terms",
    "question": "What is 'Reconciliation' in React?",
    "code": null,
    "options": [
      "The algorithm React uses to compare two Virtual DOM trees (the diffing algorithm) to determine the exact minimal set of changes required on the real DOM.",
      "A database merge operation.",
      "Converting JSX into CSS.",
      "Signing in a user."
    ],
    "correctAnswer": 0,
    "explanation": "Reconciliation is the process through which React diffs the old and new Virtual DOM trees to compute the most efficient real DOM mutations.",
    "tip": "Reconciliation = Virtual DOM Diffing algorithm."
  },
  {
    "id": "r19-m16-02",
    "topicId": "react-glossary",
    "topicName": "Module 16: Glossary of Key Terms",
    "question": "What is 'Hydration' in Server-Side Rendering (SSR)?",
    "code": null,
    "options": [
      "The process where client-side JavaScript attaches event listeners and state management to the pre-rendered static HTML received from the server, making it fully interactive.",
      "Clearing the browser cache.",
      "Downloading images in the background.",
      "Compiling CSS variables."
    ],
    "correctAnswer": 0,
    "explanation": "Server sends fast static HTML. Hydration is when React loads in the browser, matches the DOM, and attaches event handlers to turn static HTML into an active React app.",
    "tip": "Hydration brings static server-rendered HTML to life with interactive React listeners."
  },
  {
    "id": "r19-m16-03",
    "topicId": "react-glossary",
    "topicName": "Module 16: Glossary of Key Terms",
    "question": "What is React Fiber?",
    "code": null,
    "options": [
      "React's internal reconciliation engine architecture that enables incremental rendering, interruptible work, priority scheduling, and concurrent features.",
      "A high-speed optical internet cable.",
      "A CSS styling library.",
      "A database indexing format."
    ],
    "correctAnswer": 0,
    "explanation": "React Fiber is the core underlying reimplementation of React's reconciler that broke rendering into units of work that can be paused, prioritized, and scheduled.",
    "tip": "Fiber is the internal engine powering React's concurrent rendering features."
  },
  {
    "id": "r19-m16-04",
    "topicId": "react-glossary",
    "topicName": "Module 16: Glossary of Key Terms",
    "question": "What does 'Lifting State Up' mean in React?",
    "code": null,
    "options": [
      "Moving shared state to the closest common ancestor of the components that need it, so it can be passed down as props along with update callbacks.",
      "Uploading state to a cloud database.",
      "Converting local state to a global cookie.",
      "Saving state to the top of the file."
    ],
    "correctAnswer": 0,
    "explanation": "When two sibling components need to share or synchronize data, move the state variable to their common parent and pass it down via props.",
    "tip": "Lift state up to the closest common ancestor when sibling components need to sync."
  },
  {
    "id": "r19-m16-05",
    "topicId": "react-glossary",
    "topicName": "Module 16: Glossary of Key Terms",
    "question": "What is a Higher-Order Component (HOC)?",
    "code": "const EnhancedComponent = withAuth(UserProfile);",
    "options": [
      "A pattern where a function takes a component as an argument and returns a new enhanced component with added props or capabilities.",
      "A component that has higher CSS `z-index`.",
      "A component rendered at the top of the page.",
      "A component written in TypeScript."
    ],
    "correctAnswer": 0,
    "explanation": "An HOC is a pure function that takes a component and returns a wrapped, enhanced component (e.g. `withAuth`, `withRouter`), a classic pattern largely superseded by custom hooks.",
    "tip": "HOC: `withSomething(Component) -> EnhancedComponent`."
  },
  {
    "id": "r19-m16-06",
    "topicId": "react-glossary",
    "topicName": "Module 16: Glossary of Key Terms",
    "question": "What is `<StrictMode>` in React?",
    "code": "<StrictMode>\n  <App />\n</StrictMode>",
    "options": [
      "A development-only tool that highlights potential problems, detects legacy API usages, and intentionally double-invokes renders/effects in development to catch side-effect bugs.",
      "A feature that disables user interactions.",
      "A strict CSS validator.",
      "A production performance booster."
    ],
    "correctAnswer": 0,
    "explanation": "StrictMode checks for unsafe lifecycles, legacy API usage, and unhandled side effects by running extra checks and double-invoking render/effects in development mode only.",
    "tip": "`StrictMode` has zero impact on production builds."
  },
  {
    "id": "r19-m16-07",
    "topicId": "react-glossary",
    "topicName": "Module 16: Glossary of Key Terms",
    "question": "What is 'Unidirectional Data Flow' (One-Way Data Binding) in React?",
    "code": null,
    "options": [
      "Data flows strictly in one direction: from parent to child through props; child components emit events/callbacks upward to request state changes.",
      "Data can only be sent from client to server, never from server to client.",
      "Data only flows when the page scrolls down.",
      "Data is read-only across the entire application."
    ],
    "correctAnswer": 0,
    "explanation": "Unidirectional data flow makes state predictable: data flows down via props; events flow up via callbacks, making it easy to track where data originates and changes.",
    "tip": "Props flow DOWN; events flow UP."
  },
  {
    "id": "r19-m16-08",
    "topicId": "react-glossary",
    "topicName": "Module 16: Glossary of Key Terms",
    "question": "What is a 'Portal' (`createPortal`) in React DOM?",
    "code": "import { createPortal } from 'react-dom';\n\nfunction Modal({ children }) {\n  return createPortal(\n    <div className=\"modal-overlay\">{children}</div>,\n    document.getElementById(\"modal-root\")\n  );\n}",
    "options": [
      "A way to render a component's JSX children into a different DOM node outside the parent component's DOM hierarchy (commonly used for Modals, Tooltips, and Dropdowns).",
      "A 3D graphics canvas in WebGL.",
      "A network gateway for web sockets.",
      "A method to link two websites together."
    ],
    "correctAnswer": 0,
    "explanation": "`createPortal(children, domNode)` renders children into a designated DOM node (like `document.body` or `#modal-root`) while preserving React event bubbling and context.",
    "tip": "Use `createPortal` for modals, popovers, and tooltips that need to escape overflow/z-index clipping."
  },
  {
    "id": "r19-m16-09",
    "topicId": "react-glossary",
    "topicName": "Module 16: Glossary of Key Terms",
    "question": "What is 'Concurrent React'?",
    "code": null,
    "options": [
      "A foundational React capability that allows React to prepare multiple versions of the UI concurrently in memory, interrupting, pausing, and resuming rendering to keep the UI responsive to user input.",
      "Running multiple React servers in parallel.",
      "Using multiple databases at once.",
      "Writing React in C++."
    ],
    "correctAnswer": 0,
    "explanation": "Concurrent React enables non-blocking rendering. High-priority updates (typing in an input) can interrupt low-priority updates (rendering a heavy filtered list), ensuring fluid user interaction.",
    "tip": "Concurrent rendering keeps UI responsive even during heavy updates."
  },
  {
    "id": "r19-m16-10",
    "topicId": "react-glossary",
    "topicName": "Module 16: Glossary of Key Terms",
    "question": "What is 'Component Mounting' versus 'Component Unmounting'?",
    "code": null,
    "options": [
      "Mounting is when a component is first inserted into the real DOM; Unmounting is when a component is removed/destroyed from the DOM.",
      "Mounting is saving code to Git; Unmounting is deleting code.",
      "Mounting is applying CSS styles; Unmounting is removing CSS.",
      "There is no difference."
    ],
    "correctAnswer": 0,
    "explanation": "Mounting represents the initial creation and insertion of a component into the DOM. Unmounting is the cleanup and removal of the component from the DOM tree.",
    "tip": "Mount = born into the DOM; Unmount = cleaned up and removed from the DOM."
  }
];
