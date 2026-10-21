import { useMemo } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowLeftLong, FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";
import projects from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import SectionHeading from "../components/SectionHeading";
import Gallery from "../components/Gallery";

function DetailBlock({ title, children }) {
  return (
    <motion.section
      className="min-w-0 rounded-[1.5rem] border border-[#27272A] bg-[#111113] p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="mb-3 text-base font-semibold sm:mb-4 sm:text-lg text-[#FAFAFA]">{title}</h3>
      <div className="min-w-0 break-words text-sm leading-6 text-[#A1A1AA] sm:text-base sm:leading-6">{children}</div>
    </motion.section>
  );
}

export default function ProjectDetailsPage() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = useMemo(() => projects.find((item) => item.slug === slug), [slug]);

  if (!project) {
    return (
      <>
        <Navbar />
        <main className="mx-auto grid min-h-[70vh]  max-w-7xl place-items-center px-4 py-16 sm:px-6 lg:px-8">
          <div className="text-center">
            <SectionHeading
              eyebrow="Project not found"
              title="This project does not exist."
              description="Return to the portfolio and choose a featured case study."
              align="center"
            />
            <button
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#E70056] to-[#FF5C93] px-4 py-3 font-semibold sm:px-6 text-[#FAFAFA] transition hover:-translate-y-0.5"
              onClick={() => navigate("/")}
            >
              Back Home
            </button>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="mx-auto min-w-0 max-w-7xl px-4 py-5 sm:px-6 sm:py-8 lg:px-8 lg:py-12">
        <motion.section
          className="min-w-0 rounded-[2rem] border border-[#27272A] bg-[#111113]/85 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <button
            className="mb-3 inline-flex min-h-11 items-center sm:mb-5 sm:min-h-0 gap-2 text-sm font-semibold text-[#FF5C93] transition hover:translate-x-0.5"
            onClick={() => navigate("/")}
          >
            <FaArrowLeftLong /> Back To Projects
          </button>

          <div className={`aspect-[4/3] overflow-hidden rounded-[1.75rem] border sm:aspect-auto border-[#27272A] ${project.image ? "" : project.coverClass}`}>
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="h-full max-h-[34rem] w-full object-cover object-top sm:object-contain sm:object-center"
              />
            ) : (
              <div className="flex min-h-full flex-col justify-end p-4 sm:min-h-[24rem] sm:p-8">
                <span className="block sm:inline text-[10px] leading-4 font-extrabold uppercase tracking-[0.12em] sm:text-xs sm:leading-4 sm:tracking-[0.22em] text-[#FF5C93]">
                  {project.category}
                </span>
                <h1 className="mt-3 font-display text-[1.75rem] leading-tight font-bold sm:mt-4 sm:leading-none tracking-[-0.04em] text-[#FAFAFA] sm:text-5xl lg:text-6xl">
                  {project.title}
                </h1>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-[#A1A1AA] sm:mt-4 sm:text-lg sm:leading-7">
                  {project.heroSummary}
                </p>
              </div>
            )}
          </div>

          {project.image ? (
            <div className="mt-4 min-w-0 sm:mt-6">
              <span className="block sm:inline text-[10px] leading-4 font-extrabold uppercase tracking-[0.12em] sm:text-xs sm:leading-4 sm:tracking-[0.22em] text-[#FF5C93]">
                {project.category}
              </span>
              <h1 className="mt-3 font-display text-[1.75rem] leading-tight font-bold sm:leading-none tracking-[-0.04em] text-[#FAFAFA] sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-3 max-w-3xl text-sm leading-6 text-[#A1A1AA] sm:mt-4 sm:text-lg sm:leading-7">
                {project.heroSummary}
              </p>
            </div>
          ) : null}

          <div className="mt-4 flex min-w-0 flex-wrap gap-1.5 sm:mt-6 sm:gap-2">
            {project.technologies.map((tech) => (
              <span key={tech} className="max-w-full break-words rounded-full border border-[#27272A] bg-[#18181B] px-2 py-1 text-[10px] sm:px-3 sm:py-2 sm:text-xs text-[#FAFAFA]">
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

          <div className="mt-3 flex min-w-0 flex-wrap gap-2 py-2 text-sm sm:mt-4 sm:gap-3 sm:text-base">
            {project.githubUrl ? (
              <a className="inline-flex min-h-11 max-w-full flex-1 items-center justify-center gap-2 rounded-full sm:min-h-0 sm:flex-none bg-gradient-to-r from-[#E70056] to-[#FF5C93] px-4 py-3 font-semibold sm:px-6 text-[#FAFAFA] transition hover:-translate-y-0.5" href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <FaGithub /> GitHub Link
              </a>
            ) : null}
            {project.liveDemoUrl ? (
              <a className="inline-flex min-h-11 max-w-full flex-1 items-center justify-center gap-2 rounded-full sm:min-h-0 sm:flex-none border border-[#27272A] bg-[#111113] px-4 py-3 font-semibold sm:px-6 text-[#FAFAFA] transition hover:-translate-y-0.5 hover:bg-[#18181B]" href={project.liveDemoUrl} target="_blank" rel="noopener noreferrer">
                <FaArrowUpRightFromSquare /> Live Demo
              </a>
            ) : null}
          </div>

        <section className="mt-4 grid gap-4">
          <DetailBlock title="Overview">
            <p>{project.description}</p>
          </DetailBlock>
          <DetailBlock title="Problem Statement">
            <p>{project.problemStatement}</p>
          </DetailBlock>
          <DetailBlock title="Features">
            <ul className="space-y-2 pl-5">
              {project.features.map((item) => (
                <li key={item} className="list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </DetailBlock>
          <DetailBlock title="Tech Stack">
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="max-w-full break-words rounded-full border border-[#27272A] bg-[#18181B] px-2 py-1 text-[10px] sm:px-3 sm:py-2 sm:text-xs text-[#FAFAFA]">
                  {tech}
                </span>
              ))}
            </div>
          </DetailBlock>
          <DetailBlock title="Challenges Faced">
            <ul className="space-y-2 pl-5">
              {project.challenges.map((item) => (
                <li key={item} className="list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </DetailBlock>
          <DetailBlock title="Solutions Implemented">
            <ul className="space-y-2 pl-5">
              {project.solutions.map((item) => (
                <li key={item} className="list-disc">
                  {item}
                </li>
              ))}
            </ul>
          </DetailBlock>
          <DetailBlock title="Real World Impact">
            <p>{project.impact}</p>
          </DetailBlock>
          <DetailBlock title="Architecture Diagram">
            <div className="flex flex-wrap items-center gap-3 overflow-x-auto pb-1">
              {project.architecture.map((node, index) => (
                <div key={node} className="flex min-w-0 max-w-full items-center gap-3">
                  <div className="min-w-0 flex-1 break-words rounded-2xl sm:min-w-[140px] sm:flex-none border border-[#27272A] bg-[#111113] px-4 py-3 text-center text-sm font-medium text-[#FAFAFA]">
                    {node}
                  </div>
                  {index < project.architecture.length - 1 ? <div className="h-px w-6 shrink-0 sm:w-10 bg-gradient-to-r from-[#E70056]/60 to-[#FF5C93]/60" /> : null}
                </div>
              ))}
            </div>
          </DetailBlock>
          <DetailBlock title="Lessons Learned">
            <p>{project.lessons}</p>
          </DetailBlock>
          {project.screenshots?.length ? (
            <DetailBlock title="Image Gallery">
              <Gallery screenshots={project.screenshots} />
            </DetailBlock>
          ) : null}

        </section>
      </main>
      <Footer />
    </>
  );
}
