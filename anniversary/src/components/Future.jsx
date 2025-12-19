import React, { useState } from "react";
import { motion } from "framer-motion";
import Confetti from "react-confetti";
import useSound from "use-sound";
import popSound from "../assets/pop.mp3";

const plans = [
  { text: "Travel together ✈️", emoji: "🌍" },
  { text: "More cozy nights in 🕯️", emoji: "🏡" },
  { text: "Laugh until our cheeks hurt 😂", emoji: "🤣" },
  { text: "Picnic under the stars 🌌", emoji: "✨" },
  { text: "Surprise date nights 💌", emoji: "🎁" },
  { text: "Bake something sweet together 🍰", emoji: "🧁" },
  { text: "Hold hands on long walks 👫", emoji: "❤️" },
  { text: "Leave cute notes for each other 💌", emoji: "💖" },
  { text: "Watch sunsets together 🌅", emoji: "🌇" },
  { text: "Dance in the rain 🌧️", emoji: "💃🕺" },
  { text: "Plan our dream home 🏡", emoji: "🏠" },
];

export default function Future() {
  const [revealed, setRevealed] = useState(plans.map(() => false));
  const [playPop] = useSound(popSound, { volume: 0.5 });

  const toggleReveal = (index) => {
    setRevealed((prev) => {
      const newState = [...prev];
      newState[index] = !newState[index];
      if (!prev[index]) playPop(); // play sound on first reveal
      return newState;
    });
  };

  const allRevealed = revealed.every(Boolean);

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-rose-50 to-pink-50 relative overflow-hidden">
      {/* Floating sparkles */}
      {[...Array(20)].map((_, i) => (
        <span
          key={i}
          className="absolute text-pink-400 text-xl animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
          }}
        >
          ✨
        </span>
      ))}

      <h2 className="text-4xl font-bold text-rose-600 text-center mb-12">
        Our Future Plans 💖
      </h2>

      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {plans.map((plan, i) => (
          <div
            key={i}
            className="perspective cursor-pointer"
            onClick={() => toggleReveal(i)}
          >
            <motion.div
              className="relative w-full h-36 rounded-xl transform-style-preserve-3d transition-transform duration-100000"
              animate={{ rotateY: revealed[i] ? 180 : 0 }}
            >
              {/* FRONT */}
              <div className="absolute w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center backface-hidden">
                <span className="text-gray-400">Click to reveal ✨</span>
              </div>

              {/* BACK */}
              <div className="absolute w-full h-full bg-pink-100 rounded-xl shadow-lg flex flex-col items-center justify-center backface-hidden rotate-y-180">
                <span className="text-xl">{plan.text}</span>
                <span className="text-3xl mt-2">{plan.emoji}</span>
              </div>
            </motion.div>
          </div>
        ))}
      </div>

      {allRevealed && <Confetti />}

      <style>{`
        .perspective { perspective: 1200px; }
        .transform-style-preserve-3d { transform-style: preserve-3d; }
        .rotate-y-180 { transform: rotateY(180deg); }
        .backface-hidden { backface-visibility: hidden; }
        @keyframes float {
          0% { transform: translateY(0px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-20px); opacity: 0; }
        }
        .animate-float { animation: float 6s linear infinite; }
      `}</style>
    </section>
  );
}
