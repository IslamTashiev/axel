import { sendSignInLinkToEmail } from "firebase/auth";
import React, { useState } from "react";
import menuIcon from "../../assets/menu.svg";
import searchIcon from "../../assets/search.svg";
import { auth } from "../../firebase/config";

export const Nav = () => {
  const [email, setEmail] = useState("");

  const actionCodeSettings = {
    url: "https://axel-three.vercel.app/",
    handleCodeInApp: true,
    iOS: {
      bundleId: "com.example.ios",
    },
    android: {
      packageName: "com.example.android",
      installApp: true,
      minimumVersion: "12",
    },
    dynamicLinkDomain: "example.page.link",
  };

  const handleClick = (e) => {
    e.preventDefault();
    sendSignInLinkToEmail(auth, email, actionCodeSettings)
      .then(() => {
        window.localStorage.setItem("emailForSignIn", email);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <div className='nav'>
      <div className='container'>
        <div className='nav__content'>
          <div className='nav__item'>
            <div className='catalog'>
              <div className='catalog__btn'>
                <img src={menuIcon} />
                <p>Catalog</p>
              </div>
              {/* <CatologDropdown /> */}
            </div>
          </div>
          <div className='nav__item'>
            <div className='search'>
              <div className='search__btn'>
                <img src={searchIcon} />
                <p>Search</p>
                <form onSubmit={handleClick}>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type='text'
                  />
                </form>
              </div>
              {/* <CatologDropdown /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
