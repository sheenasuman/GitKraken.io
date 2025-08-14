"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Monitor, Code, Terminal, Globe, Puzzle } from "lucide-react";

interface Tool {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const tools: Tool[] = [
  {
    name: "GitKrakenDesktop",
    icon: <Image src="/images/desk.svg" alt="Desktop Icon" width={30} height={30} />,
    link: "/gitKrakenDesktop"
  },
  {
    name: "GitlensforVScode",
    icon: <Image src="/images/vs.svg" alt="VS Code Icon" width={30} height={30} />,
    link: "/gitlensforVScode"
  },
  {
    name: "GitKrakenCLI",
    icon: <Image src="/images/terminal.svg" alt="CLI Icon" width={30} height={30} />,
    link: "/gitKrakenCLI"
  },
  {
    name: "GitKrakendev",
    icon: <Image src="/images/webmob.svg" alt="Browser Icon" width={30} height={30} />,
    link: "/gitKrakendev"
  }
,
 {
    name: "GitKrakenBrowserExtension",
    icon: <Image src="/images/BE.svg" alt="Browser Icon" width={40} height={30} />,
    link: "/gitKrakenBrowserExtension"
  }
];

export default function Tabs() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <section className="sticky top-0 z-50 bg-black text-white px-4 md:px-6 py-4 flex flex-wrap items-center justify-between md:justify-evenly gap-4 shadow-md w-full">

      {/* Left Buttons */}
      <div className="flex flex-wrap items-center gap-4">
        <button className="bg-[#2A2A2A] px-4 py-2 rounded-md font-semibold text-sm hover:bg-[#3a3a3a] transition">
          Visualize
        </button>
        <span className="text-gray-300 hover:text-white cursor-pointer text-sm">Focus</span>
        <span className="text-gray-300 hover:text-white cursor-pointer text-sm">Collaborate</span>
        <span className="text-gray-300 hover:text-white cursor-pointer text-sm">Connect</span>
      </div>

      {/* Dropdown */}
      <div className="relative">
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 border border-purple-600 rounded-md px-4 py-2 cursor-pointer hover:shadow-md transition bg-[#1E1E1E]"
        >
          <Image
            src="/images/giticon.svg"
            alt="icon"
            width={24}
            height={24}
            className="bg-white rounded-full"
          />
          <span className="text-sm font-semibold text-white">
            Try any of our tools for free
          </span>
          <ChevronDown className="w-4 h-4 text-white" />
        </button>

        {isDropdownOpen && (
          <div className="absolute right-0 mt-2 bg-[#0F0F0F] border border-gray-700 rounded-md shadow-lg w-72 z-50">
            <ul className="py-2">
              {tools.map((tool, index) => (
                <li key={index}>
                  <Link href={tool.link}>
                    <div className="flex items-center gap-3 px-4 py-2 hover:bg-[#1A1A1A] cursor-pointer text-white">
                      <span className="text-purple-400">{tool.icon}</span>
                      <span className="text-sm">{tool.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
