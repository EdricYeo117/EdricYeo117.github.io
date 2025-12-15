import { useMemo, useState } from "react";
import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";
import { projects } from "../../data/projects";

function Badge({ children, accent }) {
  return <span className={accent ? "chip chip-accent" : "chip"}>{children}</span>;
}

function FilterPill({ active, children, onClick }) {
  return (
    <button
      onClick={onClick}
      className={["nav-pill focus-ring", active ? "nav-pill-active" : ""].join(" ")}
    >
      {children}
    </button>
  );
}

function typeOrder(t) {
  if (t === "School") return 1;
  if (t === "Internship") return 2;
  if (t === "Personal") return 3;
  return 99;
}

export default function Projects() {
  const list = Array.isArray(projects) ? projects : [];

  const types = useMemo(() => {
    const set = new Set(list.map((p) => p.type).filter(Boolean));
    return ["All", ...Array.from(set).sort((a, b) => typeOrder(a) - typeOrder(b))];
  }, [list]);

  const [activeType, setActiveType] = useState("All");
  const [expanded, setExpanded] = useState(() => new Set());

  const filtered = useMemo(() => {
    if (activeType === "All") return list;
    return list.filter((p) => p.type === activeType);
  }, [list, activeType]);

  const toggleExpand = (key) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  };

  return (
    <RevealSection id="projects" className="scroll-mt-28 py-16">
      <Container>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
            <p className="mt-2 text-white/70">
              A selection of projects across full-stack, mobile, cloud, and database work.
            </p>
          </div>

          {/* Filter */}
          <div className="flex flex-wrap gap-2">
            {types.map((t) => (
              <FilterPill key={t} active={activeType === t} onClick={() => setActiveType(t)}>
                {t}
              </FilterPill>
            ))}
          </div>
        </div>

        {/* More spacing between header and grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p) => {
            const key = `${p.title}-${p.githubLink}`;
            const isExpanded = expanded.has(key);
            const hasLongDesc = (p.description ?? "").length > 120;

            return (
              <div
                key={key}
                className={[
                  "group relative overflow-hidden p-6",
                  "card-glass card-hover",
                  // accent edge on hover (Ocean Mist)
                  "hover:border-[rgb(var(--accent))/0.35]",
                ].join(" ")}
              >
                {/* subtle hover glow */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-[rgb(var(--accent))/0.18] blur-3xl" />
                </div>

                <div className="relative flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>

                      {p.type && (
                        <div className="mt-2">
                          <Badge accent>{p.type}</Badge>
                        </div>
                      )}
                    </div>

                    <a
                      href={p.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className={[
                        "shrink-0 rounded-xl px-2 py-1 text-sm",
                        "border border-white/10 bg-white/5 text-white/70 transition",
                        "hover:bg-white/10 hover:text-white",
                        // accent ring on focus
                        "focus-ring",
                      ].join(" ")}
                      aria-label="Open GitHub"
                    >
                      ↗
                    </a>
                  </div>

                  {/* Description: 2–3 lines by default */}
                  <p
                    className={[
                      "mt-3 text-sm text-white/70",
                      isExpanded ? "" : "line-clamp-3",
                    ].join(" ")}
                  >
                    {p.description}
                  </p>

                  {/* Read more */}
                  {hasLongDesc && (
                    <button
                      onClick={() => toggleExpand(key)}
                      className="mt-2 w-fit text-sm text-white/70 transition hover:text-white focus-ring rounded-md"
                    >
                      {isExpanded ? "Show less" : "Read more"}
                    </button>
                  )}

                  {/* Stack */}
                  {(p.stack ?? []).length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {(p.stack ?? []).slice(0, 6).map((t) => (
                        <Badge key={`${key}-${t}`}>{t}</Badge>
                      ))}
                    </div>
                  )}

                  <div className="mt-6">
                    <a
                      href={p.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-white/70 transition hover:text-white focus-ring rounded-md"
                    >
                      View on GitHub →
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </RevealSection>
  );
}
