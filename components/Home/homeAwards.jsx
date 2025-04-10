import SectionTitle from "@/common/SectionTitle";
import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";


import "swiper/css";
import "swiper/css/navigation";
import { CircularLeftArrow, CircularRightArrow } from "@/public/icon/arrows";
import { Navigation } from "swiper/modules";
const HomeAwards = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const awardsArray = [
    {
      image: "/images/home/trophyhh.png",
      year: "2019",
      awardName: "Award name",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. Ipsum amet et elementum ipsum. Condimentum faucibus lacinia tempus vulputate sit arcu egestas.",
    },
    {
      image: "/images/home/trophyhh.png",
      year: "2019",
      awardName: "Award name",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. Ipsum amet et elementum ipsum. Condimentum faucibus lacinia tempus vulputate sit arcu egestas.",
    },
    {
      image: "/images/home/trophyhh.png",
      year: "2020",
      awardName: "Award name",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. Ipsum amet et elementum ipsum. Condimentum faucibus lacinia tempus vulputate sit arcu egestas.",
    },
    {
      image: "/images/home/trophyhh.png",
      year: "2021",
      awardName: "Award name",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. Ipsum amet et elementum ipsum. Condimentum faucibus lacinia tempus vulputate sit arcu egestas.",
    },
  ];
  return (
    <div className={`relative bg-cover bg-no-repeat  bg-center w-full  `}>
      <div className="absolute inset-0 -z-10 opacity-[0.015]">
        <Image
          src={`/images/home/homeOverviewPattern.svg`}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:px-[13.333vw] px-2 mt-8 lg:mt-[8vw] mb-[150px] md:mb-[13vw] lg:py-[2.604vw] lg:mb-[8vw] ">
        <div className="text-center">
          <SectionTitle title={"AWARDS AND RECOGNITION"} />
        </div>
        <div className="flex justify-center items-center gap-4">
          <div className="button-border group cursor-pointer relative z-[999] button-awards-prev-con">
            <CircularLeftArrow />
          </div>
          <div className="max-w-[50vw] w-full">
            <Swiper
              slidesPerView={1}
              spaceBetween={0}
              navigation={{
                nextEl: ".button-awards-next-con",
                prevEl: ".button-awards-prev-con",
              }}
              modules={[Navigation]}
            
              className="awards-swiper"
              loop={true}
              onRealIndexChange={(e) => {
                setActiveSlide(e.realIndex);
              }}
            >
              {awardsArray.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex justify-center relative">
                    <div className="lg:w-[20.677vw] lg:h-[26.042vw] w-full h-auto lg:mt-[2.5vw] mt-2">
                      <Image
                        src={item?.image}
                        width={1000}
                        height={1000}
                        className="w-full h-auto relative"
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="button-border group cursor-pointer  z-[50] relative button-awards-next-con">
            <CircularRightArrow />
          </div>
        </div>

        <div className="absolute w-full flex justify-center bottom-[4vw] left-0">
          <span className=" valky top-0  h-full  lg:text-[15.625vw] text-[150px] opacity-10">
            {awardsArray[activeSlide]?.year}
          </span>
        </div>
        <div className="absolute lg:bottom-0 md:-bottom-[12vw] -bottom-[15vh] lg:right-[11vw] z-50 ">
          <div className=" lg:w-[30vw] px-[4vw] h-full text-center flex flex-col justify-center lg:items-start items-center">
            <div className="lg:mb-[1.25vw] text-[20px] mb-2 montserrat font-bold ">
              {awardsArray[activeSlide]?.awardName}
            </div>
            <p className="lg:text-base text-center text-[16px] leading-[20px] lg:leading-[1.5vw] lg:text-[1.042vw] lg:text-start text-xs">
              {awardsArray[activeSlide]?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeAwards;
