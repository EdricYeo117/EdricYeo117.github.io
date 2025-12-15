import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";

export default function Contact() {
  return (
    <RevealSection id="contact" className="scroll-mt-28 py-16">
      <Container>
        <div
          className={[
            "card-glass p-8",
            "border-[rgb(var(--accent))/0.22] hover:border-[rgb(var(--accent))/0.35]",
            "transition",
          ].join(" ")}
        >
          <h2 className="text-2xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-[rgb(var(--mist))] to-[rgb(var(--accent))] bg-clip-text text-transparent">
              Contact
            </span>
          </h2>

          <p className="mt-2 text-white/70">
            Reach out for collaborations, internships, or project discussions.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a className="btn-primary focus-ring" href="mailto:youremail@example.com">
              Email me
            </a>

            <a
              className="btn-secondary focus-ring"
              href="https://github.com/EdricYeo117"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>
      </Container>
    </RevealSection>
  );
}
