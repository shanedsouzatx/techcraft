"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function Testimonials() {
  return (
    <div className="rounded-md flex flex-col antialiased bg-[#ffffff] dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <InfiniteMovingCards
          items={testimonials}
          direction="right"
          speed="slow"
        />
      </div>
    </div>
  );
}

const testimonials = [
  {
    imgSrc:
      "https://res.cloudinary.com/dautl8x6a/image/upload/v1720040880/testi-1_nne1mq.png",
    quote:
      "“I needed a professional website as an online storefront for my business, and I was looking for a professional service for web development. While searching through the internet I found TechCraft and decided to take their services. I am very satisfied with the results as I have a professional looking website to represent my brand. Thanks for amazing services! ”",
    name: "Jennifer Michele  -",
    title: "Project Owner",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dautl8x6a/image/upload/v1720040876/testi-2_svpbui.png",
    quote:
      "“Amazing! TechCraft have a skilled team of marketers. I have been looking for a digital marketing agency for branding purposes when I learned about the TechCraft. I’m still astounded with their expeditious results. Looking forward to collaborate again!”",
    name: "Nate Mason",
    title: "Senior Software Enginneer",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dautl8x6a/image/upload/v1720040882/testi-3_x4cdl1.png",
    quote:
      "“TechCraft truly provide what they claim! They professionally communicated with me that made me receive the illustrations that I very much admire. Their creatives are especially worth the admiration for creating an inspirational image for my brand. Thank you, TechCraft!”",
    name: "Jason Decker",
    title: "Co-founder, Loctea",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dautl8x6a/image/upload/v1720040867/testi-4_yfm0cg.png",
    quote:
      "“TechCraft provided me with a great web design. I highly appreciate the customization in the design as per requested. I am glad that I chose to work with the company as they provided me with a website and performance marketing as well. Thanks for great services!”",
    name: "Nancy Backer",
    title: "Project Owner",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dautl8x6a/image/upload/v1720040885/testi-5_wyistc.png",
    quote:
      "“It was a pleasure working with professionals at the TechCraft. As their name, they give premium services and are gurus of their respective fields. Outstanding job as always!”",
    name: "Luke Wilson",
    title: "Project Owner",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dautl8x6a/image/upload/v1720040877/testi-6_mstjvz.png",
    quote:
      "“I worked with the Premium Web Designs for some time and can vouch for their services. The best I have ever received from any design, web development or marketing agency. Looking forward to collaborate again!”",
    name: "Tessa William",
    title: "Co-founder",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dautl8x6a/image/upload/v1720040873/testi-7_sy2qif.png",
    quote:
      "“Branding was quite difficult for me when I first started my business. Greatest appreciation for TechCraft as they took the responsibility and challenges of online marketing for my brand. Keep up the amazing work! ”",
    name: "Jack Brown",
    title: "Ceo, Loctea",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dautl8x6a/image/upload/v1720040870/testi-8_boeys3.png",
    quote:
      "“The professionals at TechCraft are knowledgeable and highly skilled. I enjoyed collaborating with the team as I got a lot to learn as well. Thank you for the support and productivity. I highly recommend their services!”",
    name: "Vanesa Thompson",
    title: "Project Owner",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dautl8x6a/image/upload/v1720040886/testi-9_qowpe5.png",
    quote:
      "“Greatest appreciation for TechCraft and the team for providing an exceptional application for my brand. It is just how I wanted it to be: highly functional and user-friendly. I feel prevailed to have worked for a website that defines innovation and professionalism by giving its best. Highly recommend them!”",
    name: "Gabriel White",
    title: "Project Owner",
  },
  {
    imgSrc:
      "https://res.cloudinary.com/dautl8x6a/image/upload/v1720040880/testi-10_p8fqst.png",
    quote:
      "“Being a beginner in the business world, I contacted TechCraft for online branding, web designing, and SEO services. Besides of the tight deadline, they delivered a high quality website that was mobile friendly and bug-free. I highly recommend their services for their fast paced services and reliability!”",
    name: "Natasha Aniston",
    title: "Project Owner",
  },
];
