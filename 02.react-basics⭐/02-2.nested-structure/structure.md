// Structure - 1
/**
*
* <div id="parent">
*       <div id="child">
*           <h1></h1>
*       </div>
* </div>
*
**/

// Structure - 2
/**
*
* <div id="parent">
*       <div id="child">
*           <h1>I'm an H1 tag</h1>
*           <h2>I'm an H2 tag</h2>
*       </div>
* </div>
*
**/

![react.development.js:199 Warning: Each child in a list should have a unique "key" prop.](image.png)

// Structure - 3
/**
*
* <div id="parent">
*       <div id="child1">
*           <h1>I'm an H1 tag</h1>
*           <h2>I'm an H2 tag</h2>
*       </div>
*       <div id="child2">
*           <h1>I'm an H1 tag</h1>
*           <h2>I'm an H2 tag</h2>
*       </div>
* </div>
*
**/


Core of React works like the code written in App.js file where `React.createElement()` is used.

This ugly structure arises the need of JSX.
