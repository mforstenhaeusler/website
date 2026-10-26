'use client';

import { useEffect, useState } from 'react';
import { photoGroups } from '@/data/photos';

export default function SlantedImages() {
  const [selected, setSelected] = useState(() => photoGroups.map(group => group.photos[0]));

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    let timers: ReturnType<typeof setInterval>[] = [];
    const updateTimers = () => {
      timers.forEach(clearInterval);
      timers = [];
      if (reducedMotion.matches) return;
      timers = photoGroups.map((group, index) => setInterval(() => {
        if (document.hidden) return;
        setSelected(current => {
          const alternatives = group.photos.filter(photo => photo !== current[index]);
          return current.map((photo, position) => position === index ? alternatives[Math.floor(Math.random() * alternatives.length)] : photo);
        });
      }, group.interval));
    };
    updateTimers();
    reducedMotion.addEventListener('change', updateTimers);
    return () => {
      timers.forEach(clearInterval);
      reducedMotion.removeEventListener('change', updateTimers);
    };
  }, []);

  return (
    <div aria-label="A few moments from my travels" className="relative mt-16 h-[220px] overflow-hidden sm:mt-20 sm:h-[352px]">
      {/* Intentionally wider than the page: center the strip and crop its outer edges. */}
      <div className="absolute left-1/2 top-0 flex w-max -translate-x-1/2 justify-center gap-5 py-3 sm:gap-8">
        {photoGroups.map((group, index) => (
          <div key={group.photos[0]} className={`relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-secondary sm:w-72 sm:rounded-2xl ${group.rotation}`}>
            {/* Static exports use pre-generated images without an image server. */}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={`/images/optimized/${selected[index]}-360.webp`} srcSet={`/images/optimized/${selected[index]}-360.webp 360w, /images/optimized/${selected[index]}-720.webp 720w`} sizes="(min-width: 640px) 288px, 176px" width={360} height={400} alt="" loading="lazy" decoding="async" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}
