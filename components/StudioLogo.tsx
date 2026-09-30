'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

export default function StudioLogo() {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      className="studio-logo-motion"
      initial={reduceMotion ? false : { opacity: 0, scale: 0.86, y: 24 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
      transition={reduceMotion ? { duration: 0 } : { opacity: { duration: 0.8 }, scale: { duration: 0.8, ease: 'easeOut' }, y: { duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 0.8 } }}
    >
      <Image src="/wm-logo.png" alt="We Make Design logo" width={600} height={360} sizes="(max-width: 700px) 100vw, 45vw" />
    </motion.div>
  );
}
