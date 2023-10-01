"use client";

import React from "react";
import Image from "next/image";
import CustomButton from "./CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find, Book, or Rent a car - quickly and easily
        </h1>
        <p className="hero__subtitle">
          Streamline your car rental experience with our effortless booking
          process
        </p>
      </div>
      <CustomButton
        title="Explore Cars"
        containerStyles="bg-primary-blue text-white rounded-full mt-10"
        handleClick={handleScroll}
      ></CustomButton>
    </div>
  );
};

export default Hero;