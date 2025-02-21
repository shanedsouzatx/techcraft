"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "./ui/3d-card";

export function ThreeDCardDemo({
  imgSrc,
  giveHeight,
  key,
}: {
  imgSrc: string;
  giveHeight?: null | boolean;
  key: number;
}) {
  return (
    <CardContainer className="inter-var mb-4">
      <CardBody className="relative group dark:bg-black dark:border-white/[0.2] border-black/[0.1] max-w-[21rem] h-auto cursor-pointer">
        <CardItem
          translateZ="100"
          rotateX={0}
          rotateZ={-0}
          className="container w-full"
        >
          <div
            className={`box ${
              giveHeight ? "h-[360px]" : "h-[300px]"
            } w-full object-cover rounded-lg transition-transform duration-300 ease-in-out group-hover:shadow-3xl`}
            style={{
              backgroundImage: `url(${imgSrc})`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              transition: "background-position 8s ease-in-out", // Add this directly
            }}
            data-aos={`${key % 2 === 0 ? "flip-right" : "flip-left"}`}
          ></div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
