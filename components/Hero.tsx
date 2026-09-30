'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  return (
    <section className="hero" id="top">
      <motion.div className="hero-image-motion" initial={reduceMotion ? false : { scale: 1.06 }} animate={{ scale: 1 }} transition={reduceMotion ? { duration: 0 } : { duration: 1.8, ease: [0.2, 0.65, 0.3, 1] }} aria-hidden="true">
        <picture><source srcSet="/hero.webp" type="image/webp" /><Image className="hero-photo" src="/hero.jpg" alt="" fill priority sizes="100vw" /></picture>
      </motion.div>
      <div className="hero-shade" />
      <motion.div className="hero-inner container" initial={reduceMotion ? false : { opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={reduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.12, ease: 'easeOut' }}>
        <p className="eyebrow">Independent creative studio · Design / Build / Protect</p>
        <h1>We make the<br />internet feel<br />more human.</h1>
        <motion.div className="hero-bottom" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={reduceMotion ? { duration: 0 } : { duration: 0.7, delay: 0.8, ease: 'easeOut' }}>
          <p>Websites with character. Security with substance. Digital moments that feel made for you.</p>
          <a className="outline-link" href="#studio-instrument">Find your starting point <span>↗</span></a>
        </motion.div>
      </motion.div>
      <motion.div className="hero-caption" initial={reduceMotion ? false : { opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={reduceMotion ? { duration: 0 } : { duration: 0.75, delay: 0.95, ease: 'easeOut' }}>
        <span className="eyebrow">Small studio, broad toolkit</span><span>Web · Security<br />Invitation · Poster</span>
      </motion.div>
    </section>
  );
}
