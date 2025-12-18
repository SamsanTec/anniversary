import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-pink-50 to-rose-100 overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <span
            key={i}
            className="absolute text-pink-400 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${16 + Math.random() * 24}px`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

    <motion.h1
  className="relative text-5xl md:text-6xl font-bold text-rose-600 mb-6 z-10"
  initial={{ opacity: 0, y: 40 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1 }}
>
  One Year With You ❤️
</motion.h1>

<motion.p
  className="relative z-10 text-xl md:text-2xl text-gray-700 max-w-xl"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1.5 }}
>
  A whole year of us. Of laughter, late nights, silly fights, quiet moments, and
  love that somehow keeps growing.  
  This little space is just for you. A reminder that choosing you was, and always
  will be, my favorite decision.
</motion.p>


      {/* CSS animation for hearts */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(100vh) translateX(0) rotate(0deg); opacity: 0; }
            10% { opacity: 1; }
            100% { transform: translateY(-10vh) translateX(20px) rotate(360deg); opacity: 0; }
          }
          .animate-float {
            animation: float 8s linear infinite;
          }
        `}
      </style>
    </section>
  );
}
