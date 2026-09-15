import type { SVGProps } from "react";

type StarDoodleProps = SVGProps<SVGSVGElement> & {
  className?: string;
  color?: string;
};

export default function StarDoodle({ className = "", color = "currentColor", ...svgProps }: StarDoodleProps) {
  return (
    <svg className={`star-doodle ${className}`} {...svgProps} viewBox="0 0 100 100" fill="none" aria-hidden="true">
      <path d="M50 5 59 39l34 11-34 10-9 35-10-35-35-10 35-11L50 5Z" stroke={color} strokeWidth="2" strokeLinejoin="round" />
      <circle cx="50" cy="50" r="4" fill={color} />
    </svg>
  );
}
