/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
// import { HeroParallax } from "@/components/ui/hero-parallax";
// import { products } from "@/data/product";
import {
  FaLaptop,
  FaBullhorn,
  FaRocket,
  FaPaintBrush,
  FaRegCheckCircle,
} from "react-icons/fa";

import Accordian from "@/components/Accordian";
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
import GradientButton from "@/components/GradientButton";
import Modal from "@/components/Modal/Modal";
import OutlineButton from "@/components/OulineButton";
import { tabs } from "@/constants/TabsArray";
import { openModal, closeModal } from "@/app/utils/HelperFunction";
import BusinessSection from "@/components/BusinessSection";
import CountSection from "@/components/CountSection";
import PricingSection from "@/components/PricingSection";
// import HeroLottieAnimation from "@/components/HeroLottieAnimation";
import Image from "next/image";
import { heroBgImgSrc } from "@/constants/CloudinaryImgUrl";

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [title, setTitle] = useState("Analysis");
  const [description, setDescription] = useState(
    "In order to create a strategic strategy that produces results quickly, we start by examining the clients' needs and understanding the demands of the project at hand."
  );
  const [hoveredIcon, setHoveredIcon] = useState("laptop");
  const [activeTab, setActiveTab] = useState("Logo Design");

  const handleMouseEnter = (icon: string) => {
    setHoveredIcon(icon);
    switch (icon) {
      case "laptop":
        setTitle("Monitoring and Analysis");
        setDescription(
          "We track the performance and results of the website and marketing campaigns live. We use innovative analytics to monitor key metrics to evaluate what's working and where adjustments are needed."
        );
        break;
      case "bullhorn":
        setTitle("Strategy Development");
        setDescription(
          "We begin by immersing ourselves in your business to understand your objectives, market position, and intended audience. Then, we gather insights through research to develop a strategy that suits your business goals."
        );
        break;
      case "rocket":
        setTitle("Optimization and Growth");
        setDescription(
          "Insights gained from ongoing analysis inform our optimization efforts. We fine-tune strategies and tactics to enhance performance and ensure your digital marketing efforts yield the best results and drive growth for your business."
        );
        break;
      case "paintbrush":
        setTitle("Implementation");
        setDescription(
          "Armed with a solid strategy, we move to implement the strategized digital marketing tactics. This includes website development, SEO, content creation, and PPC campaigns, among others, tailored to your business niche."
        );
        break;
      default:
        break;
    }
  };

  return (
    <>
      {/* <HeroParallax products={products} /> */}
      {/* Hero section */}
      <section
        className="pt-36 pb-16 bg-no-repeat bg-cover md:pt-44 md:pb-32"
        style={{
          backgroundImage: `url(${heroBgImgSrc})`,
        }}
      >
        <div className="max-w-6xl relative mx-auto flex flex-col md:flex-row justify-between px-4 w-full left-0 top-0">
          <div className="md:w-1/2" data-aos="fade-down">
            <h2 className="text-[#5114AE] font-semibold text-2xl mb-3 md:mb-5 z-50">
              Exclusivity. Uniqueness. Innovation.
            </h2>
            <h1 className="text-[1.6rem] md:text-5xl font-medium dark:text-white flex flex-col space-y-0 md:space-y-2 z-50">
              <span> You dream it,</span>
              <span>We digitalize It</span>
              <span>Your growth and</span>
              <span> success is our goal!</span>
            </h1>
            <p className="max-w-[320px] md:max-w-2xl text-base md:text-lg mt-3 md:mt-5 dark:text-neutral-200 z-50">
              Drive your brand forward with innovative digital tactics. We
              partner with you to transform your growth and redefine your
              success.
            </p>
            {/* ORM ICONS */}
            <div className="flex items-center gap-4 mt-5 z-50">
              <a href="#">
                <Image
                  src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720046788/trust-b_qphqsf.png"
                  alt="trustpilot"
                  className="w-24 h-auto md:w-[130px] md:h-auto"
                  width={130}
                  height={130}
                />
              </a>
              <a href="#">
                <Image
                  src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720047150/google_fdnuh4.png"
                  alt="google"
                  className="w-24 h-auto md:w-[130px] md:h-auto"
                  width={130}
                  height={130}
                />
              </a>
              <a href="#" className="mt-4">
                <Image
                  src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720047182/bings-logo_pbyvk7.png"
                  alt="bingads"
                  className="w-24 h-auto md:w-[130px] md:h-auto"
                  width={130}
                  height={130}
                />
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-3 md:space-y-0 mt-8">
              <GradientButton
                text="Let's Get Started"
                onClick={() => openModal(setIsModalOpen)}
              />
              <OutlineButton text="Chat With Us" />
            </div>
          </div>

          {/* Lottie animation section */}
          <div
            className="hidden md:block w-[60%] object-contain"
            data-aos="fade-left"
          >
            {/* <HeroLottieAnimation /> */}
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724802024/pngwing.com-5-1-1024x607_iowc2o.png"
              alt="Hero-section-image1"
              width={1024} // Specify the image width
              height={807} // Specify the image height
            />
          </div>

          <Modal
            isOpen={isModalOpen}
            onClose={() => closeModal(setIsModalOpen)}
          />
        </div>
      </section>

      {/* Slider */}
      <BannerSlider />
      {/* METHODOLOGY SECTION */}
      <section className="mx-auto my-12 md:my-16 max-w-6xl px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Text and Button Section */}
        <div className="w-full md:w-1/2 mb-8 md:mb-0" data-aos="zoom-in-right">
          <h1 className="text-2xl font-bold md:text-4xl md:font-semibold dark:text-white md:space-y-1 md:flex md:flex-col">
            <span>Power your business </span>
            <span>Growth With An </span>
            <span>Optimized Website</span>
          </h1>

          <p className="text-sm md:text-base my-6 text-neutral-600 dark:text-neutral-200">
            Tech Craft features a dedicated team of web development and digital
            marketing experts focused on delivering client satisfaction through
            innovative design and development. We guarantee results that
            showcase our technical expertise and creativity in website design.
          </p>
          <button
            className="text-sm font-medium cursor-pointer py-3 w-full md:w-52 md:py-4 bg-gradient-to-r from-[#5114AE] to-[#802FCE] text-white rounded-md relative overflow-visible"
            onClick={() => openModal(setIsModalOpen)}
          >
            DISCUSS YOUR IDEA
          </button>
        </div>

        {/* Image and Icons Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative flex justify-center items-center border-4 border-dotted border-[#33174E] rounded-full h-[315px] md:h-[500px] w-[310px] md:w-[500px]">
            {/* Methodologies Texts Section */}
            <div>
              <h5 className="text-center text-lg text-[#5114AE] font-extrabold">
                Our Methodology
              </h5>
              <div>
                <h3 className="text-[#333] text-lg md:text-xl my-3 font-bold text-center">
                  {title}
                </h3>
                <p
                  className={`text-center text-sm max-w-52 md:max-w-xs text-[#687087] overflow-auto`}
                  style={{
                    // Apply max-height only for mobile screens
                    maxHeight: "80px", // Adjust as needed
                    overflowY: "scroll", // Enable vertical scrolling
                    scrollbarWidth: "none",
                  }}
                >
                  {description}
                </p>
              </div>
            </div>

            {/* Relative methodologies icons */}
            <div
              className={`group flex justify-center items-center ${
                hoveredIcon === "laptop"
                  ? "bg-white border-2 border-[#33174E]"
                  : "bg-gradient-to-r from-[#5114AE] to-[#802FCE] border-2 border-white"
              } cursor-pointer p-3 md:p-5 absolute right-[10px] md:right-[50px] top-[20px] md:top-[-5px] rounded-full shadow-2xl transition duration-300`}
              onMouseEnter={() => handleMouseEnter("laptop")}
            >
              <FaLaptop
                className={`transition duration-300 ${
                  hoveredIcon === "laptop" ? "text-[#33174E]" : "text-white"
                } text-[30px] md:text-[50px]`} // Adjusted for desktop
              />
            </div>
            <div
              className={`group flex justify-center items-center ${
                hoveredIcon === "bullhorn"
                  ? "bg-white border-2 border-[#33174E]"
                  : "bg-gradient-to-r from-[#5114AE] to-[#802FCE] border-2 border-white"
              } cursor-pointer p-3 md:p-5 absolute right-[-25px] md:right-[-30px] top-[90px] md:top-[105px] rounded-full shadow-2xl transition duration-300`}
              onMouseEnter={() => handleMouseEnter("bullhorn")}
            >
              <FaBullhorn
                className={`transition duration-300 ${
                  hoveredIcon === "bullhorn" ? "text-[#33174E]" : "text-white"
                } text-[30px] md:text-[50px]`}
              />
            </div>
            <div
              className={`group flex justify-center items-center ${
                hoveredIcon === "rocket"
                  ? "bg-white border-2 border-[#33174E]"
                  : "bg-gradient-to-r from-[#5114AE] to-[#802FCE] border-2 border-white"
              } cursor-pointer p-3 md:p-5 absolute right-[-20px] md:right-[-40px] top-[170px] md:top-[245px] rounded-full shadow-2xl transition duration-300`}
              onMouseEnter={() => handleMouseEnter("rocket")}
            >
              <FaRocket
                className={`transition duration-300 ${
                  hoveredIcon === "rocket" ? "text-[#33174E]" : "text-white"
                } text-[30px] md:text-[50px]`}
              />
            </div>
            <div
              className={`group flex justify-center items-center ${
                hoveredIcon === "paintbrush"
                  ? "bg-white border-2 border-[#33174E]"
                  : "bg-gradient-to-r from-[#5114AE] to-[#802FCE] border-2 border-white"
              } cursor-pointer p-3 md:p-5 absolute right-[15px] md:right-[30px] top-[240px] md:top-[370px] rounded-full shadow-2xl transition duration-300`}
              onMouseEnter={() => handleMouseEnter("paintbrush")}
            >
              <FaPaintBrush
                className={`transition duration-300 ${
                  hoveredIcon === "paintbrush" ? "text-[#33174E]" : "text-white"
                } text-[30px] md:text-[50px]`}
              />
            </div>
          </div>
        </div>
      </section>

      {/* ACCORDIAN */}
      <div className="bg-[#EEEEEE] py-16">
        <Accordian />
      </div>
      {/* Grow Business Section */}
      <BusinessSection
        subHeading="Custom Web Design and Marketing Solutions for Business Growth"
        isPhoneIcon={true}
        para="Boost your business with a customized website and digital marketing strategy! At Tech Craft, we’re home to seasoned designers, developers, and digital marketing experts who are focused on delivering results with excellence. Ready to reinforce your online presence and drive more traffic to your website? Let’s discuss. We are just a text away."
        btnText="(667) 423-5532"
      />
      {/* Portfolio Section*/}
      <div className="py-12 md:py-16 -z-50 bg-[#F9F9F9]">
        {/* Portfolio heading */}
        <div className="max-w-6xl mx-auto px-4 md:px-8" data-aos="zoom-in">
          <h5 className="text-center text-xl md:text-2xl text-[#5114AE] font-semibold">
            Showcase of Success
          </h5>
          <p className="text-center text-sm md:text-base text-[#687087] mb-6 md:mb-8 mt-4 md:mt-6">
            Why rely solely on what we say? Explore our successful portfolio and
            see the excellence for yourself.
            <br className="hidden md:block" />
            Our team brings your creative ideas to life by crafting web designs
            that speak volumes of our creativity and expertise.
          </p>
        </div>
        {/* Portfolio Filter tabs */}
        <div
          className="flex flex-wrap justify-center gap-3 max-w-[1080px] mx-auto mb-6 md:mb-8 px-4 md:px-0"
          data-aos="zoom-in"
        >
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`relative text-sm font-semibold rounded-md cursor-pointer py-2 md:py-3 w-full md:w-36 border border-[#33174E] transition-colors duration-300 ${
                activeTab === tab
                  ? "bg-gradient-to-r from-[#5114AE] to-[#802FCE] text-white"
                  : "text-transparent bg-clip-text bg-gradient-to-r from-[#5114AE] to-[#802FCE] bg-transparent hover:bg-gradient-to-r hover:from-[#5114AE] hover:to-[#802FCE]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Portfolio Content */}
        <div className="max-w-[1400px] mx-auto flex flex-wrap my-8 md:my-16 px-4 md:px-0 justify-center md:justify-between">
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

      {/* Pricing Section */}
      <PricingSection />
      {/* TECHNOLOGIES SECTION */}
      <div className="py-16">
        <div className="max-w-6xl mx-auto px-4" data-aos="zoom-in">
          <h5 className="text-center text-2xl text-[#5114AE] font-semibold uppercase">
            TECHNOLOGIES
          </h5>
          <h4 className="font-bold text-center text-2xl md:text-4xl md:font-semibold mt-2">
            Leveraging Innovative Technologies to Scale Your Growth
          </h4>
        </div>
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center px-4 mt-8">
          {/* Image Section */}
          <div className="w-full md:w-[55%] relative" data-aos="fade-right">
            <img
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724877614/4_kiwu6j.webp"
              alt="cta-img"
              className="w-full object-contain z-50"
            />
            <img
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724879111/spiral-img_ib1sr2.png"
              alt="cta-img"
              className="w-[75%] object-contain absolute top-0 left-24 z-50"
            />
          </div>
          {/* Text Section */}
          <div className="w-full md:w-[40%] mt-8 md:mt-0" data-aos="fade-left">
            <h2 className="font-bold md:font-semibold text-2xl md:text-4xl">
              The Creative Web Designs At Tech Craft
            </h2>
            <p className="text-sm md:text-base my-6 max-w-md text-slate-600">
              Let Tech Craft revamp your brand identity to dominate the digital
              world by reinforcing the brand’s online presence, streamlining
              your operations, and engaging your target audience more
              effectively. As for now we are leveraging:
            </p>
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-2 border-2 border-white rounded-lg text-slate-600 w-32">
                <FaRegCheckCircle size={15} color="#802FCE" />
                <span>Magento</span>
              </div>
              <div className="flex items-center gap-2 border-2 border-white rounded-lg text-slate-600 w-32">
                <FaRegCheckCircle size={15} color="#802FCE" />
                <span>Shopify</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center gap-2 border-2 border-white rounded-lg text-slate-600 w-32">
                <FaRegCheckCircle size={15} color="#802FCE" />
                <span>Wordpress</span>
              </div>
              <div className="flex items-center gap-2 border-2 border-white rounded-lg text-slate-600 w-32">
                <FaRegCheckCircle size={15} color="#802FCE" />
                <span>HTML CSS</span>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4 mt-8">
              <GradientButton
                text="Let's Get Started"
                onClick={() => openModal(setIsModalOpen)}
              />
              <OutlineButton text="Talk To Us" width="w-full md:w-36" />
            </div>
          </div>
        </div>
      </div>
      {/* Testimonials section */}
      <div className="my-0 md:my-16">
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
    </>
  );
}
