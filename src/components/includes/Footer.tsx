"use client";
import Link from "next/link";
import Image from "next/image";

import { FaXTwitter, FaYoutube, FaLinkedin } from "react-icons/fa6";
import { SiSlack } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="bg-#1D1D1D text-gray-300 px-6 py-12">
      <div className="mt-12 border-t border-gray-700">
       {/* Centered Logo */}
           <div className="flex justify-center mt-16 mb-8">
                  <Image src="/images/Union.svg" alt="Logo" width={30} height={30} />
                </div>
      {/* Top Section */}
      <div className="max-w-3xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-sm text-white mt-12">
        {/* Products */}
        <div>
          <h3 className="font-semibold text-white text-xs uppercase mb-3 border-b border-gray-700 pb-1">
            Products
          </h3>
          <ul className="space-y-2">
            <li className="mb-5 text-xs white"><Link href="#" className="text-xs mb-20">Pricing</Link></li>
            <li className="mb-5 text-xs white"><Link href="#" className="text-xs">Help Center ↗</Link></li>
            <li className="mb-5 text-xs white"><Link href="#" className="text-xs">GitKraken AI</Link></li>
            <li className="text-xs white bold mt-2">GitKraken Desktop</li>
            <li className="text-xs px-5"><Link href="#" className="text-xs">Login ↗</Link></li>
            <li className="text-xs px-5"><Link href="#" className="text-xs">Documentation ↗</Link></li>
            <li className="text-xs px-5"><Link href="#" className="text-xs">Release Notes ↗</Link></li>
            <li className="text-xs px-5"><Link href="#" className="text-xs">Roadmap</Link></li>
            <li className="text-xs px-5"><Link href="#" className="text-xs">Feature Upvote ↗</Link></li>
            <li className="text-xs px-5"><Link href="#" className="text-xs">Cheat Sheet</Link></li>
            <li className="font-semibold mt-2">GitLens</li>
            <li className="text-xs px-5"><Link href="#" className="text-xs">Documentation ↗</Link></li>
            <li className="font-semibold mt-2 text-xs">GitKraken CLI</li>
            <li className="font-semibold mt-2 text-xs">Git Integration for Jira</li>
            <li className="text-xs px-5"><Link href="#" className="text-xs">Cloud Docs ↗</Link></li>
            <li className="text-xs px-5"><Link href="#" className="text-xs">Data Center/Server Docs ↗</Link></li>
            <li className="text-xs px-5"><Link href="#" className="text-xs">Security & Trust ↗</Link></li>
          </ul>
        </div>

        {/* Community */}
        <div>
          <h3 className="font-semibold text-xs uppercase mb-3 border-b border-gray-700 pb-1">
            Community
          </h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-xs">Referral Program</Link></li>
            <li><Link href="#" className="text-xs">Learn Git Library</Link></li>
            <li><Link href="#" className="text-xs">Git Commands Cheat Sheet</Link></li>
            <li><Link href="#" className="text-xs">Git Blog</Link></li>
            <li><Link href="#" className="text-xs">GitKraken Labs</Link></li>
            <li><Link href="#" className="text-xs">Git Conference</Link></li>
            <li><Link href="#" className="text-xs">Ambassador Program</Link></li>
            <li><Link href="#" className="text-xs">Newsletter</Link></li>
            <li><Link href="#" className="text-xs">Slack Community ↗</Link></li>
            <li><Link href="#" className="text-xs">GitKraken for Students</Link></li>
            <li><Link href="#" className="text-xs">Store</Link></li>
            <li><Link href="#" className="text-xs">Keif Gallery</Link></li>
            
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold text-xs text-white-500 uppercase mb-3 border-b border-gray-700 pb-1">
            Company
          </h3>
          <ul className="space-y-2">
            <li><Link href="#" className="text-xs">Contact Us</Link></li>
            <li><Link href="#" className="text-xs">About Us</Link></li>
            <li><Link href="#" className="text-xs">Careers</Link></li>
            <li><Link href="#" className="text-xs">Customers</Link></li>
            <li><Link href="#" className="text-xs">Media</Link></li>
            <li><Link href="#" className="text-xs">News</Link></li>
            <li><Link href="#" className="text-xs">Awards</Link></li>
            <li><Link href="#" className="text-xs">Events</Link></li>
            <li><Link href="#" className="text-xs">Press Releases</Link></li>
            <li><Link href="#" className="text-xs">Logos</Link></li>
            <li><Link href="#" className="text-xs">Privacy</Link></li>
            <li><Link href="#" className="text-xs">Trust Center ↗</Link></li>
          </ul>
        </div>
      </div>

    {/* Divider */}
<div className="border-t border-gray-700 mt-12 pt-6">
  <div className="flex flex-col items-center space-y-4">
    {/* Social Icons */}
    <div className="flex gap-6 text-lg">
      <Link href="https://x.com" className="text-xl"><FaXTwitter /></Link>
      <Link href="#" className="text-xl"><SiSlack /></Link>
      <Link href="https://www.youtube.com" className="text-xl"><FaYoutube /></Link>
      <Link href="https://in.linkedin.com" className="text-xl"><FaLinkedin /></Link>
    </div>

    {/* Copyright */}
    <p className="text-xs text-white-600 text-center">
      © 2025 Axosoft, LLC DBA GitKraken
    </p>
  </div>
</div>
</div>
    </footer>
  );
}
