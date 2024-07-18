

// import ImageHero from "../components/imageHero/imageHero";
import Navbar from "../components/navbar/navbar";

import frontView from '../media/Front-of-building.jpg'
// import lake from '../media/lake-view.jpeg'
// import livingRoom from '../media/new-imports/Living-room.webp'
// import { content1 } from "../data/data";
import Content from "../components/content/content";
import TextFormat from "../components/textFormat/textFormat";
import { Map } from "../components/map/map";

import Footer from "../components/footer/footer";
import angle from '../media/new-imports/Front-of-building.webp'
// import deck from '../media/new-imports/Living-room-deck.webp'
// import kitchen from '../media/new-imports/Kitchen.webp'
// import ScrollableCarousel from "../components/scrollableCarousel/scrollableCarousel";
// import Herobanner2 from "../components/herobanner2.tsx/herobanner2";

import bathroom1 from '../media/Bathroom-1.jpeg'
import bathroom2 from '../media/Bathroom-2.jpeg'
// import laundrySink from '../media/new-imports/Laundry-sink.webp'
import washer from '../media/new-imports/Laundry-washer-dryer.webp'
import ContentCarousel from "../components/contentCarousel/contentCarousel";
// import Carousel from "../components/carousel/carosuel";
import {BottomWelcomeText, Welcome} from "../components/welcome/welcome";

  const Home = () => {

  const navLinks = [
    {
        name:'The Property',
        destination:'display'
    },
    {
        name:'The Lease',
        destination:'lease'
    },
    // {
    //   name:'The Accommodation',
    //   destination:'accommodation'
    // }
  
]

// const images = [
//   frontView,
//   livingRoom,
//   lake,
  
// ]

const images1 = [
  {
    url:frontView,
    title: 'Bathroom1',
    description: 'A modern and well-lit bathroom featuring sleek fixtures and elegant design elements. Enjoy a refreshing shower experience in this beautifully crafted space.',
    link: '/',
    imageIndex:0
  },
  {
    url: bathroom1,
    title: 'Bathroom1',
    description: 'A modern and well-lit bathroom featuring sleek fixtures and elegant design elements. Enjoy a refreshing shower experience in this beautifully crafted space.',
    link: '/',
    imageIndex:0
  },
  {
    url: bathroom2,
    title: 'Bathroom2',
    description: 'Step into luxury with this spacious bathroom that boasts a luxurious bathtub, stylish vanity area, and ample natural light. Pamper yourself with a spa-like experience in the comfort of your own home.',
    link: '/',
    imageIndex:1
  },
  {
    url: washer,
    title: 'Washer',
    description: 'Efficiency meets convenience in this laundry room equipped with state-of-the-art washer and dryer appliances. Make laundry day a breeze with this modern and functional setup.',
    link: '/',
    imageIndex:2
  }
];

// const scrollableImages = [
//     {
//         src:frontView,
//         alt:'The front view of Pheasant Cove'
//     },
//     {
//         src:kitchen,
//         alt:"The kitchen of Pheasant Cove"
//     },
//     {
//         src:livingRoom,
//         alt:'An image of the living room of Pheasant Cove'
//     },
//     {
//         src:deck,
//         alt:'The deck of Pheasant Cove'
//     }
// ]



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


<ContentCarousel
images={images1}
content={<Welcome/>}
bottomContent={<BottomWelcomeText/>}
/>


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


 <div className={` h-[5px]
                w-[80vw] max-w-[1200px] ml-auto mr-auto mt-5
                mb-8 bg-orange-400`} />

 <Map/>





<Footer
links={navLinks}
/>






    </main>
  );
}

export default Home
