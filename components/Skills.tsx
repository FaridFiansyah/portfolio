"use client";

import { skillGroups, type Tool } from "@/data/skills";
import Reveal from "./Reveal";

function ToolChip({ tool }: { tool: Tool }) {
  return (
    <span className="chip tool">
      {tool.slug ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={`https://cdn.simpleicons.org/${tool.slug}`}
          alt=""
          width={16}
          height={16}
          loading="lazy"
          onError={(e) => (e.currentTarget.style.display = "none")}
        />
      ) : (
        <i className="letter">{tool.name[0]}</i>
      )}
      {tool.name}
    </span>
  );
}

function Row({ items, reverse }: { items: React.ReactNode[]; reverse?: boolean }) {
  return (
    <div className="marquee marquee-row" aria-hidden={false}>
      <div className={`track ${reverse ? "reverse" : ""}`}>
        {items}
        {items.map((n, i) => (
          <span key={`d${i}`} className="dup" aria-hidden>
            {n}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="wrap">
        <div className="skill-grid">
          {skillGroups.map((g) => (
            <Reveal key={g.title} className="card skill">
              <h3>{g.title}</h3>
              <p className="muted">{g.blurb}</p>
              <Row items={g.tools.map((t) => <ToolChip key={t.name} tool={t} />)} />
              <Row
                reverse
                items={g.tags.map((t) => (
                  <span key={t} className="chip tag">
                    {t}
                  </span>
                ))}
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
