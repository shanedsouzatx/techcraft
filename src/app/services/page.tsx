import React from "react";
import BannerSlider from "@/components/BannerSlider";
import HeroSection from "@/components/HeroSection";
import {
  contactHeroImgSrc,
  portfoilioBgImgSrc,
} from "@/constants/CloudinaryImgUrl";
import { ourServices } from "@/data/services";
import { OurServiceCard } from "@/components/OurServiceCard";
import { Testimonials } from "@/components/Testimonials";

const Services = () => {
  return (
    <section>
      {/* Hero Section */}
      <HeroSection
        heading="Our Services"
        para="At TechCraft, we bring your brand to life with innovative design solutions. Our team creates captivating digital experiences that set your brand apart in the fast-paced business world. From branding to user experience, we tailor our services to meet your unique needs and exceed expectations. Let's create something extraordinary together!"
        bgImgSrc={portfoilioBgImgSrc}
        backDropShadow="linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))"
      />
      {/* Slider */}
      <div className="mb-20">
        <BannerSlider />
      </div>

      {/* Our Services */}
      <div className="mb-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#5114AE] font-bold text-center">
            Our Services
          </h2>

          {/* Card Section */}
          {/* Card Section */}
          <div className="flex flex-wrap space-x-6 justify-center md:justify-start">
            {ourServices.map((el, idx) => (
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
    </section>
  );
};

export default Services;
