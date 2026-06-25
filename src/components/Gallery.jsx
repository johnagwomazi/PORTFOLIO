import { motion } from "framer-motion";

export default function Gallery({ screenshots }) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
      {screenshots.map((shot, index) => (
        <motion.div
          key={shot.label}
          className="overflow-hidden rounded-2xl border border-white/10"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
        >
          <div className={`flex min-h-[180px] items-end p-4 ${shot.className}`}>
            <span className="text-sm font-semibold text-white">{shot.label}</span>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
