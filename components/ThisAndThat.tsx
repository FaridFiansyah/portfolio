"use client";

import { useState } from "react";
import { lightning } from "@/data/misc";
import Reveal from "./Reveal";

type Vote = "agree" | "disagree";

export default function ThisAndThat() {
  const [votes, setVotes] = useState<Record<number, Vote>>({});

  return (
    <section className="section">
      <div className="wrap">
        <Reveal>
          <h2>This &amp; That.</h2>
          <p className="big">
            Lifelong learner with too many hobbies and a love to tinker. Full-time physics researcher, part-time engineer,
            used to game, podcast &amp; jazz lover, and die-hard football fan.
          </p>
          <p className="muted">
            Based in Bandung, West Java, Indonesia with a $5 soldering iron, microcontrollers, and endless curiosity.
          </p>
        </Reveal>

        <Reveal className="lightning">
          <h3>Lightning Round</h3>
          <p className="muted">These are my personal preferences. Do you agree or disagree?</p>
          <ul>
            {lightning.map((l, i) => (
              <li key={l.text}>
                <span className="q">
                  <i>{l.emoji}</i>
                  {l.text}
                </span>
                <span className="vote">
                  <button
                    type="button"
                    className={votes[i] === "agree" ? "on" : ""}
                    onClick={() => setVotes((v) => ({ ...v, [i]: "agree" }))}
                  >
                    Agree
                  </button>
                  <button
                    type="button"
                    className={votes[i] === "disagree" ? "on" : ""}
                    onClick={() => setVotes((v) => ({ ...v, [i]: "disagree" }))}
                  >
                    Disagree
                  </button>
                </span>
              </li>
            ))}
          </ul>
          <p className="negotiable">🤟 the rest is negotiable</p>
        </Reveal>
      </div>
    </section>
  );
}
