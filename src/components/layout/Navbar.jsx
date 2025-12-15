import { useEffect, useMemo, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const LINKS = useMemo(
    () => [
      { id: "home", label: "Home" },
      { id: "about", label: "About" },
      { id: "projects", label: "Projects" },
      { id: "skills", label: "Skills" },
      { id: "tech", label: "Tech Stack" },
      { id: "contact", label: "Contact" },
    ],
    []
  );

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    setOpen(false);
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
  };

  // Active section observer
  useEffect(() => {
    const ids = LINKS.map((l) => l.id);
    const els = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!els.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        // pick the most visible intersecting section
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => (b.intersectionRatio ?? 0) - (a.intersectionRatio ?? 0))[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        root: null,
        threshold: [0.25, 0.35, 0.5, 0.65],
        rootMargin: "-25% 0px -55% 0px", // compensates navbar height + feel
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [LINKS]);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => goTo("home")}
              className="text-base font-bold tracking-tight text-white hover:text-[rgb(var(--mist))] transition-colors"
            >
              Edric Yeo
            </button>

            <nav className="hidden items-center gap-2 md:flex">
              {LINKS.slice(1).map((l) => (
                <button
                  key={l.id}
                  onClick={() => goTo(l.id)}
                  className={[
                    "px-4 py-2 rounded-xl text-sm font-medium transition-all focus-ring",
                    activeId === l.id
                      ? "border border-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/5",
                  ].join(" ")}
                  style={
                    activeId === l.id
                      ? {
                          background: "rgb(var(--accent) / 0.16)",
                          borderColor: "rgb(var(--accent) / 0.35)",
                          color: "rgb(255 255 255 / 0.95)",
                        }
                      : undefined
                  }
                >
                  {l.label}
                </button>
              ))}

              <a
                href="/resume.pdf"
                className="ml-2 px-5 py-2 rounded-xl text-white font-medium text-sm transition-all focus-ring"
                style={{
                  background: "linear-gradient(90deg, rgb(var(--accent)), rgb(var(--accent2)))",
                }}
              >
                Resume
              </a>
            </nav>

            <button
              className="md:hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/80 hover:bg-white/10 focus-ring"
              onClick={() => setOpen((v) => !v)}
            >
              Menu
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 px-4 py-4 md:hidden">
              <div className="flex flex-col gap-2">
                {LINKS.slice(1).map((l) => (
                  <button
                    key={l.id}
                    onClick={() => goTo(l.id)}
                    className={[
                      "px-4 py-2 rounded-xl text-left text-sm font-medium transition-all focus-ring",
                      activeId === l.id ? "text-white" : "text-white/70 hover:bg-white/5",
                    ].join(" ")}
                    style={
                      activeId === l.id
                        ? { background: "rgb(var(--accent) / 0.16)", border: "1px solid rgb(var(--accent) / 0.35)" }
                        : undefined
                    }
                  >
                    {l.label}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
