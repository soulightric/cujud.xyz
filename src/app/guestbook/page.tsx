// src/app/guestbook/page.tsx
import { Metadata } from "next";
import Guestbook from "@/components/Guestbook";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Guestbook",
  description: "Tinggalkan jejakmu di guestbook Fikri Sujud",
};

export default function GuestbookPage() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-6 relative overflow-hidden">
      {/* Background gradient yang ikut tema */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br 
          from-purple-900/40 via-background to-cyan-900/40 
          dark:from-purple-900/40 dark:via-black dark:to-cyan-900/40" />
      </div>

      <div className="relative z-10 w-full max-w-4xl">
        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-5xl md:text-9xl font-black tracking-tighter bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent mb-4">
            GUESTBOOK
          </h1>
          <p className="text-xl text-primary/80">Tinggalkan jejak sebelum pergi yaa bang/kak/bu/pak</p>
        </div>

        {/* Guestbook Component */}
        <Guestbook />

        {/* Back link */}
        <div className="text-center mt-24 mb-20">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition"
          >
            ← Back to Main Point
          </Link>
        </div>
      </div>
    </main>
  );
}