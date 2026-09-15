import type { SVGProps } from "react";

type SketchArrowProps = SVGProps<SVGSVGElement> & {
  className?: string;
  color?: string;
};

export default function SketchArrow({ className = "", color = "currentColor", ...svgProps }: SketchArrowProps) {
  return (
    <svg className={`sketch-arrow ${className}`} {...svgProps} viewBox="0 0 190 110" fill="none" aria-hidden="true">
      <path d="M9 12c47 7 84 26 111 57 15 17 29 22 56 21" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="m148 72 29 18-31 12" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 19c47 7 83 28 109 59" stroke={color} strokeWidth="1" strokeLinecap="round" opacity=".35" />
    </svg>
  );
}
