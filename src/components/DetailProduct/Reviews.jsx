import React from "react";
import { Title } from "../Title/Title";

export const Reviews = () => {
  return (
    <div className='reviews'>
      <Title text='Reviews' />
      <div className='container'>
        <div className='reviews__content'>
          <div className='feedback'></div>
        </div>
      </div>
    </div>
  );
};
