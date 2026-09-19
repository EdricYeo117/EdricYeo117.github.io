import React, { useState } from "react";
import { motion as Motion } from "framer-motion";

function FeaturedBadge() {
  return (
    <span className="inline-flex items-center rounded-full border border-yellow-300/25 bg-yellow-300/10 px-3 py-1 text-xs font-semibold text-yellow-200">
      ★ Featured
    </span>
  );
}

function TypeBadge({ type }) {
  return (
    <span className="inline-flex items-center rounded-full border border-sky-300/25 bg-sky-300/10 px-3 py-1 text-xs font-semibold text-sky-100">
      {type}
    </span>
  );
}

function ProjectImage({ project, imgH }) {
  const [imageFailed, setImageFailed] = useState(false);

  const cover = project.media?.cover;
  const alt = project.media?.alt || `${project.title} preview`;

  if (!cover || imageFailed) {
    return (
      <div
        className="project-placeholder w-full border-b border-white/10"
        style={{ height: imgH }}
        aria-hidden="true"
      >
        <svg
          viewBox="0 0 100 100"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <circle cx="25" cy="25" r="16" />
          <circle cx="75" cy="25" r="16" />
          <circle cx="25" cy="75" r="16" />
          <circle cx="75" cy="75" r="16" />
          <path d="M25 25 75 75M75 25 25 75" />
          <rect x="37" y="37" width="26" height="26" rx="8" fill="#142033" />
          <circle cx="50" cy="50" r="5" />
        </svg>
        <span>
          {project.stack?.slice(0, 3).join(" / ") || "PROJECT OVERVIEW"}
        </span>
      </div>
    );
  }

  return (
    <div
      className="relative overflow-hidden border-b border-white/10 bg-black/20"
      style={{ height: imgH }}
    >
      <img
        src={cover}
        alt={alt}
        className="h-full w-full object-contain p-4 transition duration-500 group-hover:scale-[1.02]"
        loading="lazy"
        onError={() => setImageFailed(true)}
      />
    </div>
  );
}

export default function ProjectCard({
  project,

  cardH = 520,
  imgH = 220,
}) {
  const p = project;

  const githubLinks = Array.isArray(p.githubLinks)
    ? p.githubLinks
    : p.githubLink
      ? [{ label: "GitHub", url: p.githubLink }]
      : [];

  const hasGithub = githubLinks.length > 0;

  return (
    <Motion.article
      layout
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 18 }}
      transition={{ duration: 0.25 }}
      className="project-card group flex overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#121b29]"
      style={{
        width: "100%",
        maxWidth: "none",
        minHeight: cardH,
      }}
    >
      <div className="flex w-full flex-col">
        <ProjectImage project={p} imgH={imgH} />

        <div className="flex flex-1 flex-col p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex flex-wrap gap-2">
              {p.type ? <TypeBadge type={p.type} /> : null}
              {p.featured ? <FeaturedBadge /> : null}
            </div>

            {hasGithub ? (
              <a
                href={githubLinks[0].url}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open ${p.title} repository`}
                className="focus-ring inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-white/75 transition hover:bg-white/10 hover:text-white"
              >
                ↗
              </a>
            ) : (
              <div className="h-10 w-10 shrink-0" />
            )}
          </div>

          <h3 className="mt-5 text-xl font-bold leading-tight tracking-tight text-white">
            {p.title}
          </h3>

          {p.tagline ? (
            <p className="mt-3 text-sm font-semibold leading-6 text-slate-300">
              {p.tagline}
            </p>
          ) : null}

          {p.description ? (
            <p className="mt-4 text-sm leading-7 text-white/68">
              {p.description}
            </p>
          ) : null}

          {p.stack?.length ? (
            <div className="mt-5 flex flex-wrap gap-2">
              {p.stack.slice(0, 5).map((tech) => (
                <span
                  key={tech}
                  className="rounded-full border border-white/10 bg-white/[0.045] px-3 py-1 text-xs font-medium text-white/65"
                >
                  {tech}
                </span>
              ))}
            </div>
          ) : null}

          <div className="mt-auto pt-5">
            {hasGithub ? (
              <div className="flex flex-wrap gap-2">
                {githubLinks.map((link) => (
                  <a
                    key={`${p.key}-${link.url}`}
                    href={link.url}
                    target="_blank"
                    rel="noreferrer"
                    className="focus-ring inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/75 transition hover:bg-white/10 hover:text-white"
                  >
                    {link.label || "GitHub"} →
                  </a>
                ))}
              </div>
            ) : (
              <span className="text-sm font-medium text-white/35">
                Link coming soon
              </span>
            )}
          </div>
        </div>
      </div>
    </Motion.article>
  );
}
