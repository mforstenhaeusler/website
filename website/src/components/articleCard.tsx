"use client"
// deprecited
import React from "react";

type ArticleCardProps = {
    extended: string;
    content: Record<string, any>;
};

type MinCardProps = {
    content: Record<string, any>;
};

const MinArticleCard: React.FC<MinCardProps> = ({
        content={
            'imgPath': "",
            'date': "",
            'title': "",
            'content': ""
        }
    }) => {
    return (
        <div className="cardArticle max-w-md md:max-w-3xl rounded-2xl hover:bg-zinc-600 hover:scale-2 w-full">
            <a className='' href="#">
                <div className='rounded-xl overflow-hidden'>
                    <div className="xl:flex">
                        <div className='img xl:shrink-0 hidden xl:block'>
                            <img
                                src={content.imgPath}
                                alt="Round Image"
                                className="h-48 sm:h-40 aspect-[9/10] w-full object-cover md:h-full md:w-32"
                            />
                        </div>
                        <div className='content ml-2 p-4 text-secondary sm:min-w-md'>
                            <div className="cardHeader w-full">
                                <div className='flex border-l-2 border-zinc-500 h-4 items-center justify-start'>
                                    <time className='ml-4 text-sm' dateTime=''> {content.date}</time>
                                </div>
                                <div className='mt-2'>
                                    <h2 className='text-md font-medium text-primary'>{content.title}</h2>
                                </div>
                                <div className="cardFooter mt-2 text-blue-400 ">
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
    )
}

const ExtArticleCard: React.FC<MinCardProps> = ({
    content={
        'imgPath': "",
        'date': "",
        'title': "",
        'content': ""
    }
}) => {
return (
    <div className="cardArticle max-w-md md:max-w-3xl rounded-2xl hover:bg-zinc-600 hover:scale-2 w-full">
        <a className='' href="#">
            <div className='rounded-xl overflow-hidden'>
                <div className="xl:flex">
                    <div className='img xl:shrink-0 hidden xl:block'>
                        <img
                            src={content.imgPath}
                            alt="Round Image"
                            className="h-48 sm:h-40 aspect-[9/10] w-full object-cover md:h-full md:w-32"
                        />
                    </div>
                    <div className='content ml-2 p-4 text-secondary sm:min-w-md'>
                        <div className="cardHeader w-full">
                            <div className='flex border-l-2 border-zinc-500 h-4 items-center justify-start'>
                                <time className='ml-4 text-sm text-secondary' dateTime=''> {content.date}</time>
                            </div>
                            <div className='mt-2'>
                                <h2 className='text-md font-medium text-primary'>{content.title}</h2>
                            </div>
                            <div className="cardFooter mt-2 text-blue-400 ">
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
)
}

const ArticleCard : React.FC<ArticleCardProps> = ({
    extended='false', 
    content={
        "imgPath": "",
        "link": "",
        "code": "",
        "title": "",
        "authors": "",
        "pdf": "",
        "date": "",
        "content": ""
    }
}) => {
    if (extended){
        return <ExtArticleCard content={content}/>
    } else {
        return <MinArticleCard content={content}/>
    }   
    
}

export default ArticleCard;
