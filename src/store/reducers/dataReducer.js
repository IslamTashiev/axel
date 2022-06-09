import { GET_SLIDER_ITEMS } from "../types";

const INITiAL_STATE = {
  sliderItems: [],
};

export const dataReducer = (state = INITiAL_STATE, action) => {
  switch (action.type) {
    case GET_SLIDER_ITEMS:
      return {
        ...state,
        sliderItems: action.payload,
      };

    default:
      return state;
  }
};
