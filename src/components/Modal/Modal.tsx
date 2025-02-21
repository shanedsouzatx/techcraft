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
  phone: yup.string().test('phone', 'Invalid phone number', (value, context) => {
    if (!value) return false;
    
    // Remove country code and any non-digit characters
    const numberOnly = value.replace(/[^\d]/g, '');
    const countryCode = value.substring(0, 2);
    
    switch(countryCode) {
      case '1':  // US/Canada
        return numberOnly.length === 11; // Including country code
      case '44': // UK
        return numberOnly.length === 12; // Including country code
      case '92': // Pakistan
        return numberOnly.length === 12; // Including country code
      default:
        return numberOnly.length >= 10; // Default validation
    }
  }).required("Phone number is required"),
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
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY,
          name: data.name,
          email: data.email,
          phone: data.phone,
          message: data.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        reset();
        onClose();
        router.push("/thank-you");
      } else {
        console.error("Form Submission Failed:", result);
      }
    } catch (error) {
      console.error("An error occurred:", error);
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
            <div>
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
            </div>

            <div className="flex flex-col items-center gap-3">
              {/* Captcha Container */}
              <div className="w-full flex justify-center">
                <div className="transform scale-90 mt-4 md:scale-100">
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as string}
                    onChange={(token: string | null) => token && setValue("captcha", token)}
                  />
                  {errors.captcha && (
                    <p className="text-red-500 text-sm text-center mt-2">
                      {errors.captcha.message}
                    </p>
                  )}
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full max-w-[200px] text-base font-semibold cursor-pointer 
                  py-4 px-8 bg-gradient-to-r from-[#5114AE] to-[#802FCE] 
                  text-white rounded-full uppercase transition-all duration-300 
                  hover:shadow-lg hover:opacity-90 disabled:opacity-70 
                  disabled:cursor-not-allowed"
              >
                {loading ? (
                  <div className="flex items-center justify-center gap-2">
                    <svg
                      aria-hidden="true"
                      role="status"
                      className="inline w-4 h-4 text-white animate-spin"
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
                    <span>Submitting...</span>
                  </div>
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default Modal;
