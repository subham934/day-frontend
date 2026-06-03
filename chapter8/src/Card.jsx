const avatars = [
  "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&fit=crop&q=80",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&fit=crop&q=80",
];

const accentColors = ["#6366f1", "#ec4899", "#06b6d4"];

const Card = ({ postData, like, dislike }) => {
  return (
    <div
      className="w-full min-h-screen flex flex-wrap items-center justify-center gap-8 py-16 px-6"
      style={{
        background:
          "linear-gradient(135deg, #0f0f1a 0%, #1a1a2e 50%, #16213e 100%)",
      }}
    >
      {postData.map((item, index) => {
        const accent = accentColors[index % 3];

        return (
          <div
            key={item.id}
            className="flex flex-col items-center w-[300px] rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl"
            style={{
              background:
                "linear-gradient(160deg, rgba(30,30,55,0.95), rgba(20,20,40,0.98))",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow: `0 15px 40px rgba(0,0,0,0.4), 0 0 25px ${accent}10`,
            }}
          >
            {/* Accent top bar */}
            <div className="w-full h-1" style={{ background: accent }} />

            {/* Avatar */}
            <div className="pt-7 pb-2">
              <img
                className="w-22 h-22 rounded-full object-cover"
                style={{
                  border: `3px solid ${accent}40`,
                  boxShadow: `0 0 18px ${accent}30`,
                }}
                src={avatars[index % avatars.length]}
                alt={item.name}
              />
            </div>

            {/* Name */}
            <h2
              className="text-xl font-bold mt-2 tracking-wide"
              style={{ color: "#e2e8f0" }}
            >
              {item.name}
            </h2>

            {/* Description */}
            <p
              className="text-sm text-center px-6 mt-2 leading-relaxed"
              style={{ color: "rgba(148,163,184,0.7)" }}
            >
              {item.desc}
            </p>

            {/* Like count */}
            <div
              className="mt-4 flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-semibold"
              style={{
                background: "rgba(255,255,255,0.05)",
                color: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >

              <span>♥</span>
              <span>{item.likeCount} likes</span>
              
            </div>

            {/* Buttons */}
            <div className="flex gap-3 w-full px-5 py-5">
              <button
                onClick={() => like(item.id)}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-200 hover:brightness-125 active:scale-95"
                style={{
                  background: `${accent}20`,
                  color: accent,
                  border: `1px solid ${accent}35`,
                }}
              >
                👍 Like
              </button>

              <button
                onClick={() => dislike(item.id)}
                className="flex-1 py-2.5 rounded-xl text-sm font-semibold cursor-pointer transition-all duration-200 hover:brightness-125 active:scale-95"
                style={{
                  background: "rgba(239,68,68,0.12)",
                  color: "#f87171",
                  border: "1px solid rgba(239,68,68,0.25)",
                }}
              >
                👎 Dislike
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
