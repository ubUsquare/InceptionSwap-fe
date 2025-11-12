import { ChevronDown } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export interface MineData {
  id: number;
  pairName: string;
  pairIcons: string[];
  badge?: string;
  apr: string;
  stack: string;
  earn: string;
  depositFee: string;
  keysEarned: number;
  lpStacked: string;
  noFees?: boolean;
  deposit: string;
  totalValue: string;
  earnValue: string;
}

interface MineCardProps {
  mine: MineData;
}

export default function MineCard({ mine }: MineCardProps) {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);  
  const [isExpanded, setIsExpanded] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  // Helper to check if dark mode is active (considering system theme)
  const isDark = mounted && (theme === 'dark' || resolvedTheme === 'dark');

  // Define styles for dark mode and light mode
  const textColor = isDark ? '#B5B7EE' : '#5C69CC';
  const labelColor = isDark ? '#B5B7EE' : '#7B8CDE';
  const bgImage = isDark ? `url('/images/minecards-dark.png')` : `url('/images/minecards.png')`;
  
  return (
    <div
      className="rounded-3xl p-6"
      style={{
        backgroundImage: bgImage,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        border: '1px solid #5C69CC80',
        boxShadow: '0px 7px 10px 0px #9396EDB2',
      }}
    >
      {/* Header with Icons and Pair Name */}
      <div className="flex items-start justify-between mb-4">
        {/* Left side - Pair Icons */}
        <div className="flex-shrink-0">
          <Image 
            src={mine.pairIcons[0]} 
            alt="Pair Icon" 
            width={50} 
            height={50} 
            className="object-contain" 
          />
        </div>
        
        {/* Right side - Pair Name and Badges */}
        <div className="flex flex-col items-end gap-1">
        <span className="font-bold text-sm" style={{ color: textColor }}>{mine.pairName}</span>

          <div className="flex items-center gap-2">
             {mine.noFees && (
            <span className="text-[#4CAF50] text-[10px] px-2 py-0.5 rounded-full font-medium">
              <Image src="/images/tick-circle.png" alt="No Fees" width={12} height={12} className="inline-block mr-1" />
              No fees
            </span>
          )}
          {mine.badge && (
              <span className="text-white text-[10px] px-2 py-0.5 rounded-full font-bold" style={{background: "linear-gradient(100.78deg, #5C69CC 12.11%, #13A1CB 96.61%)"}}>
                {mine.badge}
              </span>
            )}
          </div>
         
        </div>
      </div>

      {/* Stats */}
      <div className="space-y-1 mb-4">
        <div className="flex justify-between text-xs">
          <span className="font-medium" style={{ color: labelColor }}>APR:</span>
          <span className="font-bold" style={{ color: textColor }}>{mine.apr}</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="font-medium" style={{ color: labelColor }}>Stack:</span>
          <span className="font-bold" style={{ color: textColor }}>{mine.stack}</span>
        </div>
        <div className="flex justify-between text-xs">
          <span className="font-medium" style={{ color: labelColor }}>Earn:</span>
          <span className="font-bold" style={{ color: textColor }}>{mine.earn}</span>
        </div>
      </div>

      {/* Deposit Fee Section */}
      <div className="mb-3">
        <div className="flex justify-between items-center mb-1">
          <span className="font-semibold text-md" style={{ color: textColor }}>Deposit Fee:</span>
          <span className="font-bold text-xl" style={{ color: textColor }}>{mine.depositFee}</span>
        </div>
      </div>

      {/* Keys Earned Section */}
      <div className="mb-3">
        <div className="text-[12px] font-semibold mb-1" style={{ color: textColor }}>KEYS EARNED</div>
        <div className="flex items-center justify-between">
          <span className="font-bold text-2xl" style={{ color: labelColor }}>{mine.keysEarned}</span>
          <button
            className="px-5 py-1 rounded-lg text-white text-xs font-medium transition-all hover:opacity-90"
            style={{ background: "linear-gradient(93.96deg, rgba(147, 150, 237, 0.4) 2.58%, rgba(13, 161, 202, 0.4) 99.26%)" }}
          >
            Harvest
          </button>
        </div>
      </div>

      {/* LP Stacked Info */}
      <div className="text-[14px] font-semibold mb-3" style={{ color: textColor }}>{mine.lpStacked}</div>

      {/* Action Buttons */}
      <div className="space-y-2">
        <button
          className="w-full py-2.5 rounded-full text-white font-semibold text-sm shadow-md transition-all hover:shadow-lg mb-2"
          style={{ background: "linear-gradient(91.17deg, #9396ED 5.58%, #0DA1CA 97.86%)" }}
        >
          Unlock Wallet
        </button>
        <div className="bg-[white] h-[0.8px]" />
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full py-2.5 flex gap-1 items-center justify-center font-semibold text-sm transition-all hover:opacity-90"
          style={{
            background: "transparent",
            color: textColor,
          }}
        >
          {isExpanded ? 'Show less' : 'Mine Details'} 
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}/>
        </button>
      </div>

      {/* Expanded Details Section */}
      {isExpanded && (
        <div className="mt-4 space-y-3 pt-4 border-t" style={{ borderColor: isDark ? 'rgba(181, 183, 238, 0.3)' : 'rgba(92, 105, 204, 0.3)' }}>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium" style={{ color: labelColor }}>Deposit:</span>
            <span className="text-sm font-bold flex items-center gap-1" style={{ color: textColor }}>
              {mine.deposit}
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium" style={{ color: labelColor }}>Total Value:</span>
            <span className="text-sm font-bold" style={{ color: textColor }}>{mine.totalValue}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm font-medium" style={{ color: labelColor }}>Earn:</span>
            <span className="text-sm font-bold" style={{ color: textColor }}>{mine.earnValue}</span>
          </div>
          <button 
            className="w-full rounded-lg py-2 font-medium text-sm transition-all"
            style={{ 
              background: isDark ? 'rgba(181, 183, 238, 0.1)' : 'rgba(92, 105, 204, 0.1)',
              color: textColor 
            }}
          >
            View on BscScan
          </button>
        </div>
      )}
    </div>
  );
}
