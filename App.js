import React from "react";
import ReactDOM from "react-dom/client";

// React Elements => object =>

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Namaste React 🎉"
// );
// console.log(heading);

// JSX - is not HTML in JS - HTML like syntax
// React Element
// const heading = (
//   <h1 id="heading" className="head">
//     Namaste React using JSX 🐱‍🏍
//   </h1>
// );
// console.log(heading);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

// root.render(heading);

// React Component
// Class Based Component - Old
// Functional Component - New

// React Functional Component

const HeadingComponent = () => {
  return <h1> Namaste React Functional Component</h1>;
};

// const Title = () => (
//     <h1 id="heading" className="head">
//       Namaste React using JSX 🐱‍🏍
//     </h1>
//   );

// React Element
const title =  (
  <h1 id="heading" className="head">
    Namaste React using JSX 🐱‍🏍
  </h1>
);

// Component Composition
const HeadingComponent2 = () => (
  <div id="container">
   {title}
    {/* <Title/> */}
    <h1 className="heading"> Namaste React Functional Component</h1>
  </div>
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent2/>);