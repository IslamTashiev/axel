import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  handleChangeLoginModal,
  handleChangeSigninModal,
} from "../../store/actions/actions";
import { Button } from "../Button/Button";
import { GoogleContinue } from "../Input/GoogleContinue";
import { Input } from "../Input/Input";

export const SigninModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signinModal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const swithModals = () => {
    dispatch(handleChangeLoginModal());
    dispatch(handleChangeSigninModal());
  };

  return (
    <div className={`window ${signinModal ? "active" : ""}`}>
      <div
        onClick={() => dispatch(handleChangeSigninModal())}
        className='modal__closer'></div>
      <div className='modal__window'>
        <div className='modal__title'>Sign up</div>
        <form className='modal__form'>
          <Input label='Your email*' value={email} changer={setEmail} />
          <Input
            label='Your password*'
            value={password}
            changer={setPassword}
          />
          <GoogleContinue />
          <Button text='Sign up' />
        </form>
        <div className='form__footer'>
          Not regitered? <span onClick={swithModals}>Create an account</span>
        </div>
      </div>
    </div>
  );
};
