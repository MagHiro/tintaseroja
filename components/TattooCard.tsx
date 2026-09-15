import Image from "next/image";
import { useId } from "react";
import type { Tattoo } from "@/data/tattoos";

type TattooCardProps = {
  tattoo: Tattoo;
  onSelect: (tattoo: Tattoo) => void;
};

// Seed each outline from the piece ID so its handmade shape stays consistent.
function createOutline(seed: string) {
  let state = Array.from(seed).reduce((hash, char) => Math.imul(hash, 31) + char.charCodeAt(0) | 0, 7);
  const random = () => {
    state = Math.imul(state, 1664525) + 1013904223 | 0;
    return (state >>> 0) / 4294967296;
  };
  const points = Array.from({ length: 12 }, (_, index) => {
    const angle = (index / 12) * Math.PI * 2;
    const radius = 0.43 + random() * 0.055;
    const x = Math.cos(angle);
    const y = Math.sin(angle);
    return [0.5 + Math.sign(x) * Math.abs(x) ** 0.55 * radius, 0.5 + Math.sign(y) * Math.abs(y) ** 0.55 * radius];
  });
  const pair = (point: number[]) => point.map(value => value.toFixed(4)).join(" ");
  let path = `M ${pair(points[0])}`;
  points.forEach((point, index) => {
    const previous = points[(index + 11) % 12];
    const next = points[(index + 1) % 12];
    const after = points[(index + 2) % 12];
    const control1 = point.map((value, axis) => value + (next[axis] - previous[axis]) / 6);
    const control2 = next.map((value, axis) => value - (after[axis] - point[axis]) / 6);
    path += ` C ${pair(control1)} ${pair(control2)} ${pair(next)}`;
  });
  return `${path} Z`;
}

export default function TattooCard({ tattoo, onSelect }: TattooCardProps) {
  const clipId = `artwork-${useId().replace(/:/g, "")}`;
  const outline = createOutline(tattoo.id);
  return (
    <button type="button" className={`tattoo-card tattoo-card--${tattoo.orientation}`} onClick={() => onSelect(tattoo)} aria-label={`View details for ${tattoo.title}`}>
      <span className="tattoo-card__frame">
        <svg className="tattoo-card__outline" viewBox="0 0 1 1" preserveAspectRatio="none" aria-hidden="true">
          <defs><clipPath id={clipId} clipPathUnits="objectBoundingBox"><path d={outline} /></clipPath></defs>
          <path d={outline} fill="none" stroke="currentColor" strokeWidth="0.8" vectorEffect="non-scaling-stroke" />
        </svg>
        <span className="tattoo-card__image-wrap" style={{ clipPath: `url(#${clipId})` }}>
          <Image className="tattoo-card__image" src={tattoo.image} alt={tattoo.alt} fill sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 30vw" />
        </span>
        <span className="tattoo-card__open" aria-hidden="true">↗</span>
      </span>
      <span className="tattoo-card__meta">
        <span className="tattoo-card__title"><span className="tattoo-card__number">{tattoo.note}</span>{tattoo.title}</span>
        <span className="tattoo-card__category">{tattoo.category}</span>
      </span>
    </button>
  );
}
