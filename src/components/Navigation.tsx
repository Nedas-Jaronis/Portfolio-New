import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "About", to: "about" },
  { name: "Skills", to: "skills" },
  { name: "Experience", to: "experience" },
  { name: "Projects", to: "projects" },
  { name: "Contact", to: "contact" },
];

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock page scroll while the full-screen menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || mobileMenuOpen
          ? "bg-background/80 backdrop-blur-lg border-b border-border/60 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-xl font-bold tracking-tight cursor-pointer"
          onClick={() => setMobileMenuOpen(false)}
        >
          Nedas <span className="gradient-text">Jaronis</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-72}
              spy={true}
              activeClass="text-primary"
              className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="/Nedas_Jaronis_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-4 py-2 text-sm font-medium rounded-lg border border-primary/40 text-primary hover:bg-primary/10 transition-colors duration-200"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground relative z-50"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </nav>

      {/* Mobile Navigation — full-screen overlay (sibling of nav: its backdrop-blur
          would otherwise become the containing block and trap this inside the bar) */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-background/95 backdrop-blur-xl transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="h-full flex flex-col justify-center px-10 pb-16">
          {navItems.map((item, index) => (
            <Link
              key={item.to}
              to={item.to}
              smooth={true}
              duration={500}
              offset={-64}
              className={`py-4 text-3xl font-semibold tracking-tight text-foreground/90 hover:text-primary cursor-pointer transition-all duration-300 ${
                mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              style={{ transitionDelay: mobileMenuOpen ? `${index * 50 + 100}ms` : "0ms" }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.name}
            </Link>
          ))}
          <a
            href="/Nedas_Jaronis_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className={`mt-8 py-3.5 text-center text-lg font-medium rounded-xl border border-primary/40 text-primary hover:bg-primary/10 transition-all duration-300 ${
              mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: mobileMenuOpen ? "350ms" : "0ms" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Resume
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
