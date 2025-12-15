import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";

export default function About() {
  return (
    <RevealSection id="about" className="scroll-mt-28 py-16">
      <Container>
        <div className="rounded-3xl border border-white/15 bg-white/5 p-8 backdrop-blur-xl">
          <h2 className="text-2xl font-semibold tracking-tight">About</h2>
          <p className="mt-3 max-w-3xl text-white/70">
            I build cloud and AI-driven applications with a focus on enterprise use cases.
            During my Oracle internship, I worked on an AI Hologram system and agentic AI workflows
            for ERP-style document ingestion and insights.
          </p>
        </div>
      </Container>
    </RevealSection>
  );
}
