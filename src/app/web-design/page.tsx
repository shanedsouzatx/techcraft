/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { Testimonials } from "@/components/Testimonials";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import { eCommerce } from "@/data/porfolios";
import BannerSlider from "@/components/BannerSlider";
import { heroBgImgSrc } from "@/constants/CloudinaryImgUrl";
import BusinessSection from "@/components/BusinessSection";
import GradientButton from "@/components/GradientButton";
import { closeModal, openModal } from "@/app/utils/HelperFunction";
import OutlineButton from "@/components/OulineButton";
import Modal from "@/components/Modal/Modal";
import CountSection from "@/components/CountSection";
import AllInOneCombo from "@/components/AllInOneCombo";

const WebDesign = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section>
      {/* Hero Section */}
      <div
        className="pt-40 pb-28 bg-no-repeat bg-cover md:pt-48 md:pb-32"
        style={{
          backgroundImage: `url(${heroBgImgSrc})`,
        }}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between h-full">
          {/* Content */}
          <div className="w-1/2 h-full flex items-center ">
            <div className="w-full">
              <h2 className="text-[#5114AE] font-semibold text-xl md:text-2xl z-50">
                Website Design
              </h2>
              <h1 className="text-2xl md:text-4xl font-semibold dark:text-white flex flex-col space-y-4 z-50 my-3">
                Engaging Website Designs
                <br />
                That Capture And Convert
              </h1>
              <p className="max-w-2xl text-base md:text-base dark:text-neutral-200 z-50">
                Effective web design plays a crucial role in converting visitors
                into customers. At Tech Craft, our highly skilled web designers
                ensure your website looks exceptional with unique and appealing
                designs. We prioritize creating interfaces that look great and
                function seamlessly, setting you apart from the competition.
              </p>

              <div className="my-4">
                <div className="flex items-center space-x-4 mb-1">
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-96">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Designs That Convert</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-96">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Intuitive, Accessible Layouts</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-96">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Seamless, Cross-Device Functionality</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-96">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Fast-Loading, Optimized Code & Images</span>
                  </div>
                </div>
              </div>
              {/* ORM ICONS */}
              <div className="flex items-center gap-4 mt-2 z-50">
                <a href="#">
                  <Image
                    src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720046788/trust-b_qphqsf.png"
                    alt="trustpilot"
                    width={130}
                    height={130}
                  />
                </a>
                <a href="#">
                  <Image
                    src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720047150/google_fdnuh4.png"
                    alt="google"
                    width={130}
                    height={130}
                  />
                </a>
                <a href="#" className="mt-4">
                  <Image
                    src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720047182/bings-logo_pbyvk7.png"
                    alt="bingads"
                    width={130}
                    height={130}
                  />
                </a>
              </div>

              <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-3 md:space-y-0 mt-8">
                <GradientButton
                  text="Chat With Us"
                  onClick={() => {
                    if (window.Tawk_API) {
                      window.Tawk_API.maximize();
                    }
                  }}
                />
              </div>
            </div>
          </div>
          {/* Image */}
          <div className="w-1/2 h-full flex items-center justify-end">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1725056828/What-is-the-best-SEO-strategy-for-2020__1_-removebg-preview-1_js9ne8.webp"
              alt="web-design-heroimg"
              width={500} // Adjust the width as needed
              height={500} // Adjust the height as needed
              className="object-contain"
            />
          </div>
        </div>
      </div>

      {/* Slider */}
      <BannerSlider />

      {/* TEXT IMAGE SECTION 1*/}
      <div className="w-full">
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex flex-wrap flex-row-reverse">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1725057586/w2_ga2ozd.webp"
                alt="web-design1"
                width={500}
                height={500}
                objectFit="contain"
                className="ml-auto"
              />
            </div>
            <div className="w-1/2">
              {/* <h5 className="text-2xl text-[#5114AE] font-semibold z-50 mb-3">
                E-Commerce Marketing
              </h5> */}
              <h2 className="text-4xl text-slate-800 font-bold">
                WordPress Websites For
                <br />
                Tailored Digital Platforms
              </h2>
              <p className="text-gray-500 text-base my-4">
                WordPress offers an exceptional platform for crafting websites
                that cater to a wide range of needs. Our team leverages this
                versatile CMS to develop sites that effectively communicate your
                brand’s message and engage your audience. We specialize in
                creating custom, scalable solutions — from compelling
                content-centric blogs to feature-rich e-commerce sites. We
                prioritize delivering a smooth user experience, incorporating
                advanced plugins, and designing themes that reflect your unique
                brand identity. Recognizing that your website is a crucial
                component of your business’s online strategy, we build with an
                eye for detail, ensuring functionality, aesthetics, and
                performance align perfectly with your goals. Partner with us to
                craft a WordPress site that is a powerful tool in your digital
                arsenal, driving growth and enhancing your online visibility.
              </p>
              <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-3 md:space-y-0 mt-8">
                <GradientButton
                  text="Let's Get Started"
                  onClick={() => openModal(setIsModalOpen)}
                />
                <OutlineButton text="Chat With Us" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 2*/}
      <div className="w-full">
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1725057709/pngwing.com-6-1024x757_fnwhvi.png"
                alt="web-design2"
                width={500}
                height={500}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-4xl text-slate-800 font-bold">
                Get Shopify Excellence
                <br />
                With Streamlined E-
                <br />
                commerce Solutions
              </h2>
              <p className="text-gray-500 text-base my-4">
                Shopify sets the standard for e-commerce platforms with its
                comprehensive features designed to facilitate online selling.
                Our expertise in Shopify website development enables us to
                create online stores that draw in visitors and inspire
                confidence and loyalty. By prioritizing a hassle-free shopping
                experience, we utilize Shopify’s customization capabilities to
                design stores that differentiate your brand.We ensure that every
                element of your Shopify store, from product presentation and
                checkout process to inventory management and customer service,
                is optimized for efficiency and impact. Our goal is to help you
                achieve e-commerce success by providing a secure, engaging, and
                user-friendly online store that meets the demands of both your
                business and your customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 3*/}
      <div className="w-full my-16">
        <div className="max-w-6xl mx-auto flex flex-wrap">
          <div className="w-1/2">
            <h2 className="text-4xl text-slate-800 font-bold">
              Crafting Responsive Websites for All Devices
            </h2>
            <p className="text-gray-500 text-base my-4">
              A responsive website is not just an option; it’s a necessity in
              the digital business world. Our responsive web design services
              ensure your site looks and functions flawlessly on every device,
              from desktops to smartphones. We prioritize flexibility,
              accessibility, and user engagement by adopting a mobile-first
              design philosophy that adapts to the ever-changing screen sizes
              and resolutions.
              <br />
              <br />
              We craft responsive design so that your website can provide a
              consistent and engaging user experience, regardless of how your
              audience accesses it. These designs improve user satisfaction and
              contribute to better search engine rankings. Join us in creating a
              responsive website that is an accessible, user-friendly digital
              experience for everyone.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1725057993/pngwing.com-4_iuvw7g.png"
              alt="webdesign3"
              width={500}
              height={500}
              objectFit="contain"
              className="ml-auto"
            />
          </div>
        </div>
      </div>

      {/* Grow Business Section */}
      <BusinessSection
        subHeading="Custom Web Design and Marketing Solutions for Business Growth"
        isPhoneIcon={true}
        para="Boost your business with a customized website and digital marketing strategy! At Tech Craft, we’re home to seasoned designers, developers, and digital marketing experts who are focused on delivering results with excellence. Ready to reinforce your online presence and drive more traffic to your website? Let’s discuss. We are just a text away."
        btnText="(667) 423-5532"
      />

      {/* Portfolio Section*/}
      <div className="py-16 -z-50 bg-[#F9F9F9]">
        {/* Portfolio heading */}
        <div className="max-w-6xl mx-auto" data-aos="zoom-in">
          <h5 className="text-center text-2xl text-[#5114AE] font-extrabold mb-2">
            Our Portfolio
          </h5>

          <p className="text-center text-base text-[#687087]">
            We are a thriving eCommerce website design and Development Company
            working for customer satisfaction.
            <br />
            Look at our portfolio to comprehend our work!
          </p>
        </div>

        {/* <ScrollContainer /> */}
        <div className="max-w-[1400px] mx-auto flex flex-wrap my-16 justify-between">
          {eCommerce.map((imgSrc, i) => (
            <ThreeDCardDemo key={i} imgSrc={imgSrc} />
          ))}
        </div>

        <div className="flex items-center justify-center space-x-4">
          <GradientButton
            text="Let's Get Started"
            onClick={() => openModal(setIsModalOpen)}
          />
          <OutlineButton text="Chat With Us" />
        </div>
      </div>
      {/* ALL IN ONE COMBO SECTION */}
      <div>
        <AllInOneCombo />
      </div>

      {/* Testimonials section */}
      <div className="my-0 md:my-16">
        {/* Testimonials Heading */}
        <div className="mb-6 mt-16" data-aos="zoom-in">
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
};

export default WebDesign;
