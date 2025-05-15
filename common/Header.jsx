import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import SideBar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);
  const router = useRouter();

  const [showMenu, setShowMenu] = useState(false);
  const [isScrolledDown, setIsScrolledDown] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    if (showMenu) {
      document.documentElement.style.overflowY = "hidden";
      document.body.style.overflowY = "hidden";
    } else {
      document.documentElement.style.overflowY = "";
      document.body.style.overflowY = "";
    }

    // Cleanup function to restore scroll when the component unmounts
    return () => {
      document.documentElement.style.overflowY = "";
      document.body.style.overflowY = "";
    };
  }, [showMenu]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > 100 && currentScrollY > lastScrollY) {
        // Scrolling down
        setIsScrolledDown(true);
      } else {
        // Scrolling up or near the top
        setIsScrolledDown(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const toggleSidebar = () => {
    setShowMenu((prev) => !prev);
  };
  const navLinks = [
    {
      name: "Home",
      link: "/",
      icon: (active) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke={active ? "#D2AB67" : "black"}
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M3 12L12 3l9 9M4 10v10h6v-6h4v6h6V10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "About us",
      link: "/about",
      icon: (active) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke={active ? "#D2AB67" : "black"}
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <circle
            cx="12"
            cy="8"
            r="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M4 20c0-4 4-6 8-6s8 2 8 6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Projects",
      link: "/projects",
      icon: (active) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke={active ? "#D2AB67" : "black"}
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <rect
            x="3"
            y="3"
            width="18"
            height="18"
            rx="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M3 9h18M9 21V9"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "News and Media",
      link: "/news",
      icon: (active) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke={active ? "#D2AB67" : "black"}
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <rect
            x="3"
            y="4"
            width="18"
            height="16"
            rx="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M7 8h10M7 12h10M7 16h4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Blogs",
      link: "/blogs",
      icon: (active) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          width="24px"
          height="24px"
          style={{
            shapeRendering: "geometricPrecision",
            textRendering: "geometricPrecision",
            imageRendering: "optimizeQuality",
            fillRule: "evenodd",
            clipRule: "evenodd",
          }}
          xmlnsXlink="http://www.w3.org/1999/xlink"
        >
          <g>
            <path
              style={{ opacity: 1 }}
              fill={active ? "#D2AB67" : "black"}
              d="M -0.5,-0.5 C 5.83333,-0.5 12.1667,-0.5 18.5,-0.5C 19.344,1.75934 21.0107,2.75934 23.5,2.5C 23.5,3.83333 23.5,5.16667 23.5,6.5C 18.5681,9.48591 17.0681,13.8192 19,19.5C 17.6439,20.3802 16.1439,20.7135 14.5,20.5C 14.5,21.5 14.5,22.5 14.5,23.5C 13.5,23.5 12.5,23.5 11.5,23.5C 11.0472,22.5416 10.3805,21.7083 9.5,21C 6.18323,20.5017 2.8499,20.335 -0.5,20.5C -0.5,13.5 -0.5,6.5 -0.5,-0.5 Z M 13.5,8.5 C 12.8783,9.62656 12.045,10.6266 11,11.5C 8.53415,10.2234 6.03415,10.2234 3.5,11.5C 11.5,12.8333 11.5,14.1667 3.5,15.5C 8.71725,17.4263 13.2172,16.4263 17,12.5C 17.4955,14.4727 17.6621,16.4727 17.5,18.5C 12.3129,19.051 6.97956,19.051 1.5,18.5C 1.5,12.8333 1.5,7.16667 1.5,1.5C 6.83333,1.5 12.1667,1.5 17.5,1.5C 17.851,4.81163 16.5177,7.14496 13.5,8.5 Z"
            />
          </g>
          <g>
            <path
              style={{ opacity: 1 }}
              fill={active ? "#D2AB67" : "black"}
              d="M 3.5,2.5 C 6.64054,3.08933 9.64054,3.08933 12.5,2.5C 14.0666,2.47697 15.3999,2.97697 16.5,4C 14.3333,4.16667 12.1667,4.33333 10,4.5C 7.38965,4.46677 5.22299,3.80011 3.5,2.5 Z"
            />
          </g>
          <g>
            <path
              style={{ opacity: 1 }}
              fill={active ? "#D2AB67" : "black"}
              d="M 13.5,8.5 C 10.1016,8.82036 6.76829,8.48702 3.5,7.5C 5.16667,7.16667 6.83333,6.83333 8.5,6.5C 10.6397,6.55608 12.3064,7.22275 13.5,8.5 Z"
            />
          </g>
        </svg>
      ),
    },
    {
      name: "Careers",
      link: "/careers",
      icon: (active) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke={active ? "#D2AB67" : "black"}
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <rect
            x="3"
            y="7"
            width="18"
            height="14"
            rx="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      name: "Contact us",
      link: "/contact-us",
      icon: (active) => (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          stroke={active ? "#D2AB67" : "black"}
          strokeWidth="1.5"
          viewBox="0 0 24 24"
          width="24"
          height="24"
        >
          <path
            d="M4 4h16v16H4z"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path d="M4 4l8 8 8-8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
    },
  ];

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-screen z-[10] transition-all duration-300 lg:flex hidden ${
          isScrolledDown
            ? "bg-transparent opacity-0 pointer-events-none"
            : "bg-white shadow-md opacity-100 pointer-events-auto"
        }`}
      >
        {" "}
        <div className="flex max-md:px-5  md:container mx-auto py-3 justify-between items-center w-full ">
          <Image
            className={` ${
              isSticky
                ? "lg:w-[4.3rem] w-[3.5rem] !cursor-pointer lg:h-auto"
                : "lg:w-[2.74vw] w-[3.5rem] !cursor-pointer lg:h-auto"
            }`}
            src={"/images/home/virasat-logo.png"}
            height={100}
            width={100}
            onClick={() => {
              router.push("/");
            }}
            alt="Logo"
          />
          <div className="flex gap-10">
            {navLinks.map((link, index) => {
              const isActive = router.pathname === link.link;

              return (
                <Link key={index} href={link.link}>
                  <div
                    className={`group flex items-center gap-2 cursor-pointer relative rounded-md px-3 py-1 transition-all duration-300
                    ${
                      isActive
                        ? "bg-[#001F3F] text-white"
                        : "hover:bg-sky-300 hover:text-black text-black"
                    }
                  `}
                  >
                    {link.icon(true)}
                    <div className="flex flex-col">
                      <span className="xl:text-lg lg:text-xs md:text-xs text-xs font-medium capitalize">
                        {link.name}
                      </span>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div
        className={`${
          !isScrolledDown
            ? "bg-white z-[50] block shadow-md"
            : "bg-transparent  hidden transition-all ease-in-out duration-500"
        } fixed top-0 left-0 w-screen z-[10] transition-all duration-300 flex lg:hidden`}
      >
        <div className="flex max-md:px-5  md:container mx-auto py-3 justify-between items-center w-full ">
          {/* Logo */}
          <Image
            className={` ${
              isSticky
                ? "lg:w-[4.3rem] w-[3.5rem] !cursor-pointer lg:h-auto"
                : "lg:w-[2.74vw] w-[3.5rem] !cursor-pointer lg:h-auto"
            }`}
            src={"/images/home/virasat-logo.png"}
            height={100}
            width={100}
            onClick={() => {
              router.push("/");
            }}
            alt="Logo"
          />
          <svg
            onClick={toggleSidebar}
            xmlns="http://www.w3.org/2000/svg"
            className="xl:w-[2rem] h-[2rem] w-[2rem] xl:h-[2rem] block !cursor-pointer"
            viewBox="0 0 43 29"
            fill="#D2AB67"
          >
            <path
              d="M3.18653 28.3808C2.52745 28.3808 1.97537 28.1575 1.5303 27.7109C1.08522 27.2643 0.86191 26.7122 0.86036 26.0547C0.858809 25.3971 1.08212 24.8451 1.5303 24.3984C1.97847 23.9518 2.53055 23.7285 3.18653 23.7285H40.4053C41.0643 23.7285 41.6172 23.9518 42.0638 24.3984C42.5104 24.8451 42.733 25.3971 42.7314 26.0547C42.7299 26.7122 42.5066 27.2651 42.0615 27.7132C41.6164 28.1614 41.0643 28.3839 40.4053 28.3808H3.18653ZM3.18653 16.75C2.52745 16.75 1.97537 16.5267 1.5303 16.0801C1.08522 15.6334 0.86191 15.0814 0.86036 14.4238C0.858809 13.7663 1.08212 13.2142 1.5303 12.7676C1.97847 12.321 2.53055 12.0977 3.18653 12.0977H40.4053C41.0643 12.0977 41.6172 12.321 42.0638 12.7676C42.5104 13.2142 42.733 13.7663 42.7314 14.4238C42.7299 15.0814 42.5066 15.6342 42.0615 16.0824C41.6164 16.5306 41.0643 16.7531 40.4053 16.75H3.18653ZM3.18653 5.11914C2.52745 5.11914 1.97537 4.89583 1.5303 4.4492C1.08522 4.00258 0.86191 3.4505 0.86036 2.79297C0.858809 2.13544 1.08212 1.58336 1.5303 1.13673C1.97847 0.69011 2.53055 0.466797 3.18653 0.466797H40.4053C41.0643 0.466797 41.6172 0.69011 42.0638 1.13673C42.5104 1.58336 42.733 2.13544 42.7314 2.79297C42.7299 3.4505 42.5066 4.00335 42.0615 4.45153C41.6164 4.8997 41.0643 5.12224 40.4053 5.11914H3.18653Z"
              fill="#D2AB67"
            />
          </svg>
        </div>

        {/* Sidebar Modal */}
        <div
          className={`${
            !isScrolledDown
              ? "bg-[#000000a6] z-[999] block shadow-md"
              : "bg-transparent  hidden transition-all ease-in-out duration-500"
          } block`}
        >
          {showMenu && (
            <SideBar
              toggleSidebar={toggleSidebar}
              navLinks={navLinks}
              showProjectDropdown={showProjectDropdown}
              setShowProjectDropdown={setShowProjectDropdown}
            />
          )}
        </div>

        {/* Background Overlay */}
        {showMenu && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[15] block "
            onClick={toggleSidebar}
          ></div>
        )}
      </div>
    </>
  );
};

export default Header;
