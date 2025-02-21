/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { Testimonials } from "@/components/Testimonials";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import { illustration } from "@/data/porfolios";
import BannerSlider from "@/components/BannerSlider";
import BusinessSection from "@/components/BusinessSection";
import CountSection from "@/components/CountSection";
import Modal from "@/components/Modal/Modal";
import { heroBgImgSrc } from "@/constants/CloudinaryImgUrl";
import { closeModal, openModal } from "@/app/utils/HelperFunction";
import GradientButton from "@/components/GradientButton";
import OutlineButton from "@/components/OulineButton";
import LeadForm from "@/components/LeadForm";

const VideoAnimation = () => {
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
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row  justify-between h-full px-4 md:px-0">
          {/* Content */}
          <div className="w-full md:w-1/2 h-full flex items-center mb-8 md:mb-0">
            <div className="w-full">
              <h2 className="text-[#5114AE] font-semibold text-xl md:text-2xl z-50">
                Video animation
              </h2>
              <h1 className="text-2xl md:text-4xl font-semibold dark:text-white flex flex-col space-y-4 z-50 my-3">
                Bring Messages to Dynamic Life
                <br />
                With Typography Animation
              </h1>
              <p className="text-base text-gray-500 md:font-normal dark:text-neutral-200 z-50">
                <span className="font-semibold">
                  Transform Words into Visual Stories with Typography Animation
                </span>
                <br />
                <br />
                Capture your audience’s imagination by turning static text into
                engaging visual narratives. Typography animations are perfect
                for making an impactful statement in your digital content,
                ensuring your message is seen and remembered. Ideal for
                enhancing social media posts, website engagement, and
                promotional materials, these animations command attention and
                deliver your message with creativity and style.
                <br />
                <br />
                <span className="font-semibold">
                  Animate Your Words for Intensfied Impact
                </span>
                <br />
                <br />
                Amplify your brand’s messaging with the art of typography
                animation. Tailored to fit your campaign needs, these animations
                make your text move with purpose, enhancing message retention
                and engagement. Indulge in a world where words play and dance
                across the screen, leaving an eternal impression on your
                audience.
              </p>

              <div className="my-4">
                <div className="flex flex-wrap gap-1 mb-1">
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-full md:w-52">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Drive Traffic</span>
                  </div>
                  <div className="flex items-center gap-2  rounded-lg text-slate-600 w-full md:w-52">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Maximized ROI</span>
                  </div>
                  <div className="flex items-center gap-2  rounded-lg text-slate-600 w-full md:w-52">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Qualified Leads</span>
                  </div>
                  <div className="flex items-center gap-2  rounded-lg text-slate-600 w-full md:w-52">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Powerful Strategies</span>
                  </div>
                  {/* <div className="flex items-center gap-2  rounded-lg text-slate-600 w-full">
                    <FaRegCheckCircle size={15} color="#38ada9" />
                    <span>Competitive advantage</span>
                  </div> */}
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
          <LeadForm />
        </div>
      </div>
      {/* Slider */}
      <BannerSlider />
      {/* TEXT IMAGE SECTION 1 */}
      <div className="w-full my-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center flex-wrap">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724963993/a1-1024x1024_oeplzw.jpg"
              alt="v-animation1"
              width={500}
              height={500}
              objectFit="contain"
              className="mx-auto md:ml-auto"
            />
          </div>
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            {/* <h5 className="text-xl md:text-2xl text-[#5114AE] font-semibold mb-3">
              Video Animation
            </h5> */}
            <h2 className="text-3xl md:text-4xl text-slate-800 font-bold">
              Bring Your Creative Concepts in Motion
            </h2>
            <p className="text-gray-500 text-sm md:text-base my-4 md:my-6">
              <span className="font-semibold">
                Stir Imagination with Compelling Motion Graphics
              </span>
              <br />
              <br />
              Blend graphic design with cinematic animation to craft motion
              graphics that engagingly tell your story. Perfect for breaking
              down complex ideas or adding a dash of elegance to your brand’s
              presentation, motion graphics transform your message into an
              immersive experience. They’re ideal for everything from website
              animations to social media content, offering a visually appealing
              way to communicate with your audience.
              <br />
              <br />
              <span className="font-semibold">
                Advance Content with Dynamic Motion Graphics
              </span>
              <br />
              <br />
              Stay unique in the digital world by incorporating motion graphics
              into your marketing strategy. Custom-designed to align with your
              brand’s aesthetic and goals, these animations capture and hold the
              viewer’s attention from start to finish. Engage and inform your
              audience with motion graphics that do more than just look
              good—they communicate effectively.
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
      <div className="w-full my-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center flex-wrap">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724964365/a4-01-1024x1024_tiqmet.webp"
              alt="v-animation2"
              width={500}
              height={500}
              objectFit="contain"
              className="mx-auto md:mx-0"
            />
          </div>
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl text-slate-800 font-bold">
              Spotlight Your Brand's Mission With Corporate Videos
            </h2>
            <p className="text-sm md:text-base text-gray-500 my-4">
              <span className="font-semibold">
                Convey Your Brand with Engaging Corporate Videos
              </span>
              <br />
              <br />
              Amplify your company’s profile and connect with your audience
              through professional corporate videos. These powerful tools go
              beyond mere advertising; they communicate your brand’s values,
              mission, and vision. Whether you’re introducing your company to
              the world, highlighting your culture to attract talent, or
              detailing your services, corporate videos are an essential medium
              for clear and compelling storytelling.
            </p>
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 3 */}
      <div className="w-full my-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center flex-wrap">
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h2 className="text-3xl md:text-4xl text-slate-800 font-bold">
              Stories that Captivate and Engage
            </h2>
            <p className="text-sm md:text-base text-gray-500 my-4">
              <span className="font-semibold">
                Captivate Audiences with Vibrant Cartoon Animation
              </span>
              <br />
              <br />
              Leverage the universal appeal of cartoon animation to tell stories
              that entertain, educate, and engage. Perfect for audiences of all
              ages, these animations add a splash of color and imagination to
              your marketing efforts, educational content, or entertainment
              projects. Cartoon animations offer a unique way to connect with
              viewers, turning abstract ideas into relatable and memorable
              stories.
              <br />
              <br />
              Break through the noise with cartoon animations that charm and
              inform. Custom-crafted to reflect your narrative and brand
              identity, these animations breathe life into stories, making
              complex messages accessible and enjoyable. Cartoon animations
              deliver content with empathy and humor, whether for promotional or
              educational pursuits.
            </p>
          </div>
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
            <Image
              src="https://techcraftinc.com/wp-content/uploads/2024/02/a5-01-1-1024x1024.webp"
              alt="v-animation3"
              width={500}
              height={500}
              objectFit="contain"
              className="mx-auto md:mx-0"
            />
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 4 */}
      <div className="w-full my-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-start mb-8 md:mb-0">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724964990/h2-01-1024x1024_pzvlr4.webp"
              alt="animation4"
              width={500}
              height={500}
              objectFit="contain"
              className="mx-auto md:mx-0"
            />
          </div>
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start mt-8 md:mt-0">
            <h2 className="text-3xl md:text-4xl text-slate-800 font-bold">
              Simplify Complicated Ideas With Whiteboard Animation
            </h2>
            <p className="text-sm md:text-base text-gray-500 my-4">
              <span className="font-semibold">
                Engage and Educate with Whiteboard Animation
              </span>
              <br />
              <br />
              Whiteboard animations excel in breaking down complex concepts into
              digestible, engaging pieces of content. Perfect for educational
              purposes, training sessions, or marketing messages, they draw
              viewers in with a hand-drawn style miming a live classroom
              experience. These animations are an excellent choice for
              explaining intricate processes, services, or ideas in a
              straightforward, captivating manner, making learning a visually
              interactive experience.
              <br />
              <br />
              Whiteboard animations bring your messages to life, turning viewers
              into active learners. They’re especially effective for
              storytelling, illustrating key points with a clarity that
              resonates. Whether you want to boost understanding, retention, or
              engagement, whiteboard animations make your content accessible and
              memorable.
            </p>
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 5 */}
      <div className="w-full my-16 px-4 md:px-0">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row-reverse items-center">
          {/* Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724965686/a3-01-1024x1024_xl9ea8.webp"
              alt="v-animation5"
              width={500}
              height={500}
              objectFit="contain"
              className="mx-auto md:mx-0"
            />
          </div>
          {/* Text Content */}
          <div className="w-full md:w-1/2 flex flex-col items-start mt-10 md:mt-0">
            <h2 className="text-3xl md:text-4xl text-slate-800 font-bold">
              Showcase Your Software with Clarity With Screen-Cast Animation
            </h2>
            <p className="text-sm md:text-base text-gray-500 my-4">
              <span className="font-semibold">
                Highlight Features with Screen-Cast Animation
              </span>
              <br />
              <br />
              Screen-cast animations are the go-to solution for demonstrating
              software applications, websites, or any digital product. They
              provide a clear, step-by-step walkthrough of your product’s
              interface and functionality, making them invaluable for tutorials,
              product demonstrations, or feature highlights. By guiding viewers
              through your product in action, screen-cast animations offer a
              practical, straightforward way to showcase its value and ease of
              use.
              <br />
              <br />
              Screen-cast animations cut through the complexity, offering
              viewers a direct look at your product’s capabilities. They’re an
              effective educational tool, whether you’re onboarding new users,
              providing training, or highlighting new features. With screen-cast
              animations, you can ensure your audience understands and
              appreciates the full range of functionalities your digital product
              offers
            </p>
          </div>
        </div>
      </div>

      {/* Animation Services We Offer Section */}
      <section className="">
        <div className="max-w-6xl mx-auto px-4 md:px-0">
          {/* Header */}
          <div className="flex flex-col items-center space-y-3 md:mt-24 md:mb-20">
            <h2 className="text-2xl md:text-3xl text-[#5114AE] font-bold text-center">
              Animation Services We Offer
            </h2>
            <h2 className="text-sm md:text-base text-gray-500 font-bold text-center mt-2">
              TechCraft provides the greatest video animation services by
              combining highest quality animations, experts editing, amazing
              effects, and a variety of animation styles.
            </h2>
          </div>
          {/* TEXT IMAGE SECTION 6 */}
          <div className="w-full my-16">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-start">
                <Image
                  src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720733177/animation-6_re2rrp.jpg"
                  alt="v-animation6"
                  width={500}
                  height={500}
                  objectFit="contain"
                  className="mx-auto md:mx-0"
                />
              </div>
              {/* Text Content */}
              <div className="w-full md:w-1/2 flex flex-col items-start">
                <h2 className="text-2xl md:text-4xl text-slate-800 font-bold mt-10 md:mt-0">
                  2D Animation Services
                </h2>
                <p className="text-sm md:text-base text-gray-500 my-4">
                  We create animation that keeps viewers demanding for more. We
                  develop an animated video that is uniquely yours because we
                  work according to your mindset.
                  <br />
                  <br />
                  <span className="text-sm">
                    Use 2D animated videos to increase viewer engagement. Let's
                    introduce animation that appeals to the audience. In order
                    to gather the most viewers for our clients, we occasionally
                    prefer to go with a video series. The expansion of your
                    brand is the main goal while we are working. We want people
                    to love our clients above all others. That's why we claim
                    that using our 2D animation services will turn you into a
                    reputable brand.
                  </span>
                  <br />
                  <span className="text-sm text-slate-600 font-semibold block py-3">
                    In 2D animation services we provide:
                  </span>
                  <span className="text-sm">
                    • Typography Animation
                    <br />
                    • 2D Logo Animation
                    <br />
                    • Cartoon Animation
                    <br />
                    • Infographics
                    <br />
                    • Motion Graphics
                    <br />
                    • Whiteboard
                    <br />
                    • Vector Animation
                    <br />
                    • Screencast Animation
                    <br />• App Explainer
                  </span>
                </p>
              </div>
            </div>
          </div>

          {/* TEXT IMAGE SECTION 7 */}
          <div className="w-full my-16">
            <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center">
              {/* Image */}
              <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
                <Image
                  src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724965800/a2-01-1024x1024_goqjxj.webp"
                  alt="v-animation7"
                  width={500}
                  height={500}
                  objectFit="contain"
                  className="mx-auto md:ml-auto"
                />
              </div>
              {/* Text Content */}
              <div className="w-full md:w-1/2">
                <h2 className="text-2xl md:text-4xl text-slate-800 font-bold">
                  Creating Realistic Visions With 3D Animation
                </h2>
                <p className="text-sm md:text-base text-gray-500 my-4">
                  <span className="font-semibold">
                    Breathe Life into Ideas with 3D Animation
                  </span>
                  <br />
                  <br />
                  3D animation offers a dynamic and immersive way to present
                  your ideas, products, or stories. 3D animations capture the
                  imagination by adding depth and realism, allowing for a more
                  detailed and engaging portrayal of concepts. Ideal for product
                  demonstrations, architectural visualizations, or captivating
                  storytelling, these animations create a realistic
                  representation that can make your content sales-worthy.
                  <br />
                  <br />
                  Explore the world of possibility with 3D animation, where
                  ideas are glimpsed and shared. This medium transforms your
                  visions into vivid, engaging narratives that can communicate
                  more effectively with your audience. From cinematic sequences
                  to interactive product showcases, 3D animation offers a
                  versatile solution to bring your most ambitious projects to
                  life.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

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
          <h5 className="text-center text-xl text-[#5114AE] font-semibold">
            Our Portfolio
          </h5>
          <h2 className="text-center font-bold text-3xl md:text-4xl text-slate-800 my-3">
            See it. Believe it
          </h2>
          <p className="px-3 text-center text-sm md:text-base text-[#687087] mt-3 md:px-0 md:max-w-3xl md:mx-auto">
            Being a thriving design and illustration company, we create
            impressions that speaks volumes for your brand.
            <br />
            Make sure to take a look at our portfolio to make a decision.
          </p>
        </div>

        {/* <ScrollContainer /> */}
        <div className="max-w-[1400px] mx-auto flex flex-wrap my-8 md:my-16 px-4 md:px-0 justify-center md:justify-between">
          {illustration.map((imgSrc, i) => (
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

export default VideoAnimation;
