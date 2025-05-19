import Image from "next/image";
import HomeOverview from "@/components/Home/homeOverview";
import CounterSection from "@/components/Home/homeCounter";
import HomeProjects from "@/components/Home/homeProjects";
import HomeAwards from "@/components/Home/homeAwards";
import HomeTestimonials from "@/components/Home/homeTestimonials";
import HomeNews from "@/components/Home/homeNews";
import HomeBlogs from "@/components/Home/homeBlogs";
import HomeBanner from "@/components/Home/homeBanner";
import { fetchHomeData } from "@/redux/slices/homeslice";
import { store } from "@/redux/store";
import { fetchNewsList } from "@/redux/slices/newsSlice";
import { fetchProjectList } from "@/redux/slices/projectListSlice";
import { fetchBlogsList } from "@/redux/slices/blogsSlice";
import Seo from "@/components/Seo/Seo";
import { useEffect } from "react";
export default function Home({ homeData, newsData, projects, blogs }) {
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
    <>
      <Seo seo={homeData?.seo} />
      <div>
        {homeData?.banners && (
          <HomeBanner
            data={homeData?.banners}
            texts={homeData?.bannerTexts}
            full={true}
          />
        )}
        {homeData?.overview && <HomeOverview overview={homeData?.overview} />}
        {homeData?.counter && <CounterSection counter={homeData?.counter} />}
        {projects.length > 0 && <HomeProjects projects={projects} />}
        {homeData?.awards && <HomeAwards award={homeData?.awards} />}
        {homeData?.testimonial?.length > 0 && (
          <HomeTestimonials testimonial={homeData?.testimonial} />
        )}
        {newsData.length > 0 && <HomeNews newsData={newsData} />}
        {blogs.length > 0 && <HomeBlogs data={blogs} />}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  await store.dispatch(fetchHomeData());
  const homeData = store.getState()?.home?.data?.attributes;

  await store.dispatch(fetchNewsList());
  const newsData = store.getState()?.newsList?.data?.data;

  await store.dispatch(fetchProjectList());
  const projects = store.getState()?.projectList?.data?.data;

  await store.dispatch(fetchBlogsList());
  const blogs = store.getState()?.blogs?.data?.data;
  return {
    props: {
      homeData: homeData,
      newsData: newsData,
      projects: projects,
      blogs: blogs,
    },
  };
}
