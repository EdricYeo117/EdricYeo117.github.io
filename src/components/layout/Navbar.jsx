import { useEffect, useState } from "react";
import resumePdf from "../../assets/resume.pdf"; 

const NAV_OFFSET = 96;

const LINKS = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skillsets" },
  { id: "tech", label: "Tech Stack" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [activeId, setActiveId] = useState("home");

  const goTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    setOpen(false);

    const top = el.getBoundingClientRect().top + window.scrollY - NAV_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });

    history.replaceState(null, "", `#${id}`);
  };

  useEffect(() => {
    const els = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (els.length === 0) return;

    const io = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort(
            (a, b) =>
              Math.abs(a.boundingClientRect.top) - Math.abs(b.boundingClientRect.top)
          )[0];

        if (visible?.target?.id) setActiveId(visible.target.id);
      },
      {
        rootMargin: `-${NAV_OFFSET}px 0px -60% 0px`,
        threshold: 0,
      }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/15 bg-white/5 backdrop-blur-xl">
          <div className="flex items-center justify-between px-4 py-3">
            <button
              onClick={() => goTo("home")}
              className="text-sm font-semibold tracking-tight text-white"
              aria-label="Go to top"
            >
              Edric Yeo Portfolio Website
            </button>

            <nav className="hidden items-center gap-1 md:flex">
              {LINKS.slice(1).map((l) => {
                const isActive = activeId === l.id;
                return (
                  <button
                    key={l.id}
                    onClick={() => goTo(l.id)}
                    className={[
                      "rounded-xl px-3 py-2 text-sm transition",
                      isActive
                        ? "bg-white/10 text-white"
                        : "text-white/70 hover:bg-white/10 hover:text-white",
                    ].join(" ")}
                  >
                    {l.label}
                  </button>
                );
              })}

              <a
                href="/resume.pdf"
                className="ml-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-neutral-950 hover:opacity-90"
              >
                Resume
              </a>
            </nav>

            <button
              className="md:hidden rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80 hover:bg-white/10"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
              aria-expanded={open}
            >
              Menu
            </button>
          </div>

          {open && (
            <div className="border-t border-white/10 px-3 py-3 md:hidden">
              <div className="flex flex-col gap-1">
                {LINKS.slice(1).map((l) => {
                  const isActive = activeId === l.id;
                  return (
                    <button
                      key={l.id}
                      onClick={() => goTo(l.id)}
                      className={[
                        "rounded-xl px-3 py-2 text-left text-sm transition",
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-white/80 hover:bg-white/10 hover:text-white",
                      ].join(" ")}
                    >
                      {l.label}
                    </button>
                  );
                })}

                <a
                  href="/resume.pdf"
                  className="mt-2 rounded-xl bg-white px-4 py-2 text-center text-sm font-medium text-neutral-950"
                >
                  Resume
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
