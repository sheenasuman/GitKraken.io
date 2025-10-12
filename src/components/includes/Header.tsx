'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Featurecards from "../../components/includes/Featurecards";

export default function Header(): JSX.Element {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const rootRef = useRef<HTMLElement | null>(null);

  const toggleMenu = (menu: string) => setOpenMenu(prev => (prev === menu ? null : menu));

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent | TouchEvent) => {
      if (!rootRef.current) return;
      const target = e.target as Node | null;
      if (target && rootRef.current.contains(target)) return;
      setOpenMenu(null);
    };

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpenMenu(null);
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('touchstart', handleClickOutside);
    document.addEventListener('keydown', handleKey);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleKey);
    };
  }, []);  

  return (
    <header ref={rootRef} className="bg-[#1C1C1C] text-white px-4 py-4 relative z-50 font-poppins">
      <div className="flex items-center justify-between max-w-[1200px] mx-auto flex-wrap">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <Link href="https://www.gitkraken.com" target="_blank" rel="noopener noreferrer" aria-label="GitKraken website">
            <Image
              src="/images/gitkraken.svg"
              alt="GitKraken Logo"
              width={120}
              height={40}
              className="cursor-pointer"
            />
          </Link>
        </div>
        {/* Mobile Menu Button */}
        <button
             className="md:hidden text-2xl focus:outline-none"
              onClick={() => setOpenMenu(openMenu === 'mobile' ? null : 'mobile')}
                aria-label="Toggle Menu"
              >  ☰
        </button>

       {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-md" aria-label="Main navigation">
          {/* Dev Tools Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleMenu('devtools')}
              className="hover:text-purple-400 flex items-center gap-1"
            >
              Dev Tools ▾
            </button>

            {openMenu === 'devtools' && (
              <div
                id="menu-devtools"
                role="menu"
                className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-[#1C1C1C] shadow-lg rounded-lg flex flex-col md:flex-row w-full md:w-[1000px] p-4 md:p-6 z-50"
              >
                <Featurecards />
                <div className="space-y-3">
                  <h4 className="text-sm font-bold text-gray-300 mb-2 uppercase">Products</h4>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center gap-2 hover:text-purple-400">
                      <Image src="/images/desk.svg" alt="Desktop Icon" width={24} height={24} />
                      <Link href="/gitKrakenDesktop">GitKraken Desktop</Link>
                    </li>
                    <li className="flex items-center gap-2 hover:text-purple-400">
                      <Image src="/images/vs.svg" alt="VS Code Icon" width={24} height={24} />
                      <Link href="/gitlensforVScode">GitLens for VS Code</Link>
                    </li>
                    <li className="flex items-center gap-2 hover:text-purple-400">
                      <Image src="/images/terminal.svg" alt="CLI Icon" width={24} height={24} />
                      <Link href="/gitKrakenCLI">GitKraken CLI</Link>
                    </li>
                    <li className="flex items-center gap-2 hover:text-purple-400">
                      <Image src="/images/webmob.svg" alt="Web Icon" width={24} height={24} />
                      <Link href="/gitKrakendev">GitKraken.dev</Link>
                    </li>
                    <li className="flex items-center gap-2 hover:text-purple-400">
                      <Image src="/images/BE.svg" alt="Browser Icon" width={40} height={30} />
                      <Link href="/gitKrakenBrowserExtension">GitKraken Browser Extension</Link>
                    </li>
                  </ul>
                </div>

                <div className="mt-6 md:mt-0">
                  <h4 className="text-sm font-bold text-gray-300 mb-2 uppercase">Features</h4>
                  <ul className="text-sm mb-2 space-y-2">
                    <li><Link href="#">Git Simplified</Link></li>
                    <li><Link href="#">Individual Productivity</Link></li>
                    <li><Link href="#">Team Collaboration</Link></li>
                    <li><Link href="#">PR & Code Review</Link></li>
                    <li><Link href="#">Security & Admin</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Planning Tools Dropdown */}
          <div className="relative">
            <button
              type="button"
              onClick={() => toggleMenu('planning')}
              className="hover:text-[#9D4DFF]"
            >
              Planning Tools ▾
            </button>

            {openMenu === 'planning' && (
              <div
                id="menu-planning"
                role="menu"
                className="absolute left-0 top-full mt-4 bg-[#1C1C1C] border border-gray-700 rounded-md shadow-xl p-6 w-full md:w-[500px] flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 z-50"
              >
                <div className="w-full md:w-1/2">
                  <h4 className="text-sm text-gray-300 uppercase mb-5">Products</h4>
                  <ul className="space-y-3 text-md">
                    <li className="flex items-center gap-2 hover:text-[#9D4DFF] transition-colors">
                      <Image src="/images/git.svg" alt="Git Integration" width={30} height={40} />
                      <Link href="#">Git Integration for Jira</Link>
                    </li>
                    <li className="flex items-center gap-2 hover:text-[#9D4DFF] transition-colors">
                      <Image src="/images/pricing.svg" alt="Pricing" width={30} height={40} />
                      <Link href="#">Pricing <sup aria-hidden>↗</sup></Link>
                    </li>
                  </ul>
                </div>

                <div className="w-full md:w-1/2 md:border-l border-gray-700 md:pl-6">
                  <h4 className="text-sm text-gray-300 uppercase mb-2">Features</h4>
                  <ul className="space-y-3 text-md">
                    <li className="hover:text-[#9D4DFF]"><Link href="#">Sprint Planning & Execution</Link></li>
                    <li className="hover:text-[#9D4DFF]"><Link href="#">Individual Productivity</Link></li>
                    <li className="hover:text-[#9D4DFF]"><Link href="#">Dev Visibility</Link></li>
                    <li className="hover:text-[#9D4DFF]"><Link href="#">Security & Admin</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>
         

          {/* Solutions Dropdown */}
          <div className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={openMenu === 'solutions'}
              aria-controls="menu-solutions"
              onClick={() => toggleMenu('solutions')}
              className="hover:text-[#9D4DFF]"
            >
              Solutions ▾
            </button>

            {openMenu === 'solutions' && (
              <div id="menu-solutions" role="menu" className="absolute left-0 top-full mt-4 bg-[#1C1C1C] border border-gray-700 rounded-md shadow-xl p-6 w-[600px] flex space-x-8">
                <div className="w-1/2">
                  <ul className="space-y-3 text-md">
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Commit Graph</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Launchpad</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Workspaces</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Code Suggest</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Cloud Patches</Link></li>
                  </ul>
                </div>

                <div className="w-1/2 border-l border-gray-700 pl-6">
                  <ul className="space-y-3 text-md">
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">✨ GitKraken AI</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Insights</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Automations</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Codemaps</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Security Controls</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Git Resources Dropdown */}
          <div className="relative">
            <button
              type="button"
              aria-haspopup="true"
              aria-expanded={openMenu === 'resources'}
              aria-controls="menu-resources"
              onClick={() => toggleMenu('resources')}
              className="hover:text-[#9D4DFF]"
            >
              Git Resources ▾
            </button>

            {openMenu === 'resources' && (
              <div id="menu-resources" role="menu" className="absolute left-0 top-full mt-4 bg-[#1C1C1C] border border-gray-700 rounded-md shadow-xl p-6 w-[700px] flex space-x-8">
                <div className="w-1/3">
                  <ul className="space-y-3 text-md">
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Workshops</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Learn Git Library</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Git Blog</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">GitKon</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Refer and Earn 💰</Link></li>
                  </ul>
                </div>

                <div className="w-1/3 border-l border-gray-700 pl-6">
                  <ul className="space-y-3 text-md">
                    <li><Link href="#">Sample Customers</Link></li>
                    <li><Link href="#">Customer Stories</Link></li>
                    <li><Link href="#">Developer Problems</Link></li>
                    <li><Link href="#">GitKraken Labs</Link></li>
                    <li><Link href="#">Help Center</Link></li>
                  </ul>
                </div>

                <div className="w-1/3 border-l border-gray-700 pl-6">
                  <ul className="space-y-3 text-md">
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Sample Customers</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Customer Stories</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Developer Problems</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">GitKraken Labs</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Help Center</Link></li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          <Link href="/pricing" className="hover:text-purple-400">Pricing</Link>
          <Link href="/sign-in" className="hover:text-purple-400">Sign In</Link>
          <button type="button" className="text-lg" aria-label="Search">🔍</button>
          {/* Desktop Navigation */}

        </nav>
          {/* Mobile Navigation */}
        {openMenu === 'mobile' && (
          <nav
            className="flex flex-col space-y-4 mt-4 bg-[#1C1C1C] text-center py-6 rounded-lg w-full md:hidden"
            aria-label="Mobile navigation"
          >
            <Link href="/gitKrakenDesktop" className="hover:text-purple-400">GitKraken Desktop</Link>
            <Link href="/gitlensforVScode" className="hover:text-purple-400">GitLens for VS Code</Link>
            <Link href="/gitKrakenCLI" className="hover:text-purple-400">GitKraken CLI</Link>
            <Link href="/gitKrakendev" className="hover:text-purple-400">GitKraken.dev</Link>
            <Link href="/pricing" className="hover:text-purple-400">Pricing</Link>
            <Link href="/sign-in" className="hover:text-purple-400">Sign In</Link>
          </nav>
             )}
      </div>
    </header>
  );
}
