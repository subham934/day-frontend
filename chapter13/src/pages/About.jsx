import React from "react";

// 🕸️ ABOUT — Spider Web / Dark Forest theme
const About = () => {
  return (
    <div className="w-full h-screen bg-blue-950 flex flex-col items-center justify-center overflow-hidden relative pt-20">

      {/* Spider webs corners */}
      <div className="absolute top-14 left-0 text-7xl opacity-30 select-none pointer-events-none -rotate-12">🕸️</div>
      <div className="absolute top-14 right-0 text-7xl opacity-30 select-none pointer-events-none rotate-12">🕸️</div>
      <div className="absolute bottom-4 left-0 text-6xl opacity-20 select-none pointer-events-none rotate-45">🕸️</div>
      <div className="absolute bottom-4 right-0 text-6xl opacity-20 select-none pointer-events-none -rotate-45">🕸️</div>

      {/* Hanging spiders */}
      {[20, 40, 60, 75].map((left, i) => (
        <div key={i} className="absolute top-0 flex flex-col items-center pointer-events-none select-none" style={{ left: `${left}%` }}>
          <div className="w-px bg-blue-300 opacity-20" style={{ height: `${50 + i * 25}px` }} />
          <span className="text-3xl swing" style={{ animationDelay: `${i * 0.4}s` }}>🕷️</span>
        </div>
      ))}

      {/* Floating skulls */}
      <div className="absolute left-10 top-1/2 text-5xl float-diag select-none pointer-events-none" style={{ animationDelay: "0s" }}>💀</div>
      <div className="absolute right-14 top-1/3 text-4xl float-diag select-none pointer-events-none" style={{ animationDelay: "1s" }}>💀</div>

      {/* Eyeballs scattered */}
      <div className="absolute bottom-28 left-1/4 text-4xl eye-blink select-none pointer-events-none">👁️</div>
      <div className="absolute bottom-32 right-1/4 text-3xl eye-blink select-none pointer-events-none" style={{ animationDelay: "1.2s" }}>👁️</div>

      {/* Main heading */}
      <h1
        className="text-8xl wobble z-10 relative"
        style={{ fontFamily: "'UnifrakturCook', serif", color: "#60a5fa",
          textShadow: "0 0 20px rgba(96,165,250,0.6), 4px 4px 0 #1e3a5f" }}
      >
        🕸 About
      </h1>
      <p className="mt-4 text-blue-300 text-xl z-10" style={{ fontFamily: "'Creepster', cursive", letterSpacing: "0.15em" }}>
        Things lurk in the shadows here...
      </p>
    </div>
  );
};

export default About;