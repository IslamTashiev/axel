import React, { useContext } from "react";
import { useUser } from "../../hooks/useUser";
import { authContext } from "../../context/authContext";
import { useState } from "react";

export const UserInfo = () => {
  const [activePopup, setActivePopup] = useState(false);
  const { logout } = useContext(authContext);
  const user = useUser();

  const handleActivePopup = () => {
    setActivePopup(!activePopup);
  };

  return (
    <div className='user__info'>
      <h4 className='user__name'>{user.displayName}</h4>
      <img
        onClick={handleActivePopup}
        className='user__avatar'
        src={user.photoURL ? user.photoURL : ""}
        alt='user-avatar'
      />
      <div className={`user__popup-info ${activePopup ? "active" : ""}`}>
        <ul className='popup__list'>
          <li className='popup__item'>Item 1</li>
          <li className='popup__item'>Item 2</li>
          <li className='popup__item'>Item 3</li>
          <li onClick={logout} className='popup__item logout'>
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};
