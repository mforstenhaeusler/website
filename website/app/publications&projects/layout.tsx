import Navbar from '../../src/components/navbar';
import Footer from '../../src/components/footer';

export const metadata = {
  title: 'Publications & projects',
  description: 'Research publications and projects in machine learning, federated learning, and molecular property prediction.',
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
      <main id="main-content" className="min-w-0 flex-grow p-4">
          {children}
      </main>
      <Footer />
    </div>
  )
}
