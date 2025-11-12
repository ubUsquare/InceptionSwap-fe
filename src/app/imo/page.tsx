"use client";

import AppLayout from "@/components/common/app-layout";
import Image from "next/image";
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

export default function IMOPage() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<"next" | "past">("next");
  const [showDetails, setShowDetails] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Background image based on theme (use resolvedTheme for system theme support)
  const bgImage = mounted && (theme === 'dark' || resolvedTheme === 'dark') ? 'url(/images/dark_key.png)' : 'url(/images/second.png)';

  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-8 max-w-7xl mx-auto">
        {/* Header Section */}
           <section className="mb-6 lg:mb-6 bg-white dark:bg-gray-800 rounded-xl p-4 sm:p-6 lg:p-8 shadow-sm"
            style={{ backgroundImage: bgImage, backgroundPosition: 'center', backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>

            <h1 className="text-xl sm:text-2xl mb-2 lg:text-[30px] gradient-text2 font-semibold">  IMO: Initial Mining Offerings</h1>
            <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base lg:text-lg font-roboto">
            Overflow Method: IMO does not end at 100%. Stake more = get more rewards. The leftover funds will be returned after the sale ends.
            </p>

             {/* Tabs */}
          <div className="flex justify-self-center gap-2 mt-4 py-2 px-2 border border-gray-300 dark:border-gray-700 rounded-full">
            <button
              onClick={() => setActiveTab("next")}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base transition-all ${
                activeTab === "next"
                  ? "bg-gradient-to-r from-[rgb(147,150,237)] to-[rgb(13,161,202)] text-white shadow-lg "
                  : " dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r from-[rgb(147,150,237)] to-[rgb(13,161,202)] dark:hover:bg-gray-600"
              }`}
            >
              Next IMO
            </button>
            <button
              onClick={() => setActiveTab("past")}
              className={`px-4 sm:px-6 py-2 rounded-full font-medium text-sm sm:text-base transition-all ${
                activeTab === "past"
                  ? "bg-gradient-to-r from-[rgb(147,150,237)] to-[rgb(13,161,202)] text-white shadow-lg"
                  : " dark:bg-gray-700 text-gray-600 dark:text-gray-300 hover:bg-gradient-to-r from-[rgb(147,150,237)] to-[rgb(13,161,202)] dark:hover:bg-gray-600"
              }`}
            >
              Past IMOs
            </button>
          </div>
          </section>

        {activeTab === "next" ? (
          <>
            {/* Typhoon Card */}
            <div className="max-w-md mx-auto mb-8">
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl overflow-hidden">
                {/* Dark Header */}
                <div>
                  <Image src="/images/typhoon_bg.png" alt="Typhoon" width={300} height={100} className="w-full h-full object-cover" />
                </div>

                {/* Card Content */}
                <div className="p-6">
                  {/* Icon and Title */}
                  <div className="flex justify-between items-center gap-3 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center">
                     <Image src="/images/typhoon_icon.png" alt="Typhoon Icon" width={40} height={40} className="w-10 h-10" />
                    </div>
                    <div className="text-right"> 
                      <h3 className="text-[#5C69CC] dark:text-[#8B9BFF] text-lg font-bold">
                        Typhoon
                      </h3>
                      <p className="text-[#9396ED] dark:text-[#8B9BFF] text-xs">
                        A zero-knowledge protocol to send <br /> private transactions
                      </p>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3 mb-2 overflow-hidden">
                      <div className="bg-[#9396ED] h-full w-full rounded-full"></div>
                    </div>
                    <p className="text-center text-sm font-semibold text-[#5C69CC] dark:text-gray-300">
                      Finished !
                    </p>
                  </div>

                  {/* Unlock Wallet Button */}
                  <button className="w-full  text-white py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all mb-4" style={{background:" linear-gradient(92.59deg, rgb(147, 150, 237) 12.25%, rgb(13, 161, 202) 94.79%)"}}>
                    Unlock Wallet
                  </button>

                  {/* Show/Hide Toggle */}
                  <button
                    onClick={() => setShowDetails(!showDetails)}
                    className="w-full text-center text-gray-500 dark:text-gray-400 text-sm font-medium mb-3 hover:text-gray-700 dark:hover:text-gray-300 transition-colors"
                  >
                    {showDetails ? "Hide" : "Show"}
                  </button>

                  {/* Details Section */}
                  {showDetails && (
                    <div className="space-y-2 text-sm border-t border-gray-200 dark:border-gray-700 pt-4">
                      <p className="text-[#9396ED] mb-2 text-center">Typhoon is a zero-knowledge protocol that enables users to send private transactions between 2 BSC wallets by utilizing zkSNARK-based cryptography. By using Typhoon to transfer funds, it is no longer possible to determine who sent the transaction in the first place, thus providing anonymity and privacy ontop of an otherwise public blockchain.</p>

                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Launch Time:</span>
                        <span className="text-gray-900 dark:text-white font-medium">
                          Mar. 26, 8PM UTC
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">For Sale:</span>
                        <span className="text-gray-900 dark:text-white font-medium">
                          4,000,000 TYPH
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">To raise (USD):</span>
                        <span className="text-gray-900 dark:text-white font-medium">
                          $2,000,000
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">EGG to burn (USD):</span>
                        <span className="text-gray-900 dark:text-white font-medium">
                          $1,000,000
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600 dark:text-gray-400">Total raised (% of target):</span>
                        <span className="text-gray-900 dark:text-white font-medium">
                          415.26%
                        </span>
                      </div>
                      <div className="pt-2">
                        <Link
                          href="#"
                          className="text-[#6B7CFF] dark:text-[#8B9BFF] text-xs hover:underline text-center block"
                        >
                          View project site
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Bottom Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              {/* Left: How to take part */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md">
                <h3 className="text-[#6B7CFF] dark:text-[#8B9BFF] text-xl font-bold mb-4">
                  How to take part
                </h3>

                <div className="space-y-4">
                  {/* Before Sale */}
                  <div>
                    <h4 className="text-[#6B7CFF] dark:text-[#8B9BFF] font-semibold mb-2">
                      Before Sale:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-[#6B7CFF] dark:text-[#8B9BFF]">
                      <li>Buy EGG and BUSD tokens</li>
                      <li>
                        Get EGG-BUSD LP tokens by adding EGG and BUSD liquidity
                      </li>
                    </ul>
                    <div className="flex gap-3 mt-2">
                      <a
                        href="#"
                        className="text-[#6B7CFF] dark:text-[#8B9BFF] text-sm font-medium hover:underline"
                      >
                        Buy EGG
                      </a>
                      <a
                        href="#"
                        className="text-[#6B7CFF] dark:text-[#8B9BFF] text-sm font-medium hover:underline"
                      >
                        Get LP tokens
                      </a>
                    </div>
                  </div>

                  {/* During Sale */}
                  <div>
                    <h4 className="text-[#6B7CFF] dark:text-[#8B9BFF] font-semibold mb-2">
                      During Sale:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-[#6B7CFF] dark:text-[#8B9BFF]">
                      <li>
                        While the sale is live, commit your EGG-LP tokens to buy the IFO tokens
                      </li>
                    </ul>
                  </div>

                  {/* After Sale */}
                  <div>
                    <h4 className="text-[#6B7CFF] dark:text-[#8B9BFF] font-semibold mb-2">
                      After Sale:
                    </h4>
                    <ul className="list-disc list-inside space-y-1 text-sm text-[#6B7CFF] dark:text-[#8B9BFF]">
                      <li>Claim the tokens you purchased, along with any unspent funds.</li>
                      <li>
                        Token will be distributed in an "Overflow Method". Press Read More to
                        learn more about it.
                      </li>
                    </ul>
                  </div>

                  <button className="text-[#6B7CFF] dark:text-[#8B9BFF] font-semibold text-sm hover:underline mt-2">
                    Read more
                  </button>
                </div>
              </div>

              {/* Right: Want to launch */}
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md flex flex-col items-center justify-center text-center">
                <h3 className="text-[#6B7CFF] dark:text-[#8B9BFF] text-xl font-bold mb-6">
                  Want to launch your own IFO?
                </h3>
                <button className=" text-white px-8 py-3 rounded-full font-semibold text-base shadow-lg hover:shadow-xl transition-all" style={{background:" linear-gradient(92.59deg, rgb(147, 150, 237) 12.25%, rgb(13, 161, 202) 94.79%)"}}>
                  Apply to Launch
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="text-center py-20">
            <p className="text-gray-400 dark:text-gray-500 text-lg">
              No past IMOs available
            </p>
          </div>
        )}
      </div>
    </AppLayout>
  );
}
