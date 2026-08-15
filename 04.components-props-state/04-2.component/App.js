import React from "react";
import { createRoot } from "react-dom/client";

/**
 * Different ways to write functional component
 * - Shorthand syntax without curly braces and return: 
 *   const heading1 = () => <h1>This is a functional component in React!</h1>;
 *   const heading2 = () => (
 *      <h1 className="heading">This is a functional component in React!</h1>
 *  );
 */  

const Title = () => (
  <h1 className="title" tabIndex={5}>
    ReactJS
  </h1>
)

const Heading = () => (
  <div id="container">
    <Title />
    <h2 className="heading">This is a nested heading component.</h2>
  </div>
)

const root = createRoot(document.getElementById("root"));
root.render(<Heading/>);