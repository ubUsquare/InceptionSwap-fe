"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="flex items-center gap-2 mt-4 p-2 rounded-lg bg-gray-100 dark:bg-gray-700">
        <div className="w-8 h-8" />
      </div>
    );
  }

  // Use resolvedTheme to get actual theme (handles 'system' preference)
  const currentTheme = resolvedTheme || theme;

  return (
    <div className="flex items-center gap-2 mt-4">
      <button
        onClick={() => setTheme("light")}
        className={`p-2 rounded-lg transition-all ${
          currentTheme === "light"
            ? "bg-black dark:bg-white text-white dark:text-black"
            : "bg-transparent text-gray-400 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400"
        }`}
        aria-label="Light mode"
      >
        <Sun size={20} />
      </button>
      
      <span className="text-gray-400 dark:text-gray-600">/</span>
      
      <button
        onClick={() => setTheme("dark")}
        className={`p-2 rounded-lg transition-all ${
          currentTheme === "dark"
            ? "bg-black dark:bg-white text-white dark:text-black"
            : "bg-transparent text-gray-400 hover:text-gray-600 dark:text-gray-600 dark:hover:text-gray-400"
        }`}
        aria-label="Dark mode"
      >
        <Moon size={20} />
      </button>
    </div>
  );
}
