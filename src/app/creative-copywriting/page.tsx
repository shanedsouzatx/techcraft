/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { Testimonials } from "@/components/Testimonials";
import BannerSlider from "@/components/BannerSlider";
import { heroBgImgSrc } from "@/constants/CloudinaryImgUrl";
import CountSection from "@/components/CountSection";
import GradientButton from "@/components/GradientButton";
import OutlineButton from "@/components/OulineButton";
import LeadForm from "@/components/LeadForm";
import { copywritingServices1, copywritingServices2 } from "@/data/services";
import { OurServiceCard } from "@/components/OurServiceCard";
import { closeModal, openModal } from "../utils/HelperFunction";
import Modal from "@/components/Modal/Modal";

const CreativeCopywriting = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section>
      {/* Hero Section */}
      <div
        className="pt-36 pb-16 bg-no-repeat bg-cover md:pt-48 md:pb-32"
        style={{
          backgroundImage: `url(${heroBgImgSrc})`,
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between h-full">
          {/* Content */}
          <div className="w-full md:w-1/2 h-full flex items-center">
            <div className="w-full px-4">
              <h2 className="text-[#5114AE] font-semibold text-xl md:text-2xl z-50">
                Creative Copywriting
              </h2>
              <h1 className="text-2xl md:text-4xl font-semibold dark:text-white flex flex-col space-y-4 z-50 my-3">
                Providing experiences
                <br /> that go above and
                <br /> beyond expectations!
              </h1>
              <p className="text-base md:text-base dark:text-neutral-200 z-50">
                We create engaging material that may connect with readers and
                influence them. We create the best-selling copies that get
                results with a team of content writing experts. Our creative
                content have the following qualities:
              </p>

              <div className="my-4">
                <div className="flex flex-wrap mb-1">
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-full md:w-52 mb-2">
                    <FaRegCheckCircle size={15} color="#115791" />
                    <span>Result-driven</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-full md:w-52 mb-2">
                    <FaRegCheckCircle size={15} color="#115791" />
                    <span>Insightful</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-full md:w-52 mb-2">
                    <FaRegCheckCircle size={15} color="#115791" />
                    <span>High quality</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-full md:w-52">
                    <FaRegCheckCircle size={15} color="#115791" />
                    <span>Versatile</span>
                  </div>
                </div>
              </div>
              {/* ORM ICONS */}
              <div className="flex items-center gap-4 mt-2 z-50">
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
          <div className="w-full md:w-1/2 h-full flex items-center justify-end px-4 md:px-0 mt-12 md:mt-0">
            <LeadForm />
          </div>
        </div>
      </div>

      {/* Slider */}
      <BannerSlider />
      {/* TEXT IMAGE SECTION 1 */}
      <div className="w-full my-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center flex-wrap">
          {/* Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-start">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720724733/writing-1_k7ufeo.png"
              alt="creative-copywriting1"
              width={500}
              height={500}
              objectFit="contain"
              className="mx-auto md:mx-0"
            />
          </div>
          {/* Text Content */}
          <div className="w-full md:w-1/2 md:pl-8 flex flex-col items-start">
            <h5 className="text-xl md:text-2xl text-[#5114AE] font-semibold mb-3">
              Content Writing
            </h5>
            <h2 className="text-3xl md:text-4xl text-slate-800 font-bold">
              Give Words to Your Thoughts
            </h2>
            <p className="text-gray-500 text-sm md:text-base my-4">
              We write your ideas into words by giving a proper sequence.
              Utilize the content writing services of TechCraft Digital
              Marketing Agency to produce high-quality content that converts and
              generates more organic search traffic. Our content writing
              services conduct keyword research, content strategy development,
              content creation, and content marketing on the backend to support
              you in reaching new populations and establishing your brand in
              your particular niche market.
            </p>
            <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-3 md:space-y-0 mt-8 w-full">
              <GradientButton
                text="Let's Get Started"
                onClick={() => openModal(setIsModalOpen)}
              />
              <OutlineButton text="Chat With Us" />
            </div>
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 2 */}
      <div className="w-full my-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center flex-wrap">
          {/* Text Content */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex flex-col items-start">
            <h5 className="text-xl md:text-2xl text-[#5114AE] font-semibold mb-3 ">
              What Exactly Is Content Writing?
            </h5>
            <h2 className="text-2xl md:text-4xl text-slate-800 font-bold">
              Develop Trust with Your Target Audience by Engaging Them
            </h2>
            <p className="text-gray-500 text-sm md:text-base my-4">
              Many businesses struggle to build their brand and stay competitive
              as more businesses use online marketing and compete on digital
              platforms. By producing quality content and making continuous
              efforts at content marketing, you may show your knowledge in your
              industry and stand out in the competitive digital market.
              <br />
              <br />
              Content Writing is basically the method involved with outlining
              the thoughts and creating website content that meets Search Engine
              Optimization (SEO) standards. For websites who accurately
              represent their brand or services, they need high-quality SEO
              content. We provide descriptive, creative, clear, and SEO-friendly
              content for your websites if you want your website to promote your
              favorable brand image and meet your sales targets. We are here to
              serve you.
              <br />
              <br />
              In order to engage your audience and drive clients through your
              sales funnel, you should also improve your content marketing
              activities.
            </p>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720725186/writing-2_q131ir.jpg"
              alt="creative-copywriting1"
              width={530}
              height={530}
              objectFit="contain"
              className="mx-auto md:ml-auto"
            />
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 3 */}
      <div className="w-full my-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center flex-wrap">
          {/* Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-start">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720725451/writing-3_j3fmko.png"
              alt="copywriting3"
              width={500}
              height={500}
              objectFit="contain"
              className="mx-auto md:mx-0"
            />
          </div>
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start">
            <h2 className="text-2xl md:text-4xl text-slate-800 font-bold">
              Websites Need Unique Content
            </h2>
            <p className="text-gray-500 text-sm md:text-base my-4">
              The two main audiences for whom most businesses write their web
              content:
              <br />
              <br />
              • Search Engine Crawlers
              <br />
              • Potential Customers
              <br />
              <br />
              There is a huge gap among what those two audiences expected,
              although search engines have advanced significantly and are really
              close to replicating individual searchers' expectations.
              <br />
              <br />
              Both audiences now demand excellent content that is innovative,
              engaging, informative and properly covers the topics that visitors
              were searching for when they came to your page. The amount of
              quality of your content affects how long visitors stay on your
              website, how many pages they view and when they leave right away.
              All of this is now taken into consideration by search engines they
              allowing them to match the behaviors of your targeted consumers.
            </p>
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 4 */}
      <div className="w-full my-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center flex-wrap">
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h2 className="text-2xl md:text-4xl text-slate-800 font-bold">
              Content that Boosts Your Marketing
            </h2>
            <p className="text-gray-500 text-sm md:text-base my-4">
              Marketing is designed to boost website visitors. Your website's
              content needs to be appealing to the visitors you've attracted
              there and convey a clear message. We require material to
              complement your social media marketing and content marketing
              strategies, to put it simply.
              <br />
              <br />
              This is how our content writing services were created. When you
              purchase our content writing services, our professionals ask you
              to describe how your content fits into your customer’s journey so
              we make sure that it will perfect and also aligns.
              <br />
              <br />
              TechCraft Content consistently exceeds our expectations and
              delivers top quality content on time. Our content writing must
              meet the following standards:
              <br />
              <br />
              • SEO Optimized
              <br />
              • 100% Unique
              <br />
              • High Quality
              <br />• Research Proficient
            </p>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720725815/writing-4_puxnwq.png"
              alt="copywriting4"
              width={500}
              height={500}
              objectFit="contain"
              className="mx-auto md:ml-auto"
            />
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 5 */}
      <div className="w-full my-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start flex-wrap">
          {/* Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0 flex justify-center md:justify-start">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720726138/writing-5_qaumm1.png"
              alt="copywriting5"
              width={510}
              height={510}
              objectFit="contain"
              className="mx-auto md:mx-0"
            />
          </div>
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h2 className="text-2xl md:text-4xl text-slate-800 font-bold">
              Content and SEO.
            </h2>
            <h5 className="text-sm md:text-base mt-2 font-semibold text-gray-500">
              Your Click-Through Rate Will Increase When You Show Up in Relevant
              Search Results.
            </h5>
            <p className="text-gray-500 text-sm md:text-base my-4">
              SEO and content marketing are often seen as 2 separate techniques
              by marketers. Inversely, Search Engine Optimization (SEO) and
              content optimization are related fields with a same objective of
              providing the best solution to the information needs by online
              users.
              <br />
              <br />
              Consider content marketing and SEO as 2 overlapping digital
              marketing strategies. A content development strategy focuses on
              producing high-quality web content that is useful to both online
              users as well as search engines. On the other side, SEO focuses on
              content optimization and your website's more technical features,
              like page speed and keyword formation and research.
              <br />
              <br />
              Similar to building a house without a base, SEO without website
              content is useless. Without useful website content, it is not
              possible to attract website users and improve the quality of your
              site traffic. Similar if you don't have a clear content marketing
              SEO strategy, your efforts at writing web content will be
              worthless.
              <br />
              <br />
              SEO and content optimization must work together to achieve digital
              success. Have more queries regarding SEO keyword research and
              content SEO integration? Let our content marketing agency
              demonstrate to you how to use content for SEO to increase your
              website's organic traffic and conversions.
              <br />
              <br />
              • SEO Optimized
              <br />
              • 100% Unique
              <br />
              • High Quality
              <br />• Research Proficient
            </p>
          </div>
        </div>
      </div>

      {/* Result Oriented Section1 */}
      <div className="mb-16">
        <div className="px-4 max-w-6xl mx-auto md:px-0">
          <h2 className="text-2xl text-[#5114AE] font-bold text-center md:text-3xl">
            The Procedure For Creating SEO Content
          </h2>
          <h2 className="text-base text-slate-900 font-semibold text-center mt-2 md:text-2xl">
            A System That Is Simple and Works for You.
          </h2>
          <p className="text-sm text-gray-500 mt-4 text-center md:text-base">
            Our content marketing agency is aware that producing SEO content
            needs close client and content marketing professional coordination.
            We know our clients best, therefore even though we know how to
            target search engines and the online network, we want you to be as
            involved as you like while we develop your SEO content.
          </p>

          {/* Card Section */}
          <div className="flex flex-wrap md:justify-between">
            {/* Card Section */}
            {copywritingServices1.map((el, idx) => (
              <OurServiceCard {...el} key={idx} />
            ))}
          </div>
        </div>
      </div>
      {/* Result Oriented Section2 */}
      <div className="mt-20 mb-16 md:mt-24">
        <div className="px-4 max-w-6xl mx-auto md:px-0">
          <h2 className="text-2xl text-[#5114AE] font-bold text-center md:text-3xl">
            Content Types That We Offer
          </h2>
          <h2 className="text-base text-slate-900 font-semibold text-center mt-2 md:text-2xl">
            Use a digital strategy that speaks to your audience directly
          </h2>

          {/* Card Section */}
          <div className="flex flex-wrap md:justify-between">
            {/* Card Section */}
            {copywritingServices2.map((el, idx) => (
              <OurServiceCard {...el} key={idx} />
            ))}
          </div>
        </div>
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

export default CreativeCopywriting;
