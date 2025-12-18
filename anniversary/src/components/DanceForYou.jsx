import React, { useState } from "react";
import { motion } from "framer-motion";

const danceNotes = [
  "I keep messing up the steps, but I don’t stop trying.",
  "I imagine you laughing and fixing my hands.",
  "I practice even when I feel stupid.",
  "One day I’ll dance with you without thinking.",
  "I’m doing this because you love it. That’s enough."
];

export default function DanceForYou() {
  const [index, setIndex] = useState(0);

  const handlePractice = () => {
    setIndex((prev) => (prev + 1) % danceNotes.length);
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-rose-50 to-pink-100 text-center">
      <motion.h2
        className="text-4xl font-bold text-rose-600 mb-6"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        I’m Learning… Just for You 💃🕺
      </motion.h2>

      <motion.p
        className="max-w-xl mx-auto text-lg text-gray-700 font-serif mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        I’m not good at dancing.  
        But every step I practice is a step closer to you.
      </motion.p>

      <motion.div
        className="bg-white rounded-2xl shadow-lg p-6 max-w-md mx-auto"
        initial={{ scale: 0.95, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-gray-800 italic mb-6">
          “{danceNotes[index]}”
        </p>

        <button
          onClick={handlePractice}
          className="px-6 py-2 bg-rose-500 text-white rounded-full hover:bg-rose-600 transition"
        >
          Practice Again ❤️
        </button>

        <div className="mt-4 text-sm text-gray-500">
          Dance skill: {12 + index * 3}%
        </div>
      </motion.div>
    </section>
  );
}
