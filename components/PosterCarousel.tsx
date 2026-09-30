'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

type PosterSlide = { src: string; alt: string };

export default function PosterCarousel({ slides }: { slides: PosterSlide[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener('change', updatePreference);
    return () => preference.removeEventListener('change', updatePreference);
  }, []);

  useEffect(() => {
    if (paused || reducedMotion || slides.length < 2) return;
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 4800);
    return () => window.clearInterval(timer);
  }, [activeIndex, paused, reducedMotion, slides.length]);

  const showPrevious = () => setActiveIndex((current) => (current - 1 + slides.length) % slides.length);
  const showNext = () => setActiveIndex((current) => (current + 1) % slides.length);

  return (
    <div
      className="poster-carousel"
      role="region"
      aria-label="Poster design gallery"
      aria-roledescription="carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget as Node | null)) setPaused(false);
      }}
      onTouchStart={(event) => { touchStartX.current = event.touches[0]?.clientX ?? null; }}
      onTouchEnd={(event) => {
        const startX = touchStartX.current;
        const endX = event.changedTouches[0]?.clientX;
        touchStartX.current = null;
        if (startX === null || endX === undefined) return;
        const distance = endX - startX;
        if (Math.abs(distance) > 44) distance < 0 ? showNext() : showPrevious();
      }}
    >
      {slides.map((slide, index) => (
        <div
          className={`poster-slide${index === activeIndex ? ' is-active' : ''}`}
          aria-hidden={index !== activeIndex}
          key={slide.src}
        >
          <Image src={slide.src} alt={slide.alt} fill sizes="(max-width: 700px) 90vw, (max-width: 1100px) 44vw, 30vw" priority={index === 0} />
        </div>
      ))}
      <button className="poster-arrow poster-arrow-previous" type="button" onClick={showPrevious} aria-label="Previous poster">←</button>
      <button className="poster-arrow poster-arrow-next" type="button" onClick={showNext} aria-label="Next poster">→</button>
      <span className="poster-counter" aria-live="polite" aria-atomic="true">{String(activeIndex + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
    </div>
  );
}
