"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import { ChevronDown } from 'lucide-react';  

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

export default function ToolsDropdown() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  
    return (
      <div className="relative inline-block">
        {/* Button */}
        <button
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center gap-2 border border-green-400 rounded-md px-4 py-2 cursor-pointer hover:shadow-md transition bg-[#1E1E1E]"
        >
          <Image
            src="/images/giticon.svg"
            alt="icon"
            width={24}
            height={24}
            className="bg-green-400 rounded-full"
          />
          <span className="text-sm font-semibold text-green-400">
            Try any of our tools for free
          </span>
          <ChevronDown className="w-4 h-4 text-white" />
        </button>
  
        {/* Dropdown */}
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
    );
  }