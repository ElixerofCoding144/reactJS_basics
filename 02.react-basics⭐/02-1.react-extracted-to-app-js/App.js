const heading = React.createElement("h1",{id: "heading"},"Hello!, We are rendering this by creating App.js, CDN is injected 🚀");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);

console.log("Heading: ",heading);
console.log("Root: ",root);
console.log("Root Render: ",root.render)