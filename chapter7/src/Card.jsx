import React, { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Card() {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const contentRef = useRef(null);
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const btnGroupRef = useRef(null);
  const overlayRef = useRef(null);
  const shineRef = useRef(null);

  const [likes, setLikes] = useState(42);
  const [dislikes, setDislikes] = useState(3);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  // ── Entrance animation ──
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
        scrollTrigger: {
          trigger: cardRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
      });

      // Card slides up and fades in
      tl.fromTo(
        cardRef.current,
        { y: 80, opacity: 0, scale: 0.92, rotateX: 8 },
        { y: 0, opacity: 1, scale: 1, rotateX: 0, duration: 0.9 }
      );

      // Image reveal with clip-path
      tl.fromTo(
        imageRef.current,
        { clipPath: "inset(100% 0 0 0)", scale: 1.15 },
        { clipPath: "inset(0% 0 0 0)", scale: 1, duration: 0.8 },
        "-=0.4"
      );

      // Gradient overlay fades in
      tl.fromTo(
        overlayRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.5 },
        "-=0.3"
      );

      // Name slides in from left
      tl.fromTo(
        nameRef.current,
        { x: -30, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5 },
        "-=0.2"
      );

      // Description fades up
      tl.fromTo(
        descRef.current,
        { y: 15, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4 },
        "-=0.2"
      );

      // Buttons pop in with stagger
      tl.fromTo(
        btnGroupRef.current.children,
        { y: 20, opacity: 0, scale: 0.8 },
        { y: 0, opacity: 1, scale: 1, duration: 0.4, stagger: 0.12 },
        "-=0.15"
      );

      // Shine sweep across card
      tl.fromTo(
        shineRef.current,
        { x: "-100%" },
        { x: "200%", duration: 0.8, ease: "power2.inOut" },
        "-=0.3"
      );
    });

    return () => ctx.revert();
  }, []);

  // ── Card hover tilt effect ──
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;

      gsap.to(card, {
        rotateX,
        rotateY,
        duration: 0.4,
        ease: "power2.out",
        transformPerspective: 800,
      });

      // Move shine based on mouse
      gsap.to(shineRef.current, {
        x: `${((x / rect.width) * 100) - 50}%`,
        opacity: 0.12,
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        rotateX: 0,
        rotateY: 0,
        duration: 0.6,
        ease: "elastic.out(1, 0.5)",
      });
      gsap.to(shineRef.current, { opacity: 0, duration: 0.3 });
    };

    card.addEventListener("mousemove", handleMouseMove);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mousemove", handleMouseMove);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // ── Button click animations ──
  const handleLike = (e) => {
    const btn = e.currentTarget;

    if (!liked) {
      setLikes((prev) => prev + 1);
      setLiked(true);
      if (disliked) {
        setDislikes((prev) => prev - 1);
        setDisliked(false);
      }
    } else {
      setLikes((prev) => prev - 1);
      setLiked(false);
    }

    // Pulse animation
    gsap.fromTo(
      btn,
      { scale: 1 },
      {
        scale: 1.2,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      }
    );

    // Spawn floating hearts
    if (!liked) spawnParticles(btn, "❤️");
  };

  const handleDislike = (e) => {
    const btn = e.currentTarget;

    if (!disliked) {
      setDislikes((prev) => prev + 1);
      setDisliked(true);
      if (liked) {
        setLikes((prev) => prev - 1);
        setLiked(false);
      }
    } else {
      setDislikes((prev) => prev - 1);
      setDisliked(false);
    }

    gsap.fromTo(
      btn,
      { scale: 1 },
      {
        scale: 1.2,
        duration: 0.15,
        yoyo: true,
        repeat: 1,
        ease: "power2.inOut",
      }
    );

    if (!disliked) spawnParticles(btn, "💔");
  };

  const spawnParticles = (anchor, emoji) => {
    for (let i = 0; i < 6; i++) {
      const particle = document.createElement("span");
      particle.textContent = emoji;
      particle.style.cssText = `
        position: absolute;
        font-size: 18px;
        pointer-events: none;
        z-index: 50;
      `;
      anchor.parentElement.appendChild(particle);

      const rect = anchor.getBoundingClientRect();
      const parentRect = anchor.parentElement.getBoundingClientRect();

      gsap.set(particle, {
        x: rect.left - parentRect.left + rect.width / 2,
        y: rect.top - parentRect.top,
      });

      gsap.to(particle, {
        x: `+=${gsap.utils.random(-60, 60)}`,
        y: `-=${gsap.utils.random(40, 100)}`,
        opacity: 0,
        scale: gsap.utils.random(0.6, 1.4),
        rotation: gsap.utils.random(-40, 40),
        duration: gsap.utils.random(0.6, 1),
        ease: "power2.out",
        onComplete: () => particle.remove(),
      });
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#0a0a1a] relative overflow-hidden py-20">
      {/* Ambient background blobs */}
      <div
        className="absolute w-[500px] h-[500px] rounded-full blur-[120px] opacity-20"
        style={{
          background: "radial-gradient(circle, #6366f1, transparent)",
          top: "-10%",
          left: "-10%",
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] rounded-full blur-[120px] opacity-15"
        style={{
          background: "radial-gradient(circle, #ec4899, transparent)",
          bottom: "-10%",
          right: "-10%",
        }}
      />

      {/* Card */}
      <div
        ref={cardRef}
        className="relative w-[340px] rounded-2xl overflow-hidden cursor-pointer"
        style={{
          opacity: 0,
          background:
            "linear-gradient(145deg, rgba(30,30,50,0.9), rgba(15,15,30,0.95))",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 25px 60px rgba(0,0,0,0.5), 0 0 40px rgba(99,102,241,0.08), inset 0 1px 0 rgba(255,255,255,0.05)",
          transformStyle: "preserve-3d",
        }}
      >
        {/* Shine overlay */}
        <div
          ref={shineRef}
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.12) 50%, transparent 60%)",
            opacity: 0,
          }}
        />

        {/* Image section */}
        <div className="relative h-[380px] overflow-hidden">
          <img
            ref={imageRef}
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1526510747491-58f928ec870f?q=80&w=387&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Nilesh"
          />
          {/* Gradient overlay on image */}
          <div
            ref={overlayRef}
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(10,10,26,1) 0%, rgba(10,10,26,0.6) 40%, transparent 70%)",
            }}
          />
        </div>

        {/* Content section */}
        <div
          ref={contentRef}
          className="relative px-6 pb-6 -mt-16 z-10"
          style={{ position: "relative" }}
        >
          {/* Name */}
          <h1
            ref={nameRef}
            className="text-2xl font-bold mb-1 tracking-wide"
            style={{
              fontFamily: "'Inter', sans-serif",
              background: "linear-gradient(135deg, #e0e7ff, #c7d2fe, #a5b4fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              opacity: 0,
            }}
          >
            Luna
          </h1>

          {/* Description */}
          <p
            ref={descRef}
            className="text-sm leading-relaxed mb-5"
            style={{
              color: "rgba(148, 163, 184, 0.8)",
              fontFamily: "'Inter', sans-serif",
              opacity: 0,
            }}
          >
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Id, sit.
          </p>

          {/* Buttons */}
          <div
            ref={btnGroupRef}
            className="flex gap-3 relative"
          >
            <button
              onClick={handleLike}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: liked
                  ? "linear-gradient(135deg, #ec4899, #f43f5e)"
                  : "rgba(255,255,255,0.06)",
                color: liked ? "#fff" : "rgba(255,255,255,0.7)",
                border: liked
                  ? "1px solid rgba(236,72,153,0.4)"
                  : "1px solid rgba(255,255,255,0.1)",
                boxShadow: liked
                  ? "0 4px 20px rgba(236,72,153,0.3)"
                  : "none",
                opacity: 0,
              }}
            >
              <span style={{ fontSize: "16px" }}>♥</span>
              <span>{likes}</span>
            </button>

            <button
              onClick={handleDislike}
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200"
              style={{
                background: disliked
                  ? "linear-gradient(135deg, #6366f1, #8b5cf6)"
                  : "rgba(255,255,255,0.06)",
                color: disliked ? "#fff" : "rgba(255,255,255,0.7)",
                border: disliked
                  ? "1px solid rgba(99,102,241,0.4)"
                  : "1px solid rgba(255,255,255,0.1)",
                boxShadow: disliked
                  ? "0 4px 20px rgba(99,102,241,0.3)"
                  : "none",
                opacity: 0,
              }}
            >
              <span style={{ fontSize: "16px" }}>✕</span>
              <span>{dislikes}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;