import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/arrow-active.svg";
import cartIcon from "../../assets/cart-active.svg";

export const ProductItem = ({ product }) => {
  const description = product.description.substring(0, 100) + "...";

  return (
    <div className='product__item'>
      <img
        className='product__image'
        src={product.imageURL}
        alt='product-image'
      />
      <div className='product__info'>
        <h4 className='product__title'>{product.title}</h4>
        <p className='product__description'>{description}</p>
        <div className='product__price'>{product.price} сом</div>
        <div className='product__item-links'>
          <Link className='product__item-link' to={`/product/${product.id}`}>
            Show More
            <img src={arrowIcon} />
          </Link>
          <Link className='product__item-link' to='/'>
            Add to cart
            <img src={cartIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
};
