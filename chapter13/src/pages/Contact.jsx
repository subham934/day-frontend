import React from "react";

// ☎️ CONTACT — Graveyard / Zombie theme
const Contact = () => {
  return (
    <div className="w-full h-screen bg-green-950 flex flex-col items-center justify-center overflow-hidden relative pt-20">

      {/* Gravestones row */}
      <div className="absolute bottom-0 left-0 w-full flex justify-around px-4 pointer-events-none select-none">
        {["🪦","🪦","🪦","🪦","🪦","🪦"].map((g, i) => (
          <span key={i} className="text-5xl" style={{ marginBottom: "-8px" }}>{g}</span>
        ))}
      </div>

      {/* Zombie hands rising */}
      <div className="absolute bottom-16 left-1/4 text-5xl spider-drop select-none pointer-events-none" style={{ animationDelay: "0s" }}>🧟</div>
      <div className="absolute bottom-16 right-1/4 text-5xl spider-drop select-none pointer-events-none" style={{ animationDelay: "1s" }}>🧟‍♀️</div>

      {/* Flying bats */}
      <div className="absolute top-28 left-0 pointer-events-none select-none">
        <span className="text-5xl bat-fly inline-block" style={{ animationDelay: "1s" }}>🦇</span>
      </div>
      <div className="absolute top-44 left-0 pointer-events-none select-none">
        <span className="text-3xl bat-fly inline-block" style={{ animationDelay: "3s" }}>🦇</span>
      </div>

      {/* Poison bottles */}
      <div className="absolute left-10 top-1/3 text-5xl float-diag select-none pointer-events-none">☠️</div>
      <div className="absolute right-12 top-2/5 text-4xl float-diag select-none pointer-events-none" style={{ animationDelay: "1.5s" }}>🧪</div>

      {/* Green mist particles */}
      {[10, 30, 55, 75, 90].map((l, i) => (
        <div
          key={i}
          className="absolute bottom-20 rounded-full bg-green-500 opacity-10 blur-2xl pumpkin-pulse pointer-events-none"
          style={{ left: `${l}%`, width: "80px", height: "40px", animationDelay: `${i * 0.4}s` }}
        />
      ))}

      {/* Main heading */}
      <h1
        className="text-8xl wobble z-10"
        style={{ fontFamily: "'UnifrakturCook', serif", color: "#4ade80",
          textShadow: "0 0 20px rgba(74,222,128,0.6), 4px 4px 0 #14532d" }}
      >
        💀 Contact
      </h1>
      <p className="mt-4 text-green-300 text-xl z-10" style={{ fontFamily: "'Creepster', cursive", letterSpacing: "0.15em" }}>
        Reach us... from beyond the grave
      </p>
    </div>
  );
};

export default Contact;