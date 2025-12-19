import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

import tickingSound from "../assets/ticking.mp3";
import sparkleSound from "../assets/sparkle.mp3";

export default function CountdownGate({ unlockTime, children }) {
  const [timeLeft, setTimeLeft] = useState(unlockTime - Date.now());
  const [unlocked, setUnlocked] = useState(false);

  const tickRef = useRef(null);
  const unlockRef = useRef(null);
  const confettiFired = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      const remaining = unlockTime - Date.now();
      setTimeLeft(remaining);

      if (remaining <= 0) {
        clearInterval(interval);
        setUnlocked(true);

        tickRef.current?.pause();
        tickRef.current.currentTime = 0;

        unlockRef.current?.play().catch(() => {});
        if (!confettiFired.current) {
          fireConfetti();
          confettiFired.current = true;
        }
      } else {
        tickRef.current.currentTime = 0;
        tickRef.current?.play().catch(() => {});
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [unlockTime]);

  if (!unlocked && timeLeft > 0) {
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((timeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((timeLeft / 1000) % 60);

    return (
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-rose-100 to-pink-200 px-6 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="bg-white p-10 rounded-3xl shadow-2xl max-w-md w-full"
        >
          <h1 className="text-3xl font-bold text-rose-600 mb-4">
            Something Special Is Coming 💌
          </h1>

          <p className="text-gray-700 mb-6">
            Waiting builds magic.
          </p>

          <div className="flex justify-center gap-4 text-xl font-mono">
            <TimeBox label="Days" value={days} />
            <TimeBox label="Hours" value={hours} />
            <TimeBox label="Min" value={minutes} />
            <TimeBox label="Sec" value={seconds} />
          </div>

          <motion.p
            className="mt-6 text-sm text-gray-500"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ repeat: Infinity, duration: 1.6 }}
          >
            Almost there ❤️
          </motion.p>
        </motion.div>

        {/* AUDIO */}
        <audio ref={tickRef} src={tickingSound} preload="auto" />
        <audio ref={unlockRef} src={sparkleSound} preload="auto" />
      </section>
    );
  }

  return <>{children}</>;
}

function TimeBox({ label, value }) {
  return (
    <div className="bg-rose-100 rounded-xl px-4 py-3 text-center shadow">
      <div className="text-2xl font-bold text-rose-600">{value}</div>
      <div className="text-xs text-gray-600">{label}</div>
    </div>
  );
}

function fireConfetti() {
  const duration = 2000;
  const end = Date.now() + duration;

  const frame = () => {
    confetti({
      particleCount: 6,
      spread: 80,
      angle: 60,
      origin: { x: 0 },
      colors: ["#f43f5e", "#fb7185", "#fecdd3"],
    });

    confetti({
      particleCount: 6,
      spread: 70,
      angle: 120,
      origin: { x: 1 },
      colors: ["#f43f5e", "#fb7185", "#fecdd3"],
    });

    if (Date.now() < end) {
      requestAnimationFrame(frame);
    }
  };

  frame();
}
