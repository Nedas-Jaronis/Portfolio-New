import { Github, Linkedin } from "lucide-react";

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { icon: Github, label: "GitHub", href: "https://github.com/Nedas-Jaronis" },
  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/jaronisnedas/" },
  { icon: XIcon, label: "X", href: "https://x.com/JaronisNedas" },
];

const Contact = () => (
  <section id="contact" className="bg-black text-[#f5f5f7] py-28 md:py-40 border-t border-white/10">
    <div className="container mx-auto px-6">
      <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-neutral-500 mb-4">Contact</p>
      <h2 className="text-5xl sm:text-6xl md:text-8xl font-semibold tracking-tighter leading-[1] max-w-4xl">
        Let's build
        <br />
        <span className="text-neutral-500">something.</span>
      </h2>
      <p className="mt-8 max-w-xl text-lg text-neutral-400 leading-relaxed">
        Open to opportunities, collaborations, or just talking tech and the next good wave.
      </p>

      <div className="mt-10 flex flex-wrap items-center gap-3">
        <a
          href="mailto:jaronisnedas@gmail.com"
          className="rounded-full bg-[#f5f5f7] text-black px-7 py-3.5 text-sm font-medium hover:bg-white transition-colors"
        >
          jaronisnedas@gmail.com
        </a>
        <div className="flex items-center gap-1 ml-2">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="p-3 text-neutral-400 hover:text-white transition-colors"
            >
              <social.icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
