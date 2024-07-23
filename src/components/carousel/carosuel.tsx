import React, {useEffect, useState} from 'react'
import { ChevronLeft, ChevronRight } from "react-feather";
import {motion, AnimatePresence} from 'framer-motion'
import {Link} from 'react-router-dom'
interface CarouselProps {
    images:{
        url:string,
        
        title:string,
        description:string
        link:string
     
      
    }[],
    hasDescription?:boolean

}



const Carousel:React.FC<CarouselProps> = ({images,
hasDescription}) =>{

    const [shift,setShift] = useState<number>(0)

    const [currentImage, setCurrentImage] = useState<number>(0)

    const [leftClicked, setLeftClicked] = useState<boolean>(false)
    
    const [leftEdgeShift, setLeftEdgeShift] = useState<number>(-100)

    const [leftEdgeCase, setLeftEdgeCase] = useState<boolean>(true)

    const [rightClicked, setRightClicked] = useState<boolean>(false)



    const [rightEdgeShift, setRightEdgeShift] = useState<number>(0)


    const shouldHaveTransition = (index:number) => {
        return (
          (index === 0 && rightEdgeShift === 100 && !leftClicked) ||
          (index === images.length - 1 && leftEdgeShift === -100 && !rightClicked) ||
          (shift === -images.length + 1 && leftClicked && !(index === 0 || index === images.length - 1)) ||
          (rightEdgeShift === -100 && index === 0 && !rightClicked) ||
          (leftEdgeShift === 100 && rightClicked && index === images.length - 1) ||
          (shift === 0 && rightClicked && index !== 0 && index !== images.length - 1) ||
          (shift === -1 && rightClicked && index === images.length - 1) ||
          (shift === -images.length + 2 && index === 0 && leftClicked)
        );
      };

      const [cooldown, setCooldown] = useState(false);

    useEffect(() => {
        let cooldownTimer: NodeJS.Timeout;
        if (cooldown) {
            cooldownTimer = setTimeout(() => {
                setCooldown(false);
            }, 750); // Adjust the cooldown duration (in milliseconds) as needed
        }

        return () => {
            clearTimeout(cooldownTimer);
        };
    }, [cooldown]);

      
       
    function handlePrevClick(){

        if(cooldown){
            return
        }

        setLeftClicked(true)
       setRightClicked(false)

        if(shift === 0){
            setLeftEdgeCase(true)
        }
        else{
            setShift(prev => prev +1)
            setCurrentImage(prev => prev - 1)
        }

        setCooldown(true)
    }

    function handleNextClick(){

        if(cooldown){
            return
        }

        setRightClicked(true)
        setLeftClicked(false)
        if(shift === -images.length +1){
            setShift(0)
            setCurrentImage(0)
        }

        else{
            setShift(prev => prev - 1);
            setCurrentImage(prev => prev + 1)
            // setCurrentImage(prev => prev + 1)
        }

        setCooldown(true)
       
       

}

        useEffect(()=> {

            if(shift === 0
                && rightClicked
                
                ){
                   
                    // console.warn('carousel wrapping!')
                }
                else{
                    
                }

            if(leftEdgeCase && rightClicked){
                setLeftEdgeCase(false)
            }

     
            if(shift === -images.length + 1){
             
               setCurrentImage(images.length - 1)
                setRightEdgeShift(100)
            }
            else{
                
                    setRightEdgeShift(shift * 100)
            }
     

         if(leftEdgeCase === true &&
            leftClicked === true){
                
               
                setLeftEdgeCase(false)
               setCurrentImage(images.length -1)
                setShift(-images.length +1)
                setCurrentImage(images.length -1)
               setLeftEdgeShift(0)
         
            //    setLeftClicked(false)

            }

         

            if(shift === 0){
               
                setLeftEdgeShift(-100)
                setCurrentImage(0)
               
                
            }

      else{
       
        setLeftEdgeShift((shift * 100)
        +(100 * (images.length -1)))
       
      }

    



    


        },[leftEdgeCase,shift,currentImage,leftClicked])

        return (
            <>
              <section className='w-[90vw] md:w-[45vw] bg-red-200 h-[90vw] md:h-[45vw] max-w-[500px] max-h-[500px]  relative mb-auto flex flex-col md:flex-row ml-auto mr-auto md:ml-0 mt-auto justify-center items-center'>
                <div className='flex relative w-[90vw] md:w-[45vw] max-w-[500px]
                 h-[90vw] md:h-[45vw] md:max-h-[500px]'>
                  <section className='flex relative justify-center items-center ml-auto mr-auto w-[100vw] md:w-[50vw] max-w-[500px] z-3 overflow-hidden aspect-square'>
                    {images.map((image, index) => (
                      <div
                        className={`w-full h-full absolute ${shouldHaveTransition(index) ? '' : 'transition-transform duration-1000'} mt-auto mb-auto top-0`}
                        key={index}
                        style={{
                          transform: `translateX(${index === images.length - 1 ? leftEdgeShift : index === 0 ? rightEdgeShift : (shift * 100) + (100 * index)}%)`,
                        }}
                      >
                        <img
                          src={image.url}
                          className='top-0 w-full h-full object-cover
                          '
                        />
                      </div>
                    ))}
                    <div className='relative z-3 w-full flex justify-between items-center h-full'>
                      <button className='bg-transparent p-0 hover:scale-[1.5] hover:text-blue-300 transition-all'>
                        <ChevronLeft onClick={handlePrevClick} size={50} />
                      </button>
                      <button className='bg-transparent p-0 hover:scale-[1.5] hover:text-blue-300 transition-all'>
                        <ChevronRight size={50} onClick={handleNextClick} />
                      </button>
                    </div>
                  </section>
                </div>
        
                {hasDescription && (
                  <AnimatePresence mode='wait'>
                    <motion.div
                      key={currentImage}
                      className='w-full md2:w-[50%] md:-translate-y-[5rem] ml-auto mr-auto'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.7 }} // Adjust duration as needed
                    >
                      <h1 className='md2:pl-5'>{images[currentImage].title}</h1>
                      <p className='text-white text-center pl-5 pr-5 pt-5 md2:pr-0 pl-0 md2:text-left'>
                        {images[currentImage].description}
                        <br />
                        {images[currentImage].link !== '' && (
                          <Link to={images[currentImage].link}>
                            <button className='mt-5 text-left'>Check it out</button>
                          </Link>
                        )}
                      </p>
                    </motion.div>
                  </AnimatePresence>
                )}
              </section>
            </>
          );
}

export default Carousel