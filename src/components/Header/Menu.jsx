import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const menuItem = [
  {
    id: 1,
    title: "Home",
    path: "/",
  },
  {
    id: 2,
    title: "About",
    path: "/about",
  },
  {
    id: 3,
    title: "Catalog",
    path: "/catalog",
  },
  {
    id: 4,
    title: "New Arrivals",
    path: "/new arrivals",
  },
];

export const Menu = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const renderedItems = menuItem.map((item) => (
    <li
      onClick={() => navigate(item.path)}
      key={item.id}
      className={`header__menu-item ${pathname === item.path ? "active" : ""}`}>
      {item.title}
    </li>
  ));

  return (
    <div className='header__menu'>
      <ul className='header__menu-list'>{renderedItems}</ul>
    </div>
  );
};
