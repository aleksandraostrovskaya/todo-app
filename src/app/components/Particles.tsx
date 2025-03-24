"use client";

import { motion } from "framer-motion";

const particles = Array.from({ length: 50 });
export default function Particles() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
      {particles.map((_, i) => {
        const size = Math.random() * 4 + 2; 
        const startX = Math.random() * 100;
        const startY = Math.random() * 100;

        return (
          <motion.div
            key={i}
            initial={{ x: `${startX}vw`, y: `${startY}vh`, opacity: 0.5 }}
            animate={{
              x: [`${startX}vw`, `${Math.random() * 100}vw`],
              y: [`${startY}vh`, `${Math.random() * 100}vh`],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 10 + Math.random() * 10,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute rounded-full bg-[#40ffaa] opacity-50"
            style={{
              width: `${size}px`,
              height: `${size}px`,
            }}
          />
        );
      })}
    </div>
  );
}
