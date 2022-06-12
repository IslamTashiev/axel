import React from "react";
import { Button } from "../Button/Button";
import { GoogleContinue } from "../Input/GoogleContinue";
import { Input } from "../Input/Input";

export const SigninModal = () => {
  return (
    <div className='window active'>
      <div className='modal__window'>
        <div className='modal__title'>Sign up</div>
        <form className='modal__form'>
          <Input label='Your email*' />
          <Input label='Your password*' />
          <GoogleContinue />
          <Button text='Sign up' />
        </form>
        <div className='form__footer'>
          Not regitered? <span>Create an account</span>
        </div>
      </div>
    </div>
  );
};
