import Image from "next/image";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CircularLeftArrow, CircularRightArrow } from "@/public/icon/arrows";
import SectionTitle from "@/common/SectionTitle";
import { cleanImage } from "@/services/imageHandling";

const HomeTestimonials = ({ testimonial }) => {
  const testimonials = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. Ipsum amet et elementum ipsum. Condimentum faucibus lacinia tempus vulputate sit arcu egestas.",
      name: "John Doe",
      image: "/images/home/profile.png",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. Ipsum amet et elementum ipsum. Condimentum faucibus lacinia tempus vulputate sit arcu egestas.",
      name: "John Doe",
      image: "/images/home/profile.png",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. Ipsum amet et elementum ipsum. Condimentum faucibus lacinia tempus vulputate sit arcu egestas.",
      name: "John Doe",
      image: "/images/home/profile.png",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. Ipsum amet et elementum ipsum. Condimentum faucibus lacinia tempus vulputate sit arcu egestas.",
      name: "John Doe",
      image: "/images/home/profile.png",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div
      className={`lg:py-[4.167vw] lg:px-[13.906vw] px-4 py-4 lg:overflow-x-hidden relative bg-cover bg-no-repeat  bg-center w-full  `}
    >
      <div className="absolute inset-0 -z-10 opacity-[0.015]">
        <Image
          src={`/images/home/homeOverviewPattern.svg`}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>
      {testimonial?.title && (
        <div className="text-center lg:mb-[2.708vw] mb-4">
          <SectionTitle title={testimonial?.title} />
        </div>
      )}
      <div className="w-full">
        <div className="w-full">
          <div className="flex justify-center items-center gap-8">
            <div className="button-border group button-testimonials-prev-con hidden lg:block">
              <CircularLeftArrow />
            </div>
            {testimonial?.testimonialItems && (
              <div className=" w-full">
                <Swiper
                  breakpoints={{
                    0: {
                      slidesPerView: 1,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 60,
                    },
                  }}
                  navigation={{
                    nextEl: ".button-testimonials-next-con",
                    prevEl: ".button-testimonials-prev-con",
                  }}
                  modules={[Navigation, Autoplay]}
                  className="awards-swiper"
                  loop={true}
                  onRealIndexChange={(e) => {
                    setActiveSlide(e.realIndex);
                  }}
                  autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                  }}
                >
                  {testimonial?.testimonialItems?.map((item, index) => (
                    <SwiperSlide key={index}>
                      <div className="">
                        <div className="lg:w-[21.833vw] w-full lg:h-[18.625vw] h-auto lg:p-[0.625vw] p-4 bg-black relative">
                          <div className="lg:w-[2.188vw] w-[20px] lg:h-[2.656vw] h-[25px]">
                            <Image
                              src={"/icon/gray-inverted-commas.svg"}
                              width={42}
                              height={51}
                              className="mb-2 "
                            />
                          </div>
                          <p className="text-[#FAF6EF] lg:text-[1.042vw] lg:leading-[1.667vw] leading-[16px] lg:px-[1vw] text-[12px]">
                            {item?.description}
                          </p>
                        </div>
                        <div className="bg-red lg:size-[3.542vw] size-10 lg:ml-[1.667vw] lg-mt-0  -mt-[20px] ml-[30px] rotate-[5deg] z-[1]">
                          <Image
                            src={"/icon/triangle-icon.svg"}
                            width={68}
                            height={68}
                            className=""
                          />
                        </div>

                        <div className="flex justify-start gap-4 items-center">
                          <div className="lg:size-[3.75vw]">
                            <Image
                              height={72}
                              width={72}
                              src={
                                cleanImage(item?.image?.data?.attributes?.url)
                                  ? cleanImage(
                                      item?.image?.data?.attributes?.url
                                    )
                                  : "/images/home/profile.png"
                              }
                            />
                          </div>
                          <p>{item?.name}</p>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            )}
            <div className="button-border group button-testimonials-next-con hidden lg:block">
              <CircularRightArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeTestimonials;
