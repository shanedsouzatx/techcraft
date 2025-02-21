/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Testimonials } from "@/components/Testimonials";
import { FaRegCheckCircle } from "react-icons/fa";
import MiddleBannerSection from "@/components/MiddleBannerSection";
import BannerSlider from "@/components/BannerSlider";
import { heroBgImgSrc } from "@/constants/CloudinaryImgUrl";
import BusinessSection from "@/components/BusinessSection";
import CountSection from "@/components/CountSection";
import GradientButton from "@/components/GradientButton";
import { closeModal, openModal } from "../utils/HelperFunction";
import Modal from "@/components/Modal/Modal";

const DigitalMarketing = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="w-full">
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
                Digital Marketing
              </h2>
              <h1 className="text-2xl md:text-4xl font-semibold dark:text-white flex flex-col space-y-4 z-50 my-3">
                Applying digital
                <br />
                marketing solutions to
                <br />
                enhance brand image.
              </h1>
              <p className="max-w-2xl text-base md:text-base dark:text-neutral-200 z-50">
                Creating digital marketing plans that will keep your business at
                the top. We collaborate with skilled marketers who design and
                carry out plans to enhance the image of your business. Our
                marketing initiatives include:
              </p>

              <div className="my-4">
                <div className="flex items-center space-x-4 mb-1">
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-52">
                    <FaRegCheckCircle size={15} color="#38ada9" />
                    <span>Result-driven</span>
                  </div>
                  <div className="flex items-center gap-2  rounded-lg text-slate-600 w-52">
                    <FaRegCheckCircle size={15} color="#38ada9" />
                    <span>Relevant</span>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-52">
                    <FaRegCheckCircle size={15} color="#38ada9" />
                    <span>Strategic</span>
                  </div>
                  <div className="flex items-center gap-2 rounded-lg text-slate-600 w-52">
                    <FaRegCheckCircle size={15} color="#38ada9" />
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
                  text="Let's Get Started"
                  onClick={() => openModal(setIsModalOpen)}
                />
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="w-1/2 h-full flex items-center justify-end relative">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720813825/digital-laptop-base_zid2po.png"
              alt="marketing-bg"
              width={550}
              height={550}
            />
            <Image
              className="absolute top-4 right-20"
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720814032/digital-vector_lsdft3.png"
              alt="marketing-bg"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>

      {/* Slider */}
      <BannerSlider />
      {/* TEXT IMAGE SECTION 1*/}
      <div className="w-full">
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex flex-wrap">
            <div className="w-1/2">
              <h5 className="text-2xl text-[#5114AE] font-semibold z-50 mb-3">
                Digital Marketing
              </h5>
              <h2 className="text-4xl text-slate-800 font-bold">
                Let’s Make an Effective Goal
                <br />
                Plan with Targeted Strategies
              </h2>
              <p className="text-gray-500 text-base my-4">
                To bring in new clients, TechCraft Internet Marketing Agency is
                here which provide creative, adaptable and full digital
                marketing services. However, TechCraft relies on its own
                marketing and search engine optimization (SEO) abilities to
                attract new visitors to our website.
                <br />
                <br />
                <span className="text-sm">
                  We don't run a stable business. We don't restrict ourselves to
                  a single industry. Any small business in any industry can
                  benefit from TechCraft's expertise and professionals when it
                  comes to creating a unique website and utilizing various
                  digital marketing services.
                </span>
                <br />
                <br />
                <span className="text-sm">
                  Several other companies take a one-size-fits-all strategy and
                  frequently provide you the identical strategy and template
                  website same as your competitor.
                </span>
                <br />
                <br />
                <span className="text-sm">
                  In collaboration with us, TechCraft creates a plan and
                  specialized internet marketing services that are customized to
                  your particular business requirements. Instead of just being
                  an agency that blindly implements strategies with no results;
                  we become a partner that understands your business and its
                  goals.
                </span>
                <br />
                <br />
                <span className="text-sm">
                  TechCraft focuses on client relationships and results. We make
                  sure to use your budget to its maximum capacity in order to
                  maximize your return on investment (ROI). We never make false
                  promises.
                </span>
              </p>
            </div>
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720814767/markiting-1_xjh7yv.jpg"
                alt="design1"
                width={530}
                height={530}
                objectFit="contain"
                className="ml-auto"
              />
            </div>
          </div>
        </div>
      </div>
      {/* TEXT IMAGE SECTION 2*/}
      <div className="w-full">
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap flex-row-reverse">
            <div className="w-1/2">
              <h5 className="text-2xl text-[#5114AE] font-semibold z-50 mb-3">
                Digital Marketing Services for Maximum Growth
              </h5>
              <h2 className="text-lg text-gray-500 font-bold">
                Our Professionals Help Businesses to Increase Engagement through
                Digital Marketing.
              </h2>
              <p className="text-gray-500 text-base my-4">
                <span className="text-sm">
                  We are an effective digital marketing agency with a diverse
                  workplace that serves brands, companies, and organizations all
                  around the world. Our team of digital marketing specialists
                  will make sure to bring attention to your website on
                  well-known social media networks like Facebook, Twitter,
                  LinkedIn, and Instagram.
                </span>
                <br />
                <br />
                <span className="text-sm">
                  We provide the best offers to help brands, companies, and
                  organization to expand their reach through digital PR. You
                  must choose us if you're looking for a premier digital
                  marketing agency
                </span>
              </p>
            </div>
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720814811/markiting-2_yxvynd.jpg"
                alt="design1"
                width={530}
                height={530}
                objectFit="contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 3*/}
      <div className="w-full">
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap">
            <div className="w-1/2">
              <h5 className="text-2xl text-[#5114AE] font-semibold z-50 mb-3">
                Using Digital Marketing Services to Grow Your Business
              </h5>
              <h2 className="text-lg text-gray-500 font-bold">
                Reach Your Targeted Customers On The Right Platform At The Right
                Time.
              </h2>
              <p className="text-gray-500 text-base my-4">
                Digital marketing services give companies of all sizes the
                chance to promote their brand 24 hours at a minimum expense. A
                digital marketing firm may assist businesses of any size, from
                startups to large corporations with various locations, in
                expanding their niche market reach and reaching their targeted
                clients no matter what time zones or geographical location.
                <br />
                <br />
                <span className="text-sm">
                  One of the best methods to engage with customers while
                  maintaining a strong relationship with your existing customers
                  is by working with a digital marketing agency. Your customers
                  will always be able to reach you if your company has a strong
                  online presence.
                </span>
                <br />
                <br />
                <span className="text-sm">
                  Our digital marketing agency has collaborated with hundreds of
                  American companies to assist them in achieving their
                  conversion objectives. We've offered a variety of unique
                  digital marketing services to our customers throughout the
                  years.
                </span>
              </p>
            </div>
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720815036/markiting-3_j5udy0.jpg"
                alt="design1"
                width={530}
                height={530}
                objectFit="contain"
                className="ml-auto"
              />
            </div>
          </div>
        </div>
      </div>

      {/*DIFFERENT LOGO TYPES SECTION */}
      <section className="w-full">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl text-center text-[#5114AE] font-bold z-50">
            TechCraft’s Digital Marketing Services
          </h3>
          <h4 className="text-gray-500 text-center text-base my-3 font-medium">
            Check out the many different digital marketing services that
            TechCraft provides in the list below.
          </h4>
          <p className="text-gray-500 text-center text-sm">
            To find out more about how we can help your business, get in touch
            with us right away!
          </p>
        </div>
        {/* TEXT IMAGE SECTION 4*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720815657/markiting-4_ytei2h.jpg"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl text-[#5114AE] font-semibold">
                Search Engine Optimization (SEO)
              </h2>
              <p className="text-gray-500 text-base my-4">
                We can assist you in achieving greater organic ranks and more
                visibility in search results by conducting proper keyword
                research and utilize engaging SEO techniques. Our digital
                marketing agency provides in-depth keyword research, on-page and
                off-page optimization, and uses Google Search Console to monitor
                your results. As part of your digital marketing solutions, these
                techniques enable us to enhance your conversions by bringing in
                high-quality leads and visitors.
              </p>
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 5*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap flex-row-reverse">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720816026/markiting-5_xxgss1.png"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
                className="ml-auto"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl text-[#5114AE] font-semibold">
                On-Page SEO
              </h2>
              <p className="text-gray-500 text-base my-4">
                One of the most significant types of SEO for digital marketing,
                it has a direct impact on the ranks and overall visibility of
                your website. The optimization of on-page SEO for a page
                involves a variety of factors. You can improve not only your
                page but also its general functioning by using an on-page SEO
                check list. Our experts must consider your site speed, image
                optimization and internal linking because they know these are
                the most important factor for on-page SEO which will definitely
                affects your website ranking.
              </p>
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 6*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720816105/markiting-6_rxiyh5.webp"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl text-[#5114AE] font-semibold">
                Off-Page SEO
              </h2>
              <p className="text-gray-500 text-base my-4">
                Link building and obtaining backlinks are the two most crucial
                tasks in off-page SEO optimization which is perfectly done by
                our experts. They know about the process of getting links for
                your website on other relevant websites in order to show the
                search engines how valuable and authoritative your content is.
                Obtaining backlinks for your website from reputable sites in
                your industry is a great way to show search engine algorithms
                how valuable, reputable, and relevant your material is.
              </p>
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 7*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap flex-row-reverse">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720816224/markiting-7_eg6d3f.jpg"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
                className="ml-auto"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl text-[#5114AE] font-semibold">
                Technical SEO
              </h2>
              <p className="text-gray-500 text-base my-4">
                With precise technical SEO and internet marketing services,
                create a solid online foundation. Our technical SEO
                professionals examine HTTPS status codes, audit redirects,
                perform crawl error reports, improve site speed, and remove
                duplicate material. Through this, we improve the crawlability
                and indexability of your website. Depending on your needs and
                objectives, we may also help with site migration and add
                organized data markup to your website.
              </p>
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 8*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720816422/markiting-8_ghbrsm.jpg"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl text-[#5114AE] font-semibold">
                Local SEO
              </h2>
              <p className="text-gray-500 text-base my-4">
                Search engines are more likely to display your information to
                potential clients when it is presented properly to them. You can
                more effectively convert local leads into paying customers by
                mentioning an area or city in your content, such as page titles,
                descriptions, and keywords, and by showing accolades and trust
                symbols for the visitors. Additionally, if your customers enjoy
                working with your business, they are more probably to tell
                others about it. Our digital marketing agency optimizes your
                location pages, builds local links, and makes sure your name,
                address, and phone number (NAP) are consistent. We use social
                media sites as well to maintain a strong presence with your
                audiences.
              </p>
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 9*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap flex-row-reverse">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720816497/markiting-9_mn4004.jpg"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
                className="ml-auto"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl text-[#5114AE] font-semibold">
                Franchise SEO
              </h2>
              <p className="text-gray-500 text-base my-4">
                With franchise SEO services from TechCraft, you can expand your
                market reach and enhance the reputation of your brand. Our team
                develops a franchise marketing strategy based on your desired
                customers and service area. In addition to publishing
                geo-modified service pages and blog articles, we also claim and
                optimize your company listings, maintain brand consistency, and
                collect positive online reviews from your most loyal clients. In
                this approach, we assist you in managing, promoting, and
                achieving top local rankings for all of your franchisees.
              </p>
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 10*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720816615/markiting-10_uic2lt.webp"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl text-[#5114AE] font-semibold">
                Link Building
              </h2>
              <p className="text-gray-500 text-base my-4">
                Gain consistent traffic from authoritative websites to boost
                your brand's credibility with customers. Our digital marketing
                company uses sponsored content, paid ads, and partnerships to
                place your page content where influential people will see it. We
                strategically use guest blogging, create engaging new content,
                share data-driven infographics, and increase your social media
                engagement. By doing this, we create high-quality backlinks that
                increase sales.
              </p>
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 11*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap flex-row-reverse">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720816709/markiting-11_awzox5.jpg"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
                className="ml-auto"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl text-[#5114AE] font-semibold">
                Web Design & Development
              </h2>
              <p className="text-gray-500 text-base my-4">
                TechCraft creates unique, mobile-friendly, and SEO-optimized
                websites that support your digital marketing initiatives and
                help you achieve your business goals. We establish a graphic to
                draw attention to your site's key components and motivate site
                visitors to perform the desired action. Our site design
                professionals use straightforward calls-to-action (CTAs), stay
                away from rotating sliders and carousels, keep form fields
                simple, and write content matched to your persona. We also
                provide custom web design according to your business which
                easily capture your target audience.
              </p>
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 12*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720816757/markiting-12_f8muf1.webp"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl text-[#5114AE] font-semibold">
                Social Media Marketing
              </h2>
              <p className="text-gray-500 text-base my-4">
                Are you looking for a digital agency who grow your business and
                market to them on social media? We create social media campaigns
                to promote your brand and interact with your fans. Your goals
                are identified, competitive benchmarking is done, and the online
                activity of your customers is assessed by our digital marketing
                agency. By using data and analytics, we create unique social
                media brand management and paid advertising campaigns which will
                appropriate to your company.
              </p>
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 13*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap flex-row-reverse">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720816805/markiting-13_u1glrs.png"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
                className="ml-auto"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl text-[#5114AE] font-semibold">
                Pay Per Click (PPC) Management
              </h2>
              <p className="text-gray-500 text-base my-4">
                Our PPC management group is top-notch. Never outsource. You will
                collaborate directly with a group of professional PPC
                specialists who will daily make improvements into your accounts.
                Utilize a data-driven PPC campaign to quickly and precisely
                reach your target audience. You can comfortably say your
                campaign is in the hands of experts because our PPC Specialists
                are certified. In order to advertise your items and generate a
                lot of leads and traffic, we also take benefit of seasonal
                trends.
              </p>
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 14*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720816885/markiting-14_vzf4o6.png"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl text-[#5114AE] font-semibold">
                Content Writing
              </h2>
              <p className="text-gray-500 text-base my-4">
                When content is a high standard and optimized its rank highly in
                search engines. TechCraft content specialist write a content in
                most effective way. It will generate traffic from search engines
                and effectively accomplish the goals. The main objective of
                TechCraft content writer is to produce content that is
                user-friendly, accessible by search engines, and meets user
                purpose.
              </p>
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 15*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap flex-row-reverse">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720816939/markiting-15_sasqcg.jpg"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
                className="ml-auto"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl text-[#5114AE] font-semibold">
                Web Hosting
              </h2>
              <p className="text-gray-500 text-base my-4">
                Your new website needs to be hosted by a reliable, secure firm.
                If you choose TechCraft you don't worry about security purpose.
                Network monitoring, system backup and restoration, file
                management, and WordPress acceleration are all services offered
                by our digital marketing agency. To increase the security of
                your website, we also provide limitless data transfer and
                bandwidth, DDoS protection, and a free Secure Sockets Layer
                (SSL) certificate.
              </p>
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 16*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720817036/markiting-16_nloput.jpg"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl text-[#5114AE] font-semibold">
                Conversion Rate Improvement (CRO)
              </h2>
              <p className="text-gray-500 text-base my-4">
                Only half the battle is won when people visit your website.
                Conversion optimization makes sure that your website is ready to
                convert visitors into paying clients. With the help of TechCraft
                CRO services, you can direct more website visits toward the
                bottom of the sales cycle and raise your conversion rate.
              </p>
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 17*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap flex-row-reverse">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720817119/markiting-17_umqrpt.png"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
                className="ml-auto"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl text-[#5114AE] font-semibold">
                Video Production
              </h2>
              <p className="text-gray-500 text-base my-4">
                Video marketing is effective and entertaining when done
                properly. Storytelling through video has the ability to boost
                your brand and significantly boost client engagement. Engaging,
                SEO-optimized video content may grab your audience's attention
                and generate discussion digitally. TechCraft video marketing
                services attract your potential customers in a very attractive
                way.
              </p>
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 16*/}
        <div className="w-full my-16">
          <div className="max-w-6xl mx-auto flex items-center flex-wrap">
            <div className="w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720817180/markiting-18_n7flxa.jpg"
                alt="design2"
                width={530}
                height={530}
                objectFit="contain"
              />
            </div>
            <div className="w-1/2">
              <h2 className="text-2xl text-[#5114AE] font-semibold">
                E-Commerce Marketing
              </h2>
              <p className="text-gray-500 text-base my-4">
                Revenue for the e-commerce sector has increased year over year
                by 23%. Utilize a variety of advantages provided by our
                e-commerce to market your products and provide 24/7
                accessibility for your clients. For top-of-funnel traffic to
                your website, our digital marketing business offers e-commerce
                SEO and e-commerce PPC solutions. We increase the number of
                product reviews, improve your product pages, and customize your
                marketing techniques to the demands of your target audience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Middle Banner Section */}
      <div>
        <MiddleBannerSection
          heading="Schedule a Free consultancy"
          subHeading="Our expert will be with you in no time"
        />
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

export default DigitalMarketing;
