"use client";

import { useCallback, useEffect, useRef } from "react";
import { gsap, useGSAP } from "@/lib/animation";
import Image from "next/image";
import type { Tattoo } from "@/data/tattoos";

type TattooModalProps = {
  tattoo: Tattoo | null;
  onClose: () => void;
};

export default function TattooModal({ tattoo, onClose }: TattooModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  const closing = useRef(false);
  const { contextSafe } = useGSAP(
    () => {
      if (!modalRef.current || !tattoo) return;
      closing.current = false;
      const media = gsap.matchMedia();
      media.add("(prefers-reduced-motion: no-preference)", () => {

        const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
        timeline
          .fromTo(modalRef.current, { opacity: 0 }, { opacity: 1, duration: 0.3 })
          .fromTo("[data-modal-panel]", { y: 28, scale: 0.98, opacity: 0 }, { y: 0, scale: 1, opacity: 1, duration: 0.66 }, "-=0.12")
          .fromTo("[data-modal-detail]", { y: 18, opacity: 0 }, { y: 0, opacity: 1, duration: 0.48, stagger: 0.08 }, "-=0.4");

      });
      return () => media.revert();
    },
    { scope: modalRef, dependencies: [tattoo], revertOnUpdate: true },
  );

  const animateClose = contextSafe(() => {
    if (closing.current) return;
    closing.current = true;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      onClose();
      return;
    }
    gsap.timeline({ onComplete: onClose, defaults: { duration: 0.22, ease: "power2.in", overwrite: true } })
      .to("[data-modal-panel]", { y: 12, opacity: 0 })
      .to(modalRef.current, { opacity: 0 }, 0.05);
  });
  const requestClose = useCallback(animateClose, [animateClose]);

  useEffect(() => {
    if (!tattoo) return;

    const previousActive = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") requestClose();
      if (event.key === "Tab") {
        const items = modalRef.current?.querySelectorAll<HTMLElement>("button, a[href]");
        if (!items?.length) return;
        const first = items[0];
        const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
      previousActive?.focus();
    };
  }, [tattoo, requestClose]);

  if (!tattoo) return null;

  return (
    <div
      ref={modalRef}
      className="tattoo-modal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="tattoo-modal-title"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) requestClose();
      }}
    >
      <div className="tattoo-modal__panel" data-modal-panel>
        <button ref={closeRef} type="button" className="tattoo-modal__close" onClick={requestClose} aria-label="Close tattoo details">
          <span aria-hidden="true">×</span>
          <span>Close</span>
        </button>
        <div className="tattoo-modal__art" data-modal-detail>
          <Image src={tattoo.image} alt={tattoo.alt} fill sizes="(max-width: 899px) 90vw, 55vw" />
        </div>
        <div className="tattoo-modal__copy">
          <p className="section-label" data-modal-detail>{tattoo.category}</p>
          <h2 id="tattoo-modal-title" data-modal-detail>{tattoo.title}</h2>
          <p data-modal-detail>{tattoo.description}</p>
          <a className="text-link" href="mailto:info@tinteseroja.id" data-modal-detail>
            Ask about this piece <span aria-hidden="true">↗</span>
          </a>
        </div>
      </div>
    </div>
  );
}
