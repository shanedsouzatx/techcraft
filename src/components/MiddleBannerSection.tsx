/* eslint-disable react/no-unescaped-entities */
import { closeModal, openModal } from "@/app/utils/HelperFunction";
import React, { useState } from "react";
import Modal from "./Modal/Modal";
import { bannerImgSrc } from "@/constants/CloudinaryImgUrl";

const MiddleBannerSection = ({
  heading,
  subHeading,
}: {
  heading: string;
  subHeading: string;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section
      className="w-fullbg-no-repeat bg-cover text-white"
      style={{
        backgroundImage: `url(${bannerImgSrc})`,
      }}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between py-12">
        {/* Headings */}
        <div>
          <h2 className="text-white text-4xl font-bold">{heading}</h2>
          <h4 className="text-white text-2xl font-medium mt-2">{subHeading}</h4>
        </div>
        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button
            className="bg-white text-gray-700 font-semibold text-sm py-3 px-5 border border-gray-700 rounded-md"
            onClick={() => openModal(setIsModalOpen)}
          >
            Let's Get Started
          </button>
          <button
            className="bg-transparent text-white font-semibold text-sm py-3 px-5 border border-white rounded-md"
            onClick={() => {
              if (window.Tawk_API) {
                window.Tawk_API.maximize();
              }
            }}
          >
            Chat With Us
          </button>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => closeModal(setIsModalOpen)} />
    </section>
  );
};

export default MiddleBannerSection;
