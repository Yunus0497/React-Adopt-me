import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Adopt Me!"),
    React.createElement(Pet, { name: "Luna", type: "Dog", breed: "Havanese" }),
    React.createElement(Pet, {
      name: "Pepper",
      type: "Bird",
      breed: "Cockatiel",
    }),
    React.createElement(Pet, { name: "Doink", type: "Cat", breed: "Mixed" })
  );
};

render(React.createElement(App), document.getElementById("root"));
