import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-[#27272A] bg-[#09090B]/85 backdrop-blur-xl"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#27272A] bg-gradient-to-br from-[#E70056]/30 to-[#FF5C93]/25 font-black text-[#FAFAFA] shadow-[0_0_40px_rgba(231,0,86,0.15)]">
            AJ
          </span>
          <span className="leading-tight">
            <strong className="block text-sm font-semibold tracking-[0.22em] text-[#FAFAFA]">AGWOM AZI JOHN</strong>
            <small className="block text-xs text-[#A1A1AA]">Full Stack Developer</small>
          </span>
        </NavLink>

        <nav className="flex flex-wrap items-center gap-2 text-sm text-[#A1A1AA]">
          <NavLink to="/" className={({ isActive }) => `rounded-full px-4 py-2 transition ${isActive ? 'bg-[#18181B] text-[#FAFAFA]' : 'hover:bg-[#111113] hover:text-[#FAFAFA]'}`}>
            Home
          </NavLink>
          <a href="/#projects" className="rounded-full px-4 py-2 transition hover:bg-[#111113] hover:text-[#FAFAFA]">
            Projects
          </a>
          <a href="#contact" className="rounded-full px-4 py-2 transition hover:bg-[#111113] hover:text-[#FAFAFA]">
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
