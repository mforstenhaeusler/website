import React from "react";
import IconLink from "./iconLink";

type ContactBoxProps = {
    className: string
}

const ContactBox: React.FC<ContactBoxProps> = ({className=""}) => {
    return (
        <div className={className}>
            {/*<!-- Linkedin -->*/}
            <IconLink aria-label="LinkedIn" icon="linked-in" href="https://www.linkedin.com/in/maximilian-forstenhaeusler/" className="inline-flex h-11 w-11 items-center justify-center" target="_blank" rel="noopener noreferrer"></IconLink>

            {/*<!-- Github -->*/}
            <IconLink aria-label="GitHub" icon="github" href="https://github.com/mforstenhaeusler/" className="inline-flex h-11 w-11 items-center justify-center" target="_blank" rel="noopener noreferrer"/>

            {/*<!-- Instagram -->*/}
            <IconLink aria-label="Instagram" icon="instagram" href="https://www.instagram.com/max_for32/?hl=en" className="inline-flex h-11 w-11 items-center justify-center" target="_blank" rel="noopener noreferrer"/>

            {/*<!-- Email -->*/}
            <IconLink aria-label="Email Max" icon="email" className="inline-flex h-11 w-11 items-center justify-center hover:text-hover" href="mailto:maxiforstenhaeusler@gmail.com"></IconLink>
        </div>
    )
};

export default ContactBox;
