import { useEffect, useMemo, useState } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";
import profileImg from "../../assets/profile.jpg";

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

const focusAreas = [
  {
    key: "cloud-ai",
    title: "Cloud + AI Systems",
    subtitle: "Production-minded applied AI and backend orchestration",
    details: [
      "Built enterprise-facing demo systems combining cloud services, AI workflows, and frontend experiences",
      "Worked across backend services, integration layers, event flows, and user-facing delivery",
      "Interested in scalable applied AI rather than isolated prototypes",
    ],
  },
  {
    key: "hologram",
    title: "Interactive AI Hologram",
    subtitle: "LLM, TTS, orchestration, and real-time presentation systems",
    details: [
      "Built an interactive AI hologram showcase during my Oracle internship",
      "Worked on live conversational flows, system orchestration, and showcase reliability",
      "Designed for real demos and customer engagements, not just offline experiments",
    ],
  },
  {
    key: "drone-cv",
    title: "Drone + Computer Vision",
    subtitle: "Android, DJI SDK, remote control workflows, and CV pipelines",
    details: [
      "Developed Kotlin-based Android features for AI-enabled drone demos",
      "Integrated remotely callable drone workflows and computer vision functions",
      "Worked on practical CV capabilities like pose estimation and fire or smoke detection",
    ],
  },
];

function FocusCard({ item, open, onToggle }) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className="w-full rounded-2xl border border-white/10 bg-white/5 p-4 text-left transition hover:bg-white/8 focus-ring"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-sm font-semibold text-white">{item.title}</div>
          <div className="mt-1 text-sm text-white/60">{item.subtitle}</div>
        </div>
        <div className="text-xl leading-none text-white/60">{open ? "–" : "+"}</div>
      </div>

      {open ? (
        <ul className="mt-4 space-y-2 text-sm text-white/75">
          {item.details.map((d) => (
            <li key={d}>• {d}</li>
          ))}
        </ul>
      ) : null}
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

  const [openKey, setOpenKey] = useState("cloud-ai");

  return (
    <section id="home" className="relative pt-28 pb-18 sm:pt-32 sm:pb-24">
      <Container>
        <RevealSection>
          <div className="grid items-center gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <div className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] text-white/65">
                Cloud Engineering • AI • Full-Stack Systems
              </div>

              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
                {typed}
                <span
                  className={[
                    "ml-1 inline-block h-[1em] w-[2px] align-[-0.1em]",
                    typed.length < fullName.length ? "opacity-100" : "animate-pulse",
                  ].join(" ")}
                  style={{ background: "rgb(var(--accent) / 0.85)" }}
                />
              </h1>

              <p className="mt-5 max-w-2xl text-base leading-8 text-white/72 sm:text-lg">
                I build applied AI, cloud, and full-stack systems that are meant to
                be used in the real world. My work spans interactive showcase systems,
                backend orchestration, enterprise-facing AI demos, and drone-based
                computer vision workflows.
              </p>

              <p className="mt-4 max-w-2xl text-base leading-8 text-white/60">
                Most recently, I built the Interactive AI Hologram during my Oracle
                Cloud Engineering internship, contributed to AI-enabled drone
                capabilities using Android and computer vision, and developed systems
                across Java, Python, React, Node.js, AWS, and Oracle Cloud.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#projects"
                  className="focus-ring inline-flex items-center rounded-2xl border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:translate-y-[-1px]"
                >
                  View Featured Work
                </a>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Resume
                </a>

                <a
                  href="https://www.linkedin.com/in/yeo-jin-rong/"
                  target="_blank"
                  rel="noreferrer"
                  className="focus-ring inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  LinkedIn
                </a>

                <a
                  href="#contact"
                  className="focus-ring inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  Contact Me
                </a>
              </div>

              <div className="mt-10">
                <div className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
                  Current Focus
                </div>

                <div className="grid gap-3">
                  {focusAreas.map((item) => {
                    const open = openKey === item.key;
                    return (
                      <FocusCard
                        key={item.key}
                        item={item}
                        open={open}
                        onToggle={() =>
                          setOpenKey((prev) => (prev === item.key ? null : item.key))
                        }
                      />
                    );
                  })}
                </div>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <motion.div
                onMouseMove={onAvatarMove}
                onMouseLeave={onAvatarLeave}
                style={prefersReduced ? undefined : { rotateX, rotateY }}
                transition={{ duration: typingDurationMs / 1000 }}
                className="relative w-full max-w-[360px]"
              >
                <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
                  <img
                    src={profileImg}
                    alt="Edric Yeo"
                    className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
                  />

                  <div className="mt-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                    <div className="text-sm font-semibold text-white">
                      Based in Singapore
                    </div>
                    <div className="mt-2 text-sm leading-7 text-white/65">
                      Cloud engineering, applied AI, backend systems, showcase
                      technology, and real-world technical delivery.
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </RevealSection>
      </Container>
    </section>
  );
}