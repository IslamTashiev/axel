import { HANDLE_LOGIN_MODAL, HANDLE_SIGNIN_MODAL } from "../types";

const INITIAL_STATE = {
  signinModal: false,
  loginModal: false,
};

export const modalReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case HANDLE_SIGNIN_MODAL:
      return {
        ...state,
        signinModal: !state.signinModal,
      };
    case HANDLE_LOGIN_MODAL:
      return {
        ...state,
        loginModal: !state.loginModal,
      };

    default:
      return state;
  }
};