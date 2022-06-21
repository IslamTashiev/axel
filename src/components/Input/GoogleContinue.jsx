import React, { useContext } from "react";
import googleIcon from "../../assets/google.svg";
import { authContext } from "../../context/authContext";

export const GoogleContinue = () => {
  const { loginWithGoogle } = useContext(authContext);

  return (
    <div className='continue'>
      <h4 className='continue__title'>Or continue with</h4>
      <div onClick={loginWithGoogle} className='continue__btn'>
        <img src={googleIcon} alt='icon' />
        <p>Continue with Google</p>
      </div>
    </div>
  );
};
