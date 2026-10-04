import SectionHead from "./SectionHead";

const highlights = [
  { role: "Head of Engineering", org: "Tampa Bay Innovation" },
  { role: "Lead Organizer, Bay Hacks 2026", org: "Tampa Bay Innovation, 24-hour hackathon at USF" },
  { role: "Technical Infrastructure Coordinator", org: "The Foundry, UF CISE Department" },
  { role: "Director of Technological Advancements", org: "UF AI Club (AI² Center Partnership)" },
  { role: "1st Place, Sustainability Track", org: "SolScope, Gator Hacks 2025" },
  { role: "Transformer-Based NLP Applications", org: "NVIDIA Certification, July 2025" },
];

const About = () => (
  <section id="about" className="bg-black text-[#f5f5f7] py-24 md:py-32">
    <div className="container mx-auto px-6">
      <SectionHead eyebrow="About" title="Curious, and building." />

      <div className="grid lg:grid-cols-5 gap-12 lg:gap-20">
        <div className="lg:col-span-3 space-y-6 text-lg md:text-xl text-neutral-400 leading-relaxed">
          <p>
            I'm a Computer Science student at the University of Florida working toward a career
            in AI research, and Head of Engineering at Tampa Bay Innovation. I like building
            things end to end, from understanding the models themselves to shipping the systems
            around them.
          </p>
          <p>
            Lately that's a <span className="text-[#f5f5f7]">local-first Roblox UGC pipeline</span>{" "}
            (text-to-3D, auto-rigging, texture baking in Blender), a multiplayer whiteboard that
            draws your architecture as you type, a drone-swarm console for wildfire rescue, and{" "}
            <span className="text-[#f5f5f7]">backpropagation written from scratch</span>.
          </p>
          <p>
            Away from the keyboard I'm surfing, snowboarding, or playing soccer, and I'm always
            glad to meet other builders.
          </p>
        </div>

        <div className="lg:col-span-2 space-y-10">
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-3">Education</p>
            <p className="text-2xl font-semibold tracking-tight">B.S. Computer Science</p>
            <p className="text-neutral-400 mt-1">University of Florida</p>
            <p className="text-neutral-500 text-sm mt-1">GPA 3.78 · Expected May 2028</p>
          </div>
          <div>
            <p className="text-xs tracking-[0.25em] uppercase text-neutral-500 mb-3">Highlights</p>
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {highlights.map((h) => (
                <li key={h.role} className="py-4">
                  <p className="font-medium">{h.role}</p>
                  <p className="text-sm text-neutral-500">{h.org}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
