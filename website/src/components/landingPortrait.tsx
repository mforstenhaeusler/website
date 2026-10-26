'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function LandingPortrait() {
  const origin = useRef<HTMLDivElement>(null);
  const portrait = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const source = origin.current;
    const image = portrait.current;
    const destination = document.querySelector<HTMLElement>('[data-portrait-target]');
    if (!source || !image || !destination) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let frame = 0;

    const update = () => {
      frame = 0;
      const from = source.getBoundingClientRect();
      const to = destination.getBoundingClientRect();
      const scroll = Math.max(0, window.scrollY);
      const travel = Math.max(1, from.top + scroll - to.top);
      const progress = Math.min(1, scroll / travel);
      // Reduced motion keeps natural scrolling, then switches directly to the small portrait.
      const morph = reducedMotion.matches ? Number(progress === 1) : progress;
      const x = from.left + (to.left - from.left) * morph;
      const y = Math.max(from.top, to.top);
      const scale = 1 + (to.width / from.width - 1) * morph;

      image.style.position = 'fixed';
      image.style.left = '0';
      image.style.top = '0';
      image.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${scale})`;
    };

    const schedule = () => {
      if (!frame) frame = window.requestAnimationFrame(update);
    };

    // Measure both slots so the photo still docks correctly after a resize or orientation change.
    const observer = new ResizeObserver(schedule);
    observer.observe(source);
    observer.observe(destination);
    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    window.addEventListener('pageshow', schedule);
    reducedMotion.addEventListener('change', schedule);
    update();

    return () => {
      window.cancelAnimationFrame(frame);
      observer.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      window.removeEventListener('pageshow', schedule);
      reducedMotion.removeEventListener('change', schedule);
    };
  }, []);

  return (
    <div className="flex h-28 items-center px-4">
      <div ref={origin} className="h-24 w-24 shrink-0">
        <Link ref={portrait} href="/" aria-label="Maximilian Forstenhäusler — home" className="relative z-40 block h-24 w-24 origin-top-left rounded-full">
          <Image unoptimized priority src="/headshot/IMG_0443.jpeg" alt="Maximilian Forstenhäusler" width={96} height={96} className="h-full w-full rounded-full border border-navBorder bg-primary object-cover p-0.5" />
        </Link>
      </div>
    </div>
  );
}
