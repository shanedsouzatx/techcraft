import React from "react";

const images = [
  "/assets/images/elderado.png",
  "/assets/images/elderado.png",
  "/assets/images/elderado.png",
  "/assets/images/elderado.png",
  "/assets/images/elderado.png",
  "/assets/images/elderado.png",
  "/assets/images/elderado.png",
];

const ScrollContainer = () => {
  return (
    <div className="container max-w-7xl flex flex-wrap gap-4 cursor-pointer">
      {images.map((src, index) => (
        <div
          key={index}
          className="box"
          style={{
            backgroundImage: `url(${src})`,
            backgroundSize: "cover",
          }}
        ></div>
      ))}
    </div>
  );
};

export default ScrollContainer;
