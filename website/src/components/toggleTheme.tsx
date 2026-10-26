'use client';

import { useSyncExternalStore } from 'react';

const subscribe = () => () => {};
const getSnapshot = () => true;
const getServerSnapshot = () => false;
import { useTheme } from 'next-themes';
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export default function ToggleTheme({ className = '' }: { className?: string }) {
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const dark = mounted && resolvedTheme === 'dark';
  const Icon = dark ? SunIcon : MoonIcon;
  return (
    <button type="button" aria-label={dark ? 'Switch to light theme' : 'Switch to dark theme'} onClick={() => setTheme(dark ? 'light' : 'dark')} className={`flex h-12 w-12 shrink-0 items-center justify-center ${className}`}>
      <Icon aria-hidden="true" className="h-6 w-6" />
    </button>
  );
}
