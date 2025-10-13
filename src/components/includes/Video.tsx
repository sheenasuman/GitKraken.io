// 'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

type Tab = 'desktop' | 'vscode' | 'terminal' | 'webmobile';

const tabs: { id: Tab; title: string; subtitle: string; icon: string }[] = [
  { id: 'desktop', title: 'Desktop', subtitle: 'GitKraken', icon: '/images/desk.svg' },
  { id: 'vscode', title: 'VS Code', subtitle: 'GitLens', icon: '/images/vs.svg' },
  { id: 'terminal', title: 'Terminal', subtitle: 'GitKraken CLI', icon: '/images/terminal.svg' },
  { id: 'webmobile', title: 'Web/Mobile', subtitle: 'GitKraken.dev', icon: '/images/webmob.svg' },
];

const tabImages: Record<Tab, string> = {
  desktop: '/images/desktop1.png',
  vscode: '/images/vscode1.png',
  terminal: '/images/terminal1.png',
  webmobile: '/images/webmobile1.png',
};

const tabVideos: Record<Tab, string> = {
  desktop: 'https://www.youtube.com/embed/3XjAQCd4C54?autoplay=1',
  vscode: 'https://www.youtube.com/embed/UjtzT7kn4tg?autoplay=1',
  terminal: 'https://www.youtube.com/embed/sVlyiNi_SIU?autoplay=1',
  webmobile: 'https://www.youtube.com/embed/Po8CW3OQR8k?autoplay=1',
};

export default function GKPlatformTabs() {
  const [activeTab, setActiveTab] = useState<Tab>('desktop');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  const openModal = (tab: Tab) => {
    setVideoSrc(tabVideos[tab]);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setVideoSrc(null), 200);
  };

  // Close with ESC key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent scroll when modal open
  useEffect(() => {
    document.body.style.overflow = isModalOpen ? 'hidden' : '';
  }, [isModalOpen]);

  return (
   <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 md:px-8 text-white">
  {/* Heading */}
  <h2 className="text-md sm:text-l md:text-xl font-semibold text-gray-300 text-center  px-2">
    Our DevEx platform meets you where you work — across the desktop, IDE, & command line
  </h2>

  {/* Tabs */}
  <div
    className="mt-8 flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 
               bg-gradient-to-r from-darkpurple-500 to-darkpurple-100 rounded-2xl shadow-lg "
  >
    {tabs.map((tab) => (
      <button
        key={tab.id}
        onMouseEnter={() => setActiveTab(tab.id)}
        className={`flex items-center gap-3 px-4 sm:px-5 md:px-6 py-3 sm:py-4 
                    rounded-lg transition duration-300 text-left w-full sm:w-auto justify-start sm:justify-center
                    ${
                      activeTab === tab.id
                        ? 'border-b-4 border-purple-400 text-white bg-black/20'
                        : 'text-gray-300 hover:text-white hover:bg-black/10'
                    }`}
      >
        <Image
          src={tab.icon}
          alt={tab.title}
          width={32}
          height={32}
          className="w-6 h-6 sm:w-8 sm:h-8 object-contain"
        />
        <div className="flex flex-col items-start sm:items-center sm:text-center">
          <span className="text-sm sm:text-base font-semibold">{tab.title}</span>
          <span className="text-xs sm:text-sm text-gray-300">{tab.subtitle}</span>
        </div>
      </button>
    ))}



      {/* Image Preview */}
      <div className="flex justify-center">
        <button
          onClick={() => openModal(activeTab)}
          className="flex justify-between bg-gradient-to-r from-purple to blue rounded-xl shadow-md"
        >
          <Image
            src={tabImages[activeTab]}
            alt={activeTab}
            width={800}
            height={700}
            className="rounded-lg shadow-xl object-cover mb-5"
          />
        </button>
      </div>

      {/* Fullscreen Modal */}
      {isModalOpen && (
        <div
          onClick={(e) => e.target === e.currentTarget && closeModal()}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        >
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-5 right-5 p-3 bg-white/10 hover:bg-white/20 rounded-full"
            aria-label="Close video"
          >
            <svg
              className="w-6 h-6 text-white"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Fullscreen Video */}
          {videoSrc && (
            <iframe
              key={videoSrc}
              src={videoSrc}
              title="Tab video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          )}
        </div>
      )}
    </div>
    </div>
  );
}
