// src/app/milestone/page.tsx → SERVER COMPONENT 100% BERSIH
import { Metadata } from "next";
import Link from "next/link";
import MilestoneTimeline from "@/components/MilestoneTimeline";

export const metadata: Metadata = {
  title: "Milestone • Fikly $ujud",
  description: "Perjalanan seorang calon Full Stack Developer yang didorong oleh Power F",
};

export default function MilestonePage() {
  return (
    <main className="min-h-screen bg-background py-24 px-6">
      <div className="max-w-5xl mx-auto">
        {/* Header — tanpa motion (animasi pindah ke client) */}
        <div className="text-center mb-20">
          <h1 className="text-7xl md:text-9xl font-black tracking-tighter bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent mb-4">
            Milestone
          </h1>
          <p className="text-xl text-muted-foreground">Powered by Pain</p>
        </div>

        {/* Semua animasi + scroll progress ada di sini → Client Component */}
        <MilestoneTimeline />

        {/* Back link */}
        <div className="text-center mt-24">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition"
          >
            ← Kembali ke Home
          </Link>
        </div>
      </div>
    </main>
  );
}