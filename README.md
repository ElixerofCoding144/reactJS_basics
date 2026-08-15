# ReactJS Basics

A structured collection of React.js fundamentals, examples, and notes built while learning React from the ground up.

The repository follows a progressive approach — starting with plain HTML and JavaScript DOM manipulation, moving into React fundamentals, JSX, components, and modern React project tooling.

The goal is to understand not just **how to write React**, but also **what React is doing behind the scenes**.

---

## 📚 Topics Covered

The repository currently covers:

* HTML and JavaScript DOM fundamentals
* Creating elements using JavaScript
* Adding React to a project using CDN
* `React.createElement()`
* `ReactDOM.createRoot()`
* Rendering React elements
* Nested React elements
* React element trees
* Multiple children and React keys
* Separating React code into JavaScript files
* npm and `package.json`
* Dependencies and devDependencies
* `package-lock.json`
* Parcel bundler
* Development and production builds
* ES Modules
* Importing React and ReactDOM using npm
* JSX
* JSX vs `React.createElement()`
* JSX attributes
* JavaScript expressions inside JSX
* Functional Components
* Component Composition
* Nested Components

The repository also contains detailed notes covering React fundamentals, project tooling, JSX, components, and common interview concepts.

---

## 🗂️ Repository Structure

```text
reactJS_basics/
│
├── 01.zero-basics⭐/
│   ├── indexUsingHTML.html
│   ├── indexUsingJS.html
│   └── injectingReactIntoProject.html
│
├── 02.react-basics⭐/
│   ├── 02-1.react-extracted-to-app-js/
│   └── 02-2.nested-structure/
│
├── 03.production-ready-code/
│   ├── App.js
│   ├── index.css
│   ├── index.html
│   ├── package.json
│   └── package-lock.json
│
├── 04.components-props-state/
│   ├── 04-1.createElement-to-jsx/
│   └── 04-2.component/
│
├── notes/
│   ├── 01.Inception.md
│   ├── 02.Ignition.md
│   └── 03.Laying the foundation.md
│
└── README.md
```

---

## 🧭 Learning Flow

### 01. Zero Basics

The first section starts without React.

It demonstrates three different approaches to creating the same UI:

```text
HTML
  ↓
JavaScript DOM Manipulation
  ↓
React
```

This helps establish why libraries such as React are useful before introducing React-specific abstractions.

Topics include:

* Writing elements directly in HTML
* `document.createElement()`
* `getElementById()`
* `appendChild()`
* Adding React through CDN
* Creating elements with `React.createElement()`
* Rendering with ReactDOM

---

### 02. React Basics

This section introduces React's element-based approach in more detail.

The React code is first separated from the HTML file into `App.js`, followed by examples of increasingly complex element structures.

Topics include:

* React Elements
* Props passed to `React.createElement()`
* Children
* Nested React Elements
* Creating React Element Trees
* Rendering multiple children
* React's `key` concept

Example structure:

```text
parent
├── child1
│   ├── h1
│   └── h2
│
└── child2
    ├── h1
    └── h2
```

This section helps build an understanding of how React represents a UI as a tree of elements.

---

### 03. Production-Ready Setup

The earlier examples use React through CDN scripts.

This section transitions the project toward the way modern React applications are normally developed.

```text
React CDN
    ↓
npm
    ↓
React Packages
    ↓
ES Modules
    ↓
Parcel
```

Topics include:

* Initializing an npm project
* `package.json`
* `package-lock.json`
* Dependencies
* Dev Dependencies
* Installing React through npm
* Installing ReactDOM through npm
* Parcel Bundler
* ES Module imports
* Development builds
* Production builds
* Module-based JavaScript

---

### 04. JSX and Components

This section moves from manually creating React Elements to writing React using JSX.

Instead of:

```javascript
const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello React"
);
```

JSX allows the same UI to be written more naturally:

```jsx
const heading = (
  <h1 id="heading">
    Hello React
  </h1>
);
```

The section then introduces Functional Components.

```jsx
const Title = () => {
  return <h1>ReactJS</h1>;
};
```

Components can also be composed together:

```jsx
const Heading = () => {
  return (
    <div>
      <Title />
      <h2>Learning React Fundamentals</h2>
    </div>
  );
};
```

Topics include:

* JSX
* JSX syntax
* JSX attributes
* `className`
* JavaScript expressions inside JSX
* Functional Components
* Arrow Function Components
* Component Composition
* Nested Components

---

## 📝 Notes

The [`notes`](https://github.com/ElixerofCoding144/reactJS_basics/tree/main/notes) directory contains detailed explanations and interview-oriented notes alongside the code examples.

### 01. Inception

Covers foundational concepts such as:

* React and ReactDOM
* CDN
* Cross-Origin Resource Sharing
* Development vs production React builds
* React Element creation
* JSX transformation
* npm vs CDN
* Script loading

### 02. Ignition

Focuses on the tooling used around modern React development:

* npm
* `package.json`
* `package-lock.json`
* Dependencies
* Dev Dependencies
* Semantic versioning
* Bundlers
* Parcel
* Browser compatibility
* `node_modules`
* npm vs npx
* Development and production builds

### 03. Laying the Foundation

Covers concepts involved in writing modern React applications:

* `React.createElement()`
* React Elements
* DOM Elements vs React Elements
* JSX
* Babel
* JavaScript inside JSX
* JSX attributes
* Functional Components
* Component Composition
* ES Modules

---

## ⚙️ Running the npm-based Examples

Make sure [Node.js](https://nodejs.org/) is installed.

Navigate to a folder containing a `package.json` file:

```bash
cd 03.production-ready-code
```

Install the dependencies:

```bash
npm install
```

Start the development server using the script configured in `package.json`.

For example:

```bash
npm start
```

The exact commands may vary as the repository evolves, so refer to the scripts inside the corresponding `package.json`.

---

## 🛠️ Technologies Used

* HTML5
* CSS3
* JavaScript
* React.js
* ReactDOM
* JSX
* Node.js
* npm
* Parcel

---

## 🎯 Purpose of This Repository

This repository is primarily intended for:

* Building a strong foundation in React
* Understanding React concepts instead of only memorizing syntax
* Practicing concepts through small examples
* Maintaining structured React learning notes
* Revising React fundamentals
* Preparing for React and frontend interviews

Each directory represents a learning checkpoint, making it possible to see how the application structure evolves as new React concepts are introduced.

---

## 🚧 Work in Progress

This repository is actively being expanded as more React concepts are learned and practiced.

Upcoming topics may include:

* Props
* Event Handling
* State
* `useState`
* Conditional Rendering
* Lists and Keys
* Forms
* `useEffect`
* API Calls
* React Router
* Custom Hooks
* Context API
* Performance Optimization

---

## 🤝 Contributions

This repository is primarily maintained as a personal React learning resource.

Suggestions, improvements, and corrections are welcome through issues or pull requests.

---

## ⭐ Support

If you find these examples or notes useful while learning React, consider giving the repository a star.

Happy Learning! 🚀
