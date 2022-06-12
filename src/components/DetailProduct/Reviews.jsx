import React from "react";
import { Title } from "../Title/Title";
import { FeedBack } from "./FeedBack";
import { ReviewList } from "./ReviewList";

export const Reviews = () => {
  return (
    <div className='reviews'>
      <Title text='Reviews' />
      <div className='reviews__content'>
        <FeedBack />
        <ReviewList />
      </div>
    </div>
  );
};
