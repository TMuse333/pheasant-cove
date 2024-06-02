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
        className={`w-screen text-white h-[800px]
        relative flex flex-col items-center justify-start
        bg-center 
        `}
  
        >
            <div className=" rounded-2xl"
            // style={{ backgroundColor: 'rgba(128, 128, 128, 0.7)' }}
            >
            <h1 className="text-5xl text-center">Terms of lease</h1>
          
            <p className="mt-4 text-left pl-4 pr-4
            text-2xl
            max-w-[800px]"></p>

            <div className="flex flex-col
            sm:flex-row w-screen sm:justify-around">

      

            <section className="bg-blue-800 mb-4
            pt-5 pb-5 pl-3 w-[90vw]
            sm:w-[40vw]">
                <ul>
                {terms1.map((term, index) => (
                    <li className="mb-4"
                    key={index}>
                        {term}
                    </li>
                ))}
                </ul>
            </section>

            <section  className="bg-blue-800 mb-4
            pt-5 pb-5 pl-3 w-[90vw]
            sm:w-[40vw]">
                <ul>

               
            {terms2.map((term, index) => (
                    <li key={index}
                    className='mb-4'>
                        {term}
                    </li>
                ))}
                 </ul>

            </section>

            </div>

        

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