"use client"

import React, { useEffect } from "react"
import { useGeneralContext } from "@/context/context";
import frontUrl from '../../media/Front-of-building.jpg';


import bathroom1 from '../../media/Bathroom-1.jpeg'
import bathroom2 from '../../media/Bathroom-2.jpeg'
import laundrySink from '../../media/new-imports/Laundry-sink.webp'
import washer from '../../media/new-imports/Laundry-washer-dryer.webp'
import balcony from '../../media/new-imports/Balcony-deck.webp'
import bedroom1 from '../../media/new-imports/Bedroom-1.webp'
import bedroom2 from '../../media/new-imports/Bedroom-2.webp'
import garage from '../../media/new-imports/Garage-parking.webp'
import fireplace from '../../media/new-imports/Gas-fireplace_stove.webp'

import lake from '../../media/new-imports/lake-view.webp'
import lake2 from '../../media/new-imports/lake-view-2.webp'

import deck from '../../media/new-imports/Living-room-deck.webp'
import livingRoom from '../../media/new-imports/Living-room.webp'
import livingRoom2 from '../../media/new-imports/Living-room-2.webp'










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

   
    const images3 = [
        {
            src:livingRoom.src,
            alt:'A second photo of the living room of pheasant cove'
        },
        {
            src:livingRoom2,
            alt:'A second photo of the living room of pheasant cove'
        },
        {
            src:deck,
            alt:'The deck of Pheasant Cove'
        },
        {
            src:lake,
            alt:'The lake near pheasant Cove'
        },
        {
            src:lake2.src,
            alt:'The lake near pheasant Cove'
        }
    ]

    const scrollables = [
        {
            src:laundrySink,
            alt:'sink'
        },
        {
            src:fireplace,
            alt:'Fire place'
        },
        {
            src:bathroom1,
            alt:'sink'
        },
        {
            src:bathroom2,
            alt:'sink'
        },
        {
            src:garage,
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
image={frontUrl}
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


</div>

<ScrollableCarousel
title="Your title here"
description="You can place a description here"
images={scrollables}
/>





        </section>
    )
}


export default Display