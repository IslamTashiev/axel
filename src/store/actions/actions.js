import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";
import { GET_PRODUCTS, GET_PRODUCT_BY_ID, GET_SLIDER_ITEMS } from "../types";

export const getSliderItems = () => {
  return async (dispatch) => {
    const ref = collection(db, "sliderItems");
    const itemsSnapshot = await getDocs(ref);

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
