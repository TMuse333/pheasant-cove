import React, { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather";
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';


interface CarouselProps {
    images: {
        url:  string,
      
        title: string,
        description: string,
        link: string
    }[],
    hasDescription?: boolean
    // width:number,
    // height:number
 
}

const Carousel: React.FC<CarouselProps> = ({ images, hasDescription,
     }) => {

    const [shift, setShift] = useState<number>(0);
    const [currentImage, setCurrentImage] = useState<number>(0);
    const [leftClicked, setLeftClicked] = useState<boolean>(false);
    const [leftEdgeShift, setLeftEdgeShift] = useState<number>(-100);
    const [leftEdgeCase, setLeftEdgeCase] = useState<boolean>(true);
    const [rightClicked, setRightClicked] = useState<boolean>(false);
    const [rightEdgeShift, setRightEdgeShift] = useState<number>(0);
    const [carouselClicked, setCarouselClicked] = useState(false);

    function handleCarouselClick() {
        setCarouselClicked(!carouselClicked);
        console.log('carousel clicked');
    }

    function handlePrevClick() {
        setLeftClicked(true);
        setRightClicked(false);

        if (shift === 0) {
            setLeftEdgeCase(true);
        } else {
            setShift(prev => prev + 1);
            setCurrentImage(prev => prev - 1);
        }
    }

    function handleNextClick() {
        setRightClicked(true);
        setLeftClicked(false);
        if (shift === -images.length + 1) {
            setShift(0);
            setCurrentImage(0);
        } else {
            setShift(prev => prev - 1);
            setCurrentImage(prev => prev + 1);
        }
    }

    useEffect(() => {
        if (shift === 0 && rightClicked) {
            console.warn('carousel wrapping!');
        }

        if (leftEdgeCase && rightClicked) {
            setLeftEdgeCase(false);
        }

        if (shift === -images.length + 1) {
            setCurrentImage(images.length - 1);
            setRightEdgeShift(100);
        } else {
            setRightEdgeShift(shift * 100);
        }

        if (leftEdgeCase === true && leftClicked === true) {
            setLeftEdgeCase(false);
            setCurrentImage(images.length - 1);
            setShift(-images.length + 1);
            setCurrentImage(images.length - 1);
            setLeftEdgeShift(0);
        }

        if (shift === 0) {
            setLeftEdgeShift(-100);
            setCurrentImage(0);
        } else {
            setLeftEdgeShift((shift * 100) + (100 * (images.length - 1)));
        }

        console.log('shift', shift);

    }, [leftEdgeCase, shift, currentImage, leftClicked, rightClicked, images.length]);

    const shouldApplyTransition = (index: number) => {
        return !(
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








    return (
        <>
            <section
            aria-label="Image carousel"
                className={`w-screen  
           
                flex flex-col md:flex-row  ml-auto mr-auto
                justify-center items-center 
                mb-5 ${!carouselClicked ? 'max-w-[1300px] md:w-[90vw] relative' : 'bg-black z-[90] h-screen fixed top-0 left-0'}`}>

                <div className={`mt-10 ml-auto mr-auto flex relative ${hasDescription ? 'md:w-[60%]' : 'w-[100%]'}`}
                 role="region"
                 aria-labelledby="carousel-heading">

                    <div className={`flex relative justify-center items-center ml-auto mr-auto 
                        ${!carouselClicked ? `
                        w-[90vw]
                        max-h-[804px]
                        h-[95vw]
                        max-w-[900px] 
                        max-h-[420px]
                       ` : 'w-screen  h-[80vh]'}
                         overflow-hidden`}>

                        {images.map((image, index) => (
                          <React.Fragment
                          key={index}>

                        
                                {/*this dictates the height and width of the image*/}
                                <div className={`
                                    ml-auto mr-auto mb-auto absolute top-0
                                   
                                    ${!carouselClicked ? `w-[100vw] h-[80vw]
                                    max-h-[400px] 
                                    md:max-h-[620px]` : 'w-[100vw]  h-[100vw] '}
                                    ${ shouldApplyTransition(index)
                                    ? 'transition-transform duration-1000' : ''}`}
                                  
                                    role="img"
                                    aria-label={image.title}
                                    
                                    style={{
                                        transform: `translateX(${index === images.length - 1 ? leftEdgeShift :
                                            index === 0  ? rightEdgeShift :
                                            (shift * 100) + (100 * index)}%)`,
                                    }}
                               
                                >

                                    <img
                                  onClick={handleCarouselClick}
                                    alt='lol'
                                        src={image.url}
                                        className={`
                                            ${!carouselClicked ? ` w-[100%] 
                                            max-w-[805px]
                                            max-h-[624px]
                                            h-[100%]`
                                            : `w-[100vw] 
                                           
                                            max-w-[1400px] ml-auto mr-auto max-h-[900px]
                                           `}
                                            object-cover object-bottom
                                            ${index === 5 ? 'object-top' : 'object-bottom'}
                                            ml-auto mr-auto`} />


                                </div>
                                </React.Fragment>
                        ))}

                      
                       

                        <div className={`${!carouselClicked ? `
                        w-[100%] absolute top-0 h-[100%]
                        max-h-[550px]
                       z-[20]
                        max-w-[900px] ` : ' w-screen max-w-[1575px] h-screen relative'} 
                        `}>

                            <button  aria-label="Previous image"
                            className='bg-transparent p-0 absolute left-0 top-[50%] text-white'>
                                <ChevronLeft onClick={handlePrevClick} size={40} />
                            </button>
                            <button aria-label="Next image"
                            className='bg-transparent p-0 absolute right-0 top-[50%] text-white'>
                                <ChevronRight onClick={handleNextClick} size={40} />
                            </button>
                          
                        </div>
                        <button
                         aria-label={carouselClicked ? 'Collapse carousel' : 'Expand carousel'}

className='absolute bottom-[10%] bg-gray-200 p-2 rounded-xl
text-black'
 onClick={handleCarouselClick}>
   {carouselClicked ? 'Collapse' : 'Expand'}
</button>
                       

                    </div>

                </div>

                {hasDescription && (
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentImage}
                            className="w-[100%] relative md2:w-[50%] md:-translate-y-[5rem] ml-auto md2:-translate-x-[2rem] mr-auto"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.7 }}
                        >
                            <h1 className='md2:text-left md2:pl-5 text-center'>{images[currentImage].title}</h1>
                            <p className="text-white text-center pl-5 pr-5 pt-5 md2:pr-0 pl-0 md2:text-left">
                                {images[currentImage].description}
                                <br />
                                {images[currentImage].link !== '' && (
                                    <Link to={images[currentImage].link} className=''>
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

export default Carousel;
