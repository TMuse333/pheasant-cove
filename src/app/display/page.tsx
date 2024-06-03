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
import Carousel from "@/components/carousel/carosuel";
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


    const images1 = [
        {
            url:bathroom1,
            title:'Bathroom1',
            description:'description',
            link:'/'
        },
        {
            url:bathroom2,
            title:'Bathroom2',
            description:'description',
            link:'/'
        },
        {
            url:washer,
            title:'washer',
            description:'description',
            link:'/'
        }
    ]

//     images: {
//         url: string,
      
//         title: string,
//         description: string,
//         link: string
//     }[],
//     hasDescription?: boolean
// }

    return (
        <main className="absolute top-0 left-0
        overflow-x-hidden
    bg-radial-gradient from-blue-500 to-blue-900
    h-screen">
            <Navbar
links={navLinks}
/>

<TextParallaxContentExample
image={frontUrl.src}
heading='Pheasant Cove'
subheading="Peaceful and quiet"
hasDestination={false}
title=''
description={[]}
destination=''
/>

<Carousel
images={images1}
hasDescription={false}
/>


        </main>
    )
}


export default Display