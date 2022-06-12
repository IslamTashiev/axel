import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
export const Logo = () => {
  const navigate = useNavigate();

  return (
    <div onClick={() => navigate("/")} className='header__logo'>
      AXEL
    </div>
  );
};
