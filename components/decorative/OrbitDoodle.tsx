import type { SVGProps } from "react";

export default function OrbitDoodle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...props} viewBox="0 0 80 80" fill="none" aria-hidden="true">
      <circle cx="40" cy="40" r="23" stroke="currentColor" strokeWidth="1.3" />
      <ellipse cx="40" cy="40" rx="36" ry="12" transform="rotate(-35 40 40)" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="60" cy="21" r="3" fill="currentColor" />
    </svg>
  );
}
