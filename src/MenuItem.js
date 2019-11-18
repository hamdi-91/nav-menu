import React from "react";
import SubMenu from "./SubMenu";

const MenuItem = props => {
  return (
    <li className="drop-it-down">
      <a
        className={props.item.active ? "active" : undefined}
        href={props.item.link}
      >
        {props.item.text}
      </a>
      {props.item.text === "Services" && <SubMenu list={props.item.subMenu} />}
    </li>
  );
};

export default MenuItem;