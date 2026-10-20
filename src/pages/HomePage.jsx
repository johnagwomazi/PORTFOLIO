import projects, { stackGroups } from "../data/projects";
import { useEffect, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import SkillGroup from "../components/SkillGroup";
import { HiOutlineMail } from "react-icons/hi";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const experiences = [
  {
    role: "Frontend Engineer Intern",
    company: "NOBZO Verse",
    location: "Remote",
    period: "July 2026 – Present",
    summary:
      "Contribute frontend features to a professional Next.js and TypeScript codebase while working within an established architecture, design system, and Git-based team workflow.",
    points: [
      "Build responsive customer-facing and internal interfaces using Next.js and TypeScript.",
      "Translate approved designs and product requirements into responsive desktop, tablet, and mobile experiences.",
      "Work with reusable components and existing project architecture rather than rebuilding established patterns.",
      "Implement frontend validation, API integration, navigation, property-request workflows, FAQ/legal interfaces, and administrative interfaces.",
      "Collaborate through feature branches, pull requests, staging workflows, debugging, testing, and scoped implementation.",
    ],
    technologies: ["Next.js", "TypeScript", "React", "Git", "REST APIs"],
  },
  {
    role: "Full-Stack Web Development Intern",
    company: "Team Oreo",
    location: "Remote",
    period: "September 2026 – Present",
    summary:
      "Contribute across frontend and backend development while collaborating with a development team on real production-oriented web projects.",
    points: [
      "Work across frontend and backend implementation inside existing codebases.",
      "Participate in task coordination, implementation, code review, and integration.",
      "Contributed to the redesign of the Team Oreo Careers page within an existing Laravel Blade, PHP, and JavaScript application.",
      "Translate design references into responsive interfaces while preserving existing product architecture and brand identity.",
      "Collaborate with frontend and backend developers using Git-based workflows.",
    ],
    technologies: ["JavaScript", "React / Next.js", "Node.js", "Git", "Responsive Web Development"],
  },
  {
    role: "Frontend Development Instructor / Tutor",
    company: "New Horizons",
    location: "Lagos, Nigeria",
    period: "July 2026 – September 2026",
    summary:
      "Taught practical frontend web development while mentoring learners through JavaScript, React, responsive interfaces, debugging, and project implementation.",
    points: [
      "Taught HTML, CSS, JavaScript, React, JSX, components, routing, hooks, state, DOM/events, and API consumption.",
      "Designed practical coding exercises and project-led lessons.",
      "Helped students debug syntax, component logic, routing, state, styling, and data-flow problems.",
      "Encouraged readable code, reusable components, responsive interfaces, and independent problem solving.",
    ],
    technologies: ["HTML", "CSS", "JavaScript", "React"],
  },
];

const education = [
  ["University of Lagos", "Bachelor of Science (B.Sc.) — Sociology", "2018 – 2024"],
  ["New Horizons, Lagos", "Frontend Web Development", "2025"],
  ["New Horizons, Lagos", "Backend Web Development", "2026"],
];

export default function HomePage() {
  const featuredProjects = projects.slice(0, 4);
  const experienceViewportRef = useRef(null);
  const experienceTrackRef = useRef(null);
  const experienceDragRef = useRef({
    pointerId: null,
    startX: 0,
    startY: 0,
    axis: null,
  });
  const experienceAnimatingRef = useRef(false);
  const suppressExperienceClickRef = useRef(false);
  const [currentExperienceIndex, setCurrentExperienceIndex] = useState(experiences.length);
  const [visibleExperienceCards, setVisibleExperienceCards] = useState(1);
  const [experienceOffset, setExperienceOffset] = useState(0);
  const [experienceDragOffset, setExperienceDragOffset] = useState(0);
  const [isExperienceDragging, setIsExperienceDragging] = useState(false);
  const [experienceTransitionEnabled, setExperienceTransitionEnabled] = useState(true);

  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  useEffect(() => {
    const updateVisibleCards = () => {
      const nextVisibleCards = window.innerWidth >= 1024
        ? 3
        : window.innerWidth >= 768
          ? 2
          : 1;

      setVisibleExperienceCards(Math.min(nextVisibleCards, experiences.length));
      experienceAnimatingRef.current = false;
      setExperienceDragOffset(0);
      setExperienceTransitionEnabled(false);
      setCurrentExperienceIndex(experiences.length);
      requestAnimationFrame(() => setExperienceTransitionEnabled(true));
    };

    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    return () => {
      window.removeEventListener("resize", updateVisibleCards);
    };
  }, []);

  useEffect(() => {
    const updateExperienceOffset = () => {
      const firstCard = experienceTrackRef.current?.firstElementChild;
      if (!firstCard) return;

      setExperienceOffset(currentExperienceIndex * (firstCard.getBoundingClientRect().width + 20));
    };

    updateExperienceOffset();
    window.addEventListener("resize", updateExperienceOffset);

    return () => window.removeEventListener("resize", updateExperienceOffset);
  }, [currentExperienceIndex, visibleExperienceCards]);

  const moveExperience = (direction) => {
    if (experienceAnimatingRef.current) return;
    experienceAnimatingRef.current = true;
    setExperienceDragOffset(0);
    setExperienceTransitionEnabled(true);
    setCurrentExperienceIndex((index) => index + direction);
  };

  const handleExperienceKeyDown = (event) => {
    if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
    if (event.target.closest("a, button, input, textarea, select")) return;
    event.preventDefault();
    moveExperience(event.key === "ArrowLeft" ? -1 : 1);
  };

  const handleExperiencePointerDown = (event) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    if (event.target.closest("a, button, input, textarea, select")) return;

    experienceDragRef.current = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      axis: null,
    };
    setExperienceDragOffset(0);
    experienceViewportRef.current?.setPointerCapture(event.pointerId);
  };

  const handleExperiencePointerMove = (event) => {
    const drag = experienceDragRef.current;
    if (drag.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - drag.startX;
    const deltaY = event.clientY - drag.startY;

    if (!drag.axis && Math.max(Math.abs(deltaX), Math.abs(deltaY)) > 6) {
      drag.axis = Math.abs(deltaX) > Math.abs(deltaY) ? "horizontal" : "vertical";
    }

    if (drag.axis !== "horizontal") return;

    event.preventDefault();
    if (!isExperienceDragging) setIsExperienceDragging(true);
    setExperienceDragOffset(deltaX);
  };

  const finishExperiencePointer = (event) => {
    const drag = experienceDragRef.current;
    if (drag.pointerId !== event.pointerId) return;

    const deltaX = event.clientX - drag.startX;
    const wasHorizontalDrag = drag.axis === "horizontal";
    const swipeThreshold = Math.max(45, (experienceTrackRef.current?.firstElementChild?.getBoundingClientRect().width ?? 280) * 0.15);

    if (wasHorizontalDrag) {
      suppressExperienceClickRef.current = true;
      if (Math.abs(deltaX) >= swipeThreshold) {
        moveExperience(deltaX < 0 ? 1 : -1);
      } else {
        setExperienceDragOffset(0);
      }
    }

    setIsExperienceDragging(false);
    experienceDragRef.current = { pointerId: null, startX: 0, startY: 0, axis: null };
    if (experienceViewportRef.current?.hasPointerCapture(event.pointerId)) {
      experienceViewportRef.current.releasePointerCapture(event.pointerId);
    }
  };

  const handleExperienceTransitionEnd = (event) => {
    if (event.propertyName !== "transform") return;

    const projectCount = experiences.length;
    if (currentExperienceIndex <= 0 || currentExperienceIndex >= projectCount * 2) {
      setExperienceTransitionEnabled(false);
      setCurrentExperienceIndex(projectCount);
      requestAnimationFrame(() => setExperienceTransitionEnabled(true));
    }

    experienceAnimatingRef.current = false;
  };

  const experienceSlides = [...experiences, ...experiences, ...experiences];

  return (
    <>
      <Navbar />

      <main className="pb-16 text-[#FAFAFA]">
        <Hero onWorkClick={scrollToProjects} />

        {/* PROJECTS */}
        <section
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
          id="projects"
        >
          <SectionHeading
            eyebrow="Featured Projects"
            title="My Work"
            align="center"
          />

          <div className="mt-10 grid grid-cols-1 justify-items-center gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
          id="experience"
        >
          <div className="relative">
            <SectionHeading
              eyebrow="Professional Experience"
              title="How I contribute to teams"
              align="center"
            />

            <div className="mt-6 flex justify-center gap-2 lg:absolute lg:right-0 lg:top-0 lg:mt-0">
              <button
                type="button"
                aria-label="Previous experience"
                onClick={() => moveExperience(-1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-[#27272A] bg-[#111113] text-[#FAFAFA] transition hover:-translate-y-0.5 hover:bg-[#18181B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C93] disabled:cursor-not-allowed disabled:opacity-35"
              >
                <FiChevronLeft aria-hidden="true" />
              </button>
              <button
                type="button"
                aria-label="Next experience"
                onClick={() => moveExperience(1)}
                className="grid h-10 w-10 place-items-center rounded-full border border-[#27272A] bg-[#111113] text-[#FAFAFA] transition hover:-translate-y-0.5 hover:bg-[#18181B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C93] disabled:cursor-not-allowed disabled:opacity-35"
              >
                <FiChevronRight aria-hidden="true" />
              </button>
            </div>
          </div>

          <div
            ref={experienceViewportRef}
            tabIndex={0}
            onKeyDown={handleExperienceKeyDown}
            onPointerDown={handleExperiencePointerDown}
            onPointerMove={handleExperiencePointerMove}
            onPointerUp={finishExperiencePointer}
            onPointerCancel={finishExperiencePointer}
            onClickCapture={(event) => {
              if (!suppressExperienceClickRef.current) return;
              event.preventDefault();
              event.stopPropagation();
              suppressExperienceClickRef.current = false;
            }}
            aria-label="Professional experience slider"
            className={`mt-10 min-w-0 overflow-hidden pb-3 touch-pan-y focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5C93] ${isExperienceDragging ? "cursor-grabbing select-none" : "cursor-grab"}`}
          >
            <div
              ref={experienceTrackRef}
              onTransitionEnd={handleExperienceTransitionEnd}
              className={`flex min-w-0 items-stretch gap-5 ${experienceTransitionEnabled ? "transition-transform duration-300 ease-out" : "transition-none"}`}
              style={{
                transform: `translateX(${-(experienceOffset) + experienceDragOffset}px)`,
              }}
            >
              {experienceSlides.map((experience, index) => (
                <article
                  key={`${experience.company}-${experience.role}-${index}`}
                  className="flex h-full min-w-0 w-full shrink-0 flex-col rounded-2xl border border-[#27272A] bg-[#111113] p-6 shadow-[0_0_60px_rgba(231,0,86,0.08)] transition duration-300 hover:-translate-y-1 hover:border-[#E70056]/30 md:w-[calc((100%-1.25rem)/2)] lg:w-[calc((100%-2.5rem)/3)]"
                >
                <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-[#FAFAFA]">{experience.role}</h3>
                    <p className="mt-1 text-sm font-medium text-[#FF5C93]">{experience.company}</p>
                  </div>
                  <span className="text-xs text-[#A1A1AA] sm:text-right">{experience.period}</span>
                </div>
                <p className="mt-1 text-xs uppercase tracking-[0.16em] text-[#71717A]">{experience.location}</p>
                <p className="mt-4 text-sm leading-7 text-[#A1A1AA]">{experience.summary}</p>
                <ul className="mt-4 space-y-2 pl-5 text-sm leading-6 text-[#A1A1AA]">
                  {experience.points.map((point) => <li key={point} className="list-disc">{point}</li>)}
                </ul>
                <div className="mt-auto flex flex-wrap gap-2 pt-5">
                  {experience.technologies.map((technology) => (
                    <span key={technology} className="rounded-full border border-[#27272A] bg-[#18181B] px-3 py-1 text-xs text-[#FAFAFA]">
                      {technology}
                    </span>
                  ))}
                </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
          id="skills"
        >
          <SectionHeading
            eyebrow="Tech Stack"
            title="My Development Toolkit"
            align="center"
          />

          <div className="mt-10 grid gap-6">
            {stackGroups.map((group) => (
              <SkillGroup
                key={group.title}
                title={group.title}
                items={group.items}
              />
            ))}
          </div>
        </section>

        {/* EDUCATION */}
        <section
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
          id="education"
        >
          <SectionHeading
            eyebrow="Education & Certifications"
            title="Learning that supports the work"
            align="center"
          />

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {education.map(([institution, qualification, period]) => (
              <article key={`${institution}-${qualification}`} className="rounded-2xl border border-[#27272A] bg-[#111113] p-6 text-center shadow-[0_0_60px_rgba(231,0,86,0.08)]">
                <h3 className="text-lg font-semibold text-[#FAFAFA]">{institution}</h3>
                <p className="mt-3 text-sm leading-7 text-[#A1A1AA]">{qualification}</p>
                <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#FF5C93]">{period}</p>
              </article>
            ))}
          </div>
        </section>

        {/* SERVICES */}
        <section
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
          id="about"
        >
          <SectionHeading
            eyebrow="Services"
            title="Bringing your ideas to life"
            description="I help businesses and startups transform ideas into reliable digital products through thoughtful design, scalable engineering, and modern web technologies."
            align="center"
          />

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              [
                "Custom Web Applications",
                "Developing tailored web applications that streamline operations, solve business challenges, and deliver exceptional user experiences."
              ],
              [
                "API & Backend Engineering",
                "Building secure and scalable backend systems, authentication workflows, and RESTful APIs that power modern applications."
              ],
              [
                "Database & System Architecture",
                "Designing maintainable data structures and application architectures that support growth, performance, and long-term reliability."
              ],
            ].map(([title, copy]) => (
              <div
                key={title}
                className="rounded-2xl border border-[#27272A] bg-[#111113] p-6 text-center backdrop-blur-xl shadow-[0_0_60px_rgba(231,0,86,0.08)] transition duration-300 hover:border-[#E70056]/30 hover:-translate-y-1"
              >
                <h3 className="text-lg font-semibold text-[#FAFAFA]">
                  {title}
                </h3>

                <p className="mt-3 text-sm leading-7 text-[#A1A1AA]">
                  {copy}
                </p>
              </div>
            ))}
          </div>
          </section>


        {/* CONTACT */}
        <section
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
          id="contact"
        >
          <SectionHeading
            eyebrow="Contact"
            title="Let’s build something fast, useful, and production-ready."
            description="Open to internships, freelance work, and full-time roles in teams building SaaS products, dashboards, or scalable platforms."
            align="center"
          />

          <div className="mt-8 flex flex-col justify-center gap-3 rounded-2xl md:border border-[#27272A] md:bg-[#111113] p-5 backdrop-blur-xl sm:flex-row">
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=johnagwomazi@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E70056] to-[#FF5C93] px-6 py-3 font-semibold text-[#FAFAFA]"
          >
            <HiOutlineMail className="text-xl" />
            <span>Start a Conversation</span>
          </a>

            <a
              className="inline-flex items-center justify-center rounded-full border border-[#27272A] bg-[#18181B] px-6 py-3 font-semibold text-[#FAFAFA] transition hover:-translate-y-0.5 hover:bg-[#27272A]"
              href="https://github.com/johnagwomazi"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a
              className="inline-flex items-center justify-center rounded-full border border-[#27272A] bg-[#18181B] px-6 py-3 font-semibold text-[#FAFAFA] transition hover:-translate-y-0.5 hover:bg-[#27272A]"
              href="https://www.linkedin.com/in/agwom-azi-john-51b41b247"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <a
            href="mailto:johnagwomazi@gmail.com"
            className="mt-5 block text-center text-sm font-semibold text-[#FF5C93] underline-offset-4 transition hover:underline"
          >
            johnagwomazi@gmail.com
          </a>
        </section>
      </main>

      <Footer />
    </>
  );
}
