import {
  CREATE_REVIEW,
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_REVIEWS,
  GET_SLIDER_ITEMS,
} from "../types";

const INITiAL_STATE = {
  sliderItems: [],
  products: [],
  detailProduct: null,
  productReviews: [],
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
    case GET_PRODUCT_BY_ID:
      return {
        ...state,
        detailProduct: action.payload,
      };
    case GET_PRODUCT_REVIEWS:
      return {
        ...state,
        productReviews: action.payload,
      };
    case CREATE_REVIEW:
      return {
        ...state,
        productReviews: [action.payload, ...state.productReviews],
      };

    default:
      return state;
  }
};
