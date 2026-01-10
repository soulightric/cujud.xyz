// src/components/Footer.tsx
export default function Footer() {
  return (
    <footer className="left-0 right-0 z-50 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">

          {/* Kiri — Copyright + Pain */}
          <div className="text-gray-600 dark:text-gray-500 text-center md:text-left">
            © 2025 Cujud. Built with{" "}
            <span className="text-emerald-600 dark:text-emerald-500 font-bold"><a href="https://www.etherthink.my.id/" target="_blank">Etherthink</a></span>
          </div>

          {/* Kanan — Status Vercel Style */}
          <div className="flex items-center gap-3">
            <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
            <span className="text-emerald-600 dark:text-emerald-400 font-medium">
              All systems normal.
            </span>
          </div>

        </div>
      </div>
    </footer>
  );
}
