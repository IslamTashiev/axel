import React, { useEffect } from "react";
import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import { useDispatch } from "react-redux";
import { getSliderItems } from "../../store/actions/actions";
import { HeroSlider } from "./HeroSlider";
import "./style.css";

export const Hero = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getSliderItems());
  }, []);

  return (
    <div className='hero'>
      <div className='container'>
        <div className='hero__content'>
          <HeroSlider />
        </div>
      </div>
    </div>
  );
};
