"use client";

import { ReactNode } from "react";
import Sidebar from "@/components/common/sidebar";
import Header from "@/components/common/header";
import WalletConnectPopup from "@/components/common/wallet-connect-popup";

export default function AppLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="flex h-screen overflow-hidden bg-gray-50 dark:bg-gray-900">
        <Sidebar />
        
        {/* Main Content Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          
          <main className="flex-1 overflow-y-auto overflow-x-hidden">
            {children}
          </main>
        </div>
      </div>

      {/* Global Wallet Connect Popup */}
      <WalletConnectPopup />
    </>
  );
}
