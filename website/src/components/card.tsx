"use client"

import React from 'react';
import { BriefcaseIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline';
import Button from './button';
import { useTheme } from 'next-themes';
import IconLink from './iconLink';



type CardProps = {
    cardTitle: string;
    cardContent: Record<string, any>;
  //children: ReactNode;
};

const Card: React.FC<CardProps> = ({ 
    cardTitle = "CardTitle", 
    cardContent = [
        {
            'company': 'BMW',
            'jobTitle': 'PhD candidate in AI and privacy',
            'start': '2024',
            'end': 'Present',
            'imgPath': '/logos/bmw.svg',
            'link': 'https://www.bmw.com/de/index.html',
        }
    ]
}) => {

    const { theme, setTheme } = useTheme();

    return (    
        <div className="p-6 rounded-3xl border border-card shadow-md 
        md:w-[650px] lg:w-[750px] xl:w-[750px] 2xl:w-[550px]
        ">
          <div className='flex space-x-1 items-center justify-start text-primary p-2'>
            <BriefcaseIcon className="h-6 w-6 mr-2"></BriefcaseIcon>
            <p className="font-medium text-lg"> {cardTitle} </p>
          </div>
          <div className='flex flex-col p-2 mt-5'>
            {cardContent.map((work: any, key: any) => (
                work.company === "SAP" ? 
                <div id={key} key={key} className='flex flex-row w-full mb-6 items-center'>
                    <IconLink 
                        href={work.link}
                        icon='sap'
                        className='flex p-1 rounded-full bg-card-company-icon border border-card-company-icon shadow-sm cursor-pointer'
                        target="_blank"
                    />
                    <div className='flex-grow ml-5'>
                    <p className='text-primary text-base'> {work.company} </p>
                    <p className='text-secondary text-sm'> {work.jobTitle} </p>
                    </div>
                    <div>
                    <p className='text-secondary text-md'> {work.start} - {work.end} </p>
                    </div>
                </div>
                :
                <div id={key} key={key} className='flex flex-row w-full mb-6 items-center'>
                    <IconLink 
                        href={work.link}
                        className='flex p-1 rounded-full bg-card-company-icon border border-card-company-icon shadow-sm cursor-pointer'
                        target="_blank"
                    >
                     <img
                        src={work.imgPath}
                        alt="Round Image"
                        className="rounded-full w-12 h-12 aspect-[9/10]"
                    />
                    </IconLink>
                    <div className='flex-grow ml-5'>
                    <p className='text-primary text-base'> {work.company} </p>
                    <p className='text-secondary text-sm'> {work.jobTitle} </p>
                    </div>
                    <div>
                    <p className='text-secondary text-md'> {work.start} - {work.end} </p>
                    </div>
                </div>
            ))}
            
            
          </div>
          <div className='text-primary p-2'>
            {
                theme === 'light' ? 
                <Button variant="filled" className='rounded-md w-full p-2 mb-2 cursor-pointer' type="button" href="https://drive.google.com/file/d/164LuoyglZpuVC9I8eu_ulqxDKQ-KaPpG/view?usp=sharing" target="_blank"> 
                    <div className="flex space-x-3 items-center justify-center">
                        <p>Download CV </p>
                        <ArrowDownTrayIcon className="h-5 w-5 animate-bounce"></ArrowDownTrayIcon>
                    </div>
                </Button>
                :
                <Button variant="inverted" className='rounded-md w-full p-2 mb-2 cursor-pointer' type="button" href="https://drive.google.com/file/d/164LuoyglZpuVC9I8eu_ulqxDKQ-KaPpG/view?usp=sharing" target="_blank"> 
                    <div className="flex space-x-3 items-center justify-center">
                        <p>Download CV </p>
                        <ArrowDownTrayIcon className="h-5 w-5 animate-bounce"></ArrowDownTrayIcon>
                    </div>
                </Button>
            }
            {/*<Button variant="filled" className='rounded-md w-full p-2 mb-2' type="button"> 
                <div className="flex space-x-3 items-center justify-center">
                    <p className=''>Download CV </p>
                    <ArrowDownTrayIcon className="h-5 w-5 animate-bounce"></ArrowDownTrayIcon>
                </div>
        </Button>*/}
            {/*<Button variant="outlined" className='rounded-md w-full p-2 mb-2' type="button"> 
                <div className="flex space-x-3 items-center justify-center">
                    <p>Download CV </p>
                    <ArrowDownTrayIcon className="h-5 w-5"></ArrowDownTrayIcon>
                </div>
            </Button>
            <Button variant="inverted" className='rounded-md w-full p-2 mb-2' type="button"> 
                <div className="flex space-x-3 items-center justify-center">
                    <p>Download CV </p>
                    <ArrowDownTrayIcon className="h-5 w-5"></ArrowDownTrayIcon>
                </div>
    </Button>*/}
          </div>
          
        </div>
    )
  
}

export default Card;