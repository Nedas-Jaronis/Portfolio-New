import { useEffect, useRef } from "react";
import { paintSnow, paintSoccer } from "@/lib/ascii-scenes";

export type SceneKind = "surf" | "snow" | "soccer";

interface Props {
  scene: SceneKind;
  className?: string;
  /** Use a real photo (path under /public) instead of the procedural scene */
  image?: string;
  /** <1 lifts shadows (for dark photos). 1 = preset default */
  gamma?: number;
  /** vertical crop anchor for photos: 0 keeps the top, 1 keeps the bottom, 0.5 centres */
  anchorY?: number;
  /** photo framing: zoom >1 crops in from every side around `focus` */
  zoom?: number;
  /** [x, y] (0-1, photo coords) kept at the centre when zoomed */
  focus?: [number, number];
  /** brightness multiplier for photos; <1 darkens */
  level?: number;
}

/** 21st.dev "d" preset, verbatim values. */
const P = {
  cellSize: 9,
  bgBlur: 2,
  bgOpacity: 0.9,
  brightness: 0, // neutral
  contrast: 128 / 128, // 128 = neutral
  grayscale: 1,
  vignette: 0.58,
  filmGrain: 0.32,
  animSpeed: 1.0,
  animIntensity: 0.6,
};

const BAYER = [
  [0, 8, 2, 10],
  [12, 4, 14, 6],
  [3, 11, 1, 9],
  [15, 7, 13, 5],
].map((r) => r.map((v) => (v + 0.5) / 16));

const SURF_SRC = "/ascii/gen-nature-wave.webp";

const AsciiScene = ({ scene, className, image, gamma = 1, anchorY = 0.5, zoom = 1, focus = [0.5, 0.5], level = 1 }: Props) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cell = P.cellSize;
    const src = document.createElement("canvas"); // step 1: source at target size
    const small = document.createElement("canvas"); // step 2: one pixel per cell
    const fx = document.createElement("canvas"); // effect layer
    const sctx = src.getContext("2d")!;
    const smctx = small.getContext("2d", { willReadFrequently: true })!;
    const fctx = fx.getContext("2d")!;

    let w = 0, h = 0, cols = 0, rows = 0;
    let photo: HTMLImageElement | null = null;
    let raf = 0;
    let visible = true;

    const photoSrc = image ?? (scene === "surf" ? SURF_SRC : undefined);
    if (photoSrc) {
      const img = new Image();
      img.onload = () => { photo = img; };
      img.src = photoSrc;
    }

    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = Math.max(1, Math.round(r.width));
      h = Math.max(1, Math.round(r.height));
      // cellSize 9 is in the editor's ~3000px render space; scale to our canvas
      cell = Math.max(2, Math.round((P.cellSize * w) / 3000));
      for (const c of [canvas, src, fx]) { c.width = w; c.height = h; }
      cols = Math.ceil(w / cell);
      rows = Math.ceil(h / cell);
      small.width = cols;
      small.height = rows;
    };

    const drawPhoto = () => {
      sctx.fillStyle = "#000";
      sctx.fillRect(0, 0, w, h);
      if (!photo) return;
      const s = Math.max(w / photo.width, h / photo.height) * zoom;
      const dw = photo.width * s, dh = photo.height * s;
      // zoom == 1 keeps the plain cover fit; zoomed, centre on `focus` without exposing empty edges
      const dx = zoom === 1 ? (w - dw) / 2 : Math.min(0, Math.max(w - dw, w / 2 - focus[0] * dw));
      const dy = zoom === 1 ? (h - dh) * anchorY : Math.min(0, Math.max(h - dh, h / 2 - focus[1] * dh));
      sctx.drawImage(photo, dx, dy, dw, dh);
    };

    const frame = (t: number) => {
      raf = requestAnimationFrame(frame);
      if (!visible || !w) return;
      const time = reduced ? 0 : t * 0.001 * P.animSpeed;

      // 1. source photo at target size
      if (photoSrc) drawPhoto();
      else if (scene === "snow") paintSnow(sctx, w, h, reduced ? 0 : t);
      else paintSoccer(sctx, w, h, reduced ? 0 : t);

      // 2. average colour per cell
      smctx.imageSmoothingEnabled = true;
      smctx.drawImage(src, 0, 0, cols, rows);
      const px = smctx.getImageData(0, 0, cols, rows).data;

      // bgMode "blur": blurred greyscale copy at bgOpacity behind the effect
      fctx.globalCompositeOperation = "source-over";
      fctx.globalAlpha = 1;
      fctx.fillStyle = "#000";
      fctx.fillRect(0, 0, w, h);
      fctx.globalAlpha = P.bgOpacity;
      fctx.filter = `grayscale(${P.grayscale}) blur(${P.bgBlur}px)`;
      fctx.drawImage(src, 0, 0, w, h);
      fctx.filter = "none";
      fctx.globalAlpha = 1;

      // 3. dither cells, styleBlend "screen" over the backdrop
      fctx.globalCompositeOperation = "screen";
      fctx.fillStyle = "#ffffff";
      const amp = 0.12 * P.animIntensity;
      const dot = Math.max(1, Math.round(cell * 0.7));
      const dotPad = Math.floor((cell - dot) / 2);
      for (let j = 0; j < rows; j++) {
        for (let i = 0; i < cols; i++) {
          const o = (j * cols + i) * 4;
          let l = (0.2126 * px[o] + 0.7152 * px[o + 1] + 0.0722 * px[o + 2]) / 255;
          if (gamma !== 1) l = Math.pow(l, gamma);
          l *= level;
          // 4. colour adjustments (grayscale already applied via luminance)
          l = (l - 0.5) * P.contrast + 0.5 + P.brightness;
          // 8. shimmer animation
          l += Math.sin(i * 0.35 + j * 0.22 - time * 2.4) * amp * 0.5;
          if (l > BAYER[j & 3][i & 3]) fctx.fillRect(i * cell + dotPad, j * cell + dotPad, dot, dot);
        }
      }
      fctx.globalCompositeOperation = "source-over";

      ctx.drawImage(fx, 0, 0);

      // 5. post-effects: vignette
      const g = ctx.createRadialGradient(w / 2, h / 2, Math.min(w, h) * 0.25, w / 2, h / 2, Math.max(w, h) * 0.72);
      g.addColorStop(0, "rgba(0,0,0,0)");
      g.addColorStop(1, `rgba(0,0,0,${P.vignette})`);
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, w, h);

      // 5. post-effects: film grain
      if (!reduced) {
        const n = Math.floor(((w * h) / 900) * P.filmGrain * 3);
        for (let k = 0; k < n; k++) {
          ctx.fillStyle = Math.random() < 0.5 ? "rgba(255,255,255,0.18)" : "rgba(0,0,0,0.25)";
          ctx.fillRect(Math.random() * w, Math.random() * h, 1.5, 1.5);
        }
      }
    };

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; });
    io.observe(canvas);
    raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
    };
  }, [scene, image, gamma, anchorY, zoom, focus, level]);

  return <canvas ref={canvasRef} className={className} aria-hidden="true" />;
};

export default AsciiScene;
