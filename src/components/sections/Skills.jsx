import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";
import { skills } from "../../data/skills";

export default function Skills() {
  const list = Array.isArray(skills) ? skills : [];

  return (
    <RevealSection id="skills" className="scroll-mt-28 py-16">
      <Container>
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-[rgb(var(--mist))] to-[rgb(var(--accent))] bg-clip-text text-transparent">
              Skillsets
            </span>
          </h2>
          <p className="mt-2 text-white/70">
            I am a full-stack developer with experience in programming in various languages.
          </p>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          {list.map((s) => (
            <div
              key={s.title}
              className={[
                "card-glass card-hover",
                "flex items-center gap-4 p-6",
                "hover:border-[rgb(var(--accent2))/0.35]",
              ].join(" ")}
            >
              {/* Icon */}
              <div
                className={[
                  "flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border",
                  "bg-[rgb(var(--accent))/0.10]",
                  "border-[rgb(var(--accent))/0.25]",
                ].join(" ")}
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
