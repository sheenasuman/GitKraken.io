"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

interface Tool {
  name: string;
  icon: React.ReactNode;
  link: string;
}

const tools: Tool[] = [
  {
    name: "GitKrakenDesktop",
    icon: <Image src="/images/desk.svg" alt="Desktop Icon" width={30} height={30} />,
    link: "/gitKrakenDesktop",
  },
  {
    name: "GitlensforVScode",
    icon: <Image src="/images/vs.svg" alt="VS Code Icon" width={30} height={30} />,
    link: "/gitlensforVScode",
  },
  {
    name: "GitKrakenCLI",
    icon: <Image src="/images/terminal.svg" alt="CLI Icon" width={30} height={30} />,
    link: "/gitKrakenCLI",
  },
  {
    name: "GitKrakendev",
    icon: <Image src="/images/webmob.svg" alt="Browser Icon" width={30} height={30} />,
    link: "/gitKrakendev",
  },
  {
    name: "GitKrakenBrowserExtension",
    icon: <Image src="/images/BE.svg" alt="Browser Icon" width={40} height={30} />,
    link: "/gitKrakenBrowserExtension",
  },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState<string>("visualise");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const sections = ["visualise", "focus", "collaborate", "connect"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        root: null,
        rootMargin: "-30% 0px -50% 0px",
        threshold: 0,
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#1C1C1C] text-white px-6 py-4 flex flex-wrap items-center justify-evenly shadow-md">
      {/* Left nav items */}
      <div className="flex flex-wrap gap-6">
        {["visualise", "focus", "collaborate", "connect"].map((id) => (
          <a
            key={id}
            href={`#${id}`}
            className={`transition ${
              activeSection === id
                ? "font-bold text-white"
                : "font-normal text-gray-400"
            }`}
          >
            {id.charAt(0).toUpperCase() + id.slice(1)}
          </a>
        ))}
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
    </nav>
  );
}
