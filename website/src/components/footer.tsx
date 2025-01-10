import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import ContactBox from './contactBox';

const Footer: React.FC = () => {
    return (
        <footer className='mt-24 sm:mt-40 mb-5 '>
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            <div className="grid sm:grid-cols-2 xs:grid-rows-2 mr-10 ml-10">
            <div className=''>
                <ContactBox className='p-4 flex flex-row justify-center sm:justify-start sm:ml-5'></ContactBox>
            </div>
            <div>
                <p className="text-center p-4 text-secondary"> &copy; 2025 Maximilian Forstenhäusler. All rights reserved.</p>
            </div>
            </div>
            
        </footer>
    )
}

export default Footer;
