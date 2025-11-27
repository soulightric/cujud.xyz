"use client";

import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Youtube, Instagram} from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center relative">
        <div className="container px-6 max-w-5xl mx-auto text-center">
            <h2 className="text-2xl md:text-4xl font-light text-muted-foreground mb-4">
              はじめまして俺は
            </h2>
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-emerald-500 to-blue-600 bg-clip-text text-transparent mb-5 leading-tight tracking-tight">
              Fikly Cujud
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-10 max-w-3xl mx-auto">
              Calon Full Stack Dev • CEO Enthusiast • Secret Identity
            </p>

            <div className="flex gap-4 justify-center mb-12 flex-wrap">
              <Button size="lg" asChild>
                <Link href="/guestbook">Guestbook</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="https://www.etherthink.my.id/" target="_blank">Etherthink</a>
              </Button>
            </div>

            <div className="flex gap-8 justify-center">
              <a href="https://github.com/soulightric" target="_blank" className="text-muted-foreground hover:text-primary transition">
                <Github className="w-7 h-7" />
              </a>
              <a href="https://twitter.com/soulightric" target="_blank" className="text-muted-foreground hover:text-primary transition">
                <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCCdW5ISUbmNzFj6EOtr-DnQ" target="_blank" className="text-muted-foreground hover:text-primary transition">
                <Youtube className="w-7 h-7" />
              </a>
              <a href="https://www.linkedin.com/in/cujud/" target="_blank" className="text-muted-foreground hover:text-primary transition">
                <Linkedin className="w-7 h-7 "/>
              </a>
              {/* <a href="#" target="blank" className="text-muted-foreground hover:text-primary transition">
                <Instagram className="lucide lucide-instagram w-7 h-7"/>
              </a> */}
          </div>

          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <ArrowDown className="w-6 h-6 text-muted-foreground" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
