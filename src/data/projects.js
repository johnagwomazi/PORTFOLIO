import { FaReact, FaNodeJs, FaJsSquare, FaHtml5, FaCss3Alt, FaGitAlt } from "react-icons/fa";
import { FaGithub, FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { SiTailwindcss, SiExpress, SiMongodb, SiMysql, SiPostman, SiTypescript, SiReactrouter, SiJsonwebtokens } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import { FiGlobe, FiLayers } from "react-icons/fi";

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
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Zustand", icon: FiLayers, color: "#FF5C93" },
      { name: "React Router", icon: SiReactrouter, color: "#CA4245" },
    ],
  },
  {
    title: "Backend Development",
    items: [
      { name: "Node.js", icon: FaNodeJs, color: "#339933" },
      { name: "Express.js", icon: SiExpress, color: "#FFFFFF" },
      { name: "REST APIs", icon: FiGlobe, color: "#00F5D4" },
      { name: "JWT Authentication / RBAC", icon: SiJsonwebtokens, color: "#8B5CF6" },
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
      { name: "Git", icon: FaGitAlt, color: "#F05032" },
      { name: "GitHub", icon: FaGithub, color: "#FFFFFF" },
      { name: "Postman", icon: SiPostman, color: "#FF6C37" },
      { name: "VS Code", icon: VscVscode, color: "#007ACC" },
    ],
  },
];

const projects = [

  {
    slug: "eventidor-ticketing-platform",
    title: "Eventidor",
    category: "Full-Stack Event Management & Ticketing SaaS",
    image: "/eventidor_homepage.png",
    description:
      "A full-stack multi-role event management and ticketing platform built for platform administrators, event organizations, managers, and customers. The system handles organization management, event lifecycle workflows, team members, event discovery, attendance, customer accounts, and administrative operations.",
    heroSummary:
      "Built as a complete event-management ecosystem where organizations can manage events and teams while customers can discover events and interact with ticketing and account workflows through role-specific experiences.",
    coverClass:
      "bg-[radial-gradient(circle_at_top_left,rgba(231,0,86,0.18),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,92,147,0.18),transparent_55%)]",
    coverCaption: "Multi-role event management and ticketing platform",
    technologies: [
      "React",
      "Tailwind CSS",
      "Zustand",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "REST API",
    ],
    problemStatement:
      "Event platforms require more than simply displaying events. The challenge was building a system capable of supporting multiple organizations, users, managers, customers, event lifecycle states, permissions, attendance operations, and platform administration while keeping data isolated between organizations.",
    features: [
      "Multi-role architecture supporting Super Admin, Organization Admin, Manager, and Customer accounts",
      "Organization-level data isolation and administrative workflows",
      "Event creation, editing, publishing, postponement, resumption, completion, and cancellation workflows",
      "Auditable event lifecycle history including transition reasons, actors, and timestamps",
      "Organization member and manager management",
      "Manager assignment to individual events",
      "Event attendance and attendee check-in workflows",
      "Platform-level user and organization management",
      "Organization approval, rejection, suspension, and reactivation workflows",
      "Customer-facing event discovery and browsing experience",
      "Customer ticket, history, and profile workflows",
      "Responsive administrative and customer interfaces",
    ],
    challenges: [
      "Designing authorization across four different user roles",
      "Keeping organization data isolated while still allowing platform-level administration",
      "Managing complex event lifecycle transitions without allowing invalid state changes",
      "Coordinating frontend and backend state across organizations, events, users, managers, and customers",
      "Building administrative workflows without exposing organization-specific information to unauthorized users",
    ],
    solutions: [
      "Implemented JWT authentication and role-based authorization across protected frontend and backend routes",
      "Introduced organization-aware backend queries and authorization rules to enforce data isolation",
      "Implemented explicit event lifecycle states and controlled transition rules",
      "Used Zustand to manage application state across authentication, organizations, events, and customer workflows",
      "Separated platform administration, organization administration, management, and customer experiences into role-specific interfaces",
    ],
    impact:
      "Delivered a substantial multi-role SaaS platform capable of supporting event organizations, managers, customers, event lifecycle management, attendance operations, and platform-wide administration through a structured full-stack architecture.",
    lessons:
      "Building a multi-tenant SaaS product requires careful attention to authorization, data isolation, state transitions, business rules, and the differences between platform-level and organization-level control.",
    githubUrl: "https://github.com/johnagwomazi/ET",
    liveDemoUrl: "https://event-mgnt-frontenf.onrender.com/",
    architecture: [
      "React Application",
      "Zustand State Layer",
      "REST API",
      "Express Controllers",
      "Authorization Middleware",
      "MongoDB",
      "Organization Isolation",
      "Role-Based Dashboards",
    ],
    screenshots: [
      {
        label: "Public Event Discovery",
        image: "/eventidor_homepage.png",
      },
      {
        label: "Popular Events",
        image: "/eventidor_popular_events.png",
      },
      {
        label: "Event Details",
        image: "/eventidor_event_details.png",
      },
      {
        label: "Customer Tickets",
        image: "/eventidor_customer_tickets.png",
      },
      {
        label: "Customer Event History",
        image: "/eventidor_customer_history.png",
      },
      {
        label: "Ticket Checkout",
        image: "/eventidor_checkout.png",
      },
      {
        label: "Authentication",
        image: "/eventidor_login.png",
      },
      {
        label: "Organization Dashboard",
        image: "/eventidor_org_dashboard.png",
      },
      {
        label: "Organization Event Management",
        image: "/eventidor_org_events.png",
      },
      {
        label: "Finance & Withdrawals",
        image: "/eventidor_finance.png",
      },
    ],
  },
  {
    slug: "attendance-management-system",
    title: "Attendance Management System",
    category: "Full-Stack QR Attendance Management Platform",
    image: "/attendance_student_dashboard.png",
    description:
      "A full-stack attendance management system built to replace manual attendance processes with dynamic QR-based attendance, schedule validation, session rules, enrollment management, automatic absence handling, and role-specific administration.",
    heroSummary:
      "Built to automate attendance operations from course enrollment and scheduling through QR check-in, attendance validation, monitoring, and student attendance history.",
    coverClass:
      "bg-[radial-gradient(circle_at_top,rgba(231,0,86,0.18),transparent_45%),radial-gradient(circle_at_bottom,rgba(255,92,147,0.16),transparent_55%)]",
    coverCaption: "QR-based attendance management platform",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Zustand",
      "React Router",
      "Node.js",
      "Express.js",
      "MySQL",
      "JWT",
      "Socket.IO",
      "REST API",
    ],
    problemStatement:
      "Manual attendance systems are slow, difficult to audit, and vulnerable to inaccurate attendance records. The challenge was creating a system that could verify whether a student should actually be allowed to attend a class based on enrollment, course duration, class schedule, session timing, and other attendance rules before recording attendance.",
    features: [
      "Admin, Manager, and Student role-based experiences",
      "Dynamic QR-code attendance workflow",
      "Schedule-aware attendance validation",
      "Session-based attendance rules",
      "Automatic absence handling for scheduled sessions",
      "Course and student enrollment management",
      "Course schedule management",
      "Student attendance history",
      "Manager-facing QR display and live attendance monitoring",
      "Administrator attendance review workflows",
      "Course-duration validation",
      "JWT authentication and role-based access control",
      "Payment-based enrollment access rules",
      "Responsive desktop and mobile interfaces",
    ],
    challenges: [
      "Preventing students from recording attendance when they do not have a scheduled class",
      "Handling multiple class sessions and timing rules correctly",
      "Keeping attendance records restricted to the correct student and enrollment",
      "Automatically determining absence for scheduled sessions",
      "Coordinating enrollment, schedules, course duration, payment status, and attendance validation",
      "Supporting real-time attendance behavior without breaking existing attendance rules",
    ],
    solutions: [
      "Created centralized attendance validation rules on the backend",
      "Implemented dynamic QR-based check-in instead of static attendance codes",
      "Used JWT authentication and RBAC to restrict each role to its permitted workflows",
      "Connected attendance checks to schedules, sessions, enrollments, and course duration",
      "Implemented automatic absence handling for scheduled sessions",
      "Used Socket.IO for real-time attendance-related updates where required",
      "Used MySQL relational data structures to connect students, courses, schedules, enrollments, and attendance records",
    ],
    impact:
      "Delivered an end-to-end attendance platform that automates attendance capture and validation while giving administrators, managers, and students dedicated tools for managing courses, schedules, enrollments, attendance records, and history.",
    lessons:
      "Attendance automation is primarily a business-rules problem rather than simply a QR-code problem. Reliable attendance requires combining authentication, enrollment state, schedules, session timing, course duration, and authorization before accepting a check-in.",
    githubUrl: "https://github.com/johnagwomazi/ATTENDANCE-SYSTEM",
    liveDemoUrl: "https://attendance-live.onrender.com",
    architecture: [
      "React Application",
      "Zustand State Layer",
      "REST API",
      "Socket.IO",
      "Express Backend",
      "Attendance Validation Layer",
      "MySQL",
      "Role-Based Interfaces",
    ],
    screenshots: [
      {
        label: "Login",
        image: "/attendance_login.png",
      },
      {
        label: "Student Dashboard",
        image: "/attendance_student_dashboard.png",
      },
      {
        label: "QR Check-In",
        image: "/attendance_student_qr_checkin.png",
      },
      {
        label: "Attendance History",
        image: "/attendance_student_history.png",
      },
      {
        label: "Admin Dashboard",
        image: "/attendance_admin_dashboard.png",
      },
      {
        label: "Students Management",
        image: "/attendance_admin_students.png",
      },
      {
        label: "Live Attendance Feed",
        image: "/attendance_admin_live_attendance.png",
      },
      {
        label: "Course Management",
        image: "/attendance_admin_courses.png",
      },
    ],
  },
  {
    slug: "nezbo-real-estate-platform",
    title: "Nezbo Lite",
    category: "Real Estate Property Discovery Platform",
    image: "/nobzo_lite_feed.png",
    description:
      "A responsive real-estate property discovery application built with React and TypeScript, allowing users to browse properties, search listings, filter properties by location and listing type, and view detailed property information.",
    heroSummary:
      "Built as a responsive property-discovery experience focused on structured property browsing, filtering, reusable frontend architecture, and clean application state management.",
    coverClass:
      "bg-[radial-gradient(circle_at_top_right,rgba(255,92,147,0.18),transparent_50%),radial-gradient(circle_at_bottom_left,rgba(231,0,86,0.16),transparent_55%)]",
    coverCaption: "Responsive real-estate discovery experience",
    technologies: [
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "React Router DOM",
      "Lucide React",
    ],
    problemStatement:
      "Property platforms need to make large numbers of listings easy to explore without overwhelming users. The challenge was designing a responsive interface where property discovery, filtering, search, navigation, and detailed listing information could work together cleanly across desktop and mobile devices.",
    features: [
      "Responsive property browsing interface",
      "Property search functionality",
      "Filtering by location",
      "Filtering by listing type",
      "Detailed property pages",
      "Centralized Zustand state management",
      "TypeScript-based component and data structures",
      "Responsive navigation",
      "Reusable property components",
      "Mobile-friendly property discovery experience",
    ],
    challenges: [
      "Managing property and interface state across multiple pages",
      "Keeping filters and property results synchronized",
      "Creating reusable components for different property layouts",
      "Maintaining consistent TypeScript data structures across the application",
      "Building responsive property layouts that remain usable on smaller screens",
    ],
    solutions: [
      "Used Zustand to centralize property, authentication, and interface state",
      "Used TypeScript to improve consistency across application data and component props",
      "Implemented reusable property and layout components",
      "Used React Router DOM for structured navigation and detailed property routes",
      "Built responsive layouts with Tailwind CSS for desktop, tablet, and mobile experiences",
    ],
    impact:
      "Delivered a production-deployed real-estate frontend demonstrating responsive UI development, TypeScript application architecture, state management, routing, filtering, search, and property discovery workflows.",
    lessons:
      "Building property-discovery applications requires balancing visual presentation with structured application state, reusable components, filtering behavior, responsive design, and predictable navigation.",
    githubUrl: "https://github.com/johnagwomazi/NEZBO",
    liveDemoUrl: "https://nezbolite-sigma.vercel.app/",
    architecture: [
      "React Application",
      "TypeScript",
      "Zustand State Layer",
      "React Router",
      "Property Data Layer",
      "Responsive UI",
    ],
    screenshots: [
      {
        label: "Property Marketplace",
        image: "/nobzo_lite_feed.png",
      },
      {
        label: "Admin Dashboard",
        image: "/nobzo_lite_admin_dashboard.png",
      },
      {
        label: "Authentication",
        image: "/nobzo_lite_login.png",
      },
      {
        label: "Property Details",
        image: "/nobzo_lite_property_details.png",
      },
      {
        label: "Property Engagement & Comments",
        image: "/nobzo_lite_property_comments.png",
      },
    ],
  },

  {
  slug: "novashop-commerce",
  title: "NovaShop",
  category: "Full-Stack MERN E-Commerce Platform",
  image: "/E1.jpg",
  description:
    "A production-grade MERN e-commerce platform featuring secure authentication, product management, cart functionality, coupon support, Paystack payments, order processing, and role-based administration.",

  heroSummary:
    "Built as a complete commerce ecosystem with customer, manager, and admin workflows from product discovery to payment verification and fulfillment.",

  coverClass:
    "bg-[radial-gradient(circle_at_top,rgba(231,0,86,0.18),transparent_45%),radial-gradient(circle_at_bottom,rgba(255,92,147,0.16),transparent_55%)]",

  coverCaption: "Production-ready MERN commerce platform",

  technologies: [
    "React 18",
    "Vite",
    "Tailwind CSS",
    "Zustand",
    "React Router",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Mongoose",
    "JWT",
    "Paystack",
    "Axios",
  ],

  problemStatement:
    "Modern online stores require more than product listings. The challenge was building a scalable commerce platform that could securely handle authentication, product management, payment processing, order workflows, customer accounts, and administrative operations within a single application.",

  features: [
    "Complete storefront with product discovery and detailed product pages",
    "JWT-based authentication and role-based access control",
    "Persistent shopping cart and checkout workflow",
    "Paystack payment integration with backend payment verification",
    "Coupon validation and discount management system",
    "Customer order history and account dashboard",
    "Admin and manager dashboards with protected routes",
    "Product approval and moderation workflow",
    "Sales analytics and business reporting dashboard",
    "User management, settings management, and order monitoring",
  ],

  challenges: [
    "Coordinating complex state across authentication, products, cart, orders, analytics, and administration",
    "Securing payment flows while maintaining a smooth checkout experience",
    "Implementing role-based access control across frontend and backend",
    "Designing scalable API architecture for commerce operations",
    "Managing multiple order states and administrative workflows",
  ],

  solutions: [
    "Implemented centralized state management using Zustand for predictable data flow",
    "Built secure JWT authentication with protected routes and role-based authorization",
    "Designed a layered backend architecture using controllers, services, middleware, and Mongoose models",
    "Integrated Paystack checkout with server-side payment verification",
    "Created dedicated admin workflows for product approval, analytics, and user management",
  ],

  impact:
    "Delivered a complete end-to-end e-commerce platform supporting customer purchases, secure payments, product moderation, business analytics, and administrative operations through a scalable MERN architecture.",

  lessons:
    "Building production commerce systems requires balancing user experience, security, scalability, and business operations rather than focusing solely on storefront design.",

  githubUrl: "https://github.com/johnagwomazi/MERN-E-Commerce",
  liveDemoUrl: "https://novastore-frontend.onrender.com/",

  architecture: [
    "React SPA",
    "Zustand State Layer",
    "REST API",
    "Express Services",
    "MongoDB",
    "Paystack",
    "Admin Dashboard",
  ],

  screenshots: [
    {
      label: "Storefront & Product Discovery",
      image: "/E5.jpg",
    },
    {
      label: "Product Details",
      image: "/E4.jpg",
    },
    {
      label: "Signin",
      image: "/E2.jpg",
    },
    {
      label: "Analytics Dashboard",
      image: "/E3.jpg",
    },
  ],
}

];

export default projects;
