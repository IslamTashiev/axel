import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import { db } from "../../firebase/config";
import {
  CLOSE_ALL_MODALS,
  CREATE_REVIEW,
  GET_PRODUCTS,
  GET_PRODUCT_BY_ID,
  GET_PRODUCT_REVIEWS,
  GET_SLIDER_ITEMS,
  HANDLE_LOGIN_MODAL,
  HANDLE_SEARCH_MODAL,
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

export const getProductReviews = (productId) => {
  return async (dispatch) => {
    const q = query(
      collection(db, "feedbacks"),
      orderBy("createdAt"),
      where("productID", "==", productId),
    );
    const reviewsSnapshot = await getDocs(q);

    const data = reviewsSnapshot.docs.map((item) => ({
      ...item.data(),
      id: item.id,
    }));

    dispatch({
      type: GET_PRODUCT_REVIEWS,
      payload: data,
    });
  };
};
export const createReview = (review) => {
  return async (dispatch) => {
    const ref = collection(db, "feedbacks");
    await addDoc(ref, review);

    dispatch({
      type: CREATE_REVIEW,
      payload: review,
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
export const handleChangeSearchModal = () => {
  return {
    type: HANDLE_SEARCH_MODAL,
  };
};

export const closeAllModals = () => {
  return {
    type: CLOSE_ALL_MODALS,
  };
};
