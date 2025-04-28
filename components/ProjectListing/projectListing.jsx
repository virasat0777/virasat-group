import BlackButton from "@/common/BlackButton";
import SectionTitle from "@/common/SectionTitle";
import { cleanImage } from "@/services/imageHandling";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

const ProjectListing = ({ projects }) => {
  // const projects = [
  //   {
  //     thumbnailImage: "/images/project-listing/vProj1.png",
  //     projectName: "Project 1",
  //     totalUnits: "117",
  //     bedrooms: "1 & 2",
  //     projectType: "Apartment",
  //     slug: "project-1",
  //     status: "ongoing",
  //     developmentSize: "1.83 Acres",
  //   },
  //   {
  //     thumbnailImage: "/images/project-listing/vProj1.png",
  //     projectName: "Project 2",
  //     totalUnits: "85",
  //     bedrooms: "2 & 3",
  //     projectType: "Condominium",
  //     slug: "project-2",
  //     status: "ongoing",
  //     developmentSize: "1.83 Acres",
  //   },
  //   {
  //     thumbnailImage: "/images/project-listing/vProj1.png",
  //     projectName: "Project 3",
  //     totalUnits: "150",
  //     bedrooms: "1, 2 & 3",
  //     projectType: "Villa",
  //     slug: "project-3",
  //     status: "completed",
  //     developmentSize: "1.83 Acres",
  //   },
  //   {
  //     thumbnailImage: "/images/project-listing/vProj1.png",
  //     projectName: "Project 4",
  //     totalUnits: "200",
  //     bedrooms: "Studio & 1",
  //     projectType: "Studio Apartment",
  //     slug: "project-4",
  //     status: "completed",
  //     developmentSize: "1.83 Acres",
  //   },
  //   {
  //     thumbnailImage: "/images/project-listing/vProj1.png",
  //     projectName: "Project 5",
  //     totalUnits: "95",
  //     bedrooms: "2 BHK",
  //     projectType: "Townhouse",
  //     slug: "project-5",
  //     status: "upcoming",
  //     developmentSize: "1.83 Acres",
  //   },
  //   {
  //     thumbnailImage: "/images/project-listing/vProj1.png",
  //     projectName: "Project 6",
  //     totalUnits: "130",
  //     bedrooms: "1, 2 & 3 BHK",
  //     projectType: "Mixed-Use Development",
  //     slug: "project-6",
  //     status: "upcoming",
  //     developmentSize: "1.83 Acres",
  //   },
  // ];

  const router = useRouter();
  const [selectedProjectTab, setSelectedProjectTab] = useState("all");

  const filteredProjects =
    selectedProjectTab !== "all"
      ? projects.filter(
          (item) => item?.attributes?.projectStatus === selectedProjectTab
        )
      : [...projects];

  const buttons = [
    "all",
    ...new Set(projects.map((item) => item?.attributes?.projectStatus)),
  ];
  return (
    <div className={`lg:py-[4.167vw] py-6 lg:px-[10.417vw] px-4 relative`}>
      <div className="absolute inset-0 -z-10 opacity-[0.015]">
        <Image
          src={`/images/home/homeOverviewPattern.svg`}
          height={1000}
          width={1000}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <div className="text-center lg:mb-[2.5vw] mb-6">
          <SectionTitle title="OUR PROJECTS" />
        </div>
        <div className="flex flex-col xl:flex-row items-center justify-between  uppercase">
          {buttons.map((item, index) => (
            <BlackButton
              key={index}
              name={item}
              handleFunction={() => setSelectedProjectTab(item)}
            />
          ))}
        </div>

        <div className="flex flex-wrap gap-3 mt-6 lg:mt-[3.333vw] justify-center">
          {filteredProjects.map((item, index) => (
            <div
              className="lg:p-[1.25vw] p-3 border-[1px] lg:w-[25.677vw] md:w-1/2 w-full border-black"
              key={index}
            >
              {item?.attributes?.thumbnailImage?.data?.attributes?.url && (
                <div className="lg:w-[22.917vw] w-full lg:h-[21.917vw] h-auto">
                  <Image
                    width={440}
                    height={430}
                    className="w-full h-full"
                    src={cleanImage(
                      item?.attributes?.thumbnailImage?.data?.attributes?.url
                    )}
                    alt=""
                  />
                </div>
              )}
              <div>
                <h6 className="lg:mt-[2.083vw] mb-6 lg:text-[1.25vw] mt-6 text-center montserrat text-xl font-bold">
                  {item?.attributes?.projectTitle}
                </h6>
              </div>
              <div className="lg:py-[1.25vw] flex justify-between   ">
                {
                  <div className="flex flex-col lg:gap-0 gap-4 w-50 justify-start items-start ">
                    {item?.attributes?.projectType && (
                      <div className="flex items-center gap-4 lg:mb-[1.045vw] mb-3 ">
                        <div className="text-xs xxs:text-[10px] xs:text-[14px] lg:text-[1.25vw] text-center">
                          <Image
                            width={24}
                            height={24}
                            className="mx-auto h-full w-full"
                            src="/icon/project-listing/build.svg"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="lg:text-[0.833vw] xxs:text-[10px] xs:text-[14px] text-base">
                            Project Type
                          </p>
                          <p className="lg:text-[0.833vw]  xxs:text-[10px] xs:text-[14px] text-base">
                            {item?.attributes?.projectType}
                          </p>
                        </div>
                      </div>
                    )}
                    {item?.attributes?.bedrooms && (
                      <div className="flex items-center gap-4">
                        <div className="text-xs xxs:text-[10px] lg:text-[1.25vw] xs:text-[14px] text-center">
                          <Image
                            width={24}
                            height={24}
                            className="mx-auto h-full w-full "
                            src="/icon/project-listing/bed.svg"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="lg:text-[0.833vw] xs:text-[14px] text-base xxs:text-[10px] ">
                            Bedrooms
                          </p>
                          <p className="lg:text-[0.833vw] xs:text-[14px]  xxs:text-[10px]  text-base">
                            {item?.attributes?.bedrooms} BHK
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                }
                {
                  <div className="flex flex-col w-50 lg:gap-0 gap-4 justify-start items-start ">
                    {item?.attributes?.totalUnits && (
                      <div className="flex items-center gap-4 lg:mb-[1.045vw] mb-3 ">
                        <div className="text-xs  xxs:text-[10px] xs:text-[14px] lg:text-[1.25vw] text-center">
                          <Image
                            width={24}
                            height={24}
                            className="mx-auto h-full w-full"
                            src="/icon/project-listing/door.svg"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-col">
                          <p className="lg:text-[0.833vw]  text-base xs:text-[14px] xxs:text-[10px]">
                            Total units
                          </p>
                          <p className="lg:text-[0.833vw] xs:text-[14px] text-base xxs:text-[10px]">
                            {item?.attributes?.totalUnits} units
                          </p>
                        </div>
                      </div>
                    )}
                    {item?.attributes?.developmentSize && (
                      <div className="flex items-center gap-4">
                        <div className="text-xs xs:text-[14px] xxs:text-[10px] lg:text-[1.25vw] text-center">
                          <Image
                            width={24}
                            height={24}
                            className="mx-auto h-full w-full"
                            src="/icon/project-listing/dev.svg"
                            alt=""
                          />
                        </div>
                        {
                          <div className="flex flex-col">
                            <p className="lg:text-[0.833vw] xs:text-[14px] text-base xxs:text-[10px]">
                              Development Size
                            </p>
                            <p className="lg:text-[0.833vw] xs:text-[14px] text-base xxs:text-[10px]">
                              {item?.attributes?.developmentSize}
                            </p>
                          </div>
                        }
                      </div>
                    )}
                  </div>
                }
              </div>

              <div className="text-center">
                <BlackButton
                  name="KNOW MORE"
                  useLink={false}
                  handleFunction={() =>
                    router.push(`/projects/${item?.attributes?.slug}`)
                  }
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectListing;
