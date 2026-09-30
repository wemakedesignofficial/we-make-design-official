import Image from 'next/image';
import { EMAIL_ADDRESS, INSTAGRAM_URL } from '@/lib/site';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-main">
        <a className="brand-lockup footer-brand" href="#top" aria-label="We Make Designs, back to top"><Image src="/wm-logo.png" alt="" width={74} height={45} /><span><strong>We Make Designs</strong><small>Independent creative studio</small></span></a>
        <div className="footer-link-column"><p className="eyebrow">Explore</p><a href="#top">Home</a><a href="#expertise">Services</a><a href="#work">Work</a><a href="#about">About</a><a href="#contact">Contact</a></div>
        <div className="footer-link-column"><p className="eyebrow">Follow</p><a className="footer-social-link" href={INSTAGRAM_URL} target="_blank" rel="noreferrer"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r=".8" fill="currentColor" stroke="none"/></svg>Instagram</a><a className="footer-social-link" href={`mailto:${EMAIL_ADDRESS}?subject=Project%20enquiry`}><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>Email</a></div>
        <div className="footer-contact"><p className="eyebrow">Studio / Contact</p><p>Independent creative studio<br />Working worldwide</p><a href={`mailto:${EMAIL_ADDRESS}?subject=Project%20enquiry`}>{EMAIL_ADDRESS}</a></div>
      </div>
      <div className="container footer-bottom"><span>© 2026 We Make Designs</span><span>Design / Build / Protect</span></div>
    </footer>
  );
}
