import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";
import { skills } from "../../data/skills";

export default function Skills() {
  return (
    <RevealSection id="skills" className="section-shell">
      <Container>
        <p className="eyebrow">What I bring</p>
        <h2 className="section-title">Built on a versatile foundation.</h2>
        <p className="mt-2 text-white/70">
          Full-stack developer with experience across multiple languages and
          platforms.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
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
