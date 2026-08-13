// Structure - 1
//React Element Tree
// const nestedStructure1 = React.createElement(
//   "div",
//   { id: "parent" },
//   React.createElement(
//     "div",
//     { id: "child" },
//     React.createElement(
//       "h1",
//       { id: "heading" },
//       "This is a nested structure which has a parent and a child!!",
//     ),
//   ),
// );

//In order to mount the above element tree to the DOM, 
// we need to use ReactDOM.render() method.
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(nestedStructure1);

// Structure - 2
// const nestedStructure2 = React.createElement(
//   "div",
//   { id: "parent"},
//   React.createElement
//   (
//     "div",
//     { id: "child"}, 
//       [  
//         React.createElement(
//           "h1",
//           {},
//           "This is a nested structure which has a parent and a child!! - using h1 tag"
//         ),
//         React.createElement(
//           "h2",
//           {},
//           "This is a nested structure which has a parent and a child!! - using h2 tag"
//         ),
//       ]
//   ),
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(nestedStructure2);

// Structure - 3
const nestedStructure3 = React.createElement(
  "div",
  {id: "parent"},
  [
    React.createElement(
      "div",
      {id: "child1"},
      [
        React.createElement(
          "h1",
          {},
          "This is a nested structure which has a parent and a child!! - using h1 tag"
        ),
        React.createElement(
          "h2",
          {},
          "This is a nested structure which has a parent and a child!! - using h2 tag"
        ),
      ]),
        React.createElement(
      "div",
      {id: "child2"},
      [
        React.createElement(
          "h1",
          {},
          "This is a nested structure which has a parent and a child!! - using h1 tag"
        ),
        React.createElement(
          "h2",
          {},
          "This is a nested structure which has a parent and a child!! - using h2 tag"
        ),
      ])
  ]
)


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(nestedStructure3);