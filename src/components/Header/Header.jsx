import React, { useContext } from "react";
import { useDispatch } from "react-redux";
import { authContext } from "../../context/authContext";
import {
  handleChangeLoginModal,
  handleChangeSigninModal,
} from "../../store/actions/actions";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { Menu } from "./Menu";
import { Nav } from "./Nav";
import "./style.css";

export const Header = () => {
  const dispatch = useDispatch();
  const { logout } = useContext(authContext);

  return (
    <div className='header'>
      <div className='container'>
        <div className='header__content'>
          <Logo />
          <Menu />
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
        </div>
      </div>
      <Nav />
    </div>
  );
};
