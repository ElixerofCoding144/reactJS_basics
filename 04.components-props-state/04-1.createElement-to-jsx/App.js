import React from "react";
import { createRoot } from "react-dom/client";

/**
 * 
 * React.createElement() creates an object representation of a React element. 
 * It takes three arguments: 
 * - the type of the element, 
 * - an object containing the element's properties (props), 
 * - and the element's children. The type can be a string representing a built-in HTML element (like "div" or "h1") or a React component. 
 * The props object can contain any attributes that you want to set on the element, such as id, className, or style. 
 * The children can be either a single child or an array of children, which can be other React elements or strings.
 */

//const heading = React.createElement("h1", {id: "heading"}, "Hello, React using React.createElement()!");
//const root = createRoot(document.getElementById("root"));
//root.render(heading);

/**
 * Similarly, we can also use JSX to create a React element. 
 * JSX is a syntax extension for JavaScript that allows us to write HTML-like code within our JavaScript code. 
 * It is more concise and easier to read than using React.createElement().
 * const jsxHeading = <h1 id="heading">Hello, React using JSX!</h1>;
 * camelCase is used for the attribute names in JSX, so we use className instead of class and htmlFor instead of for.
 * In case of multiline JSX, we can use parentheses to wrap the JSX code.
 */
const jsxHeading = (
  <h1 id="heading" className="heading">
    Hello, React using JSX!
  </h1>
);
console.log(jsxHeading);
const root = createRoot(document.getElementById("root"));
root.render(jsxHeading);