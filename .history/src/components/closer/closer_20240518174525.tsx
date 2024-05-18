import React from "react";
import { Link } from "react-router-dom";



interface Props {
    image:string,
    title:string,
    description:string,
    buttonText:string,
    destination:string

}

const Closer: React.FC<Props> = ({image,title,description,
destination,buttonText}) => {

    return (
        <section style={{
            backgroundImage:`url(${image})`,
            
        }}
        className={`w-screen text-white h-[800px]
        relative flex flex-col items-center justify-center
        bg-center
        `}
  
        >
            <div className="-mt-12 "
            style={{ backgroundColor: 'rgba(128, 128, 128, 0.7)' }}>
            <h1 className="text-5xl">{title}</h1>
          
            <p className="mt-4 text-left pl-4 pr-4
            text-2xl
            max-w-[800px]">{description}</p>

            <Link to={destination}>
                <button className="mt-4">
                   {buttonText}
                </button>
            </Link>
            </div>
        </section>
    )
}

export default Closer