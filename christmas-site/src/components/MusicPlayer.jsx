import React, { useState, useRef, useEffect } from "react";
import { FaMusic } from "react-icons/fa"; // music icon

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Play/pause audio when isPlaying changes
  useEffect(() => {
    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <button
        onClick={() => setIsPlaying(!isPlaying)}
        className={`
          flex items-center justify-center w-14 h-14 rounded-full bg-pink-400 text-white shadow-lg
          hover:bg-pink-500 transition-colors
          ${isPlaying ? "animate-pulse" : ""}
        `}
      >
        <FaMusic className="text-2xl" />
      </button>

      <audio ref={audioRef} loop>
        <source src="/audio.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}
