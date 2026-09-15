import type { SVGProps } from "react";

type FlowerDoodleProps = SVGProps<SVGSVGElement> & {
  className?: string;
  color?: string;
};

export default function FlowerDoodle({ className = "", color = "currentColor", ...svgProps }: FlowerDoodleProps) {
  return (
    <svg className={`flower-doodle ${className}`} {...svgProps} viewBox="0 0 170 230" fill="none" aria-hidden="true">
      <path d="M78 217c7-52 9-96 2-134C73 49 56 22 29 8" stroke={color} strokeWidth="2" strokeLinecap="round" />
      <path d="M80 112c-28-10-45-28-49-55 29 2 46 20 49 55Zm2 0c15-28 35-43 62-43-5 29-25 44-62 43Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M83 159c-22-6-39-1-52 15 20 10 39 5 52-15Zm1 0c17-15 34-18 51-8-11 17-28 20-51 8Z" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="81" cy="112" r="4" fill={color} />
      <circle cx="83" cy="159" r="3" fill={color} />
    </svg>
  );
}
