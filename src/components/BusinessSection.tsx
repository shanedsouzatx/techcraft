import { closeModal, openModal } from "@/app/utils/HelperFunction";
import { ctaImgSrc } from "@/constants/CloudinaryImgUrl";
import React, { useState } from "react";
import { FiPhone } from "react-icons/fi";
import Modal from "./Modal/Modal";

const BusinessSection = ({
  heading,
  subHeading,
  para,
  isPhoneIcon,
  btnText,
}: {
  heading?: string;
  subHeading: string;
  para: string;
  isPhoneIcon?: boolean;
  btnText: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleChat = () => {
    if (window.Tawk_API) {
      window.Tawk_API.maximize();
    }
  };

  return (
    <div
      className="pt-12 md:pt-[80px] mb-0 pb-0 mt-0 z-50 bg-no-repeat bg-cover"
      style={{
        backgroundImage: `url(${ctaImgSrc})`,
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex flex-wrap justify-between items-center">
        <div className="w-full md:w-1/2 mb-12 md:mb-0" data-aos="fade-right">
          <h2 className="text-white font-semibold text-xl md:text-[1.35rem]">
            {subHeading}
          </h2>
          {heading && (
            <h1 className="text-white font-semibold text-2xl md:text-5xl mt-4 md:mt-6">
              {heading}
            </h1>
          )}
          <p className="text-white text-sm md:text-base my-4 md:my-6 max-w-lg">
            {para}
          </p>
          <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-4 md:space-y-0">
            <button className="w-full md:w-auto flex items-center justify-center gap-2 border-2 border-white rounded-lg px-6 py-3 bg-gradient-to-r from-[#5114AE] to-[#802FCE] text-white">
              {isPhoneIcon && <FiPhone size={20} color="#ffffff" />}
              {btnText === "Let's Get Started" ? (
                <a onClick={() => openModal(setIsModalOpen)}>{btnText}</a>
              ) : (
                <a href="tel:+18583650790">{btnText}</a>
              )}
            </button>
            <button
              className="w-full md:w-auto border-2 border-white rounded-lg px-8 py-3 text-white hover:bg-[#802FCE]"
              onClick={handleChat}
            >
              Chat With Us
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 hidden md:block" data-aos="flip-right">
          <img
            src="https://res.cloudinary.com/dautl8x6a/image/upload/v1724876925/pngwing.com-12-1_pvtrlh.png"
            alt="cta-img"
            className="w-full object-contain"
          />
        </div>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => closeModal(setIsModalOpen)} />
    </div>
  );
};

export default BusinessSection;
