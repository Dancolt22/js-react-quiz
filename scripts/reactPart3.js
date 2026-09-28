export const reactPart3 = [
  // Module 11: useRef and useContext (13 questions)
  {
    id: "r19-m11-01",
    topicId: "react-useref-usecontext",
    topicName: "Module 11: useRef and useContext",
    question: "What are the TWO primary use cases for the `useRef` hook in React?",
    code: null,
    options: [
      "1. Accessing and interacting directly with DOM elements (e.g., `.focus()`, `.scrollIntoView()`). 2. Storing mutable values that persist across renders WITHOUT triggering a re-render when changed.",
      "1. Styling CSS elements. 2. Fetching API data.",
      "1. Creating global Redux stores. 2. Compiling WebAssembly.",
      "`useRef` can only be used for timer IDs."
    ],
    correctAnswer: 0,
    explanation: "`useRef(initialValue)` returns a mutable object `{ current: initialValue }`. Mutating `ref.current` does NOT trigger a component re-render. It is also used to attach direct references to DOM nodes.",
    tip: "Use `useRef` for DOM access and for holding values that shouldn't cause a re-render when changed."
  },
  {
    id: "r19-m11-02",
    topicId: "react-useref-usecontext",
    topicName: "Module 11: useRef and useContext",
    question: "How do you programmatically focus an input field on button click using `useRef`?",
    code: `function SearchBar() {
  const inputRef = useRef(null);
  
  const handleFocus = () => {
    inputRef.current.focus();
  };
  
  return (
    <>
      <input ref={inputRef} type="text" />
      <button onClick={handleFocus}>Focus Input</button>
    </>
  );
}`,
    options: [
      "Pass `ref={inputRef}` to the `<input>` element and call `inputRef.current.focus()` inside the handler.",
      "Call `document.getElementById('input').focus()`",
      "Pass `focus={true}` prop to the input.",
      "Inputs cannot be focused in React."
    ],
    correctAnswer: 0,
    explanation: "Attaching `ref={inputRef}` gives `inputRef.current` direct access to the underlying input DOM element when mounted, allowing native DOM methods like `.focus()`, `.select()`, or `.scrollIntoView()`.",
    tip: "`ref={myRef}` attaches the DOM element to `myRef.current`."
  },
  {
    id: "r19-m11-03",
    topicId: "react-useref-usecontext",
    topicName: "Module 11: useRef and useContext",
    question: "How does mutating `ref.current` differ from calling a `useState` setter?",
    code: `const countRef = useRef(0);
countRef.current += 1; // Does this re-render?`,
    options: [
      "Mutating `ref.current` is synchronous and does NOT trigger a component re-render; calling a `useState` setter schedules a re-render of the component.",
      "Mutating `ref.current` triggers two re-renders.",
      "Both trigger identical re-renders.",
      "`ref.current` is read-only and cannot be mutated."
    ],
    correctAnswer: 0,
    explanation: "`useRef` holds a plain JavaScript object whose `current` property can be modified silently without notifying React to re-render. State changes tell React to re-render the UI.",
    tip: "If a value needs to be displayed on screen, use State; if it's internal bookkeeping, use Ref."
  },
  {
    id: "r19-m11-04",
    topicId: "react-useref-usecontext",
    topicName: "Module 11: useRef and useContext",
    question: "What problem does React Context (`createContext` + `useContext`) solve?",
    code: null,
    options: [
      "It allows sharing data (like theme, authenticated user, quiz settings) globally across the entire component tree without having to manually pass props through intermediate levels (eliminating Prop Drilling).",
      "It replaces JavaScript with TypeScript.",
      "It connects React to backend SQL databases directly.",
      "It prevents components from unmounting."
    ],
    correctAnswer: 0,
    explanation: "Context provides a way to pass data through the component tree without having to pass props down manually at every level.",
    tip: "Context is ideal for global or semi-global data: themes, auth user, language, active exam state."
  },
  {
    id: "r19-m11-05",
    topicId: "react-useref-usecontext",
    topicName: "Module 11: useRef and useContext",
    question: "What are the three core steps to implement and consume React Context?",
    code: `// 1. Create: const ThemeContext = createContext("light");
// 2. Provide: <ThemeContext.Provider value="dark"><App /></ThemeContext.Provider>
// 3. Consume: const theme = useContext(ThemeContext);`,
    options: [
      "1. `createContext(defaultValue)` to create the context; 2. `<Context.Provider value={...}>` to wrap the subtree; 3. `useContext(Context)` in any descendant to read the value.",
      "1. Install Redux. 2. Write reducers. 3. Connect to DOM.",
      "1. Set `window.context`. 2. Read `window.context`.",
      "Context requires class components only."
    ],
    correctAnswer: 0,
    explanation: "React Context uses a 3-part pattern: creation (`createContext`), provision (`Context.Provider`), and consumption (`useContext`).",
    tip: "Create Context -> Provide value at top -> Consume with `useContext` anywhere below."
  },
  {
    id: "r19-m11-06",
    topicId: "react-useref-usecontext",
    topicName: "Module 11: useRef and useContext",
    question: "What happens to components consuming `useContext(MyContext)` when the Provider's `value` prop changes?",
    code: null,
    options: [
      "All consuming descendant components automatically re-render with the latest context value.",
      "The entire browser window reloads.",
      "Only the root component re-renders.",
      "Consuming components must manually call `this.update()`."
    ],
    correctAnswer: 0,
    explanation: "Whenever the `value` passed to a Context Provider changes, every component that calls `useContext(MyContext)` will re-render to reflect the new data.",
    tip: "Context consumers re-render automatically when the Provider value changes."
  },
  {
    id: "r19-m11-07",
    topicId: "react-useref-usecontext",
    topicName: "Module 11: useRef and useContext",
    question: "How has passing `ref` to custom components changed in React 19 compared to older React versions?",
    code: `// React 19:
function CustomInput({ placeholder, ref }) {
  return <input ref={ref} placeholder={placeholder} />;
}`,
    options: [
      "In React 19, `ref` is now a standard prop on function components, eliminating the need for the verbose `forwardRef()` wrapper!",
      "React 19 deprecated refs completely.",
      "Refs can only be used on `<div>` tags in React 19.",
      "Refs must now be created with `new Ref()`."
    ],
    correctAnswer: 0,
    explanation: "A major ergonomic upgrade in React 19: function components now accept `ref` directly as a regular prop in their parameter list (`function Input({ ref, ...props })`), making `React.forwardRef` obsolete.",
    tip: "In React 19, you can access `ref` directly as a prop without `forwardRef`!"
  },
  {
    id: "r19-m11-08",
    topicId: "react-useref-usecontext",
    topicName: "Module 11: useRef and useContext",
    question: "What is the defaultValue passed to `createContext(defaultValue)` used for?",
    code: `const UserContext = createContext({ name: "Guest", role: "Viewer" });`,
    options: [
      "It is only used as a fallback if a component calls `useContext(UserContext)` WITHOUT having any matching `<UserContext.Provider>` ancestor above it in the tree.",
      "It sets the default database table name.",
      "It is rendered on the 404 page.",
      "It sets CSS colors."
    ],
    correctAnswer: 0,
    explanation: "The default value in `createContext(defaultValue)` is only read when a consumer has no matching Provider above it in the component tree. It is helpful for testing components in isolation.",
    tip: "The default value in `createContext()` is a fallback for unprovided trees."
  },
  {
    id: "r19-m11-09",
    topicId: "react-useref-usecontext",
    topicName: "Module 11: useRef and useContext",
    question: "How do you store a previous prop or state value across renders using `useRef`?",
    code: `function Counter({ count }) {
  const prevCountRef = useRef();
  
  useEffect(() => {
    prevCountRef.current = count;
  });
  
  const prevCount = prevCountRef.current;
  return <div>Now: {count}, before: {prevCount}</div>;
}`,
    options: [
      "Read `prevCountRef.current` during render, and update `prevCountRef.current = count` inside `useEffect` (which runs after render).",
      "Set `count` in cookies.",
      "Pass `prevCount` as a prop to itself.",
      "Previous values cannot be stored in React."
    ],
    correctAnswer: 0,
    explanation: "Because `useEffect` executes after the render is committed, reading `ref.current` during render yields the previous render's value, and the effect then updates it for next time.",
    tip: "Use `useRef` + `useEffect` to track previous prop or state values."
  },
  {
    id: "r19-m11-10",
    topicId: "react-useref-usecontext",
    topicName: "Module 11: useRef and useContext",
    question: "How should a custom Context Provider hook be structured for clean encapsulation?",
    code: `export function useQuiz() {
  const context = useContext(QuizContext);
  if (!context) {
    throw new Error("useQuiz must be used within a QuizProvider");
  }
  return context;
}`,
    options: [
      "Create a custom hook (e.g. `useQuiz()`) that wraps `useContext` and throws a descriptive error if used outside its Provider.",
      "Store context directly in `localStorage`.",
      "Wrap every single component in its own separate Provider.",
      "Custom hooks cannot use `useContext`."
    ],
    correctAnswer: 0,
    explanation: "Creating a dedicated custom hook (`useQuiz`) encapsulates context access and provides immediate developer feedback if someone forgets the Provider wrapper.",
    tip: "Always create a custom hook (`useAuth()`, `useTheme()`) to wrap your `useContext` calls."
  },
  {
    id: "r19-m11-11",
    topicId: "react-useref-usecontext",
    topicName: "Module 11: useRef and useContext",
    question: "When is React Context NOT the best choice for state management?",
    code: null,
    options: [
      "For extremely high-frequency state updates (e.g., mouse position 60fps animations or rapid typing in complex forms), because changing Provider value re-renders all consumers.",
      "For user authentication info.",
      "For UI theme switching.",
      "For language localization."
    ],
    correctAnswer: 0,
    explanation: "Context is best for low-to-medium frequency updates (auth, theme, app settings). High-frequency updates (e.g. mouse tracking, animations) can cause excessive consumer re-renders.",
    tip: "Use Context for global low-frequency data; use local state or specialized stores for high-frequency data."
  },
  {
    id: "r19-m11-12",
    topicId: "react-useref-usecontext",
    topicName: "Module 11: useRef and useContext",
    question: "Can multiple Context Providers be nested together?",
    code: `<AuthProvider>
  <ThemeProvider>
    <QuizProvider>
      <App />
    </QuizProvider>
  </ThemeProvider>
</AuthProvider>`,
    options: [
      "Yes, providers can be freely nested, allowing components to consume values from multiple independent contexts cleanly.",
      "No, React only allows one Provider per application.",
      "Only two providers can be nested.",
      "Nesting providers throws a SyntaxError."
    ],
    correctAnswer: 0,
    explanation: "React apps commonly compose multiple focused providers (e.g. `AuthProvider`, `ThemeProvider`, `QuizProvider`) to separate concerns cleanly.",
    tip: "Compose multiple modular providers at the root of your application."
  },
  {
    id: "r19-m11-13",
    topicId: "react-useref-usecontext",
    topicName: "Module 11: useRef and useContext",
    question: "In React 19, how can `<Context>` be used directly as a provider without `.Provider`?",
    code: `<ThemeContext value="dark">
  <App />
</ThemeContext>`,
    options: [
      "React 19 allows rendering `<ThemeContext value={...}>` directly as a Provider, making `<ThemeContext.Provider>` optional syntactic sugar.",
      "React 19 deprecated Context.",
      "It requires a Babel plugin.",
      "It only works with numbers."
    ],
    correctAnswer: 0,
    explanation: "In React 19, you can now render `<MyContext value={value}>` directly instead of `<MyContext.Provider value={value}>`.",
    tip: "In React 19, `<MyContext value={...}>` works directly as a provider!"
  },

  // Module 12: Performance Basics (12 questions)
  {
    id: "r19-m12-01",
    topicId: "react-performance",
    topicName: "Module 12: Performance Basics",
    question: "What triggers a React component to re-render?",
    code: null,
    options: [
      "1. Its internal state changes. 2. Its props change. 3. Its parent component re-renders. 4. A context it consumes changes.",
      "Only when the browser window is resized.",
      "Only when the user clicks a button.",
      "React components re-render every 100 milliseconds automatically."
    ],
    correctAnswer: 0,
    explanation: "A component re-renders when: its own state updates, its parent re-renders (unless memoized), a consumed context value changes, or its props change.",
    tip: "Parent re-rendering triggers all children to re-render by default."
  },
  {
    id: "r19-m12-02",
    topicId: "react-performance",
    topicName: "Module 12: Performance Basics",
    question: "What is `React.memo()` and how does it optimize component rendering?",
    code: `const QuestionCard = React.memo(function QuestionCard({ question }) {
  return <div>{question.text}</div>;
});`,
    options: [
      "A higher-order component that memoizes a component, skipping re-rendering if its props have not shallowly changed when its parent re-renders.",
      "A hook that stores data in local storage.",
      "A tool to convert components to images.",
      "A compiler that removes CSS."
    ],
    correctAnswer: 0,
    explanation: "`React.memo` wraps a component. If the parent re-renders but the props passed to the memoized component are shallowly equal to previous props, React skips re-rendering the child.",
    tip: "Use `React.memo()` for pure presentational components that re-render frequently with identical props."
  },
  {
    id: "r19-m12-03",
    topicId: "react-performance",
    topicName: "Module 12: Performance Basics",
    question: "What is the purpose of the `useMemo` hook?",
    code: `const sortedQuestions = useMemo(() => {
  return questions.slice().sort((a, b) => a.difficulty - b.difficulty);
}, [questions]);`,
    options: [
      "To memoize (cache) the RESULT of an expensive calculation so it only recalculates when its dependencies change, rather than on every render.",
      "To create a new state variable.",
      "To fetch data from a server.",
      "To memoize function definitions only."
    ],
    correctAnswer: 0,
    explanation: "`useMemo(() => computeValue(a, b), [a, b])` caches the calculated value. It only recomputes when `a` or `b` change, avoiding heavy recalculation during unrelated re-renders.",
    tip: "Use `useMemo` to cache heavy computation results (like filtering, sorting large datasets)."
  },
  {
    id: "r19-m12-04",
    topicId: "react-performance",
    topicName: "Module 12: Performance Basics",
    question: "What is the purpose of the `useCallback` hook?",
    code: `const handleSelect = useCallback((optionIndex) => {
  setSelectedOption(optionIndex);
}, []);`,
    options: [
      "To memoize a FUNCTION DEFINITION/REFERENCE between renders, preventing new function instances from being recreated unless dependencies change.",
      "To run a callback after 5 seconds.",
      "To call an API on click.",
      "To convert functions into strings."
    ],
    correctAnswer: 0,
    explanation: "In JavaScript, `() => {} !== () => {}` (functions create new references on every render). Passing an inline function to a `React.memo` child breaks memoization. `useCallback` returns a stable function reference.",
    tip: "Use `useCallback` to pass stable function references to memoized child components."
  },
  {
    id: "r19-m12-05",
    topicId: "react-performance",
    topicName: "Module 12: Performance Basics",
    question: "What is the relationship between `useMemo` and `useCallback`?",
    code: null,
    options: [
      "`useCallback(fn, deps)` is equivalent to `useMemo(() => fn, deps)`; `useCallback` caches a function instance, while `useMemo` caches a return value.",
      "They are two names for the same hook.",
      "`useMemo` is for class components; `useCallback` is for functional components.",
      "`useCallback` can only be used with numbers."
    ],
    correctAnswer: 0,
    explanation: "`useCallback(fn, deps)` is syntactic sugar for `useMemo(() => fn, deps)`. `useCallback` caches the function reference itself.",
    tip: "`useMemo` caches values; `useCallback` caches function references."
  },
  {
    id: "r19-m12-06",
    topicId: "react-performance",
    topicName: "Module 12: Performance Basics",
    question: "What is Premature Optimization with `useMemo` and `useCallback` and why should it be avoided?",
    code: null,
    options: [
      "Overusing `useMemo` and `useCallback` everywhere for trivial computations (like `a + b`), which adds memory overhead and dependency array comparison costs without measurable performance gain.",
      "Writing components without CSS.",
      "Using React 19 instead of React 18.",
      "Running npm install too early."
    ],
    correctAnswer: 0,
    explanation: "Hooks have an overhead (memory allocation for closures, dependency array checks). Wrapping trivial one-line expressions in `useMemo` slows down your app rather than speeding it up.",
    tip: "Profile first! Only apply `useMemo` / `useCallback` when addressing measurable performance bottlenecks."
  },
  {
    id: "r19-m12-07",
    topicId: "react-performance",
    topicName: "Module 12: Performance Basics",
    question: "What is Code Splitting and Lazy Loading with `React.lazy()` and `<Suspense>`?",
    code: `const ResultsChart = React.lazy(() => import("./ResultsChart"));

<Suspense fallback={<LoadingSpinner />}>
  <ResultsChart />
</Suspense>`,
    options: [
      "Dynamically loading component code chunks only when they are needed/rendered on screen, reducing the initial JavaScript bundle size and speeding up page load time.",
      "Splitting CSS files across 50 folders.",
      "Splitting state into multiple strings.",
      "Disabling images."
    ],
    correctAnswer: 0,
    explanation: "`React.lazy` splits heavy components (like charts, rich text editors, admin pages) into separate network bundles loaded on demand, keeping initial bundle download light.",
    tip: "Use `React.lazy` + `Suspense` for heavy routes or heavy modal components."
  },
  {
    id: "r19-m12-08",
    topicId: "react-performance",
    topicName: "Module 12: Performance Basics",
    question: "What is the React 19 React Compiler (formerly React Forget)?",
    code: null,
    options: [
      "An optimizing build-time compiler that automatically analyzes and memoizes components and values at compile time, eliminating the need to manually write `useMemo`, `useCallback`, and `React.memo`!",
      "A tool that deletes unused JavaScript files.",
      "A server-only framework.",
      "A replacement for HTML."
    ],
    correctAnswer: 0,
    explanation: "The React Compiler automatically inserts fine-grained memoization during the build step, achieving optimal performance automatically without manual `useMemo`/`useCallback` boilerplate.",
    tip: "The React Compiler automatically memoizes components and values at build time."
  },
  {
    id: "r19-m12-09",
    topicId: "react-performance",
    topicName: "Module 12: Performance Basics",
    question: "How does 'Lifting Content Up' (Component Composition) optimize rendering without `React.memo`?",
    code: `function ExpensiveTreeContainer({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>Count: {count}</button>
      {children}
    </div>
  );
}`,
    options: [
      "Passing the expensive component tree as `children` means it was created in the parent scope; when `ExpensiveTreeContainer` re-renders, `children` retains its identical JSX element reference, so React skips re-rendering it!",
      "It converts components to CSS.",
      "It deletes child components.",
      "It forces synchronous execution."
    ],
    correctAnswer: 0,
    explanation: "Because `children` is created in the outer parent, updating `count` re-renders only `ExpensiveTreeContainer`, skipping re-render of `children` without needing `React.memo`.",
    tip: "Composing via `children` prop is a zero-cost performance optimization pattern."
  },
  {
    id: "r19-m12-10",
    topicId: "react-performance",
    topicName: "Module 12: Performance Basics",
    question: "What is React Profiler in React Developer Tools?",
    code: null,
    options: [
      "A DevTools profiling tab that records render timings, flamegraphs, and explains exactly 'Why did this component render?' (props changed, state changed, parent rendered).",
      "A tool to inspect SQL queries.",
      "A tool to compress PNG images.",
      "A security scanner."
    ],
    correctAnswer: 0,
    explanation: "The React Profiler lets you record user interactions and visualizes component render durations, wasted renders, and exact commit times.",
    tip: "Use the React DevTools Profiler to find actual render bottlenecks before optimizing."
  },
  {
    id: "r19-m12-11",
    topicId: "react-performance",
    topicName: "Module 12: Performance Basics",
    question: "Why should creating objects or functions inside component render loops be avoided if passed to memoized children?",
    code: `// Passing new inline objects/functions:
<MemoizedCard options={{ theme: 'dark' }} onClick={() => doSomething()} />`,
    options: [
      "Because inline objects `{}` and arrow functions `() => {}` create brand new memory references on every render, causing shallow equality checks in `React.memo` to fail and re-render every time.",
      "Because JavaScript will crash.",
      "Because objects cannot be passed to props.",
      "Because inline functions are illegal in JSX."
    ],
    correctAnswer: 0,
    explanation: "`{ theme: 'dark' } !== { theme: 'dark' }` in JavaScript reference comparison. Passing inline object literals or inline arrow functions creates new references, breaking memoization.",
    tip: "Move static objects outside the component or wrap dynamic objects in `useMemo`."
  },
  {
    id: "r19-m12-12",
    topicId: "react-performance",
    topicName: "Module 12: Performance Basics",
    question: "What is Virtualization (Windowing) for rendering large lists (e.g. 10,000 questions/items)?",
    code: null,
    options: [
      "A technique (used by libraries like `@tanstack/react-virtual`) that renders ONLY the visible subset of items currently inside the viewport window, recycling DOM nodes as the user scrolls.",
      "Rendering components in virtual reality headsets.",
      "Creating 10,000 real DOM nodes at once.",
      "Saving DOM nodes in local storage."
    ],
    correctAnswer: 0,
    explanation: "Rendering 10,000 real DOM elements creates severe DOM lag. List virtualization renders only the ~20 visible items on screen, dynamically swapping items during scroll.",
    tip: "Use virtualization for lists with thousands of items to keep DOM node count tiny."
  },

  // Module 13: What's New in React 19 (15 questions)
  {
    id: "r19-m13-01",
    topicId: "react-19-features",
    topicName: "Module 13: What's New in React 19",
    question: "What are 'Actions' in React 19?",
    code: null,
    options: [
      "Async functions used with transitions that automatically handle pending states, optimistic updates, error handling, and sequential form submissions.",
      "Redux action creators from 2015.",
      "CSS animation keyframes.",
      "Terminal commands in Node.js."
    ],
    correctAnswer: 0,
    explanation: "In React 19, functions that use async transitions are called Actions. Actions automatically manage loading/pending status, errors, and form lifecycle transitions.",
    tip: "React 19 Actions turn async form handling into a first-class native feature."
  },
  {
    id: "r19-m13-02",
    topicId: "react-19-features",
    topicName: "Module 13: What's New in React 19",
    question: "What does the new `useActionState` hook in React 19 do?",
    code: `const [state, formAction, isPending] = useActionState(async (prevState, formData) => {
  const result = await submitQuiz(formData);
  return result;
}, initialScore);`,
    options: [
      "It manages state updated by an async Action, returning `[currentState, actionTrigger, isPending]`, automatically tracking pending loading state during async execution.",
      "It replaces `useEffect` completely.",
      "It downloads React packages.",
      "It only works on mobile devices."
    ],
    correctAnswer: 0,
    explanation: "`useActionState(actionFn, initialState)` is a flagship React 19 hook. It provides current state, a dispatchable action wrapper, and an automatic `isPending` boolean flag.",
    tip: "`useActionState` gives you `[state, formAction, isPending]` with zero boilerplate."
  },
  {
    id: "r19-m13-03",
    topicId: "react-19-features",
    topicName: "Module 13: What's New in React 19",
    question: "What does the `useFormStatus` hook in React 19 provide to child components inside a `<form>`?",
    code: `function SubmitButton() {
  const { pending, data, method, action } = useFormStatus();
  return <button disabled={pending}>{pending ? "Submitting..." : "Submit"}</button>;
}`,
    options: [
      "Status information (such as `pending` boolean, `data` FormData) about the parent `<form>` without needing prop drilling from the parent form.",
      "The user's credit card verification status.",
      "The server's CPU temperature.",
      "The HTML5 form validation regex."
    ],
    correctAnswer: 0,
    explanation: "`useFormStatus` acts like context for forms: any child button or input inside a `<form>` can read `{ pending }` directly to disable itself or show loading spinners during submission.",
    tip: "Use `useFormStatus` inside child buttons to know if the parent form is submitting."
  },
  {
    id: "r19-m13-04",
    topicId: "react-19-features",
    topicName: "Module 13: What's New in React 19",
    question: "What is the purpose of the `useOptimistic` hook in React 19?",
    code: `const [optimisticAnswers, setOptimisticAnswer] = useOptimistic(
  answers,
  (current, newAnswer) => ({ ...current, [newAnswer.id]: newAnswer.val })
);`,
    options: [
      "To immediately show a predicted/optimistic UI state to the user while an async network action is pending, automatically reverting if the action fails.",
      "To make all async requests 100% faster.",
      "To test optimistic code in unit tests.",
      "To predict future user clicks."
    ],
    correctAnswer: 0,
    explanation: "`useOptimistic` lets you render optimistic feedback immediately (e.g., mark a quiz answer selected or message sent), switching back automatically when the server responds or errors.",
    tip: "Use `useOptimistic` for instant UI feedback on likes, selections, and messages."
  },
  {
    id: "r19-m13-05",
    topicId: "react-19-features",
    topicName: "Module 13: What's New in React 19",
    question: "What is the new `use()` API in React 19?",
    code: `function UserProfile({ userPromise }) {
  const user = use(userPromise); // Reads promise directly during render!
  return <h1>{user.name}</h1>;
}`,
    options: [
      "A versatile React 19 API that can read the value of resources like Promises and Context directly during render (and can even be called conditionally inside `if` statements!).",
      "A hook that replaces `useState`.",
      "A CLI command in Vite.",
      "A method to import CSS."
    ],
    correctAnswer: 0,
    explanation: "`use()` reads values from Promises (integrating with `<Suspense>`) and Context. Unlike standard hooks, `use()` can be called conditionally inside loops and `if` blocks!",
    tip: "`use(promise)` unwraps promises during render and can be called inside `if` statements."
  },
  {
    id: "r19-m13-06",
    topicId: "react-19-features",
    topicName: "Module 13: What's New in React 19",
    question: "How does React 19 handle document metadata (like `<title>`, `<meta>`, `<link rel=\"stylesheet\">`) inside components?",
    code: `function QuizPage() {
  return (
    <div>
      <title>React 19 Certification Exam | EvalForge</title>
      <meta name="description" content="Official exam portal" />
      <h1>Exam in progress</h1>
    </div>
  );
}`,
    options: [
      "React 19 natively supports rendering `<title>`, `<meta>`, and `<link>` tags directly inside any component, automatically hoisting them to the document `<head>` without external libraries like `react-helmet`.",
      "React 19 throws an error if `<title>` is in a component.",
      "Metadata can only be written in HTML files.",
      "Document metadata requires a Node.js backend."
    ],
    correctAnswer: 0,
    explanation: "React 19 natively hoists document metadata tags (`<title>`, `<meta>`, `<link>`) placed anywhere in your component tree directly into the HTML `<head>`.",
    tip: "In React 19, just render `<title>` and `<meta>` tags directly in your components!"
  },
  {
    id: "r19-m13-07",
    topicId: "react-19-features",
    topicName: "Module 13: What's New in React 19",
    question: "What happened to `React.forwardRef` in React 19?",
    code: `// Old: const Input = forwardRef((props, ref) => <input ref={ref} {...props} />);
// React 19: function Input({ ref, ...props }) { return <input ref={ref} {...props} />; }`,
    options: [
      "`forwardRef` is now deprecated and no longer necessary; `ref` is passed directly as a standard prop to function components.",
      "`forwardRef` is mandatory for all components.",
      "`ref` is removed from React 19.",
      "Refs can only be used on class components."
    ],
    correctAnswer: 0,
    explanation: "In React 19, function components accept `ref` directly as a regular prop in their parameter list, making `forwardRef` obsolete.",
    tip: "You don't need `forwardRef` in React 19: simply accept `ref` in props!"
  },
  {
    id: "r19-m13-08",
    topicId: "react-19-features",
    topicName: "Module 13: What's New in React 19",
    question: "How does React 19 improve Stylesheet support with precedence?",
    code: `<link rel="stylesheet" href="/theme.css" precedence="high" />`,
    options: [
      "React 19 manages stylesheet loading order in `<head>` using the `precedence` attribute and suspends components until their required stylesheets have loaded to prevent Flash of Unstyled Content (FOUC).",
      "React 19 removes CSS support.",
      "Stylesheets must be written inside JS files.",
      "Precedence is a CSS property."
    ],
    correctAnswer: 0,
    explanation: "React 19 includes native asset loading for stylesheets, hoisting them and ensuring components don't reveal unstyled content before their CSS is ready.",
    tip: "React 19 manages stylesheet loading order and prevents flash of unstyled content."
  },
  {
    id: "r19-m13-09",
    topicId: "react-19-features",
    topicName: "Module 13: What's New in React 19",
    question: "What is the difference between React Server Components (RSC) and Client Components (`'use client'`)?",
    code: `// Top of file for client components:
'use client';`,
    options: [
      "Server Components execute exclusively on the server (never bundled to the client, direct database access, 0kb client JS); Client Components execute on both server (SSR) and client, supporting interactivity, hooks (`useState`), and event listeners.",
      "Server components cannot return JSX.",
      "Client components cannot use CSS.",
      "There is no difference."
    ],
    correctAnswer: 0,
    explanation: "Server Components run on the server and send pre-rendered UI to the browser with zero client-side JavaScript. Adding `'use client'` marks components that need client-side interactivity, state, and event listeners.",
    tip: "Use Client Components (`'use client'`) for interactive UI (state, effects, clicks)."
  },
  {
    id: "r19-m13-10",
    topicId: "react-19-features",
    topicName: "Module 13: What's New in React 19",
    question: "How does React 19 improve error reporting for hydration mismatch errors?",
    code: null,
    options: [
      "React 19 logs a single consolidated diff showing the exact server HTML vs client HTML mismatch with line context, rather than spamming multiple noisy errors.",
      "React 19 ignores all hydration errors.",
      "React 19 reloads the operating system.",
      "Hydration errors are converted into warnings."
    ],
    correctAnswer: 0,
    explanation: "Hydration error messages in React 19 provide a clean visual diff showing the server and client HTML side by side, making it trivial to find mismatched tags.",
    tip: "React 19 gives clean, pinpoint diffs for hydration mismatches."
  },
  {
    id: "r19-m13-11",
    topicId: "react-19-features",
    topicName: "Module 13: What's New in React 19",
    question: "What is the cleanup function support in React 19 Ref callbacks?",
    code: `<div ref={(node) => {
  // setup
  return () => {
    // cleanup on unmount
  };
}} />`,
    options: [
      "Ref callback functions in React 19 can now return a cleanup function that React calls when the DOM element is detached/unmounted.",
      "Ref callbacks cannot run in React 19.",
      "Ref callbacks must be async.",
      "Cleanup functions only run in Node.js."
    ],
    correctAnswer: 0,
    explanation: "In React 19, ref callbacks can return a cleanup function (analogous to `useEffect`), making it clean to attach and detach 3rd-party DOM listeners.",
    tip: "Ref callbacks can return a cleanup function in React 19."
  },
  {
    id: "r19-m13-12",
    topicId: "react-19-features",
    topicName: "Module 13: What's New in React 19",
    question: "What is the purpose of `<Context>` rendering directly in React 19?",
    code: `<ThemeContext value={theme}>
  <App />
</ThemeContext>`,
    options: [
      "Allows developers to write `<ThemeContext value={...}>` instead of `<ThemeContext.Provider value={...}>`, simplifying JSX syntax.",
      "Deletes the context from memory.",
      "Requires TypeScript.",
      "Renders context as an HTML tag."
    ],
    correctAnswer: 0,
    explanation: "In React 19, context objects themselves act directly as Providers, reducing boilerplate.",
    tip: "Use `<ThemeContext value={...}>` directly in React 19."
  },
  {
    id: "r19-m13-13",
    topicId: "react-19-features",
    topicName: "Module 13: What's New in React 19",
    question: "How does the `preload` and `preinit` resource loading APIs in React 19 improve font and script loading?",
    code: `import { preload, preinit } from 'react-dom';
preload('/fonts/inter.woff2', { as: 'font' });
preinit('/analytics.js', { as: 'script' });`,
    options: [
      "They allow components to inform the browser to discover, preload, and execute critical assets (fonts, scripts, images) as early as possible.",
      "They replace HTML `<head>` tags entirely.",
      "They compress images on the client.",
      "They download files to local disk."
    ],
    correctAnswer: 0,
    explanation: "React 19 includes native resource hinting APIs (`preload`, `preinit`, `preconnect`) in `react-dom` to optimize browser network scheduling for critical assets.",
    tip: "Use React 19 resource hints to preload fonts and scripts before render."
  },
  {
    id: "r19-m13-14",
    topicId: "react-19-features",
    topicName: "Module 13: What's New in React 19",
    question: "What happens when an async function passed to `startTransition` rejects or throws in React 19?",
    code: `startTransition(async () => {
  await submitData();
});`,
    options: [
      "React 19 supports async functions in `startTransition`; any caught errors are caught and surfaced via Error Boundaries or Action state.",
      "The browser crashes with a fatal error.",
      "Async functions are forbidden in transitions.",
      "The error is silently ignored."
    ],
    correctAnswer: 0,
    explanation: "React 19 adds first-class async transition support. Transitions now seamlessly handle Promises and async functions.",
    tip: "Transitions in React 19 fully support async/await workflows."
  },
  {
    id: "r19-m13-15",
    topicId: "react-19-features",
    topicName: "Module 13: What's New in React 19",
    question: "Which deprecated legacy features are officially removed in React 19?",
    code: null,
    options: [
      "`propTypes` on function components, `defaultProps` on function components, legacy Context (`childContextTypes`), string refs (`ref=\"myInput\"`), and `findDOMNode`.",
      "`useState` and `useEffect`.",
      "`<div>` and `<span>` tags.",
      "React Router."
    ],
    correctAnswer: 0,
    explanation: "React 19 cleans up legacy APIs from older React eras (like `defaultProps`, string refs, and `findDOMNode`), standardizing on modern functional idioms and TypeScript/ES6 defaults.",
    tip: "React 19 removes legacy string refs and defaultProps in favor of modern ES6 standards."
  },

  // Module 14: Basic Routing with React Router (13 questions)
  {
    id: "r19-m14-01",
    topicId: "react-router",
    topicName: "Module 14: Basic Routing with React Router",
    question: "What is Client-Side Routing in React applications?",
    code: null,
    options: [
      "Updating the browser URL and rendering different page components dynamically with JavaScript without making a full-page HTTP request to the server.",
      "Routing network cables to router hardware.",
      "Saving route names in database tables.",
      "Using CSS `@media` rules for pages."
    ],
    correctAnswer: 0,
    explanation: "Client-side routing intercepts URL changes in the browser using the HTML5 History API, rendering the appropriate React component without refreshing the page.",
    tip: "Client-side routing delivers fast, instant page navigation in SPAs."
  },
  {
    id: "r19-m14-02",
    topicId: "react-router",
    topicName: "Module 14: Basic Routing with React Router",
    question: "What is the primary role of `<BrowserRouter>` in React Router?",
    code: `import { BrowserRouter } from 'react-router-dom';
<BrowserRouter>
  <App />
</BrowserRouter>`,
    options: [
      "The top-level provider component that connects your React component tree to the browser's HTML5 History API (`pushState`, `popstate`).",
      "A web browser developed by Facebook.",
      "A tool to compile JavaScript.",
      "A local database."
    ],
    correctAnswer: 0,
    explanation: "`<BrowserRouter>` stores the current location in the browser's address bar using clean URLs and synchronizes it with React Router's state.",
    tip: "Wrap your entire application in `<BrowserRouter>` to enable routing."
  },
  {
    id: "r19-m14-03",
    topicId: "react-router",
    topicName: "Module 14: Basic Routing with React Router",
    question: "How do `<Routes>` and `<Route>` configure route matching in React Router v6+?",
    code: `<Routes>
  <Route path="/" element={<LandingPage />} />
  <Route path="/select-modules" element={<ModuleSelect />} />
  <Route path="/quiz" element={<QuizPortal />} />
</Routes>`,
    options: [
      "`<Routes>` inspects all child `<Route>` definitions, selects the best matching `path` based on the current URL, and renders its corresponding `element`.",
      "`<Routes>` renders all child components at the same time.",
      "`<Route>` creates a new HTML file on disk.",
      "Routes must be configured in JSON files."
    ],
    correctAnswer: 0,
    explanation: "`<Routes>` matches the current URL pathname against child `<Route path=\"...\" element={<Component />} />` elements and renders the winning element.",
    tip: "Use `<Routes><Route path=\"...\" element={<Page />} /></Routes>` for clean routing."
  },
  {
    id: "r19-m14-04",
    topicId: "react-router",
    topicName: "Module 14: Basic Routing with React Router",
    question: "Why should you use the `<Link>` component instead of standard `<a href=\"...\">` tags in React Router?",
    code: `// Correct:
<Link to="/quiz">Start Quiz</Link>

// Avoid:
<a href="/quiz">Start Quiz</a>`,
    options: [
      "`<Link>` updates the URL client-side and renders the new view WITHOUT a full page refresh; standard `<a>` tags cause the browser to reload the entire web page, losing React state.",
      "`<Link>` is faster in CSS.",
      "`<a>` tags are forbidden in HTML5.",
      "`<Link>` automatically downloads images."
    ],
    correctAnswer: 0,
    explanation: "`<Link to=\"...\">` intercepts the click event, calls `e.preventDefault()`, and pushes the new route to browser history without a full page reload, keeping the SPA fast and state intact.",
    tip: "Always use `<Link to=\"...\">` for internal app navigation to prevent page reloads."
  },
  {
    id: "r19-m14-05",
    topicId: "react-router",
    topicName: "Module 14: Basic Routing with React Router",
    question: "What is the difference between `<NavLink>` and `<Link>` in React Router?",
    code: `<NavLink
  to="/quiz"
  className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
>
  Quiz
</NavLink>`,
    options: [
      "`<NavLink>` knows whether its target URL is currently active and allows conditional styling or class assignment via the `isActive` boolean parameter.",
      "`<NavLink>` only works on mobile devices.",
      "`<Link>` is deprecated.",
      "`<NavLink>` opens links in a new tab."
    ],
    correctAnswer: 0,
    explanation: "`<NavLink>` is a specialized version of `<Link>` designed for navigation bars and menus, providing an `isActive` flag in `className` or `style` functions to highlight active tabs.",
    tip: "Use `<NavLink>` for navigation menus where the current active tab should be highlighted."
  },
  {
    id: "r19-m14-06",
    topicId: "react-router",
    topicName: "Module 14: Basic Routing with React Router",
    question: "How do you navigate programmatically in React Router using the `useNavigate` hook?",
    code: `import { useNavigate } from 'react-router-dom';

function FinishButton() {
  const navigate = useNavigate();
  const handleFinish = () => {
    // submit quiz...
    navigate("/results");
  };
  return <button onClick={handleFinish}>Submit Quiz</button>;
}`,
    options: [
      "Call `const navigate = useNavigate()` and execute `navigate('/results')` inside any event handler or function.",
      "Call `window.location.goTo('/results')`",
      "`useNavigate` can only be used inside `<head>`.",
      "Programmatic navigation is not supported."
    ],
    correctAnswer: 0,
    explanation: "The `useNavigate()` hook returns a function that lets you change routes programmatically in response to events (e.g. after form submission or exam completion).",
    tip: "`const navigate = useNavigate(); navigate('/path')` is the standard programmatic navigation."
  },
  {
    id: "r19-m14-07",
    topicId: "react-router",
    topicName: "Module 14: Basic Routing with React Router",
    question: "How do you define and access Dynamic URL Route Parameters (e.g. `/quiz/:courseId/:questionId`)?",
    code: `// Route: <Route path="/quiz/:topicId" element={<QuizView />} />

// Component:
import { useParams } from 'react-router-dom';
function QuizView() {
  const { topicId } = useParams();
  return <h1>Topic: {topicId}</h1>;
}`,
    options: [
      "Define dynamic segments with a colon `:paramName` in the route path, and extract them using the `useParams()` hook in the component.",
      "Read `window.url.params`",
      "Dynamic routes require regex in React.",
      "Parameters are passed as props to `<App />`."
    ],
    correctAnswer: 0,
    explanation: "Dynamic URL segments start with `:`. `useParams()` returns an object with key-value pairs of the URL parameters matched by the current `<Route>`.",
    tip: "Route: `/users/:id` -> Component: `const { id } = useParams()`."
  },
  {
    id: "r19-m14-08",
    topicId: "react-router",
    topicName: "Module 14: Basic Routing with React Router",
    question: "How do you create a Catch-All 404 (Not Found) route in React Router?",
    code: `<Routes>
  <Route path="/" element={<Home />} />
  <Route path="*" element={<NotFoundPage />} />
</Routes>`,
    options: [
      "Set `path=\"*\"` on a `<Route>` placed at the end of `<Routes>`, which matches any URL not matched by preceding routes.",
      "Set `path=\"404\"`",
      "Set `path=\"default\"`",
      "Catch-all routes must be created on the server."
    ],
    correctAnswer: 0,
    explanation: "`path=\"*\"` acts as a wildcard catch-all route that renders when no other route definition matches the current URL.",
    tip: "`<Route path=\"*\" element={<NotFound />} />` handles 404 pages gracefully."
  },
  {
    id: "r19-m14-09",
    topicId: "react-router",
    topicName: "Module 14: Basic Routing with React Router",
    question: "How do you read and update URL Query Parameters (e.g. `?mode=practice&filter=wrong`) in React Router?",
    code: `import { useSearchParams } from 'react-router-dom';

function Quiz() {
  const [searchParams, setSearchParams] = useSearchParams();
  const mode = searchParams.get("mode"); // "practice"
}`,
    options: [
      "Using the `useSearchParams()` hook, which returns the current search params object (with `.get('key')`) and a function to update query strings in the URL.",
      "Reading `document.search`",
      "Query params cannot be read in React.",
      "Using `useQuery()`"
    ],
    correctAnswer: 0,
    explanation: "`useSearchParams()` functions similarly to `useState`, but stores state directly in the URL search query string (`?key=value`), making pages shareable and bookmarkable.",
    tip: "Use `useSearchParams` to sync filter and pagination state with the URL query string."
  },
  {
    id: "r19-m14-10",
    topicId: "react-router",
    topicName: "Module 14: Basic Routing with React Router",
    question: "How do you pass transient state data during navigation using `navigate` or `<Link>`?",
    code: `// Navigating:
navigate("/results", { state: { score: 38, total: 40 } });

// Reading:
import { useLocation } from 'react-router-dom';
const location = useLocation();
const score = location.state?.score;`,
    options: [
      "Pass a `state` object in the options parameter of `navigate(url, { state })` and read it in the target component using `useLocation().state`.",
      "Write data to `window.data`",
      "Transient state can only be passed via query strings.",
      "Pass data via `props.history`"
    ],
    correctAnswer: 0,
    explanation: "React Router supports passing private state across navigation without displaying it in the URL string via `location.state`.",
    tip: "Pass private result data cleanly via `navigate('/results', { state: quizData })`."
  },
  {
    id: "r19-m14-11",
    topicId: "react-router",
    topicName: "Module 14: Basic Routing with React Router",
    question: "What is an `<Outlet>` in Nested Routing with React Router?",
    code: `function DashboardLayout() {
  return (
    <div className="layout">
      <Sidebar />
      <main>
        <Outlet /> {/* Child routes render here! */}
      </main>
    </div>
  );
}`,
    options: [
      "A placeholder component placed in a parent layout route that renders the matching child route element.",
      "An electrical socket simulator.",
      "An API endpoint connector.",
      "An image gallery tag."
    ],
    correctAnswer: 0,
    explanation: "In nested route layouts, `<Outlet />` indicates where child route elements should be rendered within the shared parent layout template.",
    tip: "Use `<Outlet />` inside layout components to render nested child pages."
  },
  {
    id: "r19-m14-12",
    topicId: "react-router",
    topicName: "Module 14: Basic Routing with React Router",
    question: "How do you navigate back to the previous page in history using `useNavigate`?",
    code: `const navigate = useNavigate();`,
    options: [
      "`navigate(-1);` (passing delta `-1` to navigate back one step in browser history)",
      "`navigate('back');`",
      "`window.goBack();`",
      "`navigate.previous();`"
    ],
    correctAnswer: 0,
    explanation: "`navigate(-1)` is equivalent to clicking the browser's Back button, navigating one step backwards in the history stack.",
    tip: "`navigate(-1)` goes back; `navigate(1)` goes forward."
  },
  {
    id: "r19-m14-13",
    topicId: "react-router",
    topicName: "Module 14: Basic Routing with React Router",
    question: "What is the difference between `navigate('/login')` and `navigate('/login', { replace: true })`?",
    code: null,
    options: [
      "`{ replace: true }` replaces the CURRENT entry in the browser history stack rather than pushing a new one, preventing the user from hitting Back and returning to the previous page (ideal after login/logout/exam submit).",
      "`replace: true` deletes browser cookies.",
      "`replace: true` reloads all CSS.",
      "There is no difference."
    ],
    correctAnswer: 0,
    explanation: "`replace: true` modifies the current history entry. If a user finishes an exam and is redirected to `/results`, replacing the history entry prevents hitting the Back button from returning to the completed exam.",
    tip: "Use `{ replace: true }` on redirects and final form submissions."
  },

  // Module 15: Project Structure and Best Practices (10 questions)
  {
    id: "r19-m15-01",
    topicId: "react-best-practices",
    topicName: "Module 15: Project Structure & Best Practices",
    question: "What is the standard recommended directory structure for a scalable React application?",
    code: null,
    options: [
      "Organized into dedicated folders under `src/`: `components/` (reusable UI), `pages/` or `views/` (route screens), `hooks/` (custom hooks), `context/` (state providers), `utils/` (helpers/logic), `data/` (static datasets), and `assets/` (images/icons).",
      "Putting all 100 components in the root directory.",
      "Writing everything inside `index.html`.",
      "Separating files by file extension only (`all-js/`, `all-jsx/`)."
    ],
    correctAnswer: 0,
    explanation: "A feature or layer-based architecture under `src/` keeps code discoverable, maintainable, and modular as the application expands.",
    tip: "A clean folder structure (`components/`, `hooks/`, `utils/`, `data/`) keeps projects scalable."
  },
  {
    id: "r19-m15-02",
    topicId: "react-best-practices",
    topicName: "Module 15: Project Structure & Best Practices",
    question: "What is the strict naming convention for Custom Hooks in React?",
    code: `// Correct:
function useQuizTimer(initialSeconds) { ... }`,
    options: [
      "Custom hook function names MUST start with the prefix `use` (e.g. `useTimer`, `useLocalStorage`, `useQuestions`) so React and ESLint can enforce the Rules of Hooks.",
      "Custom hooks must end with `Hook`.",
      "Custom hooks must be in ALL_CAPS.",
      "Custom hooks must start with `get`."
    ],
    correctAnswer: 0,
    explanation: "The `use` prefix is required by React so linters can automatically verify that the Rules of Hooks (top-level calls only) are followed.",
    tip: "Always prefix custom hooks with `use`: `useTimer`, `useKeyboardNav`."
  },
  {
    id: "r19-m15-03",
    topicId: "react-best-practices",
    topicName: "Module 15: Project Structure & Best Practices",
    question: "Why should business logic and heavy computations be extracted into helper utilities or Custom Hooks?",
    code: null,
    options: [
      "It keeps UI components clean and focused purely on presentation, makes business logic independently unit-testable without mounting DOM, and enables easy logic reuse across multiple components.",
      "Because React cannot run math operations inside components.",
      "To convert code to WebAssembly.",
      "To satisfy CSS requirements."
    ],
    correctAnswer: 0,
    explanation: "Separation of concerns is a core design principle: extract non-UI calculations, algorithms, and stateful workflows into utilities (`utils/quizEngine.js`) and custom hooks.",
    tip: "Separate pure business logic (`utils/`) from UI rendering (`components/`)."
  },
  {
    id: "r19-m15-04",
    topicId: "react-best-practices",
    topicName: "Module 15: Project Structure & Best Practices",
    question: "What is the DRY (Don't Repeat Yourself) principle in component architecture?",
    code: null,
    options: [
      "Identifying repeated UI structures (like Question Cards, Option Buttons, Progress Bars) and extracting them into generic, parameterized components instead of copying and pasting JSX.",
      "Deleting CSS files.",
      "Writing all components in a single function.",
      "Never using functions more than once."
    ],
    correctAnswer: 0,
    explanation: "Extracting common UI into reusable components (`<QuestionCard>`, `<TimerBadge>`, `<OptionButton>`) ensures styling and behavior updates are made in one place.",
    tip: "Extract repeated UI patterns into reusable components."
  },
  {
    id: "r19-m15-05",
    topicId: "react-best-practices",
    topicName: "Module 15: Project Structure & Best Practices",
    question: "What is the Single Responsibility Principle as applied to React components?",
    code: null,
    options: [
      "Each component should do ONE thing well (e.g. `<Timer>` displays countdown; `<QuestionPalette>` handles question jumping; `<ScoreCard>` displays summary metrics).",
      "Every component must have only 1 line of code.",
      "An app can only have 1 component.",
      "Components cannot accept props."
    ],
    correctAnswer: 0,
    explanation: "Components with a single responsibility are easier to read, maintain, test, and refactor than massive monolithic components.",
    tip: "If a component is doing 5 different things, break it down into smaller sub-components."
  },
  {
    id: "r19-m15-06",
    topicId: "react-best-practices",
    topicName: "Module 15: Project Structure & Best Practices",
    question: "How should environment variables (like API keys or base URLs) be named and accessed in Vite projects?",
    code: `const apiUrl = import.meta.env.VITE_API_BASE_URL;`,
    options: [
      "Prefixed with `VITE_` in `.env` files (e.g. `VITE_API_URL`) and accessed in code via `import.meta.env.VITE_API_URL`.",
      "Prefixed with `REACT_APP_` and read from `process.env` (CRA syntax).",
      "Stored in `window.API_KEY`.",
      "Hardcoded in `index.html`."
    ],
    correctAnswer: 0,
    explanation: "Vite exposes variables from `.env` on `import.meta.env`. Only variables prefixed with `VITE_` are exposed to client-side code to prevent leaking private secrets.",
    tip: "In Vite: prefix with `VITE_` and access with `import.meta.env.VITE_VAR`."
  },
  {
    id: "r19-m15-07",
    topicId: "react-best-practices",
    topicName: "Module 15: Project Structure & Best Practices",
    question: "What is an Error Boundary in React applications?",
    code: `class ErrorBoundary extends React.Component {
  state = { hasError: false };
  static getDerivedStateFromError(error) { return { hasError: true }; }
  componentDidCatch(error, info) { logErrorToService(error, info); }
  render() {
    return this.state.hasError ? <ErrorFallback /> : this.props.children;
  }
}`,
    options: [
      "A component that catches JavaScript errors anywhere in its child component tree during rendering, logs the error, and displays a graceful fallback UI instead of crashing the entire app.",
      "A firewall in the router.",
      "A CSS property that prevents layout shifts.",
      "A compiler that removes bugs."
    ],
    correctAnswer: 0,
    explanation: "Error boundaries catch render errors in children and display a fallback screen, preventing an uncaught crash in one component from taking down the entire web page.",
    tip: "Wrap critical application regions in Error Boundaries for bulletproof resilience."
  },
  {
    id: "r19-m15-08",
    topicId: "react-best-practices",
    topicName: "Module 15: Project Structure & Best Practices",
    question: "Why is semantic HTML (like `<header>`, `<main>`, `<nav>`, `<button>`, `<fieldset>`) important in React components?",
    code: null,
    options: [
      "It provides accessibility (a11y) for screen readers, improves SEO ranking, provides built-in keyboard navigation support, and ensures clean DOM structure.",
      "Semantic HTML is required for CSS to work.",
      "It makes React compile 50% faster.",
      "Semantic HTML is only used in WordPress."
    ],
    correctAnswer: 0,
    explanation: "Using semantic tags (`<button>` instead of `<div onClick=...>`, `<main>`, `<nav>`) ensures built-in keyboard focus, screen reader accessibility, and proper document structure.",
    tip: "Use real `<button>` elements for click actions to ensure accessibility and keyboard navigation."
  },
  {
    id: "r19-m15-09",
    topicId: "react-best-practices",
    topicName: "Module 15: Project Structure & Best Practices",
    question: "What is the recommended file naming convention for React components and utilities?",
    code: null,
    options: [
      "PascalCase for components (`QuestionCard.jsx`, `NavBar.jsx`); camelCase for utilities, hooks, and data files (`quizEngine.js`, `useTimer.js`, `topicsData.js`).",
      "ALL_CAPS for every file.",
      "kebab-case for components only.",
      "File names do not matter."
    ],
    correctAnswer: 0,
    explanation: "Matching component file names (`QuestionCard.jsx`) with their PascalCase export identifier makes imports intuitive and standard across the React ecosystem.",
    tip: "Components: `PascalCase.jsx`. Hooks & Utils: `camelCase.js`."
  },
  {
    id: "r19-m15-10",
    topicId: "react-best-practices",
    topicName: "Module 15: Project Structure & Best Practices",
    question: "Why should you avoid storing massive duplicated state across sibling components?",
    code: null,
    options: [
      "Duplicated state leads to synchronization bugs where one component updates but the sibling displays stale data; lift state up to their common parent or use Context.",
      "Because state is limited to 1KB total.",
      "Because React throws an error on duplicate state names.",
      "Duplicated state causes network errors."
    ],
    correctAnswer: 0,
    explanation: "Maintaining a Single Source of Truth prevents state drift and ensures all UI components render consistent, synchronized information.",
    tip: "Maintain a Single Source of Truth: lift shared state to the common parent."
  },

  // Module 16: Glossary of Key Terms (10 questions)
  {
    id: "r19-m16-01",
    topicId: "react-glossary",
    topicName: "Module 16: Glossary of Key Terms",
    question: "What is 'Reconciliation' in React?",
    code: null,
    options: [
      "The algorithm React uses to compare two Virtual DOM trees (the diffing algorithm) to determine the exact minimal set of changes required on the real DOM.",
      "A database merge operation.",
      "Converting JSX into CSS.",
      "Signing in a user."
    ],
    correctAnswer: 0,
    explanation: "Reconciliation is the process through which React diffs the old and new Virtual DOM trees to compute the most efficient real DOM mutations.",
    tip: "Reconciliation = Virtual DOM Diffing algorithm."
  },
  {
    id: "r19-m16-02",
    topicId: "react-glossary",
    topicName: "Module 16: Glossary of Key Terms",
    question: "What is 'Hydration' in Server-Side Rendering (SSR)?",
    code: null,
    options: [
      "The process where client-side JavaScript attaches event listeners and state management to the pre-rendered static HTML received from the server, making it fully interactive.",
      "Clearing the browser cache.",
      "Downloading images in the background.",
      "Compiling CSS variables."
    ],
    correctAnswer: 0,
    explanation: "Server sends fast static HTML. Hydration is when React loads in the browser, matches the DOM, and attaches event handlers to turn static HTML into an active React app.",
    tip: "Hydration brings static server-rendered HTML to life with interactive React listeners."
  },
  {
    id: "r19-m16-03",
    topicId: "react-glossary",
    topicName: "Module 16: Glossary of Key Terms",
    question: "What is React Fiber?",
    code: null,
    options: [
      "React's internal reconciliation engine architecture that enables incremental rendering, interruptible work, priority scheduling, and concurrent features.",
      "A high-speed optical internet cable.",
      "A CSS styling library.",
      "A database indexing format."
    ],
    correctAnswer: 0,
    explanation: "React Fiber is the core underlying reimplementation of React's reconciler that broke rendering into units of work that can be paused, prioritized, and scheduled.",
    tip: "Fiber is the internal engine powering React's concurrent rendering features."
  },
  {
    id: "r19-m16-04",
    topicId: "react-glossary",
    topicName: "Module 16: Glossary of Key Terms",
    question: "What does 'Lifting State Up' mean in React?",
    code: null,
    options: [
      "Moving shared state to the closest common ancestor of the components that need it, so it can be passed down as props along with update callbacks.",
      "Uploading state to a cloud database.",
      "Converting local state to a global cookie.",
      "Saving state to the top of the file."
    ],
    correctAnswer: 0,
    explanation: "When two sibling components need to share or synchronize data, move the state variable to their common parent and pass it down via props.",
    tip: "Lift state up to the closest common ancestor when sibling components need to sync."
  },
  {
    id: "r19-m16-05",
    topicId: "react-glossary",
    topicName: "Module 16: Glossary of Key Terms",
    question: "What is a Higher-Order Component (HOC)?",
    code: `const EnhancedComponent = withAuth(UserProfile);`,
    options: [
      "A pattern where a function takes a component as an argument and returns a new enhanced component with added props or capabilities.",
      "A component that has higher CSS `z-index`.",
      "A component rendered at the top of the page.",
      "A component written in TypeScript."
    ],
    correctAnswer: 0,
    explanation: "An HOC is a pure function that takes a component and returns a wrapped, enhanced component (e.g. `withAuth`, `withRouter`), a classic pattern largely superseded by custom hooks.",
    tip: "HOC: `withSomething(Component) -> EnhancedComponent`."
  },
  {
    id: "r19-m16-06",
    topicId: "react-glossary",
    topicName: "Module 16: Glossary of Key Terms",
    question: "What is `<StrictMode>` in React?",
    code: `<StrictMode>
  <App />
</StrictMode>`,
    options: [
      "A development-only tool that highlights potential problems, detects legacy API usages, and intentionally double-invokes renders/effects in development to catch side-effect bugs.",
      "A feature that disables user interactions.",
      "A strict CSS validator.",
      "A production performance booster."
    ],
    correctAnswer: 0,
    explanation: "StrictMode checks for unsafe lifecycles, legacy API usage, and unhandled side effects by running extra checks and double-invoking render/effects in development mode only.",
    tip: "`StrictMode` has zero impact on production builds."
  },
  {
    id: "r19-m16-07",
    topicId: "react-glossary",
    topicName: "Module 16: Glossary of Key Terms",
    question: "What is 'Unidirectional Data Flow' (One-Way Data Binding) in React?",
    code: null,
    options: [
      "Data flows strictly in one direction: from parent to child through props; child components emit events/callbacks upward to request state changes.",
      "Data can only be sent from client to server, never from server to client.",
      "Data only flows when the page scrolls down.",
      "Data is read-only across the entire application."
    ],
    correctAnswer: 0,
    explanation: "Unidirectional data flow makes state predictable: data flows down via props; events flow up via callbacks, making it easy to track where data originates and changes.",
    tip: "Props flow DOWN; events flow UP."
  },
  {
    id: "r19-m16-08",
    topicId: "react-glossary",
    topicName: "Module 16: Glossary of Key Terms",
    question: "What is a 'Portal' (`createPortal`) in React DOM?",
    code: `import { createPortal } from 'react-dom';

function Modal({ children }) {
  return createPortal(
    <div className="modal-overlay">{children}</div>,
    document.getElementById("modal-root")
  );
}`,
    options: [
      "A way to render a component's JSX children into a different DOM node outside the parent component's DOM hierarchy (commonly used for Modals, Tooltips, and Dropdowns).",
      "A 3D graphics canvas in WebGL.",
      "A network gateway for web sockets.",
      "A method to link two websites together."
    ],
    correctAnswer: 0,
    explanation: "`createPortal(children, domNode)` renders children into a designated DOM node (like `document.body` or `#modal-root`) while preserving React event bubbling and context.",
    tip: "Use `createPortal` for modals, popovers, and tooltips that need to escape overflow/z-index clipping."
  },
  {
    id: "r19-m16-09",
    topicId: "react-glossary",
    topicName: "Module 16: Glossary of Key Terms",
    question: "What is 'Concurrent React'?",
    code: null,
    options: [
      "A foundational React capability that allows React to prepare multiple versions of the UI concurrently in memory, interrupting, pausing, and resuming rendering to keep the UI responsive to user input.",
      "Running multiple React servers in parallel.",
      "Using multiple databases at once.",
      "Writing React in C++."
    ],
    correctAnswer: 0,
    explanation: "Concurrent React enables non-blocking rendering. High-priority updates (typing in an input) can interrupt low-priority updates (rendering a heavy filtered list), ensuring fluid user interaction.",
    tip: "Concurrent rendering keeps UI responsive even during heavy updates."
  },
  {
    id: "r19-m16-10",
    topicId: "react-glossary",
    topicName: "Module 16: Glossary of Key Terms",
    question: "What is 'Component Mounting' versus 'Component Unmounting'?",
    code: null,
    options: [
      "Mounting is when a component is first inserted into the real DOM; Unmounting is when a component is removed/destroyed from the DOM.",
      "Mounting is saving code to Git; Unmounting is deleting code.",
      "Mounting is applying CSS styles; Unmounting is removing CSS.",
      "There is no difference."
    ],
    correctAnswer: 0,
    explanation: "Mounting represents the initial creation and insertion of a component into the DOM. Unmounting is the cleanup and removal of the component from the DOM tree.",
    tip: "Mount = born into the DOM; Unmount = cleaned up and removed from the DOM."
  }
];
