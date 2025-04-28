import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
const SideBar = ({ toggleSidebar, navLinks }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <motion.div
      className="fixed top-0 right-0 h-screen overflow-hidden xl:w-[30rem] w-[20rem] bg-white/10 backdrop-blur-lg shadow-lg z-[100] flex flex-col p-5 border-l border-white/20"
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      {/* Close Button */}
      <div className="flex justify-end">
        <button
          className=" flex items-center justify-center rounded-full  hover:rotate-180 duration-500 transition-all"
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
      {/* Sidebar Content */}
      <div className="mt-10 space-y-6">
        {navLinks.map((link, index) => (
          <motion.div
            key={index}
            className="group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <Link
              onClick={toggleSidebar}
              href={link.link}
              className="lg:text-2xl text-xl font-bold text-white relative inline-block transition-all"
            >
              {[...link.name].map((char, i) => (
                <motion.span
                  key={i}
                  className="inline-block"
                  animate={
                    hoveredIndex === index
                      ? { color: "#C29B5C", y: [-2, 2, -2, 0] }
                      : { color: "#FFFFFF" }
                  }
                  transition={{
                    duration: 0.4,
                    delay: i * 0.05,
                    ease: "easeInOut",
                  }}
                >
                  {char === " " ? "\u00A0" : char}
                </motion.span>
              ))}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};
export default SideBar;
