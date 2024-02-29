import React from "react";
import IconLink from "./iconLink";

type ContactBoxProps = {
    className: string
}

const ContactBox: React.FC<ContactBoxProps> = ({className=""}) => {
    return (
        <div className={className}> 
            {/*<!-- Linkedin -->*/}
            <IconLink icon="linked-in" href="https://www.linkedin.com/in/maximilian-forstenhaeusler/" className="mr-2 " target="_blank"></IconLink>

            {/*<!-- Github -->*/}
            <IconLink icon="github" href="https://github.com/mforstenhaeusler/" className="mr-2" target="_blank"/>
                        
            {/*<!-- Instagram -->*/}
            <IconLink icon="instagram" href="https://www.instagram.com/max_for32/?hl=en" className="mr-2" target="_blank"/>

            {/*<!-- Email -->*/}
            <IconLink icon="email" className="hover:text-hover" href="mailto:maxiforstenhaeusler@gmail.com"></IconLink>
        </div>
    )
};

export default ContactBox;