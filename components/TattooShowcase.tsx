"use client";

import { useCallback, useState } from "react";
import { tattoos, type Tattoo } from "@/data/tattoos";
import TattooCard from "./TattooCard";
import TattooModal from "./TattooModal";

export default function TattooShowcase() {
  const [selectedTattoo, setSelectedTattoo] = useState<Tattoo | null>(null);
  const closeModal = useCallback(() => setSelectedTattoo(null), []);

  return (
    <section id="tattoos" className="container showcase-section" aria-labelledby="showcase-title">
      <div className="showcase-intro">
        <div>
          <p className="showcase-eyebrow">A little ink, a little you</p>
          <h2 id="showcase-title">Featured Works</h2>
        </div>
        <svg className="showcase-orbit" viewBox="0 0 160 90" fill="none" aria-hidden="true" data-doodle>
          <path d="M12 64C33 9 131 7 147 33C163 61 57 89 40 58C24 29 111 10 131 26" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          <circle cx="132" cy="62" r="3" fill="currentColor" />
        </svg>
        <span className="collection-count">Selected pieces <span aria-hidden="true">/</span> {String(tattoos.length).padStart(2, "0")}</span>
      </div>
      <div className="tattoo-grid">
        {tattoos.map((tattoo) => (
          <TattooCard key={tattoo.id} tattoo={tattoo} onSelect={setSelectedTattoo} />
        ))}
      </div>
      <p className="showcase-footnote">Different stories. A shared love for the little details.</p>
      <TattooModal tattoo={selectedTattoo} onClose={closeModal} />
    </section>
  );
}
