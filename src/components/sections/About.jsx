import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";
export default function About() {
  return (
    <RevealSection id="about" className="section-shell about-section">
      <Container>
        <div className="about-grid">
          <div>
            <p className="eyebrow">A little about me</p>
            <h2 className="section-title">
              Curious by nature.
              <br />
              Hands-on by choice.
            </h2>
          </div>
          <div className="about-copy">
            <p>
              I’m a Computer Science undergraduate at the University of
              Wollongong (SIM Global Education) with a Software Engineering
              diploma from Ngee Ann Polytechnic. My work brings together
              applied AI, backend integration, and user-facing product
              development.
            </p>
            <p>
              I enjoy building end to end: shaping an interface, connecting the
              APIs, and making the underlying workflows work reliably in real
              demo and product settings.
            </p>
            <div className="about-facts">
              <div>
                <span>EXPERIENCE</span>
                <strong>Goh Ventures · Freelance Developer</strong>
              </div>
              <div>
                <span>EDUCATION</span>
                <strong>University of Wollongong (SIM)</strong>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </RevealSection>
  );
}
