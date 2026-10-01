import Image from 'next/image';
import Reveal from './Reveal';
import { EMAIL_ADDRESS, INSTAGRAM_URL } from '@/lib/site';
import MagneticLink from './MagneticLink';

export default function ContactCta() {
  return (
    <section className="contact-section" id="contact" aria-labelledby="contact-title">
      <Image className="contact-background" src="/hero.jpg" alt="" fill sizes="100vw" />
      <div className="contact-shade" aria-hidden="true" />
      <div className="container contact-layout">
        <Reveal className="contact-copy"><p className="eyebrow">Let&apos;s make it happen</p><h2 id="contact-title">Have a project<br />in mind?</h2><p>Let&apos;s bring your ideas to life. Get in touch for a free consultation.</p>
          <div className="contact-actions"><MagneticLink className="button button-lime" href={`mailto:${EMAIL_ADDRESS}?subject=Project%20enquiry`}>Get a Quote <span aria-hidden="true">&rarr;</span></MagneticLink><a className="button button-ghost" href={INSTAGRAM_URL} target="_blank" rel="noreferrer">Message on Instagram <span aria-hidden="true">&#8599;&#65038;</span></a></div>
          <p className="contact-note">Tip: DM the word SITE for a website quote.</p>
        </Reveal>
        <div className="contact-side-list" aria-hidden="true"><span>WEBSITES</span><span>INVITATIONS</span><span>SECURITY</span><span>DESIGN</span><span>AND MORE</span></div>
      </div>
    </section>
  );
}
