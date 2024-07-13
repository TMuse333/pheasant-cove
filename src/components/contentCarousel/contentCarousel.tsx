
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
   
 
}


const ContentCarousel:React.FC<CarouselProps> = (
    {images, content, bottomContent}
) => {



    return (

        <>
        <section className="  mt-[8rem]
        md:mt-[6rem]
        ml-auto mr-auto w-screen
        flex flex-col md:flex-row 
         justify-center items-center 
         max-w-[1500px] 
         
">
           
               
            {content}
            



            <Carousel
            images={images}/>
           

        </section>

      {bottomContent}

        </>
    )
}

export default ContentCarousel