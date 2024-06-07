


import { useGeneralContext } from "../context/context";
import frontUrl from '../media/Front-of-building.jpg';


import bathroom1 from '../media/Bathroom-1.jpeg'
import bathroom2 from '../media/Bathroom-2.jpeg'
import laundrySink from '../media/new-imports/Laundry-sink.webp'
import washer from '../media/new-imports/Laundry-washer-dryer.webp'
// import balcony from '../../media/new-imports/Balcony-deck.webp'
// import bedroom1 from '../../media/new-imports/Bedroom-1.webp'
// import bedroom2 from '../../media/new-imports/Bedroom-2.webp'
import garage from '../media/new-imports/Garage-parking.webp'
import fireplace from '../media/new-imports/Gas-fireplace_stove.webp'

// import lake from '../../media/new-imports/lake-view.webp'
// import lake2 from '../../media/new-imports/lake-view-2.webp'

// import deck from '../../media/new-imports/Living-room-deck.webp'
// import livingRoom from '../../media/new-imports/Living-room.webp'
// import livingRoom2 from '../../media/new-imports/Living-room-2.webp'


import {TextParallaxContentExample } from "../components/parallaxText/parallaxText";

import Navbar from "../components/navbar/navbar";

// import Carousel from "../components/carousel/carosuel";

import ScrollableCarousel from "../components/scrollableCarousel/scrollableCarousel";

import HomeSection from "../components/homeSection/homeSection";
import Footer from "../components/footer/footer";

import { accordionText } from "../data/data";
import Accordion from "../components/accordion/accordion";






const Display = () => {

    

    const navLinks = [
        {
            name:'Home',
            destination:'/'
        },
        {
            name:'Contact Us',
            destination:'/contact'
        }
    ]

   
    // const images3 = [
    //     {
    //         src:livingRoom,
    //         alt:'A second photo of the living room of pheasant cove'
    //     },
    //     {
    //         src:livingRoom2,
    //         alt:'A second photo of the living room of pheasant cove'
    //     },
    //     {
    //         src:deck,
    //         alt:'The deck of Pheasant Cove'
    //     },
    //     {
    //         src:lake,
    //         alt:'The lake near pheasant Cove'
    //     },
    //     {
    //         src:lake2,
    //         alt:'The lake near pheasant Cove'
    //     }
    // ]

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

    // const images2 = [
    //     {
    //         src:bedroom1,
    //         alt:'Bedroom 1'
    //     },
    //     {
    //         src:bedroom2,
    //         alt:'Bedroom 2'
    //     },
    //     {
    //         src:balcony,
    //         alt:'Balcony'
    //     }
    // ]


    const images1 = [
        {
          url: bathroom1,
          title: 'Bathroom1',
          description: 'A modern and well-lit bathroom featuring sleek fixtures and elegant design elements. Enjoy a refreshing shower experience in this beautifully crafted space.',
          link: '/'
        },
        {
          url: bathroom2,
          title: 'Bathroom2',
          description: 'Step into luxury with this spacious bathroom that boasts a luxurious bathtub, stylish vanity area, and ample natural light. Pamper yourself with a spa-like experience in the comfort of your own home.',
          link: '/'
        },
        {
          url: washer,
          title: 'Washer',
          description: 'Efficiency meets convenience in this laundry room equipped with state-of-the-art washer and dryer appliances. Make laundry day a breeze with this modern and functional setup.',
          link: '/'
        }
      ];
      




    

        const {clickedImage, setClickedImage} = useGeneralContext()


    function handleExitClick(){
        if(clickedImage !== null){
            setClickedImage(null)
        }
       
    }


    return (
        <section className="absolute top-0 left-0
         text-white
    bg-radial-gradient from-blue-500 to-blue-900
" onClick={handleExitClick}
>
            <Navbar
links={navLinks}
/>

<div className="mt-8"
style={{
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
title='Your title here'
description="You can place a description of your images if you want"
images={images1}

/>

{/* <Carousel
images={images1}
hasDescription={false}
/> */}


</div>

<ScrollableCarousel
title="Your title here"
description="You can place a description here"
images={scrollables}
/>

<Accordion
text={accordionText}
intro='Optional FAQ section'
description='You can place more facts about the property here'
hasIntro={true}/>

<Footer
links={navLinks}
/>





        </section>
    )
}


export default Display