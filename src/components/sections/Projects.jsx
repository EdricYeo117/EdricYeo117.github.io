import React, { useMemo, useState } from "react";
import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";
import ProjectCard from "./ProjectCard";
import { projects as allProjects } from "../../data/projects";

const TYPES = ["All", "School", "Internship", "Personal"];

const CARD_W = 360;
const CARD_H = 420;
const IMG_H = 180;

const PAGE_SIZE = 6; // 2 rows x 3 cols

function sortFeaturedFirst(list) {
  // featured first, then priority ascending, then title
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
        : allProjects.filter((p) => p.type === activeType);

    return sortFeaturedFirst(base);
  }, [activeType]);

  const totalPages = Math.max(1, Math.ceil(filteredSorted.length / PAGE_SIZE));

  const pageItems = useMemo(() => {
    const safePage = Math.min(page, totalPages);
    const start = (safePage - 1) * PAGE_SIZE;
    return filteredSorted.slice(start, start + PAGE_SIZE);
  }, [filteredSorted, page, totalPages]);

  // Reset to page 1 when filter changes
  const onSetType = (t) => {
    setActiveType(t);
    setPage(1);
  };

  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <RevealSection id="projects" className="py-20" once>
      <Container>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-3xl font-semibold text-white/90">Projects</h2>
            <p className="mt-2 text-sm text-white/65">
              Featured projects are highlighted and shown first.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {TYPES.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => onSetType(t)}
                className={[
                  "focus-ring px-4 py-2 rounded-xl text-sm font-medium transition",
                  t === activeType
                    ? "bg-white/10 border border-white/15 text-white"
                    : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 flex items-center justify-between gap-4">
          <div className="text-sm font-semibold text-white/80">
            {activeType} ({filteredSorted.length})
          </div>

          <div className="flex items-center gap-3">
            <div className="text-xs text-white/55">
              Page {page} / {totalPages}
            </div>

            <button
              type="button"
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={!canPrev}
              className={[
                "focus-ring inline-flex h-10 w-10 items-center justify-center rounded-xl border transition",
                canPrev
                  ? "border-white/10 bg-white/5 text-white/80 hover:bg-white/10"
                  : "border-white/5 bg-white/3 text-white/30 cursor-not-allowed",
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
                  : "border-white/5 bg-white/3 text-white/30 cursor-not-allowed",
              ].join(" ")}
              aria-label="Next page"
            >
              →
            </button>
          </div>
        </div>

        {/* Fixed 2 rows x 3 columns */}
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {pageItems.map((p) => (
            <div key={p.key || p.title} className="flex justify-center">
              <ProjectCard
                project={p}
                cardW={CARD_W}
                cardH={CARD_H}
                imgH={IMG_H}
              />
            </div>
          ))}
        </div>
      </Container>
    </RevealSection>
  );
}
