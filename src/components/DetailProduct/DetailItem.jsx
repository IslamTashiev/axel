import React from "react";
import productImg from "../../assets/commo.png";
import { Button } from "../Button/Button";

export const DetailItem = () => {
  return (
    <div className='detail'>
      <div className='detail__content'>
        <div className='detail__item'>
          <img className='detail__image' src={productImg} />
        </div>
        <div className='detail__item'>
          <div className='detail__info'>
            <h2 className='detail__title'>Comotomo Silcone soska</h2>
            <p className='detail__description'>
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English.
            </p>
            <div className='detail__price'>1750 som</div>
            <div className='detail__info-buttons'>
              <Button text='Buy in 1 click' defaultClassName='detail__btn' />
              <Button
                text='Add to cart'
                defaultClassName='detail__btn outline'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
