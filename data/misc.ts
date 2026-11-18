export const lightning: { emoji: string; text: string }[] = [
  { emoji: "🐱", text: "Cat over dogs" },
  { emoji: "✈️", text: "window seat over isle seat" },
  { emoji: "☀️", text: "hot weather over cold" },
  { emoji: "🍵", text: "tea over coffee" },
  { emoji: "🦉", text: "night owl over early bird" },
  { emoji: "🧂", text: "salty over sweet" },
  { emoji: "💬", text: "texting over calling" },
  { emoji: "🦸", text: "marvel over DC" },
  { emoji: "🎬", text: "Subs over dubs" },
  { emoji: "🚶", text: "walk break over coffee break" },
];

// NOTE: the original answers were collapsed on the source page, so these are
// short placeholders built from facts already on the site. Edit freely.
export const faq: { q: string; a: string }[] = [
  {
    q: "Who are you? Are you an experimental physicist who writes code, or a robotics/ML engineer with a physics foundation?",
    a: "Both, depending on the day. Full-time physics researcher, part-time robotics (computer vision) and ML engineer. The physics foundation is what lets me build the hardware and reason about the sensors, and the engineering side is how I ship it.",
  },
  {
    q: "What types of opportunities are you open to right now? (Full-time, Graduate Research, Contract, or Internships?)",
    a: "Send me the details by email: role, scope, and timeline. I'm happy to talk about research collaborations, engineering contracts, and graduate research opportunities.",
  },
  {
    q: "Are you willing to relocate nationally or internationally, and how do you handle remote or hybrid setups?",
    a: "I'm based in Bandung, West Java, and have worked with teams in Japan and South Korea. Let's talk about what the setup needs to look like and figure it out together.",
  },
  {
    q: "How do you approach a new engineering or research problem from scratch? What does your workflow look like?",
    a: "First principles: define the physical constraints, measure before optimizing, prototype the hardware and software together, and validate against real data. See the Manifesto above for the full list.",
  },
  {
    q: "How do you collaborate with non-software specialists and multidisciplinary teams?",
    a: "My work already sits between disciplines: geoscientists, reservoir engineers, field technicians, and industrial R&D teams. I translate between their domain language and what the system needs to do.",
  },
  {
    q: "How do we get started, and what is your availability for interviews, scoping calls, or just a chat?",
    a: "Shoot me an email with a short description of what you have in mind and we'll set up a call.",
  },
];

// NOTE: the "View Principles" panel wasn't expanded on the source page.
// Replace these placeholders with your own principles.
export const principles: { title: string; body: string }[] = [
  {
    title: "Question Assumptions First (Mindset)",
    body: "Jangan langsung menerima solusi yang sudah ada hanya karena \"biasanya begitu\". Pahami akar masalah dari elemen dasarnya sebelum menentukan arah penyelesaian.",
  },
  {
    title: "Ownership & Continuous Adaptation (Soft Skill / Character)",
    body: "Bertanggung jawab penuh atas seluruh alur kerja. Ketika menghadapi masalah baru atau kegagalan, terus beradaptasi dan belajar hingga menemukan solusi yang bekerja.",
  },
  {
    title: "Clarity Through Simplification (Communication & Work Ethic)",
    body: "Masalah yang rumit tidak butuh solusi yang dibuat-buat sulit. Sederhanakan ide-ide kompleks menjadi langkah-langkah konkret yang jelas dan mudah dipahami.",
  },
  {
    title: "Value Proof Over Pure Theory (Execution & Pragmatism)",
    body: "Teori dan gagasan bagus di atas kertas baru teruji nilainya ketika sudah dieksekusi dan terbukti berfungsi di dunia nyata.",
  },
];
