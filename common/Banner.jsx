import Image from "next/image";
import React from "react";

const Banner = ({ src, mobileSrc, title, isOther, full }) => {
  return (
    <div
      className={`relative w-full  ${
        full ? "h-screen" : "h-[70vh]"
      } overflow-x-hidden`}
    >
      <div className={`hidden md:block w-full `}>
        <Image
          src={src}
          alt="banner"
          // fill
          height={1080}
          width={1920}
          className="object-cover object-center"
          priority
        />
      </div>

      <div className={`block md:hidden w-full h-full`}>
        <Image
          src={mobileSrc || src}
          alt="banner-mobile"
          // fill
          height={800}
          width={500}
          className="object-cover  w-full h-full object-center"
          priority
        />
      </div>

      {title && (
        <div
          className={`absolute ${
            full ? "lg:bottom-[4vw]" : "lg:bottom-[8vw]"
          } lg:left-[4vw] bottom-[2.5vw] w-fit left-[2.5vw] `}
        >
          <h1 className="text-white text-3xl lg:text-[1.042vw] font-bold drop-shadow-md">
            {title}
          </h1>
        </div>
      )}
    </div>
  );
};

export default Banner;
