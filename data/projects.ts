export type ProjectImage = { src: string; caption: string };
export type ProjectVideo = { id: string; caption: string };

export type Project = {
  id: string;
  category: "industry" | "university";
  selected: boolean;
  label: string;
  sub?: string;
  collaborators: string[];
  badges?: string[];
  title: string;
  quote?: string;
  paragraphs: string[];
  links?: { text: string; href: string }[];
  images: ProjectImage[];
  documentation?: ProjectImage;
  videos?: ProjectVideo[];
  tech: string[];
};

const img = (name: string, caption: string): ProjectImage => ({
  src: `/images/${name}`,
  caption,
});

export const projects: Project[] = [
  {
    id: "urdc-bandhayudha",
    category: "university",
    selected: true,
    label: "University · Robotics Systems",
    sub: "URDC Bandhayudha · KRI & ABU Robocon",
    collaborators: ["URDC Bandhayudha", "Undip", "KRAI / ABU Robocon"],
    badges: ["ROS 2"],
    title: "URDC Bandhayudha KRAI Robotics",
    paragraphs: [
      "Led the robotics software effort for URDC Bandhayudha with a focus on building reliable robot communication, telemetry, and competition-ready system integration for KRAI and ABU Robocon missions.",
      "STM32 embedded interface, Computer Vision, ROS 2 decision and UDP mapping system",
      "I also developed an Android mobile controller app for the robot, allowing operators to send commands, monitor status, and manage control flows more intuitively during competition scenarios.",
      "The architecture prioritized resilient communication, low-latency telemetry, and clean data flows between embedded hardware, robot control, and the mission control layer.",
    ],
    images: [
      img("Krai1.JPG.webp", "URDC Bandhayudha competition setup"),
      img("Krai2.JPG.webp", "URDC Bandhayudha robot system"),
    ],
    tech: [
      "ROS 2", "UDP Telemetry Protocol", "RefBox Infrastructure", "STM32 Embedded Systems",
      "Android App Development", "Java / Android Studio", "MikroTik Routing", "TP-Link Networks",
      "Robot Communication Stack", "Embedded Linux",
    ],
  },
  {
    id: "jetson-vision",
    category: "university",
    selected: true,
    label: "University · Edge AI",
    sub: "Jetson Orin Nano Vision Pipeline",
    collaborators: ["URDC Bandhayudha", "Jetson Ecosystem"],
    badges: ["YOLOv11"],
    title: "NVIDIA Jetson Orin Nano Edge Vision Pipeline",
    paragraphs: [
      "Developed a real-time edge vision system on NVIDIA Jetson Orin Nano for robot perception tasks using YOLOv11 for box detection and tic-tac-toe recognition, paired with HSV calibration for robust environmental adaptation.",
      "The pipeline focused on object detection reliability, quick tuning for varying lighting conditions, and deployment-ready performance without sacrificing inference speed on embedded hardware.",
      "This work strengthened the practical integration between deep learning perception and robotics control in constrained hardware environments.",
    ],
    images: [],
    documentation: img("jetson1.webp", "Jetson vision system documentation"),
    tech: [
      "NVIDIA Jetson Orin Nano", "Ultralytics YOLOv11", "OpenCV", "PyTorch", "Deep Learning Inference",
      "HSV Calibration", "Computer Vision", "Edge AI", "Real-Time Detection",
    ],
  },
  {
    id: "sre-undip",
    category: "university",
    selected: true,
    label: "University · Web Engineering",
    sub: "Society of Renewable Energy (SRE) Undip",
    collaborators: ["SRE Undip"],
    title: "SRE Undip Web Platform",
    paragraphs: [
      "Led the redesign of the SRE Undip landing page into a cleaner and more maintainable web platform that matched organizational communication goals and future platform growth.",
      "Built the front-end and platform architecture using Laravel, Inertia.js, React, and MySQL to create a scalable digital presence for renewable energy initiatives and campus information distribution.",
      "The effort improved the platform's usability, maintainability, and presentation quality for stakeholders and external audiences.",
    ],
    images: [
      img("Sre1.webp", "SRE Undip website interface"),
      img("Sre2.webp", "SRE Undip platform documentation"),
    ],
    tech: [
      "Laravel", "Inertia.js", "React", "MySQL", "Web Platform Design", "Full-Stack Systems",
      "User Experience", "Digital Infrastructure", "Frontend Architecture",
    ],
  },
  {
    id: "solar-home-system",
    category: "industry",
    selected: true,
    label: "Project · Embedded Systems",
    sub: "Prototype Renewable Energy System",
    collaborators: ["Prototype Lab"],
    title: "Prototype Solar Home System",
    paragraphs: [
      "Built a compact solar home system prototype using a 1.1W panel, INA219 current/voltage sensor, TP4056 charging module, and 18650 battery to demonstrate low-power energy harvesting and battery management logic.",
      "The implementation used hysteresis logic to manage charge-discharge behavior in a lightweight, practical setup for small-scale renewable energy applications.",
      "This project highlighted hardware-level design thinking for battery management, power monitoring, and efficient embedded energy systems.",
    ],
    images: [],
    documentation: img("Solar1.webp", "Solar Home System prototype documentation"),
    tech: [
      "Solar Energy System", "INA219", "TP4056", "18650 Battery", "Hysteresis Logic",
      "Embedded Power Monitoring", "Low-Power Design", "Energy Management",
    ],
  },
];
