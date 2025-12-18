import React, { useState } from "react";
import { motion } from "framer-motion";

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

  const toggleReveal = (index) => {
    setRevealed((prev) =>
      prev.map((r, i) => (i === index ? !r : r))
    );
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-rose-50 to-pink-50 relative overflow-hidden">
      {/* Floating emojis */}
      {[...Array(25)].map((_, i) => (
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

      <ul className="max-w-xl mx-auto space-y-6 text-gray-700 text-xl">
        {plans.map((plan, i) => (
          <motion.li
            key={i}
            className="cursor-pointer p-4 bg-white rounded-xl shadow-md flex items-center justify-between hover:scale-105 transition-transform duration-300"
            onClick={() => toggleReveal(i)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15 }}
          >
            {revealed[i] ? (
              <>
                <span>{plan.text}</span>
                <span className="text-2xl">{plan.emoji}</span>
              </>
            ) : (
              <span className="text-gray-400">Click to reveal ✨</span>
            )}
          </motion.li>
        ))}
      </ul>

      {/* Floating emojis animation */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); opacity: 0; }
          50% { opacity: 1; }
          100% { transform: translateY(-20px); opacity: 0; }
        }
        .animate-float {
          animation: float 6s linear infinite;
        }
      `}</style>
    </section>
  );
}
