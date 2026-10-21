"use client";

import { useState } from "react";
import { formatPrice } from "@/lib/format";

type Asset = {
  id: string;
  title: string;
  category: string;
  fileInfo: string;
  priceMinor: number;
  colors: [string, string];
};

// Placeholder examples. Real images replace the generated art later.
// Keep the count ODD (7 here) so both sides of the center card always match.
const assets: Asset[] = [
  {
    id: "icons",
    title: "Soft Line Icon Pack",
    category: "Bundles",
    fileInfo: "SVG · 8 MB",
    priceMinor: 79900,
    colors: ["#fde68a", "#f97316"],
  },
  {
    id: "ui-kit",
    title: "Neon Dashboard UI Kit",
    category: "Design",
    fileInfo: "Figma · 12 MB",
    priceMinor: 129900,
    colors: ["#7dd3fc", "#6366f1"],
  },
  {
    id: "tileset",
    title: "Pixel Forest Tileset",
    category: "Game assets",
    fileInfo: "PNG · 24 MB",
    priceMinor: 49900,
    colors: ["#b4f05a", "#1f8a5b"],
  },
  {
    id: "agent",
    title: "Support Agent Starter",
    category: "AI agents",
    fileInfo: "TypeScript · 2 MB",
    priceMinor: 249900,
    colors: ["#f0abfc", "#be185d"],
  },
  {
    id: "characters",
    title: "Low-Poly Character Pack",
    category: "Game assets",
    fileInfo: "FBX · 96 MB",
    priceMinor: 149900,
    colors: ["#fca5a5", "#dc2626"],
  },
  {
    id: "sounds",
    title: "Retro Sound Effects",
    category: "Audio",
    fileInfo: "WAV · 180 MB",
    priceMinor: 59900,
    colors: ["#93c5fd", "#2563eb"],
  },
  {
    id: "template",
    title: "Portfolio Site Template",
    category: "Source code",
    fileInfo: "Next.js · 4 MB",
    priceMinor: 199900,
    colors: ["#a7f3d0", "#0d9488"],
  },
];

// How a card looks depending on its distance from the center card (0 = center).
// Cards 3 steps away are invisible, which is where the loop "wraps" unseen.
// Tweak these numbers to change the spacing, shrinking and fading.
const SPACING_REM = [0, 15.5, 28.5, 28.5];
const SCALE = [1, 0.82, 0.66, 0.66];
const OPACITY = [1, 0.55, 0.22, 0];

function Chevron({ direction }: { direction: "left" | "right" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="size-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d={direction === "left" ? "m15 18-6-6 6-6" : "m9 18 6-6-6-6"} />
    </svg>
  );
}

const arrowButton =
  "glass inline-flex size-10 items-center justify-center rounded-full text-muted transition-colors hover:text-foreground";

export function AssetShowcase() {
  const [index, setIndex] = useState(0);
  const count = assets.length;
  const half = Math.floor(count / 2);
  const current = assets[index];

  // Move one step; the modulo makes the ends connect into a circle.
  const go = (step: number) => setIndex((i) => (i + step + count) % count);

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Example digital assets"
      className="flex w-full flex-col items-center gap-10"
    >
      <div className="relative h-[24rem] w-full overflow-x-clip">
        {assets.map((asset, i) => {
          // Shortest signed distance around the circle: -3 ... 0 ... +3
          const offset = ((i - index + half + count) % count) - half;
          const distance = Math.abs(offset);
          const x = Math.sign(offset) * SPACING_REM[distance];
          const isActive = offset === 0;
          const gradient = `linear-gradient(135deg, ${asset.colors[0]}, ${asset.colors[1]})`;

          return (
            <div
              key={asset.id}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${asset.title}`}
              aria-hidden={isActive ? undefined : true}
              onClick={distance === 1 ? () => go(offset) : undefined}
              className={`absolute top-0 left-1/2 h-full w-64 transition-[transform,opacity] duration-500 ease-out ${
                distance === 1 ? "cursor-pointer" : ""
              } ${distance >= 2 ? "pointer-events-none" : ""}`}
              style={{
                transform: `translateX(calc(-50% + ${x}rem)) scale(${SCALE[distance]})`,
                opacity: OPACITY[distance],
                zIndex: 10 - distance,
              }}
            >
              <div className="glass animate-float flex h-full flex-col items-center justify-center rounded-card p-6 text-center">
                <div aria-hidden="true" className="relative size-32">
                  <div
                    className="absolute inset-0 rotate-6 rounded-3xl opacity-40"
                    style={{ backgroundImage: gradient }}
                  />
                  <div
                    className="absolute inset-0 -rotate-3 rounded-3xl shadow-2xl"
                    style={{ backgroundImage: gradient }}
                  />
                </div>

                <span className="mt-8 inline-flex rounded-full bg-primary/15 px-3 py-1 font-mono text-xs text-primary">
                  {asset.category} · {asset.fileInfo}
                </span>
                <p className="mt-4 text-lg font-semibold text-balance">{asset.title}</p>
                <p className="mt-5 font-mono text-2xl">{formatPrice(asset.priceMinor)}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Announces the selected card to screen readers */}
      <p className="sr-only" aria-live="polite">
        {`${current.title}, ${index + 1} of ${count}`}
      </p>

      <div className="flex items-center gap-5">
        <button
          type="button"
          onClick={() => go(-1)}
          aria-label="Previous asset"
          className={arrowButton}
        >
          <Chevron direction="left" />
        </button>

        {/* Position indicator only (not clickable) */}
        <div aria-hidden="true" className="flex items-center gap-2">
          {assets.map((item, i) => (
            <span
              key={item.id}
              className={`block h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-primary" : "w-2 bg-white/25"
              }`}
            />
          ))}
        </div>

        <button type="button" onClick={() => go(1)} aria-label="Next asset" className={arrowButton}>
          <Chevron direction="right" />
        </button>
      </div>
    </section>
  );
}
