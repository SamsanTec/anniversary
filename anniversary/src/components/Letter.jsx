import React, { useState } from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

const letterText = `
I am the luckiest guy in the world to have found you. Truly. 
With you, I’ve made so many unforgettable memories, and somehow you’ve given my life a purpose I didn’t even know I was missing.

I want to be your partner forever. You’re the first person I want to talk to when I start my day, and the last person I want to talk to when I end it. Even when we’re not talking, you’re always on my mind. There isn’t a single thing that doesn’t remind me of you.

I can’t wait for the day we’re living together, annoying each other and irritating you for the rest of our lives. I can’t wait to get 'beaten up' by you when you’re mad, and I want to always be there to take care of you when you need me, especially during moments like your periods.

I want to spoil you. Take you out even when I’m tired. Bring you random gifts just because. Ordering things from Amazon is thoughtful, sure, but it’s not always romantic enough.

I was actually going to buy you a card today. Then I thought about making this website instead. It helps with my typing skills and all. Just kidding. The truth is, I love you so much that a card just wouldn’t be enough to hold it all. And honestly, you can’t put snowfall animations on a card, can you?

I did take some help from ChatGPT, of course. It took time to troubleshoot everything and figure it out, but it was worth it if it made you smile even a little.

I can’t wait to see you in a week. I really, really can’t. I love you ❤️
`;

export default function LetterWithChallenge() {
  const [revealed, setRevealed] = useState(false);
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple "challenge": she has to type "I love you" to reveal
    if (input.trim().toLowerCase() === "i love you") {
      setRevealed(true);
    } else {
      alert("Oops! Try again 😉");
    }
  };

  return (
    <section className="py-20 px-6 flex justify-center bg-gradient-to-b from-purple-50 to-purple-100 min-h-screen">
      {!revealed ? (
        <motion.div
          className="max-w-3xl p-10 bg-white rounded-3xl shadow-2xl border border-purple-200 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-purple-700 mb-8">
            A Little Challenge 💌
          </h2>
          <p className="text-gray-800 text-lg mb-6 font-serif">
            To reveal my letter, type "I love you" below:
          </p>
          <form onSubmit={handleSubmit} className="flex flex-col items-center gap-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type here..."
              className="px-4 py-2 border border-purple-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-400 w-64 text-center"
            />
            <button
              type="submit"
              className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700"
            >
              Reveal
            </button>
          </form>
        </motion.div>
      ) : (
        <motion.div
          className="max-w-3xl p-10 bg-white rounded-3xl shadow-2xl border border-purple-200 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-purple-700 mb-8">My Love ❤️</h2>
          <p className="text-gray-800 text-lg leading-relaxed font-serif">
            <Typewriter
              words={[letterText]}
              loop={1}
              cursor
              cursorStyle="✨"
              typeSpeed={50}
              deleteSpeed={0}
              delaySpeed={1000}
            />
          </p>
        </motion.div>
      )}
    </section>
  );
}
