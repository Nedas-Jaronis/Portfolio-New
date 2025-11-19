import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "nedas.jaronis@example.com",
      href: "mailto:nedas.jaronis@example.com",
      description: "Drop me a line anytime"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
      description: "Let's have a chat"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Gainesville, Florida",
      href: "https://maps.google.com/?q=Gainesville,Florida",
      description: "Where I'm based"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com",
      color: "hover:text-purple-400"
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com",
      color: "hover:text-blue-400"
    }
  ];

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-card/30">
      {/* Animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary text-lg mb-2">Let's Connect</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Get In Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
          <p className="text-muted-foreground mt-6 max-w-2xl mx-auto">
            I'm always eager to connect with fellow tech enthusiasts and industry professionals. 
            Feel free to reach out for collaboration opportunities or just to chat about technology!
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-16">
          {contactMethods.map((method, index) => (
            <a
              key={method.label}
              href={method.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card p-8 rounded-2xl group hover:scale-105 transition-all duration-300 animate-fade-in-up hover:shadow-2xl hover:shadow-primary/20"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-all duration-300 group-hover:scale-110">
                  <method.icon className="text-primary" size={32} />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">{method.description}</p>
                  <h3 className="text-lg font-semibold mb-2">{method.label}</h3>
                  <p className="text-foreground/90 group-hover:text-primary transition-colors flex items-center gap-2 justify-center">
                    {method.value}
                    <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
          <p className="text-muted-foreground mb-6">Find me on</p>
          <div className="flex justify-center gap-6">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`glass-card p-4 rounded-xl hover:scale-110 transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 ${social.color}`}
                aria-label={social.label}
              >
                <social.icon size={28} />
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
          <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 gradient-text">Let's Build Something Amazing</h3>
            <p className="text-muted-foreground mb-6">
              Whether you have a project in mind, need consultation, or just want to discuss the latest in tech, 
              I'm here to help turn ideas into reality.
            </p>
            <a
              href="mailto:nedas.jaronis@example.com"
              className="inline-flex items-center gap-2 px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/30"
            >
              <Mail size={20} />
              Send me an email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
