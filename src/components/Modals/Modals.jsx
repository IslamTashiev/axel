import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { LoginModal } from "./LoginModal";
import { SearchModal } from "./SearchModal";
import { SigninModal } from "./SigninModal";
import "./style.css";

export const Modals = () => {
  // const { loginModal, signupModal, searchModal } = useSelector(
  //   (state) => state.modal,
  // );

  // let q = loginModal ? "blocked" : "unblocked";

  // useEffect(() => {
  //   document.body.classList.add(q);
  // }, [loginModal, signupModal, searchModal]);

  return (
    <>
      <SigninModal />
      <LoginModal />
      <SearchModal />
    </>
  );
};
