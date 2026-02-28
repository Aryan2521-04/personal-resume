import { useState, useEffect } from "react";

export default function Navbar() {
  const [active, setActive] = useState("hero-section");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = ["hero-section", "about", "education", "projects", "experience"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.4 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const links = [
    { label: "About", href: "#about", id: "about" },
    { label: "Education", href: "#education", id: "education" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Experience", href: "#experience", id: "experience" },
  ];

  return (
    <nav className="flex flex-wrap justify-between items-center py-5 px-8 bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      
      <h1 className="text-xl font-bold">Aryan Shah</h1>

      {/* Desktop links */}
      <div className="hidden md:flex space-x-6">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className={`transition-colors duration-200 ${
              active === link.id
                ? "text-blue-600 font-semibold"
                : "hover:text-blue-600"
            }`}
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Hamburger button - mobile only */}
      <button
        className="md:hidden text-2xl"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="md:hidden w-full flex flex-col items-center gap-4 py-4 border-t border-gray-200">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`transition-colors duration-200 ${
                active === link.id
                  ? "text-blue-600 font-semibold"
                  : "hover:text-blue-600"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}