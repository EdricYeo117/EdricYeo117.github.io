import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";
import { technologyStack } from "../../data/technologyStack";

function groupItems(items) {
  const order = ["Frontend", "Backend", "Databases", "Cloud & Tools"];
  const map = new Map();

  for (const it of items) {
    const key = it.group || "Other";
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(it);
  }

  const ordered = order.filter((k) => map.has(k)).map((k) => [k, map.get(k)]);
  const rest = Array.from(map.entries()).filter(([k]) => !order.includes(k));
  return [...ordered, ...rest];
}

function Logo({ name, logo }) {
  if (logo) {
    return <img src={logo} alt={name} className="h-8 w-8 object-contain" loading="lazy" />;
  }
  return (
    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-xs font-semibold text-white/80">
      {name?.[0]?.toUpperCase() ?? "?"}
    </div>
  );
}

export default function TechStack() {
  const groups = groupItems(Array.isArray(technologyStack) ? technologyStack : []);

  return (
    <RevealSection id="tech" className="scroll-mt-28 py-16">
      <Container>
        <h2 className="text-2xl font-semibold tracking-tight">Technology Stack</h2>
        <p className="mt-2 text-white/70">Tools and technologies I frequently use across projects.</p>

        <div className="mt-10 space-y-10">
          {groups.map(([groupName, items]) => (
            <section key={groupName}>
              <h3 className="text-sm font-semibold tracking-wide text-white/80">
                {groupName}
              </h3>

              <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card-glass card-hover group p-6 focus-ring"
                    style={{ transition: "border-color 200ms ease" }}
                    onMouseEnter={(e) => (e.currentTarget.style.borderColor = "rgb(var(--accent) / 0.35)")}
                    onMouseLeave={(e) => (e.currentTarget.style.borderColor = "")}
                  >
                    <div className="flex gap-4">
                      <div
                        className="flex h-14 w-14 items-center justify-center rounded-2xl border"
                        style={{
                          borderColor: "rgb(var(--accent) / 0.25)",
                          background: "rgb(var(--ice) / 0.08)",
                        }}
                      >
                        <Logo name={tech.name} logo={tech.logo} />
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-lg font-semibold">{tech.name}</h4>
                        <p className="mt-1 text-sm text-white/70">{tech.description}</p>
                        <div
                          className="mt-3 text-sm transition"
                          style={{ color: "rgb(var(--mist) / 0.85)" }}
                        >
                          Learn more →
                        </div>
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </section>
          ))}
        </div>
      </Container>
    </RevealSection>
  );
}
