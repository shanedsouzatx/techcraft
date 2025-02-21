/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { Testimonials } from "@/components/Testimonials";
import { pricesHeroImgSrc } from "@/constants/CloudinaryImgUrl";
import CountSection from "@/components/CountSection";
import HeroSection from "@/components/HeroSection";
import PricingSection from "@/components/PricingSection";

function Prices() {
  return (
    <section className="w-full">
      {/* Hero Section */}
      <HeroSection
        heading="Pricing"
        para="TechCraft is a digital agency striving to deliver
            exceptional designsolutions to meet your branding needs. Moving in
            this fast-paced businessworld, we deliver customer experience with
            smart services to meet the needs of the customers."
        bgImgSrc={pricesHeroImgSrc}
        backDropShadow="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
        textColor="text-white"
      />
      {/* Pricing Section */}
      <PricingSection />

      {/* Testimonials section */}
      <div className="my-10 md:my-16">
        {/* Testimonials Heading */}
        <div className="mb-6" data-aos="zoom-in">
          <h5 className="text-center text-2xl font-bold md:text-3xl text-[#5114AE] md:font-medium ">
            Go through Client Feedbacks
          </h5>
          <h4 className="text-center text-2xl font-bold md:text-4xl md:font-medium mt-2 text-slate-600">
            Testimonials
          </h4>
        </div>
        <Testimonials />
      </div>
      {/* Projects Count */}
      <CountSection />
    </section>
  );
}

export default Prices;
