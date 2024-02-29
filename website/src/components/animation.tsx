'use client'

import React from 'react';
import "../styles/animation.css";
import { FaPython } from 'react-icons/fa';
import { SiPytorch, SiTensorflow, SiTailwindcss, SiJavascript, SiDjango, SiNextdotjs, SiTypescript, SiNumpy, SiPandas } from "react-icons/si";
import { MdComputer } from "react-icons/md";
import Image from 'next/image';

type ProgrammingSkillsAnimationProps = {
    bigAnimation: string
}

const ProgrammingSkillsAnimation: React.FC<ProgrammingSkillsAnimationProps> = ({ bigAnimation='true' }) => {
    const seperation = 128;
    const innerOrbit = 256;
    const middleOrbit1 = innerOrbit+seperation;
    const middleOrbit2 = middleOrbit1+seperation;
    const outerOrbit = middleOrbit2+seperation;
    return (
        <div className="grid sm:grid-cols-1 lg:grid-cols-4 mt-20">
            <div className="lg:row-span-5 lg:col-span-1 border-l-[2px] border-navBorder"> 
                <h1 className="text-xl ml-10 text-primary"> Programming Skills </h1>
            </div>
            <div className='flex flex-col items-start lg:col-span-3 h-[375px] sm:h-[600px]'> 
                {bigAnimation === "true" ? 
                
                <div className="animation-container rounded-2xl h-[500px] w-full flex items-center justify-center overflow-hidden p-6"> 
                    <div className="absolute w-[128px] h-[128px] rounded-full bg-primary border-2 border-card flex items-center justify-center"> 
                        <img
                            src="/headshot/IMG_0443.jpeg"
                            alt="headshot"
                            className="rounded-full w-[110px] h-[110px]"
                        />
                    </div>
                    <div className="absolute w-[256px] h-[256px] rounded-full border-2 border-card border-solid"></div>
                    <div className="python absolute w-[256px] h-[256px] flex items-center justify-center" >
                        {/*<FaPython className="w-11 h-11 bg-button-filled/90 rounded-full p-1" color='bg-zinc-100'></FaPython>*/}
                        <svg className="bg-button-filled rounded-full p-0.5" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
                            <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
                        </svg>
                    </div>
                    <div className="absolute w-[384px] h-[384px] rounded-full border-[2px] border-card border-solid"></div>
                    <div className="pytorch absolute w-[384px] h-[384px] flex items-center justify-center" >
                        <a href=""> 
                            <SiPytorch type='link' className="w-11 h-11 bg-button-filled rounded-full p-1.5" color="#ee4c2c" href='#'></SiPytorch>
                        </a>
                    </div>
                    <a className="tensorflow absolute w-[384px] h-[384px] flex items-center justify-center" href="https://www.tensorflow.org/">
                        <SiTensorflow className="w-11 h-11 bg-button-filled rounded-full p-1.5" color="#fe9001"></SiTensorflow>    
                    </a>

                    <div className="absolute w-[512px] h-[512px] rounded-full border-[2px] border-card border-solid"></div>
                    <div className="django absolute w-[512px] h-[512px] flex items-center justify-center" >
                        <SiDjango className="w-11 h-11 bg-button-filled rounded-full p-1.5" color="#0d4b34"></SiDjango>
                    </div>
                    <div className="numpy absolute w-[512px] h-[512px] flex items-center justify-center" >
                        <SiNumpy className="w-11 h-11 bg-button-filled rounded-full p-1.5" color="#4dabcf"></SiNumpy>
                    </div>
                    <div className="pandas absolute w-[512px] h-[512px] flex items-center justify-center" >
                        <SiPandas className="w-11 h-11 bg-button-filled rounded-full p-1.5" color="#fff"></SiPandas>
                    </div>

                    {/*<div className="absolute w-[640px] h-[640px] rounded-full border border-white/50 border-solid"></div>
                    <div className="django absolute w-[640px] h-[640px] flex items-center justify-center" >
                        <SiDjango className="w-11 h-11 bg-button-filled rounded-full p-1.5" color="#0d4b34"></SiDjango>
                    </div>*/}

                    <div className="absolute w-[640px] h-[640px] rounded-full border-[2px] border-card border-solid"></div>
                    <div className="js absolute w-[640px] h-[640px] flex items-center justify-center" >
                        <SiJavascript className="w-11 h-11 bg-button-filled rounded-full p-1.5" color="#e9d44d"></SiJavascript>
                    </div>
                    <div className="nextjs absolute w-[640px] h-[640px] flex items-center justify-center" >
                        <SiNextdotjs className="w-11 h-11 bg-button-filled rounded-full p-1.5" color="#000"></SiNextdotjs>
                    </div>
                    <div className="tailwind absolute w-[640px] h-[640px] flex items-center justify-center" >
                        <SiTailwindcss className="w-11 h-11 bg-button-filled rounded-full p-1.5" color="#38bdf8"></SiTailwindcss>
                    </div>
                    <div className="typescript absolute w-[640px] h-[640px] flex items-center justify-center" >
                        <SiTypescript className="w-11 h-11 bg-button-filled rounded-full p-1.5" color="#3178c6"></SiTypescript>
                    </div>
                    
                </div>
                
                :

                <div className="animation-container rounded-2xl w-full flex items-center justify-center overflow-hidden relative"> 
                    <div className="absolute w-[96px] h-[96px] sm:w-[128px] sm:h-[128px] rounded-full bg-primary border-2 border-card flex items-center justify-center"> 
                        <img
                            src="/headshot/IMG_0443.jpeg"
                            alt="headshot"
                            className="rounded-full w-[80px] h-[80px] sm:w-[110px] sm:h-[110px]"
                        />
                        {/*<MdComputer className='h-16 w-16'/>*/}
                    </div>
                    {/*<MdComputer />*/}

                    <div className="absolute w-[160px] h-[160px] sm:w-[384px] sm:h-[384px] rounded-full border-[2px] border-card border-solid"></div>
                    <div className="js absolute w-[160px] h-[160px] sm:w-[384px] sm:h-[384px] flex items-center justify-center" >
                        <SiJavascript className="w-10 h-10 sm:w-11 sm:h-11 bg-button-filled rounded-full p-1.5" color="#e9d44d"></SiJavascript>
                    </div>
                    <div className="nextjs absolute w-[160px] h-[160px] sm:w-[384px] sm:h-[384px] flex items-center justify-center" >
                        <SiNextdotjs className="w-10 h-10 sm:w-11 sm:h-11 bg-button-filled rounded-full p-1.5" color="#000"></SiNextdotjs>
                    </div>
                    <div className="tailwind absolute w-[160px] h-[160px] sm:w-[384px] sm:h-[384px] flex items-center justify-center" >
                        <SiTailwindcss className="w-10 h-10 sm:w-11 sm:h-11 bg-button-filled rounded-full p-1.5" color="#38bdf8"></SiTailwindcss>
                    </div>
                    <div className="typescript absolute w-[160px] h-[160px] sm:w-[384px] sm:h-[384px] flex items-center justify-center" >
                        <SiTypescript className="w-10 h-10 sm:w-11 sm:h-11 bg-button-filled rounded-full p-1.5" color="#3178c6"></SiTypescript>
                    </div>

                    <div className="absolute w-[256px] h-[256px] sm:w-[512px] sm:h-[512px] rounded-full border-[2px] border-card border-solid"></div>
                    <div className="python absolute w-[256px] h-[256px] sm:w-[512px] sm:h-[512px] flex items-center justify-center" >
                        <FaPython className="block sm:hidden w-10 h-10 sm:w-11 sm:h-11 bg-button-filled rounded-full p-0.5" color='bg-zinc-100'></FaPython>
                        <svg className="hidden sm:block bg-button-filled rounded-full p-0.5" xmlns="http://www.w3.org/2000/svg" width="50" height="50">
                            <path fill="#0277BD" d="M24.047,5c-1.555,0.005-2.633,0.142-3.936,0.367c-3.848,0.67-4.549,2.077-4.549,4.67V14h9v2H15.22h-4.35c-2.636,0-4.943,1.242-5.674,4.219c-0.826,3.417-0.863,5.557,0,9.125C5.851,32.005,7.294,34,9.931,34h3.632v-5.104c0-2.966,2.686-5.896,5.764-5.896h7.236c2.523,0,5-1.862,5-4.377v-8.586c0-2.439-1.759-4.263-4.218-4.672C27.406,5.359,25.589,4.994,24.047,5z M19.063,9c0.821,0,1.5,0.677,1.5,1.502c0,0.833-0.679,1.498-1.5,1.498c-0.837,0-1.5-0.664-1.5-1.498C17.563,9.68,18.226,9,19.063,9z"></path><path fill="#FFC107" d="M23.078,43c1.555-0.005,2.633-0.142,3.936-0.367c3.848-0.67,4.549-2.077,4.549-4.67V34h-9v-2h9.343h4.35c2.636,0,4.943-1.242,5.674-4.219c0.826-3.417,0.863-5.557,0-9.125C41.274,15.995,39.831,14,37.194,14h-3.632v5.104c0,2.966-2.686,5.896-5.764,5.896h-7.236c-2.523,0-5,1.862-5,4.377v8.586c0,2.439,1.759,4.263,4.218,4.672C19.719,42.641,21.536,43.006,23.078,43z M28.063,39c-0.821,0-1.5-0.677-1.5-1.502c0-0.833,0.679-1.498,1.5-1.498c0.837,0,1.5,0.664,1.5,1.498C29.563,38.32,28.899,39,28.063,39z"></path>
                        </svg>
                    </div>
                    <div className="pytorch absolute w-[256px] h-[256px] sm:w-[512px] sm:h-[512px] flex items-center justify-center" >
                        <a href=""> 
                            <SiPytorch type='link' className="w-10 h-10 sm:w-11 sm:h-11 bg-button-filled rounded-full p-1.5" color="#ee4c2c" href='#'></SiPytorch>
                        </a>
                    </div>
                    <a className="tensorflow absolute w-[256px] h-[256px] sm:w-[512px] sm:h-[512px] flex items-center justify-center" href="https://www.tensorflow.org/">
                        <SiTensorflow className="w-10 h-10 sm:w-11 sm:h-11 bg-button-filled rounded-full p-1.5" color="#fe9001"></SiTensorflow>    
                    </a>
                    <div className="django absolute w-[256px] h-[256px] sm:w-[512px] sm:h-[512px] flex items-center justify-center" >
                        <SiDjango className="w-10 h-10 sm:w-11 sm:h-11 bg-button-filled rounded-full p-1.5" color="#0d4b34"></SiDjango>
                    </div>
                    <div className="numpy absolute w-[256px] h-[256px] sm:w-[512px] sm:h-[512px] flex items-center justify-center" >
                        <SiNumpy className="w-10 h-10 sm:w-11 sm:h-11 bg-button-filled rounded-full p-1.5" color="#4dabcf"></SiNumpy>
                    </div>
                    <div className="pandas absolute w-[256px] h-[256px] sm:w-[512px] sm:h-[512px] flex items-center justify-center" >
                        <SiPandas className="w-10 h-10 sm:w-11 sm:h-11 bg-button-filled rounded-full p-1.5" color="#fff"></SiPandas>
                    </div>
                    
                </div>
            }

            </div>
        </div>
        
        
    );
};

export default ProgrammingSkillsAnimation;
