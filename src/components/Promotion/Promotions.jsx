import React from "react";
import { Title } from "../Title/Title";
import { Promotion } from "./Promotion";
import "./style.css";

export const Promotions = () => {
  return (
    <div className='promotions'>
      <div className='container'>
        <Title text='Our promotions' />
        <div className='promotions__content'>
          <Promotion />
          <Promotion />
          <Promotion />
          <Promotion />
        </div>
        {/* <div className='promotions__content second'></div> */}
      </div>
    </div>
  );
};
