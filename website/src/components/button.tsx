// components/Button.tsx
'use client'

import React, { ButtonHTMLAttributes, AnchorHTMLAttributes, useEffect, useState, LinkHTMLAttributes } from 'react';

//--fill: 'border border-zink-100 bg-zink-100 text-black';
//--outlined: 'border border-zink-800 bg-zink-100 text-black'; 
//--inverted: 'border border-zink-800 bg-zink-800 text-white';

//interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//  variant?: 'outlined' | 'filled' | 'inverted' | 'default';
//  className?: string;
//}
//
//const Button: React.FC<ButtonProps> = ({ variant = 'default', className = '', ...props }) => {
//    const [buttonClasses, setButtonClasses] = useState('');
//
//    useEffect(() => {
//        if (variant === 'filled') {
//            setButtonClasses(`${variant} border-2 border-button-filled bg-button-filled text-button-filled hover:bg-button-filled-hover hover:border-button-filled-hover hover:text-button-filled-hover ${className}`)
//        } if (variant === 'outlined'){
//            setButtonClasses(`${variant} border-2 border-button-outlined bg-button-outlined text-button-outlined hover:bg-button-outlined-hover hover:border-button-outlined-hover hover:text-button-outlined-hover ${className}`)
//        } if (variant === 'inverted') {
//            setButtonClasses(`${variant} border-2 border-button-inverted bg-button-inverted text-button-inverted hover:bg-button-inverted-hover hover:border-button-inverted-hover hover:text-button-inverted-hover ${className}`)
//        } if (variant === 'default') {
//            setButtonClasses(`${className}`)
//        }
//    }, [])
//    //console.log(buttonClasses)
//
//  return <button className={buttonClasses} {...props} />;
//};
//
//export default Button;

interface ButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
    variant?: 'outlined' | 'filled' | 'inverted' | 'default';
    className?: string;
  }
  //
  const Button: React.FC<ButtonProps> = ({ variant = 'default', className = '', ...props }) => {
      const [buttonClasses, setButtonClasses] = useState('');
  //
      useEffect(() => {
          if (variant === 'filled') {
              setButtonClasses(`${variant} border-2 border-button-filled bg-button-filled text-button-filled hover:bg-button-filled-hover hover:border-button-filled-hover hover:text-button-filled-hover cursor-pointer ${className}`)
          } if (variant === 'outlined'){
              setButtonClasses(`${variant} border-2 border-button-outlined bg-button-outlined text-button-outlined hover:bg-button-outlined-hover hover:border-button-outlined-hover hover:text-button-outlined-hover cursor-pointer ${className}`)
          } if (variant === 'inverted') {
              setButtonClasses(`${variant} border-2 border-button-inverted bg-button-inverted text-button-inverted hover:bg-button-inverted-hover hover:border-button-inverted-hover hover:text-button-inverted-hover cursor-pointer ${className}`)
          } if (variant === 'default') {
              setButtonClasses(`${className}`)
          }
      }, [])
      //console.log(buttonClasses)
  //
    return <a className={buttonClasses} {...props} />;
  };
  //
  export default Button;