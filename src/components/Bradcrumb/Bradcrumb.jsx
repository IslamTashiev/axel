import React from "react";
import "./style.css";

export const Bradcrumb = ({ items, char }) => {
  return (
    <ul className='bradcrumbs'>
      {items.map((item, index) => (
        <li className='bradcrumb__item' key={item}>
          {item}
          {items.length - 1 !== index ? " " + char : ""}
        </li>
      ))}
    </ul>
  );
};
