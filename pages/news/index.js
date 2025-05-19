import Banner from "@/common/Banner";
import NewsList from "@/components/News/NewsList";
import { fetchNewsListData } from "@/redux/slices/newsListSlice";
import { fetchNewsList } from "@/redux/slices/newsSlice";
import { store } from "@/redux/store";
import { cleanImage } from "@/services/imageHandling";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Seo from "@/components/Seo/Seo";

const News = ({ news, newsListPage }) => {
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
      <Seo seo={newsListPage?.Seo} />
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
        {newsListPage?.banner?.map((banner, index) => (
          <SwiperSlide key={index}>
            <Banner
              src={cleanImage(banner?.desktopBanner?.data?.attributes?.url)}
              mobileSrc={cleanImage(
                banner?.mobileBanner?.data?.attributes?.url
              )}
              title={banner?.title}
              isOther={true}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <NewsList newsData={news} />
    </div>
  );
};

export default News;

export async function getServerSideProps() {
  await store.dispatch(fetchNewsList());
  const news = store.getState()?.newsList?.data?.data;

  await store.dispatch(fetchNewsListData());
  const newsListPage = store.getState()?.newsListSlice?.data?.attributes;

  return {
    props: {
      news: news,
      newsListPage: newsListPage,
    },
  };
}
