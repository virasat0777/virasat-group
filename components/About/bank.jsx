import SectionTitle from "@/common/SectionTitle";
import Image from "next/image";
import React from "react";
import Marquee from "react-fast-marquee";

const Bank = () => {
  const images = [
    {
      image: "/images/about/bank/sbi.png",
    },
    {
      image: "/images/about/bank/axis.png",
    },
    {
      image: "/images/about/bank/icici.png",
    },
    {
      image: "/images/about/bank/hdfc.png",
    },
    {
      image: "/images/about/bank/union.png",
    },
  ];
  return (
    <div className="lg:py-[4.167vw] py-4 lg:px-[8.646vw] px-4 relative">
      <div className="absolute inset-0 -z-10 opacity-[0.015]">
        <Image
          src={`/images/home/homeOverviewPattern.svg`}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="text-center lg:mb-[3.125vw] mb-6">
        <SectionTitle title={"Our Bank collabs"} />
      </div>
      <div>
        <Marquee
          className="recruiters_logo"
          loop={0}
          gradient={false}
          pauseOnHover={false}
          direction={"left"}
          speed={50}
        >
          {images &&
            images.map((item, index) => {
              return (
                <div className="relative" key={`logo${index}`}>
                  <div className="relative lg:h-[3.7vw] lg:mx-[1.5vw] object-contain">
                    <Image
                      src={item?.image}
                      alt={"partner logo"}
                      height={200}
                      width={100}
                      className="h-full w-full"
                    />
                  </div>
                </div>
              );
            })}
        </Marquee>
      </div>
    </div>
  );
};

export default Bank;
