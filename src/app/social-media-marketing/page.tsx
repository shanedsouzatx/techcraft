/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { Testimonials } from "@/components/Testimonials";
import MiddleBannerSection from "@/components/MiddleBannerSection";
import BannerSlider from "@/components/BannerSlider";
import { heroBgImgSrc } from "@/constants/CloudinaryImgUrl";
import CountSection from "@/components/CountSection";
import PricingSection from "@/components/PricingSection";
import LeadForm from "@/components/LeadForm";
import { OurServiceCard } from "@/components/OurServiceCard";
import { socialMediaMarketingServices } from "@/data/services";
import GradientButton from "@/components/GradientButton";
import OutlineButton from "@/components/OulineButton";
import { closeModal, openModal } from "../utils/HelperFunction";
import Modal from "@/components/Modal/Modal";

const SocialMediaMarketing = () => {
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
                Social Media Marketing
              </h2>
              <h1 className="text-2xl md:text-4xl font-semibold dark:text-white flex flex-col space-y-4 z-50 my-3">
                Turn Social Interactions into
                <br />
                Customers With SMM Services
              </h1>
              <p className="max-w-2xl text-base md:text-base dark:text-neutral-200 z-50">
                Engage, connect, and grow with targeted social media campaigns
                strategized by Tech Craft: Turn every post, tweet, and share
                into an opportunity for growth. Build meaningful connections,
                foster communities around your brand, and convert interest into
                action. With data-driven insights and creative storytelling, we
                tailor your social media strategy to meet your audience where
                they are most active and engaged.
              </p>

              <div className="my-4">
                <div className="flex items-center space-x-4 mb-1">
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-52">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Appropriate platform</span>
                  </div>
                  <div className="flex items-center gap-2  rounded-lg text-slate-600 w-52">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Competitive strategy</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-52">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Innovative</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-52">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span> Result-driven</span>
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
        <div className="w-full mt-16">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center flex-row-reverse">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1725040520/o3-01-1024x1024_mb7evv.webp"
                alt="v-animation1"
                width={500}
                height={500}
                objectFit="contain"
                className="ml-auto"
              />
            </div>
            <div className="w-1/2">
              {/* <h5 className="text-2xl text-[#5114AE] font-semibold z-50 mb-3">
                Social Media Marketing
              </h5> */}
              <h2 className="text-4xl text-slate-800 font-bold">
                Forge Connections, Fuel
                <br />
                Growth With Targeted Social
                <br />
                Media Strategy
              </h2>
              <p className="text-gray-500 text-base my-4">
                A robust social media strategy that amplifies your brand’s voice
                and connects with your audience on a personal level. Our SMM
                services are designed to map out a clear path to engagement,
                leveraging insights and analytics to craft campaigns that
                resonate with your target demographic. With a focus on
                meaningful interactions, we help you build a community around
                your brand, turning followers into loyal customers.
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
      </div>

      {/* TEXT IMAGE SECTION 2*/}
      <div className="w-full">
        <div className="w-full">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1725040925/o1-01-1024x1024_vxerrf.webp"
                alt="v-animation1"
                width={500}
                height={500}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              {/* <h5 className="text-2xl text-[#5114AE] font-semibold z-50 mb-3">
                How to Market on Social Media
              </h5> */}
              <h2 className="text-4xl text-slate-800 font-bold">
                Convert Engagement into
                <br />
                Action
              </h2>
              <p className="text-gray-500 text-base my-4">
                Reinforce your brand with social media strategies that do more
                than just gather likes—they drive results. From content creation
                to community management, our approach ensures every post, tweet,
                and share contributes to your broader business objectives.
                Unlock the power of social media to increase visibility, enhance
                customer loyalty, and boost your bottom line.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 3*/}
      <div className="w-full">
        <div className="w-full">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap flex-row-reverse">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1725041073/o2-01-1024x1012_jmidyp.webp"
                alt="v-animation1"
                width={500}
                height={500}
                objectFit="contain"
                className="ml-auto"
              />
            </div>
            <div className="w-1/2">
              {/* <h5 className="text-2xl text-[#5114AE] font-semibold z-50 mb-3">
                Services for Business Social Media Marketing
              </h5> */}
              <h2 className="text-4xl text-slate-800 font-bold">
                Content Creation That Tells
                <br />
                Your Brand Story
              </h2>
              <p className="text-gray-500 text-base my-4">
                Make your audience feel heard and answered. Our content
                creation’s goal is not only to inform audiences but also to
                stimulate their emotions, consulting their problems and guiding
                them to build a better brand. Get social media services that are
                marketing savvy, producing posts that engage, inform, and
                entertain. Whether it’s eye-catching visuals, compelling video,
                or captivating copy, we deliver content that grabs attention and
                doesn’t miss any chance.
                <br />
                <br />
                Stay ahead in the dynamic world of social media with our
                full-service management solutions. We take the helm of your
                social media presence, from crafting a consistent posting
                schedule to engaging with your audience in real time. Our
                management services free you up to focus on your business while
                we ensure your social media channels are active, engaging, and
                aligned with your brand goals.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 4*/}
      <div className="w-full">
        <div className="w-full mt-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1725041200/happy-tiny-business-people-dancing-having-fun-drinking-wine-corporate-party-team-building-activity-corporate-event-idea-concept-pinkish-coral-bluevector-isolated-illustration_335657-1414-1_ripp5r.webp"
                alt="v-animation1"
                width={500}
                height={500}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-4xl text-slate-800 font-bold">
                Turn Scrollers into Followers
                <br />
                and Followers into
                <br />
                Customers
              </h2>
              <p className="text-gray-500 text-base my-4">
                Make every piece of content count. We specialize in creating
                social media content that aligns with your brand values and
                speaks directly to your audience’s needs and interests. By
                telling your brand’s story in a way that resonates with users,
                we help you build stronger relationships and drive engagement
                that leads to conversion.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 5*/}
      <div className="w-full">
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap flex-row-reverse">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1725041472/digital-marketing-online-advertising-smm-app-notification-chatting-texting-viral-content-internet-meme-creation-mass-shared-content-concept-illustration_335657-2585_j2yy4k.webp"
                alt="v-animation1"
                width={500}
                height={500}
                objectFit="contain"
                className="ml-auto"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-4xl text-slate-800 font-bold">
                Social Media
                <br />
                AdvertisingThat Target,
                <br />
                Engage, Achieve
              </h2>
              <p className="text-gray-500 text-base my-4">
                Cut through the noise with social media advertising that hits
                the mark. Our advertising services hone in on your ideal
                audience, using refined targeting techniques to deliver your
                message to those most likely to engage. From crafting compelling
                ad copy to optimizing campaigns for peak performance, we ensure
                your advertising budget delivers maximum ROI.
                <br />
                <br />
                Upgrade your advertising strategy with campaigns designed to
                achieve your specific marketing goals. Even if you want to
                increase brand awareness, boost sales, or engage with a new
                demographic, our social media advertising solutions are tailored
                to meet your needs. Let us help you navigate the ever-changing
                ecosystem of social media ads, turning clicks into customers.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Result Oriented Section */}
      <div className="mb-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-[#5114AE] font-bold text-center">
            How Our Experts Work
          </h2>

          {/* Card Section */}
          <div className="flex flex-wrap md:justify-between">
            {/* Card Section */}
            {socialMediaMarketingServices.map((el, idx) => (
              <OurServiceCard {...el} key={idx} />
            ))}
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 5*/}
      <div className="w-full">
        <div className="w-full mt-28 mb-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720823762/media-4_kj8092.jpg"
                alt="v-animation1"
                width={500}
                height={500}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h5 className="text-2xl text-[#5114AE] font-semibold z-50 mb-3">
                Social Media Marketing Platforms
              </h5>
              <h2 className="text-4xl text-slate-800 font-bold">
                Let Us Help You to Increase Your Online Presence
              </h2>
              <p className="text-gray-500 text-base my-4">
                Businesses now frequently use social media platforms to find new
                clients. The advantage is that you may use social media to find
                clients in a wide range of industries. We use different social
                media marketing platforms like; Facebook, Twitter, LinkedIn,
                Instagram, YouTube, Pinterest, Snapchat, TikTok etc.
                <br />
                <br />
                <span className="text-sm">
                  However, choosing the best social media platform for your
                  company can be challenging due to the large number of options
                  available. So for this our experts are here which guide you
                  about which platform is best for your business.
                </span>
                <br />
                <br />
                <span className="text-sm">
                  We know which social media platforms are more suitable for
                  your business marketing than others. Using the right social
                  media platform is important for you target audience because
                  through this you can hit a right target audience which
                  automatically boost your sales and expend your business.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Middle Banner Section */}
      <div>
        <MiddleBannerSection
          heading="To customize a package,"
          subHeading="Connect with one of our experts now"
        />
      </div>

      {/* Pricing Section */}
      <PricingSection />

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

export default SocialMediaMarketing;
