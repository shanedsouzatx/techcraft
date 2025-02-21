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

const WordpressDevelopment = () => {
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
                Wordpress Web Development
              </h2>
              <h1 className="text-2xl md:text-4xl font-semibold dark:text-white flex flex-col space-y-4 z-50 my-3">
                Grow Your Online Presence <br /> with Expert WordPress <br />
                Development
              </h1>
              <p className="max-w-2xl text-base md:text-base dark:text-neutral-200 z-50 py-1">
                At Tech Craft we deliver top-notch WordPress solutions and
                specialize in developing visually appealing and functionally
                rich WordPress sites to ensure your online platform mirrors the
                quality and values of your brand.
              </p>

              {/* ORM ICONS */}
              <div className="flex items-center gap-4 pt-5 z-50">
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
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1725057586/w2_ga2ozd.webp"
              alt="wordpress-heroimg"
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
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1725060301/wpd2-01-1-1024x1024_ubhxvy.webp"
                alt="wordpress1"
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
                WordPress Theme Development: Tailor-Made for Your Brand
              </h2>
              <p className="text-gray-500 text-base my-4">
                Our WordPress Theme Development service is all about creating a
                visual language for your website that perfectly aligns with your
                brand identity. We dive deep into the essence of your business
                to design themes that are not only visually stunning but also
                incredibly functional. With a keen priority on user experience,
                our custom themes ensure your site is intuitive, responsive, and
                engaging for all visitors, regardless of their device.
                <br />
                <br />
                Every detail matters in theme development. From color schemes
                and typography to layout and widget placements, our team crafts
                every element to enhance your website’s appeal and performance.
                Partner with us for a WordPress theme that truly reflects your
                brand and strengthens your online presence.
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
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1725060472/wpd-01-1024x1024_mneckl.webp"
                alt="wordpress2"
                width={500}
                height={500}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-4xl text-slate-800 font-bold">
                WordPress Plugin
                <br />
                Development For
                <br />
                Extending Functionality
              </h2>
              <p className="text-gray-500 text-base my-4">
                In WordPress Plugin Development, we specialize in extending your
                website’s functionality to meet your business needs. Custom
                plugins can transform your site, adding unique features and
                capabilities that optimize user experience and backend
                management. Whether you need to improve SEO, enhance security,
                or integrate social media, our custom solutions are designed to
                plug into your WordPress site smoothly.
                <br />
                <br />
                Our development begins with understanding your goals and
                deploying high-quality, secure plugins that integrate smoothly,
                ensuring your site runs efficiently and effectively. By choosing
                our plugin development service, you opt for a tailored procedure
                that enhances your WordPress site’s functionality and user
                engagement.
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
              Custom WordPress Solutions
            </h2>
            <p className="text-gray-500 text-base my-4">
              Custom WordPress Development isn’t just about building a website;
              it’s about crafting a digital environment that perfectly aligns
              with your brand’s ethos and objectives. Our team specializes in
              creating WordPress sites beyond the generic, delivering
              functionality and aesthetics designed explicitly for your
              business. From unique feature sets to custom workflows, we ensure
              your site supports your operations, engages your audience, and
              drives your mission forward.
              <br />
              <br />
              We deeply evaluate your business model, audience insights, and
              competitive domain to ensure every pixel and line of code
              contributes to your strategic goals. We build responsive,
              fast-loading, and secure websites that look exceptional on all
              devices and rank well on search engines, amplifying your digital
              footprint and connecting you with your target audience more
              effectively.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1725060558/wordpress-solutions_bajlid.webp"
              alt="wordpress3"
              width={500}
              height={500}
              objectFit="contain"
              className="ml-auto"
            />
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 4*/}
      <div className="w-full">
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1725060754/wd2-01-1024x1024_ne1ghw.webp"
                alt="wordpress4"
                width={500}
                height={500}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-4xl text-slate-800 font-bold">
                Seamless Connections
                <br />
                with Advanced API
                <br />
                Integrations
              </h2>
              <p className="text-gray-500 text-base my-4">
                API Integration and Development are critical to enhancing
                website functionality and user experience in the digital age.
                Our service bridges your WordPress site with other software and
                platforms, opening up a world of possibilities for automation,
                data exchange, and feature expansion. From integrating CRM
                systems and social networks to payment processors and marketing
                tools, we tailor each integration to ensure seamless operation
                and enhance the utility of your WordPress site.
                <br />
                <br />
                API development and integration experts create custom
                connections for optimizing workflows and improving user
                interactions. By enabling your site to communicate efficiently
                with external services, we help you offer more to your
                users—more features, more efficiency, and more reasons to choose
                you. Let our API integration services transform your WordPress
                site into a powerful hub that supports your business in the
                interconnected online ecosystem.
              </p>
            </div>
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

export default WordpressDevelopment;
