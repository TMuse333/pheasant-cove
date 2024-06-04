
import React, { useEffect, useState } from "react";

interface props {
    images:{
        src:string,
        alt:string
    }[]
}

const ScrollableCarousel:React.FC<props> = 
({images}) => {

    const [imageClicked, setImageClicked] = useState<number | null>(null)

    function handleImageClick(index:number | null){
        if(imageClicked !== null){
            setImageClicked(null)
        }

        else {
            setImageClicked(index)
        }
        
    }

    useEffect(() => {
        console.log(imageClicked)
    },[imageClicked])

    return (
        <section>
            <div className="w-screen
            overflow-scroll 
            flex 
           ">
            {images.map((image, index) => (
                <img src={image.src}
                className={`w-[90vw]
                h-[120vw] max-w-[300px]
                max-h-[500px] object-cover`}
                key={index}
                style={{
                    transform:`translateX(
                        ${index * 20}%
                    )`
                }}
                onClick={()=>handleImageClick(index)}

                /> 
            ))}
            </div>
        </section>
    )
}


export default ScrollableCarousel