import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { ourServices } from "@/data/services";
import { OurServiceCard } from "@/components/OurServiceCard";

const ThankYou = () => {
  return (
    <section>
      {/* Thank You Section */}
      <div className="bg-[#044E8B] flex justify-center text-white pt-28 pb-20 md:pt-44 md:pb-28">
        <div className="max-w-5xl flex flex-col items-center text-center">
          <FaCheckCircle className="text-6xl md:text-8xl mb-6 text-[#FFD700]" />
          <h1 className="text-4xl md:text-5xl font-bold mb-5">Thank You!</h1>
          <p className="text-lg md:text-2xl mb-3">
            We appreciate your business and are excited to work with you.
          </p>
          <p className="text-sm md:max-w-xl mx-auto">
            You will receive a confirmation email shortly with further details.
            If you have any questions, feel free to contact us at any time.
          </p>
        </div>
      </div>

      {/* Other Services */}
      <div className="my-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#5114AE] font-bold text-center mb-0">
            Other Services
          </h2>

          {/* Card Section */}
          <div className="flex flex-wrap md:justify-between">
            {ourServices.map((el, idx) => (
              <OurServiceCard {...el} key={idx} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;
