"use client";

import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";

export default function About() {
  const skills = [
    "Fedora", "Arch Linux", "Dell Laptop", "Next.js", "React", "TypeScript", "Node.js", "Tailwind CSS"
  ];

  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="container px-6 max-w-6xl mx-auto text-center">
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        > */}
          <h2 className="text-4xl md:text-6xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-5">
            Aku <span className="font-semibold text-primary text-red-500">calon</span> Full Stack Developer yang suka membangun aplikasi web modern, 
            cepat, dan user-friendly. power F adalah bahan bakar utamaku.
          </p>
        {/* </motion.div> */}

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <Card className="p-8 bg-background/60 backdrop-blur border-primary/10">
            <h3 className="text-2xl font-semibold mb-4">Who Am I?</h3>
            <p className="text-muted-foreground leading-relaxed">
              Nama panggung ku <span className="font-semibold text-primary">Soulightric</span>. 
              Aku lahir dan besar di Indonesia, saat ini lagi fokus ngebuild proyek-proyek 
              open source dan sambil terus belajar teknologi terbaru. 
              Aku mungkin terlahir tanpa bakat, tapi aku percaya kalau usaha yang sering di asah akan menyaingi mereka yang berbakat.
            </p>
          </Card>

          <Card className="p-8 bg-background/60 backdrop-blur border-primary/10">
            <h3 className="text-2xl font-semibold mb-6">Weapons & Tools</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm py-2 px-4">
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}