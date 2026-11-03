import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";
import { experience } from "../../data/experience";

export default function Experience() {
  return (
    <RevealSection id="experience" className="section-shell experience-section">
      <Container>
        <div className="mb-10">
          <p className="eyebrow">Where I’ve worked</p>
          <h2 className="section-title">Work Experience</h2>
          <p className="mt-4 max-w-2xl text-base leading-8 text-white/65">
            Building products, delivering live technical experiences, and keeping
            critical systems running.
          </p>
        </div>

        <div className="experience-list">
          {experience.map((item) => (
            <article key={`${item.company}-${item.role}`} className="experience-item">
              <div className="experience-meta">
                <span className="experience-period">{item.period}</span>
                <span className="experience-company">{item.company}</span>
              </div>
              <div>
                <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                  {item.role}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-7 text-white/70 sm:text-base">
                  {item.summary}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-white/55 marker:text-sky-200/70">
                  {item.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </RevealSection>
  );
}
