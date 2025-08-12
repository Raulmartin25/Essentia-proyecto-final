import React from "react";
import Hero from "../components/Hero";
import HeroSubtitle from "../components/HeroSubtitle";
import ProductsList from "./ProductsList";

const HomePage = () => {
  return (
    <>
      <Hero />
      <HeroSubtitle />
      <ProductsList />
    </>
  );
};

export default HomePage;
