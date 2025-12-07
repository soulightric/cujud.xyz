import type { Metadata, Viewport } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const display = Orbitron({ 
  subsets: ["latin"], 
  weight: ["400", "700"], 
  variable: "--font-display",
  display: "swap"
});

export const metadata: Metadata = {
  title: {
    default: "Fikly Cujud",
    template: "%s | Fikly Cujud",
  },
  description: "Calon Full Stack Developer • CEO Etherthink • Night Owl Coder • Power F",
  keywords: "fikly cujud, soulightric, full stack developer, next.js, indonesia, portfolio",
  authors: [{ name: "Fikly Cujud" }],
  creator: "Fikly Cujud",
  publisher: "Etherthink",
  metadataBase: new URL("https://cujud.xyz"),

  openGraph: {
    title: "Fikri Sujud",
    description: "Slowly but surely • Power F is my fuel",
    url: "https://cujud.xyz",
    siteName: "Fikly Cujud",
    images: ["/og-image.jpg"],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fikri Sujud",
    description: "Slowly but surely",
    images: ["/og-image.jpg"],
    creator: "@soulightric",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
};

// src/app/layout.tsx → tambah script ini di <head>
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id" suppressHydrationWarning>
      <head>
        {/* PAKSA HAPUS THEME LAMA — cuma sekali jalan */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (localStorage.getItem('theme')) {
                localStorage.removeItem('theme');
              }
            `,
          }}
        />
      </head>
      <body className={`${inter.className} ${display.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}