import { useEffect, useMemo, useState } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";
import profileImg from "../../assets/profile.png";
import { focusAreas } from "../../data/focus";

function useTypewriter(text, { speed = 70, startDelay = 150 } = {}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    let i = 0;
    let intervalId;
    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setValue(text.slice(0, i));
        if (i >= text.length) clearInterval(intervalId);
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return value;
}

function FocusCard({ item, open, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="card-glass card-hover p-5 text-left focus-ring"
      style={{ borderColor: open ? "rgb(var(--accent) / 0.35)" : undefined }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="text-sm font-semibold text-white/90">
            {item.title}
          </div>
          <div className="mt-1 text-xs text-white/60">{item.subtitle}</div>
        </div>
        <div className="text-white/60">{open ? "–" : "+"}</div>
      </div>

      <div
        className={[
          "grid transition-[grid-template-rows,opacity,margin-top] duration-300 ease-out",
          open
            ? "grid-rows-[1fr] opacity-100 mt-3"
            : "grid-rows-[0fr] opacity-0 mt-0",
        ].join(" ")}
      >
        <div className="overflow-hidden">
          <ul className="space-y-1.5 text-xs text-white/70">
            {item.details.map((d) => (
              <li key={d}>• {d}</li>
            ))}
          </ul>
          <div
            className="mt-3 h-1 w-12 rounded-full"
            style={{ background: "rgb(var(--accent) / 0.85)" }}
          />
        </div>
      </div>
    </button>
  );
}

export default function Hero() {
  const fullName = "Edric Yeo";
  const typed = useTypewriter(fullName, { speed: 70, startDelay: 150 });
  const typingDurationMs = useMemo(
    () => fullName.length * 70 + 150,
    [fullName]
  );
  const prefersReduced = useReducedMotion();

  // Avatar tilt (kept subtle via smaller degrees + gentler spring)
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 90, damping: 22, mass: 0.35 });
  const sy = useSpring(my, { stiffness: 90, damping: 22, mass: 0.35 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-5, 5]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [5, -5]);

  const onAvatarMove = (e) => {
    if (prefersReduced) return;
    const r = e.currentTarget.getBoundingClientRect();
    mx.set((e.clientX - r.left) / r.width - 0.5);
    my.set((e.clientY - r.top) / r.height - 0.5);
  };
  const onAvatarLeave = () => {
    mx.set(0);
    my.set(0);
  };

  const [openKey, setOpenKey] = useState(null);

  return (
    <RevealSection id="home" className="scroll-mt-28 pt-28 pb-12 sm:pt-32" once>
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          {/* LEFT */}
          <div>
            {/* Keep this once only (removed from right caption) */}
            {/* <span className="chip chip-accent">Cloud • AI • Full-stack</span> */}

            <h1 className="mt-5 min-h-[1.1em] text-5xl font-semibold tracking-tight sm:text-6xl">
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                {typed}
              </span>
              <span
                className={[
                  "ml-1 inline-block h-[0.95em] w-[2px] align-[-0.1em]",
                  typed.length >= fullName.length
                    ? "opacity-0"
                    : "animate-pulse",
                ].join(" ")}
                style={{ background: "rgb(var(--accent) / 0.85)" }}
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: (typingDurationMs + 120) / 1000,
              }}
              className="mt-4 max-w-xl text-white/70"
            >
              Building cloud and AI-driven applications with enterprise-grade
              solutions. Focused on reliable systems, clean interfaces, and
              practical automation.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.35,
                delay: (typingDurationMs + 240) / 1000,
              }}
              className="mt-7 flex flex-wrap gap-3"
            >
              <a href="#projects" className="btn-primary focus-ring">
                View Projects
              </a>
              <a href="#contact" className="btn-secondary focus-ring">
                Contact Me
              </a>
            </motion.div>

            {/* Current Focus */}
            <div className="mt-10">
              <div className="flex items-center gap-3">
                <p className="text-sm font-medium text-white/80">
                  Current Focus
                </p>
                <div
                  className="h-px flex-1"
                  style={{ background: "rgb(var(--accent) / 0.22)" }}
                />
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {focusAreas.map((item) => {
                  const open = openKey === item.key;
                  return (
                    <FocusCard
                      key={item.key}
                      item={item}
                      open={open}
                      onToggle={() =>
                        setOpenKey((prev) =>
                          prev === item.key ? null : item.key
                        )
                      }
                    />
                  );
                })}
              </div>
            </div>
          </div>

          {/* RIGHT */}
<motion.div
  initial={{ opacity: 0, y: 14 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.45 }}
  className="flex justify-center lg:justify-center lg:pr-10"
>
  <div className="relative flex flex-col items-center">
    <motion.div
      onMouseMove={onAvatarMove}
      onMouseLeave={onAvatarLeave}
      style={
        prefersReduced
          ? undefined
          : { rotateX, rotateY, transformStyle: "preserve-3d" }
      }
    >
      <div className="h-44 w-44 overflow-hidden rounded-full shadow-[0_22px_90px_rgba(0,0,0,0.55)] ring-1 ring-white/10 sm:h-52 sm:w-52 lg:h-60 lg:w-60">
        <img
          src={profileImg}
          alt="Edric Yeo"
          className="h-full w-full object-cover object-[48%_16%]"
          loading="lazy"
        />
      </div>
    </motion.div>

    <div className="mt-4 text-center">
      <div className="text-sm font-semibold text-white/90">
        Cloud • AI • Full-stack
      </div>
      <div className="mt-1 text-xs text-white/60">Based in Singapore</div>
    </div>
  </div>
</motion.div>
        </div>
      </Container>
    </RevealSection>
  );
}
