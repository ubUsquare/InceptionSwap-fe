"use client";

import AppLayout from "@/components/common/app-layout";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function LayeredMiningPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedLayer, setSelectedLayer] = useState("Layer 1");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [mineFilter, setMineFilter] = useState("Live Mines"); // For Genesis/Mines tabs
  const [isStakedOnly, setIsStakedOnly] = useState(false); // Toggle switch state
  const [expandedCards, setExpandedCards] = useState<number[]>([]); // Track expanded cards
  const [genesisCardExpanded, setGenesisCardExpanded] = useState(false); // Track Genesis card expansion
  

  useEffect(() => {
    setMounted(true);
  }, []);

  const layers = ["Layer 1", "Layer 2", "Layer 3", "Layer 4", "Layer 5"];

  // Helper to check if dark mode is active (considering system theme)
  const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark');

  // Background image based on theme
  const bgImage = isDark ? 'url(/images/dark_key.png)' : 'url(/images/second.png)';

  // Mock data for mines with details
 const minesData = [
  { id: 1, name: "GKEY-KEY LP", pair: "G5", apr: "38.06%", depositFee: "0%", staked: "GKEY-KEY LP", earned: "GKEY", noFees: true, badge: "60X", deposit: "GKEY-KEY LP", totalValue: "$1", earn: "$0" },
  { id: 2, name: "GKEY-BUSD LP", pair: "G5", apr: "29.15%", depositFee: "0%", staked: "GKEY-BUSD LP", earned: "GKEY", noFees: true, badge: "40X", deposit: "GKEY-BUSD LP", totalValue: "$1]", earn: "$0" },
  { id: 3, name: "TYPH-BUSD LP", pair: "G5", apr: "0%", depositFee: "0%", staked: "TYPH-BUSD LP", earned: "KEY", noFees: true, badge: "24X", deposit: "TYPH-BUSD LP", totalValue: "$3]", earn: "$0" },
  { id: 4, name: "GKEY", pair: "G5", apr: "0.00%", depositFee: "0%", staked: "GKEY", earned: "GKEY", noFees: true, badge: "8X", deposit: "GKEY", totalValue: "$8", earn: "$0" },
  { id: 5, name: "BUSD", pair: "G5", apr: "0.00%", depositFee: "2%", staked: "BUSD", earned: "GKEY", badge: "2X", deposit: "BUSD", totalValue: "$2,629", earn: "$0" },
  { id: 6, name: "WBNB", pair: "G5", apr: "0.00%", depositFee: "3%", staked: "WBNB", earned: "KEY", badge: "3X", deposit: "WBNB", totalValue: "$488", earn: "$0" },
  { id: 7, name: "USDT", pair: "G5", apr: "0.00%", depositFee: "2%", staked: "USDT", earned: "GKEY", badge: "1X", deposit: "USDT", totalValue: "$14", earn: "$0" },
  { id: 8, name: "BTCB", pair: "G5", apr: "0.00%", depositFee: "2%", staked: "BTCB", earned: "GKEY", badge: "2X", deposit: "BTCB", totalValue: "$0", earn: "$NaN" },
  { id: 9, name: "ETH", pair: "G5", apr: "0.00%", depositFee: "0%", staked: "ETH", earned: "GKEY", badge: "2X", deposit: "ETH", totalValue: "$0", earn: "$NaN" },
  { id: 10, name: "DAI", pair: "G5", apr: "0.00%", depositFee: "2%", staked: "DAI", earned: "GKEY", badge: "1X", deposit: "DAI", totalValue: "$0", earn: "$NaN" },
  { id: 11, name: "USDC", pair: "G5", apr: "0.00%", depositFee: "2%", staked: "USDC", earned: "GKEY", badge: "1X", deposit: "USDC", totalValue: "$0", earn: "$NaN" },
  { id: 12, name: "DOT", pair: "G5", apr: "0.00%", depositFee: "2%", staked: "DOT", earned: "GKEY", badge: "2X", deposit: "DOT", totalValue: "$6", earn: "$0" },
  { id: 13, name: "CAKE", pair: "G5", apr: "0.00%", depositFee: "2%", staked: "CAKE", earned: "GKEY", badge: "1X", deposit: "CAKE", totalValue: "$87", earn: "$0" },
  { id: 14, name: "ADA", pair: "G5", apr: "0.00%", depositFee: "2%", staked: "ADA", earned: "GKEY", badge: "1X", deposit: "ADA", totalValue: "$0", earn: "$NaN" },
];


  const handleTabClick = (tab: string) => {
    // console.log(`✅ Tab clicked: ${tab}`);
    // console.log(`Previous tab: ${activeTab} → New tab: ${tab}`);
    setActiveTab(tab);
  };

  const toggleCardExpansion = (cardId: number) => {
    setExpandedCards(prev => 
      prev.includes(cardId) 
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };

  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-6 relative" >
        <Image src="/images/bg_gold.png" alt="Background" fill className="object-content z-1 absolute right-0 bottom-0 max-w-[500px] max-h-[387px]" style={{ left: 'auto', top: 'auto' }} />
        {/* Hero Section */}
        <div className="relative z-10 h-100">
          <section className="mb-6 lg:mb-6 bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm"
            style={{ backgroundImage: bgImage , backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

            <h1 className="text-xl sm:text-2xl lg:text-[30px] gradient-text2 font-semibold">Layered mining</h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg font-roboto">
              Layered Mining is highly volatile, please do your own research before investing.
            </p>

            {/* Layer Selection Dropdown */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0 mt-6 max-w-full sm:max-w-[400px]">
              <div className="relative w-full sm:w-auto">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-300 dark:border-gray-600 rounded-lg px-3 sm:px-4 py-2 text-[#5C69CC] dark:text-white hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-sm w-full sm:w-auto text-sm sm:text-base"
                >
                  <span className="font-medium">{selectedLayer}</span>
                  <svg
                    className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute top-full left-0 mt-2 w-full min-w-[150px] bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg shadow-xl z-20 overflow-hidden">
                    {layers.map((layer, index) => (
                      <button
                        key={layer}
                        onClick={() => {
                          setSelectedLayer(layer);
                          setIsDropdownOpen(false);
                        }}
                        className={`w-full text-left px-4 py-3 transition-all duration-150 ${selectedLayer === layer
                          ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 border-l-2 border-blue-500'
                          : 'text-[#5C69CC] dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'
                          } ${index === 0 ? 'rounded-t-lg' : ''} ${index === layers.length - 1 ? 'rounded-b-lg' : ''} ${index !== layers.length - 1 ? 'border-b border-gray-100 dark:border-gray-700' : ''}`}
                      >
                        <span className="font-medium text-sm sm:text-base">{layer}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="text-left sm:text-right w-full sm:w-auto">
                <span className="text-xl sm:text-2xl font-bold text-[#5C69CC] dark:text-white bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-lg backdrop-blur-sm  dark:border-gray-600 inline-block">$0.00</span>
              </div>
            </div>
          </section>

          {/* Tabs */}
          <nav className="mb-4 w-full">
            <div className="flex items-center justify-start sm:justify-center overflow-x-auto scrollbar-hide px-2 pb-1">
              <div role="tablist" aria-label="Main tabs" className="inline-flex gap-2 sm:gap-3 bg-transparent rounded-full px-2 py-1 border border-[#0000001A]">
                {['Home', 'Genesis', 'Mines', 'House'].map((tab) => (
                  <button
                    key={tab}
                    role="tab"
                    aria-selected={activeTab === tab}
                    onClick={() => handleTabClick(tab)}
                    className={`px-4 py-2 sm:px-5 sm:py-2.5 text-sm sm:text-base ${activeTab === tab
                      ? 'tab-golden-button text-white'
                      : 'tab-white-button dark:bg-gray-800 text-[#5C69CC] dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                      } rounded-full whitespace-nowrap transition-all`}
                  >
                    {tab}
                  </button>
                ))}
              </div>
            </div>
          </nav>

          {/* GG5 Address Display */}
          <div className="mb-4 text-center px-2">
            <p className="text-xs sm:text-sm text-[#5C69CC] dark:text-gray-400 font-medium break-all">
              GG5 ADDRESS: 0×1A2AfB48F402847aF9f487959c144bd82AfEb303
            </p>
          </div>

          {/* Genesis Tab Content */}
          {activeTab === 'Genesis' && (
            <>
              {/* KEY → GKEY Info */}
              <div className="mb-6 text-center bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <h3 className="text-2xl font-bold  text-[#5C69CC] mb-2">KEY → GKEY</h3>
                <p className="text-sm text-[#5C69CC] dark:text-blue-400 underline mb-1">
                  Token from burn fee will be automatically burnt
                </p>
                <p className="text-sm text-[#5C69CC] dark:text-blue-400 underline">
                  Max supply of GKEY is 1,000,000
                </p>
              </div>

              {/* Filter Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6 px-2">
                {/* Toggle Switch & Staked Only - Group them together */}
                <div className="flex items-center gap-3">
                  {/* Toggle Switch - Proper Design */}
                  <button
                    onClick={() => setIsStakedOnly(!isStakedOnly)}
                    className={`relative w-14 h-7 rounded-full transition-all duration-300 ${isStakedOnly
                      ? 'bg-gradient-to-r from-blue-400 to-blue-600'
                      : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                  >
                    <div
                      className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 ${isStakedOnly ? 'right-1' : 'left-1'
                        }`}
                    />
                  </button>

                  {/* Staked Only Text Button */}
                  <button
                    onClick={() => setIsStakedOnly(!isStakedOnly)}
                    className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${isStakedOnly
                      ? "text-[#5C69CC] dark:text-blue-400 font-semibold"
                      : "text-gray-600 dark:text-gray-400"
                      }`}
                  >
                    Staked Only
                  </button>
                </div>

                {/* Closed Mines Tab */}
                <div className="py-1 px-1 sm:px-2 border border-[#0000001A] rounded-full">
                  <button
                    onClick={() => setMineFilter("Closed Mines")}
                    className={`px-3 sm:px-6 py-2 rounded-full font-medium transition-all text-xs sm:text-base ${mineFilter === "Closed Mines"
                      ? "bg-gradient-to-r from-blue-400 to-cyan-400 text-white scale-105"
                      : " dark:bg-gray-700 text-[#5C69CC] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                      }`}
                  >
                    Closed Mines
                  </button>

                  {/* Live Mines Tab */}
                  <button
                    onClick={() => setMineFilter("Live Mines")}
                    className={`px-3 sm:px-6 py-2 rounded-full font-medium transition-all text-xs sm:text-base ${mineFilter === "Live Mines"
                      ? "bg-gradient-to-r from-blue-400 to-cyan-400 text-white scale-105"
                      : " dark:bg-gray-700 text-[#5C69CC] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                      }`}
                  >
                    Live Mines
                  </button>
                </div>
              </div>

              {/* Mine Card - Single for Genesis - Only show when Live Mines is selected */}
              {mineFilter === "Live Mines" ? (
                <div className="max-w-sm mx-auto px-2">
                  <div className="dark:from-gray-800 dark:to-gray-700 rounded-[20px] p-4 sm:p-6 shadow-lg relative overflow-hidden mine_live_bg">
                    <div className="absolute top-4 left-4 w-24 h-24 sm:w-36 sm:h-36">
                      <Image src="/images/icon.png" alt="Key" width={100} height={100} className="object-contain" />
                    </div>
                    {/* Top Right - KEY Badge */}
                    <div className="absolute top-4 right-4">
                      <div className=" flex flex-col">
                        <span className="font-bold text-xs sm:text-sm" style={{ color: "#5C69CC" }}>KEY</span>
                        <span className="text-white text-[10px] px-2 py-0.5 rounded-full font-bold" style={{ background: "linear-gradient(100.78deg, #5C69CC 12.11%, #13A1CB 96.61%)" }}>
                          3X</span>
                      </div>
                    </div>

                    <div className="space-y-3 mt-12 sm:mt-16">

                      {/* Stack & Earn */}
                      <div className="space-y-1 mb-4">
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-sm sm:text-lg" style={{ color: "#7B8CDE" }}>APR:</span>
                          <span className="font-bold text-sm sm:text-lg" style={{ color: "#5C69CC" }}>0.00%</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-sm sm:text-lg" style={{ color: "#7B8CDE" }}>Stack:</span>
                          <span className="font-bold text-sm sm:text-lg" style={{ color: "#5C69CC" }}>KEYS</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-sm sm:text-lg" style={{ color: "#7B8CDE" }}>Earn:</span>
                          <span className="font-bold text-sm sm:text-lg" style={{ color: "#5C69CC" }}>GKEY</span>
                        </div>
                      </div>


                      {/* Deposit Fee Section */}
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold text-sm sm:text-lg block" style={{ color: "#5C69CC" }}>Deposit Fee:</span>
                          <span className="font-bold text-sm sm:text-lg block" style={{ color: "#5C69CC" }}>2%</span>
                        </div>
                      </div>

                      {/* Keys Earned Section */}
                      <div className="mb-3">
                        <div className="text-sm sm:text-[16px] font-normal mb-1" style={{ color: "#5C69CC" }}>KEYS EARNED</div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-xl sm:text-2xl" style={{ color: "#7B8CDE" }}>0</span>
                          <button
                            className="px-4 sm:px-5 py-1 rounded-lg text-white text-xs font-medium transition-all hover:opacity-90"
                            style={{ background: "linear-gradient(93.96deg, rgba(147, 150, 237, 0.4) 2.58%, rgba(13, 161, 202, 0.4) 99.26%)" }}
                          >
                            Harvest
                          </button>
                        </div>
                      </div>

                      {/* LP Stacked Badge */}
                      <div className="text-xs sm:text-[14px] font-semibold mb-3" style={{ color: "#5C69CC" }}>KEY–BUSD LP STACKED</div>


                      {/* Unlock Wallet Button */}
                      <button className="w-full golden-button text-white rounded-full py-3 font-semibold shadow-lg cursor-pointer">
                        Unlock Wallet
                      </button>
                      
                      {/* Show Less / Mine Details Button */}
                      <div className="bg-[white] h-[0.8px]" />
                      <button
                        onClick={() => setGenesisCardExpanded(!genesisCardExpanded)}
                        className="w-full py-2.5 flex gap-1 items-center justify-center font-semibold text-lg transition-all hover:opacity-90"
                        style={{
                          background: "transparent",
                          color: "#ffffff",
                        }}
                      >
                        {genesisCardExpanded ? 'Show less' : 'Mine Details'}
                        <ChevronDown className={`w-5 h-5 text-white transition-transform duration-300 ${genesisCardExpanded ? 'rotate-180' : ''}`} />
                      </button>

                      {/* Expanded Details Section */}
                      {genesisCardExpanded && (
                        <div className="mt-4 space-y-3 pt-4 border-t border-white/20">
                          <div className="flex justify-between items-center">
                            <span className="text-white text-sm font-medium">Deposit:</span>
                            <span className="text-white text-sm font-bold flex items-center gap-1">
                              KEY
                              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                              </svg>
                            </span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-white text-sm font-medium">Total Value:</span>
                            <span className="text-white text-sm font-bold">$1</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-white text-sm font-medium">Earn:</span>
                            <span className="text-white text-sm font-bold">$0</span>
                          </div>
                          <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-lg py-2 font-medium text-sm transition-all">
                            View on BscScan
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-gray-400 dark:text-gray-500 text-lg">No closed mines available</p>
                </div>
              )}
            </>
          )}

          {/* Mines Tab Content */}
          {activeTab === 'Mines' && (

            <>
              {/* KEY → GKEY Info */}
              <div className="mb-6 text-center bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <h3 className="text-2xl font-bold  text-[#5C69CC] mb-2">KEY → GKEY</h3>
                <p className="text-sm text-[#5C69CC] dark:text-blue-400 underline mb-1">
                  Token from burn fee will be automatically burnt
                </p>
                <p className="text-sm text-[#5C69CC] dark:text-blue-400 underline">
                  Max supply of GKEY is 1,000,000
                </p>
              </div>
              {/* Filter Buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-4 mb-6 px-2">
                {/* Toggle Switch & Staked Only - Group them together */}
                <div className="flex items-center gap-3">
                  {/* Toggle Switch - Proper Design */}
                  <button
                    onClick={() => setIsStakedOnly(!isStakedOnly)}
                    className={`relative w-14 h-7 rounded-full transition-all duration-300 ${isStakedOnly
                      ? 'bg-gradient-to-r from-blue-400 to-blue-600'
                      : 'bg-gray-300 dark:bg-gray-600'
                      }`}
                  >
                    <div
                      className={`absolute top-1 w-5 h-5 bg-white rounded-full shadow-md transition-all duration-300 ${isStakedOnly ? 'right-1' : 'left-1'
                        }`}
                    />
                  </button>

                  {/* Staked Only Text Button */}
                  <button
                    onClick={() => setIsStakedOnly(!isStakedOnly)}
                    className={`px-4 sm:px-6 py-2 rounded-full font-medium transition-all text-sm sm:text-base ${isStakedOnly
                      ? "text-[#5C69CC] dark:text-blue-400 font-semibold"
                      : "text-gray-600 dark:text-gray-400"
                      }`}
                  >
                    Staked Only
                  </button>
                </div>

                {/* Closed Mines Tab */}
                <div className="py-1 px-1 sm:px-2 border border-[#0000001A] rounded-full">
                  <button
                    onClick={() => setMineFilter("Closed Mines")}
                    className={`px-3 sm:px-6 py-2 rounded-full font-medium transition-all text-xs sm:text-base ${mineFilter === "Closed Mines"
                      ? "bg-gradient-to-r from-blue-400 to-cyan-400 text-white scale-105"
                      : " dark:bg-gray-700 text-[#5C69CC] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                      }`}
                  >
                    Closed Mines
                  </button>

                  {/* Live Mines Tab */}
                  <button
                    onClick={() => setMineFilter("Live Mines")}
                    className={`px-3 sm:px-6 py-2 rounded-full font-medium transition-all text-xs sm:text-base ${mineFilter === "Live Mines"
                      ? "bg-gradient-to-r from-blue-400 to-cyan-400 text-white scale-105"
                      : " dark:bg-gray-700 text-[#5C69CC] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                      }`}
                  >
                    Live Mines
                  </button>
                </div>
              </div>

              {/* Mines Grid - Only show when Live Mines is selected */}
              {mineFilter === "Live Mines" ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 px-2">
                  {minesData.map((mine) => (
                    <div
                      key={mine.id}
                      className="dark:from-gray-800 dark:to-gray-700 rounded-[20px] p-4 sm:p-6 shadow-lg relative overflow-hidden mine_live_bg"
                    >
                      {/* Top Left - Icon */}
                      <div className="absolute top-4 left-4 w-24 h-24 sm:w-36 sm:h-36">
                        <Image src="/images/icon.png" alt="Key" width={100} height={100} className="object-contain" />
                      </div>
                      {/* Top Right - Pair Name & Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="flex flex-col items-end gap-1">
                          <span className="font-bold text-xs sm:text-sm" style={{ color: "#5C69CC" }}>{mine.name}</span>
                          <div className="flex items-center gap-2">
                            {mine.noFees && (
                              <span className="text-[#4CAF50] text-[10px] px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                                <Image src="/images/tick-circle.png" alt="No Fees" width={12} height={12} className="inline-block" />
                                No fees
                              </span>
                            )}
                            {mine.badge && (
                              <span className="text-white text-[10px] px-2 py-0.5 rounded-full font-bold" style={{ background: "linear-gradient(100.78deg, #5C69CC 12.11%, #13A1CB 96.61%)" }}>
                                {mine.badge}
                              </span>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="space-y-3 mt-12 sm:mt-16">
                        {/* APR, Stack & Earn */}
                        <div className="space-y-1 mb-4">
                          <div className="flex justify-between text-xs">
                            <span className="font-medium text-sm sm:text-lg" style={{ color: "#7B8CDE" }}>APR:</span>
                            <span className="font-bold text-sm sm:text-lg" style={{ color: "#5C69CC" }}>{mine.apr}</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="font-medium text-sm sm:text-lg" style={{ color: "#7B8CDE" }}>Stack:</span>
                            <span className="font-bold text-sm sm:text-lg" style={{ color: "#5C69CC" }}>{mine.staked}</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="font-medium text-sm sm:text-lg" style={{ color: "#7B8CDE" }}>Earn:</span>
                            <span className="font-bold text-sm sm:text-lg" style={{ color: "#5C69CC" }}>{mine.earned}</span>
                          </div>
                        </div>

                        {/* Deposit Fee Section */}
                        <div className="mb-3">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-semibold text-sm sm:text-lg block" style={{ color: "#5C69CC" }}>Deposit Fee:</span>
                            <span className="font-bold text-sm sm:text-lg block" style={{ color: "#5C69CC" }}>{mine.depositFee}</span>
                          </div>
                        </div>

                        {/* Keys Earned Section */}
                        <div className="mb-3">
                          <div className="text-sm sm:text-[16px] font-normal mb-1" style={{ color: "#5C69CC" }}>KEYS EARNED</div>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-xl sm:text-2xl" style={{ color: "#7B8CDE" }}>0</span>
                            <button
                              className="px-4 sm:px-5 py-1 rounded-lg text-white text-xs font-medium transition-all hover:opacity-90"
                              style={{ background: "linear-gradient(93.96deg, rgba(147, 150, 237, 0.4) 2.58%, rgba(13, 161, 202, 0.4) 99.26%)" }}
                            >
                              Harvest
                            </button>
                          </div>
                        </div>

                        {/* LP Stacked Badge */}
                        <div className="text-xs sm:text-[14px] font-semibold mb-3" style={{ color: "#5C69CC" }}>{mine.name} STACKED</div>

                        {/* Unlock Wallet Button */}
                        <button className="w-full golden-button text-white rounded-full py-3 font-semibold shadow-lg cursor-pointer">
                          Unlock Wallet
                        </button>

                        {/* Show Less / Mine Details Button */}
                        <div className="bg-[white] h-[0.8px]" />
                        <button
                          onClick={() => toggleCardExpansion(mine.id)}
                          className="w-full py-2.5 flex gap-1 items-center justify-center font-semibold text-lg transition-all hover:opacity-90"
                          style={{
                            background: "transparent",
                            color: "#ffffff",
                          }}
                        >
                          {expandedCards.includes(mine.id) ? 'Show less' : 'Mine Details'} 
                          <ChevronDown className={`w-5 h-5 text-white transition-transform duration-300 ${expandedCards.includes(mine.id) ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Expanded Details Section */}
                        {expandedCards.includes(mine.id) && (
                          <div className="mt-4 space-y-3 pt-4 border-t border-white/20">
                            <div className="flex justify-between items-center">
                              <span className="text-white text-sm font-medium">Deposit:</span>
                              <span className="text-white text-sm font-bold flex items-center gap-1">
                                {mine.deposit}
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                              </span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-white text-sm font-medium">Total Value:</span>
                              <span className="text-white text-sm font-bold">{mine.totalValue}</span>
                            </div>
                            <div className="flex justify-between items-center">
                              <span className="text-white text-sm font-medium">Earn:</span>
                              <span className="text-white text-sm font-bold">{mine.earn}</span>
                            </div>
                            <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-lg py-2 font-medium text-sm transition-all">
                              View on BscScan
                            </button>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-20">
                  <p className="text-gray-400 dark:text-gray-500 text-lg">No closed mines available</p>
                </div>
              )}
            </>
          )}

          {/* House Tab Content */}
          {activeTab === 'House' && (
            <>
              {/* GKEY → BUSD Info */}
              <div className="mb-6 text-center bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
                <h3 className="text-2xl font-bold text-[#5C69CC] mb-2">GKEY → BUSD</h3>
                <p className="text-sm text-[#5C69CC] dark:text-blue-400 underline">
                  BUSD will refill upon receiving deposit fees
                </p>
              </div>

              {/* House Card */}
              <div className="max-w-sm mx-auto px-2">
                <div className="dark:from-gray-800 dark:to-gray-700 rounded-[20px] p-4 sm:p-6 shadow-lg relative overflow-hidden mine_live_bg">
                  <div className="absolute top-4 left-4 w-24 h-24 sm:w-36 sm:h-36">
                    <Image src="/images/icon.png" alt="Key" width={100} height={100} className="object-contain" />
                  </div>
                  {/* Top Right - BUSD Badge */}
                  <div className="absolute top-4 right-4">
                    <div className="flex flex-col">
                      <span className="font-bold text-xs sm:text-sm" style={{ color: "#5C69CC" }}>BUSD</span>
                    </div>
                  </div>

                  <div className="space-y-3 mt-12 sm:mt-16">
                    {/* Stack & Earn */}
                    <div className="space-y-1 mb-4">
                      <div className="flex justify-between text-xs">
                        <span className="font-medium text-sm sm:text-lg" style={{ color: "#7B8CDE" }}>APR:</span>
                        <span className="font-bold text-sm sm:text-lg" style={{ color: "#5C69CC" }}>0.00%</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="font-medium text-sm sm:text-lg" style={{ color: "#7B8CDE" }}>Stack:</span>
                        <span className="font-bold text-sm sm:text-lg" style={{ color: "#5C69CC" }}>GKEY</span>
                      </div>
                      <div className="flex justify-between text-xs">
                        <span className="font-medium text-sm sm:text-lg" style={{ color: "#7B8CDE" }}>Earn:</span>
                        <span className="font-bold text-sm sm:text-lg" style={{ color: "#5C69CC" }}>BUSD</span>
                      </div>
                    </div>

                    {/* Deposit Fee Section */}
                    <div className="mb-3">
                      <div className="flex justify-between items-center mb-1">
                        <span className="font-semibold text-sm sm:text-lg block" style={{ color: "#5C69CC" }}>Deposit Fee:</span>
                        <span className="font-bold text-sm sm:text-lg block" style={{ color: "#5C69CC" }}>0%</span>
                      </div>
                    </div>

                    {/* Keys Earned Section */}
                    <div className="mb-3">
                      <div className="text-sm sm:text-[16px] font-normal mb-1" style={{ color: "#5C69CC" }}>KEYS EARNED</div>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xl sm:text-2xl" style={{ color: "#7B8CDE" }}>0</span>
                        <button
                          className="px-4 sm:px-5 py-1 rounded-lg text-white text-xs font-medium transition-all hover:opacity-90"
                          style={{ background: "linear-gradient(93.96deg, rgba(147, 150, 237, 0.4) 2.58%, rgba(13, 161, 202, 0.4) 99.26%)" }}
                        >
                          Harvest
                        </button>
                      </div>
                    </div>

                    {/* LP Stacked Badge */}
                    <div className="text-xs sm:text-[14px] font-semibold mb-3" style={{ color: "#5C69CC" }}>KEY–BUSD LP STACKED</div>

                    {/* Unlock Wallet Button */}
                    <button className="w-full golden-button text-white rounded-full py-3 font-semibold shadow-lg cursor-pointer">
                      Unlock Wallet
                    </button>
                    
                    {/* Show Less / Mine Details Button */}
                    <div className="bg-[white] h-[0.8px]" />
                    <button
                      onClick={() => setGenesisCardExpanded(!genesisCardExpanded)}
                      className="w-full py-2.5 flex gap-1 items-center justify-center font-semibold text-lg transition-all hover:opacity-90"
                      style={{
                        background: "transparent",
                        color: "#ffffff",
                      }}
                    >
                      {genesisCardExpanded ? 'Show less' : 'Mine Details'}
                      <ChevronDown className={`w-5 h-5 text-white transition-transform duration-300 ${genesisCardExpanded ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Expanded Details Section */}
                    {genesisCardExpanded && (
                      <div className="mt-4 space-y-3 pt-4 border-t border-white/20">
                        <div className="flex justify-between items-center">
                          <span className="text-white text-sm font-medium">Deposit:</span>
                          <span className="text-white text-sm font-bold flex items-center gap-1">
                            GKEY
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white text-sm font-medium">Emission Rate:</span>
                          <span className="text-white text-sm font-bold">6 / BLOCK</span>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="text-white text-sm font-medium">Total Value:</span>
                          <span className="text-white text-sm font-bold">$0</span>
                        </div>
                        <button className="w-full bg-white/10 hover:bg-white/20 text-white rounded-lg py-2 font-medium text-sm transition-all">
                          View on BscScan
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </>
          )}

          {/* Home Tab Content */}
          {activeTab === 'Home' && (
            <>
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-6">
                {/* Mining & Pooling Section */}
                <section className="bg-white dark:bg-gray-800 rounded-lg pt-4 px-4 shadow-sm lg:col-span-2">
                  <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 gradient-text2 dark:text-white font-roboto">
                    Mining & Pooling
                  </h2>

                  <div className="min-h-[235px] flex flex-col sm:flex-row items-center justify-between relative overflow-hidden"
                    style={{ backgroundImage: 'url(/images/lock_bg2.png)', backgroundPosition: 'bottom left', backgroundSize: 'contain', backgroundRepeat: 'no-repeat' }}>
                    {/* Mobile: Stack vertically, Desktop: Push content right */}
                    <div className="flex-1 space-y-3 sm:space-y-4 w-full sm:w-auto px-0 sm:ml-[285px] py-4 sm:py-0">
                      <div className="flex justify-between items-center p-3 bg-[#F7FAFC] dark:bg-gray-700 rounded-lg">
                        <span className="text-xs sm:text-sm md:text-base text-[#5C69CC] dark:text-gray-300 font-inter">Coins in Mine</span>
                        <span className="font-semibold text-[#5C69CC] dark:text-white text-xs sm:text-[14px] font-inter">LOCKED</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-[#F7FAFC] dark:bg-gray-700 rounded-lg">
                        <span className="text-xs sm:text-sm md:text-base text-[#5C69CC] dark:text-gray-300 font-inter">Coins in Wallet</span>
                        <span className="font-semibold text-[#5C69CC] dark:text-white text-xs sm:text-[14px] font-inter">$0.00</span>
                      </div>
                      <div className="text-center">
                        <button className="golden-button text-white rounded-full text-sm sm:text-base">Unlock Wallet</button>

                      </div>

                    </div>
                  </div>
                </section>

                {/* Announcements Section */}
                <section className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm lg:col-span-1">
                  <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 gradient-text2 dark:text-white font-roboto">
                    Total Value Locked (TVL)
                  </h2>
                  <div className="space-y-2">
                    <div className="border-b border-gray-200 dark:border-gray-700 pb-2">

                      <p className="text-xs sm:text-sm text-[#5C69CC] dark:text-gray-400 font-inter mb-1">
                        In Current Layer
                      </p>
                      <h3 className="font-semibold text-[#5C69CC] dark:text-white font-inter text-xl sm:text-[25px]">
                        $3,380.14
                      </h3>
                    </div>

                    <div className="pb-2">
                      <p className="text-xs sm:text-sm text-[#5C69CC] dark:text-gray-400 font-inter">
                        Across all Layers
                      </p>
                      <h3 className="font-semibold text-[#5C69CC] dark:text-white mb-1 font-inter text-xl sm:text-[25px]">
                        $317,307.33
                      </h3>
                    </div>
                  </div>
                </section>
              </div>

              {/* GKEYS Stats */}
              <section className="mt-6 sm:mt-6 bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
                <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
                  GKEYS Stats
                </h2>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6">
                  <div>
                    <p className="text-xs sm:text-sm text-[#878787] dark:text-gray-400 mb-1 sm:mb-2">Market Cap</p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#5C69CC] dark:text-white">
                      $1.2M
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[#878787] dark:text-gray-400 mb-1 sm:mb-2">Total Minted</p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#5C69CC] dark:text-white">
                      321M
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[#878787] dark:text-gray-400 mb-1 sm:mb-2">Total Burned</p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#5C69CC] dark:text-white">
                      42M
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[#878787] dark:text-gray-400 mb-1 sm:mb-2">Circulating Supply</p>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold text-[#5C69CC] dark:text-white">
                      123M
                    </p>
                  </div>
                </div>
              </section>
            </>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
