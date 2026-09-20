import { useEffect, useState } from "react";
import Container from "../layout/Container";
import profileImg from "../../assets/profile.jpg";

const NAME = "Edric Yeo";

const focus = [
  [
    "01",
    "Cloud & applied AI",
    "Connected services, intelligent workflows, and enterprise demos.",
  ],
  [
    "02",
    "Full-stack engineering",
    "Thoughtful interfaces backed by reliable APIs and data systems.",
  ],
  [
    "03",
    "Drone & computer vision",
    "Android, DJI integration, and real-world vision applications.",
  ],
];
export default function Hero() {
  const [reduceMotion] = useState(() =>
    window.matchMedia("(prefers-reduced-motion: reduce)").matches,
  );
  const [typedCount, setTypedCount] = useState(() =>
    reduceMotion ? NAME.length : 0,
  );
  const [showCursor, setShowCursor] = useState(() => !reduceMotion);

  useEffect(() => {
    if (reduceMotion) return undefined;

    let count = 0;
    let typingTimer;
    let cursorTimer;

    const startTimer = window.setTimeout(() => {
      typingTimer = window.setInterval(() => {
        count += 1;
        setTypedCount(count);

        if (count >= NAME.length) {
          window.clearInterval(typingTimer);
          cursorTimer = window.setTimeout(() => setShowCursor(false), 1400);
        }
      }, 105);
    }, 350);

    return () => {
      window.clearTimeout(startTimer);
      window.clearInterval(typingTimer);
      window.clearTimeout(cursorTimer);
    };
  }, [reduceMotion]);

  return (
    <section id="home" className="hero-section">
      <Container>
        <div className="hero-grid">
          <div>
            <p className="eyebrow">
              <span className="status-dot" /> Software engineer · Singapore
            </p>
            <h1 aria-label="Edric Yeo.">
              <span aria-hidden="true">
                {NAME.slice(0, typedCount)}
                {typedCount === NAME.length ? (
                  <span className="hero-period">.</span>
                ) : null}
                {showCursor ? <span className="type-cursor" /> : null}
              </span>
            </h1>
            <h2 className="hero-statement">
              From an idea to a<br />
              <span>working system.</span>
            </h2>
            <p className="hero-description">
              I build applied AI, cloud, and full-stack experiences that connect
              software to the real world.
            </p>
            <p className="hero-context">
              From interactive AI holograms at Oracle to drone vision and
              cloud-connected products — I enjoy bringing every part of a system
              together.
            </p>
            <div className="hero-actions">
              <a href="#projects" className="btn-primary">
                Explore my work <span aria-hidden="true">↗</span>
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noreferrer"
                className="btn-secondary"
              >
                View resume <span aria-hidden="true">↗</span>
              </a>
            </div>
            <a className="hero-contact" href="#contact">
              Have something in mind? Let’s connect →
            </a>
          </div>
          <figure className="portrait-card">
            <img
              src={profileImg}
              alt="Edric Yeo"
              fetchPriority="high"
              width="400"
              height="500"
            />
            <figcaption>
              <span>Building with purpose.</span>
              <span>Based in Singapore ↗</span>
            </figcaption>
          </figure>
        </div>
        <div className="focus-grid" aria-label="Areas of focus">
          {focus.map(([number, title, description]) => (
            <div className="focus-item" key={number}>
              <span className="focus-number">{number}</span>
              <div>
                <h3>{title}</h3>
                <p>{description}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
