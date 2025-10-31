"use client";

import AppLayout from "@/components/common/app-layout";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function VaultPage() {
  const [activeTab, setActiveTab] = useState<"prime" | "incep">("prime");
  const [stakedOnly, setStakedOnly] = useState(false);
  const [showInactive, setShowInactive] = useState(false);
  const [platform, setPlatform] = useState("All");
  const [sortBy, setSortBy] = useState("TVL");
  const [searchQuery, setSearchQuery] = useState("");
  const [showPlatformDropdown, setShowPlatformDropdown] = useState(false);
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const platformOptions = ["All", "Ethereum", "Polygon", "BSC", "Arbitrum"];
  const sortOptions = ["TVL", "Latest", "Earnings", "APY", "Multipliers"];

  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">
            Inception Mines (Auto-Pilot Yield)
          </h1>
          <p className="text-[#9396ED] mb-2">
            Implant tokens for enhanced rewards and native INCEP yields.
          </p>
          <p className="text-[#9396ED] font-semibold">TVL: $0</p>
        </div>

        {/* Info Banner */}
        <div className="max-w-4xl mx-auto mb-8">
          <div
            className="rounded-2xl p-6 text-center"
            style={{
              background:
                mounted && theme === "dark"
                  ? "rgba(181, 183, 238, 0.1)"
                  : "rgba(147, 150, 237, 0.1)",
              border:
                mounted && theme === "dark"
                  ? "1px solid rgba(181, 183, 238, 0.2)"
                  : "1px solid rgba(147, 150, 237, 0.2)",
            }}
          >
            <p
              className="text-sm sm:text-base mb-2"
              style={{ color: "#9396ED" }}
            >
              INCEP-Stable is 1:1 Backed by Inceptionswap
            </p>
            <p
              className="text-sm sm:text-base"
              style={{ color: "#9396ED" }}
            >
              Deposit your INCEP-Stable and activate it within the INCEP-Stable Mines.
            </p>
          </div>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div
            className="inline-flex p-1 rounded-full"
            style={{
              border:
                mounted && theme === "dark"
                  ? "0.8px solid rgba(181, 183, 238, 0.3)"
                  : "0.8px solid #0000001A",
            }}
          >
            <button
              onClick={() => setActiveTab("prime")}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === "prime"
                  ? "text-white shadow-md"
                  : "bg-transparent text-[#9396ED] hover:text-[#7B7EDB]"
              }`}
              style={
                activeTab === "prime"
                  ? {
                      background:
                        "linear-gradient(92.59deg, #9396ED 12.25%, #0DA1CA 94.79%)",
                    }
                  : {}
              }
            >
              Prime Mines
            </button>
            <button
              onClick={() => setActiveTab("incep")}
              className={`px-8 py-3 rounded-full font-semibold transition-all ${
                activeTab === "incep"
                  ? "text-white shadow-md"
                  : "bg-transparent text-[#9396ED] hover:text-[#7B7EDB]"
              }`}
              style={
                activeTab === "incep"
                  ? {
                      background:
                        "linear-gradient(92.59deg, #9396ED 12.25%, #0DA1CA 94.79%)",
                    }
                  : {}
              }
            >
              INCEP-Stable Mines
            </button>
          </div>
        </div>

        {/* Filters Section */}
        <div className="mb-8">
          <div className="flex flex-wrap items-end justify-evenly gap-4">
            {/* Platform Dropdown */}
            <div className="relative flex-1 max-w-[200px]">
              <label className="block text-sm font-medium text-[#9396ED] mb-2">
                Platform
              </label>
              <div className="relative">
                <button
                  onClick={() => {
                    setShowPlatformDropdown(!showPlatformDropdown);
                    setShowSortDropdown(false);
                  }}
                  className="w-full px-4 py-3 rounded-xl font-semibold text-[#9396ED] flex items-center justify-between transition-all hover:border-[#9396ED]"
                  style={{
                    background:
                      mounted && theme === "dark"
                        ? "rgba(181, 183, 238, 0.05)"
                        : "rgba(147, 150, 237, 0.05)",
                    border:
                      mounted && theme === "dark"
                        ? "1px solid rgba(181, 183, 238, 0.2)"
                        : "1px solid rgba(147, 150, 237, 0.2)",
                  }}
                >
                  {platform}
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      showPlatformDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {showPlatformDropdown && (
                  <div
                    className="absolute z-10 w-full mt-2 rounded-xl shadow-lg overflow-hidden"
                    style={{
                      background:
                        mounted && theme === "dark"
                          ? "rgba(30, 30, 50, 0.98)"
                          : "rgba(255, 255, 255, 0.98)",
                      border:
                        mounted && theme === "dark"
                          ? "1px solid rgba(181, 183, 238, 0.2)"
                          : "1px solid rgba(147, 150, 237, 0.2)",
                    }}
                  >
                    {platformOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setPlatform(option);
                          setShowPlatformDropdown(false);
                        }}
                        className="w-full px-4 py-3 text-left text-[#9396ED] hover:bg-[#9396ED] hover:bg-opacity-10 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Staked Only Toggle */}
            <div className="flex-shrink-0">
              <label className="block text-sm font-medium text-[#9396ED] mb-2">
                Staked Only
              </label>
              <label
                className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all">
                <div className="relative inline-block w-12 h-6">
                  <input
                    type="checkbox"
                    checked={stakedOnly}
                    onChange={(e) => setStakedOnly(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-gradient-to-r from-blue-400 to-blue-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:shadow-md"></div>
                </div>
              </label>
            </div>

            {/* Show Inactive Toggle */}
            <div className="flex-shrink-0">
              <label className="block text-sm font-medium text-[#9396ED] mb-2">
                Show Inactive
              </label>
              <label
                className="flex items-center gap-3 px-4 py-3 rounded-xl cursor-pointer transition-all">
                <div className="relative inline-block w-12 h-6">
                  <input
                    type="checkbox"
                    checked={showInactive}
                    onChange={(e) => setShowInactive(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-12 h-6 bg-gradient-to-r from-blue-400 to-blue-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-6 peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:shadow-md"></div>
                </div>
              </label>
            </div>

            {/* Sort By Dropdown */}
            <div className="relative flex-1 max-w-[200px]">
              <label className="block text-sm font-medium text-[#9396ED] mb-2">
                Sort By
              </label>
              <div className="relative">
                <button
                  onClick={() => {
                    setShowSortDropdown(!showSortDropdown);
                    setShowPlatformDropdown(false);
                  }}
                  className="w-full px-4 py-3 rounded-xl font-semibold text-[#9396ED] flex items-center justify-between transition-all hover:border-[#9396ED]"
                  style={{
                    background:
                      mounted && theme === "dark"
                        ? "rgba(181, 183, 238, 0.05)"
                        : "rgba(147, 150, 237, 0.05)",
                    border:
                      mounted && theme === "dark"
                        ? "1px solid rgba(181, 183, 238, 0.2)"
                        : "1px solid rgba(147, 150, 237, 0.2)",
                  }}
                >
                  {sortBy}
                  <svg
                    className={`w-5 h-5 transition-transform ${
                      showSortDropdown ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {showSortDropdown && (
                  <div
                    className="absolute z-10 w-full mt-2 rounded-xl shadow-lg overflow-hidden"
                    style={{
                      background:
                        mounted && theme === "dark"
                          ? "rgba(30, 30, 50, 0.98)"
                          : "rgba(255, 255, 255, 0.98)",
                      border:
                        mounted && theme === "dark"
                          ? "1px solid rgba(181, 183, 238, 0.2)"
                          : "1px solid rgba(147, 150, 237, 0.2)",
                    }}
                  >
                    {sortOptions.map((option) => (
                      <button
                        key={option}
                        onClick={() => {
                          setSortBy(option);
                          setShowSortDropdown(false);
                        }}
                        className="w-full px-4 py-3 text-left text-[#9396ED] hover:bg-[#9396ED] hover:bg-opacity-10 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Search Input */}
            <div className="flex-1 max-w-[200px]">
              <label className="block text-sm font-medium text-[#9396ED] mb-2">
                Search
              </label>
              <input
                type="text"
                placeholder="Search Mine"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 rounded-xl font-medium text-[#9396ED] placeholder-[#9396ED] placeholder-opacity-50 focus:outline-none focus:border-[#9396ED] transition-all"
                style={{
                  background:
                    mounted && theme === "dark"
                      ? "rgba(181, 183, 238, 0.05)"
                      : "rgba(147, 150, 237, 0.05)",
                  border:
                    mounted && theme === "dark"
                      ? "1px solid rgba(181, 183, 238, 0.2)"
                      : "1px solid rgba(147, 150, 237, 0.2)",
                }}
              />
            </div>
          </div>

        
        </div>

        {/* Content Area - Placeholder for mine cards */}
        <div className="max-w-7xl mx-auto">
          <div className="text-center py-12">
            <p className="text-[#9396ED] text-lg">
              {activeTab === "prime" ? "Prime Mines" : "INCEP-Stable Mines"} will appear here
            </p>
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
