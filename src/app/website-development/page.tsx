/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaRegCheckCircle } from "react-icons/fa";
import { Testimonials } from "@/components/Testimonials";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import { webDesign } from "@/data/porfolios";
import MiddleBannerSection from "@/components/MiddleBannerSection";
import BannerSlider from "@/components/BannerSlider";
import PricingSection from "@/components/PricingSection";
import CountSection from "@/components/CountSection";
import Modal from "@/components/Modal/Modal";
import { closeModal, openModal } from "@/app/utils/HelperFunction";
import GradientButton from "@/components/GradientButton";
import OutlineButton from "@/components/OulineButton";
import BusinessSection from "@/components/BusinessSection";
import { heroBgImgSrc } from "@/constants/CloudinaryImgUrl";
import LeadForm from "@/components/LeadForm";
import { OurServiceCard } from "@/components/OurServiceCard";
import {
  developmentServices,
  developmentServicesBenifits,
} from "@/data/services";

const WebsiteDevelopment = () => {
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
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between h-full px-4 md:px-0">
          {/* Content */}
          <div className="w-full md:w-1/2 h-full flex items-center mb-8 md:mb-0">
            <div className="w-full">
              <h2 className="text-[#5114AE] font-semibold text-xl md:text-2xl z-50">
                Website Design and Development Services
              </h2>
              <h1 className="text-2xl md:text-4xl font-semibold dark:text-white flex flex-col space-y-4 z-50 my-3">
                Crafting the Face of Your
                <br />
                Digital Presence With
                <br />
                Web App Development
              </h1>
              <p className="text-base text-gray-500 md:font-normal dark:text-neutral-200 z-50">
                <span className="font-semibold">
                  Building Beautiful, Functional Web Experiences
                </span>
                <br />
                <br />
                Web App Development is where your website’s design comes to
                life. Our priority is on creating web pages that look great and
                are intuitive and responsive. We use the latest technologies and
                coding practices to ensure your site performs flawlessly on any
                device. Our team is dedicated to building interfaces that engage
                your visitors from the first click, with fast loading times and
                smooth navigational flows, making every interaction a pleasure.
                <br />
                <br />
                An inviting and interactive user interface is the key to a
                successful online platform. We prioritize accessibility and
                user-friendliness, coding with meticulous attention to detail.
                Our front-end solutions are built for scalability, ready to
                evolve as your business grows. We deliver digital experiences
                that foster connections with your audience by marrying aesthetic
                appeal with technical precision.
              </p>

              <div className="my-4">
                <div className="flex flex-wrap gap-1 mb-1">
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-full md:w-52">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Engaging</span>
                  </div>
                  <div className="flex items-center gap-2  rounded-lg text-slate-600 w-full md:w-52">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Supportive</span>
                  </div>
                  <div className="flex items-center gap-2  rounded-lg text-slate-600 w-full md:w-52">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Adaptable</span>
                  </div>
                  <div className="flex items-center gap-2  rounded-lg text-slate-600 w-full md:w-52">
                    <FaRegCheckCircle size={15} color="#802FCE" />
                    <span>Flexible</span>
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
      <div className="w-full">
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap flex-row-reverse">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724966951/pair-programming-concept-illustration_114360-2170_gafrsm.webp"
                alt="creative-copywriting1"
                width={500}
                height={500}
                objectFit="contain"
                className="ml-auto"
              />
            </div>
            <div className="w-1/2">
              <h5 className="text-2xl text-[#5114AE] font-semibold z-50 mb-3">
                Backend Development
              </h5>
              <h2 className="text-4xl text-slate-800 font-bold">
                The Engine Behind Your
                <br />
                Online Operations
              </h2>
              <p className="text-gray-500 text-sm md:text-base my-4 md:my-6">
                <span className="font-semibold">
                  Powering Your Site with Robust Back-End Architectures
                </span>
                <br />
                <br />
                Back-End Development is the powerhouse of your website, handling
                data management, server interactions, and application logic. Our
                team specializes in creating robust and secure back-end
                foundations that ensure your website operates smoothly,
                efficiently, and without interruption. We implement the latest
                in server technologies and database management systems to
                provide scalable solutions that meet your business’s growing
                needs.
              </p>
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
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724967421/developers-use-software-multiple-devices-cross-platform-software-multi-platform-platform-independent-software-concept_335657-1816_f3uxl4.webp"
                alt="creative-copywriting1"
                width={500}
                height={500}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-4xl text-slate-800 font-bold">
                Designing with Your
                <br />
                Audience in Mind
              </h2>
              <p className="text-gray-500 text-sm md:text-base my-4 md:my-6">
                <span className="font-semibold">
                  Creating Engaging Online Experiences for Every User
                </span>
                <br />
                <br />
                User Experience (UX) is at the core of what we do, ensuring that
                every visit to your site is click-worthy. Get user-centric
                designs inspired to know and fully meet your visitors’ needs. We
                conduct thorough research and testing to build pathways that
                lead users exactly where they need to go effortlessly. Let’s
                make your website not just a destination but a journey that
                reflects the quality and care of your brand.Good UX is invisible
                but impactful, making complex processes feel simple and
                intuitive. Our design strategy combines psychological insights
                with practical design principles to remove barriers and enhance
                satisfaction. With a priority on streamlining navigation and
                optimizing page layouts, we craft experiences that keep users
                returning.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 3*/}
      <div className="w-full my-16">
        <div className="max-w-6xl mx-auto flex items-center flex-wrap">
          <div className="w-1/2">
            <h2 className="text-4xl text-slate-800 font-bold">
              Visual Communication at Its Best
            </h2>
            <p className="text-gray-500 text-sm md:text-base my-4 md:my-6">
              <span className="font-semibold">
                Designing Interfaces That Speak to Your Users
              </span>
              <br />
              <br />
              User Interface (UI) is the visual aspect of your digital presence
              that users interact with. Our technique for UI design prioritizes
              clarity, coherence, and aesthetic appeal. We create visual
              elements that are appealing and functional, ensuring that your
              brand’s voice is heard loud and clear. Through thoughtful design
              choices, we guide users through your site, making interactions
              enjoyable and information easy to find.
              <br />
              <br />
              Every button, icon, and slider is designed with purpose. Our UI
              designs are sleek, modern, and aligned with your branding,
              reinforcing your identity with every click. By paying close
              attention to layout, color schemes, and typography, we deliver
              interfaces that look stunning and enhance your platform’s overall
              usability.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724967614/software-engineer-statistician-visualizer-analyst-working-project-big-data-conference-big-data-presentation-data-science-concept_335657-1850_i9puq4.webp"
              alt="copywriting4"
              width={500}
              height={500}
              objectFit="contain"
              className="ml-auto"
            />
          </div>
        </div>
      </div>
      {/* TEXT IMAGE SECTION 4*/}
      <div className="w-full my-16">
        <div className="max-w-6xl mx-auto flex flex-wrap items-center flex-row-reverse">
          <div className="w-1/2">
            <h2 className="text-4xl text-slate-800 font-bold">
              Bridging Platforms with <br /> Flawless Cross-Platform <br /> Apps
            </h2>
            <p className="text-gray-500 text-base my-4">
              In the mobile-first era, being present on multiple platforms is
              critical to capturing and retaining users. Our cross-platform
              solutions are efficient, cost-effective, and quick to market,
              helping you stay competitive and responsive to market demands.
              With our expertise, your app will not just exist across
              ecosystems—it will thrive, providing value and convenience to your
              users wherever they are.
            </p>
          </div>
          <div className="w-1/2">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724968706/smart-speaker-used-by-office-workers-illustration_335657-365_le5qe6.webp"
              alt="copywriting4"
              width={500}
              height={500}
              objectFit="contain"
            />
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 5*/}
      <div className="w-full">
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex flex-wrap items-center flex-row-reverse">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724970672/cloud-computing-service-web-hosting-synchronised-information-online-storage-backup-technology-internet-server-cloud-data-center-design-element_335657-2638_imnsra.webp"
                alt="copywriting5"
                width={510}
                height={510}
                objectFit="contain"
                className="ml-auto"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-4xl text-slate-800 font-bold">
                Unifying User Experiences
                <br />
                Across Devices
              </h2>

              <p className="text-gray-500 text-base my-4">
                Cross-Platform App Development allows your digital solutions to
                reach a wider audience by functioning seamlessly across iOS,
                Android, and web platforms. Our development strategy ensures
                that your app delivers a consistent and engaging user
                experience, no matter the device. We leverage advanced
                frameworks and tools to build apps that perform excellently
                everywhere, heightening your reach and impact
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Result Oriented Section1 */}
      <div className="mb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-[#5114AE] font-bold text-center">
            Advantages of Responsive Web Design
          </h2>

          <p className="text-gray-500 text-base mt-4 text-center">
            You can make sure your website responds to user needs. TechCraft
            ensures that the website is effective for all and easy to use on any
            device. Our web design services are worthwhile for the following
            reasons, among others.
          </p>

          {/* Card Section */}
          <div className="flex flex-wrap md:justify-between">
            {/* Card Section */}
            {developmentServicesBenifits.map((el, idx) => (
              <OurServiceCard {...el} key={idx} />
            ))}
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 6*/}
      <div className="w-full">
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex flex-wrap">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720741151/development-6_wfdnvy.webp"
                alt="copywriting5"
                width={510}
                height={510}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-4xl text-slate-800 font-bold">
                Personalized Web Design
                <br />
                Services
              </h2>
              <h5 className="text-2xl my-4 font-semibold text-gray-800">
                Create Your Own Website To Establish Your Unique Brand Identity
              </h5>
              <p className="text-gray-500 text-sm my-4">
                At TechCraft, we put a lot of time and effort into creating
                WordPress web designs that complement your uniqueness and cater
                to the demands of your target audience. We don't use pre-made
                graphics or template designs at our WordPress web design
                service. To find your unique selling propositions (USPs) and
                establish the clear conversion path for your website, we do
                in-depth competitor benchmarking, audience study, and site
                analysis.
                <br />
                <br />
                * Establish your authority in the sector
                <br />
                * Maintain your brand's reputation.
                <br />
                * Promote your unique value propositions.
                <br />
                * Establish a favorable brand association
                <br />
                * Give each customer a unique brand experience.
                <br />
                * Improve the flexibility of your website
                <br />
                * Spend less on site maintenance and development.
                <br />
                * Improve the long-term profitability of your website
                <br />
                <br />
                With a personalize website, you have the authority to control
                every aspect of your web design as well as functionality. The
                website design and development professionals at TechCraft make
                sure that the navigation, layout, color scheme, and images on
                your site represent the personality of your company. In order to
                raise your website's online ranks and draw in your target
                audience, our web design business also optimizes it for search
                engines.
                <br />
                <br />
                Avoid from using website templates. Make an investment in custom
                or a personalize web page design to create a reliable online
                representation of your business.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Result Oriented Section2 */}
      <div className="mb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-[#5114AE] font-bold text-center">
            Website Design Services
          </h2>

          {/* Card Section */}
          <div className="flex flex-wrap md:justify-between">
            {/* Card Section */}
            {developmentServices.map((el, idx) => (
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
          <h5 className="text-center text-xl text-[#5114AE] font-semibold">
            Showcase of Success
          </h5>
          <p className="text-center text-base text-[#687087] mt-2">
            Why rely solely on what we say? Explore our successful portfolio and
            see the excellence for yourself.
            <br />
            Our team brings your creative ideas to life by crafting web designs
            that speak volumes of our creativity and expertise.
          </p>
        </div>

        {/* <ScrollContainer /> */}
        <div className="max-w-[1400px] mx-auto flex flex-wrap my-16 justify-between">
          {webDesign.map((imgSrc, i) => (
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

      {/* Middle Banner Section */}
      {/* <div>
        <MiddleBannerSection
          heading="To customize a package,"
          subHeading="Connect with one of our experts now"
        />
      </div> */}

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

export default WebsiteDevelopment;
