import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";

export default function Contact() {
  return (
    <RevealSection id="contact" className="relative z-10 pt-8 pb-24">
      <Container>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl sm:p-10">
          <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
            Contact
          </div>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Let’s talk about cloud, AI, full-stack systems, or technical demo work.
          </h2>

          <p className="mt-5 max-w-3xl text-base leading-8 text-white/70">
            I am interested in software engineering, cloud engineering, applied AI,
            and systems integration opportunities. Whether you want to discuss a
            project, a role, or a collaboration, feel free to reach out.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:your-email@example.com"
              className="focus-ring inline-flex items-center rounded-2xl border border-white/10 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:translate-y-[-1px]"
            >
              Email Me
            </a>

            <a
              href="https://www.linkedin.com/in/yeo-jin-rong/"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              LinkedIn
            </a>

            <a
              href="https://github.com/EdricYeo117"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              GitHub
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="focus-ring inline-flex items-center rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Resume
            </a>
          </div>
        </div>
      </Container>
    </RevealSection>
  );
}