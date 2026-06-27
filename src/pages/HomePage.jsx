import projects, { stackGroups } from "../data/projects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import ProjectCard from "../components/ProjectCard";
import SectionHeading from "../components/SectionHeading";
import SkillGroup from "../components/SkillGroup";

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  const scrollToProjects = () => {
    document
      .getElementById("projects")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

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
          />

          <div className="mt-10 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
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

        {/* SERVICES */}
        <section
          className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8"
          id="about"
        >
          <SectionHeading
            eyebrow="Services"
            title="Bringing your ideas to life"
            description="I help businesses and startups transform ideas into reliable digital products through thoughtful design, scalable engineering, and modern web technologies."
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
                className="rounded-2xl border border-[#27272A] bg-[#111113] p-6 backdrop-blur-xl shadow-[0_0_60px_rgba(231,0,86,0.08)] transition duration-300 hover:border-[#E70056]/30 hover:-translate-y-1"
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

          <div className="mt-8 flex flex-col justify-center gap-3 rounded-2xl border border-[#27272A] bg-[#111113] p-5 backdrop-blur-xl sm:flex-row">
            <a
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-[#E70056] to-[#FF5C93] px-6 py-3 font-semibold text-[#FAFAFA] transition hover:-translate-y-0.5"
              href="mailto:agwomazijohn@example.com"
            >
              Start a Conversation
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
        </section>
      </main>

      <Footer />
    </>
  );
}
