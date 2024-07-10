
import React from "react";
import Carousel from "../carousel/carosuel";
import pheasant from '../../media/pheasant-removebg-preview.png'

interface CarouselProps {
    images: {
        url:string,
        
        title:string,
        description:string
        link:string
    }[],
    hasDescription?: boolean
   
 
}


const ContentCarousel:React.FC<CarouselProps> = (
    {images}
) => {



    return (
        <section className="  mt-[10rem]
        ml-auto mr-auto w-screen
        flex flex-col md:flex-row w-screen ml-auto mr-auto
         justify-center items-center 
 bg-green-200">
            <div className="md:w-[40vw]
            bg-radial-gradient from-blue-300 to-blue-700 
        
            ml-auto mr-auto 
            h-[100vw]
            max-h-[620px]
           
            
            ">
                <h1 className="font-arima text-black text-3xl md:text-5xl">Welcome to pheasant cove</h1>
                <img src={pheasant}
            className='object-cover w-[40vw]
            ml-auto mr-auto 
            max-w-[475px] max-h-[311px]'/>
            </div>



            <Carousel
            images={images}/>
           

        </section>
    )
}

export default ContentCarousel