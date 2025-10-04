import { ThemeProvider } from "./contexts/ThemeContext";
import NebulaBackground from "./components/NebulaBackground";
import Navigation from "./components/Navigation";
import Cursor from "./components/Cursor";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Achivement from "./components/Achivement";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <NebulaBackground />
        <span className="hidden md:inline-block">
          <Cursor />
        </span>
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Achivement />
        <Experience />
        <Contact />
        <Footer />
        <ScrollToTop />
      </div>
    </ThemeProvider>
  );
}

export default App;
