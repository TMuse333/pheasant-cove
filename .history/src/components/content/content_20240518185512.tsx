import React, { useEffect, useState, } from 'react';
import { Variants, motion } from 'framer-motion';
import useIntersectionObserver from '../intersectionObserver/intersectionObserver'

import { Link} from 'react-router-dom'

interface contentProps {
  image: string;
  customText: React.ReactNode;
  description?: string[] | null ;
  reverse?: boolean | null;
  mainTitle?: string | null;
  floatingImage?: boolean;
  hasAnimation: boolean;
  buttonText?: string;
  buttonLink?:string;
}

const Content: React.FC<contentProps> = ({
  image,
  customText,
  description,
  reverse,
  mainTitle,
  floatingImage,
  hasAnimation,
  buttonText,
  buttonLink
}) => {
  const [inView, setInView] = useState(false);


  const [isMobile, setIsMobile] = useState(window.innerWidth <= 655)

  useEffect(()=> {
    const handleResize = () => {
        setIsMobile(window.innerWidth <= 655)
    }

        handleResize()
        window.addEventListener('resize',handleResize)

        return () => {
            window.removeEventListener('resize',handleResize)
        }
  })

  // Configure intersection observer options
  const options = {
    root: null,
    rootMargin: '0px',
    threshold: isMobile ? 0.6 : 0.8,
  };

  // Use the custom hook to get a ref and observe intersection
  const componentRef = useIntersectionObserver(setInView, options);


  const imageVariants: Variants = {
    initial: {
      x: reverse ? 180 : -150,
      opacity: 0,
    },
    animate: {
      opacity: 1,
      x: reverse  && !isMobile? 0 : 0,
      y: floatingImage ? [0, -5, 0] : 0,
      transition: {
     

        opacity: {
        //   delay:1.75,
          duration: 2,
        },
        x: {
        //   delay:1.75,
          duration: 0.5,
          ease: 'easeInOut',
        },
        y: {
          delay: 2.45,
          duration: 2,
          repeat: Infinity,
          ease: 'easeInOut',
        },
      },
    },
  };

  const textVariants = (delay: number): Variants => {
    return {
      initial: {
        x: reverse ? -30 : 30,
        opacity: 0,
      },
      animate: {
        x: 0,
        opacity: 1,
        transition: {
          delay: delay,
        },
      },
    };
  };

  const headerVariants = (delay:number): Variants => {
    return {
    initial:{
        opacity:0,
    },
    animate:{
        opacity:1,
        transition:{
            delay:delay
        }
    }
  }
}

const nullVariant: Variants = {

}




  

  return (
    <article
      ref={componentRef}
      className={`flex flex-col justify-center align-center pt-8 pb-8
       relative mr-auto ml-auto
       md:w-[100vw] md:max-w-[1400px] sm:max-w-[668px]
        ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
    >
      <motion.img
        variants={hasAnimation ? imageVariants : nullVariant}
        initial={hasAnimation ? 'initial' : ''}
        animate={hasAnimation && inView ? 'animate' : ''}
        className={`w-[90vw] h-[55vw] object-cover ml-auto mr-auto max-h-[567px] max-w-[668px] md:w-[50vw]
        `}
        src={image}
      />

      {customText ? (
        <>
          {customText}
        </>
      ) : (
        <div className={`md:w-[40vw] ${!reverse ? 'md:mr-8' : ''}`} >
          <motion.h1
          
          variants={headerVariants(0)}
          initial={hasAnimation ? 'initial' : ''}
          animate={hasAnimation && inView ? 'animate' : ''}
           className="text-left pl-5 sm:pl-12 pt-5
           text-2xl md:text-4xl">{mainTitle}
           </motion.h1>
          <motion.p
          variants={textVariants(0.25)}
       initial={hasAnimation ? 'initial' : ''}
       animate={inView && hasAnimation? 'animate' : ''}
          className="mt-6 pl-5 text-left sm:pl-12 whitespace-pre-line">
            {description != null ? description[0] :
              'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate rem distinctio veniam doloribus placeat volup tatibus dolores deleniti consequuntur harum asperiores?'}
               </motion.p>
            <motion.p
             variants={textVariants(0.75)}
             initial={hasAnimation ? 'initial' : ''}
             animate={inView && hasAnimation? 'animate' : ''}
             className="mt-6 text-left pl-5 sm:pl-12"
             >
              {description != null ? description[1] :
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi provident odio labore recusandae est accusantium voluptatibus ad doloremque! Quo corrupti cum delectus ad praesentium minus voluptates soluta consectetur perspiciatis veniam? Pariatur vel, error cum possimus ad asperiores inventore obcaecati suscipit.'}
                <br/>
                {buttonLink && (

        
                <Link to={buttonLink}>

             
                <motion.button
                  variants={headerVariants(1.5)}
                  initial={hasAnimation ? 'initial' : ''}
                  animate={hasAnimation && inView ? 'animate' : ''}
                 className="mt-6 ">{buttonText }
                 </motion.button>
                 </Link>
                         )}
            </motion.p>
            
         
        </div>
      )}
    </article>
  );
};

export default Content;