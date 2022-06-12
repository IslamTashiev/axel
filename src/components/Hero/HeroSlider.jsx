import React, { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import commoImg from "../../assets/commo.png";
import { HeroContent } from "./HeroContent";
import "react-awesome-slider/dist/styles.css";
import { useSelector } from "react-redux";

import chevronleftIcon from "../../assets/chevron-left.svg";
import chevronrightIcon from "../../assets/chevron-right.svg";

export const HeroSlider = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const nextSlide = () => {
    if (selectedItem === sliderItems.length - 1) return;
    setSelectedItem(selectedItem + 1);
  };
  const prevSlide = () => {
    if (selectedItem === 0) return;
    setSelectedItem(selectedItem - 1);
  };

  const { sliderItems } = useSelector((state) => state.data);

  return (
    <div className='hero__slider'>
      <AwesomeSlider selected={selectedItem} buttons={false}>
        {sliderItems.map((item) => (
          <div key={item.id}>
            <HeroContent slide={item} />
          </div>
        ))}
      </AwesomeSlider>
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
  );
};
