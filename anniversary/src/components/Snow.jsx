import React from "react";
import { motion } from "framer-motion";

export default function Snow() {
  const snowflakes = Array.from({ length: 30 });
  return (
    <div className="fixed inset-0 pointer-events-none z-50">
      {snowflakes.map((_, i) => (
        <motion.div 
          key={i}
          className="absolute bg-white rounded-full w-2 h-2 opacity-70"
          style={{ left: `${Math.random() * 100}vw`, top: `-${Math.random() * 100}px` }}
          animate={{ y: ["-10px", "100vh"] }}
          transition={{ repeat: Infinity, duration: 5 + Math.random() * 5, delay: Math.random() * 5 }}
        />
      ))}
    </div>
  );
}
