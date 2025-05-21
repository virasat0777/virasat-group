import { cleanImage } from "@/services/imageHandling";
import Banner from "@/common/Banner";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProjectBanner = ({ data }) => {
  return (
    <div className="lg:mt-[4vw] mt-0 relative">
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
        {data?.map((banner, index) => (
          <SwiperSlide key={index}>
            <Banner
              src={cleanImage(banner?.desktopBanner?.data?.attributes?.url)}
              mobileSrc={cleanImage(
                banner?.mobileBanner?.data?.attributes?.url
              )}
              title={banner?.title}
              full={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProjectBanner;
