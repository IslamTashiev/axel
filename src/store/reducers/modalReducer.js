import {
  CLOSE_ALL_MODALS,
  HANDLE_LOGIN_MODAL,
  HANDLE_SEARCH_MODAL,
  HANDLE_SIGNIN_MODAL,
} from "../types";

const INITIAL_STATE = {
  signinModal: false,
  loginModal: false,
  searchModal: false,
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
    case HANDLE_SEARCH_MODAL:
      return {
        ...state,
        searchModal: !state.searchModal,
      };
    case CLOSE_ALL_MODALS:
      return {
        ...state,
        signinModal: false,
        loginModal: false,
        searchModal: false,
      };

    default:
      return state;
  }
};
