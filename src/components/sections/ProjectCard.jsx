import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";

function FeaturedBadge() {
  return (
    <span className="inline-flex items-center rounded-full border border-amber-300/20 bg-amber-300/10 px-2.5 py-1 text-[11px] font-semibold text-amber-200">
      ★ Featured
    </span>
  );
}

function LinkButton({ href, children, primary = false }) {
  if (!href) return null;

  return (
    <a
      href={href}
      target={href.startsWith("#") ? undefined : "_blank"}
      rel={href.startsWith("#") ? undefined : "noreferrer"}
      className={[
        "focus-ring inline-flex items-center justify-center rounded-xl px-3 py-2 text-xs font-semibold transition",
        primary
          ? "border border-white/10 bg-white text-slate-900 hover:translate-y-[-1px]"
          : "border border-white/10 bg-white/5 text-white/80 hover:bg-white/10 hover:text-white",
      ].join(" ")}
    >
      {children}
    </a>
  );
}

export default function ProjectCard({
  project,
  cardW = 360,
  cardH = 600,
  imgH = 200,
}) {
  const p = project;
  const [imgError, setImgError] = useState(false);

  const githubLinks = useMemo(() => {
    if (Array.isArray(p.githubLinks) && p.githubLinks.length > 0) {
      return p.githubLinks.filter((link) => link?.url);
    }

    if (p.githubLink) {
      return [{ label: "GitHub", url: p.githubLink }];
    }

    return [];
  }, [p.githubLinks, p.githubLink]);

  const images = useMemo(() => {
    const items = [];

    if (p.media?.cover && String(p.media.cover).trim()) {
      items.push(p.media.cover);
    }

    if (Array.isArray(p.media?.gallery)) {
      p.media.gallery.forEach((img) => {
        if (img && String(img).trim() && !items.includes(img)) {
          items.push(img);
        }
      });
    }

    return items;
  }, [p.media]);

  const [selectedImage, setSelectedImage] = useState(images[0] || "");

  useEffect(() => {
    setSelectedImage(images[0] || "");
    setImgError(false);
  }, [images]);

  const primaryGithub = githubLinks[0]?.url || "";
  const hasMultipleImages = images.length > 1;

  return (
    <motion.article
      layout
      className="group h-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl"
      style={{ width: cardW, minHeight: cardH }}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.22 }}
    >
      <div className="relative overflow-hidden border-b border-white/8">
        <div style={{ height: imgH }}>
          {selectedImage && !imgError ? (
            <button
              type="button"
              onClick={() => {
                if (!hasMultipleImages) return;
                const currentIndex = images.indexOf(selectedImage);
                const nextIndex = (currentIndex + 1) % images.length;
                setSelectedImage(images[nextIndex]);
              }}
              className="block h-full w-full text-left"
              title={hasMultipleImages ? "Click to view next screenshot" : ""}
            >
              <img
                src={selectedImage}
                alt={p.media?.alt || p.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.02]"
                onError={() => setImgError(true)}
              />

              {hasMultipleImages ? (
                <div className="absolute bottom-3 right-3 rounded-full border border-white/10 bg-black/45 px-3 py-1 text-[11px] font-medium text-white/85 backdrop-blur">
                  {images.indexOf(selectedImage) + 1} / {images.length}
                </div>
              ) : null}
            </button>
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-white/5 text-sm text-white/40">
              Image placeholder
            </div>
          )}
        </div>

        {hasMultipleImages && !imgError ? (
          <div className="flex gap-2 overflow-x-auto border-t border-white/8 bg-black/10 px-3 py-3">
            {images.map((img, index) => {
              const active = img === selectedImage;

              return (
                <button
                  key={`${p.key}-thumb-${index}`}
                  type="button"
                  onClick={() => {
                    setImgError(false);
                    setSelectedImage(img);
                  }}
                  className={[
                    "h-12 w-16 shrink-0 overflow-hidden rounded-lg border transition",
                    active
                      ? "border-white/40 ring-1 ring-white/20"
                      : "border-white/10 hover:border-white/25",
                  ].join(" ")}
                  title={`View screenshot ${index + 1}`}
                >
                  <img
                    src={img}
                    alt={`${p.title} preview ${index + 1}`}
                    className="h-full w-full object-cover"
                    onError={(e) => {
                      e.currentTarget.closest("button")?.remove();
                    }}
                  />
                </button>
              );
            })}
          </div>
        ) : null}
      </div>

      <div className="flex flex-col p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center rounded-full border border-[rgb(var(--accent)/0.35)] bg-[rgb(var(--accent)/0.12)] px-2.5 py-1 text-[11px] font-medium text-white/90">
              {p.type}
            </span>
            {p.featured ? <FeaturedBadge /> : null}
          </div>

          {primaryGithub ? (
            <a
              href={primaryGithub}
              target="_blank"
              rel="noreferrer"
              aria-label={`Open ${p.title} on GitHub`}
              className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 transition hover:bg-white/10 hover:text-white"
            >
              ↗
            </a>
          ) : null}
        </div>

        <h3 className="mt-4 text-2xl font-semibold tracking-tight text-white">
          {p.title}
        </h3>

        {p.tagline ? (
          <p className="mt-2 text-sm font-medium text-[rgb(var(--mist))]">
            {p.tagline}
          </p>
        ) : null}

        <p className="mt-4 text-sm leading-7 text-white/70">{p.description}</p>

        {p.outcome ? (
          <div className="mt-4 rounded-2xl border border-white/8 bg-white/4 p-3">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
              Outcome
            </div>
            <p className="mt-2 text-sm leading-7 text-white/72">{p.outcome}</p>
          </div>
        ) : null}

        {p.whatIBuilt?.length ? (
          <div className="mt-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/45">
              What I Built
            </div>
            <ul className="mt-2 space-y-2 text-sm leading-7 text-white/70">
              {p.whatIBuilt.slice(0, 3).map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className="mt-4 flex flex-wrap gap-2">
          {p.stack?.map((s) => (
            <span
              key={s}
              className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs text-white/72"
            >
              {s}
            </span>
          ))}
        </div>

        <div className="mt-auto pt-5">
          <div className="flex flex-wrap gap-2">
            {githubLinks.map((link, index) => (
              <LinkButton
                key={`${link.label}-${link.url}`}
                href={link.url}
                primary={index === 0}
              >
                {link.label || `GitHub ${index + 1}`}
              </LinkButton>
            ))}
          </div>
        </div>
      </div>
    </motion.article>
  );
}