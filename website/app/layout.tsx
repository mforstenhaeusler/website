import type { Metadata, Viewport } from 'next';
import { GoogleTagManager } from '@next/third-parties/google';
import { ThemeProvider } from '../src/components/themeProvider';
import '../globals.css';

export const metadata: Metadata = {
  title: { default: 'Maximilian Forstenhäusler', template: '%s | Maximilian Forstenhäusler' },
  description: 'Machine learning researcher working on federated learning, privacy, and representation learning. Explore my publications, projects, and experience.',
  icons: { icon: '/headshot/favicon.jpg' },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen bg-secondary text-primary antialiased">
        <a href="#main-content" className="skip-link">Skip to content</a>
        <ThemeProvider attribute="data-theme" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="mx-auto min-h-screen w-full max-w-[1440px] bg-primary shadow-lg md:w-[calc(100%-3rem)] lg:w-[calc(100%-6rem)]">
            {children}
          </div>
        </ThemeProvider>
        <GoogleTagManager gtmId="GTM-WNKKFJF4" />
      </body>
    </html>
  );
}
