import React, { useState, useRef, useEffect } from "react";
import { FaMusic } from "react-icons/fa";
import audioFile from "../assets/audio.mp3";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className={`
          flex items-center justify-center w-14 h-14 rounded-full
          bg-pink-400 text-white shadow-lg
          hover:bg-pink-500 transition-colors
          ${isPlaying ? "animate-pulse" : ""}
        `}
      >
        <FaMusic className="text-2xl" />
      </button>

      <audio ref={audioRef} loop>
        <source src={audioFile} type="audio/mpeg" />
      </audio>
    </div>
  );
}
