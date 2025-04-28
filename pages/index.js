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

export default function Home({ homeData, newsData, projects, blogs }) {
  return (
    <>
      <div>
        {homeData?.banner && <HomeBanner data={homeData?.banner} />}
        {homeData?.overview && <HomeOverview overview={homeData?.overview} />}
        {homeData?.counter && <CounterSection counter={homeData?.counter} />}
        {projects.length > 0 && <HomeProjects projects={projects} />}
        {homeData?.awards && <HomeAwards award={homeData?.awards} />}
        {homeData?.testimonial && (
          <HomeTestimonials testimonial={homeData?.testimonial} />
        )}
        {newsData && <HomeNews newsData={newsData} />}
        {blogs && <HomeBlogs data={blogs} />}
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
