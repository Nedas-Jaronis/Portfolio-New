import { ArrowDown, Github, Linkedin } from "lucide-react";
import { Link } from "react-scroll";
import AsciiScene from "./AsciiScene";
import XIcon from "./XIcon";

const Hero = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen h-screen overflow-hidden bg-black text-[#f5f5f7] flex flex-col justify-center"
    >
      <AsciiScene scene="surf" className="absolute inset-0 w-full h-full" />

      {/* legibility scrim: darkens the bottom-left where the type sits */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/50 via-transparent to-transparent" />
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-r from-black/40 via-transparent to-transparent" />

      <div className="relative z-10 container mx-auto px-6 pt-16 [text-shadow:0_1px_14px_rgba(0,0,0,0.95)]">
        <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-neutral-400 mb-3 animate-fade-in-up">
          Full Stack Engineer
        </p>
        <h1
          className="text-4xl sm:text-6xl lg:text-7xl leading-[1] whitespace-nowrap font-semibold tracking-tighter animate-fade-in-up"
          style={{ animationDelay: "0.1s" }}
        >
          Nedas Jaronis<span className="text-neutral-500">.</span>
        </h1>
        <p
          className="mt-4 max-w-lg text-base sm:text-lg text-neutral-300 leading-relaxed animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          I build stuff because I'm curious. Outside of code, I surf, snowboard, and play soccer.
        </p>

        <div
          className="mt-8 flex flex-wrap items-center gap-3 animate-fade-in-up"
          style={{ animationDelay: "0.3s" }}
        >
          <Link to="projects" smooth duration={500} offset={-72}>
            <button className="cursor-pointer rounded-full bg-[#f5f5f7] text-black px-6 py-3 text-sm font-medium hover:bg-white transition-colors">
              View work
            </button>
          </Link>
          <Link to="contact" smooth duration={500} offset={-72}>
            <button className="cursor-pointer rounded-full border border-white/25 px-6 py-3 text-sm font-medium hover:bg-white/10 transition-colors">
              Get in touch
            </button>
          </Link>
          <a
            href="https://github.com/Nedas-Jaronis"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="ml-2 p-3 text-neutral-400 hover:text-white transition-colors"
          >
            <Github size={20} />
          </a>
          <a
            href="https://www.linkedin.com/in/jaronisnedas/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-3 text-neutral-400 hover:text-white transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://x.com/JaronisNedas"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            className="p-3 text-neutral-400 hover:text-white transition-colors"
          >
            <XIcon size={20} />
          </a>
        </div>
      </div>

      <Link
        to="about"
        smooth
        duration={500}
        offset={-72}
        className="hidden md:block absolute bottom-8 right-8 z-10 cursor-pointer text-neutral-500 hover:text-white transition-colors"
        aria-label="Scroll to About"
      >
        <ArrowDown size={24} />
      </Link>
    </section>
  );
};

export default Hero;
