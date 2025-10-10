import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Featurecards() {
  return (
    <section className="flex flex-wrap justify-center items-center gap-8 py-12 px-4 md:px-8 lg:px-12">
      {/* Card 1 - Built for Teams */}
      <div className="flex flex-col md:flex-row bg-[#1E1E1E] rounded-lg overflow-hidden max-w-[500px] w-full sm:w-[90%] md:w-[480px] group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
        {/* Image Section */}
        <div className="w-full md:w-3/5 h-48 md:h-auto overflow-hidden">
          <Image
            src="/images/built for teams.png"
            alt="Built for Teams"
            width={900}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Text Section */}
        <div className="p-4 md:p-6 flex flex-col justify-between text-white w-full md:w-2/5">
          <h3 className="text-lg font-semibold mb-2">Built for Teams</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            A DevEx platform that’s built for team velocity & greater collaboration.
          </p>
          <Link
            href="/superchargedevteam"
            className="mt-4 text-sm text-fuchsia-400 hover:underline flex items-center"
          >
            <Image
              src="/images/Vector.svg"
              alt="Arrow"
              width={18}
              height={18}
              className="mr-2"
            />
            Supercharge your Dev Team &gt;
          </Link>
        </div>
      </div>

      {/* Card 2 - Enterprise Grade */}
      <div className="flex flex-col md:flex-row bg-[#1E1E1E] rounded-lg overflow-hidden max-w-[500px] w-full sm:w-[90%] md:w-[480px] group cursor-pointer transition-transform duration-300 hover:scale-[1.02]">
        {/* Image Section */}
        <div className="w-full md:w-3/5 h-48 md:h-auto overflow-hidden">
          <Image
            src="/images/enterprise grade.png"
            alt="Enterprise Grade"
            width={900}
            height={300}
            className="w-full h-full object-cover transition-transform duration-300 ease-in-out group-hover:scale-110"
          />
        </div>

        {/* Text Section */}
        <div className="p-4 md:p-6 flex flex-col justify-between text-white w-full md:w-2/5">
          <h3 className="text-md font-semibold mb-2">Enterprise Grade</h3>
          <p className="text-sm text-gray-300 leading-relaxed">
            Solutions designed for large-scale security, privacy & control.
          </p>
          <Link
            href="/securedevteam"
            className="mt-4 text-sm text-fuchsia-400 hover:underline flex items-center"
          >
            <Image
              src="/images/Vector.svg"
              alt="Arrow"
              width={18}
              height={18}
              className="mr-2"
            />
            Secure your Dev Team &gt;
          </Link>
        </div>
      </div>
    </section>
  );
}
