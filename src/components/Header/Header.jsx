import React from "react";
import { Menu } from "./Menu";
import { Nav } from "./Nav";
import "./style.css";

export const Header = () => {
  return (
    <div className='header'>
      <div className='container'>
        <div className='header__content'>
          <div className='header__logo'>AXEL</div>
          <Menu />
          <div className='header__control'>
            <div className='auth__method'>
              <div className='login'>Login</div>
              or
              <div className='signin btn'>Sign in</div>
            </div>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
};
