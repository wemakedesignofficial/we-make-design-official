'use client';

import { useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useSpring } from 'framer-motion';
import type { MouseEvent, ReactNode } from 'react';
import type { HTMLMotionProps } from 'framer-motion';

type Props = Omit<HTMLMotionProps<'a'>, 'onMouseMove' | 'onMouseLeave'> & { children: ReactNode; onMouseMove?: (event: MouseEvent<HTMLAnchorElement>) => void; onMouseLeave?: (event: MouseEvent<HTMLAnchorElement>) => void };

export default function MagneticLink({ children, onMouseMove, onMouseLeave, ...props }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);
  const reduceMotion = useReducedMotion();
  const x = useSpring(useMotionValue(0), { stiffness: 240, damping: 18, mass: .25 });
  const y = useSpring(useMotionValue(0), { stiffness: 240, damping: 18, mass: .25 });

  const handleMove = (event: MouseEvent<HTMLAnchorElement>) => {
    onMouseMove?.(event);
    if (reduceMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((event.clientX - rect.left - rect.width / 2) * .12);
    y.set((event.clientY - rect.top - rect.height / 2) * .12);
  };

  const handleLeave = (event: MouseEvent<HTMLAnchorElement>) => {
    onMouseLeave?.(event);
    x.set(0);
    y.set(0);
  };

  return <motion.a ref={ref} {...props} style={{ ...props.style, x, y }} onMouseMove={handleMove} onMouseLeave={handleLeave}>{children}</motion.a>;
}
