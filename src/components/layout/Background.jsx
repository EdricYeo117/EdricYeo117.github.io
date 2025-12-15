// Background.jsx
export default function Background() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          background: `
            radial-gradient(900px circle at 14% 18%,
              rgb(var(--accent2) / 0.26) 0%,
              transparent 60%),
            radial-gradient(850px circle at 86% 22%,
              rgb(var(--accent) / 0.22) 0%,
              transparent 58%),
            radial-gradient(1100px circle at 70% 92%,
              rgb(var(--deep) / 0.22) 0%,
              transparent 62%),
            linear-gradient(135deg,
              rgb(var(--navy) / 0.98) 0%,
              rgb(2 6 10 / 0.92) 46%,
              rgb(var(--deep) / 0.98) 100%)
          `,
        }}
      />

      <div
        className="absolute inset-0 opacity-85"
        style={{
          background:
            "radial-gradient(650px circle at var(--mx) var(--my), rgb(var(--accent) / 0.16), transparent 45%)",
        }}
      />

      <div
        className="absolute inset-0 opacity-18"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgb(var(--mist) / 0.18) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.26)_65%,rgba(0,0,0,0.56)_100%)]" />
    </div>
  );
}
