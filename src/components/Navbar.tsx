"use client";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
    SheetHeader,
    SheetTitle,
    SheetDescription,
} from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { name: "Status", href: "/status"},
    { name: "Milestone", href: "/milestone"},
    { name: "Purpose (uc)", href: "/purpose"},
  ];

  const closeSheet = () => setOpen(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-6">
        {/* Logo */}
        <Link 
          href="/" 
          className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent pl-2"
          onClick={closeSheet}
        >
          FC
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-muted-foreground hover:text-primary transition"
            >
              {item.name}
            </Link>
          ))}
          <ThemeToggle />
        </nav>

        {/* Mobile Nav */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Menu className="w-6 h-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l border-border/50">
            {/* Tambahin ini di atas nav */}
            <SheetHeader>
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
               <SheetDescription className="sr-only">
                Menu navigasi untuk mengakses bagian About, Projects, dan Contact.
               </SheetDescription>
            </SheetHeader>
                <nav className="flex flex-col h-full items-center justify-center gap-10">
                    {navItems.map((item) => (
                    <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeSheet}
                        className="text-2xl font-medium tracking-wide hover:text-primary transition duration-300"
                    >
                        {item.name}
                    </Link>
                    ))}
                </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
