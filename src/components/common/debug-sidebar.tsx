"use client";

import { useSidebar } from "@/contexts/sidebar-context";

export default function DebugSidebar() {
  const { isOpen, toggleSidebar } = useSidebar();

  return (
    <div className="fixed bottom-4 right-4 bg-yellow-400 text-black p-4 rounded-lg z-[9999] text-sm">
      <div>Sidebar State: {isOpen ? "OPEN" : "CLOSED"}</div>
      <button
        onClick={toggleSidebar}
        className="mt-2 bg-black text-white px-4 py-2 rounded"
      >
        Toggle Debug
      </button>
    </div>
  );
}
