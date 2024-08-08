import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionTemplate, useMotionValue,
    animate } from "framer-motion";


interface links {
    links:{
        name:string,
        destination:string,
    }[]
    
    
}

// interface FooterLink {
//     title: string;
//     links: Link[];
// }

// interface FooterProps {
//     links: FooterLink[];
// }

const colors = [
    "#0080ff", // Slightly darker shade of blue
    "#00ccff", // Lighter shade of blue
    "#7f5af0", // Slight purple shade
    "#d8a5ff", // Lighter shade of the slight purple
  ];


const Footer:React.FC<links> = ({links}) => {

    const color = useMotionValue(colors[0])

    // const pColor = useMotionTemplate`${color}`

    const backgroundColor = useMotionTemplate`${color}`

    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

    const [hovered, setHovered] = useState(false)
    function scrollToSection(destination: string) {
        const element = document.getElementById(destination);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    }

    const handleMouseEnter = () => {
        setHovered(true)
    }

    const handleMouseLeave = () => {
        setHovered(false)
    }
    
            useEffect(()=> {
                animate(color, colors, {
                    ease: 'easeInOut',
                    duration:10,
                    repeat:Infinity,
                    repeatType: 'mirror'
    
               })
            },[])
    

  return (
    <>
    <footer className='w-[calc(100vw-5px)]
      relative mt-[8rem]  text-white
  pb-12
      ml-auto mr-auto
      text-center
      bg-radial-gradient from-blue-700 to-blue-900
      font-arima 
    '>
      <div className="
      pt-8
      w-[screen] md:w-[50vw] max-w-[700px] ml-auto mr-auto flex flex-col 
       ">
        <h2 className='text-white
        text-2xl sm:text-5xl
        mb-4'>
            Site Map
        </h2>
      
        {links.map((link,index) => (





            <p key={index}
            onClick={()=>scrollToSection(link.destination)}
     
            className='mt-2 hover:text-orange-400 md:text-xl'>{link.name}</p>
           


        ))}
       
    

        
   
       
      </div>

      <section className='flex flex-col
       items-center justify-center
     '>


      <p className='mt-6
      sm:text-2xl'>Pheasant Cove,
      The lake of the woods, Nova scotia</p>
      <Link 
            to='https://q3designs.netlify.app'
            >
                <motion.p
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
               
                style={{
                    boxShadow: hovered ? boxShadow : "none",
                    backgroundColor: hovered ? 'white' : "transparent",
                    color:backgroundColor,
                }}
                className='w-[200px] ml-auto mr-auto mb-5 mt-5 p-3 rounded-xl'   >
                Created by Q3 Designs
                </motion.p>
               
            </Link>
            </section>
    </footer>
   
    </>
  );
};

export default Footer;