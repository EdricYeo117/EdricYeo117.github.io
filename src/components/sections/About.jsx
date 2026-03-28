import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";

export default function About() {
  return (
    <section id="about" className="py-18 sm:py-24">
      <Container>
        <RevealSection>
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
              <div className="text-sm font-semibold uppercase tracking-[0.18em] text-white/50">
                About
              </div>

              <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
                I build applied AI, cloud, and full-stack systems with a strong
                focus on real-world delivery.
              </h2>

              <div className="mt-6 space-y-5 text-base leading-8 text-white/72">
                <p>
                  I’m Edric Yeo, a Software Engineering student from Ngee Ann
                  Polytechnic and a Cloud Engineering Intern at Oracle. My work
                  sits at the intersection of cloud systems, applied AI, backend
                  integration, and user-facing product development.
                </p>

                <p>
                  Across my GitHub projects, I’ve built and worked on
                  interactive portfolio systems, full-stack applications,
                  AI-enabled drone workflows, ERP-related frontend and
                  orchestration components, and backend services that connect
                  real-time data, automation, and computer vision.
                </p>

                <p>
                  I enjoy building systems end to end — from frontend interfaces
                  and backend APIs to workflow orchestration, cloud-connected
                  services, and practical AI integrations that can be used in
                  demos, products, and operational settings.
                </p>
              </div>
            </div>

            <div className="grid gap-4 self-start">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-white">
                  What I build
                </div>
                <ul className="mt-4 space-y-3 text-sm leading-7 text-white/68">
                  <li>• Interactive AI and cloud-based showcase systems</li>
                  <li>
                    • Drone, computer vision, and remote-control application
                    workflows
                  </li>
                  <li>
                    • Full-stack products with React, Node.js, and backend APIs
                  </li>
                  <li>
                    • ERP and workflow automation systems with frontend and
                    orchestration layers
                  </li>
                  <li>
                    • Real-time and data-driven applications that connect
                    software to real-world use cases
                  </li>
                </ul>
              </div>

              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <div className="text-sm font-semibold text-white">
                  Core stack
                </div>
                <p className="mt-4 text-sm leading-7 text-white/68">
                  Java, Python, JavaScript, Kotlin, React, Node.js, FastAPI,
                  SQL, MongoDB, DynamoDB, AWS, Oracle Cloud, n8n workflows,
                  computer vision, and real-time integration systems.
                </p>
              </div>
            </div>
          </div>
        </RevealSection>
      </Container>
    </section>
  );
}
