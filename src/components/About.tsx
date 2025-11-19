import { GraduationCap, User, Award } from "lucide-react";
import { Card, CardContent } from "../components/ui/card";

const About = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">About Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left - About Text */}
          <div className="space-y-6 animate-fade-in-up">
            <div className="glass-card p-8 rounded-2xl space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <User className="text-primary" size={24} />
                </div>
                <h3 className="text-2xl font-semibold">Who I Am</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                As a sophomore studying Computer Science at the University of Florida,
                I'm passionate about becoming an AI researcher dedicated to building
                innovative solutions that create meaningful, real-world impact.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Recently, I developed <span className="text-primary font-semibold">SolScope</span>,
                a hackathon-winning application that evaluates land parcels for solar energy
                potential using AI-driven insights. Our tool analyzes topography, solar
                irradiance, grid proximity, and renewable energy trends to help landowners,
                developers, and policymakers make data-driven sustainability decisions.
              </p>

              <p className="text-muted-foreground leading-relaxed">
                Outside of coding, I enjoy staying active through surfing, snowboarding,
                and soccer. I'm always eager to connect with fellow tech enthusiasts and
                industry professionals to learn, collaborate, and grow together.
              </p>
            </div>
          </div>

          {/* Right - Education & Experience Cards */}
          <div className="space-y-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            {/* Education Card */}
            <Card className="glass-card border-primary/20 hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <GraduationCap className="text-primary" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold gradient-text">Education</h3>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-semibold">B.S. in Computer Science</h4>
                  <p className="text-muted-foreground">University of Florida</p>
                  <p className="text-primary font-medium">Expected Graduation: May 2028</p>
                </div>
              </CardContent>
            </Card>

            {/* Experience Highlights Card */}
            <Card className="glass-card border-primary/20 hover-lift">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-lg">
                    <Award className="text-primary" size={24} />
                  </div>
                  <h3 className="text-2xl font-semibold gradient-text">Highlights</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-lg">Director of Technological Advancements</h4>
                    <p className="text-muted-foreground">UF AI Club (AI2 Center Partnership)</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">Software Engineer Lead Analyst</h4>
                    <p className="text-muted-foreground">Tampa Bay Innovation</p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-lg">SolSearch – 1st Place, Sustainability Track</h4>
                    <p className="text-muted-foreground">Gator Hacks 2025</p>
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
