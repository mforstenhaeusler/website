// components/ThemeToggle.tsx
'use client';

import React, { useEffect } from 'react';
import { useTheme } from 'next-themes';
import Button from './button';

interface ThemeToogleProps {
  systemTheme?: boolean;
  className?: string;
  //onClick?: () => void;
}

type themeIconProps = {
  theme: string, 
  systemTheme: boolean,
}

//const selectThemeIcon: React.FC<themeIconProps> = ({ theme, systemTheme }) => {
  //if (systemTheme) {
  //  
  //}
  //return (
    
    // light 
    //<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //  <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
    //</svg>

    // dark 
    //<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    //  <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
    //</svg>
//  )
//
//};

const ToggleTheme: React.FC<ThemeToogleProps> = ({ 
    className = "", systemTheme = false //window.matchMedia('(prefers-color-scheme: dark)').matches
  }) => {
  
    const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    setTheme(theme === 'dark' ? 'light' : 'dark');
    //console.log('theme')
    //console.log(theme)
    //console.log('systemTheme')
    //console.log(systemTheme)
    //console.log('localStorage')
    //console.log(localStorage.getItem('theme'))
    const htmlDOC = document.querySelector("html");
    if (theme === 'dark'){
      if (htmlDOC !== null) {
        htmlDOC.setAttribute("data-theme", "light");
      }
    } else {
      if (htmlDOC !== null) {
        htmlDOC.setAttribute("data-theme", "dark");
      }
    }
    

  }

  const checkTheme = () => {
    //console.log('theme')
    //console.log(theme)
    //console.log('systemTheme')
    //console.log(systemTheme)
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && systemTheme)) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  } 
  //console.log(document.documentElement.classList)
  //console.log(systemTheme)
  //console.log(theme)

  useEffect(() =>{
    checkTheme();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <Button
      type="button"
      onClick={toggleTheme}
      className={className}
    > 
    <div className="p-3">
      {theme === 'light' ? 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386-1.591 1.591M21 12h-2.25m-.386 6.364-1.591-1.591M12 18.75V21m-4.773-4.227-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
        </svg>
      : 
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.72 9.72 0 0 1 18 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 0 0 9.002-5.998Z" />
        </svg>
      }
    </div>
      
    </Button>
  );
};


export default ToggleTheme;

