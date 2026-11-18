import { site } from "@/data/site";
import CopyButton from "./CopyButton";
import Reveal from "./Reveal";

export default function Contact() {
  return (
    <section id="contact" className="section contact">
      <Reveal className="wrap narrow center">
        <h2>You&apos;ve seen what I do. Need it done? Send the email.</h2>
        <p className="email">
          <a href={`mailto:${site.email}`}>{site.email}</a>
        </p>
        <CopyButton text={site.email} label="Copy" className="btn" />
        <p className="muted">
          You can <a href={`mailto:${site.email}`}>email me</a>. I&apos;m always shipping code on{" "}
          <a href={site.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>, active on{" "}
          <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>, and occasionally sharing
          daily life, content, or writings on{" "}
          <a href={site.links.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>.
        </p>
      </Reveal>
    </section>
  );
}
