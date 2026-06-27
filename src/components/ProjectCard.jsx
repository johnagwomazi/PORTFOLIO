import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

// Convert motion.article into a motion-wrapped router link for clean semantics
const MotionLink = motion(Link);

export default function ProjectCard({ project }) {
  return (
    <MotionLink
      to={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#27272A] bg-[#111113] shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-colors duration-300 hover:bg-[#18181B] will-change-transform block"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
    >
      {/* Project Image Container */}
      <div className="relative h-[220px] overflow-hidden sm:h-[260px]">
        <img
          src={project.image}
          alt={`Screenshot preview of ${project.title}`}
          loading="lazy"
          className="h-full w-full object-fill transition duration-700 ease-out group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/30 to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-[#27272A] bg-[#111113]/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FAFAFA]">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold text-[#FAFAFA] transition-colors duration-200 group-hover:text-[#FF5C93]">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#A1A1AA]">
          {project.description}
        </p>

        {/* Technologies List */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#27272A] bg-[#18181B] px-3 py-1 text-xs font-medium text-[#FAFAFA]"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </MotionLink>
  );
}
