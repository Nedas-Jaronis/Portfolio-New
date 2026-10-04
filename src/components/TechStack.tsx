import SectionHead from "./SectionHead";

const skillGroups = [
  {
    title: "Languages",
    skills: ["Python", "TypeScript", "JavaScript", "Go", "C++", "HTML/CSS"],
  },
  {
    title: "Frameworks & Libraries",
    skills: [
      "React",
      "Node.js",
      "Bun",
      "Effect",
      "Flask",
      "Tailwind CSS",
      "Docker",
      "Git",
      "TensorFlow",
      "scikit-learn",
      "OpenCV",
    ],
  },
  {
    title: "Cloud & AI",
    skills: [
      "Azure App Services",
      "Azure Blob Storage",
      "Azure PostgreSQL",
      "Azure OpenAI",
      "Entra ID",
      "LLM integration",
      "Agentic AI development",
    ],
  },
  {
    title: "Hardware",
    skills: ["ESP32", "ESP32-CAM", "Raspberry Pi 5"],
  },
];

const TechStack = () => (
  <section id="skills" className="bg-black text-[#f5f5f7] py-24 md:py-32 border-t border-white/10">
    <div className="container mx-auto px-6">
      <SectionHead eyebrow="Skills" title="What I work with." />
      <div className="grid sm:grid-cols-2 gap-x-16 gap-y-14">
        {skillGroups.map((group) => (
          <div key={group.title}>
            <h3 className="text-xl font-semibold tracking-tight mb-5">{group.title}</h3>
            <div className="flex flex-wrap gap-2">
              {group.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-3.5 py-1.5 text-sm rounded-full border border-white/15 text-neutral-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <p className="mt-14 text-neutral-500 text-sm">
        Certification: Building Transformer-Based Natural Language Processing Applications, NVIDIA (July 2025)
      </p>
    </div>
  </section>
);

export default TechStack;
