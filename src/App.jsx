import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Hero from "./components/Hero.jsx";
import Education from "./components/Education.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";

export default function App() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Experience />
      </main>
    </div>
  );
}
