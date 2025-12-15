import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";
import profileImg from "../../assets/profile.png";
import { hero } from "../../data/hero"; // NEW

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

function CTAButton({ href, variant = "primary", children }) {
  const cls =
    variant === "secondary"
      ? "btn-secondary focus-ring"
      : "btn-primary focus-ring";
  return (
    <a href={href} className={cls}>
      {children}
    </a>
  );
}

export default function Hero() {
  const typed = useTypewriter(hero.name, { speed: 70, startDelay: 150 });
  const typingDurationMs = useMemo(
    () => hero.name.length * 70 + 150,
    [hero.name]
  );

  // Subtle cursor-follow tilt for avatar
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const sx = useSpring(mx, { stiffness: 120, damping: 18, mass: 0.3 });
  const sy = useSpring(my, { stiffness: 120, damping: 18, mass: 0.3 });
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8]);
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8]);

  const onAvatarMove = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    mx.set(px);
    my.set(py);
  };

  const onAvatarLeave = () => {
    mx.set(0);
    my.set(0);
  };

  return (
    <RevealSection id="home" className="scroll-mt-28 pt-28 pb-14 sm:pt-32">
      <Container>
        {/* HERO TOP */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT */}
          <div>
            <div className="chip chip-accent">{hero.tagline}</div>

            <h1 className="mt-5 min-h-[1.1em] text-5xl font-semibold tracking-tight sm:text-6xl">
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                {typed}
              </span>
              <span
                className={[
                  "ml-1 inline-block h-[0.95em] w-[2px] align-[-0.1em] bg-white/70",
                  typed.length >= hero.name.length ? "opacity-0" : "animate-pulse",
                ].join(" ")}
              />
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: (typingDurationMs + 120) / 1000,
              }}
              className="mt-3 max-w-xl text-white/70"
            >
              {hero.subtitle}
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
              {hero.ctas.map((c) => (
                <CTAButton key={c.href} href={c.href} variant={c.variant}>
                  {c.label}
                </CTAButton>
              ))}
            </motion.div>
          </div>

          {/* RIGHT: Avatar */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div className="pointer-events-none absolute -inset-10 -z-10 rounded-full bg-[rgb(var(--accent))/0.18] blur-3xl" />
              <div className="pointer-events-none absolute -inset-16 -z-10 rounded-full bg-[rgb(var(--accent2))/0.12] blur-3xl" />

              <motion.div
                onMouseMove={onAvatarMove}
                onMouseLeave={onAvatarLeave}
                style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
                className="relative"
              >
                <div className="h-44 w-44 overflow-hidden rounded-full shadow-[0_22px_90px_rgba(0,0,0,0.55)] sm:h-52 sm:w-52 lg:h-60 lg:w-60">
                  <img
                    src={profileImg}
                    alt={hero.name}
                    className="h-full w-full object-cover"
                    style={{ objectPosition: "50% 22%" }}
                    loading="lazy"
                  />
                </div>
              </motion.div>

              <div className="mt-4 text-center">
                <div className="text-sm font-semibold text-white/90">
                  {hero.tagline}
                </div>
                <div className="mt-1 text-xs text-white/60">{hero.location}</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FOCUS (data-driven) */}
        <div className="mt-10">
          <div className="flex items-center gap-3">
            <p className="text-sm font-medium text-white/80">
              {hero.focus.title}
            </p>
            <div className="h-px flex-1 bg-[rgb(var(--accent))/0.22]" />
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hero.focus.items.map((it) => (
              <div
                key={it.id}
                className={[
                  "rounded-2xl p-4 text-sm text-white/80 backdrop-blur",
                  "bg-white/5 border border-white/10",
                  "hover:border-[rgb(var(--accent))/0.35] transition",
                ].join(" ")}
              >
                <div className="font-medium text-white/90">{it.title}</div>
                {it.detail && <div className="mt-1 text-white/65">{it.detail}</div>}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </RevealSection>
  );
}
