import { Code2, Layers, Cloud, Cpu } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const skillGroups = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Python", "Go", "C++", "TypeScript", "JavaScript", "HTML", "CSS"],
  },
  {
    title: "Frameworks & Libraries",
    icon: Layers,
    skills: [
      "React",
      "Node.js",
      "Flask",
      "Gorilla Mux",
      "TanStack Router",
      "Tailwind CSS",
      "shadcn/ui",
      "TensorFlow",
      "NumPy",
      "Pandas",
      "BAML",
    ],
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    skills: [
      "Azure (App Services, OpenAI, Entra ID)",
      "PostgreSQL",
      "Docker",
      "Git",
      "Vite",
      "Claude Code",
      "Jupyter",
    ],
  },
  {
    title: "AI/ML & Embedded",
    icon: Cpu,
    skills: [
      "Agentic AI Development",
      "Azure OpenAI (GPT-4)",
      "Computer Vision",
      "OpenCV",
      "ESP32 / ESP32-CAM",
      "Raspberry Pi 5",
    ],
  },
];

const TechStack = () => {
  return (
    <section id="skills" className="py-20 md:py-24 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <p className="section-eyebrow">What I Work With</p>
          <h2 className="section-title">Skills</h2>
          <div className="section-divider" />
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {skillGroups.map((group, index) => (
            <Card
              key={group.title}
              className="glass-card hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6 md:p-8">
                <div className="flex items-center gap-3 mb-5">
                  <div className="p-2.5 bg-primary/10 rounded-lg">
                    <group.icon className="text-primary" size={20} />
                  </div>
                  <h3 className="text-lg font-semibold">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1.5 text-sm font-medium rounded-md bg-secondary/60 border border-border/60 text-foreground/90"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
