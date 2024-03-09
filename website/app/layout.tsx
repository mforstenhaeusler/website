import { ThemeProvider } from '../src/components/themeProvider';
//import { ScrollContainer, ScrollPage } from 'react-scroll-motion';
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata = {
  title: 'M. Forstenhäusler',
  description: 'M. Forstenhäusler - Website',
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
        {/*<meta name="viewport" content="width=device-width, height=device-height"></meta>*/}
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        {/*<!-- Google Tag Manager -->*/}
            <script
              type="text/javascript"
              async
              dangerouslySetInnerHTML={{
                __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-WNKKFJF4')`,
              }}
            />
        {/*<!-- End Google Tag Manager -->*/}
      </head>
        <body id="body" className="flex h-full w-screen bg-secondary overflow-x-hidden">
          <div className='overflow-x-hidden'> 
            <ThemeProvider 
              attribute="class"
              defaultTheme="system"
              enableSystem
              //disableTransitionOnChange
            >
              <div className="
              flex flex-col bg-primary
              mx-0 sm:mx-0 md:mx-10 lg:mx-16 2xl:mx-48
              shadow-lg "
              >
                {children}
              </div>
            </ThemeProvider>
          </div>
          {/*<!-- Google Tag Manager -->
          <GoogleTagManager gtmId="GTM-WNKKFJF4" />
          <!-- End Google Tag Manager -->*/}
          {/*<!-- Google Tag Manager (noscript) -->*/}
          <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WNKKFJF4"
          height="0" width="0" style={{display:"none",visibility:"hidden"}}></iframe></noscript>
          {/*<!-- End Google Tag Manager (noscript) -->*/}

        </body>
      {/*</ScrollContainer>*/}
    </html>
  )
}
