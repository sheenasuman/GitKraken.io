"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

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

  // Optional: highlight active section while scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["visualise", "focus", "collaborate", "connect"];
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 150 && rect.bottom >= 150;
      });
      setActiveSection(current || "");
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="sticky top-0 z-50 bg-[#1C1C1C] text-white shadow-md w-full">
      <div className="max-w-[1280px] mx-auto px-4 py-4 flex justify-evenly items-center">
        
        {/* Desktop Nav Links */}
        <div className="hidden md:flex gap-6">
          {["visualise", "focus", "collaborate", "connect"].map((id) => (
            <a
              key={id}
              href={`#${id}`}
              className={`transition rounded-md ${
                activeSection === id
                  ? "font-bold text-white bg-[#2A2A2A] px-4 py-2"
                  : "font-normal text-gray-400 hover:text-white"
              }`}
            >
              {id.charAt(0).toUpperCase() + id.slice(1)}
            </a>
          ))}
        </div>

        {/* Dropdown */}
        <div className="relative hidden md:block">
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="flex items-center gap-2 border border-purple-600 rounded-md px-4 py-2 hover:shadow-md transition bg-[#1E1E1E]"
          >
            <Image
              src="/images/giticon.svg"
              alt="icon"
              width={24}
              height={24}
              className="bg-white rounded-full"
            />
            <span className="text-sm font-semibold">Try any of our tools for free</span>
            <ChevronDown className="w-4 h-4" />
          </button>

          {isDropdownOpen && (
            <div className="absolute right-0 mt-2 bg-[#0F0F0F] border border-gray-700 rounded-md shadow-lg w-72 z-50">
              <ul className="py-2">
                {tools.map((tool, index) => (
                  <li key={index}>
                    <Link href={tool.link}>
                      <div className="flex items-center gap-3 px-4 py-2 hover:bg-[#1A1A1A] cursor-pointer">
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

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden flex items-center"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#1C1C1C] border-t border-gray-700 px-4 pb-4">
          <div className="flex flex-col gap-4 mt-4">
            {["visualise", "focus", "collaborate", "connect"].map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`transition ${
                  activeSection === id
                    ? "font-bold text-white bg-[#2A2A2A] px-3 py-2 rounded-md"
                    : "font-normal text-gray-400 hover:text-white"
                }`}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            ))}

            {/* Mobile Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full border border-purple-600 rounded-md px-4 py-2 bg-[#1E1E1E]"
              >
                <span className="text-sm font-semibold">
                  Try any of our tools for free
                </span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isDropdownOpen && (
                <div className="mt-2 bg-[#0F0F0F] border border-gray-700 rounded-md shadow-lg w-full">
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
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
