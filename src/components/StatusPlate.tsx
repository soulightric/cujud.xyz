"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StatusPlate() {
  return (
    <motion.div
    //   initial={{ opacity: 0, scale: 0.9, y: 50 }}
    //   animate={{ opacity: 1, scale: 1, y: 0 }}
    //   transition={{ duration: 0.8, ease: "easeOut" }}
    //   className="relative mx-auto"
    >
      {/* Border gold ala Solo Leveling */}
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-red-400 to-cyan-600 rounded-lg blur opacity-75" />
      
      <div className="relative bg-black border-4 border-blue-500 rounded-lg p-8 shadow-2xl">
        {/* Header */}
        <div className="flex justify-between items-start mb-6">
          <h2 className="text-4xl font-bold text-blue-400 tracking-widest">STATUS</h2>
          {/* <span className="text-blue-400 text-2xl">− X</span> */}
        </div>

        {/* Name & Level */}
        <div className="space-y-1 mb-8 border-b-2 border-blue-600 pb-6">
          <div className="flex justify-between">
            <span className="text-blue-300">NAME:</span>
            <span className="text-white font-bold">FIKRI SUJUD</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-300">JOB:</span>
            <span className="text-white font-bold">JUNIOR WEB DEV</span>
          </div>
          <div className="flex justify-between">
            <span className="text-blue-300">TITLE:</span>
            <span className="text-white font-bold">The Stubornly</span>
          </div>
          <div className="flex justify-between text-blue-400 font-bold text-xl mt-2">
            <span>LV.</span>
            <span>LV.7</span>
          </div>
        </div>

        {/* HP MP Fatigue */}
        <div className="grid grid-cols-3 gap-4 mb-8 border-b-2 border-blue-600 pb-6">
          <div className="text-center">
            <p className="text-blue-300 text-sm">HP</p>
            <p className="text-3xl font-bold text-green-400">2,000</p>
          </div>
          <div className="text-center">
            <p className="text-blue-300 text-sm">MP (Power F)</p>
            <p className="text-3xl font-bold text-purple-400">∞</p>
          </div>
          <div className="text-center">
            <p className="text-blue-300 text-sm">FATIGUE</p>
            <p className="text-3xl font-bold text-red-400">0</p>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6 mb-8">
          <div>
            <div className="flex justify-between mb-2"><span className="text-blue-300">STRENGTH</span><span className="text-white">999</span></div>
            <div className="flex justify-between mb-2"><span className="text-blue-300">AGILITY</span><span className="text-white">120</span></div>
            <div className="flex justify-between mb-2"><span className="text-blue-300">SENSE</span><span className="text-white">20</span></div>
          </div>
          <div>
            <div className="flex justify-between mb-2"><span className="text-blue-300">VITALITY</span><span className="text-white">100</span></div>
            <div className="flex justify-between mb-2 text-purple-400 font-bold"><span>INTELLIGENCE</span><span>∞</span></div>
            <div className="flex justify-between mb-2 text-red-400 font-bold"><span>PHYSICAL DMG RED.</span><span>47%</span></div>
          </div>
        </div>

        {/* Skills */}
        <div className="space-y-6">
          <div>
            <h3 className="text-blue-400 text-xl mb-3">• PASSIVE SKILLS</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <span className="text-white">NEXT.JS MASTERY LV.1</span>
              <span className="text-white">TAILWIND GOD LV.1</span>
              <span className="text-white">POWER F REGENERATION</span>
              <span className="text-white">COFFEE ADDICTION LV.7</span>
            </div>
          </div>

          <div>
            <h3 className="text-blue-400 text-xl mb-3">• ACTIVE SKILLS</h3>
            <div className="grid grid-cols-2 gap-3 text-sm">
              <span className="text-white">DEPLOY IN 3 MINUTES</span>
              <span className="text-white">GROK SUMMONING LV.5</span>
              <span className="text-white">NEXT LEARNING</span>
              <span className="text-white">ETHERTHINK CREATION</span>
            </div>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center mt-10">
          <Link href="/" className="text-blue-400 hover:text-blue-300 transition">
            ← Back To Real World
          </Link>
        </div>
      </div>
    </motion.div>
  );
}