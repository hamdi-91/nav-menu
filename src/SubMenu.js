import React from "react";

const SubMenu = props => {
  return (
    <ul className="sub-menu">
      {props.list.map((el, i) => (
        <li key={i} className="sub-menu-item">
          <a href={el.link}>{el.text}</a>
        </li>
      ))}
    </ul>
  );
};

export default SubMenu;


