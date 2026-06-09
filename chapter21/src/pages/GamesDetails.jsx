import React from "react";
import { useLoaderData, useNavigate } from "react-router";
import { FaStar, FaStarHalfAlt, FaRegStar, FaShoppingCart, FaHeart, FaInfoCircle } from "react-icons/fa";
import { LuGamepad } from "react-icons/lu";

/* ─── helpers ──────────────────────────────────────────────── */
const StarRating = ({ rating }) => {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  const empty = 5 - full - half;
  return (
    <span className="gd-stars">
      {Array(full).fill(null).map((_, i) => <FaStar key={`f${i}`} />)}
      {half === 1 && <FaStarHalfAlt />}
      {Array(empty).fill(null).map((_, i) => <FaRegStar key={`e${i}`} />)}
    </span>
  );
};

const RatingBar = ({ label, pct, color }) => (
  <div className="gd-bar-row">
    <span className="gd-bar-label">{label}</span>
    <div className="gd-bar-track">
      <div className="gd-bar-fill" style={{ width: `${pct}%`, background: color }} />
    </div>
    <span className="gd-bar-pct">{pct}%</span>
  </div>
);

/* ─── main component ────────────────────────────────────────── */
const GamesDetails = () => {
  const { data } = useLoaderData();
  const navigate = useNavigate();

  const {
    name,
    background_image,
    background_image_additional,
    rating = 0,
    ratings_count = 0,
    description_raw,
    released,
    developers = [],
    genres = [],
    platforms = [],
    tags = [],
    screenshots,
  } = data;

  const developer = developers[0]?.name ?? "Unknown Developer";
  const releaseYear = released ?? "N/A";
  const genreNames = genres.map((g) => g.name).join(", ") || "N/A";
  const platformNames =
    platforms.map((p) => p.platform.name).join(", ") || "N/A";

  const visibleTags = tags?.slice(0, 6) ?? [];

  /* ── derive player mode from tags (RAWG stores it there) ── */
  const PLAYER_MODE_SLUGS = ["singleplayer", "multiplayer", "co-op", "online-multiplayer", "local-multiplayer"];
  const playerModeTags = (tags ?? []).filter((t) =>
    PLAYER_MODE_SLUGS.includes(t.slug?.toLowerCase())
  );
  const playerMode =
    playerModeTags.length > 0
      ? playerModeTags.map((t) => t.name).join(" / ")
      : "N/A";

  /* fake distribution percentages based on rating */
  const fivePct = Math.round(rating * 18);
  const fourPct = Math.round((5 - rating) * 12);
  const threePct = 100 - fivePct - fourPct;

  const mediaImages = [background_image, background_image_additional].filter(Boolean);

  return (
    <>
      <style>{`
        /* ── reset/base ── */
        .gd-root { color: #e2e8f0; min-height: 100vh; background: #000; }

        /* ── hero ── */
        .gd-hero {
          position: relative;
          width: 100%;
          padding: 1.5rem 2.5rem 0;   /* inset from edges like the reference */
          box-sizing: border-box;
        }
        .gd-hero-inner {
          position: relative;
          width: 100%;
          height: 420px;
          overflow: hidden;
          border-radius: 16px;        /* rounded corners on the image */
        }
        .gd-hero-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          filter: brightness(0.5);
          border-radius: 16px;
        }
        .gd-hero-gradient {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, #000 10%, transparent 60%);
        }
        .gd-hero-content {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 0 2rem 2rem;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          gap: 1rem;
          border-radius: 0 0 16px 16px;
        }
        .gd-hero-meta { display: flex; flex-direction: column; gap: 0.4rem; }
        .gd-badge-row { display: flex; align-items: center; gap: 0.6rem; margin-bottom: 0.2rem; }
        .gd-badge {
          background: #007eff;
          color: #fff;
          font-size: 0.65rem;
          font-weight: 700;
          padding: 0.18rem 0.55rem;
          border-radius: 4px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }
        .gd-hero-rating { display: flex; align-items: center; gap: 0.3rem; font-size: 0.9rem; color: #facc15; font-weight: 700; }
        .gd-hero-title { font-size: clamp(2rem, 5vw, 3.2rem); font-weight: 900; line-height: 1.1; letter-spacing: -0.03em; margin: 0; }
        .gd-hero-sub { font-size: 0.85rem; color: #94a3b8; margin-top: 0.2rem; }
        .gd-hero-actions { display: flex; gap: 0.75rem; flex-shrink: 0; }
        .gd-btn-buy {
          display: flex; align-items: center; gap: 0.5rem;
          background: #007eff;
          color: #fff;
          border: none;
          padding: 0.65rem 1.4rem;
          border-radius: 8px;
          font-weight: 700;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
        }
        .gd-btn-buy:hover { background: #0066dd; transform: translateY(-1px); }
        .gd-btn-buy:active { transform: scale(0.97); }
        .gd-btn-fav {
          display: flex; align-items: center; gap: 0.5rem;
          background: rgba(255,255,255,0.06);
          color: #e2e8f0;
          border: 1px solid rgba(255,255,255,0.15);
          padding: 0.65rem 1.4rem;
          border-radius: 8px;
          font-weight: 600;
          font-size: 0.9rem;
          cursor: pointer;
          transition: background 0.2s, transform 0.15s;
          backdrop-filter: blur(6px);
        }
        .gd-btn-fav:hover { background: rgba(255,255,255,0.12); transform: translateY(-1px); }
        .gd-btn-fav:active { transform: scale(0.97); }

        /* ── body layout ── */
        .gd-body { display: flex; gap: 2rem; padding: 2.5rem 3rem; align-items: flex-start; }
        .gd-left { flex: 1 1 0; min-width: 0; }
        .gd-right { width: 280px; flex-shrink: 0; display: flex; flex-direction: column; gap: 1.2rem; }

        /* ── sections ── */
        .gd-section-title {
          display: flex; align-items: center; gap: 0.5rem;
          font-size: 1.1rem; font-weight: 700; margin-bottom: 1rem;
          color: #e2e8f0;
        }
        .gd-section-title svg { color: #007eff; }

        /* about */
        .gd-about-text { font-size: 0.9rem; color: #94a3b8; line-height: 1.75; margin-bottom: 0.8rem; }

        /* info cards */
        .gd-info-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.75rem; margin-top: 1.5rem; }
        .gd-info-card {
          background: #0d1117;
          border: 1px solid #1e2738;
          border-radius: 10px;
          padding: 0.85rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
        }
        .gd-info-card-icon { font-size: 1.2rem; margin-bottom: 0.15rem; color: #007eff; }
        .gd-info-card-label { font-size: 0.7rem; color: #64748b; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600; }
        .gd-info-card-value { font-size: 0.82rem; color: #cbd5e1; font-weight: 600; }

        /* media */
        .gd-media-title { font-size: 1.1rem; font-weight: 700; margin: 2rem 0 1rem; }
        .gd-media-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 0.75rem; }
        .gd-media-img {
          width: 100%; aspect-ratio: 16/9;
          object-fit: cover;
          border-radius: 10px;
          border: 1px solid #1e2738;
          transition: transform 0.3s ease, border-color 0.2s;
          cursor: pointer;
        }
        .gd-media-img:hover { transform: scale(1.03); border-color: #007eff; }

        /* ── sidebar cards ── */
        .gd-card {
          background: #0d1117;
          border: 1px solid #1e2738;
          border-radius: 12px;
          padding: 1.1rem 1.2rem;
        }
        .gd-card-title { font-size: 0.95rem; font-weight: 700; margin-bottom: 0.9rem; color: #e2e8f0; }

        /* reviews */
        .gd-review-big { font-size: 2.8rem; font-weight: 900; color: #e2e8f0; line-height: 1; }
        .gd-stars { display: flex; align-items: center; gap: 2px; color: #facc15; font-size: 1rem; }
        .gd-review-count { font-size: 0.75rem; color: #64748b; margin-top: 0.2rem; }
        .gd-bars { display: flex; flex-direction: column; gap: 0.45rem; margin-top: 1rem; }
        .gd-bar-row { display: flex; align-items: center; gap: 0.5rem; }
        .gd-bar-label { width: 12px; font-size: 0.75rem; color: #94a3b8; text-align: right; }
        .gd-bar-track { flex: 1; height: 5px; background: #1e2738; border-radius: 99px; overflow: hidden; }
        .gd-bar-fill { height: 100%; border-radius: 99px; transition: width 0.6s ease; }
        .gd-bar-pct { width: 28px; font-size: 0.7rem; color: #64748b; text-align: right; }

        /* tags */
        .gd-tags-wrap { display: flex; flex-wrap: wrap; gap: 0.45rem; }
        .gd-tag {
          background: #1a2235;
          color: #94a3b8;
          font-size: 0.72rem;
          padding: 0.25rem 0.65rem;
          border-radius: 6px;
          border: 1px solid #1e2738;
          font-weight: 500;
          transition: background 0.2s, color 0.2s;
          cursor: default;
        }
        .gd-tag:hover { background: #007eff22; color: #60a5fa; border-color: #007eff44; }

        /* system req */
        .gd-sys-title { display: flex; align-items: center; gap: 0.4rem; font-size: 0.9rem; font-weight: 700; color: #007eff; margin-bottom: 0.6rem; }
        .gd-sys-text { font-size: 0.78rem; color: #64748b; line-height: 1.6; }

        /* ── footer ── */
        .gd-footer {
          border-top: 1px solid #1e2738;
          margin-top: 1rem;
          padding: 3rem 3rem 2rem;
        }
        .gd-footer-top { display: flex; gap: 3rem; margin-bottom: 2.5rem; flex-wrap: wrap; }
        .gd-footer-brand { flex: 1; min-width: 200px; }
        .gd-footer-logo { display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.8rem; }
        .gd-footer-logo-text { font-size: 1.1rem; font-weight: 800; color: #fff; }
        .gd-footer-tagline { font-size: 0.8rem; color: #475569; line-height: 1.6; max-width: 220px; }
        .gd-footer-col { min-width: 130px; }
        .gd-footer-col-title { font-size: 0.75rem; font-weight: 700; color: #64748b; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 0.9rem; }
        .gd-footer-link { display: block; font-size: 0.82rem; color: #475569; margin-bottom: 0.55rem; cursor: pointer; transition: color 0.2s; text-decoration: none; }
        .gd-footer-link:hover { color: #e2e8f0; }
        .gd-footer-bottom { display: flex; justify-content: space-between; align-items: center; border-top: 1px solid #1e2738; padding-top: 1.5rem; flex-wrap: wrap; gap: 1rem; }
        .gd-footer-copy { font-size: 0.75rem; color: #334155; }
        .gd-footer-icons { display: flex; gap: 0.75rem; }
        .gd-footer-icon { width: 30px; height: 30px; border-radius: 6px; background: #111; border: 1px solid #1e2738; display: flex; align-items: center; justify-content: center; color: #475569; font-size: 0.8rem; cursor: pointer; transition: color 0.2s, border-color 0.2s; }
        .gd-footer-icon:hover { color: #007eff; border-color: #007eff; }

        /* ── responsive ── */
        @media (max-width: 768px) {
          .gd-hero { padding: 1rem 1rem 0; }
          .gd-hero-inner { height: 320px; border-radius: 12px; }
          .gd-body { flex-direction: column; padding: 1.5rem 1.2rem; }
          .gd-right { width: 100%; }
          .gd-hero-content { flex-direction: column; align-items: flex-start; padding: 0 1.2rem 1.5rem; }
          .gd-info-grid { grid-template-columns: repeat(2, 1fr); }
          .gd-footer { padding: 2rem 1.2rem 1.5rem; }
          .gd-footer-top { gap: 2rem; }
        }
      `}</style>

      <div className="gd-root">
        {/* ── Hero ── */}
        <div className="gd-hero">
          <div className="gd-hero-inner">
            <img src={background_image} alt={name} className="gd-hero-img" />
            <div className="gd-hero-gradient" />
            <div className="gd-hero-content">
              <div className="gd-hero-meta">
                <div className="gd-badge-row">
                  <span className="gd-badge">Editor's Choice</span>
                  <span className="gd-hero-rating">
                    <FaStar size={13} /> {rating.toFixed(1)}
                  </span>
                </div>
                <h1 className="gd-hero-title">{name}</h1>
                <p className="gd-hero-sub">
                  {developer} &bull; {releaseYear}
                </p>
              </div>
              <div className="gd-hero-actions">
                <button id="btn-buy-now" className="gd-btn-buy">
                  <FaShoppingCart /> Buy Now
                </button>
                <button id="btn-add-favorites" className="gd-btn-fav">
                  <FaHeart /> Add to Favorites
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ── Body ── */}
        <div className="gd-body">
          {/* Left Column */}
          <div className="gd-left">
            {/* About */}
            <div className="gd-section-title">
              <FaInfoCircle /> About the Game
            </div>
            {description_raw ? (
              <>
                <p className="gd-about-text">
                  {description_raw.slice(0, 380)}
                  {description_raw.length > 380 ? "…" : ""}
                </p>
                {description_raw.length > 380 && (
                  <p className="gd-about-text">
                    {description_raw.slice(380, 620)}
                    {description_raw.length > 620 ? "…" : ""}
                  </p>
                )}
              </>
            ) : (
              <p className="gd-about-text">No description available.</p>
            )}

            {/* Info Cards */}
            <div className="gd-info-grid">
              <div className="gd-info-card">
                <span className="gd-info-card-icon">🖥️</span>
                <span className="gd-info-card-label">Platforms</span>
                <span className="gd-info-card-value">{platformNames}</span>
              </div>
              <div className="gd-info-card">
                <span className="gd-info-card-icon">🎮</span>
                <span className="gd-info-card-label">Genre</span>
                <span className="gd-info-card-value">{genreNames}</span>
              </div>
              <div className="gd-info-card">
                <span className="gd-info-card-icon">👥</span>
                <span className="gd-info-card-label">Players</span>
                <span className="gd-info-card-value">{playerMode}</span>
              </div>
            </div>

            {/* Media Gallery */}
            {mediaImages.length > 0 && (
              <>
                <div className="gd-media-title">Media Gallery</div>
                <div className="gd-media-grid">
                  {mediaImages.map((src, i) => (
                    <img key={i} src={src} alt={`${name} screenshot ${i + 1}`} className="gd-media-img" />
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Right Sidebar */}
          <div className="gd-right">
            {/* Player Reviews */}
            <div className="gd-card">
              <div className="gd-card-title">Player Reviews</div>
              <div className="gd-review-big">{rating.toFixed(1)}</div>
              <StarRating rating={rating} />
              <div className="gd-review-count">
                {ratings_count.toLocaleString()} reviews
              </div>
              <div className="gd-bars">
                <RatingBar label="5" pct={fivePct} color="#007eff" />
                <RatingBar label="4" pct={fourPct} color="#007eff99" />
                <RatingBar label="3" pct={Math.max(threePct, 0)} color="#007eff44" />
              </div>
            </div>

            {/* Tags */}
            {visibleTags.length > 0 && (
              <div className="gd-card">
                <div className="gd-card-title">Tags</div>
                <div className="gd-tags-wrap">
                  {visibleTags.map((t) => (
                    <span key={t.id} className="gd-tag">{t.name}</span>
                  ))}
                </div>
              </div>
            )}

            {/* System Requirements */}
            <div className="gd-card">
              <div className="gd-sys-title">
                <FaInfoCircle /> System Requirements
              </div>
              <p className="gd-sys-text">
                Requires a 64-bit processor and operating system.
                Recommended RTX 30-series for Ray Tracing.
              </p>
            </div>
          </div>
        </div>

        {/* ── Footer ── */}
        {/* <footer className="gd-footer">
          <div className="gd-footer-top">
            <div className="gd-footer-brand">
              <div className="gd-footer-logo">
                <LuGamepad size={22} color="#007eff" />
                <span className="gd-footer-logo-text">GameVault</span>
              </div>
              <p className="gd-footer-tagline">
                The ultimate destination for game discovery and library management.
                Built for gamers, by gamers.
              </p>
            </div>

            <div className="gd-footer-col">
              <div className="gd-footer-col-title">Explore</div>
              <a className="gd-footer-link">Top Rated</a>
              <a className="gd-footer-link">New Releases</a>
              <a className="gd-footer-link">Indie Gems</a>
            </div>

            <div className="gd-footer-col">
              <div className="gd-footer-col-title">Support</div>
              <a className="gd-footer-link">Help Center</a>
              <a className="gd-footer-link">Safety Center</a>
              <a className="gd-footer-link">Community Guidelines</a>
            </div>

            <div className="gd-footer-col">
              <div className="gd-footer-col-title">Legal</div>
              <a className="gd-footer-link">Privacy Policy</a>
              <a className="gd-footer-link">Terms of Service</a>
              <a className="gd-footer-link">Cookie Policy</a>
            </div>
          </div>

          <div className="gd-footer-bottom">
            <span className="gd-footer-copy">
              © 2024 GameVault Inc. All rights reserved.
            </span>
            <div className="gd-footer-icons">
              <div className="gd-footer-icon">⊞</div>
              <div className="gd-footer-icon">↗</div>
              <div className="gd-footer-icon">🌐</div>
            </div>
          </div>
        </footer> */}
      </div>
    </>
  );
};

export default GamesDetails;
