import Reveal from './Reveal';

export default function Philosophy() {
  return (
    <section className="philosophy-section" id="about" aria-labelledby="philosophy-title">
      <div className="container philosophy-layout">
        <Reveal className="philosophy-visual">
          <div className="philosophy-visual-grid" />
          <svg viewBox="0 0 640 720" className="philosophy-drawing" role="presentation">
            <defs><linearGradient id="philosophy-line" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#d4f53c" stopOpacity=".9"/><stop offset="1" stopColor="#d4f53c" stopOpacity=".08"/></linearGradient><radialGradient id="philosophy-sphere"><stop stopColor="#d4f53c" stopOpacity=".48"/><stop offset="1" stopColor="#d4f53c" stopOpacity="0"/></radialGradient></defs>
            <circle cx="350" cy="330" r="205" fill="url(#philosophy-sphere)" />
            <path d="M35 540 185 388l102 72 127-207 187 103M41 608 208 448l85 60 126-191 169 91M92 153h436M73 222h480M111 291h420" fill="none" stroke="url(#philosophy-line)" strokeWidth="1" />
            <path d="M180 601V312l142-126 142 126v289M236 601V338l86-78 86 78v263M285 601V369l37-35 38 35v232" fill="none" stroke="rgba(235,231,221,.32)" strokeWidth="1" />
            <circle cx="416" cy="253" r="6" fill="#d4f53c" /><circle cx="416" cy="253" r="18" fill="none" stroke="#d4f53c" strokeOpacity=".35" />
          </svg>
          <span className="philosophy-visual-label">Ideas / Systems / People</span>
        </Reveal>
        <Reveal className="philosophy-copy">
          <p className="eyebrow">Our point of view</p>
          <h2 id="philosophy-title">Design thinking.<br />Developer mindset.<br /><span>Security focused.</span></h2>
          <p className="philosophy-description">We don&apos;t just build websites or create designs. We craft complete digital solutions with a focus on performance, security and long-term growth.</p>
          <a className="button button-dark" href="#contact">Let&apos;s Work Together <span aria-hidden="true">→</span></a>
        </Reveal>
        <div className="philosophy-side-list" aria-hidden="true"><span>IDEAS</span><span>PEOPLE</span><span>TECHNOLOGY</span><span>SECURITY</span><span>CREATIVITY</span><span>GROWTH</span></div>
        <span className="philosophy-vertical-mark" aria-hidden="true">WM / WE MAKE DESIGNS</span>
      </div>
    </section>
  );
}
