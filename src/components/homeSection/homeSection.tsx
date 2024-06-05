import React from "react";
import Carousel from "../carousel/carosuel";

// import { closingStatment } from '../../data/data'
// import dark from '../../media/dark-front.jpg'
// import Closer from '../closer/closer'


interface HomeSectionProps {
    title:string,
    description:string,
    images: {
        url:  string,
      
        title: string,
        description: string,
        link: string
    }[],
   
}



const HomeSection: React.FC<HomeSectionProps> = ({title,
description,images,}) => {

    return (
        <section >
            <h1 className="text-2xl md:text-5xl text-center">{title}</h1>
            <p className="text-left pl-4 mt-5 mb-5 max-w-[800px] mr-auto ml-auto
            md:p-0 md:text-center sm:text-xl">{description}</p>
            {/* <ImageSlider2
            images={images}
            /> */}
            
            <Carousel
            images={images}
            hasDescription={false}
           
            />



        </section>
    )
}

export default HomeSection