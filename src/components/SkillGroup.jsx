import { motion } from "framer-motion";

export default function SkillGroup({ title, items }) {
  return (
    <motion.section
      // className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.55 }}
    >
      <h3 className="text-lg font-semibold text-white">{title}</h3>
      <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 xl:grid-cols-5">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div
              key={item.name}
              style={{ "--icon-color": item.color }}
              className="group flex flex-col items-center justify-center rounded-xl border border-white/10 bg-white/[0.02] px-4 py-6 text-center transition-transform duration-300 ease-out hover:scale-[1.03]"
            >
              <div
                className="flex h-14 w-14 items-center justify-center text-4xl transition-all duration-300 ease-out group-hover:scale-110 group-hover:drop-shadow-[0_0_12px_var(--icon-color)]"
                style={{ color: item.color }}
                aria-hidden="true"
              >
                <Icon />
              </div>

              <span className="mt-4 text-sm text-white/70 transition-colors duration-200 group-hover:text-white">
                {item.name}
              </span>
            </div>

          );
        })}
      </div>
    </motion.section>
  );
}
