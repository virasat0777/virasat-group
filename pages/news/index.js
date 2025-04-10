import Banner from "@/common/Banner";
import NewsList from "@/components/News/NewsList";
import React from "react";

const News = () => {
  return (
    <div>
      <Banner
        src="/images/news/newsBanner.png"
        mobileSrc="/images/news/newsBanner.png"
        title="News and Events"
      />
      <NewsList />
    </div>
  );
};

export default News;
