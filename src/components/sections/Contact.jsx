import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";

export default function Contact() {
  return (
    <RevealSection id="contact" className="scroll-mt-28 py-16">
      <Container>
        <div className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold tracking-tight">Contact</h2>
          <p className="mt-2 text-white/70">
            Reach out for collaborations, internships, or project discussions.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              className="rounded-2xl bg-white px-5 py-3 text-sm font-medium text-neutral-950 hover:opacity-90"
              href="mailto:youremail@example.com"
            >
              Email me
            </a>

            <a
              className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium hover:bg-white/10"
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
