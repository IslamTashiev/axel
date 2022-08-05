import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";
import { useUser } from "../../hooks/useUser";

import useIcon from "../../assets/profile.png";
import { serverTimestamp } from "firebase/firestore";
import {
  createReview,
  handleChangeLoginModal,
} from "../../store/actions/actions";
import { useContext } from "react";

export const FeedBack = () => {
  const [feedBackText, setFeedBackText] = useState("");
  const dispatch = useDispatch();
  const user = useUser();
  const { id } = useParams();

  const handleCreateReview = (e) => {
    e.preventDefault();

    if (!user) return dispatch(handleChangeLoginModal());

    const createdReview = {
      text: feedBackText,
      author: {
        name: user.displayName,
        photo: user.photoURL,
      },
      createdAt: serverTimestamp(),
      productID: id,
    };
    dispatch(createReview(createdReview));
    setFeedBackText("");
  };

  return (
    <form onSubmit={handleCreateReview}>
      <div className='feedback'>
        <div className='feedback__item'>
          <img
            className='current__user-icon'
            src={user ? user.photoURL : useIcon}
          />
          <Input
            label='Your feedback'
            value={feedBackText}
            changer={setFeedBackText}
          />
        </div>
        <Button text='Leave your feedback' defaultClassName='feedback__btn' />
      </div>
    </form>
  );
};
