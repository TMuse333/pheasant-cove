
import React from "react";
import Carousel from "../carousel/carosuel";


interface CarouselProps {
    images: {
        url:string,
        
        title:string,
        description:string
        link:string
    }[],
    hasDescription?: boolean,
    content:React.ReactNode
    bottomContent:React.ReactNode
    reverse?:boolean
   
 
}


const ContentCarousel:React.FC<CarouselProps> = (
    {images, content, bottomContent,reverse}
) => {



    return (

        <>
        <section className={` mt-[8rem]
        md:mt-[6rem]
        ml-auto mr-auto w-screen
        flex ${reverse ? 'flex-col-reverse' : 'flex-col '}
        md:flex-row 
         justify-center items-center 
         max-w-[1500px] 
         
    `}>
           
               
            {content}
            



            <Carousel
            images={images}/>
           

        </section>

      {bottomContent}

        </>
    )
}

export default ContentCarousel