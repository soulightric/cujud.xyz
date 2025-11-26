"use client";

import useSWR from "swr";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function BitcoinPrice() {
  const { data, error } = useSWR(
    "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true",
    fetcher,
    { refreshInterval: 30000 } // update tiap 30 detik
  );

  if (error) return <div className="text-red-500 text-center">Failed to load price</div>;
  if (!data) return <div className="text-center text-gray-500">Loading price...</div>;

  const price = data.bitcoin.usd;
  const change = data.bitcoin.usd_24h_change.toFixed(2);

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 text-center">
      <h2 className="text-3xl font-bold mb-6 text-orange-400">Bitcoin Price (USD)</h2>

      <div className="space-y-4">
        <p className="text-5xl md:text-7xl font-black">
          ${price.toLocaleString("en-US")}
        </p>

        <p className={`text-2xl font-bold ${change > 0 ? "text-green-500" : "text-red-500"}`}>
          {change > 0 ? "↑" : "↓"} {Math.abs(Number(change))}%
          <span className="text-gray-500 text-lg ml-2">24h</span>
        </p>
        <p className="text-gray-500 text-sm mt-6">
          Powered by CoinGecko • Updated every 30s
        </p>
      </div>
    </div>
  );
}