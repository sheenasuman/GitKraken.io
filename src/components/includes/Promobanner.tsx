"use client";

import React from "react";
import { motion } from "framer-motion";

const SummerSaleBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15, duration: 0.8 }}
      className="w-full bg-gradient-to-r from-purple-800 to-blue-700 text-white px-4 sm:px-6 py-3 flex flex-col sm:flex-row 
                 items-center justify-center sm:justify-between gap-3 sm:gap-6 text-center sm:text-left shadow-md"
    >
      {/* Text Section */}
      <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 sm:gap-6 text-sm sm:text-lg md:text-xl">
        <span className="text-lg sm:text-xl md:text-2xl">
          🌟 Summer <strong className="font-bold">SALE</strong>
        </span>
        <span>
          Get <strong className="font-bold">50% OFF</strong> GitKraken Pro
        </span>
      </div>

      {/* Button */}
      <button
        className="mt-2 sm:mt-0 px-4 py-2 border border-white rounded-md 
                   hover:bg-white hover:text-blue-700 transition-all duration-300 
                   text-xs sm:text-sm md:text-base font-semibold"
      >
        Take Advantage to Save
      </button>
    </motion.div>
  );
};

export default SummerSaleBanner;
