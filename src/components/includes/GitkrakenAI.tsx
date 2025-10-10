'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function GitKrakenAISection() {
  return (
    <section className="bg-[#1C1C1C] text-white rounded-xl px-6 sm:px-8 md:px-10 py-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 border border-gray-800 shadow-md">
      
      {/* LEFT CONTENT */}
      <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
        <h2 className="text-3xl md:text-4xl font-semibold leading-tight flex justify-center md:justify-start items-center gap-2">
          <span className="text-blue-400">✨</span>
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
            GitKraken
          </span>
          <span>AI</span>
        </h2>

        <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
          GitKraken AI works for you to seamlessly orchestrate your workflows.
          Automagically generate commit messages, stash messages, changelogs,
          and pull requests.
        </p>

        <Link
          href="/gitKrakenAI"
          className="inline-block px-6 py-2 border border-purple-500 rounded-md text-white hover:bg-purple-600 transition text-sm sm:text-base"
        >
          Try GitKraken AI
        </Link>
      </div>

      {/* RIGHT IMAGE */}
      <div className="relative w-full sm:w-2/3 md:w-1/2 flex justify-center">
        <Image
          src="/images/gitaima.png"
          alt="GitKraken AI demo"
          width={300}
          height={220}
          className="w-auto max-w-[280px] sm:max-w-[320px] md:max-w-[350px] h-auto rounded-lg shadow-xl rotate-1 object-contain"
        />
        <div className="absolute bottom-6 right-6 w-3 h-3 bg-gray-700 rounded-full hidden sm:block" />
      </div>
    </section>
  );
}
