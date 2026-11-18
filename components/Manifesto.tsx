"use client";

import { useState } from "react";
import { principles } from "@/data/misc";
import Reveal from "./Reveal";

export default function Manifesto() {
  const [open, setOpen] = useState(false);
  return (
    <section className="section tight">
      <Reveal className="wrap manifesto">
        <p className="eyebrow">Working Philosophy</p>
        <h2>Farid&apos;s First-Principles Manifesto</h2>
        <button type="button" className="btn" aria-expanded={open} onClick={() => setOpen((v) => !v)}>
          {open ? "Hide Principles" : "View Principles"}
        </button>
        {open && (
          <ol className="principles">
            {principles.map((p, i) => (
              <li key={p.title}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3>{p.title}</h3>
                  <p>{p.body}</p>
                </div>
              </li>
            ))}
          </ol>
        )}
      </Reveal>
    </section>
  );
}
