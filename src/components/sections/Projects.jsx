import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";
import { projects } from "../../data/projects";
import { motion } from "framer-motion";

function Badge({ children }) {
  return (
    <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/80">
      {children}
    </span>
  );
}

export default function Projects() {
  const list = Array.isArray(projects) ? projects : [];

  return (
    <RevealSection id="projects" className="scroll-mt-28 py-16">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight">Projects</h2>
        <p className="mt-2 text-white/70">
          A selection of projects across full-stack, mobile, cloud, and database work.
        </p>

        <motion.div
          initial="hide"
          whileInView="show"
          viewport={{ once: false, amount: 0.12 }}
          variants={{
            hide: {},
            show: { transition: { staggerChildren: 0.06 } },
          }}
          className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
        >
          {list.map((p) => (
            <motion.a
              key={p.title}
              href={p.githubLink}
              target="_blank"
              rel="noreferrer"
              variants={{
                hide: { opacity: 0, y: 14 },
                show: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              className="group relative overflow-hidden rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
              </div>

              <div className="relative">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="text-lg font-semibold leading-snug">{p.title}</h3>
                  <span className="shrink-0 text-sm text-white/60 group-hover:text-white">
                    ↗
                  </span>
                </div>

                <p className="mt-2 text-sm text-white/70">{p.description}</p>

                {(p.stack ?? []).length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-2">
                    {(p.stack ?? []).slice(0, 6).map((t) => (
                      <Badge key={t}>{t}</Badge>
                    ))}
                  </div>
                )}

                <div className="mt-6 text-sm text-white/70 group-hover:text-white">
                  View on GitHub →
                </div>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </Container>
    </RevealSection>
  );
}
