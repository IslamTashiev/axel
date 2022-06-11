import React from "react";
import arrowIcon from "../../assets/arrow.svg";
import cartIcon from "../../assets/cart.svg";
import chevronleftIcon from "../../assets/chevron-left.svg";
import chevronrightIcon from "../../assets/chevron-right.svg";
import { Button } from "../Button/Button";

export const HeroContent = (props) => {
  const { setSelectedItem, selectedItem, slide, sliderItems } = props;

  const nextSlide = () => {
    if (selectedItem === sliderItems.length - 1) return;
    setSelectedItem(selectedItem + 1);
  };
  const prevSlide = () => {
    if (selectedItem === 0) return;
    setSelectedItem(selectedItem - 1);
  };

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
        <div className='slider__selectors'>
          <div className='selected__items'>
            {sliderItems.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item.page)}
                className='selected__item'>
                <div className='outline'>
                  <img className='selected__item-img' src={item.imageURL} />
                </div>
              </div>
            ))}
          </div>
          <div className='slider__buttons'>
            <img
              onClick={prevSlide}
              className='arrow left'
              src={chevronleftIcon}
            />
            <img
              onClick={nextSlide}
              className='arrow right'
              src={chevronrightIcon}
            />
          </div>
        </div>
      </div>
      <img className='hero__product-image' src={slide.imageURL} />
    </div>
  );
};
