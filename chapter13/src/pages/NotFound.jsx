import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router";

const GHOSTS = ["👻", "💀", "🕷️", "🦇", "🩸", "👁️"];
const WHISPERS = [
  "get out...",
  "you shouldn't be here...",
  "turn back...",
  "they're watching...",
  "run.",
  "it's too late...",
];

const FloatingGhost = ({ emoji, style }) => (
  <span className="absolute text-4xl select-none pointer-events-none ghost-float opacity-30" style={style}>
    {emoji}
  </span>
);

const NotFound = () => {
  const [flicker, setFlicker] = useState(true);
  const [lightning, setLightning] = useState(false);
  const [whisper, setWhisper] = useState("");
  const [showWhisper, setShowWhisper] = useState(false);
  const [ghosts, setGhosts] = useState([]);
  const [eyePos, setEyePos] = useState({ x: 50, y: 50 });

  // Flickering 404
  useEffect(() => {
    const tick = () => {
      setFlicker((f) => !f);
      setTimeout(tick, Math.random() * 900 + 100);
    };
    const t = setTimeout(tick, 300);
    return () => clearTimeout(t);
  }, []);

  // Lightning flash
  useEffect(() => {
    const flash = () => {
      setLightning(true);
      setTimeout(() => setLightning(false), 120);
      setTimeout(flash, Math.random() * 6000 + 3000);
    };
    const t = setTimeout(flash, 2000);
    return () => clearTimeout(t);
  }, []);

  // Whisper messages
  useEffect(() => {
    const show = () => {
      setWhisper(WHISPERS[Math.floor(Math.random() * WHISPERS.length)]);
      setShowWhisper(true);
      setTimeout(() => setShowWhisper(false), 2500);
      setTimeout(show, Math.random() * 5000 + 3000);
    };
    const t = setTimeout(show, 1500);
    return () => clearTimeout(t);
  }, []);

  // Spawn floating ghosts
  useEffect(() => {
    const spawn = () => {
      const id = Date.now();
      const emoji = GHOSTS[Math.floor(Math.random() * GHOSTS.length)];
      const left = Math.random() * 90 + "%";
      const duration = Math.random() * 6 + 5;
      setGhosts((g) => [...g.slice(-8), { id, emoji, left, duration }]);
      setTimeout(spawn, Math.random() * 1500 + 800);
    };
    spawn();
  }, []);

  // Eye tracks mouse
  useEffect(() => {
    const move = (e) => {
      setEyePos({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div className={`w-full h-screen bg-neutral-950 flex flex-col items-center justify-center overflow-hidden relative transition-all duration-75 ${lightning ? "bg-white/10" : ""}`}>

      {/* Lightning overlay */}
      {lightning && (
        <div className="absolute inset-0 bg-white/8 z-50 pointer-events-none" />
      )}

      {/* Fog radial pulse */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(100,0,0,0.5)_0%,_transparent_65%)] animate-pulse pointer-events-none" />

      {/* Scanline static overlay */}
      <div className="absolute inset-0 pointer-events-none scanlines opacity-20" />

      {/* Blood drip — top */}
      <div className="absolute top-0 left-0 w-full h-3 bg-red-700 shadow-[0_0_50px_15px_rgba(180,0,0,0.9)]" />

      {/* Blood drip — bottom */}
      <div className="absolute bottom-0 left-0 w-full h-3 bg-red-900 shadow-[0_0_40px_12px_rgba(120,0,0,0.7)]" />

      {/* Blood drip — left */}
      <div className="absolute top-0 left-0 h-full w-2 bg-gradient-to-b from-red-700 via-transparent to-red-900 opacity-60" />

      {/* Blood drip — right */}
      <div className="absolute top-0 right-0 h-full w-2 bg-gradient-to-b from-red-700 via-transparent to-red-900 opacity-60" />

      {/* Floating ghosts */}
      {ghosts.map((g) => (
        <FloatingGhost
          key={g.id}
          emoji={g.emoji}
          style={{
            left: g.left,
            bottom: "-5%",
            animation: `floatUp ${g.duration}s ease-in forwards`,
          }}
        />
      ))}

      {/* Creepy eye that tracks mouse */}
      <div className="absolute top-8 right-12 w-16 h-16 flex items-center justify-center select-none">
        <span className="text-5xl">👁️</span>
        <div
          className="absolute w-3 h-3 bg-red-600 rounded-full transition-all duration-100"
          style={{
            transform: `translate(${(eyePos.x - 50) * 0.12}px, ${(eyePos.y - 50) * 0.12}px)`,
          }}
        />
      </div>

      {/* 404 */}
      <div className="relative">
        <h1
          className="text-[10rem] font-black leading-none select-none relative"
          style={{
            fontFamily: "'Nosifer', cursive",
            color: flicker ? "#dc2626" : "#7f1d1d",
            textShadow: flicker
              ? "0 0 30px #dc2626, 0 0 80px #991b1b, 6px 6px 0 #3b0000"
              : "0 0 8px #7f1d1d",
            transition: "all 0.04s",
            filter: flicker ? "blur(0px)" : "blur(1px)",
          }}
        >
          404
        </h1>
      </div>

      {/* Shake text block */}
      <div className="shake-anim text-center mt-2 z-10">
        <p
          className="text-red-500 text-4xl tracking-widest mb-2"
          style={{ fontFamily: "'Creepster', cursive" }}
        >
          You Are Lost, Soul...
        </p>
        <p
          className="text-neutral-500 text-lg"
          style={{ fontFamily: "'Creepster', cursive" }}
        >
          This page was consumed by darkness.
        </p>
      </div>

      {/* Whisper message */}
      <div
        className="mt-6 h-8 text-red-800 text-xl italic text-center transition-opacity duration-700 z-10"
        style={{
          fontFamily: "'Creepster', cursive",
          opacity: showWhisper ? 1 : 0,
          letterSpacing: "0.2em",
        }}
      >
        {whisper}
      </div>

      {/* Escape button */}
      <Link
        to="/"
        className="mt-8 px-8 py-3 rounded-xl border border-red-800 text-red-400 hover:bg-red-900/30 hover:text-red-300 hover:shadow-[0_0_20px_rgba(200,0,0,0.5)] transition-all duration-300 z-10"
        style={{ fontFamily: "'Creepster', cursive", fontSize: "1.4rem", letterSpacing: "0.15em" }}
      >
        ☠ Escape ☠
      </Link>
    </div>
  );
};

export default NotFound;
