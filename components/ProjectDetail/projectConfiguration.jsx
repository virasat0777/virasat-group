import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "@/common/SectionTitle";
import { RightArrow, LeftArrow } from "@/public/icon/arrows";
import BlackButton from "@/common/BlackButton";
const ProjectConfiguration = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const configuration = [
    {
      image1: "/images/home/project1.png",
      image2: "/images/home/project2.png",
      configuration: [
        { bhk: "2bhk", area: "350-500 Sq. Ft." },
        { bhk: "2bhk", area: "350-500 Sq. Ft." },
        { bhk: "2bhk", area: "350-500 Sq. Ft." },
      ],
    },
    {
      image1: "/images/home/project1.png",
      image2: "/images/home/project2.png",
      configuration: [
        { bhk: "2bhk", area: "350-500 Sq. Ft." },
        { bhk: "2bhk", area: "350-500 Sq. Ft." },
        { bhk: "2bhk", area: "350-500 Sq. Ft." },
      ],
    },
    {
      image1: "/images/home/project1.png",
      image2: "/images/home/project2.png",
      configuration: [
        { bhk: "2bhk", area: "350-500 Sq. Ft." },
        { bhk: "2bhk", area: "350-500 Sq. Ft." },
        { bhk: "2bhk", area: "350-500 Sq. Ft." },
      ],
    },
  ];
  return (
    <div className="">
      <div
        className={`lg:pt-[4.167vw] pt-4 lg:overflow-x-hidden relative bg-cover bg-no-repeat  bg-center w-full  `}
      >
        <div className="absolute inset-0 -z-10 opacity-[0.015]">
          <Image
            src={`/images/home/homeOverviewPattern.svg`}
            height={1000}
            width={1000}
            className="w-full h-full object-cover"
          />
        </div>
        <div className="lg:flex lg:justify-end">
          {/* Left Swiper (Image 1) */}
          <div className="lg:w-[40%] w-full">
            <div className="lg:w-[80%] w-full flex justify-between items-center flex-col ">
              <div className="text-center">
                <SectionTitle title={"PROJECT CONFIGURATION"} />
              </div>
              <div className="lg:mt-[0vw] mt-2 w-full flex flex-col items-center ">
                <div className="lg:w-[31.406vw] w-full flex-col lg:flex-row justify-center h-auto items-center lg:mt-20 mt-4 flex md:justify-between md:items-center relative">
                  <div className="w-full">
                    <Swiper
                      slidesPerView={1}
                      loop={true}
                      modules={[Navigation, Controller]}
                      onSwiper={setFirstSwiper}
                      controller={{ control: secondSwiper }}
                      navigation={{
                        nextEl: ".button-project-detail-next-con",
                        prevEl: ".button-project-detail-prev-con",
                      }}
                      className="featured-project-swiper "
                      onRealIndexChange={(e) => {
                        setActiveSlide(e.realIndex);
                      }}
                    >
                      {configuration.map((item, index) => (
                        <SwiperSlide
                          key={index}
                          className="lg:flex lg:justify-center"
                        >
                          <div className="lg:h-[26.042vw] lg:w-[21.875vw] w-[100%] h-auto  mx-auto text-center">
                            <Image
                              height={500}
                              width={420}
                              className="w-full h-auto"
                              src={item?.image1}
                              alt={item?.title}
                            />
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                  <div className=" flex justify-center lg:justify-between items-center w-full lg:absolute">
                    <div className="button-border group button-project-detail-prev-con cursor-pointer z-10">
                      <LeftArrow />
                    </div>
                    <div className="button-border group button-project-detail-next-con cursor-pointer z-10">
                      <RightArrow />
                    </div>
                  </div>
                </div>
                <div className="lg:w-auto w-[80vw] overflow-x-hidden">
                  <ul>
                    {configuration[activeSlide].configuration.map(
                      (item, index) => (
                        <li
                          className=" lg:text-[0.938vw] text-[0.938vw] text-[#000000] "
                          key={index}
                        >
                          <div
                            className={`flex justify-between ${
                              index === 0 ? "mt-[16px]" : ""
                            }`}
                          >
                            <span className="lg:text-[1.25vw] text-lg kenoky">
                              {item.bhk}
                            </span>
                            <span className="lg:text-[0.833vw] text-base montserrat">
                              {item.area}
                            </span>
                          </div>
                          <div className="my-[16px]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="398"
                              height="2"
                              viewBox="0 0 398 2"
                              fill="none"
                            >
                              <path
                                d="M0 1H398"
                                stroke="url(#paint0_linear_218_1257)"
                                stroke-width="0.7"
                              />
                              <defs>
                                <linearGradient
                                  id="paint0_linear_218_1257"
                                  x1="0"
                                  y1="1.5"
                                  x2="398"
                                  y2="1.5"
                                  gradientUnits="userSpaceOnUse"
                                >
                                  <stop stop-color="#FAF6EF" />
                                  <stop offset="0.25" />
                                  <stop offset="0.5" />
                                  <stop offset="0.75" />
                                  <stop offset="1" stop-color="#FAF6EF" />
                                </linearGradient>
                              </defs>
                            </svg>
                          </div>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="text-center lg:w-[21.875vw] w-full">
                  <BlackButton
                    name="Know More"
                    path="/learn"
                    color="#000000"
                    hoverColor="#C29B5C"
                    textColor="#ffffff"
                    hoverTextColor="#000000"
                  />
                </div>
              </div>
            </div>

            {/* <div className="flex justify-center items-center">
              <div className="button-border group button-prev-con lg:hidden block ">
                <LeftArrow />
              </div>
              <div className="button-border group button-next-con lg:hidden block">
                <RightArrow />
              </div>
            </div> */}
          </div>

          {/* Right Swiper (Image 2) */}
          <div className="hidden lg:block">
            <div className="lg:w-[50vw] ">
              <Swiper
                slidesPerView={1}
                loop={true}
                modules={[Navigation, Controller, Autoplay]}
                onSwiper={setSecondSwiper}
                controller={{ control: firstSwiper }}
                className="featured-project-swiper"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
              >
                {configuration.map((item, index) => (
                  <SwiperSlide key={index} className="">
                    <div className="lg:h-[50vw] lg:w-[50vw] w-full h-auto">
                      <Image
                        height={500}
                        width={420}
                        className="w-full h-auto "
                        src={item?.image2}
                        alt={item?.title}
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectConfiguration;
