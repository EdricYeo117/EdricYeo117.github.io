export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Dark base */}
      <div className="absolute inset-0 bg-[rgb(8,12,18)]" />

      {/* Blue gradient washes (Ocean Mist + Arctic Chill) */}
      <div
        className="absolute inset-0 opacity-90"
        style={{
          background: `
            radial-gradient(1100px circle at 18% 12%, rgb(var(--accent) / 0.22), transparent 55%),
            radial-gradient(900px circle at 82% 18%, rgb(var(--accent2) / 0.20), transparent 58%),
            radial-gradient(800px circle at 50% 92%, rgb(var(--mist) / 0.12), transparent 58%)
          `,
        }}
      />

      {/* Cursor glow (blue, not white) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(650px circle at var(--mx, 50%) var(--my, 50%), rgb(var(--accent) / 0.18), transparent 55%)",
        }}
      />

      {/* Subtle grid */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.10)_1px,transparent_0)] [background-size:26px_26px]" />

      {/* Soft vignette to keep edges dark */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_0%,transparent_35%,rgba(0,0,0,0.65)_100%)]" />
    </div>
  );
}
