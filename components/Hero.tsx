import Img from "./Img";
import SignalScope from "./SignalScope";
import { site } from "@/data/site";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="wrap hero-grid">
        <div className="hero-copy">
          <h1 className="hero-name">{site.name}</h1>
          <p className="hero-role">{site.roles[0]}</p>
          <p className="lead">
            I design electrical, autonomous robotics, and embedded systems for real-world research and industrial
            deployment: power system analysis, ROS 2, Jetson edge AI, and STM32/ESP32 firmware.
          </p>
          <div className="hero-actions">
            <a className="btn" href={`mailto:${site.email}`}>
              Email me
            </a>
            <a className="btn-ghost" href="#projects">
              See projects
            </a>
          </div>
        </div>

        <div className="hero-board">
          <SignalScope />
          <div className="hero-id">
            <div className="hero-portrait">
              <Img src="/images/hero.webp" alt="Mohamad Farid Fiansyah portrait" eager />
            </div>
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
      </div>
    </section>
  );
}
