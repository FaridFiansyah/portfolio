"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
};

/** Optimized, graceful image rendering for local portfolio assets. */
export default function Img({ src, alt, className, eager }: Props) {
  const [failed, setFailed] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, [src]);

  if (failed) {
    return (
      <div className={`ph ${className ?? ""}`} role="img" aria-label={alt}>
        <span>{alt}</span>
      </div>
    );
  }

  return (
    <Image
      ref={ref}
      src={src}
      alt={alt}
      width={1600}
      height={1200}
      sizes="(max-width: 820px) 100vw, (max-width: 1200px) 50vw, 600px"
      priority={eager}
      loading={eager ? undefined : "lazy"}
      decoding="async"
      className={`${className ?? ""} responsive-image${
        loaded ? " is-loaded" : ""
      }`}
      style={{ objectFit: "cover" }}
      onLoad={() => setLoaded(true)}
      onError={() => setFailed(true)}
    />
  );
}
