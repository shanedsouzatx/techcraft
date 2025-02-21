/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import PhoneInput from "react-phone-input-2";
import paymentLogo from "../../public/assets/images/pay-img.png";
import Logo from "../../public/assets/images/tech-craft-logo.png";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation"; // Import useRouter
import Contact from "./Contact/Contact"; // Change to default import
const Footer = () => {
  const pathname = usePathname();
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      name,
      email,
      phone,
      service,
      message,
    };

    try {
      const response = await fetch(
        "https://redixtechnologies-4d715954081e.herokuapp.com/api/v1/service-lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (response.ok) {
        router.push("/thank-you"); // Navigate to Thank You page
      } else {
        alert("Failed to submit the form. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting the form:", error);
      alert("An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Footer Contact Form */}
      {pathname !== "/blog/" && (
        <div className="my-16">
          <div className="max-w-6xl mx-auto">
            {/* Heading */}
            <div className="flex flex-col items-center" data-aos="zoom-in">
              <h3 className="text-center font-bold text-2xl md:text-4xl">
                Let's Join Forces To Create Memorable Experiences
              </h3>
              <p className="text-gray-500 mt-5 text-sm text-center md:text-base">
                Get in touch today, and let's start shaping the future of your
                online success together.
              </p>
            </div>

            {/* FORM */}
            {/* <div
              className="w-full bg-white py-10 px-6 my-10 footer-form-shadow"
              data-aos="zoom-in"
            > */}
              {/* <div className="flex flex-col">
                <h3 className="text-3xl text-center md:text-left font-semibold">
                  Ready to Experience Business Growth Beyond Limits?
                </h3>
                <p className="text-gray-500 text-center md:text-left text-sm mt-5 max-w-2xl">
                  Contact us now to access the best-in-class web design and
                  digital marketing solutions. Fill up the form below abd get
                  ready to witness your sales skyrocket and business expand
                  exponentially.
                </p>
              </div> */}
              {/* INPUTS */}
              {/* <form
                className="w-full flex flex-col gap-4 my-10"
                onSubmit={handleSubmit}
              >
                <div className="w-full md:flex md:gap-4">
                  <div className="w-full md:w-1/2">
                    <input
                      type="text"
                      placeholder="Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#0b667a] focus:border-[#5114AE] block w-full p-4"
                      required
                    />
                    <input
                      type="email"
                      placeholder="Email Address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#0b667a] focus:border-[#5114AE] block w-full p-4 mt-4"
                      required
                    />
                    <PhoneInput
                      country={"us"}
                      value={phone}
                      onChange={setPhone}
                      inputStyle={{
                        width: "100%",
                        borderRadius: "9999px",
                        backgroundColor: "#F9FAFB",
                        borderColor: "#D1D5DB",
                        paddingLeft: "56px",
                        paddingTop: "25px",
                        paddingBottom: "25px",
                      }}
                      buttonStyle={{
                        borderRadius: "9999px 0 0 9999px",
                        backgroundColor: "#F9FAFB",
                        borderColor: "#D1D5DB",
                      }}
                      containerClass="mt-4"
                    />
                    <select
                      id="interestedIn"
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-[#0b667a] focus:border-[#5114AE] block w-full p-4 mt-4"
                      required
                    >
                      <option value="" hidden>
                        I Am Interested In
                      </option>
                      <option value="Logo Design">Logo Design</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Website Development">
                        Website Development
                      </option>
                      <option value="Video Animation">Video Animation</option>
                      <option value="E-Commerce">E-Commerce</option>
                      <option value="Branding">Branding</option>
                    </select>
                  </div>
                  <div className="w-full mt-5 md:w-1/2 md:mt-0">
                    <textarea
                      rows={8}
                      placeholder="Leave Your message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl focus:ring-[#0b667a] focus:border-[#5114AE] block w-full p-4 resize-none"
                      required
                    />
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full text-sm font-medium cursor-pointer py-4 mt-4 bg-gradient-to-r from-[#5114AE] to-[#802FCE] text-white rounded-full relative overflow-visible"
                    >
                      {loading ? (
                        <>
                          <svg
                            aria-hidden="true"
                            role="status"
                            className="inline w-4 h-4 me-3 text-white animate-spin"
                            viewBox="0 0 100 101"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                              fill="#E5E7EB"
                            />
                            <path
                              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                              fill="currentColor"
                            />
                          </svg>
                          Submitting...
                        </>
                      ) : (
                        "Submit"
                      )}
                    </button>
                  </div>
                </div>
              </form> */}
              <Contact />
            {/* </div> */}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-[#1B1B1B] py-16 md:py-20 pb-44 md:pb-32 relative">
        <div className="max-w-6xl mx-auto flex flex-col space-y-8 md:flex-row md:justify-between md:space-y-0">
          <div className="md:max-w-64 px-4 md:px-0">
            <Link href="/" className="flex items-center cursor-pointer">
              <Image src={Logo} alt="TechCraftLogo" width={190} height={190} />
            </Link>
            {/* <h3 className="text-white font-semibold text-2xl md:pb-2">
              Brand Design
            </h3> */}
            <p className="text-sm text-white my-3 md:my-4">
              Tech Craft is a full-service digital marketing and web design
              agency eager to help you build a robust online presence with
              top-notch digital marketing and custom web development services.
              Build, Attract, Convert, and Grow with Tech Craft!
            </p>
            {/* Icons section */}
            <div className="flex items-center gap-3 mt-4">
              <Link
                href="https://www.facebook.com/techcraft.inc/"
                target="_blank"
                className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] flex justify-center items-center  h-10 w-10 rounded-full cursor-pointer"
              >
                <FaFacebook color="#ffffff" size={20} />
              </Link>
              <Link
                href="https://www.instagram.com/techcraftinc/"
                target="_blank"
                className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] flex justify-center items-center  h-10 w-10 rounded-full cursor-pointer"
              >
                <FaInstagram color="#ffffff" size={20} />
              </Link>
              <Link
                href="https://twitter.com/techcraftinc"
                target="_blank"
                className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] flex justify-center items-center h-10 w-10 rounded-full cursor-pointer"
              >
                <FaTwitter color="#ffffff" size={20} />
              </Link>
              <Link
                href="https://www.linkedin.com/company/tech-craft-inc/"
                target="_blank"
                className="bg-gradient-to-r from-[#5114AE] to-[#802FCE] flex justify-center items-center h-10 w-10 rounded-full cursor-pointer"
              >
                <FaLinkedin color="#ffffff" size={20} />
              </Link>
            </div>
          </div>
          <div className="md:max-w-64 px-4 md:px-0">
            <h3 className="text-white inline-block font-semibold text-2xl pb-1 border-b-2 border-[#5114AE]">
              Other Services
            </h3>
            <ul className="mt-4">
              <li className="pt-1 md:pt-2">
                <Link href="/logo-design" className="text-white text-sm">
                  Logo Design
                </Link>
              </li>
              <li className="pt-1 md:pt-2">
                <Link
                  href="/creative-copywriting"
                  className="text-white text-sm"
                >
                  Creative Copywriting
                </Link>
              </li>
              <li className="pt-1 md:pt-2">
                <Link
                  href="/website-development"
                  className="text-white text-sm"
                >
                  Website Development
                </Link>
              </li>
              <li className="pt-1 md:pt-2">
                <Link href="/digital-marketing" className="text-white text-sm">
                  Digital Marketing
                </Link>
              </li>
              <li className="pt-1 md:pt-2">
                <Link
                  href="/ecommerce-solutions"
                  className="text-white text-sm"
                >
                  Ecommerce Web Solutions
                </Link>
              </li>
              <li className="pt-1 md:pt-2">
                <Link href="/branding" className="text-white text-sm">
                  Branding
                </Link>
              </li>
              <li className="pt-1 md:pt-2">
                <Link href="/video-animation" className="text-white text-sm">
                  Video Animation
                </Link>
              </li>
              <li className="pt-1 md:pt-2">
                <Link href="/mobile-application" className="text-white text-sm">
                  App Design
                </Link>
              </li>
              <li className="pt-1 md:pt-2">
                <Link
                  href="/social-media-marketing"
                  className="text-white text-sm"
                >
                  Social Media Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:max-w-64 px-4 md:px-0 ">
            <h3 className="text-white inline-block font-semibold text-2xl pb-1 border-b-2 border-[#5114AE]">
              Quick Links
            </h3>
            <ul className="mt-4">
              <li className="pt-0 md:pt-2">
                <Link href="/" className="text-white text-sm">
                  Home
                </Link>
              </li>
              <li className="pt-0 md:pt-2 hover:text-blue-500">
                <Link href="/about-us" className="text-white text-sm">
                  About
                </Link>
              </li>
              <li className="pt-0 md:pt-2">
                <Link href="/portfolio" className="text-white text-sm">
                  Portfolio
                </Link>
              </li>
              <li className="pt-0 md:pt-2">
                <Link href="/pricing" className="text-white text-sm">
                  Pricing
                </Link>
              </li>
              <li className="pt-0 md:pt-2">
                <Link href="/contact-us" className="text-white text-sm">
                  Contact Us
                </Link>
              </li>
              <li className="pt-0 md:pt-2">
                <Link href="/blog" className="text-white text-sm">
                  Blogs
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:max-w-64 px-4 md:px-0">
            <h3 className="text-white inline-block font-semibold text-2xl pb-1 border-b-2 border-[#5114AE]">
              Contact Details
            </h3>
            <ul className="mt-4">
              <li className="pt-1 md:pt-2 text-white text-sm">
                Phone: (667) 423-5532
              </li>
              <li className="pt-1 md:pt-2 text-white text-sm">
                Address: 30 N Gould St Ste R, Sheridan, WY 82801, United States
              </li>
              <li className="pt-1 md:pt-2 text-white text-sm">
                Email: info@techcraftinc.com
              </li>
              <li className="pt-3 md:pt-4">
                <Image
                  src={paymentLogo}
                  alt="pay-img"
                  height={200}
                  width={200}
                  objectFit="contain"
                />
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-black absolute bottom-0 w-full">
          <div className="max-w-6xl mx-auto py-6 flex flex-col md:flex-row md:justify-between md:items-center">
            <span className="text-sm mb-3 text-center text-white">
              Tech Craft INC. All Rights Reserved.
            </span>
            <div className="text-white text-center text-sm flex flex-col md:flex-row md:items-center gap-2 md:gap-10">
              <Link href="/refund-policy">Refund Policy</Link>
              <Link href="/terms-and-conditions">Terms of Use </Link>
              <Link href="/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
