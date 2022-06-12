import React from "react";
import { useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { Loader } from "../Loader/Loader";

export const DetailItem = () => {
  const { detailProduct } = useSelector((state) => state.data);

  if (!detailProduct)
    return (
      <div className='details__loding'>
        <Loader />
      </div>
    );

  return (
    <div className='detail'>
      <div className='detail__content'>
        <div className='detail__item'>
          <img className='detail__image' src={detailProduct.imageURL} />
        </div>
        <div className='detail__item'>
          <div className='detail__info'>
            <h2 className='detail__title'>{detailProduct.title}</h2>
            <p className='detail__description'>{detailProduct.description}</p>
            <div className='detail__price'>{detailProduct.price} som</div>
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
