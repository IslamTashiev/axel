import React from "react";
import { useSelector } from "react-redux";
import { Bradcrumb } from "../Bradcrumb/Bradcrumb";
import { DetailItem } from "./DetailItem";
import { Reviews } from "./Reviews";
import "./style.css";

export const DetailProduct = () => {
  const { detailProduct } = useSelector((state) => state.data);

  return (
    <div className='detail__page'>
      <div className='container'>
        <Bradcrumb
          char='>'
          items={[
            "Product",
            detailProduct ? detailProduct.title : "Loading...",
          ]}
        />
        <DetailItem />
        <Reviews />
      </div>
    </div>
  );
};
