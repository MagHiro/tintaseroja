"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/animation";

type MagneticButtonProps = {
  href: string;
  children: React.ReactNode;
};

export default function MagneticButton({ href, children }: MagneticButtonProps) {
  const buttonRef = useRef<HTMLAnchorElement>(null);

  useGSAP(
    () => {
      const button = buttonRef.current;
      if (!button || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      const move = (event: PointerEvent) => {
        const bounds = button.getBoundingClientRect();
        const x = (event.clientX - bounds.left - bounds.width / 2) * 0.14;
        const y = (event.clientY - bounds.top - bounds.height / 2) * 0.14;
        gsap.to(button, { x, y, duration: 0.35, ease: "power3.out", overwrite: true });
      };
      const reset = () => gsap.to(button, { x: 0, y: 0, duration: 0.7, ease: "elastic.out(1, 0.45)", overwrite: true });

      button.addEventListener("pointermove", move);
      button.addEventListener("pointerleave", reset);
      return () => {
        button.removeEventListener("pointermove", move);
        button.removeEventListener("pointerleave", reset);
      };
    },
    { scope: buttonRef },
  );

  return <a ref={buttonRef} className="button button--ink button--magnetic" href={href}>{children}<span className="button__arrow" aria-hidden="true">↗</span></a>;
}
