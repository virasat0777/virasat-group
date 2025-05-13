import Banner from "@/common/Banner";
import Bank from "@/components/About/bank";
import LoanPartners from "@/components/About/loanPartners";
import Management from "@/components/About/management";
import Overview from "@/components/About/overview";
import VisionMission from "@/components/About/visionMission";
import { fetchAboutData } from "@/redux/slices/aboutSlice";
import { store } from "@/redux/store";
import { cleanImage } from "@/services/imageHandling";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const About = ({ data }) => {
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
