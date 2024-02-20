'use client'
import React, { useEffect, useRef, useState } from 'react';
import ToggleTheme from "./toggleTheme";
import {usePathname} from 'next/navigation'; 
import Image from 'next/image';

type NavbarProps = {
  //children: ReactNode;
  landingPage: boolean;
};

const Navbar: React.FC<NavbarProps> = ({ landingPage = true}) => {
    var positionVar: 'relative' | 'static' | 'relative' | 'absolute' | 'sticky' | 'fixed' | 'undefined';
    var classNameVar: string; 

    if (landingPage){
        positionVar = 'fixed'
        classNameVar = "flex items-center lg:justify-between justify-end mx-auto\
        sm:w-[550px] md:w-[700px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1150px]"
        //items-center lg:justify-between sm:justify-end bg-yellow-200\
    } else {
        positionVar = 'relative'
        classNameVar = "flex items-center justify-between\
        sm:mx-5 md:mx-10 lg:mx-16 xl:mx-24 w-full"
        //sm:w-[400px] md:w-[700px] lg:w-[900px] xl:w-[1100px] 2xl:w-[1150px]" 
        /* bg-orange-400 */
    }

    let systemTheme;

    if (typeof window !== 'undefined') {
    // This code will only run in the browser
    systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
    } else {
    // Fallback if window is not defined (e.g., during server-side rendering)
    systemTheme = false; // Or any default value you prefer
    }
    //const [mediaWidth, setMediaWidth] = useState(window.innerWidth)
    //const [textUnderlineOffset, setTextUnderlineOffset] = useState(window.innerWidth)
    const textUnderlineOffset = '15px'

    const handleDropDown = () => {
        const navLinks = document.getElementById('nav-links')//document.querySelector('nav-links')
        
        try {
            console.log(navLinks)
            if (navLinks?.classList.contains('top-[-200px]')){
                navLinks?.classList.remove('top-[-200px]')
                navLinks?.classList.add('top-16')
                
                
            } else {
                navLinks?.classList.remove('top-16')
                navLinks?.classList.add('top-[-200px]')
            }
        } catch {
            console.log(Error)
        }
    }
    const pathname = usePathname()
    console.log(pathname)

    const checkScreenWidth = () => {
        //setMediaWidth(window.innerWidth)
        const navLink1 = document.getElementById('nav-link1')//document.querySelector('nav-links')
        const navLink2 = document.getElementById('nav-link2')
        const navLink3 = document.getElementById('nav-link3')

        if (pathname === "/about"){
            console.log(navLink1?.classList.contains('underline'))
            console.log(window.innerWidth)
            if (navLink1?.classList.contains('underline')){
                if (window.innerWidth <= 1024){ // medium and small 
                    navLink1?.classList.remove('underline')
                }
            } else {
                if (navLink1?.classList.contains('underline') === false){
                    if (window.innerWidth > 1024){ 
                        navLink1?.classList.add('underline')
                    }
                }
            }
            console.log('check')
            console.log(navLink1?.classList)
        } if (pathname === "/publications&projects"){
            console.log(navLink2?.classList.contains('underline'))
            console.log(window.innerWidth)
            if (navLink2?.classList.contains('underline')){
                if (window.innerWidth <= 1024){ // medium and small 
                    navLink2?.classList.remove('underline')
                }
            } else {
                if (navLink2?.classList.contains('underline') === false){
                    if (window.innerWidth > 1024){ 
                        navLink2?.classList.add('underline')
                    }
                }
            }
            console.log('check')
            console.log(navLink1?.classList)
        }
    }

    useEffect(() => {
        setInterval(checkScreenWidth, 1000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    

    return (
        <header  className="w-full flex items-center justify-center p-5 h-[100px]">
            <nav id="Navbar" className={classNameVar}
                style={{
                    //marginTop: '300px',
                    position: positionVar,
                }}
            >
                <div id="NavIcon" className='w-12 h-12'>
                {landingPage ? 
                    <div className=''> </div>
                :
                    <a href="/">
                        <img
                            src="/headshot/IMG_0443.jpeg"
                            alt="Round Image"
                            className="rounded-full w-12 h-12 object-cover bg-primary p-0.5 border border-nav shadow-sm"
                        />
                    </a>
                }
                </div>
                <div id="nav-links" className='absolute lg:static lg:top-0 right-10 bg-primary top-[-200px] border border-nav lg:rounded-3xl rounded-xl px-5 py-1'> 
                    <ul className='flex flex-col lg:flex-row lg:items-center lg:gap-5 p-1 list-none'>    
                        <li>
                            {pathname === "/about" ? 
                                <a id="nav-link1" href={pathname} className="text-lg text-hover underline ml-0 sm:py-1 lg:py-0" 
                                style={{ 
                                    textUnderlineOffset: `${textUnderlineOffset}`,
                                    //background: "linear-gradient(to right, transparent 0%, #f00 50%, transparent 100%)",
                                }}>
                                    About
                                </a>
                                :
                                <a id="nav-link1" href="/about" className="text-lg text-primary rounded-lg hover:text-hover sm:py-1 lg:py-0">
                                    About
                                </a>
                            }
                        </li>
                        <li>
                            {pathname === "/publications&projects" ? 
                                <a id="nav-link2" href={pathname} className="text-lg text-hover underline ml-0 sm:py-1 lg:py-0" 
                                style={{ 
                                    textUnderlineOffset: `${textUnderlineOffset}`,
                                    //background: "linear-gradient(to right, transparent 0%, #f00 50%, transparent 100%)",
                                }}>
                                    Projects
                                </a>
                                :
                                <a id="nav-link2" href="/publications&projects" className="text-lg text-primary rounded-lg hover:text-hover sm:py-1 lg:py-0">
                                    Projects
                                </a>
                            }
                        </li>
                        {/*<li>
                        {pathname === "/myjourney" ? 
                                <a id="nav-link3" href={pathname} className="text-lg text-hover underline ml-0 sm:py-1 lg:py-0" 
                                style={{ 
                                    textUnderlineOffset: `${textUnderlineOffset}`,
                                    //background: "linear-gradient(to right, transparent 0%, #f00 50%, transparent 100%)",
                                }}>
                                    My Journey
                                </a>
                                :
                                <a id="nav-link3" href="/publication&projects" className="text-lg text-primary rounded-lg hover:text-hover sm:py-1 lg:py-0">
                                    My Journey
                                </a>
                            }
                        </li>*/}
                    </ul>
                </div>
                <div className="flex items-center gap-6">
                    <button 
                        id="dropdownButton" 
                        data-dropdown-toggle="dropdown" 
                        className="text-primary hover:text-hover lg:hidden text-lg text-center inline-flex items-center justify-center bg-nav border border-navBorder rounded-3xl px-5 py-2 cursor-pointer" 
                        type="button"
                        onClick={() => handleDropDown()}
                    >
                        Menu 
                        <svg className="w-2 h-2 ms-3 bg-secondary" 
                            aria-hidden="true" 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 10 6"
                        >
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
                        </svg>
                    </button> 
                    <ToggleTheme className="ml-3 rounded-3xl text-primary bg-nav border border-navBorder hover:text-hover shadow-sm cursor-pointer" systemTheme={systemTheme}/>
                </div>
                
                
            </nav>
        </header>
    )
  
}

export default Navbar;

{/*

<div id="NavIcon" className='w-12 h-12'>
{landingPage ? 
    <div className=''></div>
:
    <a href="/">
        <img
            src="IMG_0443.jpeg"
            alt="Round Image"
            className="rounded-full w-12 h-12 object-cover bg-primary p-0.5 border border-nav shadow-sm"
        />
    </a>
}
</div>

<div className="md:grow-2 sm:grow-0 text-center space-x-4 sm:p-1 md:p-3 rounded-3xl bg-nav border border-navBorder shadow-sm">
<button 
    id="dropdownDefaultButton" 
    data-dropdown-toggle="dropdown" 
    className="text-primary hover:text-hover md:hidden text-lg rounded-lg px-3 py-2  text-center inline-flex items-center justify-center" 
    type="button"
    onClick={() => handleDropDown()}
>
    Menu 
    <svg className="w-2 h-2 ms-3" 
        aria-hidden="true" 
        xmlns="http://www.w3.org/2000/svg" 
        fill="none" 
        viewBox="0 0 10 6"
    >
        <path stroke="currentColor" stroke-linecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4"/>
    </svg>
</button> 
{colapse ? 
    openDropDown && <NavMenuItems dropdown='true'></NavMenuItems>
:
<NavMenuItems dropdown='false'></NavMenuItems>

}
                  
</div>
<ToggleTheme className="ml-3 rounded-3xl text-primary bg-nav border border-navBorder hover:text-hover shadow-sm" systemTheme={systemTheme}/>

*/}