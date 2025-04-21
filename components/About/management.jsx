import SectionTitle from "@/common/SectionTitle";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import {
  WhiteCircularLeftArrow,
  WhiteCircularRightArrow,
} from "@/public/icon/arrows";
import { cleanImage } from "@/services/imageHandling";

const Management = ({ data }) => {
  const managementTeam = [
    {
      name: "name",
      image: "/images/about/m1.png",
      designation: "designation",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. ",
    },
    {
      name: "name",
      image: "/images/about/m2.png",
      designation: "designation",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. ",
    },
    {
      name: "name",
      image: "/images/about/m3.png",
      designation: "designation",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. ",
    },
    {
      name: "name",
      image: "/images/about/m1.png",
      designation: "designation",
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. ",
    },
  ];
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-[10] ">
        <Image
          src={cleanImage(data?.bgImage?.data?.attributes?.url)}
          alt="management background"
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:py-[4.167vw] py-4 lg:px-[11.667vw] px-4">
        {data?.title && (
          <div className="text-center text-white">
            <SectionTitle title={data?.title} />
          </div>
        )}

        <div className="relative mt-6 lg:mt-[3.125vw]">
          {data?.team.length > 0 && (
            <div className="flex justify-center items-center gap-4 relative">
              <div className="h-full overflow-hidden w-full relative">
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
                    nextEl: ".management-next",
                    prevEl: ".management-prev",
                  }}
                  modules={[Navigation, Autoplay]}
                  className="awards-swiper"
                  loop={true}
                  autoplay={{ delay: 3000 }}
                >
                  {data?.team?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="lg:p-[1.25vw] p-2 ">
                        {item?.image?.data?.attributes?.url && (
                          <div className="lg:w-full  lg:h-[26.042vw] w-full h-auto lg:mb-[2.083vw] mb-2">
                            <Image
                              src={cleanImage(
                                item?.image?.data?.attributes?.url
                              )}
                              width={350}
                              height={366}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <div className="lg:text-[1.25vw] lg:leading-[1.667vw] leading-[5.208vw] font-bold  text-white text-[20px] lg:mb-[1.25vw] mb-2">
                          {item?.name}
                        </div>
                        <div className=" lg:text-[1.042vw] lg:leading-[1.667vw] leading-[5.208vw]  text-white text-[16px]">
                          {item?.designation}
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          )}

          <div className="flex lg:flex-none justify-center items-center lg:gap-[2.5vw] gap-4 lg:mt-[2.083vw] mt-4">
            <div className="button-border lg:absolute left-[-8%] top-1/2 bg-transparent  group management-prev cursor-pointer">
              <WhiteCircularLeftArrow />
            </div>
            <div className="button-border lg:absolute right-[-8%] top-1/2 group management-next cursor-pointer">
              <WhiteCircularRightArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Management;
