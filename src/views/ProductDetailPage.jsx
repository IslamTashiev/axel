import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { DetailProduct } from "../components/DetailProduct/DetailProduct";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { ProductList } from "../components/Product/ProductList";
import { getProductById } from "../store/actions/actions";

export const ProductDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(id));
  }, []);

  return (
    <div className=''>
      <Header />
      <DetailProduct />
      <ProductList />
      <Footer />
    </div>
  );
};
