import React, { useMemo, useState, useEffect } from "react";
import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";
import ProjectCard from "./ProjectCard";
import { projects as allProjects } from "../../data/projects";

const TYPES = ["All", "School", "Internship", "Personal"];
const PAGE_SIZE_DESKTOP = 6;
const PAGE_SIZE_MOBILE = 4;

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
  const [isMobile, setIsMobile] = useState(() =>
    typeof window !== "undefined" ? window.innerWidth < 640 : false
  );

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const filteredSorted = useMemo(() => {
    const base =
      activeType === "All"
        ? allProjects
        : allProjects.filter((p) => p.type === activeType);

    return sortFeaturedFirst(base);
  }, [activeType]);

  const pageSize = isMobile ? PAGE_SIZE_MOBILE : PAGE_SIZE_DESKTOP;
  const totalPages = Math.max(1, Math.ceil(filteredSorted.length / pageSize));

  useEffect(() => {
    setPage((prev) => Math.min(prev, totalPages));
  }, [totalPages]);

  const pageItems = useMemo(() => {
    const safePage = Math.min(page, totalPages);
    const start = (safePage - 1) * pageSize;
    return filteredSorted.slice(start, start + pageSize);
  }, [filteredSorted, page, totalPages, pageSize]);

  const onSetType = (t) => {
    setActiveType(t);
    setPage(1);
  };

  const canPrev = page > 1;
  const canNext = page < totalPages;

  return (
    <section id="projects" className="scroll-mt-28 py-20 sm:py-24">
      <Container>
        <RevealSection>
          <div className="mb-8 flex flex-col gap-4 sm:mb-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-2xl">
              <div className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-white/60">
                Projects
              </div>
              <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                Featured work
              </h2>
              <p className="mt-3 text-sm leading-7 text-white/72 sm:text-base">
                Featured projects are highlighted and shown first.
              </p>
            </div>

            <div className="flex items-center gap-3 text-sm text-white/65">
              <span>
                {activeType} ({filteredSorted.length})
              </span>
              <span className="hidden sm:inline">•</span>
              <span>
                Page {page} / {totalPages}
              </span>
            </div>
          </div>

          <div className="mb-6 flex flex-wrap gap-2">
            {TYPES.map((t) => (
              <button
                key={t}
                onClick={() => onSetType(t)}
                className={[
                  "focus-ring rounded-xl px-4 py-2 text-sm font-medium transition",
                  t === activeType
                    ? "border border-white/15 bg-white/10 text-white"
                    : "border border-white/10 bg-white/5 text-white/70 hover:bg-white/10 hover:text-white",
                ].join(" ")}
              >
                {t}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {pageItems.map((p) => (
              <ProjectCard key={p.title} project={p} />
            ))}
          </div>

          <div className="mt-8 flex items-center justify-center gap-3 sm:justify-end">
            <button
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
        </RevealSection>
      </Container>
    </section>
  );
}