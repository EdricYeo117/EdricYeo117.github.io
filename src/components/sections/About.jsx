import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";

export default function About() {
  return (
    <RevealSection id="about" className="scroll-mt-28 py-14">
      <Container>
        <div className="mx-auto max-w-4xl">
          <div className="card-glass p-8 sm:p-10">
            <div
              className="mb-6 h-1.5 w-24 rounded-full"
              style={{ background: "rgb(var(--accent) / 0.85)" }}
            />
            <h2 className="text-3xl font-semibold tracking-tight">About Me</h2>
            <p className="mt-4 text-white/70 leading-relaxed">
              I build cloud and AI-driven applications with a focus on enterprise use cases.
              During my Oracle internship, I worked on an AI Hologram system and agentic AI workflows
              for ERP-style document ingestion and insights.
            </p>
          </div>
        </div>
      </Container>
    </RevealSection>
  );
}
