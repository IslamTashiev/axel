import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Input } from "../Input/Input";

import useIcon from "../../assets/profile.png";

export const FeedBack = () => {
  const [feedBackText, setFeedBackText] = useState("");

  return (
    <form>
      <div className='feedback'>
        <div className='feedback__item'>
          <img className='current__user-icon' src={useIcon} />
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
