import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";
import profileImg from "../../assets/profile.png";

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

const FOCUS = [
  "AI systems orchestration (TTS, RAG, pipelines)",
  "ERP document ingestion workflows (n8n + DB upserts)",
  "React dashboards for Vendor / PO / Invoice insights",
];

export default function Hero() {
  const fullName = "Edric Yeo";
  const typed = useTypewriter(fullName, { speed: 70, startDelay: 150 });
  const typingDurationMs = useMemo(() => fullName.length * 70 + 150, [fullName]);

  return (
    <RevealSection id="home" className="scroll-mt-28 pt-28 pb-14 sm:pt-32">
      <Container>
        {/* HERO TOP */}
        <div className="grid items-center gap-10 lg:grid-cols-[1.15fr_0.85fr]">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
              Cloud • AI • Full-stack
            </div>

            <h1 className="mt-5 min-h-[1.1em] text-5xl font-semibold tracking-tight sm:text-6xl">
              <span className="bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                {typed}
              </span>
              <span
                className={[
                  "ml-1 inline-block h-[0.95em] w-[2px] align-[-0.1em] bg-white/70",
                  typed.length >= fullName.length ? "opacity-0" : "animate-pulse",
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
              Cloud Engineering Intern @ Oracle. Building AI-driven systems and enterprise workflows.
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
              <a
                href="#projects"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-neutral-950 hover:opacity-90"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium hover:bg-white/10"
              >
                Contact
              </a>
            </motion.div>
          </div>

          {/* RIGHT: Avatar card */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="w-full max-w-sm rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
              <div className="relative mx-auto h-56 w-56">
                <div className="pointer-events-none absolute -inset-6 rounded-full bg-white/10 blur-3xl" />
                <div className="relative h-full w-full overflow-hidden rounded-full border border-white/20 bg-white/5 ring-2 ring-white/10">
                  <img
                    src={profileImg}
                    alt="Edric Yeo"
                    className="h-full w-full object-cover object-[50%_22%] scale-105"
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="mt-5 text-center">
                <div className="text-sm font-medium text-white/90">
                  Cloud • AI • Full-stack
                </div>
                <div className="mt-1 text-xs text-white/60">Based in Singapore</div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* CURRENTLY FOCUSED (lighter, aligned) */}
        <div className="mt-10 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl">
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-white/80">Currently focused on</p>
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FOCUS.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-white/80"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </RevealSection>
  );
}
