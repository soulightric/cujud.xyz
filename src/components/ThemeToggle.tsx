"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme, setTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="rounded-full">
        <Sun className="w-5 h-5" />
      </Button>
    );
  }

  const toggle = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  return (
    <Button variant="ghost" size="icon" onClick={toggle} className="rounded-full">
      <Sun
        className={`w-5 h-5 transition-all duration-500 ${
          resolvedTheme === "dark"
            ? "rotate-0 scale-100"
            : "rotate-90 scale-0"
        }`}
      />
      <Moon
        className={`absolute w-5 h-5 transition-all duration-500 ${
          resolvedTheme === "light"
            ? "rotate-0 scale-100"
            : "-rotate-90 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}