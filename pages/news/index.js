import Banner from "@/common/Banner";
import NewsList from "@/components/News/NewsList";
import { fetchNewsListData } from "@/redux/slices/newsListSlice";
import { fetchNewsList } from "@/redux/slices/newsSlice";
import { store } from "@/redux/store";
import { cleanImage } from "@/services/imageHandling";
import React from "react";

const News = ({ news, newsListPage }) => {
  return (
    <div>
      {newsListPage?.banner && (
        <Banner
          src={cleanImage(
            newsListPage?.banner?.desktopBanner?.data?.attributes?.url
          )}
          mobileSrc={cleanImage(
            newsListPage?.banner?.mobileBanner?.data?.attributes?.url
          )}
          title={newsListPage?.banner?.title}
        />
      )}
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
