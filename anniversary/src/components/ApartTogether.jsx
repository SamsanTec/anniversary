import React, { useState } from "react";
import { motion } from "framer-motion";

export default function ApartTogether() {
  const [flipped1, setFlipped1] = useState(false);
  const [flipped2, setFlipped2] = useState(false);

  const cardStyle = {
    transformStyle: "preserve-3d",
    transition: "transform 0.7s",
    cursor: "pointer",
  };

  const faceStyle = {
    backfaceVisibility: "hidden",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    borderRadius: "1.5rem",
    padding: "2rem",
    boxSizing: "border-box",
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-purple-50 to-rose-50 flex flex-col md:flex-row justify-center gap-8">
      {/* Card 1 */}
      <div className="w-full md:w-1/2 max-w-md perspective">
        <motion.div
          style={{
            ...cardStyle,
            transform: flipped1 ? "rotateY(180deg)" : "rotateY(0deg)",
            height: "420px",
            position: "relative",
          }}
          onClick={() => setFlipped1(!flipped1)}
        >
          {/* Front */}
          <div style={{ ...faceStyle, backgroundColor: "#E9D5FF" }}>
            <h3 className="text-3xl font-bold text-purple-700 mb-6 text-center">
              When We’re Apart 🌙
            </h3>
            <ul className="space-y-4 text-gray-700 font-serif text-lg">
              <li>Late-night calls that never feel long enough</li>
              <li>“Can you hear me?”</li>
              <li>Screenshots instead of hugs</li>
              <li>Missing you quietly</li>
              <li>Counting days like they owe me answers</li>
            </ul>
            <p className="absolute bottom-6 left-0 right-0 text-center text-sm text-purple-500">
              Tap to flip ❤️
            </p>
          </div>

          {/* Back */}
          <div
            style={{
              ...faceStyle,
              backgroundColor: "#FECACA",
              transform: "rotateY(180deg)",
            }}
          >
            <h3 className="text-3xl font-bold text-rose-600 mb-6 text-center">
              When We’re Together ❤️
            </h3>
            <ul className="space-y-4 text-gray-700 font-serif text-lg">
              <li>Dancing badly and laughing harder</li>
              <li>Food tastes better</li>
              <li>Silence that feels safe</li>
              <li>Annoying each other on purpose</li>
              <li>Forgetting the world exists</li>
            </ul>
            <p className="absolute bottom-6 left-0 right-0 text-center text-sm text-rose-500">
              Tap to flip back 💫
            </p>
          </div>
        </motion.div>
      </div>

      {/* Card 2 */}
      <div className="w-full md:w-1/2 max-w-md perspective">
        <motion.div
          style={{
            ...cardStyle,
            transform: flipped2 ? "rotateY(180deg)" : "rotateY(0deg)",
            height: "420px",
            position: "relative",
          }}
          onClick={() => setFlipped2(!flipped2)}
        >
          {/* Front */}
          <div style={{ ...faceStyle, backgroundColor: "#E9D5FF" }}>
            <h3 className="text-3xl font-bold text-purple-700 mb-6 text-center">
              Before She Was in My Life
            </h3>
            <ul className="space-y-4 text-gray-700 font-serif text-lg">
              <li>Days felt busy but empty</li>
              <li>Smiles were automatic, not meaningful</li>
              <li>Goals existed, but motivation came and went</li>
              <li>Life moved forward, but without color</li>
              <li>Peace felt temporary, happiness felt borrowed</li>
            </ul>
            <p className="absolute bottom-6 left-0 right-0 text-center text-sm text-purple-500">
              Tap to flip ❤️
            </p>
          </div>

          {/* Back */}
          <div
            style={{
              ...faceStyle,
              backgroundColor: "#FECACA",
              transform: "rotateY(180deg)",
            }}
          >
            <h3 className="text-3xl font-bold text-rose-600 mb-6 text-center">
              After She Became Part of My Life
            </h3>
            <ul className="space-y-4 text-gray-700 font-serif text-lg">
              <li>Ordinary days suddenly mattered</li>
              <li>Laughter came easier and stayed longer</li>
              <li>Motivation had a reason, not just a deadline</li>
              <li>Comfort felt natural, not forced</li>
              <li>Life didn’t just move, it made sense</li>
            </ul>
            <p className="absolute bottom-6 left-0 right-0 text-center text-sm text-rose-500">
              Tap to flip back 💫
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
