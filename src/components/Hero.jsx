import { motion } from "framer-motion";
import { socialLinks } from "../data/projects";

const cvUrl = null;

// Sequenced orchestration variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  },
};

const imageCardVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: { 
    opacity: 1, 
    scale: 1, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

export default function Hero({ onWorkClick }) {
  return (
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-6 px-4 pb-10 pt-6 sm:gap-10 sm:px-6 sm:pb-16 sm:pt-8 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pt-14">
      {/* Content Side */}
      <motion.div
        className="mx-auto min-w-0 max-w-3xl text-center lg:mx-0 lg:text-left"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p
          className="mb-3 text-[10px] font-extrabold uppercase tracking-[0.16em] sm:mb-4 sm:text-xs sm:tracking-[0.22em] text-[#FF5C93]"
          variants={itemVariants}
        >
          Full Stack Developer • Product Builder
        </motion.p>

        <motion.h1
          className="font-display text-[2rem] leading-tight font-bold tracking-[-0.04em] text-[#FAFAFA] sm:text-6xl lg:text-7xl"
          variants={itemVariants}
        >
          AGWOM AZI JOHN
        </motion.h1>

        <motion.p
          className="mt-3 text-base leading-6 font-semibold sm:mt-4 sm:leading-8 text-[#FAFAFA] sm:text-2xl"
          variants={itemVariants}
        >
          Building reliable web products that solve real business problems.
        </motion.p>

        <motion.p
          className="mt-4 max-w-2xl text-sm leading-6 text-[#A1A1AA] sm:mt-6 sm:text-base sm:leading-8"
          variants={itemVariants}
        >
          I’m a fullstack developer based in Lagos, Nigeria, working with
          clients and teams from all over the world. I specialize in building
          beautiful, responsive, and high-performant web applications that
          deliver seamless user experiences. With a strong focus on frontend
          technologies and a solid foundation in backend development, I bring
          ideas to life by combining clean code, modern tools, and creative
          problem solving
        </motion.p>

        <motion.p
          className="mt-3 text-xs leading-5 font-semibold sm:mt-4 sm:text-sm sm:leading-5 text-[#FF5C93]"
          variants={itemVariants}
        >
          Available for remote Junior Full-Stack and Frontend Developer roles.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          className="mt-5 flex min-w-0 flex-col items-center gap-2 text-sm sm:mt-8 sm:gap-3 sm:text-base sm:flex-row sm:flex-wrap lg:items-start"
          variants={itemVariants}
        >
          <button
            onClick={onWorkClick}
            type="button"
            className="inline-flex min-h-11 max-w-full items-center justify-center py-2 sm:h-12 sm:py-0 rounded-full bg-gradient-to-r from-[#E70056] to-[#FF5C93] px-6 font-semibold text-[#FAFAFA] shadow-[0_12px_30px_rgba(231,0,86,0.24)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            View My Work
          </button>

          <a
            href="#contact"
            className="inline-flex min-h-11 max-w-full items-center justify-center py-2 sm:h-12 sm:py-0 rounded-full border border-[#27272A] bg-[#111113] px-6 font-semibold text-[#FAFAFA] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#18181B] active:translate-y-0"
          >
            Let&apos;s Build Something Together
          </a>

          {cvUrl ? (
            <a
              href={cvUrl}
              download="Agwom_Azi_John_CV.pdf"
              className="inline-flex min-h-11 max-w-full items-center justify-center py-2 sm:h-12 sm:py-0 rounded-full border border-[#27272A] bg-[#18181B] px-6 font-semibold text-[#FAFAFA] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#27272A] active:translate-y-0"
            >
              Download CV
            </a>
          ) : null}
        </motion.div>

        {/* Navigation Socials */}
        <motion.nav
          className="mt-5 flex items-center justify-center gap-3 sm:mt-8 lg:justify-start"
          aria-label="Social links"
          variants={itemVariants}
        >
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="grid h-11 w-11 place-items-center rounded-full border border-[#27272A] bg-[#111113] text-[#FAFAFA] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#18181B] hover:text-[#FAFAFA] active:translate-y-0"
              >
                <Icon className="text-lg" aria-hidden="true" />
              </a>
            );
          })}
        </motion.nav>
      </motion.div>

      {/* Visual / Image Side */}
      <motion.div
        className="relative min-w-0 overflow-hidden rounded-[2rem] border border-[#27272A] bg-[#111113]/85 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        variants={imageCardVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Glow Spheres */}
        <div className="absolute -right-6 -top-6 h-56 w-56 rounded-full bg-[#E70056]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 h-56 w-56 rounded-full bg-[#FF5C93]/20 blur-3xl pointer-events-none" />

        <div className="relative aspect-[4/5] overflow-hidden sm:aspect-auto sm:min-h-[420px] rounded-[1.75rem] border border-[#27272A]">
          <img
            src="/8.jpg"
            alt="Agwom Azi John portrait"
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover"
          />

          {/* Core Visual Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/85 via-transparent to-transparent pointer-events-none" />

          {/* Interactive Badge Layer */}
          <div className="absolute bottom-3 left-3 right-3 rounded-2xl sm:bottom-4 sm:left-4 sm:right-4 border border-[#27272A] bg-[#111113]/90 p-3 backdrop-blur-xl sm:p-4">
            <strong className="block text-sm font-semibold text-[#FAFAFA]">
              Open to
            </strong>
            <p className="mt-1 text-xs leading-5 sm:text-sm sm:leading-6 text-[#A1A1AA]">
              internships, freelance projects, startup collaborations, and
              remote software engineering roles.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
