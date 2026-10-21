import { motion } from "framer-motion";

export default function SkillGroup({ title, items }) {
  return (
    <motion.section
      className="mx-auto min-w-0 w-full max-w-7xl text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:flex sm:flex-wrap sm:justify-center sm:gap-5">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              style={{ "--icon-color": item.color }}
              className="group flex min-w-0 flex-col sm:w-[200px] items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-3 py-4 text-center sm:px-4 sm:py-6 transition-transform duration-300 ease-out hover:scale-[1.03]"
            >
              <div
                className="flex h-12 w-12 shrink-0 items-center justify-center text-3xl sm:h-14 sm:w-14 sm:text-4xl transition-all duration-300 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_var(--icon-color)]"
                style={{ color: item.color }}
                aria-hidden="true"
              >
                <Icon />
              </div>

              <span className="mt-2 flex min-h-10 items-center justify-center break-words text-xs leading-5 text-white/70 sm:mt-4 sm:block sm:min-h-0 sm:text-sm transition-colors duration-200 group-hover:text-white">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </motion.section>
  );
}
