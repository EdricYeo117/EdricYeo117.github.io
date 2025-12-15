import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";

export default function About() {
  return (
    <RevealSection id="about" className="scroll-mt-28 py-16">
      <Container>
        <div
          className={[
            "card-glass p-8",
            "border-[rgb(var(--accent2))/0.18] hover:border-[rgb(var(--accent2))/0.32]",
            "transition",
          ].join(" ")}
        >
          {/* accent bar */}
          <div className="mb-5 h-1 w-24 rounded-full bg-gradient-to-r from-[rgb(var(--accent2))] to-[rgb(var(--accent))]" />

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
