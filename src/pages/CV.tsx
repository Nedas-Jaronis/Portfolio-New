import { useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import { ArrowLeft, ArrowUpRight, Download, Github, Linkedin, Mail } from "lucide-react";
import { rich } from "@/lib/rich";

interface Entry {
  title: string;
  org?: string;
  place?: string;
  period: string;
  tech?: string;
  bullets: string[];
  links?: { label: string; href: string }[];
}

const education = {
  school: "University of Florida",
  degree: "Bachelor of Science in Computer Science",
  gpa: "3.78",
  expected: "May 2028",
  place: "Gainesville, FL",
  coursework:
    "Data Structures and Algorithms, Programming Fundamentals (Python, C++), Computer Organization, Engineering Statistics, Computational Linear Algebra, Discrete Structures 1, Calculus I–III",
};

const experience: Entry[] = [
  {
    title: "Head of Engineering",
    org: "Tampa Bay Innovation",
    place: "Tampa, FL (Hybrid)",
    period: "Oct 2025 – Present",
    bullets: [
      "Own the architecture and engineering deliverables of a venture-intelligence platform, from data ingestion and LLM enrichment through scoring to the investor-facing app, and set the technical roadmap with the CEO.",
      "Built the sourcing pipeline behind **16,701** startups, investors, accelerators, and incubators, pulling from Hacker News, Product Hunt, Lobsters, SEC EDGAR, and Y Combinator through scrapers, APIs, and LLM enrichment.",
      "Designed the evaluation model, built for investors to triage startups: a composite score (team, market, product, traction, timing) and a unicorn-potential score (TAM, network, founder-market fit), with competitive-landscape views.",
    ],
  },
  {
    title: "Software Engineer Lead Analyst",
    org: "Tampa Bay Innovation",
    place: "Tampa, FL",
    period: "Summer 2025",
    bullets: [
      "Advised the CEO on technology architecture, budget and administration, and project planning for investor pitch decks.",
      "Led development and maintenance of the company website and internal web tools using React.js, TypeScript, Node.js, and Python.",
      "Architected and deployed full-stack solutions integrating generative AI models to improve automation and client engagement.",
      "Worked across product and design to improve system scalability, UX responsiveness, and API performance.",
    ],
  },
  {
    title: "Director of Software Engineering",
    org: "Chosen One Athletes",
    place: "Remote",
    period: "Dec 2025 – Jan 2026",
    bullets: [
      "Built a full-stack sports-tech platform from the ground up as sole engineer on a **2-week** contract; in continuous production use since **Dec 2025**, supporting **30+** NFL, college, and pro athletes.",
      "Built the Go backend (Gorilla Mux, Azure PostgreSQL, Azure AD B2C) with Azure OpenAI (GPT-4), real-time SSE, and Blob Storage.",
      "Developed the React 18 + TypeScript frontend (Vite, TanStack Router, Tailwind); containerized with Docker and deployed on Azure.",
    ],
  },
];

const leadership: Entry[] = [
  {
    title: "Technical Infrastructure Coordinator",
    org: "The Foundry, UF Department of Computer & Information Science & Engineering (CISE)",
    place: "Gainesville, FL",
    period: "May 2026 – Present",
    bullets: [
      "Coordinate technical infrastructure decisions for a 3-semester apprenticeship program supporting **49** students.",
      "Author program-wide decision memos on developer tooling, AI model access, and technology-stack guardrails for review by faculty and CISE department leadership.",
      "Research and evaluate developer tools, AI coding agents, and cloud services for pedagogical fit, cost, and scalability across all three program phases.",
    ],
  },
  {
    title: "Lead Organizer",
    org: "Bay Hacks 2026, Tampa Bay Innovation",
    place: "Tampa, FL",
    period: "Jun 2026 – Sep 2026",
    bullets: [
      "Led Tampa Bay Innovation's first hackathon at USF (Sep 18–20, 2026): **24 hours**, **194** registrants, **105** participants, **23** submissions.",
      "Brought in **5** corporate sponsors (including Render and ElevenLabs), **3** campus partners, and **$1,500+** in prizes across **8** tracks.",
      "Recruited a **9-person** judging panel and built the Devpost site and judging rubrics.",
    ],
  },
  {
    title: "Director of Technological Advancements",
    org: "University of Florida AI Club (in partnership with the AI² Center)",
    place: "Gainesville, FL",
    period: "May 2025 – Present",
    bullets: [
      "Lead technical projects and workshops on ML, data science, and LLMs.",
      "Spearhead a semester project integrating hardware, software, and computer vision.",
      "Design workshops and educational tools to build members' skills, and build collaborations with faculty and peers on interdisciplinary AI projects.",
    ],
  },
];

const projects: Entry[] = [
  {
    title: "NevDraw",
    org: "ShellHacks 2026",
    period: "Sep 2026",
    tech: "TypeScript, React, Bun, Effect, WebSockets",
    bullets: [
      "Built a multiplayer whiteboard that turns plain-language typing into live wireframes and architecture diagrams; shipped **50** PRs (**~15K** lines of TypeScript) in one weekend.",
      "Classified text on every keystroke with the **JEV** model, drafting wireframes in as little as **4ms**; synced boards over a schema-typed WebSocket server (Effect on Bun) with a non-blocking LLM refinement pass.",
    ],
    links: [
      { label: "Devpost", href: "https://devpost.com/software/nevdraw-mq29p8" },
      { label: "GitHub", href: "https://github.com/Nedas-Jaronis/NevDraw" },
    ],
  },
  {
    title: "FareBoard",
    org: "Solari submission",
    period: "Sep 2026",
    tech: "Solari cloud browsers, TypeScript",
    bullets: [
      "Built a flight-price search that runs cloud browsers across Google Flights, Kayak, Momondo, Expedia, and Priceline at once, adds every airport around the destination, and reports which flight to take and which site sells it for least.",
      "Searches from nine countries to show the price a local sees rather than the one shown to an American.",
    ],
    links: [
      { label: "Post on X", href: "https://x.com/JaronisNedas/status/2095315544501080370" },
      { label: "GitHub", href: "https://github.com/Nedas-Jaronis/solari-cookbook" },
    ],
  },
  {
    title: "SideQuest",
    org: "Solari submission",
    period: "Sep 2026",
    tech: "Solari cloud browsers, TypeScript",
    bullets: [
      "Built a local what-to-do finder where a dozen cloud browsers read Google Maps, Eventbrite, AllEvents, Groupon, TripAdvisor, and Time Out in parallel, then lay out a weekend plan on a timeline and map.",
    ],
    links: [{ label: "Post on X", href: "https://x.com/JaronisNedas/status/2095240499904872747" }],
  },
  {
    title: "roblox-ugc-pipeline",
    period: "May – Jul 2026",
    tech: "Python, Blender, 3D foundation models",
    bullets: [
      "Built an end-to-end pipeline that turns a text prompt or image into a marketplace-ready Roblox UGC asset, using Roblox's cube3d and TripoSG for mesh generation and validating output against Roblox's spec.",
      "Automated headless Blender stages that auto-rig meshes to the R15 skeleton, bake textures, and decimate to Roblox triangle budgets, with optional upload via Open Cloud.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Nedas-Jaronis/roblox-ugc-pipeline" }],
  },
  {
    title: "Glass Tint",
    org: "Facial Recognition Assistive Glasses",
    period: "Mar – Apr 2026",
    tech: "ESP32, ESP32-CAM, Python, OpenCV, ArcFace",
    bullets: [
      "Designed an assistive wearable for visually impaired users: an ESP32-CAM streams to an ESP32 hub running Meta's ArcFace model to verify faces against an enrolled database in real time, with audio feedback for known vs. unknown individuals.",
    ],
  },
  {
    title: "Physics Visualizer",
    period: "May – Jul 2025",
    tech: "React, TypeScript, BAML, Python",
    bullets: [
      "Built a dynamic physics problem visualizer powered by LLM prompting with BAML, with an interactive React/TypeScript frontend that animates solutions in real time.",
      "Designed a backend pipeline that interprets user questions, resolves them with BAML-enhanced prompts, and updates the visuals dynamically.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Nedas-Jaronis/PhysicsVisualizer" }],
  },
  {
    title: "SolScope",
    org: "1st Place, Sustainability Track, Gator Hacks 2025",
    period: "Jan 2025",
    tech: "React.js, Python, scikit-learn, SQLite · APIs: OpenStreetMap, NSRDB, Open Meteo, US EIA",
    bullets: [
      "Built an AI-driven platform evaluating land parcels for solar energy potential from geospatial and environmental datasets.",
      "Used ML models (Random Forest, k-NN) to forecast renewable adoption trends and identify optimal solar sites.",
      "Built interactive heat maps and solar-suitability scoring visualizations in React.js.",
    ],
    links: [{ label: "GitHub", href: "https://github.com/Nedas-Jaronis/SolSearch" }],
  },
];

const awards = [
  { title: "1st Place, Sustainability Track", detail: "SolScope, Gator Hacks 2025", period: "Jan 2025" },
  {
    title: "Building Transformer-Based Natural Language Processing Applications",
    detail: "NVIDIA certification",
    period: "Jul 2025",
  },
];

const skills = [
  { label: "Languages", items: "Python, TypeScript, JavaScript, Go, C++, HTML/CSS" },
  {
    label: "Frameworks & Libraries",
    items:
      "React, Node.js, Bun, Effect, Flask, Gorilla Mux, TanStack Router, Tailwind CSS, shadcn/ui, Framer Motion, BAML, TensorFlow, scikit-learn, NumPy, Pandas, Matplotlib, OpenCV",
  },
  { label: "Developer Tools", items: "Git, Docker, Vite, VS Code, Visual Studio, PyCharm, Jupyter, Claude Code" },
  {
    label: "Cloud & AI",
    items:
      "Azure (App Services, Blob Storage, PostgreSQL, OpenAI, Entra ID / AD B2C), LLM integration, agentic AI development",
  },
  { label: "Hardware", items: "ESP32, ESP32-CAM, Raspberry Pi 5" },
];

const Row = ({ left, children }: { left: React.ReactNode; children: React.ReactNode }) => (
  <article className="grid md:grid-cols-12 gap-3 md:gap-10 py-8 border-t border-white/10 first:border-t-0">
    <div className="md:col-span-3 text-sm text-neutral-500">{left}</div>
    <div className="md:col-span-9">{children}</div>
  </article>
);

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-16 md:mt-24">
    <h2 className="text-xs sm:text-sm tracking-[0.25em] uppercase text-neutral-500 pb-4 border-b border-white/20">
      {title}
    </h2>
    {children}
  </section>
);

const EntryRow = ({ e }: { e: Entry }) => (
  <Row
    left={
      <>
        <p className="text-neutral-300">{e.period}</p>
        {e.place && <p className="mt-1">{e.place}</p>}
      </>
    }
  >
    <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{e.title}</h3>
    {e.org && <p className="text-neutral-400 mt-1">{e.org}</p>}
    {e.tech && <p className="text-sm text-neutral-500 mt-1">{e.tech}</p>}
    <ul className="mt-4 space-y-2 text-neutral-400 leading-relaxed">
      {e.bullets.map((b) => (
        <li key={b} className="flex gap-3">
          <span aria-hidden className="text-neutral-600 select-none">
            –
          </span>
          <span>{rich(b)}</span>
        </li>
      ))}
    </ul>
    {e.links && (
      <div className="mt-4 flex flex-wrap gap-3">
        {e.links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-neutral-300 hover:text-white underline underline-offset-4 decoration-white/30"
          >
            {l.label}
            <ArrowUpRight size={14} />
          </a>
        ))}
      </div>
    )}
  </Row>
);

const CV = () => {
  useEffect(() => {
    document.title = "Nedas Jaronis · CV";
    window.scrollTo(0, 0);
    return () => {
      document.title = "Nedas Jaronis";
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-[#f5f5f7]">
      <header className="sticky top-0 z-30 bg-black/60 backdrop-blur-[3px]">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <RouterLink
            to="/"
            className="inline-flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors"
          >
            <ArrowLeft size={16} />
            Portfolio
          </RouterLink>
          <a
            href="/Nedas_Jaronis_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-[#f5f5f7] text-black px-4 py-1.5 text-[13px] font-medium hover:bg-white transition-colors"
          >
            <Download size={14} />
            Resume PDF
          </a>
        </div>
      </header>

      <main className="container mx-auto px-6 pt-16 md:pt-24 pb-28 max-w-5xl">
        <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-neutral-500 mb-4">Curriculum Vitae</p>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tighter leading-none">
          Nedas Jaronis<span className="text-neutral-500">.</span>
        </h1>
        <p className="mt-5 text-lg text-neutral-400">Full Stack Engineer · Gainesville, FL</p>
        <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-neutral-400">
          <a href="mailto:jaronisnedas@gmail.com" className="inline-flex items-center gap-2 hover:text-white">
            <Mail size={16} />
            jaronisnedas@gmail.com
          </a>
          <a
            href="https://github.com/Nedas-Jaronis"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white"
          >
            <Github size={16} />
            Nedas-Jaronis
          </a>
          <a
            href="https://www.linkedin.com/in/jaronisnedas/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 hover:text-white"
          >
            <Linkedin size={16} />
            jaronisnedas
          </a>
        </div>

        <Section title="Education">
          <Row
            left={
              <>
                <p className="text-neutral-300">Expected {education.expected}</p>
                <p className="mt-1">{education.place}</p>
              </>
            }
          >
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight">{education.school}</h3>
            <p className="text-neutral-400 mt-1">
              {education.degree} · GPA {rich(`**${education.gpa}**`)}
            </p>
            <p className="mt-4 text-sm text-neutral-500 leading-relaxed">
              <span className="text-neutral-400">Relevant coursework: </span>
              {education.coursework}
            </p>
          </Row>
        </Section>

        <Section title="Experience">
          {experience.map((e) => (
            <EntryRow key={e.title + e.org} e={e} />
          ))}
        </Section>

        <Section title="Leadership & Programs">
          {leadership.map((e) => (
            <EntryRow key={e.title + e.org} e={e} />
          ))}
        </Section>

        <Section title="Projects">
          {projects.map((e) => (
            <EntryRow key={e.title} e={e} />
          ))}
        </Section>

        <Section title="Awards & Certifications">
          {awards.map((a) => (
            <Row key={a.title} left={<p className="text-neutral-300">{a.period}</p>}>
              <h3 className="text-lg md:text-xl font-semibold tracking-tight">{a.title}</h3>
              <p className="text-neutral-400 mt-1">{a.detail}</p>
            </Row>
          ))}
        </Section>

        <Section title="Technical Skills">
          {skills.map((s) => (
            <Row key={s.label} left={<p className="text-neutral-300">{s.label}</p>}>
              <p className="text-neutral-400 leading-relaxed">{s.items}</p>
            </Row>
          ))}
        </Section>
      </main>
    </div>
  );
};

export default CV;
