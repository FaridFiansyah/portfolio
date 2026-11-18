"use client";

import { useState } from "react";
import { faq } from "@/data/misc";
import Reveal from "./Reveal";

export default function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section">
      <div className="wrap narrow">
        <Reveal>
          <p className="eyebrow">FAQ</p>
          <h2>Frequently Asked Questions.</h2>
          <p className="muted">
            Key details on my background, research interests, engineering workflow, and collaboration.
          </p>
        </Reveal>

        <ul className="faq">
          {faq.map((item, i) => {
            const isOpen = open === i;
            return (
              <li key={item.q} className={isOpen ? "open" : ""}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-${i}`}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className="num">{String(i + 1).padStart(2, "0")}</span>
                  <span className="qtext">{item.q}</span>
                  <span className="plus" aria-hidden>
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <div id={`faq-${i}`} className="answer">
                    <p>{item.a}</p>
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
