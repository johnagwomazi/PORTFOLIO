import { motion } from "framer-motion";
import { socialLinks } from "../data/projects";

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
    <section className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 pb-16 pt-8 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8 lg:pt-14">
      {/* Content Side */}
      <motion.div
        className="max-w-3xl"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p 
          className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-[#FF5C93]"
          variants={itemVariants}
        >
          Full Stack Developer • Product Builder
        </motion.p>

        <motion.h1 
          className="font-display text-4xl font-bold tracking-[-0.04em] text-[#FAFAFA] sm:text-6xl lg:text-7xl"
          variants={itemVariants}
        >
          AGWOM AZI JOHN
        </motion.h1>

        <motion.p 
          className="mt-4 text-lg font-semibold text-[#FAFAFA] sm:text-2xl"
          variants={itemVariants}
        >
          Providing value for business growth through codes
        </motion.p>

        <motion.p 
          className="mt-6 max-w-2xl text-base leading-8 text-[#A1A1AA] sm:text-md"
          variants={itemVariants}
        >
        I’m a fullstack developer based in Lagos, Nigeria, working with clients and teams from all over the world. I specialize in building beautiful, responsive, and high-performant web applications that deliver seamless user experiences.With a strong focus on frontend technologies and a solid foundation in backend development, 
        I bring ideas to life by combining clean code, modern tools, and creative problem solving
        </motion.p>

        {/* Call to Actions */}
        <motion.div 
          className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
          variants={itemVariants}
        >
          <button
            onClick={onWorkClick}
            type="button"
            className="inline-flex h-12 items-center justify-center rounded-full bg-gradient-to-r from-[#E70056] to-[#FF5C93] px-6 font-semibold text-[#FAFAFA] shadow-[0_12px_30px_rgba(231,0,86,0.24)] transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0"
          >
            View My Work
          </button>
          
          <a
            href="#contact"
            className="inline-flex h-12 items-center justify-center rounded-full border border-[#27272A] bg-[#111113] px-6 font-semibold text-[#FAFAFA] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#18181B] active:translate-y-0"
          >
            Let&apos;s Build Something Together
          </a>
        </motion.div>

        {/* Navigation Socials */}
        <motion.nav 
          className="mt-8 flex items-center gap-3" 
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
        className="relative overflow-hidden rounded-[2rem] border border-[#27272A] bg-[#111113]/85 p-4 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl"
        variants={imageCardVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Glow Spheres */}
        <div className="absolute -right-6 -top-6 h-56 w-56 rounded-full bg-[#E70056]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-8 -left-8 h-56 w-56 rounded-full bg-[#FF5C93]/20 blur-3xl pointer-events-none" />

        <div className="relative min-h-[420px] overflow-hidden rounded-[1.75rem] border border-[#27272A]">
          <img
            src="/8.jpeg"
            alt="Agwom Azi John portrait"
            loading="eager"
            decoding="async"
            className="h-full w-full object-cover"
          />

          {/* Core Visual Overlays */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#09090B]/85 via-transparent to-transparent pointer-events-none" />

          {/* Interactive Badge Layer */}
          <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-[#27272A] bg-[#111113]/90 p-4 backdrop-blur-xl">
            <strong className="block text-sm font-semibold text-[#FAFAFA]">
             Open to 
            </strong>
            <p className="mt-1 text-sm leading-6 text-[#A1A1AA]">
               internships, freelance projects, startup collaborations, and remote software engineering roles.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
