import { useState, useEffect } from "react";
import { Link } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";
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
          ? "bg-black/60 backdrop-blur-[3px] py-4"
          : "bg-gradient-to-b from-black/60 to-transparent backdrop-blur-[2px] py-4"
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          to="hero"
          smooth={true}
          duration={500}
          className="text-base font-semibold tracking-tight text-[#f5f5f7] cursor-pointer"
          onClick={() => setMobileMenuOpen(false)}
        >
          Nedas Jaronis
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
              activeClass="!text-white"
              className="px-4 py-2 text-[13px] tracking-wide text-neutral-400 hover:text-white cursor-pointer transition-colors duration-200"
            >
              {item.name}
            </Link>
          ))}
          <a
            href="/Nedas_Jaronis_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-4 px-4 py-1.5 text-[13px] font-medium rounded-full bg-[#f5f5f7] text-black hover:bg-white transition-colors duration-200"
          >
            Resume
          </a>
          <RouterLink
            to="/cv"
            className="ml-2 px-4 py-1.5 text-[13px] font-medium rounded-full bg-[#f5f5f7] text-black hover:bg-white transition-colors duration-200"
          >
            CV
          </RouterLink>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2 text-[#f5f5f7] relative z-50"
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
        className={`md:hidden fixed inset-0 z-40 bg-black/95 backdrop-blur-xl transition-opacity duration-300 ${
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
              className={`py-4 text-3xl font-semibold tracking-tight text-[#f5f5f7] hover:text-neutral-400 cursor-pointer transition-all duration-300 ${
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
            className={`mt-8 py-3.5 text-center text-lg font-medium rounded-full bg-[#f5f5f7] text-black hover:bg-white transition-all duration-300 ${
              mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: mobileMenuOpen ? "300ms" : "0ms" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            Resume
          </a>
          <RouterLink
            to="/cv"
            className={`mt-3 py-3.5 text-center text-lg font-medium rounded-full bg-[#f5f5f7] text-black hover:bg-white transition-all duration-300 ${
              mobileMenuOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: mobileMenuOpen ? "350ms" : "0ms" }}
            onClick={() => setMobileMenuOpen(false)}
          >
            CV
          </RouterLink>
        </div>
      </div>
    </>
  );
};

export default Navigation;
