import AsciiScene from "./AsciiScene";

interface Tile {
  image: string;
  /** width / height of the photo; tiles are sized by it so both share one row height with no cropping */
  aspect: number;
  gamma?: number;
  zoom?: number;
  focus?: [number, number];
}

const tiles: Tile[] = [
  {
    image: "/ascii/snowboard.png",
    aspect: 721 / 643,
    gamma: 0.55,
    zoom: 1.6,
    focus: [0.53, 0.47], // you and the board
  },
  { image: "/ascii/soccer.jpg", aspect: 1104 / 636 },
];

const PhotoPair = () => (
  <section
    id="outside"
    className="grid grid-cols-1 lg:[grid-template-columns:var(--cols)] bg-black text-[#f5f5f7]"
    style={{ "--cols": tiles.map((t) => `${t.aspect}fr`).join(" ") } as React.CSSProperties}
  >
    {tiles.map((t) => (
      <div key={t.image} className="relative overflow-hidden" style={{ aspectRatio: String(t.aspect) }}>
        <AsciiScene
          scene="surf"
          image={t.image}
          gamma={t.gamma}
          zoom={t.zoom}
          focus={t.focus}
          className="absolute inset-0 w-full h-full"
        />
      </div>
    ))}
  </section>
);

export default PhotoPair;
