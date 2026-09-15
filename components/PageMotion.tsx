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
        .from(select("[data-hero-note]"), { y: 8, opacity: 0, duration: 0.6 }, 0.2)
        .from(select(".hero-line > span"), { yPercent: 110, duration: 1.1, stagger: 0.14 }, 0.15)
        .from(select(".hero-description > *"), { y: 16, opacity: 0, duration: 0.8, stagger: 0.1 }, 0.65);

      select(".showcase-intro, .info-section, .site-footer").forEach((section: HTMLElement) => {
        const content = section.matches(".info-section")
          ? section.querySelectorAll("h2, .info-copy > p, .contact-links > a")
          : section.children;
        gsap.from(content, {
          y: 22, opacity: 0, duration: 0.85, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: section, start: section.matches(".site-footer") ? "top bottom" : "top 92%", once: true },
        });
      });

      select(".site-header__inner, .showcase-intro, .info-section, .site-footer").forEach((section: HTMLElement) => {
        gsap.from(section, {
          "--divider-scale": 0, duration: 1.1, ease: "power2.inOut",
          scrollTrigger: { trigger: section, start: section.matches(".site-footer") ? "top bottom" : "top 94%", once: true },
        });
      });

      // Draw the small accents once, leaving the page still while it is read.
      root.current?.querySelectorAll<SVGSVGElement>("[data-doodle]").forEach((doodle) => {
        const strokes = doodle.querySelectorAll<SVGGeometryElement>("path, ellipse, circle[stroke]");
        strokes.forEach((stroke) => {
          const length = stroke.getTotalLength();
          gsap.set(stroke, { strokeDasharray: length, strokeDashoffset: length });
        });
        gsap.timeline({ scrollTrigger: { trigger: doodle, start: "top 92%", once: true } })
          .from(doodle, { opacity: 0, duration: 0.4 })
          .to(strokes, { strokeDashoffset: 0, duration: 1.2, stagger: 0.08, ease: "power2.inOut" }, 0);
      });

      const cards = select(".tattoo-card") as HTMLElement[];
      // Stagger cards within the current row without delaying later rows.
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
      root.current?.querySelectorAll<HTMLElement>(".tattoo-card, .text-link, .hero-booking, .hero-browse, .site-nav a, .site-header__brand, .site-footer a").forEach((element) => {
        const artwork = element.querySelector(".tattoo-card__image");
        const arrow = element.querySelector<HTMLElement>("[data-link-arrow]");
        const brand = element.querySelector(".brand-mark");
        const target = artwork || arrow || brand || element;
        const property = artwork ? "scale" : brand ? "rotation" : "y";
        const animate = gsap.quickTo(target, property, { duration: 0.5, ease: "power3.out" });
        const badge = element.querySelector(".tattoo-card__open");
        const badgeMotion = badge ? gsap.timeline({ paused: true })
          .to(badge, { backgroundColor: "#1c467d", color: "#f8f7f3", rotation: 45, duration: 0.3, ease: "power2.out" }) : null;
        const enter = () => {
          animate(artwork ? 1.035 : brand ? -8 : arrow?.dataset.linkArrow === "down" ? 3 : -3);
          badgeMotion?.play();
        };
        const leave = () => {
          animate(artwork ? 1 : 0);
          badgeMotion?.reverse();
        };
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
