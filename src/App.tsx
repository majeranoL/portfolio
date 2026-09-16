import { useTheme } from "./hooks/useTheme";
import { useCursorGlow } from "./hooks/useCursorGlow";
import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Stack } from "./components/Stack";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import "./styles/tokens.css";
import "./styles/app.css";

export default function App() {
  const { theme, toggleTheme } = useTheme();
  useCursorGlow();

  return (
    <div className="grain cursor-glow">
      <Nav theme={theme} onToggleTheme={toggleTheme} />
      <main>
        <Hero />
        <About />
        <Projects />
        <Stack />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}