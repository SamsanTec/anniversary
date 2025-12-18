import React, { useState } from "react";
import Hero from "./components/hero";
import Memories from "./components/memories";
import MemoryGame from "./components/MemoryGame";
import Letter from "./components/Letter";
import Future from "./components/Future";
import Footer from "./components/Footer";
import Snow from "./components/Snow";
import MusicPlayer from "./components/MusicPlayer";
import DailyNote from "./components/DailyNote";

export default function App() {
  const [activeMemory, setActiveMemory] = useState(null);

  return (
    <div className="relative overflow-x-hidden">
      <Snow />
      <Hero />
      <MusicPlayer />
      <Memories activeMemory={activeMemory} setActiveMemory={setActiveMemory} />
      <DailyNote />
      <MemoryGame />
      <Letter />
      <Future />
      <Footer />
    </div>
  );
}
