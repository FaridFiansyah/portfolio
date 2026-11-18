"use client";

import { useEffect, useState } from "react";
import { site } from "@/data/site";

function useEarthlingYears(birth: string) {
  const [value, setValue] = useState<string | null>(null);
  useEffect(() => {
    if (!birth) return;
    const t0 = new Date(birth).getTime();
    if (Number.isNaN(t0)) return;
    const YEAR = 365.2425 * 24 * 3600 * 1000;
    const tick = () => setValue(((Date.now() - t0) / YEAR).toFixed(8));
    tick();
    const id = setInterval(tick, 100);
    return () => clearInterval(id);
  }, [birth]);
  return value;
}

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const years = useEarthlingYears(site.birthDate);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="wrap nav-inner">
        <a href="#top" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-name">{site.name}</span>
          {years && (
            <span className="brand-sub">
              Earthling for <b>{years}</b> yrs
            </span>
          )}
        </a>

        <nav className={`nav-links ${open ? "open" : ""}`} aria-label="Primary">
          {site.nav.map((n) => (
            <a key={n.href} href={n.href} onClick={() => setOpen(false)}>
              {n.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
