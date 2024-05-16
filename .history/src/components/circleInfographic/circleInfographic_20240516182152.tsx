import React from "react";
// import ball from '../../media/futuristic-money-ball-removebg-preview.png'
// import { motion,Variants} from 'framer-motion'
// import useIntersectionObserver from "../intersectionObserver/intersectionObserver";
import pheasant from '../media/pheasant.jpeg'
import {circleInfographicDescriptions} from '../../data/data'
interface CircleProps {
    image:string,
    title:string,
    description:string
}

const CircleElement: React.FC<CircleProps> = ({image,
title, description}) => {

    // const [inView, setInView] = useState<boolean>(false)

    // const options = {
    //     root: null,
    //     rootMargin: '-25px',
    //     threshold: 0.6,
    // };

    // Apply intersection observer hook to detect when the component is in view
    // const componentRef = useIntersectionObserver(setInView, options);

  

    return (
        <div
    
         className={`mt-5 mb-5 p-0
         overflow-x-hidden
        rounded-full bg-[#071f26] hover:bg-[#0e3a47]
        mr-auto ml-auto 
        h-[95vw] w-[95vw] border border-[#2dc0eb]
        flex flex-col  shadow-xl max-w-[360px] 
        max-h-[360px]
        sm:w-[48vw] sm:h-[48vw]
        xl:w-[32vw] xl:h-[32vw]
        relative z-10
      glow`}

        >
        {/*        ${inView ? 'glow' : ''}`}*/}
            <div className="mt-4">
            {/* <img className="w-[35vw]
            max-w-[115px] max-h-[115px] h-[35vw]
            sm:w-[10vw] sm:h-[10vw] object-cover 
            mr-auto ml-auto"
            src={image}
            /> */}
            <h1 className="text-3xl  2xl:text-2xl ">{title}</h1>
            <p className=" ml-auto mr-auto text-sm sm:text-xs pr-5 pl-5 mt-3 sm:mt-6">
                {description}
            </p>
            </div>
        </div>
    )
}




export const CircleInfoGraphic:React.FC = ({

}) => {

    return (
        <>
          <div className="mt-5
        w-[90vw] h-[5px]
         bg-gradient-to-r from-[#003647] via-[#3e7384] to-[#003647]
        ml-auto mr-auto rounded-[200rem]
        ">
           
       </div>
        <section className={`flex
         justify-center flex-col items-center
          sm:grid sm:grid-cols-2 xl:grid-cols-3
           gap-4 lg:gap-0 w-screen max-w-[1500px]  ml-auto mr-auto
          `}>
            <CircleElement
            {...circleInfographicDescriptions[0]}
            image={ball}
            />
             <CircleElement
              {...circleInfographicDescriptions[1]}
            image={ball}/>
                  <CircleElement
                  {...circleInfographicDescriptions[2]}
            image={ball}/>
             <CircleElement
             {...circleInfographicDescriptions[3]}
            image={ball}/>
             <CircleElement
             {...circleInfographicDescriptions[4]}
            image={ball}/>
                  <CircleElement
                  {...circleInfographicDescriptions[5]}
            image={ball}/>
        </section>
        {/* <div className="mt-5
        w-[90vw] h-[5px]
         bg-gradient-to-r from-[#003647] via-[#3e7384] to-[#003647]
        ml-auto mr-auto rounded-[200rem]">
           
       </div> */}
       </>
    )
}