import Img from "./Img";
import Reveal from "./Reveal";
import { site } from "@/data/site";

export default function About() {
  return (
    <section id="about" className="section">
      <div className="wrap about-grid">
        <Reveal className="about-visual">
          <div className="about-photo">
            <Img src="/images/potrait.webp" alt="Farid portrait" />
          </div>
          <div className="polaroid">
            <Img src="/images/memory.webp" alt="Engineering memory" />
          </div>
          <div className="idcard">
            <Img src="/images/KTM.webp" alt="Student ID card" />
          </div>
          <div className="pcb" aria-hidden>
            <span>Mobile</span>
            <span>UDP</span>
            <span>JETSON</span>
            <span>EMBEDDED</span>
            <strong>EDGE AI READY</strong>
          </div>
        </Reveal>

        <Reveal className="about-copy">
          <h2>Mohamad Farid Fiansyah.</h2>
          <p className="big">Electrical and intelligent systems engineer with a focus on power system modeling, mobile robotics, embedded firmware, and edge AI.</p>
          <p className="big">I build reliable engineering solutions across power distribution analysis, autonomous robots, networked telemetry, and fast decision-making at the edge.</p>
          <p>
            I specialize in ROS 2, Jetson Orin Nano, STM32/ESP32 firmware, and infrastructure that connects perception,
            control, and deployment in real-world engineering environments.
          </p>
          <p>
            Reach me at <a href={`mailto:${site.email}`}>email</a>, explore my code on{" "}
            <a href={site.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>, or connect on{" "}
            <a href={site.links.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a> and{" "}
            <a href={site.links.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>.
          </p>
          <a href="#projects" className="btn">Explore Engineering Case Studies →</a>
        </Reveal>
      </div>
    </section>
  );
}
