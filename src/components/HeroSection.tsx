import React from "react";

const HeroSection = ({
  heading,
  subHeading,
  para,
  bgImgSrc,
  backDropShadow,
  textColor,
}: {
  heading: string;
  subHeading?: string;
  para: string;
  bgImgSrc: string;
  backDropShadow?: string;
  textColor?: string;
}) => {
  let _heading: any = [];
  if (heading.includes("<br/>")) {
    _heading = heading.split("<br/>");
  } else {
    _heading = null;
  }

  return (
    <div
      className="min-h-[400px] md:min-h-[550px] bg-no-repeat bg-cover bg-center flex items-center"
      style={{
        backgroundImage: `${backDropShadow}, url(${bgImgSrc})`,
      }}
    >
      <div
        className="max-w-6xl flex-1 mx-auto px-4 py-10 mt-14 md:mt-20 md:px-6 lg:px-8 md:py-16 lg:py-20"
        data-aos="fade-right"
      >
        {subHeading && (
          <h5
            className={`text-xl md:text-2xl lg:text-3xl ${
              textColor ? textColor : "text-[#5114AE]"
            } font-semibold mb-4`}
          >
            {subHeading}
          </h5>
        )}
        <h2
          className={`text-3xl md:text-4xl ${
            textColor ?? textColor
          } lg:text-5xl font-medium ${subHeading ? "my-4" : "mb-4"}`}
        >
          {_heading ? (
            <>
              {_heading[0]}
              <br />
              {_heading[1]}
            </>
          ) : (
            heading
          )}
        </h2>
        <p
          className={`text-base text-[#000] max-w-3xl md:text-lg ${
            textColor ?? textColor
          }`}
        >
          {para}
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
