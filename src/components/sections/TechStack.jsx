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

  const ordered = order
    .filter((k) => map.has(k))
    .map((k) => [k, map.get(k)]);

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
        <div>
          <h2 className="text-2xl font-semibold tracking-tight">
            <span className="bg-gradient-to-r from-[rgb(var(--mist))] to-[rgb(var(--accent))] bg-clip-text text-transparent">
              Technology Stack
            </span>
          </h2>
          <p className="mt-2 text-white/70">Tools and technologies I frequently use across projects.</p>
        </div>

        <div className="mt-10 space-y-10">
          {groups.map(([groupName, items]) => (
            <section key={groupName}>
              <div className="flex items-center gap-3">
                <h3 className="text-sm font-semibold tracking-wide text-white/80">{groupName}</h3>
                <div className="h-px flex-1 bg-[rgb(var(--accent))/0.20]" />
              </div>

              <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {items.map((tech) => (
                  <a
                    key={tech.name}
                    href={tech.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={[
                      "group",
                      "card-glass card-hover",
                      "p-6 hover:border-[rgb(var(--accent))/0.35]",
                      "focus-ring",
                    ].join(" ")}
                  >
                    <div className="flex gap-4">
                      {/* Logo container */}
                      <div
                        className={[
                          "flex h-14 w-14 items-center justify-center rounded-2xl border",
                          "bg-[rgb(var(--accent))/0.10]",
                          "border-[rgb(var(--accent))/0.25]",
                        ].join(" ")}
                      >
                        <Logo name={tech.name} logo={tech.logo} />
                      </div>

                      <div className="min-w-0">
                        <h4 className="text-lg font-semibold">{tech.name}</h4>
                        <p className="mt-1 text-sm text-white/70">{tech.description}</p>

                        <div className="mt-3 text-sm text-[rgb(var(--mist))] transition group-hover:text-[rgb(var(--ice))]">
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
