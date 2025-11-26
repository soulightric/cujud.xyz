"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";
import { Copy, Check } from "lucide-react";

export default function BitcoinWallet() {
  const [copied, setCopied] = useState(false);
  const wallet = "maintenance"; // ganti punya kamu

  const copyToClipboard = () => {
    navigator.clipboard.writeText(wallet);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="bg-gray-900/50 border border-gray-800 rounded-2xl p-8 md:p-12 text-center">
      <h2 className="text-3xl font-bold mb-8 text-orange-400">My Bitcoin Address</h2>

      {/* QR Code */}
      <div className="flex justify-center mb-8">
        <div className="bg-white p-4 rounded-xl">
          <QRCodeCanvas value={wallet} size={200} level="H" />
        </div>
      </div>

      {/* Address */}
      <div className="bg-gray-800 rounded-lg p-4 font-mono text-sm md:text-base break-all">
        {wallet}
      </div>

      {/* Copy Button */}
      <button
        onClick={copyToClipboard}
        className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-orange-600 hover:bg-orange-700 rounded-lg font-medium transition"
      >
        {copied ? (
          <>
            <Check className="w-5 h-5" /> Copied!
          </>
        ) : (
          <>
            <Copy className="w-5 h-5" /> Copy Address
          </>
        )}
      </button>

      <p className="mt-6 text-gray-500 text-sm">
        Send me BTC • Coffee • Sats • Anything
      </p>
    </div>
  );
}