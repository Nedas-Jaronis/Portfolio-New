import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/send", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });



      const data = await res.json();
      if (data.success) {
        toast({ title: "Message Sent!", description: "Thanks for reaching out!" });
        setFormData({ name: "", email: "", message: "" });
      } else {
        toast({ title: "Error", description: data.error });
      }
    } catch (err) {
      toast({ title: "Error", description: "Something went wrong" });
    }
  };


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary text-lg mb-2">Let's Connect</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Contact Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="glass-card p-8 rounded-2xl space-y-6">
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-all duration-300 hover:translate-x-2">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Mail className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium">jaronisnedas@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-all duration-300 hover:translate-x-2">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Phone className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-medium">+1 (386) 283-7781</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 bg-background/50 rounded-lg hover:bg-background/80 transition-all duration-300 hover:translate-x-2">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <MapPin className="text-primary" size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-medium">Gainesville, Florida</p>
                  </div>
                </div>
              </div>

              <div className="pt-6 border-t border-border/50">
                <p className="text-muted-foreground">
                  I'm always eager to connect with fellow tech enthusiasts and industry
                  professionals. Feel free to reach out for collaboration opportunities,
                  questions, or just to chat about technology!
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="glass-card border-primary/20 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <CardContent className="p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="bg-background/50 border-border/50 focus:border-primary"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Your Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or just say hi!"
                    rows={6}
                    required
                    className="bg-background/50 border-border/50 focus:border-primary resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full gap-2 bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  <Send size={18} />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
