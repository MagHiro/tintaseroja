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
        <h2 id="showcase-title">The collection</h2>
        <span>{tattoos.length} designs</span>
      </div>
      <div className="tattoo-grid">
        {tattoos.map((tattoo) => (
          <TattooCard key={tattoo.id} tattoo={tattoo} onSelect={setSelectedTattoo} />
        ))}
      </div>
      <TattooModal tattoo={selectedTattoo} onClose={closeModal} />
    </section>
  );
}
