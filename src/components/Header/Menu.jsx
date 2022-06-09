import React from "react";

export const Menu = () => {
  return (
    <div className='header__menu'>
      <ul className='header__menu-list'>
        <li className='header__menu-item active'>Home</li>
        <li className='header__menu-item'>About</li>
        <li className='header__menu-item'>Catalog</li>
        <li className='header__menu-item'>New Arrivals</li>
      </ul>
    </div>
  );
};
