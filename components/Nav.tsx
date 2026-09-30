'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

const links = [
  { label: 'Studio', href: '#top', section: 'top' },
  { label: 'Expertise', href: '#expertise', section: 'expertise' },
  { label: 'Selected Work', href: '#work', section: 'work' },
  { label: 'About', href: '#about', section: 'about' },
  { label: 'Contact', href: '#contact', section: 'contact' },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('top');
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const targets = links.map(({ section }) => document.getElementById(section)).filter((target): target is HTMLElement => Boolean(target));
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (visible) setActive(visible.target.id);
    }, { rootMargin: '-18% 0px -68% 0px', threshold: [0, 0.1, 0.35, 0.65] });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!open) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    menuRef.current?.querySelector<HTMLAnchorElement>('a')?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggleRef.current?.focus();
      }
      if (event.key !== 'Tab' || !menuRef.current) return;
      const focusable = Array.from(menuRef.current.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
      else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
    };
    document.addEventListener('keydown', onKeyDown);
    return () => { document.body.style.overflow = previousOverflow; document.removeEventListener('keydown', onKeyDown); };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className="site-nav">
      <div className="nav-inner container">
        <a className="brand-lockup" href="#top" aria-label="We Make Designs, home" onClick={close}>
          <Image src="/wm-logo.png" alt="" width={86} height={52} />
          <span><strong>We Make Designs</strong><small>Independent creative studio</small></span>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => <a key={link.section} className={active === link.section ? 'active' : ''} href={link.href}><span>{link.label}</span></a>)}
        </nav>
        <a className="nav-talk" href="#contact">Let&apos;s Talk <span aria-hidden="true">↗</span></a>
        <button ref={toggleRef} className={`menu-toggle${open ? ' is-open' : ''}`} type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen((value) => !value)}>
          <span /><span />
        </button>
      </div>
      <div ref={menuRef} id="mobile-menu" className={`mobile-menu${open ? ' is-open' : ''}`} aria-hidden={!open}>
        <div className="mobile-menu-top"><span className="eyebrow">Navigate</span><button type="button" onClick={close} aria-label="Close menu">Close <span aria-hidden="true">×</span></button></div>
        <nav aria-label="Mobile navigation">
          {links.map((link, index) => <a key={link.section} className={active === link.section ? 'active' : ''} href={link.href} onClick={close}><span className="mobile-link-index">0{index + 1}</span><span>{link.label}</span><span className="mobile-link-arrow" aria-hidden="true">↗</span></a>)}
        </nav>
        <p className="mobile-menu-foot">Design / Build / Protect</p>
      </div>
    </header>
  );
}
