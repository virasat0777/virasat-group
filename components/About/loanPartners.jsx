import SectionTitle from "@/common/SectionTitle";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { cleanImage } from "@/services/imageHandling";

const LoanPartners = ({ data }) => {
  const Data = [
    { img: "/images/about/l1.svg", title: "title1" },
    { img: "/images/about/l2.svg", title: "title2" },
    { img: "/images/about/l3.svg", title: "title3" },
    { img: "/images/about/l4.svg", title: "title4" },
    { img: "/images/about/l1.svg", title: "title5" },
    { img: "/images/about/l2.svg", title: "title6" },
    { img: "/images/about/l3.svg", title: "title7" },
    { img: "/images/about/l4.svg", title: "title8" },
    { img: "/images/about/l1.svg", title: "title9" },
    { img: "/images/about/l2.svg", title: "title10" },
    { img: "/images/about/l3.svg", title: "title11" },
    { img: "/images/about/l4.svg", title: "title12" },
    { img: "/images/about/l1.svg", title: "title13" },
    { img: "/images/about/l2.svg", title: "title14" },
    { img: "/images/about/l3.svg", title: "title15" },
    { img: "/images/about/l4.svg", title: "title1" },
    { img: "/images/about/l1.svg", title: "title2" },
    { img: "/images/about/l2.svg", title: "title3" },
    { img: "/images/about/l3.svg", title: "title4" },
    { img: "/images/about/l4.svg", title: "title5" },
    { img: "/images/about/l1.svg", title: "title6" },
    { img: "/images/about/l2.svg", title: "title7" },
    { img: "/images/about/l3.svg", title: "title8" },
    { img: "/images/about/l4.svg", title: "title9" },
    { img: "/images/about/l1.svg", title: "title10" },
    { img: "/images/about/l2.svg", title: "title11" },
    { img: "/images/about/l3.svg", title: "title12" },
    { img: "/images/about/l4.svg", title: "title13" },
    { img: "/images/about/l1.svg", title: "title14" },
    { img: "/images/about/l2.svg", title: "title15" },
  ];

  const loanItems = [
    ...data?.partners,
    ...data?.partners,
    ...data?.partners,
    ...data?.partners,
    ...data?.partners,
    ...data?.partners,
  ];

  const chunkArray = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const chunks = chunkArray(loanItems, 10);

  const chunkArray1 = (array, size) => {
    const result = [];
    for (let i = 0; i < array.length; i += size) {
      result.push(array.slice(i, i + size));
    }
    return result;
  };

  const chunks1 = chunkArray1(loanItems, 6);
  return (
    <div className="relative">
      <div className="absolute inset-0 -z-[10] ">
        <Image
          src={cleanImage(data?.bgImage?.data?.attributes?.url)}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="lg:py-[4.167vw] py-4 lg:px-[11.667vw] px-4">
        {data?.title && (
          <div className="text-white text-center">
            <SectionTitle title={data?.title} />
          </div>
        )}
        <div>
          <div className="amen-slider position-relative mt-[50px] md:block hidden">
            <Swiper
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 7500,
                disableOnInteraction: false,
              }}
              speed={1600}
              pagination={{
                clickable: true,
                type: "bullets",
              }}
              modules={[Keyboard, Autoplay, Navigation, Pagination]}
              className="mySwiper"
            >
              {chunks.map((chunk, chunkIndex) => (
                <SwiperSlide key={chunkIndex} className="pb-16">
                  <div className="grid grid-cols-5 gap-0">
                    {chunk.map((item, index) => (
                      <div
                        key={index}
                        className="flex hover-bg flex-col h-[200px] items-center justify-center border  border-opacity-5 border-[#E0E0E0]"
                      >
                        {item?.image?.data?.attributes?.url && (
                          <div className="h-full w-full flex items-center justify-center">
                            <Image
                              src={
                                cleanImage(
                                  item?.image?.data?.attributes?.url
                                ) || "/fallback-image.jpg"
                              }
                              alt={item.title || "Image"}
                              width={100}
                              height={100}
                              sizes="100%"
                              className="max-w-full xl:w-[50%] lg:w-[70%] md:w-[80%] h-auto filter"
                            />
                          </div>
                        )}

                        {/* <p className="text-center mt-2 text-white text-sm">{item.title}</p> */}
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <div className="amen-slider position-relative mt-[50px] md:hidden block">
            <Swiper
              slidesPerView={1}
              loop={true}
              autoplay={{
                delay: 7500,
                disableOnInteraction: false,
              }}
              speed={1600}
              pagination={{
                clickable: true, // Makes dots clickable
                type: "bullets", // Type of dots/pagination
              }}
              modules={[Keyboard, Autoplay, Navigation, Pagination]}
              className="mySwiper"
            >
              {chunks1.map((chunk, chunkIndex) => (
                <SwiperSlide key={chunkIndex} className="pb-16">
                  <div className="grid grid-cols-2 gap-0">
                    {chunk.map((item, index) => (
                      <div
                        key={index}
                        className="flex hover-bg flex-col sm:h-[200px] h-[120px] items-center justify-center border  border-opacity-25 border-[#E0E0E0]"
                      >
                        {item?.image?.data?.attributes?.url && (
                          <div className="h-full w-full flex items-center justify-center">
                            <Image
                              src={
                                cleanImage(
                                  item?.image?.data?.attributes?.url
                                ) || "/fallback-image.jpg"
                              } // Fallback image in case item.img is null
                              alt={item.title || "Image"} // Ensure alt text is always provided
                              width={100}
                              // sizes='100%'
                              height={100}
                              sizes="(max-width: 768px) 80vw, (max-width: 1024px) 70vw, 50vw"
                              quality={75}
                              className="sm:max-w-full h-auto filter w-[60%]"
                            />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoanPartners;
