import React from "react";
import { useDispatch } from "react-redux";
import {
  handleChangeLoginModal,
  handleChangeSigninModal,
} from "../../store/actions/actions";
import { Button } from "../Button/Button";

export const Control = () => {
  const dispatch = useDispatch();

  return (
    <div className='header__control'>
      <div className='auth__method'>
        <div
          onClick={() => dispatch(handleChangeLoginModal())}
          className='login'>
          Login
        </div>
        or
        <Button
          click={() => dispatch(handleChangeSigninModal())}
          text='Sign up'
          defaultClassName='signin'
        />
      </div>
    </div>
  );
};
