import React from "react";
import { useUser } from "../../hooks/useUser";
import { Logo } from "../Logo/Logo";
import { Control } from "./Control";
import { Menu } from "./Menu";
import { Nav } from "./Nav";
import { UserInfo } from "./UserInfo";
import "./style.css";

export const Header = () => {
  const user = useUser();

  return (
    <div className='header'>
      <div className='container'>
        <div className='header__content'>
          <Logo />
          <Menu />
          {user && <UserInfo />}
          {!user && <Control />}
        </div>
      </div>
      <Nav />
    </div>
  );
};
