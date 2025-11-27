// src/app/layout.tsx

import type { Metadata, Viewport } from "next";
import { Inter, Bebas_Neue } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const display = Bebas_Neue({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Fikly Cujud",
    template: "%s | Fikly Cujud",
  },
  description: "Calon Full Stack Developer • CEO Etherthink • Night Owl Coder •",
  keywords: "fikri sujud, soulightric, full-stack developer, next.js, indonesia, portfolio",
  authors: [{ name: "Fikri Sujud" }],
  creator: "Fikri Sujud",
  publisher: "Fikri Sujud",
  metadataBase: new URL("https://cujud.vercel.app"),

  openGraph: {
    title: "Fikri Sujud | Soulightric",
    description: "Slowly but surely • Power F is my fuel",
    url: "https://cujud.vercel.app",
    siteName: "Fikri Sujud",
    images: ["/og-image.jpg"], // ganti jadi gambar 1200x630 di /public
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fikri Sujud | Soulightric",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} ${display.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          forcedTheme={undefined}
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