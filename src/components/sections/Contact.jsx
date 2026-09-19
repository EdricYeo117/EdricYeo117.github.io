import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";

export default function Contact() {
  return (
    <section id="contact" className="section-shell">
      <Container>
        <RevealSection>
          <div className="card-glass rounded-3xl p-6 sm:p-8 lg:p-10">
            <div className="mb-3 text-sm font-medium uppercase tracking-[0.18em] text-white/60">
              Contact
            </div>

            <h2 className="max-w-3xl text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Let’s build something useful.
            </h2>

            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              I am interested in software engineering, cloud engineering,
              applied AI, and systems integration opportunities. Whether you
              want to discuss a project, a role, or a collaboration, feel free
              to reach out.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <a
                href="https://www.linkedin.com/in/yeo-jin-rong/"
                target="_blank"
                rel="noreferrer"
                className="btn-primary text-center"
              >
                Connect on LinkedIn ↗
              </a>

              <a
                href="https://github.com/EdricYeo117"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary text-center"
              >
                GitHub
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary text-center"
              >
                Resume
              </a>
            </div>
          </div>
        </RevealSection>
      </Container>
    </section>
  );
}
