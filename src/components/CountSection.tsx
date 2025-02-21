/* eslint-disable react/no-unescaped-entities */
import { bannerPerce } from "@/constants/CloudinaryImgUrl";
import React from "react";
import { CardHoverEffectDemo } from "./CardHoverEffectDemo";

const CountSection = () => {
  return (
    <div
      className="z-50 bg-no-repeat bg-cover my-16"
      style={{
        backgroundImage: `url(${bannerPerce})`,
      }}
    >
      <div className="max-w-6xl mx-auto py-10">
        <div className="px-4 md:px-0" data-aos="zoom-in">
          <h5 className="text-2xl text-[#5114AE] font-medium md:font-semibold mb-3">
            Budget-Friendly Prices
          </h5>
          <h2 className="text-xl md:text-4xl font-bold md:font-semibold">
            Get Top-Notch Services At
            <br />
            Reasonable Prices
          </h2>
          <p className="text-sm pr-5 md:text-base md:pr-0 text-[#687087] mb-8 mt-6">
            We provide web solutions and marketing services tailored to fit
            businesses of every size and ensure affordability without
            compromising quality.
          </p>
        </div>

        <CardHoverEffectDemo />
      </div>
    </div>
  );
};

export default CountSection;
