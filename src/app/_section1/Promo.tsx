// components/SummerSaleBanner.tsx

import React from 'react';

const SummerSaleBanner: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-700 via-blue-600 to-blue-500 text-white px-6 py-2 flex items-center 
                    justify-center gap-5 text-sm sm:text-base font-medium">
      <div className="flex items-center gap-10 flex-wrap">
        <span className="text-yellow-300">🌟</span>
        <span>Summer <strong className="font-bold">SALE</strong></span>
        <span>|</span>
        <span>
          Get <strong className="font-bold">50% OFF</strong> GitKraken Pro
        </span>
      </div>
      <button className="ml-4 px-4 py-1 border border-white rounded-md text-white hover:bg-white hover:text-blue-600 transition-all duration-300 text-xs sm:text-sm">
        Take Advantage to Save
      </button>
    </div>
  );
};

export default SummerSaleBanner;
