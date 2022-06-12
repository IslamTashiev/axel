import React from "react";
import { ReviewItem } from "./ReviewItem";

export const ReviewList = () => {
  return (
    <div className='review__list'>
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
      <ReviewItem />
    </div>
  );
};
