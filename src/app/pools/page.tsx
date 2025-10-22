"use client";

import AppLayout from "@/components/common/app-layout";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function PoolsPage() {
    const [activeTab, setActiveTab] = useState<"closed" | "live">("closed");
    const [stakedOnly, setStakedOnly] = useState(false);
      const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-8">
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
             <div className="p-1 rounded-full" style={{border: mounted && theme === 'dark' ? '0.8px solid rgba(181, 183, 238, 0.3)' : '0.8px solid #0000001A'}}>
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
      </div>
    </AppLayout>
  );
}
