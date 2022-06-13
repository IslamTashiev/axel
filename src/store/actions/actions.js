import {
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import {
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_SLIDER_ITEMS,
  HANDLE_LOGIN_MODAL,
  HANDLE_SIGNIN_MODAL,
} from "../types";

export const getSliderItems = () => {
  return async (dispatch) => {
    const q = query(collection(db, "sliderItems"), orderBy("page"));
    const itemsSnapshot = await getDocs(q);

    const data = itemsSnapshot.docs.map((slide) => ({
      ...slide.data(),
      id: slide.id,
    }));

    dispatch({
      type: GET_SLIDER_ITEMS,
      payload: data,
    });
  };
};

export const getProducts = () => {
  return async (dispatch) => {
    const ref = collection(db, "products");
    const productsSnapshot = await getDocs(ref);

    const data = productsSnapshot.docs.map((product) => ({
      ...product.data(),
      id: product.id,
    }));

    dispatch({
      type: GET_PRODUCTS,
      payload: data,
    });
  };
};

export const getProductById = (id) => {
  return async (dispatch) => {
    const ref = doc(db, "products", id);
    const snapshot = await getDoc(ref);
    const product = { ...snapshot.data(), id: snapshot.id };

    dispatch({
      type: GET_PRODUCT_BY_ID,
      payload: product,
    });
  };
};
export const handleChangeSigninModal = () => {
  return {
    type: HANDLE_SIGNIN_MODAL,
  };
};
export const handleChangeLoginModal = () => {
  return {
    type: HANDLE_LOGIN_MODAL,
  };
};
