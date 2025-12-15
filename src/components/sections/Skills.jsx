import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <RevealSection id="skills" className="scroll-mt-28 py-16">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight">Skillsets</h2>
        <p className="mt-2 text-white/70">
          I am a full-stack developer with experience in programming in various languages.
        </p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {skills.map((s) => (
            <div
              key={s.title}
              className="flex items-center gap-4 rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl transition hover:bg-white/10"
            >
              {/* Consistent icon sizing */}
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-white/5">
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
