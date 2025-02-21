/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { Testimonials } from "@/components/Testimonials";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import { branding } from "@/data/porfolios";
import BannerSlider from "@/components/BannerSlider";
import BusinessSection from "@/components/BusinessSection";
import CountSection from "@/components/CountSection";
import Modal from "@/components/Modal/Modal";
import { closeModal, openModal } from "@/app/utils/HelperFunction";
import GradientButton from "@/components/GradientButton";
import OutlineButton from "@/components/OulineButton";
import { heroBgImgSrc, talkBg } from "@/constants/CloudinaryImgUrl";
import LeadForm from "@/components/LeadForm";
import { OurServiceCard } from "@/components/OurServiceCard";
import { brandingServices } from "@/data/services";

const Branding = () => {
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
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between h-full">
          {/* Content */}
          <div className="w-full md:w-1/2 h-full flex items-center">
            <div className="w-full px-4">
              <h2 className="text-[#5114AE] font-semibold text-xl md:text-2xl z-50">
                Illustration Designs
              </h2>
              <h1 className="text-2xl md:text-4xl font-semibold dark:text-white flex flex-col space-y-4 z-50 my-3">
                Brand Identity Development
              </h1>
              <p className="text-base text-gray-500 md:font-normal dark:text-neutral-200 z-50">
                <span className="font-semibold">
                  Create A Unique Identity That Speaks With Your Audience
                </span>
                <br />
                <br />
                Our Brand Identity Development service transforms your vision
                into a memorable brand. We focus on crafting logos, color
                schemes, and typography that reflect your core values and
                mission. With our expertise, your brand will connect deeply with
                your target market, building loyalty and recognition.
                <br />
                <br />
                In addition to visual elements, we will closely analyze your
                brand’s voice and messaging, ensuring consistency across all
                platforms. This holistic approach to Brand Identity Development
                guarantees that every touchpoint with your audience reinforces
                your brand’s essence. Our team collaborates closely with you to
                capture the spirit of your brand, transforming insights into a
                cohesive identity that speaks directly to the hearts of your
                customers.
              </p>

              <div className="my-4">
                <div className="flex flex-wrap mb-1">
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-full md:w-56 mb-2">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Drive Traffic</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-full md:w-56 mb-2">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Maximized ROI</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-full md:w-56 mb-2">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Qualified Leads</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-full md:w-56">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Optimized</span>
                  </div>
                </div>
              </div>
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
          <div className="mt-12 w-full h-full flex items-center justify-end px-4 md:w-1/2 md:px-0 md:mt-0">
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
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724961011/product-brand-building-corporate-identity-design-studio-designers-flat-characters-teamwork-cooperation-collaboration-company-name-concept-illustration_335657-1722_jycyqs.webp"
              alt="design1"
              width={500}
              height={500}
              objectFit="contain"
              className="mx-auto md:mx-0"
            />
          </div>
          {/* Text */}
          <div className="w-full md:w-1/2">
            <h5 className="text-xl md:text-2xl text-[#5114AE] font-semibold mb-3">
              BRANDING
            </h5>
            <h2 className="text-2xl md:text-4xl text-slate-800 font-bold mb-4">
              Get Lifetime Branding
              <br />
              Solutions And Be Focused To
              <br />
              Be Unique
            </h2>
            <p className="text-gray-500 text-sm md:text-base my-4">
              Most businesses do not know how to be a brand? And they stick with
              the standard logo design ideas on their business printings. By
              using our expert branding services, you can stay ahead of the
              competition because customers get to interact first with the
              designs. And we are experts in winning that first association. By
              our expert branding not only makes a memorable impression on
              consumers' minds but it tells your clients to know what to expect
              from your company.
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

      {/* TEXT IMAGE SECTION 2 */}
      <div className="w-full my-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start">
          {/* Text */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-4xl text-slate-800 font-bold mb-4">
              Good Branding Services Make Your Business Stand Out
            </h2>
            <p className="text-gray-500 text-sm md:text-base my-4">
              Now a days when everybody moves towards brand so every business
              need to create your own track and establish their own brand for
              this reason, they sell their products and services through which
              they find their targeted market. The start-up businesses need to
              establish their own brand and build their reputation in the
              market. So, TechCraft is here for your branding services which
              differentiate your business in a very unique way.
              <br />
              <br />
              We help your business in creating a different way so that you
              stand out, rather than following the crowd, running after
              marketing trends, and trying to get fit in. You may develop a
              unique brand identity that is easily recognizable and seems
              timeless by using our tools and passionate team. If you have the
              proper brand and marketing plan then you can create your own
              market that puts all focus on you rather than your competitor.
              With the support of our branding services, you can engage your
              target market in an authentic, compelling, and natural way.
              TechCraft experts generate an attractive typographic logo which
              not only looks good but also boost your brand image. A typography
              logo can play a great role in building brand image and awareness.
              This type of logo also expresses your business a lot as well as
              represent your product. Our experts provide best fonts and letter
              designs give off an up-scale and glamorous vibe.
            </p>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720655532/branding-2_dm72uz.png"
              alt="design2"
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
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start">
          {/* Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724961139/dms-01-1024x1024_cxz88w.webp"
              alt="design1"
              width={500}
              height={500}
              objectFit="contain"
              className="mx-auto md:mx-0"
            />
          </div>
          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-4xl text-slate-800 font-bold mb-4">
              Branding Services We Offer
            </h2>
            <p className="text-gray-500 text-sm md:text-base my-4">
              The advancement of digital technology has given your brand
              unlimited flexibility and the ability to access new markets. Our
              branding services use technology to polish the image of your
              business. Through our good branding services, it is possible to
              develop a company culture that attracts to customers and clients.
              <br />
              <br />
              <span className="text-base text-slate-700 font-bold">
                Service for branding include:
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Result Oriented Section */}
      <div className="my-0 md:my-16 px-4">
        <div className="max-w-6xl mx-auto">
          {/* Card Section */}
          <div className="flex flex-wrap md:justify-between">
            {/* Card Section */}
            {brandingServices.map((el, idx) => (
              <OurServiceCard {...el} key={idx} />
            ))}
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 4 */}
      <div className="w-full my-16 px-4 md:px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start">
          {/* Text */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-2xl md:text-4xl text-slate-800 font-bold mb-4">
              Understanding Your Brand Allows Us To Sell Your
              <br />
              Business
            </h2>
            <p className="text-gray-500 text-sm md:text-base my-4">
              Working with a branding agency has the advantage of making you
              feel as though you are working with your peers. At TechCraft, we
              establish a connection that enables us to become deeply familiar
              with your business. We spend time to finding out about your
              company's operations, team members, and future plans. We identify
              the unique aspects of your brand that engage with your target
              market.
              <br />
              <br />
              Additionally, we conduct extensive research on your business,
              looking closely at consumer trends, company ideas, goods &
              services, technical terms and of course, your competitors. We can
              communicate with your clients more effectively just because we
              know about your industry. Our research-based approach effectively
              takes your brand to the upper level.
            </p>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720656327/branding-4_bolirf.jpg"
              alt="design2"
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
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start">
          {/* Image */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720655640/branding-3_a7eili.png"
              alt="design1"
              width={510}
              height={510}
              objectFit="contain"
              className="mx-auto md:mx-0"
            />
          </div>
          {/* Text */}
          <div className="w-full md:w-1/2">
            <h2 className="text-2xl md:text-4xl text-slate-800 font-bold mb-4">
              Assisting In The Entire
              <br />
              Branding Process
            </h2>
            <p className="text-gray-500 text-sm md:text-base my-4">
              You may not know the best colors for your brochure, flyers,
              t-shirt, poster, book cover designs, and how to get the design to
              produce impressions and energy to get in touch with you. And here
              we come to help you cater to your branding needs. We are the top
              branding agency in the USA understanding your business and
              delivering you quality branding services.
              <br />
              <br />
              With ‘TechCraft’ branding services, you will have the access to
              industry branding experts who are committed to enhancing your
              consumer’s experiences more than just seeing your stationery
              designs. We will assess you thought out the process to build your
              business as a brand and bring your goals and dreams to reality.
              <br />
              <br />
              There is no perfect time to start your business. As we don’t
              settle for less, we don’t design the branding strategy that is not
              attaining success in the future. We make sure that we help you in
              your mission forward. More impressions, more connections, and more
              leads. So, what do you require to create brand awareness? We’d be
              delighted to discuss them with you.
              <br />
              <br />
              Our branding experts will analyze your business history and your
              visions about the impacts you are trying to hit. In this way, we
              will be able to pour your aspirations into designing a complete
              brand for you.
              <br />
              We design everything you are looking for in your branding project.
              With constant dialogues and suggestions, we will come up with
              something inspiring.
              <br />
              We always consider your honest feedback and make changes and edits
              you need. For all the possible scenarios you have in mind, we
              cater to most of them in the right direction.
            </p>
          </div>
        </div>
      </div>

      {/* Grow Business Section */}
      <BusinessSection
        heading="Let us help you in creating your online presence"
        subHeading=" Web Design Consultant"
        para="Our team of web experts will help you with your goal of developing
              a website and will give you all the technical advice in making it
              engaging and relevant for your business."
        btnText="Let's Get Started"
      />

      {/* Portfolio Section*/}
      <div className="py-16 -z-50 bg-[#F9F9F9]">
        {/* Portfolio heading */}
        <div className="max-w-6xl mx-auto" data-aos="zoom-in">
          <h5 className="text-center text-2xl text-[#5114AE] font-semibold">
            Showcase of Success
          </h5>
          <p className="px-2 text-center text-sm md:text-base text-[#687087] mt-3 md:px-0 md:max-w-6xl md:mx-auto">
            Why rely solely on what we say? Explore our successful portfolio and
            see the excellence for yourself.
            <br />
            Our team brings your creative ideas to life by crafting web designs
            that speak volumes of our creativity and expertise.
          </p>
        </div>

        {/* Portfolio Content */}
        <div className="max-w-[1400px] mx-auto flex flex-wrap my-8 md:my-16 px-4 md:px-0 justify-center md:justify-between">
          {branding.map((imgSrc, i) => (
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

      {/* Lets Talk Section */}
      <div
        className="w-full bg-no-repeat bg-cover"
        style={{
          backgroundImage: `url(${talkBg})`,
        }}
      >
        <div className="max-w-6xl mx-auto py-14 px-4 md:px-8">
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            {/* GIF Image */}
            <div className="w-full mb-8 md:mb-0 flex justify-center">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720657546/cta-gif_qytgw0.gif"
                alt="talk-gif"
                width={350}
                height={350}
                objectFit="contain"
              />
            </div>
            {/* Text and Buttons */}
            <div className="w-full text-center">
              <h3 className="text-3xl md:text-4xl text-slate-950 font-bold mb-4">
                Let's Talk
              </h3>
              <p className="text-gray-500 text-base mb-6">
                Let us know how we can assist you with your business goals.
                <br />
                Let’s sort them out together
              </p>
              <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-4 mb-6">
                <GradientButton
                  text="Let's Get Started"
                  onClick={() => openModal(setIsModalOpen)}
                />
                <OutlineButton text="Chat With Us" />
              </div>
              <div className="flex justify-center">
                <a
                  href="tel:(667) 423-5532"
                  className="text-2xl md:text-3xl text-[#5114AE] font-normal"
                >
                  (667) 423-5532
                </a>
              </div>
            </div>
            {/* Phone Image */}
            <div className="w-full flex justify-center">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720657761/place-telephone_kpno5y.png"
                alt="phone-icon"
                width={200}
                height={200}
                objectFit="contain"
              />
            </div>
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

export default Branding;
