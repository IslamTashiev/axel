import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../store/actions/actions";
import { Title } from "../Title/Title";
import { ProductItem } from "./ProductItem";
import "./style.css";

export const ProductList = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.data);

  useEffect(() => {
    dispatch(getProducts());
  }, []);

  return (
    <div className='products'>
      <div className='container'>
        <Title text='New arivals' />

        <div className='products__content'>
          {products.length ? (
            products.map((product) => <ProductItem product={product} />)
          ) : (
            <>Loading...</>
          )}
        </div>
      </div>
    </div>
  );
};
