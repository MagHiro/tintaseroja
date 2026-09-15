import Image from "next/image";
import type { Tattoo } from "@/data/tattoos";

type TattooCardProps = {
  tattoo: Tattoo;
  onSelect: (tattoo: Tattoo) => void;
};

export default function TattooCard({ tattoo, onSelect }: TattooCardProps) {
  return (
    <button type="button" className="tattoo-card" onClick={() => onSelect(tattoo)} aria-label={`View details for ${tattoo.title}`}>
      <span className="tattoo-card__image-wrap">
        <Image className="tattoo-card__image" src={tattoo.image} alt={tattoo.alt} fill sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 30vw" />
      </span>
      <span className="tattoo-card__meta">
        <span className="tattoo-card__title">{tattoo.title}</span>
        <span className="tattoo-card__category">{tattoo.category}</span>
      </span>
    </button>
  );
}
