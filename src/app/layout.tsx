import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "../components/theme-provider";
import { Orbitron, Bruno_Ace, Bebas_Neue } from "next/font/google";

const display = Bebas_Neue({ 
  subsets: ["latin"],
  weight: "400",
  variable: "--font-display"
});

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Fikri — Full Stack Developer",
  description: "Portfolio Full Stack Developer",
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
        </ThemeProvider>
      </body>
    </html>
  );
}