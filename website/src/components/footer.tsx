import React from 'react';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import ContactBox from './contactBox';

const Footer: React.FC = () => {
    return (
        <footer className='mt-40 mb-5 '>
            <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-gray-500 to-transparent"></div>
            <div className="grid grid-cols-2 mr-10 ml-10">
            <div>
                <ContactBox></ContactBox>
            </div>
            <div>
                <p className="text-center p-4 text-secondary"> &copy; 2024 Maximilian Forstenhäusler. All wrights reserved.</p>
            </div>
            </div>
            
        </footer>
    )
}

export default Footer;