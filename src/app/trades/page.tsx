"use client";

import AppLayout from "@/components/common/app-layout";
import Image from "next/image";
import { useState } from "react";

// Dummy token list
const tokens = [
  { symbol: "BNB", name: "Binance Coin", icon: "🔸" },
  { symbol: "ETH", name: "Ethereum", icon: "💎" },
  { symbol: "USDT", name: "Tether USD", icon: "💵" },
  { symbol: "USDC", name: "USD Coin", icon: "💰" },
  { symbol: "BUSD", name: "Binance USD", icon: "💲" },
  { symbol: "BTC", name: "Bitcoin", icon: "₿" },
  { symbol: "ADA", name: "Cardano", icon: "🔷" },
  { symbol: "DOT", name: "Polkadot", icon: "🔴" },
];

export default function TradesPage() {
  const [activeTab, setActiveTab] = useState<"swap" | "liquidity" | "bridge">("swap");
  const [fromToken, setFromToken] = useState(tokens[0]);
  const [toToken, setToToken] = useState<typeof tokens[0] | null>(null);
  const [showFromDropdown, setShowFromDropdown] = useState(false);
  const [showToDropdown, setShowToDropdown] = useState(false);
  const [fromAmount, setFromAmount] = useState("");
  const [toAmount, setToAmount] = useState("");
  const [showSettings, setShowSettings] = useState(false);
  const [slippageTolerance, setSlippageTolerance] = useState("0.1");
  const [transactionDeadline, setTransactionDeadline] = useState("0.1");

  const handleFromTokenSelect = (token: typeof tokens[0]) => {
    setFromToken(token);
    setShowFromDropdown(false);
  };

  const handleToTokenSelect = (token: typeof tokens[0]) => {
    setToToken(token);
    setShowToDropdown(false);
  };

  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-8 relative">
        {/* <Image src={'/images/com.png'} alt="Background" layout="fill" objectFit="cover" className="absolute inset-0  left-0 bottom-0 w-full h-full max-w-[300px] max-h-[200px]" /> */}
        
        {/* Settings Modal */}
        {showSettings && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setShowSettings(false)}>
            <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-md w-full shadow-2xl" onClick={(e) => e.stopPropagation()}>
              {/* Header */}
              <div className="flex items-center justify-between mb-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white font-roboto">Settings</h3>
                <button 
                  onClick={() => setShowSettings(false)}
                  className="p-1 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all"
                >
                  <svg className="w-5 h-5 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-inter">Trade tokens in an instant</p>

              {/* Slippage Tolerance */}
              <div className="mb-6">
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block font-roboto">
                  Select Slippage tolerance
                </label>
                <div className="flex gap-3">
                  <button
                    onClick={() => setSlippageTolerance("0.1")}
                    className={`flex-1 py-2.5 rounded-xl font-semibold transition-all font-roboto ${
                      slippageTolerance === "0.1"
                        ? "bg-[#6B7FED] text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    0.1%
                  </button>
                  <button
                    onClick={() => setSlippageTolerance("0.5")}
                    className={`flex-1 py-2.5 rounded-xl font-semibold transition-all font-roboto ${
                      slippageTolerance === "0.5"
                        ? "bg-[#6B7FED] text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    0.5%
                  </button>
                  <button
                    onClick={() => setSlippageTolerance("1")}
                    className={`flex-1 py-2.5 rounded-xl font-semibold transition-all font-roboto ${
                      slippageTolerance === "1"
                        ? "bg-[#6B7FED] text-white"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"
                    }`}
                  >
                    1%
                  </button>
                </div>
              </div>

              {/* Transaction Deadline */}
              <div>
                <label className="text-sm font-medium text-gray-700 dark:text-gray-300 mb-3 block font-roboto">
                  Transaction deadline
                </label>
                <div className="flex items-center gap-3">
                  <input
                    type="text"
                    value={transactionDeadline}
                    onChange={(e) => setTransactionDeadline(e.target.value)}
                    className="flex-1 bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white px-4 py-2.5 rounded-xl outline-none focus:ring-2 focus:ring-[#6B7FED] font-roboto font-semibold"
                  />
                  <span className="text-[#6B7FED] dark:text-[#8B9BFF] font-medium font-inter">Minutes</span>
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="max-w-2xl mx-auto">
          {/* Tab Navigation */}
          <div className="flex justify-between gap-2 sm:gap-4 mb-6 sm:mb-8 overflow-x-auto max-w-[400px] m-auto p-2 rounded-full border">
            <button 
              onClick={() => setActiveTab("swap")}
              className={`px-6 py-2.5 rounded-full font-semibold whitespace-nowrap text-sm sm:text-base transition-all font-roboto ${
                activeTab === "swap" 
                  ? "text-white" 
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
              style={activeTab === "swap" ? {background: "linear-gradient(93.96deg, #9396ED 2.58%, #0DA1CA 99.26%)"} : {}}
            >
              Swap
            </button>
            <button 
              onClick={() => setActiveTab("liquidity")}
              className={`px-6 py-2.5 rounded-full font-semibold whitespace-nowrap text-sm sm:text-base transition-all font-roboto ${
                activeTab === "liquidity" 
                  ? "text-white" 
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
              style={activeTab === "liquidity" ? {background: "linear-gradient(93.96deg, #9396ED 2.58%, #0DA1CA 99.26%)"} : {}}
            >
              Liquidity
            </button>
            <button 
              onClick={() => setActiveTab("bridge")}
              className={`px-6 py-2.5 rounded-full font-semibold whitespace-nowrap text-sm sm:text-base transition-all font-roboto ${
                activeTab === "bridge" 
                  ? "text-white" 
                  : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              }`}
              style={activeTab === "bridge" ? {background: "linear-gradient(93.96deg, #9396ED 2.58%, #0DA1CA 99.26%)"} : {}}
            >
              Bridge
            </button>
          </div>

          {/* Tab Content */}
          {activeTab === "swap" && (
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-xl">
            <div className="flex items-start justify-between mb-6">
              <div>
                <h2 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white font-roboto">
                  Exchange
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 font-inter">
                  Trade tokens in an instant
                </p>
              </div>
              <div className="flex items-center gap-2">
                <button 
                  onClick={() => setShowSettings(true)}
                  className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all"
                >
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </button>
                <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all">
                  <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                  </svg>
                </button>
              </div>
            </div>

            {/* From Token */}
            <div className="mb-2">
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-4">
                <div className="flex justify-between items-center gap-3">
                  <input
                    type="text"
                    value={fromAmount}
                    onChange={(e) => setFromAmount(e.target.value)}
                    placeholder="0.00"
                    className="bg-transparent text-3xl font-semibold outline-none text-gray-900 dark:text-white w-full font-roboto"
                  />
                  <div className="relative">
                    <button
                      onClick={() => setShowFromDropdown(!showFromDropdown)}
                      className="flex items-center gap-2 bg-white dark:bg-gray-600 px-4 py-2.5 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-500 transition-all shadow-sm min-w-[130px] justify-between font-roboto"
                    >
                      <div className="flex items-center gap-2">
                        <span className="text-2xl">{fromToken.icon}</span>
                        <span className="text-gray-900 dark:text-white">{fromToken.symbol}</span>
                      </div>
                      <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    
                    {/* From Token Dropdown */}
                    {showFromDropdown && (
                      <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-700 rounded-xl shadow-2xl z-50 max-h-80 overflow-y-auto border border-gray-200 dark:border-gray-600">
                        <div className="p-2">
                          {tokens.map((token) => (
                            <button
                              key={token.symbol}
                              onClick={() => handleFromTokenSelect(token)}
                              className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-all"
                            >
                              <span className="text-2xl">{token.icon}</span>
                              <div className="text-left">
                                <div className="font-semibold text-gray-900 dark:text-white font-roboto">{token.symbol}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 font-inter">{token.name}</div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Swap Arrow */}
            <div className="flex justify-center my-2">
              <button className="bg-gray-100 dark:bg-gray-700 p-2.5 rounded-xl hover:bg-gray-200 dark:hover:bg-gray-600 transition-all">
                <svg
                  className="w-5 h-5 text-gray-600 dark:text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </button>
            </div>

            {/* To Token */}
            <div className="mb-6">
              <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-4">
                <div className="flex justify-between items-center gap-3">
                  <input
                    type="text"
                    value={toAmount}
                    onChange={(e) => setToAmount(e.target.value)}
                    placeholder="0.00"
                    className="bg-transparent text-3xl font-semibold outline-none text-gray-900 dark:text-white w-full font-roboto"
                  />
                  <div className="relative">
                    <button
                      onClick={() => setShowToDropdown(!showToDropdown)}
                      className="flex items-center gap-2 bg-white dark:bg-gray-600 px-4 py-2.5 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-500 transition-all shadow-sm min-w-[180px] justify-between font-roboto"
                    >
                      <span className="text-gray-900 dark:text-white text-nowrap">
                        {toToken ? (
                          <div className="flex items-center gap-2">
                            <span className="text-2xl">{toToken.icon}</span>
                            <span>{toToken.symbol}</span>
                          </div>
                        ) : (
                          "Select a currency"
                        )}
                      </span>
                      <svg className="w-4 h-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>

                    {/* To Token Dropdown */}
                    {showToDropdown && (
                      <div className="absolute right-0 mt-2 w-64 bg-white dark:bg-gray-700 rounded-xl shadow-2xl z-50 max-h-80 overflow-y-auto border border-gray-200 dark:border-gray-600">
                        <div className="p-2">
                          {tokens.filter(t => t.symbol !== fromToken.symbol).map((token) => (
                            <button
                              key={token.symbol}
                              onClick={() => handleToTokenSelect(token)}
                              className="w-full flex items-center gap-3 p-3 hover:bg-gray-100 dark:hover:bg-gray-600 rounded-lg transition-all"
                            >
                              <span className="text-2xl">{token.icon}</span>
                              <div className="text-left">
                                <div className="font-semibold text-gray-900 dark:text-white font-roboto">{token.symbol}</div>
                                <div className="text-xs text-gray-500 dark:text-gray-400 font-inter">{token.name}</div>
                              </div>
                            </button>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Unlock Wallet Button */}
            <button className="w-full text-white font-semibold py-4 rounded-2xl transition-all text-base shadow-lg hover:shadow-xl font-roboto" style={{background: "linear-gradient(93.96deg, #9396ED 2.58%, #0DA1CA 99.26%)"}}>
              Unlock Wallet
            </button>
          </div>
          )}

          {/* Liquidity Tab */}
          {activeTab === "liquidity" && (
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-xl">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h2 className="text-2xl font-bold mb-1 text-[#6B7FED] dark:text-[#6B7FED] font-roboto">
                    Liquidity
                  </h2>
                  <p className="text-sm text-[#6B7FED] dark:text-[#6B7FED] font-inter">
                    Add liquidity to receive LP tokens
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button 
                    onClick={() => setShowSettings(true)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all"
                  >
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-all">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Add Liquidity Button */}
              <button className="w-full text-white font-semibold py-4 rounded-full transition-all text-base shadow-lg hover:shadow-xl font-roboto mb-8" style={{background: "linear-gradient(93.96deg, #9396ED 2.58%, #0DA1CA 99.26%)"}}>
                Add Liquidity
              </button>

              {/* Your Liquidity Section */}
              <div className="mb-6">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold text-[#6B7FED] dark:text-[#6B7FED] font-roboto">
                    Your Liquidity
                  </h3>
                  <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-all">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </button>
                </div>

                {/* Connect Wallet Message */}
                <div className="text-center py-8">
                  <button className="w-full max-w-xl mx-auto text-white font-medium py-4 px-8 rounded-full transition-all text-base shadow-lg hover:shadow-xl font-roboto mb-4" style={{background: "linear-gradient(93.96deg, #9396ED 2.58%, #0DA1CA 99.26%)"}}>
                    Connect to a wallet to view your liquidity.
                  </button>
                  <p className="text-sm text-[#6B7FED] dark:text-[#6B7FED] font-inter">
                    Or, if you staked your LP tokens in a farm, unstake them to see them here.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Bridge Tab */}
          {activeTab === "bridge" && (
            <div className="bg-white dark:bg-gray-800 rounded-3xl p-6 sm:p-8 shadow-xl">
              <h2 className="text-2xl font-bold mb-1 text-gray-900 dark:text-white font-roboto">
                Bridge Assets
              </h2>
              {/* <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-inter">
                Transfer tokens across different blockchains
              </p>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="text-xs text-gray-500 dark:text-gray-400 mb-2 block font-inter">From Network</label>
                  <button className="w-full flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">⚡</span>
                      <span className="font-semibold text-gray-900 dark:text-white font-roboto">Binance Smart Chain</span>
                    </div>
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>

                <div className="bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-4">
                  <label className="text-xs text-gray-500 dark:text-gray-400 mb-2 block font-inter">Amount</label>
                  <div className="flex justify-between items-center gap-3">
                    <input
                      type="text"
                      placeholder="0.00"
                      className="bg-transparent text-3xl font-semibold outline-none text-gray-900 dark:text-white w-full font-roboto"
                    />
                    <button className="flex items-center gap-2 bg-white dark:bg-gray-600 px-4 py-2.5 rounded-xl font-semibold hover:bg-gray-100 dark:hover:bg-gray-500 transition-all shadow-sm font-roboto">
                      <span className="text-2xl">🔸</span>
                      <span className="text-gray-900 dark:text-white">BNB</span>
                    </button>
                  </div>
                </div>

                <div className="flex justify-center">
                  <div className="bg-gray-100 dark:bg-gray-700 p-2.5 rounded-xl">
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                    </svg>
                  </div>
                </div>

                <div>
                  <label className="text-xs text-gray-500 dark:text-gray-400 mb-2 block font-inter">To Network</label>
                  <button className="w-full flex items-center justify-between bg-gray-50 dark:bg-gray-700/50 rounded-2xl p-4 hover:bg-gray-100 dark:hover:bg-gray-700 transition-all">
                    <div className="flex items-center gap-3">
                      <span className="text-2xl">💎</span>
                      <span className="font-semibold text-gray-900 dark:text-white font-roboto">Ethereum Mainnet</span>
                    </div>
                    <svg className="w-5 h-5 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-xl p-4 mb-6">
                <div className="flex justify-between mb-2">
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-inter">Bridge Fee:</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white font-roboto">0.1%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-gray-600 dark:text-gray-400 font-inter">Estimated Time:</span>
                  <span className="text-sm font-semibold text-gray-900 dark:text-white font-roboto">~5 minutes</span>
                </div>
              </div>

              <button className="w-full text-white font-semibold py-4 rounded-2xl transition-all text-base shadow-lg hover:shadow-xl font-roboto" style={{background: "linear-gradient(93.96deg, #9396ED 2.58%, #0DA1CA 99.26%)"}}>
                Bridge Assets
              </button> */}
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
