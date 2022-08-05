import React, { useState } from "react";
import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import { authContext } from "../../context/authContext";
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
  const [name, setName] = useState("");
  const { signinModal } = useSelector((state) => state.modal);
  const { createUser } = useContext(authContext);
  const dispatch = useDispatch();

  const swithModals = () => {
    dispatch(handleChangeLoginModal());
    dispatch(handleChangeSigninModal());
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await createUser(email, password, name);
    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <div className={`window ${signinModal ? "active" : ""}`}>
      <div
        onClick={() => dispatch(handleChangeSigninModal())}
        className='modal__closer'></div>
      <div className='modal__window'>
        <div className='modal__title'>Sign up</div>
        <form onSubmit={handleSubmit} className='modal__form'>
          <Input label='Your email*' value={email} changer={setEmail} />
          <Input label='Enter your name*' value={name} changer={setName} />
          <Input
            label='Create password*'
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
