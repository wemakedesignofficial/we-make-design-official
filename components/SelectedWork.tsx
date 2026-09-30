import Image from 'next/image';
import Reveal from './Reveal';
import { INSTAGRAM_URL } from '@/lib/site';

const work = [
  { title: 'Cherry Celebrations', category: 'Wedding & events website', tag: 'Client project', image: '/assets/cherry-showcase-mockup.jpg', alt: 'Cherry Celebrations website mockups shown across a laptop, tablet and phone', href: '/work/cherry-celebrations/', className: 'work-card-cherry' },
  { title: 'Handmade Haven', category: 'E-commerce', tag: 'Concept', image: '/handmade-haven.jpg', alt: 'Handmade Haven e-commerce concept shown on desktop and mobile', href: '/work/handmade-haven/', className: 'work-card-handmade' },
  { title: 'Architecture Studio', category: 'Interior & architecture website', tag: 'Concept', image: '/architecture-studio.jpg', alt: 'Architecture Studio concept displayed on a laptop in a warm interior', href: '/work/architecture-studio/', className: 'work-card-architecture' },
  { title: 'Invitation', category: 'Interactive wedding invitation', tag: 'Experience preview', video: '/assets/invitation-demo.mp4', poster: '/assets/digital-invitation-sample.png', alt: 'A floral digital wedding invitation preview', href: INSTAGRAM_URL, external: true, className: 'work-card-invitation' },
  { title: 'Poster Design', category: 'Film & gaming', tag: 'Service sample', image: '/assets/brochure-posters.png', alt: 'Poster design services brochure sample', href: INSTAGRAM_URL, external: true, className: 'work-card-poster' },
];

export default function SelectedWork() {
  return (
    <section className="work-section" id="work" aria-labelledby="work-title">
      <div className="container work-container">
        <div className="work-heading">
          <Reveal className="work-heading-main"><p className="eyebrow">Selected work / Shared when ready</p><h2 id="work-title">A selection of work<br />we can share.</h2></Reveal>
          <Reveal className="work-heading-aside"><p>Some projects stay private until launch. This is a small selection of work currently cleared to share, including a client project and clearly labelled concepts.</p><a className="button button-outline" href="#work-grid">View Selected Work <span aria-hidden="true">↗</span></a></Reveal>
        </div>
        <div className="work-grid" id="work-grid">
          {work.map((project, index) => <Reveal key={project.title} className={`work-card ${project.className}`}>
            <a className="work-card-link" href={project.href} target={project.external ? '_blank' : undefined} rel={project.external ? 'noreferrer' : undefined} aria-label={`${project.title}, ${project.tag}. ${project.external ? 'Opens Instagram' : 'View project'}`}>
              <div className="work-card-media">
                {project.video ? <video src={project.video} poster={project.poster} muted loop autoPlay playsInline preload="metadata" aria-label={project.alt} /> : <Image src={project.image!} alt={project.alt} fill sizes="(max-width: 767px) 92vw, (max-width: 1024px) 46vw, 42vw" />}
                <span className="work-card-arrow" aria-hidden="true">↗</span>
                <span className="work-card-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              </div>
              <div className="work-card-info"><div><p className="work-card-tag">{project.tag}</p><h3>{project.title}</h3><p className="work-card-category">{project.category}</p></div><span className="work-card-open" aria-hidden="true">↗</span></div>
            </a>
          </Reveal>)}
        </div>
        <p className="work-permission-note">A number of current and upcoming projects can?t be shown until launch. We?ll share more as permissions allow.</p>
      </div>
    </section>
  );
}
