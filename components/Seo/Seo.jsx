import { cleanImage } from "@/services/imageHandling";
import Head from "next/head";
import React from "react";

const Seo = (props) => {
  const imgUrl = cleanImage(props?.seo?.metaImage?.data?.attributes?.url);
  const schema = props?.seo?.schema;
  // console.log("seo", props);
  return (
    <Head>
      <title>
        {props?.seo?.metaTitle == null
          ? props?.seo?.metaTitle
          : props?.seo?.metaTitle}
      </title>
      <meta
        name="keywords"
        content={props?.seo?.keywords == null ? "" : props?.seo?.keywords}
      />
      <meta
        name="description"
        content={
          props?.seo?.metaDescription == null ? "" : props?.seo?.metaDescription
        }
      />
      <link
        rel="canonical"
        href={props?.seo?.canonicalURL == null ? "" : props?.seo?.canonicalURL}
      />
      <meta
        name="robots"
        content={props?.seo?.metaRobots == null ? "" : props?.seo?.metaRobots}
      />
      <meta
        property="og:title"
        content={props?.seo?.metaTitle == null ? "" : props?.seo?.metaTitle}
      />
      <meta
        property="og:description"
        content={
          props?.seo?.metaDescription == null ? "" : props?.seo?.metaDescription
        }
      />
      <meta
        property="og:url"
        content={
          props?.seo?.canonicalURL == null ? "" : props?.seo?.canonicalURL
        }
      />
      <meta property="og:image" content={imgUrl == null ? "" : imgUrl} />
      {/* <script type="application/ld+json">{JSON.stringify(props?.seo?.structuredData) == null ? "" : JSON.stringify(props?.seo?.structuredData)}</script> */}
      {schema &&
        schema.map((item, index) => {
          // console.log("item", item);
          return (
            <script
              key={"websiteJSON" + index}
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify(item?.jsonSchema, null, 2)
                  ? JSON.stringify(item?.jsonSchema, null, 2)
                  : "",
              }}
            ></script>
          );
        })}
    </Head>
  );
};
export default Seo;
