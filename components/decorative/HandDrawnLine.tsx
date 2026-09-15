import type { SVGProps } from "react";

type HandDrawnLineProps = SVGProps<SVGSVGElement> & {
  className?: string;
  color?: string;
  direction?: "horizontal" | "vertical";
};

export default function HandDrawnLine({
  className = "",
  color = "currentColor",
  direction = "horizontal",
  ...svgProps
}: HandDrawnLineProps) {
  const isVertical = direction === "vertical";

  return (
    <svg
      className={`hand-line hand-line--${direction} ${className}`}
      {...svgProps}
      viewBox={isVertical ? "0 0 42 300" : "0 0 500 42"}
      fill="none"
      aria-hidden="true"
    >
      <path
        data-draw-line
        d={isVertical ? "M21 5 C13 54 28 90 19 132 C11 173 28 218 20 296" : "M4 22 C72 11 123 30 184 20 C253 9 313 29 376 18 C424 10 460 27 496 18"}
        stroke={color}
        strokeWidth="2.4"
        strokeLinecap="round"
      />
      <path
        d={isVertical ? "M23 8 C17 56 32 90 22 132 C15 174 32 217 22 294" : "M4 25 C74 14 125 33 185 23 C254 12 314 32 377 21 C425 13 460 30 496 21"}
        stroke={color}
        strokeWidth="1"
        strokeLinecap="round"
        opacity=".35"
      />
    </svg>
  );
}
