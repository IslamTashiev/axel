import React from "react";
import "./style.css";

export const Button = ({
  text,
  defaultClassName,
  withImage,
  imgSrc,
  click,
}) => {
  return (
    <button
      onClick={click}
      className={`btn ${defaultClassName ? defaultClassName : ""} ${
        withImage ? "with__img" : ""
      }`}>
      {text}
      {withImage ? <img src={imgSrc} /> : <></>}
    </button>
  );
};
