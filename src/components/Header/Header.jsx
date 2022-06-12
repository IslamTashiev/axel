import React from "react";
import { Button } from "../Button/Button";
import { Logo } from "../Logo/Logo";
import { Menu } from "./Menu";
import { Nav } from "./Nav";
import "./style.css";

export const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__content'>
          <Logo />
          <Menu />
          <div className='header__control'>
            <div className='auth__method'>
              <div className='login'>Login</div>
              or
              <Button text='Sign in' defaultClassName='signin' />
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};
