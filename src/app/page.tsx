"use client";

import AppLayout from "@/components/common/app-layout";
import Image from "next/image";

export default function Home() {
  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-6">
        {/* Hero Section */}
        <section className="mb-6 lg:mb-6 bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 lg:p-8 shadow-sm"
        style={{ backgroundImage: 'url(/images/first.png)', backgroundPosition:'center', backgroundSize:'cover', backgroundRepeat:'no-repeat' }}>

          <Image
            src="/images/inp_home.png"
            alt="Inception Swap Logo"
            width={287}
            height={42}
            className="mb-4"
          />
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg font-roboto">
            The top DeFi app on Binance Smart Chain.
          </p>
        </section>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-6">
          {/* Mining & Pooling Section */}
          <section className="bg-white dark:bg-gray-800 rounded-lg pt-4 px-4 shadow-sm lg:col-span-2">
            <h2 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 text-gray-900 dark:text-white font-roboto">
              Mining & Pooling
            </h2>

            <div className="min-h-[235px] flex flex-col sm:flex-row items-center justify-between relative overflow-hidden" 
            style={{ backgroundImage: 'url(/images/lock_bg1.png)', backgroundPosition:'bottom left', backgroundSize:'contain', backgroundRepeat:'no-repeat' }}>
              {/* Mobile: Stack vertically, Desktop: Push content right */}
              <div className="flex-1 space-y-3 sm:space-y-4 w-full sm:w-auto sm:px-0 sm:ml-[285px] py-4 sm:py-0">
                <div className="flex justify-between items-center p-3 bg-[#F7FAFC] dark:bg-gray-700 rounded-lg">
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-inter">Coins in Mine</span>
                  <span className="font-semibold text-gray-900 dark:text-white text-[14px] font-inter">LOCKED</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-[#F7FAFC] dark:bg-gray-700 rounded-lg">
                  <span className="text-sm sm:text-base text-gray-600 dark:text-gray-300 font-inter">Coins in Wallet</span>
                  <span className="font-semibold text-gray-900 dark:text-white text-[14px] font-inter">$0.00</span>
                </div>
              </div>
            </div>
          </section>

          {/* Announcements Section */}
          <section className="bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm lg:col-span-1">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white font-roboto">
              Announcements
            </h2>
            <div className="space-y-2">
              <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 font-inter">
                  New Mine: BNB-12
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-inter">
                  Earn upto 150% APR! Start mining now.
                </p>
              </div>

              <div className="border-b border-gray-200 dark:border-gray-700 pb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 font-inter">
                  Inception AMA Session
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-inter">
                  Catch us live on Youtube for AMA.
                </p>
              </div>

              <div className="pb-2">
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1 font-inter">
                  Enhanced security update
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 font-inter">
                  New update that increased security.
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Mining Stats */}
        <section className="mt-6 sm:mt-6 bg-white dark:bg-gray-800 rounded-lg p-4 sm:p-6 shadow-sm">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-gray-900 dark:text-white">
            Mining Stats
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
            <div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1 sm:mb-2">Market Cap</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                $1.2M
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1 sm:mb-2">Total Minted</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                321M
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1 sm:mb-2">Total Burned</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                42M
              </p>
            </div>
            <div>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-1 sm:mb-2">Circulating Supply</p>
              <p className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 dark:text-white">
                123M
              </p>
            </div>
          </div>
        </section>
      </div>
    </AppLayout>
  );
}
