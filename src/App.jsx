import Background from "./components/layout/Background";
import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Skills from "./components/sections/Skills";
import TechStack from "./components/sections/TechStack";
import Contact from "./components/sections/Contact";
import Container from "./components/layout/Container";

export default function App() {
  return (
    <div className="min-h-screen text-white relative isolate">
      <Background />
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <TechStack />
        <Contact />
      </main>
      <footer className="py-8 border-t border-white/10">
        <Container>
          <p className="text-center text-sm text-white/50">
            © {new Date().getFullYear()} Edric Yeo. Built with React & Tailwind
            CSS.
          </p>
        </Container>
      </footer>
    </div>
  );
}
