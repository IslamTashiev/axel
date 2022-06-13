import React from "react";
import { useLocation } from "react-router-dom";
import "./style.css";

export const Bradcrumb = ({ items, char }) => {
  const location = useLocation();
  console.log(location.state + "=> state");
  console.log(location.hash + "=> hash");
  console.log(location.key + "=> key");
  console.log(location.search + "=> search");

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
