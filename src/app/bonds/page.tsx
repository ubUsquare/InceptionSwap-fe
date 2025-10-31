"use client";

import AppLayout from "@/components/common/app-layout";
import { useState } from "react";

export default function BondsPage() {
  const [activeTab, setActiveTab] = useState("buy-sell");

  return (
    <AppLayout>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4 sm:p-6 lg:p-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-blue-400 mb-4">
              Inception Stability Protocol
            </h1>
            
            {/* Tab Navigation */}
            <div className="flex justify-center mb-6">
              <div className="flex bg-white dark:bg-gray-800 rounded-full p-1 shadow-sm">
                <button
                  onClick={() => setActiveTab("buy-sell")}
                  className={`px-6 py-2 rounded-full text-lg font-bold transition-colors ${
                    activeTab === "buy-sell"
                      ? "bg-blue-100 text-white dark:bg-blue-900 dark:text-blue-300"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200 "
                  }`}
                  style={
                activeTab === "buy-sell"
                  ? {
                      background:
                        "linear-gradient(92.59deg, #9396ED 12.25%, #0DA1CA 94.79%)",
                    }
                  : {}
              }
                >
                  Buy/Sell
                </button>
                <button
                  onClick={() => setActiveTab("dividends")}
                  className={`px-6 py-2 rounded-full text-lg font-bold transition-colors ${
                    activeTab === "dividends"
                      ? "bg-blue-100 text-white dark:bg-blue-900 dark:text-blue-300"
                      : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"
                  }`}
                     style={
                activeTab === "dividends"
                  ? {
                      background:
                        "linear-gradient(92.59deg, #9396ED 12.25%, #0DA1CA 94.79%)",
                    }
                  : {}
              }
                >
                  Dividends
                </button>
              </div>
            </div>

            {/* Tab Content Description */}
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-8">
              {activeTab === "buy-sell" && (
                <>
                  Version: Engage with the Inception Stability Protocol to share in network growth.
                  <br />
                  Capital secured will reinforce INCEP-Stable.
                </>
              )}
              {activeTab === "dividends" && (
                "Stake KEYS to earn BUSD and new tokens"
              )}
            </div>
          </div>

          {/* Main Content */}
          {activeTab === "buy-sell" ? (
            <div className="space-y-6">
              {/* ISV Card */}
              <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 shadow-sm">
                <div className="text-center mb-6">
                  <h2 className="text-xl font-semibold text-blue-400 mb-4">
                    Inception Stability Vouchers (ISV)
                  </h2>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mb-6">
                    Invest
                  </div>
                  
                  {/* Unlock Wallet Button */}
                  <button className="w-full max-w-xs mx-auto  text-white font-medium py-3 px-6 rounded-full hover:from-blue-600 hover:to-teal-500 transition-all duration-200 shadow-lg hover:shadow-xl"
                   style={{background:
                        "linear-gradient(92.59deg, #9396ED 12.25%, #0DA1CA 94.79%)",}}
                  >
                    Unlock Wallet
                  </button>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mt-8">
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">You Own:</div>
                    <div className="text-lg font-medium text-gray-900 dark:text-white">0.00 ISV</div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Redeemable Quota:</div>
                    <div className="text-lg font-medium text-gray-900 dark:text-white">0.00 ISV</div>
                  </div>
                </div>
              </div>

              {/* Protocol Advisory */}
              <div className="dark:bg-blue-900/20 text-center p-6">
                <h3 className="text-lg font-semibold text-blue-600 dark:text-blue-400 mb-3">
                  PROTOCOL ADVISORY:
                </h3>
                <p className="text-sm text-blue-700 dark:text-blue-300 leading-relaxed">
                  Inception Stability Vouchers (ISV) are used to back INCEP-Stable. If the 
                  protocol's INCEP-Stable reserves are fully utilized, voucher redemption 
                  will be paused until new capital replenishes the treasury.
                </p>
              </div>
            </div>
          ) : (
            // Dividends Tab Content
            <div className="text-center py-12">
              <div className="text-gray-500 dark:text-gray-400">
                Dividends interface will be available soon
              </div>
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  );
}
