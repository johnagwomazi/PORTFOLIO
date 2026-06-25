import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <motion.header
      className="sticky top-0 z-50 border-b border-white/10 bg-[#0D1117]/70 backdrop-blur-xl"
      initial={{ y: -30, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8 md:flex-row md:items-center md:justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-white/10 bg-gradient-to-br from-[#00F5D4]/20 to-[#8B5CF6]/25 font-black text-white shadow-[0_0_40px_rgba(0,245,212,0.12)]">
            AJ
          </span>
          <span className="leading-tight">
            <strong className="block text-sm font-semibold tracking-[0.22em] text-white/90">AGWOM AZI JOHN</strong>
            <small className="block text-xs text-white/55">Full Stack Developer</small>
          </span>
        </NavLink>

        <nav className="flex flex-wrap items-center gap-2 text-sm text-white/65">
          <NavLink to="/" className={({ isActive }) => `rounded-full px-4 py-2 transition ${isActive ? 'bg-white/8 text-white' : 'hover:bg-white/5 hover:text-white'}`}>
            Home
          </NavLink>
          <a href="/#projects" className="rounded-full px-4 py-2 transition hover:bg-white/5 hover:text-white">
            Projects
          </a>
          <a href="#contact" className="rounded-full px-4 py-2 transition hover:bg-white/5 hover:text-white">
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
