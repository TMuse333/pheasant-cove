import React from "react";
import ImageSlider from "../imageSlider/imageSlider";
import { closingStatment } from '../../data/data'
import dark from '../../media/dark-front.jpg'
import Closer from '../closer/closer'


interface HomeSectionProps {
    title:string,
    description:string,
    images:{
        url:string,
        alt:string
    }[];
}



const HomeSection: React.FC<HomeSectionProps> = ({title,
description,images}) => {

    return (
        <section >
            <h1 className="text-2xl md:text-5xl">{title}</h1>
            <p className="text-left pl-4 mt-5 mb-5 max-w-[800px] mr-auto ml-auto
            md:p-0 md:text-center ">{description}</p>
            {/* <ImageSlider2
            images={images}
            /> */}
            <ImageSlider
            images={images}
            />



        </section>
    )
}

export default HomeSection