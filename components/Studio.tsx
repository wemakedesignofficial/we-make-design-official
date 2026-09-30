import Reveal from './Reveal';
import StudioLogo from './StudioLogo';

const services = [
  ['01', 'Website design & development', 'From considered business sites to custom web experiences.'],
  ['02', 'Web security & vulnerability assessments', 'Practical reviews to find risks and improve website security.'],
  ['03', 'Digital invitations', 'Personal, responsive invitations for events and celebrations.'],
  ['04', 'Poster & graphic design', 'Clear, distinctive visuals for campaigns, events, and brands.'],
];

export default function Studio() {
  return (
    <section className="studio container section-pad" id="studio">
      <Reveal className="studio-visual">
        <p className="eyebrow">Our studio</p>
        <h2>We make thoughtful digital design work for your business.</h2>
        <div className="studio-image studio-brand-visual">
          <StudioLogo />
        </div>
        <p className="studio-supporting-line">Designer and developer in one team, so nothing gets lost between design and code.</p>
      </Reveal>
      <Reveal className="studio-copy">
        <p className="studio-intro" id="about">We Make Design is an independent creative and technology studio. We design and build websites, review web security, and create digital invitations and posters for small businesses, event brands, and growing teams.</p>
        <div className="service-rows" id="services-list">
          {services.map(([number, title, description]) => (
            <div className="service-row" key={number}>
              <span>{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <a className="text-link" href="#contact">How we can help <span>→</span></a>
      </Reveal>
    </section>
  );
}
