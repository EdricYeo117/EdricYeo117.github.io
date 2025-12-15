import { useEffect } from "react";
import Background from "./components/layout/Background";
import Navbar from "./components/layout/Navbar";

import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import TechStack from "./components/sections/TechStack";
import Contact from "./components/sections/Contact";

export default function App() {
  useEffect(() => {
    const onMove = (e) => {
      document.documentElement.style.setProperty("--mx", `${e.clientX}px`);
      document.documentElement.style.setProperty("--my", `${e.clientY}px`);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div className="min-h-screen text-white">
      <Background />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <TechStack />
        <Contact />
      </main>

      <footer className="py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} Edric Yeo
      </footer>
    </div>
  );
}
