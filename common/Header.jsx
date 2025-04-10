import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import SideBar from "./Sidebar";

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [showProjectDropdown, setShowProjectDropdown] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navLinks = [
    { name: "Home", link: "/" },
    { name: "About us", link: "/about" },
    { name: "Project", link: "/projects" },
    { name: "Project Detail", link: "/project-detail" },
    { name: "News and Media", link: "/news" },
    { name: "Careers", link: "/careers" },
    { name: "Contact Us", link: "/contact-us" },
    { name: "Blogs", link: "/blogs" },
  ];

  return (
    <div
      className={`${
        isSticky ? "bg-nav z-[9999] shadow-md" : "bg-transparent"
      } fixed top-0 left-0 w-full z-[10] transition-all duration-300`}
    >
      <div className="flex container mx-auto py-5 justify-between items-center w-full">
        {/* Logo */}
        <Image
          className={` ${
            isSticky
              ? "lg:w-[4.3rem] w-[3.5rem] !cursor-pointer lg:h-[4rem]"
              : "lg:w-[6.3rem] w-[3.5rem] !cursor-pointer lg:h-[5rem]"
          }`}
          src={"/icon/virasatlogo.png"}
          height={100}
          width={100}
          onClick={() => {
            router.push("/");
          }}
          alt="Logo"
        />

        {/* Menu Icon */}

        <svg
          onClick={toggleSidebar}
          xmlns="http://www.w3.org/2000/svg"
          className="xl:w-[3rem] h-[2rem] w-[2rem] xl:h-[3rem] !cursor-pointer"
          viewBox="0 0 43 29"
          fill="black"
        >
          <path
            d="M3.18653 28.3808C2.52745 28.3808 1.97537 28.1575 1.5303 27.7109C1.08522 27.2643 0.86191 26.7122 0.86036 26.0547C0.858809 25.3971 1.08212 24.8451 1.5303 24.3984C1.97847 23.9518 2.53055 23.7285 3.18653 23.7285H40.4053C41.0643 23.7285 41.6172 23.9518 42.0638 24.3984C42.5104 24.8451 42.733 25.3971 42.7314 26.0547C42.7299 26.7122 42.5066 27.2651 42.0615 27.7132C41.6164 28.1614 41.0643 28.3839 40.4053 28.3808H3.18653ZM3.18653 16.75C2.52745 16.75 1.97537 16.5267 1.5303 16.0801C1.08522 15.6334 0.86191 15.0814 0.86036 14.4238C0.858809 13.7663 1.08212 13.2142 1.5303 12.7676C1.97847 12.321 2.53055 12.0977 3.18653 12.0977H40.4053C41.0643 12.0977 41.6172 12.321 42.0638 12.7676C42.5104 13.2142 42.733 13.7663 42.7314 14.4238C42.7299 15.0814 42.5066 15.6342 42.0615 16.0824C41.6164 16.5306 41.0643 16.7531 40.4053 16.75H3.18653ZM3.18653 5.11914C2.52745 5.11914 1.97537 4.89583 1.5303 4.4492C1.08522 4.00258 0.86191 3.4505 0.86036 2.79297C0.858809 2.13544 1.08212 1.58336 1.5303 1.13673C1.97847 0.69011 2.53055 0.466797 3.18653 0.466797H40.4053C41.0643 0.466797 41.6172 0.69011 42.0638 1.13673C42.5104 1.58336 42.733 2.13544 42.7314 2.79297C42.7299 3.4505 42.5066 4.00335 42.0615 4.45153C41.6164 4.8997 41.0643 5.12224 40.4053 5.11914H3.18653Z"
            fill="white"
          />
        </svg>
      </div>

      {/* Sidebar Modal */}
      {isSidebarOpen && (
        <SideBar
          toggleSidebar={toggleSidebar}
          navLinks={navLinks}
          showProjectDropdown={showProjectDropdown}
          setShowProjectDropdown={setShowProjectDropdown}
        />
      )}

      {/* Background Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-[15]"
          onClick={toggleSidebar}
        ></div>
      )}
    </div>
  );
};

export default Header;
