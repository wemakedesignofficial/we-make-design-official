'use client';

import Image from 'next/image';
import { motion, useReducedMotion } from 'framer-motion';
import MagneticLink from './MagneticLink';

const headline = ['WE MAKE', 'DIGITAL', 'DIFFERENT.'];

export default function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="hero-section" id="top" aria-labelledby="hero-title">
      <Image className="hero-background" src="/hero.jpg" alt="" fill priority sizes="100vw" />
      <div className="hero-veil" aria-hidden="true" />
      <div className="hero-grid-lines" aria-hidden="true" />
      <div className="hero-shell container">
        <motion.div className="hero-copy" initial={reduceMotion ? false : 'hidden'} animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: reduceMotion ? 0 : 0.16, delayChildren: 0.12 } } }}>
          <motion.p className="eyebrow" variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.45 } } }}>We Make Designs</motion.p>
          <h1 id="hero-title">{headline.map((line, index) => <motion.span className={`hero-title-line${index === 1 ? ' is-lime' : ''}`} key={line} variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.7, ease: [0.2, 0.75, 0.25, 1] } } }}>{line}{index < headline.length - 1 ? ' ' : ''}</motion.span>)}</h1>
          <motion.p className="hero-description" variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.55 } } }}>Websites, digital invitations, security checks and graphic design, built for what&apos;s next.</motion.p>
          <motion.div className="hero-actions" variants={{ hidden: { opacity: 0, y: 12 }, visible: { opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.55 } } }}>
            <MagneticLink className="hero-start" href="#contact"><span className="lime-orb-arrow" aria-hidden="true">&rarr;</span><span>Start a Project</span></MagneticLink>
            <span className="hero-action-divider" aria-hidden="true" />
            <a className="hero-work-link" href="#work">Explore Our Work <span aria-hidden="true">↗</span></a>
          </motion.div>
        </motion.div>

        <motion.div className="hero-visual" aria-hidden="true" initial={reduceMotion ? false : { opacity: 0, scale: .9, y: 18 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 1.2, delay: reduceMotion ? 0 : .25, ease: 'easeOut' }}>
          <div className="hero-w-float">
            <svg className="hero-w-mark" viewBox="0 0 720 600" role="presentation">
              <defs>
                <linearGradient id="chromeW" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#fff" stopOpacity=".94"/><stop offset=".26" stopColor="#b9a2ff" stopOpacity=".5"/><stop offset=".52" stopColor="#e7e3f4" stopOpacity=".95"/><stop offset=".75" stopColor="#8073b2" stopOpacity=".62"/><stop offset="1" stopColor="#f7f5ff" stopOpacity=".9"/></linearGradient>
                <filter id="wGlow" x="-40%" y="-40%" width="180%" height="180%"><feGaussianBlur stdDeviation="18" result="blur"/><feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
              </defs>
              <path d="M142 172 245 444 357 229 472 444 580 172" fill="none" stroke="url(#chromeW)" strokeWidth="45" strokeLinecap="square" strokeLinejoin="bevel" filter="url(#wGlow)" />
              <path d="M142 172 245 444 357 229 472 444 580 172" fill="none" stroke="white" strokeOpacity=".35" strokeWidth="4" />
            </svg>
          </div>
          <svg className="hero-orbit" viewBox="0 0 720 600">
            <ellipse cx="360" cy="300" rx="260" ry="152" transform="rotate(-22 360 300)" fill="none" stroke="rgba(212,245,60,.47)" strokeWidth="1" />
            <g className="orbiting-dot"><circle cx="620" cy="300" r="5" fill="#d4f53c" /><circle cx="620" cy="300" r="11" fill="none" stroke="#d4f53c" strokeOpacity=".24" /></g>
          </svg>
          <div className="hero-dimension-label">W<span> / 01</span></div>
        </motion.div>

        <div className="hero-side-list" aria-hidden="true"><span>IDEAS</span><span>DESIGN</span><span>DEVELOP</span><span>SECURE</span><span>CREATE</span></div>
        <span className="hero-vertical-mark" aria-hidden="true">WM / WE MAKE DESIGNS</span>
        <div className="hero-service-strip" aria-label="Our disciplines">
          <span>DESIGN <b>01</b></span><span>DEVELOP <b>02</b></span><span>SECURE <b>03</b></span><span>CREATE <b>04</b></span>
          <svg className="globe-icon" viewBox="0 0 32 32" aria-hidden="true"><circle cx="16" cy="16" r="12"/><path d="M4 16h24M16 4c4 4 6 8 6 12s-2 8-6 12c-4-4-6-8-6-12s2-8 6-12Z"/></svg>
        </div>
      </div>
    </section>
  );
}
