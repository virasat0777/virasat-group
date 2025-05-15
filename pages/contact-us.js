import Banner from "@/common/Banner";
import GetInTouch from "@/components/Contact/getInTouch";
import { fetchContactData } from "@/redux/slices/contactSlice";
import { store } from "@/redux/store";
import { cleanImage } from "@/services/imageHandling";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Seo from "@/components/Seo/Seo";

const ContactUs = ({ data }) => {
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
      <Seo seo={data?.seo} />
      {data?.banner && (
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
          {data?.banner?.map((banner, index) => (
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
      {data?.getInTouch && data?.officeLocation && (
        <GetInTouch data={data?.getInTouch} office={data?.officeLocation} />
      )}
      <div className="w-screen lg:h-[43.333vw] h-[50vh]">
        <iframe
          src={data?.officeLocation?.mapLink}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
          className="h-full w-full"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactUs;

export async function getServerSideProps() {
  await store.dispatch(fetchContactData());
  const contact = store?.getState()?.contact?.data?.data?.attributes;
  return {
    props: {
      data: contact,
    },
  };
}
