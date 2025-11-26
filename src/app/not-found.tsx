// src/app/not-found.tsx → SERVER COMPONENT AMAN!
import { Metadata } from "next";
import DungeonLocked from "@/components/DungeonLocked";

export const metadata: Metadata = {
  title: "Dungeon Locked",
  description: "Gate will open soon...",
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-red-900/50 via-black to-purple-900/50" />
      </div>

      {/* Client component dengan animasi */}
      <DungeonLocked />
    </main>
  );
}