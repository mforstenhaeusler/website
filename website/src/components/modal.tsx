"use client"
import React, {useState, useEffect} from 'react';
import { XMarkIcon, LinkIcon, DocumentIcon } from "@heroicons/react/24/solid";

type ModalProps = {
    content: Record<string, any>;
};


const Modal: React.FC<ModalProps> = ({ 
    content = {
        imgPath: "https://placekitten.com/200/200",
        link: "http://casopisi.junis.ni.ac.rs/index.php/FUMechEng/article/view/6927",
        code: "https://github.com/mforstenhaeusler/AFMviscoelastic",
        title: "Guidlines to simulate linear viscoelastic materials with an arbitarty number of characteristic times in the context of atomicforce microscopy",
        authors: "Maximilian Forstenhäusler, Enrique A. López-Guerra, Santiago D. Solares",
        pdf: "http://casopisi.junis.ni.ac.rs/index.php/FUMechEng/article/view/6927/3904",
        date: "April, 2021",
        abstract: "We provide guidelines for modeling linear viscoelastic materials containing an arbitrary number of characteristic times, under atomic force microscopy (AFM) characterization.",
        key: 'model0'
    }
}) => { 

    const [modalID, setModalID] = useState('')
    
    
    function showModal() {
        setModalID(content.key)
        console.log('modalID')
        console.log(modalID)
        
        let modal = document.getElementById(modalID);
        modal?.classList.remove('hidden')
        modal?.classList.add('bg-opacity-100')
        console.log(modal)
        let body = document.getElementById('body');
        body?.classList.add('overflow-y-hidden');

    }
    console.log(modalID)

    function closeModal() {
        let modal = document.getElementById(modalID);
        modal?.classList.add('hidden')
        modal?.classList.add('bg-opacity-60')
        let body = document.getElementById('body');
        body?.classList.remove('overflow-y-hidden');

    }

    return (
        <div id="Modal">
            <div className="cardArticle max-w-md md:max-w-3xl rounded-2xl bg-modal-primary hover:bg-modal-hover w-full\
            transition ease-in-out duration-200 cursor-pointer">
                <a id="openModal" className='' onClick={() => showModal()}>
                    <div className='rounded-xl overflow-hidden'>
                        <div className="lg:flex">
                            <div className='img lg:shrink-0 hidden lg:block'>
                                <img
                                    src={content.imgPath}
                                    alt="Round Image"
                                    className="h-48 sm:h-40 aspect-[9/10] w-full object-cover md:h-full md:w-32"
                                />
                            </div>
                            <div className='content ml-2 p-4 text-secondary sm:min-w-md'>
                                <div className="cardHeader w-full flex flex-col items-start justify-start h-full lg:h-24">
                                    <div className='flex mb-2 border-l-2 border-modal-date h-4 items-center justify-start'>
                                        <time className='ml-4 text-sm text-modal-date' dateTime=''> {content.date}</time>
                                    </div>
                                    <div className='my-auto'>
                                        <h2 className='text-md font-medium text-primary'>{content.title}</h2>
                                    </div>
                                    <div className="cardFooter mt-2 text-modal-link">
                                        <div className='flex flex-cols items-center justify-start text-sm'>
                                            <div>Read Article</div>
                                            <div>
                                                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                                                    <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg> 
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </a> 
            </div>
            <div id={modalID} className="hidden duration-500 overflow-y-auto">
                <div id="overlay" className="fixed left-0 top-0 bg-opacity-60 w-screen h-screen bg-zinc-700 flex justify-center items-center backdrop-blur-sm">
                    <div id="modelContent" className="bg-primary rounded-xl shadow-md overflow-hidden 
                    w-[500px] md:w-[650px] lg:w-[750px] xl:w-[850px] 2xl:w-[950px]"> 
                        <div id="modalImg" className="w-full"> 
                            <div className="absolute flex items-end justify-end p-2 w-[500px] md:w-[650px] lg:w-[750px] xl:w-[850px] 2xl:w-[950px]">
                                <button id="modelClose" className="border-2 border-black rounded-full text-black hover:text-red-700 hover:border-red-700 hover:scale-110 cursor-pointer" onClick={() => closeModal()}>
                                    <XMarkIcon className="h-6 w-6"></XMarkIcon>
                                </button>
                            </div>
                            <img
                                src={content.imgPath}
                                alt="Round Image"
                                className="sm:h-48 md:h-52 lg:h-56 xl:h-60 2xl:h-64 aspect-[3/4] w-full object-cover"
                            />
                            
                        </div>
                        <div className='overflow content ml-2 p-4 text-secondary sm:min-w-md max-h-[500px]'>
                            <div className=" overcardHeader w-full">
                                <div className='flex border-l-2 text-modal-date h-4 items-center justify-start mt-2'>
                                    <time className='ml-4 text-sm' dateTime=''> {content.date} </time>
                                </div>
                                <div className='mt-2'>
                                    <h1 className='text-lg font-medium text-primary'>{content.title}</h1>
                                </div>
                                <div className='mt-2'>
                                    <h2 className='text-md text-secondary italic'>{content.authors}</h2>
                                </div>
                                <div className='border-t border-navBorder mt-4 mb-2'></div>
                                <div className='overflowContent overflow-y-auto hover:overflow-scroll max-h-[350px]'> 
                                    <div className='text-md font-light text-secondary mt-2'>{content.abstract}</div>
                                    <div className="cardFooter mt-4 text-modal-link items-center">
                                        <div className='flex flex-cols items-center justify-start space-x-5'>
                                            {content.link !== "" ?  
                                            <a id="articleLink" href={content.link} className="flex flex-cols items-center justify-start hover:text-modal-link-hover cursor-pointer" target="_blank">
                                                <p className="text-sm"> Full Article </p> 
                                                <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                                                    <path d="M6.75 5.75 9.25 8l-2.5 2.25" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                                </svg> 
                                            </a>
                                            :
                                            <></>
                                            }
                                            {content.code !== "" ? 
                                            <a id="articleLink" href={content.code} className="flex flex-cols items-center justify-start hover:text-modal-link-hover cursor-pointer" target="_blank">
                                                <LinkIcon className='h-3 w-3'> </LinkIcon>
                                                <p className="text-sm ml-1"> Code </p> 
                                            </a>
                                            :
                                            <></>
                                            }
                                            {content.pdf !== "" ? 
                                            <a id="articleLink" href="#" className="flex flex-cols items-center justify-start hover:text-modal-link-hover cursor-pointer" target="_blank">
                                                <p className="text-sm"> Read PDF </p> 
                                                <DocumentIcon className='h-3 w-3 ml-1'/>
                                            </a>
                                            :
                                            <></>
                                            }  
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    )
};

export default Modal;