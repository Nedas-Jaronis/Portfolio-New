import { ExternalLink, Github } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { title } from "process";

const Projects = () => {
  const projects = [
    {
      title: "SolSearch",
      description:
        "An AI-powered platform that evaluates land parcels for solar energy potential using geospatial data, machine learning models, and interactive heat map visualizations. Winner of 1st place in the Sustainability Track at Gator Hacks 2025.",
      github: "https://github.com/Nedas-Jaronis/SolSearch",
      color: "from-yellow-400/20 to-orange-400/20",
    },
    {
      title: "Physics Visualizer",
      description:
        "A dynamic physics problem visualizer that interprets user questions and generates animated, real-time solutions using a BAML-enhanced LLM pipeline.",
      github: "https://github.com/Nedas-Jaronis/PhysicsVisualizer",
      color: "from-purple-500/20 to-violet-500/20",
    },
    {
      title: "Stock Market Prediction (Sentiment Analysis)",
      description:
        "A predictive analysis system leveraging sentiment analysis and market indicators to forecast stock movement trends using Python, NLP models, and financial data APIs.",
      github: "https://github.com/Nedas-Jaronis/Stock-Prediction-Analysis",
      color: "from-cyan-400/20 to-blue-600/20", // finance-like, professional
    },
    {
      title: "Spotify Song Recommendation Analysis",
      description:
      "A sophisticated song recommendation system that uses BFS and DFS algorithms to find personalized song suggestions from a dataset of 600,000+ Spotify tracks.",
      github: "https://github.com/Nedas-Jaronis/Project-2-DSA",
      color: "from-pink-400/20 to-red-500/20", // vibrant music-inspired gradient
    },
    {
      title: "Sudoku",
      description:
        "An intelligent Sudoku solver and generator with multiple difficulty levels and an optional hinting system.",
      github: "https://github.com/Nedas-Jaronis/Sudoku-Project",
      color: "from-green-400/20 to-teal-500/20", // puzzle/fresh green gradient
    },
  ];



  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in-up">
          <p className="text-primary text-lg mb-2">Browse My Recent</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className="glass-card border-primary/20 hover-lift group overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background */}
              <div className={`h-40 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                <div className="absolute inset-0 backdrop-blur-3xl" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl font-bold text-white/10">
                    {project.title.split(' ')[0]}
                  </div>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground leading-relaxed min-h-[80px]">
                  {project.description}
                </CardDescription>
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    size="sm"
                    className="gap-2 border-primary/50 hover:bg-primary/10 flex-1"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} />
                      GitHub
                    </a>
                  </Button>
                  <Button
                    size="sm"
                    className="gap-2 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    {/* <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} />
                      View
                    </a> */}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
