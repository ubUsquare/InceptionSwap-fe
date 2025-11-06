"use client";

import AppLayout from "@/components/common/app-layout";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function LayeredMiningPage() {
  const [selectedLayer, setSelectedLayer] = useState("Layer 1");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("Home");
  const [mineFilter, setMineFilter] = useState("Live Mines"); // For Genesis/Mines tabs
  const [isStakedOnly, setIsStakedOnly] = useState(false); // Toggle switch state

  const layers = ["Layer 1", "Layer 2", "Layer 3", "Layer 4", "Layer 5"];

  // Mock data for mines
  const minesData = [
    { id: 1, name: "GKEY-KEY LP", pair: "G5", apr: "0.00%", depositFee: "0%", staked: "GKEY-KEY LP", earned: "GKEY", noFees: true, badge: "60X", },
    { id: 2, name: "GKEY-BUSD LP", pair: "G5", apr: "0.00%", depositFee: "0%", staked: "GKEY-BUSD LP", earned: "GKEY", noFees: true, badge: "60X", },
    { id: 3, name: "YYM-BUSD LP", pair: "G5", apr: "0.00%", depositFee: "0%", staked: "YYM-BUSD LP", earned: "KEY", noFees: true, badge: "2X", },
    { id: 4, name: "BDB-BUSD LP", pair: "G5", apr: "3.63%", depositFee: "1.5%", staked: "BDB-BUSD LP", earned: "BDB", badge: "5X", },
    { id: 5, name: "USDT-BUSD LP", pair: "G5", apr: "4.02%", depositFee: "1.5%", staked: "USDT-BUSD LP", earned: "KEY", badge: "4X", },
    { id: 6, name: "BTCB-BUSD LP", pair: "G5", apr: "1.96%", depositFee: "1.5%", staked: "BTCB-BUSD LP", earned: "KEY", badge: "3X", },
    { id: 7, name: "ETH-BUSD LP", pair: "G5", apr: "14.65%", depositFee: "1.5%", staked: "ETH-BUSD LP", earned: "BUSD", badge: "6X", },
    { id: 8, name: "USDT-BUSD LP", pair: "G5", apr: "14.65%", depositFee: "1.5%", staked: "USDT-BUSD LP", earned: "USDT", badge: "6X", },
    { id: 9, name: "DAM-BUSD LP", pair: "G5", apr: "0.96%", depositFee: "1.5%", staked: "DAM-BUSD LP", earned: "KEY", badge: "2X", },
    { id: 10, name: "USDC-BUSD LP", pair: "G5", apr: "8.66%", depositFee: "1.5%", staked: "USDC-BUSD LP", earned: "USDT", badge: "4X", },
    { id: 11, name: "DOT-BNB LP", pair: "G5", apr: "0.00%", depositFee: "1.5%", staked: "DOT-BNB LP", earned: "BNB", badge: "1X", },
    { id: 12, name: "CAKE-BUSD LP", pair: "G5", apr: "12.35%", depositFee: "1.5%", staked: "CAKE-BUSD LP", earned: "KEY", badge: "5X", },
  ];

  const handleTabClick = (tab: string) => {
    // console.log(`✅ Tab clicked: ${tab}`);
    // console.log(`Previous tab: ${activeTab} → New tab: ${tab}`);
    setActiveTab(tab);
  };

  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-6 relative" >
        <Image src="/images/bg_gold.png" alt="Background" fill className="object-content z-1 absolute right-0 bottom-0 max-w-[500px] max-h-[387px]" style={{ left: 'auto', top: 'auto' }} />
        {/* Hero Section */}
        <div className="relative z-10 h-100">
          <section className="mb-6 lg:mb-6 bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm"
            style={{ backgroundImage: 'url(/images/second.png)', backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

            <h1 className="text-[30px] gradient-text2 font-semibold">Layered mining</h1>
            <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg font-roboto">
              Layered Mining is highly volatile, please do your own research before investing.
            </p>

            {/* Layer Selection Dropdown */}
            <div className="flex items-center justify-between mt-6 max-w-[400px]">
              <div className="relative">
                <button
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className="flex items-center gap-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-2 text-[#5C69CC] dark:text-white hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-sm"
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
                        <span className="font-medium">{layer}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="text-right">
                <span className="text-2xl font-bold text-[#5C69CC] dark:text-white bg-white/90 dark:bg-gray-800/90 px-3 py-1 rounded-lg backdrop-blur-sm  dark:border-gray-600">$0.00</span>
              </div>
            </div>
          </section>

          {/* Tabs */}
          <nav className="mb-4 flex items-center justify-center">
            <div role="tablist" aria-label="Main tabs" className="inline-flex gap-3 bg-transparent rounded-full px-2 py-1 border border-[#0000001A]">
              {['Home', 'Genesis', 'Mines', 'House'].map((tab) => (
                <button
                  key={tab}
                  role="tab"
                  aria-selected={activeTab === tab}
                  onClick={() => handleTabClick(tab)}
                  className={` ${activeTab === tab
                    ? 'tab-golden-button text-white'
                    : 'tab-white-button dark:bg-gray-800 text-[#5C69CC] dark:text-gray-300 border border-gray-200 dark:border-gray-700'
                    } rounded-full`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </nav>

          {/* GG5 Address Display */}
          <div className="mb-4 text-center">
            <p className="text-sm text-[#5C69CC] dark:text-gray-400 font-medium">
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
              <div className="flex items-center justify-center gap-4 mb-6">
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
                  className={`px-6 py-2 rounded-full font-medium transition-all ${isStakedOnly
                    ? "text-[#5C69CC] dark:text-blue-400 font-semibold"
                    : "text-gray-600 dark:text-gray-400"
                    }`}
                >
                  Staked Only
                </button>

                {/* Closed Mines Tab */}
                <div className="py-1 px-2 border border-[#0000001A] rounded-full">
                  <button
                    onClick={() => setMineFilter("Closed Mines")}
                    className={`px-6 py-2 rounded-full font-medium transition-all  ${mineFilter === "Closed Mines"
                      ? "bg-gradient-to-r from-blue-400 to-cyan-400 text-white scale-105"
                      : " dark:bg-gray-700 text-[#5C69CC] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                      }`}
                  >
                    Closed Mines
                  </button>

                  {/* Live Mines Tab */}
                  <button
                    onClick={() => setMineFilter("Live Mines")}
                    className={`px-6 py-2 rounded-full font-medium transition-all  ${mineFilter === "Live Mines"
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
                <div className="max-w-sm mx-auto">
                  <div className="dark:from-gray-800 dark:to-gray-700 rounded-[20px] p-6 shadow-lg relative overflow-hidden mine_live_bg">
                    <div className="absolute top-4 left-4 w-36 h-36">
                      <Image src="/images/icon.png" alt="Key" width={100} height={100} className="object-contain" />
                    </div>
                    {/* Top Right - KEY Badge */}
                    <div className="absolute top-4 right-4">
                      <div className=" flex flex-col">
                        <span className="font-bold text-sm" style={{ color: "#5C69CC" }}>KEY</span>
                        <span className="text-white text-[10px] px-2 py-0.5 rounded-full font-bold" style={{ background: "linear-gradient(100.78deg, #5C69CC 12.11%, #13A1CB 96.61%)" }}>
                          3X</span>
                      </div>
                    </div>

                    <div className="space-y-3 mt-16">

                      {/* Stack & Earn */}
                      <div className="space-y-1 mb-4">
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-lg" style={{ color: "#7B8CDE" }}>APR:</span>
                          <span className="font-bold text-lg" style={{ color: "#5C69CC" }}>0.00%</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-lg" style={{ color: "#7B8CDE" }}>Stack:</span>
                          <span className="font-bold text-lg" style={{ color: "#5C69CC" }}>KEYS</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span className="font-medium text-lg" style={{ color: "#7B8CDE" }}>Earn:</span>
                          <span className="font-bold text-lg" style={{ color: "#5C69CC" }}>GKEY</span>
                        </div>
                      </div>


                      {/* Deposit Fee Section */}
                      <div className="mb-3">
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold text-lg block" style={{ color: "#5C69CC" }}>Deposit Fee:</span>
                          <span className="font-bold text-lg block" style={{ color: "#5C69CC" }}>2%</span>
                        </div>
                      </div>

                      {/* Keys Earned Section */}
                      <div className="mb-3">
                        <div className="text-[16px] font-normal mb-1" style={{ color: "#5C69CC" }}>KEYS EARNED</div>
                        <div className="flex items-center justify-between">
                          <span className="font-bold text-2xl" style={{ color: "#7B8CDE" }}>0</span>
                          <button
                            className="px-5 py-1 rounded-lg text-white text-xs font-medium transition-all hover:opacity-90"
                            style={{ background: "linear-gradient(93.96deg, rgba(147, 150, 237, 0.4) 2.58%, rgba(13, 161, 202, 0.4) 99.26%)" }}
                          >
                            Harvest
                          </button>
                        </div>
                      </div>

                      {/* LP Stacked Badge */}
                      <div className="text-[14px] font-semibold mb-3" style={{ color: "#5C69CC" }}>KEY–BUSD LP STACKED</div>


                      {/* Unlock Wallet Button */}
                      <button className="w-full golden-button text-white rounded-full py-3 font-semibold shadow-lg cursor-pointer">
                        Unlock Wallet
                      </button>
                      {/* Mine Details Button */}
                      <div className="bg-[white] h-[0.8px]" />
                      <button
                        className="w-full py-2.5 flex gap-1 items-center justify-center font-semibold text-lg transition-all hover:opacity-90"
                        style={{
                          background: "transparent",
                          color: "#ffffff",
                        }}
                      >
                        Mine Details <ChevronDown className="w-5 h-5 text-white" />
                      </button>
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
              <div className="flex items-center justify-center gap-4 mb-6">
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
                  className={`px-6 py-2 rounded-full font-medium transition-all ${isStakedOnly
                    ? "text-[#5C69CC] dark:text-blue-400 font-semibold"
                    : "text-gray-600 dark:text-gray-400"
                    }`}
                >
                  Staked Only
                </button>

                {/* Closed Mines Tab */}
                <div className="py-1 px-2 border border-[#0000001A] rounded-full">
                  <button
                    onClick={() => setMineFilter("Closed Mines")}
                    className={`px-6 py-2 rounded-full font-medium transition-all  ${mineFilter === "Closed Mines"
                      ? "bg-gradient-to-r from-blue-400 to-cyan-400 text-white scale-105"
                      : " dark:bg-gray-700 text-[#5C69CC] dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600"
                      }`}
                  >
                    Closed Mines
                  </button>

                  {/* Live Mines Tab */}
                  <button
                    onClick={() => setMineFilter("Live Mines")}
                    className={`px-6 py-2 rounded-full font-medium transition-all  ${mineFilter === "Live Mines"
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
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
                  {minesData.map((mine) => (
                    <div
                      key={mine.id}
                      className="dark:from-gray-800 dark:to-gray-700 rounded-[20px] p-6 shadow-lg relative overflow-hidden mine_live_bg"
                    >
                      {/* Top Left - Icon */}
                      <div className="absolute top-4 left-4 w-36 h-36">
                        <Image src="/images/icon.png" alt="Key" width={100} height={100} className="object-contain" />
                      </div>
                      {/* Top Right - Pair Name & Badge */}
                      <div className="absolute top-4 right-4">
                        <div className="flex flex-col items-end gap-1">
                          <span className="font-bold text-sm" style={{ color: "#5C69CC" }}>{mine.name}</span>
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

                      <div className="space-y-3 mt-16">
                        {/* APR, Stack & Earn */}
                        <div className="space-y-1 mb-4">
                          <div className="flex justify-between text-xs">
                            <span className="font-medium text-lg" style={{ color: "#7B8CDE" }}>APR:</span>
                            <span className="font-bold text-lg" style={{ color: "#5C69CC" }}>{mine.apr}</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="font-medium text-lg" style={{ color: "#7B8CDE" }}>Stack:</span>
                            <span className="font-bold text-lg" style={{ color: "#5C69CC" }}>{mine.staked}</span>
                          </div>
                          <div className="flex justify-between text-xs">
                            <span className="font-medium text-lg" style={{ color: "#7B8CDE" }}>Earn:</span>
                            <span className="font-bold text-lg" style={{ color: "#5C69CC" }}>{mine.earned}</span>
                          </div>
                        </div>

                        {/* Deposit Fee Section */}
                        <div className="mb-3">
                          <div className="flex justify-between items-center mb-1">
                            <span className="font-semibold text-lg block" style={{ color: "#5C69CC" }}>Deposit Fee:</span>
                            <span className="font-bold text-lg block" style={{ color: "#5C69CC" }}>{mine.depositFee}</span>
                          </div>
                        </div>

                        {/* Keys Earned Section */}
                        <div className="mb-3">
                          <div className="text-[16px] font-normal mb-1" style={{ color: "#5C69CC" }}>KEYS EARNED</div>
                          <div className="flex items-center justify-between">
                            <span className="font-bold text-2xl" style={{ color: "#7B8CDE" }}>0</span>
                            <button
                              className="px-5 py-1 rounded-lg text-white text-xs font-medium transition-all hover:opacity-90"
                              style={{ background: "linear-gradient(93.96deg, rgba(147, 150, 237, 0.4) 2.58%, rgba(13, 161, 202, 0.4) 99.26%)" }}
                            >
                              Harvest
                            </button>
                          </div>
                        </div>

                        {/* LP Stacked Badge */}
                        <div className="text-[14px] font-semibold mb-3" style={{ color: "#5C69CC" }}>{mine.name} STACKED</div>

                        {/* Unlock Wallet Button */}
                        <button className="w-full golden-button text-white rounded-full py-3 font-semibold shadow-lg cursor-pointer">
                          Unlock Wallet
                        </button>

                        {/* Mine Details Button */}
                        <div className="bg-[white] h-[0.8px]" />
                        <button
                          className="w-full py-2.5 flex gap-1 items-center justify-center font-semibold text-lg transition-all hover:opacity-90"
                          style={{
                            background: "transparent",
                            color: "#ffffff",
                          }}
                        >
                          Mine Details <ChevronDown className="w-5 h-5 text-white" />
                        </button>
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
                    <div className="flex-1 space-y-3 sm:space-y-4 w-full sm:w-auto sm:px-0 sm:ml-[285px] py-4 sm:py-0">
                      <div className="flex justify-between items-center p-3 bg-[#F7FAFC] dark:bg-gray-700 rounded-lg">
                        <span className="text-sm sm:text-base text-[#5C69CC] dark:text-gray-300 font-inter">Coins in Mine</span>
                        <span className="font-semibold text-[#5C69CC] dark:text-white text-[14px] font-inter">LOCKED</span>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-[#F7FAFC] dark:bg-gray-700 rounded-lg">
                        <span className="text-sm sm:text-base text-[#5C69CC] dark:text-gray-300 font-inter">Coins in Wallet</span>
                        <span className="font-semibold text-[#5C69CC] dark:text-white text-[14px] font-inter">$0.00</span>
                      </div>
                      <div className="text-center">
                        <button className="golden-button text-white rounded-full">Unlock Wallet</button>

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

                      <p className="text-sm text-[#5C69CC] dark:text-gray-400 font-inter mb-1">
                        In Current Layer
                      </p>
                      <h3 className="font-semibold text-[#5C69CC] dark:text-white font-inter text-[25px]">
                        $3,380.14
                      </h3>
                    </div>

                    <div className="pb-2">
                      <p className="text-sm text-[#5C69CC] dark:text-gray-400 font-inter">
                        Across all Layers
                      </p>
                      <h3 className="font-semibold text-[#5C69CC] dark:text-white mb-1 font-inter text-[25px]">
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

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
                  <div>
                    <p className="text-xs sm:text-sm text-[#878787] dark:text-gray-400 mb-1 sm:mb-2">Market Cap</p>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#5C69CC] dark:text-white">
                      $1.2M
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[#878787] dark:text-gray-400 mb-1 sm:mb-2">Total Minted</p>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#5C69CC] dark:text-white">
                      321M
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[#878787] dark:text-gray-400 mb-1 sm:mb-2">Total Burned</p>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#5C69CC] dark:text-white">
                      42M
                    </p>
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm text-[#878787] dark:text-gray-400 mb-1 sm:mb-2">Circulating Supply</p>
                    <p className="text-lg sm:text-xl lg:text-2xl font-bold text-[#5C69CC] dark:text-white">
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
