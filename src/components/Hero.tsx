import { ArrowDown, Github, Linkedin, Download, Mail } from "lucide-react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import profileImage from "../assets/Profile_1_Picture_Circle.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24 pb-12 md:pt-20 md:pb-0"
    >
      {/* Subtle background accents */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-primary/[0.07] rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 -right-32 w-96 h-96 bg-accent/[0.07] rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10 flex-1 flex items-center">
        <div className="grid md:grid-cols-2 gap-10 md:gap-12 items-center w-full">
          {/* Image — first on mobile, right on desktop */}
          <div
            className="flex justify-center md:order-2 animate-fade-in-up"
            style={{ animationDelay: "0.15s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/25 to-accent/25 rounded-full blur-2xl" />
              <img
                src={profileImage}
                alt="Nedas Jaronis"
                className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-cover rounded-full border-4 border-primary/30"
              />
            </div>
          </div>

          {/* Text — second on mobile, left on desktop */}
          <div className="space-y-6 text-center md:text-left md:order-1 animate-fade-in-up">
            <div className="space-y-3">
              <p className="text-primary font-semibold tracking-wide">Hi, I'm</p>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                Nedas <span className="gradient-text">Jaronis</span>
              </h1>
              <h2 className="text-xl sm:text-2xl text-muted-foreground font-medium">
                Software Engineer & AI/ML Builder
              </h2>
            </div>

            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto md:mx-0">
              Computer Science student at the University of Florida building
              AI systems end to end — from 3D-generation pipelines to
              backpropagation written from scratch.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              <Link to="contact" smooth={true} duration={500} offset={-72}>
                <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Mail size={18} />
                  Contact Me
                </Button>
              </Link>
              <a href="/Nedas_Jaronis_Resume.pdf" download>
                <Button
                  variant="outline"
                  className="gap-2 border-primary/50 hover:bg-primary/10"
                >
                  <Download size={18} />
                  Download Resume
                </Button>
              </a>
            </div>

            <div className="flex gap-3 justify-center md:justify-start pt-2">
              <a
                href="https://www.linkedin.com/in/jaronisnedas/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-3 glass-card rounded-lg hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
              >
                <Linkedin className="text-primary" size={22} />
              </a>
              <a
                href="https://github.com/Nedas-Jaronis"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="p-3 glass-card rounded-lg hover:bg-primary/10 hover:border-primary/40 transition-all duration-300"
              >
                <Github className="text-primary" size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator — in normal flow so it never overlaps content */}
      <div className="hidden md:flex justify-center relative z-10 pb-8">
        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-72}
          className="cursor-pointer animate-bounce"
          aria-label="Scroll to About"
        >
          <ArrowDown className="text-primary" size={28} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
