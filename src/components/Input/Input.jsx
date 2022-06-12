import React from "react";
import "./style.css";

export const Input = ({ label, value, changer }) => {
  return (
    <div className='input'>
      <input
        value={value}
        onChange={(e) => changer(e.target.value)}
        className={`input__field ${value ? "active" : ""}`}
        type='text'
      />
      <div className='input__label'>{label}</div>
    </div>
  );
};
