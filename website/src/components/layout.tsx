import React, { ReactNode } from 'react';
import Navbar from './navbar';
import Footer from './footer';


type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <html lang="en">
            <body className="flex min-h-screen bg-skin-secondary">
                <div className="flex flex-col items-center justify-center w-screen h-screen bg-skin-primary text-skin-primary  
                    sm:mr-0 md:mr-10 lg:mr-14 xl:mr-18 2xl:mr-22 
                    sm:ml-0 md:ml-10 lg:ml-14 xl:ml-18 2xl:ml-22
                    shadow-lg"> 
                    <header className="w-full">
                        <Navbar />
                    </header>
                    <main className="flex-grow p-4">
                        {children}
                    </main> 
                    <footer>
                        <Footer></Footer>
                    </footer>
                </div>
            </body>
        </html>
    )
}

export default Layout;