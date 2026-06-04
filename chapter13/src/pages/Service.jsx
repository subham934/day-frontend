import React from "react";
import { useOutlet } from "react-router";

const Service = () => {
  const outlet = useOutlet();

  // If a child route (Laptop/Mobile) is active, render it fullscreen — no overlap
  if (outlet) return outlet;

  return (
    <div className="w-full h-screen bg-purple-950 flex flex-col items-center justify-center overflow-hidden relative pt-20">

      {/* Stars twinkling */}
      {["✨","⭐","🌟","💫"].map((s, i) => (
        <span
          key={i}
          className="absolute text-3xl pumpkin-pulse select-none pointer-events-none"
          style={{ top: `${15 + i * 12}%`, left: `${10 + i * 22}%`, animationDelay: `${i * 0.5}s` }}
        >{s}</span>
      ))}
      {["✨","💫","⭐"].map((s, i) => (
        <span
          key={i + 10}
          className="absolute text-2xl pumpkin-pulse select-none pointer-events-none"
          style={{ top: `${20 + i * 15}%`, right: `${8 + i * 18}%`, animationDelay: `${i * 0.7 + 0.3}s` }}
        >{s}</span>
      ))}

      {/* Witch hats floating */}
      <div className="absolute left-12 top-1/3 text-6xl bounce-float select-none pointer-events-none">🧙‍♀️</div>
      <div className="absolute right-16 top-2/5 text-5xl bounce-float select-none pointer-events-none" style={{ animationDelay: "1s" }}>🪄</div>

      {/* Cauldron center bottom */}
      <div className="absolute bottom-10 text-7xl cauldron-bubble select-none pointer-events-none">🧪</div>
      <div className="absolute bottom-8 left-1/3 text-5xl cauldron-bubble select-none pointer-events-none" style={{ animationDelay: "0.5s" }}>🫧</div>
      <div className="absolute bottom-8 right-1/3 text-5xl cauldron-bubble select-none pointer-events-none" style={{ animationDelay: "1s" }}>🫧</div>

      {/* Owl */}
      <div className="absolute top-20 right-10 text-5xl swing select-none pointer-events-none">🦉</div>

      {/* Main heading */}
      <h1
        className="text-8xl wobble z-10"
        style={{ fontFamily: "'UnifrakturCook', serif", color: "#c084fc",
          textShadow: "0 0 20px rgba(192,132,252,0.6), 4px 4px 0 #4a1772" }}
      >
        🪄 Service
      </h1>
      <p className="mt-4 text-purple-300 text-xl z-10" style={{ fontFamily: "'Creepster', cursive", letterSpacing: "0.15em" }}>
        Enchanted offerings from the beyond...
      </p>
    </div>
  );
};

export default Service;
