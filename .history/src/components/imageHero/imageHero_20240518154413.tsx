import React, {useState} from "react";


interface HeroProps {
    images:string[]
}

const ImageHero: React.FC<HeroProps> = ({images}) => {


    return (
        <header className="flex w-screen flex flex-col">
                <h1 className="text-3xl">
                    Pheasant Cove
                </h1>
                <p></p>

                <img src={images[0]}
                className='w-full
                h-full'/>
                
                
        </header>
    )
}

export default ImageHero