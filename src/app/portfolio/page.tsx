/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import {
  logoDesign,
  webDesign,
  eCommerce,
  branding,
  mobileApps,
  motionGraphics,
  illustration,
} from "@/data/porfolios";
import { Testimonials } from "@/components/Testimonials";
import BannerSlider from "@/components/BannerSlider";
import { tabs } from "@/constants/TabsArray";
import { portfoilioBgImgSrc } from "@/constants/CloudinaryImgUrl";
import GradientButton from "@/components/GradientButton";
import OutlineButton from "@/components/OulineButton";
import Modal from "@/components/Modal/Modal";
import { closeModal, openModal } from "../utils/HelperFunction";
import CountSection from "@/components/CountSection";
import HeroSection from "@/components/HeroSection";

function Portfolio() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Logo Design");

  return (
    <section className="w-full">
      {/* Hero Section */}
      <HeroSection
        subHeading="Our Outstanding Portfolio"
        heading="Featured Work"
        para=" We have delivered exceptional digital service to our clients. At
          TechCraft our success lies in client’s satisfaction and
          delivering par excellence digital solutions"
        bgImgSrc={portfoilioBgImgSrc}
        backDropShadow="linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))"
      />
      {/* Slider */}
      <BannerSlider />
      {/* Portfolio Section*/}
      <div className="py-16 -z-50 bg-[#F9F9F9]">
        {/* Portfolio heading */}
        <div className="max-w-6xl mx-auto px-4 md:px-6" data-aos="zoom-in">
          <h5 className="text-center text-xl text-[#5114AE] font-semibold">
            Our Outstanding Portfolio
          </h5>
          <h2 className="text-center font-bold text-4xl text-slate-800 my-3">
            See it. Believe it
          </h2>
          <p className="text-center text-base text-[#687087] mb-8">
            TechCraft has been extremely privileged to work with such great
            clients and offer them quality service.
            <br />
            We have developed astounding layouts and interactive designs to give
            the best user experience.
          </p>
        </div>
        {/* Portfolio Filter tabs */}
        <div
          className="flex flex-wrap max-w-[1080px] mx-auto gap-3 mb-6 px-4 justify-center md:justify-start md:px-0 md:mb-8"
          data-aos="zoom-in"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative text-sm font-semibold rounded-md cursor-pointer py-3 w-full md:w-36 border border-[#01247F] transition-colors duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#5114AE] to-[#802FCE] text-white"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-[#5114AE] to-[#802FCE] bg-transparent hover:bg-gradient-to-r hover:from-[#0062EB] hover:to-[#01247F]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* <ScrollContainer /> */}
        <div className="max-w-[1400px] mx-auto flex flex-wrap my-16 justify-center md:justify-between px-4 md:px-0">
          {activeTab === "Logo Design" &&
            logoDesign.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} />
            ))}
          {activeTab === "Website Design" &&
            webDesign.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} giveHeight={true} />
            ))}
          {activeTab === "E-Commerce" &&
            eCommerce.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} giveHeight={true} />
            ))}
          {activeTab === "Branding" &&
            branding.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} />
            ))}
          {activeTab === "Mobile Apps" &&
            mobileApps.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} />
            ))}
          {activeTab === "Motion Graphics" &&
            motionGraphics.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} />
            ))}
          {activeTab === "Illustration" &&
            illustration.map((imgSrc, i) => (
              <ThreeDCardDemo key={i} imgSrc={imgSrc} />
            ))}
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 px-4 md:px-0">
          <GradientButton
            text="Let's Get Started"
            onClick={() => openModal(setIsModalOpen)}
          />
          <OutlineButton text="Chat With Us" />
        </div>
      </div>

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

      <Modal isOpen={isModalOpen} onClose={() => closeModal(setIsModalOpen)} />
    </section>
  );
}

export default Portfolio;
