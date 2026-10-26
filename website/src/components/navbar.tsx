'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import ToggleTheme from './toggleTheme';

export default function Navbar({ landingPage = true }: { landingPage: boolean }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const nav = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (!nav.current?.contains(event.target as Node)) setOpen(false);
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener('pointerdown', closeOutside);
    document.addEventListener('keydown', closeOnEscape);
    return () => {
      document.removeEventListener('pointerdown', closeOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return (
    <header className={`${landingPage ? 'sticky top-0 bg-primary' : 'relative'} z-30 px-4 py-5 sm:px-8`}>
      <nav ref={nav} aria-label="Main navigation" className="relative mx-auto flex w-full max-w-6xl items-center justify-between gap-3">
        {landingPage ? (
          <span data-portrait-target aria-hidden="true" className="block h-12 w-12 shrink-0" />
        ) : (
          <Link href="/" aria-label="Maximilian Forstenhäusler — home" className="shrink-0">
            <Image unoptimized src="/headshot/IMG_0443.jpeg" alt="" width={48} height={48} className="h-12 w-12 rounded-full border border-navBorder object-cover" />
          </Link>
        )}
        <div id="nav-links" className={`${open ? 'flex' : 'hidden'} absolute right-0 top-full mt-3 min-w-[12rem] flex-col rounded-2xl border border-navBorder bg-primary p-2 shadow-lg lg:static lg:mt-0 lg:flex lg:min-w-0 lg:flex-row lg:rounded-full lg:px-4 lg:shadow-sm`}>
          {[{ href: '/about', label: 'About' }, { href: '/publications&projects', label: 'Projects' }].map(({ href, label }) => (
            <Link key={href} href={href} aria-current={pathname === href ? 'page' : undefined} onClick={() => setOpen(false)} className={`flex min-h-11 items-center rounded-lg px-3 text-base hover:text-hover ${pathname === href ? 'text-hover underline underline-offset-4' : 'text-primary'}`}>{label}</Link>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <button ref={toggle} type="button" aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen(!open)} className="min-h-11 rounded-full border border-navBorder bg-primary px-5 text-primary shadow-sm lg:hidden">Menu <span aria-hidden="true">{open ? '▴' : '▾'}</span></button>
          <ToggleTheme className="rounded-full border border-navBorder bg-primary text-primary shadow-sm hover:text-hover" />
        </div>
      </nav>
    </header>
  );
}
