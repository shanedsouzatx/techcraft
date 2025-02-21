/* eslint-disable react/no-unescaped-entities */
"use client";
import { useState } from "react";
import Image from "next/image";
import { ThreeDCardDemo } from "@/components/ThreeDCardDemo";
import { logoDesign } from "@/data/porfolios";
import { Testimonials } from "@/components/Testimonials";
import BannerSlider from "@/components/BannerSlider";
import PricingSection from "@/components/PricingSection";
import BusinessSection from "@/components/BusinessSection";
import CountSection from "@/components/CountSection";
import GradientButton from "@/components/GradientButton";
import OutlineButton from "@/components/OulineButton";
import Modal from "@/components/Modal/Modal";
import { heroBgImgSrc } from "@/constants/CloudinaryImgUrl";
import { closeModal, openModal } from "@/app/utils/HelperFunction";

const LogoDesign = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section className="w-full">
      {/* Logo Design Hero Section */}
      <div
        className="pt-36 pb-16 bg-no-repeat bg-cover md:pt-48 md:pb-32"
        style={{
          backgroundImage: `url(${heroBgImgSrc})`,
        }}
      >
        <div
          className="max-w-6xl flex-1 mx-auto px-4 md:px-0"
          data-aos="fade-right"
        >
          <h5 className="text-xl md:text-2xl text-[#5114AE] font-semibold z-50">
            Logo Design
          </h5>
          <h2 className="text-3xl md:text-5xl font-semibold my-4">
            Define Your Brand with Every
            <br />
            Letter with Wordmarks.
          </h2>
          <p className="text-base md:text-lg text-[#000] max-w-xl z-50 font-medium">
            We have the passion and expertise to create a design that best
            represents your business to attract, capture and convert your target
            market. Our logo layouts ensure that:
          </p>
          <ul className="logo-design-list mt-4 md:mt-6 text-sm md:text-base">
            <li>Brand Awareness</li>
            <li>Exclusive Brand Identity</li>
            <li>Timeless Styles</li>
            <li>Brand Loyalty</li>
            <li>Competitive Advantage</li>
          </ul>
          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-5">
            <GradientButton
              text="Let's Get Started"
              onClick={() => openModal(setIsModalOpen)}
            />
            <OutlineButton text="Chat With Us" />
          </div>
        </div>
        <div className="banner-pic hidden md:block">
          <div className="hover-effect-bann">
            <div className="row">
              <div className="column">
                <div className="ItemCard">
                  <a className="ItemCard__dest cover" href="javascript:;"></a>
                  <figure className="ItemCard__thumb">
                    <img
                      src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720480941/002_mltlgi.jpg"
                      height="340"
                      width="510"
                      alt=""
                    />
                    <span className="shadow cover"></span>
                  </figure>
                </div>
              </div>
              <div className="column">
                <div className="ItemCard">
                  <a className="ItemCard__dest cover" href="javascript:;"></a>
                  <figure className="ItemCard__thumb">
                    <img
                      src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720480978/005_ma60jz.jpg"
                      height="340"
                      width="510"
                      alt=""
                    />
                    <span className="shadow cover"></span>
                  </figure>
                </div>
              </div>
              <div className="column">
                <div className="ItemCard">
                  <a className="ItemCard__dest cover" href="javascript:;"></a>
                  <figure className="ItemCard__thumb">
                    <img
                      src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720481122/009_ckrljp.jpg"
                      height="340"
                      width="510"
                      alt=""
                    />
                    <span className="shadow cover"></span>
                  </figure>
                </div>
              </div>
              <div className="column">
                <div className="ItemCard">
                  <a className="ItemCard__dest cover" href="javascript:;"></a>
                  <figure className="ItemCard__thumb">
                    <img
                      src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720481186/004_eywbch.jpg"
                      height="340"
                      width="510"
                      alt=""
                    />
                    <span className="shadow cover"></span>
                  </figure>
                </div>
              </div>
              <div className="column">
                <div className="ItemCard">
                  <a className="ItemCard__dest cover" href="javascript:;"></a>
                  <figure className="ItemCard__thumb">
                    <img
                      src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720481261/001_qkxtas.jpg"
                      height="340"
                      width="510"
                      alt=""
                    />
                    <span className="shadow cover"></span>
                  </figure>
                </div>
              </div>
              <div className="column">
                <div className="ItemCard">
                  <a className="ItemCard__dest cover" href="javascript:;"></a>
                  <figure className="ItemCard__thumb">
                    <img
                      src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720481526/015_ubds5w.jpg"
                      height="340"
                      width="510"
                      alt=""
                    />
                    <span className="shadow cover"></span>
                  </figure>
                </div>
              </div>
              <div className="column">
                <div className="ItemCard">
                  <a className="ItemCard__dest cover" href="javascript:;"></a>
                  <figure className="ItemCard__thumb">
                    <img
                      src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720481566/018_h8ahio.jpg"
                      height="340"
                      width="510"
                      alt=""
                    />
                    <span className="shadow cover"></span>
                  </figure>
                </div>
              </div>
              <div className="column">
                <div className="ItemCard">
                  <a className="ItemCard__dest cover" href="javascript:;"></a>
                  <figure className="ItemCard__thumb">
                    <img
                      src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720481609/006_fu8jmh.jpg"
                      height="340"
                      width="510"
                      alt=""
                    />
                    <span className="shadow cover"></span>
                  </figure>
                </div>
              </div>
              <div className="column">
                <div className="ItemCard">
                  <a className="ItemCard__dest cover" href="javascript:;"></a>
                  <figure className="ItemCard__thumb">
                    <img
                      src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720481645/011_fjp1rt.jpg"
                      height="340"
                      width="510"
                      alt=""
                    />
                    <span className="shadow cover"></span>
                  </figure>
                </div>
              </div>
              <div className="column">
                <div className="ItemCard">
                  <a className="ItemCard__dest cover" href="javascript:;"></a>
                  <figure className="ItemCard__thumb">
                    <img
                      src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720481663/010_qxietf.jpg"
                      height="340"
                      width="510"
                      alt=""
                    />
                    <span className="shadow cover"></span>
                  </figure>
                </div>
              </div>
              <div className="column">
                <div className="ItemCard">
                  <a className="ItemCard__dest cover" href="javascript:;"></a>
                  <figure className="ItemCard__thumb">
                    <img
                      src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720481714/017_q1ccc7.jpg"
                      height="340"
                      width="510"
                      alt=""
                    />
                    <span className="shadow cover"></span>
                  </figure>
                </div>
              </div>
              <div className="column">
                <div className="ItemCard">
                  <a className="ItemCard__dest cover" href="javascript:;"></a>
                  <figure className="ItemCard__thumb">
                    <img
                      src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720481826/016_mza4wm.jpg"
                      height="340"
                      width="510"
                      alt=""
                    />
                    <span className="shadow cover"></span>
                  </figure>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Slider */}
      <BannerSlider />
      {/* TEXT IMAGE SECTION 1*/}
      <div className="w-full">
        <div className="w-full my-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap">
            <div className="w-full md:w-1/2">
              {/* <h5 className="text-xl md:text-2xl text-[#5114AE] font-semibold z-50 mb-3">
                Logo Design
              </h5> */}
              <h2 className="text-2xl md:text-4xl text-slate-800 font-bold mb-4 md:mb-6">
                Simplify Your Signature
                <br />
                Lettermarks
              </h2>
              <p className="text-gray-500 text-sm md:text-base my-4 md:my-6">
                <span className="font-semibold">
                  Upgrade Your Brand with Elegant Lettermarks
                </span>
                <br />
                <br />
                Streamline your brand identity with our Lettermark Logo Design
                service. By condensing your brand name into initials,
                lettermarks offer a simplified yet sophisticated visual cue
                that’s easy to recognize. Ideal for brands with lengthy names,
                these logos combine typography and design finesse to create a
                lasting symbol of your brand’s excellence.
                <br />
                <br />
                <span className="font-semibold">
                  Design a Timeless Monogram Identity
                </span>
                <br />
                <br />
                Design a Timeless Monogram Identity Focus on the essentials with
                lettermarks that incorporate simplicity with style. Our designs
                are tailored to encapsulate your brand’s essence in a few
                letters, crafting a monogram that’s as elegant as it is
                effective.
              </p>
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 mt-5">
                <GradientButton
                  text="Let's Get Started"
                  onClick={() => openModal(setIsModalOpen)}
                />
                <OutlineButton text="Chat With Us" />
              </div>
            </div>
            <div className="w-full md:w-1/2 mt-8 md:mt-0">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724955031/sq1-1-1024x1024_f5qk4i.jpg"
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

      {/* TEXT IMAGE SECTION 2 */}
      <div className="w-full">
        <div className="w-full my-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center flex-wrap">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724955133/1dfc87a500c12eff8aa1b87cf81f88be-1024x1024_vxcb2r.png"
                alt="design2"
                width={500}
                height={500}
                objectFit="contain"
                className="mx-auto md:mx-0"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl text-slate-800 font-bold mb-4 md:mb-6">
                Brandmarks
              </h2>
              <p className="text-gray-500 text-sm md:text-base my-4 md:my-6">
                <span className="font-semibold">
                  Capture Your Brand Essence with Iconic Symbols
                </span>
                <br />
                <br />
                Tell your brand’s story without a single word using our
                Brandmark Logo Design service. Symbols and icons have the power
                to convey complex ideas and emotions, making brandmarks a potent
                tool for universal brand recognition. Ideal for global brands or
                those seeking a minimalist aesthetic, our brandmarks distill
                your brand’s identity into a single, impactful image.
                <br />
                <br />
                <span className="font-semibold">
                  Forge a Universal Connection with Iconic Brandmarks
                </span>
                <br />
                <br />
                Let a symbol speak a thousand words. Our creative process hones
                in on your brand’s core values, translating them into a visual
                icon that resonates across cultures and languages, ensuring your
                brand’s message is seen and felt worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* TEXT IMAGE SECTION 3 */}
      <div className="w-full">
        <div className="w-full my-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center flex-wrap">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-4xl text-slate-800 font-bold mb-4 md:mb-6">
                Authority in Every Design with
                <br />
                The Art of Emblem Logos
              </h2>
              <p className="text-gray-500 text-sm md:text-base my-4 md:my-6">
                <span className="font-semibold">
                  Craft an Emblem of Trust and Tradition
                </span>
                <br />
                <br />
                Blend heritage and sophistication with our Emblem Logo Design
                service. Emblems weave your brand name into intricate designs
                that resemble crests or seals, imbuing your brand with a sense
                of authority and tradition. Perfect for institutions, luxury
                brands, or any business aiming to project timelessness, emblem
                logos stand as a mark of distinction.
                <br />
                <br />
                <span className="font-semibold">
                  Seal Your Brand’s Legacy with Emblem Logos
                </span>
                <br />
                <br />
                Create a lasting legacy with emblem designs that command
                respect. Our custom emblems are meticulously formulated,
                combining your brand’s history and vision into a logo that
                promises quality and trust at first glance.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724955440/Logo_icon_only_dbvdxy.webp"
                alt="design2"
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
        <div className="max-w-6xl mx-auto">
          <h3 className="px-4 text-xl text-center text-[#5114AE] font-bold z-50 md:text-3xl md:px-0">
            CUSTOM LOGO DESIGN AGENCY IN THE USA | CREATIVE LOGO DESIGNING
            SERVICES
          </h3>
          <p className="px-4 text-sm text-gray-500 text-center font-bold mt-5 md:text-base md:px-0">
            We Provide Expert Logo Design Services Making Premium Custom Logo
            Designs That Follow Industry Trends
          </p>
        </div>
        {/* TEXT IMAGE SECTION 4 */}
        <div className="w-full my-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center flex-wrap">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720489184/logo-3_qmekx8.jpg"
                alt="design2"
                width={500}
                height={500}
                objectFit="contain"
                className="mx-auto md:mx-0"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl text-slate-800 font-bold mb-4 md:mb-6">
                ICONIC LOGO DESIGN
              </h2>
              <p className="text-gray-500 text-sm md:text-base my-4 md:my-6">
                Iconic logos are the simplest & leave an impression instantly.
                The TechCraft is here to let you create a stunning and
                noticeable iconic logo for your brand on the go. The vast
                collection of iconic logo designs available in our portfolio
                will let you come up with your desired logo. You can easily
                update or change everything about the design and swap fonts,
                colors, backgrounds as well as completely customize according to
                your need.
                <br />
                <br />
                That is why hiring a professional designer is important which
                design your logo in a perfect way which must be a meaningful,
                attractive, and easily recognize your brand. Our professional
                has years of experience in creating logo designs that are now
                regarded as a benchmark because of their attractiveness. If
                you're seeking for a top-notch logo designer, your search has
                ended. Just send us a message, and we'll respond to all your
                queries.
                <br />
                <br />
                Professional Iconic Logo Designing
                <br />
                Quality of Timelessness
                <br />
                100% Customer Satisfaction is Guaranteed.
              </p>
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 5 */}
        <div className="w-full my-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center flex-wrap">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-4xl text-slate-800 font-bold mb-4 md:mb-6">
                2D ANIMATED LOGO DESIGN
              </h2>
              <p className="text-gray-500 text-sm md:text-base my-4 md:my-6">
                While there are numerous reasons why you may need 2D logo
                animation, this one is the most necessary. Because they tend to
                keep the viewer's attention on the message longer than typical
                logos, 2D logos are really a good and attractive idea. We all
                know that a logo needs to be eye-catching and stay attention for
                hours in order to attract customers.
                <br />
                <br />
                One business can attract much more visitors to their websites
                than competitors who simply utilize random logos by creating 2D
                logo animation designs. The main audience is constantly seeking
                out enjoyable and upbeat content. When a business improves its
                brand image each year with a new logo design, it promotes
                goodwill and professionalism and shows that it is growing and
                changing.
                <br />
                <br />
                Professional 2D Logo Designing
                <br />
                Rapid Turnover Time
                <br />
                24*7 Customer Services
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720489409/logo-4_spsehz.webp"
                alt="design2"
                width={500}
                height={500}
                objectFit="contain"
                className="mx-auto md:ml-auto"
              />
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 6 */}
        <div className="w-full my-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center flex-wrap">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720489858/logo-5_zpfj1f.jpg"
                alt="design2"
                width={500}
                height={500}
                objectFit="contain"
                className="mx-auto md:mx-0"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl text-slate-800 font-bold mb-4 md:mb-6">
                3D ANIMATED LOGO DESIGN
              </h2>
              <p className="text-gray-500 text-sm md:text-base my-4 md:my-6">
                Keep it straightforward but attractive. Many clients are
                concerned about the design of the features in their logo because
                they believe that a simple logo would be boring and give their
                customers and visitors the impression that they are neglecting.
                <br />
                <br />
                According to TechCraft, the best way to calm these worries is to
                select 3D logo design services in the United States. While
                keeping things simple, 3D logo design services can add some
                detail and depth into the overall Logo Design. As a result, 3D
                logo designs are unique and keep your branding lively and new.
                <br />
                <br />
                Professional 3D Logo Designing
                <br />
                Unlimited Changes to Logos
                <br />
                100% Customer Satisfaction is Guaranteed.
              </p>
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 7 */}
        <div className="w-full my-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center flex-wrap">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-4xl text-slate-800 font-bold mb-4 md:mb-6">
                TYPOGRAPHIC LOGO DESIGN
              </h2>
              <p className="text-gray-500 text-sm md:text-base my-4 md:my-6">
                Finding a new company name might be challenging. Contact with
                our professional for your typography business name who create a
                unique name for your business and view endless typographic style
                to launch your brand.
                <br />
                <br />
                TechCraft experts generate an attractive typographic logo which
                not only looks good but also boosts your brand image. A
                typography logo can play a great role in building brand image
                and awareness. This type of logo also expresses your business a
                lot as well as represents your product. Our experts provide the
                best fonts and letter designs that give off an up-scale and
                glamorous vibe.
                <br />
                <br />
                Endless Typographic Logo Designs
                <br />
                Rapid Turnover Time
                <br />
                100% Customer Satisfaction is Guaranteed.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720489880/logo-6_f5aatf.jpg"
                alt="design2"
                width={500}
                height={500}
                objectFit="contain"
                className="mx-auto md:ml-auto"
              />
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 8 */}
        <div className="w-full my-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center flex-wrap">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720489911/logo-7_lsvuhh.jpg"
                alt="design2"
                width={500}
                height={500}
                objectFit="contain"
                className="mx-auto md:mx-0"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl text-slate-800 font-bold mb-4 md:mb-6">
                SYMBOLIC LOGO DESIGN
              </h2>
              <p className="text-gray-500 text-sm md:text-base my-4 md:my-6">
                A symbolic logo uses a symbol to represent a business in a
                conceptual way. It only includes visual elements that interpret
                the message of the organization or business is trying to
                deliver. A symbolic logo can be engaging and eye-catching. It
                can be used alone as just an image without words or in
                combination with the name of your business, agency, or product.
                <br />
                <br />
                As we were aware that a symbolic logo style would not have any
                words, you can only use visuals to interpret what your design
                stands for. There are various ideas that our expert knows very
                well like they know which symbol is perfect for your business,
                what it means, and clarify your business product or services.
                <br />
                <br />
                Expert Symbolic Logo Designing
                <br />
                Rapid Turnover Time
                <br />
                24*7 Customer Services
              </p>
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 9 */}
        <div className="w-full my-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center flex-wrap">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-2xl md:text-4xl text-slate-800 font-bold mb-4 md:mb-6">
                Enliven Your Brand with Mascots <br /> Logo Designs
              </h2>
              <p className="text-gray-500 text-sm md:text-base my-4 md:my-6">
                <span className="font-semibold">
                  Animate Your Brand Identity with Mascots
                </span>
                <br />
                <br />
                Infuse your branding with personality and warmth with our Mascot
                Logo Design service. Mascots are more than just logos; they’re
                characters that become the face of your brand, engaging and
                interacting with your audience in a way that builds familiarity
                and affection. Ideal for family-friendly brands or those looking
                to create a deep emotional connection, mascots make your brand
                approachable and memorable.
                <br />
                <br />
                <span className="font-semibold">
                  A Creative Character That Captivates Your Audience
                </span>
                <br />
                <br />
                Let a mascot tell your brand’s story. From concept to creation,
                we develop mascot characters that embody your brand’s values and
                speak directly to your target audience, turning every encounter
                with your brand into a memorable experience.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <Image
                src="https://techcraftinc.com/wp-content/uploads/2024/03/logos.webp"
                alt="design2"
                width={500}
                height={500}
                objectFit="contain"
                className="mx-auto md:ml-auto"
              />
            </div>
          </div>
        </div>

        {/* TEXT IMAGE SECTION 10 */}
        <div className="w-full my-16 px-4 md:px-8">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row flex-wrap">
            <div className="w-full md:w-1/2 mb-8 md:mb-0">
              <Image
                src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720489944/logo-9_sqgj7k.png"
                alt="design2"
                width={500}
                height={500}
                objectFit="contain"
                className="mx-auto md:mx-0"
              />
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-2xl md:text-4xl text-slate-800 font-bold mb-4 md:mb-6">
                The Right Way For Designing Logos
              </h2>
              <p className="text-gray-500 text-sm md:text-base my-4 md:my-6">
                It doesn’t matter if you are giving out business cards,
                letterhead, or brochures, your logo will be the first thing
                noticed. A company’s logo stays with them for a long time. Due
                to rebranding costs, it rarely gets changed, so rushing your
                logo project could turn out to be a false economy. Getting it
                right should be one of the fundamentals of your branding
                strategy. TechCraft ensures that the impression you want to make
                with a logo is communicated to your target audience in all
                branding initiatives from the very beginning, understanding your
                branding needs. Positive interactions are the largest boost in
                promoting your business.
                <br />
                <br />
                We can provide logo services at a very worthwhile cost, offering
                value for money with our excellent services. We are an
                affordable logo design company in the USA, catering to small,
                medium, and even fortune-sized businesses. Our professional logo
                designers have years of industry experience and are up-to-date
                with the latest design trends. What more could you ask for when
                looking for logo design services in the USA?
                <br />
                <br />
                Our team of creative designers delivers artistically pleasing
                logos. The professional team at TechCraft houses highly skilled
                and knowledgeable logo experts. We develop the greatest
                corporate logo designs for brands, regardless of how specific
                the requirements are. We use only modern tools and techniques to
                design your logos, ensuring your business makes a mark across
                all platforms. We are committed to providing visually impressive
                logos that give businesses a competitive edge. We create
                versatile designs and deliver accurate versions in various
                formats, including PNG, JPEG, SVG, AI, EPS, and PDF.
              </p>
            </div>
          </div>
        </div>
      </section>
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
            Our Portfolio
          </h5>
          <p className="px-2 text-center text-base text-[#687087] mt-3 md:px-0 md:max-w-2xl md:mx-auto">
            We are a thriving logo design company, delivering customer
            satisfaction with innovation. Look at our portfolio to comprehend
            our work!
          </p>
        </div>

        {/* Portfolio Content */}
        <div className="max-w-[1400px] mx-auto flex flex-wrap my-8 md:my-16 px-4 md:px-0 justify-center md:justify-between">
          {logoDesign.map((imgSrc, i) => (
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

export default LogoDesign;
