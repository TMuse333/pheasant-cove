
import { useGeneralContext } from "../../context/context";
import React, { useState  } from "react";

import useIntersectionObserver from '../intersectionObserver/intersectionObserver'

// import { motion, Variants } from 'framer-motion'

interface props {
    title?:string 
    ,
    description?:string,
    images:{
        src:string ,
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
    threshold:  0.6,
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
            overflow-x-scroll 
            overflow-y-auto
            flex 
            ml-auto
            sm:ml-0 sm:mr-0
           
            sm:w-screen
         
           
           ">
            {images.map((image, index) => (
                <img
               
               
                
                src={image.src}
                alt={image.alt}
                className={`
                ${clickedImage === index ? `
                fixed top-[10%] left-[50%]
                -translate-x-[500%]
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
               transition-all
               
                 ${clickedImage !== null
                && clickedImage !== index ?
            'blur-[3px]' : ''}
                   
                `}
                key={index}
                style={{
                    transform: `
                      translateX(${clickedImage !== null && clickedImage == index ? '-50%' : `${index * 20}%`}) 
                      translateY(${inView ? '0' : '-8rem'})
                    `,
                    transition: clickedImage === null ? 'transform 0.5s ease-in-out' : 'none', // Adjust the duration as needed
                    transitionDelay: `transform ${index * 3}, opacity 10s`,
                    opacity: inView ? 1 : 0,
                    transitionProperty: 'transform, opacity',
                    transitionDuration: '0.5s, 0.5s', // Adjust durations if needed
                    transitionTimingFunction: 'ease-in-out, ease-in-out',
                   
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