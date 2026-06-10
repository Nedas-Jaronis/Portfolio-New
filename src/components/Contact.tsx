import { Mail, Phone, Github, Linkedin, ExternalLink } from "lucide-react";

const XIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    value: "jaronisnedas@gmail.com",
    href: "mailto:jaronisnedas@gmail.com",
    description: "Drop me a line anytime",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(386) 283-7781",
    href: "tel:+13862837781",
    description: "Let's have a chat",
  },
];

const socialLinks = [
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/Nedas-Jaronis",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/jaronisnedas/",
  },
  {
    icon: XIcon,
    label: "X",
    href: "https://x.com/JaronisNedas",
  },
];

const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-24 relative overflow-hidden">
      {/* Subtle background accents */}
      <div className="absolute inset-0 opacity-30 pointer-events-none">
        <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-float" />
        <div
          className="absolute bottom-20 -right-20 w-96 h-96 bg-accent/15 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <p className="section-eyebrow">Let's Connect</p>
          <h2 className="section-title">Get In Touch</h2>
          <div className="section-divider" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            I'm always glad to connect with fellow builders and industry
            professionals — feel free to reach out about opportunities,
            collaboration, or just to talk tech.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid sm:grid-cols-2 gap-5 max-w-3xl mx-auto mb-12 md:mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={method.label}
              href={method.href}
              target={method.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="glass-card hover-lift p-6 md:p-8 rounded-2xl group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-3">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300">
                  <method.icon className="text-primary" size={26} />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{method.label}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{method.description}</p>
                  <p className="text-sm md:text-base text-foreground/90 group-hover:text-primary transition-colors break-all flex items-center gap-1.5 justify-center">
                    {method.value}
                    <ExternalLink
                      size={13}
                      className="opacity-0 group-hover:opacity-100 transition-opacity shrink-0"
                    />
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-muted-foreground mb-5">Find me on</p>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card hover-lift p-4 rounded-xl text-foreground/80 hover:text-primary"
                aria-label={social.label}
              >
                <social.icon size={24} />
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16 text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <div className="glass-card p-6 md:p-10 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-xl md:text-2xl font-bold mb-3">
              Let's Build Something <span className="gradient-text">Together</span>
            </h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Whether you have a project in mind, an opportunity to share, or
              just want to discuss the latest in AI — my inbox is open.
            </p>
            <a
              href="mailto:jaronisnedas@gmail.com"
              className="inline-flex items-center gap-2 px-7 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-colors duration-300"
            >
              <Mail size={18} />
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
