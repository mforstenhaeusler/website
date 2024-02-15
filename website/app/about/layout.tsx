import Navbar from '../../src/components/navbar';
import Footer from '../../src/components/footer';

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
    <div>
      <Navbar landingPage={false}/>
      <main className="flex-grow p-4">
          {children}
      </main> 
      <Footer />
    </div>
  )
}
