"use client";

import { useSidebar } from "@/contexts/sidebar-context";
import ConnectWalletButton from "@/components/common/connect-wallet-button";

export default function Header() {
  const { toggleSidebar, isOpen } = useSidebar();

  const handleToggle = () => {
    console.log("Hamburger clicked, current state:", isOpen);
    toggleSidebar();
  };

  return (
    <header className="flex-shrink-0 z-30 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-4">
      <div className="flex justify-between items-center gap-4">
        {/* Hamburger Menu Button (Mobile Only) */}
        <button
          onClick={handleToggle}
          className="lg:hidden text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Right Side Actions */}
        <div className="flex items-center gap-2 sm:gap-4 ml-auto">
          <ConnectWalletButton />
        </div>
      </div>
    </header>
  );
}
