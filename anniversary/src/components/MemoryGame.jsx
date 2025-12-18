import React, { useState, useEffect } from "react";
import Confetti from "react-confetti";

const emojis = ["❤️", "🥰", "🌸", "🎉", "🍫", "💌"];

function shuffleArray(array) {
  return array
    .map((a) => [Math.random(), a])
    .sort((a, b) => a[0] - b[0])
    .map((a) => a[1]);
}

export default function MemoryGame() {
  const [cards, setCards] = useState(() =>
    shuffleArray([...emojis, ...emojis]).map((emoji, i) => ({
      id: i,
      emoji,
      flipped: false,
      matched: false,
    }))
  );

  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disableClick, setDisableClick] = useState(false);
  const [gameWon, setGameWon] = useState(false);
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleCardClick = (id) => {
    if (disableClick) return;

    const newCards = cards.map((c) =>
      c.id === id && !c.flipped && !c.matched ? { ...c, flipped: true } : c
    );
    setCards(newCards);

    const clickedCard = newCards.find((c) => c.id === id);

    if (!firstCard) setFirstCard(clickedCard);
    else if (!secondCard) {
      setSecondCard(clickedCard);
      setDisableClick(true);
    }
  };

  useEffect(() => {
    if (firstCard && secondCard) {
      if (firstCard.emoji === secondCard.emoji) {
        setCards((prev) =>
          prev.map((c) =>
            c.emoji === firstCard.emoji ? { ...c, matched: true } : c
          )
        );
        resetTurn();
      } else {
        setTimeout(() => {
          setCards((prev) =>
            prev.map((c) =>
              c.id === firstCard.id || c.id === secondCard.id
                ? { ...c, flipped: false }
                : c
            )
          );
          resetTurn();
        }, 1000);
      }
    }
  }, [firstCard, secondCard]);

  const resetTurn = () => {
    setFirstCard(null);
    setSecondCard(null);
    setDisableClick(false);
  };

  useEffect(() => {
    if (cards.every((c) => c.matched)) setGameWon(true);
  }, [cards]);

  return (
    <section className="py-20 px-6 bg-rose-50 text-center relative">
      <h2 className="text-4xl font-bold text-rose-600 mb-12">
        Anniversary Emoji Match 🎉
      </h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
        {cards.map((card) => (
          <div
            key={card.id}
            className="relative w-full pb-full cursor-pointer"
            onClick={() => handleCardClick(card.id)}
          >
            <div
              className={`flip-card-inner ${
                card.flipped || card.matched ? "flipped" : ""
              }`}
            >
              {/* Front */}
              <div className="flip-card-front flex items-center justify-center text-4xl bg-pink-300 rounded-lg shadow-lg">
                ❓
              </div>

              {/* Back */}
              <div className="flip-card-back flex items-center justify-center text-4xl bg-white rounded-lg shadow-lg">
                {card.emoji}
              </div>
            </div>
          </div>
        ))}
      </div>

      {gameWon && (
        <>
          <Confetti width={windowSize.width} height={windowSize.height} />
          <div className="absolute inset-0 flex items-center justify-center z-50">
            <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-lg">
              <h3 className="text-3xl font-bold text-rose-600 mb-4">
                You won! 🎉
              </h3>
              <p className="text-gray-700 max-w-xs">
                All emojis matched! Here’s to more fun memories together ❤️
              </p>
              <button
                className="mt-4 px-4 py-2 bg-rose-400 text-white rounded-lg hover:bg-rose-500"
                onClick={() => window.location.reload()}
              >
                Play Again
              </button>
            </div>
          </div>
        </>
      )}

      {/* CSS for flipping */}
      <style>{`
        .pb-full { padding-bottom: 100%; }
        .flip-card-inner {
          position: absolute;
          width: 100%;
          height: 100%;
          transition: transform 0.6s;
          transform-style: preserve-3d;
        }
        .flip-card-inner.flipped {
          transform: rotateY(180deg);
        }
        .flip-card-front, .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          border-radius: 0.5rem;
        }
        .flip-card-back {
          transform: rotateY(180deg);
        }
      `}</style>
    </section>
  );
}
