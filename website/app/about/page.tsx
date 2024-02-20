'use client'

import React, { useEffect, useState } from "react"
import "../../globals.css";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa"; 
import { MdEmail, MdMacroOff, MdMail } from "react-icons/md";
import { SiBmw } from "react-icons/si";
import Image from "next/image";


const About: React.FC = () => {

    const hdr = 200;
    const [lastScrollTop, setLastScrollTop] = useState<number>(0);

    useEffect(() => {
        const handleScroll = () => {
        const navbar = document.getElementById('Navbar');
        const currentScroll = window.scrollY || document.documentElement.scrollTop;
        const scrollDelta= lastScrollTop - currentScroll
        console.log(currentScroll)
        if (scrollDelta < 0) {
          // Scrolling down
          
        } else {
          // Scrolling up
        }
        setLastScrollTop(currentScroll <= 0 ? 0 : currentScroll);

        if (currentScroll > hdr){
            if (navbar !== null){
                navbar.style.position = 'relative'
            } 
        } 
        else {
            if (navbar !== null){
                navbar.style.position = 'relative'
            }
        }
      };

      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [lastScrollTop]);

    return (
        <div className="sm:px-8 mt-16 sm:mt-32">
          <div className="mx-auto w-full max-w-7xl lg:px-8">
            <div className="relative px-4 sm:px-8 lg:px-12">
              <div className="mx-auto max-w-2xl lg:max-w-5xl">
                <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
                  <div className="lg:pl-20">
                    <div className="max-w-xs px-2.5 lg:max-w-none">
                      <img 
                        alt="" 
                        loading="lazy" 
                        width="800" 
                        height="800" 
                        decoding="async" 
                        data-nimg="1" 
                        className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800" 
                        sizes="(min-width: 1024px) 32rem, 20rem" 
                        src="/headshot/IMG_0443.jpeg" 
                        style={{ color: "transparent"}}
                      />
                    </div>
                  </div>
                  <div className="lg:order-first lg:row-span-2">
                    <h1 className="text-4xl font-bold tracking-tight sm:text-5xl text-primary">
                      Hi, I am Max.
                    </h1>
                    <div className="mt-6 space-y-7 text-base text-secondary">
                      <p>I grew up in Southern Germany, where my enthusiasm for both sports and academics has been ingrained in me since childhood. I began swimming 🏊‍♂️ and playing football ⚽️ at an early age. In ninth grade, I had the opportunity to enroll in a boarding school in England, marking my first experience living abroad and also completing my GCSE&apos;s.</p>
                      <p className="">Afterwards, I returned to Germany to obtain my German High School degree (Abitur). By that time, I had discontinued football and dedicated myself entirely to swimming as my extracurricular pursuit. In 2015, I earned a spot on the 
                      <a 
                        className="transition hover:text-hover cursor-pointer" 
                        href="https://www.teamdeutschland.de/team/details/maximilian-forstenhaeusler"
                        target="_blank"  
                      > Junior National Team <img
                            alt=""
                            src="logos/Team_Deutschland_logo.png"
                            className="inline h-10 aspect-[5/10] text-secondary"
                          >
                          </img>
                      </a> and participated in the inaugural European Games held in Baku.</p>
                      <p>Following to the Abitur, I was fortunate to receive an opportunity to relocate to Washington D.C. to pursue both my passion for swimming and academic at the <a className="transition hover:text-hover cursor-pointer" href="https://www.gwu.edu/" target="_blank">George Washington University</a>. There, I pursued a Bachelor&apos;s degree in Mechanical Engineering (B.Sc.) while actively participating in the Division I Swimming and Diving Team.</p>
                      <p>After earning my Bachelor&apos;s Degree in 2020, I commenced my graduate studies at the <a className="transition hover:text-hover cursor-pointer" href="https://www.tum.de/" target="_blank">Technical University of Munich</a>. In 2023, I successfully obtained a Master of Science degree from the School of Computation, Information, and Technology. Concurrently with my studies, I held a part-time position at <a className="transition hover:text-hover cursor-pointer" href="https://www.bmw.com" target="_blank">BMW <SiBmw className="inline h-5 w-5"></SiBmw></a>, concentrating on digitalizing engineering research, development, and production processes using machine learning and deep learning techniques.</p>
                      <p>Additionally, I actively participated in Germany&apos;s largest student organization focused on artificial intelligence, initially leading and now mentoring the software development of web and cloud-based applications. Upon completing my coursework, I transitioned to a role as a visiting Researcher at the <a className="transition hover:text-hover cursor-pointer" href="https://www.caltech.edu" target="_blank"/> California Institute of Technology <a/> in Pasadena. During my tenure, I conducted research on physics-informed geometric deep learning and composed my Master&apos;s thesis.</p>
                      <p>I am a very open-minded person and eager to learn and expand my knowledge about artifical intelligence, machine learning, data anlytics and its applications.</p>
                    </div>
                  </div>
                <div className="lg:pl-20">
                  <ul role="list">
                    <li className="my-4">
                      <a className="flex flex-row items-center text-secondary text-sm font-medium transition hover:text-hover cursor-pointer">
                        <FaLinkedin className="h-6 w-6 flex-none mr-4"></FaLinkedin>
                        Follow on LinkedIn
                      </a>
                    </li>
                    <li className="my-4">
                      <a className="flex flex-row items-center text-secondary text-sm font-medium transition hover:text-hover cursor-pointer">
                        <FaGithub className="h-6 w-6 flex-none mr-4"></FaGithub>
                        Follow on Github
                      </a>
                    </li>
                    <li className="my-4">
                      <a className="flex flex-row items-center text-secondary text-sm font-medium transition hover:text-hover cursor-pointer">
                        <FaInstagram className="h-6 w-6 flex-none mr-4"></FaInstagram>
                        Follow on Instagram
                      </a>
                    </li>
                    <li className="mt-8 border-t-[1.5px] border-navBorder pt-8 flex">
                      <a className="flex flex-row items-center text-secondary text-sm font-medium transition hover:text-hover cursor-pointer">
                        <MdMail className="h-6 w-6 flex-none mr-4"></MdMail>
                        maxiforstenhaeusler@gmail.com
                      </a>
                    </li>
                    {/*<li className="my-4">
                      <a 
                        className="flex flex-row items-center text-secondary text-sm font-medium transition hover:text-hover cursor-pointer"
                        href="https://www.teamdeutschland.de/team/details/maximilian-forstenhaeusler"
                        target="_blank"
                      >                        
                        <img
                          src="logos/Team_Deutschland_logo.png"
                          className="h-12 aspect-[5/10] mr-4"
                        >
                        </Image>
                        Team Deutschland
                      </a>
    </li>*/}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>      
    )
}

export default About;

