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
          {groups.map(([groupName, items]) => (
            <div key={groupName} className="tech-group">
              <h3 className="text-xl font-semibold text-white">{groupName}</h3>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-2">
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
                          alt={tech.name}
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
      </Container>
    </RevealSection>
  );
}
