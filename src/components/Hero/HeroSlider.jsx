import React, { useState } from "react";
import AwesomeSlider from "react-awesome-slider";
import commoImg from "../../assets/commo.png";
import { HeroContent } from "./HeroContent";
import "react-awesome-slider/dist/styles.css";
import { useSelector } from "react-redux";

// const sliderItems = [
//   {
//     id: 1,
//     title: "Comotomo silicone bottle",
//     description:
//       "This product is made from the finest silicone. Silicone perfectly conducts and retains heat, which allows the baby to continuously feel maternal care.",
//     price: 1750,
//     imageURL: commoImg,
//     page: 0,
//   },
//   {
//     id: 2,
//     title: "Comotomo silicone bottle 1",
//     description:
//       "This product is made from the finest silicone. Silicone perfectly conducts and retains heat, which allows the baby to continuously feel maternal care.",
//     price: 1750,
//     imageURL: commoImg,
//     page: 1,
//   },
//   {
//     id: 3,
//     title: "Comotomo silicone bottle 2",
//     description:
//       "This product is made from the finest silicone. Silicone perfectly conducts and retains heat, which allows the baby to continuously feel maternal care.",
//     price: 1750,
//     imageURL: commoImg,
//     page: 2,
//   },
//   {
//     id: 4,
//     title: "Comotomo silicone bottle 3",
//     description:
//       "This product is made from the finest silicone. Silicone perfectly conducts and retains heat, which allows the baby to continuously feel maternal care.",
//     price: 1750,
//     imageURL: commoImg,
//     page: 3,
//   },
//   {
//     id: 5,
//     title: "Comotomo silicone bottle 4",
//     description:
//       "This product is made from the finest silicone. Silicone perfectly conducts and retains heat, which allows the baby to continuously feel maternal care.",
//     price: 1750,
//     imageURL: commoImg,
//     page: 4,
//   },
// ];

export const HeroSlider = () => {
  const [selectedItem, setSelectedItem] = useState(0);

  const { sliderItems } = useSelector((state) => state.data);

  return (
    <div className='hero__slider'>
      <AwesomeSlider selected={selectedItem} buttons={false}>
        {sliderItems.map((item) => (
          <div key={item.id}>
            <HeroContent
              slide={item}
              selectedItem={selectedItem}
              setSelectedItem={setSelectedItem}
              sliderItems={sliderItems}
            />
          </div>
        ))}
      </AwesomeSlider>
    </div>
  );
};
