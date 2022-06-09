import React from "react";
import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Hero } from "../components/Hero/Hero";
import { ProductList } from "../components/Product/ProductList";
import { Promotions } from "../components/Promotion/Promotions";

export const HomePage = () => {
  return (
    <div className='wrapper'>
      <Header />
      <Promotions />
      <Hero />
      <ProductList />
      <Footer />
    </div>
  );
};
