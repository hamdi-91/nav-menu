import React from "react";
import ReactDOM from "react-dom";
import MenuItem from "./MenuItem";

import "./index.css";

const menu = [
  {
    text: "Home",
    link: "#1",
    active: true
  },

  {
    text: "Services",
    link: "#2",
    active: false,
    subMenu: [
      {
        text: "For entrepreneurs",
        link: "#21"
      },
      {
        text: "For students",
        link: "#22"
      },
      {
        text: "For hobbyists",
        link: "#23"
      }
    ]
  },
  {
    text: "Contact",
    link: "#3",
    active: false
  }
];

function App() {
  return (
    <ul className="nav-bar">
      {menu.map((el, index) => (
        <MenuItem key={index} item={el} />
      ))}
    </ul>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
