
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
        <section className="  mt-[10rem]
        ml-auto mr-auto w-screen
        flex flex-col md:flex-row 
         justify-center items-center 
         max-w-[1500px] 
">
            <div className="w-[75vw]
            md:w-[50vw]
           
          
        mb-4 md:mb-0
        md:h-[68vw]
            ml-auto mr-auto 
          
            max-h-[600px]
           mt-auto
           bg-gradient-to-b from-blue-300 to-blue-500
mb-auto           
            
            ">
               
            {content}
            </div>



            <Carousel
            images={images}/>
           

        </section>

      {bottomContent}

        </>
    )
}

export default ContentCarousel