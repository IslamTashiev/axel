import React from "react";
import googleIcon from "../../assets/google.svg";

export const GoogleContinue = () => {
  return (
    <div className='continue'>
      <h4 className='continue__title'>Or continue with</h4>
      <div className='continue__btn'>
        <img src={googleIcon} alt='icon' />
        <p>Continue with Google</p>
      </div>
    </div>
  );
};
