import AppLayout from "@/components/common/app-layout";

export default function StakesPage() {
  return (
    <AppLayout>
      <div className="p-4 sm:p-6 lg:p-8">
         <div className="text-center mb-8">
              <h1 className="text-3xl sm:text-4xl font-bold mb-6 gradient-text">
                Stakes
              </h1>
              <p className="text-[#9396ED]">Stake KEYS to earn BUSD and new tokens</p>
            </div>
      </div>
    </AppLayout>
  );
}
