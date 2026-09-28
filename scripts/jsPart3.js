export const jsPart3 = [
  // 21. Events & Event Handling (7 questions)
  {
    id: "js-ev-01",
    topicId: "events-handling",
    topicName: "Events & Event Handling",
    question: "What is the difference between `event.target` and `event.currentTarget` in event handlers?",
    code: `document.getElementById("parent").addEventListener("click", function(e) {
  console.log(e.target);
  console.log(e.currentTarget);
});`,
    options: [
      "`event.target` is the specific element that originally triggered/dispatched the event (e.g., clicked child button); `event.currentTarget` is the element to which the event listener is currently attached (`#parent`).",
      "`event.target` is always the `window` object.",
      "Both properties always refer to the identical DOM node.",
      "`event.currentTarget` is the previous element clicked before this one."
    ],
    correctAnswer: 0,
    explanation: "`e.target` is the deep origin element where the event originated. `e.currentTarget` is the element holding the active event handler (the element on which `addEventListener` was called).",
    tip: "Crucial for event delegation: `e.currentTarget` is the parent listener; `e.target` is the actual clicked child."
  },
  {
    id: "js-ev-02",
    topicId: "events-handling",
    topicName: "Events & Event Handling",
    question: "What is Event Delegation in JavaScript DOM architecture?",
    code: null,
    options: [
      "Attaching hundreds of separate event listeners to every individual list item.",
      "Attaching a single event listener to a common ancestor element and using `e.target` to handle events triggered by current and dynamically added child elements.",
      "Delegating JavaScript execution to a Web Worker.",
      "Using CSS hover states instead of JavaScript."
    ],
    correctAnswer: 1,
    explanation: "Event delegation leverages event bubbling. Instead of binding listeners to many child elements, you attach one listener to their common parent. This saves memory and automatically handles dynamically inserted children.",
    tip: "Event delegation avoids adding listeners to every single list item in large lists."
  },
  {
    id: "js-ev-03",
    topicId: "events-handling",
    topicName: "Events & Event Handling",
    question: "What does `event.preventDefault()` do when called inside a form's submit event handler?",
    code: `form.addEventListener("submit", (e) => {
  e.preventDefault();
  // submit via fetch()
});`,
    options: [
      "Deletes all form inputs from the screen.",
      "Cancels the default browser action (such as preventing full-page reload on form submission or preventing URL navigation on an `<a>` link).",
      "Stops the event from bubbling up the DOM hierarchy.",
      "Throws an uncatchable exception."
    ],
    correctAnswer: 1,
    explanation: "`e.preventDefault()` prevents the browser's native default behavior for that event (e.g. submitting a form with a full HTTP GET/POST reload, or following a hyperlink).",
    tip: "`preventDefault()` stops the default browser action; `stopPropagation()` stops bubbling."
  },
  {
    id: "js-ev-04",
    topicId: "events-handling",
    topicName: "Events & Event Handling",
    question: "What is Event Bubbling versus Event Capturing (Trickling)?",
    code: null,
    options: [
      "Bubbling travels from the target element UPWARDS to the root document; Capturing travels from the window/document DOWNWARDS to the target element.",
      "Bubbling is for mouse events; Capturing is for keyboard events.",
      "Bubbling only occurs in Google Chrome.",
      "Capturing happens after bubbling completes."
    ],
    correctAnswer: 0,
    explanation: "The DOM event flow has 3 phases: 1) Capturing phase (downward from Window to target), 2) Target phase, and 3) Bubbling phase (upward from target back to Window). By default, listeners listen in the bubbling phase.",
    tip: "Capturing = down; Bubbling = up like bubbles in water."
  },
  {
    id: "js-ev-05",
    topicId: "events-handling",
    topicName: "Events & Event Handling",
    question: "What does `event.stopPropagation()` do?",
    code: `btn.addEventListener("click", (e) => {
  e.stopPropagation();
});`,
    options: [
      "Prevents the event from continuing to propagate (bubble or capture) further through the DOM tree to ancestor elements.",
      "Prevents the button from being clicked ever again.",
      "Stops all CSS animations on the page.",
      "Refreshes the page."
    ],
    correctAnswer: 0,
    explanation: "`e.stopPropagation()` halts the propagation of the event up or down the DOM hierarchy, ensuring parent elements do not receive the event.",
    tip: "Use `e.stopPropagation()` when a child click shouldn't trigger parent click handlers."
  },
  {
    id: "js-ev-06",
    topicId: "events-handling",
    topicName: "Events & Event Handling",
    question: "Which event fires as soon as the HTML document is fully parsed and DOM tree built, without waiting for images and stylesheets to load?",
    code: null,
    options: [
      "`window.onload`",
      "`DOMContentLoaded`",
      "`beforeunload`",
      "`ready`"
    ],
    correctAnswer: 1,
    explanation: "`DOMContentLoaded` fires when the initial HTML document has been completely parsed and DOM tree constructed. `window.load` waits for all external resources (images, stylesheets, fonts) to finish loading.",
    tip: "`DOMContentLoaded` is faster than `window.onload` because it doesn't wait for images."
  },
  {
    id: "js-ev-07",
    topicId: "events-handling",
    topicName: "Events & Event Handling",
    question: "How do you properly remove an event listener using `removeEventListener`?",
    code: `function handleClick() { console.log("Clicked"); }
btn.addEventListener("click", handleClick);
// Removal:`,
    options: [
      "`btn.removeEventListener('click', handleClick);` (passing the exact same function reference and event name).",
      "`btn.removeEventListener('click', () => handleClick());`",
      "`btn.removeEventListener('click');` without function parameter.",
      "`btn.clearEvents();`"
    ],
    correctAnswer: 0,
    explanation: "`removeEventListener` requires the exact same function reference that was passed to `addEventListener`. Passing an anonymous function `() => ...` creates a new function reference and will fail to remove the listener.",
    tip: "Never use anonymous arrow functions if you need to remove the event listener later."
  },

  // 22. Error Handling & Debugging (6 questions)
  {
    id: "js-eh-01",
    topicId: "error-handling",
    topicName: "Error Handling & Debugging",
    question: "What is the execution behavior of the `finally` block in a `try...catch...finally` construct?",
    code: `try {
  doRiskyAction();
} catch (err) {
  console.error(err);
} finally {
  cleanupResources();
}`,
    options: [
      "It only executes if an error occurred in the `try` block.",
      "It only executes if NO error occurred in the `try` block.",
      "It ALWAYS executes regardless of whether an error was thrown or caught, even if the `try` or `catch` block contains a `return` statement.",
      "It runs in a separate thread asynchronously."
    ],
    correctAnswer: 2,
    explanation: "The `finally` block is guaranteed to execute unconditionally after `try` and `catch` finish, making it ideal for cleanup actions (closing connections, resetting loading states).",
    tip: "`finally` always runs - error or no error, return or no return."
  },
  {
    id: "js-eh-02",
    topicId: "error-handling",
    topicName: "Error Handling & Debugging",
    question: "What is the difference between a `ReferenceError` and a `TypeError`?",
    code: `// Case A: console.log(nonExistentVar);
// Case B: const num = 123; num.toUpperCase();`,
    options: [
      "`ReferenceError` occurs when attempting to access a variable that has not been declared; `TypeError` occurs when an operation is performed on a value of an inappropriate type (e.g. calling a non-function or accessing property of null/undefined).",
      "`TypeError` is only found in TypeScript.",
      "`ReferenceError` is a syntax error detected before compile time.",
      "They are identical errors."
    ],
    correctAnswer: 0,
    explanation: "Case A throws `ReferenceError: nonExistentVar is not defined`. Case B throws `TypeError: num.toUpperCase is not a function` because strings have `.toUpperCase()`, but numbers do not.",
    tip: "ReferenceError = variable not found; TypeError = wrong type or invalid operation on value."
  },
  {
    id: "js-eh-03",
    topicId: "error-handling",
    topicName: "Error Handling & Debugging",
    question: "How do you create and throw a custom error with an informative message in JavaScript?",
    code: null,
    options: [
      "`throw \"Error\";`",
      "`throw new Error(\"User ID must be a positive number\");`",
      "`error.create(\"User ID must be a positive number\");`",
      "`return new Error(\"Message\");`"
    ],
    correctAnswer: 1,
    explanation: "`throw new Error('message')` instantiates a standard Error object (which automatically captures a stack trace with file and line numbers) and throws it to interrupt execution.",
    tip: "Throwing `new Error(...)` preserves the full call stack trace for debugging."
  },
  {
    id: "js-eh-04",
    topicId: "error-handling",
    topicName: "Error Handling & Debugging",
    question: "What does the `debugger;` statement do when browser DevTools are open?",
    code: `function calculateTotal(items) {
  debugger;
  return items.reduce((a, b) => a + b, 0);
}`,
    options: [
      "Deletes all errors from the console.",
      "Pauses JavaScript execution at that line like a conditional breakpoint, allowing inspection of variables, call stack, and step-by-step execution.",
      "Prints the total memory usage of the function.",
      "Automatically fixes linting errors."
    ],
    correctAnswer: 1,
    explanation: "If DevTools are open, the `debugger` keyword acts as a programmed breakpoint, immediately halting execution so the developer can step through code and inspect scope variables.",
    tip: "`debugger;` is like an inline breakpoint in your code."
  },
  {
    id: "js-eh-05",
    topicId: "error-handling",
    topicName: "Error Handling & Debugging",
    question: "What useful format does `console.table()` display for arrays of objects?",
    code: `const users = [
  { id: 1, name: "Alice", role: "Admin" },
  { id: 2, name: "Bob", role: "User" }
];
console.table(users);`,
    options: [
      "Converts data to an HTML `<table>` injected into the page.",
      "Renders the data as a clean, interactive tabular grid in the developer console with column headers for each object property.",
      "Throws an error if the array has more than 5 items.",
      "Exports the data to a CSV file on the desktop."
    ],
    correctAnswer: 1,
    explanation: "`console.table()` formats array and object data into a clear tabular format in the console, making collections of objects easy to inspect at a glance.",
    tip: "Use `console.table()` for quick, structured inspection of array/object datasets."
  },
  {
    id: "js-eh-06",
    topicId: "error-handling",
    topicName: "Error Handling & Debugging",
    question: "How do `console.time('timerName')` and `console.timeEnd('timerName')` assist in performance debugging?",
    code: `console.time("dataProcess");
// run heavy loop
console.timeEnd("dataProcess");`,
    options: [
      "They measure and log the exact elapsed time in milliseconds taken between the two calls.",
      "They schedule a timer to execute after 1000ms.",
      "They slow down CPU execution for testing.",
      "They format current time as ISO strings."
    ],
    correctAnswer: 0,
    explanation: "`console.time()` starts an internal timer with a label, and `console.timeEnd()` stops the timer and prints the exact elapsed milliseconds to the console.",
    tip: "Use `console.time('label')` and `console.timeEnd('label')` to benchmark function execution."
  },

  // 23. Asynchronous JavaScript & Timers (6 questions)
  {
    id: "js-aj-01",
    topicId: "async-javascript",
    topicName: "Asynchronous JavaScript & Timers",
    question: "Why is asynchronous programming critical in client-side JavaScript?",
    code: null,
    options: [
      "Because synchronous operations that take time (like network requests or file reads) would block the single main thread, freezing the user interface and preventing user interaction.",
      "Because JavaScript cannot run functions without asynchronous promises.",
      "Because browsers do not allow synchronous variable declarations.",
      "To compile code to multi-threaded C++."
    ],
    correctAnswer: 0,
    explanation: "Because JavaScript is single-threaded, running long tasks synchronously blocks the main UI thread. Asynchronous APIs delegate waiting to the browser environment, keeping the UI responsive.",
    tip: "Async prevents long operations from freezing the UI."
  },
  {
    id: "js-aj-02",
    topicId: "async-javascript",
    topicName: "Asynchronous JavaScript & Timers",
    question: "What does `setTimeout(callback, delay)` return in the browser environment?",
    code: `const timerId = setTimeout(() => {
  console.log("Fired");
}, 1000);`,
    options: [
      "A Promise that resolves after 1 second.",
      "A positive integer representing the unique Timer ID, which can be passed to `clearTimeout(timerId)` to cancel the scheduled execution.",
      "The return value of the callback function.",
      "`undefined`"
    ],
    correctAnswer: 1,
    explanation: "`setTimeout` returns a numeric identifier (Timer ID). Passing this ID to `clearTimeout(timerId)` cancels the timer before it executes.",
    tip: "Store the timer ID so you can call `clearTimeout(timerId)` on component unmount."
  },
  {
    id: "js-aj-03",
    topicId: "async-javascript",
    topicName: "Asynchronous JavaScript & Timers",
    question: "What is the difference between `setTimeout` and `setInterval`?",
    code: null,
    options: [
      "`setTimeout` executes the callback ONCE after the specified delay; `setInterval` repeatedly executes the callback at every specified interval until cancelled with `clearInterval`.",
      "`setInterval` only runs in Node.js.",
      "`setTimeout` executes continuously.",
      "There is no functional difference."
    ],
    correctAnswer: 0,
    explanation: "`setTimeout` is a one-shot timer. `setInterval` fires periodically and repeatedly until stopped with `clearInterval(intervalId)`.",
    tip: "Always clear intervals with `clearInterval` to avoid memory leaks and infinite background timers."
  },
  {
    id: "js-aj-04",
    topicId: "async-javascript",
    topicName: "Asynchronous JavaScript & Timers",
    question: "Why does `setTimeout(fn, 0)` NOT execute immediately on the next CPU cycle?",
    code: `console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");`,
    options: [
      "The callback is placed in the Task/Macrotask Queue and can only run after the current synchronous call stack completely empties and microtasks drain.",
      "0 is converted to 1000ms by the browser.",
      "`setTimeout` is synchronous.",
      "The browser skips timers with 0ms delay."
    ],
    correctAnswer: 0,
    explanation: "Even with 0ms delay, the callback is queued in the Macrotask Queue. The JavaScript runtime must finish all synchronous statements (`1`, `3`) before the event loop pulls from the task queue to run `2`.",
    tip: "Output order is `1`, `3`, `2`."
  },
  {
    id: "js-aj-05",
    topicId: "async-javascript",
    topicName: "Asynchronous JavaScript & Timers",
    question: "What happens if a `setInterval` callback takes longer to execute than the interval delay itself?",
    code: null,
    options: [
      "Calls can stack up with virtually zero delay between executions, potentially causing UI stutter or memory issues.",
      "The browser automatically doubles the interval time.",
      "The timer throws an UnhandledIntervalError.",
      "The browser terminates JavaScript execution."
    ],
    correctAnswer: 0,
    explanation: "If interval execution time exceeds the delay, intervals queue up. A common best practice for async work is recursive `setTimeout`, which schedules the next call only AFTER the current operation finishes.",
    tip: "For async tasks, use recursive `setTimeout` instead of `setInterval`."
  },
  {
    id: "js-aj-06",
    topicId: "async-javascript",
    topicName: "Asynchronous JavaScript & Timers",
    question: "How do Web APIs (like timers, DOM events, and fetch) interact with the single JavaScript thread?",
    code: null,
    options: [
      "They run in the browser's background C++ / platform threads and post completed callbacks to JavaScript's task queue for the event loop to dispatch.",
      "They share the single JavaScript call stack directly.",
      "They block the call stack until the network packet arrives.",
      "They rewrite JavaScript bytecode at runtime."
    ],
    correctAnswer: 0,
    explanation: "Web APIs are provided by the browser host environment (outside the JS runtime). The browser handles network I/O and timers on separate background threads, pushing callbacks to JS queues when ready.",
    tip: "Web APIs handle the heavy background waiting so the JS thread stays responsive."
  },

  // 24. Callbacks & Higher-Order Functions (6 questions)
  {
    id: "js-cb-01",
    topicId: "callbacks",
    topicName: "Callbacks & Higher-Order Functions",
    question: "What is a Callback Function in JavaScript?",
    code: `function loadData(callback) {
  // fetch data...
  callback(data);
}`,
    options: [
      "A function passed as an argument into another function with the intention of being invoked inside the outer function at a later point in time.",
      "A function that calls the browser back button.",
      "A function that only returns numbers.",
      "A CSS transition trigger."
    ],
    correctAnswer: 0,
    explanation: "A callback is a function passed as a parameter to another function, which executes ('calls back') that function when an action or calculation completes.",
    tip: "Callbacks can be synchronous (like `array.map`) or asynchronous (like `setTimeout`)."
  },
  {
    id: "js-cb-02",
    topicId: "callbacks",
    topicName: "Callbacks & Higher-Order Functions",
    question: "What is 'Callback Hell' (also known as the Pyramid of Doom)?",
    code: `getUser(userId, (user) => {
  getOrders(user.id, (orders) => {
    getOrderDetails(orders[0].id, (details) => {
      getPayment(details.paymentId, (payment) => {
        // deeply nested code
      });
    });
  });
});`,
    options: [
      "A condition where too many nested asynchronous callbacks create deeply indented, hard-to-read, and error-prone code structures.",
      "A fatal runtime crash in Chrome V8.",
      "An infinite loop caused by `while(true)`.",
      "A missing return statement."
    ],
    correctAnswer: 0,
    explanation: "Callback hell occurs when multiple asynchronous operations depend on each other sequentially, resulting in deeply nested callback triangles that make error handling and readability difficult.",
    tip: "Promises and `async/await` were introduced specifically to solve Callback Hell."
  },
  {
    id: "js-cb-03",
    topicId: "callbacks",
    topicName: "Callbacks & Higher-Order Functions",
    question: "What is the standard 'Error-First Callback' convention commonly used in Node.js?",
    code: `fs.readFile("data.json", "utf8", (err, data) => {
  if (err) {
    console.error("Failed to read file:", err);
    return;
  }
  console.log("Content:", data);
});`,
    options: [
      "The first argument of the callback is reserved for an Error object (if an error occurred) or `null`/`undefined` (if successful); subsequent arguments contain the success data.",
      "The callback must throw an error before processing data.",
      "The error must be the last argument passed to the function.",
      "Errors cannot be passed in callbacks."
    ],
    correctAnswer: 0,
    explanation: "The Node.js error-first convention requires `(err, result) => { ... }`. If `err` is truthy, an error occurred; otherwise, `err` is null/undefined and `result` contains the payload.",
    tip: "Always check `if (err)` first before using data in Node callbacks."
  },
  {
    id: "js-cb-04",
    topicId: "callbacks",
    topicName: "Callbacks & Higher-Order Functions",
    question: "What is 'Inversion of Control' as a drawback of traditional callbacks?",
    code: null,
    options: [
      "You hand control of your callback function over to a third-party library or function, trusting it to call your callback the right number of times with the right parameters and not fail silently.",
      "When the keyboard inputs are reversed.",
      "When functions return variables instead of constants.",
      "When CSS styles override JavaScript values."
    ],
    correctAnswer: 0,
    explanation: "With callbacks, you surrender control of when, how often, and with what context your function is executed to another piece of code. Promises solve this by being trustable, uninvertible objects representing future values.",
    tip: "Promises provide guaranteed resolution semantics, fixing inversion of control."
  },
  {
    id: "js-cb-05",
    topicId: "callbacks",
    topicName: "Callbacks & Higher-Order Functions",
    question: "Which of the following array methods is a Synchronous Higher-Order Function that accepts a callback?",
    code: null,
    options: [
      "`array.map()`",
      "`setTimeout()`",
      "`fetch()`",
      "`Promise.resolve()`"
    ],
    correctAnswer: 0,
    explanation: "`array.map()` is a synchronous higher-order function: it calls the provided callback immediately for each element in the array and blocks until all transformations are complete.",
    tip: "Not all callbacks are asynchronous; `map`, `filter`, and `forEach` are synchronous callbacks."
  },
  {
    id: "js-cb-06",
    topicId: "callbacks",
    topicName: "Callbacks & Higher-Order Functions",
    question: "What is the output of this higher-order multiplier function?",
    code: `function withMultiplier(factor) {
  return function(arr) {
    return arr.map(n => n * factor);
  };
}
const tripleAll = withMultiplier(3);
console.log(tripleAll([1, 2, 3]));`,
    options: [
      "`[3, 6, 9]`",
      "`[1, 2, 3, 3]`",
      "`9`",
      "`undefined`"
    ],
    correctAnswer: 0,
    explanation: "`withMultiplier(3)` returns a function that maps any incoming array by multiplying each element by 3: `[1*3, 2*3, 3*3] = [3, 6, 9]`.",
    tip: "Composing higher-order functions makes reusable data transformation pipelines."
  },

  // 25. Promises & Combinators (7 questions)
  {
    id: "js-pr-01b",
    topicId: "promises",
    topicName: "Promises & Combinators",
    question: "What are the three possible states of a JavaScript Promise?",
    code: null,
    options: [
      "`Pending`, `Fulfilled`, `Rejected`",
      "`Starting`, `Running`, `Finished`",
      "`Open`, `Processing`, `Closed`",
      "`Resolved`, `Active`, `Terminated`"
    ],
    correctAnswer: 0,
    explanation: "A Promise starts in the `Pending` state. It can transition to either `Fulfilled` (operation succeeded with a value) or `Rejected` (operation failed with a reason/error). Once settled, its state cannot change.",
    tip: "A Promise is settled when it is either Fulfilled or Rejected."
  },
  {
    id: "js-pr-02b",
    topicId: "promises",
    topicName: "Promises & Combinators",
    question: "How do you create a new custom Promise in JavaScript?",
    code: null,
    options: [
      "`const p = new Promise((resolve, reject) => { ... });`",
      "`const p = Promise.create(() => { ... });`",
      "`const p = new AsyncFunction();`",
      "`const p = Promise.init(resolve, reject);`"
    ],
    correctAnswer: 0,
    explanation: "The `Promise` constructor takes an executor function with two arguments: `resolve` (call on success with data) and `reject` (call on failure with error).",
    tip: "Syntax: `new Promise((resolve, reject) => { ... })`."
  },
  {
    id: "js-pr-03b",
    topicId: "promises",
    topicName: "Promises & Combinators",
    question: "How does Promise Chaining work with `.then()`?",
    code: `fetchUser()
  .then(user => fetchOrders(user.id))
  .then(orders => calculateTotal(orders))
  .then(total => console.log("Total:", total))
  .catch(err => console.error("Error:", err));`,
    options: [
      "Each `.then()` handler returns a new value or Promise, which is passed as the input argument to the next `.then()` in the chain; any rejection anywhere triggers the `.catch()`.",
      "All `.then()` handlers execute simultaneously at the exact same instant.",
      "`.catch()` only catches errors in the very first `.then()`.",
      "Promise chaining causes browser memory crashes."
    ],
    correctAnswer: 0,
    explanation: "Every `.then()` returns a new Promise. Returning a value or another Promise inside `.then()` resolves the next `.then()` with that value. A single `.catch()` at the end handles rejections anywhere along the chain.",
    tip: "Promise chaining flattens nested callbacks into clean, linear pipelines."
  },
  {
    id: "js-pr-04b",
    topicId: "promises",
    topicName: "Promises & Combinators",
    question: "How does `Promise.all()` behave when one of the input promises rejects?",
    code: `const p1 = Promise.resolve("Data 1");
const p2 = Promise.reject(new Error("Network failed"));
const p3 = Promise.resolve("Data 3");
Promise.all([p1, p2, p3]);`,
    options: [
      "`Promise.all` fails fast: it immediately rejects with the error from `p2`, ignoring other successful promises.",
      "`Promise.all` waits for all promises and returns `['Data 1', null, 'Data 3']`.",
      "`Promise.all` automatically retries the failed promise 3 times.",
      "`Promise.all` resolves successfully with only `p1` and `p3`."
    ],
    correctAnswer: 0,
    explanation: "`Promise.all()` requires ALL promises to fulfill. If any single promise rejects, the entire `Promise.all()` rejects immediately with that error (all-or-nothing / fail-fast).",
    tip: "Use `Promise.all` when you need all requests to succeed together."
  },
  {
    id: "js-pr-05b",
    topicId: "promises",
    topicName: "Promises & Combinators",
    question: "How does `Promise.allSettled()` differ from `Promise.all()`?",
    code: `Promise.allSettled([p1, p2, p3]).then(results => console.log(results));`,
    options: [
      "`Promise.allSettled` waits for ALL promises to finish regardless of success or failure, returning an array of objects describing each result (`{ status: 'fulfilled', value }` or `{ status: 'rejected', reason }`).",
      "`Promise.allSettled` rejects if any promise fails.",
      "`Promise.allSettled` is synchronous.",
      "`Promise.allSettled` only runs on the server."
    ],
    correctAnswer: 0,
    explanation: "`Promise.allSettled()` never fails fast. It always resolves with an array showing the final outcome of every input promise, making it perfect when operations are independent.",
    tip: "Use `Promise.allSettled()` when you want results from all tasks even if some fail."
  },
  {
    id: "js-pr-06b",
    topicId: "promises",
    topicName: "Promises & Combinators",
    question: "What is the difference between `Promise.race()` and `Promise.any()`?",
    code: null,
    options: [
      "`Promise.race` settles (resolves OR rejects) as soon as the FIRST promise settles; `Promise.any` waits for the FIRST FULFILLED promise (ignoring rejections until all fail).",
      "Both methods do the exact same thing.",
      "`Promise.any` rejects immediately on first error.",
      "`Promise.race` is deprecated."
    ],
    correctAnswer: 0,
    explanation: "`Promise.race()` completes as soon as any promise finishes (win by speed, success or failure). `Promise.any()` completes on the first SUCCESSFUL fulfillment, only rejecting (with an `AggregateError`) if ALL input promises reject.",
    tip: "Race = fastest to finish (win or lose); Any = fastest to succeed (first winner)."
  },
  {
    id: "js-pr-07b",
    topicId: "promises",
    topicName: "Promises & Combinators",
    question: "What is the purpose of the `.finally()` handler on a Promise?",
    code: `showLoadingSpinner();
fetchData()
  .then(processData)
  .catch(handleError)
  .finally(() => hideLoadingSpinner());`,
    options: [
      "It executes clean-up code when the promise settles (either fulfilled or rejected), without receiving arguments or modifying the resolved value.",
      "It restarts the promise if it rejected.",
      "It cancels the fetch request.",
      "It converts the promise into a string."
    ],
    correctAnswer: 0,
    explanation: "`.finally()` runs guaranteed cleanup logic once the promise is settled, regardless of outcome, ensuring operations like hiding loading spinners or releasing locks always run.",
    tip: "Use `.finally()` to reset loading indicators and clean up state."
  },

  // 26. Async / Await (7 questions)
  {
    id: "js-aa-01",
    topicId: "async-await",
    topicName: "Async / Await",
    question: "What does putting the `async` keyword in front of a function declaration guarantee?",
    code: `async function getData() {
  return "Hello";
}`,
    options: [
      "The function will execute on a background CPU thread.",
      "The function ALWAYS returns a Promise; if a non-promise value is returned, it is automatically wrapped in `Promise.resolve()`.",
      "The function cannot contain loops.",
      "The function will automatically retry on errors."
    ],
    correctAnswer: 1,
    explanation: "An `async` function always returns a Promise. Returning `'Hello'` is equivalent to returning `Promise.resolve('Hello')`.",
    tip: "Async functions always wrap their return value in a Promise."
  },
  {
    id: "js-aa-02",
    topicId: "async-await",
    topicName: "Async / Await",
    question: "What does the `await` operator do inside an `async` function?",
    code: `async function loadProfile() {
  const res = await fetch("/api/user");
  const data = await res.json();
  return data;
}`,
    options: [
      "It pauses the execution of the `async` function until the awaited Promise settles, unwrapping its fulfilled value or throwing its rejection reason.",
      "It blocks the entire browser window and freezes animations.",
      "It converts JSON strings into XML.",
      "It terminates the function immediately."
    ],
    correctAnswer: 0,
    explanation: "`await` pauses only the async function execution non-blockingly until the Promise settles. Other JavaScript tasks and UI rendering continue smoothly on the event loop.",
    tip: "`await` lets you write asynchronous code that looks and reads like synchronous code."
  },
  {
    id: "js-aa-03",
    topicId: "async-await",
    topicName: "Async / Await",
    question: "How are errors in `await` expressions handled cleanly?",
    code: `async function fetchOrders() {
  try {
    const orders = await api.getOrders();
    return orders;
  } catch (error) {
    console.error("Failed to load orders:", error);
  }
}`,
    options: [
      "Using standard synchronous `try...catch` blocks around the `await` statements.",
      "Async functions cannot handle errors.",
      "By passing an error callback as the second argument to `await`.",
      "Errors are automatically ignored by `await`."
    ],
    correctAnswer: 0,
    explanation: "When an awaited Promise rejects, `await` throws that rejection reason as an exception, allowing standard `try...catch...finally` blocks to catch asynchronous errors cleanly.",
    tip: "Wrap your `await` calls inside `try...catch` for robust error handling."
  },
  {
    id: "js-aa-04",
    topicId: "async-await",
    topicName: "Async / Await",
    question: "What is the performance drawback of sequentially awaiting independent requests?",
    code: `// Sequential:
const users = await fetchUsers();
const products = await fetchProducts();`,
    options: [
      "Requests run in series (waterfall), so total time is `time(users) + time(products)`; if independent, they should run concurrently using `Promise.all([fetchUsers(), fetchProducts()])`.",
      "Sequential await throws a SyntaxError.",
      "There is no performance difference.",
      "The second request cancels the first request."
    ],
    correctAnswer: 0,
    explanation: "If requests don't depend on each other, awaiting them sequentially creates an unnecessary waterfall delay. Triggering them concurrently with `Promise.all` finishes in `Math.max(timeA, timeB)`.",
    tip: "Use `Promise.all([fetchA(), fetchB()])` for independent parallel async operations."
  },
  {
    id: "js-aa-05",
    topicId: "async-await",
    topicName: "Async / Await",
    question: "What is Top-Level `await` in modern JavaScript ES2022 / ES Modules?",
    code: `// In an ES Module file:
const response = await fetch("https://api.example.com/config");
export const config = await response.json();`,
    options: [
      "Using `await` outside an `async` function at the top level of an ES Module to pause module evaluation until the resource is loaded.",
      "A syntax error in all JavaScript environments.",
      "A method of running await in CSS files.",
      "An asynchronous HTML tag."
    ],
    correctAnswer: 0,
    explanation: "Top-level `await` allows ES Modules to act as async modules, awaiting asynchronous initialization tasks before exporting variables to importing modules.",
    tip: "Top-level `await` works directly inside ES Modules (`<script type='module'>` or Vite projects)."
  },
  {
    id: "js-aa-06",
    topicId: "async-await",
    topicName: "Async / Await",
    question: "What happens if you use `await` inside a standard synchronous `array.forEach()` callback?",
    code: `items.forEach(async (item) => {
  await saveToDb(item);
});
console.log("Finished all saves!");`,
    options: [
      "`forEach` does NOT wait for async callbacks; the callbacks run fire-and-forget in parallel and `'Finished all saves!'` logs before any saves complete.",
      "`forEach` automatically waits for all promises in sequence.",
      "Throws a CompileError.",
      "`forEach` converts to `Promise.all` automatically."
    ],
    correctAnswer: 0,
    explanation: "`Array.prototype.forEach` is not promise-aware and does not await async callbacks. To execute async operations sequentially in a loop, use `for (const item of items) { await save(item); }`.",
    tip: "Never use `async` with `forEach` if you expect it to wait! Use `for...of` or `Promise.all(arr.map(...))`."
  },
  {
    id: "js-aa-07",
    topicId: "async-await",
    topicName: "Async / Await",
    question: "What will this async function return?",
    code: `async function test() {
  return 42;
}
console.log(test());`,
    options: [
      "`42`",
      "`Promise { <fulfilled>: 42 }` (a resolved Promise object containing 42)",
      "`undefined`",
      "`NaN`"
    ],
    correctAnswer: 1,
    explanation: "Directly logging the return value of an async function without `await` or `.then()` reveals the underlying Promise object.",
    tip: "To get the value `42`, use `await test()` or `test().then(val => ...)`."
  },

  // 27. The Event Loop & Concurrency (7 questions)
  {
    id: "js-el-01",
    topicId: "event-loop",
    topicName: "The Event Loop & Concurrency",
    question: "What is the Call Stack in the JavaScript runtime engine?",
    code: null,
    options: [
      "A Last-In, First-Out (LIFO) data structure that keeps track of the currently executing function frames and execution context.",
      "A First-In, First-Out (FIFO) queue for network packets.",
      "A database table storing localStorage keys.",
      "A cache for image files."
    ],
    correctAnswer: 0,
    explanation: "The Call Stack tracks execution context. When a function is invoked, its frame is pushed to top of stack; when it returns, it is popped off (LIFO: Last-In, First-Out).",
    tip: "A 'Stack Overflow' occurs when infinite recursion fills the call stack."
  },
  {
    id: "js-el-02",
    topicId: "event-loop",
    topicName: "The Event Loop & Concurrency",
    question: "What is the Microtask Queue versus the Task / Macrotask Queue?",
    code: null,
    options: [
      "Microtasks (Promises `.then`, `queueMicrotask`, `MutationObserver`) have HIGHER priority and drain completely before the Event Loop picks up the next Macrotask (`setTimeout`, `setInterval`, I/O, UI events).",
      "Macrotasks have higher priority than microtasks.",
      "Both queues are processed at the exact same time.",
      "Microtasks only run when the user moves the mouse."
    ],
    correctAnswer: 0,
    explanation: "Microtasks have strict priority over Macrotasks. After every synchronous task on the Call Stack finishes, the engine processes ALL pending Microtasks until the microtask queue is empty before executing ONE Macrotask.",
    tip: "Priority: Synchronous Code -> All Microtasks -> One Macrotask -> Re-render."
  },
  {
    id: "js-el-03",
    topicId: "event-loop",
    topicName: "The Event Loop & Concurrency",
    question: "What is the exact console output order of the following classic event loop code?",
    code: `console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");`,
    options: [
      "`1`, `4`, `3`, `2`",
      "`1`, `2`, `3`, `4`",
      "`1`, `3`, `4`, `2`",
      "`1`, `4`, `2`, `3`"
    ],
    correctAnswer: 0,
    explanation: "1) `1` and `4` are synchronous on Call Stack. 2) Promise `.then` callback `3` is in the Microtask Queue and runs immediately after synchronous code. 3) `setTimeout` callback `2` is in the Macrotask Queue and runs last.",
    tip: "Remember: Sync (`1`, `4`) -> Microtask Promise (`3`) -> Macrotask Timer (`2`)."
  },
  {
    id: "js-el-04",
    topicId: "event-loop",
    topicName: "The Event Loop & Concurrency",
    question: "What is the primary role of the Event Loop?",
    code: null,
    options: [
      "To continuously monitor the Call Stack and task queues: when the Call Stack is empty, it pushes pending tasks from the queues onto the Call Stack for execution.",
      "To render 3D graphics using WebGL.",
      "To encrypt passwords in localStorage.",
      "To download npm packages automatically."
    ],
    correctAnswer: 0,
    explanation: "The Event Loop is a coordination mechanism that checks if the Call Stack is clear, then dequeues callbacks from microtask and macrotask queues to execute on the main thread.",
    tip: "The Event Loop bridges the asynchronous task queues with the single synchronous Call Stack."
  },
  {
    id: "js-el-05",
    topicId: "event-loop",
    topicName: "The Event Loop & Concurrency",
    question: "What happens if a Microtask continuously schedules another Microtask recursively (`queueMicrotask` loop)?",
    code: null,
    options: [
      "It starves the Event Loop, preventing Macrotasks (timers, clicks) and DOM rendering from ever executing, locking the browser UI.",
      "The browser automatically delegates it to a web worker.",
      "The CPU core is turned off.",
      "It resolves instantly without issues."
    ],
    correctAnswer: 0,
    explanation: "Because the engine must completely empty the Microtask Queue before yielding to macrotasks or UI rendering, an infinite microtask chain completely freezes the UI and event loop.",
    tip: "Microtask loops starve the event loop faster than timers."
  },
  {
    id: "js-el-06",
    topicId: "event-loop",
    topicName: "The Event Loop & Concurrency",
    question: "What is `queueMicrotask()` in modern JavaScript?",
    code: `queueMicrotask(() => {
  console.log("Microtask executed");
});`,
    options: [
      "A native API to explicitly schedule a function to run in the Microtask Queue after the current synchronous script without creating a dummy Promise.",
      "A method to slow down network requests.",
      "A legacy Node.js-only function.",
      "A CSS keyframe animator."
    ],
    correctAnswer: 0,
    explanation: "`queueMicrotask(callback)` allows scheduling a microtask directly and reliably without needing `Promise.resolve().then(...)` boilerplate.",
    tip: "`queueMicrotask()` is the cleanest standard way to schedule a microtask."
  },
  {
    id: "js-el-07",
    topicId: "event-loop",
    topicName: "The Event Loop & Concurrency",
    question: "In what order are DOM UI render updates executed relative to the Event Loop cycle?",
    code: null,
    options: [
      "The browser can perform rendering updates after the Call Stack and all pending Microtasks are completely clear, before the next Macrotask is processed.",
      "Rendering happens in the middle of executing a synchronous function.",
      "Rendering only happens when the page closes.",
      "Rendering happens inside the Microtask queue."
    ],
    correctAnswer: 0,
    explanation: "Rendering opportunities occur between macrotasks, once the call stack is empty and all microtasks have drained. Heavy synchronous loops prevent rendering, causing UI lag.",
    tip: "Keep the call stack and microtasks lean so the browser can maintain smooth 60fps rendering."
  },

  // 28. Maps & Keyed Collections (6 questions)
  {
    id: "js-mp-01",
    topicId: "maps",
    topicName: "Maps & Keyed Collections",
    question: "What is the primary advantage of a `Map` over a standard plain JavaScript Object (`{}`)?",
    code: `const map = new Map();
const objKey = { id: 1 };
map.set(objKey, "UserData");`,
    options: [
      "In a `Map`, keys can be of ANY type (including objects, functions, numbers, and booleans), and iteration order of keys is strictly guaranteed by insertion order.",
      "Maps are automatically saved to local storage.",
      "Maps cannot store string values.",
      "Plain Objects are deprecated in ES6."
    ],
    correctAnswer: 0,
    explanation: "Plain object keys must be Strings or Symbols. A `Map` allows any arbitrary type (including object references, functions, primitives) as keys, maintains insertion order, and has a direct `.size` property.",
    tip: "Use `Map` when you need non-string keys, frequent additions/removals, or a reliable `.size`."
  },
  {
    id: "js-mp-02",
    topicId: "maps",
    topicName: "Maps & Keyed Collections",
    question: "How do you check the number of entries in a `Map` instance?",
    code: `const cache = new Map();
cache.set("a", 1);
cache.set("b", 2);`,
    options: [
      "`cache.length`",
      "`cache.size`",
      "`cache.count()`",
      "`Object.keys(cache).length`"
    ],
    correctAnswer: 1,
    explanation: "The `Map.prototype.size` accessor property returns the number of key-value elements in the Map object.",
    tip: "Arrays have `.length`; Maps and Sets have `.size`."
  },
  {
    id: "js-mp-03",
    topicId: "maps",
    topicName: "Maps & Keyed Collections",
    question: "Which Map methods are used to set, retrieve, and verify existence of a key?",
    code: null,
    options: [
      "`.set(key, val)`, `.get(key)`, and `.has(key)`",
      "`.add(key, val)`, `.read(key)`, and `.exists(key)`",
      "`.push(key, val)`, `.pop(key)`, and `.includes(key)`",
      "`.put(key, val)`, `.fetch(key)`, and `.contains(key)`"
    ],
    correctAnswer: 0,
    explanation: "`map.set(k, v)` inserts/updates an entry; `map.get(k)` retrieves the value (or `undefined`); `map.has(k)` returns a boolean indicating whether the key exists.",
    tip: "Map operations: `set`, `get`, `has`, `delete`, `clear`."
  },
  {
    id: "js-mp-04",
    topicId: "maps",
    topicName: "Maps & Keyed Collections",
    question: "What happens when using two distinct object literals as keys in a Map?",
    code: `const map = new Map();
map.set({}, "Alpha");
map.set({}, "Beta");
console.log(map.size);`,
    options: [
      "`1` because both keys are converted to `'[object Object]'`.",
      "`2` because each object literal `{}` creates a unique memory reference, and Maps use reference equality for object keys.",
      "Throws a TypeError.",
      "`0`"
    ],
    correctAnswer: 1,
    explanation: "Unlike plain objects (which coerce keys to `\"[object Object]\"`), Maps distinguish object keys by memory reference. The two `{}` literals have different references, creating 2 distinct entries.",
    tip: "Maps compare object keys by reference equality (`===`)."
  },
  {
    id: "js-mp-05",
    topicId: "maps",
    topicName: "Maps & Keyed Collections",
    question: "How do you iterate over both keys and values of a Map using `for...of`?",
    code: `const map = new Map([["name", "Alex"], ["role", "Admin"]]);`,
    options: [
      "`for (const [key, value] of map) { console.log(key, value); }`",
      "`for (const key in map) { console.log(key); }`",
      "`map.map(([k, v]) => ...)`",
      "`for (const item of map.list())`"
    ],
    correctAnswer: 0,
    explanation: "A Map is directly iterable. Its default iterator returns `[key, value]` entries, allowing clean array destructuring `for (const [key, value] of map)`.",
    tip: "`for (const [k, v] of map)` iterates entries in exact insertion order."
  },
  {
    id: "js-mp-06",
    topicId: "maps",
    topicName: "Maps & Keyed Collections",
    question: "What does `map.delete(key)` return?",
    code: `const map = new Map([["status", 200]]);
const res1 = map.delete("status");
const res2 = map.delete("nonExistent");`,
    options: [
      "`res1` is `true` (element found and removed); `res2` is `false` (element was not present).",
      "The removed value `200`.",
      "The mutated map instance.",
      "`undefined` in all cases."
    ],
    correctAnswer: 0,
    explanation: "`map.delete(key)` returns `true` if an element in the Map object existed and has been removed, or `false` if the element did not exist.",
    tip: "`delete()` returns a boolean indicating success."
  },

  // 29. Inheritance & Prototype Chain (6 questions)
  {
    id: "js-in-01",
    topicId: "inheritance",
    topicName: "Inheritance & Prototype Chain",
    question: "How does Prototypal Inheritance work in JavaScript?",
    code: null,
    options: [
      "Objects inherit properties and methods directly from other objects through an internal link known as the Prototype Chain (`[[Prototype]]` / `__proto__`).",
      "JavaScript copies all methods physically into every newly created object.",
      "Inheritance is only possible by importing C++ libraries.",
      "Inheritance does not exist in JavaScript."
    ],
    correctAnswer: 0,
    explanation: "Every JavaScript object has an internal link to a prototype object. If a property is not found on the object itself, the engine traverses up the prototype chain until it finds the property or reaches `null`.",
    tip: "The prototype chain enables memory-efficient method sharing across instances."
  },
  {
    id: "js-in-02",
    topicId: "inheritance",
    topicName: "Inheritance & Prototype Chain",
    question: "In ES6 Class syntax, how does a subclass inherit from a parent class?",
    code: `class Animal {
  constructor(name) { this.name = name; }
}
class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }
}`,
    options: [
      "Using the `extends` keyword, and calling `super()` inside the derived constructor before accessing `this`.",
      "Using the `implements` keyword.",
      "Subclasses cannot have constructors.",
      "By copying all code into Dog manually."
    ],
    correctAnswer: 0,
    explanation: "`class Child extends Parent` establishes class inheritance. In a derived constructor, you MUST call `super(...)` to invoke the parent constructor before accessing `this`.",
    tip: "Calling `super()` initializes the parent class state and binds `this`."
  },
  {
    id: "js-in-03",
    topicId: "inheritance",
    topicName: "Inheritance & Prototype Chain",
    question: "What happens if you access `this` before calling `super()` in a derived class constructor?",
    code: `class Sub extends Base {
  constructor() {
    this.value = 10;
    super();
  }
}`,
    options: [
      "Throws a `ReferenceError: Must call super constructor in derived class before accessing 'this'`.",
      "Silently sets `this.value = 10`.",
      "Creates a global variable.",
      "Compiles with a warning."
    ],
    correctAnswer: 0,
    explanation: "Derived classes do not have their own `this` binding until `super()` is called. Accessing `this` before `super()` results in a `ReferenceError`.",
    tip: "Rule: `super()` must always be the first statement in derived class constructors."
  },
  {
    id: "js-in-04",
    topicId: "inheritance",
    topicName: "Inheritance & Prototype Chain",
    question: "What is Method Overriding in JavaScript inheritance?",
    code: `class Parent {
  speak() { return "Hello"; }
}
class Child extends Parent {
  speak() { return super.speak() + ", World!"; }
}`,
    options: [
      "When a derived class defines a method with the same name as a parent class method, providing its own specialized implementation (and optionally calling `super.method()`).",
      "When two methods have different parameter counts in the same class.",
      "Deleting methods from the prototype.",
      "A compiler error in ES6."
    ],
    correctAnswer: 0,
    explanation: "Overriding allows a subclass to provide a specific implementation of a method already defined in its superclass. Calling `super.speak()` executes the parent version.",
    tip: "Use `super.methodName()` to reuse parent method logic inside an overridden method."
  },
  {
    id: "js-in-05",
    topicId: "inheritance",
    topicName: "Inheritance & Prototype Chain",
    question: "What does `Object.create(proto)` do?",
    code: `const parent = { greet: () => "Hi!" };
const child = Object.create(parent);`,
    options: [
      "Creates a new empty object with its `[[Prototype]]` explicitly set to the specified `parent` object.",
      "Creates a deep clone of the `parent` object.",
      "Freezes the `parent` object.",
      "Deletes properties from `parent`."
    ],
    correctAnswer: 0,
    explanation: "`Object.create(proto)` creates a new object whose prototype is `proto`, establishing a clean prototype inheritance relationship without invoking a constructor.",
    tip: "`Object.create(proto)` is the direct way to set an object's prototype."
  },
  {
    id: "js-in-06",
    topicId: "inheritance",
    topicName: "Inheritance & Prototype Chain",
    question: "What is at the very top (end) of almost all JavaScript prototype chains?",
    code: null,
    options: [
      "`Object.prototype`, whose own prototype is `null`.",
      "`Function.prototype`",
      "`window.document`",
      "`Array.prototype`"
    ],
    correctAnswer: 0,
    explanation: "Almost all objects in JavaScript descend from `Object.prototype`. The prototype of `Object.prototype` is `null`, terminating the prototype lookup chain.",
    tip: "The prototype chain terminates when `[[Prototype]]` is `null`."
  },

  // 30. Browser APIs & Web APIs (7 questions)
  {
    id: "js-ba-01",
    topicId: "browser-apis",
    topicName: "Browser APIs & Web APIs",
    question: "What is the primary difference between `localStorage` and `sessionStorage`?",
    code: null,
    options: [
      "`localStorage` data persists indefinitely across browser sessions and computer restarts until explicitly cleared; `sessionStorage` data is cleared as soon as the specific browser tab or window is closed.",
      "`localStorage` can only store numbers.",
      "`sessionStorage` data is shared across all open tabs and windows.",
      "`localStorage` is automatically sent with every HTTP request header."
    ],
    correctAnswer: 0,
    explanation: "Both store key-value string pairs per origin (typically ~5-10MB). `localStorage` persists until cleared by code or user. `sessionStorage` is scoped to the current tab session and wiped upon tab close.",
    tip: "Use `localStorage` for user preferences/theme; use `sessionStorage` for single-session draft data."
  },
  {
    id: "js-ba-02",
    topicId: "browser-apis",
    topicName: "Browser APIs & Web APIs",
    question: "Why must objects and arrays be serialized with `JSON.stringify()` before saving to `localStorage`?",
    code: `const settings = { theme: "dark", volume: 80 };
localStorage.setItem("userSettings", JSON.stringify(settings));
const loaded = JSON.parse(localStorage.getItem("userSettings"));`,
    options: [
      "Because Web Storage (`localStorage`/`sessionStorage`) only stores string values; passing a raw object directly coerces it to the useless string `'[object Object]'`.",
      "To encrypt data against hackers.",
      "Because numbers are not supported in browsers.",
      "To compress file size by 90%."
    ],
    correctAnswer: 0,
    explanation: "`localStorage.setItem(key, value)` converts non-strings via `.toString()`. Without `JSON.stringify()`, objects become `\"[object Object]\"` and data is lost.",
    tip: "Always pair `JSON.stringify()` on save with `JSON.parse()` on load for storage."
  },
  {
    id: "js-ba-03",
    topicId: "browser-apis",
    topicName: "Browser APIs & Web APIs",
    question: "How does the native `fetch()` API indicate HTTP errors (like 404 Not Found or 500 Server Error)?",
    code: `const response = await fetch("/api/data");
if (!response.ok) {
  throw new Error("HTTP error " + response.status);
}`,
    options: [
      "`fetch()` does NOT reject on HTTP 404/500 status codes; it resolves normally with `response.ok === false`. It ONLY rejects on actual network failure (offline, DNS lookup failed, CORS blocked).",
      "`fetch()` automatically rejects on any status code other than 200.",
      "`fetch()` throws a SyntaxError on 404.",
      "`fetch()` reloads the browser page on 500."
    ],
    correctAnswer: 0,
    explanation: "A common pitfall: `fetch()` resolves its promise even for HTTP 404 or 500 errors. You must manually check `if (!response.ok)` (status in 200-299 range) to handle HTTP error codes.",
    tip: "Always check `if (!response.ok)` when using `fetch()`."
  },
  {
    id: "js-ba-04",
    topicId: "browser-apis",
    topicName: "Browser APIs & Web APIs",
    question: "What is the difference between `JSON.stringify()` and `JSON.parse()`?",
    code: null,
    options: [
      "`JSON.stringify()` converts a JavaScript object/value into a JSON string; `JSON.parse()` converts a JSON string back into a JavaScript object/value.",
      "`JSON.parse()` creates HTML elements.",
      "They are interchangeable functions.",
      "`JSON.stringify()` only works in Node.js."
    ],
    correctAnswer: 0,
    explanation: "`JSON.stringify(data)` serializes JavaScript data structures into JSON formatted text. `JSON.parse(text)` deserializes a valid JSON string into native JS objects/arrays.",
    tip: "Stringify = Object to String. Parse = String to Object."
  },
  {
    id: "js-ba-05",
    topicId: "browser-apis",
    topicName: "Browser APIs & Web APIs",
    question: "How do you navigate the user to a new URL programmatically in browser JavaScript?",
    code: null,
    options: [
      "`window.location.href = 'https://example.com';`",
      "`document.redirect('https://example.com');`",
      "`browser.goTo('https://example.com');`",
      "`window.navigate.url('https://example.com');`"
    ],
    correctAnswer: 0,
    explanation: "Assigning a URL string to `window.location.href` (or calling `window.location.assign(url)`) triggers browser navigation to the target address.",
    tip: "`window.location.href = url` navigates to a new page in the browser."
  },
  {
    id: "js-ba-06",
    topicId: "browser-apis",
    topicName: "Browser APIs & Web APIs",
    question: "How do you copy text to the system clipboard asynchronously in modern web applications?",
    code: `await navigator.clipboard.writeText("Copied code snippet!");`,
    options: [
      "`navigator.clipboard.writeText(text)` (returns a Promise)",
      "`document.copy(text)`",
      "`window.clipboard.set(text)`",
      "`localStorage.setItem('clipboard', text)`"
    ],
    correctAnswer: 0,
    explanation: "The modern Async Clipboard API provides `navigator.clipboard.writeText(string)`, returning a Promise that resolves when the text is successfully copied.",
    tip: "`await navigator.clipboard.writeText(text)` is the modern standard for copy-to-clipboard buttons."
  },
  {
    id: "js-ba-07",
    topicId: "browser-apis",
    topicName: "Browser APIs & Web APIs",
    question: "What is the purpose of `localStorage.removeItem(key)` vs `localStorage.clear()`?",
    code: null,
    options: [
      "`removeItem(key)` deletes only the specified key-value pair; `clear()` deletes ALL key-value pairs stored for that origin.",
      "`removeItem` deletes the entire browser history.",
      "`clear` only removes null values.",
      "Both delete all keys on the computer."
    ],
    correctAnswer: 0,
    explanation: "`localStorage.removeItem('token')` deletes the single `'token'` item. `localStorage.clear()` wipes all data stored in localStorage for the current domain.",
    tip: "Use `removeItem(key)` for targeted removal and `clear()` for full logout resets."
  },

  // 31. Clean Code & Best Practices (6 questions)
  {
    id: "js-bp-01",
    topicId: "best-practices",
    topicName: "Clean Code & Best Practices",
    question: "What casing convention is standard in JavaScript for constants with immutable global configuration values?",
    code: `const MAX_RETRY_COUNT = 3;
const API_BASE_URL = "https://api.example.com";`,
    options: [
      "UPPER_SNAKE_CASE (all caps with underscores)",
      "kebab-case",
      "camelCase",
      "PascalCase"
    ],
    correctAnswer: 0,
    explanation: "Global compile-time configuration constants that never change are conventionally written in `UPPER_SNAKE_CASE` (e.g. `MAX_ITEMS`, `PORT_NUMBER`). Standard variables use `camelCase`.",
    tip: "Use UPPER_SNAKE_CASE for hardcoded configuration constants."
  },
  {
    id: "js-bp-02",
    topicId: "best-practices",
    topicName: "Clean Code & Best Practices",
    question: "What is a 'Magic Number' or 'Magic String' in programming, and why is it considered an anti-pattern?",
    code: `// BAD:
if (user.role === 4) { ... }

// GOOD:
const ROLE_ADMIN = 4;
if (user.role === ROLE_ADMIN) { ... }`,
    options: [
      "Hardcoded literal values with unexplained meaning scattered through code; extracting them into named constants clarifies intent and prevents typos.",
      "A number that triggers JavaScript animations.",
      "A random number generated by `Math.random()`.",
      "An encryption algorithm key."
    ],
    correctAnswer: 0,
    explanation: "Magic numbers/strings are unexplained literal values in code. Replacing them with named constants makes code self-documenting and easy to update in one central place.",
    tip: "Always replace cryptic literal values with meaningful constant names."
  },
  {
    id: "js-bp-03",
    topicId: "best-practices",
    topicName: "Clean Code & Best Practices",
    question: "Why is immutability (avoiding mutating inputs/state directly) strongly encouraged in modern JavaScript and React?",
    code: `// BAD (mutating input):
function addItem(arr, item) {
  arr.push(item);
  return arr;
}

// GOOD (immutable copy):
function addItem(arr, item) {
  return [...arr, item];
}`,
    options: [
      "Pure immutable functions avoid hidden side effects, make state predictable, simplify debugging, and enable React change detection to work efficiently.",
      "Immutability speeds up CPU execution by 10x.",
      "Mutating arrays causes a SyntaxError in ES6.",
      "Immutability removes the need for functions."
    ],
    correctAnswer: 0,
    explanation: "Immutability ensures functions don't unexpectedly modify data shared elsewhere. In React, reference changes (`oldState !== newState`) trigger accurate re-renders.",
    tip: "Use spread `[...arr, item]` or `{ ...obj, prop: val }` instead of mutating existing state."
  },
  {
    id: "js-bp-04",
    topicId: "best-practices",
    topicName: "Clean Code & Best Practices",
    question: "Which of the following functions best demonstrates the principle of 'Short Functions with Single Responsibility'?",
    code: null,
    options: [
      "A 200-line function that validates inputs, fetches records from database, calculates taxes, converts currency, formats PDF, and sends emails.",
      "Small, focused functions (10-20 lines) that each perform a single dedicated task and compose together cleanly.",
      "A function with 15 nested `if` statements.",
      "A function that modifies global variables directly."
    ],
    correctAnswer: 1,
    explanation: "Functions should do one task well. Small, focused functions are easier to understand, test, debug, and reuse.",
    tip: "Keep functions short and focused on doing a single thing well."
  },
  {
    id: "js-bp-05",
    topicId: "best-practices",
    topicName: "Clean Code & Best Practices",
    question: "What is the purpose of Linters (like ESLint) and Formatters (like Prettier) in JavaScript teams?",
    code: null,
    options: [
      "Linters analyze code statically to catch potential bugs and enforce best practice rules; formatters automatically enforce consistent code style and formatting across the team.",
      "They run code directly in the browser.",
      "They compile JavaScript into Java bytecode.",
      "They replace unit testing completely."
    ],
    correctAnswer: 0,
    explanation: "ESLint detects bugs, syntax errors, and anti-patterns. Prettier ensures uniform spacing, indentation, and quotes across all project files.",
    tip: "Linters catch bugs; formatters enforce formatting."
  },
  {
    id: "js-bp-06",
    topicId: "best-practices",
    topicName: "Clean Code & Best Practices",
    question: "What is the Early Return Pattern in clean coding?",
    code: `function getDiscount(user) {
  if (!user) return 0;
  if (user.isVip) return 0.20;
  if (user.isMember) return 0.10;
  return 0.05;
}`,
    options: [
      "Returning immediately as soon as a condition or edge case is determined, avoiding unnecessary `else` statements and reducing nesting depth.",
      "Returning from a function before it is called.",
      "Always returning `null`.",
      "A timer that fires early."
    ],
    correctAnswer: 0,
    explanation: "Early returns eliminate unnecessary `else` and nested branches. Once a return statement runs, execution stops immediately, keeping code flat and clear.",
    tip: "If you have a return inside `if (...)`, you don't need `else` after it!"
  }
];
