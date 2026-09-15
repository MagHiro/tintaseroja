"use client";

import { useRef, type ReactNode } from "react";
import { gsap, useGSAP } from "@/lib/animation";

export default function PageMotion({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: no-preference)", () => {
      const select = gsap.utils.selector(root);
      gsap.timeline({ defaults: { ease: "power3.out" } })
        .from(select(".site-header__brand, .site-nav a"), { y: -8, opacity: 0, duration: 0.65, stagger: 0.07 })
        .from(select(".hero-line > span"), { yPercent: 110, duration: 1.1, stagger: 0.14 }, 0.15)
        .from(select(".hero-description > *"), { y: 16, opacity: 0, duration: 0.8, stagger: 0.1 }, 0.65);

      select(".showcase-intro, .info-section, .site-footer").forEach((section: HTMLElement) => {
        gsap.from(section.children, {
          y: 22, opacity: 0, duration: 0.85, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: section, start: "top 92%", once: true },
        });
      });

      const cards = select(".tattoo-card") as HTMLElement[];
      // Reveal each visible row together, including after a responsive reflow.
      cards.forEach((card) => {
        const siblings = cards.filter((item) => item.offsetTop === card.offsetTop);
        gsap.from(card, {
          y: 32, opacity: 0, duration: 0.9, delay: siblings.indexOf(card) * 0.09,
          ease: "power3.out",
          scrollTrigger: { trigger: card, start: "top 94%", once: true },
        });
      });
    });

    media.add("(prefers-reduced-motion: no-preference) and (hover: hover) and (pointer: fine)", () => {
      const cleanups: (() => void)[] = [];
      root.current?.querySelectorAll<HTMLElement>(".tattoo-card, .text-link").forEach((element) => {
        const artwork = element.querySelector(".tattoo-card__image");
        const arrow = element.querySelector("[aria-hidden='true']");
        const target = artwork || arrow;
        if (!target) return;
        const animate = gsap.quickTo(target, artwork ? "scale" : "y", { duration: 0.6, ease: "power3.out" });
        const enter = () => animate(artwork ? 1.045 : -3);
        const leave = () => animate(artwork ? 1 : 0);
        element.addEventListener("pointerenter", enter);
        element.addEventListener("pointerleave", leave);
        element.addEventListener("focus", enter);
        element.addEventListener("blur", leave);
        cleanups.push(() => {
          element.removeEventListener("pointerenter", enter);
          element.removeEventListener("pointerleave", leave);
          element.removeEventListener("focus", enter);
          element.removeEventListener("blur", leave);
        });
      });
      return () => cleanups.forEach((cleanup) => cleanup());
    });
    return () => media.revert();
  }, { scope: root });

  return <div ref={root} className="site-shell">{children}</div>;
}
