import React, { useContext } from "react";
import { useLoaderData, useNavigate } from "react-router";
import {
  FaStar, FaStarHalfAlt, FaRegStar,
  FaShoppingCart, FaHeart, FaInfoCircle,
} from "react-icons/fa";
import { LuGamepad } from "react-icons/lu";
import { GamesDataContext } from "../context/GamesContext.jsx";

/* ─── Star Rating helper ──────────────────────────────────── */
const StarRating = ({ rating }) => {
  const full  = Math.floor(rating);
  const half  = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return (
    <span className="flex items-center gap-0.5 text-yellow-400 text-base mt-1">
      {Array(full).fill(null).map((_, i) => <FaStar key={`f${i}`} />)}
      {half === 1 && <FaStarHalfAlt />}
      {Array(empty).fill(null).map((_, i) => <FaRegStar key={`e${i}`} />)}
    </span>
  );
};

/* ─── Rating bar helper ───────────────────────────────────── */
const RatingBar = ({ label, pct, opacity }) => (
  <div className="flex items-center gap-2">
    <span className="w-3 text-right text-xs text-slate-400">{label}</span>
    <div className="flex-1 h-1.5 bg-[#1e2738] rounded-full overflow-hidden">
      <div
        className={`h-full rounded-full bg-blue-500 ${opacity}`}
        style={{ width: `${pct}%` }}
      />
    </div>
    <span className="w-7 text-right text-xs text-slate-500">{pct}%</span>
  </div>
);

/* ─── Main component ──────────────────────────────────────── */
const GamesDetails = () => {
  const { data }                      = useLoaderData();
  const navigate                      = useNavigate();
  const { addToFav, favorite }        = useContext(GamesDataContext);

  const {
    name,
    background_image,
    background_image_additional,
    rating         = 0,
    ratings_count  = 0,
    description_raw,
    released,
    developers     = [],
    genres         = [],
    platforms      = [],
    tags           = [],
  } = data;

  const developer     = developers[0]?.name ?? "Unknown Developer";
  const releaseYear   = released ?? "N/A";
  const genreNames    = genres.map((g) => g.name).join(", ")           || "N/A";
  const platformNames = platforms.map((p) => p.platform.name).join(", ") || "N/A";
  const visibleTags   = tags?.slice(0, 6) ?? [];

  /* player mode from tags */
  const PLAYER_SLUGS  = ["singleplayer","multiplayer","co-op","online-multiplayer","local-multiplayer"];
  const playerMode    = tags.filter((t) => PLAYER_SLUGS.includes(t.slug?.toLowerCase()))
                            .map((t) => t.name).join(" / ") || "N/A";

  /* review bar percentages */
  const fivePct  = Math.round(rating * 18);
  const fourPct  = Math.round((5 - rating) * 12);
  const threePct = Math.max(100 - fivePct - fourPct, 0);

  const mediaImages  = [background_image, background_image_additional].filter(Boolean);
  const isFavorited  = favorite.some((item) => item.id === data.id);

  return (
    <div className="min-h-screen bg-black text-slate-200">

      {/* ── Hero ─────────────────────────────────────────── */}
      <div className="w-full px-10 pt-6 box-border">
        <div className="relative w-full h-[420px] overflow-hidden rounded-2xl">
          {/* background image */}
          <img
            src={background_image}
            alt={name}
            className="w-full h-full object-cover object-top brightness-50 rounded-2xl"
          />
          {/* gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent rounded-2xl" />

          {/* content */}
          <div className="absolute bottom-0 left-0 right-0 px-8 pb-8 flex items-end justify-between gap-4 flex-wrap">
            {/* meta */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="bg-blue-500 text-white text-[0.6rem] font-bold px-2 py-0.5 rounded uppercase tracking-widest">
                  Editor's Choice
                </span>
                <span className="flex items-center gap-1 text-yellow-400 text-sm font-bold">
                  <FaStar size={12} /> {rating.toFixed(1)}
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl font-black tracking-tight leading-none m-0">
                {name}
              </h1>
              <p className="text-sm text-slate-400 mt-1">
                {developer} &bull; {releaseYear}
              </p>
            </div>

            {/* action buttons */}
            <div className="flex gap-3">
              <button className="flex items-center gap-2 bg-blue-500 hover:bg-blue-600 active:scale-95 text-white font-bold text-sm px-5 py-2.5 rounded-lg transition-all cursor-pointer">
                <FaShoppingCart /> Buy Now
              </button>
              <button
                onClick={() => addToFav(data)}
                className={`flex items-center gap-2 font-semibold text-sm px-5 py-2.5 rounded-lg border transition-all cursor-pointer active:scale-95 backdrop-blur-sm
                  ${isFavorited
                    ? "bg-red-500/20 border-red-500/50 text-red-400"
                    : "bg-white/5 border-white/20 text-slate-200 hover:bg-white/10"
                  }`}
              >
                <FaHeart className={isFavorited ? "text-red-500" : ""} />
                {isFavorited ? "Saved!" : "Add to Favorites"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Body ─────────────────────────────────────────── */}
      <div className="flex gap-8 px-10 py-10 items-start flex-wrap lg:flex-nowrap">

        {/* Left column */}
        <div className="flex-1 min-w-0">

          {/* About */}
          <div className="flex items-center gap-2 text-lg font-bold mb-4">
            <FaInfoCircle className="text-blue-500" /> About the Game
          </div>
          {description_raw ? (
            <>
              <p className="text-sm text-slate-400 leading-7 mb-3">
                {description_raw.slice(0, 380)}{description_raw.length > 380 ? "…" : ""}
              </p>
              {description_raw.length > 380 && (
                <p className="text-sm text-slate-400 leading-7 mb-3">
                  {description_raw.slice(380, 620)}{description_raw.length > 620 ? "…" : ""}
                </p>
              )}
            </>
          ) : (
            <p className="text-sm text-slate-400 leading-7">No description available.</p>
          )}

          {/* Info cards */}
          <div className="grid grid-cols-3 gap-3 mt-6">
            {[
              { icon: "🖥️", label: "Platforms", value: platformNames },
              { icon: "🎮", label: "Genre",     value: genreNames    },
              { icon: "👥", label: "Players",   value: playerMode    },
            ].map(({ icon, label, value }) => (
              <div
                key={label}
                className="bg-[#0d1117] border border-[#1e2738] rounded-xl p-4 flex flex-col gap-1"
              >
                <span className="text-xl">{icon}</span>
                <span className="text-[0.65rem] text-slate-500 uppercase tracking-wider font-semibold">
                  {label}
                </span>
                <span className="text-xs text-slate-300 font-semibold">{value}</span>
              </div>
            ))}
          </div>

          {/* Media Gallery */}
          {mediaImages.length > 0 && (
            <>
              <h2 className="text-lg font-bold mt-8 mb-4">Media Gallery</h2>
              <div className="grid grid-cols-2 gap-3">
                {mediaImages.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`${name} screenshot ${i + 1}`}
                    className="w-full aspect-video object-cover rounded-xl border border-[#1e2738] hover:scale-[1.02] hover:border-blue-500 transition-all duration-300 cursor-pointer"
                  />
                ))}
              </div>
            </>
          )}
        </div>

        {/* Right sidebar */}
        <div className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-4">

          {/* Player Reviews */}
          <div className="bg-[#0d1117] border border-[#1e2738] rounded-xl p-5">
            <p className="text-sm font-bold text-slate-200 mb-3">Player Reviews</p>
            <p className="text-5xl font-black text-slate-100 leading-none">{rating.toFixed(1)}</p>
            <StarRating rating={rating} />
            <p className="text-xs text-slate-500 mt-1">{ratings_count.toLocaleString()} reviews</p>
            <div className="flex flex-col gap-2 mt-4">
              <RatingBar label="5" pct={fivePct}  opacity="opacity-100" />
              <RatingBar label="4" pct={fourPct}  opacity="opacity-60"  />
              <RatingBar label="3" pct={threePct} opacity="opacity-30"  />
            </div>
          </div>

          {/* Tags */}
          {visibleTags.length > 0 && (
            <div className="bg-[#0d1117] border border-[#1e2738] rounded-xl p-5">
              <p className="text-sm font-bold text-slate-200 mb-3">Tags</p>
              <div className="flex flex-wrap gap-2">
                {visibleTags.map((t) => (
                  <span
                    key={t.id}
                    className="bg-[#1a2235] text-slate-400 text-xs px-2.5 py-1 rounded-md border border-[#1e2738] font-medium hover:bg-blue-500/10 hover:text-blue-400 hover:border-blue-500/30 transition-colors cursor-default"
                  >
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {/* System Requirements */}
          <div className="bg-[#0d1117] border border-[#1e2738] rounded-xl p-5">
            <p className="flex items-center gap-2 text-sm font-bold text-blue-400 mb-2">
              <FaInfoCircle /> System Requirements
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Requires a 64-bit processor and operating system.
              Recommended RTX 30-series for Ray Tracing.
            </p>
          </div>
        </div>
      </div>

      {/* ── Footer ─────────────────────────────────────────── */}
      <footer className="border-t border-[#1e2738] mt-4 px-10 pt-12 pb-8">
        <div className="flex gap-12 mb-10 flex-wrap">
          {/* Brand */}
          <div className="flex-1 min-w-[200px]">
            <div className="flex items-center gap-2 mb-3">
              <LuGamepad size={22} className="text-blue-500" />
              <span className="text-lg font-extrabold text-white">GameVault</span>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed max-w-[220px]">
              The ultimate destination for game discovery and library management.
              Built for gamers, by gamers.
            </p>
          </div>

          {/* Explore */}
          <div className="min-w-[130px]">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Explore</p>
            {["Top Rated", "New Releases", "Indie Gems"].map((l) => (
              <a key={l} className="block text-sm text-slate-600 hover:text-slate-200 mb-2 cursor-pointer transition-colors">{l}</a>
            ))}
          </div>

          {/* Support */}
          <div className="min-w-[130px]">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Support</p>
            {["Help Center", "Safety Center", "Community Guidelines"].map((l) => (
              <a key={l} className="block text-sm text-slate-600 hover:text-slate-200 mb-2 cursor-pointer transition-colors">{l}</a>
            ))}
          </div>

          {/* Legal */}
          <div className="min-w-[130px]">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-3">Legal</p>
            {["Privacy Policy", "Terms of Service", "Cookie Policy"].map((l) => (
              <a key={l} className="block text-sm text-slate-600 hover:text-slate-200 mb-2 cursor-pointer transition-colors">{l}</a>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-[#1e2738] pt-6 flex-wrap gap-4">
          <span className="text-xs text-slate-700">© 2024 GameVault Inc. All rights reserved.</span>
          <div className="flex gap-2">
            {["⊞", "↗", "🌐"].map((icon) => (
              <div
                key={icon}
                className="w-8 h-8 rounded-md bg-[#111] border border-[#1e2738] flex items-center justify-center text-slate-500 text-xs hover:text-blue-500 hover:border-blue-500 transition-colors cursor-pointer"
              >
                {icon}
              </div>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GamesDetails;
