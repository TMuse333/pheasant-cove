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
            backgroundImage:`url(${image})`
        }}
        className={`w-screen text-white h-[600px]
        relative flex flex-col items-center justify-center
        bg-center
        `}
  
        >
            <div className="-mt-12">
            <h1>{title}</h1>
          
            <p className="mt-4 text-left pl-4 pr-4
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