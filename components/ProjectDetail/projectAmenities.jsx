import SectionTitle from "@/common/SectionTitle";
import React from "react";
import {
  WhiteCircularLeftArrow,
  WhiteCircularRightArrow,
} from "@/public/icon/arrows";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { cleanImage } from "@/services/imageHandling";
const ProjectAmenities = ({ title, data, bg }) => {
  const amenities = [
    {
      image: "/icon/amenities-icon/pool.png",
      title: "Swimming Pool",
    },
    {
      image: "/icon/amenities-icon/parking.png",
      title: "Parking",
    },
    {
      image: "/icon/amenities-icon/power.svg",
      title: "Power",
    },
    {
      image: "/icon/amenities-icon/pool.png",
      title: "Swimming Pool",
    },
    {
      image: "/icon/amenities-icon/pool.png",
      title: "Swimming Pool",
    },
    {
      image: "/icon/amenities-icon/pool.png",
      title: "Swimming Pool",
    },
    {
      image: "/icon/amenities-icon/pool.png",
      title: "Swimming Pool",
    },
    {
      image: "/icon/amenities-icon/pool.png",
      title: "Swimming Pool",
    },
    {
      image: "/icon/amenities-icon/pool.png",
      title: "Swimming Pool",
    },
    {
      image: "/icon/amenities-icon/pool.png",
      title: "Swimming Pool",
    },
    {
      image: "/icon/amenities-icon/pool.png",
      title: "Swimming Pool",
    },
    {
      image: "/icon/amenities-icon/pool.png",
      title: "Swimming Pool",
    },
    {
      image: "/icon/amenities-icon/pool.png",
      title: "Swimming Pool",
    },
    {
      image: "/icon/amenities-icon/pool.png",
      title: "Swimming Pool",
    },
  ];

  const firstHalf = data?.slice(0, Math.ceil(amenities.length / 2));
  const secondHalf = data?.slice(Math.ceil(amenities.length / 2));

  console.log(firstHalf[0], "first half in ");
  return (
    <div
      className={`relative bg-cover bg-no-repeat  bg-center w-full my-5 overflow-x-hidden`}
    >
      <div className="absolute w-screen -z-10 hidden lg:block">
        <Image
          src={bg}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="absolute w-screen -z-10 lg:hidden h-full block">
        <Image
          src={`/images/project-details/mobile-amenities-bg.png`}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="lg:py-[1.167vw] xl:py-[4.167vw] py-4 lg:px-[10.885vw] px-4 text-white text-center">
        {title && (
          <div className="py-4">
            <SectionTitle title={title} />
          </div>
        )}
        <div className="py-4 lg:py-0">
          <div>
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 6,
                },
              }}
              spaceBetween={10}
              navigation={{
                nextEl: ".button-amen-next-con",
                prevEl: ".button-amen-prev-con",
              }}
              modules={[Navigation, Autoplay]}
              className="awards-swiper"
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {firstHalf &&
                firstHalf?.map((item, index) => (
                  <SwiperSlide key={index}>
                    <div className="lg:p-[1.25vw] p-2 flex flex-col items-center">
                      {item?.attributes?.image?.data?.attributes?.url && (
                        <div className="lg:w-[5.208vw]  lg:h-[5.208vw] w-[50px] h-auto lg:mb-[2.083vw] mb-2">
                          <Image
                            src={cleanImage(
                              item?.attributes?.image?.data?.attributes?.url
                            )}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      {item?.attributes?.name && (
                        <p className="lg:text-[1.25vw] lg:leading-[1.667vw] leading-[5.208vw] montserrat text-white text-[16px] lg:mb-[1.25vw] mb-2">
                          {item?.attributes?.name}
                        </p>
                      )}
                    </div>
                  </SwiperSlide>
                ))}
            </Swiper>
          </div>
          <div>
            <Swiper
              breakpoints={{
                0: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 6,
                },
              }}
              spaceBetween={10}
              navigation={{
                nextEl: ".button-amen-next-con",
                prevEl: ".button-amen-prev-con",
              }}
              modules={[Navigation, Autoplay]}
              className="awards-swiper"
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {secondHalf.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="lg:p-[1.25vw] p-2 w-full flex flex-col items-center">
                    {item?.attributes?.image?.data?.attributes?.url && (
                      <div className="lg:w-[5.208vw]  lg:h-[5.208vw] w-[50px] h-auto lg:mb-[2.083vw] mb-2">
                        <Image
                          src={cleanImage(
                            item?.attributes?.image?.data?.attributes?.url
                          )}
                          width={100}
                          height={100}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    )}
                    {item?.attributes?.name && (
                      <p className="lg:text-[1.25vw] lg:leading-[1.667vw] leading-[5.208vw] montserrat text-white text-[16px] lg:mb-[1.25vw] mb-2">
                        {item?.attributes?.name}
                      </p>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        <div className="flex justify-center items-center lg:gap-[2.5vw] gap-4 lg:mt-[0] mt-4">
          <div className="button-border group button-amen-prev-con cursor-pointer text-white">
            <WhiteCircularLeftArrow color={"white"} />
          </div>
          <div className="button-border group button-amen-next-con cursor-pointer text-white">
            <WhiteCircularRightArrow color={"white"} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectAmenities;
