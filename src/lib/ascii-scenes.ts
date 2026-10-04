type Ctx = CanvasRenderingContext2D;

const gray = (v: number, a = 1) => {
  const c = Math.round(Math.max(0, Math.min(1, v)) * 255);
  return `rgba(${c},${c},${c},${a})`;
};

const rand = (n: number) => {
  const x = Math.sin(n * 127.1 + 311.7) * 43758.5453;
  return x - Math.floor(x);
};

const limb = (c: Ctx, pts: [number, number][], width: number) => {
  c.lineWidth = width;
  c.lineCap = "round";
  c.lineJoin = "round";
  c.beginPath();
  c.moveTo(pts[0][0], pts[0][1]);
  for (let i = 1; i < pts.length; i++) c.lineTo(pts[i][0], pts[i][1]);
  c.stroke();
};

const ridge = (c: Ctx, w: number, h: number, base: number, amp: number, seed: number, shade: number) => {
  c.fillStyle = gray(shade);
  c.beginPath();
  c.moveTo(0, h);
  for (let x = 0; x <= w; x += 6) {
    const u = x / w;
    const y =
      base +
      Math.sin(u * 5 + seed) * amp +
      Math.sin(u * 13 + seed * 2.3) * amp * 0.45 +
      Math.sin(u * 31 + seed * 4.1) * amp * 0.12;
    c.lineTo(x, y * h);
  }
  c.lineTo(w, h);
  c.closePath();
  c.fill();
};

/* ------------------------------------------------------------------ */
/* SNOWBOARD: rider launching off a kicker in front of a big moon      */
/* ------------------------------------------------------------------ */
export function paintSnow(c: Ctx, w: number, h: number, t: number) {
  const s = Math.min(w, h * 1.7) / 1000; // unit scale
  c.clearRect(0, 0, w, h);

  // sky
  const sky = c.createLinearGradient(0, 0, 0, h);
  sky.addColorStop(0, gray(0.04));
  sky.addColorStop(0.6, gray(0.32));
  sky.addColorStop(1, gray(0.55));
  c.fillStyle = sky;
  c.fillRect(0, 0, w, h);

  // moon + halo
  const mx = w * 0.64, my = h * 0.3, mr = h * 0.17;
  const halo = c.createRadialGradient(mx, my, mr * 0.6, mx, my, mr * 3.2);
  halo.addColorStop(0, gray(0.75, 0.55));
  halo.addColorStop(1, gray(0.75, 0));
  c.fillStyle = halo;
  c.fillRect(0, 0, w, h);
  c.fillStyle = gray(0.97);
  c.beginPath();
  c.arc(mx, my, mr, 0, Math.PI * 2);
  c.fill();

  // stars
  for (let i = 0; i < 70; i++) {
    const tw = 0.5 + 0.5 * Math.sin(t * 0.002 + i);
    c.fillStyle = gray(0.9, 0.25 + tw * 0.5);
    c.fillRect(rand(i) * w, rand(i + 99) * h * 0.45, 2, 2);
  }

  // mountains
  ridge(c, w, h, 0.5, 0.06, 1.0, 0.42);
  ridge(c, w, h, 0.6, 0.07, 2.2, 0.26);
  ridge(c, w, h, 0.72, 0.05, 3.7, 0.12);

  // foreground slope (descends right -> left) with a kicker
  c.fillStyle = gray(0.9);
  c.beginPath();
  c.moveTo(0, h);
  c.lineTo(0, h * 0.84);
  c.quadraticCurveTo(w * 0.3, h * 0.8, w * 0.46, h * 0.86);
  c.quadraticCurveTo(w * 0.52, h * 0.78, w * 0.58, h * 0.74); // lip
  c.lineTo(w * 0.62, h * 0.82);
  c.quadraticCurveTo(w * 0.8, h * 0.9, w, h * 0.88);
  c.lineTo(w, h);
  c.closePath();
  c.fill();

  // rider flight path (loops every 7s)
  const period = 7000;
  const p = (t % period) / period;
  const lipX = w * 0.58, lipY = h * 0.74;
  let rx: number, ry: number, rot: number, air = 0;
  if (p < 0.25) {
    // run-in along the slope
    const u = p / 0.25;
    rx = w * 0.12 + (lipX - w * 0.12) * u;
    ry = h * 0.82 - (h * 0.82 - lipY) * Math.pow(u, 3) - Math.sin(u * 3) * h * 0.012;
    rot = -0.15 * u;
  } else if (p < 0.8) {
    air = (p - 0.25) / 0.55;
    rx = lipX + w * 0.2 * air;
    ry = lipY - Math.sin(air * Math.PI) * h * 0.34 + air * air * h * 0.1;
    rot = -0.2 - air * Math.PI * 2; // one full spin
  } else {
    const u = (p - 0.8) / 0.2;
    rx = w * 0.78 + w * 0.2 * u;
    ry = h * 0.84 + u * h * 0.04;
    rot = 0.06;
  }

  // snow spray trail
  for (let i = 0; i < 46; i++) {
    const age = i / 46;
    const px = rx - age * w * 0.09 - rand(i + Math.floor(t / 90)) * 14 * s;
    const py = ry + age * h * 0.03 + (rand(i * 3) - 0.5) * 30 * s * age + 40 * s;
    c.fillStyle = gray(1, (1 - age) * (air > 0 ? 0.5 : 0.85));
    c.beginPath();
    c.arc(px, py, (1 - age) * 4.5 * s + 1, 0, Math.PI * 2);
    c.fill();
  }

  // rider silhouette
  c.save();
  c.translate(rx, ry);
  c.rotate(rot);
  c.scale(s * 1.25, s * 1.25);
  c.strokeStyle = gray(0.02);
  c.fillStyle = gray(0.02);
  // board
  limb(c, [[-62, 52], [62, 52]], 11);
  // legs (crouched)
  limb(c, [[-24, 52], [-30, 22], [-8, 2]], 15);
  limb(c, [[24, 52], [30, 22], [8, 2]], 15);
  // torso
  limb(c, [[0, 2], [-6, -42]], 26);
  // arms out for balance
  limb(c, [[-6, -34], [-46, -26], [-68, -44]], 10);
  limb(c, [[-6, -34], [34, -22], [58, -4]], 10);
  // head + beanie
  c.beginPath();
  c.arc(-4, -66, 15, 0, Math.PI * 2);
  c.fill();
  c.restore();

  // falling snow
  for (let i = 0; i < 90; i++) {
    const sp = 0.03 + rand(i) * 0.05;
    const x = ((rand(i + 7) * w + t * sp * 0.6 + Math.sin(t * 0.001 + i) * 14) % w + w) % w;
    const y = (rand(i + 31) * h + t * sp) % h;
    c.fillStyle = gray(1, 0.5 + rand(i + 5) * 0.4);
    c.fillRect(x, y, 2 + rand(i) * 2, 2 + rand(i) * 2);
  }
}

/* ------------------------------------------------------------------ */
/* SOCCER: night match, floodlights, striker, ball curling to goal     */
/* ------------------------------------------------------------------ */
export function paintSoccer(c: Ctx, w: number, h: number, t: number) {
  const s = Math.min(w, h * 1.7) / 1000;
  c.clearRect(0, 0, w, h);
  const horizon = h * 0.48;

  // sky
  c.fillStyle = gray(0.03);
  c.fillRect(0, 0, w, h);

  // floodlight beams + glare
  for (const fx of [0.14, 0.86]) {
    const lx = w * fx, ly = h * 0.1;
    const glare = c.createRadialGradient(lx, ly, 0, lx, ly, h * 0.5);
    glare.addColorStop(0, gray(1, 0.95));
    glare.addColorStop(0.12, gray(0.9, 0.4));
    glare.addColorStop(1, gray(0.6, 0));
    c.fillStyle = glare;
    c.fillRect(0, 0, w, h);
    c.save();
    c.fillStyle = gray(0.7, 0.1);
    c.beginPath();
    c.moveTo(lx, ly);
    c.lineTo(w * 0.5 + (fx < 0.5 ? -1 : 1) * w * 0.06, h);
    c.lineTo(w * 0.5 + (fx < 0.5 ? 1 : -1) * w * 0.3, h);
    c.closePath();
    c.fill();
    c.restore();
  }

  // stands with crowd flecks
  c.fillStyle = gray(0.1);
  c.fillRect(0, horizon - h * 0.12, w, h * 0.12);
  for (let i = 0; i < 520; i++) {
    const x = rand(i) * w;
    const y = horizon - h * 0.12 + rand(i + 50) * h * 0.115;
    c.fillStyle = gray(0.25 + rand(i + 9) * 0.5, 0.35 + 0.4 * Math.abs(Math.sin(t * 0.003 + i)));
    c.fillRect(x, y, 3, 3);
  }

  // pitch with perspective mowing stripes
  const pitch = c.createLinearGradient(0, horizon, 0, h);
  pitch.addColorStop(0, gray(0.22));
  pitch.addColorStop(1, gray(0.5));
  c.fillStyle = pitch;
  c.fillRect(0, horizon, w, h - horizon);
  c.fillStyle = gray(0.9, 0.09);
  for (let i = 0; i < 12; i++) {
    const y0 = horizon + (h - horizon) * Math.pow(i / 12, 1.7);
    const y1 = horizon + (h - horizon) * Math.pow((i + 1) / 12, 1.7);
    if (i % 2 === 0) c.fillRect(0, y0, w, y1 - y0);
  }
  // touchline + centre arc
  c.strokeStyle = gray(1, 0.8);
  c.lineWidth = 3 * s;
  c.beginPath();
  c.ellipse(w * 0.5, h * 0.86, w * 0.26, h * 0.075, 0, Math.PI, Math.PI * 2);
  c.stroke();
  c.beginPath();
  c.moveTo(0, h * 0.7);
  c.lineTo(w, h * 0.7);
  c.stroke();

  // goal frame (far side)
  const gx = w * 0.78, gy = horizon + h * 0.01, gw = w * 0.14, gh = h * 0.17;
  c.strokeStyle = gray(1);
  c.lineWidth = 4 * s;
  c.strokeRect(gx, gy - gh, gw, gh);
  c.lineWidth = 1;
  c.strokeStyle = gray(0.8, 0.5);
  for (let i = 1; i < 14; i++) {
    c.beginPath();
    c.moveTo(gx + (gw / 14) * i, gy - gh);
    c.lineTo(gx + (gw / 14) * i, gy);
    c.stroke();
  }
  for (let i = 1; i < 6; i++) {
    c.beginPath();
    c.moveTo(gx, gy - (gh / 6) * i);
    c.lineTo(gx + gw, gy - (gh / 6) * i);
    c.stroke();
  }

  // striker (shot loop every 5s)
  const period = 5000;
  const p = (t % period) / period;
  const px = w * 0.28, ground = h * 0.88;
  const kick = p < 0.2 ? p / 0.2 : Math.max(0, 1 - (p - 0.2) / 0.3); // leg swing 0..1..0
  const leanOn = Math.min(1, p / 0.2);
  c.save();
  c.translate(px, ground);
  c.scale(s * 1.7, s * 1.7);
  c.strokeStyle = gray(0.98);
  c.fillStyle = gray(0.98);
  const swing = -0.9 + kick * 1.9; // kicking leg angle
  const hipY = -92 + leanOn * 4;
  const kneeX = Math.sin(swing) * 38, kneeY = hipY + Math.cos(swing) * 38;
  const footX = kneeX + Math.sin(swing + 0.4 - kick * 0.5) * 42;
  const footY = kneeY + Math.cos(swing + 0.4 - kick * 0.5) * 42;
  // plant leg
  limb(c, [[0, hipY], [-6, hipY + 44], [-14, 0]], 17);
  // kicking leg
  limb(c, [[0, hipY], [kneeX, kneeY], [footX, footY]], 17);
  // torso leans back through the strike
  const lean = -0.15 - kick * 0.1;
  const sx = Math.sin(lean) * 62, sy = hipY - Math.cos(lean) * 62;
  limb(c, [[0, hipY], [sx, sy]], 30);
  // arms
  limb(c, [[sx, sy + 8], [sx - 40 + kick * 14, sy + 22], [sx - 64, sy + 4 - kick * 18]], 10);
  limb(c, [[sx, sy + 8], [sx + 36, sy + 12], [sx + 60, sy - 12 + kick * 10]], 10);
  c.beginPath();
  c.arc(sx + 4, sy - 24, 15, 0, Math.PI * 2);
  c.fill();
  c.restore();

  // ball: sits at the foot, then curls into the top corner and the net
  const start = [px + 62 * s * 1.7, ground - 8 * s];
  const end = [gx + gw * 0.82, gy - gh * 0.82];
  const ctrl = [w * 0.5, h * 0.12];
  const flight = Math.min(1, Math.max(0, (p - 0.2) / 0.45));
  const bez = (a: number, b: number, k: number, u: number) =>
    (1 - u) * (1 - u) * a + 2 * (1 - u) * u * b + u * u * k;
  const ball = (u: number) => [bez(start[0], ctrl[0], end[0], u), bez(start[1], ctrl[1], end[1], u)];
  // trail
  if (flight > 0 && p < 0.9) {
    for (let i = 0; i < 28; i++) {
      const u = Math.max(0, flight - i * 0.012);
      const [tx, ty] = ball(u);
      c.fillStyle = gray(1, (1 - i / 28) * 0.55);
      c.beginPath();
      c.arc(tx, ty, (1 - i / 28) * 9 * s + 1, 0, Math.PI * 2);
      c.fill();
    }
  }
  const [bx, by] = flight > 0 ? ball(flight) : start;
  const br = (14 - flight * 7) * s * 1.2;
  c.fillStyle = gray(1);
  c.beginPath();
  c.arc(bx, by, br, 0, Math.PI * 2);
  c.fill();
  // panel pentagons
  c.fillStyle = gray(0.05);
  for (let i = 0; i < 5; i++) {
    const a = t * 0.01 * (flight > 0 ? 1 : 0) + (i / 5) * Math.PI * 2;
    c.beginPath();
    c.arc(bx + Math.cos(a) * br * 0.55, by + Math.sin(a) * br * 0.55, br * 0.2, 0, Math.PI * 2);
    c.fill();
  }

  // goal flash
  if (p > 0.65 && p < 0.8) {
    c.fillStyle = gray(1, (1 - (p - 0.65) / 0.15) * 0.18);
    c.fillRect(0, 0, w, h);
  }
}
