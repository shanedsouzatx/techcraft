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
import LeadForm from "@/components/LeadForm";
import { OurServiceCard } from "@/components/OurServiceCard";
import {
  ecommerceMarketingBenefits,
  ecommerceServices1,
} from "@/data/services";
import AllInOneCombo from "@/components/AllInOneCombo";

const ECommerce = () => {
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
                Ecommerce Web Solutions
              </h2>
              <h1 className="text-2xl md:text-4xl font-semibold dark:text-white flex flex-col space-y-4 z-50 my-3">
                Your Comprehensive <br /> Ecommerce Development <br /> Partner
              </h1>
              <p className="max-w-2xl text-base md:text-base dark:text-neutral-200 z-50">
                In search of top-tier e-commerce web development? Meet Tech
                Craft, your trusted partner in e-commerce web development. We
                deliver outcomes that distinctly represent your business.
              </p>

              <div className="my-4">
                <div className="flex items-center space-x-4 mb-1">
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-52">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>User-friendly</span>
                  </div>
                  <div className="flex items-center gap-2  rounded-lg text-slate-600 w-52">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Functional</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-52">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Secure</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-52">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Ease of Access</span>
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
          {/* Form */}
          <div className="w-1/2 h-full flex items-center justify-end">
            <LeadForm />
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
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1725043737/e1-01-1024x1024_i4qvup.webp"
                alt="v-animation1"
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
                Crafting Your Online
                <br />
                Identity With Design That
                <br />
                Converts
              </h2>
              <p className="text-gray-500 text-base my-4">
                <span className="font-semibold">
                  Website Design and User Experience (UX)
                </span>
                <br />
                <br />
                In the digital marketplace, your website’s design and user
                experience speak volumes about your brand. At Tech Craft, we
                prioritize creating designs that catch the eye and facilitate a
                smooth and intuitive user journey. Our approach ensures that
                from the moment customers land on your page to the final
                checkout, their experience is smooth, enjoyable, and reflective
                of your brand’s essence. Get websites that bridge your brand and
                your audience, turning visitors into loyal customers through
                engaging design and effortless navigation.
                <br />
                <br />
                Our team of designers prioritizes the fine details that amplify
                your site’s usability, from responsive layouts that look
                stunning on any device to user interfaces that guide your
                visitors naturally through your product offerings. With Tech
                Craft, prepare for a beautiful website that performs
                brilliantly, enhancing your digital presence and customer
                interaction.
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
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1725043854/e2-01-1024x1024_nnmyou.webp"
                alt="v-animation2"
                width={500}
                height={500}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-4xl text-slate-800 font-bold">
                Simply Buying Experience
                <br />
                with Shopping Cart and
                <br />
                Checkout Process
              </h2>
              <p className="text-gray-500 text-base my-4">
                The heart of an e-commerce site’s success lies in a smooth
                shopping cart and checkout experience. Tech Craft specializes in
                developing straightforward, secure, and efficient checkout
                processes that encourage the completion of purchases. We reduce
                cart abandonment and boost sales by minimizing obstacles and
                optimizing speed. Our solutions are designed with the customer
                in mind, ensuring every step from selection to payment is as
                intuitive as possible.
                <br />
                <br />
                Integrating advanced features like saved carts, guest checkouts,
                and multiple payment options, we cater to diverse shopper
                preferences, making the buying process as accommodating as
                possible. Trust Tech Craft to refine your e-commerce site’s
                shopping cart and checkout flow to enrich user satisfaction and
                drive conversions.
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
              Simplify Payment <br /> Processing For Secure and <br /> Versatile
              Transactions
            </h2>
            <p className="text-gray-500 text-base my-4">
              In the e-commerce sphere, the ability to offer secure and
              versatile payment options can set your platform apart. At Tech
              Craft, we integrate the most reliable payment gateways into your
              website to ensure every transaction is seamless and secure. We
              prioritize providing customers with various payment methods, from
              credit cards and digital wallets to bank transfers to enrich their
              shopping experience and your brand’s credibility.
              <br />
              <br />
              Our team meticulously implements encryption and security protocols
              to protect sensitive information, giving your customers peace of
              mind while shopping. With Tech Craft, expect a payment system
              that’s not just about transactions but about building trust and
              loyalty with every purchase.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1725043970/e3-01-1024x1024_rznief.webp"
              alt="v-animation3"
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
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1725044344/e1-01-1024x894_yc6dy4.webp"
                alt="v-animation2"
                width={500}
                height={500}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-4xl text-slate-800 font-bold">
                Building Foundation of
                <br />
                Success With Robust
                <br />
                Backend Security
              </h2>
              <p className="text-gray-500 text-base my-4">
                The backbone of any e-commerce site is its back-end development
                and security measures. At Tech Craft, we understand the
                importance of a robust and scalable back-end infrastructure that
                supports your site’s front-end features and functionalities. Our
                developers build robust platforms that handle high traffic
                volumes and enormous data to ensure your site remains fast and
                responsive.
                <br />
                <br />
                Security is our top priority. We employ the latest encryption,
                secure data storage, and protection against cyber threats,
                safeguarding your business and customers’ information. Partner
                with Tech Craft for a back-end system that guarantees
                performance, reliability, and security to build the groundwork
                for your e-commerce success.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 5*/}
      <div className="w-full">
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex flex-wrap flex-row-reverse">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720820702/ecommerce-5_tjgy5m.webp"
                alt="v-animation1"
                width={500}
                height={500}
                objectFit="contain"
                className="ml-auto"
              />
            </div>
            <div className="w-1/2">
              <h5 className="text-2xl text-[#5114AE] font-bold z-50 mb-2">
                Ecommerce Marketing for Brands
              </h5>
              <h2 className="text-4xl text-slate-800 font-bold">
                Our Main Priority Is Your Success
              </h2>
              <p className="text-gray-500 text-base my-4">
                The difficulties that business owners face in e-commerce
                marketing include attracting the ideal clients, engaging your
                ideal prospects, and producing targeted traffic. We understand
                the complexity and requirements of the online company
                environment because we are a reputable e-commerce marketing
                agency. Because of this, we offer e-commerce solutions that are
                customized according to your needs and specification.
                <br />
                <br />
                <span className="text-sm">
                  To help your business in achieving their marketing objectives,
                  TechCraft uses different digital marketing strategies. We have
                  helped our e-commerce customers to achieve the expected result
                  by implementing proven optimization techniques:
                </span>
                <br />
                <br />
                <span className="text-sm">
                  Search Campaigns
                  <br />
                  Google Shopping Conversions
                  <br />
                  Organic Sales
                  <br />
                  Organic Sales
                  <br />
                  Click-Through Rates (CTRs)
                  <br />
                  Average Position
                  <br />
                  Website Traffic
                  <br /> Transactions year-over-year (YoY)
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Result Oriented Section1 */}
      <div className="mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-[#5114AE] font-bold text-center">
            Services for E-Commerce Marketing
          </h2>
          <h2 className="text-4xl text-slate-900 font-bold text-center mt-2">
            Improve Your Conversion Rate and Customer Loyalty
          </h2>

          {/* Card Section */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ecommerceServices1.map((el, idx) => (
              <OurServiceCard {...el} key={idx} />
            ))}
          </div>
        </div>
      </div>
      {/* Result Oriented Section2 */}
      <div className="mb-16 mt-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-[#5114AE] font-bold text-center">
            Reasons Your Business Needs E-Commerce Marketing
          </h2>
          <h2 className="text-4xl text-slate-900 font-bold text-center mt-2">
            Increase Brand Recognition and Drive Real Traffic to Your Online
            Store
          </h2>
          <p className="text-gray-500 text-sm mt-4 text-center">
            E-commerce is a permanent trend. Delivering an online consumer
            experience will help you overcome the competition. Use internet
            platforms for your power. To assure your success, our e-commerce
            marketing business develops a flexible and customer-focused
            e-commerce website marketing strategy.
          </p>
          <p className="text-gray-500 text-base mt-4 text-center font-semibold">
            With e-commerce digital marketing, you can:
          </p>
          {/* Card Section */}
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {ecommerceMarketingBenefits.map((el, idx) => (
              <OurServiceCard {...el} key={idx} />
            ))}
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

export default ECommerce;
