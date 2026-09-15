import type { SVGProps } from "react";

type InkStrokeProps = SVGProps<SVGSVGElement> & {
  className?: string;
  color?: string;
  flip?: boolean;
};

export default function InkStroke({ className = "", color = "currentColor", flip = false, ...svgProps }: InkStrokeProps) {
  return (
    <svg className={`ink-stroke ${flip ? "ink-stroke--flip" : ""} ${className}`} {...svgProps} viewBox="0 0 220 80" fill="none" aria-hidden="true">
      <path d="M9 56C47 30 85 23 121 29c28 5 51 1 85-17" stroke={color} strokeWidth="7" strokeLinecap="round" opacity=".85" />
      <path d="M28 71C72 48 112 43 147 48c22 3 39 0 59-9" stroke={color} strokeWidth="2" strokeLinecap="round" opacity=".45" />
    </svg>
  );
}
