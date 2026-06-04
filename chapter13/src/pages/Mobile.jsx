import React from "react";

// 📱 MOBILE — Haunted Phone / Possessed Screen theme
const Mobile = () => {
  return (
    <div className="w-full h-screen bg-rose-950 flex flex-col items-center justify-center overflow-hidden relative pt-20">

      {/* Blood drip from top */}
      <div className="absolute top-14 left-0 w-full h-1 bg-red-600 shadow-[0_0_20px_6px_rgba(200,0,0,0.6)] pointer-events-none" />

      {/* Missed calls floating */}
      {["📵", "☎️", "📞", "📳"].map((icon, i) => (
        <span
          key={i}
          className="absolute text-4xl bounce-float select-none pointer-events-none"
          style={{
            top: `${20 + i * 15}%`,
            left: i % 2 === 0 ? `${8 + i * 5}%` : undefined,
            right: i % 2 !== 0 ? `${8 + i * 5}%` : undefined,
            animationDelay: `${i * 0.6}s`,
          }}
        >
          {icon}
        </span>
      ))}

      {/* Ghost emojis floating */}
      <div className="absolute right-12 top-1/3 text-6xl bounce-float select-none pointer-events-none" style={{ animationDelay: "0.3s" }}>👻</div>
      <div className="absolute left-16 bottom-40 text-5xl bounce-float select-none pointer-events-none" style={{ animationDelay: "1s" }}>👁️</div>

      {/* Bats flying */}
      <div className="absolute top-32 left-0 pointer-events-none select-none">
        <span className="text-4xl bat-fly inline-block" style={{ animationDelay: "0.5s" }}>🦇</span>
      </div>

      {/* Broken heart / cursed symbols */}
      <div className="absolute bottom-20 left-1/4 text-5xl swing select-none pointer-events-none">💔</div>
      <div className="absolute bottom-24 right-1/4 text-4xl swing select-none pointer-events-none" style={{ animationDelay: "0.8s" }}>🩸</div>

      {/* Notification bubbles */}
      <div className="absolute top-28 right-1/3 bg-red-700 text-white text-xs font-bold rounded-full w-8 h-8 flex items-center justify-center wobble opacity-80 select-none" style={{ fontFamily: "monospace" }}>
        666
      </div>

      {/* Phone emoji */}
      <div className="text-9xl pumpkin-pulse mb-4 z-10 select-none">📱</div>

      {/* Main heading */}
      <h1
        className="text-7xl wobble z-10"
        style={{
          fontFamily: "'UnifrakturCook', serif",
          color: "#fb7185",
          textShadow: "0 0 20px rgba(251,113,133,0.8), 4px 4px 0 #881337",
        }}
      >
        📵 Mobile
      </h1>
      <p className="mt-4 text-rose-300 text-xl z-10" style={{ fontFamily: "'Creepster', cursive", letterSpacing: "0.15em" }}>
        666 missed calls from the dead...
      </p>
    </div>
  );
};

export default Mobile;