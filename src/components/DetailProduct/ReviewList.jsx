import React from "react";
import { useSelector } from "react-redux";
import { ReviewItem } from "./ReviewItem";

export const ReviewList = () => {
  const { productReviews } = useSelector((state) => state.data);

  return (
    <div className='review__list'>
      {productReviews.length ? (
        productReviews.map((review) => (
          <ReviewItem key={review.id} review={review} />
        ))
      ) : (
        <p className='no_reviews'>
          This product does not appear to have any reviews. You can leave your
          opinion about this product
        </p>
      )}
    </div>
  );
};
