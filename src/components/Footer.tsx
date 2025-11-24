// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black/50 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">

          {/* Copyright */}
          <div className="text-gray-600 dark:text-gray-500">
            © 2025 Soulightric. Built with{" "}
            <span className="text-red-600 dark:text-red-500 font-bold">Pain</span>
          </div>

          {/* Quick Links */}
          <div className="flex gap-6">
            <Link href="/bitcoin" className="text-orange-600 dark:text-orange-500 hover:text-orange-700 dark:hover:text-orange-400 transition font-medium">
              Bitcoin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}