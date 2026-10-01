import Image from 'next/image';
import Reveal from './Reveal';
import RotatingBadge from './RotatingBadge';
import { EMAIL_ADDRESS } from '@/lib/site';

const services = [
  { number: '01', title: 'Web Development', copy: 'Business websites, e-commerce and custom builds shaped around the way you work.', subject: 'Website enquiry', icon: 'web' },
  { number: '02', title: 'Digital Invitations', copy: 'Interactive envelope reveals with event details, countdowns, venues and schedules.', subject: 'Digital invitation enquiry', icon: 'invite' },
  { number: '03', title: 'Cybersecurity', copy: 'Vulnerability assessments, SSL and header checks, OWASP Top 10 review, and a written report.', subject: 'Security check enquiry', icon: 'security' },
  { number: '04', title: 'Graphic Design', copy: 'Posters, social creatives and brand visuals for events, releases and growing businesses.', subject: 'Graphic design enquiry', icon: 'design' },
];

function ServiceIcon({ name }: { name: string }) {
  const common = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.5, strokeLinecap: 'round' as const, strokeLinejoin: 'round' as const };
  return <svg viewBox="0 0 48 48" aria-hidden="true" {...common}>
    {name === 'web' && <><rect x="7" y="8" width="34" height="27" rx="2"/><path d="M7 15h34M13 11.5h.1M17 11.5h.1M24 41h-5m5 0h5m-5-6v6"/><path d="m17 26 5 4 9-9"/></>}
    {name === 'invite' && <><rect x="6" y="12" width="36" height="25" rx="2"/><path d="m7 14 17 13 17-13M7 36l12-10m22 10L29 26"/><path d="M24 4v4m-2-2h4"/></>}
    {name === 'security' && <><path d="M24 5 39 11v11c0 10-7 17-15 21C16 39 9 32 9 22V11l15-6Z"/><rect x="18" y="21" width="12" height="10" rx="2"/><path d="M21 21v-3a3 3 0 0 1 6 0v3m-3 4v2"/></>}
    {name === 'design' && <><path d="M11 8h26v32H11zM17 14h14M17 20h10M17 28l4-4 4 4 6-7"/><circle cx="32" cy="14" r="1"/></>}
  </svg>;
}

export default function Expertise() {
  return (
    <section className="expertise-section" id="expertise" aria-labelledby="expertise-title">
      <div className="container expertise-container">
        <div className="expertise-heading">
          <Reveal className="expertise-heading-main"><p className="eyebrow">Expertise</p><h2 id="expertise-title">From ideas to impactful digital experiences.</h2></Reveal>
          <Reveal className="expertise-intro"><p>Design, development and security in one thoughtful process, from first sketch to a site ready to meet the world.</p></Reveal>
          <Reveal className="expertise-photo-wrap"><div className="expertise-photo"><Image src="/assets/studio.jpg" alt="A warm, sunlit studio table with materials laid out for a design project" fill sizes="(max-width: 700px) 92vw, 38vw" /></div><span className="photo-caption">A place to make ideas tangible</span></Reveal>
          <RotatingBadge />
        </div>
        <div className="expertise-grid">
          {services.map((service) => <Reveal className="expertise-card" key={service.number}>
            <div className="expertise-card-top"><span className="service-number">{service.number}</span><ServiceIcon name={service.icon} /></div>
            <h3>{service.title}</h3><p>{service.copy}</p>
            <div className="expertise-card-actions"><a href="#contact">Learn More <span aria-hidden="true">→</span></a><a className="service-email" href={`mailto:${EMAIL_ADDRESS}?subject=${encodeURIComponent(service.subject)}`} aria-label={`Email us about ${service.title}`}>Email <span aria-hidden="true">↗</span></a></div>
          </Reveal>)}
        </div>
        <div className="expertise-footer"><span>Our capabilities</span><span>01 — 04 / Design, build, protect, create</span></div>
      </div>
    </section>
  );
}
