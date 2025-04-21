import Banner from "@/common/Banner";
import BlogList from "@/components/Blogs/BlogList";
import React from "react";
import { fetchBlogsList } from "@/redux/slices/blogsSlice";
import { store } from "@/redux/store";

const BlogListing = ({ blogs }) => {
  return (
    <div>
      <Banner
        src="/images/blogs/blogBanner.png"
        mobileSrc="/images/blogs/blogBanner.png"
        title="Blog Listing Page"
      />

      {blogs && <BlogList data={blogs} />}
    </div>
  );
};

export default BlogListing;

export async function getServerSideProps() {
  await store.dispatch(fetchBlogsList());
  const blogs = store.getState()?.blogs?.data?.data;

  return {
    props: {
      blogs: blogs,
    },
  };
}
