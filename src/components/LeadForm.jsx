import Image from "next/image";
import React, { useEffect, useState } from "react";
import PhoneInput from "react-phone-input-2";
import { usePathname, useRouter } from "next/navigation";

const LeadForm = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState("");
  const [loading, setLoading] = useState(false); // Loading state

  useEffect(() => {
    let _pathname = pathname.replace(/\//g, "");
    setService(_pathname);
  }, [pathname]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    const formData = {
      name,
      email,
      phone,
      service,
      message: service, // Assuming message is the same as the selected service
    };

    try {
      const response = await fetch(
        "https://TechCrafttechnologies-4d715954081e.herokuapp.com/api/v1/service-lead",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        router.push("/thank-you");
      } else {
        console.error("Failed to submit form");
      }
    } catch (error) {
      console.error("An error occurred", error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-[400px] max-h-[460px] bg-[#9653d4] text-white rounded-md p-6"
    >
      {/* Form Top */}
      <div className="flex items-center justify-between">
        <Image
          src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720646140/50percent_vxwwis.png"
          alt="design2"
          width={80}
          height={80}
          objectFit="contain"
        />
        <div className="flex flex-col items-end">
          <span className="text-xl">Avail Upto</span>
          <h2 className="text-white font-bold text-[1.7rem]">60% Discount</h2>
        </div>
      </div>
      {/* Inputs */}
      <div className="mt-6">
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="outline-none bg-transparent border border-white w-full mb-4 p-3 rounded-md placeholder:text-white"
          placeholder="Enter Name"
          required
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="outline-none bg-transparent border border-white w-full mb-4 p-3 rounded-md placeholder:text-white"
          placeholder="Enter Your Email"
          required
        />

        <PhoneInput
          country={"us"}
          value={phone}
          onChange={setPhone}
          inputStyle={{
            width: "100%",
            backgroundColor: "transparent",
            borderColor: "#ffffff",
            paddingLeft: "45px",
            paddingTop: "23px",
            paddingBottom: "23px",
          }}
          buttonStyle={{
            background: "#00000000",
            border: "#ffffff",
          }}
          dropdownStyle={{
            backgroundColor: "#1F2937",
          }}
          containerClass="mb-4"
          required
        />

        <select
          id="interestedIn"
          value={service}
          onChange={(e) => setService(e.target.value)}
          className="bg-transparent border border-white w-full mb-4 p-3 rounded-md placeholder:text-white text-white outline-none"
        >
          <option value="" className="text-gray-500">
            Select a Service
          </option>
          <option value="Content Writing" className="text-gray-500">
            Content Writing
          </option>
          <option value="Web Development" className="text-gray-500">
            Web Development
          </option>
          <option value="Digital Marketing" className="text-gray-500">
            Digital Marketing
          </option>
          <option value="Logo Design" className="text-gray-500">
            Logo Design
          </option>
          <option value="E-Commerce" className="text-gray-500">
            E-Commerce Web Solution
          </option>
          <option value="Motion Graphics" className="text-gray-500">
            Motion Graphics
          </option>
          <option value="Illustration Design" className="text-gray-500">
            Illustration Design
          </option>
          <option value="Marketing Collateral" className="text-gray-500">
            Marketing Collateral
          </option>
          <option value="App Design" className="text-gray-500">
            App Design
          </option>
          <option value="SEO Services" className="text-gray-500">
            SEO Services
          </option>
        </select>
      </div>

      <button
        className="text-sm font-medium cursor-pointer py-4 w-full bg-[#5114AE] text-white rounded-md z-50"
        disabled={loading}
      >
        {loading ? (
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
        ) : (
          `Let's Get Started`
        )}
      </button>
    </form>
  );
};

export default LeadForm;
