import React from "react";
import { motion } from "framer-motion";
import type { MotionProps, Variants } from "framer-motion";

interface MotionWrapperProps extends Readonly<MotionProps> {
  readonly children: React.ReactNode;
  readonly delay?: number;
}

// Default animations for sections
const defaultAnimations: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function MotionWrapper({
  children,
  delay = 0,
  ...props
}: MotionWrapperProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={defaultAnimations}
      custom={delay}
      {...props}
    >
      {children}
    </motion.div>
  );
}
