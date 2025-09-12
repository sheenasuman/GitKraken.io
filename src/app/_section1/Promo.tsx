// components/SummerSaleBanner.tsx

import React from 'react';

const SummerSaleBanner: React.FC = () => {
  return (
    <div className="w-full bg-gradient-to-r from-purple-800 to-blue-700 text-white px-6 py-2 flex items-center 
                    justify-evenly gap-5 text-xl">
      <div className="flex items-center gap-10 flex-wrap">          
          <span className="text-2xl">🌟Summer  <strong className="font-bold text-2xl">SALE</strong></span>
          <span>Get <strong className="font-bold">50% OFF</strong> GitKraken Pro</span>
      </div>
      <button className="ml-4 px-4 py-1 border border-white rounded-md text-white hover:bg-white hover:text-blue-600 transition-all duration-300 text-xs sm:text-sm">
            Take Advantage to Save
      </button>
    </div>
  );
};

export default SummerSaleBanner;







