import React from "react";

// 🎃 HOME — Pumpkin / Haunted Night theme
const Home = () => {
  return (
    <div className="w-full h-screen bg-neutral-800 flex flex-col items-center justify-center overflow-hidden relative pt-20">

      {/* Moon */}
      <div className="absolute top-16 right-24 w-24 h-24 rounded-full bg-yellow-100 shadow-[0_0_40px_15px_rgba(250,230,100,0.4)] opacity-80 pumpkin-pulse" />

      {/* Flying bats row */}
      <div className="absolute top-28 left-0 w-full pointer-events-none">
        <span className="text-4xl bat-fly inline-block" style={{ animationDelay: "0s" }}>🦇</span>
      </div>
      <div className="absolute top-40 left-0 w-full pointer-events-none">
        <span className="text-3xl bat-fly inline-block" style={{ animationDelay: "2s" }}>🦇</span>
      </div>

      {/* Floating ghosts */}
      <div className="absolute left-16 top-1/3 text-6xl bounce-float pointer-events-none select-none" style={{ animationDelay: "0s" }}>👻</div>
      <div className="absolute right-20 top-2/5 text-5xl bounce-float pointer-events-none select-none" style={{ animationDelay: "0.8s" }}>👻</div>
      <div className="absolute left-1/3 bottom-24 text-4xl bounce-float pointer-events-none select-none" style={{ animationDelay: "1.4s" }}>👻</div>

      {/* Pumpkins bottom */}
      <div className="absolute bottom-6 left-0 w-full flex justify-around px-8 pointer-events-none select-none">
        {["🎃", "🎃", "🎃", "🎃", "🎃"].map((p, i) => (
          <span key={i} className="text-5xl pumpkin-pulse" style={{ animationDelay: `${i * 0.3}s` }}>{p}</span>
        ))}
      </div>

      {/* Spider hanging top center */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 flex flex-col items-center pointer-events-none select-none">
        <div className="w-0.5 h-20 bg-neutral-400 opacity-40" />
        <span className="text-4xl spider-drop">🕷️</span>
      </div>

      {/* Main heading */}
      <h1
        className="text-8xl wobble z-10 relative"
        style={{ fontFamily: "'UnifrakturCook', serif", color: "#f97316",
          textShadow: "0 0 20px rgba(249,115,22,0.6), 4px 4px 0 #7c2d12" }}
      >
        🏚 Home
      </h1>
      <p className="mt-4 text-orange-300 text-xl z-10" style={{ fontFamily: "'Creepster', cursive", letterSpacing: "0.15em" }}>
        Welcome... if you dare
      </p>
    </div>
  );
};

export default Home;
