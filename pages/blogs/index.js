import Banner from "@/common/Banner";
import BlogList from "@/components/Blogs/BlogList";
import React, { useEffect } from "react";
import { fetchBlogsList } from "@/redux/slices/blogsSlice";
import { store } from "@/redux/store";
import { fetchBlogsListData } from "@/redux/slices/blogListPageSlice";
import { cleanImage } from "@/services/imageHandling";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Seo from "@/components/Seo/Seo";

const BlogListing = ({ blogs, blogsListPage }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Seo seo={blogsListPage?.Seo} />

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
        {blogsListPage?.banner?.map((banner, index) => (
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
      {blogs && <BlogList data={blogs} />}
    </div>
  );
};

export default BlogListing;

export async function getServerSideProps() {
  await store.dispatch(fetchBlogsList());
  const blogs = store.getState()?.blogs?.data?.data;

  await store.dispatch(fetchBlogsListData());
  const blogsListPage = store.getState()?.blogsListingPage?.data?.attributes;

  return {
    props: {
      blogs: blogs,
      blogsListPage: blogsListPage,
    },
  };
}
