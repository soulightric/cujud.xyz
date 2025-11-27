"use client";

import { Card } from "@/components/ui/card";
import { 
  Terminal, Cpu, Laptop, Database, GitBranch, Palette, Zap, Code2, 
  Globe, Server, Rocket, Brain, Gauge, Shield, Sparkles 
} from "lucide-react";

export default function About() {
  const arsenal = [
    { name: "Arch Linux", icon: Cpu, color: "text-cyan-500", bg: "bg-cyan-500/10", glow: "shadow-cyan-500/40" },
    { name: "Fedora", icon: Globe, color: "text-purple-500", bg: "bg-purple-500/10", glow: "shadow-purple-500/40" },
    { name: "Dell XPS", icon: Laptop, color: "text-gray-600 dark:text-gray-400", bg: "bg-muted/50", glow: "shadow-gray-500/30" },
    { name: "Next.js", icon: Rocket, color: "text-foreground", bg: "bg-primary/10", glow: "shadow-primary/50" },
    { name: "TypeScript", icon: Brain, color: "text-blue-600 dark:text-blue-400", bg: "bg-blue-500/10", glow: "shadow-blue-500/40" },
    { name: "React", icon: Sparkles, color: "text-cyan-300", bg: "bg-cyan-300/10", glow: "shadow-cyan-300/40" },
    { name: "Tailwind", icon: Palette, color: "text-teal-400", bg: "bg-teal-400/10", glow: "shadow-teal-400/40" },
    { name: "PostgreSQL", icon: Database, color: "text-orange-400", bg: "bg-orange-400/10", glow: "shadow-orange-400/40" },
    { name: "Node.js", icon: Server, color: "text-green-400", bg: "bg-green-400/10", glow: "shadow-green-400/40" },
    { name: "Git", icon: GitBranch, color: "text-red-400", bg: "bg-red-400/10", glow: "shadow-red-400/40" },
    { name: "VSCode", icon: Code2, color: "text-blue-500", bg: "bg-blue-500/10", glow: "shadow-blue-500/40" },
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Background glow super subtle */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-20 left-20 w-96 h-96 bg-red-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>
      <div className="container px-6 max-w-7xl mx-auto">
        {/* Header — langsung muncul, no animation */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold mb-4">About me</h2>
          <p className="mt-8 text-lg max-w-4xl mx-auto leading-relaxed text-muted-foreground">
            Aku mungkin terlahir tanpa bakat. Tapi aku punya <span className="text-primary font-bold">1000 jam terbang</span>, 
            <span className="text-red-500"> obsesi terhadap detail</span>, dan 
            <span className="text-cyan-400"> kemauan belajar yang tak pernah mati</span>.
            <br />Usaha yang diasah terus-menerus akan mengalahkan bakat yang hanya tinggal diam.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">

          {/* Identity Card */}
          <Card className="relative overflow-hidden bg-background/70 backdrop-blur-xl border-2 border-primary/20 shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent" />
            <div className="relative p-10">
              <h3 className="text-4xl font-bold mb-6 flex items-center gap-4">
                <Shield className="w-10 h-10 text-red-500" />
                Identity.iso
              </h3>
              <p className="text-primary text-2x1 font-bold leading-relaxed text-muted-foreground">
                Nama panggung: <span className="text-primary font-bold text-purple-500">Soulightric</span>
                <br />Base: Indonesia
                <br />Mission: Menghancurkan pemerintahan yang korup.
                <br /><br />
                <span className="text-red-500 font-bold text-xl">
                  "Bakat itu overrated. Grind itu undefeated."
                </span>
              </p>
            </div>
          </Card>

          {/* Arsenal — HANYA HOVER EFEK, NO ANIMATION ON LOAD */}
          {/* Arsenal — 100% DARK & LIGHT MODE, HOVER ONLY */}
          <Card className="relative overflow-hidden bg-background/70 backdrop-blur-xl border-2 border-border/50 shadow-2xl">
            {/* Gradient background halus yang ikut tema */}
            <div className="absolute inset-0 bg-gradient-to-bl from-cyan-500/5 dark:from-cyan-500/10 to-transparent" />

            <div className="relative p-10">
              <h3 className="text-4xl font-bold mb-8 flex items-center gap-4">
                <Zap className="w-12 h-12 text-yellow-500" />
                Arsenal of the Gods
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-5">
                {arsenal.map((weapon) => (
                  <div key={weapon.name} className="group relative">
                    <div
                      className={`
                        relative p-5 rounded-2xl border-2
                        ${weapon.bg} 
                        border-border/20 
                        dark:border-white/20
                        backdrop-blur-sm text-center
                        transition-all duration-400 ease-out
                        group-hover:border-primary/60
                        group-hover:shadow-2xl 
                        group-hover:${weapon.glow}
                        group-hover:scale-110
                        group-hover:bg-primary/5
                        dark:group-hover:bg-primary/10
                      `}
                    >
                      <weapon.icon 
                        className={`w-10 h-10 mx-auto mb-3 ${weapon.color} 
                          group-hover:scale-125 transition-transform duration-300`} 
                      />
                      <p className="text-sm font-bold text-foreground/80 group-hover:text-foreground transition-colors">
                        {weapon.name}
                      </p>

                      {/* Optional: Glow orb halus saat hover */}
                      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent blur-xl" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}