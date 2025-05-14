import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/router";

const SideBar = ({ toggleSidebar, navLinks }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <motion.div
      className="fixed top-0 right-0 h-screen overflow-y-auto xl:w-[30rem] w-[20rem] bg-white/10 backdrop-blur-lg shadow-lg z-[100] flex flex-col p-5 border-l border-white/20"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Close Button */}
      <div className="flex justify-end">
        <button
          className="flex items-center justify-center rounded-full hover:rotate-180 duration-500 transition-all"
          onClick={toggleSidebar}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="#C29B5C"
            className="w-8 h-8"
          >
            <path
              fillRule="evenodd"
              d="M6.225 4.811a.75.75 0 011.06 0L12 9.526l4.715-4.715a.75.75 0 111.06 1.06L13.06 10.586l4.715 4.715a.75.75 0 01-1.06 1.06L12 11.646l-4.715 4.715a.75.75 0 01-1.06-1.06l4.715-4.715-4.715-4.715a.75.75 0 010-1.06z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {/* Sidebar Navigation */}
      <div className="mt-10 space-y-3">
        {navLinks.map((link, index) => {
          const isActive = currentPath === link.link;
          const isHovered = hoveredIndex === index;

          const bgColor = isActive
            ? "bg-[#001F3F] text-white"
            : isHovered
            ? "bg-sky-300 text-black"
            : "text-white";

          return (
            <motion.div
              key={index}
              className={`flex items-center gap-4 px-4 py-2 rounded-md cursor-pointer transition-all duration-300 ${bgColor}`}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Icon */}
              <div className="w-8 h-8 flex items-center justify-center">
                {link.icon(isActive || isHovered)}
              </div>

              {/* Link */}
              <Link
                href={link.link}
                onClick={toggleSidebar}
                className="text-xl font-semibold"
              >
                {link.name}
              </Link>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SideBar;
