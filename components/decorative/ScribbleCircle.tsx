import type { SVGProps } from "react";

type ScribbleCircleProps = SVGProps<SVGSVGElement> & {
  className?: string;
  color?: string;
};

export default function ScribbleCircle({ className = "", color = "currentColor", ...svgProps }: ScribbleCircleProps) {
  return (
    <svg className={`scribble-circle ${className}`} {...svgProps} viewBox="0 0 260 160" fill="none" aria-hidden="true">
      <path
        data-draw-circle
        d="M22 80C25 36 80 15 140 18c61 2 101 25 99 65-2 40-59 60-120 60C58 143 18 125 22 80Z"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M29 77C38 40 88 25 144 28c55 3 86 21 88 54"
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        opacity=".5"
      />
    </svg>
  );
}
