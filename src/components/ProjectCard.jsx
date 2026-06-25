import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";

// Convert motion.article into a motion-wrapped router link for clean semantics
const MotionLink = motion(Link);

export default function ProjectCard({ project }) {
  return (
    <MotionLink
      to={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-colors duration-300 hover:bg-white/[0.06] will-change-transform block"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
    >
      {/* Project Image Container */}
      <div className="relative h-[220px] overflow-hidden sm:h-[260px]">
        <img
          src={project.image}
          alt={`Screenshot preview of ${project.title}`}
          loading="lazy"
          className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105"
        />

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D1117] via-[#0D1117]/30 to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-white/10 bg-[#0D1117]/80 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <h3 className="text-xl font-semibold text-white transition-colors duration-200 group-hover:text-[#00F5D4]">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-white/70">
          {project.description}
        </p>

        {/* Technologies List */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-white/80"
            >
              {tech}
            </span>
          ))}
        </div>

      </div>
    </MotionLink>
  );
}
