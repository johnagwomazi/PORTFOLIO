import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <motion.article
      className="group flex h-full min-w-0 max-w-full flex-col overflow-hidden rounded-[1.75rem] border border-[#27272A] bg-[#111113] shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-colors duration-300 hover:bg-[#18181B] will-change-transform block"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 220, damping: 24 }}
    >
      {/* Project Image Container */}
      <div className="relative aspect-[6/5] shrink-0 overflow-hidden sm:aspect-auto sm:h-[260px]">
        {project.image ? (
          <img
            src={project.image}
            alt={`Screenshot preview of ${project.title}`}
            loading="lazy"
            className="h-full w-full object-cover object-top transition duration-700 sm:object-contain sm:object-center ease-out group-hover:scale-105"
          />
        ) : (
          <div className={`flex h-full w-full items-end p-5 ${project.coverClass}`}>
            <span className="text-left text-sm font-semibold text-[#FAFAFA]">
              {project.coverCaption}
            </span>
          </div>
        )}

        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#09090B]/45 via-transparent to-transparent sm:from-[#09090B] sm:via-[#09090B]/30 sm:to-transparent" />

        <div className="absolute left-3 top-3 max-w-[75%] sm:left-4 sm:top-4 sm:max-w-none">
          <span className="line-clamp-2 rounded-xl border border-[#27272A] bg-[#111113]/90 px-2 py-1 text-[9px] leading-3 font-semibold uppercase tracking-[0.04em] sm:inline sm:rounded-full sm:px-3 sm:py-1.5 sm:text-xs sm:leading-4 sm:tracking-wider text-[#FAFAFA]">
            {project.category}
          </span>
        </div>
      </div>

      {/* Card Content */}
      <div className="flex min-w-0 flex-1 flex-col p-4 text-center sm:p-6">
        <h3 className="text-lg leading-6 font-semibold sm:text-xl sm:leading-7 text-[#FAFAFA] transition-colors duration-200 group-hover:text-[#FF5C93]">
          {project.title}
        </h3>

        <p className="mt-2 line-clamp-2 text-xs leading-5 sm:mt-3 sm:line-clamp-none sm:text-sm sm:leading-7 text-[#A1A1AA]">
          {project.description}
        </p>

        {/* Technologies List */}
        <div className="mt-3 flex min-w-0 flex-wrap justify-center gap-1 sm:mt-5 sm:gap-2">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="max-w-full break-words rounded-full border border-[#27272A] bg-[#18181B] px-2 py-0.5 text-[10px] font-medium sm:px-3 sm:py-1 sm:text-xs text-[#FAFAFA]"
            >
              {tech}
            </span>
          ))}
          </div>

        <div className="mt-3 flex min-w-0 flex-wrap items-center justify-center gap-2 border-t border-[#27272A] pt-3 sm:mt-6 sm:pt-5">
          <Link
            to={`/projects/${project.slug}`}
            className="inline-flex min-h-11 max-w-full items-center justify-center rounded-full sm:min-h-0 bg-gradient-to-r from-[#E70056] to-[#FF5C93] px-3 py-2 text-xs font-semibold sm:px-4 text-[#FAFAFA] transition hover:-translate-y-0.5"
          >
            View Details
          </Link>

          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 max-w-full items-center justify-center rounded-full sm:min-h-0 border border-[#27272A] bg-[#18181B] px-3 py-2 text-xs font-semibold sm:px-4 text-[#FAFAFA] transition hover:-translate-y-0.5 hover:bg-[#27272A]"
            >
              GitHub
            </a>
          ) : null}

          {project.liveDemoUrl ? (
            <a
              href={project.liveDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 max-w-full items-center justify-center rounded-full sm:min-h-0 border border-[#27272A] bg-[#18181B] px-3 py-2 text-xs font-semibold sm:px-4 text-[#FAFAFA] transition hover:-translate-y-0.5 hover:bg-[#27272A]"
            >
              Live Demo
            </a>
          ) : null}
        </div>

      </div>
    </motion.article>
  );
}
