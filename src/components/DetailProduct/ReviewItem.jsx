import React from "react";
import useIcon from "../../assets/profile.png";

export const ReviewItem = () => {
  return (
    <div className='review__list-item'>
      <img className='current__user-icon' src={useIcon} />
      <div className='single__review-info'>
        <h3 className='review__author'>User Name</h3>
        <p className='review__text'>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
          tenetur rerum id ratione aperiam quasi. Ab aperiam saepe totam
          deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
          repudiandae. Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Vero, tenetur rerum id ratione aperiam quasi. Ab aperiam saepe totam
          deleniti. Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
          repudiandae.
        </p>
      </div>
    </div>
  );
};
