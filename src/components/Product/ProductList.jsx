import React from "react";
import { ProductItem } from "./ProductItem";
import "./style.css";

export const ProductList = () => {
  return (
    <div className='products'>
      <div className='container'>
        <h3 className='products__title'>New arivals</h3>
        <div className='products__content'>
          <ProductItem />
          <ProductItem />
          <ProductItem />
          <ProductItem />
        </div>
      </div>
    </div>
  );
};
