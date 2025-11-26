// src/app/bitcoin/page.tsx
import BitcoinPrice from "@/components/BitcoinPrice";
import BitcoinWallet from "@/components/BitcoinWallet";

export const metadata = {
  title: "Bitcoin",
  description: "My Bitcoin wallet & real-time price",
};

export default function BitcoinPage() {
  return (
    <main className="min-h-screen bg-black text-white py-24 px-6">
      <div className="max-w-4xl mx-auto space-y-20">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-6xl md:text-8xl font-black text-orange-500 mb-6">
            Bitcoin
          </h1>
          <p className="text-xl text-gray-400">
            My wallet address • Real-time price • Send me sats
          </p>
        </div>

        {/* Wallet + QR */}
        <BitcoinWallet />

        {/* Live Price + Chart */}
        <BitcoinPrice />
      </div>
    </main>
  );
}