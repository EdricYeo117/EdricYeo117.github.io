import { useEffect } from "react";

export default function useMouseGlow() {
  useEffect(() => {
    const root = document.documentElement;
    let raf = 0;
    let lastX = 0;
    let lastY = 0;

    const onMove = (e) => {
      lastX = e.clientX;
      lastY = e.clientY;

      if (raf) return;
      raf = window.requestAnimationFrame(() => {
        const x = Math.max(0, Math.min(100, (lastX / window.innerWidth) * 100));
        const y = Math.max(0, Math.min(100, (lastY / window.innerHeight) * 100));
        root.style.setProperty("--mx", `${x}%`);
        root.style.setProperty("--my", `${y}%`);
        raf = 0;
      });
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);
}
