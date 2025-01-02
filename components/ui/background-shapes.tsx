"use client";

import { motion } from "framer-motion";
import { BadmintonMotifs } from "./background-shapes/BadmintonMotifs";
import { ShuttlecockSvg, RacketSvg } from "./background-shapes/BadmintonMotifs";

interface BackgroundShapesProps {
  className?: string;
}

export function BackgroundShapes({ className = "" }: BackgroundShapesProps) {
  return (
    <div className={`${className} opacity-50`}>
      {/* Large gradient circles */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-gradient-to-r from-[#FF8C00]/20 to-transparent blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-gradient-to-l from-[#FF8C00]/20 to-transparent blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [90, 0, 90],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      {/* Geometric shapes with SVGs */}
      <motion.div
        className="absolute top-1/3 right-1/3 w-32 h-32 border border-[#FF8C00]/20 rotate-45"
        animate={{
          rotate: [45, 90, 45],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20">
            <ShuttlecockSvg />
          </div>
        </div>
      </motion.div>
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-32 h-32 border border-[#FF8C00]/20 rotate-45"
        animate={{
          rotate: [45, 0, 45],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20">
            <RacketSvg />
          </div>
        </div>
      </motion.div>

      {/* Small floating particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-2 h-2 bg-[#FF8C00]/10 rounded-full"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            ease: "linear",
            delay: Math.random() * 5,
          }}
        />
      ))}

      {/* Badminton-specific motifs */}
      <BadmintonMotifs />
    </div>
  );
}
