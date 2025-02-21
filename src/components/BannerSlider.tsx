import Image from "next/image";

const BannerSlider = ({ isMargin }: { isMargin?: boolean }) => {
  const imageSrcs = [
    {
      imgSrc:
        "https://res.cloudinary.com/dautl8x6a/image/upload/v1724880201/svgexport-1-1024x152_yfbuyo.png",
      redirectUrl: "#",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dautl8x6a/image/upload/v1724880266/svgexport-1-1-1024x291_efcji4.png",
      redirectUrl: "#",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dautl8x6a/image/upload/v1724880305/532-5329305_transparent-new-trustpilot-logo-hd-png-download-removebg-preview_c2cyz9.png",
      redirectUrl: "https://www.trustpilot.com/review/techcraftinc.com",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dautl8x6a/image/upload/v1724880359/svgexport-1-2_c0u4zn.png",
      redirectUrl: "#",
    },
    {
      imgSrc:
        "https://res.cloudinary.com/dautl8x6a/image/upload/v1724880391/download-removebg-preview_p7dhpo.png",
      redirectUrl: "#",
    },
  ];

  return (
    // <div
    //   className={`${
    //     isMargin ? "my-10" : ""
    //   } bg-gradient-to-r from-[#5114AE] to-[#802FCE] overflow-hidden`}
    //   data-aos="fade-down"
    // >
    <div
      className={`${isMargin ? "my-10" : ""} bg-[#33174E]`}
      data-aos="fade-down"
    >
      <div className="max-w-6xl mx-auto py-6">
        <div className="flex justify-between items-center">
          {imageSrcs.map((data, index) => (
            <div key={index} className="cursor-pointer">
              <a href={data?.redirectUrl} target="_blank">
                <Image
                  src={data?.imgSrc}
                  alt={`cl-${index + 1}`}
                  width={140}
                  height={100}
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerSlider;
