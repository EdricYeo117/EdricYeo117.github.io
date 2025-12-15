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

  // return ordered groups first, then everything else
  const ordered = order
    .filter((k) => map.has(k))
    .map((k) => [k, map.get(k)]);

  const rest = Array.from(map.entries()).filter(([k]) => !order.includes(k));
  return [...ordered, ...rest];
}

function Logo({ name, logo }) {
  if (logo) {
    return (
      <img
        src={logo}
        alt={name}
        className="h-8 w-8 object-contain"
        loading="lazy"
      />
    );
  }

  // fallback badge if no logo
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
        <p className="mt-2 text-white/70">
          Tools and technologies I frequently use across projects.
        </p>

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
                    className="group rounded-3xl border border-white/15 bg-white/5 p-6 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/10"
                  >
                    <div className="flex gap-4">
                      {/* Consistent logo container */}
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/5">
                        <Logo name={tech.name} logo={tech.logo} />
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-lg font-semibold">{tech.name}</h4>
                        <p className="mt-1 text-sm text-white/70">
                          {tech.description}
                        </p>
                        <div className="mt-3 text-sm text-white/70 group-hover:text-white">
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
