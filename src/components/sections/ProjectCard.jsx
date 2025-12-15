import React from "react";
import { motion } from "framer-motion";

function FeaturedBadge() {
  return (
    <span className="chip" style={{ borderColor: "rgb(var(--mist) / 0.28)" }}>
      ★ Featured
    </span>
  );
}

export default function ProjectCard({
  project,
  cardW = 360,
  cardH = 420,
  imgH = 180,
}) {
  const p = project;
  const hasLink = Boolean(p.githubLink);

  return (
    <motion.article
      className="card-glass card-hover overflow-hidden flex flex-col"
      style={{ width: cardW, height: cardH }}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35 }}
    >
      {/* Media (fixed height) */}
      <div
        className="shrink-0 w-full border-b border-white/10"
        style={{ height: imgH, background: "rgb(255 255 255 / 0.03)" }}
      >
        {p.media?.cover ? (
          <img
            src={p.media.cover}
            alt={p.media?.alt || p.title}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="h-full w-full flex items-center justify-center text-xs text-white/50">
            Image placeholder
          </div>
        )}
      </div>

      {/* Content (fills remaining height) */}
      <div className="flex-1 p-5 flex flex-col min-h-0">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="chip chip-accent">{p.type}</span>
            {p.featured ? <FeaturedBadge /> : null}
          </div>

          {hasLink ? (
            <a
              href={p.githubLink}
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white transition"
              aria-label={`Open ${p.title} on GitHub`}
              title="Open on GitHub"
            >
              ↗
            </a>
          ) : (
            <span className="inline-flex h-9 w-9" />
          )}
        </div>

        <h3 className="mt-3 text-base font-semibold text-white/90 leading-snug">
          {p.title}
        </h3>

        <p className="mt-2 text-sm text-white/70 line-clamp-3">{p.description}</p>

        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack?.map((s) => (
            <span key={s} className="chip">
              {s}
            </span>
          ))}
        </div>

        {/* Footer pinned to bottom for perfect line alignment */}
        <div className="mt-auto pt-4 border-t border-white/10">
          {hasLink ? (
            <a
              href={p.githubLink}
              target="_blank"
              rel="noreferrer"
              className="text-sm font-medium"
              style={{ color: "rgb(var(--mist) / 0.95)" }}
            >
              View on GitHub →
            </a>
          ) : (
            <span className="text-sm text-white/40">Link coming soon</span>
          )}
        </div>
      </div>
    </motion.article>
  );
}
