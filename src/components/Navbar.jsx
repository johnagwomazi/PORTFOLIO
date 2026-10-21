import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [isHidden, setIsHidden] = useState(false);
  const headerRef = useRef(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    let previousY = Math.max(0, window.scrollY);
    let downwardDistance = 0;
    const updateDirection = () => {
      // Clamp overscroll so bouncing at either edge cannot flip direction.
      const maxY = Math.max(0, document.documentElement.scrollHeight - window.innerHeight);
      const currentY = Math.min(maxY, Math.max(0, window.scrollY));
      const delta = currentY - previousY;

      if (currentY <= (headerRef.current?.offsetHeight ?? 80) || delta < 0) {
        downwardDistance = 0;
        setIsHidden(false);
      } else if (delta > 0) {
        downwardDistance += delta;
        // A short downward threshold prevents jitter; any upward movement reveals it.
        if (downwardDistance >= 12 && !headerRef.current?.querySelector(":focus-visible")) {
          setIsHidden(true);
        }
      }

      previousY = currentY;
    };

    window.addEventListener("scroll", updateDirection, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateDirection);
    };
  }, []);

  return (
    <motion.header
      ref={headerRef}
      className="sticky top-0 z-50 border-b border-[#27272A] bg-[#09090B]/85 backdrop-blur-xl"
      initial={reduceMotion ? false : { y: -30, opacity: 0 }}
      animate={{ y: isHidden ? "-100%" : 0, opacity: 1 }}
      transition={{ duration: reduceMotion ? 0 : isHidden ? 0.2 : 0.12, ease: "easeOut" }}
      onFocusCapture={() => setIsHidden(false)}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-center px-4 py-2 sm:gap-4 sm:px-6 sm:py-4 lg:px-8">
        {/* <NavLink to="/" className="flex items-center gap-3">
          <span className="grid h-12 w-12 place-items-center rounded-2xl border border-[#27272A] bg-gradient-to-br from-[#E70056]/30 to-[#FF5C93]/25 font-black text-[#FAFAFA] shadow-[0_0_40px_rgba(231,0,86,0.15)]">
            AJ
          </span>
          <span className="leading-tight">
            <strong className="block text-sm font-semibold tracking-[0.22em] text-[#FAFAFA]">AGWOM AZI JOHN</strong>
            <small className="block text-xs text-[#A1A1AA]">Full Stack Developer</small>
          </span>
        </NavLink> */}

        <nav aria-label="Primary navigation" className="flex min-w-0 flex-nowrap items-center gap-1 whitespace-nowrap text-xs text-[#A1A1AA] sm:gap-2 sm:text-sm">
          <NavLink to="/" className={({ isActive }) => `inline-flex min-h-11 items-center rounded-full px-3 py-2 transition sm:block sm:min-h-0 sm:px-4 ${isActive ? 'bg-[#18181B] text-[#FAFAFA]' : 'hover:bg-[#111113] hover:text-[#FAFAFA]'}`}>
            Home
          </NavLink>
          <a href="/#projects" className="inline-flex min-h-11 items-center rounded-full px-3 py-2 transition hover:bg-[#111113] hover:text-[#FAFAFA] sm:block sm:min-h-0 sm:px-4">
            Projects
          </a>
          <a href="/#experience" className="inline-flex min-h-11 items-center rounded-full px-3 py-2 transition hover:bg-[#111113] hover:text-[#FAFAFA] sm:block sm:min-h-0 sm:px-4">
            Experience
          </a>
          <a href="/#contact" className="inline-flex min-h-11 items-center rounded-full px-3 py-2 transition hover:bg-[#111113] hover:text-[#FAFAFA] sm:block sm:min-h-0 sm:px-4">
            Contact
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
