"use client"

import React, { useEffect } from "react"
import Navbar from "@/components/navbar/navbar"
import frontUrl from '../../media/Front-of-building.jpg';

import { TextParallaxContentExample } from "@/components/parallaxText/parallaxText"
import { useGeneralContext } from "@/context/context";

import bathroom1 from '../../media/Bathroom-1.jpeg'
import bathroom2 from '../../media/Bathroom-2.jpeg'
import laundrySink from '../../media/new-imports/Laundry-sink.webp'
import washer from '../../media/new-imports/Laundry-washer-dryer.webp'
import balcony from '../../media/new-imports/Balcony-deck.webp'
import bedroom1 from '../../media/new-imports/Bedroom-1.webp'
import bedroom2 from '../../media/new-imports/Bedroom-2.webp'
import garage from '../../media/new-imports/Garage-parking.webp'
import fireplace from '../../media/new-imports/Gas-fireplace_stove.webp'

import Carousel from "@/components/carousel/carosuel";



import HomeSection from "@/components/homeSection/homeSection";
import ScrollableCarousel from "@/components/scrollableCarousel/scrollableCarousel";
const Display = () => {

    const front: string = '../../media/Front-of-building.jpg'

    const navLinks = [
        {
            name:'View Property',
            destination:'display'
        },
        {
            name:'Contact Us',
            destination:'contact'
        }
    ]

    const {count, setCount } = useGeneralContext()

    // function handleClick(){
    //     setCount((prev)=>prev + 1)
    // }

    // useEffect(()=> {
    //     console.log('count ',count)
    // },[count])

    const scrollables = [
        {
            src:laundrySink.src,
            alt:'sink'
        },
        {
            src:fireplace.src,
            alt:'Fire place'
        },
        {
            src:bathroom1.src,
            alt:'sink'
        },
        {
            src:bathroom2.src,
            alt:'sink'
        },
        {
            src:garage.src,
            alt:'Garage'
        }

    ]

    const images2 = [
        {
            src:bedroom1.src,
            alt:'Bedroom 1'
        },
        {
            src:bedroom2.src,
            alt:'Bedroom 2'
        },
        {
            src:balcony.src,
            alt:'Balcony'
        }
    ]


    const images1 = [
        {
            url:bathroom1.src,
            title:'Bathroom1',
            description:'description',
            link:'/'
        },
        {
            url:bathroom2.src,
            title:'Bathroom2',
            description:'description',
            link:'/'
        },
        {
            url:washer.src,
            title:'washer',
            description:'description',
            link:'/'
        }
    ]


    

        const {clickedImage, setClickedImage} = useGeneralContext()


    function handleExitClick(){
        if(clickedImage !== null){
            setClickedImage(null)
        }
       
    }


    return (
        <section className="absolute top-0 left-0
        overflow-x-hidden
    bg-radial-gradient from-blue-500 to-blue-900
" onClick={handleExitClick}
>
            <Navbar
links={navLinks}
/>

<div style={{
    filter: clickedImage !== null ? 'blur(4px)' : 'none'
}}>



<TextParallaxContentExample
image={frontUrl.src}
heading='Pheasant Cove'
subheading="Peaceful and quiet"
hasDestination={false}
title=''
description={[]}
destination=''
/>


<HomeSection
title='Bathroom'
description="We have smooth bathrooms"
images={images1}

/>

<Carousel
images={images1}
hasDescription={false}

/>
</div>

<ScrollableCarousel
title="Your title here"
description="You can place a description here"
images={scrollables}
/>

<ScrollableCarousel
title=''
description=""
images={images2}/>



        </section>
    )
}


export default Display