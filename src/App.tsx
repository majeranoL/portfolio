import { useTheme } from "./hooks/useTheme";
import { useCursorGlow } from "./hooks/useCursorGlow";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";
import { Education } from "./components/Education";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./styles/tokens.css";
import "./styles/app.css";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  useCursorGlow();

  return (
    <div className="grain cursor-glow">
      <span className="theme-ring" aria-hidden="true" />
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Stack />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}