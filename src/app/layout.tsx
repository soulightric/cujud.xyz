import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Orbitron, Bruno_Ace, Bebas_Neue } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next"

const display = Bebas_Neue({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display"
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Fikly Cujud",
    template: "%s | Fikly Cujud",
  },
  description: "Portfolio Fikly Cujud (Soulightric) — Calon Full Stack Developer, CEO Etherthink, dan Night Owl Coder. Power F is my fuel.",
  keywords: "fikri sujud, fikly cujud, soulightric, full stack developer indonesia, next.js portfolio, web developer indonesia, frontend developer, power f, etherthink",
  authors: [{ name: "Fikly Cujud", url: "https://cujud.vercel.app" }],
  creator: "Fikri Sujud",
  publisher: "Etherthink",
  metadataBase: new URL("https://cujud.vercel.app"),
  
  openGraph: {
    title: "Fikri Sujud — Portofolio",
    description: "Calon Full Stack Dev • CEO Enthusiast • Secret Identity",
    url: "https://cujud.vercel.app",
    siteName: "Fikri Sujud",
    images: [
      {
        url: "/Yui Hirasawa600x315.jpg",      // insert from /public
        width: 600,
        height: 315,
        alt: "Fikly Cujud",
      },
    ],
    locale: "id_ID",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Fikly Sujud",
    description: "Slowly but Surely",
    images: ["/Yui Hirasawa600x315.jpg"],
    creator: "@soulightric",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  alternates: {
    canonical: "https://cujud.vercel.app",
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={true}
        >
          {children}
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  );
}