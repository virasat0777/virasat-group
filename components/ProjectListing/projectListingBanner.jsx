import React from "react";
import { cleanImage } from "@/services/imageHandling";
import Banner from "@/common/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProjectListingBanner = ({ banner }) => {
  console.log(banner[0], "project listing");
  return (
    <div>
      <Swiper
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="w-full h-full"
      >
        {banner?.map((banne, index) => (
          <SwiperSlide key={index}>
            <Banner
              src={cleanImage(banne?.desktopBanner?.data?.attributes?.url)}
              mobileSrc={cleanImage(banne?.mobileBanner?.data?.attributes?.url)}
              title={banne?.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectListingBanner;
