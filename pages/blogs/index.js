import Banner from "@/common/Banner";
import BlogList from "@/components/Blogs/BlogList";
import React from "react";
import { fetchBlogsList } from "@/redux/slices/blogsSlice";
import { store } from "@/redux/store";
import { fetchBlogsListData } from "@/redux/slices/blogListPageSlice";
import { cleanImage } from "@/services/imageHandling";

const BlogListing = ({ blogs, blogsListPage }) => {
  return (
    <div>
      {blogsListPage?.banner && (
        <Banner
          src={cleanImage(
            blogsListPage?.banner?.desktopBanner?.data?.attributes?.url
          )}
          mobileSrc={cleanImage(
            blogsListPage?.banner?.mobileBanner?.data?.attributes?.url
          )}
          title={blogsListPage?.banner?.title}
        />
      )}

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
