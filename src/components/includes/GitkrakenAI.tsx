'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function GitKrakenAISection() {
  return (
    <section className="bg-[#1C1C1C] text-white rounded-xl 
                        px-4 sm:px-6 md:px-8 lg:px-12 xl:px-14 
                        py-2 sm:py-3 md:py-4 
                        w-[95%] sm:w-[90%] md:w-[80%] xl:max-w-5xl 
                        mx-auto flex flex-col md:flex-row items-center justify-between 
                        gap-3 sm:gap-4 md:gap-5 lg:gap-6
                        border border-gray-500 shadow-md
                        overflow-hidden">

      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-2 sm:space-y-3">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight flex justify-center md:justify-start items-center gap-1">
          <span className="text-blue-400">✨</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
            GitKraken
          </span>
          <span>AI</span>
        </h2>
        <p className="text-gray-300 text-xs sm:text-sm md:text-base leading-snug">
          GitKraken AI works for you to seamlessly orchestrate your workflows.
          Automagically generate commit messages, stash messages, changelogs,
          and pull requests.
        </p>
        <Link
          href="/gitKrakenAI"
          className="inline-block px-4 sm:px-5 py-1 sm:py-2 border border-purple-500 rounded-md text-white hover:bg-purple-600 transition text-xs sm:text-sm md:text-base"
        >
          Try GitKraken AI Free
        </Link>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-full sm:w-2/3 md:w-1/2 flex justify-center mt-4 md:mt-0">
        <Image
          src="/images/gitaima.png"
          alt="GitKraken AI demo"
          width={200}
          height={150}
          className="w-auto max-w-[120px] sm:max-w-[160px] md:max-w-[220px] lg:max-w-[250px] h-auto rounded-lg shadow-xl rotate-1 object-contain"
        />
        <div className="absolute bottom-2 sm:bottom-3 right-2 sm:right-3 w-2 h-2 bg-gray-700 rounded-full hidden sm:block" />
      </div>
    </section>
  );
}
