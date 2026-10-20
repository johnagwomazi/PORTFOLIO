import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-[#27272A] bg-[#111113] shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-colors duration-300 hover:bg-[#18181B] will-change-transform block"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
    >
      {/* Project Image Container */}
      <div className="relative h-[220px] overflow-hidden sm:h-[260px]">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot preview of ${project.title}`}
            loading="lazy"
            className="h-full w-full object-contain transition duration-700 ease-out group-hover:scale-105"
          />
        ) : (
          <div className={`flex h-full w-full items-end p-5 ${project.coverClass}`}>
            <span className="text-left text-sm font-semibold text-[#FAFAFA]">
              {project.coverCaption}
            </span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090B] via-[#09090B]/30 to-transparent" />

        <div className="absolute left-4 top-4">
          <span className="rounded-full border border-[#27272A] bg-[#111113]/90 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#FAFAFA]">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-1 flex-col p-5 text-center sm:p-6">
        <h3 className="text-xl font-semibold text-[#FAFAFA] transition-colors duration-200 group-hover:text-[#FF5C93]">
          {project.title}
        </h3>

        <p className="mt-3 text-sm leading-7 text-[#A1A1AA]">
          {project.description}
        </p>

        {/* Technologies List */}
        <div className="mt-5 flex flex-wrap justify-center gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-[#27272A] bg-[#18181B] px-3 py-1 text-xs font-medium text-[#FAFAFA]"
            >
              {tech}
            </span>
          ))}
          </div>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-2 border-t border-[#27272A] pt-5">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#E70056] to-[#FF5C93] px-4 py-2 text-xs font-semibold text-[#FAFAFA] transition hover:-translate-y-0.5"
          >
            View Details
          </Link>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#27272A] bg-[#18181B] px-4 py-2 text-xs font-semibold text-[#FAFAFA] transition hover:-translate-y-0.5 hover:bg-[#27272A]"
            >
              GitHub
            </a>
          ) : null}

          {project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#27272A] bg-[#18181B] px-4 py-2 text-xs font-semibold text-[#FAFAFA] transition hover:-translate-y-0.5 hover:bg-[#27272A]"
            >
              Live Demo
            </a>
          ) : null}
        </div>

      </div>
    </motion.article>
  );
}
