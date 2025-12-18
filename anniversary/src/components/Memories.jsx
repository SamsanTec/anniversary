import React from "react";
import { motion } from "framer-motion";
import { memories } from "../data/memories";

export default function Memories({ activeMemory, setActiveMemory }) {
  return (
    <section className="relative py-20 px-6 bg-rose-50 overflow-hidden">
      {/* Floating hearts */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <span
            key={i}
            className="absolute text-pink-400 text-2xl animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              fontSize: `${12 + Math.random() * 24}px`,
            }}
          >
            ❤️
          </span>
        ))}
      </div>

      <h2 className="relative text-4xl font-bold text-rose-600 text-center mb-12 z-10">
        My Favorites
      </h2>

      {/* Grid of images */}
      <div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto z-10">
        {memories.map((m, i) => (
          <motion.div
            key={i}
            className="overflow-hidden rounded-xl shadow-lg cursor-pointer w-full h-64"
            whileHover={{ scale: 1.05 }}
            onClick={() => setActiveMemory(m)}
          >
            <img
              src={m.img}
              alt={m.message}
              className="w-full h-full object-cover"
            />
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      {activeMemory && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-2xl max-w-md w-full mx-4 text-center">
            <img
              src={activeMemory.img}
              alt={activeMemory.message}
              className="w-full h-64 object-cover rounded-xl mb-4"
            />
            <p className="text-gray-700 mb-4">{activeMemory.message}</p>
            <button
              className="px-4 py-2 bg-rose-400 text-white rounded-lg hover:bg-rose-500"
              onClick={() => setActiveMemory(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* CSS animation */}
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
