import Container from "../layout/Container";
import RevealSection from "../motion/RevealSection";
import { technologyStack } from "../../data/technologyStack";

const frontendNames = new Set([
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Vue 3",
  "Inertia.js", "Next.js", "Tailwind CSS",
]);

function sectionFor(tech) {
  if (frontendNames.has(tech.name)) return "Frontend";
  if (tech.group === "Databases" || tech.name === "SQL") return "Databases";
  if (tech.group === "Platforms & Tools" && tech.name !== "Node.js") {
    return "Cloud & Tools";
  }
  return "Backend";
}

function subgroupFor(section, tech) {
  if (section === "Frontend") {
    return tech.group === "Frameworks & Libraries"
      ? "Frameworks & Libraries"
      : "Languages & Web Standards";
  }
  if (section === "Backend") {
    return tech.group === "Languages" ? "Languages" : "Frameworks & Runtimes";
  }
  return null;
}

function groupItems(items) {
  const order = ["Frontend", "Backend", "Databases", "Cloud & Tools"];
  const groups = new Map(order.map((name) => [name, new Map()]));

  for (const tech of items) {
    const section = sectionFor(tech);
    const subgroup = subgroupFor(section, tech);
    const entries = groups.get(section);
    if (!entries.has(subgroup)) entries.set(subgroup, []);
    entries.get(subgroup).push(tech);
  }

  return order.map((name) => [name, [...groups.get(name).entries()]]);
}

export default function TechStack() {
  const groups = groupItems(
    Array.isArray(technologyStack) ? technologyStack : [],
  );

  return (
    <RevealSection id="tech" className="section-shell">
      <Container>
        <div className="mb-10">
          <p className="eyebrow">My toolkit</p>
          <h2 className="section-title">Technology Stack</h2>
          <p className="mt-2 text-white/70">
            Tools and technologies I frequently use across projects.
          </p>
        </div>

        <div className="space-y-8">
          {groups.map(([groupName, subgroups]) => (
            <div key={groupName} className="tech-group">
              <h3 className="text-xl font-semibold text-white">{groupName}</h3>

              <div className="space-y-7">
                {subgroups.map(([subgroupName, items]) => (
                  <div key={subgroupName || groupName}>
                    {subgroupName ? (
                      <h4 className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-sky-200/70">
                        {subgroupName}
                      </h4>
                    ) : null}
                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                      {items.map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.link}
                    target="_blank"
                    rel="noreferrer"
                    className="tech-card card-glass flex items-start gap-4 rounded-3xl p-4 transition hover:-translate-y-1 hover:bg-white/10"
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor =
                        "rgb(var(--accent) / 0.35)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = "";
                    }}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/8">
                      {tech.logo ? (
                        <img
                          src={tech.logo}
                          alt=""
                          width="32"
                          height="32"
                          loading="lazy"
                          decoding="async"
                          className="h-8 w-8 object-contain"
                        />
                      ) : (
                        <span className="text-sm font-semibold text-white">
                          {tech.name?.[0]?.toUpperCase() ?? "?"}
                        </span>
                      )}
                    </div>

                    <div className="min-w-0">
                      <div className="font-medium text-white">{tech.name}</div>
                      <div className="mt-1 text-sm leading-6 text-white/70">
                        {tech.description}
                      </div>
                      <div className="mt-2 text-sm text-[rgb(var(--mist))]">
                        Documentation ↗
                      </div>
                    </div>
                  </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Container>
    </RevealSection>
  );
}
