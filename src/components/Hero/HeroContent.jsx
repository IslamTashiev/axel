import React from "react";
import arrowIcon from "../../assets/arrow.svg";
import cartIcon from "../../assets/cart.svg";

import { Button } from "../Button/Button";

export const HeroContent = (props) => {
  const { slide } = props;

  return (
    <div className='hero__item'>
      <div className='hero__info'>
        <h1 className='hero__title'>{slide.title}</h1>
        <h5 className='hero__subtitle'>{slide.description}</h5>
        <div className='hero__price'>{slide.price} com</div>
        <div className='hero__buttons'>
          <Button
            text='See More'
            defaultClassName='hero__btn'
            withImage={true}
            imgSrc={arrowIcon}
          />
          <Button
            text='Add to cart'
            defaultClassName='hero__btn'
            withImage={true}
            imgSrc={cartIcon}
          />
        </div>
      </div>
      <div className='hero__info-two'>
        <img className='hero__product-image' src={slide.imageURL} />
      </div>
    </div>
  );
};
