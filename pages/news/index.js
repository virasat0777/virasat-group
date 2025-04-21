import Banner from "@/common/Banner";
import NewsList from "@/components/News/NewsList";
import { fetchNewsList } from "@/redux/slices/newsSlice";
import { store } from "@/redux/store";
import React from "react";

const News = ({ news }) => {
  return (
    <div>
      <Banner
        src="/images/news/newsBanner.png"
        mobileSrc="/images/news/newsBanner.png"
        title="News and Events"
      />
      <NewsList newsData={news} />
    </div>
  );
};

export default News;

export async function getServerSideProps() {
  await store.dispatch(fetchNewsList());
  const news = store.getState()?.newsList?.data?.data;

  return {
    props: {
      news: news,
    },
  };
}
