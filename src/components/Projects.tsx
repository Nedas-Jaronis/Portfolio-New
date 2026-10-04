import { ArrowUpRight } from "lucide-react";
import SectionHead from "./SectionHead";
import { rich } from "@/lib/rich";

interface Link {
  label: string;
  href: string;
}

interface Featured {
  title: string;
  kicker?: string;
  description: string;
  tags: string[];
  links: Link[];
  video: string;
  poster: string;
  /** width / height of the video file, so the player never crops it */
  ratio: number;
}

// The two Solari posts on X. Order matches the order they were shared in.
const FAREBOARD_X = "https://x.com/JaronisNedas/status/2095315544501080370";
const SIDEQUEST_X = "https://x.com/JaronisNedas/status/2095240499904872747";

const featured: Featured[] = [
  {
    title: "NevDraw",
    description:
      "A multiplayer, Excalidraw-style canvas. Type what you're building and everyone on the board watches it turn into wireframes and system architecture as you type. Shipped **50** PRs (**~15K** lines of TypeScript) in one weekend, classifying text on every keystroke with the **JEV** model to draft wireframes in as little as **4ms**.",
    tags: ["TypeScript", "Bun", "Effect", "WebSockets"],
    links: [
      { label: "Devpost", href: "https://devpost.com/software/nevdraw-mq29p8" },
      { label: "GitHub", href: "https://github.com/Nedas-Jaronis/NevDraw" },
    ],
    video: "/videos/nevdraw.mp4",
    poster: "/videos/nevdraw.jpg",
    ratio: 1280 / 752,
  },
  {
    title: "FareBoard",
    kicker: "Solari submission",
    description:
      "Ask for any flight on any date. Cloud browsers read Google Flights, Kayak, Momondo, Expedia and Priceline at the same time, check every airport around your destination, and tell you which flight to take and which site sells it for least. It can search from nine countries to show the price a local sees.",
    tags: ["Solari", "Cloud browsers", "TypeScript"],
    links: [
      { label: "Post on X", href: FAREBOARD_X },
      { label: "GitHub", href: "https://github.com/Nedas-Jaronis/solari-cookbook" },
    ],
    video: "/videos/fareboard.mp4",
    poster: "/videos/fareboard.jpg",
    ratio: 1280 / 614,
  },
  {
    title: "SideQuest",
    kicker: "Solari submission",
    description:
      "Tell it your town and a vibe. A dozen cloud browsers read Google Maps, Eventbrite, AllEvents, Groupon, TripAdvisor and Time Out in parallel, then lay out a plan for your weekend on a timeline and a map.",
    tags: ["Solari", "Cloud browsers", "TypeScript"],
    links: [{ label: "Post on X", href: SIDEQUEST_X }],
    video: "/videos/sidequest.mp4",
    poster: "/videos/sidequest.jpg",
    ratio: 1280 / 614,
  },
];

const others = [
  {
    title: "Roblox UGC Pipeline",
    description:
      "Local-first pipeline from a text prompt or image to a marketplace-ready Roblox UGC asset: 3D generation, headless-Blender auto-rigging to R15, texture baking, validation, and Open Cloud publishing.",
    github: "https://github.com/Nedas-Jaronis/roblox-ugc-pipeline",
    tags: ["Python", "Blender", "cube3d", "Text-to-3D"],
  },
  {
    title: "SolScope",
    description:
      "AI platform that scores land parcels for solar potential using geospatial data, ML models, and heat-map visualizations. **1st place, Sustainability Track, Gator Hacks 2025.**",
    github: "https://github.com/Nedas-Jaronis/SolSearch",
    tags: ["React", "Python", "scikit-learn"],
  },
  {
    title: "Physics Visualizer",
    description:
      "Interprets a physics question and generates an animated, real-time solution through a BAML-enhanced LLM pipeline.",
    github: "https://github.com/Nedas-Jaronis/PhysicsVisualizer",
    tags: ["React", "TypeScript", "BAML"],
  },
  {
    title: "Glass Tint",
    description:
      "Assistive glasses for visually impaired users. An ESP32-CAM streams to a hub running ArcFace to recognise enrolled faces in real time and speak the result.",
    github: null,
    tags: ["ESP32", "Python", "OpenCV", "ArcFace"],
  },
];

const cardClass =
  "group flex flex-col rounded-3xl border border-white/10 bg-white/[0.03] p-8 transition-colors";

const Tags = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((t) => (
      <span key={t} className="px-3 py-1 text-xs rounded-full border border-white/15 text-neutral-400">
        {t}
      </span>
    ))}
  </div>
);

const Projects = () => (
  <section id="projects" className="bg-black text-[#f5f5f7] py-24 md:py-32 border-t border-white/10">
    <div className="container mx-auto px-6">
      <SectionHead eyebrow="Projects" title="Things I've built." />

      <div className="space-y-6">
        {featured.map((p) => (
          <article
            key={p.title}
            className="grid lg:grid-cols-12 gap-8 lg:gap-10 rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-8"
          >
            <video
              className="lg:col-span-7 w-full rounded-2xl border border-white/10 bg-black object-cover"
              style={{ aspectRatio: String(p.ratio) }}
              src={p.video}
              poster={p.poster}
              controls
              playsInline
              preload="none"
            />
            <div className="lg:col-span-5 flex flex-col justify-center">
              {p.kicker && (
                <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-3">{p.kicker}</p>
              )}
              <h3 className="text-3xl font-semibold tracking-tight">{p.title}</h3>
              <p className="mt-4 text-neutral-400 leading-relaxed">{rich(p.description)}</p>
              <div className="mt-6">
                <Tags tags={p.tags} />
              </div>
              <div className="mt-6 flex flex-wrap gap-3">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 rounded-full border border-white/25 px-4 py-2 text-sm font-medium hover:bg-white/10 transition-colors"
                  >
                    {l.label}
                    <ArrowUpRight size={16} />
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-6 grid md:grid-cols-2 gap-5">
        {others.map((p) => {
          const inner = (
            <>
              <div className="flex items-start justify-between gap-4">
                <h3 className="text-2xl font-semibold tracking-tight">{p.title}</h3>
                {p.github && (
                  <ArrowUpRight
                    size={22}
                    className="shrink-0 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all"
                  />
                )}
              </div>
              <p className="mt-4 text-neutral-400 leading-relaxed flex-1">{rich(p.description)}</p>
              <div className="mt-6">
                <Tags tags={p.tags} />
              </div>
              {!p.github && <p className="mt-4 text-xs text-neutral-500">Hardware project. Demo on request.</p>}
            </>
          );
          return p.github ? (
            <a
              key={p.title}
              href={p.github}
              target="_blank"
              rel="noopener noreferrer"
              className={`${cardClass} hover:bg-white/[0.07] hover:border-white/25`}
            >
              {inner}
            </a>
          ) : (
            <div key={p.title} className={cardClass}>
              {inner}
            </div>
          );
        })}
      </div>

      <div className="mt-12 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t border-white/10 pt-10">
        <a
          href="https://threejs-portfolio-sand.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-white transition-colors"
        >
          Prefer something interactive? Try the 3D version of this site (beta) <span aria-hidden>→</span>
        </a>
        <a
          href="https://github.com/Nedas-Jaronis?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
          className="text-neutral-400 hover:text-white transition-colors"
        >
          All repositories on GitHub <span aria-hidden>→</span>
        </a>
      </div>
    </div>
  </section>
);

export default Projects;
