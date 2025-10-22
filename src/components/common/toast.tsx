"use client";

import { useEffect } from "react";
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from "lucide-react";

export interface ToastProps {
  id: string;
  message: string;
  type?: "success" | "error" | "info" | "warning";
  duration?: number;
  onClose: (id: string) => void;
}

export default function Toast({ id, message, type = "info", duration = 5000, onClose }: ToastProps) {
  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        onClose(id);
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [id, duration, onClose]);

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />,
    error: <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />,
    warning: <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400" />,
    info: <Info className="w-5 h-5 text-blue-600 dark:text-blue-400" />,
  };

  const bgColors = {
    success: "bg-green-50 dark:bg-green-900 border-green-200 dark:border-green-700",
    error: "bg-red-50 dark:bg-red-900 border-red-200 dark:border-red-700",
    warning: "bg-yellow-50 dark:bg-yellow-900 border-yellow-200 dark:border-yellow-700",
    info: "bg-blue-50 dark:bg-blue-900 border-blue-200 dark:border-blue-700",
  };

  return (
    <div
      className={`flex items-center gap-3 min-w-[300px] max-w-md p-4 rounded-xl border shadow-lg animate-slide-in backdrop-blur-sm ${bgColors[type]}`}
    >
      {icons[type]}
      <p className="flex-1 text-sm font-medium text-gray-900 dark:text-white font-inter">
        {message}
      </p>
      <button
        onClick={() => onClose(id)}
        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-lg transition-all"
        aria-label="Close notification"
      >
        <X size={16} className="text-gray-600 dark:text-gray-400" />
      </button>
    </div>
  );
}
