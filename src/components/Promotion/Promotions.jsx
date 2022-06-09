import React from "react";
import { Promotion } from "./Promotion";
import "./style.css";

export const Promotions = () => {
  return (
    <div className='promotions'>
      <div className='container'>
        <div className='promotions__content'>
          <Promotion />
          <Promotion />
        </div>
        <div className='promotions__content second'>
          <Promotion />
          <Promotion />
        </div>
      </div>
    </div>
  );
};
