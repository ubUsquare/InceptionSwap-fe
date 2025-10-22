"use client";

import { useState, useEffect, useRef } from "react";
import { useAccount } from "wagmi";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { X } from "lucide-react";
import { usePathname } from "next/navigation";
import { useToast } from "./toast-provider";

export default function WalletConnectPopup() {
  const { isConnected, address } = useAccount();
  const pathname = usePathname();
  const { showToast } = useToast();
  const [showPopup, setShowPopup] = useState(false);
  const [userClosedManually, setUserClosedManually] = useState(false);
  const previousConnectionStatus = useRef(isConnected);

  useEffect(() => {
    // Check if wallet just connected (changed from false to true)
    if (isConnected && !previousConnectionStatus.current) {
      // Show success toast
      showToast("Wallet connected successfully! 🎉", "success", 5000);
    }
    
    // Update previous status
    previousConnectionStatus.current = isConnected;
  }, [isConnected, showToast]);

  useEffect(() => {
    // On page change or component mount, check wallet status
    if (!isConnected) {
      // If wallet not connected and user hasn't closed manually, show popup
      if (!userClosedManually) {
        const timer = setTimeout(() => {
          setShowPopup(true);
        }, 1000);
        return () => clearTimeout(timer);
      }
    } else {
      // If wallet is connected, always hide popup and reset manual close flag
      setShowPopup(false);
      setUserClosedManually(false);
    }
  }, [isConnected, pathname, userClosedManually]);

  const handleClose = () => {
    setShowPopup(false);
    setUserClosedManually(true);
  };

  // Don't render if wallet is connected or popup is closed
  if (isConnected || !showPopup) {
    return null;
  }

  return (
    <>
      {/* Backdrop */}
      <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100]" onClick={handleClose} />
      
      {/* Popup */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[101] w-[90%] max-w-md">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-6 sm:p-8 relative">
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all"
            aria-label="Close popup"
          >
            <X size={20} className="text-gray-600 dark:text-gray-400" />
          </button>

          {/* Content */}
          <div className="text-center">
            {/* Icon */}
            <div className="mb-4 flex justify-center">
              <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                  />
                </svg>
              </div>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-2 text-gray-900 dark:text-white font-roboto">
              Connect Your Wallet
            </h2>

            {/* Description */}
            <p className="text-gray-600 dark:text-gray-400 mb-6 font-inter">
              Please connect your wallet to access all features of InceptionSwap. Trade, stake, and manage your assets securely.
            </p>

            {/* Connect Button */}
            <ConnectButton.Custom>
              {({ openConnectModal }) => (
                <button
                  onClick={() => {
                    openConnectModal();
                    handleClose();
                  }}
                  className="w-full text-white font-semibold py-4 rounded-xl transition-all text-base shadow-lg hover:shadow-xl font-roboto"
                  style={{
                    background: "linear-gradient(93.96deg, #9396ED 2.58%, #0DA1CA 99.26%)",
                  }}
                >
                  Connect Wallet
                </button>
              )}
            </ConnectButton.Custom>

            {/* Additional Info */}
            <p className="text-xs text-gray-500 dark:text-gray-500 mt-4 font-inter">
              By connecting your wallet, you agree to our Terms of Service
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
