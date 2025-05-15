import Banner from "@/common/Banner";
import CareerListing from "@/components/Careers/careerListing";
import { fetchCareerData } from "@/redux/slices/careerSlice";
import { store } from "@/redux/store";
import { cleanImage } from "@/services/imageHandling";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Seo from "@/components/Seo/Seo";

const Careers = ({ data }) => {
  useEffect(() => {
    if (window && window.location.hash) {
      const id = window.location.hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 300); // Delay helps ensure images/layout are ready
      }
    }
  }, []);
  return (
    <div>
      <Seo seo={data?.attributes?.Seo} />
      {data?.attributes?.banner && (
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
          {data?.attributes?.banner?.map((banner, index) => (
            <SwiperSlide key={index}>
              <Banner
                src={cleanImage(banner?.desktopBanner?.data?.attributes?.url)}
                mobileSrc={cleanImage(
                  banner?.mobileBanner?.data?.attributes?.url
                )}
                title={banner?.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      {data?.attributes?.listingSection && (
        <CareerListing data={data?.attributes?.listingSection} />
      )}
    </div>
  );
};

export default Careers;

export async function getServerSideProps() {
  await store.dispatch(fetchCareerData());
  const career = store?.getState()?.career?.data?.data;
  return {
    props: {
      data: career,
    },
  };
}
