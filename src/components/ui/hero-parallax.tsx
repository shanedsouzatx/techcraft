/* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import HeroLottieAnimation from "../HeroLottieAnimation";
import Modal from "../Modal/Modal";
import GradientButton from "../GradientButton";
import OutlineButton from "../OulineButton";

export const HeroParallax = ({
  products,
}: {
  products: {
    title: string;
    link: string;
    thumbnail: string;
  }[];
}) => {
  const firstRow = products.slice(0, 5);
  const secondRow = products.slice(5, 10);
  const thirdRow = products.slice(10, 15);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, 1000]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -1000]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [20, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [-700, 500]),
    springConfig
  );
  return (
    <div
      ref={ref}
      className="md:h-[330vh] py-36 md:py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      {/* <Header /> */}
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateXReverse}
              key={product.title}
            />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard
              product={product}
              translate={translateX}
              key={product.title}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

// export const Header = () => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const openModal = () => setIsModalOpen(true);
//   const closeModal = () => setIsModalOpen(false);

//   return (
//     <div className="max-w-6xl relative mx-auto flex flex-col md:flex-row items-center justify-between px-4 w-full left-0 top-0 -z-50">
//       <div className="md:w-1/2" data-aos="fade-down">
//         <h2 className="text-[#5114AE] font-semibold text-2xl mb-3 md:mb-5 z-50">
//           Exclusivity. Uniqueness. Innovation.
//         </h2>
//         <h1 className="text-[1.6rem] md:text-5xl font-medium dark:text-white flex flex-col space-y-0 md:space-y-2 z-50">
//           <span> We evaluate, We</span>
//           <span>transform and We</span>
//           <span>provide the expertise</span>
//           <span> you require.</span>
//         </h1>
//         <p className="max-w-[320px] md:max-w-2xl text-base md:text-lg mt-3 md:mt-5 dark:text-neutral-200 z-50">
//           A means of giving clients with digital solutions that draw customers
//           to the brand and keep them interested.
//         </p>
//         {/* ORM ICONS */}
//         <div className="flex items-center gap-4 mt-5 z-50">
//           <a href="#">
//             <Image
//               src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720046788/trust-b_qphqsf.png"
//               alt="trustpilot"
//               className="w-24 h-auto md:w-[130px] md:h-auto"
//               width={130}
//               height={130}
//             />
//           </a>
//           <a href="#">
//             <Image
//               src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720047150/google_fdnuh4.png"
//               alt="google"
//               className="w-24 h-auto md:w-[130px] md:h-auto"
//               width={130}
//               height={130}
//             />
//           </a>
//           <a href="#" className="mt-4">
//             <Image
//               src="https://res.cloudinary.com/dautl8x6a/image/upload/v1720047182/bings-logo_pbyvk7.png"
//               alt="bingads"
//               className="w-24 h-auto md:w-[130px] md:h-auto"
//               width={130}
//               height={130}
//             />
//           </a>
//         </div>

//         <div className="flex flex-col md:flex-row items-center md:space-x-4 space-y-3 md:space-y-0 mt-8">
//           <GradientButton text="Let's Get Started" onClick={openModal} />
//           <OutlineButton text="Chat With Us" />
//         </div>
//       </div>

//       {/* Lottie animation section */}
//       <div
//         className="hidden md:block w-1/2 object-contain"
//         data-aos="fade-left"
//       >
//         <HeroLottieAnimation />
//       </div>

//       <Modal isOpen={isModalOpen} onClose={closeModal} />
//     </div>
//   );
// };

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link
        href={product.link}
        className="block group-hover/product:shadow-2xl "
      >
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">
        {product.title}
      </h2>
    </motion.div>
  );
};
