import { signInWithPopup, signOut } from "firebase/auth";
import React, { createContext } from "react";
import { auth, provider } from "../firebase/config";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log("Вы вышли из аккаунта");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  const loginWithGoogle = async () => {
    provider.setCustomParameters({ prompt: "select_account" });
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log("Вы вошли в аккаунт " + result.user.email);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <authContext.Provider value={{ loginWithGoogle, logout }}>
      {children}
    </authContext.Provider>
  );
};
