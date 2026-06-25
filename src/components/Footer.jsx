import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="mx-auto flex max-w-7xl flex-col gap-3 border-t border-white/10 px-4 py-8 text-sm text-white/55 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      <p>© {new Date().getFullYear()} AGWOM AZI JOHN. Built for premium product teams.</p>
      <p>Full Stack Developer focused on performant, accessible, conversion-led experiences.</p>
    </motion.footer>
  );
}
