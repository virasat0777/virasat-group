import SectionTitle from "@/common/SectionTitle";
import React from "react";
import { CircularLeftArrow, CircularRightArrow } from "@/public/icon/arrows";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { cleanImage } from "@/services/imageHandling";
import { useRouter } from "next/router";

const HomeNews = ({ newsData }) => {
  const router = useRouter();
  const news = [
    {
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. Ipsum amet et elementum ipsum. Condimentum faucibus lacinia tempus vulputate sit arcu egestas.",
      title: "News heading will come here",
      image: "/images/home/news1.png",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. Ipsum amet et elementum ipsum. Condimentum faucibus lacinia tempus vulputate sit arcu egestas.",
      title: "News heading will come here",
      image: "/images/home/news1.png",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. Ipsum amet et elementum ipsum. Condimentum faucibus lacinia tempus vulputate sit arcu egestas.",
      title: "News heading will come here",
      image: "/images/home/news1.png",
    },
    {
      description:
        "Lorem ipsum dolor sit amet consectetur. Et bibendum diam volutpat nibh sagittis orci dolor. Ipsum amet et elementum ipsum. Condimentum faucibus lacinia tempus vulputate sit arcu egestas.",
      title: "News heading will come here",
      image: "/images/home/news1.png",
    },
  ];
  return (
    <div className="lg:px-[12.292vw] px-4 lg:py-[5vw] py-20">
      <div className="absolute inset-0 -z-10 opacity-[0.015]">
        <Image
          src={`/images/home/homeOverviewPattern.svg`}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full  h-full text-center lg:mb-[2.083vw] mb-2">
        <SectionTitle title={"NEWS AND EVENTS"} />
      </div>
      <div className="w-full h-full ">
        <div className="w-full h-auto">
          <div className="flex justify-center items-center gap-4">
            <div className=" w-full pb-10 h-auto">
              <Swiper
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  1024: {
                    slidesPerView: 2,
                  },
                }}
                spaceBetween={10}
                navigation={{
                  nextEl: ".button-news-next-con",
                  prevEl: ".button-news-prev-con",
                }}
                modules={[Navigation, Autoplay]}
                className="awards-swiper h-full w-full"
                loop={true}
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
              >
                {newsData &&
                  newsData.map((item, index) => (
                    <SwiperSlide key={index} className="h-full w-full">
                      <div className="">
                        {item?.attributes?.thumbnailImage?.data?.attributes
                          ?.url && (
                          <div className="lg:w-[36.458vw] lg:h-[18.229vw] w-full h-full lg:mb-[2.083vw] mb-2">
                            <Image
                              src={cleanImage(
                                item?.attributes?.thumbnailImage?.data
                                  ?.attributes?.url
                              )}
                              width={700}
                              height={1000}
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        {item?.attributes?.title && (
                          <p className="lg:text-[1.25vw] lg:leading-[1.667vw] leading-[5.208vw] font-bold  text-black text-[20px] lg:mb-[1.25vw] mb-2">
                            {item?.attributes?.title}
                          </p>
                        )}
                        {item?.attributes?.description && (
                          <p className=" lg:text-[1.042vw] lg:leading-[1.667vw] leading-[5.208vw]  text-black text-[16px]">
                            {item?.attributes?.description
                              ?.split(" ")
                              .slice(0, 10)
                              .join(" ")}
                          </p>
                        )}
                        <p
                          className="mt-2 text-black cursor-pointer lg:text-[1.042vw] lg:leading-[1.667vw] leading-[5.208vw] font-normal hover:text-blue-600"
                          onClick={() =>
                            router.push(`/news/${item?.attributes?.slug}`, undefined, { scroll: true })
                          }
                        >
                          Read more
                        </p>
                      </div>
                    </SwiperSlide>
                  ))}
              </Swiper>
            </div>
          </div>
          <div className="flex justify-center items-center lg:gap-[2.5vw] gap-4 lg:mt-[2.083vw]">
            <div className="button-border group button-news-prev-con cursor-pointer">
              <CircularLeftArrow />
            </div>
            <div className="button-border group button-news-next-con cursor-pointer">
              <CircularRightArrow />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeNews;
