"use client";

import React from "react";
import { motion } from "framer-motion";

const SummerSaleBanner: React.FC = () => {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 80, damping: 15, duration: 0.8 }}
      className="w-full bg-gradient-to-r from-purple-800 to-blue-700 text-white px-6 py-2 flex items-center 
                 justify-evenly gap-5 text-xl shadow-md"
    >
      <div className="flex items-center gap-10 flex-wrap">
        <span className="text-2xl">
          🌟Summer <strong className="font-bold text-2xl">SALE</strong>
        </span>
        <span>
          Get <strong className="font-bold">50% OFF</strong> GitKraken Pro
        </span>
      </div>
      <button className="ml-4 px-4 py-1 border border-white rounded-md text-white hover:bg-white hover:text-blue-600 transition-all duration-300 text-xs sm:text-sm">
        Take Advantage to Save
      </button>
    </motion.div>
  );
};

export default SummerSaleBanner;