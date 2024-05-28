
import front from '../../media/Front-of-building.jpg'
import bathroom1 from '../../media/Bathroom-1.jpeg'
import bathroom2 from '../../media/Bathroom-2.jpeg'
import kitchen from '../../media/Kitchen.jpeg'
import livingRoom from '../../media/Living-room.jpeg'
import lakeView from '../../media/lake-view.jpeg'

import { TextParallaxContentExample } from '../parallaxText/parallaxText'
import HomeSection from '../homeSection/homeSection'
import Footer from '../footer/footer'
import { closingStatment } from '../../data/data'
import dark from '../../media/dark-front.jpg'
import Closer from '../closer/closer'
import Navbar from '../navbar/navbar'

import { useEffect } from 'react'
import Carousel from '../carousel/carosuel'

export const DisplayPage = () => {

useEffect(()=> {
    window.scrollTo(0,0)
},[])

    const links = [
        {
            title:'Home',
            destination:'/'
        },
        {
            title:'Contact',
            destination:'/contact'
        }
    ]

    const navLinks = [
        {
            name:'Home',
            destination:'/'
        },
        {
            name:'Contact',
            destination:'/contact'
        }
    ]

const images = [
    {
       url:front,
       alt:'Image 1' 
    },
    {
        url:bathroom1,
        alt:'Image 2' 
     },
     {
        url:bathroom2,
        alt:'Image 3' 
     },
     {
        url:kitchen,
        alt:'Image 4' 
     },
     {
        url:livingRoom,
        alt:'Image 5' 
     },
     {
        url:lakeView,
        alt:'Image 6' 
     },
]

const carouselImages = [
    {
        url:front,
        imageIndex:0,
        title:'',
        description:'',
        link:''

    }
]

// imageIndex:number
// title:string,
// description:string
// link:string


// }[],
// hasDescription?:boolean

    return (
        <>
        <Navbar
        links={navLinks}
        />
        <section className="absolute top-10 left-0
        bg-[#35465E]">

                <TextParallaxContentExample
                image={front}
                hasDestination={true}
                title='An Excellent Home'
                description={['Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas obcaecati reprehenderit quidem laudantium ducimus tempora quam suscipit natus omnis quisquam magnam culpa possimus quia maiores, libero totam eaque dolorum harum nostrum voluptatibus ipsa laborum! Repellendus incidunt eius architecto dolore vel.']}
                subheading='A nice quiet area'
                heading='Welcome to Pheasant Cove'
                destination='/contact'
                />

                {/* <HomeSection
                title='Area of Home'
                description='We can use this to showcase each area of the home once we have more pictures!, We can use a carousel like this for each of the sections of the home.'
                images={images}
                /> */}

                <Carousel
                i

                {/* <HomeSection
                title='Area of Home 2'
                description='We can use this to showcase each area of the home once we have more pictures!'
                images={images}
                /> */}

                <Closer
                image={dark}
                {...closingStatment}
                />

                <Footer
                links={links}
                />

        </section>
        </>
    )
}