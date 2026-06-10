import { GraduationCap, User, Award } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <p className="section-eyebrow">Get To Know</p>
          <h2 className="section-title">About Me</h2>
          <div className="section-divider" />
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-10 items-start max-w-6xl mx-auto">
          {/* Left - About Text */}
          <div className="animate-fade-in-up">
            <Card className="glass-card hover-lift h-full">
              <CardContent className="p-6 md:p-8 space-y-4">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <User className="text-primary" size={22} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">Who I Am</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  I'm a Computer Science student at the University of Florida
                  working toward a career in AI research, currently serving as
                  Head of Engineering at Tampa Bay Innovation. I like building
                  things end to end — from training and understanding the models
                  themselves to shipping the systems around them.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Recently I've been building a{" "}
                  <span className="text-primary font-semibold">
                    local-first Roblox UGC generation pipeline
                  </span>{" "}
                  (text-to-3D, auto-rigging, and texture baking with Blender)
                  and reimplementing{" "}
                  <span className="text-primary font-semibold">
                    backpropagation from scratch
                  </span>{" "}
                  to explore memory-efficient training. Before that, I built{" "}
                  <span className="text-primary font-semibold">SolScope</span>,
                  a hackathon-winning platform that evaluates land parcels for
                  solar energy potential.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Outside of coding, I stay active through surfing, snowboarding,
                  and soccer, and I'm always glad to connect with fellow builders
                  and industry professionals.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Right - Education & Highlights */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
            <Card className="glass-card hover-lift">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="text-primary" size={22} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">Education</h3>
                </div>
                <div className="space-y-1">
                  <h4 className="text-lg font-semibold">B.S. in Computer Science</h4>
                  <p className="text-muted-foreground">University of Florida</p>
                  <p className="text-sm text-muted-foreground">GPA: 3.77 · Expected May 2028</p>
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card hover-lift">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="text-primary" size={22} />
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold">Highlights</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold">Head of Engineering</h4>
                    <p className="text-sm text-muted-foreground">Tampa Bay Innovation</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Technical Infrastructure Coordinator</h4>
                    <p className="text-sm text-muted-foreground">
                      The Foundry — UF CISE Department
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">Director of Technological Advancements</h4>
                    <p className="text-sm text-muted-foreground">
                      UF AI Club (AI² Center Partnership)
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold">SolScope — 1st Place, Sustainability Track</h4>
                    <p className="text-sm text-muted-foreground">Gator Hacks 2025</p>
                  </div>

                  <div>
                    <h4 className="font-semibold">
                      Transformer-Based NLP Applications Certification
                    </h4>
                    <p className="text-sm text-muted-foreground">NVIDIA, July 2025</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
