import { Github, Box, BrainCircuit, Sun, Atom, TrendingUp, Glasses, Gamepad2, ExternalLink } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Roblox UGC Pipeline",
    icon: Box,
    description:
      "Local-first pipeline that takes a text prompt or image all the way to a marketplace-ready Roblox UGC asset — 3D generation with Roblox's cube3d and TripoSG, headless-Blender auto-rigging to the R15 skeleton, multi-view texture baking, spec validation, and Open Cloud publishing.",
    github: "https://github.com/Nedas-Jaronis/roblox-ugc-pipeline",
    tags: ["Python", "Blender", "cube3d", "Stable Diffusion", "Text-to-3D"],
  },
  {
    title: "Memory-Efficient Backpropagation",
    icon: BrainCircuit,
    description:
      "Deep learning rebuilt from first principles — hand-derived, numerically gradient-checked backward passes, working up to a memory-efficient transformer backward pass that trades stored activations for chunked recomputation to cut training VRAM.",
    github: "https://github.com/Nedas-Jaronis/MemoryEfficient-Backprop",
    tags: ["Python", "NumPy", "PyTorch", "Transformers"],
  },
  {
    title: "Glass Tint — Assistive Glasses",
    icon: Glasses,
    description:
      "Assistive wearable for visually impaired users — an ESP32-CAM streams to an ESP32 hub running the ArcFace model to verify faces against an enrolled database in real time, delivering audio feedback for known vs. unknown individuals.",
    github: null,
    tags: ["ESP32", "Python", "OpenCV", "ArcFace", "Computer Vision"],
  },
  {
    title: "SolScope",
    icon: Sun,
    description:
      "AI-powered platform that evaluates land parcels for solar energy potential using geospatial data, machine learning models, and interactive heat-map visualizations. 1st place, Sustainability Track at Gator Hacks 2025.",
    github: "https://github.com/Nedas-Jaronis/SolSearch",
    tags: ["React", "Python", "scikit-learn", "SQLite"],
  },
  {
    title: "Physics Visualizer",
    icon: Atom,
    description:
      "Dynamic physics problem visualizer that interprets user questions and generates animated, real-time solutions through a BAML-enhanced LLM pipeline.",
    github: "https://github.com/Nedas-Jaronis/PhysicsVisualizer",
    tags: ["React", "TypeScript", "BAML", "Python"],
  },
  {
    title: "Stock Market Prediction",
    icon: TrendingUp,
    description:
      "Predictive analysis system leveraging sentiment analysis and market indicators to forecast stock movement trends using Python, NLP models, and financial data APIs.",
    github: "https://github.com/Nedas-Jaronis/Stock-Prediction-Analysis",
    tags: ["Python", "NLP", "Pandas"],
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 md:py-24 relative overflow-hidden bg-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12 md:mb-16 animate-fade-in-up">
          <p className="section-eyebrow">Browse My Recent</p>
          <h2 className="section-title">Projects</h2>
          <div className="section-divider" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="glass-card hover-lift group flex flex-col animate-fade-in-up"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <CardHeader className="pb-3">
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-3">
                  <project.icon className="text-primary" size={22} />
                </div>
                <CardTitle className="text-lg md:text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col flex-1 gap-4">
                <CardDescription className="text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-medium rounded-md bg-secondary/60 border border-border/60 text-foreground/80"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {project.github ? (
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-primary/40 hover:bg-primary/10 w-full"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      View on GitHub
                    </a>
                  </Button>
                ) : (
                  <div className="h-9 flex items-center justify-center text-xs text-muted-foreground border border-border/60 rounded-md">
                    Hardware project — demo on request
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* 3D portfolio call-out */}
        <div className="max-w-6xl mx-auto mt-10 animate-fade-in-up">
          <a
            href="https://threejs-portfolio-sand.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card hover-lift group flex flex-col sm:flex-row items-center justify-between gap-5 p-6 md:p-8 rounded-2xl border-primary/30"
          >
            <div className="flex items-center gap-4 text-center sm:text-left flex-col sm:flex-row">
              <div className="p-3 bg-primary/10 rounded-lg shrink-0">
                <Gamepad2 className="text-primary" size={26} />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-semibold group-hover:text-primary transition-colors">
                  Prefer something interactive?
                </h3>
                <p className="text-muted-foreground text-sm md:text-base">
                  Explore the 3D, game-like version of this portfolio — built with Three.js.
                </p>
              </div>
            </div>
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium text-sm shrink-0 group-hover:bg-primary/90 transition-colors">
              Launch 3D Portfolio
              <ExternalLink size={15} />
            </span>
          </a>
        </div>

        <div className="text-center mt-10 animate-fade-in-up">
          <a
            href="https://github.com/Nedas-Jaronis?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium text-primary hover:underline underline-offset-4"
          >
            See more on GitHub →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
