import AppLayout from "@/components/common/app-layout";

export default function IMOPage() {
  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white mb-4">
          IMO
        </h1>
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          Initial Mining Offering coming soon...
        </p>
      </div>
    </AppLayout>
  );
}
