import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import TechStack from "../components/TechStack";
import Experience from "../components/Experience";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <TechStack />
      <Experience />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="py-8 border-t border-border/50">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2024 Nedas Jaronis. Built with React & Tailwind CSS.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
