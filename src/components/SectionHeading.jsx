import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export default function SectionHeading({ eyebrow, title, description, align = "left" }) {
  return (
    <motion.div
      className={align === "center" ? "mx-auto max-w-4xl text-center" : "max-w-4xl"}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {eyebrow ? <p className="mb-4 text-xs font-extrabold uppercase tracking-[0.22em] text-[#00F5D4]">{eyebrow}</p> : null}
      <h2 className="font-display text-3xl font-bold tracking-[-0.04em] text-white sm:text-4xl lg:text-5xl">{title}</h2>
      {description ? <p className="mt-4 max-w-3xl text-base leading-8 text-white/65 sm:text-lg">{description}</p> : null}
    </motion.div>
  );
}
