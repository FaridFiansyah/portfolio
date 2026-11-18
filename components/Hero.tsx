import Img from "./Img";
import { site } from "@/data/site";

export default function Hero() {
  const marquee = Array.from({ length: 10 }, (_, i) => (
    <span key={i}>MOHAMAD FARID FIANSYAH ·&nbsp;</span>
  ));

  return (
    <section id="top" className="hero">
      <div className="marquee marquee-big" aria-hidden>
        <div className="track">
          {marquee}
          {marquee}
        </div>
      </div>

      <div className="wrap hero-grid">
        <div className="hero-portrait">
          <Img src="/images/hero.jpeg" alt="Mohamad Farid Fiansyah Portrait" eager />
        </div>

        <div className="hero-copy">
          <p className="eyebrow">Hello, I&apos;m</p>
          <h1 className="hero-roles">
            {site.roles.map((r) => (
              <span key={r}>{r}</span>
            ))}
          </h1>

          <p className="lead">
            I design electrical, autonomous robotics, and embedded systems for real-world research and industrial deployment. 
            My work spans power system analysis, ROS 2, Jetson edge AI, STM32/ESP32 firmware, and 
            software infrastructure that turns engineering models and sensing into reliable field performance.
          </p>

          <dl className="meta">
            <div>
              <dt>Current position</dt>
              <dd>{site.currentPosition}</dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{site.location}</dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
