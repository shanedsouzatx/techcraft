"use client";
import React, { useState } from "react";
import Image from "next/image";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import ReCAPTCHA from "react-google-recaptcha";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

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
  service: yup.string().required("Please select a service"),
  message: yup.string().required("Message is required"),
  captcha: yup.string().required("Please complete the CAPTCHA"),
});

type FormData = {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  captcha: string;
};

const Contact = () => {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState("");

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    try {
      console.log("Sending form data:", data);
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        mode: "cors",
        credentials: "omit",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: '7a7f9557-8e56-4ad5-ab48-65b7b4efb33d',
          name: data.name,
          email: data.email,
          phone: data.phone,
          service: data.service,
          message: data.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setResult("Form submitted successfully!");
        router.push("/thank-you");
      }
    } catch (error) {
      console.error("Fetch Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-6xl mx-auto bg-white pt-12 pb-8 px-8 my-10 footer-form-shadow rounded-2xl">
      <div className="flex flex-col">
        <h3 className="text-3xl text-center md:text-left font-semibold">
          Ready to Experience Business Growth Beyond Limits?
        </h3>
        <p className="text-gray-500 text-center md:text-left text-sm mt-5 max-w-2xl">
          Contact us now for top-notch web design and digital marketing solutions.
        </p>
      </div>

      <form className="w-full flex flex-col gap-4 my-10" onSubmit={handleSubmit(onSubmit)}>
        <div className="w-full md:flex md:gap-4">
          <div className="w-full md:w-1/2">
            <input
              type="text"
              placeholder="Name"
              {...register("name")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-4"
            />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}

            <input
              type="email"
              placeholder="Email Address"
              {...register("email")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-4 mt-4"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}

            <PhoneInput
              country={"us"}
              onChange={(phone) => setValue("phone", phone)}
              inputStyle={{
                width: "100%",
                borderRadius: "9999px",
                backgroundColor: "#F9FAFB",
                borderColor: "#D1D5DB",
                paddingLeft: "56px",
                paddingTop: "25px",
                paddingBottom: "25px",
              }}
              containerClass="mt-4"
            />
            {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}

            <select
              {...register("service")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full block w-full p-4 mt-4"
            >
              <option value="" hidden>
                I Am Interested In
              </option>
              <option value="Logo Design">Logo Design</option>
              <option value="UI/UX Design">UI/UX Design</option>
              <option value="Website Development">Website Development</option>
              <option value="Video Animation">Video Animation</option>
              <option value="E-Commerce">E-Commerce</option>
              <option value="Branding">Branding</option>
            </select>
            {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
          </div>

          <div className="w-full mt-5 md:w-1/2 md:mt-0">
            <textarea
              rows={8}
              placeholder="Leave Your Message"
              {...register("message")}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-xl block w-full p-4 resize-none hover:border-[#5114AE] focus:border-[#5114AE] transition-colors"
            />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}

            <div className="flex flex-col items-center mt-6">
              <div className="transform scale-90 md:scale-100 shadow-md rounded-lg overflow-hidden">
                <ReCAPTCHA
                  sitekey="6Ldilt4qAAAAALPYM37jOcJ-BRc6jEZn08IPlfnR"
                  onChange={(token: string | null) => token && setValue("captcha", token)}
                />
              </div>
              {errors.captcha && (
                <p className="text-red-500 text-sm text-center mt-2">
                  {errors.captcha.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full text-lg font-semibold cursor-pointer py-4 mt-6 
                bg-gradient-to-r from-[#5114AE] to-[#802FCE] text-white rounded-full
                transform transition-all duration-300 hover:shadow-[0_8px_30px_rgb(81,20,174,0.3)]
                hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Submitting...
                </div>
              ) : (
                "Submit Now"
              )}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Contact;
