import { Briefcase, Calendar, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const experiences = [
  {
    role: "Head of Engineering",
    organization: "Tampa Bay Innovation",
    location: "Tampa, FL (Hybrid)",
    period: "Oct 2025 – Present",
    description:
      "Lead all technical strategy and product development as sole engineer — architecting full-stack applications with Node.js, React, TypeScript, and Azure services. Built an automated startup-identification system with Python web scraping, plus investor tools and AI-powered dashboards, while directing the technology roadmap and advising the CEO.",
  },
  {
    role: "Technical Infrastructure Coordinator",
    organization: "The Foundry — UF CISE Department",
    location: "Gainesville, FL",
    period: "May 2026 – Present",
    description:
      "Coordinating technical infrastructure for a 3-semester apprenticeship program supporting 49 students — authoring program-wide decision memos on developer tooling, AI model access, and technology-stack guardrails, and evaluating AI coding agents and cloud services for faculty and department leadership.",
  },
  {
    role: "Director of Software Engineering",
    organization: "Chosen One Athletes",
    location: "Remote",
    period: "Dec 2025 – Jan 2026",
    description:
      "Architected a full-stack sports-tech platform serving 30+ NFL, college, and professional athletes as sole engineer and de facto CTO — a Go backend (Gorilla Mux, Azure PostgreSQL, Azure AD B2C) with Azure OpenAI integration and real-time SSE updates, plus a React 18 + TypeScript frontend deployed via Docker on Azure.",
  },
  {
    role: "Director of Technological Advancements",
    organization: "UF AI Club (AI² Center Partnership)",
    location: "Gainesville, FL",
    period: "May 2025 – Present",
    description:
      "Lead technical projects and workshops on ML, data science, and LLMs; spearheading a semester project integrating hardware, software, and computer vision.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="py-20 md:py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <p className="section-eyebrow">Where I've Worked</p>
          <h2 className="section-title">Experience</h2>
          <div className="section-divider" />
        </div>

        <div className="max-w-4xl mx-auto space-y-5">
          {experiences.map((exp, index) => (
            <Card
              key={exp.role}
              className="glass-card hover-lift animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="pb-3">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-3">
                  <div className="flex items-start gap-4">
                    <div className="p-3 bg-primary/10 rounded-lg shrink-0 hidden sm:block">
                      <Briefcase className="text-primary" size={22} />
                    </div>
                    <div>
                      <CardTitle className="text-lg md:text-xl mb-1">{exp.role}</CardTitle>
                      <p className="text-muted-foreground">{exp.organization}</p>
                    </div>
                  </div>
                  <div className="flex flex-row md:flex-col gap-3 md:gap-1 md:items-end shrink-0 text-muted-foreground">
                    <span className="flex items-center gap-1.5 text-sm">
                      <Calendar size={14} />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5 text-sm">
                      <MapPin size={14} />
                      {exp.location}
                    </span>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
