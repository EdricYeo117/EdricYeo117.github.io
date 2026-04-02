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
    [],
  );

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    setOpen(false);

    const top = el.getBoundingClientRect().top + window.scrollY - 84;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    const ids = LINKS.map((l) => l.id);
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean);
    if (!sections.length) return;

    let ticking = false;

    const updateActiveSection = () => {
      const scrollPosition = window.scrollY + 140;
      let current = ids[0];

      for (const section of sections) {
        if (section.offsetTop <= scrollPosition) {
          current = section.id;
        }
      }

      setActiveId((prev) => (prev === current ? prev : current));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateActiveSection);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    updateActiveSection();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [LINKS]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto w-full max-w-7xl px-4 pt-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl">
            <button
              onClick={() => goTo("home")}
              className="focus-ring text-left text-sm font-semibold tracking-tight text-white/90 transition hover:text-[rgb(var(--mist))] sm:text-base"
            >
              EY Portfolio
            </button>

            <nav className="hidden items-center gap-2 md:flex">
              {LINKS.slice(1).map((l) => (
                <button
                  key={l.id}
                  onClick={() => goTo(l.id)}
                  className={[
                    "focus-ring rounded-xl px-4 py-2 text-sm font-medium transition-all",
                    activeId === l.id
                      ? "border border-white/10 text-white"
                      : "text-white/70 hover:bg-white/5 hover:text-white",
                  ].join(" ")}
                  style={
                    activeId === l.id
                      ? {
                          background: "rgb(var(--accent) / 0.16)",
                          borderColor: "rgb(var(--accent) / 0.35)",
                        }
                      : undefined
                  }
                >
                  {l.label}
                </button>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                Resume
              </a>
            </nav>

            <button
              onClick={() => setOpen((v) => !v)}
              className="focus-ring inline-flex items-center justify-center rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium text-white md:hidden"
              aria-expanded={open}
              aria-label="Toggle mobile menu"
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden" onClick={() => setOpen(false)}>
          <div
            className="absolute inset-x-4 top-20 rounded-2xl border border-white/10 bg-[#07111a]/95 p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2">
              {LINKS.slice(1).map((l) => (
                <button
                  key={l.id}
                  onClick={() => goTo(l.id)}
                  className={[
                    "focus-ring rounded-xl px-4 py-3 text-left text-sm font-medium transition",
                    activeId === l.id
                      ? "text-white"
                      : "text-white/75 hover:bg-white/5",
                  ].join(" ")}
                  style={
                    activeId === l.id
                      ? {
                          background: "rgb(var(--accent) / 0.16)",
                          border: "1px solid rgb(var(--accent) / 0.35)",
                        }
                      : undefined
                  }
                >
                  {l.label}
                </button>
              ))}

              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary mt-2 text-center"
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}