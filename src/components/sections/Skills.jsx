import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <RevealSection id="skills" className="pt-24">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight">Skillsets</h2>
        <p className="mt-2 text-white/70">
          Full-stack developer with experience across multiple languages and
          platforms.
        </p>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {skills.map((s) => (
            <div
              key={s.title}
              className="card-glass rounded-3xl p-5 sm:p-6"
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor =
                  "rgb(var(--accent) / 0.35)")
              }
              onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
            >
              {s.image ? (
                <img
                  src={s.image}
                  alt={s.alt || s.title}
                  className="mb-4 h-12 w-12 object-contain"
                />
              ) : null}

              <h3 className="text-lg font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/75">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </RevealSection>
  );
}
