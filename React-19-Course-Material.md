# React 19 Course Material

A structured course for learning React using React 19. This material is written for students who already know HTML, CSS, and JavaScript (variables, functions, arrays, objects, and array methods like `map`). Each module introduces new ideas, explains key terms, compares concepts where useful, and ends with code examples and a short practice exercise.

## Table of Contents

1. Introduction to React
2. Setting Up a React 19 Project
3. JSX
4. Components and Props
5. State and the useState Hook
6. Handling Events
7. Conditional Rendering
8. Rendering Lists and Keys
9. Forms and Controlled Inputs
10. The useEffect Hook
11. useRef and useContext
12. Performance Basics
13. What's New in React 19
14. Basic Routing with React Router
15. Project Structure and Best Practices
16. Glossary of Key Terms

## Module 1: Introduction to React

### 1.1 What is React?

React is a JavaScript library/framework for building user interfaces, mainly for the web. Instead of writing pages as separate HTML files, you build small reusable pieces called components, and React combines them into the final page the user sees.

React is **declarative**. This means you describe what the UI should look like for a given state, and React figures out how to update the screen. This is different from **imperative** code, where you manually tell the browser every step to take.

**Keyword: Declarative** - describing the result you want, not the steps to get there.
**Keyword: Imperative** - giving step by step instructions to reach a result.




### 1.2 Why React?

- Components can be reused across a project instead of rewriting the same UI
- The UI updates automatically when data changes
- It has one of the largest job markets and communities among frontend tools
- It works on the web (React DOM) and on mobile (React Native) with similar concepts

### 1.3 Library vs Framework

React calls itself a library, not a framework. Students often mix these terms up, so it helps to compare them directly.

| Aspect | Library | Framework |
|---|---|---|
| Control | Your code calls the library when needed | The framework calls your code (it controls the flow) |
| Flexibility | You choose your own tools for routing, state, etc. | Usually comes with its own built-in tools |
| Example | React, jQuery | Angular, Next.js |
| Learning curve | Smaller, but you make more decisions | Larger, but more decisions are made for you |

### 1.4 Declarative React vs Imperative JavaScript

| Task | Imperative (Vanilla JS / DOM) | Declarative (React) |
|---|---|---|
| Show a message | `document.getElementById("msg").textContent = "Hi"` | `<p>{message}</p>` |
| Update on click | Manually select element and change it | Update state, React re-renders automatically |
| Show/hide an element | `element.style.display = "none"` | `{isVisible && <Box />}` |

### 1.5 Other important keywords

**Component** - a reusable, self-contained piece of UI, written as a JavaScript function that returns JSX.
**Virtual DOM** - a lightweight copy of the real DOM that React keeps in memory. React compares the old and new Virtual DOM to figure out the smallest possible change to make on the real page.
**SPA (Single Page Application)** - a web app that loads a single HTML page and updates content dynamically with JavaScript instead of reloading the whole page.
**Render** - the process of React turning your component into actual elements on the screen.


## Module 2: Setting Up a React 19 Project

### 2.1 What you need installed

- **Node.js** - lets you run JavaScript outside the browser, and comes with npm
- **npm (Node Package Manager)** - used to install React and other packages
- A code editor, such as VS Code

**Keyword: Package** - a piece of reusable code written by someone else that you can install and use in your project.
**Keyword: Bundler** - a tool that takes all your project files (JS, CSS, images) and combines them into a small number of optimized files the browser can load.

### 2.2 Creating a project with Vite

Vite is the recommended tool for starting a new React project today. The older tool, Create React App, is no longer maintained, so it is not used for new projects.

```bash
npm create vite@latest my-app -- --template react

cd my-app
npm install
npm run dev
```

After running `npm run dev`, Vite starts a local development server, usually at `http://localhost:5173`, and the terminal shows you the link to open in your browser.

### 2.3 Vite vs Create React App

| Aspect | Vite | Create React App (CRA) |
|---|---|---|
| Status | Actively maintained, recommended | Deprecated, not recommended for new projects |
| Startup speed | Very fast, starts almost instantly | Slower, especially on bigger projects |
| Config file | `vite.config.js` | Hidden unless you "eject" |
| Used in this course | Yes | No |

### 2.4 Understanding the project folder

```
my-app/
  node_modules/
  public/
  src/
    App.jsx
    main.jsx
    index.css
  index.html
  package.json
  vite.config.js
```

**Keyword: Entry point** - the first file that runs and starts the whole application. In this setup, `index.html` loads `main.jsx`, and `main.jsx` renders `App.jsx` onto the page.

```jsx
// main.jsx
// this file mounts the whole React app into the index.html page
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(<App />)
```

```jsx
// App.jsx
// this is the first component that loads when the app starts
function App() {
  return <h1>Hello, React 19</h1>
}

export default App
```

### Practice Exercise

Create a new Vite + React project, run it, and change the text inside `App.jsx` so the page shows your name and the name of your school or course.

## Module 3: JSX

### 3.1 What is JSX?

JSX (JavaScript XML) is a syntax extension that lets you write HTML-like code inside JavaScript files. The browser does not understand JSX directly, so tools like Vite convert it into plain JavaScript before running it.

```jsx
const element = <h1>Welcome to class</h1>
```

Behind the scenes, this becomes something like `React.createElement('h1', null, 'Welcome to class')`. You will not write that yourself, but it helps to know JSX is just JavaScript in disguise.

### 3.2 Rules of JSX

- A component must return a single parent element. If you have multiple elements side by side, wrap them in one parent, or in a **Fragment**.
- JSX attributes are written in camelCase: `className`, `onClick`, `tabIndex`, not `class`, `onclick`, `tabindex`.
- Any JavaScript expression can be placed inside curly braces `{ }`.
- Every tag must be closed, including self-closing tags like `<img />` and `<br />`.

**Keyword: Fragment** - an invisible wrapper, written as `<></>` or `<React.Fragment></React.Fragment>`, used to group elements without adding an extra HTML element to the page.
```jsx
function Profile() {
  return (
    <>
      <h2>Daniel</h2>
      <p>Instructor</p>
    </>
  )
}
```

### 3.3 JSX vs HTML

| Feature | HTML | JSX |
|---|---|---|
| Class attribute | `class="box"` | `className="box"` |
| Label target | `for="email"` | `htmlFor="email"` |
| Inline style | `style="color:red"` (string) | `style={{ color: 'red' }}` (object) |
| Comments | `<!-- comment -->` | `{/* comment */}` |
| Closing tags | Some tags can be left open, e.g. `<img>` | Every tag must close, e.g. `<img />` |
| Embedding JS | Not possible directly | `{ jsExpression }` |

### 3.4 Embedding JavaScript expressions

```jsx
function Greeting() {
  const studentName = "Ada"
  const currentHour = 14

  return (
    <div>
      <h2>Hello, {studentName}</h2>
      <p>{currentHour < 12 ? "Good morning" : "Good afternoon"}</p>
    </div>
  )
}
```

Anything that is a valid JavaScript expression can go inside `{ }`: variables, function calls, math, ternary operators. Statements like `if` or `for` cannot go directly inside `{ }`, because they are not expressions.

### Practice Exercise

Create a component called `StudentCard` that displays a student's name, age, and class, using at least one JavaScript expression inside curly braces (for example, calculating age in months).


### Definitions you should know

1. Your root folder is your app name
2. Node Modules - This folder stores all third-party packages(Also know as Dependencies) that your project needs to function or run. We do this by running npm install in terminal
3. public folder - This folder stores files that should be served exactly as they are, without react or vite processing or adjusting them. e.g favicon.ico, pdfs, .txt, downloadable files, logo
4. src folder - This folder is also known as source folder. It contains all source code that you write. Nearly all your development happens here.
## src possible contents
a. components folder
b. pages
c. hooks
d. css
e. images
f. context
g. utilities

5. assets folder - stores project assets that will be imported into your app or project e.g images, video, fonts, icons, sounds etc.

6. App.jsx -This is called the ROOT COMPONENT. It is the first React component displayed after the app starts. 

7. Main.jsx - This is called the ENTRY POINT of the React application. An Entry Point is the very first file a program executes. 

8. index.css - This contains all global styling except inline styles.

9. App.css - This contains styles specific to the App component.

10. .gitignore - This file tells Git which files or folders to ignore or not be tracked. 

11. eslint.config.js - This file configures ESLINT. This ESLINT is a tool that checks your JS and React code for problems.

12. index.html - This is the only HTML page in most React applications. React loads this html file and updates it dynamically.

13. package.json - This is a manifest of your project. It contains metadata and configuration for your application. 

14. package-lock.json - This file records the exact versions of every installed dependency and sub-dependency. It ensures everone working on the project installs same versions.

15. README.md - A markdown doc that describes the project. Whatever imformation the developer wants to share is mostly found here.

16. vite.config.js - This file configures Vite. Vite is the build tool used by the developer. 





## Module 4: Components and Props

### 4.1 What is a component?

A component is a JavaScript function that returns JSX. Component names always start with a capital letter, so React can tell them apart from regular HTML tags.

```jsx
function WelcomeMessage() {
  return <h2>Welcome to Digital Fortress Institute</h2>
}
```
<div>Moses</div>



### 4.2 Composing components

Components can be placed inside other components. This is called **composition**, and it is how real React applications are built: small components combine into bigger ones.

```jsx
function Header() {
  return <h1>My School Portal</h1>
}

function Footer() {
  return <p>All rights reserved</p>
}

function App() {
  return (
    <div>
      <Header />
      <p>Main page content goes here</p>
      <Footer />
    </div>
  )
}
```

**Keyword: Composition** - building complex UI by combining smaller, simpler components.

### 4.3 Props

Props (short for properties) are how a parent component sends data to a child component. Props flow in one direction only: from parent to child. A component cannot change its own props.

```jsx
function Student(props) {
  return <p>{props.name} is in {props.className}</p>
}

function App() {
  return <Student name="Tunde" className="JS101" />
}
```

**Keyword: Props** - read-only data passed from a parent component to a child component.
**Keyword: Read-only** - cannot be changed by the component receiving it.

### 4.4 Destructuring props

Most React code destructures props directly in the function parameters, instead of writing `props.name` everywhere.

```jsx
function Student({ name, className }) {
  return <p>{name} is in {className}</p>
}
```

### 4.5 The children prop

`children` is a special prop that holds whatever is placed between a component's opening and closing tags.

```jsx
function Card({ children }) {
  return <div className="card">{children}</div>
}

function App() {
  return (
    <Card>
      <h3>Result</h3>
      <p>You scored 85%</p>
    </Card>
  )
}
```

### 4.6 Default values for props

In React 19, function components use normal JavaScript default parameter values instead of the older `defaultProps` pattern, which is no longer recommended for function components.

```jsx
function Button({ label = "Submit", color = "blue" }) {
  return <button style={{ backgroundColor: color }}>{label}</button>
}
```

### 4.7 Props vs State (preview)

State is covered fully in Module 5, but it helps to see this comparison early.

| Aspect | Props | State |
|---|---|---|
| Who controls it | Parent component | The component itself |
| Can it change? | No, read-only inside the receiving component | Yes, using a setter function |
| Where it's set | When the component is used, e.g. `<Student name="Ada" />` | Inside the component, with `useState` |
| Purpose | Passing data down | Tracking data that changes over time |

### Practice Exercise

Build a `ProductCard` component that receives `name`, `price`, and `inStock` as props, and renders them inside a `Card` component using the `children` prop.

## Module 5: State and the useState Hook

### 5.1 What is state?

State is data that a component keeps track of and that can change while the app is running, such as a counter, a typed input, or whether a menu is open. When state changes, React automatically re-renders the component to reflect the new value.

**Keyword: Hook** - a special function (always starting with `use`) that lets a function component use React features like state or lifecycle behavior.
**Keyword: Re-render** - React running the component function again to update what is shown on screen.

### 5.2 Using useState

```jsx
import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Add</button>
    </div>
  )
}
```

`useState(0)` returns an array with two items: the current value (`count`) and a function to update it (`setCount`). The number `0` passed into `useState` is the initial value.

### 5.3 Rules of hooks

- Only call hooks at the top level of a component, never inside loops, conditions, or nested functions
- Only call hooks from React function components, or from custom hooks

These rules exist because React tracks hooks by the order they are called in, and breaking that order causes bugs that are hard to find.

### 5.4 State updates and re-renders

Calling the setter function (like `setCount`) tells React: "this value changed, please re-render." Directly changing a variable, like `count = count + 1`, does not trigger a re-render and should never be used for state.

```jsx
function NameForm() {
  const [name, setName] = useState("")

  return (
    <div>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
      />
      <p>Hello, {name || "stranger"}</p>
    </div>
  )
}
```

### 5.5 Multiple state variables

A component can have as many `useState` calls as it needs.

```jsx
function SignupForm() {
  const [email, setEmail] = useState("")
  const [agreed, setAgreed] = useState(false)

  return (
    <div>
      <input value={email} onChange={(e) => setEmail(e.target.value)} />
      <label>
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
        />
        I agree to the terms
      </label>
    </div>
  )
}
```

### Practice Exercise

Build a `LikeButton` component with a heart icon (or the text "Like") that toggles between "Liked" and "Like" each time it is clicked, using a boolean piece of state.

## Module 6: Handling Events

### 6.1 Writing event handlers

React events are named in camelCase, and you pass a function reference rather than calling the function directly.

```jsx
function AlertButton() {
  function handleClick() {
    alert("Button was clicked")
  }

  return <button onClick={handleClick}>Click me</button>
}
```

A common mistake is writing `onClick={handleClick()}`, which calls the function immediately during render instead of waiting for the click.

### 6.2 HTML events vs React events

| Action | HTML attribute | React prop |
|---|---|---|
| Click | `onclick="..."` | `onClick={...}` |
| Input change | `onchange="..."` | `onChange={...}` |
| Form submit | `onsubmit="..."` | `onSubmit={...}` |
| Mouse over | `onmouseover="..."` | `onMouseOver={...}` |

**Keyword: Synthetic Event** - React wraps the browser's native event in its own event object, called a synthetic event, so that events behave consistently across different browsers.

### 6.3 Passing arguments to event handlers

```jsx
function StudentList() {
  const students = ["Ada", "Tunde", "Bola"]

  function handleSelect(name) {
    console.log(`${name} was selected`)
  }

  return (
    <ul>
      {students.map((student) => (
        <li key={student} onClick={() => handleSelect(student)}>
          {student}
        </li>
      ))}
    </ul>
  )
}
```

Wrapping the call in an arrow function, `() => handleSelect(student)`, delays the call until the click actually happens.

### 6.4 The event object

```jsx
function SearchBox() {
  function handleChange(event) {
    console.log("You typed:", event.target.value)
  }

  return <input onChange={handleChange} placeholder="Search" />
}
```

### Practice Exercise

Build a `ColorPicker` component with three buttons (Red, Green, Blue) that, when clicked, changes the background color of a box on the page.

## Module 7: Conditional Rendering

### 7.1 Why conditional rendering matters

Often a part of the UI should only appear under certain conditions, such as showing an error message, a loading spinner, or a "logged in" greeting.

### 7.2 Techniques

**if / else before the return statement**

```jsx
function StatusMessage({ isOnline }) {
  if (isOnline) {
    return <p>Student is online</p>
  }
  return <p>Student is offline</p>
}
```

**Ternary operator inside JSX**

```jsx
function StatusMessage({ isOnline }) {
  return <p>{isOnline ? "Online" : "Offline"}</p>
}
```

**Logical AND (&&) for show or hide**

```jsx
function Notification({ hasNewMessage }) {
  return (
    <div>
      <h3>Inbox</h3>
      {hasNewMessage && <p>You have a new message</p>}
    </div>
  )
}
```

### 7.3 Choosing the right technique

| Technique | Best used when | Example use case |
|---|---|---|
| `if / else` | The whole component returns something different | Showing a full loading screen vs the main page |
| Ternary `? :` | Choosing between two small pieces of JSX | Online/Offline label |
| `&&` | Showing something or nothing at all | A badge that only shows sometimes |
| `switch` | Many possible cases (3 or more) | Showing different messages per status code |

A caution about `&&`: if the left side is `0`, React will render the number `0` instead of nothing. It is safer to compare explicitly, like `count > 0 && <p>...</p>`.

### Practice Exercise

Build a `LoginStatus` component that receives `isLoggedIn` as a prop. When true, show "Welcome back" and a Logout button. When false, show a Login button only.

## Module 8: Rendering Lists and Keys

### 8.1 Rendering arrays with map

React does not have a built-in loop tag, so JavaScript's `map()` is used to turn an array of data into an array of JSX elements.

```jsx
function ProductList() {
  const products = [
    { id: 1, name: "Notebook", price: 1500 },
    { id: 2, name: "Pen", price: 300 },
    { id: 3, name: "Backpack", price: 12000 }
  ]

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} - ₦{product.price}
        </li>
      ))}
    </ul>
  )
}
```

### 8.2 Why keys matter

**Keyword: Key** - a special prop, unique among siblings, that helps React identify which items changed, were added, or were removed in a list, so it can update the page efficiently instead of re-rendering the entire list.

Without keys, or with poorly chosen keys, React can mix up items when the list changes, which may cause wrong data to show in the wrong row, or broken input focus.

### 8.3 Choosing good keys

| Key choice | Good or bad | Reason |
|---|---|---|
| A database `id` field | Good | Stable and unique for each item |
| `Math.random()` | Bad | Generates a new key every render, defeats the purpose |
| Array index (`index`) | Acceptable only if the list never reorders or changes | Index shifts when items are added/removed, causing bugs |
| Item name (if guaranteed unique) | Good, if truly unique | Works as a stable identifier |

```jsx
// avoid this when the list can change order
{products.map((product, index) => (
  <li key={index}>{product.name}</li>
))}

// prefer this
{products.map((product) => (
  <li key={product.id}>{product.name}</li>
))}
```

### Practice Exercise

Using the `products` array style shown above, build a `ShoppingList` component that renders each product's name and price, and shows the total price of all products underneath the list.

## Module 9: Forms and Controlled Inputs

### 9.1 Controlled components

A controlled component is a form element (like `<input>`, `<textarea>`, or `<select>`) whose value is fully managed by React state. The input displays whatever is in state, and every keystroke updates that state through `onChange`.

```jsx
function ContactForm() {
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")

  function handleSubmit(e) {
    e.preventDefault()
    console.log({ fullName, email })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder="Full name"
      />
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <button type="submit">Send</button>
    </form>
  )
}
```

`e.preventDefault()` stops the browser's default behavior of reloading the page on form submit, which is necessary in a single page application.

### 9.2 Uncontrolled inputs (brief)

An uncontrolled input manages its own value in the DOM, and React only reads it when needed, usually through a ref (covered in Module 11).

```jsx
function UncontrolledInput() {
  const inputRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()
    console.log(inputRef.current.value)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input ref={inputRef} defaultValue="" />
      <button type="submit">Submit</button>
    </form>
  )
}
```

### 9.3 Controlled vs Uncontrolled

| Aspect | Controlled | Uncontrolled |
|---|---|---|
| Value lives in | React state | The DOM itself |
| Access value | Directly from state | Through a ref, when needed |
| Validate as user types | Easy | Harder, needs extra event handling |
| Common use | Most forms in modern React apps | Simple forms, file inputs, third-party widgets |

### Practice Exercise

Build a `SignupForm` with controlled inputs for username and password, and a Submit button that is disabled (using the `disabled` attribute) until both fields are non-empty.

## Module 10: The useEffect Hook

### 10.1 What are side effects?

**Keyword: Side effect** - any work a component does that reaches outside of just calculating what to render, such as fetching data from a server, setting a timer, subscribing to an event, or manually changing the document title.

`useEffect` lets you run this kind of code after the component renders.

```jsx
import { useEffect, useState } from 'react'

function Clock() {
  const [time, setTime] = useState(new Date())

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(new Date())
    }, 1000)

    // cleanup: runs when the component unmounts, or before the effect runs again
    return () => clearInterval(timerId)
  }, [])

  return <p>{time.toLocaleTimeString()}</p>
}
```

### 10.2 The dependency array

The second argument to `useEffect` is an array that tells React when to re-run the effect.

| Dependency array | When the effect runs |
|---|---|
| Not provided at all | After every single render |
| `[]` (empty array) | Only once, right after the first render |
| `[value]` | After the first render, and again whenever `value` changes |

```jsx
function UserProfile({ userId }) {
  const [user, setUser] = useState(null)

  useEffect(() => {
    fetch(`https://api.example.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
  }, [userId])

  if (!user) return <p>Loading...</p>
  return <p>{user.name}</p>
}
```

This effect re-runs whenever `userId` changes, fetching fresh data for the new user.

### 10.3 The cleanup function

If an effect sets up something ongoing (a timer, an event listener, a subscription), it should return a cleanup function that undoes it, to avoid memory leaks or duplicate behavior.

```jsx
useEffect(() => {
  function handleResize() {
    console.log(window.innerWidth)
  }

  window.addEventListener('resize', handleResize)

  return () => window.removeEventListener('resize', handleResize)
}, [])
```

### Practice Exercise

Build a `WindowWidth` component that displays the current browser window width, updating live as the window is resized, and properly cleaning up the event listener.

## Module 11: useRef and useContext

### 11.1 useRef

`useRef` creates a value that persists across renders without causing a re-render when it changes. It is commonly used to reference a DOM element directly.

```jsx
import { useRef } from 'react'

function FocusInput() {
  const inputRef = useRef(null)

  function handleFocus() {
    inputRef.current.focus()
  }

  return (
    <div>
      <input ref={inputRef} placeholder="Click the button to focus me" />
      <button onClick={handleFocus}>Focus input</button>
    </div>
  )
}
```

### 11.2 useState vs useRef

| Aspect | useState | useRef |
|---|---|---|
| Causes re-render on change | Yes | No |
| Typical use | Data shown on screen | DOM access, storing a value that doesn't affect what's rendered |
| Access value | Directly, e.g. `count` | Through `.current`, e.g. `inputRef.current` |

### 11.3 useContext

Passing the same prop through many layers of components is called **prop drilling**, and it gets messy fast. Context solves this by letting any component deep in the tree read a value directly, without it being passed down manually through every level.

**Keyword: Prop drilling** - passing data through several layers of components that don't need the data themselves, just to reach a component that does.

```jsx
import { createContext, useContext, useState } from 'react'

const ThemeContext = createContext('light')

function App() {
  const [theme, setTheme] = useState('dark')

  return (
    <ThemeContext.Provider value={theme}>
      <Toolbar />
    </ThemeContext.Provider>
  )
}

function Toolbar() {
  // Toolbar doesn't need theme itself, but Button does
  return <Button />
}

function Button() {
  const theme = useContext(ThemeContext)
  return <button className={theme}>I am styled by {theme} theme</button>
}
```

### Practice Exercise

Create a `LanguageContext` that stores a language code ("en" or "fr"), and a `Greeting` component nested two levels deep that reads the language from context and displays "Hello" or "Bonjour" accordingly.

## Module 12: Performance Basics

This module gives a light introduction. Deep performance tuning is beyond what is expected at this level, but students should recognize these tools and know roughly why they exist.

### 12.1 The problem they solve

By default, when a component re-renders, everything inside it runs again, including expensive calculations and functions being recreated. Most of the time this is harmless and fast, but in larger apps it can sometimes cause unnecessary slow-downs.

### 12.2 useMemo and useCallback

```jsx
import { useMemo, useCallback, useState } from 'react'

function PriceList({ items }) {
  const [filter, setFilter] = useState("")

  // recalculates only when items or filter change
  const filteredItems = useMemo(() => {
    return items.filter((item) => item.name.includes(filter))
  }, [items, filter])

  // keeps the same function reference between renders
  const handleSelect = useCallback((item) => {
    console.log("Selected:", item.name)
  }, [])

  return (
    <ul>
      {filteredItems.map((item) => (
        <li key={item.id} onClick={() => handleSelect(item)}>
          {item.name}
        </li>
      ))}
    </ul>
  )
}
```

### 12.3 useMemo vs useCallback

| Aspect | useMemo | useCallback |
|---|---|---|
| Returns | A calculated value | A function |
| Use case | Avoiding repeating an expensive calculation | Avoiding recreating a function on every render |
| Example | Filtering or sorting a large list | A click handler passed to a memoized child component |

### 12.4 A note on React.memo

`React.memo` wraps a component so it skips re-rendering if its props haven't changed. It is mentioned here for awareness; students do not need to master it at this stage.

### Practice Exercise

No coding exercise for this module. Instead, write one or two sentences explaining, in your own words, why recalculating something on every render could be wasteful, using your own example (not from this material).

## Module 13: What's New in React 19

React 19 introduced changes that make forms and refs simpler to work with. This module covers the additions students are likely to meet in real projects and tutorials.

### 13.1 ref as a regular prop

In earlier versions of React, a function component could not directly receive a `ref` prop. To let a parent reach into a child's DOM node, you had to wrap the component in `forwardRef`. In React 19, function components can accept `ref` directly as a prop, like any other prop.

```jsx
// React 19: no forwardRef needed for this common case
function TextInput({ placeholder, ref }) {
  return <input ref={ref} placeholder={placeholder} />
}

function Form() {
  const inputRef = useRef(null)

  return (
    <div>
      <TextInput ref={inputRef} placeholder="Type here" />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  )
}
```

### 13.2 Actions

An Action is an async function that can be passed directly to a `<form>`'s `action` prop, or a `<button>`'s `formAction` prop. React automatically tracks the pending state, handles the result, and can show errors, without you wiring up `onSubmit`, `preventDefault`, and loading state by hand.

```jsx
function FeedbackForm() {
  async function submitFeedback(previousState, formData) {
    const message = formData.get("message")

    if (!message) {
      return "Message cannot be empty"
    }

    await new Promise((resolve) => setTimeout(resolve, 1000)) // simulate saving
    return "Thank you for your feedback"
  }

  const [result, formAction, isPending] = useActionState(submitFeedback, null)

  return (
    <form action={formAction}>
      <textarea name="message" placeholder="Your feedback" />
      <button type="submit" disabled={isPending}>
        {isPending ? "Sending..." : "Send"}
      </button>
      {result && <p>{result}</p>}
    </form>
  )
}
```

### 13.3 New hooks introduced for Actions

**useActionState** - tracks the state returned from a form Action, along with a pending flag, without you needing separate `useState` calls for the result and the loading status.

**useFormStatus** - lets a component nested inside a `<form>` (such as a submit button in its own file) read whether that form is currently submitting, without the status being passed down as a prop.

```jsx
import { useFormStatus } from 'react-dom'

function SubmitButton() {
  const { pending } = useFormStatus()
  return <button disabled={pending}>{pending ? "Saving..." : "Save"}</button>
}
```

**useOptimistic** - lets the UI show an expected ("optimistic") result immediately, before the server confirms it, then corrects itself if needed. This is mentioned for awareness; it is more advanced and not required for basic projects at this level.

### 13.4 Document metadata in components

Previously, changing the page `<title>` or `<meta>` tags required a separate library or direct DOM manipulation. In React 19, you can render these tags inside any component, and React moves them into the document `<head>` automatically.

```jsx
function BlogPost({ title, summary }) {
  return (
    <article>
      <title>{title} - School Blog</title>
      <meta name="description" content={summary} />
      <h1>{title}</h1>
      <p>{summary}</p>
    </article>
  )
}
```

### 13.5 React 18 vs React 19

| Feature | React 18 | React 19 |
|---|---|---|
| `ref` on a function component | Requires wrapping with `forwardRef` | Can be received as a normal prop |
| Handling form submission | Manual `onSubmit`, manual loading state | Actions handle submission and pending state automatically |
| Hooks for forms | None built in | `useActionState`, `useFormStatus`, `useOptimistic` |
| Page title / meta tags | Needs a library (like react-helmet) or manual DOM changes | Can be rendered directly as JSX inside components |
| `defaultProps` on function components | Deprecated, still worked with a warning | No longer supported; use default parameter values instead |

### Practice Exercise

Rebuild the `ContactForm` from Module 9 so it uses an Action and `useActionState` instead of manual `onSubmit`, and show a success message after "submitting."

## Module 14: Basic Routing with React Router

### 14.1 Why routing is needed

A React app is usually a single HTML page, but users still expect to navigate between pages like Home, About, and Contact, each with its own URL. React Router makes this possible without a full page reload.

**Keyword: Route** - a mapping between a URL path and the component that should be displayed for that path.

### 14.2 Installing React Router

```bash
npm install react-router-dom
```

### 14.3 Basic setup

```jsx
// main.jsx
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
)
```

```jsx
// App.jsx
import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'

function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  )
}

export default App
```

### 14.4 <a> vs <Link>

| Aspect | `<a href="...">` | `<Link to="...">` |
|---|---|---|
| Page behavior | Full page reload | No reload, instant switch |
| Speed | Slower, re-downloads everything | Faster, only swaps the needed component |
| App state | Lost on navigation | Preserved (e.g. data already loaded stays) |
| Used for | Linking to outside websites | Linking between pages inside the same React app |

### 14.5 Navigating with code

Sometimes navigation should happen after an action, like after a successful form submission, rather than from a click on a link.

```jsx
import { useNavigate } from 'react-router-dom'

function LoginForm() {
  const navigate = useNavigate()

  function handleSubmit(e) {
    e.preventDefault()
    // after a successful login
    navigate('/dashboard')
  }

  return (
    <form onSubmit={handleSubmit}>
      <button type="submit">Login</button>
    </form>
  )
}
```

### Practice Exercise

Build a three-page app (Home, Courses, Contact) using React Router, with a navigation bar visible on every page using `<Link>`.

## Module 15: Project Structure and Best Practices

### 15.1 A typical folder structure

```
src/
  components/
    Button.jsx
    Card.jsx
    Navbar.jsx
  pages/
    Home.jsx
    About.jsx
    Contact.jsx
  hooks/
    useWindowWidth.js
  App.jsx
  main.jsx
```

**components/** holds small, reusable pieces (buttons, cards, inputs). **pages/** holds full page-level components, usually tied to a route. **hooks/** holds custom hooks, which are reusable pieces of stateful logic (briefly mentioned here, not required at this stage, but useful to know they exist).

### 15.2 Naming conventions

| Item | Convention | Example |
|---|---|---|
| Component name | PascalCase | `StudentCard`, `Navbar` |
| Component file name | PascalCase, matches the component | `StudentCard.jsx` |
| Variables and functions | camelCase | `studentName`, `handleClick` |
| CSS class names | kebab-case (lowercase with dashes) | `student-card`, `nav-bar` |

### 15.3 Good practice vs practice to avoid

| Situation | Good practice | Practice to avoid |
|---|---|---|
| Component size | Small, focused components that do one thing | One giant component handling the entire page |
| Props | Destructure props in the function signature | Repeating `props.x` everywhere |
| State updates | Use the setter function from `useState` | Mutating state directly, e.g. `array.push(...)` |
| List rendering | Use a stable, unique `key` | Using `Math.random()` or array index for changing lists |
| File organization | One main component per file | Multiple unrelated components crammed in one file |
| Styling | Keep styles organized in CSS files or CSS modules | Long inline style objects repeated everywhere |

### 15.4 A note on comments

Comments should explain *why* something is done, not restate what the code already says clearly. A short, natural comment like `// skip empty entries` is more useful than no comment at all, or an overly long comment that repeats the code line by line.

## Module 16: Glossary of Key Terms

**Action** - in React 19, an async function passed to a form or button that React uses to handle submission, pending state, and results automatically.

**Bundler** - a tool that combines a project's files into optimized files the browser can load.

**Children** - a special prop holding whatever JSX is placed between a component's opening and closing tags.

**Cleanup function** - the function returned from a `useEffect` callback, used to undo side effects like timers or event listeners.

**Component** - a reusable, self-contained piece of UI written as a function that returns JSX.

**Composition** - building complex UI by combining smaller components together.

**Context** - a way to share a value with any component in the tree without passing it manually through every level of props.

**Controlled component** - a form element whose value is fully managed by React state.

**Declarative** - describing the result you want, and letting the tool figure out how to achieve it.

**Dependency array** - the array passed as the second argument to `useEffect`, controlling when the effect re-runs.

**Entry point** - the first file that runs and starts the application.

**Fragment** - an invisible wrapper (`<></>`) used to group elements without adding an extra DOM node.

**Framework** - a tool that provides built-in structure and calls your code, as opposed to a library that your code calls.

**Hook** - a special function, starting with `use`, that lets a function component use React features like state or side effects.

**Imperative** - giving step-by-step instructions to reach a result, instead of describing the result directly.

**JSX** - a syntax extension that allows writing HTML-like code inside JavaScript files.

**Key** - a unique identifier prop given to each item in a rendered list, helping React track changes efficiently.

**Library** - a tool that your code calls when needed, giving you more control over the overall structure of your app.

**Package** - reusable code, written by someone else, that can be installed and used in a project.

**Props** - read-only data passed from a parent component to a child component.

**Prop drilling** - passing data through several layers of components that don't need it themselves, just to reach one that does.

**Read-only** - data that cannot be changed by the component receiving it.

**Re-render** - React running a component's function again to reflect updated state or props.

**Render** - the process of turning a component into the actual content shown on screen.

**Route** - a mapping between a URL path and the component shown for that path.

**Side effect** - work a component does outside of calculating what to render, such as fetching data or setting timers.

**SPA (Single Page Application)** - a web app that loads one HTML page and updates content dynamically without full page reloads.

**State** - data a component tracks that can change while the app is running, triggering a re-render when updated.

**Synthetic event** - React's own wrapper around a browser's native event object, behaving consistently across browsers.

**Uncontrolled component** - a form element that manages its own value in the DOM, read by React only when needed (often via a ref).

**Virtual DOM** - a lightweight in-memory copy of the real DOM that React uses to calculate the smallest necessary update to the page.
