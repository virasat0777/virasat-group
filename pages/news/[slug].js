import SectionTitle from "@/common/SectionTitle";
import React, { useEffect } from "react";
import qs from "qs";
import axios from "axios";

const NewsDetail = ({ data }) => {
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
  const news = data?.data[0]?.attributes;
  return (
    <div className="w-full min-h-screen lg:py-[5vw] lg:px-[12vw] py-[12px] px-[12px]">
      <div className="w-full text-start">
        {news?.title && <SectionTitle title={news?.title} />}
      </div>

      <div>
        {
          <div
            className="mt-4 text-[16px] text-[#000000] font-[400] leading-[28px] tracking-[0.02em]"
            dangerouslySetInnerHTML={{ __html: news?.content }}
          ></div>
        }
      </div>
    </div>
  );
};

export default NewsDetail;

export async function getServerSideProps(params) {
  let api = "/api/news/";
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
  const response = await axios.get(endpoint);
  const data = response.data;
  return {
    props: {
      data: data,
    },
  };
}
