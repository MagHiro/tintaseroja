import Image from "next/image";
import { useId } from "react";

type BrandMarkProps = {
  className?: string;
  showName?: boolean;
  light?: boolean;
  priority?: boolean;
};

export default function BrandMark({ className = "", showName = true, priority = false }: BrandMarkProps) {
  const filterId = `logo-remove-black-${useId().replace(/:/g, "")}`;
  return (
    <span className={`brand-lockup ${className}`}>
      <svg width="0" height="0" aria-hidden="true" className="brand-filter">
        <defs>
          <filter id={filterId} colorInterpolationFilters="sRGB">
            <feColorMatrix type="matrix" values="0 0 0 0 0.098 0 0 0 0 0.259 0 0 0 0 0.498 0 0 2.01 0 0" />
          </filter>
        </defs>
      </svg>
      <span className="brand-mark" aria-hidden="true">
        <Image src="/logo/tinta-seroja-mark.png" alt="" width={1536} height={1024} priority={priority} sizes="(max-width: 600px) 600px, 1100px" style={{ filter: `url(#${filterId})` }} />
      </span>
      {showName && <span className="brand-name">Tinta Seroja</span>}
    </span>
  );
}
