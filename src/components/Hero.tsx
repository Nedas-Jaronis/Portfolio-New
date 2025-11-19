import { ArrowDown, Github, Linkedin, Download, Mail } from "lucide-react";
import { Link } from "react-scroll";
import { Button } from "@/components/ui/button";
import profileImage from "../assets/Profile_1_Picture_Circle.png";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="space-y-2">
              <h2 className="text-primary text-xl font-medium">Hi, I'm</h2>
              <h1 className="text-5xl md:text-7xl font-bold">
                <span className="gradient-text">Nedas Jaronis</span>
              </h1>
              <h3 className="text-2xl md:text-3xl text-muted-foreground">
                Backend Developer & AI Enthusiast
              </h3>
            </div>

            <p className="text-lg text-muted-foreground max-w-lg">
              Sophomore studying Computer Science at the University of Florida,
              passionate about building innovative AI solutions that create
              meaningful, real-world impact.
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact">
                <Button className="gap-2 bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Mail size={18} />
                  Contact Me
                </Button>
              </a>
              <a href="/Nedas_Jaronis_Resume.pdf" download>
                <Button
                  variant="outline"
                  className="gap-2 border-primary/50 hover:bg-primary/10"
                >
                  <Download size={18} />
                  Download CV
                </Button>
              </a>
            </div>

            <div className="flex gap-4 pt-4">
              <a
                href="https://www.linkedin.com/in/jaronisnedas/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-lg hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                <Linkedin className="text-primary" size={24} />
              </a>
              <a
                href="https://github.com/Nedas-Jaronis"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 glass-card rounded-lg hover:bg-primary/10 transition-all duration-300 hover:-translate-y-1"
              >
                <Github className="text-primary" size={24} />
              </a>
            </div>
          </div>

          {/* Right Side - Image */}
          <div
            className="flex justify-center animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-accent/30 rounded-full blur-2xl" />
              <img
                src={profileImage}
                alt="Nedas Jaronis"
                className="relative w-80 h-80 md:w-96 md:h-96 object-cover rounded-full border-4 border-primary/30 shadow-[var(--shadow-glow)]"
              />
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <Link
          to="about"
          smooth={true}
          duration={500}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer animate-bounce"
        >
          <ArrowDown className="text-primary" size={32} />
        </Link>
      </div>
    </section>
  );
};

export default Hero;
