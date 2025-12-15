export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient (blue-forward) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(27,73,101,0.85) 0%, rgba(10,10,12,1) 45%, rgba(38,70,83,0.70) 100%)",
        }}
      />

      {/* Cursor glow (tinted blue) */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(650px circle at var(--mx, 50%) var(--my, 50%), rgba(74,144,226,0.18), transparent 45%)",
        }}
      />

      {/* Soft blobs (blue palette) */}
      <div className="absolute -top-48 left-1/2 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[rgb(var(--accent))/0.18] blur-3xl" />
      <div className="absolute top-24 left-10 h-[420px] w-[420px] rounded-full bg-[rgb(var(--accent2))/0.14] blur-3xl" />
      <div className="absolute -bottom-20 right-0 h-[560px] w-[560px] rounded-full bg-[rgb(var(--deep))/0.22] blur-3xl" />

      {/* Subtle grid/dots (blue-tinted) */}
      <div
        className="absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(183,216,230,0.18) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      {/* Optional vignette for focus */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.35)_70%,rgba(0,0,0,0.60)_100%)]" />
    </div>
  );
}
