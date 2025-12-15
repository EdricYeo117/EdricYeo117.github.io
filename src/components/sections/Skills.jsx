import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <RevealSection id="skills" className="scroll-mt-28 py-16">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight">Skillsets</h2>
        <p className="mt-2 text-white/70">
          Full-stack developer with experience across multiple languages and platforms.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {skills.map((s) => (
            <div
              key={s.title}
              className="card-glass card-hover flex items-center gap-4 p-6"
              style={{ transition: "border-color 200ms ease" }}
              onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgb(var(--accent) / 0.35)")}
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
            >
              <div
                className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border"
                style={{
                  borderColor: "rgb(var(--accent) / 0.25)",
                  background: "rgb(var(--accent2) / 0.10)",
                }}
              >
                <img src={s.image} alt={s.alt} className="h-9 w-9 object-contain" />
              </div>

              <div className="min-w-0">
                <h3 className="text-lg font-semibold">{s.title}</h3>
                <p className="mt-1 text-sm text-white/70">{s.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </RevealSection>
  );
}
