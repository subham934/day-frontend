import React from "react";

// 💻 LAPTOP — Cursed / Glitching Tech theme
const Laptop = () => {
  return (
    <div className="w-full h-screen bg-gray-900 flex flex-col items-center justify-center overflow-hidden relative pt-20">

      {/* Scanlines overlay */}
      <div className="absolute inset-0 scanlines opacity-30 pointer-events-none" />

      {/* Glowing circuit lines */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none select-none opacity-10">
        <div className="absolute top-1/4 left-0 w-full h-px bg-green-400 shadow-[0_0_8px_2px_#4ade80]" />
        <div className="absolute top-2/4 left-0 w-full h-px bg-green-400 shadow-[0_0_8px_2px_#4ade80]" />
        <div className="absolute top-3/4 left-0 w-full h-px bg-green-400 shadow-[0_0_8px_2px_#4ade80]" />
        <div className="absolute left-1/4 top-0 h-full w-px bg-green-400 shadow-[0_0_8px_2px_#4ade80]" />
        <div className="absolute left-3/4 top-0 h-full w-px bg-green-400 shadow-[0_0_8px_2px_#4ade80]" />
      </div>

      {/* Floating corrupted emojis */}
      <div className="absolute left-10 top-1/3 text-6xl float-diag select-none pointer-events-none" style={{ animationDelay: "0s", filter: "hue-rotate(90deg)" }}>💀</div>
      <div className="absolute right-14 top-2/5 text-5xl bounce-float select-none pointer-events-none" style={{ animationDelay: "1s" }}>👾</div>
      <div className="absolute left-1/4 bottom-32 text-4xl float-diag select-none pointer-events-none" style={{ animationDelay: "0.7s" }}>🤖</div>
      <div className="absolute right-1/4 top-1/4 text-4xl bounce-float select-none pointer-events-none" style={{ animationDelay: "1.5s" }}>☠️</div>

      {/* Error messages floating */}
      <div className="absolute top-24 left-8 text-green-500 text-xs font-mono opacity-40 wobble pointer-events-none select-none">
        ERROR: SOUL_NOT_FOUND
      </div>
      <div className="absolute bottom-24 right-8 text-red-500 text-xs font-mono opacity-40 wobble pointer-events-none select-none" style={{ animationDelay: "0.5s" }}>
        FATAL: MEMORY_CORRUPTED
      </div>
      <div className="absolute top-1/2 left-6 text-green-400 text-xs font-mono opacity-30 wobble pointer-events-none select-none" style={{ animationDelay: "1s" }}>
        0xDEAD 0xBEEF
      </div>

      {/* Laptop emoji wobbling */}
      <div className="text-9xl pumpkin-pulse mb-4 z-10 select-none">💻</div>

      {/* Main heading */}
      <h1
        className="text-7xl wobble z-10"
        style={{
          fontFamily: "'UnifrakturCook', serif",
          color: "#4ade80",
          textShadow: "0 0 20px rgba(74,222,128,0.8), 4px 4px 0 #14532d, 0 0 60px rgba(74,222,128,0.3)",
        }}
      >
        🖥 Laptop
      </h1>
      <p className="mt-4 text-green-400 text-xl z-10" style={{ fontFamily: "'Creepster', cursive", letterSpacing: "0.15em" }}>
        Your soul has been uploaded...
      </p>
    </div>
  );
};

export default Laptop;