"use client";

import { useEffect, useState } from "react";
import { projects, type Project } from "@/data/projects";
import Img from "./Img";
import Reveal from "./Reveal";

type Filter = "selected" | "industry" | "university" | "all";

const FILTERS: { id: Filter; label: string; test: (p: Project) => boolean }[] = [
  { id: "selected", label: "Selected Projects", test: (p) => p.selected },
  { id: "industry", label: "Real Work & Industry", test: (p) => p.category === "industry" },
  { id: "university", label: "University & Academic", test: (p) => p.category === "university" },
  { id: "all", label: "All Projects", test: () => true },
];

function Lightbox({
  items,
  index,
  onClose,
  onChange,
}: {
  items: { src: string; caption: string }[];
  index: number;
  onClose: () => void;
  onChange: (i: number) => void;
}) {
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onChange((index + 1) % items.length);
      if (e.key === "ArrowLeft") onChange((index - 1 + items.length) % items.length);
    };
    window.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [index, items.length, onClose, onChange]);

  const cur = items[index];
  return (
    <div className="lightbox" role="dialog" aria-modal="true" aria-label={cur.caption} onClick={onClose}>
      <figure onClick={(e) => e.stopPropagation()}>
        <Img src={cur.src} alt={cur.caption} eager />
        <figcaption>
          {cur.caption} <span className="muted">({index + 1}/{items.length})</span>
        </figcaption>
      </figure>
      <button type="button" className="lb-close" onClick={onClose} aria-label="Close">
        ×
      </button>
      {items.length > 1 && (
        <>
          <button
            type="button"
            className="lb-nav prev"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation();
              onChange((index - 1 + items.length) % items.length);
            }}
          >
            ‹
          </button>
          <button
            type="button"
            className="lb-nav next"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation();
              onChange((index + 1) % items.length);
            }}
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}

function ProjectCard({ p, index }: { p: Project; index: number }) {
  const [lb, setLb] = useState<number | null>(null);

  return (
    <Reveal as="article" className="card project">
      <div className="project-head">
        <div>
          <p className="designator">{p.label}</p>
          {p.sub && <p className="sub">{p.sub}</p>}
        </div>
      </div>

      <div className="collab">
        {p.collaborators.length > 0 && <span className="muted">Collaborated with</span>}
        {p.collaborators.map((c) => (
          <span key={c} className="chip">
            {c}
          </span>
        ))}
        {p.badges?.map((b) => (
          <span key={b} className="chip badge">
            {b}
          </span>
        ))}
      </div>

      <div className={p.documentation ? "project-layout project-layout-doc" : undefined}>
        <div className="project-copy">
          <h3>{p.title}</h3>
          {p.quote && <blockquote>“{p.quote}”</blockquote>}
          {p.paragraphs.map((t, i) => (
            <p key={i}>{t}</p>
          ))}
          {p.links && (
            <ul className="plinks">
              {p.links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} target="_blank" rel="noopener noreferrer">
                    {l.text}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>

        {p.documentation && (
          <figure className="project-documentation">
            <div className="project-documentation-frame">
              <Img src={p.documentation.src} alt={p.documentation.caption} eager />
            </div>
            <figcaption>{p.documentation.caption}</figcaption>
          </figure>
        )}
      </div>

      {(p.images.length > 0 || (p.videos?.length ?? 0) > 0) && (
        <div className={p.images.length === 1 ? "gallery gallery-single" : "gallery"}>
          {p.images.map((im, i) => (
            <button key={im.src} type="button" className="shot" onClick={() => setLb(i)} aria-label={`Open ${im.caption}`}>
              <Img src={im.src} alt={im.caption} />
              <span>{im.caption}</span>
            </button>
          ))}
          {p.videos?.map((v) => (
            <a
              key={v.id}
              className="shot video"
              href={`https://www.youtube.com/watch?v=${v.id}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Watch: ${v.caption}`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={`https://i.ytimg.com/vi_webp/${v.id}/hqdefault.webp`} alt={v.caption} loading="lazy" />
              <span className="play">▶</span>
              <span>{v.caption}</span>
            </a>
          ))}
        </div>
      )}

      <p className="designator">Technologies &amp; Methodologies</p>
      <div className="chips">
        {p.tech.map((t) => (
          <span key={t} className="chip tag">
            {t}
          </span>
        ))}
      </div>

      {lb !== null && p.images.length > 0 && (
        <Lightbox items={p.images} index={lb} onClose={() => setLb(null)} onChange={setLb} />
      )}
    </Reveal>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState<Filter>("selected");
  const active = FILTERS.find((f) => f.id === filter)!;
  const list = projects.filter(active.test);

  return (
    <section id="projects" className="section">
      <div className="wrap">
        <Reveal>
          <h2>Projects &amp; Systems</h2>
          <p className="muted">
            Showing {list.length} {filter === "selected" ? "selected flagship " : ""}project{list.length === 1 ? "" : "s"}
          </p>
        </Reveal>

        <div className="tabs" role="tablist" aria-label="Project filter">
          {FILTERS.map((f) => (
            <button
              key={f.id}
              type="button"
              role="tab"
              aria-selected={filter === f.id}
              className={filter === f.id ? "tab on" : "tab"}
              onClick={() => setFilter(f.id)}
            >
              {f.label} <span className="count">({projects.filter(f.test).length})</span>
            </button>
          ))}
        </div>

        <div className="stack">
          {list.map((p, i) => (
            <ProjectCard key={`${filter}-${p.id}`} p={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
