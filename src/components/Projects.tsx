"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "Etherthink - ERTH",
    desc: "Rencananya mau jadi web perusahaan multivalue, tapi masih dalam tahap pengembangan awal. intinya liat aja hidupku kedepannya gimana.",
    tech: ["Html", "Css", "Java Script"],
    live: "https://www.etherthink.my.id",
    github: "https://github.com/soulightric/erth-porto",
    image: "/images/projects-1.webp"
  },
  {
    title: "Next Portfolio (This)  ",
    desc: "Aku membuat website portofolio ini menggunakan Next.js dan masih belajar lebih dalam lagi.",
    tech: ["Next.Js", "React", "Tailwind CSS", "TypeScript", "PostgreSQL"],
    live: "https://cujud.vercel.app/",
    github: "https://github.com/soulightric/portofolio",
    image: "/images/projects-2.webp"
  },
  {
    title: "Angular Portfolio (UC)",
    desc: "Belum jadi..",
    tech: ["Angular", "Typescript", "Tailwind CSS"],
    live: "https://cujud.vercel.app/not-found",
    github: "https://github.com/soulightric",
    image: "/images/projects-3.webp"
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="container px-6 max-w-7xl mx-auto text-center">
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        > */}
          <h2 className="text-4xl md:text-6xl font-bold mb-4">Projects</h2>
          <p className="mt-8 text-xl text-muted-foreground mb-16">Karya yang aku banggakan, meskipun baru beberapa aja sih...</p>
        {/* </motion.div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((proj, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 1, y: 1 }}
              whileInView={{ opacity: 1, y: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 1 }}
            >
              <Card className="group h-full overflow-hidden bg-background/60 backdrop-blur border-primary/10 hover:border-primary/40 transition-all duration-500">
                <div className="relative aspect-video overflow-hidden bg-muted">
                  <Image
                    src={proj.image}
                    alt={proj.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-2xl font-bold mb-3">{proj.title}</h3>
                  <p className="text-muted-foreground mb-4 flex-1">{proj.desc}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {proj.tech.map((t) => (
                      <Badge key={t} variant="outline" className="text-xs">
                        {t}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3 mt-auto">
                    <Button size="sm" asChild>
                      <a href={proj.live} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={proj.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
