'use client';
import { useState } from 'react';
import Image from 'next/image';
import { INSTAGRAM_URL } from '@/lib/site';

export default function Nav() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="nav"><a className="wordmark" href="#top" aria-label="We Make Design home"><Image src="/wm-logo.png" alt="We Make Designs WM logo" width={126} height={76} priority /></a><button className="menu-toggle" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-expanded={open} onClick={() => setOpen(!open)}><span/><span/></button><nav className={open ? 'is-open' : ''} aria-label="Main navigation"><a href="#work" onClick={close}>Work</a><a href="#services" onClick={close}>Services</a><a href="#about" onClick={close}>About</a><a href="#process" onClick={close}>Process</a><a className="nav-cta" href="#contact" onClick={close}>Start a project <span aria-hidden="true">↗</span></a></nav></header>;
}
