import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import { motion, useMotionTemplate, useMotionValue,
    animate } from "framer-motion";


interface links {
    links:{
        title:string,
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

    const pColor = useMotionTemplate`${color}`

    const backgroundColor = useMotionTemplate`${color}`

    const boxShadow = useMotionTemplate`0px 4px 24px ${color}`

    const [hovered, setHovered] = useState(false)

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
      relative mt-[8rem] 
      max-w-[800px]
      ml-auto mr-auto
      
    '>
      <div className="
      
      w-[screen] md:w-[50vw] max-w-[700px] ml-auto mr-auto flex flex-col 
        -translate-y-[3rem]">
        <h2 className='text-white
        text-2xl sm:text-4xl'>
            Site Map
        </h2>
      
        {links.map((link,index) => (

<Link key={index}
to={link.destination}>



            <p className='mt-2 hover:text-gray-400 md:text-2xl'>{link.title}</p>
            </Link>


        ))}
       
    

        
   
       
      </div>

      <section className='flex flex-col
      md:w-[50vw] items-center justify-center
     '>


      <p className='mt-6
      sm:text-2xl'>Pheasant Cove,
      The lake of the woods, Nova scotia</p>
      <Link 
            to='https://q3designs.netlify.app'>
                <motion.p
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
               
                style={{
                    boxShadow: hovered ? boxShadow : "none",
                    backgroundColor: hovered ? 'rgb(0, 0, 30)' : "transparent",
                    color:backgroundColor,
                }}
                className='w-[200px] ml-auto mr-auto mb-5 mt-5'   >
                Created by Q3 Designs
                </motion.p>
               
            </Link>
            </section>
    </footer>
   
    </>
  );
};

export default Footer;