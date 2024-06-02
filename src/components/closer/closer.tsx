import Link from "next/link";
import React from "react";
// import { Link } from "react-router-dom";



interface Props {
    image:string,
    // title:string,
    // description:string,
    // buttonText:string,
    // destination:string

}

const terms1 = 
   [
        'One-year, fixed-term lease with a possibility of renewal',
        'Standard, Nova Scotia lease',
        '$1,250 security deposit, payable at signing of lease',
        '$2,500 per month, payable on or before the 1st of each month',
        'Single bay for your car and personal storage items is included', 
    ]

    const terms2 = [
        'Heat, hot water, electricity, propane, and high-speed internet are included',
        'Use of hiking trail and kayak is included',
        'Smoking or vaping tobacco, canabis, or other controlled substances is not permitted',
        'Pets are not permitted',
        'Care of the facility is required'  
    ]


const Closer: React.FC<Props> = ({image,}) => {

    return (
        <section style={{
            backgroundImage:`url(${image})`,
            
        }}
        className={`w-screen text-white 
        relative flex flex-col items-center justify-start
        bg-center pb-12
        `}
  
        >
            <div className=" mt-8 max-w-[1400px] ml-auto mr-auto"
            // style={{ backgroundColor: 'rgba(128, 128, 128, 0.7)' }}
            >
            <h1 className="text-center mb-12
            bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent 
            text-4xl sm:text-5xl font-semibold text-center">Terms of lease</h1>
          
            <p className="mt-4 text-left pl-4 pr-4
            text-2xl
            max-w-[800px]"></p>

            <div className="flex flex-col
            sm:flex-row w-[100%] sm:justify-around">

      

            <section className="bg-radial-gradient from-blue-600 to-blue-700 mb-4
            pt-5 pb-5 pl-3 w-[90vw] max-w-[450px] h-[350px]
            sm:w-[40vw] border-2 border-orange-400 mr-auto ml-auto mb-8">
                <ul className="list-disc ml-5">
                {terms1.map((term, index) => (
                    <li className="mb-4"
                    key={index}>
                        {term}
                    </li>
                ))}
                </ul>
            </section>

            <section className="bg-radial-gradient from-blue-700 to-blue-700  mb-4
            pt-5 pb-5 pl-3 w-[90vw] max-w-[450px]  h-[350px]
            sm:w-[40vw] border-2 border-orange-400 mr-auto ml-auto">
                <ul className="list-disc ml-5">

               
            {terms2.map((term, index) => (
                    <li key={index}
                    className='mb-4'>
                        {term}
                    </li>
                ))}
                 </ul>

            </section>

            </div>

            <p className="text-left pl-5 pr-5 w-[90vw]
            md:text-center md:pl-0 md:pr-0 ml-auto
            mr-auto mt-10 text-lg
            ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam porro aperiam dolorum iusto, quas laboriosam non amet sit culpa eveniet nam voluptatem aliquid deleniti commodi ad libero reprehenderit, aspernatur modi voluptatibus cum. Suscipit ea deserunt dolores, repellat eum molestias. Odit earum ea ipsum eius aliquid eaque, nulla laudantium libero vel!
                <br/>
                <Link href='/property'>
            <button className=" text-left bg-orange-500 p-3
            rounded-xl mr-auto ml-auto mt-8">
                Fill an application
            </button>
        </Link>
            </p>

      

            {/* <Link to={destination}>
                <button className="mt-4">
                   {buttonText}
                </button>
            </Link> */}
            </div>
        </section>
    )
}

export default Closer