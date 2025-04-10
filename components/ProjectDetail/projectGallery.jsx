import SectionTitle from "@/common/SectionTitle";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Controller, EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { CircularLeftArrow, CircularRightArrow } from "@/public/icon/arrows";

const ProjectGallery = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const data = [
    { image: "/images/project-details/gallery/projectGallery.png" },
    { image: "/images/project-details/gallery/projectGallery.png" },
    { image: "/images/project-details/gallery/projectGallery.png" },
    { image: "/images/project-details/gallery/projectGallery.png" },
    { image: "/images/project-details/gallery/projectGallery.png" },
    { image: "/images/project-details/gallery/projectGallery.png" },
  ];
  return (
    <div className="lg:py-[4.167vw] py-4 lg:px-[10.938vw] px-4">
      <div className="lg:mb-[3.021vw] mb-2 text-center">
        <SectionTitle title={"PROJECT GALLERY"} />
      </div>
      <div className="relative">
        <div className="relative">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            speed={1200}
            modules={[EffectCards, Navigation, Autoplay]}
            navigation={{
              nextEl: ".project-gallery-next",
              prevEl: ".project-gallery-prev",
            }}
            breakpoints={{
              0: { slidesPerView: 1 },
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
              1240: { slidesPerView: 1 },
            }}
            onReachBeginning={() => setIsBeginning(true)}
            onReachEnd={() => setIsEnd(true)}
            onSlideChange={({ isBeginning, isEnd }) => {
              setIsBeginning(isBeginning);
              setIsEnd(isEnd);
            }}
            cardsEffect={{
              slideShadows: false,
              perSlideOffset: 12,
              perSlideRotate: 0,
            }}
            className="w-full"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
          >
            {data?.map((image, index) => (
              <SwiperSlide key={index} className="">
                <div className="lg:w-[62.5vw] w-full h-[35vh] lg:h-[35vw]">
                  <Image
                    src={image?.image}
                    alt={`CSR Image ${index + 1}`}
                    height={1000}
                    width={1000}
                    className={`h-full  w-full${
                      activeIndex === index ? "" : " "
                    }`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        <div className="flex lg:flex-none justify-center items-center lg:gap-[2.5vw] gap-4 lg:mt-[2.083vw] mt-4">
          <div className="button-border lg:absolute left-[-8%] top-1/2 bg-transparent  group project-gallery-prev cursor-pointer">
            <CircularLeftArrow />
          </div>
          <div className="button-border lg:absolute right-[-8%] top-1/2 group project-gallery-next cursor-pointer">
            <CircularRightArrow />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectGallery;
