/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import BannerSlider from "@/components/BannerSlider";
import { contactHeroImgSrc } from "@/constants/CloudinaryImgUrl";
import HeroSection from "@/components/HeroSection";

function Contact() {
  return (
    <section>
      {/* Hero Section */}
      <HeroSection
        heading={`Phenomenal Website Design and <br/> Development Services`}
        subHeading="Contact Us"
        para="We provide complete web development solutions for your business. Our
            websites showcase dexterity, agility, exclusivity and quality."
        bgImgSrc={contactHeroImgSrc}
        backDropShadow="linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))"
        textColor="text-white"
      />
      {/* Slider */}
      <div className="mb-20">
        <BannerSlider />
      </div>
    </section>
  );
}

export default Contact;
