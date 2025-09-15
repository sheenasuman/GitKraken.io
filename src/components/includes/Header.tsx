'use client';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import Featurecards from "../../components/includes/Featurecards"; 
export default function Header() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const handleMouseEnter = (menu: string) => setOpenMenu(menu);
  const handleMouseLeave = () => setOpenMenu(null);

  return (
    <header className="bg-#1C1C1C  text-white px-4 py-4 relative z-50 font-poppins">
      <div className="flex items-center flex-wrap justify-evenly ">        
        <div className="flex items-center space-x-4">
      <Link href="https://www.gitkraken.com" target="_blank" rel="noopener noreferrer">
        <Image 
          src="/images/gitkraken.svg" 
          alt="GitKraken Logo" 
          width={120} 
          height={40} 
          className="cursor-pointer" />
      </Link>
    </div>      
        <nav className="flex items-center space-x-5 text-md font-poppins">
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('devtools')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-[#9D4DFF] font-poppins">Dev Tools▾</button>
            {openMenu === 'devtools' && (
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-4 bg-[#1C1C1C] shadow-lg rounded-lg flex w-[1000px]">

                <Featurecards />               
                <div>
                  <h4 className="text-xm-bold text-gray-300 mb-5">PRODUCTS</h4>
                   <ul className="space-y-3 text-sm">
                      <li className="flex items-center gap-2 hover:text-purple-400">
                          <Image src="/images/desk.svg" alt="Desktop Icon" width={24} height={24} />
                           <Link href="#">GitKraken Desktop</Link>
                      </li>
                      <li className="flex items-center gap-2 hover:text-purple-400">
                            <Image src="/images/vs.svg" alt="VS Code Icon" width={24} height={24} />
                            <Link href="#">GitLens for VS Code</Link>
                      </li>
                      <li className="flex items-center gap-2 hover:text-purple-400">
                           <Image src="/images/terminal.svg" alt="CLI Icon" width={24} height={24} />
                           <Link href="#">GitKraken CLI</Link>
                     </li>
                     <li className="flex items-center gap-2 hover:text-purple-400">
                          <Image src="/images/webmob.svg" alt="Web Icon" width={24} height={24} />
                           <Link href="#">GitKraken.dev</Link>
                     </li>
                     <li className="flex items-center gap-2 hover:text-purple-400">
                           <Image src="/images/BE.svg" alt="Browser Icon" width={40} height={30} />,
                           <Link href="#">GitKraken Browser Extension</Link>
                      </li>
                  </ul>
                </div>              
                <div>
                  <h4 className="text-xm-bold text-gray-300 mb-5">FEATURES</h4>
                  <ul className=" text-sm mb-10">
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
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('planning')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-[#9D4DFF]">Planning Tools ▾</button>
            {openMenu === 'planning' && (
              <div className="absolute left-0 top-full mt-4 bg-[#1C1C1C] border-gray-700 rounded-md shadow-xl p-6 w-[500px] flex space-x-6">
                  <div className="w-1/2">
                  <h4 className="text-xm text-gray-300 uppercase mb-5">Products</h4>
                  <ul className="space-y-3 text-md">
                    <li className="flex items-center gap-2 hover:text-[#9D4DFF] transition-colors">
                    <Image src="/images/git.svg" alt="GitKraken" width={30} height={40} />
                      <Link href="#">Git Integration for Jira</Link>
                    </li>
                    <li className="flex items-center gap-2 hover:text-[#9D4DFF] transition-colors">
                    <Image src="/images/pricing.svg" alt="GitKraken" width={30} height={40} />
                      <Link href="#">Pricing <sup>↗</sup></Link>
                    </li>
                  </ul>
                </div>
                {/* Features */}
                <div className="w-1/2 border-l border-gray-700 pl-6">
                  <h4 className="text-xm text-gray-300 uppercase mb-2">Features</h4>
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
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('solutions')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-[#9D4DFF]">Solutions ▾</button>
            {openMenu === 'solutions' && (
              <div className="absolute left-0 top-full mt-4 bg-[#1C1C1C] border border-gray-700 rounded-md shadow-xl p-6 w-[600px] flex space-x-8">
                {/* Left Column */}
                <div className="w-1/2">
                  <ul className="space-y-3 text-md">
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Commit Graph</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Launchpad</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Workspaces</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Code Suggest</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Cloud Patches</Link></li>
                  </ul>
                </div>
                {/* Right Column */}
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
          <div
            className="relative"
            onMouseEnter={() => handleMouseEnter('resources')}
            onMouseLeave={handleMouseLeave}
          >
            <button className="hover:text-[#9D4DFF]">Git Resources ▾</button>
            {openMenu === 'resources' && (
              <div className="absolute left-0 top-full mt-4 bg-[#1C1C1C] border border-gray-700 rounded-md shadow-xl p-6 w-[600px] flex space-x-8">
                {/* Left Column */}
                <div className="w-1/2">
                  <ul className="space-y-3 text-md">
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Workshops</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Learn Git Library</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Git Blog</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">GitKon</Link></li>
                    <li className="hover:text-[#9D4DFF] transition-colors"><Link href="#">Refer and Earn 💰</Link></li>
                  </ul>
                  </div>
                <div className="w-1/2 border-l border-gray-700 pl-6">
                  <ul className="space-y-3 text-md">
                    <li><Link href="#">Sample Customers</Link></li>
                    <li><Link href="#">Customer Stories</Link></li>
                    <li><Link href="#">Developer Problems</Link></li>
                    <li><Link href="#">GitKraken Labs</Link></li>
                    <li><Link href="#">Help Center</Link></li>
                  </ul>
                </div>        
                {/* Right Column */}
                <div className="w-1/2 border-l border-gray-700 pl-6">
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
          <Link href="/Sign In"className="hover:text-purple-400">Sign In</Link>
          <button className="text-lg">🔍</button>
        </nav>
      </div>
    </header>
  );
}