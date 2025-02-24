/* eslint-disable react/no-unescaped-entities */
import React, { useRef } from "react";
import { createPortal } from "react-dom";
import { IoPersonSharp } from "react-icons/io5";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { IoIosSend } from "react-icons/io";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import ReCAPTCHA from "react-google-recaptcha";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
  captcha: string;
};

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup.string().email("Invalid email format").required("Email is required"),
  phone: yup
  .string()
  .test("phone", "Invalid phone number", (value) => {
    if (!value) return false;
    const numberOnly = value.replace(/[^\d]/g, "");
    return numberOnly.length >= 10;
  })
  .required("Phone number is required"),
  message: yup.string().required("Message is required"),
  captcha: yup.string().required("Please complete the CAPTCHA"),
});

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  const [loading, setLoading] = React.useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
    reset
  } = useForm<FormData>({
    resolver: yupResolver(schema)
  });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      const response = await fetch("/api/send-email2", { 
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
  
      const result = await response.json();
      console.log("Server response:", result); // Debugging
      
      if (result.success) {
        reset();
        onClose();
        router.push("/thank-you");
      } else {
        console.error("Form Submission Failed:", result);
        alert(`Error: ${result.message}`); // Show error to user
      }
    } catch (error) {
      console.error("An error occurred:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };
  

  if (!isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity" onClick={onClose}></div>
      <div
        ref={modalRef}
        className="bg-white rounded-lg overflow-hidden shadow-xl transform transition-transform duration-300 max-w-2xl w-full z-10 animate-slide-in"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="border-b border-gray-300 py-7 relative">
          <button
            className="absolute top-2 right-4 text-gray-500 hover:text-gray-800 font-bold text-xl"
            onClick={onClose}
          >
            &times;
          </button>
        </div>
        <div className="px-16">
          <h2 className="text-[1.7rem] text-[#5114AE] pb-3 pl-4 mt-5 font-bold border-l-8 border-[#5114AE]">
            We are here to help!
          </h2>
          <p className="text-slate-600 text-sm mt-3">
            Providing you the perfect solution for your business needs. Let's
            work together and unlock doors to success.
          </p>
          <form className="py-8" onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <div className="w-full px-3 flex items-center border border-gray-400 rounded-md">
                <IoPersonSharp size={16} color="#5114AE" />
                <input
                  type="text"
                  placeholder="Full Name *"
                  {...register("name")}
                  className="w-full py-3 text-sm placeholder:text-slate-600 border-none bg-transparent focus:outline-none focus:ring-0"
                />
              </div>
              {errors.name && <p className="text-red-500 text-sm mt-1 px-3">{errors.name.message}</p>}
            </div>
            <div className="mb-4 flex items-center space-x-6">
              <div className="w-1/2">
                <div className="px-3 flex items-center border border-gray-400 rounded-md">
                  <FaEnvelope size={16} color="#5114AE" />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    {...register("email")}
                    className="w-full py-3 text-sm placeholder:text-slate-600 border-none bg-transparent focus:outline-none focus:ring-0"
                  />
                </div>
                {errors.email && <p className="text-red-500 text-sm mt-1 px-3">{errors.email.message}</p>}
              </div>
              <div className="w-1/2">
                <div className="px-3 flex items-center border border-gray-400 rounded-md">
                  <FaPhoneAlt size={16} color="#5114AE" />
                  <input
                    type="tel"
                    placeholder="Phone No *"
                    {...register("phone")}
                    className="w-full py-3 text-sm placeholder:text-slate-600 border-none bg-transparent focus:outline-none focus:ring-0"
                  />
                </div>
                {errors.phone && <p className="text-red-500 text-sm mt-1 px-3">{errors.phone.message}</p>}
              </div>
            </div>
            <div className="w-full px-3 flex border border-gray-400 rounded-md">
                <IoIosSend size={20} color="#5114AE" style={{ marginTop: "10px" }} />
                <textarea
                  rows={5}
                  {...register("message")}
                  className="w-full border-none bg-transparent text-sm placeholder:text-slate-600 resize-none focus:outline-none focus:ring-0"
                  placeholder="To help us understand better, enter a brief description about your project."
                />
              </div>
              {errors.message && <p className="text-red-500 text-sm mt-1 px-3">{errors.message.message}</p>}
        
            <div className="transform scale-90 mt-4 md:scale-100  text-center flex justify-center items-center mx-auto ">
              <ReCAPTCHA
                sitekey="6Ldilt4qAAAAALPYM37jOcJ-BRc6jEZn08IPlfnR"
                onChange={(token: string | null) => token && setValue("captcha", token)}
              />
              {errors.captcha && (
                <p className="text-red-500 text-sm text-center mt-2">
                  {errors.captcha.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full text-center flex mt-4 justify-center items-center mx-auto max-w-[200px] text-base font-semibold cursor-pointer py-4 px-8 bg-gradient-to-r from-[#5114AE] to-[#802FCE] text-white rounded-full uppercase transition-all duration-300 hover:shadow-lg hover:opacity-90 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
