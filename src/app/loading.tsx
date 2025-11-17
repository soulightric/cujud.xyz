"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3200); // muncul 3.2 detik

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-background">
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-background to-cyan-900/30" />

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.8 }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        {/* <motion.h1
          className="text-8xl md:text-9xl font-black tracking-tighter bg-gradient-to-r from-primary via-purple-400 to-cyan-400 bg-clip-text text-transparent"
          animate={{ backgroundPosition: ["0%", "%", "0%"] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          style={{ backgroundSize: "300%" }}
        >
          Soulightric
        </motion.h1> */}

        <motion.div className="flex justify-center space-x-4">
          {[0, 1, 2, 3, 4].map((i) => (
            <motion.div
              key={i}
              className="w-4 h-4 bg-primary rounded-full"
              animate={{ y: [0, -30, 0], opacity: [0.4, 1, 0.4] }}
              transition={{ duration: 1.6, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </motion.div>

        {/* <motion.div
          className="mt-20 h-1 bg-gradient-to-r from-transparent via-primary to-transparent max-w-md mx-auto"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        /> */}
      </motion.div>

      <div className="absolute bottom-12 text-sm tracking-widest text-muted-foreground animate-pulse">
        L O A D I N G . . .
      </div>
    </div>
  );
}