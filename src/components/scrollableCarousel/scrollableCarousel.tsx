
import { useGeneralContext } from "@/context/context";
import React, { useEffect, useState } from "react";
import Image from 'next/image'
import useIntersectionObserver from '../intersectionObserver/intersectionObserver'
import {StaticImageData} from 'next/image'
import { motion } from 'framer-motion'

interface props {
    title?:string 
    ,
    description?:string,
    images:{
        src:StaticImageData ,
        alt:string
    }[],


}

//img version



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

    const [inView, setInView] = useState(false);


  const options = {
    root: null,
    rootMargin: '0px',
    threshold:  0.8,
  };

  // Use the custom hook to get a ref and observe intersection
  const componentRef = useIntersectionObserver(setInView, options);




    return (
        <>

   

        <section ref={componentRef}
        className={`relative w-screen
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
                <img
               
                
                src={image.src.src}
                alt={image.alt}
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
                h-[80vw] max-w-[600px]
                max-h-[500px]
                
                z-[5]`}
                 object-cover
                 object-center
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