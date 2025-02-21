/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import Image from "next/image";
import { mobileApps } from "@/data/porfolios";
import { Testimonials } from "@/components/Testimonials";
import { FaRegCheckCircle } from "react-icons/fa";
import BannerSlider from "@/components/BannerSlider";
import { heroBgImgSrc } from "@/constants/CloudinaryImgUrl";
import Modal from "@/components/Modal/Modal";
import { closeModal, openModal } from "@/app/utils/HelperFunction";
import CountSection from "@/components/CountSection";
import GradientButton from "@/components/GradientButton";
import OutlineButton from "@/components/OulineButton";
import BusinessSection from "@/components/BusinessSection";
import LeadForm from "@/components/LeadForm";

const MobileApplication = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="w-full">
      {/* Hero Section */}
      <div
        className="pt-36 pb-16 bg-no-repeat bg-cover md:pt-48 md:pb-32"
        style={{
          backgroundImage: `url(${heroBgImgSrc})`,
        }}
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between h-full px-4 md:px-0">
          {/* Content */}
          <div className="w-full md:w-1/2 h-full flex items-center mb-8 md:mb-0">
            <div className="w-full">
              <h2 className="text-[#5114AE] font-semibold text-xl md:text-2xl z-50">
                App Development Services
              </h2>
              <h1 className="text-2xl md:text-4xl font-semibold dark:text-white flex flex-col space-y-4 z-50 my-3">
                Tailoring the World's Leading
                <br />
                Mobile Platforms with iOS & Android App Innovation
              </h1>
              <p className="text-base text-gray-500 md:font-normal dark:text-neutral-200 z-50">
                <span className="font-semibold">
                  Developing Android Apps for Global Reach
                </span>
                <br />
                <br />
                Developing applications for Android means tapping into the most
                extensive user base in the mobile ecosystem. Our Android app
                development service focuses on creating powerful, scalable apps
                that leverage Android’s complete features. By utilizing the
                latest development tools and sticking to Google’s best
                practices, we ensure your app runs smoothly across many devices
                and offers a rich user experience. Our team is dedicated to
                building apps that fulfill your business objectives while
                providing value to your users and driving engagement and
                loyalty.
                <br />
                <br />
                Tech Craft’s Android app development strategy is centered around
                innovation and user satisfaction. We understand the importance
                of a seamless user interface and flawless functionality, so we
                meticulously design each app to be intuitive and responsive.
                Whether you’re aiming to launch an e-commerce platform, an
                educational tool, or a service-based application, we have the
                expertise to bring your vision to life on Android.
              </p>

              <div className="my-4">
                <div className="flex flex-wrap gap-1 mb-1">
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-full md:w-52">
                    <FaRegCheckCircle size={15} color="#5114AE" />
                    <span>Interactive</span>
                  </div>
                  <div className="flex items-center gap-2  rounded-lg text-slate-600 w-full md:w-52">
                    <FaRegCheckCircle size={15} color="#5114AE" />
                    <span>Optimized</span>
                  </div>
                  <div className="flex items-center gap-2  rounded-lg text-slate-600 w-full md:w-52">
                    <FaRegCheckCircle size={15} color="#5114AE" />
                    <span>Functional</span>
                  </div>
                  <div className="flex items-center gap-2  rounded-lg text-slate-600 w-full md:w-52">
                    <FaRegCheckCircle size={15} color="#5114AE" />
                    <span>Innovative</span>
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
          <div className="w-full md:w-1/2 h-full flex items-center justify-center md:justify-end mt-4 md:mt-0">
            <LeadForm />
          </div>
        </div>
      </div>

      {/* Slider */}
      <BannerSlider />
      {/* TEXT IMAGE SECTION 1*/}
      <div className="w-full py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap md:flex-nowrap">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              {/* <h5 className="text-2xl text-[#5114AE] font-semibold mb-3">
                App Development Services
              </h5> */}
              <h2 className="text-3xl md:text-4xl text-slate-800 font-bold mb-4">
                Elegance Meets Functionality With Dynamic IOS Apps
              </h2>
              <p className="text-base text-gray-500 md:font-normal dark:text-neutral-200 z-50">
                <span className="font-semibold">
                  Magnifying Experiences with Sophisticated iPhone Apps
                </span>
                <br />
                <br />
                iPhone apps require a mix of aesthetic appeal and seamless
                functionality to meet the high standards of iOS users. Our
                iPhone app development service delivers premium apps that
                manifest sophistication and innovation. By adhering to Apple’s
                design principles and utilizing the latest iOS development
                tools, we create stunning apps on the Retina display and provide
                a fluid, intuitive user experience. Tech Craft’s goal is to
                develop iPhone apps that achieve your business objectives and
                intrigue your users with their quality and performance.
                <br />
                <br />
                Developing for iOS, we prioritize security, privacy, and a
                clean, user-friendly interface. Our team works closely with you
                to understand your target audience and business needs, ensuring
                that every app we develop is a strategic asset to your
                organization. From initial concept to App Store submission, we
                guide you through every step, focusing on creating an engaging
                and valuable app for your users.
              </p>
              <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-3 md:space-y-0 mt-8 w-full">
                <GradientButton
                  text="Let's Get Started"
                  onClick={() => openModal(setIsModalOpen)}
                />
                <OutlineButton text="Chat With Us" />
              </div>
            </div>
            <div className="w-full md:w-1/2 md:pl-8">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724975491/m4-01-1024x1024_prvw2n.webp"
                alt="design1"
                width={500}
                height={500}
                objectFit="contain"
                className="mx-auto md:ml-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/*DIFFERENT LOGO TYPES SECTION */}
      <section className="w-full">
        <div className="max-w-6xl mx-auto px-3 md:px-0">
          <h3 className="text-2xl md:text-3xl text-center text-[#5114AE] font-bold z-50">
            Fast-Moving Solutions For Mobile App Development
          </h3>
          <p className="text-gray-500 text-sm text-center mt-5 md:text-base">
            We put strategy first so that you can see actual results. TechCraft
            is a well-known specialist which work for clients in a variety of
            industries including e-commerce, healthcare, education and so on.
            Our experts are result oriented. We also have vast experience in
            website design & development. We make sure that our web marketing
            initiatives support long-term success for our clients in addition to
            generating new revenue for them. The services that we provide:
          </p>
        </div>
        {/* TEXT IMAGE SECTION 2*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex flex-wrap">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724975905/m3-01-1024x1024_wygotd.webp"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-4xl text-slate-800 font-bold mb-4">
                Optimized Performance, Remarkable User Experience With Native
                Apps
              </h2>
              <p className="text-base text-gray-500 md:font-normal dark:text-neutral-200 z-50">
                <span className="font-semibold">
                  Building Native Apps for Peak Performance
                </span>
                <br />
                <br />
                Native apps are designed for specific platforms, utilizing their
                native development languages and environments. This focus allows
                for optimized performance and high integration with the device’s
                hardware and software features. Your native app must offer fast
                response times, smooth animations, and a user experience that
                feels right at home on the device. Whether for Android or iOS,
                our native apps are built to exceed user expectations, providing
                immersive and intuitive functionalities.
                <br />
                <br />
                The native app developers at Tech Craft are experts in the
                languages and frameworks specific to each platform, ensuring
                that your app fully leverages the capabilities of the devices it
                runs on. From leveraging the latest AR technologies to
                integrating with built-in health tracking features, our native
                apps push the boundaries of what mobile applications can
                achieve, creating deeply engaging experiences for your users.
              </p>
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 3*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap">
            <div className="w-1/2">
              <h2 className="text-4xl text-slate-800 font-bold">
                Get The Best of Both Worlds With Hybrid Apps
              </h2>
              <p className="text-base text-gray-500 md:font-normal dark:text-neutral-200 z-50 mt-4">
                <span className="font-semibold">
                  Framing Versatile Hybrid Apps for Extensive Reach
                </span>
                <br />
                <br />
                Hybrid app development combines native and web app technologies,
                offering a cost-effective solution for businesses looking to
                reach users across multiple platforms. These apps utilize a
                single codebase which enables Android and iOS deployment while
                offering a rich user experience that rivals native apps. By
                leveraging modern frameworks and technologies, we ensure your
                app delivers consistent functionality and performance across all
                devices, making your digital solution accessible to a wider
                audience.
                <br />
                <br />
                Hybrid apps by our team are designed with flexibility and
                scalability in mind. These apps reduce development time and
                costs and simplify maintenance and updates down the line. Our
                expertise in hybrid app development means we can create highly
                functional, engaging apps that support your business objectives,
                whether you’re looking to enhance customer engagement,
                streamline operations, or enter new markets.
              </p>
            </div>
            <div className="w-1/2">
              <Image
                src="https://techcraftinc.com/wp-content/uploads/2024/04/ma2-01-1024x1024.webp"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
                className="ml-auto"
              />
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 4*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724976852/ma1-01-1024x1024_kskxhc.webp"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-4xl text-slate-800 font-bold mb-4">
                Integrated Solutions With Cross-Platform App Development
              </h2>
              <p className="text-base text-gray-500 md:font-normal dark:text-neutral-200 z-50">
                <span className="font-semibold">
                  Unifying User Experiences Across Platforms
                </span>
                <br />
                <br />
                In a world where users are divided across multiple operating
                systems, cross-platform app development offers a unified
                solution to engage your entire audience. Our cross-platform apps
                ensure that no part of your user base is left behind, delivering
                a consistent and engaging experience across iOS, Android, and
                web platforms. Utilizing advanced cross-platform frameworks, we
                develop apps that perform excellently on any device, combining
                the reach of web apps with the functionality of native
                applications.
                <br />
                <br />
                Our cross-platform development strategy is centered on
                efficiency, performance, and user engagement. By writing a
                single codebase that adapts seamlessly across platforms, we
                streamline the development process and maintain high quality and
                user experience standards. You must want to boost your market
                reach or seek a cost-effective way to develop your app.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl text-center text-[#5114AE] font-bold z-50">
            How App Services Drive Business Growth
          </h3>
          <h4 className="text-gray-500 text-center text-base mt-3 font-bold">
            It Provide Creative Solutions for All Your Problems
          </h4>
        </div>

        {/* TEXT IMAGE SECTION 5*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap">
            <div className="w-1/2">
              <h2 className="text-4xl text-slate-800 font-bold">
                Build Your Brand
              </h2>
              <p className="text-gray-500 text-base my-4">
                A small and midsize companies are jumping on the mobile app
                trend because they realize that a successful mobile strategy
                requires more than just a website that is responsive to mobile
                devices. A personalized mobile app can increase brand
                recognition, familiarity, and client trust. And the outcomes are
                outstanding.
                <br />
                <br />
                By TechCraft experts you can create an app which loading
                capacity is very fast and easy to use which automatically build
                your brand reputation. We promise you to deliver smooth
                experience which rise your brand equity.
              </p>
            </div>
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720812024/app-5_agclx0.jpg"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
                className="ml-auto"
              />
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 6*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex flex-wrap">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720812059/app-6_gz1otw.jpg"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-4xl text-slate-800 font-bold">
                Build Customer Relationships
              </h2>
              <p className="text-gray-500 text-base my-4">
                Most smartphone users prefer mobile applications over websites,
                and 76% of customers prefer to save time by purchasing on their
                phones. According to estimates, payments for mobile applications
                would rise from 41.8% in 2019 to 52.2% in 2023. These are just a
                few of the advantages that a unique app can provide their users.
                <br />
                <br />
                Today's consumers are impatient and hate waiting for websites to
                load. They need rapid, simple access to your business at the
                click of a button. An efficient method to provide clients with
                the information and services they need right away is through a
                customized app. To increase interaction, several brands provide
                promotions and discounts that are exclusively available on apps.
                These loyalty programs are a fantastic method to engage and keep
                clients. Ultimately, TechCraft provide all of these aspects
                which help you to expand and improve your customer
                relationships.
              </p>
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 7*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap">
            <div className="w-1/2">
              <h2 className="text-4xl text-slate-800 font-bold">
                Customers Have 24/7 Access
                <br />
                To Your Business
              </h2>
              <p className="text-gray-500 text-base my-4">
                Customers may access your goods and services whenever they want
                through mobile apps, which is different from a traditional
                store. As Compared to websites, apps offer much more convenient
                access to customers because some applications can even be used
                offline.
                <br />
                <br />
                By the App it is easy to find brand without having to search
                through numerous online pages and open different web pages. This
                presented your brand as a trustworthy source that clients can
                use repeatedly.
              </p>
            </div>
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720812207/app-7_ejgy6q.webp"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
                className="ml-auto"
              />
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 8*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720812282/app-8_f4issd.jpg"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-4xl text-slate-800 font-bold">
                Provide Excellent Customer Insights
              </h2>
              <p className="text-gray-500 text-base my-4">
                App must be made specifically to suit the taste of your
                customers then automatically your business will be grow. As you
                consider potential growth, you can use these preferences. What
                aspects of the app did users use the most, and what is the most
                in demand? By properly gathered information and feedbacks, apps
                might even drive a whole marketing strategy.
              </p>
            </div>
          </div>
        </div>
        {/* TEXT IMAGE SECTION 9*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap flex-row-reverse">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720812427/app-9_kb8347.jpg"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
                className="ml-auto"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-4xl text-slate-800 font-bold">
                Powerful Marketing Tools
              </h2>
              <p className="text-gray-500 text-base my-4">
                You can improve your marketing objectives clearly with a
                personalized app. The software may be used to manage specific
                messaging, contacts, team information, and even engagement tools
                like contest and campaigns. Your brand's colors, logos, and
                taglines can be applied to them. Customers are more likely to
                remember your brand in the long run if they interact with your
                app, engage in campaigns, or recognize your marketing materials.
              </p>
            </div>
          </div>
        </div>
        {/* TEXT IMAGE SECTION 10*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720812433/app-10_dj0fuq.webp"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-4xl text-slate-800 font-bold">
                Cost-Effective
              </h2>
              <p className="text-gray-500 text-base my-4">
                Apps reduce the demand for traditional marketing materials and
                lower the price of marketing campaigns. Even internally, using
                apps can save you money. Apps can increase employee productivity
                by boosting communication, reducing busy work, increasing
                engagement, and optimizing data. In long term this saves a ton
                of money. Additionally, by using ads that are specifically
                targeted towards in-app purchases, brands may really profit from
                their apps which is beneficial for your business growth.
              </p>
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
          <h5 className="text-center text-2xl text-[#5114AE] font-semibold">
            Showcase of Success
          </h5>
          <p className="text-center text-base text-[#687087] mt-4">
            Why rely solely on what we say? Explore our successful portfolio and
            see the excellence for yourself.
            <br />
            Our team brings your creative ideas to life by crafting web designs
            that speak volumes of our creativity and expertise.
          </p>
        </div>

        {/* <ScrollContainer /> */}
        <div className="max-w-[1400px] mx-auto flex flex-wrap my-16 justify-between">
          {mobileApps.map((imgSrc, i) => (
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

export default MobileApplication;
