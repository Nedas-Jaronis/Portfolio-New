import SectionHead from "./SectionHead";
import { rich } from "@/lib/rich";

const experiences = [
  {
    role: "Head of Engineering",
    organization: "Tampa Bay Innovation",
    location: "Tampa, FL (Hybrid)",
    period: "Oct 2025 – Present",
    description:
      "Sole engineer building a full-stack platform from scratch on Node.js, React, and Azure: **155** API endpoints, **469** commits, and **48** releases. Architected the Azure infrastructure end to end at a **99.94%** success rate across **12,300+** production requests, and built an AI startup enrichment pipeline (Azure OpenAI GPT-4o, GitHub, SEC EDGAR APIs) that auto-generates investment scorecards.",
  },
  {
    role: "Technical Infrastructure Coordinator",
    organization: "The Foundry — UF CISE Department",
    location: "Gainesville, FL",
    period: "May 2026 – Present",
    description:
      "Coordinating technical infrastructure for a 3-semester apprenticeship program supporting **49** students, and authoring program-wide decision memos on developer tooling, AI model access, and technology-stack guardrails for faculty and department leadership.",
  },
  {
    role: "Lead Organizer, Bay Hacks 2026",
    organization: "Tampa Bay Innovation",
    location: "Tampa, FL",
    period: "Jun 2026 – Sep 2026",
    description:
      "Led Tampa Bay Innovation's first hackathon, a **24-hour** event at USF with **194** registrants, **105** participants, and **23** submissions. Secured **5** corporate sponsors (including Render and ElevenLabs) and **3** university chapters, funding **$1,500+** in prizes across **5** tracks, and recruited a **9-person** judging panel. Built the Devpost site with tracks, rules, and per-track judging rubrics.",
  },
  {
    role: "Director of Technological Advancements",
    organization: "UF AI Club (AI² Center Partnership)",
    location: "Gainesville, FL",
    period: "May 2025 – Present",
    description:
      "Lead technical projects and workshops on ML, data science, and LLMs, and spearhead a semester project integrating hardware, software, and computer vision.",
  },
  {
    role: "Director of Software Engineering",
    organization: "Chosen One Athletes",
    location: "Remote",
    period: "Dec 2025 – Jan 2026",
    description:
      "Built a full-stack sports-tech platform from the ground up as sole engineer on a **2-week** contract, in continuous production since **Dec 2025** and supporting **30+** NFL, college, and pro athletes. Go backend (Gorilla Mux, Azure PostgreSQL, Azure AD B2C) with Azure OpenAI (GPT-4), real-time SSE, and Blob Storage, plus a React 18 + TypeScript frontend (Vite, TanStack Router, Tailwind) containerized with Docker on Azure.",
  },
];

const Experience = () => (
  <section id="experience" className="bg-black text-[#f5f5f7] py-24 md:py-32 border-t border-white/10">
    <div className="container mx-auto px-6">
      <SectionHead eyebrow="Experience" title="Where I've worked." />
      <div className="divide-y divide-white/10 border-y border-white/10">
        {experiences.map((exp) => (
          <article key={exp.role} className="grid md:grid-cols-12 gap-4 md:gap-10 py-10">
            <div className="md:col-span-4">
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{exp.role}</h3>
              <p className="text-neutral-400 mt-1">{exp.organization}</p>
              <p className="text-sm text-neutral-500 mt-3">{exp.period}</p>
              <p className="text-sm text-neutral-500">{exp.location}</p>
            </div>
            <p className="md:col-span-8 text-neutral-400 leading-relaxed md:text-lg">{rich(exp.description)}</p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Experience;
