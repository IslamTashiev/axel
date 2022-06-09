import React from "react";
import { Link } from "react-router-dom";
import arrowIcon from "../../assets/arrow-active.svg";
import cartIcon from "../../assets/cart-active.svg";
import img from "../../assets/commo.png";

export const ProductItem = () => {
  return (
    <div className='product__item'>
      <img className='product__image' src={img} alt='product-image' />
      <div className='product__info'>
        <h4 className='product__title'>Comotomo silicone bottle</h4>
        <p className='product__description'>
          This product is made from the finest silicone. Silicone per...
        </p>
        <div className='product__price'>1750 сом</div>
        <div className='product__item-links'>
          <Link className='product__item-link' to='/'>
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
