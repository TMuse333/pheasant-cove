import React, {  useState } from "react";
import { motion, Variants } from "framer-motion";
import useIntersectionObserver from '../intersectionObserver/intersectionObserver'
import {Link} from 'react-router-dom'
interface TextFormatProps {
  isAnimated: boolean ,
  reverse: boolean 
}

const TextFormat: React.FC<TextFormatProps> = ({ isAnimated, reverse  }) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5,
  };
  const componentRef = useIntersectionObserver(setIsVisible,options)


  

  const pointVariants = (index: number): Variants => {
    return {
      initial: {
        opacity: 0,
        x: reverse ? 25 : -25
      },
      animate: {
        opacity: 1,
        x: 0,
        transition: {
          delay: index * 0.3
        }
      }
    };
  };

  // const textVariants: Variants = {
  //   initial: {
  //     opacity: 0,
  //     x: reverse ? 25 : -25
  //   },
  //   animate: {
  //     opacity: 1,
  //     x: 0,
     
  //   }
  // }


  const nullVariants: Variants = {
        initial:{

        },
        animate:{

        }
  }

  const points: string[] = [
    `Independent building on same lot as the owner’s main house
    `,
    '80 square metres of efficiently designed living space',
    'Never before occupied; high end finishes throughout; all furnishings new or like new',
    'Heated garage bar for your car and personal storage is included',
    'Enclosed laundry facility with stacked washer and dryer',

  ];

  return (
    <motion.article
      ref={componentRef}
      className="w-[70vw] pl-5 pr-5 relative mt-5 
   
    

 
      sm:mt-8  
       md:pl-8
     text-center

  "   
      
    >
       
     
      {/* <div className={`${reverse ? 'md:-translate-x-0' : 'md:translate-x-6'}`}> */}
      <motion.h1 className="text-2xl pb-5 text-center ml-0 bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
           text-3xl sm:text-5xl font-semibold ">
       Accommodations</motion.h1>
   
      <motion.ul className="text-left  pl-4 pt-5 list-disc pr-5
     ">
        {points.map((point, index) => (
          <motion.li className="text-white disc-none mb-2"
           key={index} 
          variants={isAnimated ? pointVariants(index) : nullVariants}
           initial="initial" 
           animate={isVisible ? "animate" : "initial"}
           >
            {point}
          </motion.li>
        ))}
        <Link to='display'>


         <motion.button
        className="mt-5 w-[150px] ml-0 bg-orange-400 rounded-none
        p-2 rounded-xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: isVisible ? 1 : 0 }}
        transition={{ delay: points.length * 0.3 }}
      >
        Learn more
      </motion.button>
      </Link>
      </motion.ul>
      {/* </div> */}
    </motion.article>
  );
};

export default TextFormat;