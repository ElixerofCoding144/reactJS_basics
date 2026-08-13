## What is CDN?

    - A Content Delivery Network is a globally distributed set of servers that serve static files like JavaScript from a location close to the user.
    - The benefit is faster loads and less load on your own server.
    - The CDN provides two builds: React, the core library, and ReactDOM, the package that connects React to the DOM.
    - Both are needed to render anything in the browser.

## How to inject React into the project?

    - For learning and in tutorials, a CDN is the fastest way to get React running.
    - You add a script tag and React is available immediately, with no installation, no bundler, and no build step.
    - It keeps the focus on React concepts.
    - Link: https://legacy.reactjs.org/docs/cdn-links.html
    - The CDN is a learning tool, not a project setup.

## What is cross origin?

## Difference between "react.development.js" and "react-dom.development.js".

    - `react.development.js` and `react-dom.development.js` serve different purposes in a React application.

    - `react.development.js`**
        - Contains the **core React library**.
        - It provides APIs like `React.createElement`, hooks (`useState`, `useEffect`), components, and React's internal logic.
        - This file includes:
            * JSX element creation (`React.createElement`)
            * Hooks (`useState`, `useEffect`, etc.)
            * Component logic
            * Context API
            * React internals (Virtual DOM reconciliation)
            * Example:

                ```javascript
                function App() {
                const [count, setCount] = React.useState(0);

                return <h1>{count}</h1>;
                }
                ```
        - Everything above comes from **React**.

        ---

    ### `react-dom.development.js` (DOM Renderer)
        - Contains the **React DOM renderer**.
        - It knows how to take React components and render/update them in the browser's DOM.                                    |
        - This file is responsible for:
            * Rendering React components into the browser
            * Updating the DOM efficiently
            * Event handling
            * Hydration (for server-rendered apps)
            * Example (React 18):

                ```javascript
                const root = ReactDOM.createRoot(document.getElementById("root"));
                root.render(<App />);
            ```
        - Without `react-dom`, React has no way to display your components in a web page.

        ---

    ### Why are they separate?
        - React is designed to work with different platforms.
        - The **React core** is platform-independent, while different renderers target different environments:
            * **React DOM** → Browsers
            * **React Native** → Mobile apps (Android/iOS)
            * **React Three Fiber** → 3D scenes with Three.js
            * **Ink** → Terminal applications
        - This separation lets React reuse the same component and state logic across platforms.

        ---

    ### Why the `.development.js` suffix?
        - The **development** versions include:
            * Helpful warning messages
            * Error checking
            * Extra debugging information
        - They are larger and slower than production builds.
        - For production, use:
            * `react.production.min.js`
            * `react-dom.production.min.js`
        - These are minified and optimized for performance.

        ---

    ### Analogy
        Think of building a house:
            * **React (`react.development.js`)** = the **architect** who designs the house and decides what it should look like.
            * **ReactDOM (`react-dom.development.js`)** = the **construction crew** that actually builds the house on the land (the browser's DOM).
        The architect creates the blueprint, but the construction crew turns it into a real building.
        ### Summary
            * **`react.development.js`** → Core React library (components, hooks, JSX processing, state management).
            * **`react-dom.development.js`** → Browser-specific renderer that mounts and updates React components in the DOM.
            * Both are needed for React applications running in the browser.

## Should we use CDN for React?

    - The typical progression is:
        - Use a CDN initially when you're learning React fundamentals or testing small examples in a single HTML file. This lets you start without installing any tools.
        - Stop using the CDN when you begin building a proper application. At that point, switch to a modern development setup or a bundler like Parcel, Vite, or Create React App. and install React through npm/yarn.

    - The reasons for switching include:
        - You can organize your code into multiple files and components.
        - You can use ES modules (import/export) naturally.
        - You get a faster development experience with features like hot reloading.
        - Your app is optimized for production (bundling, tree shaking, minification, etc.).

    - A simple rule of thumb:
        ✅ CDN: Practice, tutorials, prototypes, and small demos.
        ✅ npm + Vite (or another modern tool): Any project you're planning to maintain, deploy, or scale.

## Order of the files mentioned in index.html matters.


