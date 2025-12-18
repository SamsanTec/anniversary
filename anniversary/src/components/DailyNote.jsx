import React from "react";
import { motion } from "framer-motion";

const loveNotes = [
  "You make ordinary days feel like something worth remembering.",
  "Loving you feels easy. Like breathing, but better.",
  "If I had to choose again, I’d still choose you. Every time.",
  "You’re my favorite thought when my mind wanders.",
  "Somehow you feel like home and adventure at the same time.",
  "Even on my worst days, knowing you exist makes things lighter.",
  "I hope today is kind to you. And if it isn’t, I still am.",
  "You make my life softer, warmer, and louder in all the right ways.",
  "I smile more because of you. That’s the whole note.",
  "You’re the calm and the chaos I never knew I needed.",
  "Being loved by you feels like a quiet miracle.",
  "I still get that feeling when I think about you.",
  "Every version of my future looks better with you in it.",
  "You’re not just part of my life. You’re the reason it makes sense.",
  "I’d miss you even if I hadn’t met you today.",
  "You make time feel kinder.",
  "Loving you is my favorite habit.",
  "You turn simple moments into memories without trying.",
  "I feel lucky in a way that doesn’t fade.",
  "You’re my favorite hello and my hardest goodbye."
];

export default function DailyNote() {
  // Stable daily index (same note all day, changes tomorrow)
  const today = new Date();
  const seed =
    today.getFullYear() * 10000 +
    (today.getMonth() + 1) * 100 +
    today.getDate();

  const todayIndex = seed % loveNotes.length;
  const todayNote = loveNotes[todayIndex];

  return (
    <section className="py-20 px-6 flex justify-center bg-gradient-to-b from-rose-50 to-pink-100">
      <motion.div
        className="max-w-lg w-full p-8 bg-white/80 backdrop-blur rounded-3xl shadow-xl border border-rose-200 text-center"
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-bold text-rose-600 mb-4">
          Today’s Note 💌
        </h3>

        <p className="text-gray-700 font-serif text-lg leading-relaxed">
          {todayNote}
        </p>

        <p className="mt-6 text-sm text-gray-400 italic">
          Updated daily, just like my feelings for you.
        </p>
      </motion.div>
    </section>
  );
}
