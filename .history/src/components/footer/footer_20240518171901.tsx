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
    <footer className='w-[calc(100vw-5px)] border relative
    '>
      <div className="flex justify-around
      w-screen">
      
        {links.map((link,index) => (

<Link key={index}
to={link.destination}>



            <p className='mt-8'>{link.title}</p>
            </Link>


        ))}
       
    

        
   
       
      </div>

      
      <p className='mt-6'>Pheasant Cove</p>
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
    </footer>
   
    </>
  );
};

export default Footer;