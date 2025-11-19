import { Briefcase, Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Experience = () => {
  const experiences = [
    {
      role: "Director of Technological Advancements",
      organization: "UF AI Club (AI2 Center Partnership)",
      period: "Summer 2025 – Present",
      description:
        "Planning and leading technical initiatives, developing AI and ML workshops, and coordinating interdisciplinary projects in collaboration with UF’s AI2 Center.",
    },
    {
      role: "Software Engineer Lead Analyst",
      organization: "Tampa Bay Innovation",
      period: "Summer 2025 – Present",
      description:
        "Providing technical strategy to executive leadership while developing full-stack applications and AI-driven automation solutions using React, TypeScript, Node.js, and Python.",
    },
    {
      role: "SolSearch – 1st Place, Sustainability Track",
      organization: "Gator Hacks 2025",
      period: "October 2025",
      description:
        "Built an AI-powered platform that evaluates land parcels for solar potential using geospatial data, machine learning models, and interactive React-based visualizations.",
    },
  ];

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary text-lg mb-2">Explore My</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <Card
              key={exp.role}
              className="glass-card border-primary/20 hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg mt-1">
                      <Briefcase className="text-primary" size={24} />
                    </div>
                    <div>
                      <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">
                        {exp.role}
                      </CardTitle>
                      <p className="text-muted-foreground">{exp.organization}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground md:ml-auto">
                    <Calendar size={16} />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
