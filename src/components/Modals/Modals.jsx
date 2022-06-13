import React from "react";
import { LoginModal } from "./LoginModal";
import { SigninModal } from "./SigninModal";
import "./style.css";

export const Modals = () => {
  return (
    <>
      <SigninModal />
      <LoginModal />
    </>
  );
};
