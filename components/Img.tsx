"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  eager?: boolean;
};

/** <img> with a graceful placeholder when the file is missing (e.g. before you add your photos). */
export default function Img({ src, alt, className, eager }: Props) {
  const [failed, setFailed] = useState(false);
  const ref = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (el && el.complete && el.naturalWidth === 0) setFailed(true);
  }, []);

  if (failed) {
    return (
      <div className={`ph ${className ?? ""}`} role="img" aria-label={alt}>
        <span>{alt}</span>
      </div>
    );
  }
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      ref={ref}
      src={src}
      alt={alt}
      className={className}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      onError={() => setFailed(true)}
    />
  );
}
