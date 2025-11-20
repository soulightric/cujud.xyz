// src/app/status/page.tsx
import { Metadata } from "next";
import StatusPlate from "@/components/StatusPlate";

export const metadata: Metadata = {
  title: "Status",
  description: "System activated. self-confident LV: MAX",
};

export default function StatusPage() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background ala Solo Leveling — FIXED & CLEAN */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900 via-black to-cyan-900" />
      </div>
      
      {/* Pattern SVG jadi CSS custom (lebih aman & performa lebih baik) */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238b5cf6' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Status Plate */}
      <div className="relative z-10 w-full max-w-2xl">
        <StatusPlate />
      </div>
    </main>
  );
}