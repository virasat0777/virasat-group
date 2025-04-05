import React, { useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import SectionTitle from "@/common/SectionTitle";

const HomeProjects = () => {
  const [firstSwiper, setFirstSwiper] = useState(null);
  const [secondSwiper, setSecondSwiper] = useState(null);

  const featuredProjects = [
    {
      id: 1,
      title: "Virasat UdaiGrand",
      description:
        "Lorem ipsum dolor sit amet consectetur. Malesuada amet amet ultrices maecenas magnis purus.",
      image1: "/images/home/project1.png",
      image2: "/images/home/project2.png",
      url: "#",
    },
    {
      id: 2,
      title: "Virasat UdaiGrand",
      description:
        "Lorem ipsum dolor sit amet consectetur. Malesuada amet amet ultrices maecenas magnis purus.",
      image1: "/images/home/project1.png",
      image2: "/images/home/project2.png",
      url: "#",
    },
  ];

  return (
    <div className="lg:pt-[4.167vw] pt-4 overflow-x-hidden">
      <div className="flex justify-between">
        {/* Left Swiper (Image 1) */}
        <div className="w-[50%]">
          <div className="lg:w-[80%] flex justify-between items-center flex-col bg-green-800">
            <SectionTitle title={"OUR PROJECTS"} />
            <div className="lg:mt-[3.646vw] mt-2 w-full mx-auto text-center">
              <Swiper
                slidesPerView={1}
                loop={true}
                modules={[Navigation, Controller]}
                onSwiper={setFirstSwiper}
                controller={{ control: secondSwiper }}
                navigation={true}
                className="featured-project-swiper"
              >
                {featuredProjects.map((item, index) => (
                  <SwiperSlide key={index} className="flex justify-center">
                    <div className="lg:h-[26.042vw] lg:w-[21.875vw] w-full h-auto flex justify-center">
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
          </div>
        </div>

        {/* Right Swiper (Image 2) */}
        <div>
          <div className="lg:w-[50vw]">
            <Swiper
              slidesPerView={1}
              loop={true}
              modules={[Navigation, Controller]}
              onSwiper={setSecondSwiper}
              controller={{ control: firstSwiper }}
              className="featured-project-swiper"
            >
              {featuredProjects.map((item, index) => (
                <SwiperSlide key={index} className="">
                  <div className="lg:h-[50vw] lg:w-[50vw] w-full h-auto">
                    <Image
                      height={500}
                      width={420}
                      className="w-full h-auto"
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
  );
};

export default HomeProjects;
