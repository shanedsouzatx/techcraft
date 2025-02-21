/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Meteors } from "./ui/meteors";

export function ServiceCard() {
  return (
    <div className="cursor-pointer">
      <div className="w-full relative max-w-[360px] mt-10 -z-50">
        <div className="absolute inset-0 h-full w-full bg-gradient-to-r from-gray-300 to-gray-300 transform scale-[0.80] bg-red-500 rounded-full blur-3xl" />
        <div className="relative service-box-shadow bg-[#F3F3F3] px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col justify-end items-start">
          <h1 className="font-bold text-xl text-slate-700 mb-4 relative z-50">
            Logo Design
          </h1>

          <p className="font-normal text-sm text-slate-500 mb-4 relative z-50">
            Spend money in unique logo that communicates the strength and
            identity of your compa ny's brand. Get services for new and
            redesigned logos at a fair price. Of course, we assist you in
            developing a logo that will recognize your company and attract
            potential clients.
          </p>

          {/* Meaty part - Meteor effect */}
          <Meteors number={20} />
        </div>
      </div>
    </div>
  );
}
