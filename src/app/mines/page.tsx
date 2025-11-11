"use client";

import AppLayout from "@/components/common/app-layout";
import { useState, useEffect } from "react";
import MineCard from "@/components/mines/MineCard";
import { minesData } from "@/components/mines/minesData";
import { useTheme } from "next-themes";

export default function MinesPage() {
  const [activeTab, setActiveTab] = useState<"closed" | "live">("closed");
  const [stakedOnly, setStakedOnly] = useState(false);
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Helper to check if dark mode is active (considering system theme)
  const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark');

  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-8 min-h-screen">
        <div className="max-w-7xl mx-auto">
          {/* Mining Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">
              Mine LP Tokens to Earn Keys
            </h1>

            {/* Tabs */}
            <div className="flex items-center justify-center gap-4 mb-6">
              {/* Staked Only Toggle Switch */}
              <label className="flex items-center gap-3 px-6 py-2 cursor-pointer">
                <div className="relative inline-block w-11 h-6">
                  <input
                    type="checkbox"
                    checked={stakedOnly}
                    onChange={(e) => setStakedOnly(e.target.checked)}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gradient-to-r from-blue-400 to-blue-500 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:rounded-full after:h-5 after:w-5 after:transition-all after:shadow-md"></div>
                </div>
                <span className="text-[#5C69CC] font-semibold">Staked Only</span>
              </label>
             <div className="p-1 rounded-full" style={{border: isDark ? '0.8px solid rgba(181, 183, 238, 0.3)' : '0.8px solid #0000001A'}}>
              {/* Closed Mines Tab */}
              <button
                onClick={() => setActiveTab("closed")}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeTab === "closed"
                    ? "text-white shadow-md"
                    : "bg-transparent text-[#5C69CC] hover:text-[#5C69CC]"
                }`}
                style={activeTab === "closed" ? { background: "linear-gradient(92.59deg, #9396ED 12.25%, #0DA1CA 94.79%)" } : {}}
              >
                Closed Mines
              </button>

              {/* Live Mines Tab */}
              <button
                onClick={() => setActiveTab("live")}
                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                  activeTab === "live"
                    ? "text-white shadow-md"
                    : "bg-transparent text-[#5C69CC] hover:text-[#5C69CC]"
                }`}
                style={activeTab === "live" ? { background: "linear-gradient(92.59deg, #9396ED 12.25%, #0DA1CA 94.79%)" } : {}}
              >
                Live Mines
              </button>
              </div>
            </div>
          </div>

          <div className="h-[0.9px] mb-8" style={{backgroundColor: isDark ? 'rgba(181, 183, 238, 0.3)' : '#D5D5D5'}}/>


          {/* Mining Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-[40px]">
            {minesData.map((mine) => (
              <MineCard key={mine.id} mine={mine} />
            ))}
          </div>
        </div>
      </div>
    </AppLayout>
  );
}
