"use client";

import { useState } from "react";

export default function CopyButton({
  text,
  label = "Copy",
  doneLabel = "Copied!",
  className = "btn-ghost",
}: {
  text: string;
  label?: string;
  doneLabel?: string;
  className?: string;
}) {
  const [done, setDone] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(text);
      setDone(true);
      setTimeout(() => setDone(false), 1800);
    } catch {
      window.prompt("Copy:", text);
    }
  }

  return (
    <button type="button" className={className} onClick={copy}>
      {done ? doneLabel : label}
    </button>
  );
}
