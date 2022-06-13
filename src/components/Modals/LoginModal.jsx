import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  handleChangeLoginModal,
  handleChangeSigninModal,
} from "../../store/actions/actions";
import { Button } from "../Button/Button";
import { GoogleContinue } from "../Input/GoogleContinue";
import { Input } from "../Input/Input";

export const LoginModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginModal } = useSelector((state) => state.modal);
  const dispatch = useDispatch();

  const swithModals = () => {
    dispatch(handleChangeLoginModal());
    dispatch(handleChangeSigninModal());
  };

  return (
    <div className={`window ${loginModal ? "active" : ""}`}>
      <div
        onClick={() => dispatch(handleChangeLoginModal())}
        className='modal__closer'></div>
      <div className='modal__window'>
        <div className='modal__title'>Login</div>
        <form className='modal__form'>
          <Input value={email} changer={setEmail} label='Your email*' />
          <Input
            value={password}
            changer={setPassword}
            label='Your password*'
          />
          <GoogleContinue />
          <Button text='Login' />
        </form>
        <div className='form__footer'>
          Have an account? <span onClick={swithModals}>Login</span>
        </div>
      </div>
    </div>
  );
};
