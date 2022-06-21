import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
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
  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log("Hello " + response.user.email);
    } catch (err) {
      console.log(err.message);
    }
  };
  const createUser = async (email, password) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      console.log("Ceated user " + response.user.displayName);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <authContext.Provider
      value={{ loginWithGoogle, logout, login, createUser }}>
      {children}
    </authContext.Provider>
  );
};
