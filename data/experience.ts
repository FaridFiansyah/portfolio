export type Role = {
  period: string;
  title: string;
  org: string;
  place: string;
  summary: string;
  deliverable: string;
};

export const experience: Role[] = [
  {
    period: "Sep 2026 – Present",
    title: "Head of Software Programming Division",
    org: "URDC Bandhayudha",
    place: "Semarang, Indonesia",
    summary:
      "Leading the robotics software team for Kontes Robot Indonesia (KRI) and ABU Robocon, coordinating architecture, software workflows, and autonomous system validation in competition environments.",
    deliverable:
      "Built the Jetson Orin Nano computer vision pipeline, RefBox networking layer, and ROS 2 UDP telemetry system for robot perception, event handling, and real-time match communication.",
  },
  {
    period: "Jan 2026 – Aug 2026",
    title: "Web & IT Infrastructure Lead",
    org: "Society of Renewable Energy (SRE) Undip",
    place: "Semarang, Indonesia",
    summary:
      "Developed the official SRE Undip website from the ground up with a responsive interface and a stronger digital presence for the organization.",
    deliverable:
      "Designed and implemented the full website UI/UX, built an end-to-end event and competition registration system using Laravel, and improved participant data intake with automated validation and clearer user flows.",
  },
  {
    period: "Jul 2026 – Aug 2026",
    title: "Student Internship",
    org: "PT PLN (Persero)",
    place: "Semarang, Central Java, Indonesia · On-site",
    summary:
      "Conducted comprehensive load flow and short-circuit simulations using ETAP for planned substation developments, including Gardu Induk Purbalingga II, to evaluate system stability and protection coordination.",
    deliverable:
      "Managed critical power equipment logistics and inventory distribution across regional UP3 units, while also assessing facility network architecture and database connectivity to support secure, low-latency internal communication.",
  },
  {
    period: "Feb 2026 – Present",
    title: "Staff Media & Information",
    org: "HME FT Undip",
    place: "Semarang, Indonesia",
    summary:
      "Produced the company profile video for HME FT Undip to strengthen organizational communication and visual storytelling.",
    deliverable:
      "Created media content that supported the association's public image and communicated student activities through a clearer, more engaging presentation.",
  },
];

export type Initiative = {
  period: string;
  title: string;
  org: string;
  place: string;
  group: "education" | "campus";
  summary: string;
  deliverable: string;
};

export const initiatives: Initiative[] = [
  {
    period: "2024 – Present",
    title: "Bachelor of Engineering in Electrical Engineering",
    org: "Universitas Diponegoro (Undip)",
    place: "Semarang, Indonesia",
    group: "education",
    summary:
      "Focused on computer systems, robotics, systems engineering, and electrical power engineering as the foundation for embedded and autonomous systems work.",
    deliverable:
      "Developing engineering capability in robotics, control, signal processing, and system design for real-world industrial and research applications.",
  },
  {
    period: "2025 & 2026",
    title: "Finalist Kontes Robot ABU Indonesia",
    org: "ITB Jatinangor & Universitas Jember",
    place: "Indonesia",
    group: "campus",
    summary:
      "Reached the finalist stage in ABU Indonesia robot contests in 2025 and 2026, showcasing autonomous robotics performance and team technical execution.",
    deliverable:
      "Demonstrated strong team coordination, system integration, and robotics problem-solving under competition pressure in national-level autonomous systems events.",
  },
  {
    period: "2023",
    title: "Juara 2 OSN Informatika Kabupaten Cirebon",
    org: "Kabupaten Cirebon",
    place: "Indonesia",
    group: "campus",
    summary:
      "Secured second place in the regional Informatics Olympiad, strengthening analytical thinking and technical problem-solving.",
    deliverable:
      "Showcased disciplined reasoning and structured solution-building in a competitive programming environment.",
  },
  {
    period: "2023",
    title: "Juara 3 FLS2N Film Pendek Kabupaten Cirebon",
    org: "Kabupaten Cirebon",
    place: "Indonesia",
    group: "campus",
    summary:
      "Achieved third place in a short film competition, combining storytelling with creative media production skills.",
    deliverable:
      "Expanded communication ability through creative direction and visual storytelling in public-facing media work.",
  },
];
