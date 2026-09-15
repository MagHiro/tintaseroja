"use client";

import { gsap, useGSAP } from "@/lib/animation";
import { useRef } from "react";
import FlowerDoodle from "./decorative/FlowerDoodle";
import InkStroke from "./decorative/InkStroke";
import ScribbleCircle from "./decorative/ScribbleCircle";
import SketchArrow from "./decorative/SketchArrow";
import StarDoodle from "./decorative/StarDoodle";

export default function StorySection() {
  const storyRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = storyRef.current;
      if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const fragments = gsap.utils.toArray<HTMLElement>("[data-story-fragment]", root);
      const timeline = gsap.timeline({
        scrollTrigger: {
          trigger: root,
          start: "top 76%",
          end: "bottom 22%",
          scrub: 1.1,
        },
      });

      timeline
        .fromTo(root.querySelector("[data-story-title]"), { autoAlpha: 0, y: 24 }, { autoAlpha: 1, y: 0, duration: 0.42, ease: "power3.out" })
        .fromTo(root.querySelector("[data-story-copy]"), { autoAlpha: 0, y: 18 }, { autoAlpha: 1, y: 0, duration: 0.32 }, "-=0.2")
        .fromTo(fragments, { autoAlpha: 0, scale: 0.72, x: (index) => (index % 2 === 0 ? -90 : 90), y: (index) => (index % 3) * 30 - 30, rotation: (index) => (index % 2 === 0 ? -10 : 10) }, { autoAlpha: 1, scale: 1, x: 0, y: 0, rotation: 0, duration: 0.8, stagger: 0.08, ease: "power2.out" }, "-=0.14");

      return () => timeline.kill();
    },
    { scope: storyRef },
  );

  return (
    <section ref={storyRef} className="story-section section-space" aria-labelledby="story-title">
      <div className="story-section__wash" aria-hidden="true" />
      <div className="container story-section__inner">
        <FlowerDoodle className="story-fragment story-fragment--flower" color="#f4f1ea" data-story-fragment />
        <InkStroke className="story-fragment story-fragment--stroke" color="#a9c5ea" data-story-fragment />
        <ScribbleCircle className="story-fragment story-fragment--circle" color="#f4f1ea" data-story-fragment />
        <SketchArrow className="story-fragment story-fragment--arrow" color="#a65e51" data-story-fragment />
        <StarDoodle className="story-fragment story-fragment--star" color="#f4f1ea" data-story-fragment />
        <div className="story-section__content">
          <p className="section-label section-label--light">03 / the little story</p>
          <h2 id="story-title" data-story-title>Drawn to be worn.<br /><em>Made to disappear.</em></h2>
          <p data-story-copy>Temporary is the point. A little expression without the weight of forever; a souvenir for a season, a night, or simply because it felt right.</p>
          <span className="story-section__footnote">expression, with an exit plan</span>
        </div>
      </div>
    </section>
  );
}
