import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";
import { technologyStack } from "../../data/technologyStack";

export default function TechStack() {
  return (
    <RevealSection id="tech" className="scroll-mt-28 py-16">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight">Technology Stack</h2>
        <p className="mt-2 text-white/70">
          Tools and technologies I frequently use across projects.
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {technologyStack.map((tech) => (
            <a
              key={tech.name}
              href={tech.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/10"
            >
              <div className="flex gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="h-9 w-9 object-contain"
                    loading="lazy"
                  />
                </div>

                <div className="min-w-0">
                  <h3 className="text-lg font-semibold">{tech.name}</h3>
                  <p className="mt-1 text-sm text-white/70">{tech.description}</p>
                  <div className="mt-3 text-sm text-white/70 group-hover:text-white">
                    Learn more →
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </RevealSection>
  );
}
