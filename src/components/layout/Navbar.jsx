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

  useEffect(() => {
    const ids = LINKS.map((l) => l.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);
    if (!sections.length) return;

    let ticking = false;

    const updateActiveSection = () => {
      const viewportOffset = Math.min(window.innerHeight * 0.35, 320);
      const scrollPosition = window.scrollY + viewportOffset;
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

  useEffect(() => {
    if (!open) return undefined;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto w-full max-w-[1184px] px-4 pt-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/35 px-4 py-3 backdrop-blur-xl">
            <a
              href="#home"
              className="focus-ring text-left text-sm font-semibold tracking-tight text-white/90 transition hover:text-[rgb(var(--mist))] sm:text-base"
              aria-label="Edric Yeo — back to top"
            >
              EY<span className="text-[rgb(var(--accent))]">.</span>
            </a>

            <nav
              aria-label="Main navigation"
              className="hidden items-center gap-2 md:flex"
            >
              {LINKS.slice(1).map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  aria-current={activeId === l.id ? "location" : undefined}
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
                </a>
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
              aria-controls="mobile-navigation"
              aria-label={open ? "Close main menu" : "Open main menu"}
            >
              Menu
            </button>
          </div>
        </div>
      </header>

      {open ? (
        <div
          className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
          onClick={() => setOpen(false)}
        >
          <div
            id="mobile-navigation"
            className="absolute inset-x-4 top-24 rounded-2xl border border-white/10 bg-[#07111a]/95 p-4 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex flex-col gap-2">
              {LINKS.slice(1).map((l) => (
                <a
                  key={l.id}
                  href={`#${l.id}`}
                  onClick={() => setOpen(false)}
                  aria-current={activeId === l.id ? "location" : undefined}
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
                </a>
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
