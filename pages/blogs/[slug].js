import SectionTitle from "@/common/SectionTitle";
import React from "react";
import qs from "qs";
import axios from "axios";

const BlogDetail = ({ data }) => {
  console.log(data?.data[0]?.attributes, "blog data");
  const blog = data?.data[0]?.attributes;
  return (
    <div className="w-full min-h-screen lg:py-[4vw] lg:px-[12vw] py-[12px] px-[12px]">
      <div className="w-full text-center">
        {blog?.title && <SectionTitle title={blog?.title} />}
      </div>

      <div>
        {
          <div
            className="mt-4 text-[16px] text-[#000000] font-[400] leading-[28px] tracking-[0.02em]"
            dangerouslySetInnerHTML={{ __html: blog?.content }}
          ></div>
        }
      </div>
    </div>
  );
};

export default BlogDetail;

export async function getServerSideProps(params) {
  let api = "/api/blog-listings";
  const query = {
    filters: {
      slug: {
        $eq: params?.params?.slug,
      },
    },
    populate: [
      "seo",
      "seo.metaImage",
      "seo.schema",
      "seo.metaSocial",
      "seo.metaSocial.image",
      "thumbnailImage",
    ],
  };
  const queryString = qs.stringify(query, {
    encodeValuesOnly: true,
  });
  const endpoint = `${process.env.NEXT_PUBLIC_BACKEND_API_URL}${api}?${queryString}`;
  console.log(endpoint, "blogs sep end point");
  const response = await axios.get(endpoint);
  const data = response.data;
  return {
    props: {
      data: data,
    },
  };
}
