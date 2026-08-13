import React from "react";
import { createRoot } from "react-dom/client";

const parent = React.createElement(
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
          "Child 1 - This is a nested structure which has a parent and a child!! - using h1 tag"
        ),
        React.createElement(
          "h2",
          {},
          "Child 1 - This is a nested structure which has a parent and a child!! - using h2 tag"
        ),
      ]),
        React.createElement(
      "div",
      {id: "child2"},
      [
        React.createElement(
          "h1",
          {},
          "Child 2 - This is a nested structure which has a parent and a child!! - using h1 tag"
        ),
        React.createElement(
          "h2",
          {},
          "Child 2 - This is a nested structure which has a parent and a child!! - using h2 tag"
        ),
      ])
  ]
)


const root = createRoot(document.getElementById("root"));
root.render(parent);