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
    const top = el.getBoundingClientRect().top + window.scrollY - 96;
    window.scrollTo({ top, behavior: "smooth" });
  };

  useEffect(() => {
    const ids = LINKS.map((l) => l.id);
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (!sections.length) return;

    let ticking = false;

    const updateActiveSection = () => {
      const navOffset = 120;
      const scrollPosition = window.scrollY + navOffset;

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
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mt-6 rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-2xl">
          <div className="flex items-center justify-between px-6 py-4">
            {/* Smaller + cleaner brand to match nav pill height */}
            <button
              onClick={() => goTo("home")}
              className="flex items-center gap-2 text-sm sm:text-base font-semibold tracking-tight leading-none text-white/90 hover:text-[rgb(var(--mist))] transition-colors focus-ring"
            >
              <span>EY</span>
              <span className="hidden sm:inline text-xs font-medium text-white/50">
                Portfolio
              </span>
            </button>

            <nav className="hidden items-center gap-2 md:flex">
              {LINKS.slice(1).map((l) => (
                <button
                  key={l.id}
                  onClick={() => goTo(l.id)}
                  className={[
                    "px-4 py-2 rounded-xl text-sm font-medium leading-none transition-all focus-ring",
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
                target="_blank"
                rel="noreferrer"
                className="ml-2 px-5 py-2 rounded-xl text-white font-medium text-sm leading-none transition-all focus-ring"
                style={{
                  background:
                    "linear-gradient(90deg, rgb(var(--accent)), rgb(var(--accent2)))",
                }}
              >
                Resume
              </a>
            </nav>

            <button
              className="md:hidden rounded-xl border border-white/15 bg-white/5 px-4 py-2 text-sm leading-none text-white/80 hover:bg-white/10 focus-ring"
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
                      "px-4 py-2 rounded-xl text-left text-sm font-medium leading-none transition-all focus-ring",
                      activeId === l.id
                        ? "text-white"
                        : "text-white/70 hover:bg-white/5",
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
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
