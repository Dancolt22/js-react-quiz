export const reactPart2 = [
  // Module 6: Handling Events (12 questions)
  {
    id: "r19-m6-01",
    topicId: "react-events",
    topicName: "Module 6: Handling Events",
    question: "What are React SyntheticEvents?",
    code: `<button onClick={(e) => console.log(e)}>Click Me</button>`,
    options: [
      "A cross-browser wrapper around the browser's native event that normalizes event behaviors across all browsers according to the W3C spec.",
      "Fake events created for automated testing only.",
      "Events generated only by CSS animations.",
      "Asynchronous promises that never resolve."
    ],
    correctAnswer: 0,
    explanation: "React wraps native browser events in a `SyntheticEvent` object to ensure consistent properties and behaviors across different browsers and operating systems.",
    tip: "SyntheticEvents have the same interface as native events (`stopPropagation`, `preventDefault`)."
  },
  {
    id: "r19-m6-02",
    topicId: "react-events",
    topicName: "Module 6: Handling Events",
    question: "What is the critical syntax difference between passing an event handler vs invoking it immediately in JSX?",
    code: `// Case A: <button onClick={handleClick}>Click</button>
// Case B: <button onClick={handleClick()}>Click</button>`,
    options: [
      "Case A passes the function REFERENCE (executes only on click); Case B INVOKES the function immediately during component render, causing unintended immediate execution and potential infinite loops.",
      "Case B is the standard recommended React way.",
      "Both cases behave identically.",
      "Case A throws a syntax error."
    ],
    correctAnswer: 0,
    explanation: "In JSX, you must pass the function reference (`onClick={handleClick}` or `onClick={() => handleClick(id)}`). Adding parentheses `onClick={handleClick()}` calls the function right during render.",
    tip: "Pass the function, don't call it: `onClick={handleClick}`, NOT `onClick={handleClick()}`."
  },
  {
    id: "r19-m6-03",
    topicId: "react-events",
    topicName: "Module 6: Handling Events",
    question: "How do you pass a custom parameter (e.g. item ID) to an event handler in React?",
    code: null,
    options: [
      "`<button onClick={() => handleDelete(item.id)}>Delete</button>`",
      "`<button onClick={handleDelete(item.id)}>Delete</button>`",
      "`<button onClick=\"handleDelete(item.id)\">Delete</button>`",
      "`<button onClick={item.id.handleDelete}>Delete</button>`"
    ],
    correctAnswer: 0,
    explanation: "Wrap the function call in an arrow function callback `<button onClick={() => handleDelete(item.id)}>` so it only executes when the button is clicked, passing `item.id` as an argument.",
    tip: "Use an inline arrow function to pass parameters: `onClick={() => doAction(param)}`."
  },
  {
    id: "r19-m6-04",
    topicId: "react-events",
    topicName: "Module 6: Handling Events",
    question: "Why is `e.preventDefault()` used inside form submit handlers in React?",
    code: `function handleSubmit(e) {
  e.preventDefault();
  // submit data via state/fetch
}`,
    options: [
      "To prevent the browser's default form submission behavior (which reloads the entire web page with an HTTP GET/POST request), keeping the user in the SPA.",
      "To clear all text fields automatically.",
      "To close the browser tab.",
      "To disable keyboard inputs."
    ],
    correctAnswer: 0,
    explanation: "In Single Page Applications, forms are handled via JavaScript state and APIs. `e.preventDefault()` prevents the native browser page reload.",
    tip: "Always call `e.preventDefault()` in React `onSubmit` handlers."
  },
  {
    id: "r19-m6-05",
    topicId: "react-events",
    topicName: "Module 6: Handling Events",
    question: "What casing convention is used for event listeners in JSX compared to HTML?",
    code: null,
    options: [
      "JSX uses camelCase (`onClick`, `onChange`, `onSubmit`, `onKeyDown`); HTML uses all lowercase (`onclick`, `onchange`, `onsubmit`).",
      "JSX uses kebab-case (`on-click`).",
      "JSX uses PascalCase (`OnClick`).",
      "JSX uses UPPERCASE (`ONCLICK`)."
    ],
    correctAnswer: 0,
    explanation: "React event attributes strictly use camelCase: `onClick`, `onMouseEnter`, `onDoubleClick`, `onFocus`, etc.",
    tip: "Always write React events in camelCase: `onClick`, `onChange`."
  },
  {
    id: "r19-m6-06",
    topicId: "react-events",
    topicName: "Module 6: Handling Events",
    question: "How do you access the value typed into an `<input>` element within an `onChange` handler?",
    code: `const handleChange = (e) => {
  const value = e.target.value;
};`,
    options: [
      "`e.target.value`",
      "`e.value.target`",
      "`document.inputValue`",
      "`e.input.text`"
    ],
    correctAnswer: 0,
    explanation: "`e.target` refers to the input DOM element dispatching the change event, and `e.target.value` contains its current string value.",
    tip: "`e.target.value` is the standard way to read input fields."
  },
  {
    id: "r19-m6-07",
    topicId: "react-events",
    topicName: "Module 6: Handling Events",
    question: "How does event bubbling work with React SyntheticEvents?",
    code: null,
    options: [
      "React SyntheticEvents bubble up the React component tree according to standard DOM bubbling, and `e.stopPropagation()` stops the bubbling.",
      "React events never bubble.",
      "React events bubble directly to the database.",
      "React events can only bubble if registered on the `body` tag."
    ],
    correctAnswer: 0,
    explanation: "React events follow standard bubbling. A click on a child component bubbles up through parent JSX elements unless `e.stopPropagation()` is invoked.",
    tip: "Call `e.stopPropagation()` to stop child clicks from triggering parent container handlers."
  },
  {
    id: "r19-m6-08",
    topicId: "react-events",
    topicName: "Module 6: Handling Events",
    question: "How do you capture keyboard events like the Enter key in React?",
    code: `function handleKeyDown(e) {
  if (e.key === "Enter") {
    submitAnswer();
  }
}`,
    options: [
      "Check `e.key === 'Enter'` (or `e.code === 'Enter'`) inside an `onKeyDown` or `onKeyUp` handler.",
      "`onEnterPress` prop on the input.",
      "`document.onEnterKey()`",
      "Keyboard events cannot be listened to in React."
    ],
    correctAnswer: 0,
    explanation: "Attach `onKeyDown={handleKeyDown}` and inspect `e.key` for modern standard key names (`'Enter'`, `'Escape'`, `'ArrowUp'`, `'Backspace'`).",
    tip: "Use `e.key === 'Enter'` or `e.key === 'Escape'` for clean keyboard navigation."
  },
  {
    id: "r19-m6-09",
    topicId: "react-events",
    topicName: "Module 6: Handling Events",
    question: "What is Event Delegation in React's internal architecture?",
    code: null,
    options: [
      "React attaches single root event listeners to the root DOM container (`#root`) rather than attaching individual event listeners to every individual DOM node, optimizing memory usage.",
      "Delegating event handling to a third-party server.",
      "Running events in Web Workers.",
      "Deleting event listeners when the mouse leaves the screen."
    ],
    correctAnswer: 0,
    explanation: "React manages event listeners efficiently by attaching root handlers to the root container and dispatching SyntheticEvents to the appropriate components.",
    tip: "React handles root event delegation automatically under the hood."
  },
  {
    id: "r19-m6-10",
    topicId: "react-events",
    topicName: "Module 6: Handling Events",
    question: "What is the difference between `onMouseEnter` / `onMouseLeave` and `onMouseOver` / `onMouseOut` in React?",
    code: null,
    options: [
      "`onMouseEnter` / `onMouseLeave` do NOT bubble when moving between child elements of the container; `onMouseOver` / `onMouseOut` bubble up from child elements.",
      "`onMouseEnter` only works on touchscreens.",
      "There is no difference.",
      "`onMouseOver` is deprecated in React 19."
    ],
    correctAnswer: 0,
    explanation: "`onMouseEnter` and `onMouseLeave` fire only when entering or exiting the boundary of the element itself without firing repeatedly on inner children, making them ideal for hover menus.",
    tip: "Use `onMouseEnter`/`onMouseLeave` for dropdowns and tooltips to avoid flickering."
  },
  {
    id: "r19-m6-11",
    topicId: "react-events",
    topicName: "Module 6: Handling Events",
    question: "How do you handle checkbox state changes in React?",
    code: `<input type="checkbox" checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} />`,
    options: [
      "Use `e.target.checked` (a boolean) rather than `e.target.value`.",
      "Use `e.target.selected`",
      "Use `e.target.value === 'true'`",
      "Checkboxes do not use `onChange`."
    ],
    correctAnswer: 0,
    explanation: "For checkboxes, the boolean state is accessed via `e.target.checked` and controlled via the `checked={boolean}` prop.",
    tip: "Text inputs use `e.target.value`; checkboxes use `e.target.checked`."
  },
  {
    id: "r19-m6-12",
    topicId: "react-events",
    topicName: "Module 6: Handling Events",
    question: "Can an event handler function in React be an `async` function?",
    code: `const handleSave = async (e) => {
  e.preventDefault();
  setIsSaving(true);
  await api.saveData(formData);
  setIsSaving(false);
};`,
    options: [
      "Yes, event handler functions can be asynchronous (`async (e) => { ... }`) and use `await` expressions.",
      "No, React will throw a compile error if an event handler is marked `async`.",
      "Async event handlers only work in React Server Components.",
      "Only if `e.preventDefault()` is omitted."
    ],
    correctAnswer: 0,
    explanation: "Event handlers are standard JavaScript functions and can freely be marked `async` to perform asynchronous requests, update loading state, and handle errors.",
    tip: "Async event handlers are standard for API calls and form submissions."
  },

  // Module 7: Conditional Rendering (12 questions)
  {
    id: "r19-m7-01",
    topicId: "react-conditional-rendering",
    topicName: "Module 7: Conditional Rendering",
    question: "What is Conditional Rendering in React?",
    code: null,
    options: [
      "Displaying different UI elements or components based on specific conditions, state values, or props.",
      "Rendering components only on specific days of the week.",
      "Rendering CSS styles using conditional media queries only.",
      "A feature that renders components randomly."
    ],
    correctAnswer: 0,
    explanation: "Conditional rendering allows components to decide which UI to show depending on state (e.g., showing a loading spinner, login form, or user profile).",
    tip: "Conditional rendering works using standard JavaScript operators (ternary, `&&`, `if`)."
  },
  {
    id: "r19-m7-02",
    topicId: "react-conditional-rendering",
    topicName: "Module 7: Conditional Rendering",
    question: "What is the primary way to render between TWO alternate UI views inline in JSX?",
    code: `return (
  <div>
    {isLoggedIn ? <UserDashboard /> : <LoginForm />}
  </div>
);`,
    options: [
      "The JavaScript Ternary Operator (`condition ? <ComponentA /> : <ComponentB />`).",
      "The `if...else` statement inside `{}`.",
      "The `switch` statement inside `{}`.",
      "The `<choice>` HTML tag."
    ],
    correctAnswer: 0,
    explanation: "The ternary operator is an expression, so it can be used directly inside JSX `{}` to choose between two alternate UI components based on a boolean condition.",
    tip: "Ternary is the standard inline choice for either/or rendering."
  },
  {
    id: "r19-m7-03",
    topicId: "react-conditional-rendering",
    topicName: "Module 7: Conditional Rendering",
    question: "What is the famous 'Number 0' Gotcha when using the Logical AND (`&&`) operator in JSX?",
    code: `const items = [];
return (
  <div>
    {items.length && <ItemList items={items} />}
  </div>
);`,
    options: [
      "Because `items.length` is `0` (a falsy number), JavaScript's `&&` returns `0`, causing React to render a visible `0` on the web page rather than rendering nothing!",
      "The app crashes with a TypeError.",
      "React converts 0 into true.",
      "The entire page is hidden."
    ],
    correctAnswer: 0,
    explanation: "Logical `&&` returns the first falsy operand. Since `0` is a number (and numbers are rendered in JSX), React renders the visible digit `0`. Fix: `{items.length > 0 && <ItemList />}` or `{Boolean(items.length) && <ItemList />}`.",
    tip: "Always ensure the left side of `&&` is a strict boolean: `{items.length > 0 && <List />}`."
  },
  {
    id: "r19-m7-04",
    topicId: "react-conditional-rendering",
    topicName: "Module 7: Conditional Rendering",
    question: "How do you conditionally prevent a component from rendering anything at all?",
    code: `function Banner({ isVisible }) {
  if (!isVisible) {
    return null;
  }
  return <div className="banner">Special Promo!</div>;
}`,
    options: [
      "Return `null` from the component function.",
      "Return `false` from the component function.",
      "Return `undefined`.",
      "Return an empty string `\"\"`."
    ],
    correctAnswer: 0,
    explanation: "Returning `null` from a component tells React to render nothing to the DOM for this component without throwing an error.",
    tip: "Return `null` for early exits when a component shouldn't render."
  },
  {
    id: "r19-m7-05",
    topicId: "react-conditional-rendering",
    topicName: "Module 7: Conditional Rendering",
    question: "What is an Early Return in component conditional rendering?",
    code: `function Profile({ user, isLoading, error }) {
  if (isLoading) return <LoadingSpinner />;
  if (error) return <ErrorMessage error={error} />;
  if (!user) return <NotFound />;
  
  return <UserProfile user={user} />;
}`,
    options: [
      "Evaluating loading, error, and edge-case states at the top of the component and returning specialized UI immediately, keeping the main JSX tree unpolluted.",
      "A hook that executes before React mounts.",
      "Returning values to the server.",
      "A timer method."
    ],
    correctAnswer: 0,
    explanation: "Early returns handle guards (loading, errors, empty data) cleanly before the main UI markup is reached, avoiding deeply nested ternary chains.",
    tip: "Use early returns for loading spinners and error screens."
  },
  {
    id: "r19-m7-06",
    topicId: "react-conditional-rendering",
    topicName: "Module 7: Conditional Rendering",
    question: "How can you conditionally apply CSS classes to an element in JSX?",
    code: `const isActive = true;
const hasError = false;`,
    options: [
      "`<div className={\`nav-item \${isActive ? 'active' : ''} \${hasError ? 'error' : ''}\`}></div>` or template literals.",
      "`<div class=if(isActive, 'active')></div>`",
      "`<div className={if (isActive) 'active'}></div>`",
      "CSS classes cannot be conditional."
    ],
    correctAnswer: 0,
    explanation: "Template literals with ternary expressions `className={`btn ${isPrimary ? 'btn-primary' : 'btn-secondary'}`}` or helper libraries like `clsx` are standard for conditional styling.",
    tip: "Template literals `` `btn ${isActive ? 'active' : ''}` `` make dynamic classes clean."
  },
  {
    id: "r19-m7-07",
    topicId: "react-conditional-rendering",
    topicName: "Module 7: Conditional Rendering",
    question: "What will the following JSX render if `unreadMessages` is `3`?",
    code: `<div>
  {unreadMessages > 0 && <Badge count={unreadMessages} />}
</div>`,
    options: [
      "The `<Badge count={3} />` component.",
      "Nothing.",
      "The number `3` as plain text.",
      "`true`"
    ],
    correctAnswer: 0,
    explanation: "Because `3 > 0` evaluates to `true` (a boolean), the right-hand operand `<Badge count={3} />` is evaluated and rendered.",
    tip: "Logical AND `&&` renders the right-hand side when the left-hand condition is `true`."
  },
  {
    id: "r19-m7-08",
    topicId: "react-conditional-rendering",
    topicName: "Module 7: Conditional Rendering",
    question: "How do you handle multi-state conditional rendering (e.g. status is 'idle' | 'loading' | 'success' | 'error') cleanly?",
    code: null,
    options: [
      "Using a helper function or `switch` statement outside the return JSX, or a lookup dictionary/object: `{ idle: <Idle/>, loading: <Spinner/>, success: <Data/>, error: <Error/> }[status]`.",
      "Nesting 10 ternary operators inside one line.",
      "Creating 4 separate web pages.",
      "Using CSS `display: none` on all 4 components."
    ],
    correctAnswer: 0,
    explanation: "For 3 or more states, a lookup object or helper function with `switch(status)` is vastly cleaner and more maintainable than nested ternary operators.",
    tip: "Object lookup tables `{ [status]: <Component /> }` are great for multi-state rendering."
  },
  {
    id: "r19-m7-09",
    topicId: "react-conditional-rendering",
    topicName: "Module 7: Conditional Rendering",
    question: "What is the difference between conditionally rendering an element vs hiding it with CSS `display: none`?",
    code: null,
    options: [
      "Conditional rendering completely unmounts the element and removes it from the DOM (cleaning up its state and effects); CSS `display: none` keeps the element mounted in the DOM and memory, only hiding it visually.",
      "CSS `display: none` deletes component state.",
      "Conditional rendering keeps all event listeners running.",
      "There is no difference."
    ],
    correctAnswer: 0,
    explanation: "Conditional rendering `{isOpen && <Modal />}` mounts and unmounts the component tree. CSS `display: none` keeps the component mounted in memory with all its state, event listeners, and DOM nodes intact.",
    tip: "Unmount with conditional rendering when you want fresh state on reopen."
  },
  {
    id: "r19-m7-10",
    topicId: "react-conditional-rendering",
    topicName: "Module 7: Conditional Rendering",
    question: "What does `user?.name ?? 'Anonymous'` demonstrate in JSX expressions?",
    code: `<h1>Hello, {user?.name ?? "Anonymous"}</h1>`,
    options: [
      "Combining Optional Chaining `?.` to safely read `name` without crashing if `user` is null/undefined, and Nullish Coalescing `??` to provide a fallback string if `name` is nullish.",
      "A syntax error in React.",
      "A regular expression match.",
      "A database query."
    ],
    correctAnswer: 0,
    explanation: "This is a clean modern JavaScript pattern: `?.` prevents errors when data is loading, and `??` provides a graceful fallback.",
    tip: "Combine `?.` and `??` for bulletproof fallbacks in JSX."
  },
  {
    id: "r19-m7-11",
    topicId: "react-conditional-rendering",
    topicName: "Module 7: Conditional Rendering",
    question: "What will happen if you render `{undefined && <Component />}` in JSX?",
    code: `<div>{undefined && <Component />}</div>`,
    options: [
      "Nothing is rendered (renders empty), because `undefined` is ignored by JSX.",
      "Throws a ReferenceError.",
      "Renders the text 'undefined'.",
      "Renders `<Component />`."
    ],
    correctAnswer: 0,
    explanation: "When the left operand is `undefined`, the `&&` expression evaluates to `undefined`. In JSX, `undefined` renders nothing.",
    tip: "Unlike `0`, `undefined` and `false` render nothing in JSX."
  },
  {
    id: "r19-m7-12",
    topicId: "react-conditional-rendering",
    topicName: "Module 7: Conditional Rendering",
    question: "Why should you avoid deeply nested ternary operators in JSX?",
    code: `// Anti-pattern:
{a ? (b ? <B /> : c ? <C /> : <D />) : <A />}`,
    options: [
      "They severely hurt readability, making code difficult to understand and debug; extracting sub-components or using early returns is far clearer.",
      "React will refuse to compile nested ternaries.",
      "They cause browser memory leaks.",
      "They disable React reconciliation."
    ],
    correctAnswer: 0,
    explanation: "Deeply nested ternaries create high cognitive load. Refactoring into dedicated sub-components, helper functions, or early returns makes the UI code readable.",
    tip: "If a ternary is nested inside another ternary, extract it into a small component."
  },

  // Module 8: Rendering Lists and Keys (13 questions)
  {
    id: "r19-m8-01",
    topicId: "react-lists-keys",
    topicName: "Module 8: Rendering Lists and Keys",
    question: "What JavaScript array method is the standard way to transform an array of data into an array of JSX elements?",
    code: `const topics = ["HTML", "CSS", "JavaScript", "React"];`,
    options: [
      "`Array.prototype.map()`",
      "`Array.prototype.forEach()`",
      "`Array.prototype.push()`",
      "`for...in` loop"
    ],
    correctAnswer: 0,
    explanation: "`.map()` is an expression that transforms each data item into a corresponding JSX element and returns a new array of JSX nodes that React renders directly.",
    tip: "`{items.map(item => <Item key={item.id} data={item} />)}` is the standard list rendering pattern."
  },
  {
    id: "r19-m8-02",
    topicId: "react-lists-keys",
    topicName: "Module 8: Rendering Lists and Keys",
    question: "What is the primary purpose of the `key` prop when rendering lists in React?",
    code: `<ul>
  {users.map(user => (
    <li key={user.id}>{user.name}</li>
  ))}
</ul>`,
    options: [
      "To give each list item a stable identity so React's reconciliation engine can efficiently determine which items were added, removed, reordered, or updated without re-rendering the entire list.",
      "To style the list items in CSS.",
      "To sort the list alphabetically.",
      "To encrypt list items in memory."
    ],
    correctAnswer: 0,
    explanation: "Keys act as identifiers for React's Virtual DOM diffing. When a list changes, React uses keys to match existing DOM nodes with new elements, reusing existing DOM nodes and updating only changed ones.",
    tip: "Keys give elements a stable identity across renders."
  },
  {
    id: "r19-m8-03",
    topicId: "react-lists-keys",
    topicName: "Module 8: Rendering Lists and Keys",
    question: "Why is using array index as a `key` (`key={index}`) considered dangerous / an anti-pattern for dynamic lists?",
    code: `// Risky:
{todos.map((todo, index) => (
  <TodoItem key={index} todo={todo} />
))}`,
    options: [
      "If items are inserted, deleted, or reordered, the indices change, causing React to misidentify component state, leading to subtle bugs with input fields, checkboxes, animations, and degraded performance.",
      "React will throw an uncatchable compile error.",
      "The array index is always converted to NaN.",
      "It disables JavaScript garbage collection."
    ],
    correctAnswer: 0,
    explanation: "When you insert or delete an item at the beginning of a list, every item's index shifts. If keys are indices, React incorrectly matches items to old state, causing input text or checkbox states to remain stuck on the wrong items.",
    tip: "Use unique, stable IDs (`key={item.id}`) whenever items can be sorted, inserted, or removed."
  },
  {
    id: "r19-m8-04",
    topicId: "react-lists-keys",
    topicName: "Module 8: Rendering Lists and Keys",
    question: "Where must the `key` prop be placed when rendering a custom component in a list?",
    code: `// Correct placement:
{questions.map(q => (
  <QuestionCard key={q.id} question={q} />
))}`,
    options: [
      "Directly on the outermost JSX element/component returned inside the `.map()` callback.",
      "Inside the root element inside `QuestionCard` component definition.",
      "On the parent `<div>` wrapping the `.map()` expression.",
      "Keys must only be placed on `<p>` tags."
    ],
    correctAnswer: 0,
    explanation: "The `key` prop belongs on the element created inside the array context (the top-level item returned inside `.map()`), so React can track it within the siblings array.",
    tip: "The key always goes on the outermost element returned inside `.map()`."
  },
  {
    id: "r19-m8-05",
    topicId: "react-lists-keys",
    topicName: "Module 8: Rendering Lists and Keys",
    question: "Can a child component access its own `key` prop via `props.key`?",
    code: `function Item(props) {
  console.log(props.key); // ?
}`,
    options: [
      "No, `key` is reserved internally by React and is NOT passed to the component as a regular prop (`props.key` is `undefined`).",
      "Yes, `props.key` contains the key string.",
      "Only in React 19 Server Components.",
      "Yes, but only if key is a number."
    ],
    correctAnswer: 0,
    explanation: "`key` (and legacy `ref`) is reserved for React internals and not passed down in `props`. If a child component needs the ID value, pass it as a separate prop (e.g., `<Item id={item.id} key={item.id} />`).",
    tip: "If you need the ID inside the child, pass it as a distinct prop: `id={item.id}`."
  },
  {
    id: "r19-m8-06",
    topicId: "react-lists-keys",
    topicName: "Module 8: Rendering Lists and Keys",
    question: "How do you render a keyed React Fragment inside `.map()` when returning multiple sibling elements per item?",
    code: null,
    options: [
      "`<React.Fragment key={item.id}><dt>{item.term}</dt><dd>{item.desc}</dd></React.Fragment>`",
      "`<key={item.id}><dt></dt><dd></dd></>`",
      "`<div no-dom key={item.id}>...</div>`",
      "Fragments cannot accept keys."
    ],
    correctAnswer: 0,
    explanation: "The shorthand fragment `<> ... </>` cannot accept attributes. To pass a `key` to a fragment, you must use the explicit `<React.Fragment key={item.id}>` syntax.",
    tip: "Use `<React.Fragment key={id}>` when mapping multiple sibling elements without a wrapper div."
  },
  {
    id: "r19-m8-07",
    topicId: "react-lists-keys",
    topicName: "Module 8: Rendering Lists and Keys",
    question: "What happens if keys in a list are NOT unique among siblings?",
    code: `<li key="dup">A</li>
<li key="dup">B</li>`,
    options: [
      "React logs a console warning (`Encountered two children with the same key`), and DOM reconciliation may produce incorrect UI updates or duplicate component behavior.",
      "The browser will immediately crash.",
      "React deletes the second element.",
      "React changes keys to random numbers."
    ],
    correctAnswer: 0,
    explanation: "Duplicate keys break React's reconciliation algorithm, causing components to receive wrong props or update unpredictably.",
    tip: "Keys only need to be unique among sibling elements in that specific array, not globally across the app."
  },
  {
    id: "r19-m8-08",
    topicId: "react-lists-keys",
    topicName: "Module 8: Rendering Lists and Keys",
    question: "Why should `Math.random()` NEVER be used as a `key` (`key={Math.random()}`)?",
    code: `{items.map(item => <Item key={Math.random()} item={item} />)}`,
    options: [
      "Because on EVERY re-render, a new random key is generated, forcing React to completely destroy and recreate all DOM nodes from scratch on every render, ruining performance and resetting input states.",
      "Because `Math.random()` returns strings.",
      "Because `Math.random()` only runs on the server.",
      "Because numbers cannot be keys."
    ],
    correctAnswer: 0,
    explanation: "Keys MUST be STABLE between renders. Generating keys randomly on the fly destroys DOM state and eliminates all reconciliation performance benefits.",
    tip: "Keys must be STABLE, PREDICTABLE, and UNIQUE."
  },
  {
    id: "r19-m8-09",
    topicId: "react-lists-keys",
    topicName: "Module 8: Rendering Lists and Keys",
    question: "How can you render an empty state message when an array list has zero items?",
    code: `const questions = [];`,
    options: [
      "`{questions.length === 0 ? <EmptyState /> : questions.map(q => <Card key={q.id} />)}`",
      "`{questions.empty && <EmptyState />}`",
      "`questions.map(q => <EmptyState />)`",
      "Empty states must be created with CSS."
    ],
    correctAnswer: 0,
    explanation: "Check `array.length === 0` using a ternary or early return to render an informative empty state component when there is no data to display.",
    tip: "Always provide clean empty states for zero-length lists."
  },
  {
    id: "r19-m8-10",
    topicId: "react-lists-keys",
    topicName: "Module 8: Rendering Lists and Keys",
    question: "How do you filter and then map a list cleanly in JSX?",
    code: `const products = [
  { id: 1, name: "Shirt", inStock: true },
  { id: 2, name: "Shoes", inStock: false }
];`,
    options: [
      "`{products.filter(p => p.inStock).map(p => <ProductCard key={p.id} product={p} />)}`",
      "`{products.map(p => p.inStock && <ProductCard key={p.id} />)}` (which leaves false values in array)",
      "`{products.forEach(p => ...)}`",
      "`{filterMap(products)}`"
    ],
    correctAnswer: 0,
    explanation: "Chaining `.filter(...).map(...)` first narrows the dataset to matching items and then converts them to JSX, producing a clean array of elements.",
    tip: "Chain `.filter().map()` to render a filtered subset of data."
  },
  {
    id: "r19-m8-11",
    topicId: "react-lists-keys",
    topicName: "Module 8: Rendering Lists and Keys",
    question: "What is the recommended fallback if your dataset items have no unique ID property?",
    code: null,
    options: [
      "Generate stable IDs upon data creation/fetch (e.g. `crypto.randomUUID()`), or use a unique natural key (like a unique email/slug/ISBN).",
      "Use `key={Math.random()}` on every render.",
      "Leave `key` off completely.",
      "Convert the array to a string."
    ],
    correctAnswer: 0,
    explanation: "If backend data lacks IDs, assign stable UUIDs when data is first loaded/created, or combine unique fields (`${item.category}-${item.slug}`).",
    tip: "Add IDs to data when fetched rather than generating random keys in JSX."
  },
  {
    id: "r19-m8-12",
    topicId: "react-lists-keys",
    topicName: "Module 8: Rendering Lists and Keys",
    question: "When IS it acceptable to use array index as a key?",
    code: null,
    options: [
      "When the list is static (never filtered, sorted, reordered, or added/deleted from) AND items have no IDs.",
      "Whenever you want to save time.",
      "In all form input lists.",
      "Never under any circumstances in JavaScript."
    ],
    correctAnswer: 0,
    explanation: "Index keys are only safe if: 1) The list and items are completely static; 2) The list will never be reordered, filtered, or mutated; 3) Items have no local state (like input fields).",
    tip: "Index keys are only safe for static, unchanging read-only lists."
  },
  {
    id: "r19-m8-13",
    topicId: "react-lists-keys",
    topicName: "Module 8: Rendering Lists and Keys",
    question: "How can changing a component's `key` force React to reset its state completely?",
    code: `<QuestionForm key={currentQuestionId} />`,
    options: [
      "When the `key` changes, React treats the component as a completely new identity, unmounting the old instance (resetting all its internal state) and mounting a brand new fresh instance.",
      "It throws an error.",
      "It preserves the old state indefinitely.",
      "It disables the question form."
    ],
    correctAnswer: 0,
    explanation: "Changing a component's `key` is a powerful React pattern: it signals to React that the component identity has changed, forcing a clean unmount and remount with pristine initial state.",
    tip: "Pass `key={itemId}` to force a form or component to reset its internal state when the item changes."
  },

  // Module 9: Forms and Controlled Inputs (13 questions)
  {
    id: "r19-m9-01",
    topicId: "react-forms",
    topicName: "Module 9: Forms & Controlled Inputs",
    question: "What is a 'Controlled Component' in React forms?",
    code: `<input type="text" value={name} onChange={(e) => setName(e.target.value)} />`,
    options: [
      "A form input whose current value is driven by React State, making React state the 'single source of truth' for the input.",
      "A form that requires password authentication to view.",
      "An input that is disabled by CSS.",
      "An input stored on a remote database."
    ],
    correctAnswer: 0,
    explanation: "In a controlled component, form input data is handled by a React component via `value={state}` and `onChange={setter}`. The UI input always reflects React state.",
    tip: "Controlled component = React state controls the input value."
  },
  {
    id: "r19-m9-02",
    topicId: "react-forms",
    topicName: "Module 9: Forms & Controlled Inputs",
    question: "What is an 'Uncontrolled Component' in React?",
    code: `const inputRef = useRef(null);
// <input type="text" ref={inputRef} />`,
    options: [
      "A form input that maintains its own internal DOM state; React reads its value on-demand using a `useRef()` reference or standard form submission.",
      "An input with broken validation.",
      "An input without an HTML tag.",
      "A form that submits automatically every 10 seconds."
    ],
    correctAnswer: 0,
    explanation: "Uncontrolled components let the DOM handle form data internally. React queries values when needed (e.g., on submit) using `ref.current.value`.",
    tip: "Controlled = `useState`; Uncontrolled = `useRef` or `FormData`."
  },
  {
    id: "r19-m9-03",
    topicId: "react-forms",
    topicName: "Module 9: Forms & Controlled Inputs",
    question: "What causes the React warning: 'A component is changing an uncontrolled input to be controlled'?",
    code: `// Warning trigger:
const [name, setName] = useState(undefined);
return <input value={name} onChange={...} />;`,
    options: [
      "Initializing input state to `undefined` (or omitting initial state), causing the input to mount as uncontrolled, and later passing a defined string which turns it into a controlled input.",
      "Using double quotes instead of single quotes.",
      "Typing numbers into a text input.",
      "Using CSS classes."
    ],
    correctAnswer: 0,
    explanation: "If `value` is initially `undefined`, React treats the input as uncontrolled. When state updates to a string, React warns about switching. Always initialize text state with an empty string: `useState('')`.",
    tip: "Always initialize string input state with `useState('')`, NEVER `useState(undefined)`."
  },
  {
    id: "r19-m9-04",
    topicId: "react-forms",
    topicName: "Module 9: Forms & Controlled Inputs",
    question: "How do you manage multiple inputs with a single state object and a single `onChange` handler?",
    code: `const [formData, setFormData] = useState({ username: "", email: "" });

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData(prev => ({
    ...prev,
    [name]: value
  }));
};`,
    options: [
      "Give each `<input>` a `name` matching the state key, and use computed property names `[name]: value` inside the setter.",
      "Create 50 separate functions.",
      "Use `eval()` on input values.",
      "React requires a separate `useState` for every single input."
    ],
    correctAnswer: 0,
    explanation: "Using `[e.target.name]: e.target.value` allows one clean handler to update any field in a multi-input form object dynamically.",
    tip: "Single handler for all inputs: `setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))`."
  },
  {
    id: "r19-m9-05",
    topicId: "react-forms",
    topicName: "Module 9: Forms & Controlled Inputs",
    question: "How do you control a `<select>` dropdown in React?",
    code: `<select value={selectedCourse} onChange={(e) => setSelectedCourse(e.target.value)}>
  <option value="javascript">JavaScript</option>
  <option value="react">React</option>
</select>`,
    options: [
      "Place the `value` prop directly on the `<select>` tag matching the selected option value.",
      "Add `selected` attribute to individual `<option>` tags manually.",
      "Use `checked` on the `<select>` tag.",
      "Dropdowns cannot be controlled in React."
    ],
    correctAnswer: 0,
    explanation: "In React, instead of setting `selected` on `<option>`, you set `value={selectedOption}` on the root `<select>` tag.",
    tip: "Set `value` directly on the `<select>` element in React."
  },
  {
    id: "r19-m9-06",
    topicId: "react-forms",
    topicName: "Module 9: Forms & Controlled Inputs",
    question: "How is `<textarea>` controlled in React compared to traditional HTML?",
    code: `<textarea value={feedback} onChange={(e) => setFeedback(e.target.value)} />`,
    options: [
      "React uses the `value` prop on `<textarea>` (just like a text input); traditional HTML uses children `<textarea>text</textarea>`.",
      "React requires textareas to be wrapped in `<pre>` tags.",
      "Textareas cannot accept `onChange`.",
      "There is no difference."
    ],
    correctAnswer: 0,
    explanation: "In HTML, textareas use inner text `<textarea>content</textarea>`. In React, `<textarea value={text} onChange={...} />` uses the standard `value` prop.",
    tip: "In React, `<textarea>` uses the `value` prop just like `<input>`."
  },
  {
    id: "r19-m9-07",
    topicId: "react-forms",
    topicName: "Module 9: Forms & Controlled Inputs",
    question: "How do you handle a Radio Button group in React?",
    code: `<input
  type="radio"
  name="mode"
  value="practice"
  checked={mode === "practice"}
  onChange={(e) => setMode(e.target.value)}
/>`,
    options: [
      "Set `name` to group them, and bind `checked={state === optionValue}` with `onChange` setting the new value.",
      "Use `selected={true}`",
      "Radio buttons must use `useRef`.",
      "Radio buttons cannot be controlled."
    ],
    correctAnswer: 0,
    explanation: "Radio buttons are grouped by `name`. Each option evaluates `checked={mode === value}` to determine its active state.",
    tip: "Radio button pattern: `checked={selectedOption === value}`."
  },
  {
    id: "r19-m9-08",
    topicId: "react-forms",
    topicName: "Module 9: Forms & Controlled Inputs",
    question: "What is instant client-side validation in controlled forms?",
    code: `const isNameValid = name.trim().length >= 3;
const showError = name.length > 0 && !isNameValid;`,
    options: [
      "Validating input values on every keystroke (`onChange`) and displaying immediate feedback/error messages or disabling the submit button.",
      "Sending form data to an email server on every keystroke.",
      "Using HTML5 `required` attribute only.",
      "Validating forms using CSS selectors."
    ],
    correctAnswer: 0,
    explanation: "Controlled components enable real-time validation: on every keystroke, state updates and validation logic can conditionally show helper text or enable/disable buttons.",
    tip: "Controlled inputs enable real-time inline validation and dynamic submit button disabling."
  },
  {
    id: "r19-m9-09",
    topicId: "react-forms",
    topicName: "Module 9: Forms & Controlled Inputs",
    question: "How do you extract data from a form using the native `FormData` API in React?",
    code: `function handleSubmit(e) {
  e.preventDefault();
  const formData = new FormData(e.currentTarget);
  const candidateName = formData.get("candidateName");
}`,
    options: [
      "Pass `e.currentTarget` to `new FormData(formElement)` and retrieve inputs by their `name` attributes via `formData.get('name')` or `Object.fromEntries(formData)`.",
      "Use `document.form.all`",
      "FormData only works in PHP.",
      "FormData requires a paid plugin."
    ],
    correctAnswer: 0,
    explanation: "`new FormData(form)` is a modern, native browser API that extracts all named input fields from a form without needing individual `useState` hooks.",
    tip: "`Object.fromEntries(new FormData(e.currentTarget))` converts all form inputs into a JS object instantly."
  },
  {
    id: "r19-m9-10",
    topicId: "react-forms",
    topicName: "Module 9: Forms & Controlled Inputs",
    question: "Why is `<input type=\"file\" />` always an UNCONTROLLED component in React?",
    code: null,
    options: [
      "Because its value is read-only for browser security reasons (JavaScript cannot programmatically set a file path into a file input).",
      "Because React does not support file uploads.",
      "Because files must be converted to numbers.",
      "Because files are not supported in HTML5."
    ],
    correctAnswer: 0,
    explanation: "Browser security prevents JavaScript from programmatically setting file input values. Therefore, `<input type='file' />` is always uncontrolled in React and read via `ref` or `e.target.files`.",
    tip: "File inputs are always uncontrolled: access files via `e.target.files[0]`."
  },
  {
    id: "r19-m9-11",
    topicId: "react-forms",
    topicName: "Module 9: Forms & Controlled Inputs",
    question: "How do you reset a controlled form back to its initial empty state after submission?",
    code: null,
    options: [
      "Call the state setter with the initial empty state values (e.g. `setFormData(initialState)`).",
      "Reload the browser with `location.reload()`.",
      "Delete the `<form>` DOM node.",
      "Controlled forms cannot be reset."
    ],
    correctAnswer: 0,
    explanation: "Since UI inputs are driven by React state, resetting the state variables (`setName(''); setEmail('');`) immediately clears the visible input fields.",
    tip: "Resetting state resets controlled form inputs automatically."
  },
  {
    id: "r19-m9-12",
    topicId: "react-forms",
    topicName: "Module 9: Forms & Controlled Inputs",
    question: "What is the benefit of disabling a submit button while form submission is in progress (`isSubmitting`)?",
    code: `<button type="submit" disabled={isSubmitting}>
  {isSubmitting ? "Submitting Exam..." : "Start Quiz"}
</button>`,
    options: [
      "It prevents duplicate accidental form submissions (double-clicks) and gives clear visual loading feedback to the user.",
      "It speeds up internet connection speed.",
      "It cancels all network timeouts.",
      "It deletes the candidate name."
    ],
    correctAnswer: 0,
    explanation: "Disabling buttons during pending asynchronous operations prevents duplicate API requests and race conditions while providing good UX.",
    tip: "Always disable submit buttons during active network requests."
  },
  {
    id: "r19-m9-13",
    topicId: "react-forms",
    topicName: "Module 9: Forms & Controlled Inputs",
    question: "How does React 19 modernize form submissions with Form Actions?",
    code: `<form action={handleSubmitAction}>
  <input name="query" />
  <button type="submit">Search</button>
</form>`,
    options: [
      "React 19 extends the HTML `action` prop on `<form>` to accept async functions (Actions), automatically managing form submission lifecycles, pending states, and form resets.",
      "React 19 deletes form tags.",
      "React 19 requires forms to be written in JSON.",
      "React 19 only supports GET requests."
    ],
    correctAnswer: 0,
    explanation: "React 19 introduces native support for async functions in the `action` and `formAction` props, streamlining form handling without requiring manual `e.preventDefault()`.",
    tip: "React 19 Actions let you pass async functions directly to `<form action={asyncFn}>`."
  },

  // Module 10: The useEffect Hook (14 questions)
  {
    id: "r19-m10-01",
    topicId: "react-useeffect",
    topicName: "Module 10: The useEffect Hook",
    question: "What is a 'Side Effect' in React components, and why is `useEffect` used for them?",
    code: null,
    options: [
      "Operations that interact with systems outside of React's pure render calculation (e.g. data fetching, setting timers, manual DOM manipulation, subscriptions, localStorage sync).",
      "A bug that causes CSS styles to disappear.",
      "Mutating props inside a component.",
      "A database query on the server only."
    ],
    correctAnswer: 0,
    explanation: "Rendering must stay a pure calculation. Side effects (API calls, timers, event listeners) belong inside `useEffect`, which runs after React has updated the DOM.",
    tip: "Put side effects in `useEffect` or event handlers, never directly in the render body."
  },
  {
    id: "r19-m10-02",
    topicId: "react-useeffect",
    topicName: "Module 10: The useEffect Hook",
    question: "When does a `useEffect` with an EMPTY dependency array (`[]`) execute?",
    code: `useEffect(() => {
  console.log("Effect executed!");
}, []);`,
    options: [
      "Only ONCE after the initial component MOUNT (when it first appears on screen).",
      "After every single render and re-render.",
      "Only when the component is unmounted.",
      "Every 5 seconds."
    ],
    correctAnswer: 0,
    explanation: "An empty dependency array `[]` tells React that the effect doesn't depend on any values from props or state, so it only runs once after the initial render (mount).",
    tip: "`useEffect(fn, [])` = Run once on mount."
  },
  {
    id: "r19-m10-03",
    topicId: "react-useeffect",
    topicName: "Module 10: The useEffect Hook",
    question: "When does a `useEffect` with SPECIFIC dependencies (`[propA, stateB]`) execute?",
    code: `useEffect(() => {
  fetchQuestionDetails(questionId);
}, [questionId]);`,
    options: [
      "On initial mount, AND after any re-render where at least one of the specified dependency values has changed since the previous render.",
      "Only when the browser tab is resized.",
      "Only if `questionId` becomes null.",
      "Continuously in an infinite loop."
    ],
    correctAnswer: 0,
    explanation: "React performs an `Object.is` comparison on each dependency. If any dependency value has changed since the last render, the effect is re-run.",
    tip: "`useEffect(fn, [dep])` = Run on mount and whenever `dep` changes."
  },
  {
    id: "r19-m10-04",
    topicId: "react-useeffect",
    topicName: "Module 10: The useEffect Hook",
    question: "When does a `useEffect` with NO dependency array (`useEffect(fn)`) execute?",
    code: `useEffect(() => {
  console.log("Render occurred");
});`,
    options: [
      "After EVERY single render (initial mount AND every subsequent re-render).",
      "Never.",
      "Only on unmount.",
      "Only when an error is thrown."
    ],
    correctAnswer: 0,
    explanation: "Without a dependency array, `useEffect` runs unconditionally after every render. This is rarely what you want and can cause severe performance issues if state is updated inside.",
    tip: "Be careful: omitting the dependency array runs the effect after EVERY render."
  },
  {
    id: "r19-m10-05",
    topicId: "react-useeffect",
    topicName: "Module 10: The useEffect Hook",
    question: "What is the Cleanup Function in `useEffect`, and when does React call it?",
    code: `useEffect(() => {
  const timer = setInterval(() => setTime(t => t - 1), 1000);
  return () => {
    clearInterval(timer);
  };
}, []);`,
    options: [
      "A function returned from the effect that runs before the effect re-runs (if dependencies changed) AND when the component UNMOUNTS, preventing memory leaks.",
      "A function that cleans the browser cache.",
      "A function that reloads the page.",
      "A function that deletes state."
    ],
    correctAnswer: 0,
    explanation: "Returning a function from `useEffect` registers a cleanup handler. React calls it before re-running the effect and when the component unmounts to clear timers, abort requests, and remove listeners.",
    tip: "Always return a cleanup function to clean up timers, subscriptions, and event listeners."
  },
  {
    id: "r19-m10-06",
    topicId: "react-useeffect",
    topicName: "Module 10: The useEffect Hook",
    question: "Why should you NOT directly mark the `useEffect` callback as `async` (`useEffect(async () => { ... })`)?",
    code: `// INCORRECT:
useEffect(async () => {
  const data = await fetchQuiz();
}, []);`,
    options: [
      "Because an `async` function implicitly returns a Promise, but React expects `useEffect` to return either nothing (`undefined`) or a synchronous cleanup function.",
      "Because async functions are not supported in React.",
      "Because Promises cannot be used in components.",
      "Because it deletes all state."
    ],
    correctAnswer: 0,
    explanation: "React requires `useEffect` to return a cleanup function (or undefined). Async functions return a Promise, causing React to warn. Instead, declare an async function INSIDE the effect: `useEffect(() => { async function run() { ... } run(); }, [])`.",
    tip: "Declare async functions INSIDE the effect: `useEffect(() => { const load = async () => { ... }; load(); }, [])`."
  },
  {
    id: "r19-m10-07",
    topicId: "react-useeffect",
    topicName: "Module 10: The useEffect Hook",
    question: "What causes an Infinite Render Loop with `useEffect`?",
    code: `useEffect(() => {
  setCount(count + 1); // State update inside effect without deps or with count in deps
});`,
    options: [
      "Updating a state variable inside an effect that either has no dependency array or includes that state variable in its dependencies, triggering: Render -> Effect -> State Update -> Re-render -> Effect -> Infinite Loop.",
      "Using `const` instead of `let`.",
      "Running the app in dark mode.",
      "Having more than 3 components."
    ],
    correctAnswer: 0,
    explanation: "Updating state triggers a re-render. If the effect runs after every render, it triggers another state update, causing an infinite loop until the browser crashes or React throws 'Maximum update depth exceeded'.",
    tip: "Never update state inside `useEffect` without careful dependency control."
  },
  {
    id: "r19-m10-08",
    topicId: "react-useeffect",
    topicName: "Module 10: The useEffect Hook",
    question: "Why does `useEffect` run TWICE on initial mount in React 18 & 19 development mode under `<StrictMode>`?",
    code: null,
    options: [
      "React intentionally mounts, unmounts, and re-mounts components in development to help developers catch missing cleanup functions and unsafe side effects.",
      "It is a known bug in Vite.",
      "Because your computer has multiple CPU cores.",
      "It indicates an error in your code."
    ],
    correctAnswer: 0,
    explanation: "Strict Mode simulates immediate unmounting and remounting in development to verify that cleanup functions work correctly (e.g. canceling subscriptions, clearing timers). In production, it runs only once.",
    tip: "Strict Mode double-invoke in development verifies your cleanup logic is resilient."
  },
  {
    id: "r19-m10-09",
    topicId: "react-useeffect",
    topicName: "Module 10: The useEffect Hook",
    question: "How do you synchronize component state with `localStorage` using `useEffect`?",
    code: `const [scoreHistory, setScoreHistory] = useState(() => {
  const saved = localStorage.getItem("scores");
  return saved ? JSON.parse(saved) : [];
});

useEffect(() => {
  localStorage.setItem("scores", JSON.stringify(scoreHistory));
}, [scoreHistory]);`,
    options: [
      "Read from `localStorage` once during lazy initial state, and write to `localStorage` inside `useEffect` whenever `scoreHistory` updates.",
      "Call `localStorage.setItem` directly inside the JSX return.",
      "Store the entire React component in `localStorage`.",
      "`localStorage` cannot be used with React."
    ],
    correctAnswer: 0,
    explanation: "This is the classic persistence pattern: read on mount (or in `useState` initializer), and sync changes in `useEffect` when state changes.",
    tip: "Sync to `localStorage` inside `useEffect` keyed on the state dependency."
  },
  {
    id: "r19-m10-10",
    topicId: "react-useeffect",
    topicName: "Module 10: The useEffect Hook",
    question: "How do you attach and clean up a global window event listener (like keyboard navigation) in `useEffect`?",
    code: `useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === "ArrowRight") nextQuestion();
  };
  window.addEventListener("keydown", handleKeyDown);
  return () => {
    window.removeEventListener("keydown", handleKeyDown);
  };
}, [nextQuestion]);`,
    options: [
      "Add the listener in the effect body with `window.addEventListener`, and remove it in the returned cleanup function with `window.removeEventListener`.",
      "Listeners on `window` are automatically deleted by the browser.",
      "Global listeners cannot be used in React.",
      "Add the listener directly inside the component body."
    ],
    correctAnswer: 0,
    explanation: "Attaching listeners to `window` or `document` requires explicit removal in the effect cleanup function to prevent memory leaks and duplicate handlers.",
    tip: "Always pair `window.addEventListener` with `window.removeEventListener` in the cleanup function."
  },
  {
    id: "r19-m10-11",
    topicId: "react-useeffect",
    topicName: "Module 10: The useEffect Hook",
    question: "How do you handle race conditions in `useEffect` data fetching when parameters change quickly?",
    code: `useEffect(() => {
  let isSubscribed = true;
  fetchData(id).then(data => {
    if (isSubscribed) setData(data);
  });
  return () => {
    isSubscribed = false;
  };
}, [id]);`,
    options: [
      "Use an `isSubscribed` boolean flag (or `AbortController`) inside the effect and flip it to `false` in the cleanup function so stale responses from previous requests are discarded.",
      "Wait 10 seconds between requests.",
      "Disable the network card.",
      "Make requests synchronous."
    ],
    correctAnswer: 0,
    explanation: "If `id` changes before an earlier request resolves, the older response might arrive later and overwrite newer data. An active flag or `AbortController` ignores outdated responses.",
    tip: "Use a cleanup boolean or `AbortController` to ignore stale fetch responses."
  },
  {
    id: "r19-m10-12",
    topicId: "react-useeffect",
    topicName: "Module 10: The useEffect Hook",
    question: "Why should you NOT use `useEffect` for data transformations that can be computed during render?",
    code: `// BAD:
const [items, setItems] = useState([]);
const [count, setCount] = useState(0);
useEffect(() => { setCount(items.length); }, [items]);

// GOOD:
const count = items.length;`,
    options: [
      "Using `useEffect` for derived data causes an unnecessary second re-render, introduces state synchronization bugs, and adds needless boilerplate.",
      "Because `useEffect` only runs on mobile devices.",
      "Because `items.length` is not accessible in React.",
      "React will crash."
    ],
    correctAnswer: 0,
    explanation: "Calculate derived data directly during render. Using `useEffect` to set state introduces unnecessary render passes and risks state inconsistency.",
    tip: "You don't need `useEffect` to transform data: compute it directly during render."
  },
  {
    id: "r19-m10-13",
    topicId: "react-useeffect",
    topicName: "Module 10: The useEffect Hook",
    question: "What is the exhaustive-deps ESLint rule in React?",
    code: null,
    options: [
      "A lint rule that ensures all reactive values (props, state, and functions derived from them) used inside `useEffect` are included in the dependency array.",
      "A rule that forbids using `useEffect`.",
      "A rule that requires at least 10 dependencies.",
      "A rule for CSS dependencies."
    ],
    correctAnswer: 0,
    explanation: "The `exhaustive-deps` rule ensures your effects don't capture stale closures by verifying that every variable from component scope referenced in the effect is listed in `[]`.",
    tip: "Always obey the `exhaustive-deps` linter rule to prevent stale closure bugs."
  },
  {
    id: "r19-m10-14",
    topicId: "react-useeffect",
    topicName: "Module 10: The useEffect Hook",
    question: "How does `useEffect` differ from `useLayoutEffect`?",
    code: null,
    options: [
      "`useEffect` runs ASYNCHRONOUSLY after the browser has painted the screen (non-blocking UI); `useLayoutEffect` runs SYNCHRONOUSLY before the browser paints, used for measuring DOM dimensions.",
      "`useLayoutEffect` is for CSS grid only.",
      "`useEffect` is deprecated.",
      "They are identical."
    ],
    correctAnswer: 0,
    explanation: "`useEffect` is deferred until after paint so it doesn't block the UI. `useLayoutEffect` fires synchronously after DOM mutation but before paint, ideal for measuring DOM layout to avoid visual flicker.",
    tip: "Default to `useEffect`. Use `useLayoutEffect` only if you need to measure DOM before paint."
  }
];
