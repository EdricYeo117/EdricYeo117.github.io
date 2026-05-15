import React, { useMemo, useState } from "react";
import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";
import ProjectCard from "./ProjectCard";
import { projects as allProjects } from "../../data/projects";

const TYPES = ["All", "School", "Internship", "Personal"];

const CARD_W = 392;
const CARD_H = 520;
const IMG_H = 220;
const PAGE_SIZE = 6;

function sortFeaturedFirst(list) {
  return [...list].sort((a, b) => {
    const af = a.featured ? 1 : 0;
    const bf = b.featured ? 1 : 0;

    if (af !== bf) return bf - af;

    const ap = a.priority ?? 999;
    const bp = b.priority ?? 999;

    if (ap !== bp) return ap - bp;

    return (a.title || "").localeCompare(b.title || "");
  });
}

export default function Projects() {
  const [activeType, setActiveType] = useState("All");
  const [page, setPage] = useState(1);

  const filteredSorted = useMemo(() => {
    const base =
      activeType === "All"
        ? allProjects
        : allProjects.filter((project) => project.type === activeType);

    return sortFeaturedFirst(base);
  }, [activeType]);

  const totalPages = Math.max(1, Math.ceil(filteredSorted.length / PAGE_SIZE));

  const safePage = Math.min(page, totalPages);

  const pageItems = useMemo(() => {
    const start = (safePage - 1) * PAGE_SIZE;
    return filteredSorted.slice(start, start + PAGE_SIZE);
  }, [filteredSorted, safePage]);

  const canPrev = safePage > 1;
  const canNext = safePage < totalPages;

  const handleTypeChange = (type) => {
    setActiveType(type);
    setPage(1);
  };

  return (
    <RevealSection id="projects" className="scroll-mt-24 py-24">
      <Container>
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-sky-200/80">
                Selected Work
              </p>

              <h2 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
                Projects
              </h2>

              <p className="mt-4 max-w-2xl text-base leading-8 text-white/65">
                Featured projects are highlighted and shown first.
              </p>
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-white/55">
              <span>
                {activeType} ({filteredSorted.length})
              </span>

              {totalPages > 1 ? (
                <>
                  <span className="hidden sm:inline">•</span>
                  <span>
                    Page {safePage} / {totalPages}
                  </span>
                </>
              ) : null}
            </div>
          </div>

          <div className="flex flex-wrap gap-2">
            {TYPES.map((type) => (
              <button
                key={type}
                type="button"
                onClick={() => handleTypeChange(type)}
                className={[
                  "focus-ring rounded-xl border px-4 py-2 text-sm font-medium transition",
                  type === activeType
                    ? "border-white/15 bg-white/10 text-white"
                    : "border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                {type}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {pageItems.map((project) => (
              <ProjectCard
                key={project.key}
                project={project}
                cardW={CARD_W}
                cardH={CARD_H}
                imgH={IMG_H}
              />
            ))}
          </div>

          {totalPages > 1 ? (
            <div className="flex items-center justify-center gap-3 sm:justify-end">
              <button
                type="button"
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={!canPrev}
                className={[
                  "focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border transition",
                  canPrev
                    ? "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                    : "cursor-not-allowed border-white/5 bg-white/3 text-white/30",
                ].join(" ")}
                aria-label="Previous page"
              >
                ←
              </button>

              <button
                type="button"
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={!canNext}
                className={[
                  "focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border transition",
                  canNext
                    ? "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                    : "cursor-not-allowed border-white/5 bg-white/3 text-white/30",
                ].join(" ")}
                aria-label="Next page"
              >
                →
              </button>
            </div>
          ) : null}
        </div>
      </Container>
    </RevealSection>
  );
}