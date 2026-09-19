import { useRef } from "react";
import { motion as Motion, useInView, useReducedMotion } from "framer-motion";

export default function RevealSection({
  id,
  className = "",
  children,
  amount = "some",
  once = true,
}) {
  const ref = useRef(null);
  const prefersReduced = useReducedMotion();
  const inView = useInView(ref, { amount, once });

  return (
    <Motion.section
      id={id}
      ref={ref}
      className={className}
      initial={false}
      animate={inView ? "show" : "hide"}
      variants={{
        hide: prefersReduced ? { opacity: 1 } : { opacity: 1, y: 12 },
        show: prefersReduced
          ? { opacity: 1 }
          : {
              opacity: 1,
              y: 0,
              transition: { duration: 0.5, ease: "easeOut" },
            },
      }}
    >
      {children}
    </Motion.section>
  );
}
