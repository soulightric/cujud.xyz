"use client";

import { motion, useScroll, useTransform } from "framer-motion";

const milestones = [
  {
    date: "January 2024",
    title: "Etherthink Launch",
    desc: "Seorang siswa Kelas 3 SMK yang berfikir untuk membuat channel youtube dengan nama awal Etherbert. di dorong oleh rasa penghinaan, Etherbert terus di build sampai saat ini kita kenal dengan Etherthink",
    status: "completed",
  },
  {
    date: "February 2025",
    title: "10.000 Youtube Subs",
    desc: "Target tercapai atau Grok traktir kopi 1 tahun",
    status: "completed",
  },
  {
    date: "November",
    title: "Portofolio - Fikri",
    desc: "Di build dengan NEXT.Js yang membuat web ini terlihat keren.",
    status: "completed",
  },
  {
    date: "To Be Determined",
    title: "CEO Etherthink?",
    desc: "Mendirikan perusahaan sendiri atau minimal punya 1T di rekening",
    status: "dream",
  },
];

export default function MilestoneTimeline() {
  const { scrollYProgress } = useScroll();
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative">
      {/* Garis tengah + progress */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-muted/30 rounded-full h-full hidden md:block" />
      <motion.div
        className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-gradient-to-b from-emerald-500 to-blue-600 rounded-full hidden md:block"
        style={{ height: lineHeight }}
      />

      <div className="space-y-16">
        {milestones.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.0, delay: i * 0.2 }}
            className={`relative flex items-center justify-center md:justify-between max-w-3xl mx-auto ${
              i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            <div
              className={`w-full md:w-5/12 bg-card border border-border/50 rounded-2xl p-8 shadow-xl backdrop-blur-sm hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 hover:scale-105 group ${
                item.status === "completed" ? "ring-2 ring-primary/50" : ""
              }`}
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">Achieve</span>
                <span className="text-sm text-muted-foreground">{item.date}</span>
              </div>
              <h3 className="text-2xl font-bold mb-2">{item.title}</h3>
              <p className="text-muted-foreground">{item.desc}</p>
              {item.status === "completed" && (
                <span className="inline-block mt-4 px--4 py-1 p-2 bg-primary/20 text-primary rounded-sm text-sm">
                  Completed
                </span>
              )}
            </div>

            <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-primary rounded-full ring-8 ring-background hidden md:block group-hover:scale-150 transition-transform" />
          </motion.div>
        ))}
      </div>
    </div>
  );
}