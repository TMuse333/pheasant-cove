
import { useGeneralContext } from "@/context/context";
import React, { useEffect, useState } from "react";

interface props {
    title?:string,
    description?:string,
    images:{
        src:string,
        alt:string
    }[],


}

const ScrollableCarousel:React.FC<props> = 
({title, description, images}) => {

    const {clickedImage, setClickedImage} = useGeneralContext()

    function handleImageClick(index:number | null){
        if(clickedImage !== null){
            setClickedImage(null)
        }

        else {
            setClickedImage(index)
        }
        
    }




    return (
        <>

   

        <section className={`relative w-screen
         ml-auto z-[4] mb-[5rem] mt-[5rem]
        
       `} >

{title && (
            <>
            <h1 className="text-4xl text-center mb-4
            sm:text-6xl">
                {title}
            </h1>
            <p className="text-center mb-8 md:text-lg
            md:text-xl">{description}</p>
            </>
        )}
            <div className="w-[90vw]
            overflow-scroll 
            flex 
            ml-auto mr-auto
            sm:ml-0 sm:mr-0
            
            sm:w-screen
           
           ">
            {images.map((image, index) => (
                <img loading="lazy"
                src={image.src}
                className={`
                ${clickedImage === index ? `
                fixed top-[10%] left-[50%]
                -translate-x-[50%]
                h-[90vh]
                z-[200]
                w-[70vw]
                blur-[0px] !important
                no-blur
                ` : `
                w-[90vw]
                relative
                h-[120vw] max-w-[500px]
                max-h-[700px]
                z-[5]`}
                 object-cover
               transition-transform
                
                 ${clickedImage !== null
                && clickedImage !== index ?
            'blur-[3px]' : ''}
                `}
                key={index}
                style={{
                    transform: clickedImage ! === index ? 
                    'translateX(-50%)' : `translateX(
                        ${index * 20}%
                    )`,
                   
                }}
                onClick={()=>handleImageClick(index)}

                /> 
            ))}
            </div>
        </section>
        </>
    )
}


export default ScrollableCarousel