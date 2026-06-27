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
      className="rounded-[1.5rem] border border-[#27272A] bg-[#111113] p-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6"
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.28 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="mb-4 text-lg font-semibold text-[#FAFAFA]">{title}</h3>
      <div className="text-sm leading-7 text-[#A1A1AA] sm:text-base">{children}</div>
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
            className="mt-8 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#E70056] to-[#FF5C93] px-6 py-3 font-semibold text-[#FAFAFA] transition hover:-translate-y-0.5"
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
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <motion.section
          className="rounded-[2rem] border border-[#27272A] bg-[#111113]/85 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl sm:p-6"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65 }}
        >
          <button
            className="mb-5 inline-flex items-center gap-2 text-sm font-semibold text-[#FF5C93] transition hover:translate-x-0.5"
            onClick={() => navigate("/")}
          >
            <FaArrowLeftLong /> Back To Projects
          </button>

          <div className={`rounded-[1.75rem] border border-[#27272A] p-6 sm:p-8 ${project.coverClass}`}>
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-[#27272A] bg-[#111113]/80 px-3 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#FF5C93]">
                {project.category}
              </span>
              <h1 className="mt-5 font-display text-4xl font-bold tracking-[-0.04em] text-[#FAFAFA] sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-4 max-w-2xl text-base leading-8 text-[#A1A1AA] sm:text-lg">{project.heroSummary}</p>
            </div>
            <div className="mt-8 flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span key={tech} className="rounded-full border border-[#27272A] bg-[#18181B] px-3 py-2 text-xs text-[#FAFAFA]">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.section>

          <div className="flex flex-col mt-4 gap-3 py-2 sm:flex-row sm:flex-wrap">
            <a className="inline-flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#E70056] to-[#FF5C93] px-6 py-3 font-semibold text-[#FAFAFA] transition hover:-translate-y-0.5" href={project.githubUrl} target="_blank" rel="noreferrer">
              <FaGithub /> GitHub Link
            </a>
            <a className="inline-flex items-center justify-center gap-2 rounded-full border border-[#27272A] bg-[#111113] px-6 py-3 font-semibold text-[#FAFAFA] transition hover:-translate-y-0.5 hover:bg-[#18181B]" href={project.liveDemoUrl} target="_blank" rel="noreferrer">
              <FaArrowUpRightFromSquare /> Live Link
            </a>
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
                <span key={tech} className="rounded-full border border-[#27272A] bg-[#18181B] px-3 py-2 text-xs text-[#FAFAFA]">
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
                <div key={node} className="flex items-center gap-3">
                  <div className="min-w-[140px] rounded-2xl border border-[#27272A] bg-[#111113] px-4 py-3 text-center text-sm font-medium text-[#FAFAFA]">
                    {node}
                  </div>
                  {index < project.architecture.length - 1 ? <div className="h-px w-10 bg-gradient-to-r from-[#E70056]/60 to-[#FF5C93]/60" /> : null}
                </div>
              ))}
            </div>
          </DetailBlock>
          <DetailBlock title="Lessons Learned">
            <p>{project.lessons}</p>
          </DetailBlock>
          <DetailBlock title="Image Gallery">
            <Gallery screenshots={project.screenshots} />
          </DetailBlock>

        </section>
      </main>
      <Footer />
    </>
  );
}
