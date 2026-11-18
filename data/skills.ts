export type Tool = { name: string; slug?: string };
export type SkillGroup = {
  title: string;
  blurb: string;
  tools: Tool[];
  tags: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    title: "Robotics & Autonomous Systems",
    blurb:
      "Developing autonomous mobile robot systems, communication stacks, and control logic for competition and field deployment environments.",
    tools: [
      { name: "ROS 2", slug: "ros" },
      { name: "Nav2" },
      { name: "Python", slug: "python" },
      { name: "C/C++", slug: "cplusplus" },
      { name: "OpenCV", slug: "opencv" },
      { name: "STM32", slug: "stmicroelectronics" },
      { name: "ESP32", slug: "espressif" },
      { name: "UDP Telemetry" },
    ],
    tags: [
      "Omniwheel Kinematics",
      "ROS 2 Integration",
      "Telemetry & Networking",
      "Control Systems",
      "Robotics Team Deployment",
    ],
  },
  {
    title: "Computer Vision & Edge AI",
    blurb:
      "Building perception pipelines for robotics and embedded intelligence using modern CV models and edge inference tools.",
    tools: [
      { name: "Ultralytics YOLOv8/v11/26" },
      { name: "PyTorch", slug: "pytorch" },
      { name: "OpenCV", slug: "opencv" },
      { name: "NVIDIA Jetson Orin Nano", slug: "nvidia" },
      { name: "Python", slug: "python" },
      { name: "C++", slug: "cplusplus" },
    ],
    tags: [
      "Object Detection",
      "HSV Calibration",
      "YOLO-based Vision",
      "Edge Inference",
      "Real-Time Perception",
      "Embedded Computer Vision",
      "Vision + Robotics Integration",
    ],
  },
  {
    title: "Embedded Systems & Firmware",
    blurb:
      "Designing reliable embedded hardware systems, firmware, and low-level interfaces for robotics and automation products.",
    tools: [
      { name: "STM32CubeIDE" },
      { name: "ESP32", slug: "espressif" },
      { name: "FreeRTOS" },
      { name: "Embedded Linux" },
      { name: "C/C++", slug: "cplusplus" },
      { name: "Git", slug: "git" },
    ],
    tags: [
      "Firmware Development",
      "Low-Level Hardware Integration",
      "Systems Validation",
      "Real-Time Control",
    ],
  },
  {
    title: "Mobile App Development",
    blurb:
      "Building mobile interfaces for robotics control, operator interaction, and field deployment support with intuitive and reliable user experiences.",
    tools: [
      { name: "Android Studio" },
      { name: "Java", slug: "java" },
      { name: "Kotlin" },
      { name: "Android SDK" },
      { name: "Mobile UI/UX" },
      { name: "Bluetooth / UDP / Serial Communication" },
      { name: "Git", slug: "git" },
    ],
    tags: [
      "Android App Development",
      "Robot Controller UI",
      "Field Operator Interface",
      "Mobile UX Design",
      "Communication Protocol Integration",
      "Robotics Control Apps",
    ],
  },
  {
    title: "Web Development",
    blurb:
      "Building web applications, internal systems, and user interfaces for operational workflows and digital services.",
    tools: [
      { name: "Laravel" },
      { name: "Inertia.js" },
      { name: "React" },
      { name: "MySQL", slug: "mysql" },
      { name: "Git", slug: "git" },
      { name: "Python", slug: "python" },
      { name: "Java", slug: "java" },
    ],
    tags: [
      "Full-Stack Web Development",
      "UI/UX Implementation",
      "Registration & Validation Systems",
      "Backend Systems",
      "System Architecture",
      "Multi-Device Accessibility",
    ],
  },
  {
    title: "Engineering Systems & Analysis",
    blurb:
      "Modeling, simulation, and analytical engineering work for power and system-level studies using industry-standard tools.",
    tools: [
      { name: "ETAP" },
      { name: "SINCAL" },
      { name: "MATLAB" },
      { name: "Power Systems" },
      { name: "System Simulation" },
      { name: "Technical Analysis" },
    ],
    tags: [
      "Power System Analysis",
      "System Simulation",
      "Engineering Evaluation",
      "Technical Modeling",
      "Operational Planning",
    ],
  },
];
