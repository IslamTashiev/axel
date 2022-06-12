import React from "react";
import { Bradcrumb } from "../Bradcrumb/Bradcrumb";
import { DetailItem } from "./DetailItem";
import { Reviews } from "./Reviews";
import "./style.css";

export const DetailProduct = () => {
  return (
    <div className='detail__page'>
      <div className='container'>
        <Bradcrumb items={["Product", "Comotomo Silcone soska"]} />
        <DetailItem />
        <Reviews />
      </div>
    </div>
  );
};
