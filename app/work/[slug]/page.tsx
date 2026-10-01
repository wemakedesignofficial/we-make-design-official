import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import Reveal from '@/components/Reveal';
import StaticProjectRedirect from '@/components/StaticProjectRedirect';
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from '@/lib/site';

const projects = {
  'handmade-haven': {
    title: 'Handmade Haven', category: 'Concept design',
    description: 'A responsive e-commerce demo bringing handmade product discovery, maker stories, and warm editorial imagery together.',
    note: 'Concept website screens and visual direction.',
    images: [
      { src: '/handmade-haven.jpg', alt: 'Handmade Haven shop concept shown on a laptop, phone, and tablet', caption: 'Responsive shop mockup' },
      { src: '/assets/handmade-haven-project-board.jpg', alt: 'Handmade Haven visual direction and page concepts', caption: 'Visual direction and page concepts' },
    ],
  },
  'architecture-studio': {
    title: 'Architecture Studio', category: 'Concept design',
    description: 'An editorial architecture website concept with project storytelling, studio services, and responsive layouts.',
    note: 'Concept website screens and visual direction.',
    images: [
      { src: '/architecture-studio.jpg', alt: 'Architecture Studio website displayed on a laptop in a warm interior', caption: 'Laptop website mockup' },
      { src: '/assets/photo_2026-09-30_00-17-00.jpg', alt: 'Architecture Studio homepage, service, featured project, and process layouts', caption: 'Homepage and service direction' },
      { src: '/assets/photo_2026-09-30_00-16-59.jpg', alt: 'Architecture Studio project pages, responsive layouts, and design system', caption: 'Projects and responsive system' },
    ],
  },
  'cherry-celebrations': {
    title: 'Cherry Celebrations', category: 'Client project',
    description: 'A responsive website and visual direction created for Cherry Celebrations, shown here with desktop and mobile mockups.',
    note: 'Client website mockups and visual direction.',
    images: [
      { src: '/assets/cherry-showcase-mockup.jpg', alt: 'Cherry Celebrations event website displayed across laptop, tablet, and phone mockups', caption: 'Responsive website mockup' },
      { src: '/assets/cherry-brand-direction.jpg', alt: 'Cherry Celebrations typography, color palette, brand elements, and interface direction', caption: 'Brand and interface direction' },
      { src: '/assets/cherry-page-plan.jpg', alt: 'Cherry Celebrations hero, gallery, process, work, and responsive page plan', caption: 'Page structure and responsive layouts' },
    ],
  },
  'digital-wedding-invitation': {
    title: 'Digital Wedding Invitation', category: 'Digital invitation design',
    description: 'An interactive digital wedding invitation concept with floral artwork, event details, and a mobile-friendly presentation.',
    note: 'Digital invitation concept exploring an elegant, shareable format for wedding details.',
    images: [
      { src: '/assets/digital-invitation-sample.png', alt: 'Floral digital wedding invitation sample with event details', caption: 'Invitation concept' },
      { src: '/assets/digital-invitation-template-02.png', alt: 'Second digital wedding invitation template concept', caption: 'Alternate invitation direction' },
      { src: '/assets/digital-invitation-template-03.png', alt: 'Third digital wedding invitation template concept', caption: 'Invitation layout study' },
    ],
  },
  'poster-design': {
    title: 'Film and Gaming Poster Design', category: 'Poster design',
    description: 'Poster design concepts for film, gaming, events, and social campaigns, developed to make the central idea clear at a glance.',
    note: 'Poster and graphic design samples for entertainment and event brands.',
    images: [
      { src: '/assets/brochure-posters.png', alt: 'Poster design services and visual samples for events and entertainment', caption: 'Poster design sample' },
    ],
  },
} as const;

type Slug = keyof typeof projects;

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug as Slug];
  return {
    title: project?.title ?? 'Project not found',
    description: project?.description ?? 'Selected work by We Make Designs.',
    alternates: { canonical: `/work/${slug}/` },
    ...(project ? { openGraph: { type: 'article' as const, title: `${project.title} | ${SITE_NAME}`, description: project.description, url: `${SITE_URL}/work/${slug}/`, images: [{ url: project.images[0].src, alt: project.images[0].alt }] } } : { robots: { index: false, follow: false }, openGraph: { type: 'website' as const, title: `Project not found | ${SITE_NAME}`, description: 'This project page could not be found.', images: [DEFAULT_OG_IMAGE] } }),
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects[slug as Slug];
  if (!project) return <main className="not-found container"><p className="eyebrow">Project not found</p><h1>This project isn’t here.</h1><Link href="/">Return to We Make Design ↗</Link></main>;

  return (
    <main className="detail-page">
      <header className="nav detail-header">
        <Link className="wordmark" href="/" aria-label="We Make Design home"><Image src="/wm-logo.png" alt="We Make Designs WM logo" width={126} height={76} /></Link>
        <nav aria-label="Project navigation"><Link href="/#work">Selected work</Link><Link className="nav-cta" href="/#contact">Start a project ↗</Link></nav>
      </header>
      <section className="detail-hero container"><p className="eyebrow">{project.category}</p><h1>{project.title}</h1><p>{project.description}</p></section>
      <section className={`project-gallery project-gallery-count-${project.images.length}`} aria-label={`${project.title} project images`}>
        {project.images.map((image, index) => <Reveal className="project-gallery-item" key={image.src}><figure><div className="project-gallery-media"><Image src={image.src} alt={image.alt} fill priority={index === 0} loading={index === 0 ? undefined : 'lazy'} sizes="(max-width: 700px) 100vw, 70vw" /></div><figcaption>{image.caption}</figcaption></figure></Reveal>)}
      </section>
      <section className="detail-bottom container"><div><p className="eyebrow">About this work</p><p>{project.note}</p></div><Link href="/#work">← Back to selected work</Link><Link href="https://www.instagram.com/we_make_designs__/" target="_blank" rel="noreferrer">Discuss a project on Instagram ↗</Link></section>
    </main>
  );
}
