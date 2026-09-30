import Image from 'next/image';
import Reveal from './Reveal';
import PosterCarousel from './PosterCarousel';
import { INSTAGRAM_URL } from '@/lib/site';

type PosterSlide = { src: string; alt: string };
type WorkItem = {
  title: string;
  category: string;
  tag: string;
  href: string;
  className: string;
  external?: boolean;
  image?: string;
  alt?: string;
  video?: string;
  poster?: string;
  gallery?: PosterSlide[];
};

const posterSlides: PosterSlide[] = [
  { src: '/assets/posters/jbl-headphones.jpg', alt: 'JBL headphones promotional poster in yellow and blue' },
  { src: '/assets/posters/nike-air-jordan.jpg', alt: 'Red and white Nike Air Jordan sneaker poster' },
  { src: '/assets/posters/valorant-phoenix.jpg', alt: 'Dark red Valorant Phoenix character poster' },
  { src: '/assets/posters/heart-of-stone.jpg', alt: 'Heart of Stone film poster with cast and title' },
  { src: '/assets/posters/blackpink.jpg', alt: 'Purple and pink Blackpink music poster' },
  { src: '/assets/posters/industry-hit.jpg', alt: 'Golden orange Industry Hit film poster' },
  { src: '/assets/posters/lokah-chandra.jpg', alt: 'Blue Lokah Chapter 1 Chandra film poster' },
];

const invitationSlides: PosterSlide[] = [
  { src: '/assets/invitations/invitation-phone-nikhil-ananya.jpg', alt: 'Floral digital wedding invitation displayed on a phone; names and event details are illustrative template content.' },
  { src: '/assets/invitations/invitation-tablet-rohan-diya.jpg', alt: 'Floral digital wedding invitation displayed on a tablet; names and event details are illustrative template content.' },
  { src: '/assets/invitations/invitation-phone-backwater.jpg', alt: 'Digital wedding invitation with a backwater scene displayed on a phone; names and event details are illustrative template content.' },
];

const work: WorkItem[] = [
  { title: 'Cherry Celebrations', category: 'Wedding & events website', tag: 'Client project', image: '/assets/cherry-showcase-mockup.jpg', alt: 'Cherry Celebrations website shown across laptop, tablet and phone', href: '/work/cherry-celebrations/', className: 'work-card-cherry' },
  { title: 'Handmade Haven', category: 'E-commerce', tag: 'Concept', image: '/handmade-haven.jpg', alt: 'Handmade Haven storefront shown across laptop, tablet and phone', href: '/work/handmade-haven/', className: 'work-card-handmade' },
  { title: 'Architecture Studio', category: 'Interior & architecture website', tag: 'Concept', image: '/architecture-studio.jpg', alt: 'Architecture Studio concept displayed on a laptop in a warm interior', href: '/work/architecture-studio/', className: 'work-card-architecture' },
  { title: 'Digital Invitations', category: 'Names and event details shown are illustrative samples', tag: 'Template concepts', gallery: invitationSlides, href: INSTAGRAM_URL, external: true, className: 'work-card-invitation' },
  { title: 'Poster Design', category: 'Film, music & gaming', tag: 'Selected designs', gallery: posterSlides, href: INSTAGRAM_URL, external: true, className: 'work-card-poster' },
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
            {project.gallery ? (
              <article className="work-card-link">
                <div className="work-card-media">
                  <PosterCarousel slides={project.gallery} label={project.title === 'Digital Invitations' ? 'Digital invitation template gallery' : 'Poster design gallery'} />
                  <span className="work-card-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="work-card-info"><div><p className="work-card-tag">{project.tag}</p><h3>{project.title}</h3><p className="work-card-category">{project.category}</p></div><a className="work-card-open work-card-open-link" href={project.href} target="_blank" rel="noreferrer" aria-label="See more designs on Instagram">↗</a></div>
              </article>
            ) : (
              <a className="work-card-link" href={project.href} target={project.external ? '_blank' : undefined} rel={project.external ? 'noreferrer' : undefined} aria-label={`${project.title}, ${project.tag}. ${project.external ? 'Opens Instagram' : 'View project'}`}>
                <div className="work-card-media">
                  {project.video ? <video src={project.video} poster={project.poster} muted loop autoPlay playsInline preload="metadata" aria-label={project.alt} /> : <Image src={project.image!} alt={project.alt!} fill sizes="(max-width: 767px) 92vw, (max-width: 1024px) 46vw, 42vw" />}
                  <span className="work-card-arrow" aria-hidden="true">↗</span>
                  <span className="work-card-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
                </div>
                <div className="work-card-info"><div><p className="work-card-tag">{project.tag}</p><h3>{project.title}</h3><p className="work-card-category">{project.category}</p></div><span className="work-card-open" aria-hidden="true">↗</span></div>
              </a>
            )}
          </Reveal>)}
        </div>
        <p className="work-permission-note">A number of current and upcoming projects can&apos;t be shown until launch. We&apos;ll share more as permissions allow.</p>
      </div>
    </section>
  );
}
