'use client';

import Image from 'next/image';
import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';

const disciplines = [
  {
    id: 'web',
    label: 'Websites',
    index: '01',
    title: 'A digital home built around your business.',
    detail: 'Brand-led websites, thoughtfully designed and developed to turn a first visit into a next step.',
    project: 'Handmade Haven',
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/assets/brochure-websites.png`,
    alt: 'We Make Designs brochure page describing website design services',
    color: '#c9a26b',
    tag: 'Design · Development',
    href: '/work/handmade-haven',
  },
  {
    id: 'security',
    label: 'Security',
    index: '02',
    title: 'Find the weak points before someone else does.',
    detail: 'Practical website security and vulnerability assessments, with clear findings your team can act on.',
    project: 'Security assessment',
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/assets/brochure-security.png`,
    alt: 'We Make Designs brochure page describing website security services',
    color: '#b7c7b7',
    tag: 'Review · Strengthen',
    href: 'https://www.instagram.com/we_make_designs__/',
  },
  {
    id: 'invitation',
    label: 'Invitations',
    index: '03',
    title: 'Make the moment feel special before it begins.',
    detail: 'Responsive digital invitations that bring the atmosphere of an event into every detail.',
    project: 'Cherry Celebrations',
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/assets/brochure-invitations.png`,
    alt: 'We Make Designs brochure page describing digital invitation services',
    color: '#d4a66d',
    tag: 'Digital invitation · Events',
    href: '/work/digital-invitation',
  },
  {
    id: 'poster',
    label: 'Posters',
    index: '04',
    title: 'Give good ideas a form people remember.',
    detail: 'Distinctive poster and campaign design for launches, events, and the people behind them.',
    project: 'Visual design',
    image: `${process.env.NEXT_PUBLIC_BASE_PATH ?? ''}/assets/brochure-posters.png`,
    alt: 'We Make Designs brochure page describing poster design services',
    color: '#d8b6aa',
    tag: 'Poster · Visual identity',
    href: 'https://www.instagram.com/we_make_designs__/',
  },
];

export default function Testimonial() {
  const [activeId, setActiveId] = useState(disciplines[0].id);
  const active = disciplines.find((item) => item.id === activeId) ?? disciplines[0];
  const reduceMotion = useReducedMotion();

  return (
    <section className="studio-instrument" id="studio-instrument" aria-labelledby="instrument-title">
      <div className="instrument-top container section-pad">
        <div>
          <p className="eyebrow">One studio, several ways to move forward</p>
          <h2 id="instrument-title">What are you<br />here to make?</h2>
        </div>
        <p className="instrument-intro">Pick a direction. We’ll show you how we think, what we make, and where your project could begin.</p>
      </div>
      <div className="instrument-shell">
        <div className="instrument-controls" role="tablist" aria-label="Explore studio services">
          {disciplines.map((item) => (
            <button
              key={item.id}
              className={`instrument-tab${active.id === item.id ? ' active' : ''}`}
              id={`tab-${item.id}`}
              type="button"
              role="tab"
              aria-selected={active.id === item.id}
              aria-controls="discipline-panel"
              onClick={() => setActiveId(item.id)}
              style={{ '--tab-accent': item.color } as React.CSSProperties}
            >
              <span>{item.index}</span>{item.label}<i aria-hidden="true">↗</i>
            </button>
          ))}
        </div>
        <div id="discipline-panel" className="instrument-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              className="instrument-content"
              initial={reduceMotion ? false : { opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
              transition={{ duration: reduceMotion ? 0 : 0.35, ease: 'easeOut' }}
            >
              <div className="instrument-copy" style={{ '--tab-accent': active.color } as React.CSSProperties}>
                <p className="eyebrow">{active.tag}</p>
                <h3>{active.title}</h3>
                <p className="instrument-detail">{active.detail}</p>
                <a href={active.href} target={active.href.startsWith('http') ? '_blank' : undefined} rel={active.href.startsWith('http') ? 'noreferrer' : undefined} className="instrument-link">
                  {active.href.startsWith('http') ? 'Talk to us about this' : `Explore ${active.project}`} <span>↗</span>
                </a>
                <div className="instrument-coordinate"><span>{active.index} / 04</span><span>WE MAKE DESIGN</span></div>
              </div>
              <a className="instrument-art" href={active.href} aria-label={`${active.project}: ${active.label}`} target={active.href.startsWith('http') ? '_blank' : undefined} rel={active.href.startsWith('http') ? 'noreferrer' : undefined}>
                <Image src={active.image} alt={active.alt} fill sizes="(max-width: 700px) 100vw, 58vw" priority={active.id === 'web'} />
                <span className="art-index">{active.index}<br />—<br />04</span>
                <span className="art-caption">{active.project}<i>↗</i></span>
                <span className="art-outline" aria-hidden="true" />
              </a>
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="instrument-foot"><span>Choose a discipline to explore</span><span>DESIGN / BUILD / PROTECT</span></div>
      </div>
    </section>
  );
}
