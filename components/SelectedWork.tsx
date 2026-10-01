import Image from 'next/image';
import Reveal from './Reveal';

const work = [
  { title: 'Cherry Celebrations', category: 'Wedding & events website', tag: 'Client project', image: '/assets/cherry-celebrations-new-1600x900.jpg', alt: 'Updated Cherry Celebrations wedding website design displayed across desktop and mobile screens', href: '/work/cherry-celebrations/', className: 'work-card-cherry' },
  { title: 'Handmade Haven', category: 'E-commerce', tag: 'Concept', image: '/assets/handmade-haven-1200x900.jpg', alt: 'Updated Handmade Haven e-commerce concept shown on desktop and mobile', href: '/work/handmade-haven/', className: 'work-card-handmade' },
  { title: 'Architecture Studio', category: 'Interior & architecture website', tag: 'Concept', image: '/assets/architecture-studio-1200x900.jpg', alt: 'Updated Architecture Studio website concept displayed on screen', href: '/work/architecture-studio/', className: 'work-card-architecture' },
  { title: 'Invitation', category: 'Interactive wedding invitation', tag: 'Experience preview', video: '/assets/invitation-demo.mp4', poster: '/assets/digital-wedding-invitation-custom-concept-01.png', alt: 'Burgundy floral digital wedding invitation for Anaya and Rohan', href: '/work/digital-wedding-invitation/', className: 'work-card-invitation' },
  { title: 'Poster Design', category: 'Film & gaming', tag: 'Service sample', image: '/assets/posters-1200x900.jpg', alt: 'Poster design portfolio sample showing custom artwork for film, events and gaming', href: '/work/poster-design/', className: 'work-card-poster' },
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
            <a className="work-card-link" href={project.href} aria-label={`${project.title}, ${project.tag}. View project`}>
              <div className="work-card-media">
                {project.video ? <video src={project.video} poster={project.poster} muted loop autoPlay playsInline preload="none" aria-label={project.alt} /> : <Image src={project.image!} alt={project.alt} fill loading="lazy" sizes="(max-width: 767px) 92vw, (max-width: 1024px) 46vw, 42vw" />}
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
