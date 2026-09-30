import Image from 'next/image';
import Reveal from './Reveal';

const projects = [
  { title: 'Handmade Haven', tag: 'Concept design', subtitle: 'E-commerce website concept', image: '/handmade-haven.jpg', alt: 'Handmade Haven responsive online shop shown on a laptop, phone, and tablet', slug: 'handmade-haven' },
  { title: 'Architecture Studio', tag: 'Concept design', subtitle: 'Interior & architecture website', image: '/architecture-studio.jpg', alt: 'Architecture Studio website shown on a laptop in a warm interior', slug: 'architecture-studio' },
  { title: 'Cherry Celebrations', tag: 'Client project', subtitle: 'Wedding & event planner website', image: '/digital-invitation.jpg', alt: 'Cherry Celebrations website shown across multiple devices', slug: 'cherry-celebrations' },
];

export default function ProjectGrid() {
  return (
    <div className="project-grid" id="projects">
      {projects.map((project, index) => (
        <Reveal className="project-reveal" key={project.slug}>
          <a className="project-card" href={`/work/${project.slug}/`}>
            <div className="project-image">
              <Image src={project.image} alt={project.alt} fill sizes="(max-width: 700px) 100vw, 90vw" priority={index === 0} />
            </div>
            <div className="project-copy">
              <p className="eyebrow">{project.tag}</p>
              <h3>{project.title}</h3>
              <p>{project.subtitle}</p>
              <span className="text-link">View project <span>↗</span></span>
            </div>
          </a>
        </Reveal>
      ))}
    </div>
  );
}
