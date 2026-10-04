const SectionHead = ({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) => (
  <div className="mb-14 md:mb-20 max-w-3xl">
    <p className="text-xs sm:text-sm tracking-[0.25em] uppercase text-neutral-500 mb-4">{eyebrow}</p>
    <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-[#f5f5f7]">{title}</h2>
    {sub && <p className="mt-5 text-lg text-neutral-400 leading-relaxed">{sub}</p>}
  </div>
);

export default SectionHead;
