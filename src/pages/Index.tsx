import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import PhotoPair from "../components/PhotoPair";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { Github, Linkedin } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-black">
      <Navigation />
      <Hero />
      <About />
      <PhotoPair />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />

      <footer className="py-8 border-t border-white/10 bg-black">
        <div className="container mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Nedas Jaronis. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/Nedas-Jaronis"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/jaronisnedas/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="text-neutral-500 hover:text-white transition-colors"
            >
              <Linkedin size={18} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
