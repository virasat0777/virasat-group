import SectionTitle from "@/common/SectionTitle";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  EffectCards,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
import { CircularLeftArrow, CircularRightArrow } from "@/public/icon/arrows";
import { cleanImage } from "@/services/imageHandling";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

const ProjectGallery = ({ data }) => {
  useEffect(() => {
    NativeFancybox.bind("[data-fancybox]", {});

    return () => {
      NativeFancybox.unbind("[data-fancybox]");
    };
  }, []);
  // ];
  return (
    <div className="lg:py-[4.167vw] py-4 lg:px-[10.938vw] px-4">
      {data?.title && (
        <div className="lg:mb-[3.021vw] mb-2 text-center">
          <SectionTitle title={data?.title || "Project Gallery"} />
        </div>
      )}
      <div className="relative">
        <div className="relative flex justify-center items-center">
          <Swiper
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={1.7}
            coverflowEffect={{
              rotate: 0,
              stretch: 300,
              depth: 10,
              modifier: 2,
              slideShadows: false,
              scale: 1,
            }}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              slidesPerView: 1,
              768: { slidesPerView: 1 },
              1024: { slidesPerView: 1 },
              1240: { slidesPerView: 1.7 },
            }}
            loop={true}
            speed={1000}
            navigation={{
              nextEl: ".project-gallery-next",
              prevEl: ".project-gallery-prev",
            }}
            modules={[EffectCoverflow, Navigation, Autoplay]}
            className="w-[90vw] h-[35vh] lg:h-[35vw] project-gallery-swiper"
          >
            {data?.images?.data.length > 0 &&
              data?.images?.data?.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="w-full h-full proj-div">
                    <Image
                      data-src={cleanImage(image?.attributes?.url)}
                      data-fancybox={`Gallery Image ${index + 1}`}
                      src={cleanImage(image?.attributes?.url)}
                      alt={`Gallery Image ${index + 1}`}
                      width={1000}
                      height={1000}
                      className="h-full w-full object-cover"
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
