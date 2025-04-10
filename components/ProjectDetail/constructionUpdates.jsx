import SectionTitle from "@/common/SectionTitle";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { CircularLeftArrow, CircularRightArrow } from "@/public/icon/arrows";

const ConstructionUpdates = () => {
  const constructionUpatesImages = [
    {
      image: "/images/project-details/construction-updates/1.png",
      date: "Aug 2021",
    },
    {
      image: "/images/project-details/construction-updates/2.png",
      date: "Dec 2021",
    },
    {
      image: "/images/project-details/construction-updates/3.png",
      date: "Jan 2022",
    },
    {
      image: "/images/project-details/construction-updates/4.png",
      date: "Mar 2022",
    },
    {
      image: "/images/project-details/construction-updates/2.png",
      date: "Dec 2021",
    },
    {
      image: "/images/project-details/construction-updates/2.png",
      date: "Dec 2021",
    },
  ];

  return (
    <div className="lg:py-[4.167vw] py-4 px-4 lg:px-[10.938vw]">
      <div className="lg:mb-[3.125vw] mb-4 text-center">
        <SectionTitle title={`CONSTRUCTION UPDATES`} />
      </div>

      <div className="relative">
        <Swiper
          grabCursor={true}
          speed={800}
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".project-construction-next",
            prevEl: ".project-construction-prev",
          }}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1240: { slidesPerView: 4 },
          }}
          loop={true}
          className="w-full"
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {constructionUpatesImages.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col items-center">
                <div
                  className={` size-full ${
                    (index + 1) % 2 === 0
                    
                      ? " lg:size-[15.625vw] "
                      : "  lg:size-[17.625vw]"
                  }`}
                >
                  <Image
                    src={item.image}
                    alt={`Construction ${index + 1}`}
                    width={1000}
                    height={1000}
                    className={`w-full h-full object-cover 
                        
                  `}
                  />
                </div>
                <p className="mt-3 text-sm text-center font-medium ">
                  {item.date}
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className="flex justify-center items-center lg:gap-[2.5vw] gap-4  lg:mt-[2.083vw] mt-10">
          <div className="button-border lg:absolute left-[-8%] top-1/2 -translate-y-1/2 group project-construction-prev cursor-pointer">
            <CircularLeftArrow />
          </div>
          <div className="button-border lg:absolute right-[-8%] top-1/2 -translate-y-1/2 group project-construction-next cursor-pointer">
            <CircularRightArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConstructionUpdates;
