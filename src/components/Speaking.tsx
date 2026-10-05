import { ArrowUpRight } from "lucide-react";
import SectionHead from "./SectionHead";
import { rich } from "@/lib/rich";

const talks = [
  {
    image: "/speaking/pitch-showcase.jpg",
    alt: "Nedas Jaronis speaking at Tampa Bay Innovation's Q2 Pitch Showcase at spARK Labs",
    label: "Tampa Bay Innovation",
    title: "Q2 Pitch Showcase",
    place: "spARK Labs",
    placeUrl: "https://sp-ark-labs.com/",
    detail: "Spoke to investors, VCs, venture studios, and startup founders. **153** registered.",
    position: "50% 30%",
  },
  {
    image: "/speaking/bay-hacks.jpg",
    alt: "Nedas Jaronis opening Bay Hacks 2026 in front of the hackathon crowd at USF",
    label: "Bay Hacks 2026",
    title: "Opening the hackathon",
    place: "University of South Florida",
    placeUrl: "https://www.usf.edu/",
    detail: "Opened the hackathon to a room of about **100** students, mentors, and industry professionals. **194** registered.",
    position: "50% 50%",
  },
];

const Speaking = () => (
  <section id="speaking" className="bg-black text-[#f5f5f7] pt-20 md:pt-28 pb-8 md:pb-12">
    <div className="container mx-auto px-6">
      <SectionHead eyebrow="Speaking" title="On stage." />
      <div className="grid md:grid-cols-2 gap-5 md:gap-6">
        {talks.map((t) => (
          <figure key={t.image}>
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-neutral-900 aspect-[3/2]">
              <img
                src={t.image}
                alt={t.alt}
                loading="lazy"
                className="h-full w-full object-cover"
                style={{ objectPosition: t.position }}
              />
            </div>
            <figcaption className="mt-5">
              <p className="text-xs tracking-[0.25em] uppercase text-neutral-500">{t.label}</p>
              <p className="mt-2 text-xl md:text-2xl font-semibold tracking-tight">{t.title}</p>
              <a
                href={t.placeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 inline-flex items-center gap-1 text-neutral-400 underline underline-offset-4 decoration-white/25 hover:text-white hover:decoration-white/60 transition-colors"
              >
                {t.place}
                <ArrowUpRight size={15} />
              </a>
              <p className="mt-3 max-w-md text-sm leading-relaxed text-neutral-500">{rich(t.detail)}</p>
            </figcaption>
          </figure>
        ))}
      </div>
    </div>
  </section>
);

export default Speaking;
