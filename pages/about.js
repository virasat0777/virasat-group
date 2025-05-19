import Banner from "@/common/Banner";
import Bank from "@/components/About/bank";
import LoanPartners from "@/components/About/loanPartners";
import Management from "@/components/About/management";
import Overview from "@/components/About/overview";
import VisionMission from "@/components/About/visionMission";
import { fetchAboutData } from "@/redux/slices/aboutSlice";
import { store } from "@/redux/store";
import { cleanImage } from "@/services/imageHandling";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Seo from "@/components/Seo/Seo";

const About = ({ data }) => {
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
      <Seo seo={data?.Seo} />
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
              full={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {data?.overview && <Overview data={data?.overview} />}
      {data?.management.team.length > 0 && (
        <Management data={data?.management} />
      )}
      {data?.visionMission && <VisionMission data={data?.visionMission} />}
      {data?.loanPartners.length > 0 && (
        <LoanPartners data={data?.loanPartners} />
      )}
      {data?.bankCollabs && <Bank data={data?.bankCollabs} />}
    </div>
  );
};

export default About;

export async function getServerSideProps() {
  await store.dispatch(fetchAboutData());
  const about = store.getState()?.about?.data?.attributes;

  return {
    props: {
      data: about,
    },
  };
}
