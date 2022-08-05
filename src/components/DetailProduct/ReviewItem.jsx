import React from "react";

export const ReviewItem = ({ review }) => {
  return (
    <div className='review__list-item'>
      <img className='current__user-icon' src={review.author.photo} />
      <div className='single__review-info'>
        <h3 className='review__author'>{review.author.name}</h3>
        <p className='review__text'>{review.text}</p>
      </div>
    </div>
  );
};
