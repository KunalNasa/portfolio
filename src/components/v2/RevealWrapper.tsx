'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface RevealWrapperProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export default function RevealWrapper({
  children,
  delay = 0.1,
  duration = 0.6,
  yOffset = 40,
}: RevealWrapperProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration,
        delay,
        type: 'spring',
        damping: 20,
        stiffness: 100,
      }}
      viewport={{ once: true, amount: 0.4 }}
    >
      {children}
    </motion.div>
  );
}
