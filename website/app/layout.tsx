import { ThemeProvider } from '../src/components/themeProvider';
//import { ScrollContainer, ScrollPage } from 'react-scroll-motion';

export const metadata = {
  title: 'M. Forstenäusler',
  description: 'M. Forstenäusler - Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // On page load or when changing themes, best to add inline in `head` to avoid FOUC
  
  return (
    <html lang="en">
      {/*<ScrollContainer>*/}
      <head> 
        <link rel="icon" href="headshot/favicon.jpg" className='rounded-full'></link>
      </head>
        <body id="body" className="flex h-full w-screen bg-secondary overflow-x-hidden" 
        >
          <ThemeProvider 
            attribute="class"
            defaultTheme="system"
            enableSystem
            //disableTransitionOnChange
          >
            <div className="
            flex flex-col bg-primary
            mx-0 sm:mx-0 md:mx-10 lg:mx-16 2xl:mx-48
            shadow-lg w-full bg-slate-400"
            >
              {children}
            </div>
          </ThemeProvider>
        </body>
      {/*</ScrollContainer>*/}
    </html>
  )
}
