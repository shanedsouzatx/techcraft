import React, { useState } from "react";
import { pricingTabs } from "@/constants/TabsArray";
import {
  allPricing,
  brandingDesign,
  contentWriting,
  eCommercePricing,
  logoDesignPricing,
  videoAnimation,
  webAppSolution,
} from "@/data/pricing";
import PricingCard from "./PricingCard";

const PricingSection = () => {
  const [pricingActiveTab, setPricingActiveTab] = useState("All");

  return (
    <div className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] py-16">
      <div className="max-w-6xl mx-auto">
        {/*Pricing Heading */}
        <div className="mb-6 text-center px-4 md:px-8" data-aos="zoom-in">
          <h5 className="text-white text-2xl uppercase mb-3">
            We Cater to Almost
          </h5>
          <h2 className="text-white text-4xl md:text-6xl font-bold uppercase mt-4 mb-5">
            All Industries
          </h2>
          <span className="text-white font-light text-lg md:text-2xl mb-3">
            At Tech Craft, we can customize our web development and digital
            marketing services to diverse industries including real estate,
            healthcare, automobile, e-commerce, DTC brands, franchises, food and
            beverages, and more. You can select the package that suits your
            business.
          </span>
        </div>
        {/* Pricing Tabs */}
        <div
          className="w-full text-center md:flex flex-wrap md:flex-nowrap items-center md:justify-between bg-white rounded-lg md:rounded-full mt-10 p-1 md:p-[0.1rem]"
          data-aos="zoom-in"
        >
          {pricingTabs.map((tab, index) => (
            <div
              key={index}
              onClick={() => setPricingActiveTab(tab)}
              className={`text-sm font-semibold rounded-full cursor-pointer px-5 py-4 transition-colors duration-300 hover:bg-gradient-to-r hover:from-[#5114AE] hover:to-[#802FCE] hover:text-white  ${
                pricingActiveTab === tab
                  ? "bg-gradient-to-r from-[#5114AE] to-[#802FCE] text-white"
                  : ""
              }`}
            >
              {tab}
            </div>
          ))}
        </div>

        {/*Pricing Cards  */}
        <div className="w-full flex flex-wrap my-8 md:my-16 px-4 md:px-0 justify-center md:justify-between">
          {pricingActiveTab === "All" &&
            allPricing.map((el, i) => (
              <PricingCard
                key={i}
                title={el.title}
                price={el.price}
                items={el.items}
                all={true}
              />
            ))}
          {pricingActiveTab === "Logo Design" &&
            logoDesignPricing.map((el, i) => (
              <PricingCard
                key={i}
                title={el.title}
                price={el.price}
                items={el.items}
              />
            ))}
          {pricingActiveTab === "Web/App Solution" &&
            webAppSolution.map((el, i) => (
              <PricingCard
                key={i}
                title={el.title}
                price={el.price}
                items={el.items}
              />
            ))}
          {pricingActiveTab === "Branding and Design" &&
            brandingDesign.map((el, i) => (
              <PricingCard
                key={i}
                title={el.title}
                price={el.price}
                items={el.items}
              />
            ))}
          {pricingActiveTab === "E-commerce" &&
            eCommercePricing.map((el, i) => (
              <PricingCard
                key={i}
                title={el.title}
                price={el.price}
                items={el.items}
              />
            ))}
          {pricingActiveTab === "Video Animation" &&
            videoAnimation.map((el, i) => (
              <PricingCard
                key={i}
                title={el.title}
                price={el.price}
                items={el.items}
              />
            ))}
          {pricingActiveTab === "Content Writing" &&
            contentWriting.map((el, i) => (
              <PricingCard
                key={i}
                title={el.title}
                price={el.price}
                items={el.items}
              />
            ))}
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
