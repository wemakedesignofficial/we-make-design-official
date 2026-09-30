'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { INVITATION_DEMO_POSTER, INVITATION_DEMO_URL, INVITATION_DEMO_VIDEO, INSTAGRAM_URL } from '@/lib/site';

const disciplines = [
  { id: 'web', label: 'Websites', index: '01', title: 'A digital home built around your business.', detail: 'Brand-led websites, thoughtfully designed and developed to turn a first visit into a next step.', checks: ['UI/UX design and responsive layouts', 'Business websites and online stores', 'Mobile-first development', 'Clear navigation and performance-minded builds'], project: 'Handmade Haven', image: '/assets/brochure-websites.png', alt: 'Websites brochure page: web design services and a website mockup', color: '#c9a26b', tag: 'Design · Development', href: '/work/handmade-haven/' },
  { id: 'security', label: 'Security', index: '02', title: 'Find the weak points before someone else does.', detail: 'You receive: a written report with clear recommendations.', checks: ['Vulnerability assessment', 'SSL / HTTPS configuration', 'Security headers', 'Exposed information', 'CMS and plugin review', 'OWASP Top 10 risk check'], project: 'Security assessment', image: '/assets/brochure-security.png', alt: 'Security brochure page: website vulnerability assessment services', color: '#b7c7b7', tag: 'Review · Strengthen', href: INSTAGRAM_URL },
  { id: 'invitation', label: 'Invitations', index: '03', title: 'Make the moment feel special before it begins.', detail: 'Responsive digital invitations for weddings and events.', checks: ['Custom wedding and event invitation design', 'Interactive envelope reveal', 'Personalized countdown', 'Event details, schedule and venue', 'Mobile-friendly, easy-to-share experience'], project: 'Cherry Celebrations', image: '/assets/brochure-invitations.png', alt: 'Invitations brochure page: interactive digital invitation services', color: '#d4a66d', tag: 'Digital invitation · Events', href: '/work/cherry-celebrations/' },
  { id: 'poster', label: 'Posters', index: '04', title: 'Give good ideas a form people remember.', detail: 'Custom poster artwork with a strong visual point of view.', checks: ['Poster designs for film, events and gaming', 'Original concepts and visual composition', 'Typography and image direction', 'Digital graphics for social sharing'], project: 'Visual design', image: '/assets/brochure-posters.png', alt: 'Posters brochure page: custom poster and graphic design services', color: '#d8b6aa', tag: 'Poster · Visual identity', href: INSTAGRAM_URL },
];

export default function Testimonial() {
  const [activeId, setActiveId] = useState(disciplines[0].id);
  const [videoAvailable, setVideoAvailable] = useState(false);
  const active = disciplines.find((item) => item.id === activeId) ?? disciplines[0];
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    disciplines.forEach(({ image }) => { const preload = new window.Image(); preload.src = image; });
  }, []);

  useEffect(() => {
    if (!INVITATION_DEMO_VIDEO) return;
    const video = document.createElement('video');
    video.muted = true;
    video.preload = 'auto';
    video.src = INVITATION_DEMO_VIDEO;
    video.onloadeddata = () => setVideoAvailable(true);
    video.onerror = () => setVideoAvailable(false);
    video.load();
  }, []);

  const external = active.href.startsWith('http');

  return (
    <section className="studio-instrument" id="studio-instrument" aria-labelledby="instrument-title">
      <div className="instrument-top container section-pad" id="services">
        <div><p className="eyebrow">One studio, several ways to move forward</p><h2 id="instrument-title">What are you<br />here to make?</h2></div>
        <p className="instrument-intro">Pick a direction. We’ll show you how we think, what we make, and where your project could begin.</p>
      </div>
      <div className="instrument-shell">
        <div className="instrument-controls" role="tablist" aria-label="Explore studio services">
          {disciplines.map((item) => <button key={item.id} className={`instrument-tab${active.id === item.id ? ' active' : ''}`} id={`tab-${item.id}`} type="button" role="tab" aria-selected={active.id === item.id} aria-controls="discipline-panel" onClick={() => setActiveId(item.id)} style={{ '--tab-accent': item.color } as React.CSSProperties}><span>{item.index}</span>{item.label}<i aria-hidden="true">↗</i></button>)}
        </div>
        <div id="discipline-panel" className="instrument-panel" role="tabpanel" aria-labelledby={`tab-${active.id}`}>
            <motion.div key={active.id} className="instrument-content" initial={reduceMotion ? false : { opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: reduceMotion ? 0 : 0.25, ease: 'easeOut' }}>
              <div className="instrument-copy" style={{ '--tab-accent': active.color } as React.CSSProperties}>
                <p className="eyebrow">{active.tag}</p><h3>{active.title}</h3>
                {active.id !== 'security' && <p className="instrument-detail">{active.detail}</p>}
                <p className="eyebrow offerings-eyebrow">What we provide</p>
                <ul className="discipline-checklist">{active.checks?.map((check) => <li key={check}>{check}</li>)}</ul>
                {active.id === 'security' && <p className="instrument-detail">{active.detail}</p>}
                {active.id === 'invitation' && <div className="invitation-demo"><div className="invitation-demo-media">{videoAvailable ? <video src={INVITATION_DEMO_VIDEO} poster={INVITATION_DEMO_POSTER} muted loop autoPlay playsInline aria-label="Interactive invitation demo" /> : <div className="invitation-demo-placeholder" role="img" aria-label="Invitation video preview placeholder">Invitation demo preview</div>}</div><p>Interactive envelope reveal with a personalised countdown.</p>{INVITATION_DEMO_URL && <a href={INVITATION_DEMO_URL} target="_blank" rel="noreferrer">View live invitation ↗</a>}</div>}
                <a href={active.href} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined} className="instrument-link">{external ? 'Talk to us about this' : `Explore ${active.project}`} <span>↗</span></a>
                <div className="instrument-coordinate"><span>{active.index} / 04</span><span>WE MAKE DESIGN</span></div>
              </div>
              <a className="instrument-art" href={active.href} aria-label={`${active.project}: ${active.label}`} target={external ? '_blank' : undefined} rel={external ? 'noreferrer' : undefined}>
                <Image src={active.image} alt={active.alt} fill sizes="(max-width: 700px) 100vw, 58vw" priority loading="eager" />
                <span className="art-index">{active.index}<br />—<br />04</span><span className="art-caption">{active.project}<i>↗</i></span><span className="art-outline" aria-hidden="true" />
              </a>
            </motion.div>
        </div>
        <div className="instrument-foot"><span>Choose a discipline to explore</span><span>DESIGN / BUILD / PROTECT</span></div>
      </div>
    </section>
  );
}
