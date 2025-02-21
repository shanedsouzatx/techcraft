import { closeModal, openModal } from "@/app/utils/HelperFunction";
import Image from "next/image";
import PricingModal from "./Modal/PricingModal";
import { useState } from "react";

const AllInOneCombo = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://res.cloudinary.com/dautl8x6a/image/upload/v1725048179/combo-bg-img_qz0hfp.webp')",
      }}
    >
      <div className="container mx-auto px-4 lg:px-8 max-w-6xl">
        <div className="flex flex-col lg:flex-row items-center gap-10">
          {/* Left Section */}
          <div className="text-white lg:w-1/2">
            <h3 className="text-lg font-semibold">
              EVERYTHING YOU NEED TO SAVE TIME
            </h3>
            <h2 className="text-3xl lg:text-4xl font-bold mt-4">
              All In One Combo
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
              {/* List Column 1 */}
              <ul className="space-y-3 text-sm">
                <li>
                  <h4 className="font-bold text-2xl pb-3">Logo Design</h4>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>Unlimited Logo Design Concepts</li>
                    <li>By 8 Dedicated Logo Designers</li>
                    <li>Unlimited Revisions</li>
                    <li>Branded Document</li>
                    <li>Corporate Profile</li>
                    <li>Turnaround Time 2 Business Days</li>
                  </ul>
                </li>
                <li className="pt-4">
                  <h4 className="font-bold text-2xl pb-3">Video Animation</h4>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>30 Seconds 2D Video Animation</li>
                    <li>Script Writing</li>
                    <li>Story Board</li>
                    <li>Voice Over</li>
                    <li>Animation with Sound Effect</li>
                  </ul>
                </li>
                <li className="pt-7">
                  <h4 className="font-bold text-2xl pb-3">
                    Social Media Designs
                  </h4>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>Facebook, Twitter, YouTube, LinkedIn</li>
                  </ul>
                </li>
              </ul>
              {/* List Column 2 */}
              <ul className="space-y-3 text-sm">
                <li>
                  <h4 className="font-bold text-2xl pb-3">Stationery Design</h4>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>Free Business Card Design</li>
                    <li>Free Letterhead Design</li>
                    <li>Free Envelope Design</li>
                    <li>Free Compliment Slip Design</li>
                    <li>Free Corporate Brochure (up to 6 Pages)</li>
                  </ul>
                </li>
                <li className="pt-4">
                  <h4 className="font-bold text-2xl pb-3">Website Design</h4>
                  <ul className="mt-2 space-y-1 pl-4 list-disc">
                    <li>Unlimited Packages Website</li>
                    <li>5 Stock Photos</li>
                    <li>1 Year Free Domain Name Registration</li>
                    <li>1 Year Free Hosting</li>
                    <li>Content Management System (CMS)</li>
                    <li>Contact Us Form</li>
                    <li>Search Engine Submission</li>
                    <li>1 Landing Page SDI</li>
                    <li>1 Blog Theme Design</li>
                  </ul>
                </li>
              </ul>
            </div>

            <div className="flex items-center justify-between">
              <button
                className="text-base font-semibold uppercase cursor-pointer py-3 px-8 mt-10 bg-gradient-to-r from-[#5114AE] to-[#802FCE] text-white rounded-full relative overflow-visible"
                onClick={() => openModal(setIsModalOpen)}
              >
                Order Now
              </button>
              <div className="pt-5">
                <span className="text-3xl font-extrabold">
                  <b>$4,999</b>
                </span>
                <br />
                <span className="text-2xl line-through">$9,999</span>
              </div>
            </div>
          </div>

          {/* Right Section - Image */}
          <div className="lg:w-1/2">
            <Image
              src="https://res.cloudinary.com/dautl8x6a/image/upload/v1725048062/112111-01-1024x1024_z6bf5q.webp"
              alt="All In One Combo"
              width={500}
              height={500}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
      </div>

      <PricingModal
        isOpen={isModalOpen}
        onClose={() => closeModal(setIsModalOpen)}
      />
    </section>
  );
};

export default AllInOneCombo;
