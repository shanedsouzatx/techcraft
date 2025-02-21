"use client";
import React, { useEffect, useState } from "react";
import { FaEnvelope, FaPhone } from "react-icons/fa";
import AOS from "aos";

const MyLayout = ({ children }: { children: React.ReactNode }) => {
  // Step 1: Add state for visibility
  const [isChatVisible, setIsChatVisible] = useState(false);
  const [isPhoneVisible, setIsPhoneVisible] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://embed.tawk.to/6599a6040ff6374032bd4218/1hjg310ro";
    script.async = true;
    script.setAttribute("crossorigin", "*");
    document.body.appendChild(script);
  }, []);

  useEffect(() => {
    AOS.init({
      // Optional settings:
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div>
        {children}
        <div className="hidden md:fixed right-0 top-1/3 transform -translate-y-1/2 md:flex flex-col items-end space-y-4 z-50  transition-all duration-1000 ease-in-out">
          <div
            className="flex items-center cursor-pointer"
            onMouseEnter={() => setIsChatVisible(true)}
            onMouseLeave={() => setIsChatVisible(false)}
          >
            {/* Envelope Icon */}
            <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#5114AE] to-[#802FCE] text-white rounded-tl-full rounded-bl-full">
              <FaEnvelope size={20} />
            </div>

            {/* Chat With Us Div */}
            <div
              className={`bg-white shadow-2xl w-52 h-14 transition-all duration-1000 ease-linear ${
                isChatVisible ? "block " : "hidden "
              }`}
              onClick={() => {
                if (window.Tawk_API) {
                  window.Tawk_API.maximize();
                }
              }}
            >
              <span className="text-lg text-slate-950 h-full flex items-center ml-4">
                Chat With Us
              </span>
            </div>
          </div>

          <div
            className="flex items-center cursor-pointer"
            onMouseEnter={() => setIsPhoneVisible(true)}
            onMouseLeave={() => setIsPhoneVisible(false)}
          >
            {/* Envelope Icon */}
            <div className="flex items-center justify-center w-14 h-14 bg-gradient-to-r from-[#5114AE] to-[#802FCE] text-white rounded-tl-full rounded-bl-full">
              <FaPhone size={20} />
            </div>

            {/* Chat With Us Div */}
            <div
              className={`bg-white shadow-2xl w-52 h-14 transition-all duration-1000 ease-linear ${
                isPhoneVisible ? "block " : "hidden "
              }`}
            >
              <a
                href="tel:+18583650790"
                className="text-lg text-slate-950 h-full flex items-center ml-4"
              >
                (667) 423-5532
              </a>
            </div>
          </div>
          <div className="flex justify-center items-center fixed top-60 right-[-102px] w-64 p-4 bg-gradient-to-r from-[#5114AE] to-[#802FCE] text-white rounded-tl-3xl rounded-tr-3xl transform -rotate-90 cursor-pointer">
            <span className="text-sm font-semibold">
              60% OFF ON ALL SERVICES
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyLayout;
