import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Confetti from "react-confetti";
import emailjs from "@emailjs/browser";
import useSound from "use-sound";
import successSound from "../assets/success.mp3";

const letterText = ` One more thing before you go, send me a snap of your smiling face, Wait!!!!!!!!!!, I have one more thing to tell you, I love youuuuuuu!
`;

export default function LetterWithChallenge() {
  const [revealed, setRevealed] = useState(false);
  const [input, setInput] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  const [playSuccess] = useSound(successSound, { volume: 0.4 });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sent) return;

    if (input.trim().toLowerCase() !== "i love you") {
      alert("Close… but not quite 😉");
      return;
    }

    setSending(true);

    emailjs
      .send(
        "service_gkb2cp9",
        "template_ma63y5m",
        {
          from_name: "Akash",
          message: letterText,
          to_email: "bhanguakash27@gmail.com",
        },
        "agDbdLNNY5ufzLI48"
      )
      .then(() => {
        setSending(false);
        setSent(true);
        setRevealed(true);
        setStatusMessage("The letter is sent. Check your email 💌");
        playSuccess();
        if (navigator.vibrate) navigator.vibrate(200);
      })
      .catch(() => {
        setSending(false);
        alert("Email failed 😭 but the love is still valid");
      });
  };

  return (
    <section className="min-h-screen py-20 px-6 flex justify-center items-center bg-gradient-to-b from-purple-50 to-purple-100 relative">
      {sent && <Confetti />}

      {!revealed ? (
        <motion.div
          className="w-full max-w-md p-8 bg-white rounded-3xl shadow-2xl border border-purple-200 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-3xl font-bold text-purple-700 mb-6">
            One Small Challenge 💌
          </h2>

          <div className="w-full bg-purple-200 rounded-full h-3 mb-4 overflow-hidden">
            <motion.div
              className="bg-pink-500 h-full"
              initial={{ width: 0 }}
              animate={{
                width: `${Math.min(
                  (input.toLowerCase().length / "i love you".length) * 100,
                  100
                )}%`,
              }}
              transition={{ duration: 0.3 }}
            />
          </div>

          <p className="text-gray-700 mb-6 font-serif">
            Type <b>I love you</b> to unlock the letter.
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type here…"
              disabled={sending}
              className="w-full px-4 py-2 border border-purple-300 rounded-lg text-center focus:ring-2 focus:ring-purple-400"
            />

            <button
              type="submit"
              disabled={sending}
              className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 disabled:opacity-60"
            >
              {sending ? "Sending…" : "Reveal"}
            </button>
          </form>
        </motion.div>
      ) : (
        <motion.div
          className="w-full max-w-3xl p-10 bg-white rounded-3xl shadow-2xl border border-purple-200 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h2 className="text-4xl font-bold text-purple-700 mb-4">
            My Love ❤️
          </h2>

          {statusMessage && (
            <motion.p
              className="mb-6 text-green-600 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
            >
              {statusMessage}
            </motion.p>
          )}

          <p className="text-gray-800 text-lg leading-relaxed font-serif">
            <Typewriter
              words={[letterText]}
              cursor
              cursorStyle="✨"
              typeSpeed={45}
            />
          </p>
        </motion.div>
      )}
    </section>
  );
}
