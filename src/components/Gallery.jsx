import { motion } from "framer-motion";

export default function Gallery({ screenshots }) {
  return (
    <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-2">
      {(screenshots ?? []).map((shot, index) => (
        <motion.div
          key={shot.label}
          className="overflow-hidden rounded-2xl border border-[#27272A] bg-[#111113]"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
        >
          <div className="relative">
            <img
              src={shot.image}
              alt={shot.label}
              className="h-64 w-full object-contain"
              loading="lazy"
            />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-4">
              <span className="text-sm font-semibold text-white">
                {shot.label}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
