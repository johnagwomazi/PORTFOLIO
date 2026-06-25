import { FaReact, FaNodeJs, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FiGlobe, FiShield } from "react-icons/fi";

export const socialLinks = [
  { label: "GitHub", href: "https://github.com/johnagwomazi", icon: FaGithub },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/agwom-azi-john-51b41b247", icon: FaLinkedinIn },
  { label: "Instagram", href: "https://www.instagram.com/", icon: FaInstagram },
  { label: "X", href: "https://x.com/agwom_azi98812", icon: FaXTwitter },
];

export const stackGroups = [
  {
    title: "Frontend Development",
    items: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: FaJsSquare, color: "#F7DF1E" },
      { name: "HTML5", icon: FaHtml5, color: "#E34F26" },
      { name: "CSS3", icon: FaCss3Alt, color: "#1572B6" },
      { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend Development",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "REST APIs", icon: FiGlobe, color: "#00F5D4" },
      { name: "JWT Auth", icon: FiShield, color: "#8B5CF6" },
    ],
  },
  {
    title: "Databases",
    items: [
      { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
      { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    ],
  },
  {
    title: "Tools & Workflow",
    items: [
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    ],
  },
];

const projects = [
  {
    slug: "nexa-admin-suite",
    title: "Nexa Admin Suite",
    category: "B2B SaaS Platform",
    description:
      "A modular admin system for managing users, workflows, analytics, and role-based access in one unified interface.",
    heroSummary:
      "Built to replace fragmented spreadsheets with a fast operational control system.",
    coverClass:
      "bg-[radial-gradient(circle_at_top_left,rgba(56,189,248,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(124,58,237,0.22),transparent_55%)]",
    coverCaption: "Control room dashboard",
    technologies: ["React", "Node.js", "Express", "MongoDB", "JWT"],
    problemStatement:
      "Internal teams needed a single system to track onboarding progress, manage permissions, and view live performance metrics without losing speed or clarity.",
    features: [
      "Role-aware dashboard with secure session management",
      "Realtime analytics widgets and conversion funnels",
      "Task pipelines with filters, tags, and SLA states",
      "Audit-friendly activity timeline",
    ],
    challenges: [
      "Keeping dense operational data readable on smaller screens",
      "Ensuring authentication flows stayed secure without adding friction",
      "Balancing rich dashboard visuals with performance budgets",
    ],
    solutions: [
      "Built a modular card system with progressive disclosure",
      "Used JWT-based auth and route guards for protected workflows",
      "Optimized data fetching and motion timing for a fast, calm interface",
    ],
    impact:
      "Reduced onboarding handoff time and gave leadership a clear, real-time view of pipeline health across teams.",
    lessons:
      "Strong hierarchy beats visual noise when a product serves both operators and executives.",
    githubUrl: "https://github.com/",
    liveDemoUrl: "https://example.com/",
    architecture: ["User", "React UI", "API Gateway", "Express Services", "MongoDB"],
    screenshots: [
      { label: "Overview", className: "bg-gradient-to-br from-[#00F5D4]/20 to-slate-950" },
      { label: "Analytics", className: "bg-gradient-to-br from-[#8B5CF6]/20 to-slate-950" },
      { label: "Access Control", className: "bg-gradient-to-br from-[#22C55E]/20 to-slate-950" },
    ],
  },
  {
    slug: "pulseflow-commerce",
    title: "PulseFlow Commerce",
    category: "E-commerce Platform",
    description:
      "A conversion-focused storefront with product storytelling and optimized checkout flows.",
    heroSummary:
      "Designed for clarity, speed, and high-intent purchasing.",
    coverClass:
      "bg-[radial-gradient(circle_at_top,rgba(0,245,212,0.18),transparent_45%),radial-gradient(circle_at_bottom,rgba(34,197,94,0.18),transparent_55%)]",
    coverCaption: "Commerce launch page",
    technologies: ["React", "Node.js", "MySQL", "REST APIs"],
    problemStatement:
      "The brand needed a storefront that elevated products visually while keeping browsing, cart management, and checkout very fast.",
    features: [
      "Curated collections with cinematic product cards",
      "Smart filters and persistent cart state",
      "Checkout-ready order summaries and trust cues",
      "Responsive layouts optimized for mobile shopping",
    ],
    challenges: [
      "Keeping product imagery premium without hurting load speed",
      "Making checkout feel trustworthy and concise",
      "Maintaining layout consistency across many breakpoints",
    ],
    solutions: [
      "Used a content-first layout with subtle depth and restrained motion",
      "Simplified checkout steps and made microcopy explicit",
      "Created a scalable card grid and tokenized spacing system",
    ],
    impact:
      "Improved browse-to-cart clarity and supported a more confident purchase flow across devices.",
    lessons:
      "Luxury commerce is about confidence, not decoration.",
    githubUrl: "https://github.com/",
    liveDemoUrl: "https://example.com/",
    architecture: ["Visitor", "React Storefront", "Order API", "MySQL", "Fulfillment"],
    screenshots: [
      { label: "Collection Grid", className: "bg-gradient-to-br from-[#22C55E]/20 to-slate-950" },
      { label: "Product Story", className: "bg-gradient-to-br from-[#00F5D4]/20 to-slate-950" },
      { label: "Checkout", className: "bg-gradient-to-br from-[#8B5CF6]/20 to-slate-950" },
    ],
  },
  {
    slug: "atlas-developer-portal",
    title: "Atlas Developer Portal",
    category: "API Platform",
    description:
      "A developer portal for API onboarding, authentication, documentation, and support workflows.",
    heroSummary:
      "A clean system for managing APIs and developer experience.",
    coverClass:
      "bg-[radial-gradient(circle_at_top_right,rgba(124,58,237,0.22),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(0,245,212,0.16),transparent_55%)]",
    coverCaption: "API operations hub",
    technologies: ["React", "Node.js", "JWT", "MongoDB"],
    problemStatement:
      "API consumers needed a clear path to understand endpoints, validate credentials, and troubleshoot integrations without waiting on support.",
    features: [
      "Interactive endpoint reference and token guide",
      "Secure auth onboarding and key rotation patterns",
      "Support escalation with activity context",
      "Status-aware cards and usage snapshots",
    ],
    challenges: [
      "Explaining complex technical concepts without overwhelming users",
      "Keeping security guidance visible but non-intrusive",
      "Designing a documentation surface that still felt premium",
    ],
    solutions: [
      "Used layered sections with concise callouts and step-by-step flows",
      "Prioritized secure defaults and clear recovery states",
      "Composed the page around scanning behavior and decision points",
    ],
    impact:
      "Reduced onboarding confusion and gave partners a stronger self-serve experience.",
    lessons:
      "Great developer UX is an equal blend of clarity, trust, and momentum.",
    githubUrl: "https://github.com/",
    liveDemoUrl: "https://example.com/",
    architecture: ["Developer", "Portal UI", "Auth Service", "Docs Store", "Monitoring"],
    screenshots: [
      { label: "Docs Home", className: "bg-gradient-to-br from-slate-700/40 to-slate-950" },
      { label: "Auth Flow", className: "bg-gradient-to-br from-[#8B5CF6]/20 to-slate-950" },
      { label: "Support View", className: "bg-gradient-to-br from-[#00F5D4]/20 to-slate-950" },
    ],
  },
];

export default projects;
