import { useRef } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

export default function RevealSection({
  id,
  className = "",
  children,
  amount = 0.2,
  once = true,
}) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const inView = useInView(ref, { amount, once });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial="hide"
      animate={inView ? "show" : "hide"}
      variants={{
        hide: prefersReduced ? { opacity: 1 } : { opacity: 0, y: 18, filter: "blur(6px)" },
        show: prefersReduced
          ? { opacity: 1 }
          : { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 0.5, ease: "easeOut" } },
      }}
    >
      {children}
    </motion.section>
  );
}
