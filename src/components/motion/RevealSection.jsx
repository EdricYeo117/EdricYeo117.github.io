import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function RevealSection({ id, className = "", children }) {
  const ref = useRef(null);

  const inView = useInView(ref, {
    amount: 0.18,
    once: false,
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      className={className}
      initial="hide"
      animate={inView ? "show" : "hide"}
      variants={{
        hide: { opacity: 0, y: 10, filter: "blur(4px)" },
        show: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: { duration: 0.35, ease: "easeOut" }, // faster
        },
      }}
    >
      {children}
    </motion.section>
  );
}
