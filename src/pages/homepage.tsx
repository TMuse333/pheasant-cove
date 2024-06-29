

import ImageHero from "../components/imageHero/imageHero";
import Navbar from "../components/navbar/navbar";

import frontView from '../media/Front-of-building.jpg'
import lake from '../media/lake-view.jpeg'
import livingRoom from '../media/new-imports/Living-room.webp'
// import { content1 } from "../data/data";
import Content from "../components/content/content";
import TextFormat from "../components/textFormat/textFormat";
import { Map } from "../components/map/map";
import Closer from "../components/closer/closer";
import dark from '../media/dark-front.jpg'
import Footer from "../components/footer/footer";
import angle from '../media/new-imports/Front-of-building.webp'
import deck from '../media/new-imports/Living-room-deck.webp'
import kitchen from '../media/new-imports/Kitchen.webp'
import ScrollableCarousel from "../components/scrollableCarousel/scrollableCarousel";
import Herobanner2 from "../components/herobanner2.tsx/herobanner2";
  const Home = () => {

  const navLinks = [
    {
        name:'View Property',
        destination:'display'
    },
    {
        name:'Contact Us',
        destination:'contact'
    },
    {
      name:'buildings',
      destination:''
    },
    {
      name:'lease',
      destination:''
    },
    {
      name:'showings',
      destination:''
    },
    {
      name:'contact us',
      destination:''
    }
]

const images = [
  frontView,
  livingRoom,
  lake,
  
]

const scrollableImages = [
    {
        src:frontView,
        alt:'The front view of Pheasant Cove'
    },
    {
        src:kitchen,
        alt:"The kitchen of Pheasant Cove"
    },
    {
        src:livingRoom,
        alt:'An image of the living room of Pheasant Cove'
    },
    {
        src:deck,
        alt:'The deck of Pheasant Cove'
    }
]



// bg-[#35465E]
  return (
    <main className="absolute top-0 left-0 overflow-x-hidden
    bg-radial-gradient from-blue-500 to-blue-900
   flex flex-col justify-center items-center
   text-white
   ">
<Navbar
links={navLinks}
/>
<ImageHero
images={images}
/>
<h2 className="text-lg sm:text-xl">As a spirit animal, the pheasant represents self-expression, creativity, abundance and renewal</h2>
{/* <Herobanner2/> */}

<div className={` h-[5px]
                w-[80vw] max-w-[1200px] ml-auto mr-auto mt-5
                mb-8 bg-orange-400`} />

{/* <div className=" bg-radial-gradient from-blue-500 to-blue-900 w-screen"> */}

<h1 className="text-center bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
           text-4xl sm:text-5xl font-semibold"> Welcome to Pheasant Cove</h1>

           <p className="text-left mt-8
           w-4/5 max-w-[1200px] sm:text-lg md:text-xl">
           The Halifax Municipality now permits a second residence of not more than 80 square metres on the same lot as the main house.  The backyard suite of this newly-developed waterfront property is offered for lease.
           </p>


<ScrollableCarousel
images={scrollableImages}
/>

{/* <Content
{...content1}
image={frontView}
/> */}
{/* </div> */}

{/* <div className=" bg-radial-gradient from-blue-500 to-blue-900 w-screen"> */}
<Content
hasAnimation={false}
reverse={true}
image={angle}
mainTitle=''

description={['']}
customText={<TextFormat
 isAnimated={true}
 reverse={true}/>}
 />
 {/* </div> */}

 <div className={` h-[5px]
                w-[80vw] max-w-[1200px] ml-auto mr-auto mt-5
                mb-8 bg-orange-400`} />

 <Map/>


<Closer
image={dark}/>


<Footer
links={navLinks}
/>






    </main>
  );
}

export default Home
