import React from "react";
import ImageSlider from "../imageSlider/imageSlider";
import { ImageSlider2 } from "../imageSlider2/imageSlider2";

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
            <h1 className="">{title}</h1>
            <p className="text-left pl-4 mt-5 mb-5 max-w-[800px] mr-auto ml-auto
            md:p-0">{description}</p>
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