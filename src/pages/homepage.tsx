


import Navbar from "../components/navbar/navbar";

import Footer from "../components/footer/footer";

import ContentCarousel from "../components/contentCarousel/contentCarousel";

import {BottomText2, BottomWelcomeText, LuxuryLiving, Welcome} from "../components/welcome/welcome";

import p1front from '../media/new/p1front.webp'
import p1pheasant from '../media/new/p1pheasant1.webp'
import p1cove from '../media/new/p1cove.webp'

import image1 from '../media/page2/p2-3.webp'
import image2 from '../media/page2/p2-4.webp'
import image3 from '../media/page2/p2-4.webp'
import image5 from '../media/page2/p2-5.webp'
import image56 from '../media/page2/p2-56.jpeg'
import image6 from '../media/page2/p2-6.webp'
import image7 from '../media/page2/p2-7.webp'
import image8 from '../media/page2/p2-8.webp'
import image9 from '../media/page2/p2-9.webp'
import image10 from '../media/page2/p2-10.webp'
import image11 from '../media/page2/p2-11.webp'
import image12 from '../media/page2/p2-12.webp'
import image13 from '../media/page2/p2-13.webp'
import image14 from '../media/page2/p2-14.webp'
import image15 from '../media/page2/p2-15.webp'
import ApplicationForm from "../components/applicationForm/applicationForm";

  const Home = () => {

  const navLinks = [
    {
        name:'Home',
        destination:'home'
    },
    {
      name:'The Accommodation',
      destination:'accommodation'
    },
    {
        name:'The Lease',
        destination:'application'
    },
   
  
]





const p1 = [
  {
    url:p1front,
    title:'The front of pheasant cove',
    description:'front of cove',
    link:''
  },
  {
    url:p1pheasant,
    title:'The front of pheasant cove',
    description:'front of cove',
    link:''
  },

 
  {
    url:p1cove,
    title:'The front of pheasant cove',
    description:'front of cove',
    link:''
  }

]

const p2 = [
  {
    url: image1,
    title: '',
    description: '',
    link: ''
  },
  {
    url: image2,
    title: '',
    description: '',
    link: ''
  },
  {
    url: image3,
    title: '',
    description: '',
    link: ''
  },
  {
    url: image5,
    title: '',
    description: '',
    link: ''
  },
  {
    url: image56,
    title: '',
    description: '',
    link: ''
  },
  {
    url: image6,
    title: '',
    description: '',
    link: ''
  },
  {
    url: image7,
    title: '',
    description: '',
    link: ''
  },
  {
    url: image8,
    title: '',
    description: '',
    link: ''
  },
  {
    url: image9,
    title: '',
    description: '',
    link: ''
  },
  {
    url: image10,
    title: '',
    description: '',
    link: ''
  },
  {
    url: image11,
    title: '',
    description: '',
    link: ''
  },
  {
    url: image12,
    title: '',
    description: '',
    link: ''
  },
  {
    url: image13,
    title: '',
    description: '',
    link: ''
  },
  {
    url: image14,
    title: '',
    description: '',
    link: ''
  },
  {
    url: image15,
    title: '',
    description: '',
    link: ''
  }
];



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
id='home'
images={p1}
content={<Welcome/>}
bottomContent={<BottomWelcomeText/>}
/>

<ContentCarousel
id='accommodation'
images={p2}
content={<LuxuryLiving/>}
bottomContent={<BottomText2/>}
/>

<ApplicationForm/>








<Footer
links={navLinks}
/>






    </main>
  );
}

export default Home
