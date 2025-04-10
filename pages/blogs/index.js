import Banner from "@/common/Banner";
import BlogList from "@/components/Blogs/BlogList";
import React from "react";

const BlogListing = () => {
  return (
    <div>
      <Banner
        src="/images/blogs/blogBanner.png"
        mobileSrc="/images/blogs/blogBanner.png"
        title="Blog Listing Page"
      />

      <BlogList />
    </div>
  );
};

export default BlogListing;
