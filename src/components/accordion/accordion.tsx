import React, {useState} from 'react'
import {motion, Variants} from 'framer-motion'
import useIntersectionObserver from '../intersectionObserver/intersectionObserver'

interface Props {
    text: {
        title:string,
        description: string
    }[],
    hasIntro:boolean,
    intro?: string | null,
    description?: string | null

}

const Accordion: React.FC<Props> = ({text,
hasIntro,intro,description}) => {

    const [inView, setInView] = useState(false);

//  const {isMobile} = useGeneralContext()

  // Configure intersection observer options
  const options = {
    root: null,
    rootMargin: '0px',
    threshold:  0.7,
  };

  // Use the custom hook to get a ref and observe intersection
  const componentRef = useIntersectionObserver(setInView, options);

    const [expandedIndices, setExpandedIndices] =
    useState<number[]>([])

     function handleSectionClick(index:number){
        if(expandedIndices.includes(index)){
            const newExpandedIndices = expandedIndices.filter((i) => i !== index);
            setExpandedIndices(newExpandedIndices);
        }
        else{
            const newExpandedIndices = [...expandedIndices,index]
            setExpandedIndices(newExpandedIndices)
        }
     }

     const listVariants = (index: number): Variants => {
        return {
          initial: {
            opacity: 0,
          x:30
          },
          animate: {
            opacity: 1,
            x: 0,
            transition: {
              delay: index * 0.4
            }
          }
        };
      };


    return (
        <>
        <article className='flex flex-col justify-start items-center
        mb-5'>

       
        {hasIntro && (
            <div>
            <h1 className='text-2xl bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
           text-4xl sm:text-5xl font-semibold text-center'>{intro}</h1>
            <p className='text-left  md:text-center pl-4 pr-5 mt-5
           w-[100%] max-w-[900px]'>{description}</p>
            </div>
        )}
        <section className='mt-[3rem]'
        ref={componentRef}>
            {text.map((text,index:number) => (
                <div key={index}
              
                onClick={()=>handleSectionClick(index)}
                className={`border-b-4 border-orange-400 p-3 mb-3 transition-all
                w-[80%] ml-auto mr-auto
                hover:bg-orange-400 hover:rounded-lg max-w-[500px]
                flex flex-col justify-center items-center ${expandedIndices.includes(index) ? 'bg-orange-400 rounded-lg' : ''}`}>
                    <motion.h2 
                    variants={ listVariants(index) }
                    initial='initial'
                    animate={inView ? 'animate' : 'initial'}
                    className='mb-3 mr-auto pl-4 
                    '
                    >{text.title}</motion.h2>
                    <p   onClick={()=>handleSectionClick(index)}
                    className={`
                     duration-500 bg-orange-500 text-left
                      w-[50%] pl-5 pr-5 rounded-md
                      sm:w-[100%]  max-w-[500px]
                   
                     ${expandedIndices.includes(index) ?
                         'h-[250px] overflow-scroll pt-4 transition-[height]' : 'h-[0px] overflow-hidden text-blue-200 pt-0'}`}
                    >{text.description}</p>
                </div>
            ))}

        </section>
        </article>
        </>
    )
}

export default Accordion