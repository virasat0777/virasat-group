import SectionTitle from "@/common/SectionTitle";
import React from "react";
import { CircularLeftArrow, CircularRightArrow } from "@/public/icon/arrows";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
const HomeBlogs = () => {
  const blogs = [
    {
      title: "Blog heading will come here",
      image: "/images/home/blogImg1.png",
      url: "#",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. ",
    },
    {
      title: "Blog heading will come here",
      image: "/images/home/blogImg1.png",
      url: "#",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. ",
    },
    {
      title: "Blog heading will come here",
      image: "/images/home/blogImg1.png",
      url: "#",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. ",
    },
    {
      title: "Blog heading will come here",
      image: "/images/home/blogImg1.png",
      url: "#",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. ",
    },
    {
      title: "Blog heading will come here",
      image: "/images/home/blogImg1.png",
      url: "#",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. ",
    },
  ];
  return (
    <div className="lg:px-[15.625vw] py-8 h-full px-4 relative">
      <div className="absolute inset-0 -z-10 opacity-[0.015]">
        <Image
          src={`/images/home/homeOverviewPattern.svg`}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full text-center lg:mb-[2.083vw] mb-2">
        <SectionTitle title={"BLOGS"} />
      </div>

      <div className="w-full h-full">
        <div className="w-full h-full">
          <div className="flex justify-center items-center gap-4">
            <div className="h-full overflow-hidden w-full">
              <Swiper
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                }}
                spaceBetween={25}
                navigation={{
                  nextEl: ".button-blogs-next-con",
                  prevEl: ".button-blogs-prev-con",
                }}
                modules={[Navigation, Autoplay]}
                className="awards-swiper"
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
              >
                {blogs.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="lg:p-[1.25vw] w-fit p-2 border-[1px] border-black">
                      <div className="lg:w-[19.063vw] lg:h-[18.229vw] w-full h-auto lg:mb-[2.083vw] mb-2">
                        <Image
                          src={item?.image}
                          width={350}
                          height={350}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <p className="lg:text-[1.25vw] lg:leading-[1.667vw] leading-[5.208vw] font-bold  text-black text-[20px] lg:mb-[1.25vw] mb-2">
                        {item?.title}
                      </p>
                      <p className=" lg:text-[1.042vw] lg:leading-[1.667vw] leading-[5.208vw]  text-black text-[16px]">
                        {item?.description}
                      </p>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
          <div className="flex justify-center items-center lg:gap-[2.5vw] gap-4 lg:mt-[2.083vw] mt-4">
            <div className="button-border group button-blogs-prev-con cursor-pointer">
              <CircularLeftArrow />
            </div>
            <div className="button-border group button-blogs-next-con cursor-pointer">
              <CircularRightArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlogs;
