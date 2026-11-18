"use client";

import { useState } from "react";
import { experience, initiatives } from "@/data/experience";
import Reveal from "./Reveal";

type Group = "all" | "education" | "campus";

const GROUPS: { id: Group; label: string }[] = [
  { id: "all", label: "All" },
  { id: "education", label: "Education" },
  { id: "campus", label: "Campus & Awards" },
];

function Entry(props: {
  period: string;
  title: string;
  org: string;
  place: string;
  summary: string;
  deliverable: string;
}) {
  return (
    <Reveal as="li" className="entry">
      <p className="period">{props.period}</p>
      <div className="entry-body">
        <h4>{props.title}</h4>
        <p className="org">
          at <b>{props.org}</b> · {props.place}
        </p>
        <p>{props.summary}</p>
        <p className="deliverable">
          <b>Core Deliverable →</b> {props.deliverable}
        </p>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  const [group, setGroup] = useState<Group>("all");
  const list = initiatives.filter((i) => group === "all" || i.group === group);

  return (
    <section id="experience" className="section">
      <div className="wrap">
        <Reveal>
          <p className="eyebrow">Primary Track Record</p>
          <h2>Professional &amp; Engineering Experience</h2>
          <p className="muted">Building robotic systems, embedded platforms, and production-ready digital infrastructure for real-world engineering problems.</p>
        </Reveal>

        <ol className="timeline">
          {experience.map((e) => (
            <Entry key={e.title + e.period} {...e} />
          ))}
        </ol>

        <Reveal className="sub-head">
          <p className="eyebrow">Education &amp; Campus Involvement</p>
          <h2>Academic Background, Competitions &amp; Achievements</h2>
          <p className="muted">Academic study, contests, and campus-driven progress supporting my engineering path.</p>
        </Reveal>

        <div className="tabs" role="tablist" aria-label="Initiative filter">
          {GROUPS.map((g) => (
            <button
              key={g.id}
              type="button"
              role="tab"
              aria-selected={group === g.id}
              className={group === g.id ? "tab on" : "tab"}
              onClick={() => setGroup(g.id)}
            >
              {g.label}
            </button>
          ))}
        </div>

        <ol className="timeline">
          {list.map((e) => (
            <Entry key={e.title + e.period} {...e} />
          ))}
        </ol>
      </div>
    </section>
  );
}
