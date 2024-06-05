"use client"

import { Homepage } from "@/components/homepage/homepage";
import ImageHero from "@/components/imageHero/imageHero";
import Navbar from "@/components/navbar/navbar";
import Image from "next/image";
import frontView from '../media/Front-of-building.jpg'
import lake from '../media/lake-view.jpeg'
import livingRoom from '../media/Living-room.jpeg'
import { content1 } from "@/data/data";
import Content from "@/components/content/content";
import TextFormat from "@/components/textFormat/textFormat";
import { Map } from "@/components/map/map";
import Closer from "@/components/closer/closer";
import dark from '../media/dark-front.jpg'
import Footer from "@/components/footer/footer";
import angle from '../media/new-imports/Front-of-building.webp'
export default function Home() {

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

const images = [
  frontView.src,
  livingRoom.src,
  lake.src,
  
]

// bg-[#35465E]
  return (
    <main className="absolute top-0 left-0 overflow-x-hidden
    bg-radial-gradient from-blue-500 to-blue-900
   flex flex-col justify-center items-center
   ">
<Navbar
links={navLinks}
/>
{/* <ImageHero
images={images}
/> */}

{/* <div className=" bg-radial-gradient from-blue-500 to-blue-900 w-screen"> */}



<Content
{...content1}
image={frontView}
/>
{/* </div> */}

{/* <div className=" bg-radial-gradient from-blue-500 to-blue-900 w-screen"> */}
<Content
hasAnimation={false}
reverse={true}
image={angle}
mainTitle=''
floatingImage={false}
description={['']}
customText={<TextFormat
 isAnimated={true}
 reverse={true}/>}
 />
 {/* </div> */}

 <Map/>


<Closer
image={dark.src}/>


<Footer
links={navLinks}
/>






    </main>
  );
}
