import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import React, { createContext } from "react";
import { useDispatch } from "react-redux";
import { auth, provider } from "../firebase/config";
import { closeAllModals } from "../store/actions/actions";

export const authContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const dispatch = useDispatch();

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
    try {
      provider.setCustomParameters({ prompt: "select_account" });
      const response = await signInWithPopup(auth, provider);
      console.log("Вы вошли в аккаунт " + response.user.email);
      dispatch(closeAllModals());
    } catch (err) {
      console.log(err.message);
    }
  };
  const login = async (email, password) => {
    try {
      const response = await signInWithEmailAndPassword(auth, email, password);
      console.log("Hello " + response.user.email);
      dispatch(closeAllModals());
    } catch (err) {
      console.log(err.message);
    }
  };
  const createUser = async (email, password, name) => {
    try {
      const response = await createUserWithEmailAndPassword(
        auth,
        email,
        password,
      );
      await updateProfile(response.user, { displayName: name });
      console.log("Ceated user " + response.user.displayName);
      dispatch(closeAllModals());
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
