'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';

const headingLines = ['We make the', 'internet feel', 'more human.'];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero" id="top">
      <motion.div
        className="hero-image-motion"
        initial={reduceMotion ? false : { scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 1.8, ease: [0.2, 0.65, 0.3, 1] }}
        aria-hidden="true"
      >
        <picture>
          <source srcSet={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/hero.webp`} type="image/webp" />
          <Image className="hero-photo" src={`${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/hero.jpg`} alt="" fill priority sizes="100vw" />
        </picture>
      </motion.div>
      <div className="hero-shade" />
      <motion.div
        className="hero-inner container"
        initial={reduceMotion ? false : { opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.8, delay: 0.12, ease: 'easeOut' }}
      >
        <p className="eyebrow">Independent creative studio · Design / Build / Protect</p>
        <h1 aria-label="We make the internet feel more human">
          {headingLines.map((line, index) => (
            <span className="hero-heading-line" key={line}>
              <motion.span
                initial={reduceMotion ? false : { y: '110%' }}
                animate={{ y: 0 }}
                transition={reduceMotion ? { duration: 0 } : { duration: 0.85, delay: 0.34 + index * 0.13, ease: [0.2, 0.65, 0.3, 1] }}
              >
                {line}
              </motion.span>
            </span>
          ))}
        </h1>
        <motion.div
          className="hero-bottom"
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion ? { duration: 0 } : { duration: 0.7, delay: 0.8, ease: 'easeOut' }}
        >
          <p>Websites with character. Security with substance. Digital moments that feel made for you.</p>
          <a className="outline-link" href="#studio-instrument">Find your starting point <span>↗</span></a>
        </motion.div>
      </motion.div>
      <motion.div
        className="hero-caption"
        initial={reduceMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduceMotion ? { duration: 0 } : { duration: 0.75, delay: 0.95, ease: 'easeOut' }}
      >
        <span className="eyebrow">Small studio, broad toolkit</span>
        <span>Web · Security<br />Invitation · Poster</span>
      </motion.div>
    </section>
  );
}
