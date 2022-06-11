import { GET_PRODUCTS, GET_SLIDER_ITEMS } from "../types";

const INITiAL_STATE = {
  sliderItems: [],
  products: [],
};

export const dataReducer = (state = INITiAL_STATE, action) => {
  switch (action.type) {
    case GET_SLIDER_ITEMS:
      return {
        ...state,
        sliderItems: action.payload,
      };
    case GET_PRODUCTS:
      return {
        ...state,
        products: action.payload,
      };

    default:
      return state;
  }
};
