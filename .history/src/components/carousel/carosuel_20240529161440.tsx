import React, {useEffect, useState} from 'react'
import { ChevronLeft, ChevronRight } from "react-feather";
import {motion, AnimatePresence} from 'framer-motion'
import {Link} from 'react-router-dom'
interface CarouselProps {
    images:{
        url:string,
        imageIndex:number
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


    // const updatedImages = images.map((image, ) => ({
    //     ...image,
    //     transformValue: (shift * 100) + (100 * image.imageIndex)
    // }));

    const [carouselClicked, setCarouselClicked] = useState(false)

    function handleCarouselClick() {
        setCarouselClicked(!carouselClicked)
        console.log('carosuel clicked')
    }

 
    function handlePrevClick(){

        setLeftClicked(true)
       setRightClicked(false)

        if(shift === 0){
            setLeftEdgeCase(true)
        }
        else{
            setShift(prev => prev +1)
            setCurrentImage(prev => prev - 1)
        }
    }

    function handleNextClick(){

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
       
       

}

        useEffect(()=> {

            if(shift === 0
                && rightClicked
                
                ){
                   
                    console.warn('carousel wrapping!')
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
        // console.warn('the left edge case is not longer true')
      }

    



    console.log('shift',shift)
    // console.log('left edge shift',leftEdgeShift)
    // console.log('current image',currentImage)


        },[leftEdgeCase,shift,currentImage,leftClicked])

        // ( updatedImages[index].transformValue === 0 || (updatedImages[index].transformValue === 100 && image.imageIndex !== images.length -1)
        // || image.imageIndex === 0 && leftClicked
        // ) && (leftClicked && updatedImages[index].transformValue !== 100)

    return (
        <>

        <section
        className={`w-screen  
        flex flex-col md2:flex-row ml-auto mr-auto

          justify-center items-center
         
        mb-5 ${!carouselClicked ? 'max-w-[1300px] relative' : 'bg-black z-[90] h-screen fixed top-0 left-0'}`}>

      

       <div className={`mt-10
        flex 
       relative 
       ${hasDescription ? 'md:w-[50%]' : 'w-[100%]'}`}>
       
      
        <section className={`flex relative
        justify-center items-center ml-auto 
        mr-auto 
       ${!carouselClicked ? `
       w-[70vw]
       max-h-[804px]
      h-[95vw]
    
       max-w-[900px] 
       max-h-[420px]
       md:max-h-[550px]` : 'w-screen h-[90vh]'}
        overflow-hidden
        `}>

       
        {images.map((image,index) => (
            <>

            {/*this dictates the height and width of the image*/}
   <div className={`
       

     ml-auto
        mr-auto
        mb-auto
  
   absolute  top-0

   ${!carouselClicked ? `w-[90vw]   h-[80vw]
  
  max-h-[400px]
   md:max-h-[520px]` : 'w-[100vw] h-[100vw]'}

   ${ (index=== 0 && rightEdgeShift
    === 100 && !leftClicked
  ) 
  || 
  (image.imageIndex === images.length -1 
    && leftEdgeShift === -100 && !rightClicked)

    || ( shift === -images.length + 1 && leftClicked
        && !(index === 0 ||
            index === images.length -1)

     ||(rightEdgeShift === -100 && index
      === 0 && !rightClicked))

     || (leftEdgeShift === 100 && rightClicked &&
        index === images.length -1) 
     || 

     (shift === 0 && rightClicked &&
        index !== 0 && index !== images.length - 1
        )

        || (shift === -1 && rightClicked && index === images.length -1)

        || (shift === -images.length +2 && index === 0
            && leftClicked)
      
  ? '' : 'transition-transform duration-1000'}




   `}
   
   key={index}
   style={{
    transform: `translateX(${index=== images.length - 1 ? leftEdgeShift : 
        index === 0 ? rightEdgeShift :
        (shift * 100) + (100 * index)}%)`,

   }}
   onClick={handleCarouselClick}
>
       <img
       
        src={image.url}
       className={`
       ${ !carouselClicked ? ` w-[80%] 
       max-w-[405px]
       max-h-[424px]
  h-[100%]`
   : `
  w-[100vw] 
  max-w-[1400px]
  max-h-[1500px]
h-[100%]`}
       object-cover
       ${image.imageIndex === 5 ?
    'object-top' : 'object-bottom'}
      
       
       ml-auto mr-auto`}/>
   </div>



   </>
   
        ))}


        <div className='w-[90vw] absolute top-0  h-[90vw]
            max-h-[400px]

             md:max-h-[424px] absolute
                max-w-[400px]'>

    <button className='bg-transparent p-0 absolute left-0
top-[50%] text-white'>
        <ChevronLeft
            onClick={handlePrevClick}
            size={40}/>
        </button>
       
        <button className=' bg-transparent p-0 absolute right-0
        top-[50%] text-white'>
            <ChevronRight
            size={40}
            onClick={handleNextClick}/>
        </button>

        <button className='absolute bottom-[-15%]
        left-[50%] -translate-x-[50%]'
        onClick={handleCarouselClick}>
            {carouselClicked ? 'collapse' : 'expand'}
        </button>

        </div>

         </section>
     
       </div>

       {hasDescription && (
      <AnimatePresence mode='wait'>
      <motion.div
        key={currentImage}
        className="w-[100%] relative
         md2:w-[50%] md:-translate-y-[5rem]
    ml-auto
    md2:-translate-x-[2rem]
        mr-auto
  "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.7 }} // Adjust duration as needed
      >
        <h1 className='md2:text-left
        md2:pl-5'>{images[currentImage].title}</h1>
        <p className="text-white
        text-center pl-5 pr-5 pt-5
        md2:pr-0 pl-0 md2:text-left
       ">{images[currentImage].description}
       <br/>
       {images[currentImage].link !== '' &&  (
        <Link to={images[currentImage].link }
        className=''>
         <button className='mt-5
         text-left'
         >Check it out</button>
        </Link>
       )}
</p>

      
      </motion.div>

    </AnimatePresence>
       )}
       </section>


            </>
   
    )
}

export default Carousel